# Price, Hours, Reservation, and Route Monitoring Workflow

## Goal

Automatically recheck itinerary-sensitive facts, notify the traveler when something changes, and update the dashboard data when a change is approved.

## Current Live Setup

- Source control and automation run through GitHub.
- The public site is hosted on Netlify.
- Netlify redeploys automatically on every push to `main`.
- The scheduled monitor writes updated reports and snapshots, commits them, and pushes them back to `main` when those generated files change.
- When source changes are detected, the workflow opens a GitHub issue for review.

## What To Monitor

- Food prices and menu links for every restaurant, cafe, market stop, and airport buffer in `data/trip-data.js`.
- Coffee bean prices and bag availability for Anchorhead, Coava, and listed alternates.
- Cocktail prices, happy-hour windows, and bar hours.
- Reservation requirements and booking windows for Spinasse, Gado Gado, Canon, Portland Japanese Garden, and any later additions.
- Attraction admission, timed-ticket rules, and seasonal hours.
- Transit fares, ferry fares, Amtrak status, and route advisories.
- Backup activities and rainy-day alternatives.
- Closures, reduced hours, seasonal changes, or moved locations.

## Recommended Schedule

- Monthly until August 2026: broad closure, fare, and source-link check.
- Weekly from September 1 to October 15, 2026: prices, hours, reservations, transit, and backups.
- Twice weekly from October 16 to October 31, 2026: restaurant hours, happy hours, reservation availability, ferry/Amtrak notices.
- Daily from November 1 to November 9, 2026: day-of hours, transit alerts, weather, reservation reminders, route disruption checks.

## Change Rules

- Update the dashboard automatically only for low-risk factual changes:
  - hours
  - links
  - fares
  - current price estimates
  - closure/open status
  - reservation windows
- Notify before changing itinerary structure when:
  - a planned stop closes
  - a reservation becomes unavailable
  - a price increase pushes projected spend over `$800`
  - a route becomes unrealistic
  - a backup becomes better than the original stop

## Notification Rules

Every alert should include:

- What changed.
- Old value and new value.
- Source link.
- Budget impact.
- Recommended action.
- Whether the dashboard was updated automatically or needs approval.

Example:

```txt
Spinasse price check changed estimated solo dinner from $72 to $86.
Budget impact: +$14. New projected total: $784 / $800.
Recommendation: keep Spinasse but skip optional Tope drink.
Source: https://spinasse.com/menu/
Dashboard status: updated estimate only.
```

## Implementation Approach

1. Convert the itinerary data into a monitorable source format.
   - Keep `data/trip-data.js` for the dashboard.
   - Add a generated or mirrored JSON file later if automated scripts need easier parsing.
2. Add a scheduled checker.
   - Active option: GitHub Actions scheduled workflow.
   - Local-only option: macOS `launchd` or cron job.
3. Use source-specific checks.
   - Official website first.
   - Reservation platform pages second.
   - Google Maps/search only for status sanity checks, because business listings can lag.
4. Write a change report.
   - Save reports in `research/pricing/`.
   - Append accepted changes to `CHANGELOG.md` if added later.
5. Notify the traveler.
   - Current channel: GitHub issue.
   - Later options: email or Slack/Discord webhook.
6. Update the dashboard.
   - Current behavior: generated reports and snapshots are updated automatically, but itinerary structure changes still require review.
   - Patch `data/trip-data.js` only after review or after a future low-risk auto-patch workflow is added.
   - Run validation:
     - JS syntax check
     - budget audit
     - coffee bean cap audit
     - target/ceiling audit
   - Deploy updated static site.

## Remaining Decisions Before Full Automation

- Notification channel beyond GitHub Issues: email, Slack, Discord, or SMS.
- Whether low-risk dashboard data changes should commit directly or open a pull request for review.
- Whether paid APIs are allowed:
  - Google Places API for place status
  - Google Maps Routes API for travel time
  - OpenWeather for weather
  - email/SMS provider for notifications

## Recommended Default

Use GitHub + Netlify:

- GitHub stores the project and runs scheduled price-check workflows.
- Netlify publishes the static dashboard automatically on every push.
- GitHub Issues are used for alerts and manual approval.
- Email notifications can be added later if desired.
