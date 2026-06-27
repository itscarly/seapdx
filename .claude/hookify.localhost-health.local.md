---
name: require-localhost-health-check
enabled: true
event: stop
action: warn
pattern: .*
---

Before saying the local preview works, verify the codexproject localhost health.

Checklist:

- If this session changed local serving, dashboard files, itinerary data, docs about local preview, or automation, check `http://127.0.0.1:4173/`.
- If the preview is down, run `/Users/kicker/Downloads/codexproject/scripts/ensure-localhost.sh`.
- Confirm the health URL responds before telling the user localhost is working.
- For dashboard or data edits, also verify `/dashboards/html/index.html` and `/data/trip-data.js` if relevant.
