---
title: "NEXIAM Q&A Defense Bank (v5 — FINAL)"
date: 2026-07-05
tags: [nexiam, defense, qa, v5, final, panel-questions]
draft: false
summary: "Definitive 60-trap Q&A defense bank for NEXIAM proposal defense. Merges v4 comprehensive with v2 audit findings. Covers all three presenters with scripted answers, corrected to n=47/1 IT expert. Includes document alignment flags."
layout: layouts/post.njk
---

# NEXIAM Q&A Defense Bank (v5 — FINAL)

**Supersedes:** v4 Comprehensive (July 3). All previous versions are legacy.  
**Coverage:** 60 traps across David, Jaypee, Christine.  
**Key corrections from v4:** n=49 → 47 evaluators; 3 IT experts → 1 IT expert; TAM-only n=46 clarified.  
**New in v5:** +15 traps added, outdated answers rewritten, document alignment flags.

---

## DOCUMENT ALIGNMENT FLAGS (Read Before Drill)

These are factual issues found during cross-document audit. The team should know them — a panelist comparing documents catches these instantly.

1. **Script says "proxy evaluators" — manuscript says "simulated evaluators."** Both mean the same thing (purposive sampling outside admission cycle). Be ready if a panelist notes the term mismatch. Christine's answer: "The terms are interchangeable in our context — both refer to the same purposive sampling design where evaluators execute role-based scenarios."

2. **Slide 8 (RAD): "85% of developers use AI agents, 41% of code is AI-generated."** These stats are from the Osmani (2026) Kaggle whitepaper. The manuscript body cites Osmani qualitatively but does NOT quote these specific numbers. If asked "where in your manuscript?": "These are from Osmani's 2026 whitepaper, cited in our Software Model section. The manuscript describes the paradigm shift qualitatively; the slide provides quantitative context from the same source."

3. **Woelert (2023) duplicate in reference list.** Two identical entries. Fix before final manuscript submission.

4. **Dash et al. (2026) — Istoriya Journal.** Venue quality unverified. If challenged, pivot to stronger precedents (Cuerdo, Dayata, Tan).

---

# SECTION 1: DAVID — Background, Gap, Architecture, Legal

**Roles:** Lead Developer / System Analyst / Presenter of Slides 1-5, 7, 13

---

## PART A: BACKGROUND OF THE STUDY

### TRAP 1: The "Jumping Ahead" Question [HIGH]

**Panelist:** "You stated scoring takes 5 to 14 days and coordination runs on text messages. How do you know this if you haven't conducted your formal Chapter 3 evaluation yet?"

> Yes, panelist. Those are our preliminary field observations — the reason this proposal exists. As documented under Specific Objective 1, we will formally investigate, code, and empirically verify these observations during Chapter 3 data collection. The Background establishes why the study is needed today; Chapter 3 will quantify it.

---

### TRAP 2: The "So What's the Gap?" Question [CRITICAL]

**Panelist:** "What exactly is the research gap? Aren't there already admission systems?"

> The gap is integration, not invention. Every component NEXIAM needs has been proven independently. Dayata and Yap deployed a RAG chatbot at USC, published at IEEE COMNETSAT. Cuerdo validated low-cost OMR in Philippine public schools. Tan proved K-Means for course routing at an ACM conference. Yukee et al. ran K-Means on ISPSC's own ICAT data. These pieces all exist and are published.
>
> What does not exist is one governed pipeline that runs them together — scoring, aptitude assessment, classification, and structured guidance — inside a role-based architecture that the Guidance Office and Registrar can actually operate during an admission season. Dash et al. proposed a similar unified platform and stopped at the design stage, confirming the gap is in deployment and governance, not in concept.

---

### TRAP 3: The "Lira et al." Challenge [HIGH]

**Panelist:** "Lira et al. assessed personal qualities through essays — not admission testing. How does that apply?"

> Lira proves the high-water mark: AI-based applicant assessment is validated at Science Advances, the highest level of peer review. Their finding that ML models can extract predictive signal from unstructured materials establishes that AI-driven admission is not speculative. We are not replicating Lira's methodology. We apply AI to the operational infrastructure layer — scoring, scheduling, applicant classification — rather than the psychometric layer. Lira opens the door; NEXIAM walks through it on the operational side.

---

### TRAP 4: The "Adwan GCC Relevance" Question [HIGH] [NEW v5]

**Panelist:** "Adwan et al. studied GCC universities. How is a mobile admission app in the Middle East relevant to a Philippine provincial state college?"

> The relevance is architectural, not contextual. Adwan demonstrated that a unified, centralized admission platform can serve multiple institutions with 97% usability under Nielsen heuristics. This proves the integration model itself is deployable — that combining admission functions into one platform is technically feasible. The specific cultural context differs, but the architectural precedent is directly applicable: unified platforms work across institutions.

---

### TRAP 5: The "Van Busum and Fang Contradicts You" Question [HIGH]

**Panelist:** "You cite Van Busum and Fang on AI bias in admissions. If AI models can be biased, why build a system with AI components?"

> Precisely because bias is real — which is why we designed NEXIAM around that finding, not against it. Three safeguards: the RAG chatbot is restricted to institutional policy documents — if no document matches above a confidence threshold, it says it does not have the information rather than fabricating. K-Means surfaces aptitude patterns for counselor review — it does not make admission decisions. Every AI-assisted output passes through a human-gated approval step before taking effect. Van Busum and Fang's finding is not a reason to avoid AI. It is the design requirement that shaped our architecture.

