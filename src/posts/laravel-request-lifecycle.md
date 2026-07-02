---
title: "Laravel Request-Response Lifecycle"
date: 2026-07-02
tags: [laravel, architecture, securecat, svelte, inertia]
summary: "A deep trace of how a SecureCAT page goes from URL to rendered browser — the 9-stage Laravel pipeline from public/index.php through middleware, routing, controllers, policies, Inertia, and Svelte."
layout: layouts/post.njk
---

# Lesson 1: The Laravel Request-Response Lifecycle

Tracing a real SecureCAT page from URL to browser.

> **Mission:** Understand how a URL like `/admin/exam-scheduling` becomes a fully rendered HTML page in the browser. This is the single most important mental model for Laravel development.

---

## Why this matters

Every framework has a "pipeline" — a fixed sequence of steps every request goes through. When you know the pipeline, you stop guessing. You know *exactly* where to add a feature, where to fix a bug, and why errors happen at certain stages.

## The route we're tracing

From `routes/web.php`:

```php
Route::middleware('role:super_admin,registrar_administrator,test_administrator,proctor')
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        Route::get('exam-scheduling', [ExamSessionController::class, 'index'])
            ->name('admin.exam-scheduling.index');
    });
```

---

## The full pipeline (9 stages)

### Stage 1: Entry — `public/index.php`

Every request to Laravel arrives here. Apache/Nginx rewrites all URLs to this file. It loads Composer's autoloader, then bootstraps the Laravel application instance and kernel.

```php
// public/index.php (simplified)
$app = require __DIR__.'/../bootstrap/app.php';
$kernel = $app->make(Kernel::class);
$response = $kernel->handle(
    $request = Request::capture()
)->send();
$kernel->terminate($request, $response);
```

*Junior note:* You'll almost never edit this file. It's the "engine starter" — just know it exists and that `$kernel->handle()` is where the pipeline begins.

### Stage 2: Kernel — `app/Http/Kernel.php`

The HTTP Kernel defines middleware stacks. Every request passes through:

- **Global middleware** — runs on every request (trusted proxies, maintenance mode)
- **Web middleware group** — sessions, CSRF, cookies, `HandleInertiaRequests`
- **Route-specific middleware** — whatever you attach to the route itself

For our route, the effective stack is:
```
web group →
  auth →                    checks user is logged in
  role:super_admin,... →    checks user has one of these roles
  verified: true            (implicit)
```

### Stage 3: Middleware — `EnsureUserHasRole.php`

```php
class EnsureUserHasRole
{
    public function handle(Request $request, Closure $next, string ...$roles): Response
    {
        if (! $request->user()) {
            return redirect()->route('login');
        }
        if (! $request->user()->hasAnyRole($roles)) {
            abort(403, 'Unauthorized. Required role: '.implode(' or ', $roles));
        }
        return $next($request);
    }
}
```

Two checks, 15 lines of logic. Middleware is a **stack** (or "onion"). Each layer can pass the request inward (`$next($request)`) or short-circuit it. The response travels back *out* through the same layers in reverse.

### Stage 4: Routing — `routes/web.php`

The Router matches the URL path against all registered routes and calls the controller method.

```php
Route::get('exam-scheduling', [ExamSessionController::class, 'index'])
    ->name('admin.exam-scheduling.index');
```

The route name lets you generate URLs without hardcoding — `route('admin.exam-scheduling.index')` gives you `/admin/exam-scheduling`.

### Stage 5: Controller — `ExamSessionController::index()`

```php
public function index(Request $request): Response
{
    // 5a. Authorize via Policy
    $this->authorize('viewAny', ExamSession::class);

    // 5b. Determine if this is a proctor view
    $isProctorView = $user->hasAnyRole(['proctor'])
        && ! $user->hasAnyRole(['super_admin', 'registrar_administrator']);

    // 5c. Query with eager loading
    $query = ExamSession::query()
        ->with(['room:id,name,building,capacity', 'proctors:id,name'])
        ->orderBy('date')->orderBy('start_time');

    // 5d. Apply filters
    if ($request->filled('status')) {
        $query->where('status', $request->get('status'));
    }

    $sessions = $query->paginate(15)->withQueryString();

    // 5e. Render via Inertia
    return Inertia::render('Admin/TestScheduling/Index', [
        'sessions' => $sessions,
        'filters' => $request->only([...]),
    ]);
}
```

The controller doesn't build HTML directly — it gathers data and passes to Inertia. "Thin controller, fat service" pattern.

### Stage 6: Policy — `ExamSessionPolicy.php`

The `$this->authorize('viewAny')` call checks the policy. If it returns `false`, Laravel throws 403 before any data is queried.

