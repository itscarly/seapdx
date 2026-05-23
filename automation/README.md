# Automation

Automation plans for keeping the itinerary current.

## Workflows

- `price-monitoring-workflow.md`: recurring checks for food prices, reservations, happy hours, backups, transit fares, routes, and source changes.
- `flight-monitoring-workflow.md`: 15-minute near-real-time flight checks, dashboard status visibility, and email-ready alert configuration.
- `airfare-monitoring-workflow.md`: direct-airline-only fare tracking for the March 2027 SFO/ORD to Manila booking decision.
- `hotel-monitoring-workflow.md`: automated direct-site refundable hotel tracking for Seattle, with total-cost ranking, transit scoring, and rebooking logic.

## Status

- Netlify is the active public host and redeploys automatically on every push to `main`.
- GitHub Actions validates the dashboard on pushes and pull requests.
- GitHub Actions runs the itinerary monitor on schedule and on demand.
- GitHub Actions can also run the flight monitor every 15 minutes.
- The monitor workflow auto-commits and pushes generated monitor artifacts when they change.
- GitHub Issues are the current default alert channel for detected source changes, while flight alerts are email-ready when provider secrets are configured.
- Airfare monitoring uses a separate tracker under `data/airfare-watch.json` and `research/airfare/`; third-party fare sites are discovery signals only until airline-direct checkout verifies the fare.
- Hotel monitoring now has active Codex cron automations for Seattle direct-site checks. The current band runs Monday/Wednesday/Friday at `10:00 AM` America/New_York, and the pre-trip band runs daily at `10:00 AM` from Sep 17 through Oct 31, 2026.
