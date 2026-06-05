# Relationships

How Genshi entities depend on and compose each other. This model is **normative** for canon authors and **advisory** for adopters mapping their own repositories.

## Entity hierarchy (conceptual)

```text
Manifesto (thesis)
    └── Principle
            └── Decision (ADR)
                    └── Enhancement (proposed) → Decision
                            └── Release (packages canon version)

Decision
    └── Token (semantic)
            └── Component
                    └── Pattern
                            └── Content rule / Accessibility rule (constraints)
```

**Manifesto** is not an entity in the operational metamodel—it is constitutional text above entities.

## Dependency model

| From | To | Relationship | Rule |
|------|-----|--------------|------|
| Principle | Manifesto | derived_from | Every principle cites manifesto |
| Decision | Principle, Manifesto | constrains | ADR must not contradict Accepted principles |
| Token | Decision | justified_by | No stable token without decision_refs |
| Component | Token, Decision | consumes, justified_by | No stable component without semantic tokens |
| Pattern | Component, Decision | composes | Patterns reference components, not raw tokens |
| Component | Accessibility rule | must_satisfy | Stable components reference a11y rules |
| Assessment | Principle, Maturity | measures | Assessments operationalize principles |
| Enhancement | Decision (future) | may_produce | Accepted enhancement yields ADR(s) |

## Decision-centric stack (Genshi default)

Genshi adopts **decision-centric** ordering (see ADR-0003):

```text
Decision → Token → Component → Pattern
```

**Rejected as primary model:** `Primitive → Semantic → Component` where primitives are unnamed values without organizational commitment. Primitives may exist as **platform aliases** under tokens, not as the root of meaning.

## Artifact model

**Artifact** is the abstract supertype for managed outputs. Specializations:

| Artifact type | Knowledge primary? | Implementation optional? |
|---------------|-------------------|---------------------------|
| Token | Yes | Yes (exports) |
| Component | No (behavior contract) | Yes |
| Pattern | No (composition) | Documented |
| Content rule | Yes | Sometimes tooling |
| Accessibility rule | Yes | Often automated tests |

## Cross-cutting concerns

- **Governance** applies to all entities via ownership and lifecycle—not a separate product catalog.
- **Operations** (adoption, lifecycle, maturity) attach **Practices** and **Assessments** to entities, not replace them.

## Invalid states (lint rules for future automation)

1. Stable **Component** with zero **Token** refs.
2. Stable **Token** with zero **Decision** refs.
3. **Pattern** importing tokens directly while bypassing components (except documented exceptions in ADR).
4. **Principle** marked `stable` contradicting Accepted **Decision**.
5. **Enhancement** accepted with no linked ADR or release note after implementation window.
