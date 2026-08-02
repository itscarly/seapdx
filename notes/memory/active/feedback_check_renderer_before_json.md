---
name: feedback-check-renderer-before-json
description: Check the dashboard JS to confirm it reads a key before storing data under it
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a8318bea-905d-4e18-884e-698c86769920
---

Before storing data under a new JSON key, verify the dashboard renderer actually reads that key.

**Why:** Courtyard was stored under `secondReservation` but `hotels.html` only read `currentReservation` and `watchlist`. The hotel was invisible on the dashboard until the HTML was updated. User had to point this out.

**How to apply:** When adding a new field or key to any data file, grep the relevant HTML/JS file first to confirm it's consumed. If not, update the renderer in the same commit as the data change — never after.

[[feedback_sync_both_hotel_files]]
