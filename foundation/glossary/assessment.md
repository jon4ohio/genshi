# Assessment

## Definition

An instrument that operationalizes principles into measurable dimensions, requiring evidence from adopters to evaluate design system health, semantic discipline, and organizational fit.

## Why It Matters

Without assessment, meaning preservation and interpretive debt remain aspirational. Conformance levels cannot be demonstrated—only claimed.

## Relationships

- **principle** — assessments derive review questions from principles without redefining them
- **meaning** — semantic_health dimension measures meaning preservation
- **interpretive-debt** — interpretive_debt dimension makes divergence visible
- **capability** — assessments measure whether organizational capability is evidenced
- **governance** — Operational conformance requires assessments
- **decision** — decision_coverage dimension reviews decision refs on stable artifacts

## Common Misinterpretations

- Treating assessment as a one-time audit or maturity quiz
- Equating assessment with component coverage metrics or Storybook story count
- Confusing assessment (instrument) with Assessment as automated tooling

## Genshi Interpretation

Assessment is a metamodel entity; instances live in `operations/assessment/`. Framework canon is [framework.md](../../operations/assessment/framework.md). Maturity levels interpret assessment results as program stage—see [operations/maturity/framework.md](../../operations/maturity/framework.md). Meaning and interpretive-debt are assessment dimensions, not separate entities.
