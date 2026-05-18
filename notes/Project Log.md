# Project Log

This is the running log for project changes.

## 2026-05-17

### Global cleanup and handoff defaults tightened

- Tightened the shared Codex and Claude defaults so meaningful work now explicitly includes a post-work cleanup pass, stale-line removal, root-cause capture, prevention-rule capture, and a short next-session handoff note.
- Removed the older contradiction in the global Claude file that treated project note upkeep as something to skip unless the user asked, while still keeping long-term memory writes gated behind explicit user request.
- Propagated the same cleanup and handoff rules into the shared Claude project base, both reusable starter trees, both example project trees, the local global Codex defaults, and the active `uigen` Claude file so future work inherits the same behavior.
- Strengthened this project's own `AGENTS.md`, `CLAUDE.md`, and `notes/MAINTENANCE.md` so the local repo matches the global rule set.
- Rewrote `docs/SETUP_SHARED_CODEX_CLAUDE_OBSIDIAN.md` so another machine now gets the stronger cleanup, stale-line removal, root-cause capture, prevention-rule capture, and next-session handoff defaults instead of the older lighter version.

Files touched:

- `/Users/kicker/Projects/Codex/AGENTS.md`
- `/Users/kicker/.claude/CLAUDE.md`
- `/Users/kicker/Projects/Claude/Projects/AGENTS.md`
- `/Users/kicker/Projects/Claude/Projects/CLAUDE.md`
- `/Users/kicker/Projects/Project Starter/AGENTS.md`
- `/Users/kicker/Projects/Project Starter/CLAUDE.md`
- `/Users/kicker/Projects/Example Project/AGENTS.md`
- `/Users/kicker/Projects/Example Project/CLAUDE.md`
- `/Users/kicker/Projects/Codex/Project Starter/AGENTS.md`
- `/Users/kicker/Projects/Codex/Project Starter/CLAUDE.md`
- `/Users/kicker/Projects/Codex/Example Project/AGENTS.md`
- `/Users/kicker/Projects/Codex/Example Project/CLAUDE.md`
- `/Users/kicker/Projects/uigen/CLAUDE.md`
- `AGENTS.md`
- `CLAUDE.md`
- `notes/MAINTENANCE.md`
- `docs/SETUP_SHARED_CODEX_CLAUDE_OBSIDIAN.md`
- `notes/Project Log.md`

Follow-up:

- App-level products still cannot be forced from files alone to literally auto-switch modes every turn, but the instruction-level default is now much stricter and more consistent.

### Exact-itinerary cleanup and shared calendar rebuild

- Reworked the active Seattle and Portland itinerary so the main plan now uses exact named places instead of vague active `or` blocks.
- Moved `Glo's` from the Seattle-to-Portland train morning onto `Seattle Day 2` breakfast, and moved the `Walgreens` errand onto `Seattle Day 1` so the transfer day is no longer carrying unrealistic breakfast or pharmacy clutter.
- Tightened the Seattle downtown day with a later exact Pike Place sequence, split waterfront and sculpture-park time more cleanly, and kept `Biang Biang`, `Salt & Straw`, and `Menya Musashi` as exact dinner answers instead of generic noodle placeholders.
- Reworked the Portland side so the active plan now uses exact downtown or neighborhood choices: `Stumptown Downtown`, `Screen Door Pearl District`, `Deadstock Coffee`, `Smith Teamaker`, `Movie Madness`, `Belmont Station`, `Heart Coffee Burnside`, `Mississippi Records`, `Portland Museum of Modern Art`, `Cubo de Cuba`, and `Hana Sushi and Izakaya Pearl`.
- Split the Washington Park garden morning so the source itinerary now shows the park/transit approach separately from the actual `Portland Japanese Garden` visit.
- Added the explicit `Portland Union Station -> Hotel Vance` arrival leg in the source-of-truth itinerary.
- Hardened the maintenance rules so future edits do not reintroduce vague active schedule blocks, missing menu/ticket links, or drifting calendar colors.
- Validation passed after the cleanup. The current activity model now validates at projected `$820`, target `$880`, ceiling `$920`, with `$60` remaining under target.

Files touched:

- `data/trip-data.js`
- `notes/MAINTENANCE.md`
- `notes/Project Log.md`

Follow-up:

- Keep optional blocks visible in the calendar, but leave them transparent and clearly labeled so they help fill dead time without pretending to be committed anchors.

