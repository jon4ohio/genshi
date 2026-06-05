# Enhancement

## Definition

A proposed change to framework or design system canon before commitment to a binding decision or release.

## Why It Matters

Significant changes require visible proposal and review. Enhancements prevent silent drift in principles, metamodel, or operating rules.

## Relationships

- **decision** — accepted enhancements may produce ADRs
- **release** — accepted changes may aggregate into versioned publication
- **governance** — tiered review (minor, major, charter) applies
- **lifecycle** — enhancements follow draft → active → accepted | rejected | lapsed

## Common Misinterpretations

- Treating enhancements as informal issues without tier or lapse discipline
- Skipping enhancement when editing stable canon directly
- Confusing enhancement with implementation tasks or pull requests alone

## Genshi Interpretation

Enhancements live in `evolution/enhancements/`. Accepted Tier 2+ enhancements must yield linked Decisions or release notes within agreed window (default 90 days).
