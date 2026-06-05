# Relationships

How Genshi entities depend on and compose each other. This model is **normative** for canon authors and **advisory** for adopters mapping their own repositories.

**Related:** [ontology.md](ontology.md), [dependencies.md](dependencies.md)

---

## Rejected proposed chain

```text
Principle → informs → Decision → governs → Capability → realized through → Artifact → represented by → Schema
```

| Link | Problem | Genshi correction |
|------|---------|-------------------|
| Decision → governs → Capability | Capability is organizational outcome; Decisions justify artifacts | Decision `justifies` Artifact; Artifact collective `evidences` Capability |
| Capability → realized through → Artifact | Glossary: artifacts evidence capability, not realize it top-down | Capability emerges from governed artifact system and adoption |
| Artifact → represented by → Schema | Schema implies implementation; glossary separates contract from export | Artifact carries machine-readable knowledge as intrinsic property; export is evidence |

---

## Normative relationship model

```text
Manifesto (text)
  └── Principle ──constrains──► Decision
                  Enhancement ──may_produce──► Decision
                  Decision ──justifies──► KnowledgeAsset (Token, ContentRule, AccessibilityRule)
                  Decision ──justifies──► Component, Pattern
                  Token ──consumed_by──► Component
                  Component ──composed_by──► Pattern
                  Component ──must_satisfy──► AccessibilityRule
                  Artifact (collective) ──evidences──► Capability
                  Principle ──measured_by──► Assessment
                  Assessment ──measures──► Capability, Meaning, InterpretiveDebt
                  Release ──aggregates──► entity changes
```

**Manifesto** is not an entity—it is constitutional text above the ontology.

---

## Relationship type catalog

| From | To | Type | Rule |
|------|-----|------|------|
| Principle | Manifesto | derived_from | Required citation |
| Decision | Principle | constrained_by | No contradiction |
| Decision | Artifact | justifies | Required for stable artifacts |
| Token | Decision | justified_by | Required for stable |
| ContentRule | Decision | justified_by | Required for stable |
| AccessibilityRule | Decision | justified_by | Required for stable |
| Component | Token | consumes | Required for stable |
| Component | Decision | justified_by | Required for stable |
| Component | AccessibilityRule | must_satisfy | Required for stable |
| Pattern | Component | composes | Required; no direct token bypass |
| Pattern | Decision | justified_by | Required for stable |
| Artifact | Capability | evidences | Publication ≠ capability |
| Enhancement | Decision | may_produce | Required on acceptance |
| Release | Entity changes | aggregates | Release notes link |
| Governance | All governed entities | applies_to | Cross-cutting concern |
| Lifecycle | Governed entities | governs_transitions | Cross-cutting concern |
| Assessment | Principle | operationalizes | Published criteria |
| Assessment | Capability, Meaning, InterpretiveDebt | measures | Assessment dimensions |
| semantic-alias | Token, KnowledgeAsset | aliases | Relationship type, not entity |

---

## Decision-centric stack

Genshi adopts **decision-centric** ordering (ADR-0003):

```text
Decision → Token → Component → Pattern
```

ContentRule and AccessibilityRule sit alongside Token at the knowledge layer, justified by Decision.

**Rejected as primary model:** `Primitive → Semantic → Component` where primitives are unnamed values without organizational commitment. Primitives may exist as **platform aliases** under tokens, not as the root of meaning.

---

## Artifact type hierarchy

```text
Artifact (abstract)
├── KnowledgeAsset (abstract)
│   ├── Token
│   ├── ContentRule
│   └── AccessibilityRule
├── Component
└── Pattern
```

| Artifact type | Knowledge primary? | Implementation optional? |
|---------------|-------------------|---------------------------|
| Token | Yes | Yes (exports) |
| ContentRule | Yes | Sometimes tooling |
| AccessibilityRule | Yes | Often automated tests |
| Component | No (behavior contract) | Yes |
| Pattern | No (composition) | Documented |

---

## Cross-cutting concerns

- **Governance** applies to all governed entities via ownership and authority—not a separate entity catalog.
- **Lifecycle** governs state transitions per entity type—not an entity.
- **Meaning** is the preservation objective artifacts carry—not an entity.
- **Interpretive debt** is measured by Assessment—not catalogued as an entity.
- **Practice** and **Assessment** attach to entities; they do not replace them.

---

## Invalid states

1. Stable **Component** with zero **Token** refs.
2. Stable **Token** with zero **Decision** refs.
3. Stable **Pattern** with unstable **Component** refs.
4. **Pattern** importing tokens directly while bypassing components (except documented ADR exceptions).
5. Stable **Principle** contradicting Accepted **Decision**.
6. Accepted **Enhancement** with no linked ADR or release note after implementation window.
