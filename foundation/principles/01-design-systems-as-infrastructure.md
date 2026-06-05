# Principle 01: Design Systems as Infrastructure

## Statement

A design system is organizational infrastructure for product experience—not a UI kit, a documentation site, or a design tool configuration.

## Explanation

Infrastructure is depended on under load, maintained when inconvenient, and owned beyond a single project. Design systems that lack owners, lifecycles, service expectations, and retirement rules behave as campaigns. Campaigns end; infrastructure must persist or be formally decommissioned.

Genshi treats tokens, components, and patterns as **evidence** of infrastructure, not substitutes for it.

## Why it matters

Without infrastructure framing, funding follows launches; maintenance is unfunded. Teams fork components. Accessibility debt accumulates because nobody owns the system’s definition of done.

## Implications

- Define service levels, intake, and prioritization for the design system team.
- Measure adoption and risk reduction, not only component count.
- Plan for deprecation, migration, and support—not perpetual additive growth.
- Separate **experimental** from **stable** surfaces in all artifact types.

## Anti-patterns

- Declaring victory at v1.0 publish.
- Measuring success by Figma library size or Storybook story count alone.
- Treating the central team as a ticket queue without strategy.
- Running the system as a side project with no executive sponsor when scale demands otherwise.

## Examples

- An organization maintains a **token registry with owners** and breaking-change policy—infrastructure behavior.
- A team ships 200 components with no deprecation path—asset behavior, not infrastructure.

## Derived from

- [Manifesto §2 — What design systems actually are](../thesis/manifesto.md#2-what-design-systems-actually-are)
- [Manifesto §6 — Responsibilities](../thesis/manifesto.md#6-responsibilities-of-design-systems-inside-organizations)
