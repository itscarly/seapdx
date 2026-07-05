# Tasks

## Purpose

This is the active task summary for humans and agents.

It should stay shorter and cleaner than raw implementation scratch notes.

## Current active work

### Just completed

- **GitHub publish cleanup + active-note reconciliation** (2026-07-05, session 31)
  - Reconciled the active automation wording so `tasks`, `PROJECT_CONTEXT`, maintenance notes, and the release-facing docs all point to the monthly baseline watch instead of mixing that with an older Kraken-only line
  - Refreshed the top-level product/design documentation so it describes the current compact editorial dashboard rather than an earlier experimental visual system
  - Tightened Git ignore rules so local `.claude`, `.obsidian`, and `.impeccable` state stays out of the release worktree

- **Maps/transit atlas alignment pass** (2026-07-05, session 30)
  - Tightened the atlas day-pill sizing and replaced the desktop auto-fit summary behavior with a stable five-slot row so the Portland block no longer wraps one extra pill row
  - Restored clean side-by-side alignment in `Route shape, walkability, and transit essentials` so both city maps begin on the same horizontal line
  - Verified with browser metrics that the atlas summary heights now match and both maps start at the same vertical position

- **One-line itinerary/weather copy + stop labels pass** (2026-07-05, session 29)
  - Kept the long activity-budget headline on one line at desktop width and applied the same one-line treatment to the reported day theme + weather rows where there is enough room
  - Tightened the flight-journey heading and story typography, then gave the journey cards a consistent internal grid so the arrival and return cards match height
  - Added visible per-stop category labels to the route chips, including `Transit`, `Walk`, `Buffer`, `Photo ops`, `Coffee`, `Meal`, `Cocktails`, and `Happy hour`
  - Verified with `npm run validate` plus browser checks that the budget headline, overview/executive subtitles, and day weather line now all render as one line at `1440px`

- **Desktop width rebalance + card de-stretch pass** (2026-07-05, session 28)
  - Widened the homepage content shell and rebalanced the hero columns so the right-side summary stack reaches further left instead of floating beside a large empty center gap
  - Increased the hero bullet size and marker size so the trip facts read more like key planning points than light footnotes
  - Removed the aggressive desktop max-width cap from section subtitles so overview and executive-summary descriptions stay on one line when the row already has space
  - Stopped overview and executive-summary support cards from stretching to the tallest sibling, which removed the underfilled-card look
  - Verified with `npm run validate` and browser checks that both reported desktop subtitles now render as one line at `1440px`

- **Homepage visual tightening + reveal fallback** (2026-07-05, session 26)
  - Tightened the `.trip-home` override layer instead of changing the global base system
  - Reduced hero, section, card, and itinerary padding by roughly 10-15% for a denser but still premium homepage
  - Stepped down key type sizes: hero support copy, section rhythm, summary values, day headers, stop chips, and secondary flight/detail text
  - Reduced pill/chip/button heights so controls feel more like dashboard controls and less like oversized landing-page CTAs
  - Compacted itinerary rows by shrinking day headers, route-chip widths, and detail-panel spacing while keeping the open-detail interaction intact
  - Added eager + timed reveal fallback in `initReveal()` so lower guide, map, transit, and logistics cards do not stay visually blank before intersection
  - Verified with `npm run validate` and headless browser checks at desktop, tablet, and mobile widths
  - Result: homepage scans faster, scrolls shorter, and keeps its current visual identity

- **Screenshot-driven typography + Photo ops fix** (2026-07-05, session 27)
  - Reduced the hero title scale and widened the hero-copy column so the intro subtitle stops wrapping too early when there is still room
  - Reduced the hero all-in target number and the executive summary total size so `PHP` conversions no longer feel billboard-large or spill awkwardly
  - Reduced overview-card minimum height and summary-value sizing so cards stop carrying unnecessary empty space
  - Increased subtitle copy width for section descriptions so lines use the available row more naturally
  - Restored the `Photo ops` panel by re-running `initReveal()` after that tab renders its cards
  - Verified the fix visually against the reported screenshot areas and confirmed `guideCards: 4` with `hiddenGuides: 0`