---

### TRAP 6: The "Gap Is Too Narrow — Isn't This Just Integration?" Question [HIGH]

**Panelist:** "You claim the gap is that existing components are not integrated. But that sounds like a technical integration task, not a research contribution."

> That is exactly the question our study answers, panelist. Integration is not trivial — it requires designing a unified RBAC architecture, ensuring data governance under RA 10173 across components with different data sensitivities, and empirically testing whether this single pipeline actually outperforms the manual process. The research question is not "can we build these components" — each is proven independently. The question is "can this governed pipeline work as one system, and do the people using it find it better than paper?" That requires empirical testing, which is what SO3 and SO4 address.

---

### TRAP 7: The "Local Studies — Why So Many ISPSC Citations?" Question [MEDIUM]

**Panelist:** "Yukee, Ballesteros, Angala, Cenezan — all from ISPSC. Is there a citation circle?"

> That is precisely the point. The fact that multiple ISPSC studies have independently validated different components — K-Means profiling (Yukee), student clustering (Ballesteros), document management (Angala), records management (Cenezan) — proves that this campus already has the research precedent and technical capability. The problem is not a lack of local knowledge; it is the lack of integration. These are independent capstone studies from different years and different teams.

---

### TRAP 8: The "Slade and Prinsloo — Why Learning Analytics Ethics?" Question [HIGH] [NEW v5]

**Panelist:** "Slade and Prinsloo is about learning analytics, not admission systems."

> Because their ethical framework applies beyond learning analytics. They established three principles for handling student data in digital systems: transparency about data use, the duty to protect externally processed data, and the obligation not to reduce students to algorithmic profiles. All three shaped NEXIAM. K-Means surfaces patterns for counselor review — it does not auto-classify applicants. The RAG chatbot is transparent about its knowledge boundaries. Data processed through external AI inference is governed by the same RBAC isolation as local data.

---

### TRAP 9: The "RA 10173 Compliance — Prove It" Question [CRITICAL]

**Panelist:** "You claim NEXIAM aligns with the Data Privacy Act. How, specifically? Why no NPC certification?"

> Three specific mechanisms. RBAC-enforced data isolation: each role accesses only the data its office is authorized to see. HMAC-SHA256 audit trails: every data access event is cryptographically chained, making any tampering structurally detectable. RAG chatbot draws only from institutional policy documents, preventing external data leakage. Formal NPC certification and Privacy Impact Assessment are identified as outside scope. We designed to RA 10173's requirements at the application layer and state this limitation explicitly.

---

### TRAP 10: The "CHED Policies — What Specifically?" Question [MEDIUM] [NEW v5]

**Panelist:** "You mention CHED's strategic plan. What specific CHED policy mandates a system like NEXIAM?"

> CHED's 2022-2028 Strategic Plan directs SUCs toward digital transformation of administrative services. The policy pressure is also indirect but equally real: RA 10931 removed tuition barriers, increasing admission volumes at every SUC including ISPSC. More applicants plus the same paper process equals mounting operational strain. CHED does not mandate a specific system, but its digitalization directive combined with RA 10931's volume pressure creates the institutional need NEXIAM addresses.

---

### TRAP 11: The "Esquivel — How Does Enrollment Prediction Justify Admissions?" Question [MEDIUM] [NEW v5]

**Panelist:** "Esquivel and Esquivel predicted enrollment from admission data. But your system is about admission testing, not enrollment."

> Enrollment predictability proves that program quotas are not static numbers — they are forecasts that affect resource allocation. When admissions are slow, enrollment projections drift. Esquivel demonstrated that enrollment likelihood can be modeled from admission-stage data at a Philippine university. This means Program Heads need visibility into applicant volumes during the admission cycle — not after. That visibility is what the pre-enrollment slate output in our IPO provides.

---

### TRAP 12: The "Dash et al. — Only Design Stage" Question [MEDIUM] [NEW v5]

**Panelist:** "Dash et al. stopped at design. Why should we believe you'll go further?"

> Dash validated the concept — a unified AI-assisted admission platform is architecturally feasible. They stopped at design, meaning the research community has acknowledged the gap but has not shipped. Our advantage is methodology. Dash used a traditional approach. We use AI-augmented RAD, where AI agents handle routine implementation work and the team focuses on architecture and integration. Concept proven, methodology advanced — that is the difference.

---

### TRAP 13: The "Ruffalo Noel Levitz Is a Marketing Firm" Question [ELITE] [NEW v5]

**Panelist:** "Ruffalo Noel Levitz is a marketing consultancy, not an academic source."

> They published an industry report based on actual student behavior data showing that processing speed directly affects applicant yield — students commit to whichever institution processes them faster. It is practitioner evidence, not academic research, and we cite it for exactly what it is: empirical observation from the enrollment management industry. The academic sources — French et al., Sánchez-Mendiola et al., Liu et al. — carry the scholarly weight. Ruffalo Noel Levitz adds the practitioner dimension: speed has measurable operational consequences.

---

### TRAP 14: The "Peer Review Status of Your Precedents" Question [HIGH] [NEW v5]

**Panelist:** "Dayata and Yap, Tan — were these peer-reviewed? How reputable are the venues?"

