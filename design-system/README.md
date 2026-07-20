# Genshi Design System (Research & Validation)

SeamKit → Genshi adaptation layer in the **Research & Validation** repository. Genshi framework canon stays in `foundation/`; this folder is an exploration artifact that informed the production implementation.

**Production implementation:** [genshi-design-system](https://github.com/jon4ohio/genshi-design-system) — `@genshi/*` packages, Lit core, React adapters, releases, and Storybook.

## Structure

```text
design-system/
├── tokens/
│   ├── source/seamkit/     # Southleft export only
│   ├── source/overrides/   # Genshi customizations
│   └── generated/          # CSS / TS / Tailwind (build output)
├── mappings/               # Machine-readable sfe → gsh registry
├── reference/              # seamkit.snapshot.json provenance
├── docs/adr/               # Adaptation decision records
├── packages/
│   ├── tokens/             # @genshi/tokens
│   └── react/              # @genshi/react
├── .storybook/             # Public API contract
└── examples/employee-directory/
```

## Prerequisites

### Southleft Figma Console MCP

1. Create a [Figma personal access token](https://www.figma.com/developers/api#access-tokens) with **File**, **Version**, and **Variable** scopes.
2. Add to Cursor MCP settings:

```json
{
  "mcpServers": {
    "figma-console": {
      "url": "https://figma-console-mcp.southleft.com/sse",
      "headers": {
        "X-Figma-Token": "<your-token>"
      }
    }
  }
}
```

Or use local NPX per [Figma Console MCP docs](https://docs.figma-console-mcp.southleft.com/).

3. Smoke-test:

```text
figma_export_tokens for file IafiBqd0CR4UyN6WgnnLiR → tokens/source/seamkit/
figma_get_design_system_summary for file 1mpwO1oRCJG6tOrXIZpr5w
```

Config: [`tokens.config.json`](tokens.config.json). Snapshot: [`reference/seamkit.snapshot.json`](reference/seamkit.snapshot.json).

**Phase 1 baseline:** Existing SeamKit token sets were migrated into `tokens/source/seamkit/` until Southleft is connected.

## Commands

```bash
cd design-system
npm install
npm run build:tokens   # merge source → generated + @genshi/tokens dist
npm run build          # tokens + typecheck react
npm run storybook      # public API contract (port 6006)
npm run build-storybook
npm run test           # component smoke tests
npm run dev            # employee directory example
```

## Public token API

- SeamKit vars: `--sfe-*` (preserved in build)
- Genshi vars: `--gsh-*` (aliases via [`mappings/aliases.json`](mappings/aliases.json))

Prefer `--gsh-*` in new component code.

## Adaptation docs

- [ADAPTATION.md](./ADAPTATION.md) — philosophy, governance, phases
- [FOUNDATION-GAPS.md](./FOUNDATION-GAPS.md) — usage findings
- [docs/adr/](./docs/adr/) — decision records
