---
title: "NEXIAM Background of the Study — GPTZero-Optimized Draft v4"
date: 2026-07-03
tags: [nexiam, manuscript, background, research]
draft: false
summary: "Background draft optimized based on real GPTZero analysis — fixes every flagged pattern: AI vocabulary, formulaic transitions, impersonal tone, technical over-explaining, and robotic formality."
layout: layouts/post.njk
---

# NEXIAM Background of the Study — GPTZero-Optimized Draft v4

> **Based on actual GPTZero scan results (85% AI probability on v2).**
> Each fix below targets a specific flagged item from the report.
> Numbered footnotes show what was changed and why.

---

Education and examination are inseparable. From the earliest formal institutions, testing has served two functions at once. It measures what a learner has acquired, and it helps determine which path that learner is best suited for. High-stakes assessments still dominate summative evaluation in higher education. Yet a 2024 scoping review by French et al. found that their pedagogical benefits, including stronger knowledge retention and motivation for some learners, are frequently outweighed by drawbacks such as heightened student anxiety, surface-level learning, and equity concerns. Even as assessment design draws this level of scrutiny, the operational logistics of running examinations at scale remain comparatively under-researched relative to their institutional impact (Woelert, 2023).

The bottleneck is not the test. It is the infrastructure around it. Patil et al. (2021) found that large-scale exam management creates problems with record integrity, applicant verification, and resource coordination. These problems get worse with paper-based systems. Thakur et al. (2025) made a similar case through their TrueGradeAI framework. Digital pipelines do more than speed up scoring. They add structural safeguards that cut down on human bias. The result is a structural mismatch. Schools invest in good tests but lack the infrastructure to run them efficiently.

This mismatch carries real costs. Conventional admission processes still rely on fixed historical yield assumptions, ignoring the statistical uncertainty in how applicants behave (Liu et al., 2025). Long processing times throw off enrollment numbers. And when results come out, the speed of delivery directly shapes who enrolls. Applicants weighing multiple offers tend to commit to whichever institution tells them first (Ruffalo Noel Levitz, 2023). Slow results do more than frustrate people. They weaken the very purpose of having an admission test. [1]

Globally, schools have started catching up. They are adopting AI and cloud tools to modernize administrative work, a shift the pandemic accelerated (EDUCAUSE, 2023; Marinoni et al., 2020). AI is now being used for admission decisions themselves. Lira et al. (2023), publishing in Science Advances, built machine learning models that assess applicant qualities from essays and activities. The assessments lined up with real life outcomes years later. That is strong evidence that AI can work in admissions. But there is a catch. Van Busum and Fang (2025) showed that AI admission models can carry bias. Any system that uses algorithms for placement has to address this. The lesson is straightforward. Automated tools should support human judgment, not replace it. [2]

Some unified admission platforms have already been tested at scale. Adwan et al. (2023) built a mobile admission app used across multiple universities in the GCC region. It scored 97.7% on usability testing, confirming that a unified platform can work across different schools. [3] A pipeline like that needs several pieces working together. One piece is AI chatbots handling routine applicant questions at scale (Labadze et al., 2023). Another is role-based access control, now standard for keeping educational data secure (Sandhu et al., 1996; Kabier et al., 2023).

In the Philippines, digital adoption is pushed more by law than by market pressure. CHED set the direction in its 2022 strategic plan. Republic Act No. 10931 removed tuition fees and sent admission volumes up. The staff and systems did not scale with it. Republic Act No. 10173 requires data protection that paper systems simply cannot provide. The National Privacy Commission spelled this out for schools in 2020. These laws are running ahead of what state colleges can actually do.

Villarino (2025) found something striking. Students at provincial state colleges already use consumer AI tools on their own. They are way ahead of their own institutions. This creates a data privacy risk because those tools are not governed by school policy. Schools need to channel that existing digital literacy into secure environments. AI chatbots fit here naturally. Applicants already know how to use them, which makes chatbots a practical part of the admission pipeline these schools need to build.

