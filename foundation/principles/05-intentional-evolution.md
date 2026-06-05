# Principle 05: Intentional Evolution

## Statement

Design systems must evolve intentionally through visible change processes—not through silent drift in files and forks.

## Explanation

Drift happens when teams cannot wait for governance, when deprecation is undefined, or when tools auto-merge breaking changes. Intentional evolution uses enhancements, decisions, releases, and migration paths so adopters can plan.

## Why it matters

Users and internal teams depend on stability windows. Unannounced change destroys trust faster than missing features.

## Implications

- Classify changes as patch, minor, or major for framework and artifact releases.
- Publish deprecation timelines before removal.
- Maintain a changelog tied to decisions, not only to git commits.
- Use `evolution/` discipline for framework changes; use product release trains for implementations.

## Anti-patterns

- Breaking token renames on a Friday with no comms.
- Teams maintaining “our version” of the library in a monorepo package forever.
- Framework maintainers editing Accepted ADRs in place.
- Skipping assessment after major methodology changes.

## Examples

- Framework `0.2.0` documents new maturity criteria and links to ADR-0004.
- Three conflicting button components after a reorg—organizational drift without evolution discipline.

## Derived from

- [Manifesto §5 — What future Genshi is working toward](../thesis/manifesto.md#5-what-future-genshi-is-working-toward)
- [evolution/releases/](../../evolution/releases/)
