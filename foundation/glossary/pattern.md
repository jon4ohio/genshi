# Pattern

## Definition

A recurring composition of components and associated behavior guidance that solves a recognizable user or layout problem without introducing a new primitive artifact.

## Why It Matters

Patterns coordinate teams at the workflow level. Without pattern discipline, teams reinvent compositions and contradict component contracts.

## Relationships

- **component** — patterns compose components, not raw tokens (except documented exceptions)
- **decision** — stable patterns require decision references
- **token** — patterns reach tokens only through components
- **artifact** — pattern is a governed artifact, usually documented rather than compiled

## Common Misinterpretations

- Using "pattern" for a single component variant
- Defining patterns that bypass components and bind directly to token values
- Treating patterns as optional documentation with no governance or lifecycle

## Genshi Interpretation

Patterns sit at the top of the decision-centric stack. A pattern cannot reach stable if referenced components are not stable. Invalid state: pattern importing tokens while bypassing components without ADR exception.
