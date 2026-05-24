# Known Issues

## Current known issues

### Public deploy may lag local updates

- Status: open (recurring) — always run `git status` at session start and push uncommitted files before new work.

### Tracker subsystems can drift if one restore overwrites another

- Status: open
- Detail: the airfare and hotel tracker files are separate static subsystems, so partial restore commits can accidentally remove one while fixing the other unless the dashboard, scripts, and notes are checked together

### Many direct booking flows still block unattended price capture

- Status: open
- Detail: the layered monitor now classifies these honestly as `blocked-direct`, `stale-direct-url`, or `manual-review-needed`, but most chain flows still do not expose a trustworthy automated total. Hilton, Hyatt, and IHG are still anti-bot heavy; several Marriott property URLs are stale; boutique engines still require checkout-grade totals to avoid nightly-rate mistakes.

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
