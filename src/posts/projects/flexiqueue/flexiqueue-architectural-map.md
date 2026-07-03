---
title: "Flexiqueue Architectural Map"
date: 2026-07-02
tags: [laravel, architecture, flexiqueue, svelte, queue-management]
summary: "The big-picture architecture of Flexiqueue — a queue management system for government social welfare offices. Four surfaces, service layer composition, state machine pattern, and offline-first edge sync."
layout: layouts/post.njk
---

# Flexiqueue Architectural Map

Lesson 1 of N — The big picture before the details. Read this first, then explore any area deeper.

---

## What This System Is

**Flexiqueue** is a queue management system for government social welfare offices (MSWDO). It replaces paper tickets and manual shouting with a coordinated multi-surface system: kiosks, display TVs, staff panels, and mobile status pages — all communicating over WebSockets on a local LAN.

> **Mission connection:** Flexiqueue and SecureCAT-v2 share the same stack (Laravel 12 + Inertia v2 + Svelte 5). Every architectural pattern here — service layer, WebSocket strategy, offline resilience, role-based access — has a direct analog in SecureCAT-v2. The goal is to extract *why* each pattern was chosen.

---

## The Four Surfaces

Flexiqueue coordinates four distinct client interfaces:

| Surface | Hardware | Role |
|---------|----------|------|
| **Kiosk** | Orange Pi + thermal printer | Walk-up ticket claiming |
| **Display Board** | TV + Orange Pi + speakers | Show "Now Serving" + TTS announcements |
| **Staff Panel** | Desktop browser (any PC) | Call next, serve, transfer, complete |
| **Mobile** | Student phone browser + PWA | Check queue status, indoor map |

```
┌─────────────────────────────────────────────────────┐
│                  LOCAL LAN SERVER                     │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────┐  │
│  │  SQLite DB   │  │ Laravel App  │  │  Reverb WS  │  │
│  │  (edge)      │  │ (inertia +   │  │  (realtime) │  │
│  │  MariaDB     │  │  svelte 5)   │  │             │  │
│  │  (central)   │  └──────┬───────┘  └─────┬───────┘  │
│  └──────┬───────┘         │                 │          │
└─────────┼─────────────────┼─────────────────┼──────────┘
          │                 │                 │
     ┌────▼────┐      ┌────▼────┐      ┌────▼────┐
     │  Kiosk  │      │ Display │      │  Staff  │
     │(Pi+Prn) │      │(TV+Spkr)│      │  Panel  │
     └─────────┘      └─────────┘      └─────────┘
```

---

## Architecture Layers (Laravel Standard + Extensions)

### 1. Routes → Controllers

The route file (`routes/web.php`, 595 lines) is heavily commented with cross-references to specification documents. Routes are grouped by permission middleware, not by surface:

- `permission:admin.manage` — Program/station/token CRUD, analytics, print/TTS settings
- `permission:platform.manage` — Super-admin platform settings (TTS budgets, ElevenLabs)
- `permission:admin.shared` — Users, sites, logs, RBAC (shared between admin and super_admin)
- `permission:staff.operations` — Session lifecycle (bind, call, serve, transfer, complete, cancel)
- `permission:profile.self` — User profile, PIN/QR override, password
- `permission:dashboard.view` — Dashboard stats
- `permission:auth.supervisor_tools` — Temporary PIN/QR generation
- No auth — Public routes (kiosk, display, status check, triage)

> **For SecureCAT-v2:** Flexiqueue's permission middleware pattern (Spatie groups per route group, not per route) is cleaner. Consider grouping your AI and ML endpoints behind `permission:ai.manage`.

### 2. Controller → Service Layer

Controllers are thin. Business logic lives in 50+ service classes under `app/Services/`:

| Service | Responsibility |
|---------|---------------|
| `SessionService` | Queue session lifecycle (1,261 lines — the largest) |
| `FlowEngine` | Pure state machine: given a session, what's the next station? |
| `StationQueueService` | Queue ordering: priority lanes, alternate ratio, FIFO |
| `StationSelectionService` | Which station should handle a process? |
| `EdgeModeService` | Detects if running on edge (Pi) vs central |
| `EdgePairingService` | Device pairing: QR code, approval, token claim |
| `ProgramService` | Program lifecycle and settings |
| `TokenService` | Token generation, bulk operations, TTS regeneration |
| `IdentityBindingService` | Anon token → identity registration flow |

> **For SecureCAT-v2:** Services depend on other services via constructor injection (`SessionService` takes `FlowEngine`, `StationSelectionService`, etc.). This composes domain logic from small, testable units.

### 3. The FlowEngine (State Machine Pattern)

The `FlowEngine` is a pure routing algorithm — 74 lines with no database writes:

