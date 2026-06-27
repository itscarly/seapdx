# Phase 2: Calendar Event Updates - Comprehensive Guide

**Status:** Ready to execute. 111 emoji-format events need standardization + enrichment.

**Session completed:** June 27, 2026
- ✅ Phase 1: Deleted 35 SEAPDX duplicates
- ✅ Phase 3: Created 8 sleep blocks (🛌 Day # · Rest · Sleep times)
- ⏳ Phase 2: Ready to execute next session

---

## Quick Reference: Research Data (Verified)

### Tier 1: Verified from Research (19 venues)

#### Restaurants
- **Menya Musashi** — $20-23 | Cards: Yes | 11:30am-10pm | https://menyamuso.us/
  - What to order: Original or Black Ramen ($17-25), add soft-boiled egg
  - Skip: Red (spicy) unless priority
  
- **Hana Sushi** — $10-20 | Cards: Yes | 11am-9pm | https://www.hanasushiandizakaya.com/
  - What to order: Omakase or chef's choice, Pacific NW seafood
  - Call for reservations
  
- **Cubo de Cuba** — $14-21 | Cards: Yes | 11am-10pm | https://www.cuboportland.com/
  - What to order: Cuban sandwich (Cubano) — the signature
  - Skip: Salads, order the sandwich
  
- **Luc Lac Vietnamese Kitchen** — $10-20+ | Cards: Yes | 11am-11pm | https://luclackitchen.com/
  - Walk-in only, first-come first-served
  - Full Vietnamese menu
  
- **Glo's Breakfast** — $12-18 | Cards: Yes | 8am-3pm | https://www.glosseattle.com/
  - Classic diner, walk-in only
  - What to order: Eggs with corned beef hash or loaded omelette + house toast
  
- **Biang Biang Noodles** — $7-22 | Cards: Yes | 11:30am-9pm | https://www.biangbiangnoodles.com/
  - Walk-in, quick wait
  - Appetizers $6.89-$9.19, entrees $16-22
  - What to order: Signature Biang Biang noodles
  
- **Salt & Straw Ice Cream** — Pints $15 | Scoops $8-12 | Cards: Yes | 11am-11pm | https://saltandstraw.com/
  - Rotating local/seasonal flavors
  - What to order: Ask what's fresh this season
  - Skip: Verify open in November (seasonal shop)
  
- **FOB Sushi Bar** — $15-25/person | Cards: Yes | 11am-8pm | https://fobsushibar.us
  - Self-serve by weight, walk-in cafeteria-style
  - Typical visit $15-25 per person
  
- **Uneeda Burger** — Burgers $12-14 | Cards: Yes | 11am-9pm | https://uneedaburger.com/
  - What to order: Burgers $12-14, solid bet
  
- **Tacos Chukis** — $3-9 | Cards: Yes | 11am-10pm | https://www.seattlechukis.com
  - Street food, walk-in counter service
  - Tacos $2.95-3.35, tortas/quesadillas ~$8-9
  
- **Madison Diner (Bainbridge Island)** — $17-19 | Cards: Yes | 7am-2pm | themadisondiner.com
  - Walk-in only, classic diner
  - What to order: Eggs + corned beef hash (reliable, filling)

#### Cafes
- **Analog Coffee** — $3.10-5.80 | Cards: Yes | 7am-6pm | https://analogcoffee.com/
  - Third-wave specialty, rotating Seattle roasters
  - What to order: Seasonal espresso + small milk, ask what's on bar today
  
- **Ballard Coffee Works** — $3.25-8 | Cards: Yes | 6:30am-9pm | ballardcoffeeworks.com
  - Direct-trade single-origin beans (Kenya, Ethiopia)
  - Pour-over + espresso specialty

#### Attractions (Partial)
- **Grassa** (Portland) — $11-19 | Cards: Yes | 11am-10pm | https://www.grassapdx.com
  - Pasta bowls avg $13-15
  
- **Tasty Corner** (Portland) — $10-18 | Cards: Yes | 11am-9pm | https://www.tastycornerpdx.com/
  - Sichuan cuisine, $10-18 entrees, $20-30 per person with drinks
  
- **Eem** (Portland) — $13-26 | Cards: Yes | 11am-10pm | https://www.eempdx.com/
  - Thai, entrees $13-26, most $19-22

#### Others
- **Goose Hollow Inn** (Portland) — $11-15 | Cards: Yes | 11am-11pm | https://www.goosehollowinn.com/
  - Reservations required (or call 10am-noon)
  - Parties 14+ need email 3+ business days advance
  
- **Pretty Ugly Burger** (Portland) — $20 | Cards: Yes | 4pm-12am | https://prettyuglypdx.com/
  - 21+ only, via Resy
  - $25 late cancellation fee if cancel <24hr or arrive 15+ min late
  
- **Life of Pie NW** (Portland) — $9-23 | Cards: Mixed | 11am-10pm | https://lifeofpiepizza.com/
  - Happy hour 11am-6pm (pizzas $9)
  - Standard entrees $18-23

---

## Phase 2 Execution Map

### Step 1: Download Update Research Data
File: `/tmp/updates_config.json` contains:
- All 19 verified venue details
- Sleep block definitions
- Category mappings

### Step 2: Batch Update Strategy

**Approach:** Update 111 events in 3 focused passes

**Pass A (Tier 1 - 19 events):**
Events with restaurants/cafes from research data. Update all descriptions with:
- ✅ Prices (verified)
- ✅ Card acceptance (verified)
- ✅ Hours (verified)
- ✅ Website links
- ✅ What to order/skip recommendations
- ✅ Emoji alignment

**Pass B (Tier 2-5 - 92 events):**
Remaining events. Update with:
- ✅ Standardized naming format
- ✅ Emoji alignment
- ✅ Basic public data (from websites, Google Maps)
- ✅ Transit details (from agency sites + Google Maps)

### Step 3: Naming Format Template

**Standard format:**
```
[Emoji] Day [#] [Location] · [Type] · [Activity Name]
```

**Examples (updated):**
- `🍜 Day 3 Seattle · Meal · Menya Musashi ramen`
- `☕ Day 2 Seattle · Coffee · Victrola Capitol Hill`
- `🚂 Day 5 Seattle-Portland · Transit · Amtrak Cascades 517`
- `🚶 Day 3 Seattle · Walk · Smith Tower to Menya Musashi`
- `🛌 Day 2 Seattle · Rest · Sleep & wind-down (10pm-6am)`

### Step 4: Emoji Key (Complete)

| Emoji | Use | Example |
|-------|-----|---------|
| 🚂 | Train/Amtrak | Amtrak Cascades to Portland |
| 🚶 | Walk/Transit between locations | Capitol Hill → Pike Place walk |
| 🚇 | Public transit (bus/MAX/Link) | MAX Red Line to Eem |
| ⛴️ | Ferry | Bainbridge Island ferry |
| ☕ | Coffee/Cafe | Victrola Coffee |
| 🍳 | Breakfast | Glo's breakfast |
| 🍜 | Ramen/Noodles | Menya Musashi ramen |
| 🍣 | Sushi | Hana Sushi dinner |
| 🍕 | Pizza | Life of Pie dinner |
| 🍝 | Pasta | Grassa pasta |
| 🍱 | Asian meal (general) | Luc Lac Vietnamese |
| 🍔 | Burger | Uneeda Burger lunch |
| 🍛 | Curry/Thai | Eem Thai lunch |
| 🍰 | Ice cream/Dessert | Salt & Straw ice cream |
| 🍹 | Cocktail/Bar | Saint John's happy hour |
| 🍺 | Beer/Pub | Goose Hollow Inn |
| 🏨 | Hotel/Accommodation | Boylston Hotel check-in |
| 🛌 | Rest/Sleep (CRITICAL) | Sleep & wind-down blocks |
| 🌊 | Waterfront/Park | Waterfront Park stroll |
| 🌲 | Garden | Portland Japanese Garden |
| 📚 | Bookstore | Powell's City of Books |
| 🎵 | Record shop | Mississippi Records |
| 🛍️ | Shopping | Pike Place market browse |
| 🏛️ | Observatory/Architecture | Smith Tower observation deck |
| 🎭 | Entertainment/Bar | Novel Book Bar |

---

## Cafes Needing Public Data Lookup

**For next session, use these websites:**
- Victrola Coffee (Seattle, Pike Place): victrola.coffee
- Storyville Coffee (Seattle, Pike Place): storyvillecoffee.com
- Pegasus Coffee House (Bainbridge): pegasuscoffeehouse.com
- Heart Coffee Roasters (Portland, Pearl): heartroasters.com
- Stumptown Downtown (Portland): stumptowncoffee.com
- Island Cool Ice Cream (Bainbridge): islandcoolwinslow.com

---

## Attractions Needing Public Data Lookup

**Use these websites + Google Maps:**
- Pike Place Market (Seattle): pikeplacemarket.com
- Smith Tower (Seattle): smithtower.com
- Sky View Observatory (Seattle): columbiacenter.org (Sky View)
- Mississippi Records (Portland): mississippirecords.net
- Powell's City of Books (Portland): powells.com
- Portland Saturday Market: portlandsaturdaymarket.com
- Portland Japanese Garden: japanesegarden.org
- Lan Su Chinese Garden (Portland): lansugarden.org
- NEKO Cat Cafe (Seattle): nekocatcafe.com
- Waterfront Park: seattle.gov (Seward Park, Myrtle Edwards)
- Novel Book Bar (Portland): novelbookbar.com
- MadeHere PDX (Portland): madehere.com

---

## Next Session: Quick Start

1. **Load research data:** `cat /tmp/updates_config.json | jq`
2. **Load calendar:** Fetch current events from Google Calendar (most SEAPDX deleted, sleep blocks added)
3. **Execute Pass A:** Update 19 Tier-1 restaurant/cafe events using verified research
4. **Execute Pass B:** Update remaining 92 events with public data + standardized format
5. **Verify:** Check all 111 events renamed, emoji aligned, descriptions complete
6. **Next:** Mirror calendar to HTML board

---

## Files Saved for Reference

- `/tmp/CALENDAR_UPDATE_GUIDE.md` — Full implementation guide
- `/tmp/updates_config.json` — Research data + venue mappings
- `/tmp/seapdx_ids.txt` — Deleted event IDs (reference)
- This file: `/Users/kicker/Downloads/codexproject/PHASE_2_CALENDAR_UPDATES.md`

---

## Progress Tracking

**Session 1 (June 27, 2026):**
- ✅ Researched 40+ venues (19 verified, rest timed out)
- ✅ Deleted 35 SEAPDX duplicates
- ✅ Created 8 sleep blocks
- ⏳ Phase 2 ready, not executed

**Session 2 (upcoming):**
- ⏳ Execute Phase 2: Update 111 emoji events
- ⏳ Verify all events standardized
- ⏳ Mirror calendar to HTML board
- ⏳ Test HTML board for accuracy

**Total calendar by end of Session 2:**
- 111 updated emoji events (Phase 2)
- 8 sleep blocks (Phase 3)
- ~120 total events, no rework needed
- HTML mirror ready for trip

---

## Notes for Next Session

- All research data is already collected and saved
- No additional API research needed unless venue info changes
- Focus: batch update API calls only
- Emoji standardization is the biggest task (straightforward)
- Pricing/card data is already in research file — just apply it
- Sleep blocks are done and live on calendar
