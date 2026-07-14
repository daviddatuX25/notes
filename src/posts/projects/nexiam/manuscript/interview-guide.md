---
title: "NEXIAM Interview Guide — Requirements Gathering"
date: 2026-07-14
tags: [nexiam, interview, requirements, research, rad]
draft: false
summary: "Role-segmented interview guide for NEXIAM Requirements Planning. Four respondent groups (Guidance, Registrar, Program Heads, Applicants) with cross-role correlation matrix. Anchored to features.md for precise feature references."
layout: layouts/post.njk
---

# NEXIAM Requirements Gathering — Role-Segmented Interview Guide

**Phase:** RAD Requirements Planning → Bridging to User Design
**Date:** July 2026
**Reference:** `features.md` — the authoritative inventory of what's built (SecureCAT), extended, and new in NEXIAM. All feature section references below (e.g., §B.4) point to features.md sections.

**Purpose:** Cross-role corroboration of feature needs. Features are LOCKED from manuscript Scope & Limitations — documented in features.md. This interview validates fit across roles, not feasibility. It also collects surface-level design preferences for User Design.

**How to use this guide:**
- Each section targets ONE role. Ask all questions for that role before moving to the next.
- **[§B.4]** = see features.md Section B.4 (Grading & Scoring). Tells you what SecureCAT already has and what NEXIAM changes.
- **[§C.1]** = see features.md Section C.1 (new feature being built from scratch).
- **Cross-correlate** markers tell you: if Role A gives answer X, ask Role B their version.
- **[DESIGN]** markers feed User Design phase (mockups come later — this is surface-level preference gathering only).
- **[ARTIFACT]** markers tell you what to photograph, collect, or sketch.

---

## Quick Reference: features.md Map

| features.md Section | Feature | Interview Questions |
|---|---|---|
| B.1 | Applicant Portal (identifier key, mobile, RAG) | G11–G13, A4, A7–A8 |
| B.2 | Exam Sessions & Scheduling | G14–G15, R3 (RBAC side) |
| B.3 | Proctoring | (proctor questions consolidated under Guidance) |
| B.4 | Grading & Scoring (CSV → OMR) | G4–G6 |
| B.5 | Release Management + Email | R5, A6 |
| B.6 | Audit Trails (HMAC chaining) | F5 area — validation not design |
| B.8 | Roles & RBAC | G16–G17, R3–R4, P6 |
| C.1 | Computer-Vision OMR (new) | G4–G6 |
| C.2 | RAG Chatbot — Policy Only (new) | G11–G13, A4 |
| C.3 | Engine Registry (new) | G7–G10 (the two engines) |
| C.4 | Yukee Cluster Engine (new) | G7–G10, P1–P4 |
| C.5 | BGE Interest Engine (new) | G9–G10, A5 |
| C.6 | Triage Dashboard (new) | G9–G10, G16–G17 |
| C.7 | Program Head Dashboard (new) | P4, P7–P8 |
| C.9 | Email Notifications (new) | R5, A6 |
| C.10 | In-App Messaging (new) | (Role 1 Part D — additional requests) |

---

## ROLE 1: GUIDANCE PERSONNEL (Guidance Counselor, Guidance Administrator)

**Session length:** 45–60 minutes
**Who:** 1–2 Guidance staff (complete office complement — n=2)
**Bring:** Printed cluster-to-program mapping table, blank paper for workflow sketches, camera

### Part A: Current Workflow (SO1 — Process Mapping)

| # | Question | Purpose | Cross-correlate |
|---|---|---|---|
| G1 | "Walk us through a typical admission cycle — registration to result release. Every step. Where does it hurt?" | Baseline workflow mapping | Ask Registrar: "Guidance says [X] happens here. Is that how you experience it?" |
| G2 | "When was the last time something went wrong with scoring or scheduling? What happened?" | Gap evidence — specific, dated | Ask Registrar: "Were you affected by that?" |
| G3 | "Show us where you store things — answer sheets, score records, consultation notes. Walk us to it." **[ARTIFACT: photos]** | Process mapping artifact | |