### Daily pre-trip price watch refresh

- Rechecked current transit fares, cafe hours, breakfast windows, and a few nightlife assumptions against current official or primary public sources for the Seattle and Portland itinerary.
- Updated the Bainbridge walk-on ferry assumption to reflect the current `$11.35` fare plus the `3%` card surcharge that started on March 1, 2026, which pushed the modeled ferry stop from `$11` to `$12`.
- Updated Tailwind Cafe hours to the current Tue-Sat / Sun schedule, replaced the older vague Saint John's happy-hour note with the currently posted drink pricing and service windows, and updated Rock Box with current published karaoke happy-hour pricing and operating hours.
- Tightened Seattle and Portland coffee-and-breakfast assumptions with current Victrola, Glo's, Hotel Vance, Stumptown, and Coava hours or bean-price ranges.
- Net budget impact from the material price-watch changes in this pass: projected activity total moved from `$850` to `$854`, still below the `$880` target and `$920` ceiling.

Files touched:

- `data/trip-data.js`
- `notes/Project Log.md`

Follow-up:

- Starbucks city mug pricing is still carried as a conservative mid-teens souvenir assumption because an exact current Seattle/Portland city-mug shelf price was not surfaced from an official Starbucks product page during this pass.
- Recheck November-specific business hours again closer to travel, especially any Sunday/Monday edge cases and anything currently relying on Instagram or a menu PDF.

## 2026-05-16

### Long-chat handoff and no-screenshot defaults added everywhere

- Updated the global Codex and Claude instruction files so both tools now prefer splitting long chats into a fresh new chat with a short handoff summary instead of dragging stale context forward.
- Added a shared no-screenshot-by-default rule across Codex, Claude, this project, and the reusable starter and example templates.
- Added a text-first fallback pattern for visual instructions so file paths, exact text, and concise descriptions are preferred before screenshots.
- Updated the project maintenance and learnings notes so Obsidian reflects the same rule set.
- Rewrote the reusable machine-to-machine setup guide so another Mac gets the same long-chat and no-screenshot defaults.

Files touched:

- `/Users/kicker/Projects/Codex/AGENTS.md`
- `/Users/kicker/.claude/CLAUDE.md`
- `/Users/kicker/Projects/Claude/Projects/AGENTS.md`
- `/Users/kicker/Projects/Claude/Projects/CLAUDE.md`
- `/Users/kicker/Projects/uigen/CLAUDE.md`
- `/Users/kicker/Projects/Project Starter/AGENTS.md`
- `/Users/kicker/Projects/Project Starter/CLAUDE.md`
- `/Users/kicker/Projects/Example Project/AGENTS.md`
- `/Users/kicker/Projects/Example Project/CLAUDE.md`
- `/Users/kicker/Projects/Codex/Project Starter/AGENTS.md`
- `/Users/kicker/Projects/Codex/Project Starter/CLAUDE.md`
- `/Users/kicker/Projects/Codex/Example Project/AGENTS.md`
- `/Users/kicker/Projects/Codex/Example Project/CLAUDE.md`
- `AGENTS.md`
- `CLAUDE.md`
- `notes/MAINTENANCE.md`
- `notes/LEARNINGS.md`
- `docs/SETUP_SHARED_CODEX_CLAUDE_OBSIDIAN.md`
- `notes/Project Log.md`

Follow-up:

- This is the strongest instruction-level default available, but neither Codex nor Claude can be forced by file rules to auto-open a new chat or enforce a product-level screenshot ban on their own.

### Reusable machine-to-machine setup guide added

- Added a single reusable setup guide that explains how to recreate the shared Codex, Claude Code, and Obsidian system on another Mac.
- Included the global instruction examples, project folder layout, hook pattern, note audit script, and Obsidian usage rules in one place.

Files touched:

- `docs/SETUP_SHARED_CODEX_CLAUDE_OBSIDIAN.md`
- `notes/Project Log.md`

Follow-up:

- If you want this guide to become your official starter reference, the next step would be to also keep a copy in your global `Projects/Codex` or `Projects/Claude` area.

### Plan-first and token-discipline defaults tightened

