# Indigo Brand Assets

This folder defines the target look for the first Indigo asset replacement pass.

Goals:
- Keep the tone enterprise, restrained, and legible at small sizes.
- Prefer flat vector shapes for logos and symbols.
- Keep the first tranche compatible with the current Strapi component token system.
- Make every output replaceable without code-level API changes.

Deliverables expected from this folder:
- One master Indigo wordmark family.
- One favicon-safe Indigo phone mark.
- One Indigo symbol mark that can replace the current `Strapi` symbol asset path.
- One Indigo welcome cover image.
- One Indigo replacement for the legacy `strapi-img.png` image.

Generated outputs should be saved under `generated/` and then copied into `.indigo/import-targets/`.

Current generated set:
- `favicon.svg`, `favicon.png`, `favicon.webp`
- `indigo-phone-mark.svg`, `indigo-phone-mark.png`, `indigo-phone-mark.webp`
- `indigo-wordmark-light.svg`, `indigo-wordmark-light.png`, `indigo-wordmark-light.webp`
- `indigo-wordmark-dark.svg`, `indigo-wordmark-dark.png`, `indigo-wordmark-dark.webp`
