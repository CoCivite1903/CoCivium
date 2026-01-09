# Master Plan v1.8 (CoGibberTrue anchors)

## [MP.CGT.0050] Document rules (stable anchors; additive evolution)

- Section IDs (e.g., `MP.CGT.0410`) are stable anchors. Do not renumber existing anchors.
- Insert new material by choosing an unused ID (e.g., between `0410` and `0420`, use `0415`, `0416`, etc.).
- Prefer additive evolution over destructive edits; deprecate rather than delete when feasible.
- If something is not ready for the mainline, push it to the Dump-Appendix (so nothing is lost).

- Use requirement words (`MUST`, `SHOULD`, `MAY`) in the RFC 2119 sense when writing “rules” or “gates,” so CoPrime can treat them as machine-actionable requirements.
- Maintain a **Borrow/Reuse Ledger**: for any major dependency or inspiration source, record license, obligations, and whether we *use as-is*, *fork*, *wrap*, or *compete*.
- Maintain an **IP Boundary Ledger**: explicitly mark what is intended to remain original (patentable themes, novel workflows, unique orchestration patterns) vs what is deliberately derivative.
- Maintain a **Reference Index**: prefer primary sources (standards bodies, official specs, official repos). Keep URLs in-document so the plan remains self-verifiable.
- Regression guardrail: do not remove domains, anchors, or gate criteria; if something becomes wrong, mark it “DEPRECATED” and replace with the new truth.

---

## [MP.CGT.0060] Table of Contents (CoGibberTrue anchors)

Legacy ToC retained for provenance. Canonical ToC is auto-generated and appears at the end of this section.

- [MP.CGT.0100] Purpose and intent
- [MP.CGT.0110] Document status and canonical landing (CoShare)
- [MP.CGT.0200] Current state and constraints (legacy CoSuite snapshot + local vault reality)
- [MP.CGT.0300] Target state (CoCivium@CoCivium.org as the reincarnated CoShare)
- [MP.CGT.0350] Terminology and storage topology (CoShare, CoShareVault, CoSharePC, CoVault)
- [MP.CGT.0400] CoPhases overview
  - [MP.CGT.0410] CoPhase1: Master Plan + IP protection + seeding the ecosystem
  - [MP.CGT.0415] CoPhase1 Definition of Done (DoD): what “ready for CoPhase2” means
  - [MP.CGT.0420] CoPhase2: Legal wave + recruitment + XR soft launch (prove paid value)
  - [MP.CGT.0425] Soft launch blueprint: what we ship, how we price, and what we prove
  - [MP.CGT.0430] CoPhase3+: Hard launch via InSeed.com into enterprise and government
  - [MP.CGT.0440] Verification-first strategy: CoAudit + CoVerify + Reference Harness (no-customers-required)
  - [MP.CGT.0450] Phase integration (what changes in CoPhase1 and CoPhase2)
  - [MP.CGT.0460] CoPrime execution packet: First 10 Moves (turn plan into PRs)
  - [MP.CGT.0465] Pilot kit: standard deliverables for XR community trials
- [MP.CGT.0500] Gates and survival assumptions (CoPhase2Gate)
  - [MP.CGT.0510] CoPhase2Gate Evidence Pack (standard proof artifact)
  - [MP.CGT.0520] CoPhase2Gate checklist (versioned; measurable)
- [MP.CGT.0600] CoSources and indexing strategy (source-of-truth vs source-of-probability)
  - [MP.CGT.0610] Public vs vault: what is allowed to be public
  - [MP.CGT.0615] Receipts and reproducibility: what “source-of-probability” requires
- [MP.CGT.0700] Websites, outreach, and constellation for “perceived scale”
  - [MP.CGT.0710] Domain portfolio and how it fits the Master Plan (Appendix spine)
  - [MP.CGT.0715] Canonical domain roles (recommended)
  - [MP.CGT.0720] Activation by phase (how domains “turn on”)
  - [MP.CGT.0725] Operational discipline (non-negotiables)
  - [MP.CGT.0730] Domain-to-repo model: Human site + CoAura site
  - [MP.CGT.0735] Full domain registry (33/33): purpose + action + repo map
  - [MP.CGT.0738] Prevent repo explosion: template + generator or this collapses
  - [MP.CGT.0740] Default DNS + redirect rules (keep coherence, reduce ops load)
- [MP.CGT.0800] Change control (how this Master Plan evolves)
- [MP.CGT.0900] Dump-Appendix (hold-pen for non-mainline material)


### Canonical ToC (auto-generated from anchors, v1.8)

- [MP.CGT.0050] Document rules (stable anchors; additive evolution)
- [MP.CGT.0060] Table of Contents (CoGibberTrue anchors)
- [MP.CGT.0065] Delta log (v1.8 additions; no deletions)
- [MP.CGT.0070] CoMetaTrain (LLM-operational handles for CoPrime)
- [MP.CGT.0100] Purpose and intent
- [MP.CGT.0110] Document status and canonical landing (CoShare)
  - [MP.CGT.0105] Derivative-first, evidence-heavy posture
- [MP.CGT.0200] Current state and constraints
- [MP.CGT.0300] Target state
- [MP.CGT.0350] Terminology and storage topology
- [MP.CGT.0400] CoPhases overview
- [MP.CGT.0410] CoPhase1: Master Plan + IP protection + seeding the ecosystem
- [MP.CGT.0415] CoPhase1 Definition of Done (DoD): what “ready for CoPhase2” means
- [MP.CGT.0420] CoPhase2: Legal wave + recruitment + XR soft launch (prove paid value)
- [MP.CGT.0425] Soft launch blueprint: what we ship, how we price, and what we prove
  - [MP.CGT.0427] Soft Launch deliverables (minimum viable “proof kit”)
  - [MP.CGT.0428] Soft Launch success metrics (what “traction” looks like)
- [MP.CGT.0430] CoPhase3+: Hard launch via InSeed.com into enterprise and government
- [MP.CGT.0440] Verification-first strategy: CoAudit + CoVerify + Reference Harness (no-customers-required)
  - [MP.CGT.0442] CoHarness: the reference community testbed (multi-tenant, fake brands)
  - [MP.CGT.0444] CoDataForge: dataset strategy (ethical, non-traceable, reproducible)
  - [MP.CGT.0446] CoAuditSuite: measurable claims, tests, and gates
  - [MP.CGT.0448] CoSourceNet sandbox: opt-in identity, RepTag, CoHalo, portability
- [MP.CGT.0450] Phase integration (what changes in CoPhase1 and CoPhase2)
- [MP.CGT.0460] CoPrime execution packet: First 10 Moves (turn plan into PRs)
- [MP.CGT.0465] Pilot kit: standard deliverables for XR community trials
- [MP.CGT.0500] Gates and survival assumptions (CoPhase2Gate)
- [MP.CGT.0510] CoPhase2Gate Evidence Pack (standard proof artifact)
- [MP.CGT.0520] CoPhase2Gate checklist (versioned; measurable)
- [MP.CGT.0530] Competitive analysis as “derivability” (borrow, align, reuse, then differentiate)
  - [MP.CGT.0535] Borrow/Reuse Ledger (template)
  - [MP.CGT.0537] Seed candidate set (initial Borrow/Reuse Ledger entries)
  - [MP.CGT.0540] Standards and best-practice alignment shortlist (start here)
  - [MP.CGT.0545] IP Boundary Ledger (how to stay derivative without losing defensibility)
  - [MP.CGT.0550] Research protocol (keep the plan reference-heavy, and keep it current)
  - [MP.CGT.0555] Verification suite alignment (make CoAudit/CoVerify look real before customers exist)
- [MP.CGT.0600] CoSources and indexing strategy
- [MP.CGT.0610] Public vs vault: what is allowed to be public
- [MP.CGT.0615] Receipts and reproducibility: what “source-of-probability” requires
- [MP.CGT.0700] Websites, outreach, and constellation for “perceived scale”
- [MP.CGT.0710] Domain portfolio and how it fits the Master Plan (Appendix spine)
  - [MP.CGT.0715] Canonical domain roles (recommended)
  - [MP.CGT.0720] Activation by phase (how domains “turn on”)
  - [MP.CGT.0725] Operational discipline (non-negotiables)
- [MP.CGT.0730] Domain-to-repo model: Human site + CoAura site
  - [MP.CGT.0732] Repo naming convention (recommended)
  - [MP.CGT.0733] “Two sites” does not mean “two full builds”
  - [MP.CGT.0738] Prevent repo explosion: template + generator or this collapses
