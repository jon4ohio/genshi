# Principle 04: Tokens as Knowledge

## Statement

Tokens encode committed design knowledge; they are not merely variables in a theme file.

## Explanation

A token name and value express organizational agreement: brand, accessibility, density, motion, and platform constraints. Syntax (CSS, JSON, Swift) is export. Knowledge is the semantic layer—what the token means, who owns it, what decisions it reflects, and how it may change.

Treating tokens as implementation details produces duplicate semantics, breaking changes without migration, and tools that cannot explain **why** `#0052CC` exists.

## Why it matters

Tokens are the narrow waist of multi-platform design systems. If semantics are wrong, every component inherits the error.

## Implications

- Define tokens in a **semantic layer** before platform aliases.
- Version and document breaking token changes with migration guidance.
- Bind tokens to decisions and owners in the metamodel.
- Evaluate token proposals on meaning and governance, not only on compile success.

## Anti-patterns

- Raw hex values in components with no semantic token.
- Renaming tokens for coder convenience without migration or rationale.
- Token sprawl: many names, few distinct meanings.
- Auto-generating tokens from Figma without human-owned semantics.

## Examples

- `color.action.primary` documents contrast requirements and brand decision references.
- `--blue-500` copied across repos with no shared definition—knowledge not captured.

## Derived from

- [Manifesto §4 — Assumptions rejected](../thesis/manifesto.md#4-assumptions-genshi-rejects)
- [Token architecture](../../system/tokens/architecture.md) (system layer)