- Updated the global Codex and Claude instruction files so they now prefer compressed, high-signal communication by default.
- Added a stronger shared default for caveman-style brevity in internal reasoning and short status updates, while keeping final user-facing answers readable.
- Added a stronger plan-first rule so both tools should behave like they are in planning mode for non-trivial work even when the app itself is not literally switched into a formal Plan mode.
- Mirrored the same defaults into this project's `AGENTS.md` and `CLAUDE.md` so the behavior stays consistent inside `codexproject`.
- Propagated the same shared-memory, post-task maintenance, and token-discipline defaults into the reusable starter and example project folders under `/Users/kicker/Projects` and `/Users/kicker/Projects/Codex`.
- Updated the shared Claude-side instruction files under `/Users/kicker/Projects/Claude/Projects` plus the active `/Users/kicker/Projects/uigen/CLAUDE.md` file so the higher-level defaults are more consistent outside this repo too.

Files touched:

- `/Users/kicker/Projects/Codex/AGENTS.md`
- `/Users/kicker/.claude/CLAUDE.md`
- `/Users/kicker/Projects/Claude/Projects/AGENTS.md`
- `/Users/kicker/Projects/Claude/Projects/CLAUDE.md`
- `/Users/kicker/Projects/uigen/CLAUDE.md`
- `/Users/kicker/Projects/Project Starter/`
- `/Users/kicker/Projects/Example Project/`
- `/Users/kicker/Projects/Codex/Project Starter/`
- `/Users/kicker/Projects/Codex/Example Project/`
- `AGENTS.md`
- `CLAUDE.md`
- `notes/LEARNINGS.md`
- `notes/Project Log.md`

Follow-up:

- This creates the strongest instruction-level default available, but true app-level mode switching still depends on the Codex or Claude product itself.

### Shared memory system for Codex, Claude, and Obsidian

- Added a standardized shared note system so Codex and Claude both update the same active project memory instead of building ad hoc note structures.
- Added the main active notes: `PROJECT_CONTEXT`, `ARCHITECTURE`, `DECISIONS`, `CHANGELOG`, `TASKS`, `LEARNINGS`, `KNOWN_ISSUES`, and `MAINTENANCE`.
- Added memory-layer folders for `active`, `archive`, and `permanent` context.
- Added `hooks/post-task.md` as the reusable post-task maintenance checklist for both agents.
- Updated both `AGENTS.md` and `CLAUDE.md` so they now require reconciliation, conservative cleanup, and confidence-based documentation changes.
- Reworked `notes/Home.md` so Obsidian opens into the standardized project map instead of only the older lightweight note set.
- Added a small `npm run audit:notes` utility so the standardized note structure can be checked quickly.

Files touched:

- `AGENTS.md`
- `CLAUDE.md`
- `package.json`
- `scripts/audit-notes.js`
- `hooks/post-task.md`
- `notes/Home.md`
- `notes/PROJECT_CONTEXT.md`
- `notes/ARCHITECTURE.md`
- `notes/DECISIONS.md`
- `notes/CHANGELOG.md`
- `notes/TASKS.md`
- `notes/LEARNINGS.md`
- `notes/KNOWN_ISSUES.md`
- `notes/MAINTENANCE.md`
- `notes/memory/active/README.md`
- `notes/memory/archive/README.md`
- `notes/memory/permanent/README.md`
- `notes/Project Overview.md`
- `notes/Workflows.md`
- `notes/Welcome.md`
- `notes/Decisions/README.md`
- `notes/Project Log.md`

Follow-up:

- If the same structure works well here, mirror the same standard into the reusable project starter folders later.

### Main Obsidian vault connection cleanup

- Reworked the main `Obsidian Vault` so it now acts as a hub instead of a separate disconnected starter vault.
- Added new hub notes for `Home`, `Memory Map`, and `Vault Workflow`.
- Linked the main vault to this project's real `notes/` folder through a vault-level `Projects/codexproject` connection.
- Linked the main vault to the global Claude and Codex instruction files so note-maintenance rules are easier to review in one place.
- Linked the reusable `Project Starter` and `Example Project` note trees into the main vault for easier reuse.
- Cleaned starter clutter and Finder junk from the main vault and tightened the Obsidian workspace so it opens into the new hub notes instead of a blank tab.

Files touched:

- `notes/Project Log.md`
- `/Users/kicker/Documents/Obsidian Vault/Home.md`
- `/Users/kicker/Documents/Obsidian Vault/Memory Map.md`
- `/Users/kicker/Documents/Obsidian Vault/Vault Workflow.md`
- `/Users/kicker/Documents/Obsidian Vault/.obsidian/core-plugins.json`
- `/Users/kicker/Documents/Obsidian Vault/.obsidian/graph.json`
- `/Users/kicker/Documents/Obsidian Vault/.obsidian/workspace.json`