- [MP.CGT.0735] Full domain registry (33/33): purpose + action + repo map
- [MP.CGT.0740] Default DNS + redirect rules (keep coherence, reduce ops load)
- [MP.CGT.0800] Change control (how this Master Plan evolves)
- [MP.CGT.0810] Version history (high-level deltas)
- [MP.CGT.0820] Reference Index (curated primary sources)
- [MP.CGT.0830] “Unknowns” backlog (keep hypotheses visible)
- [MP.CGT.0900] Dump-Appendix (hold-pen; do not delete)
  - [MP.CGT.0905] Legacy snippet from v1.2 (kept verbatim for safety)
- [MP.CGT.0910] Appendix A: CoSession reliability and anti-regression patterns (mineable ops doctrine)
  - [MP.CGT.0915] The Anti-Regression Stack (ARS): 12 patterns that compound
  - [MP.CGT.0920] CoPrime execution rubric: “Always programmatic; always export”
  - [MP.CGT.0925] Minimal “No-Devolve Checklist” for every update
  - [MP.CGT.0930] Suggested automation hooks (to implement later)
- [MP.CGT.0940] Appendix B: Reuse/Import Library (starter catalog with links)
---

## [MP.CGT.0065] Delta log (v1.8 additions; no deletions)

This version strengthens three things:

1) **Canonical landing clarity**: explicitly states this file is a staging draft and specifies the recommended canonical location in CoShare (`CoCivium/plans/MasterPlan.md`) plus how to archive legacy drafts with hashes.
2) **Borrow/Reuse intelligence**: expands the “derivability” competitive analysis with more standards, open-source codebases, and evaluation tooling we can reuse safely (and how to track obligations).
3) **Reliability mining for CoPrime**: consolidates “no-regress” / anti-devolution practices into a mineable appendix so CoPrime can operationalize them without contaminating the narrative flow.

Everything prior remains additive; where earlier sections were thin or truncated, v1.8 expands them without removing prior content.
## [MP.CGT.0070] CoMetaTrain (LLM-operational handles for CoPrime)

This section exists to make this Master Plan *drivable* by a CoPrime session (or any orchestrator). It provides repeatable handles (CoCTAs), expected artifacts, and regression checks so the plan can evolve without losing coherence.

### CoMeta block (machine-parsable-ish)

- `CoMeta.Doc` = `MasterPlan`
- `CoMeta.Version` = `v1.8`
- `CoMeta.AnchorScheme` = `MP.CGT.####`
- `CoMeta.Status` = `Staging draft; becomes canonical when merged into CoShare`
- `CoMeta.CanonicalLanding` = `CoShare/CoCivium/plans/MasterPlan.md`
- `CoMeta.UpdatePolicy` = `Additive (deprecate > delete)`
- `CoMeta.SourceOfTruthPreferred` = `CoShare cloud (source-of-probability with receipts)`
- `CoMeta.PrimaryTarget` = `XR gaming community org tooling (platform-agnostic bolt-on)`
- `CoMeta.SecondaryTarget` = `Enterprise/Gov via InSeed.com (Hard Launch later)`
- `CoMeta.SecurityPosture` = `Verification-first; synthetic-first; privacy-first`
- `CoMeta.IPPosture` = `Derivative-first where safe; protect differentiators`

### CoCTA handles (stable task IDs)

**Phase1 CoCTAs (plan → repos → evidence):**
- `CoCTA.P1.001` Create/confirm CoShare repo map (what exists, what is new, what is deprecated).
- `CoCTA.P1.002` Establish “vault-first” rule: secrets + crown jewels live in CoVault; public repos contain safe, pointer-safe material only.
- `CoCTA.P1.003` Create the template system to prevent repo explosion (Human site + CoAura site + docs + CI + receipts).
- `CoCTA.P1.004` Implement receipts everywhere: sha256 sidecars + deterministic builds + “golden run” scripts.
- `CoCTA.P0.010` Land this document into `CoShare/CoCivium/plans/MasterPlan.md` as canonical and archive older drafts under `/plans/legacy/` with hashes.
- `CoCTA.P1.005` Produce the CoPhase1 DoD Evidence Pack skeleton and fill the first 5 proofs.
- `CoCTA.P1.006` Stand up the Reference Harness (fake brands + multi-tenant) as the always-available demo surface.
- `CoCTA.P1.007` Build the first adapter (Discord-like) with contract tests (no vendor lock-in).
- `CoCTA.P1.008` Create Borrow/Reuse Ledger + IP Boundary Ledger and seed it with the first 20 candidates.
- `CoCTA.P1.009` Draft IP protection wave strategy (themes, jurisdictions, timelines, confidentiality rules).
- `CoCTA.P1.010` Publish “Soft Launch Pilot Kit v0” (deliverables list + pricing hypothesis + success metrics).
- `CoCTA.P1.011` Establish the CoAuditSuite test runner (LLM evals + policy tests + data-forge reproducibility) and wire it into CI.
- `CoCTA.P1.012` Adopt minimum supply-chain posture for public repos (SBOM + provenance + signing) to build trust early.

**Phase2 CoCTAs (legal wave + recruitment + soft launch):**
- `CoCTA.P2.001` Select law firms + file the first patent wave (staged; confidentiality guarded).
- `CoCTA.P2.002` Recruit initial CoStewards/partners (XR community operators, devs, trust/safety folks).
- `CoCTA.P2.003` Run 3 pilot communities through the Pilot Kit; capture before/after metrics + testimonials.
- `CoCTA.P2.004` Produce the CoPhase2Gate Evidence Pack (credible proof bundle).
- `CoCTA.P2.005` Validate survivability posture (backup, replication, key rotation, incident drill).

### Regression checks (how to prevent de-evolution)

- **Anchor Integrity:** no existing `MP.CGT.*` anchors removed; new content uses unused IDs.
- **ToC Completeness:** every anchor heading appears in the canonical ToC.
- **Domain Integrity:** the Domain Registry remains 33/33 unless a deliberate acquisition/disposal decision is documented.
- **Gate Integrity:** CoPhase1 DoD + CoPhase2Gate criteria only evolve by additive clarification or explicit deprecation notes.
- **Borrow/IP Integrity:** Borrow/Reuse Ledger and IP Boundary Ledger both grow over time; neither is allowed to “reset.”
- **No Truncation:** avoid placeholder ellipses in registries/tables; if content is too long, move the full version to an appendix and keep a short pointer in-line.
- **Evidence Receipts:** every new “claim” added to the plan points to (a) a public standard/spec, (b) a repo, or (c) a reproducible test artifact (hash + command).
- **Session Robustness:** if a session/tool cannot reliably keep state, emit an evidence pack to CoSources (or Dump-Appendix) immediately. See Appendix A.

---


## [MP.CGT.0100] Purpose and intent

CoCivium has evolved organically up to this point, without a cohesive top-down master plan. This document is the first attempt at a durable, phase-driven plan that can guide the reincarnation of the project into a structured, indexed, and survivable operating system for CoCivium’s next stages.

This Master Plan is intended to be action-driving (it should cause repo changes, asset migrations, and outreach sequencing), not merely descriptive.


### [MP.CGT.0105] Derivative-first, evidence-heavy posture

This Master Plan is intentionally **derivative where feasible**: we prefer standards, open-source components, and proven governance patterns over inventing new wheels. The plan is also intentionally **reference-heavy**: major claims SHOULD be traceable to primary sources or to reproducible experiments inside the Reference Harness. Where we cannot cite or prove something, we label it as **Hypothesis** and attach an explicit test plan.


## [MP.CGT.0110] Document status and canonical landing (CoShare)

This file is a **staging, transfer-safe Master Plan draft** produced outside the new CoShare. It is intended to **inspire and accelerate** the creation of the **canonical** Master Plan inside the CoShare GitHub org/account.

**Recommended canonical landing (CoPrime SHOULD enforce):**
- CoShare (GitHub org/account) → repo `CoCivium` → folder `/plans/` → `MasterPlan.md`
- Prior drafts go to `/plans/legacy/` with `sha256` sidecars; never delete, deprecate.

**Rule:** once merged into CoShare, the CoShare copy becomes canonical; this staging artifact becomes historical.

**Sensitivity boundary:**
- This Master Plan is **publishable narrative + operational plan** (no crown jewels).
- Sensitive IP details, claim-specific evidence packs, and legal work product remain in `vault/CoVault/server` and are referenced by hash/pointer only.


---

## [MP.CGT.0200] Current state and constraints

### Legacy cloud snapshot (frozen CoSuite)
CoCivium currently includes a suite of repositories in the `rickballard@gmail.com` GitHub account (the “CoSuite”). That suite has been frozen as private repos to serve as a snapshot archive: it can be mined, referenced, and extracted from, but should not be treated as the forward-moving system.

