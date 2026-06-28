# Learnings

## Reusable patterns

### When adding a new hotel entry, always fill ALL display fields immediately

- Never leave `reviewScore`, `transitScore`, `transitNote`, `safetyNote`, `safetySource`, or `reviewUrl` as null.
- The dashboard renders all of these — null produces blank columns that the user will have to ask to fix.
- If the booking confirmation doesn't include these, look them up from the address (Walk Score, Google Maps, brand reviews). Do not defer.

### When editing hotel data, audit the full entry for completeness before committing

- Check every field the dashboard renders: rating, transit score, transit note, nearest station, area/landmark, safety note, safety source, elevator, breakfast, cancellation deadline.
- A hotel that is already booked deserves the same data quality as a watchlist candidate.

### The dashboard only renders what the code explicitly reads — check the JS before structuring JSON

- `hotels.html` reads `currentReservation`, `secondReservation`, and `watchlist` from each city object.
- Fields stored under any other key (e.g. a custom archive key) are invisible to the dashboard.
- When adding new data structures, update the renderer at the same time, not after the user reports missing data.

### Always sync BOTH hotel JSON files — source AND report

- `hotels.html` reads `data/hotel-monitor-source.json`. The report JSON is for metadata and monitoring history.
- Every hotel data change must land in both files before committing.

### Null fields on a booked hotel are a bug, not a placeholder

- A booked hotel is a confirmed entry. It should have complete data from the moment it is added.
- Do not ship a commit with null display fields on any hotel row, booked or watchlist.

### Public deploys only change after a push

- The live site and any scheduled monitor outputs only reflect what is committed and pushed.
- Root cause of the 2026-05-23 deploy confusion: large local tracker changes sat uncommitted while the public copy still served the older files.
- Prevention: start UI or monitor follow-up sessions with `git status`. If the goal is to verify the public result, make sure the relevant files are actually committed and pushed first.

### When the live site looks wrong, diff live vs local before assuming code is broken

- Use `curl -s <live-url> | diff - <local-file>` to instantly see what the live site is actually serving.
- This takes 5 seconds and immediately reveals whether the problem is a deployment gap (unpushed changes) vs a real code bug.

### Discovery fares are useful, but they are never enough to recommend booking

- For this airfare watch, Google Flights, Skyscanner, and KAYAK are discovery inputs only.
- `directAirlineVerified` must stay `false` unless the airline-owned checkout itself confirms the fare, checked-bag treatment, and protected routing.
- If the airline pages you can access only expose route pages, monthly fare cards, or partial booking widgets, record the gap honestly instead of forcing a fake `BOOK` recommendation.

### Direct booking automation can misread room-night rates as stay totals

- The 2026-05-24 TravelClick scrape picked up `$242.73`, but manual checkout verification showed the real Paramount total was `$731.60` with subtotal `$620.00` and taxes `$111.60`.
- For booking engines with multi-step checkout, trust the final checkout total over the first visible room price.

### A failed live refresh should leave an explicit blocker, not a vague missing-price note

- Boylston stayed Cloudflare-blocked, Hilton Seattle's tracked direct URL returned a Hilton 404, and PAL's award-tax flow loaded the generic home page behind cookie/interaction gates.
- When this happens, keep the last known verified number if one exists, record the blocker in `priceVerification` or `taxHistory`, and remove stale "needs-check" wording.

### Checkout engines need stricter acceptance rules than brand blocks do

- The first layered dry run still produced fake "captures" for Boylston, Hotel Max, and Paramount because listing-page text looked like totals.
- Fix: TravelClick, SynXis, and Sonder should only count as success when the monitor reaches a checkout-grade subtotal/tax/total view. If they only expose listing text, downgrade to `manual-review-needed` and preserve the last trustworthy total.

### Persistent browser profiles are useful, but honesty still matters more than coverage

- Hilton, Hyatt, IHG, and several Marriott flows still returned anti-bot or stale-page states even with the persistent Playwright profile path in place.
- The right behavior is explicit `blocked-direct` or `stale-direct-url`, not retry loops or invented prices.

### Hotel benchmark is a confirmed booking, not a watch candidate

- Boylston (RES ID [redacted], $384.13 total) is locked in. Monitor only hunts for a refundable sub-$400 option near King Street Amtrak or Link Light Rail. Do not reopen the benchmark status unless the reservation is cancelled.

### Static-site verification beats guesswork

- When localhost looks broken in this project, verify the local server and direct URLs before assuming app code is broken.

### Notes should be reconciled, not only appended

- Session logs can grow forever, but active notes should be rewritten into a clean current state.

### Shared agent rules need one project source

- Codex and Claude stay aligned better when both point at the same project structure and maintenance workflow.

### Keep documentation tied to verified behavior

- Workflow and architecture notes should come from the actual repo state, not memory alone.

### Compressed output needs a readability boundary

- Token saving is useful, but user-facing answers should still stay readable for a non-technical person instead of turning every response into shorthand.

### Long chats should be split with handoff notes

- When a thread gets too long, the clean move is to write a short handoff summary and continue in a new chat instead of dragging stale context forward.

### Public itinerary pages work better when utility content is split out early

- The redesign was cleaner once the homepage stopped trying to carry public itinerary content, source references, automation links, future bookings, and monitoring detail at equal weight.
- For this project, separate the reader-facing trip story from the operational maintenance surface instead of solving crowding only with CSS compression.

### Screenshots should be the exception, not the default

- For most work, text descriptions, file paths, logs, and direct page details are cheaper and clearer than screenshots.

### Calendar remediation is not done when only the titles look clean

- The 2026-06-27 Portland cleanup failed the user's acceptance check because some event titles were human-readable but the live Google Calendar popup bodies still used thin metadata or stale headline wording.
- When the user gives a screenshot of the desired event popup, match the popup structure itself:
  - `Purpose`
  - `Estimated cost`
  - direct links
  - `What to order` or `What to do`
  - `Skip`
  - `Continuity`
- Also verify the day-level header rows and any route/location labels, not only the stop titles.

## How to use this note

Add only patterns that should help future sessions.

Do not dump one-off scratch observations here.

## Related notes

- [[PROJECT_CONTEXT]]
- [[KNOWN_ISSUES]]
- [[CHANGELOG]]
- [[Project Log]]

## 2026-05-28 — Memory hub implementation learnings

- For cross-tool memory continuity, reference-first indexing is safer than file copying; it avoids drift and accidental data loss.
- Idempotency for generated notes requires source-derived timestamps (for example latest source mtime), not run-time timestamps.
- A startup pointer note should be short and procedural; detailed context belongs in dated digests and source indexes.
- Secret-safe note generation should redact token-like strings before writing any summary output.

## 2026-05-28 — Freshness needs a visible queue

- Metadata fields only help when surfaced; a stale-notes dashboard makes aging context obvious before it causes drift.