### Part B: Feature Corroboration

#### OMR Scoring Engine [§B.4 → C.1]

| # | Question | Context (from features.md) | Cross-correlate |
|---|---|---|---|
| G4 | "SecureCAT already imports scores via CSV. NEXIAM will scan the actual paper answer sheet — you feed it through a scanner and the system reads the bubbles. Walk us through how scoring works today — receiving sheets to recording scores." | **SecureCAT:** CSV import exists (`ScoreImportController`). **NEXIAM:** Replaces with real image scanning (C.1). Same grading session structure — just different input method. | Ask Registrar: "After Guidance scores, what's the handoff to you?" |
| G5 | "How many answer sheets per batch? Per cycle? Is it the same sheet for all applicants, or different per program?" | Informs batch size and answer sheet template design. | |
| G6 | "If the computer flags a bubble as uncertain — smudge, half-erased — who should review it?" | Informs confidence threshold + verification workflow. | |

#### Admission Support Models [§C.3, C.4, C.5, C.6]

| # | Question | Context (from features.md) | Cross-correlate |
|---|---|---|---|
| G7 | "You'll see TWO panels on one screen during counseling: left side shows the applicant's aptitude cluster — Math-dominant, Language-dominant, etc. — with recommended programs. Right side shows how well the applicant's stated interests match each program. You see both. You decide. Does this approach — two signals, you integrate — match how you think about placement?" | **New features C.4+C.5.** No SecureCAT equivalent. Aptitude = K-Means (Yukee). Interest = BGE sentence embedding. Both adopted, not trained by us. | Ask Program Heads: "Guidance sees [X]. Would you want the same or different?" |
| G8 | "Here's the draft cluster-to-program mapping." **[ARTIFACT: hand them printed mapping table to mark up]** "Mark any row you'd change. For example, Math-Dominant → BSIT, BSCE, BS Math — does that hold in your experience?" | **C.4 mapping table.** THE critical domain validation. | Show same table to Program Heads (P1–P2). Triangulate. |
| G9 | "If the Interest Engine says BSIT at 92% but the Aptitude Engine says Language-dominant, what do you do?" | Tests how counselors weight conflicting signals. Feeds into Triage Dashboard design (C.6). | |
| G10 | "During counseling, what information would you want on ONE screen — scores, cluster, interest, quotas, notes?" **[DESIGN]** | Surface-level preference for C.6 Triage Dashboard layout. | |

#### RAG Chatbot [§B.1 → C.2]

| # | Question | Context (from features.md) | Cross-correlate |
|---|---|---|---|
| G11 | "SecureCAT's AI Companion answers questions and suggests courses. NEXIAM's chatbot will ONLY answer from ISPSC policy documents — deadlines, requirements, where to submit. No course recommendations. That stays with you. What are the top 5 questions you wish the chatbot COULD answer so applicants stop asking you?" | **SecureCAT:** AI Companion does RAG + course recs (B.1). **NEXIAM:** Policy-only RAG, declines below confidence (C.2). | Ask Applicants (A4): "Guidance says you ask [X]. True?" |
| G12 | "If the chatbot can't answer — below confidence — should it route the question to you, or show a 'Contact Guidance Office' message?" | Informs fallback routing for C.10 in-app messaging. | |
| G13 | "What question should the chatbot ABSOLUTELY NEVER answer — where you want the human touch?" | Informs content boundaries — feeds into RAG prompt design. | Ask Applicants: "Would you accept 'talk to Guidance' for [X]?" |

#### AI-Assisted Scheduling [§B.2]