Follow-up:

- If more projects become active, add them to the main vault through the same linked-folder pattern instead of copying notes into the vault.

## 2026-05-17

### Pre-trip flight and transit watch: no material changes

- Checked the current official watch sources for the booked flight status portals, SEA and PDX airport guidance, Amtrak Cascades timing, Washington State Ferries fares and alerts, Seattle Link alerts, and TriMet/PDX airport access.
- Found no material timing, fare, or disruption-risk changes that justify updating `data/trip-data.js` yet.
- The existing planning assumptions still hold: the Seattle/Bainbridge walk-on ferry budget remains aligned with the current adult fare level, TriMet adult fare/day cap is unchanged, and the existing airport buffers are still conservative relative to current airport guidance.
- Noted a few current watch items that are still too temporary to hard-code into the November itinerary today: live Link station/elevator advisories, live TriMet Red Line delays, and current PDX terminal construction wayfinding notices.
- No traveler email was sent because the watch found no material changes.

Files touched:

- `notes/Project Log.md`

Follow-up:

- Recheck live flight-status boards and local transit alerts closer to the trip window, especially within the final 72 hours before the November 1 and November 9 flights.

## 2026-05-15

### Favorites-driven budget and Portland breakfast reset

- Reworked the trip around a more realistic `20%` flexibility buffer instead of the earlier tighter draft.
- Raised the working activity target from `$800` to `$880`, with a softer practical ceiling of `$920` before airfare and hotels.
- Treated Starbucks in both cities as intentional souvenir stops for the city mug plus one coffee, not as featured coffee-program anchors.
- Priced the souvenir errands more explicitly by modeling Starbucks city mugs, one coffee with each mug stop, and small magnet-style gifts directly in the itinerary instead of hiding them in a vague shopping allowance.
- Replaced the weaker Portland breakfast logic near Hotel Vance with a practical early-morning choice between the hotel's own breakfast and Stumptown Downtown.
- Demoted older Portland filler logic such as default `Grassa` dependence and Sandy Hut-style social assumptions in favor of stronger downtown, Belmont, and Mississippi hangout zones.
- Moved the PDX departure morning earlier so the hotel-to-airport plan now targets arriving about three hours before the 1:47 PM flight.
- Added a new trip-atlas map section to the dashboard so the site now shows Seattle/Bainbridge and Portland route flow visually, including hotel anchors, route spacing, and a blunt walkable-vs-transit read for each day.
- Added `Novel Book Bar` as a strong Portland optional near Hotel Vance, using the user-shared menu to price it honestly as a better one-drink or coffee-plus-browse stop than a strict two-cocktail budget play.

Files touched:

- `data/trip-data.js`
- `dashboards/html/index.html`
- `dashboards/css/styles.css`
- `dashboards/js/app.js`
- `notes/Project Log.md`

Follow-up:

- Update the live Google Maps Favorites list next so the saved places reflect the stronger keep/cut decisions before any final public-facing polish pass.

## 2026-05-11

### Seattle and Bainbridge saved-places rework

- Reworked the Seattle default route around the shared Google Maps saved list and closer Capitol Hill/The Boylston Hotel stops.
- Replaced the old Canon-heavy arrival plan with Tailwind Cafe, Saint John's, and Poquitos as the first-night Capitol Hill cluster.
- Kept Pike Place and the waterfront as sightseeing, but moved more default food back to Capitol Hill with Victrola, Biang Biang Noodles, and Salt & Straw.
- Rebuilt Bainbridge as an early ferry, Madison Diner breakfast, Waterfront Park & City Dock, Pegasus/Commuter Comforts coffee, Island Cool, and a Capitol Hill noodle/karaoke return.
- Added saved-list alternates and skipped-place reasons for Nue, Stoup, Dave's Hot Chicken, Koko's, Dick's, Harbour Public House, Bruciato, Cups, Seasmith, Gearhouse, and Espresso Vivace SLU.
- Updated the verified date, budget category notes, happy-hour guide, coffee guide, and source list. The projected activity total is now `$763`, leaving `$37` under the `$800` target.

Files touched:

- `data/trip-data.js`
- `dashboards/html/index.html`
- `notes/Project Log.md`
- `tasks/todo.md`

Follow-up:

