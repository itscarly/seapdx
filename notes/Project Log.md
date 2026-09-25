## 2026-09-14

### COMPLETE: Added verified Codex SessionStart/Stop hooks and cleaned stale Obsidian/Graphify paths

- Added `/Users/carly/.codex/bin/codex-session-start-context`, which detects the active project root and prints Obsidian/Graphify startup pointers.
- Added `/Users/carly/.codex/bin/codex-session-closeout-sync`, which writes a closeout audit under `notes/session-audits/`, runs the project Obsidian collector when present, and runs `graphify update .`.
- Wired both scripts into `/Users/carly/.codex/hooks.json` as `SessionStart` and `Stop` hooks while preserving the existing `PreToolUse` Graphify hook-check.
- Fixed `scripts/collect-obsidian-memory.js` so it uses `/Users/carly` paths, drops nonexistent optional sources from source indexes, and no longer reports nonexistent VS Code/Claude storage paths as blockers.
- Cleaned old local user/path and old Obsidian vault references from active project/global guidance, docs, source indexes, and session notes.
- Verified hook JSON, hook script syntax, collector output, note audit, stale-path scan, and manual closeout hook execution.

### COMPLETE: Audited and configured Obsidian + Graphify as the project memory loop

- Confirmed the user was now in the correct `SeaPdx` Obsidian vault and the graph contained project notes/docs instead of the empty starter vault.
- Added/update rules so session start uses both Graphify and Obsidian notes: Graphify first for architecture/source-of-truth/data-flow/action/project-content questions, then relevant Markdown notes.
- Added/update closeout rules: update affected Markdown notes, tasks, blockers, decisions, handoff state, and [[Project Log]], then run `graphify update .`.
- Corrected stale Obsidian vault memory that still pointed to `/Users/carly/Library/Mobile Documents/com~apple~CloudDocs/Documents/SeaPdx/`; the active vault is `/Users/carly/Library/Mobile Documents/com~apple~CloudDocs/Documents/SeaPdx`.
- Tuned `.obsidian/graph.json` display/force settings and graph color groups for `notes`, `docs`, `tasks`, and `graphify-out`.
- Updated global `/Users/carly/AGENTS.md` and `/Users/carly/ENGINEERING_GUIDELINES.md` so Obsidian and Graphify are used across projects under `/Users/carly` when those projects have notes/graph state.

### COMPLETE: Connected the project folder as an Obsidian vault

- Added local Obsidian vault config in `.obsidian/` with `notes/Home.md` as the workspace entry point.
- Added [[Codebase Map]] as the codebase/navigation overview.
- Added [[Project Files]] so the graph has links across project notes, docs, code, scripts, and assets.
- Added [[Setup/Obsidian Vault Setup]] with the vault path and open instructions.
- Linked the new notes from [[Home]].

## 2026-08-15 (session 49: sleep-ceiling fix + per-stop images sourced from Google Images/Wikimedia + Day 2/3 route audit)

### COMPLETE: Fixed Day 1/Day 2 sleep blocks starting too early, sourced real per-stop photos (not one generic reused image), filled in missing route/mapFrom/mapTo and detailText fields, resynced the live calendar

**Why this session happened:** User flagged from the live Google Calendar month view that Day 1's "sleep" ran 8:00 PM-7:30 AM and Day 2's ran 6:50 PM-4:50 AM -- unrealistic on vacation. User set a hard rule: sleep never starts before 10:00 PM, never as early as 6:50 PM. User also called out that Day 2 images were lazily reused (one generic Pike Place photo for ~17 different stops -- pastries, cider stand, cheese shop, etc. all sharing one image) and demanded per-stop images sourced from Google Images/web search, not just Wikimedia Commons. Finally, user asked for a full field-completeness audit on Day 2/Day 3 (image, trivia, location, map route) before pushing to GitHub.

**Sleep-ceiling fix (`data/trip-data.js`, live calendar):**
- Day 1 "Wind-down and early sleep" (8:00 PM, 10+ hrs) split into "Evening wind-down" (8:00-10:00 PM) + "Sleep" (10:00 PM-5:30 AM).
- Day 2 "Dinner and wind-down" (6:50 PM, 10+ hrs) split into "Dinner and wind-down" (6:50-10:00 PM) + "Sleep" (10:00 PM-7:20 AM).
- Day 3's existing sleep block (10:15 PM-7:15 AM) was already correct, left untouched.
- Live "Seattle & Portland 2026" calendar: deleted the 2 old single-block sleep events, created 4 replacement split events, scoped to calendarId `b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com`.

**Per-stop images -- sourced individually, not reused (`dashboards/assets/images/`, `data/trip-data.js`):**
- Downloaded and visually verified (by actually viewing each photo, not just trusting filenames) 15 distinct images from Wikimedia Commons: Mee Sum Pastry, Beecher's, Le Panier, Piroshky, Original Starbucks (storefront at 1912 Pike Pl, correcting an earlier mistaken 1977 historical photo), Hellenika, Rachel the Pig, Molly Moon's, Daily Dozen Doughnuts, Gum Wall, Ghost Alley Espresso, Rachel's Ginger Beer, Seattle Great Wheel, Olympic Sculpture Park -- prioritized recent (2022-2024) photos over older ones per user's "no old photos" requirement.
- Tiny's Apple Cider stand: found and verified via Pike Place Market's own official vendor directory page (images.pikeplacemarket.org) -- real photo of the actual cider tent with fruit crates.
- Totem Smokehouse and the Pike Place Market "swings" (Park Promenade, Overlook Walk): searched Wikimedia Commons (a dozen term variants), the live-rendered official pikeplacemarket.org vendor page (via Chrome MCP, confirmed no dedicated photo exists), and Google Images directly -- confirmed these have no freely-licensed photo available anywhere; the only results are copyrighted Instagram/Facebook/Yelp photos, which were not downloaded or rehosted (would be copyright infringement in a public GitHub repo). Both stops still use the generic `pike-place-market.jpg` fallback, disclosed rather than silently left as-is.

**Field-completeness audit (Day 2 + Day 3, `data/trip-data.js`):**
- Wrote a Node audit script checking every real stop (activity/meal/food/shopping/coffee type, or cost > 0) for `route`/`mapFrom`/`mapTo` and `detailText`, and every `image` reference against the actual file on disk.
- Found and fixed 11 stops missing `route`/`mapFrom`/`mapTo`: Best Buy Northgate, Sky View Observatory, Sky View Cafe, Ferry to Bainbridge (also missing `detailText` -- added ferry trivia), Harbour Public House, Blackbird Coffee, Return ferry, The Hart and the Hunter, Saint John's, Salt & Straw, Menya Musashi.
- Re-ran the audit clean (zero missing fields) and `npm run validate` (status ok, projected $2909.91 against the unchanged $3050 ceiling).

**Not touched:** `scripts/validate.sh` (untracked, pre-existing, unrelated to this session -- left for the user to review/commit separately).

## 2026-08-15 (session 47: Day 1 full rebuild + rich-stop schema (image/route-map/safety-badge) -- now the template for Days 2-9)

### COMPLETE: Rebuilt Day 1 around the confirmed Asiana arrival + Palihotel booking, added a reusable rich-stop UI (sized images, embedded route maps, safety badges), fixed two path bugs, resynced the live calendar

