# Project Log

This is the running log for project changes.

## 2026-05-10

### AGENTS workflow refresh

- Added a small repo-specific workflow section to `AGENTS.md`.
- Recorded the current command pattern for this project: check prerequisites first, use `npm run serve` for the local static server, and use `npm run validate` after data or dashboard script edits.
- Added the production Netlify root URL so future live checks use the right public site instead of older snapshot links.
- Captured one editor-specific reminder: changes to the itinerary editor should be checked for browser-saved state and the export buttons, not only page layout.

Files touched:

- `AGENTS.md`
- `notes/Project Log.md`

Follow-up:

- If the deployment URL or verification commands change later, update this note and the matching `AGENTS.md` bullets together.

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
