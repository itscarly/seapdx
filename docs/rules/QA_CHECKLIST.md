# QA Checklist

## Data

- [x] Budget total is under the $800 target.
- [x] $900 absolute ceiling is documented as optional only.
- [x] Category total matches projected total.
- [x] Day totals match item totals.
- [x] Core transit fares are sourced.
- [x] Core attractions are sourced.
- [x] Included bars have happy-hour notes or are explicitly capped as optional.
- [x] Coffee bean budget is tracked.
- [x] Coffee bean budget is capped at $60.
- [x] Tip guidance is rendered on relevant food, coffee, and cocktail cards.
- [x] Social/dating guide is rendered with public meetup and safety notes.

## Dashboard

- [x] Static syntax checks pass.
- [x] Responsive CSS is included.
- [x] Tabs and filters are implemented.
- [x] Google Maps route links are included.
- [x] Source links render from data.

## Recheck Before Travel

- [ ] November 2026 hours.
- [ ] Ferry schedule and fare table.
- [ ] Amtrak operating status.
- [ ] Menu prices and happy hours.
- [ ] Reservation availability.
- [ ] Weather and transit alerts.

## Automation QA

- [ ] Scheduled monitor checks all itinerary stops with source links.
- [ ] Monitor reports old value, new value, source, and budget impact.
- [ ] Monitor alerts when projected spend exceeds `$800`.
- [ ] Monitor blocks automatic itinerary-structure changes without approval.
- [ ] Public site redeploys after accepted dashboard data updates.