### Local reality (continued evolution after freeze)
Since freezing the cloud snapshot, local instances of CoCivium/CoSuite-related assets continued to evolve. These local instances exist across typical sync locations (e.g., My Documents, Desktop, Downloads) and our home LAN NAS server folders/subfolders.

We refer to the local collection as:
- `PC/local` (local workstation state)
- `vault/CoVault/server` (LAN/NAS server state)

### Practical consequence
This creates an unavoidable “multi-truth” condition:
- the frozen cloud snapshot is historical truth
- the local vault/PC state is operational truth
- the next system must converge toward a new source of truth without losing crown-jewel continuity

---

## [MP.CGT.0300] Target state

A new GitHub account, `CoCivium@CoCivium.org`, is intended to be the reincarnation of the CoSuite—restructured to be:
- phase-driven (organized around CoPhases and gates)
- properly indexed (internally consistent naming, linkability, and retrieval)
- master-plan-aligned (top-down coherence rather than organic sprawl)

This new account (and its associated cloud resources) will be the forward-moving system.

---

## [MP.CGT.0350] Terminology and storage topology

### CoShare naming convention
- CoShare: the cloud GitHub org/account (source-of-truth candidate)
- CoShareVault: the LAN/NAS server mirror (high-safety storage, private by default)
- CoSharePC: the workstation mirror (working set)

### CoVault naming convention
- CoVault / server: the broader LAN/NAS vault used for sensitive assets, crown jewels, and offline-protected materials not suitable for public repos.

### “Source of truth” vs “source of probability”
Because we expect multiple replicas and partial replication, this plan treats certain storages as CoSource-schema-aligned stores that can be networked across a future CoSourceNet / CoGibberNet / CoGbxNet (naming TBD).

In practice:
- “Source of truth” means authoritative by policy.
- “Source of probability” means the best current approximation of truth given replication, indexing, and verified receipts.

---

## [MP.CGT.0400] CoPhases overview

This Master Plan must become stable enough to support at least the first few CoPhases, because traction requires coherence.

The initial phase model:

---

## [MP.CGT.0410] CoPhase1: Master Plan + IP protection + seeding the ecosystem

Goal: establish a coherent plan and a defensible IP strategy, while seeding the structures that later phases require.

Includes:
1. Master Plan stabilization (this document becomes operational, not aspirational)
2. IP-protection strategy (mostly non-commercial), with subordinate business plan(s) to support:
   - CoCivium sustainability
   - `rick` income continuity (so the project survives early-stage fragility)
3. Seeding:
   - CoShare / CoShareSync(s) / CoSourceNet(s) primitives
   - Websites, outreach infrastructure, and indexing rails (incl. CoGbxNet if adopted)

Primary output of CoPhase1: a ready-to-execute pipeline that can feed CoPhase2 without re-architecting fundamentals.

---

## [MP.CGT.0415] CoPhase1 Definition of Done (DoD): what “ready for CoPhase2” means

CoPhase1 is done when we can prove, repeatedly, that the system works without customers and can be piloted without re-architecture.

Minimum deliverables (each must have tests + receipts + reproducible runs):
1) Master Plan stabilized + actionable (this document)
2) CoHarness MVP: multi-tenant reference community testbed
3) CoDataForge MVP: synthetic-first dataset generation with deterministic seeds
4) CoAuditSuite MVP: repeatable scenario tests + hostile-world tests + golden runs
5) CoPhase2Gate evidence pack format (standard outputs from CoAuditSuite)
6) Domain constellation bootstrap:
   - canonical sites shipped (minimal but real)
   - non-canonical domains redirect or park coherently
7) Vault posture defined:
   - what stays private (crown jewels, partner data, legal drafts)
   - what is publishable (synthetic datasets, aggregated evidence, docs)

Acceptance tests (must pass):
- A new machine can reproduce a golden run: same seed -> same dataset -> same outputs
- A tenant can be instantiated from scratch without manual heroics
- Evidence packs generated from CoAuditSuite are consistent and diffable

## [MP.CGT.0420] CoPhase2: Legal wave + recruitment + XR soft launch (prove paid value)

Goal: harden survivability and prove paid-for value in a tractable market before broader exposure.

Includes:
1. Engage law firms and file patent application wave(s) globally
2. Recruit CoStewards, partners, alliances, and key resources
3. Soft launch into the XR-gaming community:
   - orchestration
   - organization
   - governance
   - with a deliberate focus on paid solutions that can scale to later phases

Constraint: a broader launch likely cannot occur until CoPhase2Gate criteria are satisfied (scale, robustness, verified workflows/comms, self-evolution capacity, etc.).

---

## [MP.CGT.0425] Soft launch blueprint: what we ship, how we price, and what we prove

Soft launch should look like a bolt-on service that improves governance and reduces moderator load without requiring communities to migrate platforms.

Primary wedge offer (Phase2 default):
- Community Governance Audit + Ops Cockpit
  - raid/brigading readiness
  - dispute workflow + appealability
  - role hygiene, permissions, escalation rules
  - retention and safety signals
  - repeatable measurement via CoAuditSuite evidence packs

“Works with what you already use” posture:
- Start with a Discord-like adapter (chat, roles, mod actions, events)
- Add XR platform event adapters after the wedge proves value
- Host independently (bolt-on) so communities can monetize and so we can publish synthetic proof artifacts without vendor entanglement

Pricing posture (Phase2):
- paid pilots are allowed early (we need sustainability), but scope must stay tight
- default to a fixed-fee pilot package with clear success criteria
- upgrades (ongoing stewardship) only after evidence pack results show improvement

What we prove publicly (Phase2):
- the harness runs, the audit suite runs, the evidence packs are reproducible
- outcomes are measured in aggregated, non-identifying form
- opt-in identity/reputation is privacy-preserving and appealable

What we do not promise publicly until later:
- universal cross-platform reputation that cannot be disputed
- enforcement powers beyond what communities already control
- anything that looks like “social credit” without explicit, user-controlled consent and governance

### [MP.CGT.0427] Soft Launch deliverables (minimum viable “proof kit”)

Soft Launch is less about revenue and more about **proof**: show that a platform-agnostic bolt-on can improve community outcomes *without* requiring the vendor to redesign their product.

Minimum deliverables:
- A reference harness (fake brands) that demonstrates end-to-end flows (invite → onboarding → moderation → reputation/halo → governance actions).
- At least one “real world” adapter (Discord-like) with a clear contract boundary.
- CoAudit report generator that outputs an evidence pack (before/after diffs, metrics, receipts, reproducible scripts).
- CoVerify runner that can replay an evidence pack and confirm the claims.
- A safe public website + CoAura site pair that explain the offer and show the demo (without exposing crown jewels).
- A Pilot Kit: how a community opts in, what data is needed, what we store, and what value they get.

### [MP.CGT.0428] Soft Launch success metrics (what “traction” looks like)

Traction should be defined as **repeatable adoption signals**, not hype:

- 3+ pilot communities complete a full cycle (Audit → interventions → re-audit) with published evidence packs.
- Demonstrated reduction in moderation load (time-to-resolution, repeat offender rate, incident recurrence).
- Demonstrated increase in “good actor” retention (returning members, positive interactions).
- Adapter portability: the same halo/reputation logic works across at least 2 surfaces (e.g., Discord-like + web forum).
- Community health metrics improve and are explainable (CHAOSS-style measures + our own domain-specific measures).

## [MP.CGT.0430] CoPhase3+: Hard launch via InSeed.com into enterprise and government

Goal: use boutique consultancy delivery to penetrate high-leverage institutions while maintaining control of scope and narrative.

A likely engagement pattern:
- `CoAudit -> CoTraining -> CoTooling -> CoTrial -> CoVerify -> CoPartnerships -> CoStewarding`

Primary intent: short, high-leverage engagements that create:
- referenceability
- defensible proof
- scalable replication paths
- durable alliances



---

## [MP.CGT.0440] Verification-first strategy: CoAudit + CoVerify + Reference Harness (no-customers-required)

CoCivium must be provable without customers. Therefore, CoPhase1 includes building a reference harness that simulates a multi-community XR org environment, feeds realistic event streams into the platform, and verifies outputs via a repeatable CoAudit/CoVerify suite.

This harness exists for:
- credibility (demos that are not hand-wavy)
- engineering discipline (regression testing, reproducible runs)
- Phase2 readiness (pilot measurements use the same metrics and pipelines)
- survivability (we can test failure modes and hostile conditions)

### [MP.CGT.0442] CoHarness: the reference community testbed (multi-tenant, fake brands)

