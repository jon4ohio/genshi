# Maturity Framework

Conceptual framework for interpreting [assessment](../assessment/framework.md) evidence as program stage and progression. This is not a scoring tool, adoption playbook, or certification scheme.

**Upstream:** [Assessment framework](../assessment/framework.md), [capability](../../foundation/glossary/capability.md), [governance](../../foundation/glossary/governance.md)  
**Metamodel:** [Conformance levels](../../foundation/metamodel/governance.md#conformance-levels-adopter-facing), [Assessment entity](../../foundation/metamodel/entities/operational.md)  
**Resolved by:** [ENH-0002](../../evolution/enhancements/ENH-0002-maturity-framework.md)

---

## Purpose

**Maturity** is how a design system program interprets assessment evidence as **stage**, not as a one-time pass/fail.

| Instrument | Question |
|------------|----------|
| **Assessment** | *What is true right now, and what evidence supports it?* |
| **Maturity** | *What stage is the program at, and what must improve to reach the next stage?* |

Maturity is a **consumer** of assessment—it does not introduce parallel measures, pillars, or dimensions. It supplies level definitions and progression rules; assessments apply those levels using existing dimensions and evidence types.

Assessments answer: *Is the design system functioning as organizational infrastructure?*  
Maturity answers: *Where is the program on the path from decision-backed tokens to meaning preserved at scale?*

---

## What maturity means in Genshi

**Maturity** is the demonstrated organizational stage at which a design system program can function as **infrastructure**—governed, decision-backed, meaning-preserving knowledge—not merely as a published artifact library.

Maturity measures **organizational discipline** ([capability](../../foundation/glossary/capability.md)), not:

- Repository size or component count
- Tool sophistication
- Documentation volume
- Team headcount

Maturity levels are **isomorphic** to adopter [conformance levels](../../foundation/metamodel/governance.md#conformance-levels-adopter-facing): Aligned, Governed, Operational. There is no fourth maturity level.

---

## Trust types

Each maturity level certifies a different kind of trust:

| Level | Trust type | Primary question |
|-------|------------|------------------|
| **Aligned** | Decision trust | Are stable token semantics decision-backed? |
| **Governed** | Structural trust | Can we trust states, owners, change, and invalid-state discipline? |
| **Operational** | Meaning and capability trust | Does meaning survive scale, and is organizational capability evidenced? |

**Governed** is not a stepping stone to "more process." **Operational** is where structural discipline proves it can preserve [meaning](../../foundation/glossary/meaning.md) at organizational scale (Principle 06). Operational should be difficult to achieve.

---

## Conceptual relationships

### Governance

[Governance](../../foundation/glossary/governance.md) (Principle 02) is the capability maturity measures. Each level requires more explicit governance: published decision rights, recorded exceptions, review cadence, and governance subject to assessment. Maturity does not define governance mechanics—[metamodel/governance](../../foundation/metamodel/governance.md) and [charter](../../foundation/governance/charter.md) do.

### Decisions

[Decisions](../../foundation/glossary/decision.md) (Principle 03, ADR-0003) anchor the authority chain maturity tracks. Progression deepens **decision_coverage**: from token decisions → artifact registry discipline → stack-wide refs → rationale recoverable without oral tradition.

### Knowledge management

Genshi has no separate knowledge-management entity. Knowledge is carried by [knowledge-assets](../../foundation/glossary/knowledge-asset.md), [meaning](../../foundation/glossary/meaning.md), and decisions. Maturity tracks knowledge discipline through assessment dimensions **semantic_health** and **interpretive_debt**—not inventory size.

### Lifecycle compliance

[Lifecycle](../../foundation/glossary/lifecycle.md) (Principle 05) governs entity states. Maturity tracks whether lifecycle is declared, enforced, and trusted. Transition rules live in [metamodel/lifecycle](../../foundation/metamodel/lifecycle.md); maturity states which lifecycle evidence must exist at each stage.

---

## Maturity levels

Three levels. A program **demonstrates** a level when assessment evidence meets that level's minimum bar from [assessment § Conformance mapping](../assessment/framework.md#conformance-mapping). Levels are not self-declared.

```text
Below Aligned  →  no maturity level claimed
Aligned        →  Governed  →  Operational
```

---

### Aligned

**Trust type:** Decision trust  
**Conformance:** Aligned

#### Characteristics

- Genshi principles (or explicit adopter equivalent) adopted and referenced
- Stable tokens have owners and `decision_refs`
- Decision log exists (ADR index or equivalent)
- Program acknowledges it is building infrastructure, not a side project

#### Governance expectations

- Decision rights for token promotion published (role or RACI)
- Steward or owner identified for token canon
- Exceptions discouraged; if they exist, they are visible—not silent overrides

#### Decision expectations

- Stable tokens linked to accepted decisions
- Major semantic commitments recorded (not only git history)
- Full component/pattern decision refs not yet required

#### Assessment expectations

| Required dimension | Minimum evidence |
|--------------------|------------------|
| **decision_coverage** (tokens) | `decision_log`; stable tokens with `decision_refs` |

Optional: **invalid_state_absence** (token-focused sample).

The **maturity** assessment dimension is optional at Aligned.

#### Risks

| Risk | Mechanism |
|------|-----------|
| **Aligned stall** | Token decisions exist but components bypass semantics |
| **Decision theater** | ADRs written post hoc without governing change |
| **Owner single point of failure** | Knowledge concentrated despite decision log |
| **Scope creep before Governed** | Stable surface expands without lifecycle discipline |
| **Principle drift** | Artifacts contradict principles without superseding decisions |

---

### Governed

**Trust type:** Structural trust  
**Conformance:** Governed

#### Characteristics

- Lifecycle states declared on tokens, components, patterns
- Owners assigned on stable artifacts in a registry
- Deprecation policy exists: successor or explicit no-replacement
- Invalid metamodel states identified and remediated or excepted
- Enhancements and breaking changes follow visible process

#### Governance expectations

- Decision rights cover promotions to stable and deprecation across artifact types
- Exception register with expiry, scope, approver, decision link (or documented pending decision)
- Exceptions reviewed on cadence—not permanent normalized overrides

#### Decision expectations

- Stable components have `decision_refs` and `token_refs`
- Stable patterns have `decision_refs` and stable `component_refs`
- Deprecation decisions or enhancement records linked to affected artifacts

#### Assessment expectations

| Required dimensions | Minimum evidence |
|---------------------|------------------|
| Aligned bar | (inherited) |
| **lifecycle_compliance** | `artifact_registry` with states; deprecation records |
| **invalid_state_absence** (sample) | Manual review against [six invalid states](../assessment/framework.md#invalid_state_absence) |

Optional: **semantic_health** (initial duplicate-meaning review).

The **maturity** assessment dimension supports readiness for Operational but is not required at Governed.

#### Risks

| Risk | Mechanism |
|------|-----------|
| **Registry rot** | `artifact_registry` stale; states lie about reality |
| **Exception normalization** | Permanent "temporary" overrides bypass canon |
| **Lifecycle without migration** | Deprecated artifacts remain in active use |
| **Governed but unread** | Decision log exists but contributors cannot find rationale |
| **Sample complacency** | Invalid-state review covers easy cases only |

---

### Operational

**Trust type:** Meaning and capability trust  
**Conformance:** Operational

#### Characteristics

- Semantic health actively maintained; duplicate meaning governed
- [Interpretive debt](../../foundation/glossary/interpretive-debt.md) visible, reviewed, and reduced through consolidation, backfill, or deprecation—not silent rewrites
- Adoption and usage evidenced (ungoverned variation decreasing)
- Review cadence produces durable records
- Assessments repeated; findings inform evolution (Principle 05)

#### Governance expectations

- Full governance capability: exceptions expiring, governance reviewed on schedule
- Conformance demonstrable to auditors, new hires, and adjacent teams—not only maintainers
- Major methodology changes trigger reassessment

#### Decision expectations

- Full decision-centric stack evidenced on stable artifacts
- Rationale recoverable without oral tradition
- Accepted decisions immutable; supersession via new decisions only

#### Assessment expectations

| Required dimensions | Minimum evidence |
|---------------------|------------------|
| Governed bar | (inherited) |
| **semantic_health** | `semantic_audit` findings with owner |
| **interpretive_debt** | `exception_register`; accessible `decision_log`; deprecation compliance |
| **maturity** | `adoption_metrics`; `review_cadence` |

All six assessment dimensions evaluated. **Publication alone does not satisfy Operational.**

Operational is not "more governance." It requires **meaning sufficiency** (semantic_health + interpretive_debt) and **capability sufficiency** (maturity dimension via adoption_metrics + review_cadence).

#### Risks

| Risk | Mechanism |
|------|-----------|
| **Measurement theater** | Metrics collected but not tied to meaning or governance outcomes |
| **Operational ossification** | Process weight exceeds value; teams route around system |
| **Debt invisibility** | Semantic audits stop; interpretive debt re-accumulates |
| **Assessment fatigue** | Assessments become checkbox exercise without evolution linkage |
| **Scale regression** | Growth outpaces review cadence; exceptions multiply |

---

## Below Aligned

Programs that do not meet Aligned minimum evidence have **no maturity level claim**. This is an assessment outcome—not a maturity level.

**Typical characteristics:**

- Artifacts published without consistent ownership or decision refs
- Principles unadopted or unknown to contributors
- Stable surfaces undeclared; rationale in people or chat—not durable records

**Assessment use:** Diagnostic review against **decision_coverage** and optional **invalid_state_absence** to identify path to Aligned. No conformance label claimed.

Introducing a fourth pre-Aligned maturity level would duplicate conformance taxonomy and increase interpretive debt. Below Aligned belongs to assessment interpretation only.

---

## Progression and regression

### Level determination

A program's **current maturity level** is the **highest level whose minimum assessment bar is fully met** by durable evidence at the time of assessment.

```text
IF Operational minimum evidence satisfied → Operational
ELSE IF Governed minimum satisfied → Governed
ELSE IF Aligned minimum satisfied → Aligned
ELSE → no maturity level claimed (below Aligned)
```

No partial credit across levels for conformance labeling. A Governed program may show strong semantic_health signals without claiming Operational until all Operational requirements are met.

### Progression signals

Between assessments, progression is visible through **dimension movement**, not scores:

| Signal | Interpretation |
|--------|----------------|
| New dimension first evaluated | Stage exploration toward next level |
| Dimension evidence strengthens | Progression within level |
| All next-level minimums met | Ready to claim next maturity level |
| Previously satisfied dimension degrades | Regression risk; level may no longer be defensible |
| interpretive_debt rises while Governed | Stalled progression toward Operational |

### Regression

Maturity levels are **not permanent certifications**. If evidence degrades (registry rot, exception normalization, deprecated artifacts in production without migration), a program may no longer defend its claimed level. Re-assessment makes regression visible—consistent with [Principle 05](../../foundation/principles/05-intentional-evolution.md).

---

## Worked example

An adopter runs an assessment with these findings:

| Dimension | Finding |
|-----------|---------|
| decision_coverage | All stable tokens have decision_refs; decision_log indexed |
| lifecycle_compliance | artifact_registry with states; two components missing owners |
| invalid_state_absence | Sample found one stable token without decision_ref |
| semantic_health | Not yet evaluated |
| interpretive_debt | Not yet evaluated |
| maturity | Not yet evaluated |

**Interpretation:** Aligned minimum is met (token decision_coverage). Governed minimum is **not** met—lifecycle gaps and invalid state present. **Maturity level: Aligned.** Assessment report lists gaps as path to Governed without claiming Governed conformance.

After remediation and re-assessment with full Governed evidence, the program may claim **Governed**. Operational remains unavailable until semantic_health, interpretive_debt, and maturity dimension evidence satisfy Operational minimums.

---

## Canon scope

Maturity level requirements reference [assessment dimensions and evidence types](../assessment/framework.md) only.

Future operational canon (`operations/adoption/`, program-level `operations/lifecycle/`) may elaborate practices but **does not define maturity levels or gate conformance**. Absence of those documents does not block maturity framework validity.

Operational evidence types **adoption_metrics** and **review_cadence** are defined in the assessment framework—not dependent on adoption or program-lifecycle stubs.

---

## Assessment entity alignment

An Assessment **instance** in adopter programs should declare:

| Attribute | Maturity framework value |
|-----------|--------------------------|
| `maturity_levels` | `Aligned`, `Governed`, `Operational` |
| `dimensions` | Subset allowed below Operational; full set required at Operational |
| `evidence_required` | Per level minimums in this document and [assessment conformance mapping](../assessment/framework.md#conformance-mapping) |

Framework canon for maturity lives in `operations/maturity/`. Adopter instances live in their own architecture repositories.

---

## What this framework is not

- Adoption patterns, enablement, or migration playbooks (see `operations/adoption/`—stub)
- Program lifecycle models (entity lifecycle: [metamodel/lifecycle](../../foundation/metamodel/lifecycle.md); program lifecycle: `operations/lifecycle/`—stub)
- A scoring rubric with numeric weights or weighted pillars
- A JSON schema, API, or CI configuration
- A new taxonomy (pillars, domains, competencies, axes)
- A certification scheme—maturity is **state**, not credential

Those may follow in later phases. This document defines **how to interpret assessment evidence as progression**.