- Recheck November 2026 hours and exact happy-hour pricing for Saint John's, Poquitos, Nue, Stoup, Harbour Public House, and Bruciato closer to the trip.
- If the Google Maps saved list changes again, compare against the current exclusions before adding more default spend.
- Netlify production deploy is currently blocked by account credit usage exceeded; GitHub has the update, but the public site will remain stale until Netlify can deploy again.

## 2026-05-10 (Evening)

### Google Calendar integration: Seattle & Portland itinerary

- Created new Google Calendar: "Seattle & Portland 2026" (timezone: America/Los_Angeles).
- Populated calendar with all 48 events from trip-data.js: flights, hotels, activities, meals, transit.
- Includes full November 1-9, 2026 trip + February 27, 2027 return flights (Dallas/Fort Worth, Corpus Christi connections).
- Each event has location, duration, and cost noted in description where applicable.
- Used gws CLI with Google Calendar API to insert events batch-style.

Calendar ID: `b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com`

Files touched:
- Google Calendar (new "Seattle & Portland 2026" calendar)
- `notes/Project Log.md`

Follow-up:
- Calendar is now live and ready to see how the full schedule maps across the actual travel dates.
- If itinerary data changes later (new stops, time adjustments), calendar events should be updated or recreated using the same script pattern.

## 2026-05-10

### Accurate image and future-flight layout fix

- Replaced the dashboard's brittle remote photo hotlinks with local, verified image assets for Pike Place, Bainbridge ferry day, Portland, and the ICN, SEA, PDX, DFW, and CRP airport visuals.
- Corrected the Bainbridge day image so it no longer shows a San Francisco/Golden Gate scene.
- Added an image fallback state so a future missing file shows `Image unavailable` instead of broken alt text.
- Tightened the future booked flight section so the single February booking no longer leaves a large empty right-side column.

Files touched:

- `dashboards/assets/images/`
- `dashboards/css/styles.css`
- `dashboards/html/index.html`
- `dashboards/js/app.js`
- `notes/Project Log.md`

Follow-up:

- If any image feels visually off later, replace it with another verified local asset rather than using a generic remote stock URL.

## 2026-05-09

### Seattle and Portland food rework

- Reworked the trip's default meal plan to lean harder on cheaper stops instead of the earlier splurge-heavy mix.
- Added `Glo's`, `Tacos Chukis`, and `Sushi% AYCE` to the Seattle plan.
- Added `Tasty Corner PDX`, `Hana Sushi and Izakaya`, `Nate's Oatmeal Cookies`, and `Hello From Portland` to the Portland plan.
- Corrected `Great American Diner` as a West Seattle detour rather than treating it like a core-route Seattle stop.
- Removed the old default assumption that `Spinasse` and `Gado Gado` were part of the budget-first base itinerary.
- Lowered the projected trip total and changed the default tipping rule to `15%` for normal sit-down meals, while keeping `18%` for bars and `0-10%` for counter service.
- Recorded one naming assumption: `Crofflecrew` could not be verified as a distinct Seattle business, so it was not invented as a stop.
- Added PHP equivalents next to USD amounts using the May 9, 2026 USD to PHP rate plus a `1.85%` foreign transaction fee buffer.
- Changed the itinerary cards to start collapsed by default so the page opens in a tighter summary view.
- Reworked the active cocktail stops so each one now assumes two cocktails plus one lighter food order, with current menu-backed prices where they could be verified.
- Trimmed the default cocktail route back to three stronger stops so the stricter two-cocktail pricing still lands under the `$800` target instead of blowing past it.
- Moved the Portland sushi plan toward AYCE-only logic, pushed the Portland-area Sumo detour into the active trip, and demoted Hana to a non-default backup because it did not surface as AYCE.
- Added a real Bainbridge eat/drink/shop block using Cafe Hitchcock plus the BIMA Museum Store, and tightened the bean notes to actual current bag prices for Anchorhead, Coava, Heart, Stumptown, and Olympia.
- Reworked the dashboard presentation with younger editorial typography, wider desktop spacing, and multi-column itinerary sections so the trip is easier to scan without endless vertical scrolling.
- Tightened the redesign after visual review: swapped to a cleaner heading font, removed the stretched projected-spend whitespace, added a moving photo strip plus day thumbnails, and changed PHP conversion from a fixed snapshot to a live USD to PHP fetch with the 1.85% fee applied on top.
- Tightened spacing again after screenshot review by shrinking the oversized top navigation shell, reducing the hero height, and stopping the budget chart card from visually overpowering the category list.
- Rebuilt the budget dashboard after another visual review: removed the pie chart, added a compact summary strip, and turned the category breakdown into always-visible dashboard meters so the section no longer looks empty or broken.
- Expanded the budget dashboard again so it uses the full desktop width more intentionally, added separate airfare visibility that stays outside the `$800` activity budget, and restored the planning-guides heading to a left-anchored layout instead of letting it drift to the right.
- Added a real flight layer to the dashboard using the booking screenshots: November 1 arrival via Incheon, November 9 Portland return via Dallas/Fort Worth, and the later February 27 Corpus Christi to San Francisco booking as a future visible flight block.
- Replaced the old generic flight-dependent departure wording with actual airport timing guidance, including when to leave Hotel Vance for the 1:47 PM PDX departure.
- Removed the visible Unsplash source buttons from the moodboard and added airport visuals for ICN, SEA, PDX, DFW, and CRP.
- Added a separate flight-monitoring workflow, a 15-minute GitHub Actions schedule, and an email-ready alert script that can send flight-change emails once provider secrets are configured.

