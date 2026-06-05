# Principle 06: Meaning Survives Scale

## Statement

As a design system grows, meaning must remain clear; scale without semantic discipline is failure.

## Explanation

Growth introduces duplicate components, ambiguous tokens, overlapping patterns, and documentation that contradicts code. Customers experience inconsistency; internal teams experience thrash. Scale should reduce entropy, not increase it.

Semantic discipline means: one concept → one canonical expression → explicit aliases and exceptions.

## Why it matters

Large systems are harder to use than small ones unless architecture compresses complexity. Organizations confuse **coverage** with **clarity**.

## Implications

- Audit for duplicate semantics regularly (components, tokens, patterns).
- Prefer composition over proliferation of near-duplicate components.
- Cap experimental surface area until promoted or retired.
- Tie scale metrics to **semantic health**, not inventory size.

## Anti-patterns

- “We need a variant for every product line” without shared semantics.
- Documentation that describes ideal behavior while production uses exceptions.
- Patterns that contradict component APIs because nobody owns the relationship layer.
- Maturity models that reward component count.

## Examples

- A consolidation initiative merges three cards into one composable card with documented slots.
- Token catalog exceeds 500 entries but designers still hand-pick hex values—meaning did not scale.

## Derived from

- [Manifesto §3 — Why most design systems fail](../thesis/manifesto.md#3-why-most-design-systems-fail)
- [Manifesto §5 — What future Genshi is working toward](../thesis/manifesto.md#5-what-future-genshi-is-working-toward)
