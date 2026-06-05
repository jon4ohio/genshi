# Principle 02: Governance First

## Statement

Governance is a first-class capability of the design system—not an afterthought applied when quality slips.

## Explanation

Governance defines who decides, what is canonical, how exceptions are recorded, and how change propagates. Without it, consistency is voluntary. Voluntary consistency does not survive growth, acquisitions, or outsourcing.

Governance enables speed when rules are clear; it only feels like gatekeeping when rules are implicit or contradictory.

## Why it matters

Enterprises face audit, brand, accessibility, and regulatory pressure. A system without governance cannot answer “who approved this?” or “what is allowed in production?”

## Implications

- Publish decision rights (RACI) for tokens, components, patterns, and content.
- Record exceptions with expiry and rationale—not silent local overrides.
- Align design system governance with product and engineering governance where they intersect.
- Review governance itself on a cadence; it evolves like any other capability.

## Anti-patterns

- Review boards that only say no without publishing criteria.
- “Ask in Slack” as the canonical approval path.
- Governance documents that no contributor has read.
- Letting product deadlines permanently exempt teams from accessibility or token rules without a recorded exception.

## Examples

- A **tiered conformance model**: teams know what is mandatory vs recommended.
- Designers copy-paste off-brand buttons because “governance is too slow”—symptom of missing or broken governance, not proof governance should be removed.

## Derived from

- [Manifesto §3 — Why most design systems fail](../thesis/manifesto.md#3-why-most-design-systems-fail)
- [Manifesto §4 — Assumptions rejected](../thesis/manifesto.md#4-assumptions-genshi-rejects)