```
// Simplified:
function calculateNextStation(Session $session) {
    // 1. If session has override_steps (custom path), use those
    // 2. Otherwise, query TrackStep where step_order = current + 1
    // 3. If TrackStep has a process_id, return it
    // 4. Return null = flow complete
}
```

- **Normal flow:** Token → Track (e.g. "Registration") → ordered TrackSteps
- **Override flow:** Supervisor assigns override_steps for one-off routing
- **Process → Station selection:** Decouples work types from physical desks

---

## Core Data Model

```
┌──────────┐    ┌──────────┐    ┌──────────────┐
│ Program   │───>│  Track   │───>│  TrackStep    │
│ (active)  │    │(service) │    │(ordered step) │
└──────────┘    └──────────┘    └──────┬───────┘
       │                               │
       │                         ┌─────▼──────┐
       │                         │  Process    │
       │                         │ (work type) │
       │                         └──────┬──────┘
       │                                │
       │                         ┌──────▼──────┐
       │                         │  Station     │
       │                         │ (desk/window)│
       │                         └──────┬──────┘
       │                                │
┌──────▼──────┐                  ┌──────▼──────┐
│    Token     │                  │   Session    │
│ (unique QR)  │<────────────────>│(queue_sessns)│
└──────────────┘   bound to       └──────┬──────┘
                                          │
                                   ┌──────▼──────┐
                                   │TransactionLog│
                                   │ (append-only)│
                                   └─────────────┘
```

**Key schema decisions:**
1. **Token → Session separation** — A token is a static identifier (printed QR). A session is a dynamic journey. Decouples identity from state.
2. **Append-only TransactionLog** — Every queue action is INSERT-only. Gives COA-compliant audit trails.
3. **Program settings as JSON** — Flexible per-program config without schema migrations.
4. **Station ↔ Process M:M** — Decouples physical desk layout from workflow definition.

---

## Realtime (WebSocket) Architecture

Flexiqueue uses **Laravel Reverb** on edge and **Pusher** on central. The `.env` file switches between them.

**Key events:** `NowServing`, `QueueLengthUpdated`, `ClientArrived`, `StatusUpdate`, `StationActivity`

> **For SecureCAT-v2:** Reverb vs Pusher dual-config means you can develop with Pusher (no daemon) and deploy with Reverb (no external dependency). Perfect for AI Companion realtime chat.

---

## RBAC & Authorization

Built on Spatie Laravel Permission with custom sync layer:

- **Super Admin** (`platform.manage`) — Platform-level settings, integrations
- **Admin** (`admin.manage`) — Program/station/token CRUD, analytics
- **Shared** (`admin.shared`) — Users, sites, logs
- **Staff** (`staff.operations`) — Session operations
- **Supervisor** (`auth.supervisor_tools`) — Temporary PIN/QR generation
- **Device-level auth** — API tokens for edge devices

---

## Edge vs Central (Offline-First)

| | Edge (Orange Pi) | Central (cloud) |
|---|---|---|
| Database | SQLite | MariaDB |
| WebSocket | Laravel Reverb | Pusher |
| Internet needed? | No — 100% offline | Yes |
| Sync | Pushes transaction logs → central | Receives + replays |
| Detection | `EdgeModeService` runtime | N/A |

The edge sync is **transaction-log-based push**: the edge inserts into `transaction_logs`, and a background job POSTs unsynced logs to central (`POST /api/edge/sync`). No conflict resolution needed — each site's tokens are scoped by site ID.

> **For SecureCAT-v2:** For offline OMR scanning on a Pi, consider transaction-log push rather than full DB replication. Scope records by device ID.

---

## Key Architectural Patterns Summary

| Pattern | Flexiqueue Implementation | Why It Matters |
|---------|--------------------------|----------------|
| Service Layer Composition | Services inject services; controllers inject services | Unit-testable domain logic |
| State Machine | FlowEngine: pure function session → next station | Centralized routing logic |
| Process/Station Separation | M:M pivot, selection service picks best station | Decouples workflow from layout |
| Append-Only Audit | TransactionLog: INSERT-only | Tamper-proof logging |
| Dual WebSocket Driver | .env switch: Reverb / Pusher | Dev with cloud, deploy without |
| JSON Settings Columns | Program.settings as JSON | No migrations for new config |
| Permission Route Grouping | Groups by permission, not surface | One middleware per group |
| Transaction-Log Sync | Edge pushes logs; central replays | Simple offline sync |

---

## Recommended Next Steps

1. Read `routes/web.php` — the comments are mini-ADRs explaining *why* each group exists
2. Trace a session lifecycle — `SessionService::bind()` → `FlowEngine` → `SessionService::call()` → `StationQueueService`
3. Examine the TransactionLog migration and its indexed columns
4. Study the EdgeDevice flow — `EdgePairingService`, `EdgeModeService`, `routes/api.php`
5. Ask me about any of these — I'm here to help
