# Active Follow-ups

```dataview
TABLE type, source, status, confidence, next_action
FROM "notes"
WHERE status = "active" AND next_action != null
SORT last_verified desc
```

Use this as the next-action queue for new sessions.
