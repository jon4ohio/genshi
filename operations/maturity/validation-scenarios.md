# Maturity Framework — Validation Scenarios

**Maintainer validation artifact — not canon.**

This document is test infrastructure for the operating model. It is not binding canon, does not appear in [canon-precedence](../../foundation/canon-precedence.md), and may be updated without ADR when scenarios need refinement.

**Purpose:** Verify that two maintainers applying [framework.md](framework.md) and [assessment § Conformance mapping](../assessment/framework.md#conformance-mapping) to the same evidence arrive at the same maturity level (or the same “no level claim”).

**Resolved by:** [ENH-0002](../../evolution/enhancements/ENH-0002-maturity-framework.md)

---

## How to use

1. Read the scenario evidence table only—ignore narrative until after classification.
2. Mark each assessment dimension **pass** or **fail** against minimum evidence.
3. Apply level determination ([framework § Progression](framework.md#progression-and-regression)):

   ```text
   IF Operational minimum satisfied → Operational
   ELSE IF Governed minimum satisfied → Governed
   ELSE IF Aligned minimum satisfied → Aligned
   ELSE → no maturity level claimed (below Aligned)
   ```

4. Compare your result to **Expected level**. Disagreement triggers framework or scenario revision—not ad hoc level invention.
5. Record reviewer IDs and date on sign-off (below).

**Rule:** Level determination follows the assessment conformance table, not level *characteristics* alone. Characteristics describe typical posture; the table is the gate.

---

## Scenario template reference

| Evidence | Values used in scenarios |
|----------|-------------------------|
| `decision_log` | present / absent |
| Stable tokens with `decision_refs` | all / partial / none |
| `artifact_registry` with lifecycle states | present / absent |
| Owners on stable artifacts | assigned / partial / none |
| Deprecation policy | documented / absent |
| `invalid_state_absence` (sample) | pass / fail (+ finding) |
| `semantic_audit` | pass / fail / not evaluated |
| `exception_register` | maintained / absent |
| `adoption_metrics` | present / absent |
| `review_cadence` | documented / absent |

---

## Scenario 1 — Below Aligned vs Aligned

**Boundary tested:** Minimum bar for first maturity level.

### Evidence

| Evidence | Value |
|----------|-------|
| `decision_log` | absent |
| Stable tokens with `decision_refs` | none (tokens published without refs) |
| `artifact_registry` | absent |
| `invalid_state_absence` (sample) | not evaluated |
| Remaining Operational evidence | not evaluated |

### Dimension results

| Dimension | Result |
|-----------|--------|
| decision_coverage (tokens) | **fail** |
| lifecycle_compliance | fail |
| invalid_state_absence | n/a |
| semantic_health | n/a |
| interpretive_debt | n/a |
| maturity | n/a |

### Expected level

**No maturity level claimed (below Aligned).**

---

## Scenario 2 — Aligned (minimal bar)

**Boundary tested:** Aligned without lifecycle or owners.

### Evidence

| Evidence | Value |
|----------|-------|
| Principles | adopted (narrative context only) |
| `decision_log` | present (ADR index) |
| Stable tokens with `decision_refs` | all stable tokens |
| Token owners | not assigned |
| `artifact_registry` with states | absent |
| Deprecation policy | absent |
| `invalid_state_absence` (sample) | not required for Aligned |

### Dimension results

| Dimension | Result |
|-----------|--------|
| decision_coverage (tokens) | **pass** |
| lifecycle_compliance | fail |
| invalid_state_absence | optional at Aligned |

### Expected level

**Aligned.**

---

## Scenario 3 — Aligned vs Governed (structural gap)

**Boundary tested:** Decision trust without structural trust.

### Evidence

| Evidence | Value |
|----------|-------|
| `decision_log` | present |
| Stable tokens with `decision_refs` | all |
| `artifact_registry` with states | absent |
| Owners on stable artifacts | none |
| Deprecation policy | absent |
| `invalid_state_absence` (sample) | not run |

### Dimension results

| Dimension | Result |
|-----------|--------|
| decision_coverage (tokens) | **pass** |
| lifecycle_compliance | **fail** |
| invalid_state_absence (sample) | fail (not satisfied) |

### Expected level

**Aligned** — Governed minimum not met.

---

## Scenario 4 — Governed (structural trust)

**Boundary tested:** Governed without meaning/capability trust.

### Evidence

| Evidence | Value |
|----------|-------|
| Aligned bar | satisfied |
| `artifact_registry` | present; lifecycle states on tokens, components, patterns |
| Owners | assigned on stable artifacts |
| Deprecation policy | documented (successor or no-replacement) |
| `invalid_state_absence` (sample) | **pass** (no invalid states in sample) |
| `semantic_audit` | not evaluated |
| Duplicate meaning in production | present (narrative—does not override sample pass) |
| `exception_register` | absent or incomplete |
| `adoption_metrics` | absent |
| `review_cadence` | absent |
| Assessment recurrence | none |

### Dimension results

| Dimension | Result |
|-----------|--------|
| decision_coverage | pass |
| lifecycle_compliance | **pass** |
| invalid_state_absence (sample) | **pass** |
| semantic_health | fail |
| interpretive_debt | fail |
| maturity | fail |

### Expected level

**Governed** — Operational requires all six dimensions; interpretive debt and semantic health are not satisfied.

---

## Scenario 5 — Governed blocked by invalid-state sample

**Boundary tested:** Lifecycle present but sample fails (from [framework worked example](framework.md#worked-example)).

### Evidence

| Evidence | Value |
|----------|-------|
| `decision_log` | present |
| Stable tokens with `decision_refs` | all except one stable token missing ref (found in sample) |
| `artifact_registry` | present with states |
| Owners | two components missing owners |
| `invalid_state_absence` (sample) | **fail** — stable token without decision_ref |

### Dimension results

| Dimension | Result |
|-----------|--------|
| decision_coverage (tokens) | pass (bar is “stable tokens with decision_refs”—one failure may still fail sample review) |
| lifecycle_compliance | partial (gaps) |
| invalid_state_absence (sample) | **fail** |

### Expected level

**Aligned** — Governed requires sample pass. Do not claim Governed until invalid state remediated or excepted.

---

## Scenario 6 — Operational (full bar)

**Boundary tested:** Meaning and capability trust.

### Evidence

| Evidence | Value |
|----------|-------|
| Governed bar | satisfied |
| `semantic_audit` | pass; findings owned |
| `exception_register` | maintained with expiry and approver |
| `decision_log` | accessible |
| Deprecated artifacts | not in active use without migration plan |
| `adoption_metrics` | present (ungoverned variation decreasing) |
| `review_cadence` | documented and followed |

### Dimension results

| Dimension | Result |
|-----------|--------|
| All Governed dimensions | pass |
| semantic_health | **pass** |
| interpretive_debt | **pass** |
| maturity | **pass** |

### Expected level

**Operational.**

---

## Scenario 7 — Inventory ≠ Operational

**Boundary tested:** Mechanical checklist detached from meaning (Failure Mode B).

### Evidence

| Evidence | Value |
|----------|-------|
| Governed bar | satisfied |
| Large component/token count | high (narrative only) |
| Storybook coverage | high (narrative only) |
| `semantic_audit` | not performed |
| `review_cadence` | absent |
| `adoption_metrics` | absent |

### Dimension results

| Dimension | Result |
|-----------|--------|
| Governed dimensions | pass |
| semantic_health | fail |
| interpretive_debt | fail |
| maturity | fail |

### Expected level

**Governed** — inventory size is explicitly out of scope for semantic_health.

---

## Scenario 8 — Regression

**Boundary tested:** Maturity is state, not certification (Principle 05).

### Evidence at T0

Governed bar fully satisfied → **Governed** claimed.

### Evidence at T1 (re-assessment)

| Change | Effect |
|--------|--------|
| `artifact_registry` stale; states incorrect | lifecycle_compliance **fail** |
| Deprecated tokens in production without migration | interpretive_debt **fail** |
| Token decision_coverage | still pass |

### Expected level at T1

**Aligned** — Governed minimum no longer fully met. Program must not defend Governed claim until evidence restored.

---

## Ambiguity register

| Zone | Maintainer behavior |
|------|---------------------|
| Characteristics vs assessment bar | Follow [conformance mapping](../assessment/framework.md#conformance-mapping) for level gates; use characteristics for narrative only |
| invalid_state sample scope | Manual review against [six invalid states](../assessment/framework.md#invalid_state_absence); one failure fails Governed unless remediated/excepted |
| Duplicate meaning vs sample | If duplicate maps to invalid state in sample, fail sample; narrative “duplicate meaning” alone does not override explicit sample pass/fail |
| Principles adopted but no token refs | below Aligned — decision_coverage fails |
| Token refs but principles not published | **Aligned** if decision_coverage passes; note gap in assessment report |

---

## Validation summary

| Boundary | Scenario(s) | Discriminates? |
|----------|-------------|----------------|
| Below Aligned vs Aligned | 1, 2 | Yes |
| Aligned vs Governed | 3, 4, 5 | Yes |
| Governed vs Operational | 4, 6, 7 | Yes |
| Regression | 8 | Yes |

---

## Maintainer sign-off

| Reviewer | Date | All scenarios match expected level? |
|----------|------|-------------------------------------|
| Genshi maintainers (validation pass) | 2026-06-05 | Yes |

**Release decision:** Inter-rater validation pass complete. [ENH-0002](../../evolution/enhancements/ENH-0002-maturity-framework.md) approved for framework **v0.2.1** release. Maturity canon and this validation artifact ship together; validation scenarios remain non-canon and may evolve independently.

---

## What this document is not

- Binding canon or conformance requirement for adopters
- A scoring rubric or certification checklist for external programs
- A substitute for adopter-specific assessment instances
- An ADR or governance policy
