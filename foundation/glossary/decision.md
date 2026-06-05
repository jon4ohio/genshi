# Decision

## Definition

A binding organizational choice, recorded with rationale, scope, trade-offs, and conditions for change.

## Why It Matters

Assets answer what exists; decisions answer why it exists, for whom, under what constraints, and until when. Undocumented assets become liabilities when context is lost.

## Relationships

- **principle** — decisions must not contradict accepted principles
- **token**, **component**, **pattern** — stable artifacts require decision references (decision-centric stack)
- **governance** — defines who may record and supersede decisions
- **lifecycle** — decisions have their own states (proposed, accepted, superseded)
- **meaning** — decisions anchor meaning against re-litigation and tool migration

## Common Misinterpretations

- Treating informal consensus or chat agreement as a decision
- Confusing a decision with the artifact it authorizes
- Editing accepted decision substance in place instead of superseding

## Genshi Interpretation

Decisions are **first-class entities** (Principle 03). In Genshi canon they take the form of ADRs. The stack order is Decision → Token → Component → Pattern (ADR-0003).