> Dayata and Yap published at IEEE COMNETSAT — an IEEE-sponsored international conference, peer-reviewed and indexed in IEEE Xplore. Tan published at ACM's International Conference on Intelligent Education and Computer Technology, peer-reviewed and indexed in the ACM Digital Library. Cuerdo published in the International Journal of Theory and Application in Elementary and Secondary School Education, a peer-reviewed journal. Each precedent carries independent peer-review validation.

---

### TRAP 15: The "85%/41% AI Stats — Where in Your Manuscript?" Question [CRITICAL] [NEW v5]

**Panelist:** "Your presentation shows 85% of developers use AI agents and 41% of code is AI-generated. Where do these numbers appear in your manuscript body?"

> The statistics are from Osmani's 2026 Google whitepaper on agentic engineering, which we cite in our Software Model section. The manuscript describes the paradigm shift qualitatively — the transition from ad-hoc prompting to agentic engineering — citing both Osmani and Peng (2023) on productivity gains. The specific percentages appear on the slide as a visual anchor. You are correct that they are not quoted verbatim in the manuscript body. The manuscript focuses on the qualitative justification; the slide provides the quantitative context from the same source.

---

## PART B: OBJECTIVES

### TRAP 16: The "SO4 Redundancy" Question [MEDIUM]

**Panelist:** "Your SO3 already evaluates user acceptance using TAM. What does SO4 add?"

> SO3 and SO4 answer different questions, panelist. SO3 measures the absolute level of acceptance using TAM construct means — essentially "is the system acceptable?" SO4 measures the relative improvement — "is it significantly better than the manual process it replaces?" SO4 is the comparative test; SO3 is the benchmark test. Both are needed to fully answer whether NEXIAM succeeds.

---

### TRAP 17: The "Only Four Objectives?" Question [MEDIUM]

**Panelist:** "A standard descriptive-developmental study usually has more. Is four enough?"

> The four objectives form a dependency chain, panelist. You cannot design requirements (SO2) without first analyzing the existing process (SO1). You cannot evaluate acceptance (SO3) without a built system to evaluate. And you cannot test comparative performance (SO4) without acceptance data to compare. Four objectives, sequenced as dependencies, cover the full lifecycle — analyze, design, evaluate, compare. Adding more would break the logical chain.

---

## PART C: CONCEPTUAL FRAMEWORK (IPO)

### TRAP 18: The "IPO Oversimplification" Question [MEDIUM]

**Panelist:** "Your IPO model shows three boxes. A system with OMR, K-Means, RAG, AI scheduling, and RBAC is more complex. Are you oversimplifying?"

> The IPO is not hiding complexity — it is matching our research design. A descriptive-developmental study needs a framework that captures what goes in, what happens during development, and what comes out. The six NEXIAM features are implementation details that live inside the Process box under Rapid Construction. The IPO shows the research flow; the features are documented in Chapter 2's system architecture. They are at the correct level of abstraction for a conceptual framework.

---

### TRAP 19: The "Where Is RBAC in the IPO?" Question [MEDIUM] [NEW v5]

**Panelist:** "Your IPO input mentions campus data and exam scores. But NEXIAM's defining characteristic is role-based access. Where does RBAC appear?"

> RBAC is an architectural decision governing the entire Process and Output stages. It is not an input variable because it is not data we collect — it is a design principle we enforce. Within the IPO, RBAC belongs structurally inside Process as part of the RAD development where the authorization matrix is defined, and inside Output as a built-in feature of the delivered platform.

---

### TRAP 20: The "Why IPO? Why Not CIPP?" Question [MEDIUM] [NEW v5]

**Panelist:** "IPO is a systems engineering model. Why use it instead of CIPP or another research framework?"

> We chose IPO specifically because of its alignment with the descriptive-developmental design. IPO clearly separates the diagnostic stage (Input — what exists today), the intervention stage (Process — RAD development plus evaluation), and the outcome stage (Output — the platform and empirical results). More complex frameworks like CIPP add context and product evaluation layers that overlap with what Chapter 3 already covers through TAM.

---

### TRAP 21: The "TAM Inside Process — Why?" Question [MEDIUM] [NEW v5]

**Panelist:** "Your IPO shows TAM evaluation inside the Process box. But TAM evaluates the output. Why not put it in Output?"

> TAM serves two roles in our design. The administration of TAM — the pre-test and post-test — is part of the research process that generates data. The results of TAM — the acceptance measures — are part of the Output alongside the platform itself. Process contains the act of measuring; Output contains what the measurement found.

---

### TRAP 22: The "No Framework Validation" Question [MEDIUM]

**Panelist:** "Did you validate your IPO model with any expert before using it?"

> The IPO model was reviewed and approved by our adviser as part of the manuscript approval process. Additionally, the IPO framework is widely documented in descriptive-developmental research literature and has been used in comparable IT capstone studies. Its fit to our study was validated through the adviser's review cycle before final manuscript submission.

---

## PART D: SYSTEM ARCHITECTURE

### TRAP 23: The "K-Means — How Is K Defined?" Question [HIGH] [NEW v5]

**Panelist:** "How exactly does your algorithm define K, and what features are you clustering?"