Candidate baseline: run at least one browser+XR-friendly open-source community platform (e.g., **Hubs Foundation** Hubs Community Edition) as a realistic multi-user harness we can clone into multiple fake brands, while keeping our bolt-on services platform-agnostic.

Build a “community-in-a-box” reference environment that can be instantiated as multiple independent, fake-branded communities (tenants), each with:
- roles and governance rules (admins, moderators, councils, dispute handling)
- multi-channel comms artifacts (chat threads, announcements, events, moderation actions)
- identity and reputation signals (opt-in only)

Key properties:
- multi-tenant from day 1 (separate data, separate configs, shared code)
- platform-agnostic interfaces (adapters for Discord-like chat, forum-like posts, and XR events)
- independently hostable (bolt-on service, not dependent on vendor hosting)

### [MP.CGT.0444] CoDataForge: dataset strategy (ethical, non-traceable, reproducible)

We require a dataset pipeline that is:
- legally clean
- privacy-safe
- intentionally challenging (typos, slang, adversarial behavior)
- reproducible (same seed -> same dataset variant for test determinism)

Preferred data sources (in order):
1) Synthetic-first generation (recommended default)
2) Licensed public datasets explicitly allowing reuse, with careful handling
3) Partner-provided pilot data under agreements, stored privately in vault, never public

Important:
- spelling errors are for robustness testing, not for privacy.
- any real-user data stays private; publish only synthetic or aggregated artifacts.

### [MP.CGT.0446] CoAuditSuite: measurable claims, tests, and gates

Create a testable verification suite that runs on every reference harness build:
- unit tests for rules engines and parsers
- integration tests for adapters and storage layers
- scenario tests: raids, brigading, moderation disputes, vote manipulation
- hostile-world tests: partial outages, corrupted inputs, replay attacks, spam floods

Outputs:
- scored metrics dashboards and test reports
- reproducible golden runs (known inputs -> known outputs)
- CoPhase2Gate evidence packages (proof of repeatability and verified comms)

This extends the engagement chain already implied by:
`CoAudit -> CoTraining -> CoTooling -> CoTrial -> CoVerify -> CoPartnerships -> CoStewarding`
but starts internally, before external customers exist.

### [MP.CGT.0448] CoSourceNet sandbox: opt-in identity, RepTag, CoHalo, portability

To validate cross-platform reputation and identity:
- implement an opt-in identity layer that can bind multiple platform identities to one portable profile
- compute RepTag / CoHalo signals from behavior and governance outcomes
- expose only the minimum necessary claims externally (privacy-preserving by design)

Phase1 goal is to prove the mechanics in a sandbox.
Phase2 goal is to prove opt-in adoption in real XR communities.

---

## [MP.CGT.0450] Phase integration (what changes in CoPhase1 and CoPhase2)

### CoPhase1 additions
- CoHarness (multi-tenant reference communities)
- CoDataForge (synthetic-first dataset pipeline)
- CoAuditSuite + CoVerify (repeatable evidence generation)
- CoSourceNet sandbox for opt-in RepTag/CoHalo

### CoPhase2 usage
- run pilots through the same CoAuditSuite
- produce standardized evidence packs for the Phase2Gate criteria

---

## [MP.CGT.0460] CoPrime execution packet: First 10 Moves (turn plan into PRs)

1) Document hygiene: ensure title version matches content, TOC matches anchors, and all new anchors are listed in TOC
2) Decide canonical domains (one per bucket) and lock redirect targets
3) Create repo templates:
   - Human site repo template
   - CoAura repo template
4) Create a “domain seeder” script concept:
   - reads the domain registry table
   - generates stub repos + redirect-only content
   - outputs DNS/redirect config suggestions
5) Stand up CoHarness skeleton (multi-tenant + adapter interfaces)
6) Stand up CoDataForge skeleton (seeded synthetic generation)
7) Stand up CoAuditSuite skeleton (scenario catalog + report format)
8) Define the CoPhase2Gate evidence pack schema (filenames, sections, metrics)
9) Establish vault boundary rules (what never goes public)
10) Publish the minimal canonical web constellation (credible landings + stable docs links)

## [MP.CGT.0465] Pilot kit: standard deliverables for XR community trials

Every pilot should ship the same “kit” so outcomes are comparable and repeatable:

- Pilot Charter (scope, success criteria, timeline, fees, support boundaries)
- Governance Map (roles, permissions, escalation paths, dispute/appeal flow)
- Threat Model (raid/brigading scenarios, manipulation vectors, failure modes)
- Mod Ops Cockpit (dashboards, alerts, workload reducers, decision logs)
- Evidence Pack(s) (generated via CoAuditSuite; versioned and diffable)
- Exit Pack (what improved, what did not, what remains risky, next steps)

## [MP.CGT.0500] Gates and survival assumptions (CoPhase2Gate)

The world is not assumed friendly. If CoCivium gains traction, hostile actions are plausible—especially from organizations that benefit from weak democracy or centralized control.

Therefore:
- this plan prioritizes survivability and robustness early
- “appearing to satisfy” gate criteria may be strategically important where perception affects recruitment, partnership, and deterrence

CoPhase2Gate (high-level):
- demonstrated value in a real community (XR soft launch)
- repeatable workflows and verified comms
- credible legal posture and IP progress
- early-scale readiness (people + process + tooling)
- resilience posture (backup, vault, replication, indexing discipline)

## [MP.CGT.0510] CoPhase2Gate Evidence Pack (standard proof artifact)

Every CoAuditSuite run emits an “evidence pack” with:
- Manifest: tool versions, commit SHAs, dataset seed(s), timestamp, tenant id
- Scenario results:
  - raids/brigading
  - moderation disputes
  - vote manipulation
  - outage/corruption/replay/spam stress
- Metrics dashboard snapshot (stable set, versioned)
- Diffs vs prior golden run (what changed, why)
- Privacy posture summary (what is synthetic vs real vs aggregated)

Rule: pilots must emit the same pack format as the internal harness.

## [MP.CGT.0520] CoPhase2Gate checklist (versioned; measurable)

The gate must be “evidence backed,” not rhetorical. For each item below, the evidence pack must contain a pointer to the supporting measurements.

- Repeatability: golden runs reproduce on a clean machine
- Multi-tenancy: at least 3 tenants instantiated from templates, no data bleed
- Adapter viability: Discord-like adapter passes integration tests
- Hostile-world readiness: stress scenarios run without catastrophic failure
- Governance clarity: dispute/appeal paths are explicit and used in scenarios
- Privacy posture: no real-user dataset required for core demos; synthetic-first is default
- Sustainability: pilot kit can be delivered as a fixed package without custom heroics

---

## [MP.CGT.0530] Competitive analysis as “derivability” (borrow, align, reuse, then differentiate)

Because CoCivium is aiming for viral adoption with an open-source posture (at least early), “competition” is less about beating companies and more about *harvesting the ecosystem safely*:

- **Borrow:** reuse open standards and open-source components where license + security posture allow.
- **Align:** adopt widely recognized standards so we look legitimate and interoperate by default.
- **Wrap:** build bolt-on adapters rather than forking vendor platforms.
- **Differentiate:** reserve originality for a small set of “crown” workflows and orchestration primitives, then protect those.

This section defines how to do that without accidentally importing license debt, security debt, or IP contamination.

### [MP.CGT.0533] Standards-first shortlist (reduce reinvention risk)

When feasible, we SHOULD align to widely adopted open standards so our bolt-on services stay portable across XR platforms:

- **CloudEvents** (event envelope) — for platform-agnostic event metadata and routing
- **AsyncAPI** (event-driven API description) — for contracts, docs, and codegen around our event bus
- **SBOM** formats (**SPDX**, **CycloneDX**) — to make dependency claims auditable
- **SLSA** + **Sigstore** — to harden build provenance and artifact signing
- **OpenSSF Scorecard** — automated checks to quantify repo security posture

See [MP.CGT.0820] and Appendix B for primary links.

### [MP.CGT.0535] Borrow/Reuse Ledger (template)

Maintain a living ledger (ideally a spreadsheet + markdown export) with at least these fields:

- **Component area:** identity / comms / moderation / analytics / UI / infra / etc.
- **Candidate:** project/spec name + canonical link
- **License / terms:** SPDX ID where possible; obligations/risks
- **Mode:** `Use`, `Fork`, `Adapter`, `Spec-only`, `Inspiration-only`
- **Delta plan:** what we change (minimal) vs what we leave intact
- **Security posture:** does it support signed releases, SBOMs, provenance, etc.
- **Privacy posture:** does it require real-user data; can it run synthetic-first
- **IP boundary note:** does it touch a differentiator theme (yes/no; why)
- **Decision status:** `Proposed`, `Approved`, `Rejected`, `Deprecated`
- **Evidence pointer:** link to PoC, tests, or the reason for rejection

