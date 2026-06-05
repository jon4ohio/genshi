# Lifecycle

States and transitions for Genshi entity types. Adopters may map these to their own workflow tools; names should remain recognizable for conformance discussions.

## Universal states

| State | Meaning |
|-------|---------|
| `draft` | Not ready for adoption; may change freely |
| `experimental` | Available for trial; breaking changes allowed with notice |
| `stable` | Committed; breaking change requires governed process |
| `deprecated` | Still available; successor identified; migration required |
| `retired` | Removed from active canon; archive only |

## Principle

```text
draft → experimental → stable → deprecated → retired
```

- **stable → deprecated:** Enhancement + steward approval; superseding principle file or ADR.
- Principles do not skip **experimental** when implications are org-wide.

## Decision (ADR)

```text
proposed → accepted → superseded | deprecated | archived
```

- **Accepted** substance is immutable (see ADR process).
- **superseded:** New ADR replaces; old ADR links forward only.

## Enhancement

```text
draft → active → accepted | rejected | lapsed
```

- **lapsed:** No ADR/canon update within agreed window (default 90 days for Tier 2).

## Token

```text
draft → experimental → stable → deprecated → retired
```

| Transition | Requirement |
|------------|-------------|
| → stable | decision_refs, owner, semantics documented |
| stable → deprecated | Successor token or explicit “no replacement”; migration guide |
| deprecated → retired | Adoption deadline passed; major release |

## Component

```text
draft → experimental → stable → deprecated → retired
```

Same gates as Token, plus accessibility_refs and token_refs.

## Pattern

```text
draft → experimental → stable → deprecated → retired
```

Patterns cannot reach **stable** if referenced components are not **stable**.

## Assessment

```text
draft → published → revised → retired
```

- **published** maps to `stable` for semver of assessment packs.
- Revisions increment assessment version; framework release notes link changes.

## Release (framework)

```text
planned → published → maintained → end_of_life
```

Framework releases aggregate entity changes; see `evolution/releases/`.
