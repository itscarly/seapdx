# Hotel Monitoring Workflow

This tracker now uses scheduled direct-site checks for the Seattle stay.

## Scope

- Check-in: `2026-11-01`
- Check-out: `2026-11-04`
- Nights: `3`
- Guests: `2`
- Refundable quotes only
- Direct hotel booking flows only

## Active cadence

- Monday, Wednesday, Friday at `10:00 AM` America/New_York until Sep 16, 2026
- Daily at `10:00 AM` America/New_York from Sep 17 through Oct 31, 2026

## Output expectations

- Update `data/hotel-monitor-source.json`
- Run `npm run build:hotels`
- Run `npm run validate`
- Keep the site explicit when no Seattle hotel qualifies under the `$400` total cap