> K represents predefined program categories aligned with ISPSC's academic offerings — STEM-aligned, Business-aligned, Arts-aligned, and Education-aligned clusters. The features we cluster are multi-dimensional scores from admission exam sub-tests: Math, Logic, Reading Comprehension, and subject-specific sections. The algorithm groups applicants with similar score vectors to highlight their natural academic strengths. The Guidance Counselor reviews these clusters on their dashboard. The system is structured as a Model Adapter architecture — the K-Means engine can be swapped for a different model without changing the rest of the system.

---

### TRAP 24: The "Dangerous AI — Is K-Means Deciding Admissions?" Question [CRITICAL]

**Panelist:** "Is it not dangerous to let an AI system decide which applicants get admitted or rejected?"

> I completely agree, which is why our K-Means module is strictly descriptive, not prescriptive. It does not make admission decisions. It mathematically surfaces aptitude patterns, but the Guidance Counselor always makes the final human call. Two safeguards enforce this. First, every placement decision requires manual counselor confirmation in the system. Second, the HMAC-SHA256 audit log records who approved each placement and when, creating an accountability trail. Passive acceptance of AI output is structurally prevented.

---

### TRAP 25: The "Human-in-the-Loop — But Who Watches the Counselor?" Question [ELITE]

**Panelist:** "You say the counselor makes the final decision. But who ensures the counselor doesn't just blindly follow the K-Means recommendation?"

> Two structural safeguards exist. First, the HMAC-SHA256 audit log records who approved each placement and when, creating individual accountability. Second, the K-Means dashboard displays multiple clusters with confidence boundaries — not a single recommended placement — so the counselor must actively interpret the data rather than passively accept a single output. The system is designed so that taking the AI's output without review would require active confirmation.

---

### TRAP 26: The "Why RAG vs Fine-Tuning?" Question [MEDIUM]

**Panelist:** "Why did you choose a RAG Chatbot instead of fine-tuning a local model on ISPSC documents?"

> Fine-tuning is static and expensive. If the administration changes a deadline or program quota, a fine-tuned model needs retraining to learn the new fact. With RAG, we simply update the text in our vector database — the chatbot immediately retrieves the new rule on the next query. RAG ensures real-time accuracy without the overhead of continuous model training, which is critical during an active admission cycle where policy changes occur.

---

### TRAP 27: The "RAG Hallucination — How Do You Actually Prevent It?" Question [HIGH]

**Panelist:** "RAG still uses an LLM for generation. What stops it from hallucinating a policy that does not exist?"

> Two safeguards. First, the retrieval step is designed to return only relevant document chunks — if no policy matches the query above a confidence threshold, the chatbot is programmed to respond with "I do not have that information" rather than fabricating. Second, the generation prompt instructs the LLM to answer strictly from the retrieved context and to admit uncertainty if the context is insufficient. This is the same architecture demonstrated by Dayata and Yap at IEEE COMNETSAT.

---

### TRAP 28: The "RBAC — How Does Cross-Role Isolation Actually Work?" Question [MEDIUM] [NEW v5]

**Panelist:** "With seven roles accessing the same system, how do you prevent a Guidance Counselor from accidentally modifying Registrar data?"

> Through database-level RBAC enforced at the API layer. Each role's permissions are defined in the authorization matrix during User Design. Exam scores are immutable records owned by the Registrar role. Guidance Counselor API endpoints lack Update or Delete permissions for registrar-owned tables. The system structurally prevents cross-role data contamination — it is not a UI-level restriction that can be bypassed by calling the API directly.

---

### TRAP 29: The "HMAC-SHA256 — Is It Real Crypto or Just Logging?" Question [HIGH] [NEW v5]

**Panelist:** "You mention HMAC-SHA256 for audit logging. Is this actual cryptographic chaining?"

> There is actual cryptographic chaining. Each action event generates an HMAC-SHA256 hash using a server-side secret key. The hash computation includes the previous event's hash as input, forming a chain. If anyone tampers with any log entry, the hash chain breaks — the next entry's hash will not verify against the tampered entry. This makes any unauthorized modification structurally detectable. This is not standard logging; it is a cryptographic audit trail.

---

### TRAP 30: The "Proctor Role — 7 Roles or 8 Actors?" Question [HIGH]

**Panelist:** "Your manuscript says seven user roles but the use case diagram shows eight actors. Which is it?"

> Both are correct, and the distinction is intentional. NEXIAM defines seven distinct RBAC roles: Applicant, Program Head, Guidance Counselor, Guidance Administrator, Registrar Staff, Registrar Administrator, and System IT Administrator. The Proctor is not a separate eighth role — it is a duty overlay assignable to any existing staff role at administrative discretion. A Guidance Counselor assigned as Proctor temporarily gains the proctoring interface permissions while retaining their base role. The use case diagram shows Proctor as an eighth actor because it is a distinct system interaction, but architecturally it sits on top of the seven-role RBAC structure as an overlay.

---

## PART E: THE "BIG QUESTIONS"

### TRAP 31: The "Why So Many Features?" Question [CRITICAL — memorize cold]

**Panelist:** "Why does your system have so many features? Is this scope too broad for a single study?"

**Part A — Each Feature Maps to a Documented Failure:**
> Each feature in NEXIAM traces directly to a documented operational failure at ISPSC — not to a desire to include everything. The OMR component exists because manual scoring takes five days to two weeks. The K-Means dashboard exists because Yukee et al. validated the algorithm locally but it sits unused in a research paper. The RAG chatbot exists because staff cannot handle the volume of applicant inquiries during peak periods. RBAC exists because RA 10173 requires data governance that paper systems cannot provide. Remove any one of these features, and the corresponding operational failure remains unresolved.

