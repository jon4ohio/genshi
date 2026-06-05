# Component

## Definition

A composable contract for a UI element: its behavior, structure, accessibility expectations, and token consumption—defined independently of any single implementation framework.

## Why It Matters

Components are where design knowledge meets product surfaces. Without contract discipline, implementations diverge while sharing a name.

## Relationships

- **token** — stable components consume semantic tokens
- **pattern** — patterns compose components; components do not compose patterns
- **decision** — stable components require decision references
- **artifact** — component is a governed artifact; implementation is optional export
- **lifecycle** — components share universal artifact states

## Common Misinterpretations

- Identifying a component with a React/Vue/Figma implementation only
- Creating components that embed raw values bypassing semantic tokens
- Treating every variant as a new component instead of composable configuration

## Genshi Interpretation

Components are conceptual contracts in Genshi canon (`system/components/`). A stable component cannot reach stable without `token_refs`, `decision_refs`, and accessibility rule references per metamodel.
