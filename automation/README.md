# Automation

Automation plans for keeping the itinerary current.

## Workflows

- `price-monitoring-workflow.md`: recurring checks for food prices, reservations, happy hours, backups, transit fares, routes, and source changes.
- `flight-monitoring-workflow.md`: 15-minute near-real-time flight checks, dashboard status visibility, and email-ready alert configuration.

## Status

- Netlify is the active public host and redeploys automatically on every push to `main`.
- GitHub Actions validates the dashboard on pushes and pull requests.
- GitHub Actions runs the itinerary monitor on schedule and on demand.
- GitHub Actions can also run the flight monitor every 15 minutes.
- The monitor workflow auto-commits and pushes generated monitor artifacts when they change.
- GitHub Issues are the current default alert channel for detected source changes, while flight alerts are email-ready when provider secrets are configured.
