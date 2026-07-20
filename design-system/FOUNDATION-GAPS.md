# Foundation gaps (discovered during v1 screen build)

Recorded after Employee Directory — patch when a second screen needs it.

| Gap | Observation | Priority |
|-----|-------------|----------|
| Elevation / shadow | `.effect/value` tokens are structural placeholders (0px). Rows rely on border, not shadow. | Low until overlays/modals |
| Motion | No duration/easing tokens in export. Hover states are instant CSS. | Low |
| `sfe.color.fill.backround` typo | Typo in source semantic layer (not used by v1 primitives). | Fix when touching color set |
| Mobile token sets | `sizing/mobile` and `component/mobile` in seamkit source but skipped in web build. | Defer |
| Font loading | Composites reference Rubik; loaded via Google Fonts in example. Production needs self-hosted or system stack. | Medium for prod |
| Southleft MCP | Not connected in initial Phase 1 implementation; baseline migrated from existing token export. | Connect for re-sync |
| gsh alias coverage | `mappings/aliases.json` covers Phase 1 primitives only; expand as components ship. | Ongoing |

## Patterns emerged

- **Page header** — `Text pageTitle` + `Text caption`
- **Toolbar** — horizontal `Stack` + `Input` + `Button`
- **List row** — bordered `Box` + horizontal `Stack` + `Text`
- **Empty state** — `Box` + `sectionTitle` + `body` + action `Button`
