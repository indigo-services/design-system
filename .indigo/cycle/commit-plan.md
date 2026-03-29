# Commit And PR Segmentation

Suggested PR-safe slices:

1. `chore(indigo): scaffold replacement workspace`
- Add `.indigo` docs, manifest, prompts, and cycle plan.
- No repo asset swaps yet.

2. `chore(indigo): snapshot replaceable brand assets`
- Add `.indigo/source-assets/` and `.indigo/import-targets/` mirrors for the active tranche.
- Still no production asset replacement.

3. `feat(indigo): replace wordmark family`
- Replace `assets/logo.svg`, `docs/public/site/logo.svg`, and `docs/public/site/logo_dark.svg`.
- Verify Storybook shell header.

4. `feat(indigo): replace cover and legacy docs image`
- Replace `docs/public/getting-started/cover.png` and `docs/public/stories/strapi-img.png`.
- Verify welcome page and any direct docs references.

5. `feat(indigo): replace exported brand symbol`
- Replace `packages/icons/assets/symbols/Strapi.svg`.
- Regenerate or manually update `packages/icons/src/symbols/Strapi.tsx`.
- Verify symbol usage in docs stories.

If a single PR is preferred later, slices `3` through `5` can be squashed into one `feat(indigo): swap first brand asset tranche` PR after generation is complete.

Current execution state:
- committed as `65b5d664` on the clean branch: workspace scaffold, manifest, prompts, source captures, import targets
- committed as `f69472f7` on the clean branch: Storybook logo swap, favicon wiring, manager branding
- draft PR target: `main`
