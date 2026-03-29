# Agent 01: Asset Audit

Mission:
- Confirm the active replacement tranche.
- Keep the hold list out of scope.

Inputs:
- `.indigo/asset-tranche/replacement-manifest.json`
- `.indigo/asset-tranche/non-tranche-hold.md`

Outputs:
- Approved target list for generation.
- No production asset changes.

Done when:
- Every active asset has a confirmed family and prompt reference.
- Hold assets are explicitly documented.

