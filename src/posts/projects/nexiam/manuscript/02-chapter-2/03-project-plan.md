---
section: "2.3"
chapter: "Project Plan"
status: "draft"
last_updated: "2026-07-14"
source: "NEXIAM.txt (pre-defense full manuscript)"
panel_changes: "None — Phase 3 did not revise this section. Verify timeline alignment with current progress before submission."
---

## Project Plan

The project timeline spans four months, from June to September 2026, organized by the four RAD phases and presented in Figure 3 as a Gantt chart.

| | June 2026 | July 2026 | August 2026 | September 2026 |
|---|---|---|---|---|
| Requirements Planning | | | | |
| User Design | | | | |
| Rapid Construction | | | | |
| Cutover | | | | |

The Requirements Planning phase occupies June to early July 2026, covering administrator questionnaires, workflow observations, thematic analysis, formal specification drafting, and initial database schema. Findings from this phase are confirmed directly with the Guidance and Registrar Offices before the team proceeds to User Design, ensuring every documented pain point is validated by the office that actually experiences it rather than assumed from observation alone. User Design runs all throughout July 2026, producing the role-based schema, authorization matrix, application service architecture, architectural diagrams, and interface mockups for all seven roles. This phase exists to validate feature needs before construction begins, rather than to accumulate more features.

Rapid Construction spans early July to August 2026 as the build-and-test core, structured as an iterative back-and-forth between design refinement and incremental construction rather than a single linear build, prioritizing core functionality over feature breadth wherever development time is constrained. Coding work is scheduled around the team's ongoing academic course load, including weekend sessions during heavier class weeks, and the extent of AI-assisted code generation is bounded by the team's own funding for model access. Cutover occupies September 2026, encompassing cloud-hosted deployment, TAM evaluation, and manuscript finalization and documentation.

This timeline deliberately allocates its largest continuous block to Rapid Construction. Because the team utilizes the agentic engineering methodology, the traditional timeline bottleneck of manual syntax generation is removed from the schedule. This specific logistical shift is what allows a compact three-person academic team to successfully execute heavy enterprise layers within a strict four-month operational window. By recovering hours that would otherwise be spent writing boilerplate code, the researchers reallocate their scheduling capacity directly into complex algorithmic tuning, such as building the integration layer for the K-Means aptitude model and future ML models, refining OMR for accuracy targets, and iterating on RAG Chatbot reliability and security. Ultimately, this approach secures vital integration testing time for the complex subsystems without compressing the Cutover evaluation, thereby supporting stability for the following stages.
