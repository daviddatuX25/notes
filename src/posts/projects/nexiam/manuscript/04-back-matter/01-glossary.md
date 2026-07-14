---
section: "back-matter"
chapter: "Glossary"
status: "template"
last_updated: "2026-07-14"
source: "NEXIAM.txt (defense version) + Phase 3 updates applied"
panel_changes: "Phase 3: Remove Paired T-Test, Shapiro-Wilk, Wilcoxon, Pre-Test, Thematic Analysis, IT Expert. Update TAM (2 constructs, 5-point, post-test). Update Likert (5-point). Add Identifier Key, Staff Interface, Slovin's Formula, Process Mapping, Workflow Analysis."
---

# Glossary

**Admission Testing System.** The end-to-end digital platform NEXIAM provides, covering applicant registration, examination administration, automated scoring, decision-support triage, and result delivery that is governed by role-based access control.

**Applicant Portal.** The NEXIAM web interface through which prospective students register, submit requirements, track application status, and view examination results without requiring physical presence on campus.

**Admission Support Dashboard.** The NEXIAM interface that surfaces aptitude patterns and course slot monitoring data for counselor and program head review, supporting data-driven placement decisions.

**AI-Augmented Rapid Application Development (AI-RAD).** *[REMOVED — replaced by AI-assisted development within standard RAD.]*

**Audit Trail.** A chronologically chained record of system events whose integrity is enforced through HMAC-SHA256 cryptographic hashing. Each entry includes the hash of the previous entry, making any post-hoc tampering detectable.

**Data Privacy Act (RA 10173).** The Philippine law mandating protection of personal data in both government and private sector processing. NEXIAM is designed to align with RA 10173 at the application layer through RBAC-enforced data isolation and HMAC-SHA256 audit logging. Formal National Privacy Commission certification is outside scope.

**Free Higher Education Act (RA 10931).** The 2017 Philippine law providing free tuition in all state universities and colleges. It significantly increased admission volumes at ISPSC, creating the operational pressure that motivates NEXIAM's digitization of the admission testing pipeline.

**HMAC-SHA256.** A cryptographic function combining a secret key with message data to produce a tamper-evident hash. In NEXIAM, every audit log entry carries an HMAC-SHA256 signature chained to the previous entry's hash, ensuring any unauthorized modification is structurally detectable.

**Human-Gated Approval.** A design constraint in NEXIAM where no automated recommendation — such as an AI-proposed exam schedule — takes effect until a human actor explicitly reviews and approves it. The system proposes; the authorized officer disposes.

**Identifier Key.** A unique authentication credential embedded in the applicant's profile, used in place of traditional username-password login for the applicant portal.

**Input-Process-Output (IPO) Model.** The conceptual framework organizing NEXIAM's research design. Input captures institutional data and development foundations. Process covers RAD development and the TAM post-test evaluation. Output consists of the NEXIAM platform and the descriptive TAM acceptance measures.

**K-Means Clustering.** An unsupervised machine learning algorithm that partitions applicant subtest scores into descriptive aptitude groups. In NEXIAM, K-Means surfaces patterns for counselor review. It is a visualization and decision-support tool — it does not make or recommend admission decisions.

**Likert Scale.** The 5-point response format (1 = Strongly Disagree to 5 = Strongly Agree) used in NEXIAM's TAM questionnaire.

**NEXIAM.** The proposed system. The acronym stands for Next-Generation Examinations and (X) Cross-Role Intelligent Admissions Management. NEXIAM is a web-based, role-governed college admission testing platform integrating RBAC, computer-vision OMR, K-Means aptitude clustering, a RAG chatbot, AI-assisted scheduling, and HMAC-SHA256 audit logging.

**Offline Resilience.** The proctoring interface's ability to maintain examination session state during connectivity loss through service-worker caching, with automatic synchronization to the cloud database when the connection restores. This applies only to the proctoring module; all other system functions require cloud connectivity.

**Optical Mark Recognition (OMR).** The computer-vision pipeline in NEXIAM that automates scoring of physical answer sheets. It applies perspective correction to compensate for scanner skew, then performs contour detection to read marked bubbles — replacing a manual process that currently takes five days to two weeks.

**Post-Test.** The single administration of the TAM questionnaire, conducted after evaluators have used NEXIAM in simulated operational scenarios. No pre-test is administered.

**Process Mapping.** The method used in Specific Objective 1 to document current admission workflows. Flow charts are produced from semi-structured questionnaires and field observation, establishing the operational baseline that NEXIAM replaces.

**Proctor.** A duty overlay assignable to any existing staff role at administrative discretion — not a distinct eighth user role. The Proctor overlay grants access to the proctoring interface for attendance marking and session monitoring during examinations.

**Purposive Sampling.** The non-probability sampling method used to select NEXIAM's administrative evaluators (n=16). Participants are chosen for their direct operational knowledge: Registrar and Guidance staff who manage the current manual workflow, and Program Heads responsible for course triage. First-year students (n=255) are sampled through Slovin's formula.

**Rapid Application Development (RAD).** The iterative software development methodology — structured around Requirements Planning, User Design, Rapid Construction, and Cutover — that governs NEXIAM's construction cycle. The development team uses AI-assisted code generation under mandatory human review within the Rapid Construction phase.

**Retrieval-Augmented Generation (RAG).** A natural language processing architecture that grounds an LLM's responses by first retrieving relevant chunks from a curated knowledge base. NEXIAM's chatbot uses RAG restricted to institutional policy documents — if no document matches the query above a confidence threshold, the chatbot responds that it does not have the information rather than fabricating.

**Role-Based Access Control (RBAC).** The security model governing all seven NEXIAM user roles. Each role receives only the permissions necessary for its designated functions. An eighth actor — Proctor — is a duty overlay assignable to any existing staff role.

**Service Worker.** A browser-side background script enabling the proctoring interface to cache examination session data locally during connectivity interruptions and synchronize to the cloud database upon reconnection.

**Slovin's Formula.** The sampling formula used to determine the first-year student sample size (n=255) from an estimated population of 700 applicants at a 0.05 margin of error.

**Staff Interface.** The RBAC-governed NEXIAM interface serving Guidance Office, Registrar Office, and Program Head personnel with role-isolated views scoped to each office's operational functions.

**Technology Acceptance Model (TAM).** The evaluation framework — grounded in Davis (1989) — measuring two constructs: Perceived Usefulness and Perceived Ease of Use. NEXIAM's TAM instrument is administered as a single post-test on a 5-point Likert scale, with items adapted to the operational realities of each respondent role.

**User Role.** A defined set of RBAC permissions assigned to a category of system users. NEXIAM defines seven distinct roles — Applicant, Program Head, Guidance Counselor, Guidance Administrator, Registrar Staff, Registrar Administrator, and System IT Administrator — with Proctor as a duty overlay assignable to any staff role.

**Workflow Analysis.** The analytical method used in Specific Objective 1 to process field observation data, identifying procedural bottlenecks, coordination failures, and data integrity gaps in the current admission process.
