# Active Tasks

## Completed in v1

- [x] Create static HTML dashboard.
- [x] Add structured itinerary data.
- [x] Add budget tracker.
- [x] Add route links.
- [x] Add reservation, happy-hour, coffee, rainy-day, and exclusion guides.
- [x] Add social/dating app guide and public meetup recommendations.
- [x] Add source list.

## Future Research Pass

- [ ] Reverify every candidate location against November 2026 hours.
- [ ] Add exact Amtrak departure and arrival times from ticket.
- [ ] Add NHL home game if schedule and budget allow.
- [ ] Replace Google Maps search links with exact saved list/map if a Maps API key is provided.
- [ ] Export a PDF snapshot after final recheck.

## Automation

- [x] Choose hosting provider for public access: Netlify is live.
- [x] Choose notification channel for price/reservation/transit alerts: GitHub Issues for now.
- [x] Convert itinerary data into a monitorable source or build a parser for `data/trip-data.js`.
- [x] Add scheduled checks for food prices, menu links, reservations, happy hours, backup activities, transit fares, ferry fares, Amtrak status, and route disruptions.
- [x] Save recurring check reports under `research/pricing/`.
- [x] Run budget validation after every automated update.
- [x] Redeploy the public dashboard after accepted pushes via Netlify auto-deploy.
- [ ] Update `data/trip-data.js` automatically when low-risk factual price/hour/fare changes are detected.
- [ ] Add a second notification channel if GitHub Issues alone is not enough.
