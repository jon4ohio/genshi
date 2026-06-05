# Metamodel

The Genshi metamodel defines **first-class entities**, how they relate, how they live and retire, and who governs them. Without this layer, Genshi is documentation. With it, Genshi is a system adopters can instantiate in their own architecture repositories.

**Upstream:** [Manifesto](../thesis/manifesto.md), [Principles](../principles/)  
**Binding:** [ADR-0001](../../evolution/decisions/ADR-0001-why-genshi-exists.md)

## Contents

| Document | Purpose |
|----------|---------|
| [entities.md](entities.md) | Entity catalog, required attributes, ownership |
| [relationships.md](relationships.md) | Dependency and composition model |
| [lifecycle.md](lifecycle.md) | States and transitions per entity type |
| [governance.md](governance.md) | Decision rights and conformance hooks |

## Using the metamodel

1. Classify every canon artifact as exactly one primary entity type (aliases allowed in metadata).
2. Do not introduce new entity types without an enhancement and ADR.
3. When adding tokens or components, satisfy relationships in [relationships.md](relationships.md).
