# Assessment

Instruments and methods for evaluating design system health, semantic discipline, and organizational fit.

**Canon:** [framework.md](framework.md) — dimensions, evidence types, conformance mapping

**Upstream:** [Glossary: meaning](../../foundation/glossary/meaning.md), [interpretive-debt](../../foundation/glossary/interpretive-debt.md), [assessment](../../foundation/glossary/assessment.md)  
**Metamodel:** [Assessment entity](../../foundation/metamodel/entities/operational.md)

## Contents

| Document | Purpose |
|----------|---------|
| [framework.md](framework.md) | Assessment dimensions, evidence, principle hooks, conformance mapping |

## Dimensions (summary)

| Dimension | Glossary / principle anchor |
|-----------|---------------------------|
| maturity | capability; program stage |
| semantic_health | meaning; Principle 06 |
| interpretive_debt | interpretive-debt |
| decision_coverage | decision; Principle 03, ADR-0003 |
| lifecycle_compliance | lifecycle; Principle 05 |
| invalid_state_absence | metamodel invalid states |

## Conformance

| Level | Assessment expectation |
|-------|------------------------|
| Aligned | decision_coverage for tokens |
| Governed | + lifecycle_compliance, sample invalid-state review |
| Operational | + semantic_health, interpretive_debt, maturity evidence |

See [framework.md § Conformance mapping](framework.md#conformance-mapping).
