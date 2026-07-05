---
title: "FlexiQueue — Full Architecture Flags"
date: 2026-07-02
tags: [flexiqueue, architecture, rbac, multitenancy, edge, refactor]
summary: "Complete inventory of all architectural issues found in FlexiQueue: RBAC ambiguity, multitenancy bolt-on, central-edge sync overlap, god modules, and settings sprawl."
layout: layouts/post.njk
---

# FlexiQueue — Full Architecture Flags
# Before fixing anything, here's everything that's tangled

Generated July 2, 2026

---

## 1. RBAC / ACCESS CONTROL ISSUES

### 1A. Three-tier Spatie teams with global state mutation (FRAGILE)

RbacContextService, User, ProgramSupervisorGrantService, and
ProgramSupervisorPivotToProgramTeamSyncService all call
setPermissionsTeamId() / getPermissionsTeamId() to switch Spatie's
global team context.

  - 30 call sites across 5 files
  - Pattern: save previous → set team → do check → restore previous
  - Risk: if an exception fires between set and restore, the wrong
    team context leaks into subsequent checks
  - Some places use try/finally (good), some don't

FILES:
  app/Services/RbacContextService.php
  app/Models/User.php (withGlobalPermissionsTeam, hasSpatieRole)
  app/Services/ProgramSupervisorGrantService.php
  app/Services/ProgramSupervisorPivotToProgramTeamSyncService.php
  app/Http/Controllers/Api/Admin/RbacTeamUserPermissionController.php
  app/Http/Middleware/SetGlobalPermissionsTeam.php

### 1B. Role model is ambiguous — global role vs scoped permission

The User model has:
  - Spatie global roles (super_admin, admin, staff) via team_id=1
  - Spatie scoped permissions via RbacTeam (site teams, program teams)
  - A deprecated UserRole enum (legacy)
  - program_supervisors pivot table (deprecated, being migrated)
  - program_station_assignments (separate from RBAC)

The "role" attribute on User is a computed accessor that returns
primaryGlobalRoleName() — but this is the global team role only.
Supervisor status is a program-team permission, not a role.

PROBLEM: There's no single source of truth for "what is this user's
role?" The answer depends on which team context you're querying.

### 1C. PermissionCatalog has 12 permissions but some are "reserved"

  PLATFORM_MANAGE, ADMIN_MANAGE, ADMIN_SHARED, DASHBOARD_VIEW,
  AUTH_SUPERVISOR_TOOLS, STAFF_OPERATIONS, PROFILE_SELF,
  PUBLIC_DISPLAY_SETTINGS_APPLY, PUBLIC_DEVICE_AUTHORIZE,
  PROGRAMS_SUPERVISE, KIOSK_SESSION_CREATE, KIOSK_ACCESS

  - PUBLIC_DISPLAY_SETTINGS_APPLY is "reserved for policy / future"
  - PUBLIC_DEVICE_AUTHORIZE same
  - PROGRAMS_SUPERVISE is the program-scoped supervisor permission
  - KIOSK_* are for edge/kiosk mode

PROBLEM: The catalog conflates platform-level, site-level, and
program-level permissions into one flat list. There's no hierarchy
or scope annotation.

### 1D. Supervisor identity is split across two systems

  1. Program supervisors = users with `programs.supervise` on a
     program's RbacTeam (Spatie permission)
  2. Legacy program_supervisors pivot table (deprecated, migration
     2026_03_22_180000 drops it)
  3. ProgramStaffController manages staff assignment to programs

  - Program::allSupervisorUserIds() queries Spatie directly
  - ProgramStationAssignment is separate from RBAC
  - Staff can be assigned to stations via User.assigned_station_id
     OR via ProgramStationAssignment

PROBLEM: Station assignment has two paths (User model field vs pivot
table). Which is authoritative?

---

## 2. MULTITENANCY (site_id) ISSUES

### 2A. site_id was bolted on, not designed from the start

Migration 2026_03_13_200000 added site_id to programs and users.
Subsequent migrations added site_id to tokens, clients,
print_settings, program_default_settings, etc.

The scopeForSite() pattern on User and Program returns no rows when
site_id is null — meaning a user with no site sees nothing.

PROBLEM: Null site_id means "global" in some contexts (super_admin
sees everything) and "orphaned" in others (admin with no site sees
nothing). The semantics are inconsistent.

### 2B. No global site for super_admin

Super admins don't belong to a site (site_id = null), but they need
to see all sites. The current pattern is:
  - User::scopeForSite(null) returns empty (WHERE 1=0)
  - Super admin checks bypass site scoping via isSuperAdmin()
  - But many controllers manually check isSuperAdmin() before
    applying site scope

PROBLEM: Site scoping is not enforced at a middleware or global
scope level. It's manually applied per-controller, creating
inconsistency risk.

### 2C. Site model is thin — settings are a JSON blob

