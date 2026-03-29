# PDR: Design System v0.900

## Summary

This document defines the first implementation priorities for the Indigo design-system fork while keeping the package and release contract stable.

- Active implementation scope: Storybook component and design-system repo
- Reference-only repos:
  - LaunchPad Strapi server
  - LaunchPad Next.js frontend
- Deferred scope:
  - Vercel project creation
  - Package rename to `@indigo-services/*`

## Priority Order

### Phase 1: Urgent Storybook Brand Shell PR

The first product-facing PR after GitHub wiring is an urgent Storybook shell branding pass.

Include:

- Storybook title
- Storybook logo assets
- Storybook preview branding fields
- Visible docs or app-shell links that still point at Strapi-hosted shell surfaces
- Indigo placeholder branding for the Storybook shell

Do not include:

- Package renames
- Publish/export API changes
- LaunchPad application changes
- Vercel integration

## Release Guidance

- This urgent branding PR is a GitHub PR only in v0.900.
- Do not add a Changeset just to force a docs-shell release under the inherited Strapi release model.
- After Indigo release parity is verified, evaluate whether Storybook-shell changes should remain non-versioned or ship with package-affecting releases.
