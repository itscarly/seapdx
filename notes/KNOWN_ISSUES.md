# Known Issues

Related: [[TASKS]] · [[CHANGELOG]] · [[LEARNINGS]] · [[Project Log]]

## Current known issues

### Hotel booking cleanup still needs human confirmation

- Status: resolved as of 2026-08-02
- Detail: the dashboard now treats Boylston and Hotel Vance, a Tribute Portfolio Hotel, as the active hotel truth (confirmed accommodations total `$917.42`). Courtyard by Marriott Portland City Center was the stale booking and has been fully removed from trip-data.js, app.js, index.html, logistics.html, and the memory notes.

### November 2026 hours and a couple of unverified transit times still need closer review

- Status: open
- Detail: (1) the exact POINT NorthWest return time from Cannon Beach on Day 6 is still a placeholder (4:35 PM depart) pending confirmation from oregon-point.com or 1-800-872-7245, (2) the exact Columbia Gorge Express November schedule and fare for Day 8 needs verification at ridecatbus.org/columbia-gorge-express, (3) Asiana's OZ271/272 schedule notice lists Mon/Tue/Wed/Fri/Sat rather than the booked Sunday Nov 1 arrival date -- reconfirm directly with Asiana. The Seattle Kraken watch item is retired; Kraken tickets were removed from the plan on 2026-08-02 and should not be reintroduced. "Sea'd In Capitol Hill" is resolved -- the venue was deleted from the itinerary on 2026-08-06, not just flagged.

### Local calendar sync script does not touch the live Google Calendar

- Status: known limitation, not a bug to fix unless requested
- Detail: `npm run sync:calendar` (`scripts/sync-calendar-exports.js`) only regenerates local `data/google-calendar-events-nov1-9-2026.json`/`.csv`. It has no code path that calls the Google Calendar API. If `trip-data.js` changes after the live "Seattle & Portland 2026" calendar was last resynced, the live calendar will silently drift out of date. Fix by hand via the Google Calendar MCP tools: delete the stale date-range events and recreate from the regenerated local export, scoped to `calendarId: b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com` with `notificationLevel: "NONE"` -- never the personal calendar. Fully resynced as of 2026-08-06 (session 39).

### Homepage calendar links still prefer day-level fallback when no exact event URL is stored

- Status: open
- Detail: if a stop has no exact `calendarUrl`, the homepage uses a Google Calendar day view link rather than the specific event view. The route and content still match, but the deep-linking can be tightened later.

### Agent-maintained docs still depend on meaningful task boundaries

- Status: open
- Detail: the system can keep notes cleaner, but it still depends on Codex or Claude following the post-task maintenance rules after real work
