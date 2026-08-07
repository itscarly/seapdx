# Tasks

## Purpose

This is the active task summary for humans and agents.

It should stay shorter and cleaner than raw implementation scratch notes.

## Current active work

### Just completed

- **Nov 1-9 CSV reconciliation, full live-calendar resync, Cannon Beach timing bug fixes** (2026-08-06, session 39)
  - Reconciled real receipts (Nov 1-5) into `trip-data.js`: corrected ~20 costs, added menu/order links, deleted "Sea'd In Capitol Hill dinner" entirely, added a $20 QFC seltzer line, split Columbia Center Sky View into ticket + cocktail. Projected local spend is now $1,049.35 (was $1,069).
  - Fixed two dashboard bugs from user screenshot review: overlapping Poquitos happy-hour card text (long URL needed `overflow-wrap`) and a $0 Sky View entrance-fee card (stale exact-string lookup in `app.js`'s `findStopCost()`).
  - Discovered `npm run sync:calendar` never touches the live Google Calendar API, only local export files — the live "Seattle & Portland 2026" calendar was months out of date. Fully resynced all 117 Nov 1-9 events on the live calendar via the Google Calendar MCP tools (132 stale events deleted total across both halves of the trip, 117 recreated from the corrected local export), including removing a genuine Courtyard by Marriott Portland booking record with user's explicit confirmation.
  - Found and fixed two Cannon Beach (Day 6) itinerary data bugs: an unparseable `time: "TBD"` return-bus field and a boarding time scheduled after its own departure time.
  - See `notes/Project Log.md` (session 39) for full detail

- **Homepage redundancy audit, collapsible sections, budget-card grid fix** (2026-08-02, session 38)
  - Deleted the redundant "Trip overview" section (duplicated the hero's all-in target number) and merged Executive Summary + Activity Budget into one "Trip cost" section; removed the flat granular budget-category list since the same numbers already live inside the category cards' click-to-expand breakdowns
  - Unified all Trip Cost cards into a single 4-column CSS grid with equal heights; found and fixed a leftover `:last-child { grid-column: 1/-1 }` rule from the old 3-column layout that was forcing Contingency onto its own full-width row instead of sitting with Local spend vs. cap and Buffer left
  - Added native `<details>`/`<summary>` collapsibles (default-collapsed, visible accent-colored toggle bar) to six sections: Trip cost, Day-by-day route, Booked flights, Planning guides, Maps and transit, Utility pages; added a small script so anchor links auto-expand their target section instead of landing on hidden content
  - Removed the "Social + Dating" guide tab entirely; merged "Rainy day" and "Packing" into one tab with two subsections; removed a duplicate `photoOps` key in `data/trip-data.js` that was silently shadowing itself
  - Reviewed the Reservations tab per user request: only Poquitos Capitol Hill is an actual bookable reservation, the other three entries are logistics notes — left as-is, flagged for the user
  - Confirmed the flight-schedule risk (Asiana OZ271/272 Sunday-vs-published-schedule mismatch) was already correctly surfaced in the data; confirmed the "4 Seattle days, 5 Portland or transfer days" hero fact is accurate (computed live from itinerary city tags, not hardcoded)
  - See `notes/Project Log.md` (session 38) for full detail

- **Full price audit, transportation accuracy, day-trip guides, memory cleanup** (2026-08-02, session 37)
  - Corrected roughly 20 underpriced itinerary items against real 2026 menu prices; projected local spend moved from $926 to $1,069 (still $181 under the $1,250 cap)
  - Fixed the Transportation budget category (stale $95 vs. real itemized $149) and added explicit Cannon Beach / Multnomah Falls bus-fare lines to the dashboard breakdown
  - Added a "Day trip guides" tab with full Cannon Beach and Multnomah Falls step-by-step guides
  - Moved "How This Total Works" into a chevron on the All-in Target card
  - Corrected stale memory notes that had the Portland hotel backwards, and fixed a `scripts/session-status.js` bug that hardcoded a stale hotel total and a dead Kraken watch item
  - See `notes/Project Log.md` (session 37) for the full itemized before/after list

- **GitHub repo rename to `itscarly/seadpdx`** (2026-07-05, session 33)
  - Renamed the GitHub repository and updated the local `origin` remote so this checkout no longer depends on the old redirecting URL
  - Updated the GitHub About homepage and the project docs so the repo and public Pages links both point at `/seadpdx/`
  - Switched `data/trip-data.js` to the new public site path, then regenerated the calendar export files so itinerary backlinks stay correct

- **GitHub repo presentation + hygiene cleanup** (2026-07-05, session 32)
  - Rewrote the public README around the live site links, current budget snapshot, local commands, deploy flow, and repo shape so the GitHub homepage is easier to understand at a glance
  - Reframed the deployment doc around GitHub Pages as the canonical public host while keeping Netlify documented only as a fallback
  - Removed tracked `notes/.obsidian` working-state files so the repo stores plain project notes instead of editor-state noise
  - Fixed stale maintenance text and the `.gitignore` contradiction that still ignored the tracked lockfile
  - Updated the GitHub About metadata so the repo now has a real description, homepage URL, and useful topics

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

- Main homepage redesign is complete (session 38, 2026-08-02).
- The old "Trip overview" (high-signal numbers) section was deleted entirely — it duplicated numbers already shown in the hero card. Executive summary and Activity budget were merged into a single "Trip cost" section, and the flat granular category list under it was removed since the same numbers already exist inside the click-to-expand category cards.
- The Trip cost breakdown (all-in target card + 8 category cards + local-spend/buffer status cards) renders as one unified 4-column CSS grid with equal card heights and no orphaned full-width rows.
- Six homepage sections now use native `<details>`/`<summary>` collapsibles, all default-collapsed on load with a clearly visible filled accent-colored toggle bar ("Click to expand"/"Click to collapse"): Trip cost, Day-by-day route, Booked flights, Planning guides, Maps and transit, and Utility pages. Anchor links (hero nav, "Jump to totals") auto-expand their target section on click/hashchange so they never land on hidden content.
- Planning guides tabs: "Social + Dating" was removed entirely (data and UI). "Rainy day" and "Packing" were merged into one "Rainy day + packing" tab with two subsections. Reservations tab was reviewed — only Poquitos Capitol Hill is an actual bookable reservation; the other three entries are logistics notes, not reservations.
- Executive all-in spend summary is live and should stay aligned with:
  - confirmed airfare `$1,256.83`
  - confirmed hotels `$917.42` (Boylston $504.46 + Hotel Vance $412.96)
  - planned personal purchases: Meta Ray-Ban Gen 2 Wayfarer `$490` and BLEU DE CHANEL EDP 3.4oz `$173`
  - local activity-budget projected total `$1,069` against the `$1,250` cap / `$1,300` ceiling
  - all-in target: `$3,906.25`
- Shared-calendar-to-site alignment is in a good state for the current public route.
- The old airfare, hotel, and itinerary monitor stack is retired.
- The active automation is the monthly baseline watch for itinerary prices, menus, and schedules.
- GitHub Pages is the canonical public host, and the repo homepage should send visitors there directly.

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
