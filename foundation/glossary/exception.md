# Exception

## Definition

A recorded, time-bounded deviation from canonical design system requirements—scoped to team or product—with approver, rationale, and link to the nearest decision or documented pending decision.

## Why It Matters

Governance without exception discipline becomes gatekeeping or silence. Recorded exceptions prevent interpretive debt from normalizing permanent overrides.

## Relationships

- **governance** — exceptions are how governance accommodates local need without eroding canon
- **decision** — exceptions link to nearest decision or document why decision is pending
- **interpretive-debt** — unrecorded or permanent exceptions increase debt
- **lifecycle** — exceptions should expire; deprecated canon kept in use without migration is a failure mode

## Common Misinterpretations

- Treating informal team overrides as exceptions without record or expiry
- Using exceptions to avoid decisions indefinitely
- Confusing exceptions with experimental artifact state (experimental is governed; exceptions are deviations from stable)

## Genshi Interpretation

Exception is not a metamodel entity type. It is a **governance record** with required attributes: scope, expiry, approver, decision link or pending rationale. Evidence type: exception_register in [assessment framework](../../operations/assessment/framework.md).
