# Learnings

## Reusable patterns

### GitHub Pages only updates when you push — always check git status first

- The live site at `limcarl83-maker.github.io/my_projects/` serves from `origin/main`. Local changes are invisible until committed and pushed.
- Root cause of the 2026-05-23 session 3 "broken" appearance: 626 lines of hotel tracker changes (hotels.html, hotels.js, styles.css) sat uncommitted while the live site served the old version.
- Prevention: at the start of any session that follows UI work, run `git status` before anything else. If modified files exist, push them immediately.

### Dark theme requires an inline body override — do not remove it

- The base `body` style in `styles.css` sets a light beige background (`#f8faf6`). The `.dark-tracker` class overrides it, but cascade issues on GitHub Pages can let the light version bleed through.
- Fix applied 2026-05-23: added `<style>body { background: #0d1117; color: #e6edf3; }</style>` inside the `<head>` of both `airfare.html` and `hotels.html`. This is load-order safe and cannot be overridden by the external stylesheet.
- If the pages ever look light/beige again: check this inline style is present in the committed HTML. Do not remove it as "redundant."

### When the live site looks wrong, diff live vs local before assuming code is broken

- Use `curl -s <live-url> | diff - <local-file>` to instantly see what the live site is actually serving.
- This takes 5 seconds and immediately reveals whether the problem is a deployment gap (unpushed changes) vs a real code bug.

### Airfare tracker is now a PAL award tax monitor, not a cash-fare system

- `data/airfare-watch.json` holds two routes: SFO→MNL (58k mi + $370.50) and ORD→MNL (67k mi + $375.50). To update: add a new `taxHistory` entry with today's date and the new tax amount, update `currentTax` and `lastChecked`. No scripts to run — commit and push the JSON.

### Direct booking automation can misread room-night rates as stay totals

- The 2026-05-24 TravelClick scrape picked up `$242.73`, but manual checkout verification showed the real Paramount total was `$731.60` with subtotal `$620.00` and taxes `$111.60`.
- For booking engines with multi-step checkout, trust the final checkout total over the first visible room price.

### A failed live refresh should leave an explicit blocker, not a vague missing-price note

- Boylston stayed Cloudflare-blocked, Hilton Seattle's tracked direct URL returned a Hilton 404, and PAL's award-tax flow loaded the generic home page behind cookie/interaction gates.
- When this happens, keep the last known verified number if one exists, record the blocker in `priceVerification` or `taxHistory`, and remove stale "needs-check" wording.

### Checkout engines need stricter acceptance rules than brand blocks do

- The first layered dry run still produced fake "captures" for Boylston, Hotel Max, and Paramount because listing-page text looked like totals.
- Fix: TravelClick, SynXis, and Sonder should only count as success when the monitor reaches a checkout-grade subtotal/tax/total view. If they only expose listing text, downgrade to `manual-review-needed` and preserve the last trustworthy total.

### Persistent browser profiles are useful, but honesty still matters more than coverage

- Hilton, Hyatt, IHG, and several Marriott flows still returned anti-bot or stale-page states even with the persistent Playwright profile path in place.
- The right behavior is explicit `blocked-direct` or `stale-direct-url`, not retry loops or invented prices.

### Hotel benchmark is a confirmed booking, not a watch candidate

- Boylston (RES ID [redacted], $384.13 total) is locked in. Monitor only hunts for a refundable sub-$400 option near King Street Amtrak or Link Light Rail. Do not reopen the benchmark status unless the reservation is cancelled.

### Static-site verification beats guesswork

- When localhost looks broken in this project, verify the local server and direct URLs before assuming app code is broken.

### Notes should be reconciled, not only appended

- Session logs can grow forever, but active notes should be rewritten into a clean current state.

### Shared agent rules need one project source

- Codex and Claude stay aligned better when both point at the same project structure and maintenance workflow.

### Keep documentation tied to verified behavior

- Workflow and architecture notes should come from the actual repo state, not memory alone.

### Compressed output needs a readability boundary

- Token saving is useful, but user-facing answers should still stay readable for a non-technical person instead of turning every response into shorthand.

### Long chats should be split with handoff notes

- When a thread gets too long, the clean move is to write a short handoff summary and continue in a new chat instead of dragging stale context forward.

### Screenshots should be the exception, not the default

- For most work, text descriptions, file paths, logs, and direct page details are cheaper and clearer than screenshots.

## How to use this note

Add only patterns that should help future sessions.

Do not dump one-off scratch observations here.
