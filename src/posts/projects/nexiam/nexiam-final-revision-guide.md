---
title: "NEXIAM Final Revision Guide — Cross-Document Audit"
date: 2026-07-04
tags: [nexiam, defense, revision, audit, qa, manuscript]
draft: false
summary: "Complete cross-document audit of NEXIAM manuscript, presentation, speaker script, defense bank, and defense prep note. 19 issues found across 5 documents. Prioritized action plan for the team."
layout: layouts/post.njk
---

# NEXIAM Final Revision Guide — What We Found and What We Do Next

I cross-checked five documents: the manuscript (NEXIAM.txt), the presentation (NEXIAM-presentation.txt), the speaker script (v4), the Q&A Defense Bank (v4), and the defense prep note. Here is what surfaced.

---

## The Big One: Our Numbers Don't Match

The manuscript says 47 evaluators with 1 IT expert. The presentation, speaker script, defense bank, and prep note all say 49 evaluators with 3 IT experts. Five documents, two different numbers.

This is the first thing any panelist reading the manuscript will catch. We fix this by picking one number and updating everything. The defense materials are newer and already aligned at 49 — I recommend we update the manuscript to match. That means editing NEXIAM.txt at the population section and the data analysis section where n=46 is referenced.

---

## The IPO Inputs Changed Between Documents

The manuscript lists seven inputs: Applicant profiles, Exam preferences, Admission inquiries, **ML decision-support models**, **Triage advisory notes**, Scanned answer sheets, Program quotas.

The presentation slide lists eight inputs, but only four overlap with the manuscript. The presentation added "Counseling data," "Support queries," "Status updates," and "Activity logs" — and removed "ML decision-support models" and "Triage advisory notes."

The manuscript is our single source of truth. The presentation slide must match it, or vice versa.

Also: the presentation still says "Aptitude dashboards" for Output #4. We renamed that to "Decision-support triage" in the manuscript. The slide is behind.

---

## The Proctor Role Says Four Different Things

In the same manuscript:

- Scope section: Proctor is a "duty overlay" — not a distinct role (so: 7 roles + Proctor overlay)
- Glossary "Proctor" entry: Proctor is "one of the seven defined user roles"
- Glossary "User Role" entry: lists 7 roles INCLUDING Proctor, but completely OMITS Program Head
- Appendix B: lists "eight actors" including both Proctor AND Program Head, uses "Super Admin" instead of "IT Administrator"

This is the kind of inconsistency that undermines credibility. The fix: standardize to 7 RBAC roles (Applicant, Guidance Counselor, Guidance Admin, Registrar Staff, Registrar Admin, Program Head, IT Admin) with Proctor as a duty overlay assignable to any staff role. That gives us 7 roles + 1 overlay = 8 actors in the use case diagram. Then update all four locations.

---

## Who Is the Project Manager?

The manuscript Table 1 says David is Project Manager. The defense bank Section 2 header labels Jaypee as "Project Manager / co-Lead Developer." The manuscript is authoritative — fix the defense bank header.

---

## TAM Items That Don't Compare the Same Thing

For Guidance Perceived Usefulness items 1 and 2, the pre-test and post-test measure different activities:

- Pre Item 1 asks about "tools to profile applicants"
- Post Item 1 asks about "triage evaluating readiness for placement"

These are not the same construct with a changed referent — they are different activities. A paired t-test assumes you are measuring the same thing before and after. A methodologist panelist will notice.

We either reword the pre-test items to describe the same activities the system delivers, or add an explicit limitation acknowledging that some items necessarily change because manual processes have no equivalent to automated triage.

---

## Statistics That Need a Page Number

The defense bank and Slide 8 quote "85% of developers use AI coding agents" and "41% of code is AI-generated." These numbers are not in the manuscript body — they only appear in defense materials. If a panelist asks "where exactly in the Osmani whitepaper does it say that?", we need a page, section, or table number. Otherwise it looks fabricated.

---

## The Peng et al. Citation Doesn't Support the Claim

