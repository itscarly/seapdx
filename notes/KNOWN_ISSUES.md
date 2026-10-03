# Known Issues

Related: [[TASKS]] · [[CHANGELOG]] · [[LEARNINGS]] · [[Project Log]]

## Current known issues

### Two Day 2 stops have no freely-licensed image

- Status: known limitation, not a bug to fix unless requested
- Detail: Totem Smokehouse and the Pike Place Market "swings" (Park Promenade / Overlook Walk) have no freely-licensed photo available on Wikimedia Commons, the official Pike Place Market vendor directory, or elsewhere confirmed via Google Images (2026-08-15, session 49) -- every result found was a copyrighted Instagram/Facebook/Yelp photo, which was deliberately not downloaded or rehosted into this public repo. Both stops currently use the generic `pike-place-market.jpg` fallback in `data/trip-data.js`. Revisit if a freely-licensed photo of either ever surfaces, or if the user takes their own photo on the trip and wants it added afterward.

### Local dev server was silently down despite a memory note claiming it was verified

- Status: resolved 2026-08-09 (session 42)
- Detail: `dev-server-daemon.sh` called `npm run serve`, which fails under launchd's minimal PATH (`npm: command not found`) — the daemon crash-looped and never held port 4173. A second unrelated LaunchAgent (`com.kicker.codexproject.localhost`) filled the gap by serving the wrong local folder whenever the port came free, so requests intermittently 404'd. Fixed by having the daemon call `python3 -m http.server` directly and disabling the rogue watchdog. If the site 404s on `dashboards/html/index.html` or `data/trip-data.js` again, check `lsof -nP -iTCP:4173 -sTCP:LISTEN` for which process actually owns the port before assuming the daemon is fine.

### Hotel booking cleanup still needs human confirmation

- Status: resolved as of 2026-08-02
- Detail: the dashboard now treats Boylston and Hotel Vance, a Tribute Portfolio Hotel, as the active hotel truth (confirmed accommodations total `$917.42`). Courtyard by Marriott Portland City Center was the stale booking and has been fully removed from trip-data.js, app.js, index.html, logistics.html, and the memory notes.

### November 2026 hours and one unverified transit time still need closer review

- Status: open (narrowed 2026-08-07)
- Detail: Asiana warning resolved 2026-09-26. The confirmed [redacted] booking now uses OZ702 MNL-ICN plus Korean Air KE047 ICN-SEA on Sunday, Nov 1; it no longer relies on Sunday OZ272. Asiana's current public route notice still lists OZ271/272 as Mon/Tue/Wed/Fri/Sat through Oct 12 and cannot verify private booking records, so recheck [redacted] in Manage My Trip and confirm KE047 before departure. The Seattle Kraken watch item is retired; Kraken tickets were removed from the plan on 2026-08-02 and should not be reintroduced. "Sea'd In Capitol Hill" is resolved -- the venue was deleted from the itinerary on 2026-08-06, not just flagged. The POINT NorthWest Cannon Beach round-trip bus time (Day 6) is now resolved -- confirmed 8:28 AM depart PDX / 11:46 AM arrive Astoria, 5:55 PM depart Astoria / 9:00 PM arrive PDX, source: user's CSV/screenshot. The Columbia Gorge Express / Multnomah Falls watch item is retired entirely -- Multnomah Falls was removed from the itinerary on 2026-08-07 (Day 8 is now a tattoo-rest day), so there is no longer a Gorge Express schedule to verify.

### Local calendar sync script does not touch the live Google Calendar

- Status: known limitation, not a bug to fix unless requested
- Detail: `npm run sync:calendar` (`scripts/sync-calendar-exports.js`) only regenerates local `data/google-calendar-events-nov1-9-2026.json`/`.csv`. It has no code path that calls the Google Calendar API. If `trip-data.js` changes after the live "Seattle & Portland 2026" calendar was last resynced, the live calendar will silently drift out of date. Fix by hand via the Google Calendar MCP tools: delete the stale date-range events and recreate from the regenerated local export, scoped to `calendarId: b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com` with `notificationLevel: "NONE"` -- never the personal calendar. Fully resynced as of 2026-08-06 (session 39); future-dated flight legs were later revised, with PAL PR133 now Mar 1-3, 2027 under booking [redacted].

### Live calendar may still need the latest PAL return-flight patch

- Status: open
- Detail: the site source now reflects the attached PAL receipt: PR133 ORD-MNL, Mar 1-3, 2027, booking [redacted], ticket [redacted], paid PHP 24,281. If the live "Seattle & Portland 2026" calendar still has the older Mar 5-7 draft or older Korean Air events, patch only those future-flight events by hand.

### Homepage calendar links still prefer day-level fallback when no exact event URL is stored

- Status: open
- Detail: if a stop has no exact `calendarUrl`, the homepage uses a Google Calendar day view link rather than the specific event view. The route and content still match, but the deep-linking can be tightened later.

### Agent-maintained docs still depend on meaningful task boundaries

- Status: open
- Detail: the system can keep notes cleaner, but it still depends on Codex or Claude following the post-task maintenance rules after real work
