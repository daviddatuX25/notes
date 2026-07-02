---
title: "FlexiQueue Architecture Review"
date: 2026-07-02
tags: flexiqueue, architecture, refactor, codebase-design, session-service
summary: "Codebase architecture review of FlexiQueue using the improve-codebase-architecture methodology. Five candidates identified with before/after diagrams. Top recommendation: decompose SessionService (1,261 lines, god module)."
layout: layouts/post.njk
---

# FlexiQueue Architecture Review

Deepening opportunities — turning shallow modules into deep ones

Generated July 2, 2026 · Laravel 12 + Inertia v2 + Svelte 5 · 54 services, 40 models, 140 migrations

## Statistics

| Metric | Value |
|--------|-------|
| Services | 54 |
| Largest Service | 1,261 lines |
| Models | 40 |
| Total Service LOC | 9,553 |

---

## Candidate 1: SessionService — God Module (Strong)

**Files:** `app/Services/SessionService.php`, `app/Services/FlowEngine.php`, `app/Services/StationSelectionService.php`, `app/Services/IdentityBindingService.php`

### Problem
SessionService is **1,261 lines** and handles 12+ distinct responsibilities: session lifecycle (bind, call, serve, transfer, complete, cancel), holding area management, no-show tracking, override routing, custom path reassignment, event broadcasting, queue position calculation, track step resolution, and process-vs-station dual-read logic. Every method follows the same pattern: validate state → DB transaction → mutate → create TransactionLog → fire 3–5 events → return. The *interface* is nearly as complex as the *implementation* — this is a shallow module.

### Solution
Extract three deep modules from SessionService:

- **SessionLifecycleService** — bind, call, serve, complete, cancel, force-complete. Pure state machine transitions with guard clauses.
- **SessionRoutingService** — transfer, override, overrideByTrack, reassignToTrack, reassignToCustomPath. Wraps FlowEngine + StationSelectionService + custom path logic.
- **SessionBroadcastService** — all the event-firing and TransactionLog creation extracted behind a single `record()` or `dispatch()` seam.

### Benefits
- **Locality**: Each sub-module groups related concerns so you don't bounce between bind/call/transfer/hold/no-show to understand one flow.
- **Leverage**: The broadcast seam becomes the single place to add audit logging, analytics hooks, or WebSocket filtering.
- **Testability**: Each sub-module is independently testable with focused assertions instead of testing a 1,200-line class.

---

## Candidate 2: StationQueueService — Mixed Concerns (Strong)

**Files:** `app/Services/StationQueueService.php`

### Problem
StationQueueService (526 lines) mixes three distinct responsibilities: **queue ordering algorithms** (FIFO, priority-first, alternate-ratio), **station listing with queue counts**, and **presentation formatting** (formatServingSession, formatWaitingSession, formatHoldingSession). The `getQueueForStation()` method alone is ~120 lines — it queries sessions, applies ordering, computes stats, builds authorizer lists, and formats output all in one call. The alternate-ratio ordering logic even queries TransactionLog internally to compute recent call history.

### Solution
Extract two deep modules:

- **QueueOrderingPolicy** — encapsulates FIFO, priority-first, and alternate-ratio algorithms. Accepts a collection of sessions + program settings, returns ordered collection. No DB queries inside — pure algorithm.
- **StationQueueFormatter** — all format* methods extracted. Takes a Session, returns an array. Pure mapping, no side effects.
- StationQueueService becomes a thin orchestrator: query → order → format.

### Benefits
- **Locality**: The ordering algorithm is its own module — you can reason about FIFO/alternate/priority without reading station listing code.
- **Leverage**: QueueOrderingPolicy becomes testable with pure input/output (no DB needed for algorithm tests).
- **Deletion test**: Deleting QueueOrderingPolicy would concentrate ordering complexity back into StationQueueService — a signal it's real.

---

## Candidate 3: Event Broadcasting Boilerplate (Worth Exploring)

**Files:** `app/Services/SessionService.php`, `app/Events/*.php` (17 events), `app/Listeners/*.php` (3 listeners)

### Problem
Every SessionService method manually constructs 3–5 events with nearly identical patterns: `event(new StatusUpdate(...))`, `event(new QueueLengthUpdated(...))`, `event(new StationActivity(...))`. The StationActivity constructor alone takes 10 parameters. This boilerplate is duplicated across bind, call, serve, transfer, complete, cancel, hold, resume, no-show, override, and enqueueBack. Each copy slightly varies which events fire and with which parameters.

