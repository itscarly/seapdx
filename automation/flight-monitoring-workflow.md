# Flight Monitoring Workflow

## Goal

Watch booked flights on a 15-minute cadence, surface the latest known status in the dashboard, and send email alerts when official airline or airport pages materially change.

## What This Does

- Treats flight monitoring as near-real-time polling, not airline push infrastructure.
- Checks the official airline and airport status pages listed in `data/trip-data.js`.
- Writes a report to `research/flights/latest-report.md`.
- Saves a snapshot to `data/flight-monitor-snapshot.json`.
- Sends email alerts when:
  - `RESEND_API_KEY`
  - `FLIGHT_ALERT_EMAIL_TO`
  - optional `FLIGHT_ALERT_FROM`
  are configured in GitHub repository secrets.

## Current Scope

- November 1, 2026 arrival chain: `MNL -> ICN -> SEA`
- November 9, 2026 return chain: `PDX -> DFW -> CRP`
- February 27, 2027 later booking: `CRP -> DFW -> SFO`

## Cadence

- GitHub Actions workflow: every 15 minutes
- Honest limitation: this is fast polling, but still not the same as airline-app push alerts

## Recommended Traveler Setup

- Keep airline-app notifications enabled as the fastest source of boarding and gate changes.
- Treat the dashboard monitor as a second layer that adds visibility, archived reports, and email-based change summaries.

## Secrets Needed For Email

- `RESEND_API_KEY`
- `FLIGHT_ALERT_EMAIL_TO`
- `FLIGHT_ALERT_FROM` optional

Without those secrets, the monitor still runs and writes reports, but it does not send email.
