---
section: "1.4"
chapter: "Scope and Limitation of the Study"
status: "review"
last_updated: "2026-07-14"
source: "NEXIAM_Manuscript_Working_Sections.md (Phase 3)"
panel_changes: "Phase 2/3: Removed IT Expert from evaluation. Removed paired pre-post comparison. Removed ATU/BIU constructs. Updated population to n=271 with Slovin's formula. RAD model not 'AI-Augmented RAD'. Process mapping not thematic analysis."
---

## Scope and Limitations of the Study

This study covers the design, development, and evaluation of NEXIAM for managing the college admission testing workflow at the Guidance and Registrar Offices of ISPSC Tagudin Campus, during the June through September 2026 admission cycle. The pipeline runs from applicant registration through result release and post-examination counseling support. Descriptive inquiry captures operational workflows, process gaps, and inter-office coordination failures through semi-structured questionnaires and field observation. Process flow charts visualize current admission workflows, establishing the operational baseline that NEXIAM replaces.

**System Coverage.** Seven RBAC-governed user roles: Applicant, Proctor (duty overlay), Guidance Counselor, Guidance Administrator, Registrar Staff, Registrar Administrator, and System IT Administrator. A Super Admin role exists for oversight and future IT assignment but is not evaluated. Normal admission functions — registration, scheduling, result processing, and inter-office coordination — operate through RBAC-governed dashboards. Staff interfaces serve Guidance, Registrar, and Program Heads with role-isolated views. Applicants authenticate via a unique identifier key given upon registration. Email delivers schedule and result notifications. The portal provides 24/7 information retrieval and chatbot access. In-app messaging covers fallback inquiries from applicants to staff and a consultation dashboard for cross-staff communication.

**OMR.** A computer-vision engine scores scanned answer sheets in batches. Bubbles below a configurable confidence threshold are flagged for human verification. Accuracy is discussed within the development phase but is validated through TAM acceptance measures, not benchmarked against exhaustive methods.

**AI Orchestration Frameworks.** This constitutes the use of existing AI software development kits to create AI-powered features including a RAG chatbot and AI-assisted scheduling. It retrieves applicant-specific information — own results, own schedule, AI-optimized assignments — from the scheduling database and ISPSC institutional documents. Below retrieval confidence, it declines to answer. The scheduler proposes; authorized officers confirm. AI inference uses OpenRouter free-tier access; however, paid capacity is an option for future use. These features are validated through TAM, not NLP benchmarks.

**Admission Support Models.** An extensible interface wrapper loads an unsupervised model for Historical Cohort Profiling and a baseline supervised model for Preliminary Program Matching. The engine surfaces aptitude patterns for counselor review through an Admission Support Dashboard. Model accuracy, tuning, and predictive validity are unmeasured. Evaluation is restricted to system utility and user acceptance through TAM. The algorithm is descriptive — every placement requires manual counselor confirmation.

**Audit Trail.** All system events — data access, role actions, placement decisions, schedule modifications — are logged with HMAC-SHA256 cryptographic chaining. Unauthorized modification is structurally detectable.

**Proctoring Interface.** Service-worker caching provides offline resilience during examination sessions with intermittent connectivity, synchronizing to the cloud on reconnection. All other functions require cloud connectivity. Proctor is a duty overlay, not a distinct RBAC role.

**System Boundaries.** Enrollment processing, tuition management, long-term academic records, and cross-campus resource allocation are outside scope. Deployment is restricted to a cloud-hosted environment driven by local hardware constraints. Formal NPC certification and a Privacy Impact Assessment are excluded. Applicant consent is assumed under the existing ICAT application form; formal verification of this consent basis is future work.

**Development.** NEXIAM is constructed through the RAD model. AI-assisted implementation accelerates coding under human review, but the study's contribution is the integrated admission system that results, not the AI tools used during construction. The development process and component integration decisions are documented in Chapter 3.

**Evaluation.** TAM is administered as a single post-test measuring Perceived Usefulness and Perceived Ease of Use on a five-point Likert scale. Acceptance is reported through descriptive means per construct and per respondent role. No inferential comparison to a manual baseline is performed. The September 2026 evaluation window falls outside the active admission cycle, necessitating simulated evaluators executing role-based scenarios. Results are bounded by simulated operational conditions. No IT Expert evaluation is conducted. Architecture, RBAC implementation, and data privacy compliance are validated through iterative design review and the development team's internal peer review during Rapid Construction.
