# Stale Notes

```dataview
TABLE last_verified, status, confidence, next_action
FROM "notes"
WHERE last_verified
AND date(last_verified) <= (date(today) - dur(14 days))
SORT date(last_verified) asc
```

Use this to identify notes that likely need refresh.

Fallback: manually review notes with old `last_verified` dates in source index notes and session-start digests.
