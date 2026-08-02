---
name: airfare-award-vs-cash
description: "Airfare tracker is PAL Mabuhay Miles award redemption, not cash fares — taxes are the metric, not ticket price"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 450385d3-510c-47b0-ad9e-b1f10a153f99
---

The user is redeeming Philippine Airlines Mabuhay Miles for Business Class flights, not buying cash fares. The airfare dashboard was replaced entirely to track award taxes only.

**Current values (as of 2026-05-23):**
- SFO→MNL: 58,000 miles + $370.50 in taxes/fees
- ORD→MNL: 67,000 miles + $375.50 in taxes/fees
- Departure window: Mar 3-7, 2027

**Why:** Previous tracker was tracking cash fares, which are irrelevant for a miles redemption. The user confirmed the exact current PAL.com tax figures during the session — use those, not old figures.

**How to apply:** When the airfare topic comes up, always frame it as "award tax" not "fare." To update: add a new entry to `taxHistory` in `data/airfare-watch.json`, update `currentTax` and `lastChecked`. Never rebuild the airfare tracker as a cash-fare system. Any tax drop on either route = alert-worthy.