Files touched:

- `data/trip-data.js`
- `dashboards/css/styles.css`

## 2026-05-17

### Calendar and Claude usage cleanup

- Replaced the old `Sumo Sushi & Grill AYCE Oregon City` Portland Day 8 default with `Hana Sushi and Izakaya Pearl` so the final full Portland night stays close to Hotel Vance and no longer depends on the Oregon City detour.
- Changed the Day 8 source-of-truth itinerary in `data/trip-data.js` to match the closer Pearl sushi plan, lowered the day total accordingly, and moved the old Sumo detour into the excluded/alternate list.
- Prepared the shared trip calendar for the same Day 8 sushi swap plus more explicit route and walking/transit notes on the highest-friction Seattle and Portland days.
- Audited Claude's local setup again and confirmed there were still no cron jobs or enabled plugins causing recurring usage by themselves.
- Found the more meaningful Claude-side overhead in the desktop app preferences: scheduled-task settings, persistent session behavior, notifications, keep-awake, and remote-control defaults were still enabled in local app config.
- Switched those Claude desktop preferences off so the safer default is: open Claude only for active work, then close it fully when you are done.

Files touched:

- `data/trip-data.js`
- `notes/Project Log.md`
- `~/.claude/settings.json`
- `~/Library/Application Support/Claude/claude_desktop_config.json`
- `dashboards/html/index.html`
- `dashboards/js/app.js`
- `.github/workflows/monitor-flights.yml`
- `automation/README.md`
- `automation/flight-monitoring-workflow.md`
- `scripts/monitor-flights.js`
- `notes/Project Log.md`
- `tasks/todo.md`

Follow-up:

- Recheck live hours closer to November 2026 for Glo's, Tasty Corner, Hana Sushi, and Hello From Portland.
- If the user later confirms what `Crofflecrew` was supposed to mean, add it as a real stop instead of an assumption note.

### Calendar granularity pass

- Rebuilt the shared Seattle and Portland trip calendar into smaller per-stop blocks instead of leaving large bundled events for ferry days, coffee-and-errand loops, bookstore-plus-dinner combos, and neighborhood browse loops.
- Split Bainbridge Day 3 into individual events for the ferry-terminal transfer, boarding buffer, ferry ride, Madison Diner, waterfront, Pegasus Coffee, Island Cool, ferry return, hotel reset, evening walk, ramen dinner, optional Rock Box, and hotel return.
- Split the biggest remaining grouped Portland blocks, including Powell's plus Hello From Portland, Saturday Market plus Waterfront, Alberta plus Mississippi, and the close-in Hana Pearl final-night flow.
- Added explicit walking, transit, hotel-reset, and hotel-return blocks so the calendar now shows what happens between major stops instead of leaving unexplained blank windows.
- Recolored the updated events to reduce the old green-heavy drift: transit and walk blocks now skew blue, hotel blocks gray, food orange, coffee blue, sightseeing purple, nightlife red, and optional fillers lavender where Google Calendar accepted the standard event color IDs.

### Exact Seattle timing pass

