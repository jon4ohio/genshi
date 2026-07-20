# ADR-0004: Component Ownership and Conformance

## Status

**Status:** Accepted  
**Date:** 2026-07-20  
**Decision Maker(s):** Genshi maintainers  
**Supersedes:** None

## Context

"Parity with SeamKit" is subjective without explicit done criteria. Phase 1 targets seven foundational primitives.

## Decision

**A component is done only when its conformance checklist passes**, tracked in `mappings/components.json`:

1. Tokens mapped (registry + `--gsh-*` CSS)
2. Props defined (public API)
3. Accessibility (roles, keyboard, contrast where applicable)
4. Storybook stories (contract)
5. Tests (unit/smoke)
6. Figma parity (Southleft spec + screenshot when available)
7. Documentation (Storybook docs)

Phase 1 components: Text, Box, Stack, Button, Input, Badge, Icon.

## Consequences

### Positive

- Objective ship criteria
- Registry links SeamKit names to `gsh.*` stable IDs

### Negative / Trade-offs

- Higher upfront cost per component

## References

- [mappings/components.json](../../mappings/components.json)
- [@genshi/react](../../packages/react/)
