---
title: "NEXIAM — Slide Redesign Proposal (IPO Consolidation, Phrase-Only)"
date: 2026-07-03
tags: [nexiam, defense, presentation, slides]
draft: false
summary: "Slide restructure for NEXIAM defense deck: consolidate IPO, remove layers, expand background slides with minimal bullet phrases. Reference for editing NEXIAM.odp."
layout: layouts/post.njk
---

# NEXIAM Slide Redesign Proposal

**Change:** Merge current Slides 5 (Conceptual Framework — 6 layers) and 6 (IPO Diagram with Layer column) into **one IPO-only slide**. Remove layers column. Expand Slides 2-3 (Background).

**Rule:** All slide text = minimal phrases only. No full sentences. Matches presentation guidelines.

---

## New Slide Structure (13 slides total)

| # | Slide Title | Presenter | Time |
|---|-------------|-----------|------|
| 1 | Title | David | — |
| 2 | Problem — Global & National | **David** | **~1:10** |
| 3 | Problem — At ISPSC Tagudin | **David** | **~1:10** |
| 4 | Objectives of the Study | **David** | **~0:30** |
| 5 | **Conceptual Framework (IPO)** | **David** | **~0:35** |
| 6 | Scope and Limitation | Jaypee | ~1:15 |
| 7 | Beneficiaries | David | ~0:40 |
| 8 | Research Design & Software Model | Jaypee | ~1:15 |
| 9 | Project Plan | Jaypee | ~0:30 |
| 10 | Population and Locale | Christine | ~1:00 |
| 11 | Research Instrument (TAM) | Christine | ~0:45 |
| 12 | Data Analysis Techniques | Christine | ~1:00 |
| 13 | Closing | David | ~0:10 |
| | **Total** | | **~9:10** ✅ |

---

## SLIDE 2 — THE PROBLEM: GLOBAL & NATIONAL

**FIX: Slide header too long. Currently reads (159 chars):**
```
"Manual, paper-based admission testing isn't just slow — it creates real integrity risks and equity gaps for applicants who can't afford repeat trips to campus."
```
**Replace with short phrase:**
```
Paper-based testing → slow, integrity risks, equity gaps
```

**ALSO CHECK other slides for similar long visible text:**

- **Slide 4 (Objectives):** "To Develop NEXIAM: A Role-Based College Admission Testing System for the Guidance and Registrar Offices at ISPSC Tagudin" (128 chars) — trim to: "Develop NEXIAM: role-governed admission platform for ISPSC Tagudin"
- **Slide 6 (Scope/Limitation, Jaypee):** "Cloud-hosted — proctoring interface alone keeps offline resilience via service-worker caching" (94 chars) — maybe trim but Jaypee's content
- **Slide 7 (Beneficiaries):** "ISPSC, Registrar, Guidance, and Program Heads gain a faster, more compliant, real-time admission process." (105 chars) — trim to: "Institution: faster, compliant, real-time admission process"
- **Slide 8 (RAD, Jaypee):** "Diagnose the existing process first, then build and evaluate the solution against it." (85 chars) — Jaypee's content

**Builds (3 builds):**
```
[Build 1] Global shift to AI-assisted, cloud-based admission platforms
[Build 2] RA 10931 — Free Higher Education Act — increased admission volumes
[Build 3] RA 10173 — Data Privacy Act — data protection is a legal duty
```

**New (3 builds, replaces Build 2 with unified-platform reference):**
```
[Build 1] Global shift to AI-assisted, cloud-based admission platforms
           → ML applicant assessment validated (Lira et al., Science Advances)

[Build 2] RA 10931 increased admission volumes, strained staff and infrastructure
           → Unified platforms proven deployable across institutions (Adwan et al., 97% usability)

[Build 3] RA 10173 — Data Privacy Act — data protection is a legal duty
           → Regulatory floor governing all system design
```