**Why this session happened:** User supplied their actual Asiana booking (OZ702/OZ272, confirmation EMR56H, SEA arrival 1:55 PM) and Palihotel Seattle reservation (confirmation #2434SG190857, $662 total), and wanted Day 1 rebuilt around a firm 45-minute passport-control/baggage-claim buffer, a reordered evening, specific priced purchases, trivia per stop, a representative photo per stop, a sourced (not invented) safety read per stop, and an inline map of the actual route between stops. This became the template for rolling the same pattern out across Days 2-9.

**`data/trip-data.js` (Day 1 rewrite, final state):**
- Arrival buffer extended 25 -> 45 min for passport control + baggage claim (leaveTime 2:20 PM -> 2:40 PM); downstream times shifted accordingly.
- Evening reordered: H Mart grocery run -> drop food at Palihotel -> Target Pike Plaza pickup ($34.36) -> Pike Place Bar & Grill dinner ($44.86) -> Waterfront Park -> walk back to Palihotel. Pike Place Chowder removed entirely (closes before the new timeline reaches it, not kept as a fallback).
- `dayTotal` recomputed to $105.11, verified against item-cost sum and `npm run audit:budget` ($196.11 remaining under the $3,050 ceiling).
- Palihotel check-in carries the real reservation (confirmation #2434SG190857, itinerary #73521738329875, $662 total, official check-in/check-out).

**New reusable rich-stop schema, now the pattern for Days 2-9:**
- `image: "<filename>"` -- file lives in `dashboards/assets/images/` (NOT repo-root `assets/images/` -- see bug below), rendered via `IMAGE_BASE` in `app.js`, sized via `.stop-detail-image` CSS (220px desktop / 160px mobile, `object-fit: cover`, rounded card).
- `mapFrom` / `mapTo: "<address string>"` on any stop with a `route` -- renders an inline Google Maps directions embed (`?saddr=...&daddr=...&output=embed`, no API key needed) instead of just a "Map route" external-link button.
- `safetyScore: <0-100>` + `safetyNote: "<emoji> <score>% · <short label>"` -- renders as a compact badge (🟢 80-100 / 🟡 50-79 / 🔴 <50) above the existing full sourced safety writeup in `detailText`. Every score must be backed by real research (SPD/Downtown Seattle Association reporting, Seattle Parks initiatives, etc.) -- never invented. If no solid source exists for a specific claim, say so in the text instead of guessing a number.
- Images must show what the stop actually is -- crop/select for that, not just for aspect ratio. Two real mistakes caught and fixed this session: the first H Mart crop landed on an empty shelf rail (fixed by re-cropping the source to the food-dense band); the first "Waterfront Park" photo was actually a downtown skyline/buildings shot, not the park (swapped for a real Wikimedia Commons photo of the actual pier/water, CC BY-SA 4.0, credited).

**Two real bugs hit and fixed -- avoid repeating on Days 2-9:**
1. Downloaded images went to repo-root `assets/images/` instead of `dashboards/assets/images/` (where every other image in this project lives, and where `app.js`'s `IMAGE_BASE = "../assets/images/"` resolves relative to `dashboards/html/index.html`). Both images 404'd until moved. **Always save new images directly into `dashboards/assets/images/`.**
2. A `git add -A -- <bad-pathspec> <real files>` failed on the first bad path and silently dropped every argument after it, so a commit landed with only half the intended changes (caught via `git show --stat HEAD` showing 0 insertions on a commit that should have had code changes). **After any commit meant to bundle multiple files, verify with `git show --stat HEAD` before pushing -- don't assume `git add` succeeded for every path just because the command didn't error.**

**Deploy/cache note:** after pushing, the user saw the GitHub Pages site as "not updated" -- the deploy had actually succeeded (`gh run list` showed success, `curl` against the live URL showed the new file content). It was browser cache. Before assuming a push failed to deploy: check `gh run list` for the Actions run status, `curl` the live URL directly for the actual served content, and only then attribute it to browser/CDN caching (hard refresh / incognito) rather than a broken deploy.

**Live Google Calendar** ("Seattle & Portland 2026"): all 12 Day 1 events fully replaced (old timing/order deleted, new timing/order/links/safety notes created) via the Google Calendar MCP tools; the Waterfront Park event's photo-credit line was updated to match the corrected image.

**Verification:** `npm run validate` clean; day-1 item-cost sum hand-verified against `dayTotal`; both rich-stop images and the route-map embed checked live in-browser at desktop and a 390x844 mobile viewport (not just HTTP 200).

**Files modified:** `data/trip-data.js`, `dashboards/js/app.js`, `dashboards/css/styles.css`, `dashboards/assets/images/hmart-food-sample.jpg` (new), `dashboards/assets/images/waterfront-park.jpg` (new), `notes/Project Log.md`.

**Follow-up / next session:** Days 2-9 still need the same rebuild pass (rich-stop schema: image + mapFrom/mapTo + safetyScore/safetyNote, sourced safety research, representative photos) applied per day. See `notes/MAINTENANCE.md` "Day rebuild playbook" for the exact repeatable checklist, and `notes/memory/active/SESSION_START.md` for the current handoff pointer. No live crime-index API is wired into this project -- safety notes are a point-in-time research pass, not continuously updated data.

---

## 2026-08-09 (session 45: font-consistency fix, adjustable hero meter slider, DESIGN.md six-section rewrite, full /impeccable audit pass)

### COMPLETE: Fixed unloaded-font fallback bug, made the "All-in trip target" meter draggable, then ran a full /impeccable audit closing all color/radius/font-size documentation-gap findings

**Why this session happened:** User reviewed the live dashboard and noticed inconsistent-looking fonts, and wanted the "All-in trip target" gradient meter bar to be adjustable/explorable. Once that shipped, user asked for `/impeccable document` (DESIGN.md was out of date against the actual codebase) and then `/impeccable audit dashboards/css/styles.css`, fixing findings one by one.

**Font-consistency fix (`dashboards/css/styles.css`):**
- Root cause: 4 rules (`.budget-total`, `.leaflet-container`, `.flight-point strong`, `.airfare-entry-price strong`) set `font-family: "Sora"`/`"Manrope"`, but neither font was ever loaded anywhere in the project (no `@font-face`, no Google Fonts `<link>`, no `@import`) — browsers silently fell back to generic `sans-serif`, which rendered visibly different from the SF Pro system stack used everywhere else.
- Fix: removed all 4 overrides so those elements inherit the same system-font stack as the rest of the page. Zero risk of FOUT since no new font loading was introduced.

**Adjustable hero meter (`dashboards/html/index.html`, `dashboards/js/app.js`):**
- Added a native `<input type="range" id="heroMeterSlider">` under the existing `.meter` gradient bar, defaulting to the live computed confirmed/all-in-target ratio.
- Wired `input`/`change` listeners in `initHero()`: dragging live-previews the bar width and a hint label ("Previewing X% confirmed..."), releasing snaps back to the real computed ratio. Purely a what-if preview — never writes back to `trip-data.js`, resets on reload, per the project's data-integrity rule that `trip-data.js` stays the sole source of truth.
- Added `budgetOverrides`/`applyBudgetOverrides`/`getBudgetTotals` helpers in `app.js` supporting the same in-memory (non-persisted) what-if pattern for per-category budget-card edits.

**DESIGN.md rewrite + `/impeccable document`:** Regenerated DESIGN.md as a six-section spec matching the actual current codebase, with a matching `.impeccable/design.json` sidecar (gitignored, local-only).

**`/impeccable audit dashboards/css/styles.css` — fixed one by one:**
- Bounce-easing finding: fixed one non-`ease-out` transition.
- 3 stale hardcoded-color findings: `rgba(15, 118, 110, ...)` literals in `.tracker-pill-good`, `.airfare-pill.is-verified`, `.airfare-entry-card.is-verified-card` had gone stale after `--accent-2` was overridden in `.trip-home` — replaced with `rgba(var(--accent-2-rgb), alpha)` so token updates propagate everywhere.
- `.stop`/`side-tab` finding: reviewed, confirmed a deliberate timeline rail marker (carried from session 43/44's config exception), left unchanged.
- `#1749db` color finding: confirmed intentional with the user, registered as a shared `.impeccable/config.json` ignore-value exception via `hook-admin.mjs`.
- Color/radius documentation-gap findings: per user's explicit choice ("Expand DESIGN.md to cover them"), documented 8 micro-tint colors and a 13-step `rounded:` radius scale in DESIGN.md's frontmatter + a new "Micro tints" body subsection, and added matching `colorMeta` entries to `.impeccable/design.json`.
- **Font-size findings (79 hits across ~40 ad-hoc values) — the big one:** discovered these only surfaced correctly from the *global* `~/.claude/skills/impeccable/scripts/detect.mjs`, not the outdated project-local copy at `.claude/skills/impeccable/scripts/detect.mjs` (which has no `design-system-font-size` rule at all — confirmed via grep). Per user's explicit choice ("Consolidate to a real scale"), snapped all font-size declarations to a canonical 26-step scale (`0.65rem` to `5rem`), documented it as `typography.scale` (a name→value object — the frontmatter parser requires an object, not a top-level list, per `design-system.mjs`'s `addTypographySizes()`) in DESIGN.md's frontmatter, added a "Type scale" body subsection, and mirrored it into `.impeccable/design.json`'s `typographyMeta.scale`.

**Verified:** `node ~/.claude/skills/impeccable/scripts/detect.mjs --json dashboards/css/styles.css` → 0 findings (down from 79+ color/radius/font-size findings combined across the audit). CSS brace-balance check: 603 open / 603 close. `npm run validate` passes. Dev server (`http://127.0.0.1:4173/`) serves the updated stylesheet with HTTP 200; hero slider drag-and-release behavior confirmed live.

**Committed and pushed:** `8b99c9a` on `main`.

**Open items carried forward:** Korean Air confirmation number still "TBD"; Asiana OZ271/272 Nov 1 date still needs reconfirming directly with Asiana (both unrelated to this session's work).

---

## 2026-08-09 (session 44: closed out the remaining design-detector color-drift findings deferred from session 43)

### COMPLETE: Tokenized all remaining hardcoded colors flagged by the design-detector Stop hook; registered legitimate exceptions for the rest

**Why this session happened:** A Stop hook fired after session 43's push and reported 115 findings in `dashboards/css/styles.css` (1 `side-tab`, ~114 `design-system-color`) — this is the "~30 remaining findings" item session 43 explicitly deferred as its own token-introduction pass. User's instruction: "ok fix it now."

**Tokenization (`dashboards/css/styles.css`):**
- Replaced ~50 literal color values that duplicated existing-but-unreferenced theme tokens with `var()` references, across all three theme scopes: base `:root`, `.dark-tracker`, and `.trip-home`.
- Added RGB-channel companion tokens (e.g. `--accent-rgb`, `--dt-gold-rgb`, `--dt-blue-rgb`, `--dt-red-rgb`, `--dt-teal-rgb`, `--dt-panel-rgb`, `--dt-panel-strong-rgb`, `--dt-bg-rgb`, `--line-rgb`, `--shadow-rgb`, `--panel-rgb`) so `rgba(var(--x-rgb), alpha)` could replace literal `rgba(r, g, b, alpha)` values without changing any rendered color.
- Cleaned up 2 stale `var(--token, fallback)` literals in the base scope where the fallback no longer matched the token's current value (leftover from earlier palette drift).
- No changes to `.stop`/`.stop::before` — the side-tab finding there is the same reviewed timeline rail+dot marker from session 43, resolved via config exception, not a code edit.

**Config exceptions (`.impeccable/config.json`, gitignored — local only):**
- Fixed a broken pre-existing `side-tab` ignore entry from session 43: it stored `"value": "* --file dashboards/css/styles.css"` as one malformed string instead of using the tool's `--file` flag, so the exception never actually matched anything and the finding kept re-appearing. Added a correctly-structured entry with a proper `files` array via `hook-admin.mjs`.
- Registered ~30 distinct `design-system-color` values as reviewed exceptions with per-category reasons: plain neutral whites/grays (`#fff`, `#ffffff`, `#fafafa`, `#ddd` — utility colors, not brand palette), one-off dark-tracker gradient-stop shades (`#1e4fa0`, `#70b8ff`, `#2660c0`, `#0a0e14`, `#0d1117`, `#0b0f15` — scoped to the self-contained alt theme), and ~22 `rgba(255,255,255,X)` alpha variants (intentional glassmorphism translucency).
- Self-caught and corrected one mistake: briefly added an over-broad wildcard exception for all `design-system-color` findings in the file, recognized it violated the hook's own guidance (wildcard scoping is for value-less rules like `side-tab` only — `design-system-color` has exact per-value ignore commands), and removed it before proceeding with the proper per-value approach.

**Verified:** Detector re-run (`node .claude/skills/impeccable/scripts/detect.mjs dashboards/css/styles.css`) confirms 0 findings, down from 115. `node --check dashboards/js/app.js` and `npm run validate` both pass. Hard-reloaded browser screenshot of the homepage shows no visual regressions — warm editorial `.trip-home` theme renders identically.

**Committed and pushed:** `7b11822` on `main`.

**Open items:** none carried forward from this pass — the deferred item from session 43 is now closed. Unrelated carryovers remain: Korean Air confirmation number still "TBD", Asiana OZ271/272 Nov 1 date still needs reconfirming directly with Asiana.

---

## 2026-08-09 (session 43: /impeccable audit + polish of the dashboard, focused on flights then expanded to the whole page)

### COMPLETE: Audited and polished the flights section, then fixed the two flagged AI-slop patterns (side-tab card borders, decorative grid-line background) sitewide

**Why this session happened:** User ran `/impeccable audit this dash and polish it: http://127.0.0.1:4173/dashboards/html/index.html#flights`, then asked to expand the fix to "the side tab borders and the grid background too, and everything that you recommended... any type of view."

**Flights-section fixes:**
- Added explicit "Departs"/"Arrives" text labels to each flight leg (`.flight-point-label` in `styles.css`, markup in `app.js` `renderFlightLeg`) — at ≤980px the route grid collapses to one column and direction was previously only implied by a gradient divider line, which read as ambiguous on mobile.
- Replaced 3 hardcoded off-token colors in flight-specific rules (`.budget-summary-card.airfare`, `.flight-connector::before`, `.trip-home .flight-status-pill--strong`) with `rgba(var(--accent-rgb), alpha)` / `rgba(var(--accent-3-rgb), alpha)`, adding the missing `--accent-rgb`/`--accent-3-rgb` channel tokens to the `.trip-home` block so future translucent tints derive from the real token instead of drifting.

**Sitewide `[side-tab]` fix (the "most recognizable AI-generated-UI tell"):**
- `.stop--chip` (itinerary day chips, both base and `.trip-home`-scoped rules): removed the 3–4px colored left-border accent stripe. Category color-coding is a real DESIGN.md requirement ("route chips should communicate category"), so it's preserved via the pre-existing `.stop::before` timeline-ring marker (small `currentColor` circle, already colored per `[data-type]`) rather than dropped — confirmed in the browser at 1440px and 390px that the category color still reads correctly.
- `.stop` (the day-by-day itinerary timeline list): left unchanged and classified as a false positive. Its border-left is a genuine vertical timeline rail paired with a circular dot marker, not a decorative card accent — removing it breaks the itinerary-sequencing visual metaphor. Persisted via `/impeccable hooks ignore-value side-tab "*" --file "dashboards/css/styles.css"` so the hook stops re-flagging a reviewed, intentional pattern.

**Sitewide `[codex-grid-background]` fix (the other named "recurring generated-UI signature"):**
- Removed the fixed 20px hairline grid-line overlay (`body::before` in the base stylesheet, and its `.trip-home::before` color re-tint) — purely decorative, `pointer-events: none`, no functional loss.

**Verified:** Chrome screenshots at 1440px (desktop) and 390px (mobile) for both the flights section and the itinerary chip cards, before and after each change — no layout regressions, category colors still legible, no horizontal overflow.

**Left for a future session (flagged, not silently skipped):** ~30 remaining `design-system-color` findings (hardcoded rgba literals outside the DESIGN.md palette, scattered across the rest of the stylesheet) — recommended as its own token-introduction pass rather than folding into this one. Also cleaned up 2 stray empty files (`2026-08-07.md`, `Untitled.canvas`) and gitignored the `.dev-server.pid` runtime file found sitting untracked in the repo root.

---



### COMPLETE: Fixed the dev server, which had actually been down all day despite an earlier same-day memory note claiming it was verified working; broadened model routing to a hard rule across all scopes; ran a Claude Code doctor pass

**Why this session happened:** The user reported the live local site (`http://127.0.0.1:4173/dashboards/html/index.html#flights`) wasn't loading, contradicting an earlier same-day session's memory note that claimed the persistent dev server setup was "ACTIVE and RUNNING, verified." The user also wanted model routing formalized as a hard rule (planning on Sonnet, execution on Haiku or lower, Opus/Fable only on explicit request) across every scope, not just this project, and asked for a full pass on whether memory/handoff docs were current and non-stale.

**Dev server root cause (two compounding bugs):**
1. `dev-server-daemon.sh` called `npm run serve`, but launchd runs LaunchAgents with a minimal PATH lacking `npm` — the daemon crash-looped every 5 seconds from the moment it was set up, never actually holding port 4173. The earlier session's "verified" claim was based on a point-in-time check, not a persistent one.
2. A second, unrelated LaunchAgent (`com.kicker.codexproject.localhost`) ran a health-check watchdog every 2 minutes against `/Users/carly/Library/Mobile Documents/com~apple~CloudDocs/Documents/SeaPdx` (a near-empty decoy directory, not the real project). Whenever bug 1 freed port 4173, this watchdog grabbed it with its own `python3 -m http.server` pointed at the wrong directory, so `dashboards/html/index.html` and `data/trip-data.js` 404'd even though something answered on the port.

**Fix:** `dev-server-daemon.sh` now runs `/usr/bin/python3 -m http.server 4173 --directory "$REPO_DIR"` directly instead of `npm run serve`, removing the launchd PATH dependency. The rogue watchdog LaunchAgent was unloaded and its plist renamed to `.disabled` (reversible, but must be repointed at the real project directory before ever re-enabling). Verified both `dashboards/html/index.html` and `data/trip-data.js` return 200 after the fix, with `dev-server.log` showing 200s.

**Model routing broadened to a hard rule:** Previously "Sonnet for planning" was set as a global default but the project's own `CLAUDE.md` had drifted to say implementation should *also* delegate to Sonnet, contradicting the global rule (which said execution stays on Haiku). Resolved per explicit user instruction: planning starts on Sonnet, execution runs on Haiku or lower, Opus/Fable used only when the user explicitly requires or requests it — this is now a hard rule with no per-project override, updated in `~/.claude/rules/ecc/common/performance.md` (global), this project's `CLAUDE.md`, and the `codexproject_model_routing.md`/`codexproject_dev_server_setup.md` memory notes (the latter's earlier-same-day "verified" claim was also corrected in place, not silently overwritten).

**Claude Code doctor pass (machine-wide, not project-specific):** removed a duplicate npm-global install of Claude Code that was shadowing the native install in PATH; disabled 6 skills with zero usage across 90 sessions (`caveman-compress`, `caveman-help`, `machine-setup`, `playwright-cli`, `trip-calendar-sync`, `work-feedback`); trimmed a `package.json`-duplicate command list out of this project's `CLAUDE.md`. Agent definitions, hooks, and settings files were all already healthy — no action needed there.

**Notes cleanup:** added a resolved `KNOWN_ISSUES.md` entry for the dev-server incident; corrected the stale "verified" claim in the earlier same-day memory note instead of leaving two contradictory records.

**Open items for next session:** none related to this fix — dev server confirmed serving real content post-fix. Unrelated carryovers from session 41 remain: Korean Air confirmation number still "TBD", Asiana OZ271/272 Nov 1 date still needs reconfirming directly with Asiana.

---

## 2026-08-07/08 (session 41: budget restructure, Korean Air return-to-Manila airfare added)

### COMPLETE: Folded personal purchases into the local-spend cap, merged Shopping categories, raised cap/ceiling to $2,500, added a new confirmed Korean Air booking with full flight detail on the live calendar

**Why this session happened:** The user found the budget presentation confusing — a $1,296.35 "planned local spend" figure sat next to a $2,174.25 "trip cost" figure with personal purchases ($663 Meta Ray-Ban + Bleu de Chanel) tracked separately from Shopping/keepsakes, and two different cap numbers. They wanted one combined "everything still to plan/spend" number. Separately, they provided a new Korean Air ORD-ICN-MNL booking confirmation (Mar 5-6, 2027, $658.40) to add to the airfare tracker.

**Budget restructure (`data/trip-data.js`, `dashboards/js/app.js`, `scripts/audit-budget.js`):**
- `budget.projectedTotal` now includes both itinerary stop costs and `tripCosts.plannedPurchases` (computed by the bottom-of-file IIFE) — previously `plannedPurchases` was tracked and displayed separately, which is what caused the two-different-numbers confusion.
- Merged "Coffee beans" ($60) + "Souvenirs" ($137) + planned personal purchases ($663) into one "Shopping" category ($860). Tattoo stayed its own category ($177) — not part of this merge, per explicit user instruction.
- Cap and absolute ceiling both raised to **$2,500** (was $1,250 cap / $1,300 ceiling), set equal per the user's explicit choice, covering everything except confirmed airfare/hotels. New projected total: **$1,959.35**, $540.65 under cap — the old "over ceiling" flag is gone, not hidden, because the underlying numbers no longer exceed it.
- Fixed a double-counting risk: `getPlannedAdditionalTotal()` and `renderTripCostSummary()`'s `allInTarget` previously added `getPlannedPersonalPurchaseTotal()` on top of `projectedTotal` — now that purchases live inside `projectedTotal`, those call sites were changed to stop adding it a second time. `buildTripCostBreakdown()` now returns one merged "Shopping" card instead of separate "Shopping and keepsakes" + "Personal item purchases" cards. Hero and budget copy reworded from "Local trip-spend snapshot" to "Still to plan/spend" language to reflect the broadened scope.
- `scripts/audit-budget.js` updated to compare `dayTotal + plannedPurchasesTotal` against `projectedTotal` (previously just `dayTotal`); removed the now-meaningless standalone "Coffee beans $60 cap" check since coffee beans no longer have their own category.
- Verified in-browser via `npm run serve`: all-in target $4,133.60 = $2,174.25 confirmed + $1,959.35 to plan/spend, single Shopping card renders correctly, $540.65 buffer shown against the $2,500 cap.

**New confirmed airfare — Korean Air return to Manila:**
- Added a third `tripCosts.confirmed.airfare.items` entry: ORD→ICN (KE038, B777-300ER, 14h 50m) → ICN→MNL (KE623, A330-300, 4h 20m), Mar 5-6, 2027, $658.40 total ($275 fare + $251.80 carrier-imposed fee + $40.50 taxes/fees + $91.10 seat selection). Confirmation number was not provided — stored as `"TBD"`, needs updating once known.
- Confirmed airfare total rose from $1,256.83 to **$1,915.23**; `flights.airfareTotal` and the new `flights.journeys` entry (full leg detail: times, terminals, aircraft, operator) were added to match the existing Feb 27, 2027 future-journey pattern.
- Discovered while adding this that the Feb 27, 2027 CRP→DFW→ORD future leg (already in `trip-data.js`, included in the YWFKME booking) had never been added to the live Google Calendar in any prior session. Added it now alongside the new Korean Air legs so future sessions don't lose track of either.

**Live calendar additions (`Seattle & Portland 2026` calendar, all `notificationLevel: "NONE"`):** checked the Feb 26-Mar 7, 2027 date range first (feedback: always read before writing) — empty, no conflicts. Created 4 new events: AA 3774 (CRP→DFW, Feb 27), AA 3114 (DFW→ORD, Feb 27), KE038 (ORD→ICN, Mar 5-6), KE623 (ICN→MNL, Mar 6). Each event's start/end used explicit UTC-offset ISO8601 timestamps (not the `timeZone` param, which would have overridden the offsets) so each leg's local departure/arrival time displays correctly across Central/Korea/Philippines time zones.

**Notes cleanup:** removed the now-resolved "$1,250 cap exceeded" `KNOWN_ISSUES.md` entry (cap is now $2,500 and spend is under it); added a new open item for the missing Korean Air confirmation number; updated `project_current_state.md` and `scripts/session-status.js` watch-item text.

**Open items for next session:** get the actual Korean Air confirmation number from the user and update both `trip-data.js` and the two live-calendar event descriptions (currently "TBD"); still need to reconfirm the Nov 1 Asiana OZ271/272 arrival date directly with Asiana (unrelated, carried over from session 40).

---

## 2026-08-07 (session 40: Nov 6-9 CSV reconciliation, Multnomah Falls removed, live-calendar resync)

### COMPLETE: Reconciled real Nov 6-9 receipts into the dashboard, removed the Multnomah Falls day trip in favor of a tattoo-rest day, added flight events to the live calendar for the first time

**Why this session happened:** Continuing the Nov 1-5 reconciliation from session 39, the user provided `Expenses - Sheet38.csv` with real Nov 6-9 receipts and confirmed PDX-DFW-CRP flight details, and wanted two itinerary changes: drop the Multnomah Falls/Vista House day trip (Day 8) because a tattoo appointment was added to Day 7 and needs to rest and wrap rather than doing a hiking day the next day, and keep Cartopia as a light brunch-time stop instead.

**CSV reconciliation (Nov 6-9, `data/trip-data.js`):**
- Day 6: confirmed POINT NorthWest bus times (depart PDX 8:28 AM/arrive Astoria 11:46 AM, return depart Astoria 5:55 PM/arrive PDX 9:00 PM), combined lunch/coffee/cocktail stop at $100.
- Day 7: rebuilt around the tattoo in sequence coffee -> tattoo (Shonen Tattoo, $177 incl. tip) -> Saturday Market ($50) -> Sephora perfume browse (tracked outside the trip budget) -> Pretty Ugly Burger dinner ($63) -> Novel Book Bar ($29). (Initial pass double-counted these two at $125.50/$57.50 -- CSV's aggregate line was the total, not an addition on top of the itemized cocktails/tip. Corrected same session, including the live calendar event descriptions.)
- Day 8: Multnomah Falls, Vista House, and the Columbia Gorge Express transit removed entirely. Replaced with a rest day plus brunch-time Cartopia ($50).
- Day 9: Hotel Vance breakfast ($31), corrected PDX-DFW/DFW-CRP flight times to match the confirmed AA booking (previously stale by about 50 minutes on each leg).
- Added a new "Tattoo" budget category ($177); Transportation dropped from $149 to $128 (Multnomah Falls fare removed); projected total rose from $1,049.35 (Nov 1-5 only) to **$1,296.35**, now $46.35 over the $1,250 cap but under the $1,300 ceiling -- flagged in `budget.overCeilingNote`, not hidden.

**`data/trip-data.js` self-recompute discovery:** the file has a self-executing IIFE near the bottom that recomputes `day.dayTotal` and `budget.projectedTotal` from actual per-stop `cost` fields on every load, and auto-fills `Contingency` as the remainder (clamped at 0). Hand-set `dayTotal`/`projectedTotal` are cosmetic; category amounts must stay at or below the real itinerary total or Contingency silently clamps to zero. Caught this via `npm run validate`'s category-total mismatch and rebalanced the Food category to fit.

**`dashboards/js/app.js` cleanup:** removed the dead "Multnomah Falls round trip" transportation breakdown line (referenced stops that no longer exist), removed obsolete Columbia Gorge Express / CGX exclusions from the Seattle/Portland local-transit filters.

**Live calendar resync:** read the existing Nov 6-9 events first, then deleted 48 stale events (old Multnomah Falls itinerary, stale flight times, old bus timing) and created 38 events matching the corrected itinerary -- including, for the first time, the two Nov 9 flight legs (previously the sync script never touched flights; they're now itinerary stops with real times so the existing sync path picked them up automatically).

**Notes cleanup:** narrowed `KNOWN_ISSUES.md`'s transit-verification item (Cannon Beach and Multnomah Falls watch items both resolved/retired), added a new "over ceiling" known issue, updated `project_current_state.md` and `scripts/session-status.js`'s watch-item list.

**Open items for next session:** reconfirm the Nov 1 Asiana OZ271/272 arrival date directly with Asiana. (The $1,300-ceiling-vs-real-spend question was resolved in session 41 — see above.)

## 2026-08-06 (session 39: Nov 1-9 CSV reconciliation, full live-calendar resync, Cannon Beach timing bug fixes)

### COMPLETE: Reconciled real receipts into the dashboard, discovered and fixed the local-vs-live calendar sync gap, resynced all 117 itinerary events on the actual Google Calendar

**Why this session happened:** The user had logged real receipts (with tips/tax) for Nov 1-5 in a CSV and wanted them treated as source of truth for costs, order details, and menu links; wanted "Sea'd In Capitol Hill dinner" removed since it could not be confirmed to exist; and — after confirming the Nov 1-5 dashboard fix looked right — asked for the same treatment to be extended through Nov 9 (the Portland days), with an explicit hard constraint that all calendar writes go to the "Seattle & Portland 2026" calendar only, never the personal calendar.

**CSV reconciliation (Nov 1-5, `data/trip-data.js`):**
- Overwrote roughly 20 venue costs with real receipt totals (both up and down), added correct menu/order links, and folded the CSV's itemized sub-rows into each stop's ORDER line.
- Deleted "Sea'd In Capitol Hill dinner" entirely (Nov 4) — unconfirmed venue, no replacement.
- Added a new $20 QFC Truly Hard Seltzer line item (Nov 1).
- Split Columbia Center Sky View into ticket ($40.35) + Sky View Cafe cocktail ($22).
- Recalculated day totals and budget categories; `audit-budget.js` now computes **$1,049.35** projected (was $1,069 before this session).

**Two dashboard bugs found and fixed from user screenshot review:**
- Overlapping "HAPPY HOUR MENU"/"ORDER" card text on Poquitos — an unwrapped long PDF URL was spilling past its CSS grid column. Fixed with `overflow-wrap: anywhere` on `.trip-home .detail-section p`.
- Columbia Center Sky View showing $0 in the entrance-fee breakdown — `app.js`'s `findStopCost()` does exact-string matching against `stop.name`; renaming the stop to include "+ cocktail" broke the hardcoded lookup in `buildTripCostBreakdown()`. Fixed the lookup string.

**Major discovery: local calendar "sync" never touched the live Google Calendar.** `npm run sync:calendar` (`scripts/sync-calendar-exports.js`) only regenerates local `data/google-calendar-events-nov1-9-2026.json`/`.csv` — there is no code path that calls the Google Calendar API. The live "Seattle & Portland 2026" calendar was stale: old Nov 1-5 prices, Sea'd In still present, and a completely different Nov 6-9 itinerary from an earlier plan version (Fuller's Coffee Shop, Portland Japanese Garden, Tasty n Alder, Powell's, Heart Coffee Roasters, Luc Lac HH, Tope rooftop bar, Momiji AYCE sushi, MadeHere PDX — none of which match the current Cannon Beach / Saturday Market / Multnomah Falls plan).

**Full live-calendar resync (both halves of the trip, via MCP Google Calendar tools):**
- Nov 1-5: deleted 63 stale events, recreated 69 from the corrected local export. Flights/lounge/hotel-admin events outside the itinerary structure were left untouched.
- Nov 6-9: deleted 43 stale events (including a genuine "🏨 Courtyard by Marriott Portland Check-Out" booking record, confirmation 94187007 — user explicitly confirmed deleting it since Hotel Vance is the correct current hotel) and created 48 events matching the current Cannon Beach, Saturday Market, and Multnomah Falls itinerary. Unlike Nov 1-5, the Nov 9 flight events (AA 2496 PDX→DFW, DFW layover, AA 5273 DFW→CRP) ARE part of day-9's itinerary structure in `trip-data.js` and so were included in the delete/recreate.
- All calendar writes scoped to `calendarId: b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com` with `notificationLevel: "NONE"`; the personal calendar (`limcarl83@gmail.com`) was never touched.
- Verified post-sync: 48/48 Nov 6-9 events confirmed live, zero overlaps, zero stale venue names remaining (grepped for Courtyard/Fuller's/Japanese Garden/Tasty n Alder/Powell's/Heart Coffee/Momiji/Tope/MadeHere — none found).

**Two Cannon Beach (Day 6) data bugs found while extracting the Nov 6-9 calendar export:**
- The return-bus item had `time: "TBD"` — unparseable, produced `2026-11-06TNaN:undefined:00-08:00` timestamps in the calendar export. Replaced with a concrete placeholder (4:35 PM depart / 7:05 PM arrive), keeping the existing "VERIFY TIME BEFORE BOOKING" language since the real Oregon-Point schedule is still unconfirmed.
- The POINT NorthWest boarding item was scheduled at 8:45 AM — *after* the 8:28 AM departure it was meant to precede. Shifted the whole morning sequence 30 min earlier (wake 7:00 AM, transit 7:50 AM, boarding 8:10 AM) so boarding correctly precedes departure.

**Files modified this session:** `data/trip-data.js`, `dashboards/css/styles.css`, `dashboards/js/app.js`, `data/google-calendar-events-nov1-9-2026.json`, `data/google-calendar-import-nov1-9-2026.csv`.

**Verification:** `npm run validate` passed at every step (final: `projected: 1049.35, target: 1250, ceiling: 1300, remaining: 200.65`). Live Google Calendar spot-checked via `list_events` + jq for both Nov 1-5 and Nov 6-9 ranges. Committed and pushed to `itscarly/seadpdx` main (`ae94bbd`, then `f901d3b` for the Cannon Beach timing fix).

**Open items for next session:** "Sea'd In Capitol Hill" watch item is now resolved (the venue was deleted, not just flagged). Still open: verify the real POINT NorthWest Cannon Beach return time and the real Columbia Gorge Express November schedule/fare before booking either day trip; reconfirm the Asiana OZ271/272 Nov 1 arrival date directly with Asiana.

---

## 2026-08-02 (session 38: Homepage redundancy audit, collapsible sections, budget-card grid fix)

### COMPLETE: Dashboard content/redundancy audit, unified budget grid, six default-collapsed sections

**Why this session happened:** The user asked for an audit of the public dashboard, flagging that Trip Overview, Executive Summary, and Activity Budget appeared to repeat the same spend numbers, that the flight-timing and maps/transit sections should collapse instead of dominating the page, that Reservations/Social+Dating/Rainy day/Packing needed review, and that the day-trip guides and coffee/tea/happy-hour tabs needed a freshness check. Two follow-up passes refined the layout (unequal card heights/whitespace in the budget grid, then extending the same collapsible pattern to more sections).

**Redundancy audit and fix:**
- Confirmed real duplication: the "All-in target" number was shown 3x (hero card, Trip Overview grid, Executive Summary card) and "Confirmed total" 3x across sections.
- Deleted the "Trip overview" section (`#summary` / `summaryGrid`) entirely — pure duplicate of the hero card. Removed `renderSummary()` and all its call sites in `dashboards/js/app.js`.
- Merged Executive Summary and Activity Budget into one "Trip cost" section. Removed the flat granular budget-category list (`budgetList`) since `buildTripCostBreakdown()` already nests the same Transportation/Food/Entrance/etc. numbers inside the category cards' click-to-expand breakdowns — that flat list was re-showing identical numbers at a different granularity.
- Removed a dead, always-empty `#tripCostFormula` div (and its JS/CSS) that was silently eating a grid cell.

**Unified budget-card grid:**
- All Trip Cost cards (all-in summary + 8 category cards + local-spend/buffer status) now render inside one CSS grid (`.budget-panel--unified`, `display: contents` on the three inner containers) with 4 columns, `align-items: stretch`, responsive to 2-col/1-col on smaller screens.
- Found and fixed a leftover `.budget-list .budget-item:last-child { grid-column: 1 / -1 }` rule from the old 3-column layout — it was forcing the Contingency card onto its own full-width row instead of sitting alongside Local spend vs. cap and Buffer left. Overrode it to `grid-column: auto` inside the unified panel.

**Six collapsible sections:**
- Added native `<details>`/`<summary>` (no JS needed for the mechanics) to Trip cost, Day-by-day route, Booked flights, Planning guides, Maps and transit, and Utility pages — all default-collapsed on load.
- Styled the `<summary>` toggle with a filled `--accent-soft` background, chevron icon, and an explicit "Click to expand"/"Click to collapse" label so the affordance is impossible to miss (user's prior version used a bare bordered strip that "couldn't be noticed").
- Added `initCollapsibleAnchors()` in `app.js` so clicking any `#hash` link (hero nav, "Jump to totals") auto-opens the `<details>` ancestor/descendant of its target — otherwise those links would scroll to a collapsed, empty-looking section.

**Guides tab cleanup:**
- Removed "Social + Dating" tab entirely (button + `data.guides.socialDating` array deleted from `data/trip-data.js`).
- Merged "Rainy day" and "Packing" into one "Rainy day + packing" tab with two subsections via a new `rainyPacking` case in `renderGuide()`.
- Found and removed a duplicate `photoOps` key in `data/trip-data.js`'s `guides` object that was silently shadowing itself (harmless but dead).
- Reviewed Reservations content per user request: of 4 entries, only Poquitos Capitol Hill is an actual bookable restaurant reservation; the other three (Best Buy Meta fit-check, Hotel Vance Amazon delivery call, Portland Japanese Garden note) are logistics/notes, not reservations. Left the tab structure as-is (not asked to restructure it) and reported the finding to the user directly.

**Verified, not changed:**
- Flight-schedule risk: the Asiana OZ271/272 Sunday-vs-published-schedule mismatch was already correctly flagged in `data/trip-data.js` (`scheduleRisk` field, alert copy on the journey card) — matches the open watch item, nothing new needed.
- "4 Seattle days, 5 Portland or transfer days" hero fact: confirmed correct — it's computed live in `renderHeroFacts()` from each day's `city` tag (Days 1-4 tagged Seattle, Days 5-9 tagged Portland including the Nov 5 Amtrak transfer day), not hardcoded, and matches the 9-day Nov 1-9 span.

**Files modified this session:** `dashboards/html/index.html`, `dashboards/js/app.js`, `dashboards/css/styles.css`, `data/trip-data.js`, `notes/TASKS.md`, `notes/CHANGELOG.md`, `notes/Project Log.md`, `notes/memory/active/project_current_state.md`, `notes/memory/active/SESSION_START.md`.

**Verification:** `npm run validate` passed at every step (`projected: 1069, target: 1250, ceiling: 1300, remaining: 181`). Live-checked in Chrome via `npm run serve`: no console errors, unified grid renders with no orphaned rows, all six collapsibles default-closed with visible toggles and expand/collapse correctly, anchor-link auto-expand confirmed.

**Open items for next session:** unchanged from session 37 — see the four open watch items at the top of `notes/memory/active/project_current_state.md` (Cannon Beach return time, Multnomah Falls bus schedule, "Sea'd In Capitol Hill" existence, Asiana Nov 1 date reconfirmation).

---

## 2026-08-02 (session 37: Full price audit, transportation accuracy, day-trip guides, memory cleanup)

### COMPLETE: Comprehensive price correction, dashboard transparency fixes, and stale-memory cleanup

**Why this session happened:** After session 36's audit, the user found that many itinerary line items were still badly underpriced (some 4-8x, e.g. Pike Place snacks shown at $1-2 when real prices are $6-14), that the Transportation budget category didn't reflect real day-trip bus costs, that Cannon Beach and Multnomah Falls had no rider-facing guide despite being committed day trips, and that project memory still had the Portland hotel backwards (claiming Courtyard was active and Hotel Vance should be cancelled, when it's the reverse).

**Price audit (two passes, `data/trip-data.js`):**
- First pass only corrected 3 coffee-bean stops (Rachel's Ginger Beer $2→$8, Analog Day 4 $18→$24, Stumptown Day 6 $20→$26) — user caught that this left the rest of the previously-documented audit findings unapplied.
- Second pass applied the full remaining list: Pike Place snacks (Piroshky $2→$9, Beecher's $2→$11, Daily Dozen $2→$9, Mee Sum $2→$9, MarketSpice $1→$8), Glo's Cafe breakfast $18→$32, FOB Sushi $38→$42 (corrected: it's weight-based, not AYCE), Harbour Public House $32→$42, Blackbird Bakery $10→$14, Saint John's happy hour $18→$22, Uneeda Burger $26→$28, Ballard Coffee Works $8→$11, Sea'd In $45→$55 (flagged: could not confirm this restaurant exists), Luc Lac $50→$52, Pretty Ugly Burger $35→$48, Novel Book Bar $25→$42, Cartopia $30→$35.
- Budget categories updated to match: Food $450→$572, Cocktails and social $100→$121. Projected total moved from $926→$1,069 (Food $468 intermediate step from the first pass).
- `npm run validate` confirmed the itemized day-by-day sums, category sums, and projected total all reconcile exactly at every step.

**Transportation category accuracy fix:**
- Discovered the Transportation budget category was stale at $95 while the real itemized transit cost (Seattle transit, Bainbridge ferry, Amtrak, Cannon Beach bus, Multnomah Falls bus, Portland local transit) actually totals $149.
- Corrected the category to $149 and reduced Contingency from $66 to $12 to keep the overall $1,069 total unchanged — this is a relabeling fix, not new spend.
- Fixed `dashboards/js/app.js`'s `buildTripCostBreakdown()` Transportation section to show explicit "Cannon Beach round trip ($36)" and "Multnomah Falls round trip ($16)" lines, and fixed the Seattle/Portland local-transit filters, which previously had gaps (e.g. excluded "Intercity rail" but not "Intercity bus") that caused the day-trip bus fares to be silently dropped or double-counted. Verified line-by-line with a script that every dollar of the real $149 total is now accounted for exactly once.

**Day-trip guides added:**
- New `guides.dayTrips` array in `data/trip-data.js` with full step-by-step guides for Cannon Beach/Haystack Rock (Day 6) and Multnomah Falls/Vista House (Day 8): booking links, exact departure times, tide-pool/Vista House notes, and explicit "verify before booking" flags on the unconfirmed return times.
- New "Day trip guides" tab added to the Planning Guides section in `dashboards/html/index.html` (uses the existing generic guide-card renderer, no new render function needed).

**UI change — "How This Total Works" chevron:**
- Moved the formula block out of its own separate section and into a collapsible chevron on the All-in Target card in `dashboards/js/app.js`, reusing the existing `.budget-item--expandable` pattern. Added matching chevron-rotation CSS to `dashboards/css/styles.css`.

**Japanese Garden clarification:**
- Confirmed its missing price is correct behavior (it's an intentionally skipped/optional stop, not an active budget item). Added its real $19.95 adult admission to the guide note for reference.

**Memory and handoff cleanup (this pass):**
- Rewrote `notes/memory/active/project_current_state.md` — it had the Portland hotel completely backwards (said Courtyard was active, Vance should be cancelled). Corrected to reflect Hotel Vance as the real active booking.
- Corrected stale Courtyard/Kraken/wrong-total references in `notes/PROJECT_CONTEXT.md`, `notes/KNOWN_ISSUES.md`, `notes/MAINTENANCE.md`, `notes/PROJECT_MEMORY.md`, and `notes/memory/active/project_calendar.md` (which still described a Reside Seattle Downtown + Courtyard Portland base from session 17).
- Updated `notes/memory/active/MEMORY.md` index line for `project_current_state.md` to match the corrected file.
- Fixed a real code bug in `scripts/session-status.js`: it hardcoded a stale $871.98 hotel total and a phantom "Seattle Kraken home-game tickets" watch item that doesn't exist anywhere in the live data. Rewrote it to load `data/trip-data.js` directly and print live numbers, so this can't go stale again.
- Committed the backlog of legitimate but previously-uncommitted changes from the July 5 GitHub repo rename (`itscarly/seadpdx`), which had been sitting in the working tree unstaged.

**Files modified this session:** `data/trip-data.js`, `dashboards/js/app.js`, `dashboards/css/styles.css`, `dashboards/html/index.html`, `scripts/session-status.js`, `notes/memory/active/project_current_state.md`, `notes/memory/active/project_calendar.md`, `notes/memory/active/MEMORY.md`, `notes/PROJECT_CONTEXT.md`, `notes/KNOWN_ISSUES.md`, `notes/MAINTENANCE.md`, `notes/PROJECT_MEMORY.md`, `notes/Project Log.md`, `notes/CHANGELOG.md`, `notes/TASKS.md`, `tasks/todo.md`.

**Verification:** `npm run validate` passes clean at every step (`projected: 1069, target: 1250, ceiling: 1300, remaining: 181`).

**Open items for next session:**
- Verify the exact POINT NorthWest return time from Cannon Beach (Day 6) and the Columbia Gorge Express November schedule/fare for Multnomah Falls (Day 8) — both flagged "confirm before booking" in the itinerary and guides.
- Confirm whether "Sea'd In Capitol Hill" (Day 4 dinner) is a real, bookable restaurant — could not verify via research.
- Reconfirm the Nov 1 Asiana OZ271/272 arrival date directly with Asiana; the airline's published schedule notice lists that route as Mon/Tue/Wed/Fri/Sat, not Sunday.
- Consider whether the "Cocktails and social" category's $121 (vs. the $79 sum of pure bar-only stops, with meal-bundled cocktails counted separately under Food) should be tightened to an exact sum — currently left as an intentional buffer, flagged to the user, not yet resolved either way.

---

## 2026-08-02 (session 36: Dashboard comprehensive audit)

### COMPLETE: Full dashboard audit and consistency verification

**Audit scope:**
- Verified all displayed numbers match underlying data (itinerary days, hotel costs, budget categories).
- Checked hotel references across 4 files for consistency (data, JS rendering, HTML, logistics).
- Confirmed Kraken removal was complete across all locations.
- Verified last-verified date, day counts, transit filters, map headings.

**What was fixed:**
- **Last verified date**: Updated from "June 27, 2026" to "Aug 2, 2026" in trip-data.js.
- **Day-count double-counting**: Fixed city filter logic. Transitional days (5, 6, 8, 9) changed from "Seattle to Portland" to just destination city. Corrected display: 4 Seattle days, 5 Portland days.
- **Hotel name consistency**: Updated 5 scattered references from "Courtyard Portland" to "Hotel Vance, a Tribute Portfolio Hotel" across trip-data.js, app.js, and index.html.
- **Hotel links**: Made hotel names in Trip Anchors clickable with links to theboylstonseatle.com and hotelvanceportland.com.
- **Kraken removal verification**: Confirmed removal from 4 locations (trip-data.js itinerary, budget note, app.js breakdown and exclusion warning, logistics.html card).
- **Budget display**: Corrected logistics.html hotel cost from $895.46 to $917.42 to match updated total.
- **Map heading**: Updated Portland map heading from "Courtyard Portland base" to "Hotel Vance Portland base".

**Files modified:**
- `dashboards/js/app.js` (hotel links, hotel name references, transit filter, Kraken removal)
- `dashboards/html/index.html` (removed stale Kraken Watch card)
- `dashboards/html/logistics.html` (hotel cost display fixed)
- `data/trip-data.js` (verifiedOn, city filters, hotel references)

**Changes pushed to GitHub:**
- Both commits pushed to origin/main; GitHub.io site updated.

**Verification:**
- Ran `npm run serve` — dashboard displays correctly with all fixes applied.
- Verified hotel links work and open in new tabs.
- All budget calculations recalculated correctly after fixes.

---

## 2026-08-02 (session 35: Portland itinerary restructure + Cannon Beach & Multnomah Falls day trips)

### COMPLETE: Major Portland itinerary overhaul with public-transit day trips

**What changed:**
- **Removed Kraken hockey ticket**: Deleted the $120 Seattle Kraken game (Nov 4) from itinerary, budget categories, and guides.reservations. Updated budget entrance-fees amount from $225.5 to $105.5.
- **Updated accommodations**: Replaced Courtyard Portland City Center ($391) with Hotel Vance, a Tribute Portfolio Hotel ($412.96). Updated total hotel costs to $917.42.
- **Restructured Portland days (Nov 6-8)**:
  - Day 6 (Fri Nov 6): Replaced Japanese Garden + Powell's with **Cannon Beach/Haystack Rock day trip** via POINT NorthWest bus.
  - Day 7 (Sat Nov 7): Moved Saturday Market here (was on old Day 8).
  - Day 8 (Sun Nov 8): Replaced Saturday Market with **Multnomah Falls/Vista House** via Columbia Gorge Express + Cartopia food carts.
- **Budget recalculation**: Updated categories to match new projected total of 926.
- **Created comprehensive day-trip guides**: New file `notes/day-trip-guides.md` with full instructions for both Cannon Beach and Multnomah Falls.

**Files modified:**
- `data/trip-data.js` (Days 6, 7, 8 itinerary; budget; hotel data)
- `notes/day-trip-guides.md` (new file)

**Verification:**
- Ran `npm run validate` — syntax OK, budget balanced, calendar synced 118 events.

# Project Log

## 2026-07-19 (session 34: Localhost dashboard watchdog repair)

### COMPLETE: Local dashboard URL restored and health check hardened

**What changed:**
- Restored `http://127.0.0.1:4173/dashboards/html/index.html` by restarting the existing `com.kicker.codexproject.localhost` LaunchAgent.
- Updated `scripts/ensure-localhost.sh` so the watchdog now checks the actual dashboard URL instead of accepting a generic root response.
- Made the watchdog start Python with an explicit `--directory /Users/carly/Library/Mobile Documents/com~apple~CloudDocs/Documents/SeaPdx` argument.
- Aligned `npm run serve` with the same explicit-directory behavior.

**Root cause:**
- The LaunchAgent process was still listening on port `4173`, but it served 404s for the dashboard path. The watchdog only checked `/`, so it could miss a broken dashboard route.

**Verification:**
- Confirmed the dashboard URL returns `HTTP/1.0 200 OK`.
- Confirmed LaunchAgent `com.kicker.codexproject.localhost` is running with the repaired helper.
- Ran `npm run validate`.

**Prevention:**
- Future watchdog checks must validate the real dashboard entrypoint, not only that the port has some HTTP listener.

---

## 2026-07-05 (session 33: GitHub repo rename to `itscarly/seadpdx`)

### COMPLETE: Repo identity and public host updated to the new GitHub name

**What changed:**
- Renamed the GitHub repository from `itscarly/my_projects` to `itscarly/seadpdx`.
- Updated the local `origin` remote so this checkout now points directly at `https://github.com/itscarly/seadpdx.git`.
- Updated the GitHub About homepage to the new published Pages URL.
- Replaced stale repo and Pages links in the public docs and active notes.
- Updated `data/trip-data.js` so generated calendar backlinks now target the new `/seadpdx/` public path.

**Files modified:**
- `README.md`
- `docs/deployment.md`
- `data/trip-data.js`
- `data/google-calendar-events-nov1-9-2026.json`
- `data/google-calendar-import-nov1-9-2026.csv`
- `tasks/todo.md`
- `tasks/lessons.md`
- `notes/PROJECT_CONTEXT.md`
- `notes/CHANGELOG.md`
- `notes/TASKS.md`
- `notes/Project Log.md`
- `AGENTS.md`

**Verification:**
- Confirmed the renamed repo resolves at `https://github.com/itscarly/seadpdx`.
- Confirmed the GitHub Pages API now reports `https://itscarly.github.io/seadpdx/` as the live published site URL.
- Confirmed the local `origin` remote now points at `https://github.com/itscarly/seadpdx.git`.
- Ran `npm run validate` after regenerating the calendar export artifacts.

**Result:**
- The repo name, local checkout, public Pages host, docs, and generated itinerary backlinks now all agree on `seadpdx`.

---

## 2026-07-05 (session 32: GitHub repo presentation + hygiene cleanup)

### COMPLETE: Public repo homepage and source-tree hygiene tightened

**What changed:**
- Rewrote `README.md` so the repo homepage now leads with the live GitHub Pages links, current trip snapshot, local commands, deploy flow, and the static-site operating rules.
- Reframed `docs/deployment.md` around GitHub Pages as the canonical public host and demoted Netlify to an optional fallback.
- Removed the tracked `notes/.obsidian` working-state files so the public repo stores only the markdown notes, not editor-state noise.
- Fixed the stale post-task reminder that still described the old Kraken-only automation wording.
- Corrected `.gitignore` so the tracked `package-lock.json` is no longer listed as ignored.

**Files modified:**
- `README.md`
- `docs/deployment.md`
- `.gitignore`
- `hooks/post-task.md`
- `notes/.obsidian/.gitignore` (deleted)
- `notes/.obsidian/appearance.json` (deleted)
- `notes/.obsidian/graph.json` (deleted)
- `tasks/todo.md`
- `tasks/lessons.md`
- `notes/CHANGELOG.md`
- `notes/Home.md`
- `notes/TASKS.md`
- `notes/LEARNINGS.md`
- `notes/MAINTENANCE.md`
- `notes/Project Log.md`

**Verification:**
- Confirmed the GitHub Pages site responds at `https://itscarly.github.io/seadpdx/`.
- Confirmed GitHub CLI auth is active for the repo owner, then updated the GitHub About metadata:
  - description
  - homepage URL
  - topics
- `npm run audit:notes` passed after restoring the required `[[DECISIONS]]` home-note link.

**Result:**
- The repo is easier to understand from the GitHub homepage, the docs now point to the right live host, and the source tree is cleaner for future releases.

---

## 2026-07-05 (session 30: Maps/transit atlas alignment)

### COMPLETE: Seattle and Portland atlas cards now align cleanly

**What changed:**
- Tightened the day-pill sizing inside the atlas summaries.
- Replaced the desktop atlas summary auto-fit behavior with a stable five-slot row so Portland no longer drops one extra day pill onto a second line.
- This keeps both maps in `Route shape, walkability, and transit essentials` starting on the same horizontal line instead of the Portland card looking lower and heavier.

**Files modified:**
- `dashboards/css/styles.css`
- `tasks/todo.md`
- `tasks/lessons.md`
- `notes/TASKS.md`
- `notes/CHANGELOG.md`
- `notes/Project Log.md`
- `notes/LEARNINGS.md`

**Verification:**
- `npm run validate` passed.
- Browser verification at `1440px` confirmed:
  - atlas summary heights: `100px / 100px`
  - atlas map top positions: `733.23px / 733.23px`
  - atlas card heights: `553.03px / 553.03px`

**Result:**
- The maps/transit section now reads as one clean paired block instead of one card sagging lower than the other.

---

## 2026-07-05 (session 29: One-line route copy + activity labels)

### COMPLETE: Itinerary weather lines, flight-card balance, and route-chip labels corrected

**What changed:**
- Kept the long `Local trip-spend snapshot... target ... ceiling` headline on one line at desktop width instead of letting it drop to a second row.
- Applied the same desktop-only one-line treatment to the reported day theme + weather sentence so the route rows scan more like concise planning headers.
- Reworked the flight-journey cards into a stable internal grid and tightened the title/story sizing so the arrival and return cards now read as a matched pair.
- Added visible labels on the open route chips so each stop is easier to classify at a glance: `Transit`, `Walk`, `Buffer`, `Photo ops`, `Coffee`, `Meal`, `Cocktails`, and `Happy hour`.

**Files modified:**
- `dashboards/js/app.js`
- `dashboards/css/styles.css`
- `dashboards/html/index.html`
- `dashboards/html/logistics.html`
- `tasks/todo.md`
- `tasks/lessons.md`
- `notes/TASKS.md`
- `notes/CHANGELOG.md`
- `notes/LEARNINGS.md`

**Verification:**
- `npm run validate` passed.
- Browser verification at `1440px` confirmed:
  - overview subtitle renders as `1` line
  - executive-summary subtitle renders as `1` line
  - activity-budget headline renders as `1` line
  - first day theme + weather line renders as `1` line
  - homepage flight-card heights measure `708.56px / 708.56px`
  - route-chip labels render with visible category tags in the opened day view

**Result:**
- The itinerary now scans faster, the flight board feels more even, and the day chips communicate stop intent without making the user infer everything from venue names.

---

## 2026-07-05 (session 28: Desktop width + subtitle wrap cleanup)

### COMPLETE: Screenshot-specific width and spacing complaints corrected

**What changed:**
- Widened the homepage content shell and rebalanced the hero desktop columns so the right-side cards extend further left instead of looking detached from the main copy.
- Increased the hero bullet size and bullet markers so the four trip facts read more like important planning highlights.
- Removed the desktop max-width cap from homepage subtitle copy and slightly raised the subtitle size so overview and executive-summary descriptions stay on one line when the row has room.
- Stopped the overview and executive-summary secondary cards from stretching to the tallest sibling card, which removed the large dead-air look.
- Slightly widened the right-rail typography treatment so the trip anchors card reads more comfortably after the column rebalance.

**Files modified:**
- `dashboards/css/styles.css`
- `tasks/todo.md`
- `notes/TASKS.md`
- `notes/CHANGELOG.md`

**Verification:**
- `npm run validate` passed.
- Browser verification at `1440px` confirmed:
  - hero bullet font size now measures `16.48px`
  - hero marker size now measures `10px`
  - hero columns now render at roughly `739px / 629px` with a `16px` gap
  - the reported overview subtitle renders as `1` line
  - the reported executive-summary subtitle renders as `1` line

**Result:**
- The desktop homepage now uses its width more efficiently, the hero support bullets feel intentional, and the secondary cards no longer look stretched or underfilled.

---

## 2026-07-05 (session 27: Screenshot-guided wrap and sizing fixes)

### COMPLETE: Specific typography and blank-section issues corrected from screenshot review

**What changed:**
- Reduced the hero title scale so `Seattle + Portland trip command center` no longer dominates the left column and creates avoidable line breaks.
- Widened the hero-copy and subtitle copy behavior so the intro sentence and the section subtitles use more of the available row before wrapping.
- Reduced the hero `All-in trip target` value size and the executive summary total size so the `PHP` conversion line feels balanced instead of oversized.
- Reduced overview-card minimum height and summary value sizing so those four cards do not carry so much empty lower space.
- Restored the `Photo ops` tab by calling `initReveal()` after the photo cards are inserted into `#guidePanel`.

**Files modified:**
- `dashboards/css/styles.css`
- `dashboards/js/app.js`

**Verification:**
- `npm run validate` passed.
- Browser verification confirmed:
  - hero title size reduced to `56.8px`
  - hero right-card value reduced to `38.4px`
  - executive summary value reduced to `43.2px`
  - overview summary values reduced to `23.68px`
  - `Photo ops` rendered `4` guide cards with `0` hidden cards

**Result:**
- The page now uses the width more naturally, the key numbers feel proportional, and the blank `Photo ops` section is fixed.

---

## 2026-07-05 (session 26: Conservative homepage compaction + reveal reliability)

### COMPLETE: Homepage tightened without changing the overall look

**What changed:**
- Kept the current palette and card language, but trimmed the homepage-specific spacing and typography inside the `.trip-home` override layer instead of touching the global base system.
- Reduced the visual bulk of the hero, section headings, summary cards, budget panels, day rows, stop chips, detail panels, guides, maps, flights, and logistics blocks by about `10-15%`.
- Shrunk pills, chips, tabs, and buttons so they still feel tappable on mobile but no longer dominate the page like landing-page CTAs.
- Repacked the itinerary rows so each day header and route timeline carries more signal per screen before the layout wraps.

**Reveal bug fix:**
- Updated `initReveal()` in `dashboards/js/app.js` to reveal the first batch of `[data-reveal]` items immediately and then fall back to a timed reveal for any still-hidden cards.
- This prevents the lower guide, map, transit, and logistics sections from looking blank during quick jumps, screenshot runs, or non-interactive rendering.

**Files modified:**
- `dashboards/css/styles.css`
- `dashboards/js/app.js`
- `tasks/todo.md`
- `notes/TASKS.md`
- `notes/CHANGELOG.md`

**Verification:**
- `npm run validate` passed.
- Headless browser checks passed at:
  - desktop `1440px`
  - tablet `980px`
  - mobile `390px`
- Verified measurements from the browser pass:
  - section top padding reduced to `22px`
  - day header padding reduced to `18px` desktop / `16px` mobile
  - stop-chip minimum width reduced to `194px`
  - hidden reveal items after load: `0`

**Result:**
- The page now feels shorter, calmer, and more editorial without looking collapsed.
- The lower sections now render reliably instead of reading as empty blocks before they intersect.

---

## 2026-07-05 (session 25: Premium travel dashboard visual redesign – editorial aesthetic)

### COMPLETE: Full visual overhaul from gray admin tool to warm, refined travel operating interface

**What changed:**

**Color system redesign — travel-grounded palette:**
- Page background: `#f5f4f0` (warm mist gray, like old atlases/linen, not generic off-white)
- Card surface: `#ffffff` (clean white for content contrast)
- Text hierarchy: `#1d1d1f` (Apple dark gray, readable, not harsh black), `#6e6e73` (secondary), `#8a8a8f` (tertiary)
- Primary accent: `#1f7b4d` (forest green, travel authority/navigation, not corporate blue)
- Warm secondary: `#d4956f` (muted terracotta, travel category/planning accent)
- Borders/shadows: subtle Apple-style `rgba(29,29,31,0.08)` + refined `0 2px 8px` soft shadows

**Route marker — signature visual element:**
- Added SVG route line above hero (Seattle → Portland city dots + connector line)
- Minimal, non-decorative, signals "travel dashboard" at a glance
- Uses forest green primary color with subtle opacity gradient
- Takes up ~120px width, centered, grounds design in subject matter (travel logistics)

**Typography hierarchy — editorial travel, not corporate:**
- Hero title: `44-52px` weight 700 (one bold moment: "Seattle + Portland")
- Section titles: `28-34px` weight 600 (refined, not aggressive)
- Card titles: `16-18px` weight 600
- Metric values: `24-32px` weight 600 (secondary spend) / 700 only for All-in target
- Body: `13-15px` weight 400-500
- Labels: `11-12px` weight 500
- All-in target number is the only 700-weight secondary element (signature focus)

**Card system — unified, intentional (5 types):**
1. Trip status card (All-in target): 24px padding, 18px radius, solid white, subtle border/shadow
2. Metric card (overview): 20px padding, refined small metric fonts
3. Trip anchors card: 24px padding, 2x2 grid
4. Facts strip: horizontal flex row, warm accent (#d4956f) dots, vertical dividers
5. Base card style: all use `--radius-card:18px`, `var(--border-subtle)`, `var(--shadow-card)` (unified look)

**Hero composition refinements:**
- Removed decorative blur effects (no fuzzy background blobs)
- Clean neutral background for maximum clarity
- All-in trip target card: FX disclosure hidden by default, progress bar refined (6px height, forest green fill)
- Trip anchors: refined 2x2 grid with larger 16px spacing
- Hero title: 44-52px clamp (not 72px), max-width 14ch (allows natural wrapping)
- Facts strip: 12px border-top/bottom, warm accent dots (#d4956f), 18px gap between items

**Button and interaction refinement:**
- Primary button background: forest green (#1f7b4d, not dark gray)
- Subtle hover state: -1px translateY, minimal shadow lift
- Disclosure/chevron patterns consistent across all expandable sections

**Design philosophy validated:**
- Warm mist gray (not cool gray/beige) places page in travel context
- Forest green (not blue) signals navigation/outdoors authority
- Terracotta warm accent (not orange) adds visual interest to secondary elements without chaos
- Minimal shadows (0 2px 8px, not 0 12px 24px) maintain sophistication
- No gradients, no blur, no photos — restraint
- Route marker is the one signature element that differentiates from generic dashboards

**Files modified:**
- `dashboards/html/index.html` — added route-marker SVG element with Seattle/Portland cities + connector line
- `dashboards/css/styles.css` — updated :root palette (12 new/updated color variables), hero styling (removed blur effects, added route-marker CSS), typography hierarchy (refined font-sizes/weights), card system (unified 18px radius + shadows), button colors (forest green primary), all base card selectors

**Verification:**
- `npm run validate` passed (syntax + budget + calendar sync all clean)
- Browser visual: page background warm #f5f4f0, forest green accent on primary button, route marker visible, cards refined with unified styling, typography clearly hierarchical

**Result:**
Dashboard now feels like premium travel software (Apple Maps/Travel aesthetic) — warm, refined, calm, spatial, intentional, high-density. No longer gray admin tool or generic spreadsheet. Route marker + color system + typography + card discipline all work together to create cohesive travel context.

---

## 2026-07-05 (session 24: Hero + overview redesign – compact responsive dashboard)

### COMPLETE: Dashboard hero and overview rebuilt as compact single-screen status board

**What changed:**
1. **Removed duplicate navigation** — deleted `.dashboard-panels` pill nav section (`index.html:82-88`, `styles.css:5499-5544`), kept single `.topbar` anchors to all sections.
2. **Restructured hero markup** — removed `<aside class="hero-panel-stack">` wrapper, promoted `.trip-card` and `.hero-note-card` to direct grid siblings of `.hero-copy` so 3-column grid applies directly.
3. **Redesigned hero grid** — changed from 2-col `1.2fr/0.8fr` to responsive 3-col `minmax(0,1.45fr) minmax(320px,0.8fr) minmax(280px,0.65fr)` at desktop; tablet (≤1023px) stacks to 2-col left+right; mobile (≤767px) single column.
4. **Simplified hero title** — changed from "Seattle + Portland trip command center" to h1:`Seattle + Portland` (40-52px clamp) + p.hero-kicker:`trip dashboard` (16px, 500 weight).
5. **Consolidated `:root` token blocks** — merged 3 separate `:root` blocks into 1 unified block (lines 3-61), updated stale warm-cream bg values to neutral palette (--bg-page: #e5e5e7, --bg-card-soft: #f0f0f2).
6. **Compacted All-in trip target card** — padding 22px→16px, solid background, wrapped `.fx-panel` in native `<details>` with `.card-disclosure` chevron (reuses Maps/Flights disclosure pattern), so exchange rate details collapse by default.
7. **Updated fx-disclosure styling** — new CSS for `<details>` + `<summary>` with rotating chevron (180° transform on `[open]`), compact spacing.
8. **Trip anchors → compact 2x2 grid** — reduced gap/padding, kept 2-col layout, styled .hero-note-card and .hero-note-grid with unified radius/border/shadow.
9. **Facts strip redesign** — changed `.hero-facts-list` from 2-col grid to flex row with vertical dividers between items (border-right), removed floating card override, removed ::before dot (display: none), 13px font/500 weight.
10. **3-card overview grid** — removed "Route footprint" 4th card from `app.js` cards array (lines 640-644), reduced to 3 cards; shortened support text ("Airfare + hotels", "Activity, food, transport", "Meta Ray-Ban glasses + cologne").
11. **Shrunk summary-card--editorial** — min-height 156px→100px, padding 18px→14px, reduced font-size clamp max, unified border/radius/shadow to card system.
12. **Updated summary-grid--editorial** — changed from 4-col fixed grid to responsive auto-fit `repeat(auto-fit, minmax(220px,1fr))` (3-4 cards depending on width), gap 16px→14px.
13. **Typography hierarchy pass** — rewrote `.trip-card strong`, `.summary-card--editorial` label/strong/p, `.hero-note-label`, `.fx-label` to enforce: 400-500 weight for support copy, 600 for card metrics/titles, 700 only for hero h1 and All-in target number (one place boldness is spent).
14. **Renamed overview section** — changed from "High-signal numbers before you dive into the route" to just `Trip snapshot`.
15. **Responsive breakpoints** — added media queries for tablet/mobile hero grid stack + shrink gutters, confirmed CSS cascades correctly.

**Verification:**
- `npm run validate` passed.
- Browser visual check (1440px): hero fits comfortably on screen (no oversized empty space), no duplicate nav, cards compact and properly defined, FX disclosure chevron rotates and expands/collapses correctly, facts strip displays as horizontal divider-separated line, 3-card grid renders with auto-fit responsive columns.
- Disclosure chevron rotates 180° on open, FX details hidden by default, expand on click.
- All card types (trip, hero-anchors, summary) use unified `--radius-card:16px`, `var(--border-subtle)`, `var(--shadow-soft)`.

**Files modified:**
- `dashboards/html/index.html` (hero markup restructure, pill nav deletion, hero title + kicker, fx-disclosure HTML)
- `dashboards/css/styles.css` (consolidated 3 :root blocks → 1, deleted duplicate selectors, rewrote hero-grid/trip-card/hero-note-card/summary-card/fx-disclosure/facts-list with new specs, added media queries, typography hierarchy pass)
- `dashboards/js/app.js` (removed 4th "Route footprint" summary card, shortened support text to 1-2 word labels)

**Root cause of earlier "report-like" feel (from session 23 feedback):**
- CSS had 3 separate `:root` blocks + 10+ duplicated selector declarations (hero-grid, trip-card, summary-card all declared 3-6 times each) with conflicting values.
- Each past polish pass layered new overrides instead of consolidating (e.g., hero-grid declared at lines 2637, 3248, 3276, 3287, 3865, 4809, 5106 — last one wins, so styles were inconsistent).
- 4-card overview grid + oversized cards (156px min-height) + large typography made the page vertically stretched.
- Duplicate nav + tall hero = lost screen real estate to navigation before content even started.
- Floating card facts + separate topic cards (no clear grouping) + everything bold black = flat visual hierarchy.

**Solution:**
- Single-pass CSS consolidation (delete duplicates, keep one, edit to spec).
- Responsive auto-fit grid shrinks cards as needed, fits 3-4 items depending on width instead of fixed 4-col.
- Collapse secondary details (FX rates, formula, breakdowns) so primary numbers/state jump out.
- Compress hero title (40-52px vs 72px), reduce card padding/gaps, use flex row for facts.
- Typography hierarchy: support text 400-500, card labels 600, only target number 700.
- Result: fits one screen, clear scanning path (Budget → Banks → Facts), progressive disclosure for detail.

---

## 2026-07-05 (session 23: Dashboard redesign – restore original clarity + confidence)

### COMPLETE: Dashboard visual system rebuilt to restore original's structural clarity with modern polish

**What changed:**
1. Diagnosed design degradation: original dashboard (GitHub) had neutral gray bg + strong blue accents + defined white cards = clear hierarchy. Current version (after session 21 Impeccable polish) had warm cream bg (#f6f5f1) + Warm Rust labels + frosted glass cards = blended, "cheap" appearance.
2. Root cause: session 21 applied generic "premium consumer default" palette (warm cream + muted colors + frosted glass blur) that appears on any luxury brand regardless of subject matter.
3. **Redesign approach:** Restore original's structural clarity (neutral gray bg, strong blue accents, solid white cards with definition) while keeping modern polish (spacing rhythm, typography hierarchy, refined interactions, motion curves).
4. **CSS palette overhaul** (dashboards/css/styles.css, :root variables):
   - `--bg: #f6f5f1 → #e5e5e7` (warm cream → neutral gray, matching original)
   - `--panel: rgba(255,255,255,0.82) → #ffffff` (semi-transparent → solid white, stronger definition)
   - `--ink: #161714 → #000000` (warm brown text → black, stronger contrast)
   - `--accent: #1667c9 → #0056b3` (original blue → stronger action blue)
   - `--accent-3: #b46a2c → #0056b3` (Warm Rust accent → strong blue, removed warm palette)
   - `--shadow`, `--shadow-soft` changed from soft ambient to crisper shadows
   - Removed `backdrop-filter: blur(12px)` from cards (frosted glass anti-pattern eliminated)
   - Changed card borders from barely-visible (`rgba(255,255,255,0.75)`) to defined (`rgba(0,0,0,0.12)`)
5. **Fixed overriding selector:** `body.trip-home` had warm gradient background that was blocking the new CSS variables; replaced with solid neutral gray `#e5e5e7` and updated text color to use `var(--ink)`.

**Verification:**
- `npm run validate` passed (all data, JavaScript syntax, budget audit, calendar sync clean).
- Browser visual inspection after hard refresh: neutral gray background now displays correctly, white cards stand out with clear definition, text is black with strong contrast.
- Color palette matches original's clarity:
  - Neutral gray background (#e5e5e7) ✓
  - Solid white cards (#ffffff) ✓
  - Black ink (#000000) ✓
  - Strong action blue (#0056b3) ✓
  - Crisper shadows ✓

**Files modified:**
- `dashboards/css/styles.css` (3 major edits: :root palette, body background, body.trip-home selector)

**Design philosophy confirmed:**
- Original design was RIGHT: neutral clarity + strong accent blue + defined structure = visual confidence.
- Generic defaults are WRONG: warm cream + muted colors + blur = templated appearance that reads "expensive middlebrow" regardless of subject matter.
- **Lesson:** Ground design in subject matter (travel logistics, clarity, precision), not in cross-domain luxury defaults. The original dashboard WAS grounded in its subject; the warm palette was an accidental overlay, not a deliberate choice.

---

## 2026-07-05 (session 22: Impeccable design polish – Maps section)

### COMPLETE: Maps section polished with design system enforcement

**What changed:**
1. Installed and configured the Impeccable design skill for production-grade frontend polish.
2. Ran `/impeccable document` to extract and formalize the existing design system into PRODUCT.md, DESIGN.md, and design.json.
3. Ran `/impeccable polish maps` targeting the Maps disclosure section with targeted CSS refinements:
   - Increased transit grid gap from 12px → 14px for better breathing room
   - Increased transit card padding from 16px → 18px and added min-height: 140px
   - Added card-header border-bottom separator with proper padding rhythm
   - Enhanced disclosure button with 2px outline on hover/focus, 2px offset, and smooth cubic-bezier(0.2, 0, 0, 1) transitions
   - Improved disclosure-body layout with flex column, 14px gaps, and 16px margin/padding top
   - Applied Warm Rust (#b46a2c) accent color to section labels

**Verification:**
- `npm run validate` passed.
- Browser visual inspection confirmed:
  - Transit cards display with improved spacing (14px grid gap, 18px padding)
  - Disclosure button hover state shows outline + lift (translateY -1px)
  - Card-header separator visible with proper typography
  - Maps embedded correctly and load without errors
- Audit passed all quality metrics: spacing rhythm, typography hierarchy, interaction states, accessibility, contrast ratios, responsive behavior.

**Files modified:**
- `dashboards/css/styles.css` (3 targeted edits for Maps polish)
- Created: `PRODUCT.md`, `DESIGN.md`, `.impeccable/design.json`, `.impeccable/live/config.json`

**Design decisions captured:**
- **North Star**: "The Editorial Atlas" – curated, public-facing, edited aesthetic
- **Brand personality**: Lively + energetic with restrained minimalism
- **Named rules**: One Voice Rule (True Blue ≤10%), One Font Rule (SF Pro only), Frosted Glass Rule
- **Tokens documented**: 8 colors, 5 typography scales, shadow vocabulary, motion curves, responsive breakpoints

---

## 2026-07-04 (session 20: Apple-style itinerary dashboard redesign)

### COMPLETE: homepage visual system rebuilt into a calmer, tighter premium dashboard

**What changed:**
1. Replaced the homepage font dependency path with the Apple-style system stack and rebuilt the page tokens around softer neutrals, consistent spacing steps, disciplined radii, and lighter borders/shadows.
2. Reworked the hero so the title and subtitle sit in a wider editorial column instead of a narrow left strip, while the right-side summary cards align as a cleaner two-card stack.
3. Repacked the overview, executive summary, activity budget, and day-route sections into one consistent card family with tighter spacing and lower-noise typography.
4. Removed the repeated full-weight all-in target from the overview cards and restructured the executive formula into grouped segments plus one clear total card.
5. Tightened the itinerary header/filter relationship and normalized day-card / route-chip alignment so pills, dots, and route content stay on the same grid.

**Verification:**
- `npm run validate` passed.
- Headless browser breakpoint check passed at `1440px`, `1024px`, and `390px`.
- Verified no horizontal overflow in the checked breakpoints and the day grid stays one column with clean filter wrapping.

**Files touched:**
- `dashboards/html/index.html`
- `dashboards/css/styles.css`
- `dashboards/js/app.js`
- `tasks/todo.md`
- `notes/CHANGELOG.md`
- `notes/TASKS.md`
- `notes/Project Log.md`

## 2026-07-04 (session 21: responsive dashboard density + progressive disclosure)

### COMPLETE: homepage now behaves like a compact dashboard instead of a long static document

**What changed:**
1. Switched the main layout to a wider fluid shell so the page uses substantially more of the available desktop width and avoids the oversized side gutters.
2. Added a sticky app-style panel bar with `Overview`, `Itinerary`, `Budget`, `Guides`, and `Logistics` views so the homepage no longer renders every major section in one long column.
3. Moved heavy content behind chevron disclosures:
   - trip-cost formula
   - executive category breakdowns
   - local budget categories
   - flight details
   - maps and transit
   - utility cards
   - guide card details
4. Reworked the flight cards and budget category cards so their detail content opens from explicit right-aligned disclosure buttons with `aria-expanded` and `aria-controls`.
5. Tightened type sizes, section spacing, and grid behavior again so the dashboard scans faster and keeps more high-value information within fewer viewport heights.

**Verification:**
- `npm run validate` passed.
- Headless browser check confirmed:
  - `5` panel tabs render
  - overview defaults to the compact `summary` panel
  - budget view shows only `budget` and `activityBudget`
  - the formula disclosure opens correctly
  - logistics view shows only `flights`, `maps`, and `logistics`
  - main content width expands to `1376px` at a `1440px` viewport with no horizontal overflow

**Files touched:**
- `dashboards/html/index.html`
- `dashboards/css/styles.css`
- `dashboards/js/app.js`
- `tasks/todo.md`
- `notes/CHANGELOG.md`
- `notes/TASKS.md`
- `notes/Project Log.md`

## 2026-07-04 (session 19: dashboard compression + tactile card polish)

### IN PROGRESS: homepage made denser, more tactile, and less vertically heavy

**What changed so far:**
1. Tightened the homepage visual system for a more premium, one-glance feel:
   - calmer palette
   - denser spacing
   - stronger heading scale
   - fewer oversized glows
2. Added a more tactile card feel with stronger hover/press states so cards read as interactive surfaces instead of flat blocks.
3. Added etched line-art accents to cards so the panels feel drawn and more deliberate.

**Next check:**
- Verify the homepage still reads cleanly on the existing local preview and decide whether the next pass should push more sections into compact, above-the-fold summary treatment.

## 2026-06-28 (session 13: filter cleanup + push + final repo reconciliation)

### COMPLETE: Homepage filter row and repo state cleaned for handoff

**What changed:**
1. Replaced the empty homepage `Cocktails` itinerary filter with `Meals` because there were no live `cocktails` stops in the active itinerary.
2. Validated the change locally and pushed the UI fix to `origin/main` in commit `26ec124`.
3. Reconciled the remaining active instructions, hook text, task files, and Obsidian-facing notes so the next session starts from the post-monitor repo state instead of older tracker-era assumptions.

**Verification:**
- `npm run validate` passed.
- Browser check confirmed the homepage filter row now shows `All`, `Seattle`, `Portland`, `Coffee`, `Meals`.
- `node scripts/collect-obsidian-memory.js` ran successfully.

**Files touched:**
- `dashboards/html/index.html`
- `AGENTS.md`
- `hooks/post-task.md`
- active note files

## 2026-06-28 (session 12: maintenance sweep + final handoff cleanup)

### COMPLETE: Active notes, hooks, and startup guidance reconciled to the current repo state

**What changed:**
1. Updated `AGENTS.md` so `npm run validate` reflects the current repo workflow instead of the deleted tracker scripts and tests.
2. Rewrote stale active-note surfaces that were still carrying deleted monitor logic or stale numbers:
   - `notes/KNOWN_ISSUES.md`
   - `notes/TASKS.md`
   - `notes/PROJECT_MEMORY.md`
   - `notes/Home.md`
   - `notes/MAINTENANCE.md`
   - `notes/LEARNINGS.md`
3. Updated `hooks/post-task.md` so future maintenance passes explicitly treat the retired tracker system as gone and keep `Decisions.md` referenced correctly.
4. Added a short changelog and note trail for the empty itinerary filter cleanup and the final post-monitor repo baseline.

**Verification:**
- `npm run validate` passed.
- `node scripts/collect-obsidian-memory.js` ran successfully.

**Files touched:**
- `AGENTS.md`
- `hooks/post-task.md`
- `notes/Home.md`
- `notes/KNOWN_ISSUES.md`
- `notes/MAINTENANCE.md`
- `notes/PROJECT_CONTEXT.md`
- `notes/TASKS.md`
- `notes/PROJECT_MEMORY.md`
- `notes/LEARNINGS.md`
- `notes/CHANGELOG.md`
- `notes/Project Log.md`

## 2026-07-04 (session 14: itinerary review + automation scoping)

### IN PROGRESS: monthly price/menu review plan defined, email automation kept separate

**What I checked:**
1. Reviewed the active itinerary notes and confirmed the repo still treats Kraken as the only active automation.
2. Verified live official pages for the highest-risk recheck items:
   - Sky View Observatory hours and closure notices
   - Portland Japanese Garden hours and admission
   - Glo's hours and current site/menu entrypoint
   - Argosy cruise page for the Seattle sail category
   - Kraken official schedule and single-game ticket page
3. Confirmed the repo already has the right source list for future monthly checks, but no reusable monthly email monitor exists in the current active stack.

**What changed:**
1. Added a monthly review item to `tasks/todo.md` for menus, prices, and schedules on the named stops.
2. Tightened `notes/KNOWN_ISSUES.md` so the provisional-risk note now includes menu pricing and the strongest recheck candidates.

**Decision:**
- Keep the current repo automation rule intact for now: Kraken only.
- Treat any future monthly Gmail price-alert system as a separate new monitor, not a revival of the retired airfare/hotel/itinerary stack.
- Record the shared review calendar as `b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com`.

## 2026-07-04 (session 15: baseline-backed monthly checks requested)

### IN PROGRESS: add baseline compare script, broaden market coverage, send self-only alerts

**User request:**
1. Add a monthly change-detection script that compares current official pages against saved baseline values.
2. Send email notifications automatically to the user only, not to anyone else.
3. Expand the monthly report to cover the full Pike Place and coffee-stop list with explicit visit order and spend/time notes.

**Guardrails:**
- Do not delete anything automatically.
- Keep the new watcher separate from the retired airfare/hotel/itinerary monitor stack.

**Follow-up completed in this pass:**
1. Added `data/monthly-watch-baseline.json` plus `scripts/monthly-watch-check.js` so the monthly check can compare live pages against saved baseline markers.
2. Expanded `scripts/monthly-review-report.js` to include Pike Place core stops and the explicit market list already in the itinerary.
3. Sent the monthly review email to the user's Gmail address only.

## 2026-07-04 (session 16: scheduled watch + no-secret watch retained)

### COMPLETE: monthly GitHub watch scheduled without mail credential dependency

**What changed:**
1. Added `.github/workflows/monthly-watch.yml` with a monthly schedule and manual dispatch.
2. Kept the workflow non-destructive: it compares against baselines, builds a report, and uploads artifacts only.
3. Removed the Gmail SMTP send path so the repo does not require app-password setup.
4. Expanded the Pike Place market stop text in `data/trip-data.js` so the dashboard and calendar exports show the stall sequence, line-time estimate, and order suggestions.

**Verification:**
- `npm run validate` passed.
- `npm run sync:calendar` passed.

**Files touched:**
- `.github/workflows/monthly-watch.yml`
- `data/trip-data.js`
- `tasks/todo.md`
- `notes/Project Log.md`

## 2026-07-04 (session 17: stale wording cleanup + Pike Place split refinement)

### COMPLETE: active notes trimmed, Pike Place route sharpened

**What changed:**
1. Removed stale SMTP/app-password references from the active task and log notes.
2. Tightened the Pike Place market route into smaller standalone steps with explicit order hints and line-time notes.
3. Updated the live shared calendar event for the Pike Place block to match the finer route sequence.

**Files touched:**
- `data/trip-data.js`
- `notes/Project Log.md`
- `tasks/todo.md`
- shared Google Calendar Day 2 market event

## 2026-07-04 (session 18: active notes normalized to monthly watch)

### COMPLETE: stale Kraken-only wording replaced with the actual monthly watch

**What changed:**
1. Reworded the README and maintenance notes so they describe the monthly baseline watch instead of implying Kraken is the only remaining automation.
2. Kept the retired airfare/hotel/itinerary monitor stack marked as retired without reintroducing the deleted SMTP/app-password path.
3. Left the itinerary data and calendar export as the canonical source for the trip stops and prices.
4. Added the live shared-calendar Salt & Straw stop so the calendar matches the updated Day 1 itinerary.

**Files touched:**
- `README.md`
- `notes/MAINTENANCE.md`
- `notes/TASKS.md`
- `notes/Project Log.md`

## 2026-06-28 (session 11: monitor cleanup + executive spend summary)

### COMPLETE: Retired the old monitor stack and rebuilt the trip-cost model

**What changed:**
1. Added a new executive trip-cost summary to the homepage above the local activity-budget block.
2. Extended `data/trip-data.js` with confirmed airfare, confirmed hotel, and planned-purchase structures so the site can show a true all-in savings target.
3. Corrected the paid American Airlines source of truth to `$716.40` under confirmation `YWFKME` and updated the later February leg to `CRP -> DFW -> ORD`.
4. Removed the retired airfare/hotel tracker pages, tracker scripts, monitor workflows, and related package scripts from the active repo workflow.
5. Simplified the logistics hub down to booked-flight detail plus the remaining Kraken-only watch.

**Verification target for this session:**
- `npm run validate`
- local homepage check
- logistics page check

**Files touched:**
- `data/trip-data.js`
- `dashboards/html/index.html`
- `dashboards/html/logistics.html`
- `dashboards/js/app.js`
- `package.json`
- `scripts/session-status.js`
- retired monitor assets deleted
- active notes updated

## 2026-06-28 (session 10: calendar parity pass + Seattle Day 1 live sync)

### COMPLETE: Seattle Day 1 drift repaired and weaker stop details normalized

**What changed:**
1. Patched `data/trip-data.js` so Seattle Day 1 now matches the richer shared-calendar substance instead of the thinner site copy:
   - Poquitos dinner now includes menu/site, what to order, fruity cocktail guidance, payment, and corrected first-night spend.
   - Saint John's one-drink stop now includes menu/site, what to order, fruity cocktail guidance, payment, and a clearer one-drink budget.
   - Arrival-night walk, reset, orientation, snack, and sleep blocks now have lighter narrative detail instead of placeholder-level notes.
2. Filled in missing location / payment / site context on weaker Seattle and Portland stop records that still underpowered the homepage detail panel.
3. Added a Seattle Kraken placeholder to the trip guidance with official booking direction, a practical seat-budget range, and a mid-to-late July watch window based on prior Kraken release timing.
4. Rebuilt the calendar export artifacts so the normalized source remains the clean canonical version.
5. Updated the live shared Google Calendar for the entire Seattle Day 1 route so the calendar popups and the site are no longer drifting on the exact stops the user flagged.

**Verification:**
- `node --check data/trip-data.js` passed.
- `node scripts/sync-calendar-exports.js` regenerated 102 itinerary events.
- `npm run validate` passed.
- Local homepage browser check passed on the Day 1 Poquitos deep link with the richer detail panel visible.
- Live shared Google Calendar accepted the Seattle Day 1 event-description updates.

**Files touched:**
- `data/trip-data.js`
- `data/google-calendar-events-nov1-9-2026.json`
- `data/google-calendar-import-nov1-9-2026.csv`
- `notes/TASKS.md`
- `notes/CHANGELOG.md`
- `notes/Project Log.md`

**Next:**
- If another alignment pass is needed, add exact event-level Google Calendar URLs into stop data so homepage links can jump to the precise event instead of the day-level calendar view.

## 2026-06-28 (session 9: trip-data budget repair)

### COMPLETE: Validation blockers removed from `data/trip-data.js`

**What changed:**
1. Reconciled `budget.projectedTotal`, category totals, and day totals to a clean `$750`.
2. Corrected the stale day totals for Fri Nov 6, Sat Nov 7, and Sun Nov 8 so the declared totals now match the actual item sums.
3. Repaired stale budget copy that still referenced the older `$880` activity budget and `$920` ceiling.
4. Aligned the coffee-bean plan with the stated rule: two bags total, `$60` cap, instead of the older four-bag wording and numbers.

**Verification:**
- `npm run validate` passed.
- Hotel monitor validation passed.
- Airfare validation passed.

**Files touched:**
- `data/trip-data.js`
- active notes updated to remove the now-resolved validation blocker

**Next:**
- No immediate follow-up required for this repair.

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

**Handoff:** Created a temporary redesign brief for the booked-flights cleanup. That scratch file was later retired during repo cleanup after the redesign shipped.

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
- GitHub Pages deployment: https://itscarly.github.io/seadpdx/dashboards/html/index.html ✓ live and matches local perfectly

**Commit:** d21b07d "Dashboard redesign: SF Pro fonts, compact spacing, interactive features"

**Result:** Dashboard now displays with professional Apple-grade aesthetics, maximizes screen real estate, and all itinerary content visible without expanding sections. Local and deployed versions now identical.

---

## 2026-06-28 (session 5: Create unified carly skill + token optimization)

### COMPLETE: Merged ponytail-optimize + post-chat-cleanup into single carly skill

**What:** Created `/Users/carly/.claude/skills/carly/SKILL.md` — unified workflow combining four phases.

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
  - itscarly.github.io/seadpdx/dashboards/html/index.html
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
- Temporary calendar-update helper artifacts were created in this session and later retired once the repo was cleaned and the normalized source flow was in place.
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

1. **Reside Seattle Downtown** (104 Pine St, conf 91912EE022594, $469.81, Nov 1–4) — promoted to `currentReservation`. Studio apartment, kitchen, city view, half a block from Pike Place. Cancel by Oct 30, 4pm.
2. **Palihotel Seattle** (107 Pine St, conf 73458558745442, $536.59 pay at property, Nov 1–4) — added as `secondReservation`. Next door to Reside. Cancel by Oct 30, 3pm — 1-night penalty if missed.
3. **Boylston Hotel Capitol Hill** (conf 7225329631916, $384.13) — moved to watchlist as backup. Cancel by Oct 31, 4pm.

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
- Portland: benchmark Hotel Vance $628.46 conf# 94290711 (Nov 4–9), alert threshold $620, 7 watchlist hotels
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

- Locked in the Boylston Hotel confirmed reservation (RES ID 7225329631916, Standard Queen High Floor, Nov 1-4 2026, $384.13 total / $0 paid / $384.13 balance due) as the hotel benchmark in `data/hotel-monitor-report.json`.
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

- After the workflow runs on GitHub, confirm the public site resolves at `https://itscarly.github.io/seadpdx/`.

### Global cleanup and handoff defaults tightened

- Tightened the shared Codex and Claude defaults so meaningful work now explicitly includes a post-work cleanup pass, stale-line removal, root-cause capture, prevention-rule capture, and a short next-session handoff note.
- Removed the older contradiction in the global Claude file that treated project note upkeep as something to skip unless the user asked, while still keeping long-term memory writes gated behind explicit user request.
- Propagated the same cleanup and handoff rules into the shared Claude project base, both reusable starter trees, both example project trees, the local global Codex defaults, and the active `uigen` Claude file so future work inherits the same behavior.
- Strengthened this project's own `AGENTS.md`, `CLAUDE.md`, and `notes/MAINTENANCE.md` so the local repo matches the global rule set.
- Rewrote `docs/SETUP_SHARED_CODEX_CLAUDE_OBSIDIAN.md` so another machine now gets the stronger cleanup, stale-line removal, root-cause capture, prevention-rule capture, and next-session handoff defaults instead of the older lighter version.

Files touched:

- `/Users/carly/Projects/Codex/AGENTS.md`
- `/Users/carly/.claude/CLAUDE.md`
- `/Users/carly/Projects/Claude/Projects/AGENTS.md`
- `/Users/carly/Projects/Claude/Projects/CLAUDE.md`
- `/Users/carly/Projects/Project Starter/AGENTS.md`
- `/Users/carly/Projects/Project Starter/CLAUDE.md`
- `/Users/carly/Projects/Example Project/AGENTS.md`
- `/Users/carly/Projects/Example Project/CLAUDE.md`
- `/Users/carly/Projects/Codex/Project Starter/AGENTS.md`
- `/Users/carly/Projects/Codex/Project Starter/CLAUDE.md`
- `/Users/carly/Projects/Codex/Example Project/AGENTS.md`
- `/Users/carly/Projects/Codex/Example Project/CLAUDE.md`
- `/Users/carly/Projects/uigen/CLAUDE.md`
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

- `/Users/carly/Projects/Codex/AGENTS.md`
- `/Users/carly/.claude/CLAUDE.md`
- `/Users/carly/Projects/Claude/Projects/AGENTS.md`
- `/Users/carly/Projects/Claude/Projects/CLAUDE.md`
- `/Users/carly/Projects/uigen/CLAUDE.md`
- `/Users/carly/Projects/Project Starter/AGENTS.md`
- `/Users/carly/Projects/Project Starter/CLAUDE.md`
- `/Users/carly/Projects/Example Project/AGENTS.md`
- `/Users/carly/Projects/Example Project/CLAUDE.md`
- `/Users/carly/Projects/Codex/Project Starter/AGENTS.md`
- `/Users/carly/Projects/Codex/Project Starter/CLAUDE.md`
- `/Users/carly/Projects/Codex/Example Project/AGENTS.md`
- `/Users/carly/Projects/Codex/Example Project/CLAUDE.md`
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
- Propagated the same shared-memory, post-task maintenance, and token-discipline defaults into the reusable starter and example project folders under `/Users/carly/Projects` and `/Users/carly/Projects/Codex`.
- Updated the shared Claude-side instruction files under `/Users/carly/Projects/Claude/Projects` plus the active `/Users/carly/Projects/uigen/CLAUDE.md` file so the higher-level defaults are more consistent outside this repo too.

Files touched:

- `/Users/carly/Projects/Codex/AGENTS.md`
- `/Users/carly/.claude/CLAUDE.md`
- `/Users/carly/Projects/Claude/Projects/AGENTS.md`
- `/Users/carly/Projects/Claude/Projects/CLAUDE.md`
- `/Users/carly/Projects/uigen/CLAUDE.md`
- `/Users/carly/Projects/Project Starter/`
- `/Users/carly/Projects/Example Project/`
- `/Users/carly/Projects/Codex/Project Starter/`
- `/Users/carly/Projects/Codex/Example Project/`
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
- `/Users/carly/Documents/Obsidian Vault/Home.md`
- `/Users/carly/Documents/Obsidian Vault/Memory Map.md`
- `/Users/carly/Documents/Obsidian Vault/Vault Workflow.md`
- `/Users/carly/Documents/Obsidian Vault/.obsidian/core-plugins.json`
- `/Users/carly/Documents/Obsidian Vault/.obsidian/graph.json`
- `/Users/carly/Documents/Obsidian Vault/.obsidian/workspace.json`

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

- Courtyard by Marriott Portland City Center (conf# 94187007, $487.85) promoted to active Portland base.
- Hotel Vance (conf# 94290711, $628.46) moved to `cancelReservation` stub — must be cancelled before Nov 3, 11:59 PM.
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

Cancel Hotel Vance (conf# 94290711) before Nov 3, 11:59 PM. Everything else is done.

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

- Source discovery: pass (`/Users/carly/.codex/memories`, `/Users/carly/.claude/plans`, `/Users/carly/Library/Application Support/Code/User/workspaceStorage`).
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

## 2026-06-28 (session 10: calendar-to-site route reconciliation)

### What changed

- Audited the live shared Google Calendar against the redesigned homepage and treated the calendar as the fresher source where the route had clearly moved.
- Rebuilt the public itinerary data for the materially changed days:
  - Seattle Day 2 now includes the Sailing Seattle downtown sail, the Ghost Alley coffee-to-go reset, and the Northgate Best Buy Meta fit-check stop.
  - Seattle Day 3 and Day 4 now match the richer live sequence, timing, and spend assumptions.
  - Portland Day 5 through Day 9 now reflect the live schedule shape, richer stop costs, and the updated Japanese Garden / Powell's / rooftop / market / final-day pacing.
- Upgraded the homepage stop-detail interaction so the selected stop panel can show richer calendar-style sections, direct Google Calendar links, and stable stop anchors for deep links back from the calendar.
- Added `scripts/sync-calendar-exports.js` so the calendar JSON and CSV can be regenerated from `data/trip-data.js` instead of drifting manually.
- Regenerated `data/google-calendar-events-nov1-9-2026.json` and `data/google-calendar-import-nov1-9-2026.csv`.
- Updated a high-value set of live shared-calendar events with direct backlinks into the public site, including the Seattle Day 2 rebuild plus representative Portland anchor and nightlife stops.

### Verification

- `npm run validate` passes.
- `node scripts/sync-calendar-exports.js` rebuilt 102 itinerary events into the JSON and CSV backup artifacts.
- Local browser check confirmed the homepage renders, the Day 2 stop-detail panel expands, and the richer detail sections are visible without runtime errors.

### Files touched

- `data/trip-data.js`
- `dashboards/js/app.js`
- `dashboards/css/styles.css`
- `dashboards/html/index.html`
- `dashboards/html/logistics.html`
- `data/google-calendar-events-nov1-9-2026.json`
- `data/google-calendar-import-nov1-9-2026.csv`
- `scripts/sync-calendar-exports.js`
- project notes

### Follow-up

- If the user wants full reciprocal parity on every live event, finish adding site backlinks to the remaining unchanged live calendar entries, not just the route-critical ones.

## 2026-06-28 (session 11: planned purchase price refresh)

### What changed

- Updated the planned personal-purchase data in `data/trip-data.js` from the older placeholder values to the new user-provided prices:
  - Meta Ray-Ban glasses: `$409`
  - BLEU DE CHANEL Eau de Parfum 3.4 oz: `$173`
- Updated `dashboards/js/app.js` so the executive spend board now names BLEU DE CHANEL instead of the older Valentino placeholder.
- Reconciled the active task and memory notes so the current repo state points at the new `$582` planned-purchase total.

### Verification

- `npm run validate` passes.
- Budget audit still resolves to `projected: 1072`, `target: 1200`, `ceiling: 1300`, `remaining: 128`.
- Calendar export sync still completes and rebuilt 102 itinerary events.

### Files touched

- `data/trip-data.js`
- `dashboards/js/app.js`
- `tasks/todo.md`
- `notes/TASKS.md`
- `notes/PROJECT_MEMORY.md`
- `notes/CHANGELOG.md`
- `notes/Project Log.md`

### Follow-up

- If the user swaps brands, sizes, or lens options again, update only `tripCosts.plannedPurchases` in `data/trip-data.js` first, then re-run validation so the board totals and notes stay aligned automatically.

## 2026-06-28 (session 12: expandable expense breakdowns + Kraken estimate)

### What changed

- Reworked the executive spend board so each category card can expand inline and show its own dollar breakdown instead of forcing the user to infer what sits inside totals like `Activities and admissions`.
- Added a Seattle Kraken game planning line at `$120` for one normal mid-bowl seat and tied that expense to the real Seattle itinerary so the budget system carries it honestly.
- Updated the Seattle ticket-watch copy and bumped the homepage/logistics cache-bust tags so the public site picks up the new CSS, JS, and trip data right away.

### Verification

- `npm run validate` passes.
- Budget audit now resolves to `projected: 1192`, `target: 1200`, `ceiling: 1300`, `remaining: 8`.
- Calendar export sync now rebuilds 103 itinerary events.

### Files touched

- `data/trip-data.js`
- `dashboards/js/app.js`
- `dashboards/css/styles.css`
- `dashboards/html/index.html`
- `dashboards/html/logistics.html`
- `notes/PROJECT_MEMORY.md`
- `notes/TASKS.md`
- `notes/CHANGELOG.md`
- `notes/Project Log.md`

### Follow-up

- Replace the `$120` Kraken estimate with the real seat price once the official 2026-27 regular-season schedule and single-game inventory are live on the Kraken site.

## 2026-06-29 (session 13: price corrections + transport breakout)

### What changed

- Updated the confirmed hotel totals to Boylston `$504.46` and Portland `$391.00`.
- Updated the paid attraction and rail prices to Sky View Sip & Sights `$38`, Portland Japanese Garden `$22.50`, and Amtrak `$29` plus a `$19` business-class bid.
- Reworked the transportation breakdown so Seattle local transit, the Bainbridge ferry pass, Amtrak, and Portland local transit are shown as separate line items in the board.
- Bumped the public cache tags so the local and pushed site both pick up the refreshed CSS, JS, and trip data immediately.

### Verification

- `npm run validate` passes.
- Budget audit now resolves to `projected: 1236.5`, `target: 1250`, `ceiling: 1300`, `remaining: 13.5`.
- Calendar export sync still rebuilds 103 itinerary events.

### Files touched

- `data/trip-data.js`
- `dashboards/js/app.js`
- `dashboards/html/index.html`
- `dashboards/html/logistics.html`
- `data/google-calendar-events-nov1-9-2026.json`
- `data/google-calendar-import-nov1-9-2026.csv`
- `notes/PROJECT_MEMORY.md`
- `notes/TASKS.md`
- `notes/CHANGELOG.md`
- `notes/Project Log.md`

### Follow-up

- Replace the Kraken estimate with the real live seat price once official 2026-27 single-game inventory is up, but keep the transport split as the permanent board behavior.

## 2026-06-29 (session 14: total-target audit view)

### What changed

- Added a clearer audit block above the executive spend categories so the user can read the exact formula behind the all-in total before looking at the grouped cards.
- Added explicit copy that the lower category cards are not extra charges; they are just the grouped explanation of the same total.
- Called out the Kraken estimate as the easiest future subtraction if that placeholder event gets dropped.

### Verification

- `npm run validate` passes.
- Budget audit still resolves to `projected: 1236.5`, `target: 1250`, `ceiling: 1300`, `remaining: 13.5`.

### Files touched

- `dashboards/html/index.html`
- `dashboards/html/logistics.html`
- `dashboards/js/app.js`
- `dashboards/css/styles.css`
- `notes/CHANGELOG.md`
- `notes/Project Log.md`

## 2026-06-29 (session 15: git cleanup + local vault separation)

### What changed

- Removed tracked top-level handoff scratch files, old calendar-update helper artifacts, and other repo clutter that was no longer part of the running project.
- Stopped tracking local `.obsidian` working-state files plus local Claude/Codex helper state so Git now focuses on the real site, data, scripts, docs, and notes.
- Rebuilt a minimal local-only Obsidian workspace that opens the Codex project notes and source files cleanly without pushing personal window state back into Git.
- Updated `.gitignore` and `README.md` so future sessions follow the cleaner repo boundary by default.

### Verification

- `npm run validate` should be run after the cleanup commit before treating the trimmed repo as final.
- The local Obsidian vault now centers on `notes/Home.md`, `notes/PROJECT_CONTEXT.md`, `notes/TASKS.md`, `notes/CHANGELOG.md`, `notes/Project Log.md`, and the live site/data files.

### Follow-up

- Keep project-history detail inside `notes/Project Log.md` and `notes/CHANGELOG.md` instead of recreating new top-level handoff files in the repo root.

## 2026-07-04 (session 16: homepage rescue + skill install)

### What changed

- Audited the local homepage at `http://127.0.0.1:4175/dashboards/html/index.html` and confirmed the main visual failure was the layout system itself: fixed section heights, overflow clipping, and a two-column homepage grid that created large dead zones and made mobile feel broken.
- Installed the external `ui-ux-pro-max` skill from `nextlevelbuilder/ui-ux-pro-max-skill` into `/Users/carly/.codex/skills/ui-ux-pro-max` and used its design-system search as a reference layer before the CSS rewrite.
- Reworked the homepage shell so the main content now flows as a single vertical stack instead of an equal-height section grid, which removed the large blank areas and let each section size to its real content.
- Added stronger typography, external font loading, a skip link, better sticky navigation behavior on mobile, and home-page-specific reveal handling so the page is readable, keyboard-friendly, and deterministic in automated verification.
- Retuned the homepage cards, hero facts, day cards, guide grids, map grids, and footer spacing so the page reads like one cohesive travel planning hub instead of a clipped dashboard collage.

### Verification

- `npm run validate` passes.
- Playwright desktop and mobile screenshot checks were rerun against `127.0.0.1:4175` after the redesign.
- Mobile nav no longer forces page-level horizontal scroll; the nav now scrolls within its own lane.

### Files touched

- `dashboards/html/index.html`
- `dashboards/css/styles.css`
- `dashboards/js/app.js`
- `tasks/todo.md`
- `notes/Project Log.md`

### Follow-up

- The homepage is much more coherent now, but it is still content-heavy on mobile because the trip budget and itinerary are both large. If a later pass is approved, the next compression target should be the budget breakdown density, not another global layout rewrite.
- Restart Codex in a fresh session if you want the newly installed `ui-ux-pro-max` skill to appear automatically in the skill registry.
## 2026-07-05 (session 31: GitHub publish cleanup + note reconciliation)

### COMPLETE: Release-facing docs and Git hygiene aligned with the accepted dashboard state

**What changed:**
- Reconciled the active automation wording so the project no longer mixes an older Kraken-only note with the newer monthly baseline-watch guidance.
- Refreshed the release-facing `DESIGN.md` and `PRODUCT.md` docs so they describe the current compact editorial dashboard, its hierarchy, and its interaction rules.
- Tightened `.gitignore` so repo-local `.claude`, `.obsidian`, and `.impeccable` files stop polluting the publish worktree.

**Files modified:**
- `.gitignore`
- `tasks/todo.md`
- `tasks/lessons.md`
- `notes/PROJECT_CONTEXT.md`
- `notes/TASKS.md`
- `notes/CHANGELOG.md`
- `notes/LEARNINGS.md`
- `notes/Project Log.md`
- `DESIGN.md`
## 2026-09-25 (PAL Z8RAML receipt update)

### COMPLETE: Replaced the PAL return-flight USD estimate with the paid Philippine peso receipt and attached the ticket PDF

**What changed:**
- `data/trip-data.js`: updated Philippine Airlines PR133 to match the attached electronic ticket receipt: booking Z8RAML, ticket 0792545377670, ORD -> MNL, Mon Mar 1 10:45 PM -> Wed Mar 3 5:25 AM, Business Class A, seat 02A, paid total PHP 24,281.
- `dashboards/js/app.js`: kept the existing USD budget model for USD airfare and added the smallest display support needed for the PAL receipt to show as `PHP 24,281` instead of a USD amount.
- `dashboards/assets/docs/philippine-airlines-z8raml-ticket-receipt.pdf`: added the receipt PDF so the flight card and source list can link to it.
- `README.md`, `notes/KNOWN_ISSUES.md`, and `notes/memory/active/project_current_state.md`: replaced stale Korean Air / Mar 5 placeholder guidance with the Z8RAML receipt truth.

**Verification target:**
- `npm run validate` passes.
- Local site serves the updated flight card and receipt link.

---

## 2026-09-25 (waterfall shuttle tour)

### COMPLETE: Added the Columbia River Gorge Waterfall Shuttle Tour to Nov 8 and Activities and admissions

**What changed:**
- Added the Columbia River Gorge Waterfall Shuttle Tour to Day 8, Sun Nov 8, at 10:30 AM.
- Kept Nov 7 focused on Portland Saturday Market.
- Added the accessible site link: `https://sasquatchshuttle.com/waterfall-tour/`.
- Added the $82.54 tour total to `Entrance fees`, so Activities and admissions now itemizes Sky View plus the waterfall tour.

**Verification target:**
- `npm run validate` passes.
- Local served data shows the tour on Nov 8, not Nov 7.

---

- `PRODUCT.md`

**Verification target:**
- `git status` should show the real project changes only, without editor/plugin noise.
- Active notes should agree on the remaining automation path before the final commit and push.

**Result:**
- The repo is now cleaner to publish, easier to hand off, and less likely to carry stale operating guidance into the next session.

---
## 2026-09-13 (session closeout: Graphify handoff map)

### COMPLETE: Wrote the next-session architecture map and refreshed the project graph

**What changed:**
- Updated `notes/ARCHITECTURE.md` with the restored local path, corrected `seapdx` repo/site URLs, static source-of-truth flow, generated-export vs. live-calendar boundary, and the default next-session workflow.
- Updated `notes/TASKS.md` so the active state no longer points first at stale August work. The project is now waiting for the next user-provided change list; Day 4-9 rich-stop polish is explicitly optional.
- Preserved the Sep 13 factual closeout: cost edits, ACME hotel swap, Amazon cart, repo rename, flight retime to KE047, live calendar patch, validation, push, and GitHub Pages verification.

**Prevention rule:**
- Always call Graphify first for architecture, source-of-truth, data-flow, or project-content questions in this repo. After edits, run `graphify update .` before closing.

---
## 2026-09-13 (ICN layover lounge plan)

### COMPLETE: Added shared ChatGPT ICN layover guidance to the flight view

**What changed:**
- `data/trip-data.js`: added the ICN layover plan from the shared ChatGPT review to the EMR56H arrival journey. Current guidance is to stay airside in Terminal 2, skip a Seoul city tour on the 4h55 connection, use Priority Pass Sky Hub near Gate 247 as first choice, use Sky Hub East near Gate 268 if KE047 posts far east, leave lounge around 8:20 PM, and be at the KE047 gate around 8:35-8:45 PM.
- `dashboards/js/app.js`: rendered `journey.layoverPlan` inside the existing flight-story block so the guidance appears on the homepage flight card and logistics flight board without adding a new route model.
- `dashboards/html/index.html` and `dashboards/html/logistics.html`: bumped the data/app cache keys so GitHub Pages pulls the new flight guidance promptly.

**Verification:**
- `npm run validate` passes.

---
## 2026-09-13 (arrival flight retime: EMR56H -> KE047)

### COMPLETE: Updated arrival flight routing, shifted Day 1 timing, regenerated exports, and patched the live Seattle & Portland 2026 calendar

**What changed:**
- `data/trip-data.js`: updated booking reference EMR56H so the arrival routing is now OZ702 MNL->ICN (11:45 AM-4:25 PM, A330-300, Economy V) plus Korean Air KE047 ICN->SEA (9:20 PM-2:10 PM, B787-9, Economy Q), replacing the old OZ272 second leg.
- Day 1 Seattle arrival chain shifted from the old 1:55 PM landing to the new 2:10 PM landing: SEA buffer, Link, Palihotel check-in, H Mart, Target, dinner, and Waterfront Park now flow without overlaps.
- Regenerated `data/google-calendar-events-nov1-9-2026.json` and `data/google-calendar-import-nov1-9-2026.csv`.
- Live Google Calendar `Seattle & Portland 2026` updated in place: OZ702, Incheon layover, KE047, and the affected Day 1 Seattle arrival/evening events were patched rather than duplicated.

**Verification:**
- `npm run validate` passes.
- Budget audit reports projected local spend `$2,202.91` against the `$3,050` ceiling, `$847.09` remaining.
- Calendar verification search confirms KE047/EMR56H and the updated 2:10 PM Seattle arrival chain are present.

---
## 2026-08-15 (session 48: H Mart budget cap + Day 2 early-start rebuild + Day 2/Day 3 waterfront split)

### COMPLETE: H Mart cap raised to $30; Day 2 rebuilt for a 5:30 AM early start with an expanded Pike Place crawl; waterfront loop (Harbor Steps, Great Wheel, Pier 62, Olympic Sculpture Park, Sirens of Spring, Old Stove Brewing, Gourmondo Café) moved to Day 3 after a timing audit found the original single-day plan missed the 4:55 PM Sky View sunset hard stop

**What changed:**
- Day 1: H Mart Downtown Seattle grocery run raised from a fixed $19.89 estimate to a $30 budget cap (traveler-requested headroom).
- Day 2: wake moved 7:30 AM -> 5:30 AM, Pike Place sign arrival moved 8:35 AM -> 7:30 AM to beat 8 AM store openings/crowds. Morning cluster expanded: Mee Sum Pastry reordered to Curry Beef Hong Bao ($6.62 w/ tax), new Tiny's Apple Cider stand (3 flavors, $9.93), new Le Panier (cortado $5.68 confirmed, pastry self-choose unpriced), Pike Place Bakery explicitly skipped (closed Mondays), new Rachel the Pig + Billie photo stop, new Molly Moon's Ice Cream, new Gum Wall stop, Totem Smokehouse souvenir budget raised $40 -> $60.
- Timing audit (traveler explicitly requested a real geography/hours review, not accepting the stated order as-is): the full expanded day did not fit before the 4:55 PM Sky View hard stop once real addresses were used -- Gourmondo Café (Queen Anne) to the Uber Seattle Engineering Office (1191 2nd Ave, downtown) is a ~15-20 min transit leg, not a quick walk. Traveler confirmed moving the entire waterfront loop to Day 3 afternoon (after the Bainbridge ferry returns ~2:10 PM), replacing the old "hotel recharge" block.
- Day 3 waterfront loop resequenced Gourmondo-first (it closes 3:30 PM weekdays) rather than last, to actually fit within hours: Gourmondo -> Sirens of Spring -> Olympic Sculpture Park -> Pier 62 -> Old Stove Brewing (moved from Day 2) -> Great Wheel -> Harbor Steps -> back to hotel. Hart and the Hunter happy hour shifted 4:10 PM -> 5:00 PM and the rest of the Capitol Hill evening ~50 min later accordingly.
- Day 2 afternoon simplified to Pike Place -> Uber office (short walk) -> Best Buy Northgate -> Sky View, with Best Buy dwell time extended from 20 min to up to 60 min now that it isn't squeezed against the sunset hard stop.
- "Puget Sound Perks" (traveler-mentioned) could not be verified via web search and was dropped rather than added on an unconfirmed name.
- `scripts/audit-budget.js`: day/item mismatch check switched from strict equality to a $0.01 epsilon tolerance, since segment-grouped vs. flat-array floating-point summation of the same costs can differ by float dust (e.g. 176.51999999999998 vs 176.52) even when the underlying numbers are identical.
- `dashboards/js/app.js`: added `STOP_COORDINATES` entries for the new/renamed Day 2 and Day 3 stops so map markers render.

**Files modified:**
- `data/trip-data.js`
- `dashboards/js/app.js`
- `scripts/audit-budget.js`
- `notes/Project Log.md`

**Verification target:**
- `npm run validate` passes (syntax check, budget audit, calendar sync).
- Projected total $2,909.91 against the unchanged $3,050 cap/ceiling, $140.09 remaining.

**Result:**
- Day 2 now has real timing buffer before its sunset hard stop instead of an unaccounted-for ~45 min shortfall. Day 3's waterfront loop reuses the Bainbridge ferry's downtown return instead of adding a redundant cross-town trip. All new stops are sourced (traveler-supplied menus/prices, web-search-verified names and hours).

---
