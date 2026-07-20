# Tokens

## Source vs generated

| Path | Role |
|------|------|
| `source/seamkit/` | Southleft / Figma export only — never hand-edit |
| `source/overrides/` | Genshi customizations (win on merge) |
| `generated/` | Build output — do not hand-edit |

## Re-export flow

```text
Southleft figma_export_tokens → source/seamkit/
  → reference/seamkit.snapshot.json
  → npm run build:tokens
  → generated/{css,ts,tailwind}
```

See [../README.md](../README.md) for Southleft MCP setup.
