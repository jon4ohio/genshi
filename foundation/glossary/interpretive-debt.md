# Interpretive Debt

## Definition

The accumulated gap between the meaning a design system intends and how its artifacts are understood, implemented, or used in practice.

## Why It Matters

Interpretive debt is how semantic failure becomes visible. Without naming it, organizations misdiagnose organizational drift as tooling problems or team failure.

## Relationships

- **meaning** — debt exists relative to intended meaning
- **decision** — missing or inaccessible decisions increase debt
- **interpretive-debt** — distinct from implementation defects or undocumented code (technical debt)
- **governance** — weak exception discipline and unpublished overrides accrue debt
- **lifecycle** — deprecated artifacts kept in active use without migration increase debt

## Common Misinterpretations

- Treating interpretive debt as synonym for technical debt or design debt
- Assuming debt is zero because documentation exists (understanding ≠ publication)
- Measuring debt only by component count or token count

## Genshi Interpretation

Interpretive debt rises when rationale is lost, duplicates proliferate, exceptions normalize, and production contradicts canon. The **interpretive_debt** assessment dimension makes this visible—see [operations/assessment/framework.md](../../operations/assessment/framework.md). Retiring debt requires governed consolidation, decision backfill, or deprecation—not silent rewrites.
