# Open Blockers

```dataview
TABLE source, status, confidence, next_action
FROM "notes"
WHERE status = "needs-attention" OR status = "blocked" OR contains(lower(next_action), "blocker")
SORT last_verified desc
```

Fallback: if Dataview is not installed, check [[KNOWN_ISSUES]] and the latest [[session-start/2026-05-28]].
