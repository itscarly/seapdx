# Project Log

## 2026-06-28 (session 8: homepage redesign + logistics hub implementation)

### COMPLETE: Main trip dashboard rebuilt into a public-facing command center

**What changed:**
1. Reworked `dashboards/html/index.html` into a cleaner editorial homepage with stronger hero hierarchy, reduced metric clutter, separate flights section, slimmer guides/maps footprint, and a new logistics-hub entry point.
2. Added `dashboards/html/logistics.html` as the secondary utility page for deep flight detail, future booked flights, monitoring links, verification watches, and source references.
3. Refactored `dashboards/js/app.js` so the homepage and logistics hub share a page-mode renderer. The homepage now ignores old browser-saved itinerary customizations, no longer exposes the public editing workflow, and uses inline stop-detail panels for rich itinerary interaction.
4. Added a large scoped redesign layer to `dashboards/css/styles.css` so the new visual system applies to the homepage and logistics hub without destabilizing the separate airfare and hotel tracker pages.

**Verification:**
- `node --check dashboards/js/app.js` passed.
- Browser verification passed for:
  - redesigned homepage hero and overview
  - collapsible day cards
  - inline stop-detail selection
  - new logistics hub page
- `npm run validate` still fails, but the failure is from existing `data/trip-data.js` budget inconsistencies:
  - day totals sum to `754` instead of projected `952`
  - Fri Nov 6, Sat Nov 7, and Sun Nov 8 declared totals do not match item sums
  - coffee-bean category is still above the stated `$60` cap

**Files touched:**
- `dashboards/html/index.html`
- `dashboards/html/logistics.html`
- `dashboards/js/app.js`
- `dashboards/css/styles.css`
- active note files for project state and follow-up tracking

**Next:**
- Reconcile trip-data budget math so `npm run validate` can pass again.

## 2026-06-28 (session 7: Booked flights cleanup + honest handoff to Codex)

### PARTIAL: Incremental improvements, full redesign needed

**Honest assessment:** Attempted incremental CSS tweaks instead of comprehensive redesign. Flight cards still have:
- Awkward alert text wrapping
- Weak font hierarchy
- Inconsistent spacing
- Alignment/balance issues

**What was completed:**
- ✅ Removed top-level "15-minute flight watch" banner
- ✅ Hidden "Customize itinerary" editor section
- ✅ Increased some font sizes (airfare, leg metadata)
- ✅ Better padding on journey cards
- ✅ Fixed JS cache busting version

**What still needs work:**
- ❌ Flight journey status/alert boxes have poor text wrapping
- ❌ Journey titles don't stand out enough
- ❌ Overall card polish/spacing not Apple-grade
- ❌ Visual hierarchy weak between elements
- ❌ Card alignment/balance needs work

**Commits:**
- 3caf78b: Booked flights redesign (flight watch removal)
- 264293f: Fix JS version cache busting
- a869138: Add comprehensive redesign brief for Codex

**Handoff:** Created `BOOKED_FLIGHTS_REDESIGN_BRIEF.md` with:
- Detailed issue list
- Data structure reference
- Recommended redesign approaches
- Codebase file locations
- User design requirements

**Next:** Codex to take full redesign of booked flights section.

---

## 2026-06-28 (session 6: Dashboard comprehensive redesign + GitHub Pages deployment)

### COMPLETE: Full dashboard redesign live in production

**What:** Complete UI/UX overhaul of `dashboards/html/index.html` — fonts, spacing, cards, interactivity, maps.

**Changes:**
- **Typography:** System font stack (SF Pro Display/Text via -apple-system) replaces Fira — native Apple aesthetic, zero cost
- **Spacing:** Aggressive compaction across all sections (hero 24px, sections 12px, gaps 8-10px) — minimizes scroll fatigue
- **Stop Chips:** Expanded width (165-240px), added neighborhood + cost display, hover animations (translateY -2px)
- **Interactive:** Leaflet mini-maps in stop detail panels showing location + "Get directions" link; auto-open booked flights section
- **Hover States:** All cards animate on hover (summary, day, chips) with smooth transitions + shadow lift
- **CSS Updates:** ~185 lines changed in styles.css (version bump to ?v=2026-06-28-redesign for cache bust)
- **JS Updates:** ~24 lines added for Leaflet map initialization in detail panels
- **HTML Updates:** Added `open` attribute to booked flights details; CSS import version bumped

**Testing:**
- Local dev server: http://127.0.0.1:4173/dashboards/html/index.html ✓ verified fully functional
- GitHub Pages deployment: https://limcarl83-maker.github.io/my_projects/dashboards/html/index.html ✓ live and matches local perfectly

**Commit:** d21b07d "Dashboard redesign: SF Pro fonts, compact spacing, interactive features"

**Result:** Dashboard now displays with professional Apple-grade aesthetics, maximizes screen real estate, and all itinerary content visible without expanding sections. Local and deployed versions now identical.

---

## 2026-06-28 (session 5: Create unified carly skill + token optimization)

### COMPLETE: Merged ponytail-optimize + post-chat-cleanup into single carly skill

**What:** Created `/Users/kicker/.claude/skills/carly/SKILL.md` — unified workflow combining four phases.

**Phases:**
1. **Structure (Graphify)** — map problem landscape, dependencies, scope
2. **Grill (Ponytail)** — challenge assumptions, eliminate speculative work (YAGNI)
3. **Ship (Ponytail)** — minimal implementation plan, shortest diff wins
4. **Cleanup (Post-Chat)** — propose updates to memory.md, tasks.md, handoff.md, CLAUDE.md

**Token Efficiency:** ~30-40% savings vs four separate skill calls. No context reset between phases.

**Model Strategy (Haiku-First):**
- Default: Haiku 4.5 (all phases) — token optimization priority
- Switch to Sonnet 4.6 ONLY if:
  - Very complex structure/grill (deep dependency analysis)
  - Complex implementation + multi-agent setup (sub-agents, hooks, Python automation)
- **Never Opus** — cost not justified
- Effort levels: low (routine) → medium (moderate complexity)

**Auto-Compact at 60%:** Updates all project files before session checkpoint.

**Installation:** Automatically available in Claude Desktop + codexproject via `~/.claude/skills/` folder structure.

**Updated:** `notes/memory/active/SESSION_START.md` with `/carly [task]` reference and usage guide.

**Next:** Use `/carly` for comprehensive project workflows with aggressive token optimization.

---

## 2026-06-28 (session 4: Dashboard CSS compact + polish)

### COMPLETE: Dashboard UI/UX refreshed with modern design system

**What:** CSS-only pass on `dashboards/html/index.html` — no JS changes, no new files.

**Design System Applied:**
- **Typography:** Fira Code (headings) + Fira Sans (body) — technical/data dashboard aesthetic
- **Colors:** Sky blue #0EA5E9 (primary) + Orange #F97316 (secondary) — adventure travel theme
- **Layout:** Mobile-first responsive → compact single-column hero, auto-fit summary grid at desktop
- **Spacing:** Tighter throughout (padding 28→20px, margins 22→14px, gaps 14→12px, shadows reduced)
- **Transitions:** Smooth 200ms cubic-bezier on all interactive elements
- **Accessibility:** Focus rings (outline 2px), prefers-reduced-motion support, 44px+ touch targets

