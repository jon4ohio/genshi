# Entities

First-class entities in Genshi. Each entity has a stable ID prefix for references (`principle:01`, `token:color.action.primary`, `adr:0003`). Glossary terms use a parallel prefix (`glossary:token`, `glossary:meaning`)—see [glossary](../glossary/README.md).

Entity types, evaluation, and ontology live in [ontology.md](ontology.md). Attribute specifications are split by tier:

| Document | Entity types |
|----------|--------------|
| [entities/normative.md](entities/normative.md) | Principle, Decision, Enhancement, Release |
| [entities/artifacts.md](entities/artifacts.md) | Artifact, KnowledgeAsset, Token, ContentRule, AccessibilityRule, Component, Pattern |
| [entities/operational.md](entities/operational.md) | Capability, Assessment, Practice |

Ownership defaults and governance rights are in [governance.md](governance.md).
