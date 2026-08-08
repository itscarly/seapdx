# Known Issues

Related: [[TASKS]] · [[CHANGELOG]] · [[LEARNINGS]] · [[Project Log]]

## Current known issues

### Hotel booking cleanup still needs human confirmation

- Status: resolved as of 2026-08-02
- Detail: the dashboard now treats Boylston and Hotel Vance, a Tribute Portfolio Hotel, as the active hotel truth (confirmed accommodations total `$917.42`). Courtyard by Marriott Portland City Center was the stale booking and has been fully removed from trip-data.js, app.js, index.html, logistics.html, and the memory notes.

### November 2026 hours and one unverified transit time still need closer review

- Status: open (narrowed 2026-08-07)
- Detail: (1) Asiana's OZ271/272 schedule notice lists Mon/Tue/Wed/Fri/Sat rather than the booked Sunday Nov 1 arrival date -- reconfirm directly with Asiana. The Seattle Kraken watch item is retired; Kraken tickets were removed from the plan on 2026-08-02 and should not be reintroduced. "Sea'd In Capitol Hill" is resolved -- the venue was deleted from the itinerary on 2026-08-06, not just flagged. The POINT NorthWest Cannon Beach round-trip bus time (Day 6) is now resolved -- confirmed 8:28 AM depart PDX / 11:46 AM arrive Astoria, 5:55 PM depart Astoria / 9:00 PM arrive PDX, source: user's CSV/screenshot. The Columbia Gorge Express / Multnomah Falls watch item is retired entirely -- Multnomah Falls was removed from the itinerary on 2026-08-07 (Day 8 is now a tattoo-rest day), so there is no longer a Gorge Express schedule to verify.

### Projected trip spend now exceeds the $1,250 cap

- Status: open, flagged not fixed
- Detail: as of the 2026-08-07 Nov 6-9 reconciliation (corrected 2026-08-07 for a Pretty Ugly Burger/Novel Book Bar cost double-count), projected total is $1,296.35 against a $1,250 cap / $1,300 absolute ceiling -- $46.35 over cap but under ceiling. Driven by real receipts (Nov 7 tattoo $177, Pretty Ugly Burger dinner $63, Novel Book Bar $29). `npm run validate` will report this as a failure by design; it is not a script bug. Resolve by either raising the cap to match real spend or trimming a category.

### Local calendar sync script does not touch the live Google Calendar

- Status: known limitation, not a bug to fix unless requested
- Detail: `npm run sync:calendar` (`scripts/sync-calendar-exports.js`) only regenerates local `data/google-calendar-events-nov1-9-2026.json`/`.csv`. It has no code path that calls the Google Calendar API. If `trip-data.js` changes after the live "Seattle & Portland 2026" calendar was last resynced, the live calendar will silently drift out of date. Fix by hand via the Google Calendar MCP tools: delete the stale date-range events and recreate from the regenerated local export, scoped to `calendarId: b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com` with `notificationLevel: "NONE"` -- never the personal calendar. Fully resynced as of 2026-08-06 (session 39).

### Homepage calendar links still prefer day-level fallback when no exact event URL is stored

- Status: open
- Detail: if a stop has no exact `calendarUrl`, the homepage uses a Google Calendar day view link rather than the specific event view. The route and content still match, but the deep-linking can be tightened later.

### Agent-maintained docs still depend on meaningful task boundaries

- Status: open
- Detail: the system can keep notes cleaner, but it still depends on Codex or Claude following the post-task maintenance rules after real work