In the methodology, we cite Peng et al. (2023) to support "rigorous peer code reviews... to prevent architectural debt." Peng et al. studied GitHub Copilot's effect on developer speed — not peer review, not architectural debt. The citation and the claim don't match. Either add a source that actually supports peer review preventing debt, or rephrase so Peng et al. only supports the productivity point.

---

## 13 References Never Cited

These are in the reference list but never appear in the body text: Calfoforo & Raga, Catalan, Cenezan & Valdez, Cohen, Dash et al., Ilagan et al., Mittal & Malhotra, Neupane et al., Rutvik et al., Sanchez-Mendiola, Tamascelli et al., Van Deventer et al., and RA 10844.

APA 7th requires every reference to be cited. The defense prep note already maps where each fits — we just need to insert the citations or remove unused references.

Also: Cohen (1988) is invoked by "Cohen's d" at the data analysis section, but never formally cited. Add "(Cohen, 1988)" to that line.

---

## Missing Defense Traps — Gaps in Our Q&A Bank

The defense bank covers 56 questions, but these angles are not in it:

1. "Your manuscript says 47 evaluators, presentation says 49 — which is it?"
2. "Over a dozen references in your list are never cited in the text — why?"
3. "Your IPO inputs differ between the manuscript and your slide — which is correct?"
4. "Your Guidance TAM items measure different things pre and post — how is that paired?"
5. "You claim French et al. found drawbacks 'outweigh' benefits — is that really their conclusion?"
6. "You cite Peng et al. for peer review, but they studied developer speed — can you explain?"

Six answers to prepare, six traps to wire into the bank.

---

## Typos and Grammar

Line-level corrections in the manuscript:

| Line | What It Says | Fix To |
|------|-------------|--------|
| 32 | optiomization | optimization |
| 288 | Glosary | Glossary |
| 401 | concering | concerning |
| 32, 33 | data driven | data-driven |
| 31 | under utilized | under-utilized |
| 186 | personel | personnel |
| 208 | forApplicant | for Applicant |
| 31 | In hindsight | Additionally (or "Compounding this") |
| 29 | researcher's | researchers' |
| 38 | measurable evidences | measurable evidence |
| 38 | prove if | prove whether |

Two sentence fragments need restructuring:
- Line 31: "Rooting from RA 10931..." — no main clause
- Line 35: "A platform that can integrate..." — no main verb

---

## Presentation-Specific Fixes

1. Slide 6: "The proctoring interface relies on the cloud alone, maintaining offline resilience" — contradictory. Rewrite: "The proctoring interface is cloud-connected but maintains offline resilience via service-worker caching for exam venues with intermittent connectivity."

2. Slide 1 acronym: The manuscript glossary has a slightly different expansion than the presentation. Align them.

---

## What We Do Next — The Action Sequence

**IMMEDIATE — before dry run:**

1. Decide: 49 evaluators with 3 IT experts, or 47 with 1? Then update ALL documents.
2. Align IPO inputs between manuscript and presentation slide.
3. Change "Aptitude dashboards" to "Decision-support triage" on the slide.
4. Fix the Proctor role in all four manuscript locations.
5. Fix the defense bank header — Jaypee is not PM.

**HIGH — before defense:**

6. Resolve TAM non-parallelism or add limitation.
7. Get a page/section citation for the 85%/41% stats, or remove the numbers.
8. Fix the Peng et al. citation.
9. Write answers for the 6 missing defense traps.
10. Fix the contradictory Slide 6 phrasing.

**MEDIUM — for manuscript final submission:**

11. All typos above.
12. Sentence fragments.
13. Word-level fixes.
14. Align acronym expansion.
15. Decide on "current process" vs "current manual process" phrasing.
16. Cite or remove 13 references.
17. Add explicit Cohen (1988) citation.

**NICE-TO-HAVE:**

18. Review the "outweigh" claim about French et al.
19. Standardize "Super Admin" vs "IT Administrator."

---

*Audit completed July 4, 2026. Cross-referenced: NEXIAM.txt, NEXIAM-presentation.txt, nexiam-v4-speaker-script.md, NEXIAM Q&A Defense Bank v4, nexiam-defense-preparation.md.*
