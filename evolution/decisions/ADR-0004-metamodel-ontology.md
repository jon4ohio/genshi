# ADR-0004: Metamodel Ontology

## Status

**Status:** Accepted  
**Date:** 2026-06-05  
**Decision Maker(s):** Genshi maintainers (founding)  
**Supersedes:** None  
**Framework Version:** 0.1.0

## Context

The [glossary](../../foundation/glossary/README.md) establishes authoritative terminology. The metamodel v0.1 skeleton in `foundation/metamodel/` lacked an explicit ontology: rejected candidates were undocumented, KnowledgeAsset was not a declared supertype, and a common industry chain (Decision → Capability → Artifact → Schema) conflicted with glossary boundaries.

An ontology redesign is required so adopters, assessors, and machine consumers share one conceptual structure.

**In scope:** First-class entity set, abstract types, rejected candidates, relationship and dependency models, governance hierarchy.

**Out of scope:** Schemas, APIs, databases, UI, tooling, workflows, automation.

## Decision Drivers

- Glossary precedes metamodel; entities must instantiate glossary language without redefining terms.
- Principle 03 requires decisions as first-class; ADR-0003 requires decision-centric artifact ordering.
- ENH-0001 identified knowledge-asset supertype and rejected governance/lifecycle as entities.
- Machine-readable knowledge priority requires persistent knowledge object classification.

## Options Considered

### Option A: Flat entity catalog (v0.1)

- **Description:** Single `entities.md` list without abstract hierarchy or rejected-candidate documentation.
- **Pros:** Simple; familiar from early repo.
- **Cons:** KnowledgeAsset implicit; Governance Rule and Schema ambiguity; Capability/Artifact direction unclear.
- **Effort:** Low.
- **Notes:** Rejected.

### Option B: Explicit ontology with abstract supertypes (chosen)

- **Description:** `ontology.md` plus tiered entity specs; Artifact and KnowledgeAsset as abstract types; governance and lifecycle as cross-cutting concerns; rejected Schema and Governance Rule entities.
- **Pros:** Aligns glossary; clarifies decision-centric stack; supports AI/assessment consumers; documents invalid states.
- **Cons:** More documents to maintain.
- **Effort:** Medium.
- **Notes:** **Chosen.**

### Option C: Expand entity set with Meaning and InterpretiveDebt as entities

- **Description:** Promote glossary cross-cutting terms to catalogued entities.
- **Pros:** Uniform entity model.
- **Cons:** Contradicts glossary ("meaning is not a metamodel entity"); conflates objectives with artifacts.
- **Effort:** Low.
- **Notes:** Rejected.

## Decision

**We will use Option B.**

The Genshi metamodel comprises **12 first-class entity types** in three tiers (normative, artifact, operational), plus **2 abstract supertypes** (Artifact, KnowledgeAsset):

- Normative: Principle, Decision, Enhancement, Release
- Artifact: Token, ContentRule, AccessibilityRule, Component, Pattern (under Artifact / KnowledgeAsset)
- Operational: Capability, Assessment, Practice

**Rejected as entities:** Governance Rule, Lifecycle, Schema, Meaning, Interpretive debt.

**Rejected relationship chain:** Decision → governs → Capability → realized through → Artifact → represented by → Schema.

**Corrected model:** Decision `justifies` Artifact; Artifact collective `evidences` Capability; machine-readable expression is a property of artifacts, not a separate entity.

Canon lives in `foundation/metamodel/` per [ontology.md](../../foundation/metamodel/ontology.md).

## Consequences

### Positive

- Single source for ontology questions; glossary and metamodel boundaries are explicit.
- KnowledgeAsset supertype enables lint rules for knowledge-primary artifacts.
- Persistent knowledge object priorities documented for AI consumers.

### Negative / Trade-offs

- More metamodel files than v0.1 single `entities.md`.
- Capability instances remain sparse until `reference-models/` matures.

### Operational Impact

- `entities.md` becomes index; attributes split into `entities/normative.md`, `artifacts.md`, `operational.md`.
- ENH-0001 partially resolved; glossary-term registry and semantic-alias deferred.
- **Migration / rollback:** Supersede via ADR if entity set changes.

### Risks

| Risk | Likelihood | Impact | Mitigation | Owner/Role | Review Trigger |
|------|-----------|--------|------------|------------|----------------|
| Ontology drift from glossary | Med | High | Glossary-first rule; enhancement + ADR for new types | Framework steward | New entity proposal |
| Over-cataloging practices as canon | Med | Med | Practice entity distinct from Principle/Decision | Operations steward | Practice promotion review |

## Related ADRs

- [ADR-0002](ADR-0002-design-systems-as-organizational-systems.md) — organizational system framing
- [ADR-0003](ADR-0003-decision-centric-architecture.md) — decision-centric stack

## References

- [foundation/metamodel/ontology.md](../../foundation/metamodel/ontology.md)
- [foundation/glossary/README.md](../../foundation/glossary/README.md)
- [ENH-0001](../enhancements/ENH-0001-glossary-metamodel-alignment.md)
