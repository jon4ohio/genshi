# ADR-0003: Storybook as Public API Contract

## Status

**Status:** Accepted  
**Date:** 2026-07-20  
**Decision Maker(s):** Genshi maintainers  
**Supersedes:** None

## Context

The employee-directory example demonstrates usage but is not a complete component contract. Developers need a canonical reference for props, variants, and token usage.

## Decision

**Storybook is the public API contract for `@genshi/react`.**

Pipeline: Figma → tokens → React → **Storybook** → consumers.

Each Phase 1 component requires stories covering public props, variants, and states. Foundation token stories validate theme wiring.

## Consequences

### Positive

- Single developer-facing reference
- Conformance gate includes Storybook coverage

### Negative / Trade-offs

- Storybook maintenance overhead

## References

- [.storybook/](../../.storybook/)
- [mappings/components.json](../../mappings/components.json)
