# Entities

First-class entities in Genshi. Each entity has a stable ID prefix for references (`principle:01`, `token:color.action.primary`, `adr:0003`).

## Entity catalog

| Entity | Purpose | Primary location |
|--------|---------|------------------|
| **Principle** | Normative belief with testable implications | `foundation/principles/` |
| **Decision** | Binding choice (ADR) | `evolution/decisions/` |
| **Enhancement** | Proposed framework change before commitment | `evolution/enhancements/` |
| **Release** | Versioned framework publication | `evolution/releases/` |
| **Practice** | Repeatable method (workshop, audit, cadence) | `operations/`, `foundation/governance/` |
| **Capability** | Organizational ability the DS enables | `reference-models/` (future), `operations/` |
| **Assessment** | Instrument to measure maturity or health | `operations/assessment/` |
| **Artifact** | Abstract managed output of the system | Metamodel only; specialized below |
| **Token** | Semantic design knowledge unit | `system/tokens/` |
| **Component** | Composable UI contract (conceptual) | `system/components/` |
| **Pattern** | Recurring composition of components & behavior | `system/patterns/` |
| **Content rule** | Voice, terminology, editorial constraint | `system/content/` |
| **Accessibility rule** | Inclusive requirement or verification | `system/accessibility/` |

## Required attributes (minimum)

### Principle

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | Two-digit number, e.g. `01` |
| `name` | Yes | Short title |
| `status` | Yes | `stable` \| `experimental` \| `deprecated` |
| `statement` | Yes | One falsifiable sentence |
| `derived_from` | Yes | Link to manifesto section |

### Decision (ADR)

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | `ADR-NNNN` |
| `status` | Yes | Per ADR process |
| `date` | Yes | ISO date |
| `decision_makers` | Yes | Roles or names |
| `supersedes` | Yes | ADR id or `none` |
| `in_scope` / `out_of_scope` | Yes | Boundaries |

### Enhancement

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | `ENH-NNNN` or `RFC-NNNN` |
| `status` | Yes | `draft` \| `active` \| `accepted` \| `rejected` \| `lapsed` |
| `tier` | Yes | 1 minor, 2 major, 3 charter |
| `author` | Yes | Person or role |
| `target_release` | No | Framework version |

### Token

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | Semantic path, e.g. `color.action.primary` |
| `status` | Yes | `experimental` \| `stable` \| `deprecated` |
| `owner` | Yes | Role or team |
| `decision_refs` | Yes | One or more Decision ids |
| `semantics` | Yes | Human-readable meaning |
| `platform_aliases` | No | Maps to CSS, iOS, Android, etc. |

### Component

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | Canonical name |
| `status` | Yes | Lifecycle state |
| `owner` | Yes | Role or team |
| `decision_refs` | Yes | Supporting decisions |
| `token_refs` | Yes | Tokens consumed |
| `accessibility_refs` | Yes | Rules satisfied |

### Pattern

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | Pattern name |
| `status` | Yes | Lifecycle state |
| `component_refs` | Yes | Components used |
| `decision_refs` | Yes | Supporting decisions |

### Assessment

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | Assessment identifier |
| `version` | Yes | Semver |
| `maturity_levels` | Yes | Levels assessed |
| `evidence_required` | Yes | What adopters must supply |

## Ownership defaults

| Entity | Default owner |
|--------|----------------|
| Principle | Foundation steward |
| Decision | Architecture council |
| Enhancement | Author + sponsoring steward |
| Token semantics | Design system lead + accessibility delegate |
| Component / Pattern | Design system engineering + design pair |
| Assessment | Operations steward |

Specific ownership models are defined in [governance.md](governance.md).