**Part B — Integration Is the Contribution:**
> The research contribution of NEXIAM is not inventing OMR or inventing K-Means. These are established techniques. The contribution is proving that a single governed pipeline can integrate them under a unified RBAC framework — something no existing system at ISPSC or comparable Philippine SUCs has demonstrated. Each component has been validated independently by Cuerdo et al. for OMR, by Tan for K-Means, by Dayata and Yap for RAG. What does not exist is a single system that runs all of them under one RA 10173-governed architecture. That is the gap.

**Part C — The Scope Is Bounded:**
> And to be clear, the scope is deliberately bounded. Enrollment processing, tuition management, long-term academic records, and cross-campus resource allocation are explicitly excluded. The study covers only the admission testing function: from applicant registration through result release and post-examination counseling support. This is not everything — it is the admission testing pipeline specifically.

---

### TRAP 32: The "What Is Your Actual Contribution?" Question [HIGH]

**Panelist:** "If all features already exist independently, what is the novel contribution of your study?"

> The contribution is three-fold. First, architectural: designing a single RBAC-governed pipeline that enforces RA 10173 across integrated features — no existing ISPSC study has demonstrated this. Second, empirical: measuring via paired TAM whether this integrated pipeline outperforms the manual process, which is a testable, reproducible comparison. Third, contextual: deploying and evaluating this at a Philippine SUC with documented resource constraints, providing a replicable blueprint for similar institutions. The novelty is not in the individual components — it is in the integration, the governance model, and the empirical evidence that the integration works.

---

# SECTION 2: JAYPEE — Scope, Development, Deployment

**Roles:** Project Manager / co-Lead Developer / Presenter of Slides 6, 8-9

---

### TRAP 33: The "Cloud vs Offline" Contradiction [CRITICAL]

**Panelist:** "Your scope says cloud-hosted, but you also claim offline resilience. Which is it?"

> The system is cloud-hosted overall, panelist. The one deliberate exception is the proctoring interface. Because examination venues at ISPSC Tagudin can lose connectivity, the proctor module uses service-worker caching to store data locally during an outage. When connection returns, it syncs back to the cloud. It is a targeted failsafe for exam venues, not a contradiction. The manuscript scope section explicitly documents this.

---

### TRAP 34: The "What If Service Worker Fails Mid-Exam?" Question [HIGH] [NEW v5]

**Panelist:** "What if the proctor's browser crashes during an offline exam?"

> Service-worker caching persists across browser sessions — a crash does not wipe the cache. The exam session state serializes to cache on every state change. On browser restart, the service worker restores the last saved state. The risk is data loss between the last save and the crash — for a multi-choice exam interface, that means at most one question's response. This is a reliability trade-off inherent to offline-first web architecture. Formal redundancy such as local database replication is future work.

---

### TRAP 35: The "Cache Poisoning — Can a Student Hack the Offline Cache?" Question [ELITE] [NEW v5]

**Panelist:** "What stops a student from hacking the offline cache and changing attendance data?"

> The service-worker cache is restricted exclusively to the Proctor's authenticated session — not the applicant's. The cached data is structurally limited to basic session state and attendance markers. Students never interact with the proctoring interface — they take the exam on paper. When connection restores, the system synchronizes using a secure token payload that validates upload integrity against the backend server.

---

### TRAP 36: The "AI-Augmented RAD — Isn't This Just ChatGPT?" Question [HIGH]

**Panelist:** "Are you just using ChatGPT to write your code? How is that a valid methodology?"

> We are using AI as an industry-standard development tool. Osmani's 2026 Google whitepaper confirms 85% of professional developers now use AI coding agents. Our methodology includes a strict human-in-the-loop Review and Integrate step. AI generates the boilerplate; David and I manually review, validate, and integrate every line. AI assists — humans decide what ships. This is documented in our Software Model section with Figure 2 showing the continuous feedback loop.

---

### TRAP 37: The "AI Scheduler — Is It Autonomous?" Question [MEDIUM]

**Panelist:** "Does your AI Scheduler automatically assign rooms and proctors?"

> No, panelist. It is strictly human-gated. The system analyzes availability and proposes an optimized schedule. A Registrar or Guidance staff member must physically click Approve before the schedule is finalized. The AI proposes; the human disposes. This is documented in our Glossary under Human-Gated Approval.

---

### TRAP 38: The "OMR Paper Drift — Scanner Skew" Question [MEDIUM] [NEW v5]

**Panelist:** "What if the scanner feeds paper in crooked? A tilt will misalign bubble coordinates."

> You are right — which is why our pipeline does not rely on static pixel coordinates. The OMR script executes a perspective correction algorithm first. It detects four printed anchor corners on our custom answer sheets, warps the skewed image back into a perfect flat rectangle, and only then applies contour detection to read the bubbles. The system mathematically corrects scanner drift before grading. This approach is based on Cuerdo's validated methodology for Philippine public school settings.

---

### TRAP 39: The "Mobile Accessibility for Rural Applicants" Question [MEDIUM] [NEW v5]

**Panelist:** "Many rural applicants do not own laptops. Are you forcing them to use internet cafes?"