```php
class ExamSessionPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->hasAnyRole([
            'super_admin', 'registrar_administrator',
            'test_administrator', 'proctor',
        ]);
    }
}
```

Two layers of authorization: middleware checks role at route level, policy checks at resource level. Defense-in-depth.

### Stage 7: Inertia Middleware — `HandleInertiaRequests.php`

Before Inertia sends the response, this middleware injects **shared props** — data available on every page:

```php
public function share(Request $request): array
{
    return array_merge(parent::share($request), [
        'auth' => ['user' => $authUser],
        'flash' => [
            'success' => $request->session()->get('success'),
            'error'   => $request->session()->get('error'),
        ],
        'csrf_token' => $request->session()->token(),
        'notifications' => $user?->notifications()->latest()->limit(20)->get(),
        'activeAcademicYear' => $this->resolveActiveAcademicYear(),
    ]);
}
```

These props are available in *every* Svelte page via `$page.props`.

*Watch out:* Avoid expensive DB queries here — they run on every page load.

### Stage 8: Inertia Rendering — Server to Client

Inertia turns the controller's data into a JSON payload:

- **First visit:** Renders a full Blade view that bootstraps the Svelte app with data as a JSON `data-page` attribute
- **Subsequent visits (SPA):** Sends JSON with `X-Inertia` header — client-side router swaps component without full reload

```json
{
  "component": "Admin/TestScheduling/Index",
  "props": {
    "auth": { "user": { "id": 1, "name": "admin" } },
    "sessions": { "data": [...], "meta": { ... } },
    "filters": { ... }
  },
  "url": "/admin/exam-scheduling",
  "version": "abc123"
}
```

### Stage 9: Svelte Page — `Index.svelte`

The Svelte component receives props from Inertia:

```svelte
<script>
  let { sessions, filters, statuses, breadcrumbParent } = $props();
  let search = $state(filters.search ?? '');
  let statusFilter = $state(filters.status ?? '');

  function applyFilters() {
    router.get('/admin/exam-scheduling', {
      search, status: statusFilter
    }, { preserveState: true });
  }
</script>
```

*Svelte 5 note:* `$props()` and `$state()` are **runes** — new reactivity primitives replacing the old `export let` syntax.

---

## Visual Summary: The Full Round-Trip

```
Browser
  │  GET /admin/exam-scheduling
  ▼
public/index.php                       ← Entry point
  │
  ▼
Global Middleware                      ← Trusted proxies, maintenance mode
  │
  ▼
Web Middleware Group                   ← Sessions, CSRF, cookies
  │
  ▼
auth Middleware                        ← Are you logged in?
  │  └─ redirect /login if not
  ▼
role Middleware                        ← Do you have the right role?
  │  └─ abort(403) if not
  ▼
Router                                 ← Match /admin/exam-scheduling
  │
  ▼
ExamSessionPolicy::viewAny()          ← Authorization check
  │  └─ abort(403) if denied
  ▼
ExamSessionController::index()         ← Business logic
  │  └─ ExamSession::query()->with(...)->paginate()
  │  └─ AcademicYear::active()
  │  └─ scheduleAssistantPayload()
  ▼
HandleInertiaRequests::share()         ← Shared props (auth, flash, etc.)
  │
  ▼
Inertia::render('...', $payload)       ← JSON + component name
  │
  ▼
Svelte Page Component                  ← Renders HTML
  │
  ▼
Browser renders DOM
```

---

## Where Technical Debt Hides

| Stage | What to Watch For |
|-------|-------------------|
| Middleware | `role` middleware runs *after* `auth`. Ordering matters when middleware queries the DB. |
| Controller | `$this->authorize('viewAny')` — if you forget this, any user could hit the page. |
| Eloquent | `->with(['room:id,...'])` prevents N+1 queries. N+1 is the #1 perf bug in Laravel. |
| Shared Props | `HandleInertiaRequests` queries on *every* page. Should be lazy-loaded or cached as project grows. |
| Controller Size | `ExamSessionController` is 1,012 lines. The private methods belong in a Service class. |
| Tests | Zero files in `tests/` — no safety net for refactoring. |

---

## Your Turn — Practice

1. Open `routes/web.php` and find the route for `/admin/grading`. What controller method? What middleware protects it?
2. Open `app/Http/Controllers/DashboardController.php`. Trace its `index()` method.
3. Check `resources/js/Pages/Dashboard.svelte` — what `$props()` does it expect?
4. Open `app/Http/Kernel.php` — what global middleware and middleware groups are defined?

**Follow up:** If anything is unclear, ask me directly. I can open any file and walk through it with you.
