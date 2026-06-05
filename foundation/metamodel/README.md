# Metamodel

The Genshi metamodel defines **first-class entities**, how they relate, how they live and retire, and who governs them. Without this layer, Genshi is documentation. With it, Genshi is a system adopters can instantiate in their own architecture repositories.

**Upstream:** [Manifesto](../thesis/manifesto.md), [Principles](../principles/), [Glossary](../glossary/README.md)  
**Binding:** [ADR-0001](../../evolution/decisions/ADR-0001-why-genshi-exists.md), [ADR-0004](../../evolution/decisions/ADR-0004-metamodel-ontology.md)

Entities instantiate the language defined in the glossary. Term definitions live in `foundation/glossary/`; this metamodel defines entity types, attributes, and rules.

## Contents

| Document | Purpose |
|----------|---------|
| [ontology.md](ontology.md) | Entity evaluation, definitions, persistent knowledge objects |
| [entities.md](entities.md) | Index to entity attribute specifications |
| [entities/normative.md](entities/normative.md) | Principle, Decision, Enhancement, Release |
| [entities/artifacts.md](entities/artifacts.md) | Artifact hierarchy and invalid states |
| [entities/operational.md](entities/operational.md) | Capability, Assessment, Practice |
| [relationships.md](relationships.md) | Relationship type catalog and composition model |
| [dependencies.md](dependencies.md) | Tiered dependency hierarchy |
| [lifecycle.md](lifecycle.md) | States and transitions per entity type |
| [governance.md](governance.md) | Decision rights, conformance, governance hierarchy |

## Using the metamodel

1. Classify every canon artifact as exactly one primary entity type (aliases allowed in metadata).
2. Do not introduce new entity types without an enhancement and ADR.
3. When adding tokens or components, satisfy relationships in [relationships.md](relationships.md) and dependencies in [dependencies.md](dependencies.md).
4. Cite glossary terms by link or `glossary:*` ID; do not paraphrase definitions.