### Solution
Create a **SessionEventBus** that accepts a high-level intent ("client called at station X") and fans out the correct events. Each action type maps to a set of events, and the bus handles parameter construction.

### Benefits
- **Leverage**: Adding a new event (e.g., analytics webhook) requires one change in the bus instead of 12 methods.
- **Locality**: Event dispatch rules are in one place instead of scattered.
- **Testability**: Assert "when X happens, events Y and Z fire" without mocking individual event constructors.

---

## Candidate 4: TTS Subsystem — Latent Deep Module (Worth Exploring)

**Files:** `app/Services/TtsService.php`, `app/Services/ElevenLabsClient.php`, `app/Jobs/GenerateTokenTtsJob.php`, `app/Jobs/GenerateStationTtsJob.php`, `app/Models/TtsAccount.php`, `app/Models/TtsPlatformBudget.php`, `config/tts.php`

### Problem
TTS is already a near-subsystem (TtsService 291 lines, ElevenLabsClient 173 lines, 2 jobs, 3+ models, config, budget tracking, per-site usage rollups). But it's scattered across `app/Services/`, `app/Jobs/`, `app/Models/`, and `config/` with no clear namespace boundary. SessionService also reaches into TTS via TokenTtsSettingRepository and AnnouncementBuilder. The subsystem is *almost* deep — it just needs a proper boundary.

### Solution
Move TTS into a bounded namespace: `App\Services\Tts\` containing TtsService, ElevenLabsClient, AnnouncementBuilder, and a TtsFacade or interface that SessionService calls through. The jobs stay in `app/Jobs/Tts/`. This creates a clear seam: everything behind the Tts interface can be swapped (e.g., switching from ElevenLabs to another provider).

### Benefits
- **Deletion test**: Deleting the Tts namespace would break announcements, token audio, station TTS, budget tracking, and usage rollups — it concentrates real complexity.
- **Seam**: Provider swap becomes a one-class change.
- **Testability**: Mock the Tts interface in SessionService tests instead of dealing with 5+ TTS-related dependencies.

---

## Candidate 5: RBAC Context Switching (Speculative)

**Files:** `app/Services/RbacContextService.php`, `app/Services/SpatieRbacSyncService.php`, `app/Services/PermissionRequestService.php`, `app/Services/UserProvisioningService.php`, `app/Support/PermissionCatalog.php`

### Problem
RBAC logic is spread across 5 services. `RbacContextService` does `setPermissionsTeamId()`/`unsetRelation()` to switch Spatie's team context — a fragile pattern that can leak if an exception fires between set and unset. `SpatieRbacSyncService` handles sync. `PermissionRequestService` (251 lines) manages the approval workflow. The PermissionCatalog is a flat constant file. There's no single module that owns "what can user X do in context Y."

### Solution
Wrap the team-context switching in a try/finally block inside RbacContextService (immediate fix). Longer-term, consider an **AuthorizationContext** value object that carries site + program + user and answers "can this user do X?" — replacing the global state mutation pattern.

### Benefits
- **Testability**: An AuthorizationContext value object is trivially testable without global state.
- **Locality**: All permission checks in one mental model instead of scattered setPermissionsTeamId calls.

---

## Top Recommendation: Start with Candidate 1 (SessionService)

SessionService is the **gravitational center** of FlexiQueue. Every user action (scan QR, call next, serve, transfer, complete) flows through it. It's 1,261 lines of interleaved state transitions, event dispatch, and audit logging. Extracting the three sub-modules (Lifecycle, Routing, Broadcast) is the highest-leverage refactor because:

- **Every future feature** touches SessionService — making it deeper pays compound interest.
- **The broadcast extraction** (Candidate 3) falls out naturally as part of this refactor — no need for a separate pass.
- **The deletion test** is unambiguous: deleting SessionService would collapse the entire application.
- **Test surface improves dramatically** — you can test state machine transitions, routing decisions, and event dispatch independently.

After SessionService, tackle Candidate 2 (StationQueueService) for the same reasons — the queue ordering algorithm is a distinct concept buried in presentation formatting.

---

*Architecture review by Hermes Agent · Based on Matt Pocock's codebase-design vocabulary*
