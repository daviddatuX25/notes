---
title: "NEXIAM — Background Strengthening & Synthesis Plan"
date: 2026-07-03
tags: [nexiam, research, writing]
draft: false
summary: "How the 16 reference papers map to NEXIAM's five components — pluggable paragraph drafts for the Background, k-means evidence, chatbot precedents, and suggested structural changes."
layout: layouts/post.njk
---

## How the 16 Papers Map to NEXIAM's Components

### Component 1: Unified Admission Testing Systems (Papers 01–04)
These establish that unified/web-based admission systems are an *established, proven approach*. Adwan et al. (2023) proved a unified mobile admission system for GCC universities works at 97.7% usability. Rutvik et al. (2024), Dash et al. (2024), and Nafrees & Kariapper (2020) extend this to web-based and developing-country contexts.

**Use in manuscript**: After "Internationally, higher education institutions have responded by adopting AI..." — add a transition showing these platforms are proven, but none address the *integrated testing pipeline* NEXIAM targets.

### Component 2: AI/ML in College Admissions (Papers 05–06)
Lira et al. (2023) in *Science Advances* shows ML models assess applicant qualities with outcomes correlating to long-term success. Van Busum & Fang (2025) raises fairness concerns. Together they validate AI-in-admissions as legitimate while reinforcing NEXIAM's human-in-the-loop design.

### Component 3: AI Chatbots for University Guidance (Papers 07–11)
**Strongest cluster — 5 papers**. Dayata & Yap (2024) is the closest precedent: a RAG pipeline at University of San Carlos answering policy questions. Neupane et al. (2024), Calfoforo & Raga (2024), Ilagan et al. (2025), and Tamascelli et al. (2025) confirm viability across different institutional contexts.

### Component 4: OMR / Automated Scoring (Papers 12–13)
Catalan (2017) tested 800 sheets across 8 courses at DLSU. Cuerdo et al. (2021) proved EvalBee OMR significantly reduces scoring time in Philippine public schools. Both establish low-cost automated scoring works in Philippine education.

### Component 5: K-Means for Course Routing (Papers 14–16)
Tan (2025) directly validates K-Means for course selection recommendation. Van Deventer et al. (2024) offers an LLM-based contrast. Mittal & Malhotra (2026) provides the broader survey context.

---

## Pluggable Paragraph Drafts

### Draft A — Insert after "Internationally, higher education institutions..." (p.3 of manuscript)

> Within this international trend, several concrete implementations have emerged that NEXIAM's design draws from. Unified admission platforms — both web-based and mobile — have been deployed across multiple institutions in the GCC region (Adwan et al., 2023) and independently in Sri Lankan state universities (Nafrees & Kariapper, 2020), confirming that admission digitization is technically feasible even in resource-constrained settings. For the automated scoring and guidance functions specifically, Philippine research has independently validated low-cost approaches: Cuerdo et al. (2021) demonstrated that freely available OMR tools significantly reduce scoring time and improve accuracy over manual methods in public school settings, while Dayata and Yap (2024) deployed a full retrieval-augmented generation pipeline at the University of San Carlos that answers procedural policy questions from a curated knowledge base. These existing implementations establish that NEXIAM's individual components are each deployment-ready; what remains unresolved at ISPSC Tagudin is whether they can function as a single governed pipeline answerable to the offices that run admissions.

### Draft B — Strengthen K-Means paragraph (after Ballesteros paragraph, p.7)

> Beyond the campus's own precedents, K-Means clustering has been independently validated for course routing in other higher education settings. Tan (2025) demonstrated that K-Means optimization effectively models student course selection preferences for intelligent recommendation, while Mittal and Malhotra (2026) confirmed in a comprehensive survey that clustering-based approaches remain a staple of course recommendation systems even as LLM-based alternatives emerge.

### Draft C — Strengthen chatbot paragraph (after Lewis et al. 2020 reference, p.8-9)

> This RAG architecture has been concretely validated in university settings. Dayata and Yap (2024) implemented an end-to-end RAG pipeline for the University of San Carlos's policies and procedures, demonstrating that institutional document retrieval paired with generative response can handle procedural queries at scale. Neupane et al. (2024) and Calfoforo and Raga (2024) confirmed the approach's accuracy across different university resource domains, while Ilagan et al. (2025) extended the paradigm by addressing the conversational UX considerations specific to university support agents. The technical viability of the component is thus well established; the open architectural question is how to bind it to the admission pipeline without violating the data protection requirements of Republic Act No. 10173.

### Draft D — Strengthen AI-in-admissions presence (after EDUCAUSE/COVID paragraph, p.3)

