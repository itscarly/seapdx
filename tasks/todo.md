# Active Tasks

## Latest verified state

- [x] June 27, 2026: Seattle + Portland itinerary rebuild completed and finalized.
- [x] June 27, 2026: Dashboard cache-bust updated and deployed.
- [x] June 27, 2026: Project log updated with the final session handoff.
- [x] June 27, 2026: Git cleanup and prevention rules are in place.
- [x] June 27, 2026: Old itinerary-rebuild TODO from Claude is superseded by the final June 27 handoff.

## Current follow-up

### Homepage polish follow-up

- [x] Audit the public GitHub repo presentation, publishing docs, and repo hygiene for stale copy, missing metadata, or local-state clutter.
- [x] Rewrite the public README and deployment guide so the live URL, local workflow, validation, automation, and repo structure are easy to understand from the repo homepage.
- [x] Remove tracked or contradictory repo clutter that does not belong in the public source tree, including note-vault working-state files.
- [x] Update the GitHub About metadata so the description, website, and topics match the current published dashboard.
- [x] Audit the itinerary dashboard hero, overview, executive summary, activity budget, and day-route sections for layout and typography problems causing the cheap look.
- [x] Replace the homepage visual system with an Apple-style system font stack, calmer tokens, tighter spacing, and one disciplined card family.
- [x] Reduce repeated headline spend emphasis and restructure the executive summary formula into cleaner grouped panels.
- [x] Re-pack the activity budget and day-by-day itinerary header/cards so grids, pills, and route chips align cleanly across desktop and mobile.
- [x] Run `npm run validate`, then update notes and handoff docs with the redesign root cause and verified outcome.
- [x] Convert the homepage from a long static report into a denser app-style layout with panel switching and progressive disclosure for heavy sections.
- [x] Audit the current homepage at `http://127.0.0.1:4175/dashboards/html/index.html` against layout, typography, color, responsiveness, and accessibility basics.
- [x] Redesign the homepage shell to remove the cluttered "AI dashboard" feel while preserving the itinerary and budgeting content.
- [x] Tighten the hero, section rhythm, navigation, and component styling so the page reads clearly on desktop and mobile.
- [x] Re-verify the homepage visually after edits and run project validation before closing the task.
- [x] Update notes and handoff docs with the redesign findings, root cause, and remaining follow-up.
- [x] Compress the homepage further with a conservative density pass so the one-glance layout reads faster without collapsing the content.
- [x] Keep the card hover/press treatment tactile but restrained so it feels premium, not playful.
- [x] Fix the homepage reveal behavior so lower guide, map, transit, and logistics blocks never render as blank sections before intersection.
- [x] Fix screenshot-specific typography and wrapping issues so hero copy, summary subtitles, and all-in target cards stop wasting horizontal space or breaking awkwardly.
- [x] Fix the remaining screenshot-specific width issues so hero bullets read larger, right-rail cards pull left into the empty gap, and desktop subtitles stay on one line when there is room.
- [x] Fix the remaining screenshot-specific itinerary and flight issues so long weather lines stay on one row, flight journey cards match height, and stop chips show visible activity labels.
- [x] Fix the `Route shape, walkability, and transit essentials` atlas alignment so the Seattle and Portland map cards start their maps on the same horizontal line.
- [x] Preserve the etched line-art accents only where they add clarity, not decoration noise.

### Next review window

- [ ] Recheck November-specific business hours for key stops as the trip approaches.
- [ ] Recheck the live shared calendar and homepage alignment in the next couple of weeks.
- [ ] Update `data/trip-data.js` if any price, hour, route, or transit assumption changes materially.
- [ ] Recheck menus, ticket pages, and attraction schedules monthly for the named stops: Seattle sail, Sky View Observatory, Portland Japanese Garden, Glo's Cafe, coffee bean stops, and Kraken ticket window.

### Booking follow-up

- [ ] Confirm the active Seattle and Portland hotel bookings still match the real trip plan.
- [ ] Cancel any older hotel bookings that are still active outside the repo truth.

### Remaining automation

- [ ] Keep the monthly baseline watch active for itinerary prices, menus, schedules, and the Kraken ticket window.
- [ ] Do not recreate airfare, hotel, or itinerary monitor scripts unless the user explicitly asks for a new system.
- [ ] If a new watch expansion is approved, keep it separate from the retired monitor stack and send only concise change notices.
- [ ] Maintain a baseline-backed monthly check for the sail, menus, market stops, coffee stops, and Kraken availability.

## Stable current state

- Homepage redesign, logistics split, executive trip-cost summary, and calendar-detail sync are complete.
- Homepage compaction pass is complete: section rhythm, button/chip sizing, day-card density, and lower-section rendering have all been tightened and re-verified.
- Confirmed airfare total is `$1,256.83`; confirmed hotel total is `$895.46`.
- Meta Ray-Ban glasses and BLEU DE CHANEL are included as planned purchases in the savings target.
- Local activity-budget target is now `$1,250` with `$1,241.50` currently projected.
- The old airfare, hotel, and itinerary monitor stack is retired from the repo and public site.
- The active automation scope is the monthly baseline watch for itinerary prices, menus, schedules, and Kraken availability.

## Review

- `npm run validate` passed after the CSS and reveal-logic changes.
- Browser checks passed at roughly desktop (`1440px`), tablet (`980px`), and mobile (`390px`) widths.
- Verified outcome:
  - hero and summary remain premium but less bulky
  - day rows fit more signal per screen
  - chips, tabs, and buttons stay tappable
  - lower guide/map/transit/logistics sections no longer stay invisible before scroll reveal completes
- hero subtitle and section subtitles use available width better instead of wrapping too early
- `Photo ops` cards render correctly with no hidden-card blank state
- Verified in latest browser pass:
  - hero bullets render at `16.48px` with `10px` markers and read more prominently
  - right-side hero cards now start at `783px` with a `16px` inter-column gap, so the center gap is materially reduced
  - the overview and executive-summary subtitles both measure as one line at desktop width
  - summary and executive sub-cards no longer stretch to the tallest card height
- Verified in the current browser pass:
  - `Local trip-spend snapshot: $1,250 (PHP 78,286) target, $1,300 (PHP 81,417) ceiling` now renders as `1` line at `1440px`
  - the day theme + weather line now renders as `1` line at `1440px`
  - flight journey card heights now match at roughly `708.56px / 708.56px`
  - opened day chips now show visible labels including `Transit`, `Walk`, `Buffer`, `Photo ops`, `Coffee`, `Meal`, `Cocktails`, and `Happy hour`
  - atlas summary heights now match at `100px / 100px`
  - Seattle and Portland atlas maps now start at the same top position (`733.23px / 733.23px`)
  - atlas card heights now match at `553.03px / 553.03px`
  - active notes and task docs now agree that the monthly baseline watch is the remaining automation path, rather than mixing that guidance with an older Kraken-only note
  - the repo homepage now points visitors directly to the live GitHub Pages site, and tracked `notes/.obsidian` state is gone from source control
