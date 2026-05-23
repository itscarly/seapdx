# Learnings

## Reusable patterns

### Airfare tracker is now a PAL award tax monitor, not a cash-fare system

- `data/airfare-watch.json` holds two routes: SFO→MNL (58k mi + $370.50) and ORD→MNL (67k mi + $375.50). To update: add a new `taxHistory` entry with today's date and the new tax amount, update `currentTax` and `lastChecked`. No scripts to run — commit and push the JSON.

### Hotel benchmark is a confirmed booking, not a watch candidate

- Boylston (RES ID [redacted], $384.13 total) is locked in. Monitor only hunts for a refundable sub-$400 option near King Street Amtrak or Link Light Rail. Do not reopen the benchmark status unless the reservation is cancelled.

### Static-site verification beats guesswork

- When localhost looks broken in this project, verify the local server and direct URLs before assuming app code is broken.

### Notes should be reconciled, not only appended

- Session logs can grow forever, but active notes should be rewritten into a clean current state.

### Shared agent rules need one project source

- Codex and Claude stay aligned better when both point at the same project structure and maintenance workflow.

### Keep documentation tied to verified behavior

- Workflow and architecture notes should come from the actual repo state, not memory alone.

### Compressed output needs a readability boundary

- Token saving is useful, but user-facing answers should still stay readable for a non-technical person instead of turning every response into shorthand.

### Long chats should be split with handoff notes

- When a thread gets too long, the clean move is to write a short handoff summary and continue in a new chat instead of dragging stale context forward.

### Screenshots should be the exception, not the default

- For most work, text descriptions, file paths, logs, and direct page details are cheaper and clearer than screenshots.

## How to use this note

Add only patterns that should help future sessions.

Do not dump one-off scratch observations here.
