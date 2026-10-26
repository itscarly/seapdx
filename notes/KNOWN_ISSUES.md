# Known Issues

Related: [[TASKS]] · [[CHANGELOG]] · [[LEARNINGS]] · [[Project Log]]

## Current known issues

### Closed GitHub PR retains an old internal ref

- Status: external removal required
- Detail: public branch histories were rewritten to remove booking identifiers, manage links, and the ticket receipt. GitHub’s closed PR #51 still points at its old head via a GitHub-managed `refs/pull/51/head`, which cannot be updated by a normal branch push. Ask GitHub Support to purge the closed-PR ref/cache if complete removal is needed; forks and external caches are outside this repository’s control.

### Two Day 2 stops have no freely-licensed image

- Status: known limitation, not a bug to fix unless requested
- Detail: Totem Smokehouse and the Pike Place Market "swings" (Park Promenade / Overlook Walk) have no freely-licensed photo available on Wikimedia Commons, the official Pike Place Market vendor directory, or elsewhere confirmed via Google Images (2026-08-15, session 49) -- every result found was a copyrighted Instagram/Facebook/Yelp photo, which was deliberately not downloaded or rehosted into this public repo. Both stops currently use the generic `pike-place-market.jpg` fallback in `data/trip-data.js`. Revisit if a freely-licensed photo of either ever surfaces, or if the user takes their own photo on the trip and wants it added afterward.

### Local dev server was silently down despite a memory note claiming it was verified

- Status: resolved 2026-08-09 (session 42)
- Detail: `dev-server-daemon.sh` called `npm run serve`, which fails under launchd's minimal PATH (`npm: command not found`) — the daemon crash-looped and never held port 4173. A second unrelated LaunchAgent (`com.kicker.codexproject.localhost`) filled the gap by serving the wrong local folder whenever the port came free, so requests intermittently 404'd. Fixed by having the daemon call `python3 -m http.server` directly and disabling the rogue watchdog. If the site 404s on `dashboards/html/index.html` or `data/trip-data.js` again, check `lsof -nP -iTCP:4173 -sTCP:LISTEN` for which process actually owns the port before assuming the daemon is fine.

### Hotel costs and privacy

- Status: hotel exclusion from the trip target validated locally 2026-10-26
- Detail: the dashboard keeps `$1,074.96` in the separate confirmed hotel reference, while its `$2,254.04` trip target excludes hotels and paid airfare. Reservation identifiers, manage links, ticket identifiers, and the airline receipt attachment are removed from the current public source. Calendar sharing remains free/busy only; authenticated calendar details remain private.

### November 2026 hours and one unverified transit time still need closer review

- Status: open (narrowed 2026-08-07)
- Detail: Asiana e-ticket issued 2026-09-12 reconfirms the Nov 1 OZ702 MNL-ICN plus Korean Air KE047 ICN-SEA routing; the old Sunday OZ272 schedule warning and request to reconfirm KE047 are closed. Reselect the KE047 seat through Korean Air; no seat assignment is confirmed. Current ticket number is kept in the ignored local-only `.codex/private-arrival-record.md`, not the public site source. The Seattle Kraken watch item is retired; Kraken tickets were removed from the plan on 2026-08-02 and should not be reintroduced. "Sea'd In Capitol Hill" is resolved -- the venue was deleted from the itinerary on 2026-08-06, not just flagged. The POINT NorthWest Cannon Beach round-trip bus time (Day 6) is now resolved -- confirmed 8:28 AM depart PDX / 11:46 AM arrive Astoria, 5:55 PM depart Astoria / 9:00 PM arrive PDX, source: user's CSV/screenshot. The Columbia Gorge Express / Multnomah Falls watch item is retired entirely -- Multnomah Falls was removed from the itinerary on 2026-08-07 (Day 8 is now a tattoo-rest day), so there is no longer a Gorge Express schedule to verify.

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

## October22 itinerary verification gaps

- Nov8 Sasquatch retained by user:10:30AM conflicts withpublished8:30AM/2:30PM; meetingpointTroutdale450NW257thWay#352; downtownconnection/fareunpriced andexcluded; rain/spraypossible.
- NovelOregon233NWEverett: correctaccountnovel_pdx; Maine menu removed. Marchreport7PMopening conflicts withretained5PMstop; exacthours/menuunconfirmed.
- CannonBeach: retainedticket usesAstoria11:46arrival/17:55return; exactCannonBeachstop/connectionunresolved.
- Argosy final price is $63.28 with no separate boarding allowance; the card charge was pending on the supplied statement. Underground3:30slot/finalprice andSpaceBasefreeentry/Novemberhoursunconfirmed.
- Untouched foodbudgets/marketfundsremainallinallowances; do notclaimfreshitemizedmenuverification.

- October 22 calendar audit: 16 personal invitation copies traced to self-attendance on trip organizer records; explicitly omit self-attendance on future creates. Nine sleep holds now exist. Nov 9 Central/Pacific conversion corrected. Corpus Christi airport exit/transfer/lodging after the 23:58 Central arrival remains unconfirmed; planned sleep starts at 00:30 Central, and must move later if recovery takes longer while retaining eight hours.