### [MP.CGT.0537] Seed candidate set (initial Borrow/Reuse Ledger entries)

These are **seed entries** to make the Borrow/Reuse Ledger real. The goal is not “copy competitors”, but to *inherit the ecosystem safely*:

- Prefer **standards** when they exist (interoperability + credibility).
- Prefer **reusing whole systems as external dependencies** (self-hosted) over embedding code where license/security posture could contaminate the core.
- Capture license, security posture, and integration boundary in the Borrow/Reuse Ledger before committing.

#### A. Reference community harness candidates (cloneable testbed surfaces)

| Candidate | What it gives us | Why it matters for CoHarness | Likely use in Phase1/2 |
|---|---|---|---|
| Discourse | Mature forum + moderation + roles + SSO hooks | Fast “community” clone surface for governance, moderation, and audit demos | Primary harness option (forum-style) |
| NodeBB | Node.js forum with plugins + SSO | Alternative forum harness; easier JS stack integration | Optional |
| Lemmy | Federated link-aggregator (ActivityPub) | Good for testing cross-instance governance + federation | Optional (Phase2+) |
| Matrix ecosystem | Decentralized comms + bridging | Cross-community comms/testing vendor independence | Optional (Phase2+) |
| Zulip / Mattermost / Rocket.Chat | Team/community chat surfaces | “Discord-like” adjacency without Discord dependency | Optional (choose 1) |
| Revolt | Open-source Discord-like UI | “Feels like Discord” harness for pilots/demos | Optional (Phase2+) |

#### B. Identity, auth, and policy (portable, multi-tenant)

| Candidate | What it gives us | CoCivium use | Integration boundary |
|---|---|---|---|
| Keycloak | IAM, OIDC, multi-tenant realms | Baseline identity in CoHarness + SSO adapters | External dependency (self-host) |
| Ory stack (Kratos/Keto/etc.) | AuthN + AuthZ building blocks | Alternative to Keycloak; fine-grained policies | External dependency |
| Open Policy Agent (OPA) | Policy-as-code (Rego) | Governance rules, enforcement, auditability | Library/service boundary |
| Cedar | Policy language + evaluation engine | Alternative policy core; write explicit “can/cannot” rules | Library boundary |

#### C. Portable “halo” / reputation primitives (standards-first)

| Candidate | What it gives us | Why it matters | Phase |
|---|---|---|---|
| W3C DID Core + VC Data Model | Portable identifiers + claims | Cross-platform identity + verifiable halo proofs | Phase2+ (optional) |
| OpenID4VCI / OpenID4VP | Issuance/presentation flows | Practical VC plumbing when/if needed | Phase2+ |
| Open Badges | Portable achievements model | A low-drama “reputation” framing for communities | Phase2+ (optional) |

#### D. Observability + evaluation (make “it works” measurable)

| Candidate | What it gives us | CoAudit/CoVerify use | Phase |
|---|---|---|---|
| OpenTelemetry | Standard traces/metrics/logs | Evidence pack instrumentation for pilots | Phase1 |
| OpenAI Evals / promptfoo / TruLens | LLM eval + regression tests | Repeatable quality gates for CoAgents/CoAudits | Phase1 |
| Langfuse | LLM observability + prompt/version tracking | Make “AI did X” auditable | Phase1/2 |

#### E. Supply-chain integrity (trust tooling must practice trust)

| Candidate | What it gives us | Why it matters | Phase |
|---|---|---|---|
| SLSA | Provenance framework | “We can prove our builds” | Phase1 |
| Sigstore | Signing + verification | Public trust + tamper resistance | Phase1 |
| SPDX / CycloneDX | SBOM formats | “What’s in this?” transparency | Phase1 |
| in-toto | Attestation for supply chain steps | Stronger end-to-end provenance | Phase2 (optional) |


### [MP.CGT.0540] Standards and best-practice alignment shortlist (start here)

Use these as “gravity wells” so we inherit legitimacy, interoperability, and security hygiene. This is the shortlist CoPrime should treat as **default-alignment** unless there’s a recorded reason not to.

**Requirements and spec language**
- RFC 2119 keywords (`MUST/SHOULD/MAY`) for writing enforceable requirements: https://www.rfc-editor.org/rfc/rfc2119.html

**Identity and portable reputation**
- NIST Digital Identity Guidelines (SP 800-63 suite): https://pages.nist.gov/800-63-4/
- OAuth 2.1 (draft) and OAuth 2.0 family context: https://oauth.net/2/
- OpenID Connect (OIDC): https://openid.net/specs/openid-connect-core-1_0.html
- SCIM (provisioning): https://www.rfc-editor.org/rfc/rfc7644
- WebAuthn (passkeys): https://www.w3.org/TR/webauthn-3/
- W3C Decentralized Identifiers (DID Core): https://www.w3.org/TR/did-core/
- W3C Verifiable Credentials Data Model v2.0: https://www.w3.org/TR/vc-data-model-2.0/
- OpenID4VCI: https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html
- OpenID4VP: https://openid.net/specs/openid-4-verifiable-presentations-1_0.html
- Open Badges: https://www.imsglobal.org/spec/ob/v3p0

**Federation / cross-server comms**
- ActivityPub: https://www.w3.org/TR/activitypub/
- Matrix protocol: https://spec.matrix.org/

**Observability and evidence**
- OpenTelemetry: https://opentelemetry.io/

**Open-source project governance and community health**
- Contributor Covenant (Code of Conduct): https://www.contributor-covenant.org/
- CHAOSS metrics (community health): https://chaoss.community/

**Software supply-chain integrity (important because we’ll be “trust tooling”)**
- SLSA framework: https://slsa.dev/
- Sigstore signing/verification: https://www.sigstore.dev/
- SPDX SBOM standard: https://spdx.dev/
- CycloneDX SBOM standard: https://cyclonedx.org/
- in-toto attestations framework: https://in-toto.io/
- OpenSSF Best Practices Badge: https://bestpractices.coreinfrastructure.org/

**AppSec + privacy posture (for CoAudit/CoVerify credibility)**
- OWASP ASVS: https://owasp.org/www-project-application-security-verification-standard/
- OWASP SAMM: https://owasp.org/www-project-samm/
- NIST Privacy Framework: https://www.nist.gov/privacy-framework


### [MP.CGT.0545] IP Boundary Ledger (how to stay derivative without losing defensibility)

Derivative-first does **not** mean “no originality.” It means:

- We copy what is commodity and standardized.
- We protect what is *workflow-novel* (cross-platform orchestration, survivability posture, verifiable trust loops).

Maintain an IP Boundary Ledger with:

- **Protected themes (candidate patent domains):** (examples)
  - Cross-platform “halo” reputation propagation with opt-in consent and cryptographic auditability.
  - CoAudit → CoTraining → CoTooling → CoVerify pipeline that produces reproducible “evidence packs” for governance.
  - CoSourceNet/CoShareSync: receipt-backed, pointer-safe synchronization of public vs vault artifacts.
  - Multi-tenant reference harness + synthetic data forge as an always-on “proof machine” for trust tooling.
- **Unprotected / deliberately open:** adapters, templates, docs, community playbooks, standards mappings.
- **Contamination rules:** do not ingest proprietary competitor material; prefer specs, public docs, permissively licensed code, and clean-room re-implementations when needed.

### [MP.CGT.0550] Research protocol (keep the plan reference-heavy, and keep it current)

- Prefer **primary sources**: standards bodies, official specs, official repos, and foundation sites.
- Each time CoPrime evolves the plan, update the Borrow/Reuse Ledger and add any new sources to the Reference Index.
- If a claim cannot be referenced, label it as **Hypothesis** and attach a test plan to convert it into evidence.

### [MP.CGT.0555] Verification suite alignment (make CoAudit/CoVerify look real before customers exist)

To be credible without customers, the internal “test + audit + verification” suite should align to recognizable frameworks:

- AppSec verification checklists: map core services to OWASP ASVS levels; produce a minimal ASVS report for each release.
- Maturity tracking: use OWASP SAMM-style maturity goals for security practices.
- Supply-chain hygiene: publish SBOMs (SPDX/CycloneDX), signed artifacts, and provenance goals (SLSA levels) even for internal releases.
- Privacy posture: structure privacy decisions and risks using NIST Privacy Framework terms; keep synthetic-first as default.
- Community trust posture: publish an OpenSSF best practices baseline and track drift.

