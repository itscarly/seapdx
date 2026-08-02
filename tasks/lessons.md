# Lessons

## 2026-05-17

### Symptom

- The user still had to ask whether note and workflow updates really happened after changes.

### Root cause

- The implementation work landed faster than the active notes and workflow docs were being reconciled.
- Some files still described an older Netlify-first or generic-itinerary state even after the project had moved to GitHub Pages fallback and exact calendar blocks.

### Fix

- Update active notes, scratch task files, deployment docs, and project rules in the same pass as the implementation change.
- Remove stale host assumptions and vague itinerary language instead of leaving them beside the new state.

### Prevention rule

- After meaningful changes, do one repo-wide stale-state pass:
  - source data
  - active notes
  - deployment docs
  - task scratch files
  - handoff log
- Do not stop at `Project Log` only when the change also affects public hosting, operating rules, or source-of-truth structure.

## 2026-05-24

### Symptom

- A hotel watch run overwrote the held reservation benchmark with a newly observed public quote.

### Root cause

- The refresh treated `currentReservation` like a comparison target instead of a locked booked benchmark.
- I updated Boylston's live quote into `trueTotalCost` without respecting that the user wanted comparisons against the booked price.

### Fix

- Restore Boylston's benchmark to the booked total and keep newer public quotes in `priceVerification` and notes only.

### Prevention rule

- When `currentReservation` is an already booked hotel, keep `trueTotalCost` anchored to the booked benchmark unless the user explicitly asks to replace it.
- Use watchlist hotels for market comparisons; store rechecked public quotes for the held hotel as reference, not as the benchmark.

## 2026-06-27 (Calendar rebuild session)

### Symptom

- Calendar had stale activities (Smith Tower, NEKO Cat removed in plan but still in calendar), missing activities (Best Buy Meta Glasses not on calendar), and wrong date placements (Day 6-7 activities placed on wrong dates).
- Multiple attempts to fix incrementally (delete duplicates, add descriptions, fix dates) resulted in more complexity and wasted tokens.
- User had to repeatedly ask for clarification when the plan was already stated ("go back to the plan").

### Root cause

1. **Trusted stale calendar over authoritative source:** Calendar was from old trip-data.js snapshot; current trip-data.js (finalized June 27) had removals and different structure, but I didn't catch this mismatch until user pointed out old activities still showing.
2. **Asked clarifying questions when user had already stated the answer:** User said "go back to the plan" and "compare to what we discussed" but I kept asking which version to use instead of just using trip-data.js.
3. **Patched incrementally instead of rebuilding:** When calendar had multiple errors (duplicates, wrong dates, missing descriptions), tried to fix one by one instead of recognizing the state was too broken to patch.
4. **Didn't verify date placement carefully enough:** Created events on Nov 6-7-8 but activities were from different day indices, causing "Day 6 activities on Day 5" type errors.

### Fix

