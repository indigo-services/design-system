# Active Asset Tranche

This tranche is intentionally narrow. It covers only the assets that are visibly Strapi-branded or that define the Storybook shell and welcome experience.

Active generation set:
- `logo-wordmark`
  - `assets/logo.svg`
  - `docs/public/site/logo.svg`
  - `docs/public/site/logo_dark.svg`
  - Rationale: shell identity and root repo identity should come from one Indigo logo family.
- `favicon`
  - `docs/public/favicon.svg`
  - `docs/public/site/favicon.svg`
  - Rationale: the Storybook tab and browser surface need the same Indigo mark family.
- `welcome-cover`
  - `docs/public/getting-started/cover.png`
  - Rationale: this is the first large visual on the welcome page.
- `legacy-brand-image`
  - `docs/public/stories/strapi-img.png`
  - Rationale: explicit Strapi-branded doc image; replace or retire in the same cycle.
- `brand-symbol`
  - `packages/icons/assets/symbols/Strapi.svg`
  - Rationale: this is the current exported brand mark inside `@strapi/icons`.

Not in this tranche:
- Generic icon assets under `packages/icons/assets/icons/`
- Structural docs images under `docs/public/Foundations/`
- Demo photos under `docs/public/stories/avatar/`
- Demo carousel media under `docs/public/stories/carousel/`
- Loader and pagination internals under `packages/design-system/src/components/**/assets`

Why they are out of scope:
- They are not Indigo-specific brand blockers.
- They can be reviewed later as a separate visual refresh cycle.
- Replacing them now would mix branding work with generic demo-content churn.

Already generated in this cycle:
- `assets/logo.svg`
- `docs/public/site/logo.svg`
- `docs/public/site/logo_dark.svg`
- `docs/public/favicon.svg`
- `docs/public/site/favicon.svg`
