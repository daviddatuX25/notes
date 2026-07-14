---
section: "figures"
chapter: "Use Case Diagram"
status: "draft"
last_updated: "2026-07-14"
source: "NEXIAM_Phase2_Use_Case_Diagram_Revised.md (Phase 2)"
panel_changes: "Phase 2: 7 evaluated actors + 1 system-only (Super Admin). Guidance split into Counselor vs Admin. Registrar stripped of OMR/Scheduling. 'Authenticate' replaces 'Log-in'. 'Admission Support' replaces 'Decision-support Triage'."
---

# Use Case Diagram — NEXIAM Actors and Use Cases

## Use Case Inventory by Actor

### Applicant
- Authenticate
- Submit Application Form
- Query Chatbot
- Track Application Status

### Proctor *(duty overlay — not a distinct RBAC role)*
- Authenticate
- Scan QR for Attendance
- Monitor Exam Sessions

### Guidance Counselor
- Authenticate
- Schedule Exam Sessions
- Input OMR/CSV/Raw Scores
- Print Result Sheets
- Schedule Release and Consultation
- Configure Admission Support
- Analyze Admission Support Indicators
- Generate and View Reports

### Guidance Admin
- Configure Settings
- Authenticate
- Schedule Exam Sessions
- Input OMR/CSV/Raw Scores
- Print Result Sheets
- Schedule Release and Consultation
- Analyze Admission Support Indicators
- Generate and View Reports
- Review Audit Logs
- Create Guidance Counselor Accounts

### Program Head
- Authenticate
- Analyze Admission Support Indicators
- Manage Program Quotas
- Generate and View Reports
- Review Audit Logs

### Registrar Staff
- Authenticate
- Process Admission Entries
- Track Application Status
- Generate and View Reports

### Registrar Admin
- Configure Settings
- Authenticate
- Process Admission Entries
- Track Application Status
- Generate and View Reports
- Review Audit Logs
- Create Registrar Staff Accounts

### Super Admin *(system role — not evaluated, not in TAM)*
- Exists for explicit oversight access and future IT personnel assignment.
- No evaluation. No TAM items. No respondent.

## Guidance — Counselor vs Admin Split

| Use Case | Counselor | Admin |
|---|---|---|
| Configure Admission Support | ✅ | ❌ |
| Analyze Admission Support Indicators | ✅ | ✅ |
| Input OMR/CSV/Raw Scores | ✅ | ✅ |
| Schedule Exam Sessions | ✅ | ✅ |
| Print Result Sheets | ✅ | ✅ |
| Schedule Release & Consultation | ✅ | ✅ |
| Generate and View Reports | ✅ | ✅ |
| Configure Settings | ❌ | ✅ |
| Review Audit Logs | ❌ | ✅ |
| Create Guidance Counselor Accounts | ❌ | ✅ |

**TAM:** Single combined group (n=2 Guidance Office Personnel) covering both Counselor and Admin functions — 13 items (7 PU + 6 PEOU).

## Account Creation — Distributed Per Office

| Admin Role | Can Create |
|---|---|
| Registrar Admin | Registrar Staff accounts |
| Guidance Admin | Guidance Counselor accounts |
| Super Admin | All roles (future IT personnel) |

No centralized "Create User Accounts" use case. Account creation is scoped to each office's administrative tier.
