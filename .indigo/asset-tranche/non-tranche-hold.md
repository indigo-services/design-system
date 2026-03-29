# Hold List

These assets are intentionally not part of the first Indigo replacement tranche.

Hold categories:
- `docs/public/Foundations/*.png`
  - Keep for now. These are instructional diagrams, not direct brand blockers.
- `docs/public/stories/avatar/*.jpeg`
  - Keep for now. These are demo images, not company branding.
- `docs/public/stories/carousel/*`
  - Keep for now. These are component demo assets.
- `packages/icons/assets/icons/*`
  - Keep for now. These are generic UI icons, not Indigo brand marks.
- `packages/design-system/src/components/**/assets/*.svg`
  - Keep for now. These are component internals, not fork identity assets.

Promote a hold asset into an active tranche only if one of these becomes true:
- It visibly blocks Indigo branding in Storybook shell or the welcome flow.
- It contains explicit Strapi wording or marks.
- It is required to complete a single PR-safe replacement family.

