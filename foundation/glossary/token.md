# Token

## Definition

A named unit of committed design knowledge: a semantic agreement with documented meaning, owner, lifecycle, and references to the decisions that justify it.

## Why It Matters

Tokens are the narrow waist of multi-platform design systems. If token semantics are wrong or unowned, every dependent surface inherits the error.

## Relationships

- **knowledge-asset** — token is the primary design-knowledge specialization
- **decision** — no stable token without decision references
- **component** — consumes semantic tokens; must not invent parallel unnamed values
- **meaning** — token semantics document meaning for a specific design dimension
- **artifact** — token is a governed artifact type

## Common Misinterpretations

- Defining tokens as CSS variables, JSON keys, or Figma variables (those are exports)
- Introducing primitive values as the root of architecture instead of decision-backed semantics
- Measuring token maturity by count rather than semantic clarity

## Genshi Interpretation

Tokens encode knowledge, not syntax (Principle 04). Stable order: Decision → Token → Component → Pattern. Primitives exist only as platform aliases under committed tokens (ADR-0003).