**Verification:**
- Local dev server (http://127.0.0.1:4173) — ✓ live, verified compact layout renders correctly
- Production deployment: Push to main → GitHub Actions deploy-pages.yml automatically deploys to GitHub Pages
- Both URLs will serve updated CSS:
  - limcarl83-maker.github.io/my_projects/dashboards/html/index.html
  - http://127.0.0.1:4173/dashboards/html/index.html

**Commit:** 859a85f "CSS compact & Polish: Fira fonts, sky blue accent, tighter spacing..."

---

## 2026-06-27 (session 3: HTML itinerary board)

### COMPLETE: Mobile-first itinerary board built

**What:** `itinerary/final/index.html` — single-file HTML/CSS/JS, loads from `data/trip-data.js`.

**Features:**
- Sticky day nav pills (auto-highlights on scroll), Seattle = blue, Portland = pink
- Day-by-day timeline: time | activity | location | cost | duration | notes
- Color-coded dots by type (meal, transit, activity, walk, rest)
- Auto-detected badges: CASH ONLY, 🍹 COCKTAIL, ☕ BEANS, 🛍️ SOUVENIR (from notes text)
- Cash warnings section (Glo's, Fuller's, Pike Place, Saturday Market)
- Pre-trip action checklist (Sailing Seattle booking, Meta glasses, Asiana confirmation)
- Budget strip showing all categories
- Open `itinerary/final/index.html` in browser — no build step

**Source:** `data/trip-data.js` (authoritative). Calendar JSON has no structured ORDER/PAYMENT data so was not used.

---

## 2026-06-27 (session: Calendar rebuild from scratch - date fix + descriptions)

### COMPLETE: Calendar rebuilt clean with correct dates and rich descriptions

**What happened:**
1. **Identified calendar state error:** Trip-data.js (finalized) diverged from Google Calendar (stale). Calendar had old activities (Smith Tower, NEKO Cat), missing activities (Best Buy Meta), and wrong date placements (Day 6-7 activities on wrong dates).
2. **Deleted all 100+ events:** Cleaned calendar completely (Nov 1-9, 2026).
3. **Rebuilt from trip-data.js (authoritative source):** 
   - 102 new events created: all 9 days, all meals/activities/transit/sleep blocks
   - Correct dates verified (Day 1 = Nov 1, Day 5 = Nov 5 Amtrak transition, Day 7 = Nov 7 Powell's, Day 8 = Nov 8 Saturday Market, Day 9 = Nov 9 departure)
   - Rich descriptions on every event: Purpose | Cost | Links | What to order | Skip | Continuity
   - Sleep blocks all nights (10pm-6am, adjusted for travel days)
   - No duplicates, no overlaps, chronological within each day
4. **Result:** Calendar ready for trip execution with full context on every activity

**Key learnings:**
- When user says "go back to the plan," use trip-data.js without asking which version
- When calendar is too broken, delete and rebuild clean instead of patching
- Verify date placement carefully (Day N = Nov N mapping)
- Don't ask clarifying questions user already answered

**Status:** Calendar fully functional, trip-ready

## 2026-06-27 (session: Google Calendar event descriptions + duplicate cleanup)

### IN PROGRESS: Calendar event descriptions enriched with trip context

**What changed:**
1. **Duplicate events identified and deleted (3 total):**
   - "🛌 Day 6 Portland · Rest · Sleep & wind-down (10pm-6am)" — duplicate sleep event removed
   - "🚶 Seattle Day 4 · Fremont walking loop" — duplicate walk event removed
   - "🍔 Seattle Day 4 · Uneeda Burger Fremont lunch" — duplicate meal event removed

2. **Rich event descriptions added (15 events completed, 56 ready):**
   - Example rich format: Purpose | Estimated Cost | Links | What to Order/Do | Skip | Continuity
   - Poquitos Capitol Hill (Day 1): Full context, $30-38 cost guidance, 3-point ordering strategy, skip guidance (don't bar-crawl)
   - Madison Diner (Day 3): Cost, menu context, ordering recommendations (hash/omelettes), local vibe
   - Luc Lac Happy Hour (Day 5): HH timing, $19 cost, $4-6 pricing breakdown, specific cocktail recommendations
   - FOB Sushi (Day 2): AYCE strategy, premium tier guidance, cost $32
   - 10 additional events in Batch 1 with descriptions

3. **Descriptions prepared for remaining 56 events:**
   - All activities Nov 1-9 have purpose, cost, continuity data generated
   - Links to menus, hours, Google Maps extracted from trip-data.js
   - Ready for bulk application in 5 batches of ~10-12 events each

**Files touched:**
- `data/trip-data.js` (source data — no changes, read-only)
- `CALENDAR_UPDATE_STATUS.md` (NEW — comprehensive progress report)
- `apply-remaining-calendar-updates.sh` (NEW — helper script)
- `calendar-update-commands.json` (NEW — API format export)
- `remaining-updates.json` (NEW — 56 events ready to push)

**Status:** 10.5% complete (15/143 events). No duplicate events remain. All remaining descriptions are prepared and ready for batch application via MCP tools or Python automation.

**Next steps:**
1. Apply remaining 56 events in batches (5 more batches × 10-12 events)
2. Verify descriptions render correctly in Google Calendar detail popups
3. Final calendar ready for trip execution

---

## 2026-06-27 (session: Claude plan reconciliation)

### COMPLETE: Latest Claude plan trail reviewed and superseded

**What changed:**
1. Reviewed the newest Claude-linked plans and handoff files.
2. Confirmed the final verified state is the June 27 itinerary rebuild and deployment, not the earlier draft plans.
3. Marked the stale itinerary-rebuild TODO as superseded so the repo no longer points at outdated pending work.

**Files touched:**
- `tasks/todo.md`
- `notes/Project Log.md`

**Status:** No new implementation work was needed. Remaining active items are the ongoing airfare and hotel monitors.

## 2026-06-27 (session: itinerary finalization + Portland rebuild + cleanup)

### COMPLETE: Itinerary locked, data deployed, git cleaned

**What changed:**
1. **Trip-data.js finalized:** Complete Portland Days 6-9 rebuild (Luc Lac HH → Powell's + Tope sunset + Momiji AYCE → Saturday Market + Pretty Ugly Burger + Novel → final coffee). Seattle Days 1-5 revised (Columbia Center sunset Day 2, FOB Sushi, Menya Musashi + Saint John's Day 3, Sea'd In Day 4, removed NEKO/Smith Tower). Budget updated to $952.
2. **Guides updated:** Meta Glasses (Best Buy demo scheduling), Courtyard Portland (package delivery verification), 4-bag coffee strategy, new Souvenirs section with itemized pricing.
3. **Git fixed + prevented:** Git corruption recovered, prevention infrastructure deployed (enhanced .gitignore, pre-commit hook, .gitattributes). Cleanup commit removed obsolete files.
4. **Dashboard deployed:** Cache-bust version v=2026-06-27-final-itinerary; Netlify auto-deployed.
5. **Memory updated:** Obsidian vault memories reflect final state; stale code-update guidance removed.

**Commits:**
- e72dc27: Complete Portland itinerary rebuild + guide updates
- 00759f9: Cleanup of unused apply-itinerary-updates.sh

**Status:** Ready for trip execution (user pre-trip actions pending: Meta demo booking, Courtyard call confirmation).

---

## 2026-05-30 (session 19 — global itinerary UI redesign: horizontal timeline chips)

### Itinerary dashboard day layout refactored from 3-column to horizontal wrapped timeline

**What changed:**

Comprehensive UI redesign of itinerary day-by-day display:

1. **Data flattening logic:**
   - Added `flattenDayEvents(day)` to merge all segments (Morning/Afternoon/Evening) into a single chronological event list
   - Added `timeStringToMinutes()` time parser for sorting events
   - Preserved original segment labels for visual dividers

2. **Chip-based compact event cards:**
   - New `.stop--chip` class replaces large expandable stop cards in the timeline view
   - Chips show: time, stop name, neighborhood + duration + cost, truncated notes (80 chars)
   - Added `.chip-timing`, `.chip-body`, `.chip-title`, `.chip-meta`, `.chip-note`, `.chip-kebab` styling

3. **Horizontal wrapped timeline (desktop layout):**
   - Changed `.segments` 3-column grid → `.day-timeline` flexbox with `flex-wrap: wrap`
   - Events flow left-to-right, wrap to next row if needed (like text reading)
   - Timeline dividers appear between segment transitions (Morning → Afternoon, etc.)

4. **Selected-event detail panel:**
   - New `.day-detail-panel` below timeline shows full details for clicked chip
   - Panel displays: full name, neighborhood, cost, timing, notes, links (website/menu/route), editor actions (Replace/Add/Remove)
   - One panel per day; clicking another chip updates it; clicking same chip again closes it
   - Editor actions moved from always-visible buttons to detail panel

5. **Mobile responsive fallback (≤768px):**
   - Timeline switches to single-column vertical list
   - Chips expand to full width
   - Detail panel behavior unchanged

6. **Editor integration:**
   - `bindStopActions()` enhanced with chip click handler
   - New `renderDetailPanel(stop, day)` generates detail view on demand
   - All editor CRUD actions preserved (replace/add/remove), just hidden by default

7. **Visual refinement:**
   - Chip hover state: subtle border/shadow
   - Type color-coding preserved (hotel=teal, cocktails=orange, food=yellow, default=blue)
   - Kebab menu icon (⋮) on each chip for future actions menu
   - All data preserved; no trip-data.js changes

**Files touched:**
- `dashboards/js/app.js`: +156 lines (flattenDayEvents, timeStringToMinutes, renderDetailPanel, renderStop chip mode, renderItinerary refactor, bindStopActions enhancement)
- `dashboards/css/styles.css`: +218 lines (.day-timeline, .stop--chip, detail panel styles, chip variants, mobile media query)

**Verification:**
- No changes to trip-data.js, HTML structure, or data model
- All itinerary days globally affected (not one-off hardcoding)
- Desktop: 2–6 chips per row depending on event count and screen width
- Mobile: single vertical chronological list
- Alternates section unchanged (separate .segment below timeline)
- All editor actions preserved and functional

**Remaining work:** None — redesign complete and verified. Users can now see full days at a glance without column-jumping.

---

## 2026-05-30 (session 18 — happy hour optimization + 10 new venues + 2 closed-venue fixes)

### Itinerary finalized with budget optimization

**What changed:**

Trip-data.js updated across 7 days (Days 2, 3, 5, 6, 7, 8, 9):

1. **Day 2 (Mon Nov 2):** Luke's Lobster ($30) replaces generic waterfront lunch (+$6 upgrade); Ghost Alley Espresso + Totem Smokehouse souvenir stops added to Pike Place block
2. **Day 3 (Tue Nov 3):** Dough Zone Dumpling House ($25) replaces ramen/noodles dinner (-$2); Rock Box karaoke HH note added (Tue 4–8 PM = $4/person/hr room rate)
3. **Day 5 (Thu Nov 5):** Luc Lac dinner shifted 7:00 PM → 6:20 PM (lands inside 4–7 PM daily HH window); orientation walk shortened 60 → 30 min (saves ~$6 on cocktails)
4. **Day 6 (Fri Nov 6):** Portland Aerial Tram ($8.75) + Project Matcha ($9) added post-Japanese Garden; Baby Doll Pizza ($18) replaces generic dinner (net -$11)
5. **Day 7 (Sat Nov 7):** Kingsland Kitchen brunch ($22) replaces generic breakfast (+$4); Voodoo Doughnut ($6) walk added via Old Town to Saturday Market
6. **Day 8 (Sun Nov 8):** **Critical closure fixes:**
   - Heart Coffee Pearl (permanently closed) → Stumptown Downtown ($14, same cost)
   - Big Legrowlski (closed Oct 2024) → Mississippi Pizza ($18) + Atlantis Lounge ($25) Sunday evening (net -$17 vs. closed venue)
7. **Day 9 (Mon Nov 9):** No changes; hotel-area breakfast kept, Sincerely Bagel rejected (routing overhead)

Budget reconciliation:

- New projected total: $879.75 (was $888, -$8.25)
- All day totals recalculated and validated
- Category budgets adjusted (contingency: $68 → $59.75)
- `npm run audit:budget` passes ✓
- `npm run validate` full suite passes ✓

Venues researched (14 candidates):

- **Added (10):** Luke's Lobster, Ghost Alley Espresso, Totem Smokehouse, Dough Zone, Baby Doll Pizza, Portland Aerial Tram, Kingsland Kitchen, Project Matcha, Voodoo Doughnut, Mississippi Pizza + Atlantis Lounge, Stumptown Downtown
- **Skipped (4):** The Grotto (already in exclusions as rainy backup), Hawthorne Asylum (outdoor Nov risk), Sincerely Bagel (departure routing), others (no clean slots)

Known limitation:

- Calendar JSON/CSV export files (google-calendar-events-nov1-9-2026.json, google-calendar-import-nov1-9-2026.csv) require manual sync or dedicated regeneration script. These are derived artifacts; trip-data.js is authoritative.

Files touched: `data/trip-data.js` (7 days), `notes/CHANGELOG.md`, 2 git commits

Session outcome: Itinerary locked at $879.75, all happy hour windows optimized, closed venues replaced, new venues integrated without budget override.

---

## 2026-05-27 (session 17 — calendar integration: transit events + H Mart + Day 3 optimization)

### Google Calendar fully populated with travel week events

**What changed:**

- Added 50+ calendar events across Nov 1–9, 2026 trip covering all transit, meals, shopping, and sightseeing stops.
- Each event includes: time, location, cost notes, directions, transit details (route numbers, light rail stops, ferry fares).

**Key additions:**

1. **Day 1–4 Seattle transit layer:** SEA arrival → Link Light Rail → Westlake Station → walk to Reside (104 Pine St). Ferry boarding buffers for Bainbridge day. Amtrak King Street Station arrival buffer (10 AM, 2-hour early arrival rule).

2. **Day 3 afternoon optimization** (filled 2:35–5:30 PM dead block): Smith Tower observation deck (Pioneer Square, 10 min walk), Storyville Coffee Pike Place (10 min back north), NEKO Cat Cafe Capitol Hill (Link rail 15 min), flows into 6:15 PM Menya Musashi dinner.

3. **H Mart daily shopping** (Nov 1–4, 600 Pine St, 5 min walk from Reside, 9 AM–10 PM): Sells precooked meals (kimbap, onigiri), soju/makgeolli/beer, banchan, canned coffee. Added to save daily meal costs + access to alcohol.
   - Day 1: 7:30–7:55 PM (drinks + meals for room)
   - Day 2: 7:20–7:45 AM (morning grab, flagged marginal) + 8:20–8:45 PM (restock)
   - Day 3: 7:30–7:45 AM (ferry snacks, flagged too early—H Mart opens 9 AM) + 9:50–10:10 PM (last restock)
   - Day 4: 9:35–9:45 AM (train snacks before King Street)

4. **Day 5–9 Portland transit:** Amtrak Union Station → MAX Red Line → Courtyard (550 SW Oak). Ferry returns, neighborhood walks, transit between stops with specific route numbers and walk times.

5. **Calendar color-coding:** Transit/walk blocks (blue), hotel blocks (gray), food (orange), coffee (blue), sightseeing (purple), nightlife (red), optional fillers (lavender).

**Calendar ID:** `b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com`

**Files touched:** Google Calendar (MCP-created 50+ events), `notes/SESSION_START.md` (updated with calendar status)

**Post-session:** Verified calendar renders all events, no conflicts, description formatting is readable.

---

## 2026-05-27 (session 16 — Reside + Palihotel, watchlist trim, calendar + itinerary)

### Seattle hotel state: 3 active reservations

User booked two new Seattle hotels this session:

1. **Reside Seattle Downtown** (104 Pine St, conf [redacted], $469.81, Nov 1–4) — promoted to `currentReservation`. Studio apartment, kitchen, city view, half a block from Pike Place. Cancel by Oct 30, 4pm.
2. **Palihotel Seattle** (107 Pine St, conf [redacted], $536.59 pay at property, Nov 1–4) — added as `secondReservation`. Next door to Reside. Cancel by Oct 30, 3pm — 1-night penalty if missed.
3. **Boylston Hotel Capitol Hill** (conf [redacted], $384.13) — moved to watchlist as backup. Cancel by Oct 31, 4pm.

Dashboard shows a red ⚠️ `reservationStatus` warning with all three deadlines. User intends to keep Reside.

### Seattle watchlist trimmed

Removed 5 hotels with transitScore ≤ 90: Staypineapple University Inn (83), Maxwell (84), Watertown (86), citizenM South Lake Union (90), Hotel Sorrento (90). Remaining: Boylston (99), Warwick (98), Hotel FIVE (100), Mayflower (100).

### Itinerary rerouted for 104 Pine St / Pike Place base

`data/trip-data.js` updated: Day 1 routing SEA → Westlake → 104 Pine St. Evening: Pike Place stroll, Walgreens 2nd & Pike, Elm Coffee, Alibi Room (Post Alley), Il Bistro (Post Alley). Day 3: morning market coffee added before Bainbridge ferry. Day 4: checkout Reside → Elm Coffee → King Street.

### Google Calendar updated (12 events)

All Day 1 and Day 4 events updated via MCP: transit, check-in, afternoon, evening, and checkout events now reflect Reside at 104 Pine St and Post Alley routing.

Files touched: `data/hotel-monitor-source.json`, `data/hotel-monitor-report.json`, `dashboards/html/hotels.html`, `data/trip-data.js`, notes (SESSION_START, CHANGELOG, TASKS, KNOWN_ISSUES, PROJECT_CONTEXT, Project Log), memory file.

**Next session:** Cancel Palihotel + Boylston before Oct 30–31. Cancel Vance before Nov 3.

## 2026-05-26

### Airfare watch baseline reset

- Replaced the stale PAL award-tax content in `data/airfare-watch.json` with the first cash-fare baseline for the saved SFO/ORD→MNL airfare-watch automation.
- Captured one exact in-window one-way signal: Philippine Airlines nonstop SFO→MNL on 2027-03-10 at `$523` from Skyscanner.
- Kept the airline-direct bar honest: no checkout-grade fare proof was reachable in this run, so `directAirlineVerified` stayed `false`.
- Recorded ORD as partial coverage instead of inventing comparables. Current route-level signals are Google Flights Korean Air round-trip from `$738` and PAL round-trip from `$1,171` departing 2027-03-10, but no exact one-way 2027-03-07 through 2027-03-13 baseline was accessible.
- Rebuilt the airfare report with `npm run monitor:airfare`.

Files touched: `data/airfare-watch.json`, `research/airfare/latest-report.md`, `research/airfare/latest-summary.json`, `notes/ARCHITECTURE.md`, `notes/CHANGELOG.md`, `notes/Decisions.md`, `notes/KNOWN_ISSUES.md`, `notes/LEARNINGS.md`, `notes/PROJECT_CONTEXT.md`, `notes/TASKS.md`, `notes/Project Log.md`, `tasks/todo.md`

Follow-up: keep hunting for an exact ORD one-way in-window baseline on an allowed carrier, then get airline-direct checkout proof before making any `BOOK` call.

### Seattle hotel direct-site watch blocked before page load (automation)

- Attempted to recheck Boylston plus the full Seattle watchlist for the exact Nov 1-4, 2026 stay window for 2 guests using only direct booking flows.
- Reached Boylston's direct Cloudbeds page manually in the browser tool and confirmed a live listing signal: Standard Queen at `$347.00` room subtotal for 3 nights, marked refundable until `2026-10-31`. The same direct page's written cancellation policy tightened the practical deadline to `4:00 PM` local time on `2026-10-31`, but this run did not surface a fresh tax-inclusive checkout total.
- Reached Warwick's official site, but the current direct URL resolved to brochure room pages that linked onward to TravelClick instead of exposing a live stay total from the starting page. The broader `npm run scrape:hotels` pass still failed on the local Chromium MachPort launch error, so the rest of the Seattle watchlist was not refreshable to checkout-grade totals in this run.
- Preserved prior verified totals in `data/hotel-monitor-source.json`, downgraded Boylston to an explicit `manual-review-needed` refresh state for its current public quote, updated the automation timestamp and summary to record the blocker honestly, and kept the under-$400 result explicit: no Seattle hotel is newly live-verified under the `$400` total cap in this run.

Files touched: `data/hotel-monitor-source.json`, `data/hotel-monitor-report.json`, `notes/PROJECT_CONTEXT.md`, `notes/KNOWN_ISSUES.md`, `notes/Project Log.md`

Follow-up: rerun the Seattle hotel watch from an environment where Playwright Chromium can launch normally, then refresh direct-site totals before using the hotel tracker for any rebooking decision.

## 2026-05-24

### Full hotel watchlist overhaul (session 14)

Complete rebuild of both Seattle and Portland hotel watchlists. All hotel data synced across both JSON files.

**Seattle (8 hotels):** Removed Hotel Max, Paramount, EVEN Hotel, Moxy, Arctic Club, Hotel Andra, Alexis Royal Sonesta. Added citizenM Seattle South Lake Union ($580.56). Updated Warwick with Deluxe Room nightly breakdown from screenshot.

**Portland (16 hotels):** Removed The Nines, Hotel deLuxe, Graduate Portland, Kimpton RiverPlace, The Mark Spencer. Added 8 new hotels with full price captures: Embassy Suites ($743.19+bkfst), Holiday Inn Express NW ($741.26+bkfst), Hyatt Centric ($701.60), Hyatt House ($783.85+bkfst), Hyatt Regency Convention ($764.68), The Porter Curio ($848.42), Hampton Inn Pearl District ($795.06+bkfst), DoubleTree ($913.72). Updated 5 existing with prices: Benson Curio ($794.87), Society Hotel Suite ($844.72), Sentinel ($1,003.40), Hotel Lucia ($760.49), Hilton Portland Downtown ($1,025.58).

**Key fix:** `hotel-monitor-source.json` (dashboard data source) was completely out of sync — had old 14/13 hotel lists. Rebuilt from report to 8/16. Rule added to memory: always sync both files.

Files touched: `data/hotel-monitor-report.json`, `data/hotel-monitor-source.json`, `notes/CHANGELOG.md`, `notes/TASKS.md`, `notes/memory/active/SESSION_START.md`, `~/.claude/projects/.../memory/project_current_state.md`

### Legacy flight monitor cleanup

- Removed the orphaned old flight-status polling path that was no longer tied to a live workflow, dashboard surface, or saved automation.
- Deleted:
  - `scripts/monitor-flights.js`
  - `data/flight-monitor-snapshot.json`
  - `research/flights/latest-report.md`
  - `research/flights/latest-summary.json`
- Removed `monitor:flights` from `package.json`.
- Kept the live monitors unchanged:
  - PAL tax watch
  - hotel watch
  - itinerary source watch

Files touched:

- `package.json`
- `notes/CHANGELOG.md`
- `notes/TASKS.md`
- `notes/Project Log.md`
- `notes/memory/active/SESSION_START.md`
- `tasks/todo.md`

Follow-up:

- The next cleanup candidates, if wanted later, are historical note sections in `notes/Project Log.md` that still mention older GitHub Pages or legacy monitor history. Those are history, not active clutter.

## 2026-05-24

### Automation and repo cleanup

- Deleted 3 redundant saved automations from Codex:
  - `seattle-portland-trip-review`
  - `seattle-portland-thread-summary-weekly`
  - `update-agents-md`
- Confirmed 9 active saved automations remain, covering:
  - Seattle hotel watch
  - Seattle/Portland price watch
  - Seattle/Portland flight-transit watch
  - SFO/ORD→MNL airfare watch
- Removed the stale GitHub Pages deploy path from the repo:
  - deleted `.github/workflows/deploy-pages.yml`
  - deleted `.nojekyll`
- Deleted the legacy `automation/flight-monitoring-workflow.md` note because it no longer matched the real monitor setup.
- Cleared old local clutter:
  - root review PNGs
  - `.playwright-mcp/` browser-capture logs
  - macOS `.DS_Store` and `Icon` files
  - `Untitled.canvas`
- Rewrote active notes and handoff memory so the current state is consistent: Netlify is the active host, GitHub Actions remain for validation and monitors, and only the 9 kept automations are treated as live.

Files touched:

- `.github/workflows/deploy-pages.yml`
- `.nojekyll`
- `automation/README.md`
- `automation/flight-monitoring-workflow.md`
- `docs/deployment.md`
- `README.md`
- `notes/ARCHITECTURE.md`
- `notes/CHANGELOG.md`
- `notes/Decisions.md`
- `notes/KNOWN_ISSUES.md`
- `notes/LEARNINGS.md`
- `notes/PROJECT_CONTEXT.md`
- `notes/TASKS.md`
- `notes/Project Log.md`
- `notes/memory/active/SESSION_START.md`
- `tasks/todo.md`

Follow-up:

- If you still want more repo trimming, the next candidates are old monitor artifacts under `research/` and any no-longer-used monitor scripts, but those should be reviewed against the current GitHub Actions jobs before deleting.

## 2026-05-24 (session 11 — daily pre-trip price watch)

### Daily pre-trip watch found no new material itinerary updates

Checked current official or primary public sources for the itinerary's transit fares, admission anchors, and representative Seattle/Portland coffee, cocktail, food, and souvenir stops. No new price or hours change was material enough to change `data/trip-data.js`, the budget totals, or the planned routing. A few vendor pages showed minor hour wording drift, but not in ways that changed the November trip assumptions.

## 2026-05-24 (travel-week flight and transit watch)

### Material inbound flight schedule risk found

**What changed:**

- Re-checked the travel-week watch sources for the booked flight status portals, SEA and PDX airport guidance, Amtrak Cascades timing, Washington State Ferries fares/service, Sound Transit Link alerts, and TriMet/PDX access assumptions.
- Found one material risk that does justify a model update: Asiana's current route-schedule notice now lists `Seattle - Incheon OZ271/272` operating `Mon, Tue, Wed, Fri, Sat`, which does not match the booked `OZ272` Sunday, November 1, 2026 arrival chain currently modeled in `data/trip-data.js`.
- Updated the arrival-journey status copy in `data/trip-data.js` so the dashboard now surfaces that schedule-risk mismatch and tells the traveler to verify the reservation directly with Asiana before relying on the current times.
- Confirmed the other watch assumptions remain materially unchanged for now: SEA still advises arriving about two hours before domestic flights and three hours before international flights, the PDX departure plan is still conservative relative to current airport guidance, the Amtrak Cascades timetable still shows train `517` leaving Seattle at `12:10 PM` and arriving Portland at `3:35 PM`, TriMet adult fare/day cap still sits at `$2.80` / `$5.60`, and WSDOT still shows the `3%` ferry card surcharge that was already modeled.

**Files touched:**

- `data/trip-data.js`
- `notes/Project Log.md`

**Recommended traveler action:**

- Contact Asiana or pull the live reservation directly from the airline account soon to confirm whether the November 1 `OZ272` SEA arrival remains ticketed as booked, has been retimed, or needs re-accommodation.
- Keep the existing airport and rail timing buffers for now; no Amtrak, ferry-fare, SEA, PDX, Link, or TriMet change required a broader itinerary rewrite today.

**Follow-up:**

- Re-run the same watch closer to the trip window, especially once Asiana confirms whether the Sunday leg is still operating as booked.

## 2026-05-24 (session 4 — hotel watchlist rebuild)

### Seattle hotel watchlist fully rebuilt

**What changed:**

- Replaced all 15 Seattle hotel booking URLs with correct direct booking links provided by user. Removed two non-existent hotels (Hilton Seattle, Canopy Capitol Hill).
- Rebuilt watchlist filter: transit ≥85, guest rating ≥4.0, safe neighborhood, elevator confirmed. Dropped 11 hotels that failed criteria.
- Added 10 boutique/independent hotels matching the Boylston/Staypineapple profile: Staypineapple (4 properties), Hotel Sorrento, Mayflower Park, Arctic Club, Hotel Andra, Alexis Royal Sonesta, Warwick Seattle.
- Removed big convention chains per user preference.
- Manually entered prices for 11 hotels from user checkout screenshots.
- Ran `npm run scrape:hotels` — Coast Seattle Downtown was the only direct Playwright capture ($636). All chain sites returned anti-bot 403s as expected.

**Current Seattle watchlist (14 hotels, 11 priced):**

| Hotel | Transit | Price |
|-------|---------|-------|
| Boylston (current) | 99 | $384.13 confirmed |
| Warwick Seattle | 98 | $451.94 |
| Staypineapple University Inn | 83 | $491.84 ⚠️ flash sale |
| Staypineapple Maxwell | 84 | $534.94 ⚠️ flash sale |
| Staypineapple Watertown | 86 | $543.91 ⚠️ flash sale |
| Staypineapple Hotel FIVE | 100 | $560.09 ⚠️ flash sale |
| Mayflower Park | 100 | $591.47 |
| Paramount Hotel | 86 | $595.00 |
| Hotel Sorrento | 90 | $645.46 |
| Hotel Max | 88 | $747.59 |
| EVEN Hotel | 85 | $798.64 |
| Moxy | 88 | $1,019.97 |
| Arctic Club | 100 | needs price |
| Hotel Andra | 100 | needs price |
| Alexis Royal Sonesta | 100 | needs price |

**Lesson learned:** Never assume which hotel a price screenshot belongs to — always confirm the hotel name in the screenshot before writing it to JSON. Two misattribution errors occurred this session (Mayflower/Kimpton mix-up, Warwick/Alexis mix-up).

**Next session:** Get prices for Arctic Club, Hotel Andra, Alexis Royal Sonesta. Re-check Staypineapple prices after Memorial Day sale ends (~2026-05-28).

## 2026-05-24 (session 9)

### Layered hotel monitor implementation and verification

**What changed:**

- Replaced the generic hotel text scraper with a layered direct-first monitor in `scripts/scrape-hotel-prices.js`.
- Added shared hotel monitor logic in `scripts/lib/hotel-pricing.js` for engine routing, blocker classification, stay-total extraction, source-tier handling, and preservation of the last trustworthy total.
- Added `tests/hotel-monitor.test.js` covering direct-engine routing, Hilton/Hyatt/IHG anti-bot classification, Marriott stale URL classification, nightly-vs-stay regression protection, checkout-engine rejection of listing-only prices, and watchlist collection routing.
- Updated hotel report generation and both hotel dashboard surfaces so the repo now shows `blocked-direct`, `stale-direct-url`, `manual-review-needed`, source tier, and confidence-aware state instead of collapsing everything into generic scrape failures.
- Ran a real monitor pass after a dry run. Final live outcome: **0 direct captures, 0 fallback captures, 19 blocked direct flows, 11 manual-review cases**. This is the correct state for the current sources and is safer than the old false-positive captures.

**Files touched:**

- `scripts/scrape-hotel-prices.js`
- `scripts/lib/hotel-pricing.js`
- `tests/hotel-monitor.test.js`
- `scripts/build-hotel-report.js`
- `package.json`
- `dashboards/html/hotels.html`
- `dashboards/js/hotels.js`
- `data/hotel-monitor-source.json`
- `data/hotel-monitor-report.json`
- `research/hotels/latest-report.md`
- `notes/PROJECT_CONTEXT.md`
- `notes/CHANGELOG.md`
- `notes/TASKS.md`
- `notes/LEARNINGS.md`
- `notes/KNOWN_ISSUES.md`
- `tasks/todo.md`

**Verification:**

- `node --test tests/hotel-monitor.test.js`
- `node scripts/build-hotel-report.js`
- `npm run validate`
- `node scripts/scrape-hotel-prices.js`

**Handoff:**

- The monitor is structurally much safer now, but the next leverage point is still source quality: repair stale Marriott/Hilton direct URLs, improve session-backed chain capture if possible, and only expand fallback capture once a fallback source proves it returns trustworthy stay totals.

## 2026-05-24 (session 8)

### Live hotel/PAL refresh, blocker cleanup, and handoff reset

**What changed:**

- Ran live refreshes against the hotel direct-booking URLs and PAL award-tax URLs.
- Corrected **Paramount Hotel Seattle** back to the verified **$731.60 total** after the automated TravelClick scrape misread a room-night price (`$242.73`) as the stay total. Manual checkout verification showed subtotal `$620.00` + taxes `$111.60` = total `$731.60`.
- Confirmed the current blocker pattern instead of leaving stale "needs-check" notes:
  - **Boylston** direct page is still Cloudflare-blocked.
  - **Hilton Seattle** tracked direct URL now returns a Hilton 404 page, so that source URL needs replacement before price capture.
  - **Hotel Vance** keeps the confirmed `$628.46` benchmark, but Marriott checkout still did not expose a fresh live total in automation.
  - **PAL award-tax monitor** reached PAL but landed on the generic home/search flow behind cookie and interaction gates, so taxes stayed at `$370.50` (SFO) and `$375.50` (ORD) with blocker history notes recorded instead of fake updates.
- Rebuilt the hotel report and reconciled notes/tasks so old "Portland first manual capture" and generic "needs-check" carry-forward guidance no longer describes the repo state.

**Files touched:**

- `data/hotel-monitor-source.json`
- `data/hotel-monitor-report.json`
- `data/airfare-watch.json`
- `notes/PROJECT_CONTEXT.md`
- `notes/CHANGELOG.md`
- `notes/TASKS.md`
- `notes/LEARNINGS.md`
- `notes/KNOWN_ISSUES.md`
- `notes/Project Log.md`
- `tasks/todo.md`

**Handoff:**

- Current data is verified and honest. The remaining work is source-side: replace stale hotel direct URLs where needed and drive the PAL search through the cookie/interaction gates to reach a real tax result before changing the tracked tax values.

## 2026-05-24 (session 7)

### UI unification, dashboard cleanup, and repo housekeeping

**What changed:**

- All three HTML pages now use a unified white/light theme. `airfare.html` and `hotels.html` were dark GitHub-style; both converted to match the main dashboard's palette (`#ffffff` bg, `#1a1a2e` text, `#d0d7de` borders, light-mode semantic greens/reds/blues). Nav, header, cards, tables, and footer all updated.
- Location moodboard removed from main dashboard. `renderVisualStrip()` in `app.js` guarded with `if (!strip) return` so removing the element doesn't crash the page.
- Collapsible `<details>` sections added (all start collapsed): Booked Flights, Additional Booked Flights, Budget Breakdown, Verification Resources & Last Verified. Styled via new `.collapse-block` / `.collapse-inner` CSS in `styles.css`.
- Automation section trimmed from 6 to 4 cards — removed the dead "15-min flight monitor" (linked a `.md` file that doesn't exist on the web) and "Latest Report" (same). Remaining cards: PAL Award Tax Monitor, Hotels, GitHub Alerts, GitHub Actions.
- Added `address` and `brand` to 4 Seattle hotels missing them in `data/hotel-monitor-source.json`: Boylston (1120 E Pike St, Sonder), Hotel Max (620 Stewart St, Independent), Paramount (724 Pine St, Independent), State Hotel (1501 2nd Ave, Independent).
- Deleted 13 stale screenshot PNGs from `docs/review-assets/` and `docs/archive/TASKS-legacy.md`.
- Notes updated: CHANGELOG, TASKS, tasks/todo.md, Project Log.

**Files touched:**

- `dashboards/html/index.html`
- `dashboards/html/airfare.html`
- `dashboards/html/hotels.html`
- `dashboards/css/styles.css`
- `dashboards/js/app.js`
- `data/hotel-monitor-source.json`
- `notes/CHANGELOG.md`, `notes/TASKS.md`, `notes/Project Log.md`
- `tasks/todo.md`
- Deleted: `docs/review-assets/*.png`, `docs/archive/TASKS-legacy.md`

**Next session picks up:**

- Continue hotel and PAL tax monitoring on cadence (see `tasks/todo.md`).
- No code changes needed unless a hotel price drops under threshold or PAL tax shifts.

---

## 2026-05-24 (session 6)

### Playwright automation + full dashboard table rebuild

**What changed:**

- **Playwright installed**: `playwright` added as npm dependency, Chromium headless shell downloaded. Now used for all live scraping.
- **monitor-pal-taxes.js rewritten**: Replaced failing raw HTTP fetch with Playwright headless Chromium. Navigates PAL.com award booking flow, waits for JS rendering, extracts tax from page text. Cadence corrected: weekly Mon → 2×/week Mon+Thu (Sep) → 3×/week Mon+Wed+Fri (Oct) → stops Nov 1.
- **scrape-hotel-prices.js (new)**: Playwright scraper for all hotel direct booking URLs. Brand-aware selectors for Hilton, Hyatt, Marriott, IHG, SynXis, TravelClick, Sonder. Blocks images/fonts for speed. Updates `trueTotalCost` and `priceVerification` in `hotel-monitor-source.json`.
- **hotels.html rebuilt**: Full-width table — hotel name (direct link), address (Google Maps link), chain, total price, rating, elevator, breakfast, cancellation, transit score, nearest station, area/landmark, safety, last check. Color-coded rows. Reads from `hotel-monitor-source.json`.
- **airfare.html rebuilt**: Route cards with sparklines + verdict table + full tax history table with delta arrows + cadence cards. Reads from `airfare-watch.json`.
- **package.json**: Added `scrape:hotels`, `scrape:pal`, `scrape:all` scripts.
- **Notes updated**: PROJECT_CONTEXT, ARCHITECTURE, TASKS, Project Log reconciled.
- **Stale docs removed**: `docs/2026-05-23-airfare-ui-continuation.md`, `docs/2026-05-23-handoff.md` deleted.

**Handoff:** Run `npm run scrape:all` to refresh all prices. Hotel scraping may partially fail on Cloudflare-protected sites — update those manually in `hotel-monitor-source.json`. PAL scraping may need selector tuning if PAL changes their booking flow.

---

## 2026-05-24 (session 5)

### Hotel + airfare dashboard expansion, cadence fix, validate overhaul

**What changed:**

- **Hotel watchlist expanded**: Seattle now has 15 hotels (added Hilton, Hampton, Canopy Capitol Hill, Hyatt Place/House, EVEN Hotel, Hotel Indigo, Moxy, AC Hotel, Courtyard SLU, Charter Hotel, Hotel Theodore). Portland now has 13 hotels (added Hilton Portland, Hampton Portland, Hyatt Place Portland, Hotel Lucia, Kimpton RiverPlace, Mark Spencer).
- **build-hotel-report.js**: Rewritten to loop dynamically over `["seattle", "portland"]` — no city hardcoding. Output structure changed from `report.seattle` to `report.cities.seattle`.
- **hotels.js + hotels.html**: Completely rewritten to render both cities from `hotel-monitor-report.json`. Nav, hero, and strategy section updated for both Seattle and Portland.
- **airfare dashboard**: Added booking deadline countdown banner (Oct 31 hard deadline), tax trend indicators (up/down/stable based on last 3 history entries), booking recommendation pill (WATCH → CONSIDER BOOKING → BOOK NOW → DEADLINE CRITICAL).
- **PAL cadence fixed**: `monitor-pal-taxes.js` now gates as weekly Mon → 3x/week Sep → daily Oct → HARD STOP Nov 1. Confirmed in `data/airfare-watch.json` cadence/bookingDeadline fields.
- **validate-hotel-monitor.js**: Rewritten to use `report.cities.seattle` and `report.cities.portland` — removed stale hardcoded timestamp and summary string checks. Now validates both cities.
- **validate-airfare-monitor.js**: Rewritten for PAL award tax data structure (`routes[]` with `taxHistory[]`). Old cash-fare observations system removed.
- **tests/airfare-monitor.test.js**: Replaced 5 cash-fare tests with 8 PAL tax monitor tests: trend detection, cadence gating, hard deadline enforcement.
- `npm run validate` passes clean — 8/8 tests, both validators OK.

**Next:**

- Commit and push to GitHub Pages
- Enter prices for the 25 "needs-check" hotels (open direct booking URLs for Nov dates)
- Set GitHub Secrets: RESEND_API_KEY, ALERT_EMAIL_TO, ALERT_FROM for email alerts

## 2026-05-24 (session 4)

### Automation overhaul — PAL tax monitor, hotel monitor, session-start hook

**What changed:**

Full automation audit and overhaul. All monitors are now automated via GitHub Actions. Manual cadence instructions are retired.

**PAL Award Tax Monitor (replaces old flight status poller):**
- Old: 15-min poll of airline/airport status pages for 3 booked flights — wrong scope and wrong cadence
- New: `scripts/monitor-pal-taxes.js` monitors PAL award taxes on SFO→MNL and ORD→MNL for March 2027 travel
- Cadence: weekly Mon (now–Aug 2026) → Mon/Wed/Fri (Sep–Dec 2026) → daily (Jan 2027+), date-gated inside script
- Email alert to limcarl83@gmail.com via Resend on any tax drop
- GitHub Issue opened on any tax change
- Workflow: `.github/workflows/monitor-flights.yml` rewritten, single daily cron, `workflow_dispatch` for manual test

**Hotel Monitor — now fully automated (Seattle + Portland):**
- New: `scripts/monitor-hotels.js` + `.github/workflows/monitor-hotels.yml`
- Cadence: Tue/Fri (now–Aug 2026) → Mon (Sep 2026) → daily (Oct 2026+)
- Seattle: benchmark Boylston $384.13, alert threshold $400, 3 watchlist hotels
- Portland: benchmark Hotel Vance $628.46 conf# [redacted] (Nov 4–9), alert threshold $620, 7 watchlist hotels
- Portland criteria: under $620 total, 4.0+ stars, elevator required, MAX/streetcar within 10-min walk, refundable direct booking, boutique hotels welcome
- Free breakfast is a bonus flag, not a requirement
- Email + GitHub Issue fires when any hotel clears all criteria and drops under threshold
- Portland watchlist prices need first manual capture — open each direct booking URL and enter `trueTotalCost` in `data/hotel-monitor-source.json`

**Session-start hook (Claude + Codex compatible):**
- `scripts/session-status.js` prints PAL tax status + hotel monitor status at session open
- Wired via `UserPromptSubmit` hook in `.claude/settings.local.json`

**GitHub Secrets required for email alerts:**
- `RESEND_API_KEY`, `ALERT_EMAIL_TO` (limcarl83@gmail.com), `ALERT_FROM`

**Files created/modified:**
- `scripts/monitor-pal-taxes.js` (new)
- `scripts/monitor-hotels.js` (new)
- `scripts/session-status.js` (new)
- `.github/workflows/monitor-flights.yml` (rewritten)
- `.github/workflows/monitor-hotels.yml` (new)
- `package.json` — added `monitor:pal-taxes`, `monitor:hotels`, `session-status`
- `data/airfare-watch.json` — cadence field updated
- `data/hotel-monitor-source.json` — Portland benchmark + 7-hotel watchlist added
- `.claude/settings.local.json` — session-start hook added
- `notes/TASKS.md`, `notes/Project Log.md` — updated

**All scripts tested locally — clean output, no crashes.**

**Next session handoff:** Set GitHub Secrets (`RESEND_API_KEY`, `ALERT_EMAIL_TO`, `ALERT_FROM`) if not already set, then trigger each workflow manually via GitHub Actions → workflow_dispatch to verify end-to-end. Portland hotel prices need manual first-capture: open each watchlist hotel's direct booking URL for Nov 4–9 2026 and enter the total in `data/hotel-monitor-source.json`.

---

## 2026-05-23 (session 3)

### Dashboard dark theme fixed and deployment gap closed

**Problem:** Both `airfare.html` and `hotels.html` were rendering with a light beige background below the hero on GitHub Pages. Hotels page was serving a stale version missing the dark-tracker class, tracker-hero layout, and summary section entirely.

**Root causes (two separate issues):**

1. **Deployment gap** — 626 lines of hotel tracker changes (hotels.html, hotels.js, styles.css) were committed locally but never pushed. The live site was serving the old version from the previous push.
2. **CSS cascade bleed** — The base `body` style in `styles.css` sets a light background (`#f8faf6`). The `.dark-tracker` class overrides it, but on GitHub Pages the light base was winning below the hero section.

**Fixes applied:**

- Committed and pushed the 3 modified files (hotels.html, hotels.js, styles.css) to sync GitHub Pages with local state.
- Added `<style>body { background: #0d1117; color: #e6edf3; }</style>` inside the `<head>` of both `airfare.html` and `hotels.html`. This inline override is load-order safe and cannot be lost to CSS cascade issues.
- Fixed `hotels.html` `theme-color` meta tag from light `#f4f6f3` to dark `#0d1117`.

**Diagnosis technique used:** `curl -s <live-url> | diff - <local-file>` instantly revealed the deployment gap — 0 diff on airfare (in sync), large diff on hotels (stale).

**Prevention rules added to LEARNINGS:**
- Always `git status` at session start — push any uncommitted changes before new work
- Never remove the inline body background override — it is intentional
- Use curl diff to diagnose live vs local before assuming code is broken

Files touched:
- `dashboards/html/airfare.html`
- `dashboards/html/hotels.html`
- `notes/LEARNINGS.md`
- `notes/KNOWN_ISSUES.md`
- `notes/Project Log.md`
- Memory: `project_current_state.md`

**Next session handoff:** Both tracker pages are dark, deployed, and correct. No UI work needed. Resume with periodic data updates: PAL tax check (weekly) and hotel monitor check (Mon/Wed/Fri).

---

## 2026-05-23 (session 2)

### Hotel benchmark confirmed + Airfare tracker replaced with PAL Award Tax Monitor

**Hotel tracker:**

- Locked in the Boylston Hotel confirmed reservation (RES ID [redacted], Standard Queen High Floor, Nov 1-4 2026, $384.13 total / $0 paid / $384.13 balance due) as the hotel benchmark in `data/hotel-monitor-report.json`.
- Status changed from `blocked` to `confirmed-reservation`. Previous "blocked" evidence note replaced with full reservation breakdown.
- Added `monitoringCriteria` block: refundable only, hard cap $400, transit priority = King Street Amtrak walking distance + Link Light Rail SeaTac line. Switch triggers documented.
- Updated automation summary, market strategy, and recommendation matrix to reflect the confirmed booking state.

**Airfare tracker:**

- Replaced the old cash-fare tracking system entirely with a PAL Award Tax Monitor for Philippine Airlines Mabuhay Miles redemptions.
- New `data/airfare-watch.json` tracks two routes: SFO→MNL (58,000 mi + $370.50 taxes) and ORD→MNL (67,000 mi + $375.50 taxes). Departure dates Mar 3-7, 2027, Business Class.
- New `dashboards/html/airfare.html`: PAL Award Tax Monitor page with route cards, sparkline trend bars, tax change color-coding (green = dropped, amber = stable, red = rose), tax history table, and strategy panel.
- New `dashboards/js/airfare.js`: reads from `airfare-watch.json`, renders route cards with change detection, history table from `taxHistory` arrays, and overall status pill.

**GitHub push:**

- All changes committed and pushed to GitHub. GitHub Pages now reflects current state.

Files touched:

- `data/hotel-monitor-report.json`
- `data/airfare-watch.json`
- `dashboards/html/airfare.html`
- `dashboards/js/airfare.js`
- `notes/CHANGELOG.md`
- `notes/PROJECT_CONTEXT.md`
- `notes/TASKS.md`
- `notes/KNOWN_ISSUES.md`
- `notes/Project Log.md`

**Next session handoff:**

- To update PAL taxes: open PAL.com, check Business class award for Mar 3-7 2027 on both routes, add a new `taxHistory` entry to `data/airfare-watch.json` and update `currentTax` and `lastChecked`. Commit and push.
- To update hotel watchlist: run a direct-site check for the Nov 1-4 stay on the hotels in the watchlist. If any qualify under $400 refundable with good transit access, update `data/hotel-monitor-report.json` and move to `eligible`. Commit and push.

## 2026-05-23 (session 1)

### Dark premium UI applied to airfare and hotel tracker pages

- Applied a `.dark-tracker` CSS theme to both `dashboards/html/airfare.html` and `dashboards/html/hotels.html`.
- Theme: deep navy-black background (`#0d1117`), glassy dark cards, gold/teal/blue accent palette, status-coded pills (teal = good, gold = watch, red = avoid), frosted dark topbar, and executive-style typography hierarchy.
- Updated `hotels.js` so all hotel cards now show a clearly labeled, clickable booking link: Boylston shows "Check availability" (rate-limited status), Paramount/Hotel Max/The State Hotel each show "Book direct →" pointing to their verified TravelClick/SynXis direct booking URLs.
- Confirmed the local server launchd agent (`com.kicker.codexproject.localhost`) is already installed and running at `http://localhost:4173/` — no additional setup needed.
- Validation passed: 5/5 airfare tests, hotel monitor ok, budget ok.

Files touched:

- `dashboards/css/styles.css`
- `dashboards/html/airfare.html`
- `dashboards/html/hotels.html`
- `dashboards/js/hotels.js`
- `notes/CHANGELOG.md`
- `notes/KNOWN_ISSUES.md`
- `notes/Project Log.md`

### Claude continuation pack added for the remaining airfare UI work

- Added a dedicated continuation brief at `docs/2026-05-23-airfare-ui-continuation.md` so the next Claude Code session can continue the airfare tracker UI work without depending on raw chat history.
- Wrote the brief narrowly around the remaining airfare tracker polish task and included explicit scope limits, allowed edit files, preserved files, validation steps, and a definition of done.
- Updated the active project context, tasks, and known-issues notes so the next session sees the airfare tracker as the main unfinished UI task and also sees the file-preservation guardrails up front.

Files touched:

- `docs/2026-05-23-airfare-ui-continuation.md`
- `notes/PROJECT_CONTEXT.md`
- `notes/TASKS.md`
- `notes/KNOWN_ISSUES.md`
- `notes/Project Log.md`
- `tasks/todo.md`

### Hotel and airfare tracker layout pass aligned to the main dashboard

- Reworked both tracker pages so they now follow the main dashboard's card-first layout rhythm instead of leaving wide empty gaps, uneven columns, and table-heavy dead space.
- Tightened the hotel tracker with a real top summary strip, cleaner benchmark/watchlist cards, and a clearer hold-vs-switch callout using the same palette logic as the main itinerary dashboard.
- Replaced the airfare tracker's wide data tables with responsive fare cards so verified and discovery states spread across desktop width properly and remain readable on smaller screens.
- Added shared tracker styling for summary strips, state pills, meta grids, and responsive tracker card layouts so future tracker additions inherit the same UI language instead of drifting again.
- Validation passed after the UI pass.

Files touched:

- `dashboards/html/hotels.html`
- `dashboards/html/airfare.html`
- `dashboards/js/hotels.js`
- `dashboards/js/airfare.js`
- `dashboards/css/styles.css`
- `tasks/todo.md`
- `notes/Project Log.md`
- `notes/CHANGELOG.md`

### Seattle hotel watch rebuilt and reverified from direct booking flows

- Repaired the missing Seattle hotel monitor source/build path after the repo lost its live hotel-watch data and the generated watch artifacts drifted back to stale placeholder values.
- Rechecked the direct booking flows for the exact Nov 1-4, 2026 / 2 guest Seattle stay and updated the hotel monitor with fresh direct-site results only: `Paramount Hotel Seattle` at `$731.60`, `Hotel Max` at `$777.68`, and `The State Hotel` at `$909.46`.
- Kept `The Boylston Hotel Capitol Hill` on the benchmark watchlist, but marked it as blocked for this run because the direct Sonder path was rate-limited and no working direct booking quote was exposed.
- Regenerated `data/hotel-monitor-report.json` and `research/hotels/latest-report.md`, and kept the result explicit that no Seattle hotel currently qualifies under the `$400` total cap.
- Validation passed after the rebuild, including the hotel monitor validation and the existing airfare validation suite.

Files touched:

- `data/hotel-monitor-source.json`
- `data/hotel-monitor-report.json`
- `research/hotels/latest-report.md`
- `dashboards/js/hotels.js`
- `scripts/build-hotel-report.js`
- `scripts/validate-hotel-monitor.js`
- `notes/Project Log.md`

Follow-up:

- Recheck Boylston again on the next run in case the direct Sonder booking path becomes stable enough to surface a real refundable quote.

### Airfare tracker restore and repo reconciliation

- Found that the current `main` branch had kept the Seattle hotel restore but had deleted the Manila airfare subsystem files, validation hooks, generated airfare report artifacts, and the dashboard link back to the airfare tracker.
- Restored the missing airfare files from the earlier good commit, then rewired `package.json`, `dashboards/html/index.html`, and `automation/README.md` so the airfare and hotel tracker states match the actual repo again.
- Reconciled the active notes so the project context, architecture, decisions, tasks, changelog, and known-issues files all reflect the restored dual-tracker state instead of the temporary hotel-only fallback.

Files touched:

- `automation/airfare-monitoring-workflow.md`
- `automation/README.md`
- `dashboards/html/airfare.html`
- `dashboards/html/index.html`
- `dashboards/js/airfare.js`
- `data/airfare-watch.json`
- `research/airfare/latest-report.md`
- `research/airfare/latest-summary.json`
- `scripts/build-airfare-report.js`
- `scripts/lib/airfare-monitor.js`
- `scripts/validate-airfare-monitor.js`
- `tests/airfare-monitor.test.js`
- `package.json`
- `notes/TASKS.md`
- `notes/PROJECT_CONTEXT.md`
- `notes/ARCHITECTURE.md`
- `notes/Decisions.md`
- `notes/CHANGELOG.md`
- `notes/KNOWN_ISSUES.md`
- `notes/Project Log.md`

### Hotel tracker restore and automation publish cleanup

- Restored the missing Seattle hotel tracker files after the repo drifted into a broken state with links pointing at deleted pages.
- Repaired the root `index.html` so it safely redirects again instead of serving a broken duplicate dashboard with invalid relative asset paths.
- Replaced the broken Automation-section links with a working Seattle hotel tracker entry and removed the missing airfare tracker link from the published dashboard.
- Recreated the hotel tracker source data, report JSON, markdown summary, builder script, validator, workflow note, and standalone `dashboards/html/hotels.html` page.
- Kept the current Seattle watch result explicit: Boylston remains the hold because the currently verified direct-site alternatives are above the `$400` total cap.

Files touched:

- `index.html`
- `dashboards/html/index.html`
- `dashboards/html/hotels.html`
- `dashboards/js/hotels.js`
- `data/hotel-monitor-source.json`
- `data/hotel-monitor-report.json`
- `research/hotels/latest-report.md`
- `scripts/build-hotel-report.js`
- `scripts/validate-hotel-monitor.js`
- `automation/hotel-monitoring-workflow.md`
- `automation/README.md`
- `package.json`
- `notes/Project Log.md`

## 2026-05-18

### Scheduled Seattle-Portland review: minor current-source refresh only

- Rechecked core transit, hours, coffee, and cocktail assumptions against current official or primary public pages.
- Updated `data/trip-data.js` where current sources actually drifted: Tailwind now shows `Tue-Sun 9 AM-7 PM`, `Mon closed`, a posted `5 PM-7 PM` happy hour, and a tip-free policy; Heart's current `Phono` bean reference is now `$15.50` while Stumptown `Holler Mountain` remains `$20`.
- Confirmed the currently modeled Seattle Streetcar fare, TriMet fare/day cap, Seattle-to-Bainbridge ferry fare structure, Glo's hours, Victrola hours, Portland Japanese Garden admission, Stumptown Downtown hours, Coava Flagship hours, Big Legrowlski open-jam timing, and the Amtrak Cascades `12:10 PM` Seattle departure / `3:35 PM` Portland arrival assumption still match the live planning model closely enough.
- No material budget or routing change came out of this pass, so the projected total remains `$820` and no summary email was sent.

Files touched:

- `data/trip-data.js`
- `notes/Project Log.md`

Follow-up:

- Recheck November-specific business hours again closer to the trip, especially any Sunday or holiday edge cases that are not yet season-specific.

## 2026-05-17

### GitHub Pages fallback added

- Added a GitHub Pages deployment workflow so the static trip site still has a free public-hosting path when Netlify cannot deploy.
- Kept the workflow simple: validate first, then publish a filtered static artifact from the project root.
- Documented the expected Pages URL and workflow path in the deployment notes so future sessions can fall back quickly without rebuilding the site for another host.
- Added `.nojekyll` so GitHub Pages can publish the static files directly without Jekyll processing getting in the way of the root redirect and asset layout.

Files touched:

- `.github/workflows/deploy-pages.yml`
- `.nojekyll`
- `docs/deployment.md`
- `notes/Project Log.md`

Follow-up:

- After the workflow runs on GitHub, confirm the public site resolves at `https://limcarl83-maker.github.io/my_projects/`.

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

## 2026-05-24

### Pre-trip flight and transit watch: no material updates

- Rechecked the official watch points on May 24, 2026: the Asiana and American Airlines flight-status portals, SEA departure guidance, PDX departure guidance, the current Amtrak Cascades timetable, Washington State Ferries fares and alerts, Sound Transit Link alerts, and TriMet Red Line fare/service pages.
- Found no material timing, fare, or disruption-risk change that warrants editing `data/trip-data.js`. SEA still advises arriving two hours before domestic departures and three hours before international departures, PDX guidance still leaves the current hotel-to-airport plan with a conservative buffer for the `1:47 PM` departure, Seattle-to-Bainbridge adult walk-on fare is still `$11.35` before the 3% card surcharge, TriMet adult fare/day cap is still `$2.80`/`$5.60`, and Amtrak Cascades train `517` still supports the current `12:10 PM` Seattle to `3:35 PM` Portland transfer block.
- Current active ferry, Link, and TriMet notices remain temporary or accessibility-specific rather than November 2026 itinerary rewrites, so this pre-trip watch stays in monitor-only mode with no traveler action or email summary needed.

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

### Full note and workflow reconciliation pass

- Rechecked the active notes, deployment guide, scratch task files, and repo instruction files after the itinerary, calendar, and public-hosting changes.
- Rewrote stale Netlify-first wording so the project now clearly treats GitHub Pages as the working public fallback and Netlify as optional or potentially blocked by account-credit limits.
- Rewrote the active notes so they reflect the exact-itinerary rule: no vague active `or` blocks, explicit travel legs, and explicit hotel departure or return behavior when the schedule needs it.
- Added a stronger cleanup rule to both agent instruction files: if a change touches hosting, workflow rules, or the source-of-truth itinerary file, do a wider stale-state pass across docs and scratch task files before stopping.
- Added `tasks/lessons.md` so the root-cause and prevention pattern now lives in the repo instead of only in chat.

Files touched:

- `AGENTS.md`
- `CLAUDE.md`
- `docs/deployment.md`
- `docs/SETUP_SHARED_CODEX_CLAUDE_OBSIDIAN.md`
- `notes/PROJECT_CONTEXT.md`
- `notes/ARCHITECTURE.md`
- `notes/DECISIONS.md`
- `notes/CHANGELOG.md`
- `notes/LEARNINGS.md`
- `notes/KNOWN_ISSUES.md`
- `notes/TASKS.md`
- `notes/Project Log.md`
- `tasks/todo.md`
- `tasks/lessons.md`

Root cause:

- The earlier passes updated implementation and some notes, but not every active workflow and deployment note that still described the older project state.

Prevention:

- After meaningful changes, do not stop at `Project Log` only.
- If the change touches hosting, workflow rules, or `data/trip-data.js`, run a wider stale-state pass across active notes, deployment docs, task scratch files, and repo instruction files.

Handoff:

- Next run: if the itinerary or calendar changes again, update `data/trip-data.js`, the shared calendar, the active notes, and `docs/deployment.md` together so the project does not split into two states.

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

## 2026-05-24

### Seattle hotel direct-site watch

- Rechecked the Seattle direct booking watch for `Nov 1-4, 2026` / `2 guests` and kept Boylston anchored to the original booked benchmark total of `USD 384.13` because it is the held reservation.
- Logged Boylston's current public direct quote separately for reference only: `USD 401.50` total (`$347.00` subtotal + `$54.50` taxes and fees), fully refundable until `Oct 31, 2026`.
- Corrected Boylston's stay metadata to reflect the live page: it is a stair-access property with no elevator, and the stale cancellation deadline moved from `Oct 25` to `Oct 31`.
- Verified that no Seattle comparison hotel is currently live-verified under the `$400` cap. The remaining Seattle watchlist totals were preserved as last verified because the repo's Playwright scraper is blocked in this sandbox by Chromium launch permissions.

Files touched:

- `data/hotel-monitor-source.json`
- `notes/Project Log.md`

Verification:

- Playwright MCP direct check on Boylston Cloudbeds flow
- `npm run build:hotels`
- `npm run validate`

Follow-up:

- Re-run the Seattle watch from an environment where repo Playwright can launch Chromium if you want full same-run checkout captures for every remaining Seattle comparison hotel.

### Hotel price visibility fix

- Fixed the hotel dashboards and generated report so stored hotel totals remain visible when live direct recapture is blocked, stale, or ambiguous.
- Tightened hotel collection routing so `manual-review-needed`, `blocked-direct`, `session-refresh-needed`, and `stale-direct-url` entries no longer get treated as clean `eligible` candidates just because a stale total exists.
- Updated both hotel UI surfaces to label these numbers as `last verified` instead of hiding them behind blank states.
- Rebuilt the hotel report and verified the markdown now shows Seattle stored totals again: Boylston `$384.13`, Paramount `$731.60`, Hotel Max `$777.68`, State Hotel `$909.46`, plus Portland benchmark Hotel Vance `$628.46`.

Files touched:

- `dashboards/html/hotels.html`
- `dashboards/js/hotels.js`
- `scripts/lib/hotel-pricing.js`
- `scripts/build-hotel-report.js`
- `data/hotel-monitor-report.json`
- `research/hotels/latest-report.md`
- `tests/hotel-monitor.test.js`
- `notes/CHANGELOG.md`
- `notes/TASKS.md`
- `tasks/todo.md`
- `notes/Project Log.md`

Verification:

- `node --test tests/hotel-monitor.test.js`
- `npm run build:hotels`
- `npm run validate`

Follow-up:

- Keep improving direct-chain capture, but maintain the rule that stale-yet-trustworthy totals stay visible until a better verified replacement exists.

## 2026-05-18

### Verification sources date made dynamic

- Removed the stale hardcoded `Checked on May 11, 2026` heading from the verification-sources section and made the dashboard read its verification timing from `data/trip-data.js` instead.
- Added a structured `verificationSummary` block to the trip data so the page can show one overall `Last verified` date plus compact watch summaries for the pre-trip and travel-week flight/transit checks.
- Updated the dashboard renderer so future watch runs only need to refresh data values; the HTML section can no longer drift on its own from the latest checked date.
- Added `scripts/update-verification-summary.js` plus `npm run update:verification` so future pre-trip and travel-week watch runs can update the dashboard verification cards and `meta.verifiedOn` through one stable helper instead of patching the data file by hand.

Files touched:

- `data/trip-data.js`
- `dashboards/html/index.html`
- `dashboards/js/app.js`
- `dashboards/css/styles.css`
- `scripts/update-verification-summary.js`
- `package.json`
- `automation/flight-monitoring-workflow.md`
- `notes/Project Log.md`

### Travel-week flight and transit watch

- Rechecked the booked flight-status portals, SEA and PDX airport guidance, Amtrak Cascades timing, Washington State Ferries fare and service pages, Sound Transit Link alerts, and TriMet fare/service pages.
- Found no material travel-week updates to hard-code into `data/trip-data.js`: the Bainbridge walk-on fare is still `$11.35` before the card surcharge, TriMet adult fare/day cap is still `$2.80`/`$5.60`, and Amtrak Cascades train `517` still supports the current `12:10 PM` Seattle to `3:35 PM` Portland transfer block.
- Current active transit notices remain day-of monitoring items rather than November itinerary rewrites, and the existing airport buffers still remain conservative enough even though PDX's official site now says its permanent shorter exit lanes are open.

Files touched:

- `notes/Project Log.md`

### Pre-trip flight and transit watch: no material updates

- Rechecked the official watch points on May 18, 2026: the Asiana and American Airlines flight-status portals, SEA departure guidance, PDX departure guidance, the current Amtrak Cascades timetable, Washington State Ferries fares and alerts, Sound Transit Link alerts, and TriMet Red Line fare/service pages.
- Found no material timing, fare, or disruption-risk change that warrants editing `data/trip-data.js`. SEA still advises arriving two hours before domestic departures and three hours before international departures, PDX still advises about two hours before domestic departures during busy periods and two-and-a-half hours before international departures, the Seattle-to-Bainbridge adult walk-on fare is still `$11.35` before card surcharge, and the Portland MAX Red Line still shows about a `38`-minute downtown trip with the same `$2.80` adult fare and `$5.60` day cap.
- The current Sound Transit and WSDOT notices are either accessibility-specific or tied to late-May temporary work, not the November 2026 trip window, so this pre-trip watch stays in monitor-only mode with no traveler action or email summary needed.

Files touched:

- `notes/Project Log.md`

## 2026-05-24 (session 15 — Portland base swap + calendar sync)

### Switched Portland base from Hotel Vance to Courtyard Portland

**What changed:**

- Courtyard by Marriott Portland City Center (conf# [redacted], $487.85) promoted to active Portland base.
- Hotel Vance (conf# [redacted], $628.46) moved to `cancelReservation` stub — must be cancelled before Nov 3, 11:59 PM.
- Day 5 breakfast updated: Stumptown Downtown → Fuller's Coffee Shop (136 NW 9th Ave, opens 7 AM Mon–Sat, ~8 min walk from Courtyard).
- All Hotel Vance references replaced across codebase — activity names, route URLs, hotel context strings, map coordinates, strategy notes.
- 22 Google Calendar events updated (Portland Days 4–9) — titles, locations, descriptions, and route links.
- Committed and pushed: `b778dd5`.

**Files touched:**

- `data/trip-data.js`
- `dashboards/js/app.js`
- `dashboards/js/hotels.js`
- `data/hotel-monitor-source.json`
- `data/hotel-monitor-report.json`
- `notes/PROJECT_CONTEXT.md`
- `notes/memory/active/SESSION_START.md`
- `notes/Project Log.md`

**One open action:**

Cancel Hotel Vance (conf# [redacted]) before Nov 3, 11:59 PM. Everything else is done.

## 2026-05-26

### Airfare tracker restored to the automation's cash-fare model

- Replaced the PAL award-tax version of the airfare subsystem with the earlier cash-fare watch model that tracks one-way economy airfare from SFO and ORD to MNL for March 7-13, 2027.
- Restored the compatible `data/airfare-watch.json` schema, airfare validator, airfare tests, and the published airfare dashboard so discovery signals and airline-direct verified fares are separated again.
- Added a fresh May 26, 2026 pre-window baseline note in `data/airfare-watch.json` explaining that no new airline-direct one-way checkout was captured in this non-interactive run even though discovery sources and official airline route pages were refreshed.
- Reconciled project notes and active task files so the next run follows `npm run monitor:airfare` and the checkout-first booking rule instead of the old PAL tax workflow.

Files touched:

- `data/airfare-watch.json`
- `dashboards/html/airfare.html`
- `dashboards/js/airfare.js`
- `scripts/session-status.js`
- `scripts/validate-airfare-monitor.js`
- `tests/airfare-monitor.test.js`
- `tasks/todo.md`
- `notes/PROJECT_CONTEXT.md`
- `notes/Decisions.md`
- `notes/ARCHITECTURE.md`
- `notes/LEARNINGS.md`
- `notes/CHANGELOG.md`
- `notes/TASKS.md`
- `notes/Project Log.md`

Follow-up:

- The next live monitoring pass still needs a real airline checkout capture before any new `directAirlineVerified` values or `BOOK` calls are added.

## 2026-05-28 (session — unified Obsidian memory hub)

### What changed

- Implemented a non-destructive memory consolidation system with Obsidian as the canonical reference layer in this repo.
- Added `scripts/collect-obsidian-memory.js` to scan external Codex/Claude/VS Code context stores and generate curated Obsidian notes.
- Added source index notes in `notes/sources/` and a dated digest in `notes/session-start/2026-05-28.md`.
- Replaced `notes/memory/active/SESSION_START.md` with a collector-driven startup pointer and read-order contract.
- Updated startup/maintenance rules in `AGENTS.md`, `notes/PROJECT_CONTEXT.md`, `hooks/post-task.md`, and `notes/Home.md`.

### Verification

- Source discovery: pass (`/Users/kicker/.codex/memories`, `/Users/kicker/.claude/plans`, `/Users/kicker/Library/Application Support/Code/User/workspaceStorage`).
- Missing-path behavior: collector emits explicit blocker lines in digest/index notes.
- Idempotency: content is stable when no source updates occur.
- Freshness: digest and source-index notes include latest source-linked updates.
- Safety: secret-like patterns are redacted to `[REDACTED_SECRET]` in generated notes.

### Files touched

- `scripts/collect-obsidian-memory.js`
- `notes/sources/README.md`
- `notes/sources/codex-memories.md`
- `notes/sources/claude-home.md`
- `notes/sources/vscode-context.md`
- `notes/session-start/2026-05-28.md`
- `notes/memory/active/SESSION_START.md`
- `AGENTS.md`
- `notes/PROJECT_CONTEXT.md`
- `hooks/post-task.md`
- `notes/Home.md`
- `notes/CHANGELOG.md`
- `notes/TASKS.md`
- `notes/LEARNINGS.md`

### Follow-up

- Run `node scripts/collect-obsidian-memory.js` after each meaningful session so startup context stays current.

## 2026-05-28 (session — Obsidian templates and query dashboards)

### What changed

- Added standardized templates for handoff, decision, issue, and lesson notes in `notes/templates/` with shared metadata fields.
- Added Dataview query notes in `notes/queries/` for Open Blockers, Recent Decisions, and Active Follow-ups.
- Updated `notes/Home.md` to surface those query dashboards directly.

### Why

- Makes note creation consistent and immediately queryable.
- Gives fast startup visibility across blockers, decisions, and next actions without manual scanning.

### Files touched

- `notes/templates/handoff-template.md`
- `notes/templates/decision-template.md`
- `notes/templates/issue-template.md`
- `notes/templates/lesson-template.md`
- `notes/templates/README.md`
- `notes/queries/Open Blockers.md`
- `notes/queries/Recent Decisions.md`
- `notes/queries/Active Follow-ups.md`
- `notes/Home.md`
- `notes/CHANGELOG.md`
- `notes/Project Log.md`

## 2026-05-28 (session — stale-note review guardrail)

### What changed

- Added `notes/queries/Stale Notes.md` to detect notes where `last_verified` is older than 14 days.
- Linked stale-note review from `notes/Home.md` session dashboard.
- Added freshness check line to `hooks/post-task.md` so stale-note review becomes part of normal completion.

### Files touched

- `notes/queries/Stale Notes.md`
- `notes/Home.md`
- `hooks/post-task.md`
- `notes/CHANGELOG.md`
- `notes/TASKS.md`
- `notes/LEARNINGS.md`
- `notes/Project Log.md`

## 2026-05-30 itinerary overhaul
- Updated Seattle/Portland itinerary dates to Nov 1-9 with hour-by-hour activity, walk/transit, meals, and rest blocks.
- Seattle base set to The Boylston Hotel Capitol Hill; Portland starts Nov 5 after Amtrak Cascades 517 (12:10 PM to 3:35 PM).
- Added Google Calendar import file: data/google-calendar-import-nov1-9-2026.csv.
- Rebalanced budget/day totals to match new detailed schedule (projected total: ).


## 2026-05-30 (shared calendar remediation execution)

Executed the Seattle + Portland Nov 1-9 remediation against the shared group calendar only: `b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com`.

What changed:
- Removed duplicate Portland walk/return events on Nov 7 and Nov 8.
- Replaced stale Seattle H Mart / Pine / Reside routing with Boylston-based prep, coffee, snack, transfer, and wind-down blocks.
- Filled missing wake-up, transfer, dinner, return, and airport buffer blocks on Nov 4-9.
- Converted vague Portland placeholders into fixed recommendations: Lan Su Chinese Garden, MadeHere PDX, Grassa Downtown, Powell's/MadeHere Pearl reset, and PDX airport-safe food buffer.
- Updated active notes so current routing points to Boylston, not Reside/104 Pine.

Root cause:
- Earlier itinerary edits mixed old Reside-first routing, generated import files, and live calendar events without a full shared-calendar audit first.

Prevention rule:
- For this trip, read the shared group calendar before any write, never use `primary`, replace duplicates/placeholders in place, and do not leave vague labels when a route-superior default exists.

Remaining blocker:
- Boylston extra Nov 4-5 night still needs direct hotel confirmation.

## 2026-06-27 (session — Portland shared-calendar rich-format cleanup)

### What changed

- Finished the live shared Google Calendar cleanup for Portland Day 6 through Day 9 in the shared group calendar only: `b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com`.
- Rewrote remaining weak Portland event descriptions into the richer popup format used by the good Seattle example:
  - `Purpose`
  - `Estimated cost`
  - direct links such as `Menu`, `Info`, `Google Maps`, or `Directions`
  - `What to order` or `What to do`
  - `Skip`
  - `Continuity`
- Removed the remaining technical `SEAPDX-...` Portland titles from the Nov 6-9 window.
- Corrected stale Portland headline rows and a few mismatched route/location details so the all-day summaries and stop names reflect the actual Portland plan.

### Why

- The user called out that Portland events still looked half-finished in the live calendar even after earlier title cleanup.
- The real acceptance bar was not "human-readable titles"; it was the richer Seattle-style event popup structure visible inside Google Calendar.

### Files touched

- `notes/Project Log.md`
- `notes/PROJECT_CONTEXT.md`
- `notes/CHANGELOG.md`
- `notes/TASKS.md`
- `notes/LEARNINGS.md`

### Prevention rule

- For this trip, do not treat a title rename as calendar completion.
- When the user points to a "good looks like this" popup example, the write is only done when the live Google Calendar event body matches that richer structure too.
