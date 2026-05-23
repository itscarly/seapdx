# Known Issues

## Current known issues

### Public deploy may lag local updates

- Status: open
- Detail: local project files and the localhost preview can be current even when the public deploy is stale or blocked by hosting/account limits

### Tracker subsystems can drift if one restore overwrites another

- Status: open
- Detail: the airfare and hotel tracker files are separate static subsystems, so partial restore commits can accidentally remove one while fixing the other unless the dashboard, scripts, and notes are checked together

### November 2026 business hours are still partly provisional

- Status: open
- Detail: many place hours and some happy-hour details need closer rechecking as the trip approaches

### Agent-maintained docs still depend on meaningful task boundaries

- Status: open
- Detail: the system can keep notes cleaner, but it still depends on Codex or Claude following the post-task maintenance rules after real work
