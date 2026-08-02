---
name: feedback-confirm-hotel-before-price
description: Always confirm the hotel name in a screenshot before writing its price to JSON — never assume from context or order
metadata: 
  node_type: memory
  type: feedback
  originSessionId: b1466b15-0231-4a4d-9225-0656d90ac4df
---

Never assume which hotel a price screenshot belongs to based on conversation order or your own guess about what the user is submitting.

**Why:** Two misattribution errors in one session (2026-05-24): Mayflower Park's price was written to Kimpton Palladian; Warwick's price was written to Alexis Royal Sonesta. User had to correct both. The screenshots showed the hotel name clearly — the error was not reading it.

**How to apply:** Before calling any JSON update function with a price, read the hotel name from the screenshot or text the user provided. If the name isn't unambiguous, ask. Do not infer from which hotel was "last discussed."