- **Hero + overview redesign: compact responsive dashboard** (2026-07-05, session 24)
  - Removed duplicate pill-nav, kept single topbar navigation
  - Restructured hero to responsive 3-col grid (desktop) → 2-col (tablet) → 1-col (mobile)
  - Simplified title to "Seattle + Portland" + "trip dashboard" kicker
  - Consolidated 3 :root CSS blocks into 1 unified block, updated stale warm-cream values to neutral
  - Compacted All-in trip target card (16px padding, FX disclosure in native <details>)
  - Redesigned facts strip as horizontal flex row with dividers (no floating dots)
  - Removed 4th "Route footprint" overview card, shortened support text
  - Shrunk summary-cards (min-height 156→100px, padding 18→14px)
  - Applied typography hierarchy (400-500 support / 600 labels / 700 target only)
  - Added responsive media queries for tablet/mobile breakpoints
  - Fixed CSS cascade issues by consolidating 10+ duplicate selector blocks
  - Result: hero + overview fits one screen, clear visual hierarchy, progressive disclosure for detail

- **Dashboard redesign: restore original clarity + confidence** (2026-07-05, session 23)
  - Diagnosed design degradation from session 21 Impeccable polish: warm cream palette (#f6f5f1) replaced original's neutral gray + strong blue + defined structure
  - Redesigned color palette to restore original: neutral gray bg (#e5e5e7), solid white cards (#ffffff), black text (#000000), strong blue accents (#0056b3)
  - Removed frosted glass effect (backdrop-filter blur eliminated) for clearer card definition
  - Fixed body.trip-home selector that was blocking color variables
  - Verified: npm run validate passed, browser shows correct neutral gray background with strong visual clarity
  - Root cause learned: generic "premium consumer defaults" (warm cream + muted colors + blur) appear on any luxury brand regardless of subject matter — original design was RIGHT because it was grounded in travel-logistics subject matter

- **Impeccable design polish + formal design system** (2026-07-05, session 22)
  - Installed Impeccable skill for production-grade frontend polish
  - Formalized design system in PRODUCT.md, DESIGN.md, design.json with full tokens and components
  - Polished Maps section with targeted CSS: spacing (14px gaps, 18px card padding), disclosure interactions (outline on hover, cubic-bezier transitions), typography hierarchy (Warm Rust labels), and accessibility features
  - Created complete design documentation: North Star, 5 named rules, 8 colors, 5 typography scales, shadow vocabulary, responsive breakpoints

### Stable current state

- Main homepage redesign is complete.
- The itinerary dashboard homepage now uses the Apple-style system font stack, tighter section rhythm, calmer surfaces, and a more disciplined card hierarchy.
- The homepage density pass is complete and the reveal behavior no longer leaves lower sections looking empty on first load or non-interactive captures.
- The hero, executive summary, activity budget, and day-route sections have been re-packed to reduce dead space and repeated full-weight spend callouts.
- The desktop homepage shell now uses a wider content lane, larger hero bullets, and non-stretched secondary cards so screenshot-style whitespace and wrap issues are materially reduced.
- The itinerary rows now expose visible stop-category labels, and the long weather-planning line plus activity-budget headline both stay on one line at desktop width.
- The maps/transit atlas now uses a stable desktop summary row so the Seattle and Portland cards align instead of staggering vertically.
- The homepage now defaults to a compact overview panel and uses progressive disclosure for budget formulas, breakdowns, guide details, flights, and map/transit content so the main screen does not behave like one long static report.
- Executive all-in spend summary is live and should stay aligned with:
  - confirmed airfare `$1,256.83`
  - confirmed hotels `$895.46`
  - planned personal purchases for Meta Ray-Ban glasses `$409` and BLEU DE CHANEL `$173`
  - local activity-budget totals derived from the itinerary, including the `$120` Kraken game estimate and the separated ferry / Amtrak / local-transit breakdown
- Shared-calendar-to-site alignment is in a good state for the current public route.
- The old airfare, hotel, and itinerary monitor stack is retired.
- The active automation is the monthly baseline watch for itinerary prices, menus, and schedules.

### Next review window

- Recheck the itinerary, live calendar, hours, and venue pricing in the next couple of weeks.
- If another sync pass happens, prioritize exact event-level Google Calendar links in stop data so homepage `View in Google Calendar` can jump to the specific event instead of the day view fallback.
- Confirm any older hotel bookings that still need manual cancellation or closure outside the repo.

## Task sync rule

After meaningful completed work: mark completed items, remove invalid tasks, move stale context to `notes/memory/archive/`.

## Related notes

- [[PROJECT_CONTEXT]]
- [[CHANGELOG]]
- [[KNOWN_ISSUES]]
- [[Project Log]]

## Ongoing follow-up

- Run `node scripts/collect-obsidian-memory.js` after meaningful sessions.
- Keep source-index trust and cadence text current if external tool layouts change.
