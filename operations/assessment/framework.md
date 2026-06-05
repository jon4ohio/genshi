# Assessment Framework

Conceptual framework for evaluating design system programs against Genshi. This is not a scoring tool, schema, or automation specification.

**Upstream:** [Glossary: meaning](../../foundation/glossary/meaning.md), [interpretive-debt](../../foundation/glossary/interpretive-debt.md), [Principles](../../foundation/principles/)  
**Metamodel:** [Assessment entity](../../foundation/metamodel/entities/operational.md), [ontology](../../foundation/metamodel/ontology.md)  
**Governance:** [Conformance levels](../../foundation/metamodel/governance.md#conformance-levels-adopter-facing)

---

## Purpose

An **assessment** operationalizes [principles](../../foundation/principles/) into observable evidence. It makes [meaning](../../foundation/glossary/meaning.md) preservation and [interpretive-debt](../../foundation/glossary/interpretive-debt.md) visible without cataloguing them as entities.

Assessments answer: *Is the design system functioning as organizational infrastructure—not merely published?*

---

## Assessment dimensions

Each dimension maps to glossary terms, metamodel rules, or principles. Adopters may use a subset during early maturity; **Operational** conformance requires all dimensions below.

| Dimension | What it measures | Primary glossary / principle |
|-----------|------------------|------------------------------|
| **maturity** | Program stage: intent, governance, adoption, measurement | [capability](../../foundation/glossary/capability.md); operations/maturity (future depth) |
| **semantic_health** | Whether intended [meaning](../../foundation/glossary/meaning.md) is preserved across artifacts | Principle 06; [meaning](../../foundation/glossary/meaning.md) |
| **interpretive_debt** | Gap between intended meaning and actual understanding or use | [interpretive-debt](../../foundation/glossary/interpretive-debt.md) |
| **decision_coverage** | Stable artifacts justified by recorded [decisions](../../foundation/glossary/decision.md) | Principle 03; ADR-0003 |
| **lifecycle_compliance** | Entities declare state; promotions meet [lifecycle](../../foundation/glossary/lifecycle.md) gates | Principle 05; [metamodel/lifecycle](../../foundation/metamodel/lifecycle.md) |
| **invalid_state_absence** | Absence of metamodel invalid states | [relationships](../../foundation/metamodel/relationships.md), [dependencies](../../foundation/metamodel/dependencies.md) |

### semantic_health

Measures meaning preservation, not inventory size.

**Indicators (conceptual):**

- One concept maps to one canonical token or artifact expression; aliases are explicit
- Token semantics are documented and owned
- Duplicate components or tokens with overlapping meaning are identified and governed
- Production usage aligns with stable canon (exceptions recorded)

**Does not measure:** component count, token count, Storybook coverage, Figma library size.

### interpretive_debt

Measures divergence from intended meaning. Distinct from technical debt.

**Indicators (conceptual):**

- Decisions are accessible to new contributors
- Exceptions are recorded with expiry and approver—not normalized as permanent overrides
- Deprecated artifacts are not in active use without migration plan
- Documentation does not contradict stable artifact contracts
- Rationale for semantic choices is recoverable without oral tradition

**Does not measure:** code quality, test coverage, build performance.

### decision_coverage

Measures the decision-centric stack in practice.

**Indicators (conceptual):**

- Stable tokens have `decision_refs`
- Stable components have `decision_refs` and `token_refs`
- Stable patterns have `decision_refs` and stable `component_refs`
- ADRs exist for major semantic or architectural commitments

### lifecycle_compliance

Measures governed change discipline.

**Indicators (conceptual):**

- Experimental and stable surfaces are explicitly labeled
- Deprecation includes successor or explicit no-replacement
- Framework or program changes follow enhancement → decision → release discipline where applicable

### invalid_state_absence

Reviews evidence against metamodel invalid states:

1. Stable Component without Token refs  
2. Stable Token without Decision refs  
3. Stable Pattern with unstable Component refs  
4. Pattern bypassing Components to import tokens (without ADR exception)  
5. Stable Principle contradicting accepted Decision  
6. Accepted Enhancement without linked Decision or Release after agreed window  

Assessment of invalid states is **manual review** at v0.2.0—evidence-based, not automated.

---

## Evidence types

Adopters supply evidence per dimension. Evidence is documentation and records—not tool output alone.

| Evidence type | Supports dimensions | Description |
|---------------|---------------------|-------------|
| **decision_log** | decision_coverage, interpretive_debt | Index of ADRs or equivalent with status and scope |
| **artifact_registry** | semantic_health, lifecycle_compliance, invalid_state_absence | Catalog of tokens, components, patterns with status, owner, refs |
| **semantic_audit** | semantic_health, interpretive_debt | Findings from duplicate-meaning or orphan-value review |
| **exception_register** | interpretive_debt, lifecycle_compliance | Recorded exceptions with expiry, scope, approver, decision link |
| **adoption_metrics** | maturity | Usage, migration progress, reduction of ungoverned variation |
| **review_cadence** | maturity, interpretive_debt | Evidence that governance and exceptions are reviewed on schedule |

Evidence must be **durable** (survives tool migration) and **attributable** (owner or role identified).

---

## Relationship to principles

Assessments do not redefine principles. They derive review questions from them.

| Principle | Assessment hook |
|-----------|-----------------|
| 01 — Infrastructure | maturity: program treated as infrastructure, not project |
| 02 — Governance first | decision_coverage, exception_register, review_cadence |
| 03 — Decisions over assets | decision_coverage |
| 04 — Tokens as knowledge | semantic_health on token semantics and ownership |
| 05 — Intentional evolution | lifecycle_compliance |
| 06 — Meaning survives scale | semantic_health, interpretive_debt |

---

## Conformance mapping

Genshi conformance levels ([metamodel governance](../../foundation/metamodel/governance.md)) map to minimum assessment expectations.

| Conformance level | Required dimensions | Minimum evidence |
|-------------------|---------------------|------------------|
| **Aligned** | decision_coverage (tokens) | decision_log; stable tokens with decision_refs |
| **Governed** | Aligned + lifecycle_compliance, invalid_state_absence (sample) | artifact_registry; lifecycle states declared; sample invalid-state review |
| **Operational** | Governed + semantic_health, interpretive_debt, maturity | semantic_audit; exception_register; adoption_metrics; review_cadence |

**Publication of artifacts does not satisfy Operational conformance.** Adoption and measurement are required.

---

## Assessment entity (metamodel)

An Assessment **instance** in adopter programs should declare:

| Attribute | Value |
|-----------|-------|
| `id` | Program-specific identifier |
| `version` | Semver of assessment pack used |
| `dimensions` | Subset or full set from this framework |
| `evidence_required` | Per dimension, from evidence types above |
| `maturity_levels` | Aligned to operations/maturity when published |

Framework canon for assessments lives in `operations/assessment/`. Adopter instances live in their own architecture repositories.

---

## What this framework is not

- A maturity model (see `operations/maturity/` for level definitions—future depth)
- A scoring rubric with numeric weights
- A JSON schema or API
- A CI check or linter configuration

Those may follow in later phases. This document defines **what to evaluate** and **what evidence counts**.
