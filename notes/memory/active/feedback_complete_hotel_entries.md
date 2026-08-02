---
name: feedback-complete-hotel-entries
description: Always fill all dashboard display fields when adding a hotel — never leave null
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a8318bea-905d-4e18-884e-698c86769920
---

Never add a hotel entry with null display fields.

**Why:** Courtyard was added from booking confirmation data only. reviewScore, transitScore, transitNote, safetyNote, safetySource, reviewUrl were all null. User had to ask three separate times to fix each gap. The booking confirmation never includes these — they must be looked up from the address.

**How to apply:** When adding any hotel (booked or watchlist), immediately fill: reviewScore, reviewUrl, transitScore, transitNote, safetyNote, safetySource, zone, hasElevator. Look up from address via Walk Score and brand review pages. Do not ship a commit with null on any of these fields.

[[feedback_confirm_hotel_before_price]]
[[feedback_sync_both_hotel_files]]
