# Known Issues

## Current known issues

### Public deploy may lag local updates

- Status: closed (as of 2026-05-23 session 3) — pushed hotels.html, hotels.js, styles.css + inline dark theme fix
- Detail: this issue recurred in session 3 — 626 lines of hotel tracker changes sat uncommitted. Prevention: run `git status` at session start and push any uncommitted files before starting new work.
- See LEARNINGS for the diff-based diagnosis technique.

### Tracker subsystems can drift if one restore overwrites another

- Status: open
- Detail: the airfare and hotel tracker files are separate static subsystems, so partial restore commits can accidentally remove one while fixing the other unless the dashboard, scripts, and notes are checked together

### Airfare tracker UI is still below the main dashboard quality bar

- Status: closed
- Detail: both tracker pages now use a dark premium theme with navy/charcoal backgrounds, gold/teal/blue accents, proper card hierarchy, and executive-style visual polish. All hotel booking links are clickable. Local server auto-start was already in place via launchd.

### Agent continuation work needs explicit file-preservation guardrails

- Status: open
- Detail: previous agent work drifted into deleting or removing working tracker files, so continuation tasks should explicitly name allowed edit files, preserved files, and required validation before any cleanup logic is attempted

### November 2026 business hours are still partly provisional

- Status: open
- Detail: many place hours and some happy-hour details need closer rechecking as the trip approaches

### Agent-maintained docs still depend on meaningful task boundaries

- Status: open
- Detail: the system can keep notes cleaner, but it still depends on Codex or Claude following the post-task maintenance rules after real work
