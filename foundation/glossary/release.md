# Release

## Definition

A versioned publication that aggregates canon changes—entity promotions, deprecations, and decision summaries—across the framework or design system.

## Why It Matters

Adopters need stable consumption boundaries. Releases tie intentional evolution to visible, planned change—not silent main-branch drift.

## Relationships

- **enhancement** — may follow accepted enhancements
- **decision** — release notes link ADR summaries
- **lifecycle** — release states: planned → published → maintained → end_of_life
- **artifact** — releases package artifact and normative entity changes

## Common Misinterpretations

- Treating any git tag as a release without documented change set
- Publishing artifacts without release notes linking decisions
- Confusing framework release with product application deploy

## Genshi Interpretation

Framework releases live in `evolution/releases/`. Release notes must reference entity changes and binding decisions where applicable (Principle 05).