- Corrected the Seattle-to-Portland train day to the exact Amtrak Cascades 517 example the user provided: depart Seattle King Street Station at `12:10 PM`, arrive Portland Union Station at `3:35 PM`, and arrive at King Street by `10:10 AM` because the user wants a full two-hour station buffer.
- Replaced the old inflated Amtrak placeholder in `data/trip-data.js` with the exact current example fare from the user (`$27` coach example) and rebuilt the Day 4 calendar around the earlier station-arrival rule.
- Replaced the generic Pike Place grazing blob in the itinerary data and calendar with exact Seattle stops: main arcade/fish-market pass, Daily Dozen, Mee Sum, Piroshky Piroshky, Beecher's, MarketSpice, and Rachel's Ginger Beer, each with its own time block and cost note.
- Replaced the vague Bainbridge `ramen dinner` wording with the exact restaurant `Menya Musashi Capitol Hill` plus real current menu references and bowl pricing in both the data and the shared calendar.

Files touched:

- `data/trip-data.js`
- `notes/Project Log.md`

Follow-up:

- If the user later wants Pike Place even tighter, split the remaining internal market walks into even more explicit one-to-three-minute movement buffers, but the current pass already removes the main generic blob problem.

## 2026-05-06

### Obsidian notes setup

- Created the `notes/` vault for this project.
- Added `[[Home]]` as the note index for the vault.
- Set a project rule so future Codex work should also update these notes after meaningful changes.
- Purpose: keep a plain-language record of work without needing a reminder each time.

Files touched:

- `notes/Welcome.md`
- `notes/Home.md`
- `notes/Project Log.md`
- `AGENTS.md`
- `tasks/todo.md`

Follow-up:

- Add new feature-specific notes when the project grows beyond the current overview notes.
- Added folder-based note structure for features, sessions, ideas, and decisions.
- Added example connected notes so the graph view has a clearer starting shape.
## 2026-05-16

- Reorganized the repository so the root focuses on source files rather than reference clutter.
- Moved rule and checklist documents into `docs/rules/`.
- Moved large visual review images into `docs/review-assets/`.
- Archived the legacy root `TASKS.md` as `docs/archive/TASKS-legacy.md` and kept `tasks/todo.md` as the active task log.
- Stopped tracking `.obsidian/workspace.json` because it is local editor state, not shared project content.

## 2026-05-17

### AGENTS workflow refresh

- Updated `AGENTS.md` with the verified localhost self-healing workflow from `docs/local-development.md`.
- Recorded the exact repo-grounded commands for enabling and checking the local preview watchdog: `./scripts/install-localhost-launchagent.sh`, `./scripts/ensure-localhost.sh`, and `tail -n 20 logs/localhost-health.log`.
- Kept the edit limited to the repo workflow section so the guidance stays aligned with current usage.

Files touched:

- `AGENTS.md`
- `notes/Project Log.md`

Follow-up:

- If the localhost watchdog commands or log paths change later, update this note and the matching `AGENTS.md` bullet together.

### Travel-week flight and transit watch

- Reviewed the live watch points for the Seattle and Portland trip week: airline status pages, SEA and PDX airport timing guidance, Amtrak Cascades timing assumptions, Washington State Ferries fares and rider guidance, Sound Transit service alerts, and TriMet fare/service pages.
- Corrected one material drift in `data/trip-data.js`: the Seattle-to-Bainbridge adult walk-on ferry fare now matches WSDOT's current `$11.35` published fare instead of the older `$11.05` wording.
- Re-verified that the current airport timing assumptions are still conservative enough: SEA continues to recommend two hours before domestic boarding and three hours before international boarding, and the Portland hotel-to-PDX plan still preserves roughly a three-hour predeparture buffer.
- Re-verified that TriMet still prices adult fare at `$2.80` with a `$5.60` daily cap, so no Portland local-transit budget change was needed.
- Re-verified that the current Seattle-to-Portland Amtrak Cascades timetable still supports keeping the train block as a same-day intercity transfer with day-of service-notice checks rather than a schedule rewrite.
- Re-verified that current Sound Transit and ferry guidance did not require a Seattle airport-transfer rewrite, though day-of alert checks still matter because station/elevator maintenance and marine delays can change the easiest path.

Files touched:

- `data/trip-data.js`
- `notes/Project Log.md`

Follow-up:

- Keep the existing day-of checks for the AA and Asiana flight-status pages because live flight-status detail is still closer-to-departure rather than months ahead.
- Keep the existing Portland airport buffer because PDX still warns that some terminal walks are longer during construction even when checkpoint waits are reasonable.
