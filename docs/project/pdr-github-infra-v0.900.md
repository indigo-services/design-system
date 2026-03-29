# PDR: GitHub Infra v0.900

## Summary

This document defines the operational fork setup for the Indigo Design System effort.

- Upstream source of truth: `strapi/design-system`
- Indigo main remote: `indigo-services/design-system`
- Local working clone: `app-indigo-design`
- Delivery model: local feature branch -> PR -> `main`

## Phase Plan

### Phase 0: Fork Foundation

- Create `indigo-services/design-system` as the authoritative remote repository.
- Replace local `origin` from `strapi/design-system` to `git@github.com:indigo-services/design-system.git`.
- Preserve current branch conventions during the fork transition:
  - `main`
  - `develop`
  - `releases/*`

### Phase 0.1: GitHub Configuration PR

- Re-point Changesets changelog metadata to `indigo-services/design-system`.
- Re-point workflow guards that hardcode `strapi/design-system`.
- Re-point repo-facing issue, PR, and contributor links to the Indigo remote.
- Keep package names under `@strapi/*` in this phase.

### Phase 0.2: GitHub Project Structure

Use one master GitHub Project v2 for the full program.

Fields:

- `Status`: `Backlog`, `Ready`, `In Progress`, `Review`, `Done`
- `Track`: `GitHub Infra`, `Brand Template`, `Release Parity`, `Vercel Deferred`
- `Cycle`: `0 Fork Foundation`, `0.1 GitHub Config`, `1 Brand Shell`, `2 Release Parity`, `3 Vercel`
- `Type`: `Epic`, `Issue`, `PR`, `Release`
- `Priority`: include `Urgent`

Seed epics/issues:

- `Epic: Fork repo to indigo-services/design-system`
- `Issue: Replace origin remote`
- `Issue: Re-point Changesets and workflow repo references`
- `Issue: Establish Indigo Project/labels/templates`
- `Epic: Storybook brand template replacement`
- `Issue: Replace Storybook shell branding surfaces`

Suggested labels:

- `track: github-infra`
- `track: brand-template`
- `track: release-parity`
- `track: vercel-deferred`
- `priority: urgent`
- `type: epic`
- `type: task`
- `type: release`

## PR and Release Protocol

- Default policy: `1 issue = 1 PR`
- Separate PR for GitHub configuration
- Separate PR for urgent Storybook shell branding
- Existing CI remains authoritative:
  - `yarn build`
  - `yarn lint`
  - `yarn test:ts`
  - `yarn test:unit`
  - Chromatic

Release notes:

- GitHub-infra and docs-only PRs do not require a Changeset.
- Package-affecting PRs continue to use Changesets and SemVer.
- Vercel is explicitly deferred until a later deployment phase.