1. **Identified trip-data.js as authoritative (finalized June 27):** Confirmed via Project Log that trip-data.js was the final version, not the calendar.
2. **Stopped asking which version to use:** When user says "go back to the plan," use trip-data.js. No ambiguity questions.
3. **Rebuilt calendar clean instead of patching:** Deleted all 100 events, started fresh, created 102 new events with correct dates, rich descriptions, no overlaps.
4. **Verified date placement before creating:** Mapped Day 1 = Nov 1, Day 5 = Nov 5 (Amtrak transition), Day 7 = Nov 7 (Powell's), Day 8 = Nov 8 (Saturday Market), etc.
5. **Added rich descriptions to every event:** Each event now includes Purpose | Cost | Links | What to order | Skip | Continuity from trip-data.js.

### Prevention rules

1. **When user says "go back to the plan," use trip-data.js without asking which version.** The plan is authoritative. Calendar is not.
2. **When calendar state is too broken (duplicates + wrong dates + missing data), delete and rebuild clean instead of patching incrementally.** Piecemeal fixes create more chaos.
3. **Verify date placement explicitly before creating calendar events.** Map day indices to dates (Day N = Nov N) and confirm no off-by-one errors.
4. **Don't ask clarifying questions the user has already answered.** If they say "we already discussed this," assume the answer is in trip-data.js or earlier notes. Search there first.
5. **Stop adding complexity with agents/updates when the root is simpler:** In this case, the fix was "delete everything, rebuild from authoritative source" not "fix duplicates, add descriptions, change dates."

## 2026-06-27

### Symptom

- The user said Portland shared-calendar work still looked unfinished because the visible event popups did not match the richer Seattle example.

### Root cause

- I treated title cleanup and partial description cleanup as "close enough" even though the acceptance bar was the live Google Calendar popup format itself.
- I also failed to re-check the all-day Portland headline rows for stale wording after fixing individual stops.

### Fix

- Rewrite the live shared-calendar event bodies in the richer format with `Purpose`, `Estimated cost`, links, `What to order` or `What to do`, `Skip`, and `Continuity`.
- Audit the all-day header rows and route/location labels in the same pass.

### Prevention rule

- For shared-calendar remediation, do not say a block is done until the live popup body matches the reference format the user showed.
- Verify both stop-level events and day-level headline rows before calling the calendar pass complete.

## 2026-07-05

### Symptom

- A repo rename request initially looked ambiguous because the local checkout still used the old owner/path URL while GitHub already resolved the live repo under a different owner.

### Root cause

- I trusted the local `origin` URL too early even though GitHub was already redirecting it to the current repository.
- That made the local checkout look like it belonged to a different owner until the live repo metadata was checked directly.

### Fix

- Verify both the local remote and the live GitHub repository object before changing repo settings.
- Treat redirecting remotes as stale local state and normalize them in the same pass as the repo rename.

### Prevention rule

- For GitHub rename or ownership tasks, check the live repo identity with GitHub first, not just `git remote -v`.
- If local `origin` and the live repo owner/path disagree, confirm the canonical repo object before editing docs or settings.

## 2026-07-05

### Symptom

- The user still saw desktop homepage subtitles wrapping onto second lines while large horizontal gaps and tall empty cards were still visible in the same screenshots.

### Root cause

- I tightened typography first but left a desktop copy-width cap and a stretched card-grid behavior in place.
- That meant text could still wrap early even when there was unused row width, and shorter cards could still look awkwardly underfilled beside taller neighbors.

### Fix

- Widen the desktop shell and rebalance the columns before shrinking text further.
- Remove desktop-only max-width caps from section subtitles when screenshots show obvious unused width.
- Disable stretch on mixed-height summary-card rows so secondary cards keep their natural height.

### Prevention rule

- When a screenshot shows both wrapping and empty horizontal space, treat layout width allocation as the first bug, not font size alone.
- Re-check grid stretch behavior on summary rows any time cards look tall and underfilled after a typography pass.

## 2026-07-05

### Symptom

- The user still saw itinerary weather lines wrapping, uneven-looking flight cards, and unlabeled route chips even after the broader homepage compaction pass.

### Root cause

- I fixed the surrounding layout first, but I left some important content-level readability cues untouched:
  - desktop day subtitle lines still had no explicit one-line rule
  - flight-card equality depended on content length instead of a stable internal layout
  - itinerary chips still relied on the user inferring categories from stop names

### Fix

- Add desktop-only no-wrap rules where the user explicitly wants one-line planning copy.
- Equalize flight cards with a consistent grid row structure instead of hoping similar content will land at similar heights.
- Add visible route-chip labels derived from stop type and keywords so the day view reads at a glance.

### Prevention rule

- When a screenshot complaint is about scanning speed, do not stop at spacing and type scale; also check whether semantic labels are missing from the densest UI.
- For side-by-side cards with unequal copy, enforce consistent internal layout if the user expects them to read as a matched pair.

## 2026-07-05

### Symptom

- The maps/transit atlas still looked awkward because the Seattle and Portland cards did not line up, even though the card styling itself was already consistent.

### Root cause

- I left the atlas summary grid on auto-fit behavior, so Portland wrapped to an extra day-pill row while Seattle did not.
- That single extra wrapped row pushed only the Portland map downward and made the whole section feel uneven.

### Fix

- Normalize the homepage atlas summary to a stable five-slot desktop grid and slightly tighten the pill sizing so both city summaries consume the same vertical space.

### Prevention rule

- When two side-by-side dashboard cards are meant to read as peers, verify not only their styling but also the start line of their primary content block.
- Auto-fit grids are convenient, but if one side can wrap and the other cannot, treat that as a rhythm bug and lock the grid at the breakpoint where the design is supposed to feel aligned.

## 2026-07-05

### Symptom

- Release prep still had contradictory active notes and local editor/plugin files showing up in `git status`, even though the UI work itself was ready to ship.

### Root cause

- I treated code polish and note polish as separate cleanup layers instead of doing one final publish pass across both.
- Some active docs still carried an older Kraken-only automation line while newer notes had already moved to the monthly baseline-watch wording.
- Local `.claude`, `.obsidian`, and `.impeccable` state was not fully ignored, so repo status still looked noisier than the real project change set.

### Fix

- Reconcile the active docs to one automation truth before shipping.
- Refresh top-level design/product docs so they describe the current accepted UI, not an intermediate experiment.
- Ignore local editor/plugin state so GitHub only reflects real project files.

### Prevention rule

- Before publishing accepted work, run one final `git status` plus active-note conflict check.
- If local tooling files appear in the worktree, either promote them intentionally as project artifacts or ignore them; do not leave that decision ambiguous at release time.

## 2026-07-05

### Symptom

- The GitHub repository homepage still looked unfinished even though the product itself was in good shape because the About panel was empty, the README hid the live site, and public-facing docs mixed internal maintenance context with the first things a visitor needs.

### Root cause

- I treated repo presentation as something that would improve automatically once the codebase was clean.
- I also left tracked note-vault working-state files in the repo even though the project rules already said those should stay local.

### Fix

- Rewrite the README around live links, quick-start commands, current trip snapshot, and the real deploy flow.
- Reframe deployment docs around the actual canonical host.
- Remove tracked vault/editor-state files from the public tree.
- Update the GitHub About metadata in the same pass.

### Prevention rule

- For public repos, do a homepage audit before calling release cleanup complete:
  - About description
  - website URL
  - topics
  - first 30 lines of README
  - tracked editor/vault state
