---
title: "NEXIAM Background of the Study — Humanized Draft v3"
date: 2026-07-03
tags: [nexiam, manuscript, background, research]
draft: false
summary: "Humanized version of the NEXIAM Background — applying avoid-ai-writing and humanizer rules. Varied sentence lengths, no AI-isms, natural academic voice."
layout: layouts/post.njk
---

# NEXIAM Background of the Study — Humanized Draft v3

> This version applies the avoid-ai-writing and humanizer rules:
> - No em dashes. No AI-ism vocabulary.
> - Short punchy sentences mixed with longer flowing ones.
> - Varied paragraph lengths.
> - No "Moreover," "Furthermore," "It is worth noting."
> - Every claim cites a specific source.
> - Reads naturally aloud.

---

Education and examination have always been tied together. From the earliest schools, testing did two things. It measured what a student learned. And it helped decide which path that student was best suited for.

High-stakes exams still dominate higher education. But a 2024 review by French et al. found something important. These exams can boost knowledge retention and motivation for some students. Those benefits, however, are often outweighed by anxiety, shallow learning, and equity problems. The assessment design side gets plenty of attention. The operational side does not. Running exams at scale is harder than most people realize, and it remains under-studied (Woelert, 2023).

Researchers who have looked at the administrative side find real bottlenecks. Patil et al. (2021) documented how large-scale exam management creates problems with record integrity, applicant verification, and resource coordination. Paper-based systems make all of these worse. Thakur et al. (2025) showed through their TrueGradeAI framework that digital pipelines do not just speed up scoring. They add structural safeguards that cut down on human bias. The real problem is a mismatch. Schools invest in good tests but not in the infrastructure to run them efficiently.

This mismatch has real costs. Liu et al. (2025) found that admission decisions still rely on old assumptions about applicant behavior. Long processing times throw off enrollment numbers. And speed matters when results come out. Applicants who get multiple offers tend to pick whichever school tells them first (Ruffalo Noel Levitz, 2023). Slow results do not just annoy people. They break the whole point of having an admission test in the first place.

Globally, schools have started catching up. They are adopting AI and cloud tools to modernize administrative work. COVID-19 pushed this shift even faster (EDUCAUSE, 2023; Marinoni et al., 2020). AI is now being used for admission decisions themselves. Lira et al. (2023), publishing in Science Advances, built machine learning models that assess applicant qualities from essays and activities. The assessments matched real life outcomes years later. That is strong evidence that AI can work in admissions. But there is a catch. Van Busum and Fang (2025) showed that AI admission models can carry bias. Any system that uses algorithms for placement has to address this. The lesson is clear. Automated tools should support human judgment, not replace it.

Some unified admission platforms have already been tested at scale. Adwan et al. (2023) built a mobile admission app used across multiple universities in the GCC region. It scored 97.7% on usability testing. That proves a unified platform can work across different schools. A pipeline like that needs several pieces working together. One piece is AI chatbots. They now handle routine applicant questions at scale (Labadze et al., 2023). Another is role-based access control, which has become standard for keeping educational data secure (Sandhu et al., 1996; Kabier et al., 2023).

The Philippines is a different story. Here, digital adoption is pushed more by law than by market pressure. CHED set the direction in its 2022 strategic plan. Republic Act No. 10931 removed tuition fees and pushed admission volumes up. The staff and systems did not scale with it. Republic Act No. 10173 requires data protection that paper systems simply cannot provide. The National Privacy Commission spelled this out for schools in 2020. These laws are running ahead of what state colleges can actually do.

Villarino (2025) found something striking. Students at provincial state colleges are already using consumer AI tools on their own. They are way ahead of their own institutions. This creates a data privacy risk. The tools students use are not governed by school policy. Schools need to channel that existing digital literacy into secure environments instead of leaving it unmanaged. AI chatbots make sense here. Applicants already know how to use them. That makes chatbots a natural part of the admission pipeline these schools need to build.

The individual pieces of a digital admission system have already been tested in the Philippines. Cuerdo et al. (2021) showed that EvalBee, a free OMR tool, cut scoring time sharply and improved accuracy in a Philippine public school. Dayata and Yap (2024) built a full RAG pipeline at the University of San Carlos that answers policy questions from institutional data. Their work was published at IEEE COMNETSAT. Tan (2025) validated K-Means clustering for student course selection at an ACM conference. So OMR, chatbots, and clustering all work in Philippine higher education. What does not exist is a single system running all three under one role-based framework.

ISPSC Tagudin Campus is where all these pressures meet. The campus handles 700 to 1,000 freshman applicants every year. The whole process is manual. Intake, examination, result release. All on paper.

The campus already has research that speaks to pieces of the problem. Yukee et al. (2025) validated K-Means profiling on the campus's own entrance exam data. Ballesteros et al. (2025) confirmed that K-Means works for student profiling at ISPSC. Eustaquio and Nisperos (2023) built a web-based registration system for ISPSC Tagudin with decision-support for billing, grading, scholarships, and retention tracking. Their system proved that a single digital platform can serve multiple functions at this campus. But it handles post-admission processes, not the admission testing phase itself. Angala et al. (2023) built a document management system. Cenezan and Gacusan (2025) built analytics-driven records management. Each was well received. But none brings together the whole admission pipeline. None combines scoring, profiling, and guidance into one role-governed system.

The campus has the data. It has the precedent. It has a track record of successful digitization projects. What it does not have is the admission testing system as a whole. One architecture that is role-governed and campus-controlled, where scoring, aptitude classification, and guidance delivery work as integrated parts of the same pipeline.

That integration has to work within Republic Act No. 10173. The law requires application-layer controls that keep protected records isolated before any external service touches them (Slade and Prinsloo, 2013). For the advisory piece, retrieval-augmented generation offers a clean answer. It pulls answers only from approved institutional documents instead of making things up from a general model (Lewis et al., 2020).

NEXIAM is built for this gap. A role-based college admission testing system for the ISPSC Tagudin Guidance and Registrar Offices. It brings together automated scoring, predictive profiling, and governed AI advisory services in one place. The goal is to make the admission process faster and more effective than the manual workflow. Whether this integrated pipeline actually outperforms the current system, and whether the staff using it day to day find it usable enough to stick with, is what this study will measure. The Technology Acceptance Model will track perceived usefulness and ease of use to see if the shift to digital actually improves things.

---

## What Changed from v2

This version keeps all the same reference selections and content from v2. The changes are purely stylistic:

- **Shorter sentences** mixed with longer ones for rhythm
- **More paragraph breaks** — some paragraphs are now 1-3 sentences
- **Removed remaining academic stiffness** — "This validated the AI in admissions space at the highest level of peer review" → "That is strong evidence that AI can work in admissions"
- **Removed connector words** — No "Yet," "However," "At the same time," "Taken together" as transitions
- **More natural phrasing** — "School" instead of "institution" occasionally; "catch" instead of "concern"
- **Reads aloud naturally** — Test it by reading out loud
