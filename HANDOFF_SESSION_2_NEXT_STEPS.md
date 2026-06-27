# Handoff: Session 2 - Next Steps

**Date:** June 27, 2026
**Status:** Phase 1 + 3 complete. Phase 2 ready to execute. HTML mirror next.

---

## What's Done ✅

### Phase 1: Deduplication
- ✅ Deleted 35 SEAPDX format events (Portland Days 6-8 duplicates)
- ✅ Kept 111 emoji format events as base

### Phase 3: Sleep Blocks
- ✅ Created 8 sleep blocks (🛌 with hotel, times, prep notes)
- ✅ Each night: 10pm-11pm start, 5am-6am wake (adjusted for travel days)
- ✅ All on calendar live now

### Current Calendar State
- 111 emoji format events (original, need Phase 2 updates)
- 8 sleep blocks (new, with hotel context)
- 8 day-level summaries (high-level overviews)
- ~127 total events

---

## What's Ready (Phase 2) ⏳

### Research Data (Verified)
- 19 restaurants/cafes fully researched
- Prices, card acceptance, hours, websites, menus, what to order/skip
- Saved in: `/tmp/updates_config.json`

### Update Guide
- Standardized naming format template
- Emoji key (24 categories)
- Tier system for remaining venues (92 events)
- Saved in: `/Users/kicker/Downloads/codexproject/PHASE_2_CALENDAR_UPDATES.md`

### Cafes & Attractions Lookup List
- 6 cafes (need website lookup for hours/prices)
- 13 attractions (need website lookup for prices/hours)
- All websites listed in Phase 2 guide

---

## Session 2 Task: Execute Phase 2

**When ready, follow this order:**

1. **Load Phase 2 Guide**
   ```
   cat /Users/kicker/Downloads/codexproject/PHASE_2_CALENDAR_UPDATES.md
   ```

2. **Pass A (Tier 1): Update 19 verified venues**
   - Menya Musashi, Hana Sushi, Cubo de Cuba, Luc Lac Vietnamese
   - Glo's Breakfast, Biang Biang, Salt & Straw, FOB Sushi
   - Uneeda Burger, Tacos Chukis, Madison Diner
   - Analog Coffee, Ballard Coffee Works
   - Grassa, Tasty Corner, Eem, Goose Hollow Inn, Pretty Ugly Burger, Life of Pie
   
   **Action:** Update each event with verified research data (prices, cards, hours, links, what to order/skip)

3. **Pass B (Tier 2-5): Update 92 remaining events**
   - Standardize naming format
   - Emoji alignment
   - Add basic public data (websites, Google Maps, transit)
   
   **Action:** Batch updates for format + emoji alignment

4. **Verification**
   - All 111 events renamed to standard format
   - All emojis match activity type
   - All descriptions complete but succinct
   - No duplicates

5. **Mirror to HTML Board**
   - Extract calendar data
   - Build HTML table/timeline
   - Add interactive features
   - Test for accuracy

---

## Files & References

### Saved Guides
- `/Users/kicker/Downloads/codexproject/PHASE_2_CALENDAR_UPDATES.md` — Complete Phase 2 guide
- `/Users/kicker/Downloads/codexproject/HANDOFF_SESSION_2_NEXT_STEPS.md` — This file
- `/tmp/updates_config.json` — Research data JSON (expires after session)

### Calendar
- Live on Google Calendar: `b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com`
- 111 emoji events (need Phase 2 updates)
- 8 sleep blocks (live + complete)
- 8 day summaries (optional, can keep or remove)

### Research Done
- 19 venues fully researched (prices, hours, cards, websites, menus, recommendations)
- 6 cafes flagged for quick website lookup (< 5 min per cafe)
- 13 attractions flagged for quick website lookup (< 5 min per attraction)
- All lookup websites listed in Phase 2 guide

---

## Estimated Time (Session 2)

- **Phase 2 Pass A (19 events):** 15-20 min (research data already collected)
- **Phase 2 Pass B (92 events):** 20-30 min (standardize format + public data)
- **Verification:** 5-10 min
- **HTML mirror prep:** 15-20 min

**Total: ~60-90 min**

---

## Next Phase: HTML Mirror

After Phase 2 complete:

### Build Interactive HTML Board
- Table format: Day # | Location | Time | Activity | Details | Map
- Interactive filters: Day, Location, Type (Meal, Coffee, Attraction, etc.)
- Embedded Google Maps links
- Responsive mobile design
- Print-friendly version

### Data to Include
- Event time (start-end)
- Activity name + emoji
- Type (Meal/Coffee/Attraction/Transit/Rest)
- Location
- Cost estimate
- Card acceptance
- Website/menu link
- What to order/skip
- Next activity location (for navigation)
- Map link

### Testing
- Load on mobile (trip is mobile-first)
- Verify all links work
- Check times don't overlap
- Confirm sleep blocks are clearly visible
- Print test for reference copy

---

## Important Notes

1. **Sleep blocks are live** — Calendar already shows bedtime reminders for all nights. This was the critical user requirement.

2. **Verified data is saved** — No need to re-research. All 19 venue details are in `/tmp/updates_config.json` and PHASE_2_CALENDAR_UPDATES.md

3. **No rework expected** — Phase 1 & 3 are complete and correct. Phase 2 is straightforward rename + enrichment (no duplicates to deal with).

4. **Token optimization** — Phase 2 uses batch updates only. No new research. HTML mirror uses calendar data already collected.

5. **User preference confirmed** — Emoji format + day format (not SEAPDX). All decisions made, no reversions needed.

---

## Questions for Session 2

Before starting Phase 2, confirm:
1. Any venue changes? (No additional research needed, yes/no?)
2. Sleep times still work? (10pm-11pm start, 5am-6am wake?)
3. HTML board features — interactive table, maps, print-friendly?
4. Mobile-first design for trip day reference?

---

**Status: Ready to execute Phase 2 next session. No blockers. All data collected.**