> No. NEXIAM's frontend interfaces — especially the Applicant Portal — are built mobile-first with responsive design. The interface scales to smartphones and tablets. As long as the applicant has a basic mobile data connection, they can access their profile, interact with the RAG chatbot, and view results from their phone. This design choice directly addresses the equity gap identified in the Background.

---

### TRAP 40: The "Four Months Is Unrealistic" Question [CRITICAL]

**Panelist:** "OMR, chatbot, K-Means by September — is that realistic for undergrads?"

> Four things make this achievable. First, every component uses existing, published implementations — we are integrating proven building blocks, not building from scratch. Second, AI-augmented RAD eliminates the manual syntax bottleneck. Third, our project plan allocates the largest continuous block to Rapid Construction — early July through August. Fourth, the team has cross-functional dual roles. We mapped eight full weeks to the Rapid Construction phase. Coding work is scheduled around academic course load, including weekend sessions. The timeline is tight but documented and prioritized.

---

### TRAP 41: The "Team Capacity — 3 People, 6 Features" Question [HIGH]

**Panelist:** "You are three people, one focused on methodology. Effectively two developers building six features. How?"

> Three factors make this feasible. First, the features are not built from scratch — OMR uses established computer-vision libraries (OpenCV), the chatbot uses a RAG framework (LangChain), and K-Means uses scikit-learn. We are integrating existing validated tools, not inventing new algorithms. Second, AI-augmented RAD removes the boilerplate bottleneck. Third, the project assignment table shows David and I handle different feature sets in parallel — David focuses on OMR and RBAC while I handle the chatbot and scheduling.

---

### TRAP 42: The "OpenRouter Dependency — Graceful Degradation?" Question [MEDIUM]

**Panelist:** "Your AI components depend on free-tier API access. What happens when rate limit hits?"

> The chatbot and scheduling assistant are designed with graceful degradation. If the API rate limit is reached, the chatbot displays a fallback message directing the applicant to contact the Guidance Office — the same channel available today. The scheduling assistant switches to a manual proposal interface. Core functions — OMR scoring, RBAC, the applicant portal — are not affected because they do not depend on external API calls. Free-tier dependency is acknowledged as a limitation.

---

### TRAP 43: The "Service Worker Storage Limits" Question [ELITE] [NEW v5]

**Panelist:** "Service-worker caching has storage limits. How many proctor sessions can the offline cache hold?"

> The offline cache is designed for single-session resilience, not bulk offline storage. It holds one active exam session's attendance data and session state. The expectation is that connectivity interruptions are intermittent rather than sustained. The service worker is a failsafe for short outages, not an offline mode for prolonged disconnection.

---

### TRAP 44: The "September Evaluation — No Real Applicants" Question [HIGH]

**Panelist:** "Your evaluation happens outside the admission cycle. How can you claim the system works for real admissions?"

> We don't claim it works for real admissions — we claim it is acceptable to the people who would operate it during one. The evaluators are the exact same staff who manage the real cycle — Guidance, Registrar, Program Heads. They evaluate NEXIAM against the manual workflow they actually know. First-year students just experienced the real admission process months earlier. The limitation is acknowledged in Scope: results are bounded by simulated operational conditions. Live-applicant validation is future work.

---

# SECTION 3: CHRISTINE — Methodology, TAM, Statistics, Bias

**Roles:** QA Tester / Technical Writer / Methodologist / Presenter of Slides 10-12

---

### TRAP 45: The "Descriptive-Developmental vs Quasi-Experimental" Question [CRITICAL]

**Panelist:** "Pre-test/post-test with paired t-test is quasi-experimental. Why label it descriptive-developmental?"

> The research design is classified by what the study primarily does, panelist, not by one statistical test in one phase. Our study does three things in sequence. One: describe the existing admission process and pinpoint its gaps — that is descriptive, addressed by SO1 and SO2. Two: develop NEXIAM to address those gaps — that is developmental, addressed by the RAD construction phase. Three: evaluate whether the system improves upon the manual baseline — that uses paired TAM. The pre-test/post-test is an evaluation tool within the developmental phase, not an experimental manipulation. We are not randomly assigning groups, manipulating an independent variable, or controlling extraneous variables — which define a true experiment. This classification follows Frey (2022).

---

### TRAP 46: The "Why No Control Group?" Question [CRITICAL]

**Panelist:** "Why not split evaluators into control and experimental groups for stronger evidence?"

> Structurally impossible at this site for two reasons. First, the staff complement is too small — Guidance has two personnel, Registrar has three. Splitting gives n=1-2 per group, no statistical power. Second, the system replaces the workflow for the entire office — you cannot have half the staff on paper and half on NEXIAM processing the same applicants. The within-subjects paired design is the correct tool: each evaluator serves as their own control. We measure the same person's perception of the manual process and NEXIAM on the same constructs.

---

### TRAP 47: The "Apples to Oranges" Question [CRITICAL]

**Panelist:** "Pre-test measures manual process, post-test measures NEXIAM. You're comparing two completely different things."

> That is precisely the point of SO4, panelist. NEXIAM is designed to REPLACE the manual process. The only meaningful comparison is between the old method and the new — experienced by the same type of user performing the same type of task. Both instruments measure the same four TAM constructs using the same 7-point Likert scale. The referent changes — manual process versus NEXIAM — but the measurement framework is identical. A before-and-after comparison of two tools serving the same function is standard practice in technology adoption research.

---

