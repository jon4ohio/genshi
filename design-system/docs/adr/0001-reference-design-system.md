# ADR-0001: SeamKit as Phase 1 Reference Design System

## Status

**Status:** Accepted  
**Date:** 2026-07-20  
**Decision Maker(s):** Genshi maintainers  
**Supersedes:** None

## Context

Genshi needs a reference implementation (`design-system/`) that demonstrates token-driven React components. SeamKit is an existing, production-grade design system with Figma libraries and token architecture already aligned with the repo's historical token export.

**In scope:** Phase 1 adaptation strategy and Figma ownership.  
**Out of scope:** Full SeamKit component catalog adoption.

## Decision Drivers

- Avoid premature fork of SeamKit Figma libraries
- Preserve upstream fixes during adaptation
- Enable later independence via phased migration

## Decision

**We will use SeamKit as the Phase 1 design reference without duplicating or detaching Figma libraries.**

Genshi code adapts SeamKit via `mappings/` and `gsh` identifiers. Figma fork/migrate/own happens in Phases 2–4 per [ADAPTATION.md](../../ADAPTATION.md).

## Consequences

### Positive

- Faster Phase 1 delivery using proven tokens and components
- SeamKit library updates remain available during adaptation

### Negative / Trade-offs

- Temporary dependency on SeamKit naming (`sfe.*`) in source exports

### Risks

| Risk | Likelihood | Impact | Mitigation | Owner | Review Trigger |
|------|-----------|--------|------------|-------|----------------|
| SeamKit breaking changes without snapshot | Med | Med | `reference/seamkit.snapshot.json` on every export | Maintainers | Re-export diff |

## Related ADRs

- ADR-0002 — token strategy
- ADR-0004 — component ownership

## References

- [Seamkit.Tokens Figma](https://www.figma.com/design/IafiBqd0CR4UyN6WgnnLiR/)
- [SeamKit.UI Platform Figma](https://www.figma.com/design/1mpwO1oRCJG6tOrXIZpr5w/)
- [ADAPTATION.md](../../ADAPTATION.md)
