---
name: verification_preference
description: User prefers efficient reference to recent audits over re-verification; trusts thorough prior work
metadata: 
  node_type: memory
  type: feedback
  originSessionId: d814db81-ac6a-4b82-ba2d-6af75a15b6eb
  modified: 2026-07-18T17:00:34.900Z
---

**Rule:** When asked to verify/update systems, reference recent comprehensive audits instead of re-running checks. Trust that thorough prior work (e.g., config cleanup session) is still valid unless explicitly invalidated.

**Why:** User appreciated the response that confirmed "everything is verified clean, no updates needed" based on last session's audit rather than running fresh tools. Re-verification wastes time and context on work already completed.

**How to apply:** When asked "check if X needs updating" and a recent, thorough audit of X exists, lead with that audit's findings + status table. Only re-check if the user explicitly requests it or time has clearly passed (new session, weeks later).

**Related:** [[codexproject_model_routing]] (documented and trusted, no re-discussion needed)