---


## [MP.CGT.0600] CoSources and indexing strategy

The new GitHub account and its CoSources (cloud = CoShare; local = CoShareVault/CoSharePC) must be evolved with CoPhases in mind.

Design rule:
- everything should be easy to locate, cite, and reassemble
- indexing must support both:
  - humans (narrative, onboarding, governance)
  - AIs (retrieval, linking, consistency, execution)

This Master Plan is the top-down spine that defines what “proper indexing” means.

---

## [MP.CGT.0610] Public vs vault: what is allowed to be public

Default posture:
- Public: documentation, synthetic datasets, aggregated metrics, non-sensitive templates, reproducible harness artifacts
- Vault-only: crown jewels, partner/pilot raw logs, legal drafts, IP strategy details, anything that can deanonymize individuals

Rule: if a dataset is derived from real community logs, assume vault-only unless proven otherwise by explicit licensing and privacy review.

## [MP.CGT.0615] Receipts and reproducibility: what “source-of-probability” requires

“Source of probability” only matters if runs are reproducible and claims are verifiable. Therefore:
- Every evidence pack must include commit SHAs + dataset seeds
- Every generated artifact should have a manifest (inputs, tool versions, outputs)
- Prefer deterministic generation over hand-edited outputs
- Publish diffs between versions to make evolution auditable

## [MP.CGT.0700] Websites, outreach, and constellation for “perceived scale”

We maintain (and may expand) a constellation of registered domains and sites intended to convey:
- seriousness
- scalability
- maturity
- inevitability

This matters because it can influence recruitment, partnership probability, and gate perception—especially during CoPhase2 where “credibility momentum” is an asset.

This plan assumes the web constellation is not vanity; it is part of the survivability and traction strategy.

---

## [MP.CGT.0710] Domain portfolio and how it fits the Master Plan (Appendix spine)

We maintain a constellation of domains to support:
- clear “front doors” for different audiences (XR communities, enterprise, policy, AI-facing specs)
- resiliency and optionality (rebrands, product splits, hostile-world survivability)
- credibility/perceived scale where it matters for recruitment and partnerships

Rule: The Master Plan should name only the canonical domains in the main flow.
All other domains live in this appendix as aliases/reserves and should redirect unless/until activated.

### [MP.CGT.0715] Canonical domain roles (recommended)

Core mission and identity
- `cocivium.org` = primary mission front door (Phase1+)
- `cocivium.com` = commercial alias -> redirect to `.org` (Phase1)
- `cocivium.net` = technical/docs/infrastructure alias -> redirect or host docs (Phase1/2)
- `civium.cc` = shortlink/QR domain -> redirect to canonical pages (Phase1)

AI persona / hybrid-society narrative
- `cocivia.org` = CoCivia persona + hybrid society framing (Phase1+)

Machine-facing language + indexing
- `cogibber.org` (or `.net`) = CoGibber specs, indexing rails, AI-facing language hub (Phase1)
- `cogbx.org` (or `.net`) = CoGbxNet / exchange layer concepts + reference docs (Phase1/2)

Policy / governance messaging
- `copolitic.org` = governance/policy-facing framing for sponsors, institutions, “why this matters” (Phase1/2)
- `copolitic.com` = alias -> redirect (Phase1)

Commercial delivery channel
- `inseed.com` = enterprise/government delivery wrapper for Phase3+ (kept ready during Phase1/2)

Founder / publishing
- `rickpublic.com` = publishing/outreach channel (Phase1/2)

Community / organizing wedge
- `groupbuild.org` = community-building entry point (XR org tooling + governance) (Phase1/2)
- `groupbuild.com` = product alias -> redirect or product landing (Phase1/2)

Concept brand(s)
- `coscendence.org` = concept hub (CoScendence) -> redirect or concept landing (Phase1)
- `coscendence.com` = alias -> redirect (Phase1)

Mythos / narrative universe
- `godspawn.org` / `godspawn.com` = story/mythos assets; keep separate from core operations (Phase1+)

Reserved / experimental / future product names (default: redirect/park)
- `opename.org` / `opename.com` = reserved for identity / naming / reputation concepts (Phase2+ candidate)
- `startupsboard.com` = reserved (Phase3+ candidate)
- `ballardassociates.com` = legacy/hold (redirect/park)
- `beaxa.com` / `beaxa.org` = reserved/experimental (redirect/park)
- `blabex.com` / `blabex.org` = reserved/experimental (redirect/park)
- `entment.com` / `entment.org` = reserved/experimental (redirect/park)
- `whyhead.com` / `wihead.com` = reserved/experimental (redirect/park)

### [MP.CGT.0720] Activation by phase (how domains “turn on”)

CoPhase1 (now):
- Activate minimal, credible landing(s): `cocivium.org`, `groupbuild.org`, `cogibber.*` (docs), optionally `copolitic.org`
- Everything else redirects to canonical pages (or stays parked), to avoid scatter/confusion.

CoPhase2 (XR soft launch + legal wave):
- Promote XR wedge under `groupbuild.org` (or a subdomain of `cocivium.org`)
- Keep technical specs stable and linkable under `cogibber.*` / `cogbx.*`
- Use `copolitic.org` selectively as the “adult table” narrative when recruiting partners.

CoPhase3+ (enterprise hard launch):
- Lead enterprise via `inseed.com` while core civic narrative stays at `cocivium.org`
- Use case studies, audits, and training funnels that bridge both sites.

### [MP.CGT.0725] Operational discipline (non-negotiables)

- Canonical domain(s) must be obvious. Aliases should redirect.
- Consolidate DNS/security: 2FA on registrar, domain lock, controlled nameservers, consistent ownership records.
- Keep a single “Domain Registry” file (exported from registrar) in vault + CoShareVault with receipts.
- Prefer subdomains over new domains unless a distinct audience/product truly needs separation.

---

## [MP.CGT.0730] Domain-to-repo model: Human site + CoAura site

Assumption: each domain can have two “faces,” each driven by its own repo:
- Human-facing site: narrative, onboarding, marketing, docs (human-readable)
- AI-facing site (CoAura): structured, retrieval-first, machine-oriented representation of the same scope

To keep this scalable, the default is:
- 1 repo per domain for Human site
- 1 repo per domain for CoAura site
- parked/alias domains still get repos, but they ship minimal redirect-only content until activated

### [MP.CGT.0732] Repo naming convention (recommended)

For domain `example.org`:
- Human repo: `site-example-org`
- CoAura repo: `aura-example-org`

Dots become dashes. This yields deterministic naming, easy automation, and easy auditing.

### [MP.CGT.0733] “Two sites” does not mean “two full builds”

Until a domain is activated, both repos can be stub-grade:
- Human repo: a 1-page landing + redirect logic + “future scope” bullets
- CoAura repo: a compact, structured index page (machine-readable links + claims)

This preserves the “we planned this” rationale without exploding workload.

## [MP.CGT.0735] Full domain registry (33/33): purpose + action + repo map

Legend (Action Now):
- ACTIVE: build a real site in CoPhase1/2
- REDIRECT: point to a canonical domain/section (keep ownership for defense/optionality)
- PARK: keep parked with minimal holding page (or redirect), no active build yet