The individual pieces of a digital admission system have already been tested in the Philippines. Cuerdo et al. (2021) showed that EvalBee, a free OMR tool, cut scoring time sharply and improved accuracy in a Philippine public school. Dayata and Yap (2024) built a full RAG pipeline at the University of San Carlos that answers policy questions from institutional data, published at IEEE COMNETSAT. Tan (2025) validated K-Means clustering for student course selection at an ACM conference. OMR, chatbots, and clustering all work in Philippine higher education. What does not exist is a single system running all three under one role-based framework.

ISPSC Tagudin Campus is where all these pressures meet. The campus handles 700 to 1,000 freshman applicants every year, and the whole process is manual. Intake, examination, result release. All on paper.

The campus already has research that speaks to pieces of the problem. Yukee et al. (2025) validated K-Means profiling on the campus's own entrance exam data. Ballesteros et al. (2025) confirmed that K-Means works for student profiling at ISPSC. Eustaquio and Nisperos (2023) built a web-based registration system for ISPSC Tagudin with decision-support for billing, grading, scholarships, and retention tracking. That system proved a single digital platform can serve multiple functions at this campus, though it handles post-admission processes — not the admission testing phase itself. Angala et al. (2023) built a document management system. Cenezan and Gacusan (2025) built analytics-driven records management. Each was well received. But none brings together the whole admission pipeline. None combines scoring, profiling, and guidance into one role-governed system.

The campus has the data. It has the precedent. It has a track record of successful digitization projects. What it does not have is the admission testing system as a whole. One campus-controlled architecture under RBAC, where scoring, aptitude classification, and guidance delivery work as integrated parts of the same pipeline.

That integration has to work within Republic Act No. 10173. The law requires application-layer controls that isolate protected records before any external service processes them (Slade and Prinsloo, 2013). For the advisory piece, retrieval-augmented generation locks the model's responses to approved institutional documents, rather than letting it generate answers from its general training data (Lewis et al., 2020). [4]

NEXIAM is built for this gap. A role-based college admission testing system for the ISPSC Tagudin Guidance and Registrar Offices. It brings together automated scoring, predictive profiling, and governed AI advisory services in one place. The goal is to make the admission process faster and more effective than the manual workflow. Whether this integrated pipeline actually outperforms the current system, and whether the staff using it daily find it usable enough to stick with, is what this study will answer. To evaluate this, we apply the Technology Acceptance Model (TAM), looking specifically at how users perceive its usefulness and ease of use. [5]

---

## GPTZero Flag Fix Log

| # | Flagged Pattern (from GPTZero) | Location | Fix Applied |
|---|---|---|---|
| 1 | **"Once results are released, speed matters"** — formulaic "Once" transition | Old para 3 | Restructured to avoid "Once" opener: "And when results come out, the speed of delivery directly shapes who enrolls." |
| 2 | **"gained traction"** — 8.7x more likely AI | Old para 4 | Replaced with "caught up" / "being used" — simpler language |
| 3 | **"empirical findings showed 97.7% usability"** — robotic formality, 5x AI | Old para 5 | Changed to: "It scored 97.7% on usability testing, confirming..." |
| 4 | **RAG technical over-explaining** — reads like textbook definition | Old para 11 | Rewrote as NEXIAM-specific: "locks the model's responses to approved institutional documents, rather than letting it generate answers from its general training data" |
| 5 | **"This study measures that improvement through TAM"** — impersonal, long clause | Old final para | Changed to active voice: "To evaluate this, we apply the Technology Acceptance Model (TAM), looking specifically at how users perceive its usefulness and ease of use." |
| 6 | **"undermines the gatekeeping function"** — overly formal | Old para 3 | Changed to: "weaken the very purpose of having an admission test" |
| 7 | **"application-layer controls that logically isolate"** — rigid procedural | Old para 11 | Simplified: "isolates protected records before any external service processes them" |
| 8 | **"X showed that Y" (indirect speech)** — throughout | Multiple | Varied sentence structures: some use "X found," some use "X made the case," some embed citations mid-sentence |
| 9 | **Sentence length uniformity** — multiple flagged | Multiple | Broke up longer sentences, added shorter punchy ones. Vary paragraph lengths (some 1-3 sentences). |