Site has: name, slug, api_key_hash, settings (JSON), edge_settings
(JSON), is_default.

  - No validation schema for settings/edge_settings
  - TtsBudgetPolicy reads from settings but no type safety
  - Edge settings are a separate JSON blob with no model

### 2D. Token → Program → Site chain is indirect

Tokens belong to a site (site_id) AND are assigned to programs
via program_token pivot. But a token's site_id must match the
program's site_id for recognition (enforced in SessionService::bind).

PROBLEM: Cross-site token rejection is enforced in application code
(SessionService), not at the database or model level.

---

## 3. CENTRAL-EDGE ARCHITECTURE ISSUES

### 3A. Two sync mechanisms that overlap

  1. EdgeEventPushService — real-time push of individual events
     to central /api/edge/event
  2. EdgeBatchSyncService — periodic batch push of all unsynced
     data to central /api/edge/sync

Both exist. EdgeEventPushService pushes on every action (with
fallback to EdgeSyncQueueItem for retry). EdgeBatchSyncService
collects everything since last_synced_at and pushes as a batch.

PROBLEM: When do you use which? Is it push-first with batch as
fallback? Or batch-primary with push for real-time? The relationship
between these two is unclear.

### 3B. EdgeDeviceState is a singleton (id=1)

EdgeDeviceState uses id=1 for the single edge device. Every setup,
pairing, and state update targets this single row.

PROBLEM: What if you need to support multiple edge devices per
deployment? The current architecture assumes one device per install.

### 3C. Edge sync direction is one-way (edge → central)

Edge pushes data TO central. Central never pushes TO edge except
during initial setup (package import). There's no conflict
resolution.

EdgeSyncQueueItem exists for retry, but there's no
EdgeSyncConflict model (the migration 2026_04_02_000006 created
edge_sync_queue but referenced edge_sync_conflicts).

PROBLEM: If central changes a program while edge is offline, the
edge has stale data with no way to know.

### 3D. Edge auth is device-token based, not user-based

Edge devices authenticate with a device_token (bearer token).
Supervisors on edge get admin access via supervisor_admin_access
flag on EdgeDeviceState. There's no per-user auth on edge.

PROBLEM: Edge mode assumes shared-device usage. If a supervisor
logs in, the whole device gets admin access. No session-level
user isolation.

### 3E. Edge mode checks are scattered

EdgeModeService is the canonical check (isEdge, isOnline, isOffline,
canCreateClients, etc.), but:
  - EdgeBootGuard middleware checks isEdge()
  - Controllers manually check edge mode
  - SessionService has edge-specific logic (identity binding
    fallback when offline)
  - EdgeForceCancelService exists separately

PROBLEM: Edge vs central logic is interleaved in business services
instead of behind a clean seam.

---

## 4. SESSION SERVICE GOD MODULE (already flagged in review)

  - 1,261 lines, 12+ responsibilities
  - Lifecycle + routing + broadcast + audit all in one
  - Every method has 3-5 event dispatches
  - TransactionLog creation is boilerplate

---

## 5. STATION QUEUE SERVICE MIXED CONCERNS (already flagged)

  - 526 lines, ordering algorithms + formatting + stats
  - getQueueForStation is ~120 lines
  - Alternate-ratio logic queries TransactionLog internally

---

## 6. PROGRAM SETTINGS SPRAWL

  - ProgramSettings support class reads from JSON column
  - Program model has 15+ deprecated getter methods
  - ProgramDefaultSettings table exists separately
  - EdgeDeviceState has its own settings
  - Site has settings + edge_settings

PROBLEM: Settings live in 4 places (Program JSON, ProgramDefaultSettings
table, Site JSON, EdgeDeviceState). No single schema, no validation,
no type safety.

---

## 7. EVENT BROADCASTING BOILERPLATE (already flagged)

  - 17 event classes, 3 listeners
  - StationActivity constructor takes 10 parameters
  - Every SessionService method fires 3-5 events manually

---

## PRIORITY ORDER (suggested)

  1. RBAC context switching (1A) — security risk, fix try/finally first
  2. Central-edge sync clarity (3A, 3C) — design the data flow plan
  3. SessionService decomposition (4) — highest leverage refactor
  4. Multitenancy enforcement (2B) — add middleware/global scope
  5. Program settings consolidation (6) — reduce JSON sprawl
  6. StationQueueService (5) — extract ordering algorithm
  7. Event broadcasting (7) — centralize dispatch
  8. Edge subsystem cleanup (3D, 3E) — after central-edge plan

---

## WHAT TO DO FIRST

Before writing any code, you need a written plan for:

  A. RBAC end-state: What roles exist? What can each do at
     platform/site/program scope? (Currently implied but not documented)

  B. Central-edge data contract: What flows edge→central? What flows
     central→edge? When does each sync mechanism fire? What happens
     on conflict?

  C. Multitenancy rules: Who sees what? How is site_id enforced?
     What does null site_id mean?

These three documents would prevent further architecture drift.
