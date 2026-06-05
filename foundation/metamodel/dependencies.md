# Dependencies

Creation and stable-promotion order: what must exist before an entity can exist or reach stable state.

**Related:** [ontology.md](ontology.md), [relationships.md](relationships.md), [lifecycle.md](lifecycle.md)

---

## Tiered hierarchy

```text
Tier 0 — Constitutional
  Manifesto (text, not an entity)

Tier 1 — Normative foundation
  Principle (derived_from Manifesto)

Tier 2 — Binding commitment
  Decision (constrained_by Principle)

Tier 3 — Knowledge layer
  Token, ContentRule, AccessibilityRule (justified_by Decision)

Tier 4 — Contract layer
  Component (justified_by Decision, consumes Token, must_satisfy AccessibilityRule)

Tier 5 — Composition layer
  Pattern (justified_by Decision, composes stable Components)
```

---

## Parallel paths

These paths are not strict serial dependencies on Tiers 3–5:

| Path | Description |
|------|-------------|
| Enhancement → Decision | Proposal before commitment |
| Release → entity changes | Aggregates promotions and deprecations across any tier |
| Capability | Cataloged anytime; evidenced only when Tiers 3–5 are governed and adopted |
| Assessment, Practice | Require Principles; attach to operational reality |

---

## Per-entity dependencies

| Entity | Must exist before stable promotion |
|--------|-----------------------------------|
| Principle | Manifesto section citation (`derived_from`) |
| Decision | No contradiction with accepted Principles |
| Enhancement | Author, sponsoring steward |
| Release | Maintainer authority; documented change set |
| Token | Decision refs, owner, documented semantics |
| ContentRule | Decision refs, owner, semantics |
| AccessibilityRule | Decision refs, owner (accessibility delegate), semantics |
| Component | Decision refs, token refs, accessibility refs |
| Pattern | Decision refs, stable component refs |
| Capability | None (catalog); realization requires governed artifacts + adoption |
| Assessment | Published maturity levels, evidence requirements |
| Practice | Steward ownership |

---

## Invalid dependency states

1. Stable **Component** without **Token** refs.
2. Stable **Token** without **Decision** refs.
3. Stable **Pattern** with unstable **Component** refs.
4. **Pattern** importing tokens bypassing **Components** (without ADR exception).
5. Stable **Principle** contradicting accepted **Decision**.
6. Accepted **Enhancement** without linked **Decision** or **Release** note after agreed window.

See [relationships.md](relationships.md) for relationship types that enforce these rules.
