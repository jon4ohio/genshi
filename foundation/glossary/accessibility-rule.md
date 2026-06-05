# Accessibility Rule

## Definition

A knowledge-primary artifact that encodes inclusive requirements and verification criteria as governed organizational knowledge.

## Why It Matters

Accessibility is a property of the system's definition of done—not a phase. Rules at the knowledge layer bind component contracts before implementation.

## Relationships

- **knowledge-asset** — accessibility rule specializes knowledge-asset
- **component** — stable components must satisfy accessibility refs
- **decision** — stable rules require decision references
- **artifact** — accessibility rule is a governed artifact

## Common Misinterpretations

- Treating automated test suites alone as the accessibility rule (tests verify; rules define)
- Deferring accessibility to implementation without governed requirements
- Confusing WCAG checklists with owned, lifecycle-managed rule artifacts

## Genshi Interpretation

Accessibility rules live in `system/accessibility/`. Stable components reference `accessibility_refs` per metamodel. Manifesto: accessibility is not a phase.