**Phrasing rule for Build 2:** Main line = the policy reality. Sub-line = the validated solution precedent. Both are phrases, not sentences.

---

## SLIDE 3 — THE PROBLEM: AT ISPSC TAGUDIN

**Current (Builds 1-3 keep as-is, Build 4 rewrite):**
```
[Build 1] Hand-scoring delay — 5 days, up to 2 weeks per cycle
[Build 2] Results on Facebook, monitored during office hours only
[Build 3] Text-message coordination — no shared system or visibility

[Build 4] The gap — existing pieces, no integration
```
→ **Replace Build 4 with:**
```
[Build 4] Gap: components proven independently, integration missing
           → RAG chatbot: Dayata & Yap (IEEE COMNETSAT)
           → OMR scoring: Cuerdo (PH public schools)
           → K-Means routing: Tan (ACM)
           → No single governed pipeline exists
```

---

## SLIDE 4 — OBJECTIVES OF THE STUDY

**Keep current (already minimal phrases):**
```
[Build 1] SO1 — Analyze existing process, pinpoint gaps
[Build 2] SO2 — Determine system requirements from those gaps
[Build 3] SO3 — Evaluate user acceptance via TAM
[Build 4] SO4 — Test NEXIAM vs manual process significance
```

---

## SLIDE 5 — CONCEPTUAL FRAMEWORK (NEW — IPO ONLY)

**Replace old Slide 5 (6-layer grid) + old Slide 6 (IPO table with layers column).**

**New — three-column IPO, labels only (no sentences):**
```
┌─────────────────┐   ┌──────────────────────┐   ┌─────────────────────────┐
│     INPUT       │   │       PROCESS         │   │        OUTPUT           │
├─────────────────┤   ├──────────────────────┤   ├─────────────────────────┤
│ Campus data:    │   │ RAD Development:      │   │ NEXIAM Platform         │
│  • Applicant    │   │  Req. Planning →      │   │  • Role-based admission │
│    profiles     │   │  User Design →        │   │  • OMR + K-Means        │
│  • Exam scores  │   │  Rapid Construction → │   │  • RAG chatbot          │
│  • Manual       │   │  Cutover              │   │  • AI Scheduling        │
│    workflow     │   │                       │   │  • HMAC audit trail     │
│                 │   │ + TAM Evaluation      │   │                         │
│                 │   │  (Pre → Deploy → Post)│   │ + Research Results      │
│                 │   │                       │   │  • Paired TAM measures  │
│                 │   │                       │   │  • Performance delta    │
└─────────────────┘   └──────────────────────┘   └─────────────────────────┘
```

**Key differences from old slides:**
- No "Foundational Layer" label
- No six numbered layers
- No "Layer Category" column
- Just clean IPO flow matching the manuscript
- All labels minimal — no sentences, no verbs beyond labels

---

## SLIDE 7 — BENEFICIARIES (was Slide 8)

**Keep current (already minimal):**
```
[Build 1] Institution — faster, compliant admission process
[Build 2] Applicants — 24/7 portal, no repeat campus trips
[Build 3] Research community — replicable blueprint for SUCs
```

---

## What To Edit in NEXIAM.odp

1. **Slide 5:** Replace the 6-layer grid + 7 animations with a clean 3-column IPO diagram. Remove all layer labels.
2. **Slide 6:** DELETE this slide (IPO table with layers column — no longer needed).
3. **Slide 2:** Replace Build 2 text — add Adwan unified-platform reference as sub-line.
4. **Slide 3:** Replace Build 4 gap text — use three-line named-precedent format.
5. **Slide numbers:** Update from /14 to /13 after deleting old Slide 6.
6. **Slide 7 (Scope):** Jaypee's slide, keep as-is, just renumber.
7. **Slide 8 (Beneficiaries):** Renumber to Slide 7.

**VERIFY BEFORE SAVING:** All slide text = phrases only (max ~5 words per bullet). No exceptions.
