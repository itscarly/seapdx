# Booked Flights Section Redesign Brief

**Status:** Incomplete — needs full professional redesign  
**Live:** https://limcarl83-maker.github.io/my_projects/dashboards/html/index.html  
**Local:** http://127.0.0.1:4173/dashboards/html/index.html

---

## What's Been Done (Partial/Incomplete)

✅ Removed top-level "15-minute flight watch" banner  
✅ Hidden "Customize itinerary" editor section (`display: none`)  
✅ Increased some font sizes (airfare badge 0.84→0.95rem, leg-meta 0.92→1rem)  
✅ Increased padding on journey cards (18→24px)  
⚠️ Basic cache busting (CSS/JS version bump to 2026-06-28-flights-cleanup)

**Commit history:**
- d21b07d: Booked flights redesign (removed flight watch banner)
- 264293f: Fix JS version cache busting

---

## Critical Issues Still Visible

### Visual/Layout Problems
1. **Awkward text wrapping** — Status alert boxes ("Booked, but current Asiana route..." and "Booked and ticketed; watch for PDX...") have poor line breaks, making cards feel cluttered
2. **Font hierarchy weak** — Journey titles (Manila to Seattle, Portland to Corpus Christi) don't stand out enough vs body text
3. **Spacing inconsistent** — Alert boxes, status details, and leg information don't flow cleanly
4. **Card alignment issues** — Left and right journey cards have visual weight imbalance due to text content length

### Specific Elements Needing Redesign
- **Journey header** (Manila to Seattle via Incheon, etc.) — Too small, needs emphasis
- **Status/alert boxes** — Dense text blocks that need better visual hierarchy, icon support, or different layout
- **Leg details** (MNL, ICN, SEA codes, times, flight class) — Cards feel cramped, poor alignment
- **Cost display** ($540.43, $746.41) — Positioned inconsistently, needs better prominence
- **Airport/flight status buttons** — Should have better spacing, hover states

---

## User's Design Requirements

**From conversation:**
- Professional Apple-grade aesthetic (SF Pro fonts ✓, but design not matching)
- Clean alignment without awkward card layouts
- Larger, more readable fonts
- All content visible at once without excessive scrolling
- Interactive elements (buttons, links) should be prominent
- Everything should look intentional and polished, not like placeholder content

---

## Current File Locations

**HTML:** `/Users/kicker/downloads/codexproject/dashboards/html/index.html`  
- Flight section renders via JavaScript (no hardcoded HTML)
- Booked flights in `<details id="flightBoard">` at line ~91-96

**CSS:** `/Users/kicker/downloads/codexproject/dashboards/css/styles.css`  
- Flight board styles: lines ~1552-1780
- Key classes: `.flight-shell`, `.flight-journey`, `.flight-alert-banner`, `.flight-leg-meta`, `.flight-journey-head`

**JavaScript:** `/Users/kicker/downloads/codexproject/dashboards/js/app.js`  
- `renderFlights()` function (~line 615) — Renders entire booked flights section
- `renderFlightJourney()` function (~line 585) — Renders individual journey cards
- `renderFlightLeg()` function (~line 612) — Renders individual flight leg within journey

---

## Recommended Redesign Approach

### Option 1: Compact Timeline Grid
- Remove alert banners entirely, move critical info to badges/labels
- Stack journey info vertically with icon-based status indicators
- Use subtle accent color backgrounds instead of text blocks
- Reduce journey cards to 1-column on mobile, 2-column on desktop

### Option 2: Minimal Card Redesign
- Keep two-column layout but simplify each card:
  - Journey title (larger, 1.3-1.5rem)
  - Journey details as compact badge set (not text blocks)
  - Status icons instead of paragraphs
  - Leg information in clean table format or timeline
- Better color coding (status → alert level via color)
- Prominent action buttons (Flight status, Airport board)

### Option 3: Status-First Design
- Lead with status (✓ Booked, ⚠ Watch for changes, etc.) as large label
- Journey info secondary
- Leg details in collapsible sub-section per journey
- More breathing room, cleaner visual flow

---

## Data Structure (from app.js)

Each journey has:
```javascript
{
  id, title, dateLabel, 
  ticketCost, visibilityNote,
  statusLabel, alertCopy,        // These create awkward text blocks
  airportLeaveBy, statusSource, airportSource,
  legs: [{ ... origin/destination/time/flight info ... }]
}
```

The alert boxes come from `alertCopy` and `statusLabel` — these could be:
1. Converted to badge/icon format
2. Moved to a details/expandable section
3. Simplified to one-line warnings with icons

---

## Next Steps for Codex

1. **Choose design approach** (compact timeline, minimal card, or status-first)
2. **Redesign CSS** for `.flight-journey`, `.flight-alert-banner`, `.flight-leg` classes
3. **Update HTML structure** in `renderFlightJourney()` if needed
4. **Improve typography** — Larger titles (1.3rem+), better hierarchy, consistent spacing
5. **Add visual hierarchy** — Icons, colors, badges instead of text blocks
6. **Test alignment** — Ensure left/right cards have balanced visual weight
7. **Verify on both environments** — Local dev + GitHub Pages match exactly
8. **Cache bust** — Update version strings when complete

---

## Key Codebase Files to Know

- Trip data: `data/trip-data.js`
- Main styles: `dashboards/css/styles.css`
- App logic: `dashboards/js/app.js`
- HTML entry: `dashboards/html/index.html`
- Project notes: `notes/PROJECT_CONTEXT.md`, `notes/Project Log.md`

---

## Contact/Context

User email: limcarl83@gmail.com  
Trip: Nov 1-9, 2026 (Seattle → Portland)  
Budget: $948 total  
Flight airfare: $1,286.84 (shown for visibility only, excluded from activity budget)

This dashboard serves as itinerary planning + budget tracking for the trip. Booked flights section is critical for visibility into timing and airport buffers.