| Domain | Purpose bucket | Action now | Phase activation target | Human repo | CoAura repo | Redirect target / notes |
|---|---|---:|---|---|---|---|
| ballardassociates.com | legacy/hold | REDIRECT | Phase3+ (optional) | site-ballardassociates-com | aura-ballardassociates-com | Redirect to rickpublic.com or inseed.com (legacy credibility) |
| beaxa.com | reserved/experimental | PARK | Phase3+ (optional) | site-beaxa-com | aura-beaxa-com | Name reserve; hold for future product/brand split |
| beaxa.org | reserved/experimental | PARK | Phase3+ (optional) | site-beaxa-org | aura-beaxa-org | Paired with beaxa.com; keep consistent story |
| blabex.com | reserved/experimental | PARK | Phase3+ (optional) | site-blabex-com | aura-blabex-com | Name reserve; avoid squatting risk |
| blabex.org | reserved/experimental | PARK | Phase3+ (optional) | site-blabex-org | aura-blabex-org | Paired with blabex.com |
| civium.cc | shortlink/QR hub | ACTIVE | Phase1 | site-civium-cc | aura-civium-cc | Short redirects/QRs into cocivium.org + groupbuild.org |
| cocivia.org | CoCivia persona/hybrid framing | ACTIVE | Phase1 | site-cocivia-org | aura-cocivia-org | Narrative + concept hub; CoAura for machine-facing persona/spec index |
| cocivium.com | defensive alias | REDIRECT | Phase1 | site-cocivium-com | aura-cocivium-com | Redirect to cocivium.org (brand defense) |
| cocivium.net | tech/docs alias | REDIRECT (or ACTIVE docs later) | Phase2 | site-cocivium-net | aura-cocivium-net | Initially redirect to docs on cocivium.org; later can host infra/docs |
| cocivium.org | primary mission front door | ACTIVE | Phase1 | site-cocivium-org | aura-cocivium-org | Canonical public spine |
| cogbx.com | brand/defense for CoGbxNet | REDIRECT | Phase1 | site-cogbx-com | aura-cogbx-com | Redirect to cogbx.org (or chosen canonical) |
| cogbx.net | tech alias | REDIRECT | Phase2 | site-cogbx-net | aura-cogbx-net | Redirect to cogbx.org; later host tech endpoints/docs |
| cogbx.org | CoGbxNet / exchange layer concept | ACTIVE (light) | Phase1 | site-cogbx-org | aura-cogbx-org | Specs hub; keep minimal but real |
| cogibber.com | defensive alias | REDIRECT | Phase1 | site-cogibber-com | aura-cogibber-com | Redirect to cogibber.org |
| cogibber.net | tech alias | REDIRECT | Phase2 | site-cogibber-net | aura-cogibber-net | Redirect to cogibber.org; later can host tooling/docs |
| cogibber.org | CoGibber specs/indexing rails | ACTIVE (light) | Phase1 | site-cogibber-org | aura-cogibber-org | CoAura-first content makes sense here |
| copolitic.com | defensive alias | REDIRECT | Phase1 | site-copolitic-com | aura-copolitic-com | Redirect to copolitic.org |
| copolitic.org | governance/policy front | ACTIVE (selective) | Phase1/2 | site-copolitic-org | aura-copolitic-org | “Adult table” narrative for sponsors/partners |
| coscendence.com | concept alias | REDIRECT | Phase1 | site-coscendence-com | aura-coscendence-com | Redirect to coscendence.org |
| coscendence.org | concept hub (CoScendence) | ACTIVE (light) | Phase1 | site-coscendence-org | aura-coscendence-org | Concept page + links into cocivium.org |
| entment.com | reserved/experimental | PARK | Phase3+ (optional) | site-entment-com | aura-entment-com | Name reserve; future entertainment/XR-facing angle |
| entment.org | reserved/experimental | PARK | Phase3+ (optional) | site-entment-org | aura-entment-org | Paired with entment.com |
| godspawn.com | mythos/narrative universe | REDIRECT (or PARK) | Phase2+ (optional) | site-godspawn-com | aura-godspawn-com | Redirect to godspawn.org or park; keep separate from core ops |
| godspawn.org | mythos/narrative universe | ACTIVE (light) | Phase2+ (optional) | site-godspawn-org | aura-godspawn-org | Mythos, worldbuilding, recruitment gravity (optional) |
| groupbuild.com | product alias | REDIRECT | Phase1 | site-groupbuild-com | aura-groupbuild-com | Redirect to groupbuild.org |
| groupbuild.org | XR community wedge front door | ACTIVE | Phase1/2 | site-groupbuild-org | aura-groupbuild-org | Core Phase2 soft-launch channel |
| inseed.com | enterprise/government delivery wrapper | ACTIVE (keep ready) | Phase3+ (but ready earlier) | site-inseed-com | aura-inseed-com | Human site is sales/cred; CoAura can expose structured offerings |
| opename.com | identity/naming/reputation reserve | PARK | Phase2+ | site-opename-com | aura-opename-com | Candidate brand for identity/RepTag/CoHalo productization |
| opename.org | identity/naming/reputation reserve | PARK | Phase2+ | site-opename-org | aura-opename-org | Pair with opename.com; choose canonical later |
| rickpublic.com | publishing/outreach | ACTIVE (light) | Phase1/2 | site-rickpublic-com | aura-rickpublic-com | Public writing, updates, recruitment funnel |
| startupsboard.com | reserved (future) | PARK | Phase3+ | site-startupsboard-com | aura-startupsboard-com | Future product/community directory concept; hold name |
| whyhead.com | reserved/experimental | PARK | Phase3+ | site-whyhead-com | aura-whyhead-com | Name reserve; unclear scope (keep minimal) |
| wihead.com | reserved/experimental | PARK | Phase3+ | site-wihead-com | aura-wihead-com | Pair with whyhead.com; keep minimal |



### [MP.CGT.0738] Prevent repo explosion: template + generator or this collapses

The “2 repos per domain” model implies 66 repos for the current registry.
This is acceptable only if:
- repos are generated from templates
- most are stub-grade until activation
- redirects are centrally consistent and audited

If we cannot automate this, reduce scope:
- only canonical domains get both repos in Phase1
- all other domains get a single redirect-only repo until Phase2/3

## [MP.CGT.0740] Default DNS + redirect rules (keep coherence, reduce ops load)

Rules:
1) Pick 1 canonical domain per bucket (e.g., cocivium.org, groupbuild.org, cogibber.org, cogbx.org).
2) All aliases (`.com`, `.net`, etc.) should redirect at apex + `www` to the canonical target.
3) CoAura defaults to `aura.<domain>` (or `coaur.<domain>` if you want to avoid generic naming later).
4) Parked domains must still have:
   - a minimal landing page (or redirect) that states intent (“reserved for X”)
   - consistent, non-conflicting story relative to the Master Plan

---

## [MP.CGT.0800] Change control (how this Master Plan evolves)

This Master Plan will evolve, and those changes should cause coherent changes in CoShare and its local derivatives.

Rules:
1. Section IDs are stable anchors (do not renumber).
2. Insert by choosing an unused ID (e.g., `MP.CGT.0415`) rather than shifting existing IDs.
3. Prefer additive evolution over destructive edits; deprecate rather than delete when feasible.
4. When the plan changes, record the consequences:
   - what repos change
   - what assets migrate
   - what gets deprecated
   - what gates/assumptions are updated

This is how the Master Plan becomes stable enough to drive traction without collapsing into organic sprawl again.

5. Run regression checks (see `MP.CGT.0070`) before claiming a new version is “better.”
6. Update the Borrow/Reuse Ledger + IP Boundary Ledger whenever major architecture choices change.
7. Keep the Reference Index current; if a referenced standard gets superseded, mark it and point to the new one.
8. Every published version SHOULD ship with a sha256 sidecar receipt (so downstream sessions can verify integrity).

---

## [MP.CGT.0810] Version history (high-level deltas)

- v1.2–v1.4: early master-plan drafts; established CoPhases framing and storage topology language.
- v1.5: consolidated phases, domain registry, and the verification-first “reference harness” approach into a single cohesive plan.
- v1.8 (20260108T223518Z): clarified canonical landing into CoShare/CoCivium/plans, expanded standards + reuse library with CloudEvents/AsyncAPI/OpenSSF Scorecard, and reinforced CoHarness candidate (Hubs Foundation).
- v1.7 (20260108T212614Z): added **CoMetaTrain** (CoCTA handles + regression checks), added **derivability-first competitive analysis** (Borrow/Reuse + IP Boundary ledgers), expanded Soft Launch metrics, and introduced a canonical auto-generated ToC.

## [MP.CGT.0820] Reference Index (curated primary sources)

These are intentionally biased toward primary sources (standards/specs/foundations). The Borrow/Reuse Ledger should hold deeper per-component references.

