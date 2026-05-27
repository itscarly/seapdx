# Known Issues

Related: [[TASKS]] · [[CHANGELOG]] · [[LEARNINGS]] · [[Project Log]]

## Current known issues

### 3 active Seattle reservations — must cancel 2 before Oct 30–31

- Status: open — action required
- Detail: Reside (conf [redacted], cancel by Oct 30 4pm), Palihotel (conf [redacted], cancel by Oct 30 3pm), Boylston (conf [redacted], cancel by Oct 31 4pm). User intends to keep Reside. Palihotel has a 1-night penalty if cancelled after deadline. Dashboard shows a red ⚠️ reservationStatus warning.

### Public deploy lags until push lands and Pages rebuilds

- Status: open (recurring)
- Detail: GitHub Pages only reflects committed and pushed state. After a push, Actions takes 1–2 min to redeploy. Hard refresh (Cmd+Shift+R) required to bypass browser cache. Do not assume code is broken until push is confirmed and Pages has rebuilt.

### Tracker subsystems can drift if one restore overwrites another

- Status: open
- Detail: the airfare and hotel tracker files are separate static subsystems, so partial restore commits can accidentally remove one while fixing the other unless the dashboard, scripts, and notes are checked together

### Many direct booking flows still block unattended price capture

- Status: open
- Detail: the layered monitor now classifies these honestly as `blocked-direct`, `stale-direct-url`, or `manual-review-needed`, but most chain flows still do not expose a trustworthy automated total. Hilton, Hyatt, and IHG are still anti-bot heavy; several Marriott property URLs are stale; boutique engines still require checkout-grade totals to avoid nightly-rate mistakes.

### Local Playwright hotel runs can fail before any booking page loads

- Status: open
- Detail: on 2026-05-26 the Seattle hotel watch could not refresh any live direct quote because the shared Playwright browser profile stayed locked and repo Chromium launch then failed with a macOS MachPort permission error before page load. Keep prior verified hotel totals in place and log the blocker explicitly instead of marking rates as refreshed.

### Staypineapple flash sale prices are temporary

- Status: open
- Detail: 4 Staypineapple prices (Maxwell $534.94, Hotel FIVE $560.09, Watertown $543.91, University Inn $491.84) were captured during a Memorial Day 25% off sale (~ends 2026-05-28). Re-check regular prices after sale expires — actual November prices will be higher.

### Agent continuation work needs explicit file-preservation guardrails

- Status: open
- Detail: previous agent work drifted into deleting or removing working tracker files, so continuation tasks should explicitly name allowed edit files, preserved files, and required validation before any cleanup logic is attempted

### November 2026 business hours are still partly provisional

- Status: open
- Detail: many place hours and some happy-hour details need closer rechecking as the trip approaches

### Agent-maintained docs still depend on meaningful task boundaries

- Status: open
- Detail: the system can keep notes cleaner, but it still depends on Codex or Claude following the post-task maintenance rules after real work

### Airfare dashboard still speaks the old PAL-tax language

- Status: open
- Detail: `data/airfare-watch.json` now carries the new cash-fare watch baseline, but `dashboards/js/airfare.js` and the page copy still assume PAL tax semantics. The automation and generated report are correct; the dashboard text layer still needs a dedicated rewrite before the page becomes trustworthy again.
