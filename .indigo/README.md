# Indigo Brand Replacement Workspace

This folder is the staging area for the first Indigo brand-asset tranche.

Current constraint:
- Keep the existing Strapi Storybook color tokens for now.
- Limit this cycle to brand asset planning, staging, and swap readiness.
- Do not rename packages or public APIs in this cycle.

Structure:
- `asset-tranche/`: active replacement manifest, hold list, and swap targets.
- `brand-assets/`: Indigo brand brief, palette, and generation prompts.
- `source-assets/`: current repo asset snapshots that need replacement.
- `import-targets/`: mirrored destination paths for drop-in replacement assets.
- `cycle/`: PR slicing, agent ownership, and unfinished-cycle segmentation.

First replacement tranche:
- Wordmark family:
  - `assets/logo.svg`
  - `docs/public/site/logo.svg`
  - `docs/public/site/logo_dark.svg`
- Favicon family:
  - `docs/public/favicon.svg`
  - `docs/public/site/favicon.svg`
- Doc raster family:
  - `docs/public/getting-started/cover.png`
  - `docs/public/stories/strapi-img.png`
- Brand symbol family:
  - `packages/icons/assets/symbols/Strapi.svg`

Usage flow:
1. Use `source-assets/` as the creative reference set.
2. Generate Indigo replacements using `brand-assets/generation-prompts.md`.
3. Save generated outputs into the mirrored paths under `import-targets/`.
4. Copy the approved files from `import-targets/` back into the repo paths.
5. Run Storybook and verify the shell before widening scope.

Implemented in this cycle:
- simple Indigo phone-mark favicon
- simple Indigo light and dark wordmark logos for Storybook
- Storybook brand title/url/favicon wiring