| # | Question | Context (from features.md) | Cross-correlate |
|---|---|---|---|
| G14 | "Who creates the exam schedule today — you or Registrar? Walk us through the last time a conflict happened." | **SecureCAT:** Schedule Assistant with AI chat exists (B.2). **NEXIAM:** Same pattern — AI proposes, human confirms. | Ask Registrar: "Guidance says scheduling starts with [you/them]. Correct?" |
| G15 | "What's the worst scheduling complaint you've received from an applicant or proctor?" | Gap evidence for scheduling. | |

### Part C: Design Surface [DESIGN]

| # | Question |
|---|---|
| G16 | "If you could arrange the Triage Dashboard however you want, what layout makes sense for counseling? Aptitude left, interest right? Scores on top?" |
| G17 | "When you open an applicant's profile, what should be the FIRST thing you see — scores, cluster, status?" |
| G18 | "Do you prefer more data on one screen, or fewer things with bigger text?" |

### Part D: Additional Requests (bounded by scope)

| # | Prompt |
|---|---|
| G19 | "Is there anything NEXIAM could do that we HAVEN'T mentioned — within admission testing only? We catalog it for the future." |

---

## ROLE 2: REGISTRAR PERSONNEL (Registrar Staff, Registrar Administrator)

**Session length:** 30–45 minutes
**Who:** 2–3 Registrar staff
**Bring:** Workflow sketch from Guidance interview, printed use case diagram

### Part A: Current Workflow + Handoff

| # | Question | Purpose | Cross-correlate |
|---|---|---|---|
| R1 | "Walk us through what happens when Guidance hands you scored results. What do YOU do?" | Handoff mapping — where Guidance ends, Registrar begins | Show them: "Guidance described the handoff as [X]. Accurate?" |
| R2 | "Where are physical records stored? Who has keys? Ever had records go missing?" **[ARTIFACT: photo]** | Data governance gap | |

### Part B: Feature Corroboration

| # | Question | Context (from features.md) | Cross-correlate |
|---|---|---|---|
| R3 | "NEXIAM separates Guidance from Registrar views — each office sees only its own data. Right now, can Guidance staff access Registrar records? Should they?" | **§B.8 Roles.** SecureCAT has role isolation. NEXIAM adds finer splits (Guidance Counselor vs. Admin, Registrar Staff vs. Admin). | |
| R4 | "When an applicant's status changes — 'results released' — who updates it today, and how do applicants find out?" | Informs status trigger for email notifications (C.9). | Ask Applicants: "Registrar says you find out via [X]. Your experience?" |
| R5 | "Do you currently send notifications? If we automated email on score release and schedule publish, would you want to review before send?" | **C.9 Email Notifications.** No SecureCAT equivalent. | |

### Part C: Design Surface [DESIGN]

| # | Question |
|---|---|
| R6 | "When processing an application, what information do you need on the first screen — without scrolling?" |
| R7 | "Do you work one applicant at a time, or batch-process?" |

### Part D: Additional Requests

| # | Prompt |
|---|---|
| R8 | "Anything we missed that would make your job easier — admission testing only?" |

---

## ROLE 3: PROGRAM HEADS (n=11)

