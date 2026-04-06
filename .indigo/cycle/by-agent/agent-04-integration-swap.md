# Agent 04: Integration Swap

Mission:
- Move approved generated assets from `.indigo/import-targets/` into repo paths.

Targets:
- All active files in `.indigo/asset-tranche/replacement-manifest.json`
- Follow-up integration file:
  - `packages/icons/src/symbols/Strapi.tsx`

Checks:
- Storybook shell header renders the new wordmark.
- Welcome page renders the new cover.
- Symbol stories still compile and render.
- No package API renames are introduced in this cycle.

Done when:
- The active asset tranche is live in repo paths.
- Storybook boots and visual smoke checks pass.