- RFC 2119 requirement keywords: https://www.rfc-editor.org/rfc/rfc2119.html
- NIST SP 800-63-4 Digital Identity Guidelines: https://pages.nist.gov/800-63-4/
- W3C DID Core: https://www.w3.org/TR/did-core/
- W3C Verifiable Credentials Data Model v2.0: https://www.w3.org/TR/vc-data-model-2.0/
- ActivityPub: https://www.w3.org/TR/activitypub/
- Matrix spec: https://spec.matrix.org/
- SLSA framework: https://slsa.dev/
- SPDX: https://spdx.dev/
- CycloneDX: https://cyclonedx.org/
- Sigstore: https://www.sigstore.dev/
- OpenSSF Best Practices Badge: https://bestpractices.coreinfrastructure.org/
- OWASP ASVS: https://owasp.org/www-project-application-security-verification-standard/
- OWASP SAMM: https://owasp.org/www-project-samm/
- NIST Privacy Framework: https://www.nist.gov/privacy-framework
- Contributor Covenant: https://www.contributor-covenant.org/
- CHAOSS: https://chaoss.community/
- OpenTelemetry: https://opentelemetry.io/
- WebAuthn: https://www.w3.org/TR/webauthn-3
- CloudEvents (project + spec): https://cloudevents.io/ (spec), https://github.com/cloudevents/spec (source)
- AsyncAPI (initiative + spec): https://www.asyncapi.com/ (hub), https://github.com/asyncapi/spec (spec source)
- OpenSSF Scorecard: https://openssf.org/projects/scorecard/ (project), https://scorecard.dev/ (docs), https://github.com/ossf/scorecard-action (CI)
- Hubs Foundation (open-source XR-ready reference platform): https://github.com/Hubs-Foundation/hubs (code), https://docs.hubsfoundation.org/ (docs)
- Mozilla Hubs end-of-support notice (May 31, 2024) and handoff to Hubs Foundation: https://support.mozilla.org/en-US/kb/end-support-mozilla-hubs
- OpenID Connect Core: https://openid.net/specs/openid-connect-core-1_0.html
- OAuth 2.0 family reference: https://oauth.net/2/
- Open Badges: https://www.imsglobal.org/spec/ob/v3p0
- in-toto: https://in-toto.io/
- Open Policy Agent (OPA): https://www.openpolicyagent.org/
- Keycloak: https://www.keycloak.org/
- OpenAI Evals (repo): https://github.com/openai/evals
- promptfoo (repo): https://github.com/promptfoo/promptfoo
- TruLens (repo): https://github.com/truera/trulens
- Langfuse: https://langfuse.com/

## [MP.CGT.0830] “Unknowns” backlog (keep hypotheses visible)

If we cannot cite it or test it soon, it belongs here with an owner and a conversion plan:

- What minimum set of identity/halo signals are acceptable to XR communities without triggering privacy backlash?
- What vendor platforms (Discord, Reddit, in-game guild systems, etc.) are the best initial adapter targets, and what are their TOS constraints?
- What subset of halo/reputation can be published publicly without enabling harassment, doxxing, or gaming the system?
- What governance actions should be automated vs left to human stewards in early pilots?

---

## [MP.CGT.0900] Dump-Appendix (hold-pen; do not delete)

### [MP.CGT.0905] Legacy snippet from v1.2 (kept verbatim for safety)
This was the v1.2 “Document rules” block, but its markdown was broken (double-asterisk bullets inside a blockquote). Keeping it here so it is not lost, but the corrected version is now in `[MP.CGT.0050]`.

> **Document rules:
> ** Section IDs (e.g., `MP.CGT.0410`) are **stable anchors**.
> ** Incremental adds, anything that is in the current version of the document, but which should not appear in the final version, should be pushed down to a dump-appendix within this document, so that nothing gets accidentally dropped or omitted, and so that each new version can repeatedly mine what went before to ensure the latest version is the best, ok?
> New material should be inserted by choosing an unused ID (e.g., between `0410` and `0420` use `0415`, `0416`, etc.) rather than renumbering everything.


## [MP.CGT.0910] Appendix A: CoSession reliability and anti-regression patterns (mineable ops doctrine)

This appendix exists because CoCivium’s near-term risk is *not* a lack of ideas; it’s **loss of fidelity** across sessions, tools, repos, and time. The patterns below are designed to reduce omission, de-evolution, and accidental “plan drift.”

### [MP.CGT.0915] The Anti-Regression Stack (ARS): 12 patterns that compound

1) **Stable anchors everywhere**  
   - Use `MP.CGT.####` anchors for plans, and similarly stable IDs for requirements, tests, and artifacts.
   - Never renumber. Deprecate > delete.

2) **Additive mutation discipline**  
   - Treat every plan update as a patch that must be reversible.
   - When unsure, append to Dump-Appendix with an anchor instead of overwriting.

3) **Receipts by default**  
   - Every artifact gets a `sha256` sidecar and a deterministic reproduction note (command + inputs + environment assumptions).
   - “Source-of-probability” is only earned when a claim has receipts.

4) **Evidence Packs, not vibes**  
   - For each gate (CoPhase1 DoD, CoPhase2Gate), maintain an evidence bundle: docs, screenshots, test logs, hashes, and links.

5) **Golden Runs**  
   - Define a minimal “golden run” script that can be executed on a fresh machine and yields the same outputs (hash match).

6) **DiffGate**  
   - Before accepting a new version, run a basic diff sanity check:
     - anchor count stays the same or increases
     - domain registry row count stays 33 unless a recorded decision changes it
     - no large block silently removed without being moved to Dump-Appendix

7) **Reference Harness as the always-on demo**  
   - If the harness can’t run, nothing else matters. Keep it small, repeatable, and boring.

8) **Synthetic-first data discipline**  
   - Treat real-world data as the *last resort*. Use synthetic generators, seeded randomness, and documented transformations.

9) **License-first reuse**  
   - “Borrow” does not mean “steal.” Record license, attribution needs, and boundary (service vs library) before integration.

10) **Threat modeling as a routine**  
   - At minimum: abuse cases, privacy failures, gaming attacks, identity hijacking, and governance capture attempts.

11) **Single source of truth per category**  
   - Only one canonical location for each thing (plan, registry, requirements, tests, evidence packs). Everything else is a pointer.

12) **Fail-fast externalization**  
   - When a session/tool looks unreliable, immediately externalize: write to file, hash it, and store it in CoSources.

### [MP.CGT.0920] CoPrime execution rubric: “Always programmatic; always export”

- Prefer scripts over manual steps.
- Prefer generated docs over hand-edited docs.
- Prefer repo-hosted artifacts over session memory.
- Prefer small, frequent commits/PRs over large hero commits.

### [MP.CGT.0925] Minimal “No-Devolve Checklist” for every update

- [ ] Version bumped (vX.Y) and delta log updated.
- [ ] Anchor scheme intact (no removed anchors).
- [ ] New content added without truncation placeholders.
- [ ] Registries keep exact counts (e.g., domains = 33).
- [ ] Any removed text was moved to Dump-Appendix verbatim with an anchor.
- [ ] New claims have at least one pointer (standard/spec/repo/test).
- [ ] sha256 sidecars produced for the exported deliverable(s).

### [MP.CGT.0930] Suggested automation hooks (to implement later)

- `CoDiff`: script that checks anchors, table row counts, and disallowed truncation markers.
- `CoReceipt`: script that writes `.sha256` sidecars for all new artifacts.
- `CoPack`: script that assembles “Evidence Pack” zips deterministically.

---

## [MP.CGT.0940] Appendix B: Reuse/Import Library (starter catalog with links)

This is a deliberately “borrowing-friendly” catalog. Each entry should be copied into the Borrow/Reuse Ledger with: license, boundary, security posture, and why it helps.

### B1. Community platforms we can self-host as CoHarness surfaces

- Hubs Foundation (browser + VR collaboration platform; Mozilla ended hosted support May 31, 2024): https://github.com/Hubs-Foundation/hubs ; docs: https://docs.hubsfoundation.org/ ; Mozilla notice: https://support.mozilla.org/en-US/kb/end-support-mozilla-hubs
- Discourse: https://www.discourse.org/
- NodeBB: https://nodebb.org/
- Lemmy: https://join-lemmy.org/
- Matrix: https://matrix.org/
- Zulip: https://zulip.com/
- Mattermost: https://mattermost.com/
- Rocket.Chat: https://www.rocket.chat/
- Revolt: https://revolt.chat/

### B2. Identity / auth / policy
- Keycloak: https://www.keycloak.org/
- Ory (Kratos/Keto/etc.): https://www.ory.sh/
- Open Policy Agent (OPA): https://www.openpolicyagent.org/
- Cedar policy language: https://www.cedarpolicy.com/
- Casbin: https://casbin.org/

### B3. Evidence, observability, and AI evaluation
- OpenTelemetry: https://opentelemetry.io/
- OpenAI Evals: https://github.com/openai/evals
- promptfoo: https://github.com/promptfoo/promptfoo
- TruLens: https://github.com/truera/trulens
- Langfuse: https://langfuse.com/

### B4. Supply-chain integrity

- OpenSSF Scorecard: https://openssf.org/projects/scorecard/ (project), https://scorecard.dev/ (docs), https://github.com/ossf/scorecard-action (CI)
- CloudEvents (event metadata standard, CNCF graduated): https://cloudevents.io/ ; spec repo: https://github.com/cloudevents/spec
- AsyncAPI (event-driven API spec + tooling): https://www.asyncapi.com/ ; spec repo: https://github.com/asyncapi/spec
- SLSA: https://slsa.dev/
- Sigstore: https://www.sigstore.dev/
- SPDX: https://spdx.dev/
- CycloneDX: https://cyclonedx.org/
- in-toto: https://in-toto.io/
