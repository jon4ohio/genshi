# Lifecycle

## Definition

The governed set of states and transitions an entity passes through from introduction to retirement, including requirements for each promotion and demotion.

## Why It Matters

Without lifecycle, experimental and stable surfaces are indistinguishable. Adopters cannot plan migrations; maintainers cannot retire debt.

## Relationships

- **governance** — authorizes transitions between states
- **artifact** — tokens, components, patterns, and other entities share lifecycle discipline
- **decision** — decisions have a distinct lifecycle (proposed, accepted, superseded)
- **design-system** — operating mechanics include lifecycle enforcement

## Common Misinterpretations

- Treating lifecycle as a project plan or release calendar only
- Publishing artifacts without declaring state (everything implicitly "stable")
- Retiring artifacts without deprecation period or migration path

## Genshi Interpretation

Universal artifact states: draft, experimental, stable, deprecated, retired. State names should remain recognizable for conformance discussions. Detailed transition rules live in [metamodel/lifecycle.md](../metamodel/lifecycle.md); this glossary defines the concept only.
