---
name: feedback-sync-both-hotel-files
description: "When editing hotel data, always sync both hotel-monitor-source.json AND hotel-monitor-report.json"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 49bbfe1c-614e-4706-8ed7-a18c13e56f06
---

Always edit both `data/hotel-monitor-source.json` AND `data/hotel-monitor-report.json` when changing hotel watchlist data.

**Why:** `hotels.html` reads from `hotel-monitor-source.json` (the dashboard data source). `hotel-monitor-report.json` is the full metadata/report file. They have different schemas but must stay in sync. Editing only the report leaves the live dashboard stale.

**How to apply:** After any hotel add/remove/price update, sync source from report using the watchlist arrays. Source uses a flat `watchlist` array per city; report uses `excluded` + `needsCheck` arrays. Combine both into source's `watchlist`.

[[project_current_state]]
