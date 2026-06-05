# Artifact Entities

Artifact hierarchy: abstract supertypes and concrete specializations. See [ontology.md](../ontology.md) for purpose and governance implications.

**Decision-centric stack:** Decision → Token → Component → Pattern (ADR-0003)

## Type hierarchy

```text
Artifact (abstract)
├── KnowledgeAsset (abstract)
│   ├── Token
│   ├── ContentRule
│   └── AccessibilityRule
├── Component
└── Pattern
```

## Catalog

| Entity | Glossary | Knowledge primary? | Instance location |
|--------|----------|-------------------|-------------------|
| **Artifact** | [artifact](../../glossary/artifact.md) | — (abstract) | Metamodel only |
| **KnowledgeAsset** | [knowledge-asset](../../glossary/knowledge-asset.md) | Yes (abstract) | Metamodel only |
| **Token** | [token](../../glossary/token.md) | Yes | `system/tokens/` |
| **ContentRule** | [content-rule](../../glossary/content-rule.md) | Yes | `system/content/` |
| **AccessibilityRule** | [accessibility-rule](../../glossary/accessibility-rule.md) | Yes | `system/accessibility/` |
| **Component** | [component](../../glossary/component.md) | No (behavior contract) | `system/components/` |
| **Pattern** | [pattern](../../glossary/pattern.md) | No (composition) | `system/patterns/` |

Implementation in tools is export. A Figma component or npm package is evidence of an artifact, not the artifact's definition.

## Required attributes

### Token

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | Semantic path, e.g. `color.action.primary` |
| `status` | Yes | Lifecycle state |
| `owner` | Yes | Role or team |
| `decision_refs` | Yes | One or more Decision ids |
| `semantics` | Yes | Human-readable meaning (per-dimension expression of [meaning](../../glossary/meaning.md)) |
| `platform_aliases` | No | Maps to CSS, iOS, Android, etc. |

### ContentRule

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | Canonical rule identifier |
| `status` | Yes | Lifecycle state |
| `owner` | Yes | Role or team |
| `decision_refs` | Yes | Supporting decisions |
| `semantics` | Yes | Rule meaning and scope |

### AccessibilityRule

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | Canonical rule identifier |
| `status` | Yes | Lifecycle state |
| `owner` | Yes | Accessibility delegate |
| `decision_refs` | Yes | Supporting decisions |
| `semantics` | Yes | Requirement and verification criteria |

### Component

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | Canonical name |
| `status` | Yes | Lifecycle state |
| `owner` | Yes | Role or team |
| `decision_refs` | Yes | Supporting decisions |
| `token_refs` | Yes | Tokens consumed |
| `accessibility_refs` | Yes | Rules satisfied (required for stable) |

### Pattern

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | Pattern name |
| `status` | Yes | Lifecycle state |
| `owner` | Yes | Role or team |
| `component_refs` | Yes | Components used (stable for stable pattern) |
| `decision_refs` | Yes | Supporting decisions |

## Ownership defaults

| Entity | Default owner |
|--------|----------------|
| Token | Design system lead + accessibility delegate |
| ContentRule | Design system lead + content steward |
| AccessibilityRule | Accessibility delegate |
| Component / Pattern | Design system engineering + design pair |

## Invalid states

1. Stable **Token** with zero **Decision** refs.
2. Stable **Component** with zero **Token** refs.
3. Stable **Pattern** with unstable **Component** refs.
4. **Pattern** importing tokens directly while bypassing components (except documented ADR exceptions).
5. Stable **KnowledgeAsset** without `decision_refs` or documented semantics.
