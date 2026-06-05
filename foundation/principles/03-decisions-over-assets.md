# Principle 03: Decisions Over Assets

## Statement

Recorded decisions are more valuable than undocumented assets; assets without decisions are liabilities.

## Explanation

Assets answer “what exists.” Decisions answer “why it exists, for whom, under what constraints, and until when.” When people leave, assets remain but meaning evaporates unless decisions are durable.

Genshi prioritizes decision trails (ADRs, design decisions, token rationale) over expanding catalogs.

## Why it matters

Repeated debate, contradictory components, and unmaintainable tokens are symptoms of missing decision records—not missing meetings.

## Implications

- Require rationale for semantic token changes and component API changes.
- Link artifacts to decisions in metadata or documentation.
- Retire assets whose supporting decisions are obsolete.
- Train new contributors on **how to read decisions**, not only Storybook.

## Anti-patterns

- Large libraries with no ADR or decision log.
- “The Figma file is the spec.”
- Re-litigating settled questions every quarter because rationale lives in one designer’s memory.
- Copying competitor components without recording what problem they solve for your organization.

## Examples

- An ADR explains why density was reduced for data-heavy products; components and tokens reference it.
- Two button components exist because two teams shipped independently—failure of decision discipline.

## Derived from

- [Manifesto §3 — Why most design systems fail](../thesis/manifesto.md#3-why-most-design-systems-fail)
- [Manifesto §5 — What future Genshi is working toward](../thesis/manifesto.md#5-what-future-genshi-is-working-toward)
