---
name: feedback-per-stop-image-sourcing
description: "Every itinerary stop needs its own individually-sourced, recent, subject-verified image -- never one generic reused photo across many stops"
metadata:
  node_type: memory
  type: feedback
  originSessionId: session-49-sleep-and-images-audit
---

Reusing one generic `pike-place-market.jpg` image across ~17 different Day 2 stops (pastries, cider stand, cheese shop, etc.) was called out directly as lazy and underwhelming.

**Why:** User (2026-08-15, session 49): "Shouldn't you have more decency and be proactive in searching for the actual image of the actual place... instead of just using a generic image for all?" Then, separately, flagged that an initially-sourced Original Starbucks photo was from 1977 -- explicitly wants recent photos, not old ones: "I want you to pull out the most recent image... Because again, I will not be traveling back in time."

**How to apply:**
1. Search per-stop, not per-neighborhood. Try Wikimedia Commons first (multiple search-term variants), preferring photos dated within the last ~3 years over older ones.
2. Before trusting a candidate, actually view it (Read tool on the downloaded file) and confirm it matches the named subject -- Commons/search titles are sometimes mismatched (e.g. a "Rachel the Pig" search once returned Michelangelo's Moses).
3. If Commons has nothing, check the venue's own official site/vendor directory (worked for Pike Place Market's own `images.pikeplacemarket.org` vendor pages) before falling back to a generic same-neighborhood photo.
4. Never download and rehost copyrighted Google Images results (Instagram/Facebook/Yelp/stock photos) into this public GitHub repo -- that's real copyright infringement, not a hypothetical. If no freely-licensed photo exists anywhere after a genuine multi-source search, say so explicitly and use the generic fallback rather than silently faking coverage or scraping copyrighted content.

See [[project_current_state]] for which Day 2/3 stops already have dedicated images vs. the generic fallback (Totem Smokehouse and the Pike Place "swings" as of session 49 -- no free image exists for either).
