# Known Issues

Related: [[TASKS]] · [[CHANGELOG]] · [[LEARNINGS]] · [[Project Log]]

## Current known issues

### Hotel booking cleanup still needs human confirmation

- Status: open — action required
- Detail: the dashboard now treats Boylston and Courtyard Portland as the active hotel truth, but any older Seattle or Portland hotel bookings still need to be manually confirmed or cancelled outside the repo.

### November 2026 hours and ticket availability are still partly provisional

- Status: open
- Detail: business hours, some restaurant details, ticket availability, and menu pricing all still need closer review as the trip approaches. The strongest monthly watch candidates are Seattle sail pricing, Sky View Observatory hours and admission, Portland Japanese Garden hours and admission, Glo's hours/menu, and the Kraken 2026-27 schedule or single-game inventory.

### Homepage calendar links still prefer day-level fallback when no exact event URL is stored

- Status: open
- Detail: if a stop has no exact `calendarUrl`, the homepage uses a Google Calendar day view link rather than the specific event view. The route and content still match, but the deep-linking can be tightened later.

### Agent-maintained docs still depend on meaningful task boundaries

- Status: open
- Detail: the system can keep notes cleaner, but it still depends on Codex or Claude following the post-task maintenance rules after real work
