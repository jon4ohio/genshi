# SeamKit → Genshi Adaptation

SeamKit is the **Phase 1 design reference**. Genshi is the **implementation**. This folder adapts SeamKit into a maintainable, reproducible design-system pipeline—not a one-time copy.

## Philosophy

- **Reference, not fork (yet):** Keep SeamKit Figma linked during Phase 1.
- **Machine-readable adaptation:** Mappings live in [`mappings/`](mappings/), not in prose tables here.
- **Canonical namespace:** Genshi public tokens use `gsh.*` / `--gsh-*`, mapped from SeamKit `sfe.*` / `--sfe-*`.
- **Storybook is the contract:** Developers consume components through Storybook stories, not ad-hoc examples.

## Governance (Phase 1)

| Concern | Authority |
|---------|-----------|
| Design | SeamKit Figma (temporary upstream) |
| Tokens (source) | `tokens/source/seamkit/` + `tokens/source/overrides/` |
| Tokens (published) | `@genshi/tokens` (generated only) |
| Implementation | `@genshi/react` |
| Developer contract | Storybook |
| Why decisions exist | [`docs/adr/`](docs/adr/) |

**Temporary dependency:** SeamKit design + variable names in source exports.

**Exit criteria (Phase 4):** All components, tokens, variables, and docs owned by Genshi; SeamKit library disabled; [`reference/seamkit.snapshot.json`](reference/seamkit.snapshot.json) retained as provenance.

## Phase lifecycle

### Phase 1 — Adaptation (current)

SeamKit Figma → Southleft export → `tokens/source/seamkit` → build → React + Storybook.

**Sources of truth:** SeamKit design + Genshi code.

### Phase 2 — Fork

Duplicate SeamKit → rename as Genshi Design Library. Ownership, not differentiation.

### Phase 3 — Migration

Publish Genshi library; swap components and variables family-by-family; remove SeamKit dependencies.

### Phase 4 — Independence

Genshi Design Library ↔ tokens ↔ React ↔ Storybook ↔ applications. No SeamKit dependency.

## Editing mappings

| File | Purpose |
|------|---------|
| [`mappings/tokens.json`](mappings/tokens.json) | `sfe.*` → `gsh.*` token path map |
| [`mappings/aliases.json`](mappings/aliases.json) | `--sfe-*` → `--gsh-*` CSS aliases (consumed by build) |
| [`mappings/components.json`](mappings/components.json) | SeamKit → React component registry + conformance |

After editing mappings, run `npm run build:tokens`.

## Re-sync

```bash
# 1. Southleft MCP (when connected)
#    figma_export_tokens → tokens/source/seamkit/
#    updates reference/seamkit.snapshot.json

# 2. Build
npm run build:tokens

# 3. Verify contract
npm run storybook
```

## MCP split

| Tool | Role |
|------|------|
| **Southleft Figma Console MCP** | Token export, variable collections, component specs |
| **Official Figma MCP** | Screenshots, metadata, visual parity checks |

See [README.md](./README.md) for Southleft setup.
