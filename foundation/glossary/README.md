# Glossary

Canonical definitions for Genshi. This layer is governance infrastructure: future metamodels, decision records, assessments, and machine consumers depend on these terms.

**Upstream:** [Manifesto](../thesis/manifesto.md)  
**Related:** [Metamodel](../metamodel/README.md) (entities instantiate this language)

## Purpose

- Establish mutually consistent vocabulary
- Separate concepts that industry discourse conflates
- Provide stable references (`glossary:token`, `glossary:meaning`) for cross-document linking

## How to use

1. **Cite, do not paraphrase** — When a canon document uses a defined term, link to its glossary entry.
2. **One primary term per concept** — Do not introduce synonyms in canon without a glossary entry and ADR.
3. **Glossary precedes new entities** — New metamodel entity types require a glossary term or an explicit extension ADR.
4. **Definitions are normative** — If metamodel or principles conflict with glossary, resolve via enhancement and ADR; do not silently diverge.

## Layers

| Layer | Terms |
|-------|-------|
| Scope | [design-system](design-system.md), [framework](framework.md) |
| Normative | [principle](principle.md), [decision](decision.md) |
| Semantic | [meaning](meaning.md), [interpretive-debt](interpretive-debt.md) |
| Outputs | [artifact](artifact.md), [knowledge-asset](knowledge-asset.md), [token](token.md), [component](component.md), [pattern](pattern.md) |
| Control | [governance](governance.md), [lifecycle](lifecycle.md), [capability](capability.md) |

## Index

| Term | One-line definition |
|------|---------------------|
| design-system | Organizational system for shared product experience capability |
| framework | Structure for designing, governing, and evolving design systems |
| governance | First-class capability defining authority, canon, and change discipline |
| capability | Organizational ability a design system enables |
| principle | Normative belief with testable implications |
| decision | Binding organizational choice with recorded rationale |
| meaning | Shared semantic intent artifacts must preserve |
| interpretive-debt | Accumulated gap between intended meaning and actual understanding or use |
| artifact | Managed output evidencing that a design system exists |
| knowledge-asset | Artifact whose primary value is committed organizational knowledge |
| token | Named unit of committed design knowledge |
| component | Composable contract for a UI element |
| pattern | Recurring composition of components and behavior |
| lifecycle | Governed states and transitions of entities over time |

## Decision-centric stack (reference)

```text
Decision → Token → Component → Pattern
```

Governance and lifecycle apply across all artifact types. Meaning is the property the stack must preserve; interpretive-debt measures failure to preserve it.