### TRAP 48: The "TAM Pre-Test Breaks Davis Protocol" Question [HIGH]

**Panelist:** "Davis designed TAM for post-use measurement only. Administering it pre-use breaks protocol."

> The pre-test does not measure pre-adoption perception of NEXIAM — that would indeed break protocol. The pre-test measures evaluator perception of the existing manual admission process across the same four TAM constructs. The post-test then measures NEXIAM on the same constructs. The paired delta captures the shift from manual to automated. A single post-test would only tell absolute acceptance — not whether NEXIAM is significantly better than what they were using before, which is the actual research question.

---

### TRAP 49: The "n=46 Is Too Small" Question [HIGH]

**Panelist:** "n=46 is below conventional thresholds for parametric tests. Are you underpowered?"

> The 30-per-group threshold applies to independent samples designs, not paired designs. In a paired design, the effective sample is the number of pairs — n=46 paired observations. The Shapiro-Wilk test gates the normality assumption: if paired differences are normally distributed, the paired t-test is valid. We also report effect size — Cohen's d or rank-biserial correlation — not just p-values. If normality is violated, Wilcoxon signed-rank is the non-parametric fallback. The data decides the statistical path.

---

### TRAP 50: The "Shapiro-Wilk on n=46 — Won't It Always Pass?" Question [ELITE] [NEW v5]

**Panelist:** "Shapiro-Wilk on small samples has low power to reject non-normality. What if the data is actually non-normal and the test missed it?"

> This is a valid concern. At n=46, Shapiro-Wilk has moderate power — it detects gross departures but may miss subtle violations. Two safeguards. First, we report the Shapiro-Wilk statistic and p-value explicitly so the panel can assess the evidence. Second, we also report effect size — Cohen's d or rank-biserial correlation — which is robust to distributional assumptions. If the panel prefers, we can default to Wilcoxon as the primary test and report the t-test as supplementary, because Wilcoxon makes no distributional assumptions.

---

### TRAP 51: The "Purposive Sampling Bias" Question [HIGH] [NEW v5]

**Panelist:** "Your evaluators were hand-picked. How do you control for selection bias inflating TAM scores?"

> Purposive sampling is not convenience sampling. We selected evaluators for direct operational relevance — not predisposition to favor NEXIAM. The Guidance and Registrar staff are the complete available complement of those offices. The pre-test establishes each evaluator's baseline perception of the manual process. If an evaluator is a harsh rater, they rate both manual and NEXIAM harshly. The paired delta accounts for individual response tendencies.

---

### TRAP 52: The "16-Item TAM — But 4 Roles × 4 Items × 4 Constructs = 64 Unique Phrasings" Question [HIGH]

**Panelist:** "You say 16-item TAM, but your tables show 64 unique item phrasings. Which is it?"

> The TAM instrument has 16 items — 4 constructs × 4 items each. Those 16 items are role-adapted: the same construct is measured across all four respondent groups, but phrasing is tailored to each group's operational reality. A Registrar sees "NEXIAM improves my ability to track applicant records." A Guidance counselor sees "NEXIAM improves my ability to evaluate applicant profiles." Both measure Perceived Usefulness — the same TAM item, adapted for context. The psychometric properties are preserved because the underlying construct is identical.

---

### TRAP 53: The "IT Expert — Why Separate from TAM?" Question [MEDIUM]

**Panelist:** "Why is the IT expert excluded from TAM?"

> TAM measures end-user acceptance — perceived usefulness, ease of use, attitude, behavioral intention. An IT expert evaluating system architecture, security posture, and maintainability is not an end user in the TAM sense. The constructs do not fit their evaluation criteria. Instead, the IT expert conducts a structured technical walkthrough covering architecture, security, data privacy, and maintainability. Findings are reported qualitatively alongside TAM results as supplementary expert validation. Because n=1, no inferential statistics are applied.

---

### TRAP 54: The "Why 7-Point Likert vs 5?" Question [MEDIUM]

> A 7-point scale provides greater variance for detecting the pre-to-post perception shift that SO4 measures. With only 5 points, ceiling effects on the pre-test can mask improvement. Seven points give finer granularity. Davis (1989) originally used a 7-point Likert scale for TAM — we follow the instrument's validated specification.

---

### TRAP 55: The "TAM Pre-Test Ceiling Effect" Question [ELITE] [NEW v5]

**Panelist:** "What if your pre-test already shows high scores? If staff already rate the manual process positively, you may not detect any improvement."

> A ceiling effect would actually be informative — if evaluators already rate the manual process highly, that finding would indicate the operational problem is not perceived as severe by staff. However, our background data — 5-to-14-day scoring delays, Facebook page result posting, text-message coordination — suggests low pre-test scores are more likely. We acknowledge ceiling effects as a risk and will report any observed limitations transparently in Chapter 3.

---

### TRAP 56: The "Hawthorne Effect — Won't They Just Rate Highly?" Question [HIGH]

**Panelist:** "Evaluators know they are in a study. Won't they just rate highly to be nice?"

> You are referring to the Hawthorne effect, which we mitigate in two ways. First, the TAM evaluation is strictly anonymized — no identifying information is collected on the questionnaire. Second, pre-simulation instructions emphasize that we are testing the software's flaws, not the evaluator's performance. By framing the exercise as a critical stress-test rather than a showcase, we encourage honest responses rather than artificial praise.

