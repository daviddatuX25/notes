# NEXIAM Interview Guide — Round 3 (July 15–16, 2026)

**Purpose:** Fill gaps from Rounds 1–2 without repeating what's already known.
**Rules:** Few respondents okay — not full population. Keep sessions short. Skip any question already answered.

---

## Interview Day Planner

### Who to Interview Today

| Role | Min Needed | Who | Duration | Priority |
|---|---|---|---|---|
| Guidance (Counselor or Admin) | 1 | Anyone available — both were in Round 1 | 20 min | HIGH |
| Registrar (Staff or Admin) | 1 | Anyone available | 15 min | HIGH |
| Program Heads | 2–3 | Pick programs across STEM + non-STEM (e.g., BSIT, BSEd, BSENT) | 10 min each | HIGH |
| Applicants (first-year students) | 3–5 | Intercept on campus — quick, informal | 5 min each | MEDIUM |

**Total time needed:** ~1.5 hours if done back-to-back.

### What to Bring

- [ ] Printed **cluster-to-program mapping table** (1 page — show only relevant rows to each Program Head)
- [ ] Phone camera — photograph marked-up mapping tables, workspaces
- [ ] This guide (printed or on phone)
- [ ] Pen and blank paper for workflow sketches

### Key Rule

**Every question is tagged:**
- **[NEW]** = ask it. This wasn't covered in Rounds 1 or 2.
- **[SKIP: R1 Q#]** = already answered in Round 1. Skip unless you need clarification.
- **[SKIP: R2 Q#]** = already answered in Round 2. Skip.

---

## GUIDANCE OFFICE (1 respondent, ~20 min)

### What We Already Know (Don't Ask Again)
- Scoring takes 5+ days, 2–3 staff, illegible marks are top error (R1 Q5-7)
- 70–80 applicants/day for result release, top question: "When is exam?" (R1 Q10-12)
- No scanner equipment currently, NOA number links sheet to applicant (R1 Q21-23)
- Open to training non-Guidance proctors, coordinates via Messenger (R2 Q3-4, Q7)
- Yukee system not used — not integrated into workflow (R2 Q9-10)
- Chatbot "somewhat helpful" — should address requirements, schedules, status (R2 Q12-13)
- Quota info comes from Sir Sonny (Guidance Admin) (R2 Q15)

### Questions to Ask Today

| # | Question | Tag | Why this matters now |
|---|---|---|---|
| G1 | "NEXIAM will scan answer sheets with computer vision — you feed paper through a scanner and the system reads bubbles automatically. Today you score manually. How many sheets come in per batch — all at once or in waves? Show us a sample answer sheet so we can design the bubble grid correctly." **[ARTIFACT: photo of blank answer sheet]** | NEW | OMR template design depends on actual sheet layout. Round 1 didn't ask about batch size or physical layout. |
| G2 | "If the computer flags a bubble as uncertain — smudge, half-erased — who should review it before the score is final?" | NEW | Confidence threshold workflow design. |
| G3 | "During counseling, you'll see two panels on one screen: left shows the applicant's aptitude cluster (Math-dominant, Language-dominant, etc.) with recommended programs. Right shows how well their interests match each program. You see both signals, then you decide placement. Acceptable?" **[DESIGN]** | NEW | Triage Dashboard acceptance. Round 2 only asked if a dashboard "would be helpful" — not about this specific dual-panel design. |
| G4 | "When we release results by email, should the email go automatically or should you review it first?" | NEW | Email notification workflow. No prior round asked this. |
| G5 | "Right now Guidance and Registrar share some access to records. NEXIAM will isolate what each office sees. Should Guidance ever see Registrar-only data? Should Registrar ever see your consultation notes?" **[DESIGN]** | NEW | RBAC cross-role isolation. No prior round asked about specific access boundaries. |
| G6 | "What's the number one thing that slows down walk-in or late applicants today — the kind you process outside the normal batch?" | NEW | Direct Assessment polish. Round 1 asked about general scoring but not walk-in-specific bottlenecks. |

---

## REGISTRAR OFFICE (1 respondent, ~15 min)

### What We Already Know
- (No prior Registrar interviews exist — all questions below are NEW)

### Questions to Ask Today

| # | Question | Tag |
|---|---|---|
| R1 | "Walk us through what happens when Guidance hands you scored results. What do YOU do with them? Where do they go next?" **[ARTIFACT: sketch the handoff flow]** | NEW |
| R2 | "NEXIAM separates what Guidance sees from what Registrar sees. Right now, can Guidance staff access Registrar records? Should they?" | NEW |
| R3 | "When an applicant's status changes — results released — how do applicants find out today? If we automated email, would you want to review the message before it goes out?" | NEW |
| R4 | "Do you have any walk-in or late applicants come directly to you? What happens with them?" | NEW |
| R5 | "When you process applications, do you work one at a time or batch-process? What information do you need on the first screen?" **[DESIGN]** | NEW |

---

## PROGRAM HEADS (2–3 respondents, ~10 min each)

### What We Already Know
- Communicates quotas face-to-face daily with Guidance (PH R1 Q2-3)
- Has limited visibility of incoming applicants — wants full real-time view (PH R1 Q7-8)
- Rates real-time quota, pre-enrollment slate, and threaded notes as "Highly useful" (PH R1 Q9-11)

### What to Bring
**Printed mapping table — ONE row per Program Head (show only THEIR program):**

| Their Program | Cluster That Maps to It |
|---|---|
| BSIT | Math-Dominant |
| BSEd English | Language-Dominant |
| BSENT | Mixed / High-Across |
| BSCE | Math-Dominant OR Spatial-Dominant |
| BS Architecture | Spatial-Dominant |

### Questions to Ask Today

| # | Question | Tag |
|---|---|---|
| P1 | "Here's the cluster NEXIAM would map to YOUR program." **[Show their row from the mapping table]** "If an applicant scores strong in [their cluster's strength — e.g., Math], should NEXIAM recommend your program to them? Why or why not?" **[ARTIFACT: photo of their marked-up row]** | NEW — THE critical validation |
| P2 | "Is there a sub-test score that would make you say 'this applicant should NOT be in my program' — even if their overall score is decent?" | NEW |
| P3 | "What matters for success in your program that exam scores can't measure — creativity, communication, teamwork?" | NEW — feeds Chapter 3 limitation acknowledgment |
| P4 | "Would you want to see how many applicants are being matched to your program BEFORE the final list? If yes, what ONE number matters most?" **[DESIGN]** | NEW — PH R1 asked about features generally; this is specific to the engine output |

---

## APPLICANTS / FIRST-YEAR STUDENTS (3–5 respondents, ~5 min each)

### What We Already Know
- (No prior Applicant interviews exist — all questions below are NEW)

### Context From Prior Rounds (for Your Reference)
- Guidance says top applicant questions: "When is exam? Is application still open?" (R1 Q12)
- Applicants travel from: Sta. Cruz, Bangar, Sudipen, Tagudin, Sta. Lucia, Suyo, Alilem (R1 Q16-20)
- Primary campus visit purposes: submitting requirements, taking exam, claiming results (R1 Q18)
- Some travel 2+ hours (R1 Q19-20)
- No scanner/QR codes currently (R1 Q21-22)

### Questions to Ask Today

| # | Question | Tag |
|---|---|---|
| A1 | "How did you find out your exam schedule? How did you find out your results — Facebook, text, came to campus?" | NEW |
| A2 | "Did you ever go to campus just to ask a question you could've looked up online?" | NEW |
| A3 | "Do you have email and check it? Would getting results by email work for you?" | NEW |
| A4 | "If a chatbot on the website answered questions like 'what's the deadline?' or 'what documents do I need?' — but NOT 'what course should I take?' — would you use it?" | NEW |
| A5 | "How did you decide what program to apply for? Did anyone help you?" | NEW |
| A6 | "If you could check your status from your phone, what's the ONE thing you'd want to see first?" **[DESIGN]** | NEW |
| A7 | "What was the single most frustrating thing about applying?" | NEW |

---

## After Interviews — Correlation Check

Fill this after all sessions to spot role disagreements:

| Topic | Guidance said | Registrar said | Program Head said | Applicants said | Resolved? |
|---|---|---|---|---|---|
| Handoff point (scored → released) | | | N/A | | |
| Records access boundaries | | | N/A | N/A | |
| Email — auto-send or review? | | | N/A | | |
| Cluster → program fit | | N/A | | N/A | |
| What chatbot should answer | | N/A | N/A | | |

**Conflict rule:** Tie goes to applicant needs. Document the resolution.

---

## Quick Summary — Questions Per Role

| Role | Questions | Already Skipped (from R1/R2) | Duration |
|---|---|---|---|
| Guidance | 6 (G1–G6) | 21 questions skipped | ~20 min |
| Registrar | 5 (R1–R5) | None (no prior Registrar data) | ~15 min |
| Program Head | 4 (P1–P4) | 7 questions skipped | ~10 min each |
| Applicant | 7 (A1–A7) | None (no prior Applicant data) | ~5 min each |

**Total NEW questions: 22 across 4 roles. Total interview time: ~1.5 hours.**

---

*Prior rounds referenced: Round 1 (Questionnaire — Guidance, 2 resp, 26 questions), Round 2 (Interview — Guidance, 1 resp, 15 questions), Round 1 (Survey — Program Heads, 1 resp, 12 questions). Files in: `Phase(RAD-based) Work/01-requirements-planning/Preliminary Interviews & Questionaire/`*
