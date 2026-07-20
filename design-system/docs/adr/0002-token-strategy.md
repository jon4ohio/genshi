# ADR-0002: Token Strategy — Source, Generated, and gsh Mapping

## Status

**Status:** Accepted  
**Date:** 2026-07-20  
**Decision Maker(s):** Genshi maintainers  
**Supersedes:** None

## Context

Token files were flat under `design-system/tokens/`. Re-exports risked overwriting hand-maintained files. Public API needed a Genshi namespace distinct from SeamKit.

## Decision Drivers

- Reproducible Southleft re-export
- Clear separation of imported vs generated artifacts
- Stable public CSS API (`--gsh-*`)

## Decision

**We will use a source/generated split with Style Dictionary and a machine-readable mapping registry.**

- `tokens/source/seamkit/` — export only
- `tokens/source/overrides/` — Genshi wins on merge
- `tokens/generated/` — CSS, TS, Tailwind preset
- `mappings/aliases.json` — drives `--gsh-*` aliases in build
- Canonical namespace: `gsh.*` / `--gsh-*`

## Consequences

### Positive

- Re-export overwrites only `source/seamkit/`
- Consumers can migrate to `--gsh-*` incrementally

### Negative / Trade-offs

- Dual namespace (`sfe` + `gsh`) during Phase 1

## References

- [packages/tokens/build.mjs](../../packages/tokens/build.mjs)
- [mappings/aliases.json](../../mappings/aliases.json)
