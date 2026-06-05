# Token Architecture

Conceptual architecture for design tokens in Genshi. This is not a syntax specification (CSS, JSON, Figma variables). It defines what tokens **are** and how they sit in the decision-centric stack.

**Binding:** [ADR-0003](../../evolution/decisions/ADR-0003-decision-centric-architecture.md)  
**Principle:** [04 — Tokens as Knowledge](../../foundation/principles/04-tokens-as-knowledge.md)  
**Metamodel:** [Token entity](../../foundation/metamodel/entities.md), [Relationships](../../foundation/metamodel/relationships.md)

---

## Definition

A **token** is a unit of committed design knowledge: a named semantic agreement with documented meaning, owner, lifecycle, and links to the decisions that justify it.

Tokens are not variables. Variables are exports.

---

## Decision-centric stack

```text
Decision  →  Token (semantic)  →  Component  →  Pattern
                └── platform aliases (primitive values)
```

| Layer | Role |
|-------|------|
| **Decision** | Records why a semantic exists, scope, and change rules |
| **Token (semantic)** | Names meaning: `color.action.primary`, `space.stack.md`, `motion.duration.enter` |
| **Alias** | Platform representation: `#0052CC`, `16px`, `200ms` — subordinate to semantic |
| **Component** | Consumes semantic tokens; does not invent parallel hex semantics |
| **Pattern** | Composes components; does not bypass components to raw values |

Introducing a new stable semantic without a **decision_ref** violates Genshi conformance (see metamodel invalid states).

---

## Token layers (semantic model)

Genshi recommends three semantic tiers for naming discipline:

| Tier | Purpose | Example |
|------|---------|---------|
| **Global** | Cross-product fundamentals | `color.brand.primary`, `font.family.sans` |
| **Semantic** | Intent in UI | `color.action.primary`, `color.text.muted` |
| **Component-scoped** | Local overrides with explicit scope | `button.primary.background.rest` — use sparingly |

**Anti-pattern:** Large component-scoped tiers that duplicate globals without justification—signals missing global semantics.

---

## Required metadata (stable tokens)

Per [metamodel](../../foundation/metamodel/entities.md):

- `id` — semantic path
- `status` — lifecycle state
- `owner` — accountable role or team
- `decision_refs` — ADR, design decision, or equivalent
- `semantics` — prose: usage, contrast, motion character, density role
- `platform_aliases` — optional maps per platform

---

## Knowledge vs syntax

| Knowledge (canon) | Syntax (implementation) |
|-------------------|-------------------------|
| Meaning of `color.action.primary` | CSS custom property, JSON token file, Figma variable |
| Contrast requirements | Automated a11y test configuration |
| Deprecation and successor | Codemod, migration guide, lint rule |

Genshi canon stays in meaning and governance. Adopters choose Style Dictionary, Terrazzo, native theme APIs, etc., as adapters.

---

## Change and deprecation

1. Propose change with reference to new or updated **Decision**.
2. Classify impact: patch (alias only), minor (new semantic), major (breaking rename or meaning shift).
3. Update `status`: stable → deprecated with migration window.
4. Notify consumers; patterns and components inherit token deprecation.

---

## Relationship to tools

Figma, Sketch, and code generators are **sources or sinks**, not owners of semantics. Tool sync must not create stable tokens without human-owned `semantics` and `decision_refs`.

---

## What this document does not cover

- W3C Design Tokens Format compliance (future enhancement)
- Reference implementation packages (`reserved/`)
- Component API details (`system/components/`)

---

## Derived from

- [Manifesto §4 — Assumptions rejected](../../foundation/thesis/manifesto.md#4-assumptions-genshi-rejects)
- [ADR-0003 — Decision-centric architecture](../../evolution/decisions/ADR-0003-decision-centric-architecture.md)
