# Itinerary Updates TODO — Codex Project June 27, 2026

## Status
- Git: FIXED (prevention deployed, commit a894b41 pushed to GitHub)
- Code changes: READY TO APPLY (all decisions finalized, no more research needed)
- Context window: 68% after prevention commit (compact + reset recommended)

## Exact Changes Required

### SEATTLE DAYS 1-5 CHANGES

**Day 2 Evening:**
- Find: `"6:15 PM", name: "Biang Biang dinner"`
- Replace with: `"7:05 PM", name: "FOB Sushi Belltown dinner", ... cost: 32`
- Update: Add Columbia Center sunset at 5:30 PM (move from afternoon)

**Day 3:**
- REMOVE: `"5:05 PM", name: "NEKO Cat Cafe"` (entire block)
- Adjust: Menya Musashi timing → 5:15 PM (from 6:15 PM)
- Adjust: Saint John's timing → 6:30-8:00 PM window

**Day 4 Evening:**
- Find: `"6:20 PM", name: "Dinner on Capitol Hill"`
- Replace with: `"6:25 PM", name: "Sea'd In Capitol Hill dinner", ... cost: 38`
- REMOVE: Sky View Observatory sunset slot (entire section)

---

### PORTLAND DAYS 6-9 COMPLETE REBUILD

**Day 6:** Replace entire segment with minimal arrival day
```
Day 6: Just Luc Lac HH ($15 total)
- 4:45 PM: Luc Lac Vietnamese Kitchen HH (4–7 PM: $6 cocktail, $3 food, $2 spring rolls)
- Confirm Amazon package delivery with Courtyard front desk
- Early sleep (travel recovery)
```

**Day 7:** Replace with Powell's + Tope + Momiji
```
Day 7: Powell's + Tope rooftop sunset + Momiji AYCE
- 9:00 AM: Stumptown Downtown (coffee bean #3, $20-24)
- 10:00 AM: Powell's City of Books (2+ hours)
- 5:30 PM: Tope rooftop (fruity cocktail, sunset river views, $28)
- 7:15 PM: Momiji AYCE sushi (fresh made-to-order, $37)
```

**Day 8:** Replace with Saturday Market + Pretty Ugly + Novel
```
Day 8: Saturday Market + Pretty Ugly Burger + Novel Book Bar
- 9:00 AM: Stumptown Downtown (coffee bean #4, $20-24)
- 10:05 AM: Portland Saturday Market (Waterfront, artisan goods)
- 6:15 PM: Pretty Ugly Burger (new 2026 opening, dry-aged prime beef, $26)
- 8:00 PM: Novel Book Bar (fruity cocktail, books + atmosphere, $18)
```

**Day 9:** Update departure timing
```
Day 9: Final coffee + departure
- 8:45 AM: Stumptown final coffee ($7)
- 1:47 PM: PDX departure (AA 2496)
```

---

### BUDGET UPDATE (Lines 47-59)

Update `"projectedTotal"` from `879.75` to `952`

Update categories:
```
- Transportation: 95 (no change)
- Food: 420 (was 390)
- Cocktails and social: 80 (was 120)
- Entrance fees: 72 (was 60)
- Coffee beans (4 bags): 78 (was 60)
- Souvenirs: 92 (was 95)
- Contingency: 115 (was 59.75)
```

---

### GUIDES SECTION UPDATES

**Reservations Tab:**
- ADD: Meta Glasses Demo (Best Buy Northgate, booking link)
- ADD: Courtyard Portland Package Delivery (call before ordering)

**Coffee Tab:**
- Update to 4-bag strategy:
  - Pike Place Starbucks (Day 2, $15-18)
  - Bainbridge Pegasus (Day 3, $16-20)
  - Stumptown Downtown #3 (Day 7, $20-24)
  - Stumptown Downtown #4 (Day 8, $20-24)

**NEW Souvenirs Tab (create):**
```
- Starbucks Seattle mug + coffee: $18-20
- Starbucks Portland mug: $14-18
- Seattle reference magnet: $8-10
- Portland reference magnet: $8-10
- Pike Place salmon jerky (Wild King): $18-25
- Total: $68-83
```

---

## Verification Checklist (After applying changes)

- [ ] Days 1-5 itinerary correct (FOB Sushi, Columbia sunset, Sea'd In)
- [ ] Days 6-9 Portland completely updated (Luc Lac → Tope → Momiji → Pretty Ugly → Novel)
- [ ] Budget total: $952
- [ ] Coffee beans: 4 bags with locations
- [ ] Souvenirs: New section with pricing
- [ ] Meta Glasses + Courtyard in Reservations
- [ ] Cache-bust version string updated in HTML
- [ ] Dashboard loads correctly locally
- [ ] All changes committed (not pushed yet — wait for verification)

---

## Next Session Resumption

1. Read this TODO file first
2. Apply changes systematically using Edit tool (or create patch script)
3. Test locally: Open `dashboards/html/index.html` in browser
4. Verify all changes display correctly
5. Once verified, commit + push to GitHub

**Git status:** Healthy (prevention in place)
**Remote:** https://github.com/limcarl83-maker/my_projects
**Current branch:** main (commit a894b41)

---

**Memory files updated:** codex_project_nov_2026_decisions.md, HANDOFF_SESSION_2026_06_27.md
**No stale instructions remain.** Ready for next session.
