# Automation

Automation plans for keeping the itinerary current.

## Workflows

- `price-monitoring-workflow.md`: recurring checks for food prices, reservations, happy hours, backups, transit fares, routes, and source changes.

## Status

- Netlify is the active public host and redeploys automatically on every push to `main`.
- GitHub Actions validates the dashboard on pushes and pull requests.
- GitHub Actions runs the itinerary monitor on schedule and on demand.
- The monitor workflow auto-commits and pushes generated monitor artifacts when they change.
- GitHub Issues are the current alert channel for detected source changes.
