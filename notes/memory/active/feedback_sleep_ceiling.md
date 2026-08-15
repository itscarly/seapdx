---
name: feedback-sleep-ceiling
description: "Sleep/lights-out blocks must never start before 10:00 PM, and never as early as ~6:50-8:00 PM, on any itinerary day"
metadata:
  node_type: memory
  type: feedback
  originSessionId: session-49-sleep-and-images-audit
---

Itinerary "wind-down/sleep" blocks were originally single items spanning from early evening (6:50 PM / 8:00 PM) straight through to next-day wake time, which read as sleeping at 6:50 PM on vacation.

**Why:** User caught this directly from the live Google Calendar month view (2026-08-15, session 49): "There is no such thing as sleeping at around 6:00 PM. That is weird, especially if you're on vacation. Give me a ceiling of at least 10:00 PM to go to sleep, but not early as 6:50 PM."

**How to apply:** Any day's evening wind-down must be split into two items: an "Evening wind-down (self-choose)" or "Dinner and wind-down" block covering early evening through 10:00 PM, then a separate "Sleep" block starting no earlier than 10:00 PM and running to the next day's wake time. Apply this to every remaining day (4-9) when their rich-stop rebuild happens, and to any new live-calendar sync. See [[project_current_state]] for which days are already fixed.
