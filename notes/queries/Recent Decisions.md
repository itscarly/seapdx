# Recent Decisions

```dataview
TABLE decision_date, source, confidence, next_action
FROM "notes"
WHERE type = "decision" OR contains(file.name, "Decision")
SORT decision_date desc, last_verified desc
```

Fallback: open [[Decisions]] directly.