---

### TRAP 57: The "Why TAM and Not SUS or ISO 25010?" Question [HIGH] [NEW v5]

**Panelist:** "There are many evaluation models. Why TAM specifically?"

> Our primary hurdle at ISPSC Tagudin is not just usability but institutional adoption. A system can be technically perfect — which ISO 25010 measures — but if Registrar or Guidance staff perceive it as extra work, they will revert to paper. TAM specifically measures Perceived Usefulness and Behavioral Intention to Use, which directly answers whether staff will actually adopt NEXIAM in the real world. SUS measures usability — a subset of what we need. ISO 25010 measures software quality — which the IT expert covers through the technical walkthrough.

---

### TRAP 58: The "Why Only PU and PEOU in SO4?" Question [MEDIUM] [NEW v5]

**Panelist:** "Your null hypotheses only test Perceived Usefulness and Perceived Ease of Use. Why not Attitude and Behavioral Intention?"

> PU and PEOU are the two core constructs of the original TAM. Davis (1989) established them as the primary determinants of technology acceptance. ATU and BIU are downstream constructs that mediate the PU/PEOU-to-usage relationship. Testing all four would inflate the familywise error rate with four separate paired tests without clear methodological benefit. If PU and PEOU both show significant improvement, the downstream constructs logically follow — the TAM literature has established that causal chain through decades of validation.

---

### TRAP 59: The "Effect Size — Why Important?" Question [MEDIUM]

**Panelist:** "Even if your t-test is significant, what effect size are you targeting?"

> We report Cohen's d for the parametric case and matched-pairs rank-biserial correlation for the non-parametric case. We follow conventional benchmarks: d=0.2 small, d=0.5 medium, d=0.8 large. We do not set a minimum target in advance because the magnitude of improvement is an empirical question. However, given the documented gap — 5-to-14-day manual scoring versus automated OMR — we expect a large effect size if the system functions as designed.

---

### TRAP 60: The "TAM Integration vs Individual Features" Question [ELITE] [NEW v5]

**Panelist:** "Your TAM items probe individual features. How do you measure whether the integration itself adds value?"

> The TAM questionnaire is administered after evaluators use the complete NEXIAM system, not individual features in isolation. When a Registrar uses the system, they experience the full pipeline: applicant registration, status visibility, inter-office coordination — all under RBAC. When a Guidance counselor uses it, they experience scheduling, OMR scoring, triage, and profiling. Their perception of usefulness reflects the integrated experience, not any single module. The shared TAM items — inter-office coordination (PU-4), visibility (PU-3) — specifically probe the integration value.

---

# SECTION 4: WEAK POINTS — Acknowledge, Don't Defend

When asked about these, name the section, acknowledge, move on. Do NOT defend.

1. "Simulated evaluators limit external validity" → Scope: "results bounded by simulated operational conditions."
2. "No formal NPC certification" → Scope: "outside this study's scope."
3. "Free-tier AI inference limits concurrent requests" → Scope: "paid capacity outside scope."
4. "n=46 for paired test, n=1 for IT expert" → Data Analysis: "sample size is relatively small."
5. "September evaluation outside admission cycle" → Scope: acknowledged limitation.
6. "Woelert (2023) duplicate in reference list" → Acknowledge formatting error, will correct.
7. "Dash et al. (2026) in Istoriya Journal — venue unverified" → Pivot to stronger precedents.
8. "Osmani whitepaper on Kaggle, not peer-reviewed" → Acknowledge as practitioner evidence. Peng (2023) carries peer-reviewed productivity evidence.

---

# SECTION 5: CROSS-DOMAIN PASS-OFF PHRASES

- David → Christine: "For the statistical methodology behind that claim, I defer to Christine, our QA Tester and Data Analyst."
- Christine → Jaypee: "For the technical architecture of that component, I defer to Jaypee, our Lead Developer."
- Jaypee → David: "For the legal and policy framework, I defer to David, our Project Manager."
- Anyone → Adviser: "This was reviewed and approved under our adviser, Dr. Zeus Vincent Mendoza."

---

# SECTION 6: TEAM DRILL PATTERN

**Phase 1: Individual (30 min each)** — Read your section aloud × 3 until answers feel natural.

**Phase 2: Pair Drill (20 min per pair)** — Fire random traps. Answer within 30 seconds. Swap roles.

**Phase 3: Full Run (30 min)** — Panelist player fires traps randomly. Practice pass-offs.

**CRITICAL FIRST 5 MINUTES — memorize these three answers cold:**

1. "Why so many features?" → David (Trap 31) — 3-part: feature-to-failure, integration contribution, bounded scope
2. "This is quasi-experimental, not descriptive-developmental" → Christine (Trap 45) — primary activity classification, evaluation tool vs manipulation
3. "Why no control group?" → Christine (Trap 46) — staff too few, system replaces workflow, within-subjects is correct

**David's core memorization set:** Traps 2, 9, 15, 24, 31, 32
**Jaypee's core set:** Traps 33, 36, 38, 40
**Christine's core set:** Traps 45, 46, 47, 48, 49, 52

---

*NEXIAM Proposal Defense Q&A Bank v5 — FINAL. Merges v4 Comprehensive (July 3) with cross-document audit findings (July 5). 60 traps. All answers grounded in manuscript (NEXIAM.pdf July 2026). Supersedes all previous versions.*
