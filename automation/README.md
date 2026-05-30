# Automation

Automation plans for keeping the itinerary current.

## Workflows

- `price-monitoring-workflow.md`: recurring checks for food prices, reservations, happy hours, backups, transit fares, routes, and source changes.
- `airfare-monitoring-workflow.md`: airline-direct Manila fare tracking with discovery-vs-verified separation, route scoring, and booking-state rules.
- `hotel-monitoring-workflow.md`: scheduled Seattle direct-site hotel checks for the Nov 1-4, 2026 stay window.

## Status

- Netlify is the active public host and redeploys automatically on every push to `main`.
- GitHub Actions validates the dashboard on pushes and pull requests.
- GitHub Actions runs the itinerary monitor on schedule and on demand.
- GitHub Actions also runs the PAL tax monitor and hotel monitor on schedule.
- The monitor workflow auto-commits and pushes generated monitor artifacts when they change.
- GitHub Issues are the current default alert channel for detected source changes.
- The airfare tracker is a manual-refresh subsystem today: the repo stores the watch data, then `npm run monitor:airfare` regenerates the report and summary artifacts.
- Seattle hotel monitoring is now represented in the site as a real scheduled watch cadence rather than placeholder cadence text.
- Saved Codex automations now cover 9 kept watches: Seattle hotels, Seattle/Portland prices, Seattle/Portland transit checks, and SFO/ORD→MNL airfare.
