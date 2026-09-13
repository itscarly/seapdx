# Changelog

## Purpose

This is the concise project change record.

## 2026-09-13 — Arrival flight retime to KE047

- Updated EMR56H arrival routing: OZ702 MNL→ICN now departs 11:45 AM and arrives 4:25 PM; second leg is Korean Air KE047 ICN→SEA, 9:20 PM→2:10 PM, replacing OZ272.
- Shifted Day 1 airport-to-hotel and early evening blocks by the needed margin, regenerated calendar exports, and updated the live Seattle & Portland 2026 calendar flight/arrival events.
- Current projected local spend remains **$2,202.91** against the **$3,050** ceiling, with **$847.09** remaining.

## 2026-08-15 (session 49) — Sleep-ceiling fix, per-stop image sourcing, Day 2/3 route audit, memory consolidation

- **Sleep-ceiling rule** applied: Day 1 (was 8:00 PM start) and Day 2 (was 6:50 PM start) wind-down/sleep blocks split into an evening segment plus a "Sleep" segment that never starts before 10:00 PM, in `trip-data.js` and on the live calendar. Day 3's sleep block (10:15 PM) was already compliant.
- **Per-stop images**: replaced a single generic reused photo across ~17 Day 2 stops with 15 individually-sourced, subject-verified, recent (2022-2024 where available) images from Wikimedia Commons and Pike Place Market's own official vendor directory. Totem Smokehouse and the Pike Place "swings" have no freely-licensed photo available anywhere searched (confirmed via Commons, the live-rendered official vendor page, and Google Images) — kept the generic fallback rather than rehosting copyrighted Instagram/Yelp/Facebook photos.
- **Day 2/3 field-completeness audit**: script-checked every real stop for `route`/`mapFrom`/`mapTo`/`detailText`; fixed 11 stops missing map routes (Best Buy Northgate, Sky View Observatory + Cafe, Ferry to Bainbridge, Harbour Public House, Blackbird Coffee, Return ferry, Hart and the Hunter, Saint John's, Salt & Straw, Menya Musashi).
- Projected total now **$2,909.91** against the unchanged $3,050 cap/ceiling ($140.09 remaining).
- **Memory/notes consolidation**: fixed a broken `MEMORY.md` link (referenced a deleted `feedback_propose_before_executing.md`), indexed 4 previously-unindexed memory files, added `feedback_sleep_ceiling.md` and `feedback_per_stop_image_sourcing.md`, mirrored both into the global Claude auto-memory and pushed to the Obsidian vault via `obsidian-memory-sync.sh push-claude`, ran `graphify --update` (code graph: 456 nodes/819 edges) plus a scoped semantic re-extraction of the 12 changed docs.
- Commit `b8ed434`, pushed to main.
- Full detail: `notes/Project Log.md` (session 49).

## 2026-08-15 (session 47) — Day 1 rebuild + reusable rich-stop schema (image/route-map/safety-badge)

- **Day 1 rebuilt** around the confirmed Asiana arrival (SEA 1:55 PM, confirmation EMR56H) with a 45-min passport/baggage buffer; reordered the evening to H Mart -> Target -> Pike Place Bar & Grill dinner -> Waterfront Park; dropped Pike Place Chowder (closes too early for the new timing); added the real Palihotel reservation (#2434SG190857) and priced purchases at Target/the bar.
- **New reusable per-stop schema**, now the template for Days 2-9: `image` (sized/cropped for content, served from `dashboards/assets/images/`), `mapFrom`/`mapTo` (inline point-to-point Google Maps route embed, no API key), `safetyScore`/`safetyNote` (emoji + % badge backed by sourced research, e.g. SPD/Downtown Seattle Association reporting — never invented).
- Fixed two bugs caught by self-audit: images initially saved to the wrong directory (repo-root `assets/images/` instead of `dashboards/assets/images/`), and a `git add -A` bad pathspec that silently dropped files from a commit.
- Fully resynced the live "Seattle & Portland 2026" Google Calendar for Day 1.
- Full detail: `notes/Project Log.md` (session 47). Repeatable playbook for Days 2-9: `notes/MAINTENANCE.md` ("Day rebuild playbook").

## 2026-08-14 (session 46) — Budget/itinerary edits (flight swap, happy hour, payment audit) + full visual overhaul

- **Trip data**: swapped ORD→MNL flight to direct Philippine Airlines PR133 (was two-leg Korean Air); added Palihotel happy hour (Day 3) and a Day 1 evening Target/H Mart/Truly Hard Seltzer run (moved off the original Day 5 travel-day placement after user pushback); corrected H Mart/Target addresses to the real downtown-Seattle locations, removing invented transit legs; ran a dedicated research subagent to verify credit-card acceptance at every paid stop (found 3 card-only/cashless venues, several cash-backup-recommended) instead of leaving unverified "Cards accepted" claims. All changes validated (`npm run validate`), live Google Calendar resynced, pushed across 4 commits (`e958404`, `15cafc6`, `1c1bcbe`, `1d42591`).
- **Full visual overhaul** (user-authorized departure from the prior "Trip Notebook" flat system, commit `2735eeb`): replaced the single flat ambient shadow with a layered "raised card" 3D elevation system (inset highlights + dual ambient shadow tiers), deepened corner radii site-wide (32/26/18/12px, up from 24/18/12), added a colorful gradient accent cap to every card top edge, deepened hover-lift and added tactile pressed states on buttons/chips. Brought the maps/transit toggle, day-distance pills, and map frame in line with the new system. Fixed a real layout bug where the "Food and drink" budget-breakdown card had no height cap and blew out several times taller than its siblings — capped at 360px with a scrollbar and fade mask. `DESIGN.md` rewritten to document the new elevation/component rules as authoritative, replacing the old "One Lift Rule."
- Verified both `index.html` and `logistics.html` load clean (zero console errors) via browser check before push.

## 2026-08-09 (session 45) — Font-consistency fix, adjustable hero meter, DESIGN.md rewrite, full /impeccable audit (color/radius/font-size → 0 findings)

- Removed 4 unloaded-font (`"Sora"`/`"Manrope"`) overrides in `styles.css` causing silent sans-serif fallback; those elements now match the system-font stack.
- Added a draggable range-input under the "All-in trip target" gradient meter for a live, non-persisted what-if preview.
- Regenerated `DESIGN.md` as a six-section spec and ran the full `/impeccable audit`: fixed bounce-easing, 3 stale hardcoded-teal colors, registered an `#1749db` intentional-color exception, documented 8 micro-tint colors + a 13-step radius scale, and consolidated 79 ad-hoc font-size declarations into a documented 26-step `typography.scale`. Detector confirmed 0 findings.
- Noted the project-local `.claude/skills/impeccable/` detector copy is stale (missing `design-system-font-size`); use the global `~/.claude/skills/impeccable/` copy going forward.

## 2026-08-09 (session 44) — Closed out remaining design-detector color findings (115 → 0)

- Tokenized ~50 hardcoded colors in `dashboards/css/styles.css` that duplicated existing theme tokens, across base `:root`, `.dark-tracker`, and `.trip-home` scopes. Added RGB-channel companion tokens so `rgba(var(--x-rgb), alpha)` could replace literal rgba() values with zero visual change.
- Fixed a broken `side-tab` ignore-config entry from session 43 (malformed value string meant it never worked) and registered ~30 legitimate remaining findings (neutral whites/grays, glassmorphism overlays, one-off dark-tracker gradient shades) as reviewed exceptions in `.impeccable/config.json`.
- Detector confirmed 0 findings post-fix; `npm run validate` and browser check both pass with no regressions. Commit `7b11822`.

## 2026-08-09 (session 43) — Dashboard audit + polish: flight leg direction labels, removed AI-slop patterns sitewide

- Added "Departs"/"Arrives" text labels to flight legs, fixing an ambiguous stacked layout on mobile (≤980px).
- Fixed 3 off-token colors in flight-specific CSS by introducing `--accent-rgb`/`--accent-3-rgb` channel tokens.
- Replaced the `.stop--chip` colored left-border accent (the "side-tab" AI-UI tell) with the existing category-colored timeline-ring marker, preserving DESIGN.md's category-communication requirement without the thick stripe.
- Removed the sitewide decorative grid-line background (`body::before`/`.trip-home::before`).
- Left the `.stop` itinerary timeline's border-left in place — verified it's a genuine rail+dot marker, not a decorative accent, and persisted that call in `.impeccable/config.json`.

## 2026-08-07 (session 40, budget restructure) — Merged Shopping category, folded personal purchases into one capped total

- Combined `budget.projectedTotal` to include both itinerary spend and `tripCosts.plannedPurchases` (previously tracked separately, causing confusion between a $1,296 "planned local spend" figure and a $2,174 "trip cost" figure).
- Merged "Coffee beans" + "Souvenirs" + planned personal purchases (Meta Ray-Ban glasses, Bleu de Chanel perfume) into one "Shopping" category ($860). Tattoo stayed its own category.
- Raised cap and absolute ceiling to $2,500/$2,500 (was $1,250/$1,300), user-set equal, covering everything except confirmed airfare/hotels. New projected total $1,959.35, $540.65 under cap.
- Updated `app.js` (`getPlannedAdditionalTotal`, `renderTripCostSummary`, `buildTripCostBreakdown`, hero/budget copy) and `scripts/audit-budget.js` to match, avoiding double-counting the personal-purchases figure.

## 2026-08-06 (session 39) — Nov 1-9 CSV reconciliation, full live-calendar resync, Cannon Beach timing bug fixes

- Reconciled real Nov 1-5 receipts into `trip-data.js`: corrected ~20 venue costs, added order/menu links, deleted "Sea'd In Capitol Hill dinner", added a $20 QFC seltzer line, split Sky View into ticket + cocktail. Projected local spend: $1,069 → $1,049.35.
- Fixed overlapping Poquitos happy-hour card text (`overflow-wrap` CSS fix) and a $0 Columbia Center Sky View entrance-fee card (stale lookup string in `app.js`).
- Discovered the local calendar sync script never wrote to the live Google Calendar API. Fully resynced all 117 Nov 1-9 events on the live "Seattle & Portland 2026" calendar (132 stale events deleted, 117 recreated), including removing a stale Courtyard by Marriott Portland booking record with explicit user confirmation.
- Fixed two Cannon Beach (Day 6) itinerary data bugs: an unparseable `"TBD"` return-bus time and a boarding time scheduled after its own departure.

## 2026-08-02 (session 38) — Homepage redundancy audit, collapsible sections, budget-card grid fix

- Deleted the redundant "Trip overview" section (duplicated the hero card's all-in target) and merged Executive Summary + Activity Budget into one "Trip cost" section; removed the flat granular budget-category list since the same numbers already live inside the category cards' click-to-expand breakdowns.
- Unified the Trip Cost cards into one 4-column CSS grid with equal heights; fixed a leftover `:last-child` rule that was forcing the Contingency card onto its own full-width row instead of sitting with Local spend vs. cap and Buffer left.
- Added default-collapsed, clearly visible `<details>` toggles to six sections: Trip cost, Day-by-day route, Booked flights, Planning guides, Maps and transit, Utility pages. Anchor links now auto-expand their target section.
- Removed the "Social + Dating" guide tab; merged "Rainy day" and "Packing" into one tab; removed a duplicate `photoOps` data key.
- Reviewed the Reservations tab: only Poquitos Capitol Hill is an actual bookable reservation, flagged to the user.

## 2026-08-02 (session 37) — Full price audit, transportation accuracy, day-trip guides

- Corrected ~20 underpriced itinerary line items (Pike Place snacks, several meals, coffee-bean stops, cocktail bars) against real 2026 menu prices; projected local spend moved from $926 to $1,069.
- Fixed the Transportation budget category, which was stale at $95 while the real itemized transit total is $149; corrected it and added explicit Cannon Beach ($36) and Multnomah Falls ($16) round-trip bus lines to the dashboard breakdown instead of them being silently dropped.
- Added a "Day trip guides" tab with full step-by-step Cannon Beach and Multnomah Falls guides (booking links, departure times, verify-before-booking flags).
- Moved "How This Total Works" into a collapsible chevron on the All-in Target card.
- Corrected stale project-memory notes that had the Portland hotel backwards (said Courtyard was active, Vance should be cancelled — reverse is true) and fixed a code bug in `scripts/session-status.js` that hardcoded a stale hotel total and a Kraken watch item that no longer exists.

## 2026-07-05 (session 33) — GitHub repo rename to `itscarly/seadpdx`

- Renamed the GitHub repository from `itscarly/my_projects` to `itscarly/seadpdx`.
- Updated the local `origin` remote and GitHub About homepage so both point at the new repo and the new GitHub Pages URL.
- Switched the public-site source link in `data/trip-data.js`, then regenerated the calendar export artifacts so every itinerary backlink now targets `/seadpdx/`.
- Reconciled the public docs and active notes so the repo URL and canonical Pages host no longer mention the retired `my_projects` path.

## 2026-07-05 (session 31) — GitHub publish cleanup + doc reconciliation

- Reconciled the active repo docs so the remaining automation path is described consistently as the monthly baseline watch, not a mix of monthly-watch and Kraken-only wording.
- Refreshed the top-level `DESIGN.md` and `PRODUCT.md` docs so they match the accepted compact editorial dashboard instead of older visual experiments.
- Tightened `.gitignore` so local `.claude`, `.obsidian`, and `.impeccable` state no longer pollutes the release worktree.

## 2026-07-05 (session 32) — GitHub repo presentation + hygiene cleanup

- Rewrote `README.md` so the repo homepage now leads with the live GitHub Pages URLs, current trip snapshot, local commands, deploy flow, and operational rules.
- Reframed `docs/deployment.md` around GitHub Pages as the canonical publish path and kept `netlify.toml` documented only as a fallback.
- Removed the tracked `notes/.obsidian` working-state files so the public repo stores project notes instead of editor-state noise.
- Fixed the stale post-task reminder that still said the Kraken watch was the only automation, and corrected `.gitignore` so the tracked lockfile is no longer ignored.
- Updated the GitHub About metadata with a real description, homepage URL, and repo topics.

## 2026-07-05 (session 30) — Maps/transit atlas alignment fix

- Tightened the homepage atlas day-pill sizing and changed the desktop atlas summary from auto-fit wrapping to a stable five-slot row.
- This prevents the Portland atlas from wrapping to an extra pill row and pushing its map lower than the Seattle card.
- Result: the two cards inside `Route shape, walkability, and transit essentials` now align cleanly, with matching summary heights and matching map start lines.
- Verification: `npm run validate` passed; browser metrics at `1440px` showed atlas summary heights of `100px / 100px`, equal map top positions (`733.23px / 733.23px`), and equal atlas card heights (`553.03px / 553.03px`).

## 2026-07-05 (session 29) — One-line itinerary copy + labeled route chips

- Kept the activity-budget headline on one line at desktop width and applied the same desktop one-line treatment to the reported day theme + weather rows where the layout already has room.
- Tightened the homepage flight-board typography and gave each flight journey card a stable internal grid so the arrival and return panels now match height instead of reading as uneven siblings.
- Added visible itinerary-chip labels derived from stop type and keywords, so the open day rows now expose categories such as `Transit`, `Walk`, `Buffer`, `Photo ops`, `Coffee`, `Meal`, `Cocktails`, and `Happy hour`.
- Updated homepage and logistics HTML cache-bust tags to the new `2026-07-05-activity-labels` version.
- Verification: `npm run validate` passed; browser checks at `1440px` confirmed the budget headline, overview subtitle, executive subtitle, and day weather line all render as one line, and both homepage flight cards measured the same height (`708.56px`).

## 2026-07-05 (session 28) — Desktop width rebalance + subtitle single-line fix

- Widened the `.trip-home` content shell and rebalanced the hero columns so the right-side stack reaches further left instead of leaving a large empty center gap.
- Increased the hero fact bullet size and marker size so the four planning bullets read as primary support content rather than tiny footer text.
- Removed the desktop max-width cap from homepage section subtitles and slightly raised their size so overview and executive-summary descriptions finally use the whole row.
- Stopped overview and executive-summary support cards from stretching to match the tallest sibling, which removed the awkward underfilled-card look.
- Verification: `npm run validate` passed; browser checks at `1440px` confirmed both reported subtitles now render on one line and the hero bullet size increased to `16.48px`.

## 2026-07-05 (session 26) — Conservative homepage compaction + reveal fallback

- Tightened only the `.trip-home` override layer in `dashboards/css/styles.css` so the homepage became denser without destabilizing the global visual system.
- Reduced section spacing, card padding, chip/button heights, day-row padding, stop-chip widths, and several secondary type scales by roughly `10-15%`.
- Preserved the existing color direction and overall design language while making the hero, summary, itinerary, flights, guides, maps, and logistics sections scan faster.
- Added eager + timed fallback behavior in `dashboards/js/app.js:initReveal()` so lower `[data-reveal]` cards do not stay invisible when the page is captured, jumped through quickly, or rendered without normal scrolling.
- Verification: `npm run validate` passed, and browser checks passed at `1440px`, `980px`, and `390px` with `hiddenRevealCount: 0`.

## 2026-07-05 (session 27) — Screenshot-guided typography tightening + Photo ops restore

- Reduced the hero title and the homepage all-in target type scales so the right-side amount blocks no longer overpower the layout or break as awkwardly.
- Increased the available copy width for the hero lede and section subtitles so lines stop wrapping early while there is still open space on the row.
- Reduced the overview-card minimum height and summary-value sizing to remove unnecessary blank space inside the four snapshot cards.
- Fixed the `Photo ops` tab by calling `initReveal()` after its cards render; verification showed `guideCards: 4` and `hiddenGuides: 0`.
- Verification: `npm run validate` passed, and desktop browser screenshots confirmed the affected sections now match the reported issues much more closely.

## 2026-07-05 (session 25) — Premium travel dashboard visual redesign: warm, refined, editorial aesthetic

- **Color palette redesign**: warm mist gray background (#f5f4f0, like old travel atlases), forest green primary accent (#1f7b4d, travel authority), muted terracotta secondary (#d4956f, travel categories), Apple-style text hierarchy (#1d1d1f/#6e6e73), subtle borders and refined shadows (0 2px 8px).
- **Route marker visual**: added SVG route line (Seattle → Portland city dots + connector) above hero — minimal, non-decorative signature element that signals travel dashboard.
- **Typography hierarchy**: hero 44-52px weight 700, sections 28-34px weight 600, body 13-15px weight 400-500, labels 11-12px weight 500 (no aggressive sizing).
- **Card system unified**: all cards 18px radius, consistent 1px subtle borders, refined shadows, 24px padding desktop / 16-20px mobile — 5 intentional card types (trip status, metric, anchors, facts strip, base).
- **Hero refinements**: removed decorative blur effects, forest green primary button, refined progress bar (6px height), compact trip anchors 2x2 grid, facts strip with warm accent dots.
- **Button colors**: primary button background changed to forest green (#1f7b4d, not dark gray) — signals travel navigation authority.
- Result: dashboard now feels like premium travel software (Apple Maps/Travel aesthetic) — warm, refined, calm, spatial, not generic admin tool. ✅ npm run validate passes.

## 2026-07-05 (session 24) — Hero + overview redesign: compact responsive single-screen dashboard

- **Removed duplicate navigation**: deleted pill-nav section (.dashboard-panels/.panel-chip), kept single .topbar; frees ~40px vertical space.
- **Restructured hero grid from 2-col to responsive 3-col**: `minmax(0,1.45fr) minmax(320px,.8fr) minmax(280px,.65fr)` on desktop, stacks 2-col on tablet, 1-col on mobile.
- **Simplified hero title**: "Seattle + Portland" (40-52px h1) + "trip dashboard" (16px kicker), drops redundant "trip command center" copy.
- **Consolidated CSS `:root` blocks**: merged 3 separate blocks into 1 unified block (lines 3-61), updated stale warm-cream bg to neutral palette.
- **Compacted All-in trip target card**: padding 22px→16px, added native `<details>` disclosure for FX rates (collapsed by default, chevron rotates on open).
- **Redesigned facts strip**: changed from 2-col card grid to flex row with vertical dividers, removed floating card boxes and decorative dots.
- **3-card overview grid**: removed "Route footprint" 4th card, shortened support text (e.g. "Airfare + hotels" vs long sentence), 3 cards auto-fit minmax(220px,1fr) on all widths.
- **Shrank summary-cards**: min-height 156px→100px, padding 18px→14px, font-size clamped lower.
- **Typography hierarchy**: support text 400-500 weight, card labels 600, All-in target number 700 (the one place boldness is spent).
- **Added responsive media queries**: hero grid and card spacing adjust at tablet (≤1023px) and mobile (≤767px) breakpoints.
- **Consolidated duplicate CSS selectors**: removed 10+ duplicate hero-grid/trip-card/summary-card declarations, deleted stale blocks, unified card radius/border/shadow to one `--radius-card:16px` variable.
- Verification: npm run validate passed; FX disclosure opens/closes; facts strip displays horizontal; 3-card grid responsive.

## 2026-07-05 (session 23) — Dashboard redesign: restore original clarity + confidence

- Diagnosed design degradation after session 21 Impeccable polish: warm cream background (#f6f5f1) + Warm Rust accents + frosted glass cards had replaced original's neutral gray + strong blue + defined white structure.
- Root cause: session 21 applied generic "premium consumer default" palette (warm cream + muted colors + frosted glass blur) that appears on any luxury brand, not grounded in this dashboard's subject matter (travel logistics, clarity, precision).
- **Redesign:** Restored original's structural clarity (neutral gray bg, strong blue accents, solid white cards) while retaining modern Impeccable polish (spacing rhythm, typography hierarchy, refined interactions, motion curves).
- **CSS overhaul** (dashboards/css/styles.css):
  - `--bg: #f6f5f1 → #e5e5e7` (warm cream → neutral gray)
  - `--panel: rgba(255,255,255,0.82) → #ffffff` (semi-transparent → solid white)
  - `--ink: #161714 → #000000` (warm brown → black, +contrast)
  - `--accent: #1667c9 → #0056b3` (original → stronger action blue)
  - `--accent-3: #b46a2c → #0056b3` (removed Warm Rust palette)
  - Removed `backdrop-filter: blur(12px)` from cards (frosted glass eliminated)
  - Changed card borders from barely-visible to defined
  - Fixed `body.trip-home` selector that was blocking color variables with warm gradient
- Verification result: `npm run validate` passed; browser display now shows neutral gray background, solid white cards, black text, strong blue accents — visual clarity and confidence restored.

## 2026-07-05 — Impeccable design polish + formal design system

- Installed and configured the Impeccable design skill to enforce production-grade polish across the dashboard.
- Ran `/impeccable document` to extract the existing design language and formalize it into PRODUCT.md, DESIGN.md, and `.impeccable/design.json` with full design tokens, components, and brand guidelines.
- Polished the Maps section with targeted CSS refinements:
  - Increased transit grid gap from `12px` → `14px` for improved spacing rhythm
  - Increased transit card padding from `16px` → `18px` and added `min-height: 140px` for better visual proportion
  - Enhanced disclosure button with `2px outline` on hover/focus, `2px offset`, and cubic-bezier transitions for smoother interaction feedback
  - Added card-header border-bottom separator (`1px solid`) with proper padding rhythm for visual hierarchy
  - Improved disclosure-body layout with flex column structure, `14px` gaps, and `16px` margin/padding for consistency
  - Applied Warm Rust (#b46a2c) accent color to section labels per design system
- Created design system documentation with:
  - **North Star**: "The Editorial Atlas" – shared-quality, lively, editorial aesthetic
  - **Brand personality**: Energetic minimalism with restrained system-font clarity
  - **Named rules**: One Voice (True Blue ≤10%), One Font (SF Pro only), Frosted Glass (backdrop blur + semi-transparency on cards)
  - **8 colors**, **5 typography scales**, **shadow vocabulary**, **motion curves**, **responsive breakpoints**
- Verification result: `npm run validate` passed; browser audit confirmed all polish metrics (spacing rhythm, typography hierarchy, interaction states, accessibility, contrast, responsiveness).

## 2026-07-04 — Apple-style itinerary dashboard redesign

- Rebuilt the homepage visual system around the Apple-style system font stack and calmer travel-dashboard tokens instead of the mixed imported font/decorative card treatment.
- Widened the hero editorial column so the title and subtitle no longer feel trapped on the left, while the right-side summary cards now align as a cleaner stacked pair.
- Standardized the homepage cards into a tighter shared surface system with lighter borders, subtler shadows, smaller labels, and less billboard-style metric weight.
- Removed the repeated `All-in target` shout from the overview strip and restructured the executive formula into grouped segments plus one explicit total card.
- Repacked the activity-budget and day-route layouts so the grids avoid dead space, the itinerary filters sit with the section heading, and the route chips align more consistently across desktop and mobile.
- Verification result: `npm run validate` passed, and a headless breakpoint sanity check passed at `1440px`, `1024px`, and `390px` with no horizontal overflow.

## 2026-07-04 — Responsive dashboard shell + progressive disclosure

- Reworked the homepage from a long static landing-style page into a denser responsive dashboard with a wider fluid shell and a sticky app-style panel bar.
- Added `Overview`, `Itinerary`, `Budget`, `Guides`, and `Logistics` panel switching so only the active information group stays in the page flow at one time.
- Moved the heavier content behind accessible chevron disclosures, including:
  - trip-cost formula
  - executive budget breakdown cards
  - local budget categories
  - flight detail blocks
  - map/transit blocks
  - guide card details
  - utility cards
- Reworked flight and budget cards so detail expansion is controlled by explicit right-aligned buttons using `aria-expanded` and `aria-controls`.
- Verification result: `npm run validate` passed, and a browser check confirmed the compact overview default, correct panel filtering, working formula disclosure, and a `1376px` main-content width at a `1440px` viewport with no horizontal overflow.

## 2026-06-29 — Git cleanup and local-vault separation

- Removed tracked one-off handoff files, old calendar-update scratch artifacts, and other repo clutter that no longer helps run or maintain the project.
- Stopped tracking local-only `.obsidian` working-state files and local Claude/Codex helper state so Git focuses on the real project source instead of personal editor state.
- Updated `.gitignore` so future local vault/plugin changes stay local by default.
- Rewrote `README.md` so the repo description matches the current static-site workflow, current budget model, and current automation scope.

## 2026-06-29 — Total-target audit view

- Added a plain-language formula block above the executive spend cards so the page now shows exactly how the all-in target is computed: confirmed bookings + planned trip spend + planned purchases.
- Added an explicit note that the lower grouped cards are explanations of that same total, not extra charges stacked on top.
- Called out the Kraken ticket as the main current placeholder so it is easier to see what can be removed later if that game is skipped.

## 2026-06-29 — Price corrections + transport breakout

- Updated the dashboard source data to the new user-provided real prices:
  - Boylston hotel `$504.46`
  - Portland hotel `$391.00`
  - Sky View Sip & Sights `$38`
  - Portland Japanese Garden `$22.50`
  - Amtrak `$29` plus `$19` business-class bid
- Reworked the transportation breakdown so Seattle local transit, the Bainbridge ferry pass, Amtrak, and Portland local transit are now shown as separate lines instead of one lump sum.
- Raised the local spend target from `$1,200` to `$1,250` so the validated plan can carry the corrected prices honestly.
- Verification result: `npm run validate` passes with projected local spend now at `$1,236.50`, leaving `$13.50` before the `$1,250` target and 103 synced calendar events.

## 2026-06-28 — Expandable expense breakdowns + Kraken estimate

- Made the executive spend cards expandable so clicking categories such as `Activities and admissions` reveals the itemized dollar breakdown directly in the board.
- Added a `$120` Seattle Kraken planning estimate for one normal mid-bowl seat and rolled it into the itinerary-backed budget model instead of keeping it as a loose note.
- Updated the Seattle plan, activity totals, and cache-bust tags so the local site and pushed site both pick up the new board behavior immediately.
- Verification result: `npm run validate` passes with projected local spend now at `$1,192`, leaving `$8` under the `$1,200` target, and the calendar export sync now rebuilds 103 itinerary events.

## 2026-06-28 — Planned purchase prices updated

- Updated the planned personal-purchase block in `data/trip-data.js` to the new user-provided prices:
  - Meta Ray-Ban glasses `$409`
  - BLEU DE CHANEL Eau de Parfum 3.4 oz `$173`
- Updated the homepage spend-summary copy in `dashboards/js/app.js` so the board wording matches the current purchases instead of the older Valentino reference.
- Reconciled task and memory notes so the active repo state reflects the new `$582` planned-purchase total.
- Verification result: `npm run validate` passes, including the budget audit and calendar-export sync.

## 2026-06-28 — Monitor-system removal + executive trip-cost summary

- Removed the old airfare, hotel, and itinerary monitor system from the public site and from the active repo workflow.
- Deleted the retired tracker pages, tracker scripts, tracker tests, and scheduled GitHub monitor workflows.
- Reworked the homepage budget model into a two-tier structure:
  - executive all-in trip-cost summary
  - lower local activity-budget summary
- Added canonical confirmed-cost and planned-purchase data to `data/trip-data.js`, including:
  - confirmed airfare `$1,256.83`
  - confirmed hotels `$871.98`
  - Meta Ray-Ban glasses `$409`
  - BLEU DE CHANEL Eau de Parfum 3.4 oz `$173`
- Replaced the old future San Francisco routing with the paid Chicago routing under American Airlines confirmation `YWFKME`.
- Simplified the logistics hub so it now keeps flight detail plus the Kraken-only watch instead of monitor clutter and source-reference sections.
- Reconciled active notes, hooks, and Obsidian-facing maintenance files so the next session starts from the post-monitor repo state instead of the old tracker-era assumptions.

## 2026-06-28 — Itinerary filter cleanup

- Replaced the empty homepage `Cocktails` itinerary filter with `Meals` because the live itinerary no longer contains any `cocktails` stop types.
- Revalidated the site after the UI cleanup and pushed the change to `main`.

## 2026-06-28 — Editorial homepage redesign + logistics hub split

- Rebuilt `dashboards/html/index.html` into a public-facing trip command center with a stronger hero, slimmer summary strip, cleaner day cards, simplified homepage flights, tighter guides, and compact maps/transit support.
- Added `dashboards/html/logistics.html` as the new secondary utility page for deep flight detail, future booked flights, monitoring links, verification watches, and source references.
- Refactored `dashboards/js/app.js` so the homepage and logistics hub share one renderer with page-mode branching instead of separate duplicated logic.
- Activated inline stop-detail panels on the homepage and removed the public itinerary-editing surface from the visible experience.
- Added scoped editorial design overrides in `dashboards/css/styles.css` so the redesign does not break the separate tracker pages.
- Verification result: browser checks passed for homepage, stop-detail interaction, and logistics hub. `npm run validate` now also passes after the trip-data budget repair.

## 2026-06-28 — Trip-data budget reconciliation

- Rebalanced `data/trip-data.js` so `budget.projectedTotal`, category totals, and day totals now all resolve to `$750`.
- Corrected stale day totals for Nov 6, Nov 7, and Nov 8 to match their real item sums.
- Updated stale budget copy that still referenced the older `$880` and `$920` thresholds.
- Repaired the coffee-bean plan so the data now matches the stated two-bag, `$60` cap instead of the older four-bag version.
- Validation result: `npm run validate` passes cleanly again.

## 2026-05-30 — Happy hour optimization + venue additions + closure fixes

Researched 14 new venue candidates; added 10 to open itinerary slots without displacing named anchors.

- **Day 2 (Mon Nov 2):** Luke's Lobster replaces generic lunch (cost +$6); Ghost Alley Espresso + Totem Smokehouse added to Pike Place Market block
- **Day 3 (Tue Nov 3):** Dough Zone Dumpling House replaces ramen/noodles dinner (cost -$2); Rock Box HH note added (Tuesday 4–8 PM: $4/hr room rate)
- **Day 5 (Thu Nov 5):** Luc Lac dinner shifted 7:00 PM→6:20 PM to land inside daily 4–7 PM HH window; orientation walk shortened 60→30 min (saves ~$6 on cocktails)
- **Day 6 (Fri Nov 6):** Portland Aerial Tram ($8.75) + Project Matcha ($9) added after Japanese Garden; Baby Doll Pizza replaces generic dinner (cost -$11 net)
- **Day 7 (Sat Nov 7):** Kingsland Kitchen ($22) replaces generic breakfast; Voodoo Doughnut ($6) added to market walk via Old Town route
- **Day 8 (Sun Nov 8):** **Critical closure fixes:** Heart Coffee Pearl (closed) → Stumptown Downtown; Big Legrowlski (closed Oct 2024) → Mississippi Pizza + Atlantis Lounge (confirmed Sunday live music). Net savings: -$17 from closed-venue replacements
- **Day 9 (Mon Nov 9):** No changes (kept hotel-area breakfast, declined Sincerely Bagel add-on due to routing overhead)

Budget updates:

- New projected total $879.75 (was $888). All day totals rebalanced; budget audit + full validation suite passing
- Calendar exports: JSON/CSV files require manual sync or dedicated regeneration script (secondary to trip-data.js authoritative source)
- Closed venues replaced with equivalent social venues maintaining itinerary spirit + neighborhood routing

## 2026-05-30 — shared calendar remediation

- Remediated the Nov 1-9 Seattle/Portland shared Google Calendar using only `b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415.calendar.google.com`.
- Removed known duplicate Portland route/return events and replaced stale H Mart/Pine/Reside routing with Boylston-based Seattle blocks.
- Converted Portland placeholders into fixed stops: Lan Su Chinese Garden, MadeHere PDX, Grassa Downtown, Powell's/MadeHere reset, and PDX airport-safe food buffer.
- Prevention rule: read the shared calendar first, never write to `primary`, and do not leave vague itinerary labels when a route-superior default exists.

## 2026-05-27 (session 16 — Palihotel added, watchlist trimmed, calendar updated)

- Booked Reside Seattle Downtown (104 Pine St, conf 91912EE022594, $469.81, Nov 1–4). Promoted to `currentReservation` in both JSON files. Boylston moved to watchlist as backup.
- Booked Palihotel Seattle (107 Pine St, conf 73458558745442, $536.59 pay at property, Nov 1–4). Added as `secondReservation` in both JSON files. Cancel by Oct 30, 3 PM.
- Added `reservationStatus` field to seattle city object — red warning in dashboard: "3 ACTIVE SEATTLE RESERVATIONS — cancel 2 before Oct 30."
- Removed 5 low-transit hotels from Seattle watchlist (transitScore ≤ 90): Staypineapple University Inn (83), Maxwell (84), Watertown (86), citizenM South Lake Union (90), Hotel Sorrento (90).
- Remaining watchlist: 4 hotels with transitScore > 90 only (Boylston 99, Warwick 98, Hotel FIVE 100, Mayflower 100).
- Updated `hotels.html` benchmark bar to show cancel deadlines for both reservations and render `reservationStatus` as a red inline warning.
- Updated `data/trip-data.js`: Seattle base rerouted for 104 Pine St / Pike Place. Day 1 evening replaced (Alibi Room + Il Bistro replacing Saint John's + Poquitos). Day 3 added morning market coffee before Bainbridge ferry. Day 4 checkout from Reside.
- Updated 12 Google Calendar events for Day 1 and Day 4: transit, check-in, afternoon, evening, and checkout events all updated to Reside/104 Pine St/Post Alley routing.
- Synced both JSON files throughout (hotel-monitor-source + hotel-monitor-report).

## 2026-05-26 (session — airfare watch baseline reset)

- Restored the Manila airfare subsystem from the PAL award-tax detour back to the cash-fare watch model the SFO/ORD→MNL automation expects.
- Replaced the PAL-tax validator, airfare tests, and airfare dashboard with the cash-fare versions that separate discovery signals from airline-direct verified fares.
- Added a May 26, 2026 pre-window baseline note to `data/airfare-watch.json` so the next run sees that no fresh one-way airline-direct checkout was captured in this non-interactive pass.
- Reconciled active task and note files so they now point at `npm run monitor:airfare` and the airline-direct verification rules again.

## 2026-05-24 (session — Portland second booking + dashboard update)

- Booked Courtyard by Marriott Portland City Center: $487.85 total, conf# 94187007, 1 King, Nov 4–9. Stay Longer and Save rate. Free cancel before Nov 3, 11:59 PM.
- Portland now has two active bookings. Courtyard is $140.61 cheaper than Hotel Vance. Action: cancel Vance before Nov 3.
- Dropped all 16 Portland watchlist hotels — all were above $500. Portland monitoring complete.
- Updated `hotels.html` to render `secondReservation` as a second blue current-reservation row with its own benchmark bar entry.
- Fixed Hotel Vance `transitScore` null → 99.
- Fixed Courtyard missing fields: `reviewScore` 4.2, `transitScore` 99, `transitNote`, `safetyNote`, `safetySource`, `reviewUrl`.
- Updated SESSION_START, tasks/todo.md, LEARNINGS, KNOWN_ISSUES, and memory files to reflect new state.

Use it for:

- meaningful shipped changes
- workflow changes
- automation changes
- structure changes that future sessions need to know

For detailed session-by-session history, use [[Project Log]].

Related: [[TASKS]] · [[KNOWN_ISSUES]] · [[LEARNINGS]]

## 2026-05-24 (session 12 — automation and repo cleanup)

- Deleted 3 redundant saved automations: `seattle-portland-trip-review`, `seattle-portland-thread-summary-weekly`, and `update-agents-md`.
- Confirmed 9 active saved automations remain across Seattle hotels, Seattle/Portland prices, Seattle/Portland transit checks, and SFO/ORD→MNL airfare.
- Removed the stale GitHub Pages deploy workflow and `.nojekyll` because Netlify is the active public host.
- Deleted the legacy `automation/flight-monitoring-workflow.md` note because it no longer matched the real monitor setup.
- Cleared local clutter that no longer belongs in the repo root or project tree: old review PNGs, browser-capture logs, macOS metadata files, and the untitled scratch canvas file.
- Reconciled the active docs, task notes, and session-start memory so Codex, Claude-style handoff notes, and Obsidian all reflect the trimmed automation set and current hosting model.

## 2026-05-24 (session 14 — full hotel watchlist overhaul)

**Seattle watchlist (8 hotels):**
- Removed 7: Hotel Max, Paramount, EVEN Hotel, Moxy, Arctic Club, Hotel Andra, Alexis Royal Sonesta (over budget, unpriced, or dropped by user)
- Added: citizenM Seattle South Lake Union ($580.56, cancel by Oct 30)
- Updated: Warwick notes reflect Deluxe Room nightly breakdown + exact CX terms from screenshot
- `hotel-monitor-source.json` (dashboard data source) fully synced from report

**Portland watchlist (16 hotels, all with prices):**
- Removed 5: The Nines, Hotel deLuxe, Graduate Portland, Kimpton RiverPlace, The Mark Spencer
- Added 8 with full price captures: Embassy Suites ($743.19 + breakfast), Holiday Inn Express NW ($741.26 + breakfast), Hyatt Centric ($701.60), Hyatt House ($783.85 + breakfast), Hyatt Regency Convention Ctr ($764.68), The Porter Curio ($848.42), Hampton Inn Pearl District ($795.06 + breakfast), DoubleTree ($913.72)
- Updated 5 with prices: The Benson Curio ($794.87), Society Hotel Suite ($844.72), Sentinel ($1,003.40), Hotel Lucia ($760.49), Hilton Portland Downtown ($1,025.58)
- Lowest-priced Portland option with price: Hyatt Centric $701.60

## 2026-05-24 (session 13 — stale monitor cleanup)

Removed the orphaned legacy flight-status polling track: `scripts/monitor-flights.js`, `data/flight-monitor-snapshot.json`, and `research/flights/` artifacts. Dropped the unused `npm run monitor:flights` script entry. Kept the live monitor set intact: itinerary source watch, hotel watch, PAL tax watch, and their generated report artifacts.

## 2026-05-24 (session 4 — hotel watchlist rebuild)

- Replaced all Seattle hotel booking URLs with correct direct booking links provided by user.
- Removed non-existent hotels: Hilton Seattle, Canopy by Hilton Capitol Hill.
- Rebuilt watchlist filter: transit ≥85, rating ≥4.0, safe neighborhood, elevator required. Dropped 11 failing hotels.
- Added boutique/independent hotels: Staypineapple Maxwell, Hotel FIVE, Watertown, University Inn; Hotel Sorrento; Mayflower Park; Arctic Club; Hotel Andra; Alexis Royal Sonesta; Warwick Seattle.
- Removed big convention chains (Hyatt Regency, Westin, Sheraton, W, Renaissance) per user preference for smaller/boutique properties.
- Manually entered prices for 11 hotels from user-provided checkout screenshots. 3 still need prices (Arctic Club, Hotel Andra, Alexis Royal Sonesta).
- Corrected price attribution errors mid-session (Mayflower Park and Warwick prices were initially misassigned to Kimpton Palladian and Alexis). Prevention rule: always confirm hotel name before writing price — never assume from screenshot order.

## 2026-05-24

- Fixed the hotel dashboards and generated hotel report so `last verified` prices stay visible for blocked/review hotels instead of collapsing into price-less `needs check` summaries. Review-state cards, table rows, hero stats, and markdown output now surface stored totals when they exist.
- Replaced the one-pass hotel scraper with a layered direct-first monitor. Direct engines are now routed per chain, blocked pages are classified explicitly, fallback capture is isolated, and the source file preserves the last trustworthy total instead of overwriting it with low-confidence listing prices.
- Added hotel monitor regression tests for: nightly-vs-stay extraction, anti-bot classification, stale direct URL detection, checkout-engine rejection of listing-grade totals, and collection routing into eligible / blocked-review / excluded buckets.
- Updated hotel dashboard surfaces and report generation to show richer monitor states such as `blocked-direct`, `stale-direct-url`, `manual-review-needed`, source tier, and confidence-aware preservation behavior.
- Refreshed hotel and PAL monitoring data from live sources. Paramount Hotel Seattle was corrected to a verified $731.60 total after the scraper misread a room rate as the stay total.
- Recorded current live blockers instead of leaving stale "needs-check" state: Boylston remains Cloudflare-blocked, Hilton Seattle's tracked direct URL is returning a Hilton 404, Hotel Vance kept its confirmed $628.46 benchmark while live Marriott checkout still failed to expose a fresh total, and PAL's award-tax flow stayed behind cookie/interaction gates.
- Rebuilt hotel report data and reconciled notes/tasks to remove outdated "first manual capture" carry-forward language.
- Converted all three HTML pages (main dashboard, airfare tracker, hotels tracker) from dark GitHub-style theme to a unified white/light professional theme. All pages share the same color palette, typography, and nav style.
- Removed the location moodboard section from the main dashboard (`#visuals` section); guarded `renderVisualStrip` in `app.js` with a null check so removing the element no longer crashes page render.
- Added collapsible `<details>` blocks to: Booked Flights, Additional Booked Flights, Budget Breakdown, and Verification Resources / Last Verified. All start collapsed by default.
- Removed 2 stale automation cards (15-min flight monitor with dead `.md` link; Latest Report with dead `.md` link). Automation section now shows 4 clean active cards.
- Fixed external link `rel` attributes (`noopener noreferrer`), added `type="button"` to filter chips, added `role="tab"` + `aria-selected` to planning guide tabs.
- Added `address` and `brand` fields to 4 Seattle hotel watchlist entries that were missing them (Boylston, Hotel Max, Paramount, State Hotel) in `data/hotel-monitor-source.json`.
- Removed 14 stale screenshot PNGs from `docs/review-assets/` and `docs/archive/TASKS-legacy.md`.

## 2026-05-23

- Locked in the Boylston Hotel Capitol Hill confirmed reservation (RES ID 7225329631916, $384.13 total, Nov 1-4 2026) as the Seattle hotel benchmark. Monitor hunting for refundable sub-$400 option with better transit proximity.
- Added `monitoringCriteria` block to the hotel report with explicit switch triggers and transit priority requirements.
- Replaced the cash-fare airfare tracker with a PAL Award Tax Monitor. `data/airfare-watch.json` tracks Philippine Airlines Business Class award taxes: SFO→MNL (58,000 mi + $370.50) and ORD→MNL (67,000 mi + $375.50). Departure Mar 3-7, 2027.
- Rewrote `dashboards/html/airfare.html` as the PAL Award Tax Monitor with sparklines, color-coded change pills, and history table.
- Added Playwright automation for hotel price scraping and PAL tax scraping. Full table dashboards rebuilt.
- Pushed all changes to GitHub.

## 2026-05-16

- Added a standardized project memory structure for Codex, Claude, and Obsidian.
- Introduced shared maintenance rules, memory folders, and post-task workflow guidance.
- Reworked the notes home so the vault points at standardized active notes instead of only the earlier lightweight pages.

## 2026-05-28 — Unified Obsidian memory hub + collector

- Added non-mutating memory collector: `scripts/collect-obsidian-memory.js`.
- Added canonical source-index layer under `notes/sources/`:
  - `notes/sources/codex-memories.md`
  - `notes/sources/claude-home.md`
  - `notes/sources/vscode-context.md`
  - `notes/sources/README.md`
- Added daily digest output under `notes/session-start/YYYY-MM-DD.md`.
- Replaced active startup pointer content in `notes/memory/active/SESSION_START.md` with collector-driven startup sequence.
- Updated startup and maintenance contract in:
  - `AGENTS.md`
  - `notes/PROJECT_CONTEXT.md`
  - `hooks/post-task.md`
  - `notes/Home.md`
- Validation outcomes:
  - Source discovery passes for Codex/Claude/VS Code paths.
  - Missing paths are emitted as explicit blockers.
  - Idempotent content achieved (no content diff when sources unchanged).
  - Secret-safe redaction conventions enforced (`[REDACTED_SECRET]`).

## 2026-05-28 — Obsidian templates + Dataview query dashboards

- Added queryable note templates under `notes/templates/`:
  - `handoff-template.md`
  - `decision-template.md`
  - `issue-template.md`
  - `lesson-template.md`
  - `README.md`
- Added Dataview-ready query notes under `notes/queries/`:
  - `Open Blockers.md`
  - `Recent Decisions.md`
  - `Active Follow-ups.md`
- Updated `notes/Home.md` session dashboard links to point to query notes.

## 2026-05-28 — Stale-note freshness dashboard

- Added `notes/queries/Stale Notes.md` with Dataview logic to list notes with `last_verified` older than 14 days.
- Updated `notes/Home.md` session dashboard to include a direct stale-notes review link.
- Updated `hooks/post-task.md` with a freshness check step.

## 2026-05-30 itinerary overhaul
- Updated Seattle/Portland itinerary dates to Nov 1-9 with hour-by-hour activity, walk/transit, meals, and rest blocks.
- Seattle base set to The Boylston Hotel Capitol Hill; Portland starts Nov 5 after Amtrak Cascades 517 (12:10 PM to 3:35 PM).
- Added Google Calendar import file: data/google-calendar-import-nov1-9-2026.csv.
- Rebalanced budget/day totals to match new detailed schedule (projected total: $888).

## 2026-08-07

- Reconciled Nov 6-9 itinerary and costs against real receipts from the trip expense tracker (`Expenses - Sheet38.csv`), matching the Nov 1-5 reconciliation from the prior session.
- Removed Multnomah Falls / Vista House and the Columbia Gorge Express day trip entirely from Day 8. Day 8 is now a light rest day (brunch-time Cartopia food carts only) because Day 7 now includes a tattoo appointment that needs to rest and wrap.
- Rebuilt Day 7 around the tattoo: coffee, tattoo appointment (Shonen Tattoo), Portland Saturday Market, Sephora perfume browse (tracked as a personal purchase, not trip budget), Pretty Ugly Burger dinner, Novel Book Bar.
- Confirmed Day 6 Cannon Beach POINT NorthWest bus times (previously a placeholder watch item): depart PDX 8:28 AM / arrive Astoria 11:46 AM, return depart Astoria 5:55 PM / arrive PDX 9:00 PM.
- Corrected the Nov 9 return flight times to match the confirmed AA booking (PDX-DFW now 2:34 PM-8:29 PM, DFW-CRP now 10:30 PM-11:58 PM) and added both flight legs to the live Google Calendar for the first time.
- Projected budget total is now $1,296.35, $46.35 over the $1,250 cap but under the $1,300 ceiling -- flagged as real spend (tattoo, Day 7 dinner/bar), not corrected downward.
- Corrected a cost double-count on Pretty Ugly Burger dinner ($125.50 -> $63) and Novel Book Bar ($57.50 -> $29): the CSV's aggregate line was the total, not an additional charge on top of the itemized cocktails/tip.
- Live "Seattle & Portland 2026" Google Calendar resynced for Nov 6-9: deleted 48 stale events (old Multnomah Falls itinerary, stale flight times) and created 38 events matching the corrected `trip-data.js`.

## 2026-06-27

- Completed the live shared Google Calendar Portland cleanup for Nov 6-9.
- Rewrote remaining Portland event popups into the richer Seattle-style format with `Purpose`, `Estimated cost`, links, `What to order` or `What to do`, `Skip`, and `Continuity`.
- Removed remaining technical Portland `SEAPDX-...` titles from the live shared calendar window.
- Corrected stale Portland all-day header titles and a few mismatched location/route labels so the visible calendar rows match the actual itinerary.

## 2026-06-28

- Reconciled the public trip site back to the live shared calendar across Seattle Day 2-4 and Portland Day 5-9, including the Sailing Seattle stop, the Northgate Ray-Ban Meta fit-check logistics stop, the Japanese Garden day, and later Portland timing/cost drift.
- Expanded `data/trip-data.js` with richer stop-detail content, stable `isoDate` fields, and a public site URL so stop cards can deep-link cleanly.
- Upgraded the homepage day-detail panel to render calendar-grade stop context, richer section blocks, and direct Google Calendar day links plus stable stop anchors.
- Added `scripts/sync-calendar-exports.js` and regenerated `data/google-calendar-events-nov1-9-2026.json` plus `data/google-calendar-import-nov1-9-2026.csv` from the normalized source.
- Updated key live shared-calendar events with direct site backlinks so the calendar can jump back into the matching public stop cards.
- Completed a second parity pass focused on the exact user-reported gaps:
  - Seattle Day 1 Poquitos and Saint John's now match the richer calendar substance with menu/site links, order guidance, fruity-cocktail guidance, payment, and corrected spend.
  - Day 1 arrival/orientation/snack/sleep blocks now use intentional narrative copy instead of thin placeholders.
  - Weak Seattle and Portland stop records gained missing location, payment, menu/site, and cost context so the homepage detail panel is materially closer to the live calendar.
- Re-synced the live shared Google Calendar for the full Seattle Day 1 route so the calendar no longer carries thinner arrival-night copy than the site.
- Added a Seattle Kraken planning placeholder to trip guidance with official booking path, a realistic seat-price range, and a watch window based on the club's prior schedule and single-game sale timing.
