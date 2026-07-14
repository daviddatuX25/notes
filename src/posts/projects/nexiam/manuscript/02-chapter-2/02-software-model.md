---
section: "2.2"
chapter: "Software Model"
status: "draft"
last_updated: "2026-07-14"
source: "NEXIAM_Manuscript_Working_Sections.md (Phase 3)"
panel_changes: "RAD Model not 'AI-Augmented RAD'. AI-assisted development discussed as implementation approach within Rapid Construction, not as a named model variant."
---

## Software Model

In developing institutional web systems, the Rapid Application Development (RAD) model (Martin, 1991; Pressman & Maxim, 2020) has proven effective for ensuring functional suitability and security, particularly in recent Philippine state university deployments (Olipas, 2020; Melendres & Aranda, 2024). RAD organizes development into four phases: Requirements Planning, User Design, Rapid Construction, and Cutover. Within Rapid Construction, the team uses AI-assisted development to accelerate routine implementation work while maintaining human code review on every generated module. This approach aligns with productivity gains documented in recent software engineering studies (Peng et al., 2023) and reflects the transition from ad-hoc prompting to agentic engineering described in contemporary industry practice (Osmani et al., 2026). The study's contribution is the integrated admission system that results, not the AI tools used during construction.

**Requirements Planning.** This phase establishes an empirical baseline of institutional workflow gaps drawn from the descriptive inquiry in Specific Objective 1. It systematically gathers verified operational evidence through questionnaires and field observation to produce the formal technical specifications and the initial database schema. These validated operational failures become the specific local context that grounds all subsequent development, preventing the generation of generic software solutions.

**User Design.** This phase translates the field-verified requirements into deterministic architectural blueprints. It formulates the relational RBAC database schema, establishes the authorization matrix, produces architectural diagrams including data flow, entity-relationship, and business requirements diagrams, and generates interface mockups for all seven user roles. By finalizing these blueprints before coding begins, the team ensures the system architecture inherently complies with the Data Privacy Act (Republic Act No. 10173).

**Rapid Construction.** This phase forms the technical development core. The team systematically researches and evaluates application frameworks to accommodate complex system requirements. AI-assisted development accelerates the construction of processing layers such as the computer-vision OMR scoring engine and the RAG chatbot orchestration. Every AI-generated module undergoes rigorous peer code review. Construction proceeds iteratively between design refinement and incremental build, with completed modules demonstrated to Guidance and Registrar staff for validation against the functional requirements specified in Specific Objective 2.

**Cutover.** This phase transitions the development cycle into empirical evaluation. It deploys the completed NEXIAM platform into a cloud-hosted environment to demonstrate operational capacity. Following deployment, simulated evaluators execute role-specific scenarios corresponding to the use cases defined in Appendix B. Each participant independently completes the Technology Acceptance Model questionnaire as a single post-test. This protocol measures absolute user acceptance levels across two constructs: Perceived Usefulness and Perceived Ease of Use, addressing Specific Objective 4.

### Figure 2. Rapid Application Development (RAD) Model

*[Diagram showing the four RAD phases: Requirements Planning, User Design, Rapid Construction, Cutover — with feedback loops between Rapid Construction and User Design, and between Cutover and Requirements Planning.]*
