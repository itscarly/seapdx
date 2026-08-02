# Known Issues

Related: [[TASKS]] · [[CHANGELOG]] · [[LEARNINGS]] · [[Project Log]]

## Current known issues

### Hotel booking cleanup still needs human confirmation

- Status: resolved as of 2026-08-02
- Detail: the dashboard now treats Boylston and Hotel Vance, a Tribute Portfolio Hotel, as the active hotel truth (confirmed accommodations total `$917.42`). Courtyard by Marriott Portland City Center was the stale booking and has been fully removed from trip-data.js, app.js, index.html, logistics.html, and the memory notes.

### November 2026 hours, transit fares, and a couple of unverified prices still need closer review

- Status: open
- Detail: business hours, some restaurant details, and a few day-trip transit fares still need closer review as the trip approaches. Specifically flag: (1) the exact POINT NorthWest return time from Cannon Beach on Day 6, (2) the exact Columbia Gorge Express November schedule and fare for Day 8, (3) whether "Sea'd In Capitol Hill" (Day 4 dinner) is a real, bookable restaurant -- research could not confirm it exists, (4) Asiana's OZ271/272 schedule notice lists Mon/Tue/Wed/Fri/Sat rather than the booked Sunday Nov 1 arrival date -- reconfirm directly with Asiana. The Seattle Kraken watch item is retired; Kraken tickets were removed from the plan on 2026-08-02 and should not be reintroduced.

### Homepage calendar links still prefer day-level fallback when no exact event URL is stored

- Status: open
- Detail: if a stop has no exact `calendarUrl`, the homepage uses a Google Calendar day view link rather than the specific event view. The route and content still match, but the deep-linking can be tightened later.

### Agent-maintained docs still depend on meaningful task boundaries

- Status: open
- Detail: the system can keep notes cleaner, but it still depends on Codex or Claude following the post-task maintenance rules after real work
