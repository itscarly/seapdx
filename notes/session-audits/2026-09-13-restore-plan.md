# Restore And Audit Seattle + Portland 2026

## Goal

Restore the deleted local checkout, verify the static dashboard still builds, run a targeted itinerary and price audit, and prepare the project for continued updates.

## Acceptance Criteria

- Local checkout exists in this folder and tracks `origin/main`.
- `npm install` and `npm run validate` pass.
- Calendar target is identified as `Seattle & Portland 2026`; if connector scopes are unavailable, repo-side JSON/CSV exports remain the handoff path.
- Targeted price changes use current public sources and preserve the static data model.
- Notes record the restore/audit result.

## Approach

- Keep `data/trip-data.js` as source of truth.
- Avoid new frameworks, backends, dependencies, or calendar automation rewrites.
- Update only concrete audited stale prices and related notes.
- Preserve current compact editorial visual system.

## Verification

- `npm run validate`
- `npm run sync:calendar`
- `npm run serve`, then inspect dashboard and logistics page locally.
- If Google Calendar scopes are restored, compare Nov 1-9, 2026 events against exported `data/google-calendar-events-nov1-9-2026.json`.

## Known Limits

- Google Calendar connector currently returns `ACCESS_TOKEN_SCOPE_INSUFFICIENT`; live calendar writes require reauthentication.
- First price refresh is targeted, not a full every-stop reprice.
