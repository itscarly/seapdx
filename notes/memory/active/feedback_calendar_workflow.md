---
name: Calendar modification workflow
description: Required order of operations when adding events to Google Calendar for this project
type: feedback
originSessionId: 2a4e53b8-e29c-43b5-9b9a-87d49af02cc4
---
Always follow this sequence before creating any calendar event:

1. **List existing events first** (`list_events` for the target date range)
2. **Check all existing event end times** — never assume times match trip-data.js; the actual calendar may differ
3. **Adjust existing events that create conflicts** before adding any new events
4. **Only then add new events** in the freed gaps

**Why:** In this session, I added social venue events on top of existing calendar blocks without reading what was already there. This caused repeated overlaps. The user had to point this out multiple times across two sessions. This is unacceptable.

**How to apply:** For any calendar task — even small adds — always call `list_events` first for the affected days. Never skip this step. If an existing event needs to end earlier to create a gap, update that event before creating the new one.