**Session length:** 15–20 minutes each
**Who:** All 11, or minimum 5 across STEM/Business/Education/Arts
**Bring:** Individualized mapping table (show ONLY their program's row)

### Part A: Cluster-to-Program Mapping [§C.4 — THE critical validation]

| # | Question | Purpose |
|---|---|---|
| P1 | "Here's the cluster NEXIAM would map to YOUR program." **[ARTIFACT: show their row]** "Does this match what you look for in applicants?" | Domain expertise validation |
| P2 | "Is there a sub-test score that would make you say 'this applicant should NOT be in my program'?" | Negative criteria — refines mapping |
| P3 | "What qualities matter for success in your program that exam scores can't capture?" | Gap acknowledgment — documented limitation for Chapter 3 |
| P4 | "During admission season, would you want to see how many applicants are matched to your program BEFORE the final list?" **[§C.7 Program Head Dashboard]** | Pre-enrollment visibility interest |

### Part B: Cross-Correlation

| # | Question | Context |
|---|---|---|
| P5 | "Guidance told us [X cluster → Y program]. Does that align with what you see in students who succeed?" | Triangulate Guidance vs. Program Head |
| P6 | "Registrar described quota management as [X]. Does that reflect your program's actual capacity?" | Triangulate Registrar vs. Program Head |

### Part C: Design Surface [DESIGN]

| # | Question |
|---|---|
| P7 | "If you had a dashboard for your program's applicant pipeline, what ONE number would you want first?" |
| P8 | "Individual applicant scores, or aggregate numbers only?" |

### Part D: Additional Requests

| # | Prompt |
|---|---|
| P9 | "Anything NEXIAM could provide for your program during admissions?" |

---

## ROLE 4: APPLICANTS / FIRST-YEAR STUDENTS

**Session length:** 10–15 minutes each
**Who:** 8–15 first-year students who recently went through admission
**Bring:** Nothing — lightweight intercept

### Part A: Experience Reconstruction

| # | Question | Purpose | Cross-correlate |
|---|---|---|---|
| A1 | "How did you find out your exam schedule? Your results? Walk us through it." | Baseline — validates staff descriptions | Check against Guidance/Registrar |
| A2 | "Did you ever go to campus just to ask something you could've looked up online — if a portal existed?" | Gap confirmation | |
| A3 | "If you could check status and results from your phone, would you still want a printed slip?" | Print vs. digital preference | |

### Part B: Feature Corroboration

| # | Question | Context (from features.md) | Cross-correlate |
|---|---|---|---|
| A4 | "If a chatbot answered questions like 'deadline?' or 'what documents?' — but NOT 'what course should I take?' — would you use it, or prefer a person?" | **C.2 RAG Chatbot — policy only.** | Compare with G11–G13 |
| A5 | "How did you decide what program to apply for? Did anyone advise you, or did you just pick?" | **C.5 BGE Interest Engine relevance.** Does preference matching add value? | |
| A6 | "Do you have email and check it regularly? Would email results work for you, or is Facebook/text better?" | **C.9 Email Notifications viability.** | Compare with R5 |

### Part C: Design Surface [DESIGN]

| # | Question |
|---|---|
| A7 | "If you opened a website on your phone to check status, what's the ONE thing you'd want first?" |
| A8 | "Ever used a site on your phone where text was too small or buttons too hard? What went wrong?" |

### Part D: Additional Requests

| # | Prompt |
|---|---|
| A9 | "What was the single most frustrating thing about admission when you applied?" |

---

## Cross-Role Correlation Matrix

**Fill after all interviews. Each conflict gets a resolved row — tie goes to applicant.**

| Feature / Topic | Guidance | Registrar | Prog. Heads | Applicants | Resolved? |
|---|---|---|---|---|---|
| Scoring workflow | | | N/A | | |
| Handoff point | | | N/A | | |
| Cluster → Program map | | | | N/A | |
| Chatbot should answer | | N/A | N/A | | |
| Chatbot should NOT answer | | N/A | N/A | | |
| Notification preference | | | N/A | | |
| Schedule conflicts | | | N/A | N/A | |
| Records access | | | N/A | N/A | |
| Quota visibility | | N/A | | N/A | |

---

## Post-Interview Actions

1. **Fill correlation matrix above** — identify role disagreements
2. **Photograph marked-up mapping table** from Program Heads — this is Chapter 3 evidence
3. **Compile FAQ list** from G11 + A4 — feeds RAG chatbot content corpus (C.2)
4. **Compile [DESIGN] notes** by role — feeds User Design mockups
5. **Log additional requests** from Part D — tag as "in scope" or "out of scope"
6. **Update features.md** if any feature needs scope adjustment based on interview findings
7. **Create process flow diagrams** from workflow walkthroughs (G1, R1) — SO1 artifact

---

*This guide references `features.md` (§B.1–§C.10) as the authoritative feature inventory. Every question is anchored to a specific feature section in that document.*