> The specific application of AI to admission processes themselves — beyond general administrative modernization — has gained traction as well. Lira et al. (2023) demonstrated that machine learning models can assess applicant qualities from unstructured application materials with outcomes correlated to long-term academic success, publishing these findings in Science Advances, while Van Busum and Fang (2025) raised the accompanying fairness concerns by systematically analyzing bias in AI admission models. These studies establish both the potential and the risks of AI-augmented admissions, reinforcing the case for human-in-the-loop architectures such as NEXIAM's K-Means Aptitude Insights Dashboard, where algorithmic outputs inform rather than replace counselor judgment.

---

## Complete APA 7th Reference List (16 new entries)

Insert alphabetically into the existing reference list:

Adwan, E. J., Al-Aradi, Y., Essa, M., & Malabari, H. (2023). A comprehensive study and development of unified mobile-based admission system for GCC universities. *Journal of Computing Theories and Applications*, *1*(2), 212–230. https://doi.org/10.62411/jcta.9793

Calfoforo, J. C., & Raga, R. C. (2024). Unleashing AI in education: A pre-trained LLMs for accurate and efficient question-answering systems. *2024 21st International Conference on Information Technology Based Higher Education and Training (ITHET)*, 1–6. https://doi.org/10.1109/ithet61869.2024.10837606

Catalan, J. A. (2017). A framework for automated multiple-choice exam scoring with digital image and assorted processing using readily available software. *DLSU Research Congress 2017*, 1–6.

Cuerdo, R., Ison, M. J. B., & Oñate, C. D. T. (2021). Effectiveness of automation in evaluating test results using EvalBee as an alternative Optical Mark Recognition (OMR): A quantitative-evaluative approach from a Philippine public school. *International Journal of Theory and Application in Elementary and Secondary School Education*, *3*(1), 71–85. https://doi.org/10.31098/ijtaese.v3i2.661

Dash, P. P., Rachana, R. L., Chauhan, A., Bhargavi, V., & Chandana, A. C. (2024). A unified AI-assisted platform for college discovery and application: Design, development, and user needs analysis. [Unpublished manuscript].

Dayata, W. M. A., & Yap, S. Y. C. (2024). Carolinian chatbot: End-to-end question-answer pipeline on the University of San Carlos policies, procedures, and guidelines via retrieval augmented generation. *2024 IEEE International Conference on Communication, Networks and Satellite (COMNETSAT)*, 145–152. https://doi.org/10.1109/comnetsat63286.2024.10862750

Ilagan, J. B., Yu, W. S., See, S. M., & Rayco, S. (2025). A virtual support agent for university students powered by a large language model: Conversational user experience design considerations. *International Conference on Human-Computer Interaction (HCII 2025), Lecture Notes in Computer Science*, 238–247. https://doi.org/10.1007/978-3-031-93415-5_15

Lira, B., Gardner, M., Quirk, A., Stone, C., Rao, A., Ungar, L., Hutt, S., Hickman, L., D'Mello, S. K., & Duckworth, A. L. (2023). Using artificial intelligence to assess personal qualities in college admissions. *Science Advances*, *9*(41), eadg9405. https://doi.org/10.1126/sciadv.adg9405

Mittal, S., & Malhotra, I. (2026). Recent advancements in course recommendation systems in the era of large language models (2022–2025). *IEEE Access*, *13*, 41365–41398. https://doi.org/10.1109/access.2026.3681211

Nafrees, A. C. M., & Kariapper, R. K. A. R. (2020). Application of online management information system to the examination department, state universities in Sri Lanka. *Journal of Critical Reviews*, *7*(12), 758–762.

Neupane, S., Hossain, E., Keith, J., Tripathi, H., Ghiasi, F., Golilarz, N. A., Amirlatifi, A., Mittal, S., & Rahimi, S. (2024). From questions to insightful answers: Building an informed chatbot for university resources. *2024 IEEE Frontiers in Education Conference (FIE)*, 1–9. https://doi.org/10.1109/fie61694.2024.10892994

Rutvik, K., Piyush, D., Abhay, W., Vedant, K., & Rutika, G. (2024). Web based college admission system. *International Journal of Trend in Scientific Research and Development (IJTSRD)*, *8*(3), 1190–1194.

Tamascelli, M., Bunch, O., Fowler, B., Taeb, M., & Cohen, A. (2025). Academic advising chatbot powered with AI agent. *Proceedings of the 2025 ACM Southeast Conference*, 182–189. https://doi.org/10.1145/3696673.3723065

Tan, Z. (2025). Modeling student course selection preferences using K-Means optimization for intelligent recommendation. *Proceedings of the 2nd International Conference on Intelligent Education and Computer Technology*, 432–438. https://doi.org/10.1145/3764206.3764289

Van Busum, K., & Fang, S. (2025). Bias analysis of AI models for undergraduate student admissions. *Neural Computing and Applications*, *36*(12), 6675–6683. https://doi.org/10.1007/s00521-024-10762-6

Van Deventer, H., Mills, M., & Evrard, A. (2024). From interests to insights: An LLM approach to course recommendations using natural language queries. *arXiv preprint*, arXiv:2412.19312.
