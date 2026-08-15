# Maintenance Workflow

## Goal

This project uses a shared maintenance workflow for Codex, Claude, and Obsidian.

The goal is to keep active notes accurate without turning the notes folder into an append-only dump.

## After every meaningful completed step

1. Check what changed in the project.
2. Identify which active notes are affected.
3. Update only the relevant standardized notes.
4. Rewrite stale guidance instead of stacking duplicates.
5. Archive older context when it still matters historically.
6. Add reusable patterns to [[LEARNINGS]] only if they will help again.
7. Update [[Project Log]] with the dated session summary.
8. Check [[TASKS]] and [[KNOWN_ISSUES]] for anything now resolved or newly opened.
9. Verify [[Decisions]] still reflects any choices made this session.
10. Re-check for conflicts between active notes.
11. Add a short next-session handoff note so the next run does not depend on raw chat history.
12. Remove monitor-era or deleted-workflow references if the current repo no longer supports them.
13. If the user accepted site or data changes, commit and push them before calling the work complete so local and GitHub stay identical.

## Confidence rules

- Update architecture notes only when code or runtime structure is verified to have changed.
- Update decision notes only when the choice is real and durable.
- If confidence is low, add a short follow-up note instead of rewriting active guidance aggressively.

## Itinerary precision rules

- Do not leave generic `or` blocks in the active trip schedule. Put flexibility in optional blocks or excluded alternates instead.
- Use one exact active stop per event. Do not hide multiple real places inside one active itinerary item when they should be separate steps.
- Every active food or drink stop should carry a direct menu or official venue link.
- Every paid attraction should carry a direct ticket or admission link.
- Every day should show explicit hotel or accommodation departure/return behavior when it matters to the schedule.
- If a UI filter has no live data behind it, remove or rename the filter instead of leaving an empty state as the default experience.
- Calendar colors must stay consistent:
  - blue: walking, transit, ferry, train, station, airport transfer
  - gray: hotel, check-in, check-out, reset, wait buffer
  - orange: meals and snack food
  - teal: coffee, tea, ginger beer, dessert drinks
  - purple: sightseeing, museums, gardens, bookstores, markets
  - red: nightlife, cocktails, karaoke, live music
  - gold: shopping, souvenirs, errands
  - lavender: optional-only blocks

## Day rebuild playbook (Day 1 -> Days 2-9)

Day 1 (session 47, 2026-08-15) established a richer per-stop schema and UI. Apply the same pattern when rebuilding any other day so all 9 days stay consistent.

**Schema fields to add per stop, as applicable:**
- `image: "<filename>"` -- save the file into `dashboards/assets/images/` (never repo-root `assets/images/` -- `app.js`'s `IMAGE_BASE` resolves relative to `dashboards/html/index.html`). Crop/select for what the stop actually is (food should look like food, a park photo should show the park) -- don't just grab the first search result and trust the default `object-fit: cover` crop.
- `mapFrom` / `mapTo: "<address>"` on any stop that already has a `route` -- renders an inline point-to-point Google Maps embed instead of a plain external link.
- `safetyScore: <0-100>` + `safetyNote: "<emoji> <score>% · <short label>"` -- 🟢 80-100 / 🟡 50-79 / 🔴 <50. Every score must come from real research (SPD/Downtown Seattle Association reporting, city parks safety initiatives, etc.), never invented. State the gap in the long-form `detailText` note if no solid source exists for a specific claim rather than guessing.

**Steps per day:**
1. Research real safety data for that day's neighborhoods/times before writing any safety fields (WebSearch: `<neighborhood> Seattle/Portland crime statistics <year>`, plus the city's own parks/safety initiative pages).
2. Rewrite the day's `segments` in `data/trip-data.js` with the new fields, recompute `dayTotal`, verify it against the item-cost sum.
3. Add/verify `mapFrom`/`mapTo` for every stop with a `route`.
4. Source and add representative images for stops that would benefit from one (food stops, scenic/activity stops) -- save to `dashboards/assets/images/`, reference by filename only.
5. Run `npm run validate` (syntax, budget audit, calendar-export sync).
6. Verify live in-browser -- open the actual stop card, confirm the image loads and looks representative, confirm the safety badge and route map render -- at both desktop and a mobile viewport (390x844). Don't stop at an HTTP 200 check.
7. Resync the live Google Calendar ("Seattle & Portland 2026") for the changed day's events via the Google Calendar MCP tools -- diff first, get approval, then replace.
8. Commit, then verify the commit actually contains what you intended (`git show --stat HEAD`) before pushing -- a bad `git add` pathspec can silently drop trailing arguments.
9. Push, then verify the live GitHub Pages deploy directly (`gh run list`, `curl` the live URL) rather than trusting a browser tab that may be showing a cached copy.

## Memory layers

- `notes/memory/active/`: current working memory and active guidance
- `notes/memory/archive/`: outdated but still useful historical context
- `notes/memory/permanent/`: stable long-term patterns or rules

## Obsidian rule

Obsidian should show the clean active notes first.

Archive material should stay available, but it should not crowd the top-level daily workflow.

When a thread gets too long or noisy, add a short handoff summary to the active notes before moving to a fresh chat.

Prefer text-first visual intake:

- file path or URL
- exact text on screen
- what looks wrong
- what was expected instead

Do not rely on screenshots unless the issue is genuinely visual and cannot be described clearly another way.

## Root cause and prevention rule

When a change fixes drift, confusion, stale instructions, or a repeated mistake:

- state the root cause clearly
- state what was changed
- add the prevention rule that should stop the same mistake next run

## Current workflow baseline

- `data/trip-data.js` is the canonical itinerary and cost source.
- `npm run validate` is the default regression check.
- `npm run sync:calendar` rebuilds export artifacts.
- GitHub Pages is the canonical public host.
- The active trip automation is the monthly baseline watch for itinerary prices, menus, schedules, and day-trip transit fares (Kraken hockey was removed from the plan on 2026-08-02 and is no longer part of the watch).
- `notes/` should stay plain-file friendly; do not track `.obsidian` working-state files in the public repo.
