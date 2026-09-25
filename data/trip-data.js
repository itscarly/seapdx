window.TRIP_DATA = {
  meta: {
    title: "Seattle and Portland Interactive Travel Itinerary",
    dates: "November 1-9, 2026",
    publicSiteUrl: "https://itscarly.github.io/seapdx/dashboards/html/index.html",
    travelerBase: {
      seattle: "Palihotel Seattle",
      portland: "Hotel Vance, a Tribute Portfolio Hotel",
      chicago: "ACME Hotel Chicago, Outset Collection by Hilton"
    },
    verifiedOn: "Sep 25, 2026",
    budgetCap: 3050,
    absoluteCeiling: 3050,
    assumptions: [
      "The activity-budget block stays separate from the all-in trip-cost summary.",
      "Booked flight costs and hotel costs are shown in the executive summary. The $3,050 cap/ceiling covers everything still to plan or spend: local trip spend, shopping/keepsakes/personal purchases, the tattoo, and Chicago layover pocket money -- all combined into one number.",
      "Amtrak Cascades 517 and the business-class bid upgrade are carried separately from Seattle and Portland local transit.",
      "Prices include estimated local tax where applicable plus budget-conscious tips when table service or cocktails are involved.",
      "Default tip model: 15% for standard sit-down meals, 18% for cocktail bars, $1 for coffee, and 0-10% or simple round-up for counter-service food.",
      "Dashboard USD amounts now also show PHP equivalents using the May 9, 2026 USD/PHP rate plus a 1.85% foreign transaction fee buffer.",
      "Coffee beans are capped at two bags total: one in Seattle and one in Portland, with a maximum bean budget of $60.",
      "Portland home base is Hotel Vance, a Tribute Portfolio Hotel, Portland, Oregon, United States.",
      "November 2026 hours are not fully published for many businesses, so the dashboard flags current verified status and recommends rechecking before booking.",
      "The plan is curated best-fit; not every candidate location is included.",
      "May 18 review uses the shared Google Maps saved list as the candidate source, with menu/pricing checked against official or current public pages where possible.",
      "A 20% realism buffer is now treated as the planning default for flexible paid categories such as food, coffee, cocktails, and small shopping so the live budget reflects real-world drift better than the earlier tighter draft.",
      "Souvenir pricing should stay explicit whenever possible: Starbucks city mugs, one coffee with each mug errand, coffee-bean buys, and small magnet-style gifts are now modeled directly instead of being hidden inside generic buffers.",
      "As of the Aug 8, 2026 online-purchases update (Amazon $550.25, Calvin Klein $76.65, Hollister $91.42, plus the Ray-Ban actual price replacing its estimate), the real projected total was $2,690.67 and the cap/ceiling was raised from $2,500 to $2,700 to match. Same day, adding $350 Chicago layover pocket money raised the real projected total to $3,040.67 and the cap/ceiling to $3,050 -- each raise confirmed by the traveler rather than silently absorbed.",
      "Sep 13, 2026 Chicago hotel swap: replaced Hotel Blake ($787.38, 6 nights) with ACME Hotel Chicago, Outset Collection by Hilton ($406.72, 3 nights, Sat Feb 27 - Tue Mar 2, 2027), confirmation 3523360010. Sep 26 receipt update: PAL PR133 now departs ORD late Mar 1, so the ACME stay covers the Chicago layover before the paid return-to-Manila flight.",
      "Asiana, American Airlines, and Philippine Airlines flights are marked paid: true and excluded from the all-in trip target hero number. All flights remain listed in the Airfare breakdown card for reference.",
      "Sep 26, 2026 Philippine Airlines receipt update: return-to-Manila booking Z8RAML is paid and locked in at PHP 24,281, replacing the old USD 385.50 PAL award-tax estimate. Receipt PDF is attached under dashboards/assets/docs/philippine-airlines-z8raml-ticket-receipt.pdf.",
      "Aug 8, 2026 food/activity cost-reduction pass (traveler-requested to shrink the still-to-spend total): removed Poquitos Happy Hour (Nov 1, $35), Glo's Diner breakfast (Nov 2, $38), Sailing Seattle (Nov 2, $54), Luke's Lobster lunch (Nov 2, $26), FOB Sushi dinner (Nov 2, $25), Cafe Presse breakfast (Nov 3, $25), the Nov 3 evening Saint John's stop ($42), Analog Coffee + QFC train snacks (Nov 5, $18), the last Capitol Hill walk + coffee stop (Nov 5, $10), and Pretty Ugly Burger dinner (Nov 7, $63, replaced by Novel Book Bar covering both drinks and dinner). Portland Japanese Garden was also dropped from the route entirely (traveler does not want a paid-admission stop there). Net itinerary reduction: $336, moving the real projected total down to $2,666.27 against the unchanged $3,050 cap/ceiling.",
      "Aug 9, 2026 day-pass transit rework (ORCA Seattle + TriMet Portland): Converted per-leg transit fares to flat $6 day-pass charges -- first ORCA-system ride of each Seattle day costs $6, every other ORCA ride that same day costs $0; same rule applied to Portland TriMet first-ride $6 + subsequent $0 per day. Non-ORCA fares (Washington State Ferries, Amtrak, POINT NorthWest intercity bus) remain separate/unchanged. Days 8 and 9: Light hotel-area walk and final walk converted to transit type per traveler request.",
      "Aug 9, 2026 (FINAL) Day 2 itinerary rebuild, sourced from a traveler-supplied Google Maps route screenshot: the full Pike Place/waterfront/Sky View day was resequenced to match the screenshot's exact 21-stop order and per-leg travel times. Order: Pike Place sign/arcade -> Totem Smokehouse -> Piroshky Piroshky -> Original Starbucks -> Hellenika Cultured Creamery (NEW, $13 traveler-pegged) -> Beecher's Handmade Cheese -> Rachel's Ginger Beer -> Mee Sum Pastry -> Daily Dozen Doughnuts -> Ghost Alley Espresso -> Seattle Waterfront -> Overlook Walk -> Old Stove Brewing -> walk to Olympic Sculpture Park -> Olympic Sculpture Park -> Seattle Great Wheel (photo only) -> Harbor Steps -> Pike Place Market swings -> Uber Seattle Engineering Office (30-45 min visit) -> transit to Best Buy Northgate (Ray-Ban Meta glasses fit check) -> transit to Columbia Center Sky View Observatory (retimed to 4:35 PM to catch ~4:53 PM PST sunset) -> Sky View Cafe sunset cocktail -> transit back to Capitol Hill. This supersedes the two earlier same-day Day 2 reorder attempts (a verbal Pike Place-cluster-before-Best-Buy pass, and the gap-fill-block version referenced in the transit rework note above). MarketSpice browse ($8) was dropped -- not part of the authoritative screenshot route. Net Food category change: -$32.20 (removed MarketSpice $8, adjusted $24.20 for budget-alignment rounding) plus the new $13 Hellenika stop folded in. All prices are researched estimates or traveler-pegged pending on-site verification.",
      "Aug 14, 2026 Seattle hotel swap + itinerary optimization: replaced The Boylston Hotel Capitol Hill ($504.46, 3 nights) with Palihotel Seattle ($662.00, 4 nights, 107 Pine St downtown near Pike Place Market). Original itinerary had Capitol Hill as base with repeated costly/time-wasting crossings: Day 1 arrives at Capitol Hill, Day 2 Capitol Hill->Downtown->Capitol Hill, Day 3 evening Menya Musashi in Capitol Hill, Day 4 morning Analog Coffee in Capitol Hill->Fremont/Ballard. New downtown base optimizes for walkability to Pike Place/waterfront (Day 2 now largely walkable) and eliminates unnecessary Capitol Hill commutes. Consolidated Capitol Hill social activities into Day 1 evening (Saint John's dinner + Salt & Straw dessert + QFC seltzer run), removed Menya Musashi (Day 3 evening) and Analog Coffee (Day 4 morning) to avoid redundant transit now that hotel is downtown. Day 1 arrival now routes to Downtown link station instead of Capitol Hill. Accommodations total updated from $1704.80 to $1862.34 (+$157.54 delta). Full itinerary Days 1-5 resequenced; Day 2-5 transit notes updated for downtown base. All trip-data.js references (meta.travelerBase.seattle, tripCosts.confirmed.accommodations, itinerary segment names/times/transit notes) cross-checked against dashboards/js/app.js STOP_COORDINATES and findStopCost() hardcoded lookups to prevent silent cost/marker rendering failures.",
      "Aug 15, 2026 arrival-leg completion + AA reissue: added the missing OZ702 Manila->Seoul leg and Incheon connection stay to the live Seattle & Portland 2026 calendar. Sep 13, 2026 flight update: EMR56H now shows OZ702 MNL->ICN (11:45 AM-4:25 PM, Economy V) connecting to Korean Air KE047 ICN->SEA (9:20 PM-2:10 PM, Economy Q) instead of Asiana OZ272. Also reissued American Airlines confirmation YWFKME (issued Aug 11, 2026): Nov 9, 2026 AA 2496/AA 5273 times unchanged but fare class updated to Economy (S); the Feb 27, 2027 continuation flight numbers changed from AA 3774/AA 3114 to AA 3338 (CRP->DFW, 10:21-11:53 AM, no seat assigned) and AA 1290 (DFW->ORD, 1:42-4:16 PM, no seat assigned), both Economy (N). All ~90 duplicate itinerary/flight/hotel events on the traveler's personal Google calendar (limcarl83@gmail.com) covering Oct 31-Nov 9, 2026 were deleted as a cleanup pass, since the same events now live correctly and exclusively on the Seattle & Portland 2026 trip calendar.",
      "Sep 13, 2026 ICN layover note from shared ChatGPT planning review: do not clear Korean immigration or attempt a Seoul tour during the 4h55 connection. Stay airside in Terminal 2. With Priority Pass, use Sky Hub Lounge near Gate 247 as first choice, or Sky Hub Lounge East near Gate 268 if KE047 posts to the far-east gates. Matina remains a backup only if food matters more than flexibility because its stay limit is shorter. Leave lounge around 8:20 PM and be at the final KE047 gate around 8:35-8:45 PM.",
      "Aug 14, 2026 (Evening) Day 1 and Day 2 simplification for relaxed, social-focused itinerary: Removed Day 1 evening Capitol Hill outing entirely (Saint John's dinner $42 + Salt & Straw $9 + QFC seltzer $20 + 60-min transit both ways = removed). Day 1 now simplified to: arrive, check in, light downtown walk, rest -- protective buffer for jet lag without structured evening activities. Day 2 trimmed from 271.12 to 168.12 by removing 8 redundant Pike Place food stops (Piroshky $9, Hellenika $13, Beecher's $9, Rachel's Ginger Beer $18, Mee Sum $9, Daily Dozen $16 + Old Stove Brewing $13) and two unnecessary transit legs (Uber office 40 min + Best Buy Northgate round-trip 2+ hours), keeping only Pike Place highlights (sign, Totem salmon, Original Starbucks, Ghost Alley coffee), waterfront walk, and Sky View sunset. Added flexible 'self-choose' lunch ($26.12) and 2-hour afternoon rest block to enable social time, exploring, or just relaxing. Net itinerary reduction: $173 (Day 1 $71 + Day 2 $102). Projected total now $2554.44, remaining budget $495.56. Goal: relaxing days with breathing room to meet people and enjoy the city at your own pace, not activity-packed schedule.",
      "Aug 14, 2026 (Restore/Consolidate) Confirmed Menya Musashi is a Capitol Hill ramen shop (menyamuso.us, Capitol Hill menu). Restored the Capitol Hill evening block onto Day 3 instead of Day 1: transit to Capitol Hill (6:00 PM) -> Saint John's Bar and Eatery dinner $42 (6:20 PM) -> Salt & Straw Capitol Hill dessert $9 (7:35 PM) -> Menya Musashi ramen $27 (8:05 PM) -> transit back to Palihotel (9:05 PM), placed after the Bainbridge ferry return and a shortened 2:40-6:00 PM hotel recharge block. Day 3 total rises from $49 to $127. Also restored Day 4 Analog Coffee ($4.50, Capitol Hill) to its original 8:10 AM morning slot before the Fremont transit, shifting the rest of Day 4's times by 20 minutes; Day 4 total rises from $30 to $34.50. npm run validate confirms status ok, projected $2745.94 against the unchanged $3050 ceiling, remaining $304.06.",
      "Aug 14, 2026 (Sequencing audit) Traveler confirmed the Best Buy Northgate in-person fit check is required, not optional -- Day 2's afternoon is re-sequenced to budget real travel time instead of dropping the stop: lunch trimmed 60 -> 40 min (2:25-3:05 PM), Uber Seattle Engineering Office visit moved to 3:05-3:45 PM, then a 25-min Link light rail leg to Northgate (3:45-4:10 PM, confirmed ~14 min ride + walk/wait), the 20-min Best Buy fit check (4:10-4:30 PM), and a 25-min Link leg back downtown (4:30-4:55 PM). Sky View Observatory starts at 4:55 PM, landing inside the traveler's required 4:45-5:00 PM arrival window to still catch the sunset; Sky View Cafe cocktail shifts to 5:55 PM accordingly. STOP_COORDINATES entry for Best Buy Northgate confirmed present in dashboards/js/app.js. Also verified Day 3 Capitol Hill evening block against real addresses (Saint John's 719 E Pike St and Salt & Straw 714 E Pike St are directly across the street from each other; Menya Musashi at 1510 Belmont Ave is a ~0.4 mi / 8-10 min walk -- geographically sound). Fixed the Seattle hero 'trip anchor' link in dashboards/js/app.js (line ~541), which was hardcoded to an old Cloudbeds/Boylston confirmation URL instead of reading the Palihotel Seattle United reservation URL from trip-data.js -- now looks it up the same way the Portland hotel link does. Cleared remaining stale 'Courtyard Portland' / 'The Boylston Hotel Capitol Hill Seattle' references, including the backup-route Google Maps URL strings in alternatesConsidered, updating them to Hotel Vance Portland and Palihotel Seattle. No cost or day-total change (Best Buy was and remains $0; Sky View unchanged at $52.50).",
      "Aug 14, 2026 (Night) Fix: Day 1 evening had been left with a generic 'dinner at Palihotel area' placeholder and no cost after the Capitol Hill outing was removed -- this was an incomplete edit. Replaced with a specific, named stop: Pike Place Chowder (1530 Post Alley), a casual counter-service spot 4 minutes from Palihotel, cup of chowder + roll + drink, $22 all-in. Chosen deliberately light/casual for an arrival evening rather than a sit-down reservation. Day 1 total moves from $6 to $28 (auto-recomputed from itinerary item costs by the projectedTotal script at the bottom of this file, which also reconciles the Contingency category and overall projectedTotal automatically -- no other manual total edits were needed).",
      "Aug 15, 2026 airport-buffer standardization: applied traveler-specified arrival buffers to every airportLeaveBy field. International departures (Manila->Incheon OZ702, Chicago->Manila KE038) now use a 3.5 hr buffer where the traveler specified it (Manila) and 3 hr where specified (Chicago/ORD); domestic legs (Portland->Corpus AA2496, Corpus->Chicago AA3338) now use a 3 hr buffer. Manila now targets 8:15 AM airport arrival for the 11:45 AM OZ702 departure. Portland: 'inside PDX by 12:40-12:45 PM' (~1h50m) -> 'leave Hotel Vance by 11:05 AM, inside PDX by 11:34 AM' (3h) for the 2:34 PM departure. Corpus: 'be at CRP by 8:20 AM' (2h01m) -> '7:21 AM' (3h) for the 10:21 AM departure. Chicago/ORD: vague 'well ahead of' -> explicit '8:25 AM' (3h) for the 11:25 AM departure. Amtrak Cascades (Seattle->Portland, 2.5 hr requirement) already met the buffer at 2h55m (9:15 AM station arrival vs 12:10 PM departure) -- no change needed.",
      "Sep 26, 2026 return-to-Manila receipt correction: attached Philippine Airlines receipt Z8RAML shows PR133 ORD-MNL, departing ORD 10:45 PM Mon Mar 1, 2027 and arriving MNL 5:25 AM Wed Mar 3, 2027, Business Class seat 02A, paid total PHP 24,281. The old Mar 5-7 / USD 385.50 award-tax draft is superseded.",
      "Aug 15, 2026 Palihotel happy hour + Truly Hard Seltzer additions (sourced from the traveler-supplied Hart and the Hunter weekly-happenings flyer and brunch menu, both fetched and read directly): (1) Day 3 (Tue Nov 3) now includes a happy hour stop at The Hart and the Hunter, Palihotel's in-house restaurant -- fits inside the existing 2:40-6:00 PM hotel recharge block, timed for Tuesday's ALL NIGHT happy hour (3-9pm, $12 cocktails vs. $17 full price). 2 cocktails + 10.5% WA sales tax + 18% tip = $30.84. Day 3 total moves from $127 to $157.84; Cocktails and social category moves from $152.12 to $182.96. (2) Day 5 (Thu Nov 5) morning restructured: added a Target Downtown Seattle stop (breakfast items + Truly Hard Seltzer 12-pack, $32 subtotal + 10.5% WA tax = $35.36) as the traveler's requested cheaper alternative to Palihotel's Hart and the Hunter brunch menu (which is still noted as an option: H&H Breakfast $17, Eggs Benedict $21, Waffle $15, brunch cocktails $17). Day 5 total moves from $52 to $87.36; Food category moves from $344.80 to $358.06 (only the breakfast-plus-tax portion, since the $20 Truly Hard Seltzer line was already anticipated inside the Shopping category total and does not get double-counted -- the remainder flows through the auto-reconciled Contingency category). STOP_COORDINATES entries added in dashboards/js/app.js for both new stops so map markers render. npm run validate passes.",
      "Aug 15, 2026 (Revision) Consolidated the Target/Truly Hard Seltzer run onto Day 1 instead of Day 5, per traveler request -- Nov 1 arrival evening has the most open time, and buying the seltzer once at arrival covers the whole Seattle stay rather than a second, redundant Day 5 buy. Day 1 evening now reads: Pike Place Chowder dinner (7:40-8:25 PM) -> walk to Target (8:25 PM) -> Target Downtown Seattle, Truly Hard Seltzer 12-pack only, $22.10 (8:31-8:51 PM) -> Link transit to International District, $0 (already covered by the day's ORCA pass) -> H Mart International District grocery run for ready-to-heat food, $19.89 (9:01-9:26 PM) -> Link transit back, $0 -> wind-down/sleep (9:36 PM). Day 1 total moves from $28 to $69.99. Day 5's earlier Target/breakfast stop is reverted -- that morning goes back to a single Wake/pack/checkout block, with a note that the H Mart ready-to-heat food from Day 1 covers breakfast instead of a second store run. Day 5 total moves back from $87.36 to $52. Food category moves from $358.06 to $364.69 (Day 5's prior +$13.26 breakfast line removed, Day 1's new +$19.89 H Mart grocery line added). Shopping category unchanged at $1,547.32 -- the $20 Truly Hard Seltzer line was already budgeted there, just now correctly anchored to Day 1 instead of unanchored. STOP_COORDINATES updated in dashboards/js/app.js (Target Downtown Seattle renamed off the breakfast wording, new H Mart International District entry added). Live Seattle & Portland 2026 calendar updated to match on both days. npm run validate passes.",
      "Aug 15, 2026 (Correction) Traveler corrected the Target/H Mart addresses used above: H Mart Downtown Seattle is actually 1601 2nd Ave (not the International District branch at 601 5th Ave S), and Target is 1401 2nd Ave (not 1600 2nd Ave) -- both a few blocks from Palihotel (107 Pine St) on the same 2nd Ave corridor, no Link transit required. Day 1 evening re-timed as an all-walking route: Pike Place Chowder dinner -> walk to Target, 1401 2nd Ave (4 min) -> Truly Hard Seltzer run (8:29-8:49 PM) -> walk to H Mart, 1601 2nd Ave (3 min) -> grocery run (8:52-9:17 PM) -> walk back to Palihotel (6 min) -> wind-down (9:23 PM). Costs unchanged ($22.10 Target, $19.89 H Mart); only the transit legs were removed since they're no longer needed. STOP_COORDINATES corrected in dashboards/js/app.js.",
      "Aug 15, 2026 payment-method audit (traveler-requested, real research not assumption): verified card/cash acceptance for every paid stop Nov 1-9 via web search. Three venues are card-only, no cash accepted -- Menya Musashi (Day 3), The Hart and the Hunter/Palihotel restaurant (Day 3 happy hour), and H Mart Downtown Seattle (Day 1) -- payment notes updated accordingly. Several small vendors flagged for cash-as-backup due to conflicting/unconfirmed info: Mee Sum Pastry (reported ~$10 card minimum), Daily Dozen Doughnuts (conflicting cash-only vs. cards-ok reports), Ghost Alley Espresso (no explicit source found), Ballard Coffee Works (mixed reviews on cash acceptance), Shonen Tattoo (no shop-specific info found -- tattoo shops often prefer cash). Portland Saturday Market and Cartopia food carts already carried accurate 'bring cash' notes from prior research and were left as-is. National chains (Target, Best Buy, Apple, Sephora) and most sit-down/counter venues (Pike Place Chowder, Original Starbucks, Piroshky Piroshky, Beecher's, Rachel's Ginger Beer, Totem Smokehouse, Hellenika, Old Stove Brewing, Saint John's, Salt & Straw, Analog Coffee, Uneeda Burger, Harbour Public House, Blackbird Bakery, Luc Lac, Stumptown, Novel Book Bar) confirmed cards accepted, no changes needed. No specific venue was ever named for the Cannon Beach lunch/coffee/cocktail stop, so that line remains a flexible self-choose budget block rather than a fabricated venue with a fabricated payment policy.",
      "Aug 15, 2026 (Evening) H Mart budget cap + Day 2 early-start rebuild + Day 2/Day 3 waterfront-loop split, all traveler-requested/confirmed across a single planning session: (1) Day 1 H Mart Downtown Seattle grocery run raised from a fixed $19.89 estimate to a $30 budget cap (headroom, not a target). (2) Day 2 wake time moved 7:30 AM -> 5:30 AM and Pike Place sign arrival moved 8:35 AM -> 7:30 AM, to beat 8 AM store openings/crowds; morning cluster expanded with Mee Sum Pastry reordered to a Curry Beef Hong Bao ($6.62 w/ tax, traveler-sourced from meesum.com), new Tiny's Apple Cider stand (3 flavors x $3.31 w/ tax = $9.93), new Le Panier (cortado $5.68 w/ tax confirmed, pastry left unpriced/self-choose since lepanier.com's menu had no listed prices), Pike Place Bakery explicitly skipped (closed Mondays), new Rachel the Pig + Billie photo stop and Molly Moon's Ice Cream (93 Pike St #310, in-market location, web-search-verified against a traveler-supplied 'Billy the Piggy Bank' name -- actual name is Billie, Rachel's bronze cousin added 2011), new Gum Wall stop, and Totem Smokehouse souvenir budget raised $40 -> $60 (traveler-requested). (3) Timing audit found the traveler's full expanded day (Pike Place cluster + waterfront loop + Uber office + Best Buy Northgate + Sky View sunset) does not fit before the 4:55 PM Sky View hard stop once real addresses are used -- Gourmondo Café (201 Elliott Ave W, Queen Anne) to the Uber Seattle Engineering Office (1191 2nd Ave #1200, downtown, traveler-supplied address) is a ~15-20 min transit leg, not a quick walk, pushing projected Sky View arrival to ~5:35-5:40 PM in the unsplit version. Traveler confirmed moving the entire waterfront loop (Harbor Steps, Seattle Great Wheel photo, Pier 62, Olympic Sculpture Park, Sirens of Spring art installation at 3155 Alaskan Way, Old Stove Brewing, Gourmondo Café) to Day 3 afternoon, replacing the prior 2:40-4:10 PM 'hotel recharge' block after the Bainbridge ferry returns (~2:10 PM) -- no cross-town leg needed there since the ferry terminal is already downtown-waterfront-adjacent. Within that Day 3 loop, Gourmondo Café (M-F 7:30 AM-3:30 PM, confirmed via web search) is visited FIRST rather than last, since the traveler's originally-described order would have arrived ~3:55 PM, after close; the loop now runs Gourmondo -> Sirens of Spring -> Olympic Sculpture Park -> Pier 62 -> Old Stove Brewing -> Great Wheel -> Harbor Steps -> back to the hotel, pushing Day 3's Hart and the Hunter happy hour from 4:10 PM to 5:00 PM (still well inside its 3-9pm Tuesday window) and the rest of the Day 3 Capitol Hill evening ~50 min later accordingly. Day 2's afternoon is now a straight Pike Place -> Uber office (short walk, no cross-town leg) -> Best Buy Northgate -> Sky View chain, giving Best Buy's Ray-Ban Meta fit check real buffer to extend from 20 min to up to 60 min. 'Puget Sound Perks' (traveler-mentioned ferry-terminal coffee stand) could not be verified via web search and was dropped rather than added on an unconfirmed name. Day and category totals are auto-recomputed from itinerary item costs by the projectedTotal script at the bottom of this file; npm run audit:budget and npm run validate should be re-run after this change."
    ]
  },
  verificationSummary: {
    overallLabel: "Last verified",
    watches: [
      {
        id: "pre-trip-flight-transit",
        label: "Pre-trip flight and transit watch",
        checkedOn: "May 18, 2026",
        status: "no-material-updates",
        note: "Official airline, airport, ferry, rail, Link, and TriMet checks found no November itinerary rewrite or traveler-action change."
      },
      {
        id: "travel-week-flight-transit",
        label: "Travel-week flight and transit watch",
        checkedOn: "May 18, 2026",
        status: "no-material-updates",
        note: "Weekly watch still supports the current train, ferry, airport-buffer, and local-transit assumptions."
      }
    ]
  },
  budget: {
    cap: 3050,
    absoluteCeiling: 3050,
    projectedTotal: 1494.66,
    categories: [
      { name: "Transportation", amount: 141.20, note: "Seattle ORCA all-day pass ($6 first ride per day, $0 subsequent rides same day) and Portland TriMet/Hop all-day pass ($6 first ride per day, $0 subsequent rides same day) as the primary model for Nov 1-9 local transit, replacing per-leg fare pricing. Non-ORCA fares (Washington State Ferries Bainbridge round-trip $12, Amtrak Cascades SEA-PDX $48, POINT NorthWest Cannon Beach round-trip $40) are tracked separately and unchanged. Sep 13, 2026 update removed the Shonen Tattoo/Milwaukie transit and Best Buy Northgate fit-check routing. Multnomah Falls day trip and its Columbia Gorge Express fare remain removed entirely." },
      { name: "Food", amount: 364.69, note: "Meals, coffee, and snack totals for Nov 1-9, trimmed per the Aug 8, 2026 food-cost reduction pass: removed Glo's Diner breakfast ($38, Nov 2 -- Pike Place covers breakfast now), Luke's Lobster lunch ($26, Nov 2), FOB Sushi dinner ($25, Nov 2), Cafe Presse breakfast ($25, Nov 3 -- Bainbridge covers it), Analog Coffee + QFC train snacks ($18, Nov 5), and the last Capitol Hill walk + coffee stop ($10, Nov 5). Nov 6-9 unchanged: Cannon Beach lunch/coffee/cocktail $100, Day 7 coffee $31 + Saturday Market lunch $50, Cartopia brunch $50, Hotel Vance final breakfast $31. Added Aug 9 (traveler-supplied Google Maps route screenshot): Day 2 Pike Place/waterfront itinerary rebuilt to match the exact 21-stop route order, including Original Starbucks store (whole bean coffee bag $16 + Seattle-exclusive mug $20 + grande cold brew $5 = $41 total) and the new Hellenika Cultured Creamery stop ($13 traveler-pegged price). MarketSpice browse ($8) dropped -- not part of the authoritative screenshot route. Adjusted Aug 9 for budget alignment (reduced by $32.20 to match auto-calculated projectedTotal). Prices are researched estimates pending on-site receipt verification. Added Aug 15, 2026: Day 1 (Nov 1) evening H Mart International District grocery run for ready-to-heat food covering later Seattle-stay meals/breakfasts, +$19.89 ($18 subtotal + 10.5% WA sales tax). Added Aug 15, 2026 (Evening): H Mart cap raised to $30, and Day 2's Pike Place morning expanded with Mee Sum ($6.62), Tiny's Apple Cider ($9.93), Le Panier ($5.68), Molly Moon's (~$7 est.), and Day 3's new Gourmondo Café ($5.68) and Old Stove Brewing ($13, moved from Day 2) -- exact dollar deltas flow through the auto-reconciled Contingency category rather than being hand-tallied per category here." },
      { name: "Cocktails and social", amount: 182.96, note: "Saint John's Bar and Eatery, Salt & Straw, and Rachel's Ginger Beer corrected against actual receipts. Trimmed Aug 8, 2026: removed the Nov 3 evening Saint John's stop after Menya Musashi ramen ($42) and Pretty Ugly Burger dinner ($63, Nov 7 -- replaced by Novel Book Bar covering both drinks and dinner at $29). Poquitos Happy Hour ($35, Nov 1 removal) is tracked under Food, not here. Added Aug 9: (1) Columbia Center Sky View Cafe Nov 2 sunset visit — one cocktail (~$18) + BLT sandwich ($14) + 10.5% WA sales tax + 18% tip = ~$41.12 all-in, and (2) Old Stove Brewing, MarketFront, 1901 Western Ave Ste A (one beer, Elliott Bay view, $13 all-in with menu price + tax + tip) as part of the new Nov 2 Pike Place/waterfront gap-fill itinerary block. Prices include actual receipt data for Sky View, Old Stove set per traveler direction. Added Aug 15, 2026: Day 3 (Tue Nov 3) Palihotel happy hour at The Hart and the Hunter during the existing 2:40-6:00 PM hotel recharge block -- Tuesday's ALL NIGHT happy hour (3-9pm) covers 2 cocktails at $12 each + 10.5% WA sales tax + 18% tip = $30.84." },
      { name: "Entrance fees", amount: 52.50, note: "Paid attractions in the synced route (Cannon Beach free; Kraken removed). Sailing Seattle ($54) removed entirely from the Nov 2 itinerary per user request -- Columbia Center Sky View Observatory Elite Experience Adult ticket ($49 + $1 booking fee + $2.50 WA tax = $52.50) is the only remaining paid attraction (cafe food and cocktails at Sky View Cafe tracked separately under Cocktails and social). Multnomah Falls/Vista House removed from the route entirely, so its free-admission note no longer applies. Seattle Great Wheel (Pier 57) added to Nov 2 Pike Place/waterfront gap-fill as a photo-only stop with no entrance fee ($0 cost) per traveler request." },
      { name: "Shopping", amount: 1073.32, note: "Everything still kept in the live shopping plan: coffee beans $60 (one Seattle bag, one Portland bag), souvenirs/keepsakes $137 (Totem Smokehouse salmon, Truly Hard Seltzer 12-pack, city mugs, magnets, market browsing), confirmed online purchases from Calvin Klein $76.65 and Hollister $91.42, plus the Sep 13, 2026 Amazon cart/wish-list subtotal of $708.25 across 37 quantity-counted items. Meta Ray-Ban glasses and Bleu de Chanel remain removed." },
      { name: "Chicago pocket money", amount: 300, note: "General discretionary spending money for the Feb 27 - Mar 2, 2027 ACME Hotel Chicago stay, separate from the confirmed hotel cost tracked under tripCosts.confirmed.accommodations." },
      { name: "Contingency", amount: 88.24, note: "Rounding and reconciliation buffer between the hand-tracked category totals and the auto-computed projectedTotal from day/purchase calculations. The script auto-calculates projectedTotal from day totals and purchase items, so Contingency adjusts for the difference. Sep 13, 2026 update reflects the removal of Best Buy/Ray-Ban, Bleu de Chanel, Amazon, tattoo, and the Chicago pocket-money reduction." }
    ]
  },
  tripCosts: {
    confirmed: {
      airfare: {
        total: 1256.83,
        note: "Confirmed USD airfare across the Asiana/Korean Air arrival and the American Airlines YWFKME booking. The Philippine Airlines return-to-Manila receipt is paid and locked separately in Philippine pesos at PHP 24,281, so it is listed for reference but not converted into the USD all-in target.",
        items: [
          {
            name: "Asiana/Korean Air arrival booking",
            amount: 540.43,
            confirmation: "EMR56H",
            covers: "Manila to Seattle via Incheon on November 1, 2026",
            paid: true
          },
          {
            name: "American Airlines booking",
            amount: 716.40,
            confirmation: "YWFKME",
            ticketNumber: "0012346782358",
            covers: "Portland to Corpus Christi on November 9, 2026 plus Corpus Christi to Chicago on February 27, 2027",
            paid: true
          },
          {
            name: "Philippine Airlines award booking",
            amount: 0,
            displayAmount: "PHP 24,281",
            confirmation: "Z8RAML",
            ticketNumber: "0792545377670",
            covers: "Chicago/O'Hare to Manila direct, March 1-3, 2027 (PR 133, Airbus A350, Business)",
            paid: true,
            receiptUrl: "../assets/docs/philippine-airlines-z8raml-ticket-receipt.pdf",
            note: "Paid and locked Philippine Airlines electronic ticket receipt. Fare USD 1.00 / PHP 63 equivalent + PHP 24,218 card payment = PHP 24,281 total amount. Standard Business award fare, class A, seat 02A, 67,000 miles redeemed."
          }
        ]
      },
      accommodations: {
        total: 1481.68,
        note: "Palihotel Seattle, Hotel Vance, and ACME Hotel Chicago as the confirmed hotel source of truth for the executive summary. ACME currently covers Feb 27-Mar 2, 2027; Mar 2-5 remains unbooked unless a later Chicago plan is added.",
        items: [
          {
            name: "Palihotel Seattle",
            amount: 662.00,
            confirmation: "2434SG190857",
            city: "Seattle",
            nights: 4,
            address: "107 Pine St, Seattle, WA 98101",
            checkIn: "Sun, Nov 1, 3:00 PM",
            checkOut: "Thu, Nov 5, 11:00 AM",
            url: "https://us.hotels.united.com/trips/egti-STV-WSK-110P/details/MjUxMTc3OTUtOTkwOC01ZWYzLWJhNWUtOWZkOTlhOTRiMzM3OzRiYjM4OTg1LTQ5NWEtNDBlNi05MWRiLWIyNjU1ODAyOTY3MV8wO2VnOnByb3BlcnR5OnYyOjExOGYwYzQ3ZDc0OTkzNjYyZjNiZDFhYzZiNWI0OTgz",
            note: "Downtown location near Pike Place Market, 4 nights Nov 1-5, 2026. Replaces The Boylston Hotel Capitol Hill ($504.46/3 nights)."
          },
          {
            name: "Hotel Vance, a Tribute Portfolio Hotel",
            amount: 412.96,
            confirmation: "94290711",
            city: "Portland",
            nights: 5,
            url: "https://www.marriott.com/reservation/upcomingReservation.mi?confirmationNumber=94290711&tripId=94290711&propertyId=pdxtx"
          },
          {
            name: "ACME Hotel Chicago, Outset Collection by Hilton",
            amount: 406.72,
            confirmation: "3523360010",
            city: "Chicago",
            nights: 3,
            address: "15 E Ohio Street, Chicago, IL 60611",
            checkIn: "Sat, Feb 27, 2027, 3:00 PM",
            checkOut: "Tue, Mar 2, 2027, 11:00 AM",
            url: "https://www.hilton.com/en/book/reservation/manage/?arrival=2027-02-27&confirmationNumber=3523360010&lastName=Lim",
            covers: "Sat Feb 27, 2027, 3 PM check-in - Tue Mar 2, 2027, 11 AM check-out, after the AA arrival into ORD",
            note: "1 room for 2 adults, Standard King. Room charge $341.32 plus $65.40 taxes/government charges = $406.72 total. Free cancellation before 11:59 PM local hotel time on Feb 26, 2027. Self parking is $65/night if needed. Phone +1 312-894-0800. PAL PR133 now departs late Mar 1, before this stay's Mar 2 checkout."
          }
        ]
      }
    },
    plannedPurchases: [],
    onlinePurchases: [
      {
        store: "Amazon",
        total: 708.25,
        note: "Sep 13, 2026 Amazon shopping cart / wish-list subtotal. Prices reflect cart line prices before any final checkout tax, shipping, coupon, or Subscribe & Save changes.",
        items: [
          { name: "Zantac 360 Maximum Strength Tablets, 50 Count", amount: 16.97, note: "Heartburn prevention and relief, 20 mg tablets." },
          { name: "Premium Lubricating White Oil, 8 oz", amount: 10.99, note: "For electric shavers, hair clippers, hair trimmers, and straight razors." },
          { name: "Philips Norelco Replacement Foil for Body Groomer", amount: 14.96, note: "Triple Protect shave system replacement foil." },
          { name: "0.5ml Syringe 31G 5/16 Inch, 100 Pack x2", amount: 27.98, note: "$13.99 each, quantity 2." },
          { name: "MED PRIDE Sterile Alcohol Prep Pads, 200 Count", amount: 6.99, note: "70% isopropyl, 2-ply." },
          { name: "DHT Blocker Hair Growth Support Supplement", amount: 24.97, note: "Saw palmetto + hair vitamins." },
          { name: "Amazon Basic Care Famotidine 20mg Tablets, 90 Count", amount: 9.43, note: "Acid reducer / heartburn prevention." },
          { name: "Colgate Optic White Pro Series Toothpaste, 2 Pack", amount: 17.59, note: "3 oz tubes, cool wintergreen mint." },
          { name: "Carlyle Pumpkin Seed Oil with Saw Palmetto 4000 mg", amount: 9.99, note: "120 softgel capsules." },
          { name: "hims Thick Fix Shampoo & Conditioner with Minoxidil 5%", amount: 40.71, note: "6.4 fl oz set with minoxidil solution." },
          { name: "Carlyle Melatonin 40mg Complex", amount: 12.73, note: "150 fast dissolve tablets." },
          { name: "Vitalibre Vitamin D3 K2 Supplement", amount: 12.99, note: "D3 10000 IU + K2 MK7, 90 softgels." },
          { name: "Nizoral Anti-Dandruff Shampoo 1% Ketoconazole, 14 oz", amount: 28.99, note: "Peppermint and tea tree scent." },
          { name: "Nizoral Pre-Shampoo Scalp Build-Up Remover, 5 oz", amount: 11.99, note: "Pre-shampoo treatment." },
          { name: "Hollander White Chocolate Cafe Sauce, 15 oz", amount: 11.95, note: "Squeeze bottle." },
          { name: "Hollander Caramel Cafe Sauce, 15 fl oz", amount: 11.95, note: "Squeeze bottle." },
          { name: "Coffee Mate French Vanilla Concentrated Liquid Pump Bottle x3", amount: 44.94, note: "$14.98 each, quantity 3." },
          { name: "Syruvia Sugar Free Coffee Syrup - Caramel Chocolate", amount: 9.99, note: "25.4 fl oz." },
          { name: "Syruvia Sugar Free Coffee Syrup - Ube", amount: 9.99, note: "25.4 fl oz." },
          { name: "Syruvia Sugar Free Coffee Syrup - Salted Cookie Butter", amount: 9.99, note: "25.4 fl oz." },
          { name: "Syruvia Sugar Free Coffee Syrup - Butter Pecan", amount: 9.99, note: "25.4 fl oz." },
          { name: "jouhoo Human Hair Blend Lace Front Wig, 14 Inch", amount: 98.99, note: "Brown with blonde highlights." },
          { name: "WIGYY 10 Inch Straight Bob Wig", amount: 79.99, note: "Deep brown black." },
          { name: "WeightWorld Gentle Iron 65mg with Vitamin C", amount: 14.99, note: "180 tablets." },
          { name: "Nutricost Vitamin D3 5,000 IU", amount: 12.95, note: "240 softgels." },
          { name: "Carlyle B-Complex Vitamin with B12", amount: 9.99, note: "300 tablets." },
          { name: "BOLDIFY Hair Fibers, Dark Brown 56g", amount: 31.95, note: "Thin spot cover-up." },
          { name: "BOLDIFY Hair Fibers, Dark Brown 28g", amount: 24.95, note: "Thin spot cover-up." },
          { name: "Dolahair Extreme Hold Lace Glue for Wigs", amount: 8.99, note: "Waterproof invisible bonding, 1.285 oz." },
          { name: "Vitamatic Pumpkin Seed Oil 2000 mg", amount: 13.49, note: "180 softgels." },
          { name: "BOLDIFY Hairline Powder Brush", amount: 14.95, note: "Dual-ended root touch-up brush applicator." },
          { name: "Boldify Hairline Powder, Dark Brown 4g", amount: 17.95, note: "Root touch-up powder." },
          { name: "The Hair Diagram Bold Hold Lace Gelly", amount: 12.99, note: "Temporary hold lace melt gel, 6 oz." },
          { name: "Syruvia Sugar Free Coffee Syrup - Peanut Butter Cup", amount: 9.99, note: "25.4 fl oz." }
        ]
      },
      {
        store: "Calvin Klein",
        total: 76.65,
        note: "Boxer brief order (CSV listed the store blank; confirmed as Calvin Klein directly, not Amazon).",
        items: [
          { name: "Microfiber Stretch 3-Pack Boxer Brief, Black", amount: 31.50, note: "" },
          { name: "Intense Power Micro 3-Pack Boxer Brief, Black w/WB Multi", amount: 45.15, note: "" }
        ]
      },
      {
        store: "Hollister",
        total: 91.42,
        note: "Hollister order, 3 items.",
        items: [
          { name: "Baggy Painter Jeans, Black 28x28", amount: 39.00, note: "" },
          { name: "Boxy Heavyweight Striped Crew T-Shirt, S Black Stripe", amount: 22.46, note: "" },
          { name: "Boxy Layered 2-in-1 Microthermal Crew T-Shirt, S Black Stripe", amount: 29.96, note: "" }
        ]
      }
    ],
    chicagoPocketMoney: {
      amount: 300,
      note: "General discretionary spending money for the Chicago layover, Feb 27 - Mar 2, 2027 (ACME Hotel Chicago stay), separate from the hotel cost itself."
    }
  },
  transit: [
    {
      city: "Seattle",
      system: "ORCA / Link / Streetcar / Metro",
      recommendation: "Use contactless ORCA or tap-to-pay. Seattle Streetcar adult fare is currently $3 single ride and $6 regional day pass; use the pass only on transfer-heavy days.",
      fare: "$3 single / $6 day pass reference",
      link: "https://www.seattle.gov/transportation/getting-around/transit/streetcar/fares-and-orca-card"
    },
    {
      city: "Seattle",
      system: "Washington State Ferries",
      recommendation: "Walk on for Bainbridge. Passenger fares are collected Seattle to Bainbridge; return walk-on passenger travel is no charge. Budget about $11.70 after the approved 2026 fare plus the 3% card surcharge that started March 1, 2026.",
      fare: "$11.35 current Seattle-to-Bainbridge adult walk-on fare before the 3% card surcharge; return walk-on passenger travel is no charge",
      link: "https://wsdot.wa.gov/ferries/fares/Default.aspx"
    },
    {
      city: "Portland",
      system: "TriMet / Hop Fastpass",
      recommendation: "Tap contactless card or phone. Hop automatically caps at $5.60 per day after two adult rides.",
      fare: "$2.80 for 2.5 hours / $5.60 day cap",
      link: "https://go.trimet.org/fares/index.htm"
    }
  ],
  flights: {
    airfareTotal: 1256.83,
    journeys: [
      {
        id: "journey-arrival-2026-11-01",
        tripDayId: "day-1",
        kind: "Arrival journey",
        title: "Manila to Seattle via Incheon",
        dateLabel: "Sunday, November 1, 2026",
        ticketCost: 540.43,
        airportLeaveBy: "Be at Manila airport by 8:15 AM for the 11:45 AM international departure (3.5 hr international buffer).",
        visibilityNote: "This is the long-haul arrival chain that feeds directly into the Seattle day-one plan.",
        statusLabel: "Booked and confirmed under booking reference EMR56H (ticket 9882491085537); Sunday, Nov 1 routing is OZ702 MNL-ICN, then Korean Air KE047 ICN-SEA.",
        alertCopy: "Booking reference EMR56H now shows OZ702 (MNL-ICN) followed by Korean Air KE047 (ICN-SEA). The previous OZ272 second leg has been replaced; use EMR56H for future lookup and flight-status checks.",
        layoverPlan: "ICN layover plan: stay airside in Terminal 2. Priority Pass first choice is Sky Hub Lounge near Gate 247, with Sky Hub Lounge East near Gate 268 as backup if KE047 posts to an eastern gate. Skip a Seoul city tour on this connection; leave the lounge around 8:20 PM and be at the KE047 gate around 8:35-8:45 PM.",
        statusSource: "https://flyasiana.com/C/US/EN/index",
        airportSource: "https://www.portseattle.org/sea-tac/flight-status",
        legs: [
          {
            from: { code: "MNL", city: "Manila" },
            to: { code: "ICN", city: "Seoul / Incheon" },
            departureTime: "11:45 AM",
            arrivalTime: "4:25 PM",
            duration: "3h 40m",
            connectionNote: "4 hr 55 min ICN layover before KE047",
            flightNumber: "OZ702",
            aircraft: "A330-300",
            cabin: "Economy (V)",
            mileage: "1139 miles; mileage upgrade unavailable"
          },
          {
            from: { code: "ICN", city: "Seoul / Incheon" },
            to: { code: "SEA", city: "Seattle" },
            departureTime: "9:20 PM",
            arrivalTime: "2:10 PM",
            duration: "9h 50m",
            connectionNote: "Same-day Seattle arrival",
            flightNumber: "KE047",
            aircraft: "B787-9",
            cabin: "Economy (Q)",
            mileage: "Korean Air-operated ICN-SEA leg"
          }
        ]
      },
      {
        id: "journey-return-2026-11-09",
        tripDayId: "day-9",
        kind: "Return journey",
        title: "Portland to Corpus Christi via Dallas/Fort Worth",
        dateLabel: "Monday, November 9, 2026",
        ticketCost: 716.40,
        airportLeaveBy: "Leave Hotel Vance by about 11:05 AM and aim to be inside PDX by 11:34 AM for the 2:34 PM departure (3 hr domestic buffer).",
        visibilityNote: "This is the November departure routing that replaces the old generic flight-dependent buffer language.",
        statusLabel: "Booked and ticketed under confirmation YWFKME.",
        alertCopy: "This fare already covers the later February 27, 2027 American Airlines continuation to Chicago, so the trip-cost summary should not treat that later leg as unpaid.",
        statusSource: "https://www.aa.com/travelInformation/flights/status",
        airportSource: "https://www.flypdx.com/Flights#/arrivals-and-departures",
        legs: [
          {
            from: { code: "PDX", city: "Portland" },
            to: { code: "DFW", city: "Dallas / Fort Worth" },
            departureTime: "2:34 PM",
            arrivalTime: "8:29 PM",
            duration: "Non-stop",
            connectionNote: "2 hr 01 min connection",
            flightNumber: "AA 2496",
            cabin: "Economy (S)",
            seat: "8F",
            meals: "Food for purchase"
          },
          {
            from: { code: "DFW", city: "Dallas / Fort Worth" },
            to: { code: "CRP", city: "Corpus Christi" },
            departureTime: "10:30 PM",
            arrivalTime: "11:58 PM",
            duration: "Regional connection",
            connectionNote: "Final November-trip leg",
            flightNumber: "AA 5273",
            cabin: "Economy (S)",
            seat: "8F",
            operator: "Operated by PSA Airlines as American Eagle"
          }
        ]
      },
      {
        id: "journey-future-2027-02-27",
        kind: "Future journey",
        title: "Corpus Christi to Chicago via Dallas/Fort Worth",
        dateLabel: "Saturday, February 27, 2027",
        fareDisplay: "Included in $716.40 AA booking",
        ticketCost: null,
        airportLeaveBy: "Be at CRP by about 7:21 AM for the 10:21 AM departure (3 hr domestic buffer).",
        visibilityNote: "Later booked routing tied to the same paid American Airlines confirmation as the November 9 return.",
        statusLabel: "Booked and already included in confirmation YWFKME. Reissued Aug 11, 2026 with updated flight numbers and times.",
        alertCopy: "This later leg should stay visible for planning clarity, but it is already included in the confirmed American Airlines airfare total.",
        statusSource: "https://www.aa.com/travelInformation/flights/status",
        airportSource: "https://www.dfwairport.com/flights/",
        legs: [
          {
            from: { code: "CRP", city: "Corpus Christi" },
            to: { code: "DFW", city: "Dallas / Fort Worth" },
            departureTime: "10:21 AM",
            arrivalTime: "11:53 AM",
            duration: "Regional connection",
            connectionNote: "1 hr 49 min transit",
            flightNumber: "AA 3338",
            cabin: "Economy (N)",
            seat: "",
            meals: "",
            operator: "Operated by Envoy Air as American Eagle"
          },
          {
            from: { code: "DFW", city: "Dallas / Fort Worth" },
            to: { code: "ORD", city: "Chicago O'Hare" },
            departureTime: "1:42 PM",
            arrivalTime: "4:16 PM",
            duration: "Non-stop",
            connectionNote: "Future trip final leg",
            flightNumber: "AA 1290",
            cabin: "Economy (N)",
            seat: "",
            meals: ""
          }
        ]
      },
      {
        id: "journey-future-2027-03-05",
        kind: "Future journey",
        title: "Chicago/O'Hare to Manila (direct)",
        dateLabel: "Monday, March 1 - Wednesday, March 3, 2027",
        ticketCost: null,
        fareDisplay: "PHP 24,281 paid",
        airportLeaveBy: "Be at ORD Terminal 5 by 7:45 PM for the 10:45 PM international departure (3 hr buffer).",
        visibilityNote: "Direct return-to-Manila routing on Philippine Airlines, now paid and locked from receipt Z8RAML.",
        statusLabel: "Booked, paid, and locked under booking reference Z8RAML (ticket 0792545377670).",
        alertCopy: "Electronic ticket receipt shows PR133 ORD-MNL, Standard Business award fare class A, seat 02A, 2 checked bags, and total amount PHP 24,281. Total duration 16h 40m, direct/non-stop, no Incheon transfer required.",
        statusSource: "https://www.philippineairlines.com/en/us/plan/flight-status",
        airportSource: "https://www.flychicago.com/ohare/home/pages/default.aspx",
        receiptUrl: "../assets/docs/philippine-airlines-z8raml-ticket-receipt.pdf",
        legs: [
          {
            from: { code: "ORD", city: "Chicago / O'Hare" },
            to: { code: "MNL", city: "Manila" },
            departureTime: "10:45 PM (Mon, Mar 1, 2027)",
            arrivalTime: "5:25 AM (Wed, Mar 3, 2027)",
            duration: "16h 40m",
            connectionNote: "Direct flight, no transfer",
            flightNumber: "PR 133",
            aircraft: "Airbus A350",
            cabin: "Business (A)",
            seat: "02A",
            operator: "Philippine Airlines",
            terminal: "Depart Terminal 5, arrive Terminal 1",
            mileage: "67,000 miles"
          }
        ]
      }
    ]
  },
  itinerary: [
    {
      id: "day-1",
      isoDate: "2026-11-01",
      date: "Sun, Nov 1",
      city: "Seattle",
      title: "Arrival, Palihotel check-in, H Mart + Target run, Pike Place Bar & Grill dinner, Waterfront Park",
      theme: "Arrival day -- 45-min customs buffer, hotel drop, grocery + Target run, dinner, waterfront evening",
      dayTotal: 105.11,
      weatherPlan: "Keep arrival day calm and simple — focus on resting and light downtown orientation only.",
      segments: [
        { label: "Afternoon", items: [
          { time: "2:10 PM", leaveTime: "2:55 PM", name: "Arrive SEA -- passport control, baggage claim, transfer to Link", type: "transit", neighborhood: "SEA Airport", duration: "45 min", cost: 6, notes: "Korean Air KE047 from ICN lands 2:10 PM (booking reference EMR56H, ticket 9882491085537). Budgeting a full 45 min for passport control + baggage claim before heading to the Link platform.", detailText: `Arrival transition block after landing in Seattle on Korean Air KE047 (ICN-SEA), booking reference EMR56H.\nPurpose: 45-minute buffer for passport control and baggage claim -- international arrivals at SEA can run long, so this is the full allotment rather than the previous 25-minute estimate.\nEstimated cost: $6 for the airport-to-city transit leg (ORCA day-pass model, first ride of the day).\nTiming: Land 2:10 PM, leave the secure area by about 2:55 PM.`, route: "https://www.google.com/maps/dir/SEA+Airport/Downtown+Seattle", mapFrom: "SEA Airport, Seattle, WA", mapTo: "Downtown Seattle, WA" },
          { time: "2:55 PM", name: "Link light rail to Downtown Seattle", type: "transit", neighborhood: "SEA -> Downtown", duration: "45 min", cost: 0, notes: "Ride to downtown tunnel stations near Pike Place; fare already counted above.", detailText: `Link ride from SEA into Downtown Seattle.\nWhat to expect: Easy no-drama airport transfer -- settle in, hydrate, let the arrival day stay simple.\nCost note: Fare already counted in the previous airport-transfer stop.`, route: "https://www.google.com/maps/dir/SEA+Airport/Downtown+Seattle", mapFrom: "SEA Airport, Seattle, WA", mapTo: "Downtown Seattle, WA" },
          { time: "3:40 PM", name: "Walk to Palihotel Seattle", type: "walk", neighborhood: "Downtown", duration: "10 min", cost: 0, notes: "Short walk from the downtown Link station to 107 Pine St, arriving roughly 3:50 PM.", detailText: `Short station-to-hotel walk.\nWhat to expect: Palihotel is right in the heart of downtown near Pike Place, so this walk is very manageable even jet-lagged.\nEstimated arrival: around 3:50 PM.`, route: "https://maps.app.goo.gl/EKxsajFNbp4x7hTm9", mapFrom: "Westlake Station, Seattle, WA", mapTo: "Palihotel Seattle, 107 Pine St, Seattle, WA 98101" },
          { time: "3:50 PM", name: "Palihotel Seattle check-in", type: "hotel", neighborhood: "Downtown", location: "Palihotel Seattle, 107 Pine St, Seattle, WA 98101", duration: "60 min", cost: 0, website: "https://www.palihotel.com/hotels/palihotel-seattle/", payment: "Prepaid -- $662.00 total, already charged", reservation: "Confirmation #2434SG190857 -- Itinerary #73521738329875 -- Deluxe Room, 1 Queen Bed -- 2 adults -- official check-in Sun, Nov 1, 3:00 PM / check-out Thu, Nov 5, 11:00 AM -- reserved for Carl Anthony Lim -- request on file: high floor, nice view, strong AC, strong Wi-Fi (not guaranteed, confirm with property)", safetyScore: 90, safetyNote: "\u{1F7E2} 90% · Generally safe -- busy, well-policed downtown core in daylight", detailText: `Trivia: Palihotel Seattle is a boutique hotel in the Palisociety group, set right in the heart of downtown Seattle a few blocks from Pike Place Market -- known for a design-forward, mid-century-leaning look distinct from typical big-chain downtown hotels.\nLocation: 107 Pine St, Seattle, WA 98101 -- steps from Pike Place, 2nd Ave shopping, and the Link tunnel stations.\nReservation: Confirmation #2434SG190857, itinerary #73521738329875, Deluxe Room 1 Queen Bed, 2 adults, total $662.00 (already paid). Official check-in is 3:00 PM so arrival around 3:50 PM should be after check-in opens.\nSafety note: Downtown core / Pike Place blocks report a 15% year-over-year drop in violent crime through 2025 and are described as busy and well-policed during the day (Downtown Seattle Association reporting via KOMO News, Aug 2025). Standard city awareness is enough for a mid-afternoon hotel check-in.` },
          { time: "4:50 PM", name: "H Mart Downtown Seattle -- grocery run", type: "shopping", neighborhood: "Downtown Seattle", location: "H Mart, 1601 2nd Ave, Seattle, WA 98101", duration: "20 min", cost: 30, website: "https://www.hmart.com/", payment: "Cards/Apple Pay only -- H Mart does not accept cash", image: "hmart-food-sample.jpg", safetyScore: 85, safetyNote: "\u{1F7E2} 85% · Generally safe -- busy daylight retail hours, cleaner 2nd Ave stretch", detailText: `Trivia: H Mart ("Han Ah Reum," Korean for "one arm full of groceries") is the largest Korean-American grocery chain in the US, known for fresh produce, a huge banchan/ready-to-heat section, and an in-store food court in some locations -- this downtown Seattle location is grocery-focused.\nWhy this stop: Stock up on ready-to-heat food (rice bowls, dumplings, banchan, instant meals) to bring back to Palihotel as tonight's dinner, since Pike Place Chowder's ~4:30 PM close makes it unreachable on this timeline.\nORDER: A mix of ready-to-heat meals, snacks, and drinks (see reference photo).\nBudget: capped at $30 -- traveler-requested headroom, not a target. You likely won't spend the full amount, but the ready-to-heat spread can run up quickly.\nSafety note: Late-afternoon (~4:50-5:10 PM) on the 2nd Ave retail corridor is described in local reporting as one of the cleaner downtown stretches compared to the 3rd Ave corridor a block over, which is documented as the area with the most visible street-drug activity in the central city (KOMO News, Aug 2025). Standard awareness recommended; this stop is during busy daylight retail hours.`, route: "https://maps.app.goo.gl/hThtzBj3hkMjL75CA", mapFrom: "Palihotel Seattle, 107 Pine St, Seattle, WA 98101", mapTo: "H Mart, 1601 2nd Ave, Seattle, WA 98101" },
          { time: "5:10 PM", name: "Walk back to Palihotel to drop off food", type: "walk", neighborhood: "Downtown", duration: "10 min", cost: 0, notes: "Drop the H Mart food in the room fridge/microwave setup so it's ready as dinner around 5-6 PM." }
        ]},
        { label: "Evening", items: [
          { time: "5:20 PM", name: "Target Downtown Seattle (Pike Plaza) -- pickup order", type: "shopping", neighborhood: "Downtown Seattle", location: "Target, 1401 2nd Ave, Seattle, WA 98101 (Seattle Pike Plaza)", duration: "25 min", cost: 34.36, website: "https://www.target.com/", payment: "Cards accepted", safetyScore: 85, safetyNote: "\u{1F7E2} 85% · Generally safe -- same block as H Mart, busy early-evening retail hours", detailText: `Order Pickup at Seattle Pike Plaza -- 2 items:\n- Zantac 360 Maximum Strength Heartburn Prevention and Relief Tablets, Famotidine, 25ct -- $10.89\n- Truly Unruly Variety Pack, 12pk/12 fl oz cans -- $18.99\nEstimated total (incl. WA sales tax): $34.36.\nSafety note: Same downtown/Pike Plaza block as H Mart -- early evening, busy retail hours, no specific advisories found for this address.`, route: "https://maps.app.goo.gl/MLPGzYEsuTRYkLYZ6", mapFrom: "Palihotel Seattle, 107 Pine St, Seattle, WA 98101", mapTo: "Target, 1401 2nd Ave, Seattle, WA 98101" },
          { time: "5:45 PM", name: "Walk to Pike Place Bar & Grill", type: "walk", neighborhood: "Downtown / Pike Place", duration: "10 min", cost: 0, notes: "Short walk from Target to Pike Place Bar & Grill.", route: "https://maps.app.goo.gl/ZMgD7BnFvq6v7SFK6", mapFrom: "Target, 1401 2nd Ave, Seattle, WA 98101", mapTo: "Pike Place Bar & Grill, Seattle, WA" },
          { time: "6:00 PM", name: "Dinner at Pike Place Bar & Grill", type: "meal", neighborhood: "Pike Place", location: "Pike Place Bar & Grill", duration: "60 min", cost: 44.86, website: "https://www.eatatpikeplace.com/happy-hour", payment: "Cards accepted", safetyScore: 88, safetyNote: "\u{1F7E2} 88% · Generally safe -- busy, well-policed core tourist area", detailText: `Menu: https://www.eatatpikeplace.com/happy-hour\nORDER:\n- Grilled Chicken Burger (tomato, lettuce, creamy horseradish, sourdough) -- $14.95\n- Prickly-Pear Margarita (Cuervo Gold, triple sec, prickly-pear cactus puree, fresh lime sour, salt rim, on the rocks) -- $10.00\n- Fresca (Absolut Citron, muddled citrus, soda water, splash grapefruit juice) -- $10.00\nSubtotal: $34.95. Plus 10.35% WA/Seattle sales tax ($3.62) and 18% tip on the subtotal ($6.29) = est. total $44.86.\nSafety note: Pike Place itself is described as busy and well-policed daily (KOMO News, Aug 2025); early-evening dinner hour here is a core tourist area with heavy foot traffic.` },
          { time: "7:00 PM", name: "Waterfront Park", type: "activity", neighborhood: "Central Waterfront", location: "Waterfront Park (Pier 62/Pier 58 area)", duration: "40 min", cost: 0, payment: "Free walk-in", image: "waterfront-park.jpg", safetyScore: 65, safetyNote: "\u{1F7E1} 65% · Use normal caution -- no specific night data found, less busy after dark, plan to leave before the 10 PM close", detailText: `Trivia: Seattle's new Waterfront Park is the centerpiece of the ~$1.2B Waterfront Seattle redevelopment -- a ~20-acre string of public spaces from Pier 57 to Pier 62, including the Seattle Aquarium and Pier 62's floating dock and lawn (ASCE, Jan 2026).\nIMPORTANT -- posted hours: Pier 62 / Waterfront Park is posted open daily 7 AM-10 PM (seattle.gov / waterfrontparkseattle.org). Arriving right at 10 PM means the park will likely already be closing or closed -- go earlier in the evening (e.g. right after dinner, ~6:30-7:30 PM) to actually have time there before it shuts.\nSafety note (sourced, not a live feed): Seattle Parks & Rec's 2026 "Summer of Safety" initiative specifically calls out increased staffing/security, clearer signage, and lighting/sight-line improvements at high-use parks including the waterfront (Seattle Parks, May 2026); Seattle Center also states the park's operations prioritize clear sight lines and lighting as safety measures. No source found with a specific crime count or homelessness figure for Waterfront Park at night as of this writing -- that gap is stated here rather than guessed at. General downtown-Seattle guidance from multiple 2026 visitor-safety writeups: core tourist areas including the waterfront feel safe during the day and evening hours when busy; visible homelessness/drug activity downtown is common and generally not dangerous, but isolated/empty stretches after dark warrant normal city caution. Given the 10 PM close, plan to be there earlier while it's still lit, staffed, and populated rather than right at closing.`, route: "https://maps.app.goo.gl/rZe9oL8gLyiTmB4e9", mapFrom: "Pike Place Bar & Grill, Seattle, WA", mapTo: "Waterfront Park, Seattle, WA" },
          { time: "7:40 PM", name: "Walk back to Palihotel", type: "walk", neighborhood: "Waterfront -> Downtown", duration: "15 min", cost: 0, notes: "Walk back up to Palihotel to rest.", route: "https://maps.app.goo.gl/rZe9oL8gLyiTmB4e9", mapFrom: "Waterfront Park, Seattle, WA", mapTo: "Palihotel Seattle, 107 Pine St, Seattle, WA 98101" },
          { time: "8:00 PM", name: "Evening wind-down (self-choose)", type: "rest", neighborhood: "Palihotel base", duration: "2 hrs", cost: 0, notes: "Back to the hotel, eat the H Mart food if still hungry, settle in.", detailText: `Arrival-night wind-down.\nPurpose: Decompress after a long travel day before lights-out. Day 2 is the full Pike Place day and starts at 5:30 AM, so sleep needs to actually start on time.\nContinuity: Bridges dinner/settling-in to a real 10:00 PM lights-out.` },
          { time: "10:00 PM", name: "Sleep", type: "rest", neighborhood: "Palihotel base", duration: "7.5 hrs", cost: 0, notes: "Lights out -- 10:00 PM is the sleep ceiling every night of this trip.", detailText: `Purpose: Get good sleep after a long travel day, with a real night's sleep before Day 2's 5:30 AM wake.\nContinuity: Sleep protection to stabilize next day.` }
        ]}
      ]
    },
    {
      id: "day-2",
      isoDate: "2026-11-02",
      date: "Mon, Nov 2",
      city: "Seattle",
      title: "Pike Place Market early food crawl + Uber office + Sky View",
      theme: "Early Pike Place morning to beat the crowds, relaxed afternoon, sunset",
      dayTotal: 282.35,
      weatherPlan: "Most of the day is walkable from hotel. Rain backup: same route, just shorter stops.",
      segments: [
        { label: "Morning", items: [
          { time: "5:30 AM", name: "Wake, stretch, prep", type: "rest", neighborhood: "Palihotel base", duration: "90 min", cost: 0, notes: "Early start to beat the 8 AM store openings and morning crowds at Pike Place.", detailText: `Purpose: Get out the door early enough that the market is still quiet.\nWhy this matters: Most Pike Place vendors open at 8 AM -- arriving by 7:30 AM means photos and browsing happen before the tour-bus crowds land.` },
          { time: "7:00 AM", name: "Short walk to Pike Place Market", type: "walk", neighborhood: "Downtown", duration: "30 min", cost: 0, notes: "Palihotel is steps from Pike Place, walk direct. Arrive at the sign by 7:30 AM.", route: "https://maps.app.goo.gl/EKxsajFNbp4x7hTm9", mapFrom: "Palihotel Seattle, 107 Pine St, Seattle, WA 98101", mapTo: "Pike Place Market, 85 Pike St, Seattle, WA 98101" },
          { time: "7:30 AM", name: "Pike Place sign + arcade stroll", type: "activity", neighborhood: "Downtown", location: "Pike Place Market", duration: "20 min", cost: 0, payment: "Free walk-in", safetyScore: 88, safetyNote: "\u{1F7E2} 88% · Generally safe -- busy, well-policed core tourist area even at this early hour", detailText: `Trivia: Pike Place Market opened in 1907 as a public farmers market to cut out middlemen between farmers and shoppers -- it's one of the oldest continuously operated public markets in the US.\nIconic market entrance. Walk the sign, arcade, first fish row -- quiet before the 8 AM crowds.\nLine time: None this early.\nEstimated cost: Free.`, route: "https://maps.app.goo.gl/EKxsajFNbp4x7hTm9", mapFrom: "Palihotel Seattle, 107 Pine St, Seattle, WA 98101", mapTo: "Pike Place Market, 85 Pike St, Seattle, WA 98101" },
          { time: "8:00 AM", name: "Mee Sum Pastry", type: "meal", neighborhood: "Pike Place", location: "Mee Sum Pastry, 1526 Pike Pl", duration: "15 min", cost: 6.62, website: "https://www.meesum.com/", payment: "Cards accepted, but reports of a ~$10 card minimum -- this order is under that, carry small cash as backup", image: "mee-sum-pastry.jpg", safetyScore: 88, safetyNote: "\u{1F7E2} 88% · Generally safe -- inside the market's main arcade", detailText: `Trivia: Mee Sum Pastry has served Pike Place since 1935 -- one of the market's oldest continuously running food stalls, known for its steamed and baked hum bao.\nMenu: https://www.meesum.com/\nWhy first: opens at 8 AM, closest food stop to the Pike Place sign.\nORDER: Curry Beef Hong Bao, $6 + 10.35% WA sales tax = $6.62.\nEstimated cost: $6.62.`, route: "https://www.google.com/maps/dir/Pike+Place+Market/Mee+Sum+Pastry+Seattle", mapFrom: "Pike Place Market, 85 Pike St, Seattle, WA 98101", mapTo: "Mee Sum Pastry, 1526 Pike Pl, Seattle, WA 98101" },
          { time: "8:20 AM", name: "Tiny's Apple Cider stand", type: "meal", neighborhood: "Pike Place", location: "Tiny's Apple Cider, Pike Place Market", duration: "20 min", cost: 9.93, payment: "Cards accepted", image: "tinys-apple-cider.jpg", safetyScore: 88, safetyNote: "\u{1F7E2} 88% · Generally safe -- inside the market", detailText: `Why this stop: a market-stall cider vendor with several fresh-pressed flavors, easy quick stop right after Mee Sum.\nORDER: 3 cups -- organic candy apple cider, cherry, and blackberry.\nEach: $3 + 10.35% WA sales tax = $3.31.\nEstimated cost: 3 x $3.31 = $9.93.\nNote: Pike Place Bakery skipped -- closed Mondays.`, route: "https://www.google.com/maps/dir/Mee+Sum+Pastry+Seattle/Pike+Place+Market", mapFrom: "Mee Sum Pastry, 1526 Pike Pl, Seattle, WA 98101", mapTo: "Pike Place Market, 85 Pike St, Seattle, WA 98101" },
          { time: "8:45 AM", name: "Beecher's Handmade Cheese tasting", type: "meal", neighborhood: "Pike Place", location: "Beecher's Handmade Cheese, 1600 Pike Pl", duration: "15 min", cost: 9, website: "https://beechershandmadecheese.com/menus/seattle-flagship-menu/", payment: "Cards accepted", image: "beechers-cheese.jpg", safetyScore: 88, safetyNote: "\u{1F7E2} 88% · Generally safe -- main market strip", detailText: `Trivia: Beecher's makes its cheese on-site in full view of the street -- the open cheese-making window is one of the market's most-photographed stops.\nWatch cheese being made through the front window, then try it. Opens 10 AM -- this earlier arrival time may be before doors open; check on-site or hold this stop until 10 AM if closed.\nMenu: https://beechershandmadecheese.com/menus/seattle-flagship-menu/\nORDER: World's Best Mac & Cheese cup, or the Flagship cheddar curds if you want something to walk with.\nEstimated cost: $9.`, route: "https://www.google.com/maps/dir/Pike+Place+Market/Beecher's+Handmade+Cheese+Seattle", mapFrom: "Pike Place Market, 85 Pike St, Seattle, WA 98101", mapTo: "Beecher's Handmade Cheese, 1600 Pike Pl, Seattle, WA 98101" },
          { time: "9:05 AM", name: "Le Panier", type: "meal", neighborhood: "Pike Place", location: "Le Panier, 1902 Pike Pl", duration: "20 min", cost: 5.68, website: "https://lepanier.com/menu#croissants", payment: "Cards accepted", image: "le-panier.jpg", safetyScore: 88, safetyNote: "\u{1F7E2} 88% · Generally safe -- Pike Place main strip near the sign", detailText: `Trivia: Le Panier is a classic French bakery right at the Pike Place entrance, known for its croissants and window display of pastries facing the market.\nMenu: https://lepanier.com/menu#croissants\nORDER: Cortado, $5.15 + 10.35% WA sales tax = $5.68 (confirmed price).\nPastry/chocolate cookie: menu didn't list prices -- pick a croissant or chocolate item on-site, self-choose, no fixed budget line.\nEstimated cost: $5.68 (cortado only; pastry not priced).`, route: "https://www.google.com/maps/dir/Beecher's+Handmade+Cheese+Seattle/Le+Panier+Seattle", mapFrom: "Beecher's Handmade Cheese, 1600 Pike Pl, Seattle, WA 98101", mapTo: "Le Panier, 1902 Pike Pl, Seattle, WA 98101" },
          { time: "9:30 AM", name: "Totem Smokehouse fish stop", type: "shopping", neighborhood: "Downtown", location: "Totem Smokehouse, 1906 Pike Pl", duration: "30 min", cost: 60, payment: "Cards accepted", image: "pike-place-market.jpg", safetyScore: 88, safetyNote: "\u{1F7E2} 88% · Generally safe -- next door to Le Panier", detailText: `Trivia: Totem Smokehouse specializes in traditional Pacific Northwest smoked salmon, vacuum-sealed and shippable -- a classic Seattle souvenir.\nCore market stop for smoked salmon souvenirs.\nOrder: Peppered smoked sockeye box or smaller pack.\nLine time: 5-15 min.\nBudget raised to $60 for souvenirs (traveler-requested).`, route: "https://www.google.com/maps/dir/Le+Panier+Seattle/Totem+Smokehouse+Seattle", mapFrom: "Le Panier, 1902 Pike Pl, Seattle, WA 98101", mapTo: "Totem Smokehouse, 1906 Pike Pl, Seattle, WA 98101" },
          { time: "10:15 AM", name: "Piroshky Piroshky snack", type: "meal", neighborhood: "Pike Place", location: "Piroshky Piroshky, 1908 Pike Pl", duration: "15 min", cost: 9, website: "https://piroshkybakery.com/menu/", payment: "Cards accepted", image: "piroshky-piroshky.jpg", safetyScore: 88, safetyNote: "\u{1F7E2} 88% · Generally safe -- market main strip", detailText: `Trivia: Piroshky Piroshky is a Russian-style hand-pie bakery, one of Pike Place's most consistently long-lined stalls -- go right after Totem to beat the queue.\nMenu: https://piroshkybakery.com/menu/\nORDER: Smoked Salmon Pate piroshky (savory, most iconic) or the Beef & Onion if you want something heartier. Apple Cinnamon Roll if you'd rather go sweet.\nEstimated cost: $9.`, route: "https://www.google.com/maps/dir/Totem+Smokehouse+Seattle/Piroshky+Piroshky+Seattle", mapFrom: "Totem Smokehouse, 1906 Pike Pl, Seattle, WA 98101", mapTo: "Piroshky Piroshky, 1908 Pike Pl, Seattle, WA 98101" },
          { time: "10:30 AM", name: "Original Starbucks store, 1912 Pike Place", type: "activity", neighborhood: "Pike Place", location: "Starbucks, 1912 Pike Place, Seattle, WA 98101", duration: "30 min", cost: 41, payment: "Cards accepted", image: "original-starbucks.jpg", safetyScore: 85, safetyNote: "\u{1F7E1} 85% · Generally safe -- can be crowded, watch belongings in the line", detailText: `Trivia: The Original Starbucks opened in 1971 at this Pike Place location and is the flagship for the chain's global mermaid logo.\nFirst Starbucks visit: whole bean coffee bag ($16) + Seattle-exclusive mug ($20) + grande cold brew ($5) = $41.\nORDER: Grande cold brew (or a shop-exclusive Pike Place Roast drip if you want to keep it classic) plus the whole-bean bag and mug as souvenirs.\nEstimated cost: $41.`, route: "https://www.google.com/maps/dir/Piroshky+Piroshky+Seattle/Original+Starbucks+Pike+Place+Seattle", mapFrom: "Piroshky Piroshky, 1908 Pike Pl, Seattle, WA 98101", mapTo: "Starbucks, 1912 Pike Place, Seattle, WA 98101" },
          { time: "11:00 AM", name: "Hellenika Cultured Creamery", type: "meal", neighborhood: "Pike Place", location: "Hellenika Cultured Creamery, Pike Place Market", duration: "15 min", cost: 13, website: "https://www.eathellenika.com/menu", payment: "Cards accepted", image: "hellenika-creamery.jpg", safetyScore: 88, safetyNote: "\u{1F7E2} 88% · Generally safe -- market main strip", detailText: `Menu: https://www.eathellenika.com/menu\nORDER: Build-your-own Greek yogurt bowl -- go with honey, walnuts, and fresh fruit toppings, or their signature Mediterranean bowl if you want it pre-built.\nEstimated cost: $13 (traveler-pegged).`, route: "https://www.google.com/maps/dir/Original+Starbucks+Pike+Place+Seattle/Hellenika+Cultured+Creamery+Seattle", mapFrom: "Starbucks, 1912 Pike Place, Seattle, WA 98101", mapTo: "Hellenika Cultured Creamery, Pike Place Market, Seattle, WA 98101" },
          { time: "11:15 AM", name: "Rachel the Pig + Billie -- photo stop", type: "activity", neighborhood: "Pike Place", location: "Rachel the Piggy Bank, 93 Pike St, Seattle, WA 98101", duration: "10 min", cost: 0, payment: "Free walk-in", image: "rachel-the-pig.jpg", safetyScore: 88, safetyNote: "\u{1F7E2} 88% · Generally safe -- market entrance, always busy", detailText: `Trivia: Rachel is a 550 lb bronze piggy bank sculpted by Georgia Gerber, dedicated 1986, named after a real 750 lb prize pig -- she's the Market Foundation's mascot and has raised over $350,000 in donated coins. Billie, her bronze cousin, joined in 2011 nearby.\nEstimated cost: Free.`, route: "https://www.google.com/maps/dir/Hellenika+Cultured+Creamery+Seattle/Rachel+the+Pig+Pike+Place+Seattle", mapFrom: "Hellenika Cultured Creamery, Pike Place Market, Seattle, WA 98101", mapTo: "Rachel the Piggy Bank, 93 Pike St, Seattle, WA 98101" },
          { time: "11:25 AM", name: "Molly Moon's Ice Cream", type: "meal", neighborhood: "Pike Place", location: "Molly Moon's, 93 Pike St #310, Seattle, WA 98101", duration: "15 min", cost: 7, website: "https://www.mollymoon.com/", payment: "Cards accepted", image: "molly-moons.jpg", safetyScore: 88, safetyNote: "\u{1F7E2} 88% · Generally safe -- market entrance", detailText: `Trivia: Molly Moon's is a Seattle-founded small-batch ice cream shop known for local, seasonal flavors -- this location sits right inside the market near Rachel the Pig.\nORDER: A seasonal or signature flavor scoop.\nEstimated cost: ~$7 (estimate).`, route: "https://www.google.com/maps/dir/Rachel+the+Pig+Pike+Place+Seattle/Molly+Moon's+Pike+Place+Seattle", mapFrom: "Rachel the Piggy Bank, 93 Pike St, Seattle, WA 98101", mapTo: "Molly Moon's, 93 Pike St #310, Seattle, WA 98101" },
          { time: "11:40 AM", name: "Daily Dozen Doughnuts + Mocha", type: "meal", neighborhood: "Pike Place", location: "Daily Dozen Doughnuts, Pike Place Market", duration: "15 min", cost: 16, website: "https://dailydozendoughnuts.com/", payment: "Conflicting reports -- some say cash-only, newer reviews say cards work but cash is faster -- carry cash as backup", image: "daily-dozen-doughnuts.jpg", safetyScore: 88, safetyNote: "\u{1F7E2} 88% · Generally safe -- market main strip", detailText: `Trivia: Daily Dozen is a mini-doughnut stall that fries to order right in front of you -- one of the market's classic quick-bite lines.\nMenu: https://dailydozendoughnuts.com/\nORDER: Dozen mini cinnamon-sugar doughnuts fresh from the fryer, plus a mocha to go with it.\nEstimated cost: $16.`, route: "https://www.google.com/maps/dir/Molly+Moon's+Pike+Place+Seattle/Daily+Dozen+Doughnuts+Seattle", mapFrom: "Molly Moon's, 93 Pike St #310, Seattle, WA 98101", mapTo: "Daily Dozen Doughnuts, Pike Place Market, Seattle, WA 98101" },
          { time: "12:00 PM", name: "Gum Wall", type: "activity", neighborhood: "Pike Place / Post Alley", location: "Gum Wall, Post Alley", duration: "15 min", cost: 0, payment: "Free walk-in", image: "gum-wall.jpg", safetyScore: 85, safetyNote: "\u{1F7E1} 85% · Generally safe -- narrow alley, can be crowded", detailText: `Trivia: The Gum Wall started in the 1990s under the Market Theater and became an official Seattle attraction despite (or because of) its stickiness -- periodically power-washed and immediately re-covered.\nEstimated cost: Free.`, route: "https://www.google.com/maps/dir/Daily+Dozen+Doughnuts+Seattle/Gum+Wall+Post+Alley+Seattle", mapFrom: "Daily Dozen Doughnuts, Pike Place Market, Seattle, WA 98101", mapTo: "Gum Wall, Post Alley, Seattle, WA 98101" },
          { time: "12:15 PM", name: "Ghost Alley Espresso", type: "coffee", neighborhood: "Pike Place / Post Alley", location: "Ghost Alley Espresso, 1499 Post Alley", duration: "20 min", cost: 8.50, website: "https://www.ghostalleyespresso.co/menus", payment: "Unconfirmed -- no explicit payment info found for this small walk-up stall; carry cash as backup", image: "ghost-alley-espresso.jpg", safetyScore: 85, safetyNote: "\u{1F7E1} 85% · Generally safe -- narrow alley walk-up stall", detailText: `Quality specialty latte, right next to the Gum Wall.\nMenu: https://www.ghostalleyespresso.co/menus\nOrder: Salted Nut 12oz.\nEstimated cost: $8.50.`, route: "https://www.google.com/maps/dir/Gum+Wall+Post+Alley+Seattle/Ghost+Alley+Espresso+Seattle", mapFrom: "Gum Wall, Post Alley, Seattle, WA 98101", mapTo: "Ghost Alley Espresso, 1499 Post Alley, Seattle, WA 98101" },
          { time: "12:35 PM", name: "Rachel's Ginger Beer - Frozen Mango Margarita", type: "meal", neighborhood: "Pike Place", location: "Rachel's Ginger Beer, 1530 Post Alley", duration: "15 min", cost: 18, website: "https://rachelsgingerbeer.com/menus/", payment: "Cards accepted", image: "rachels-ginger-beer.jpg", safetyScore: 85, safetyNote: "\u{1F7E1} 85% · Generally safe -- Post Alley", detailText: `Menu: https://rachelsgingerbeer.com/menus/\nORDER: Frozen Mango Margarita ginger beer (the signature frozen slushy, not a straight ginger beer) -- ask for it "frozen."\nEstimated cost: $18.`, route: "https://www.google.com/maps/dir/Ghost+Alley+Espresso+Seattle/Rachel's+Ginger+Beer+Post+Alley+Seattle", mapFrom: "Ghost Alley Espresso, 1499 Post Alley, Seattle, WA 98101", mapTo: "Rachel's Ginger Beer, 1530 Post Alley, Seattle, WA 98101" },
          { time: "12:50 PM", name: "Pike Place Market swings", type: "activity", neighborhood: "Pike Place", duration: "10 min", cost: 0, payment: "Free walk-in", notes: "Quick stop at the market swings before heading to lunch.", image: "pike-place-market.jpg", detailText: `Trivia: The market swings are a newer, free photo-op installation near the main arcade -- quick, casual, no line most of the day.\nEstimated cost: Free.`, route: "https://www.google.com/maps/dir/Rachel's+Ginger+Beer+Post+Alley+Seattle/Pike+Place+Market+Seattle", mapFrom: "Rachel's Ginger Beer, 1530 Post Alley, Seattle, WA 98101", mapTo: "Pike Place Market, 85 Pike St, Seattle, WA 98101" }
        ]},
        { label: "Afternoon", items: [
          { time: "1:05 PM", name: "Lunch stop (self-choose)", type: "meal", neighborhood: "Waterfront or Pike Place area", duration: "40 min", cost: 26.12, website: "https://marinationmakai.com/menus/", payment: "Cards accepted", safetyScore: 85, safetyNote: "\u{1F7E1} 85% · Generally safe -- busy tourist waterfront/market area", detailText: `Suggested default: Marination Ma Kai, Pier 54 waterfront (Hawaiian-Korean fusion, casual walk-up counter, harbor view seating).\nMenu: https://marinationmakai.com/menus/\nORDER: Kalbi short rib tacos or the Spam musubi plate.\nBackup if you'd rather stay in the market: Lowell's (Pike Place, 3rd floor, water-view dining room) -- fish and chips or a burger.\nEstimated cost: $26.12 (lunch with tax and tip).`, route: "https://www.google.com/maps/dir/Pike+Place+Market+Seattle/Marination+Ma+Kai+Seattle", mapFrom: "Pike Place Market, 85 Pike St, Seattle, WA 98101", mapTo: "Marination Ma Kai, Pier 54, Seattle, WA 98104" },
          { time: "1:45 PM", name: "Uber Seattle Engineering Office visit", type: "activity", neighborhood: "Downtown", location: "Uber Seattle Engineering Office, 1191 2nd Ave #1200, Seattle, WA 98101", duration: "45 min", cost: 0, payment: "N/A", safetyScore: 90, safetyNote: "\u{1F7E2} 90% · Generally safe -- downtown office corridor, daylight hours", notes: "Brief informal walk-through of the Uber Seattle Engineering Office, not a meeting -- short walk from Pike Place.", detailText: `Purpose: informal look around Uber's Seattle satellite engineering office -- not a scheduled meeting, max 45 min.\nEstimated cost: Free.`, route: "https://www.google.com/maps/dir/Marination+Ma+Kai+Seattle/1191+2nd+Ave+Seattle", mapFrom: "Marination Ma Kai, Pier 54, Seattle, WA 98104", mapTo: "Uber Seattle Engineering Office, 1191 2nd Ave #1200, Seattle, WA 98101" },
          { time: "2:30 PM", name: "Hotel reset before Sky View", type: "rest", neighborhood: "Palihotel base", duration: "115 min", cost: 0, notes: "Best Buy Northgate fit check removed Sep 13, 2026. Use this as an open buffer before the hard sunset-view appointment." },
          { time: "4:25 PM", name: "Walk to Columbia Center Sky View", type: "walk", neighborhood: "Downtown", duration: "30 min", cost: 0, notes: "Leave Palihotel with a relaxed buffer and arrive at Sky View by 4:55 PM.", route: "https://www.google.com/maps/dir/Palihotel+Seattle/Columbia+Center+Sky+View+Observatory+Seattle", mapFrom: "Palihotel Seattle, 107 Pine St, Seattle, WA 98101", mapTo: "Sky View Observatory, 700 4th Ave, Seattle, WA 98104" },
          { time: "4:55 PM", name: "Columbia Center Sky View Observatory - Elite Experience ticket", type: "activity", neighborhood: "Downtown", location: "Sky View Observatory, 700 4th Ave", duration: "60 min", cost: 52.50, website: "https://skyviewobservatory.com/tickets/", payment: "Cards accepted", safetyScore: 90, safetyNote: "\u{1F7E2} 90% · Generally safe -- secure indoor attraction", detailText: `Trivia: Sky View Observatory sits on the 73rd floor of Columbia Center, the tallest building in Washington State -- the highest public viewpoint in the city.\nSeattle skyline views from the observation deck at dusk.\nTickets: Elite Experience Adult $49 + booking fee $1 + tax $2.50 = $52.50.`, route: "https://www.google.com/maps/dir/Palihotel+Seattle/Columbia+Center+Sky+View+Observatory", mapFrom: "Palihotel Seattle, 107 Pine St, Seattle, WA 98101", mapTo: "Sky View Observatory, 700 4th Ave, Seattle, WA 98104" },
          { time: "5:55 PM", name: "Sky View Cafe - sunset cocktail", type: "activity", neighborhood: "Downtown", location: "Sky View Observatory Cafe, 700 4th Ave", duration: "30 min", cost: 0, website: "https://skyviewobservatory.com/sky-view-cafe-bar-menu/", payment: "Cards accepted", safetyScore: 90, safetyNote: "\u{1F7E2} 90% · Generally safe -- secure indoor attraction", notes: "Included in the Sky View admission. Enjoy the dusk lights from the deck.", detailText: `Menu: https://skyviewobservatory.com/sky-view-cafe-bar-menu/\nIncluded in the Sky View admission -- no separate cost.`, route: "https://www.google.com/maps/dir/Columbia+Center+Sky+View+Observatory/Sky+View+Observatory+Cafe", mapFrom: "Sky View Observatory, 700 4th Ave, Seattle, WA 98104", mapTo: "Sky View Observatory Cafe, 700 4th Ave, Seattle, WA 98104" }
        ]},
        { label: "Evening", items: [
          { time: "6:35 PM", name: "Walk back to Palihotel + free evening", type: "walk", neighborhood: "Downtown -> Palihotel", duration: "15 min", cost: 0, notes: "Short walk back to the hotel. Evening is open -- find dinner nearby, meet people, relax.", route: "https://www.google.com/maps/dir/Columbia+Center+Sky+View+Observatory+Seattle/Palihotel+Seattle", mapFrom: "Sky View Observatory, 700 4th Ave, Seattle, WA 98104", mapTo: "Palihotel Seattle, 107 Pine St, Seattle, WA 98101" },
          { time: "6:50 PM", name: "Dinner and wind-down (self-choose)", type: "rest", neighborhood: "Palihotel area or Downtown", duration: "3 hrs 10 min", cost: 0, notes: "Open evening. Grab dinner somewhere casual nearby, settle in before the 10:00 PM sleep ceiling.", detailText: `Open evening, self-choose dinner nearby.\nContinuity: Bridges dinner/settling-in to a real 10:00 PM lights-out ahead of Day 3's Bainbridge ferry morning.` },
          { time: "10:00 PM", name: "Sleep", type: "rest", neighborhood: "Palihotel base", duration: "9 hrs 20 min", cost: 0, notes: "Lights out -- 10:00 PM is the sleep ceiling every night of this trip.", detailText: `Purpose: Real night's sleep before Day 3's 7:20 AM wake and Bainbridge ferry morning.\nContinuity: Rest before Day 3's Bainbridge ferry morning.` }
        ]}
      ]
    },
    {
      id: "day-3",
      isoDate: "2026-11-03",
      date: "Tue, Nov 3",
      city: "Seattle",
      title: "Bainbridge day trip - ferry from downtown",
      theme: "Scenic ferry + island pacing",
      dayTotal: 176.52,
      weatherPlan: "If ferry disruptions occur, replace with Ballard + Fremont neighborhood loop.",
      segments: [
        { label: "Morning", items: [
          { time: "7:20 AM", name: "Wake + prep", type: "rest", neighborhood: "Palihotel base", duration: "40 min", cost: 0, notes: "Light prep. Ferry terminal is walkable/short transit from downtown. Food starts at Bainbridge." },
          { time: "8:00 AM", name: "Walk/transit to Seattle Ferry Terminal", type: "transit", neighborhood: "Downtown -> Ferry Terminal waterfront", duration: "20 min", cost: 0, notes: "Palihotel is close to the ferry terminal via short walk + Link if needed. Use ORCA if any transit needed." },
          { time: "8:30 AM", name: "Ferry to Bainbridge", type: "transit", neighborhood: "Puget Sound", duration: "60 min", cost: 12, notes: "Seattle-to-Bainbridge walk-on fare is collected westbound only and should stay separate from local Seattle transit.", detailText: `Trivia: The Seattle-Bainbridge Island route is the busiest of Washington State Ferries' routes, carrying commuters and tourists across Puget Sound with views of the Seattle skyline, Elliott Bay, and (on a clear day) Mt. Rainier.\nWalk-on passenger fare is charged westbound (Seattle -> Bainbridge) only -- the return trip is free.`, route: "https://www.google.com/maps/dir/Colman+Dock+Seattle/Bainbridge+Island+Ferry+Terminal", mapFrom: "Colman Dock, 801 Alaskan Way, Seattle, WA 98104", mapTo: "Bainbridge Island Ferry Terminal, 270 Olympic Dr SE, Bainbridge Island, WA 98110" }
        ]},
        { label: "Afternoon", items: [
          { time: "9:30 AM", name: "Winslow + waterfront exploration", type: "walk", neighborhood: "Bainbridge Island", duration: "95 min", cost: 0 },
          { time: "11:05 AM", name: "Harbour Public House lunch", type: "meal", neighborhood: "Winslow", location: "Harbour Public House, 231 Parfitt Way SW", duration: "75 min", cost: 29, website: "https://harbourpub.com/", payment: "Cards accepted", detailText: `Suggested: Harbour Public House -- waterfront pub, five minutes from the ferry. Early lunch on Bainbridge.\nMenu: https://harbourpub.com/\nORDER: Braised Beef BBQ Sandwich and a ginger ale.\nFruity: Bainbridge cider is the move if you want something lighter than beer.\nEstimated cost: $29 with tip and tax.`, route: "https://www.google.com/maps/dir/Bainbridge+Island+Ferry+Terminal/Harbour+Public+House+Bainbridge", mapFrom: "Bainbridge Island Ferry Terminal, 270 Olympic Dr SE, Bainbridge Island, WA 98110", mapTo: "Harbour Public House, 231 Parfitt Way SW, Bainbridge Island, WA 98110" },
          { time: "12:20 PM", name: "Blackbird Coffee stop", type: "coffee", neighborhood: "Winslow", location: "Blackbird Bakery, 210 Winslow Way E", duration: "50 min", cost: 8, website: "https://www.blackbirdbakeryandcafe.com/bakery-menu", payment: "Cards accepted", detailText: `Suggested: Blackbird Bakery, just a couple minutes from the ferry terminal.\nMenu: https://www.blackbirdbakeryandcafe.com/bakery-menu\nORDER: Coffee plus a scone or cookie.\nEstimated cost: $8.`, route: "https://www.google.com/maps/dir/Harbour+Public+House+Bainbridge/Blackbird+Bakery+Bainbridge", mapFrom: "Harbour Public House, 231 Parfitt Way SW, Bainbridge Island, WA 98110", mapTo: "Blackbird Bakery, 210 Winslow Way E, Bainbridge Island, WA 98110" },
          { time: "1:10 PM", name: "Return ferry to Seattle", type: "transit", neighborhood: "Puget Sound", duration: "60 min", cost: 0, notes: "Return walk-on passenger fare is already covered.", route: "https://www.google.com/maps/dir/Bainbridge+Island+Ferry+Terminal/Colman+Dock+Seattle", mapFrom: "Bainbridge Island Ferry Terminal, 270 Olympic Dr SE, Bainbridge Island, WA 98110", mapTo: "Colman Dock, 801 Alaskan Way, Seattle, WA 98104" }
        ]},
        { label: "Evening", items: [
          { time: "2:10 PM", name: "Walk/transit toward Gourmondo Café", type: "transit", neighborhood: "Ferry Terminal -> Queen Anne", duration: "20 min", cost: 0, notes: "Gourmondo Café closes 3:30 PM weekdays -- visited first, before the loop runs back south, so it's reached well within hours.", route: "https://www.google.com/maps/dir/Colman+Dock+Seattle/Gourmondo+Cafe+Seattle", mapFrom: "Colman Dock Ferry Terminal, 801 Alaskan Way, Seattle, WA 98104", mapTo: "Gourmondo Café, 201 Elliott Ave W, Seattle, WA 98101" },
          { time: "2:35 PM", name: "Gourmondo Café", type: "coffee", neighborhood: "Lower Queen Anne", location: "Gourmondo Café, 201 Elliott Ave W, Seattle, WA 98101", duration: "25 min", cost: 5.68, website: "https://order.toasttab.com/online/gourmondo-cafes-cafe-1-201-elliott-ave-w", payment: "Cards accepted", safetyScore: 85, safetyNote: "\u{1F7E1} 85% · Generally safe -- Lower Queen Anne office/retail corridor, daylight hours", detailText: `Trivia: Gourmondo is a Seattle-based cafe and catering company -- this Elliott Ave W location sits near the Climate Pledge Arena/Uptown area, north of the main waterfront piers.\nMenu: https://order.toasttab.com/online/gourmondo-cafes-cafe-1-201-elliott-ave-w\nORDER: 12 oz cold brew, $5.15 + 10.35% WA sales tax = $5.68.\nHours: M-F 7:30 AM-3:30 PM, closed weekends -- Tue Nov 3 arrival is well before close.\nEstimated cost: $5.68.`, route: "https://www.google.com/maps/dir/Gourmondo+Cafe+Seattle/Sirens+of+Spring+Seattle", mapFrom: "Gourmondo Café, 201 Elliott Ave W, Seattle, WA 98101", mapTo: "Sirens of Spring, 3155 Alaskan Way, Seattle, WA 98121" },
          { time: "3:05 PM", name: "Sirens of Spring - photo stop", type: "activity", neighborhood: "Waterfront", location: "Sirens of Spring, 3155 Alaskan Way, Seattle, WA 98121", duration: "10 min", cost: 0, payment: "Free walk-in", safetyScore: 85, safetyNote: "\u{1F7E1} 85% · Generally safe -- open waterfront path, daylight hours", detailText: `Trivia: Sirens of Spring is a waterfront art installation near Myrtle Edwards Park -- poetic words etched on metal plaques celebrating water and urban transformation themes.\nEstimated cost: Free.`, route: "https://www.google.com/maps/dir/Sirens+of+Spring+Seattle/Olympic+Sculpture+Park+Seattle", mapFrom: "Sirens of Spring, 3155 Alaskan Way, Seattle, WA 98121", mapTo: "Olympic Sculpture Park, 2901 Western Ave, Seattle, WA 98121" },
          { time: "3:20 PM", name: "Olympic Sculpture Park", type: "walk", neighborhood: "Waterfront", location: "Olympic Sculpture Park, 2901 Western Ave", duration: "20 min", cost: 0, payment: "Free walk-in", image: "olympic-sculpture-park.jpg", safetyScore: 85, safetyNote: "\u{1F7E1} 85% · Generally safe -- open public park, daylight hours", detailText: `Trivia: Olympic Sculpture Park is a free 9-acre outdoor branch of the Seattle Art Museum, opened 2007, with large-scale sculpture set against Elliott Bay and Olympic Mountains views.\nOutdoor sculpture park with Elliott Bay views.\nEstimated cost: Free.`, route: "https://www.google.com/maps/dir/Olympic+Sculpture+Park+Seattle/Pier+62+Seattle", mapFrom: "Olympic Sculpture Park, 2901 Western Ave, Seattle, WA 98121", mapTo: "Pier 62, Alaskan Way, Seattle, WA 98121" },
          { time: "3:40 PM", name: "Pier 62 - photo stop", type: "activity", neighborhood: "Waterfront", location: "Pier 62, Alaskan Way, Seattle, WA 98121", duration: "15 min", cost: 0, payment: "Free walk-in", safetyScore: 85, safetyNote: "\u{1F7E1} 85% · Generally safe -- part of the redeveloped Waterfront Park string, daylight hours", detailText: `Trivia: Pier 62 is part of the ~$1.2B Waterfront Seattle redevelopment -- a floating dock and lawn used for events and public gathering, part of the same string of public spaces as Waterfront Park.\nWaterfront viewing pier.\nEstimated cost: Free.`, route: "https://www.google.com/maps/dir/Pier+62+Seattle/Old+Stove+Brewing+Seattle", mapFrom: "Pier 62, Alaskan Way, Seattle, WA 98121", mapTo: "Old Stove Brewing, MarketFront, 1901 Western Ave Ste A, Seattle, WA 98101" },
          { time: "3:55 PM", name: "Old Stove Brewing", type: "meal", neighborhood: "Waterfront", location: "Old Stove Brewing, MarketFront, 1901 Western Ave Ste A", duration: "20 min", cost: 13, website: "https://oldstove.com/menus/", payment: "Cards accepted", safetyScore: 88, safetyNote: "\u{1F7E2} 88% · Generally safe -- Pike Place MarketFront, busy daylight hours", detailText: `Trivia: Old Stove Brewing's MarketFront taproom sits right on the water at Pike Place's newer lower level, with direct Elliott Bay views from the patio.\nMenu: https://oldstove.com/menus/\nORDER: Wheyhey Pilsner or the Chowder Beer (Old Stove's signature) with Elliott Bay views from the MarketFront patio.\nEstimated cost: $13 all-in (menu price + tax + tip).`, route: "https://www.google.com/maps/dir/Old+Stove+Brewing+Seattle/Seattle+Great+Wheel", mapFrom: "Old Stove Brewing, MarketFront, 1901 Western Ave Ste A, Seattle, WA 98101", mapTo: "Seattle Great Wheel, Pier 57, Seattle, WA 98101" },
          { time: "4:15 PM", name: "Seattle Great Wheel - photo stop", type: "activity", neighborhood: "Waterfront", location: "Seattle Great Wheel, Pier 57", duration: "10 min", cost: 0, payment: "Free walk-in", image: "seattle-great-wheel.jpg", safetyScore: 88, safetyNote: "\u{1F7E2} 88% · Generally safe -- busy central waterfront pier", notes: "Photo-only stop, no ride.", detailText: `Trivia: The Seattle Great Wheel is a 175-ft Ferris wheel on Pier 57, one of the tallest on the US West Coast, opened 2012.\nEstimated cost: Free (photo only, no ride).`, route: "https://www.google.com/maps/dir/Seattle+Great+Wheel/Harbor+Steps+Seattle", mapFrom: "Seattle Great Wheel, Pier 57, Seattle, WA 98101", mapTo: "Harbor Steps, 1301 Western Ave, Seattle, WA 98101" },
          { time: "4:30 PM", name: "Harbor Steps", type: "walk", neighborhood: "Downtown Waterfront", location: "Harbor Steps, 1301 Western Ave", duration: "15 min", cost: 0, notes: "South dip closest to the hotel, ends the loop.", safetyScore: 88, safetyNote: "\u{1F7E2} 88% · Generally safe -- downtown public staircase/plaza, daylight hours", detailText: `Trivia: Harbor Steps is a public staircase and plaza connecting downtown Seattle to the waterfront, near the Seattle Art Museum.\nEstimated cost: Free.`, route: "https://www.google.com/maps/dir/Harbor+Steps+Seattle/Palihotel+Seattle", mapFrom: "Harbor Steps, 1301 Western Ave, Seattle, WA 98101", mapTo: "Palihotel Seattle, 107 Pine St, Seattle, WA 98101" },
          { time: "4:45 PM", name: "Walk back to Palihotel", type: "walk", neighborhood: "Waterfront -> Downtown", duration: "15 min", cost: 0, notes: "Short walk back for happy hour.", route: "https://www.google.com/maps/dir/Harbor+Steps+Seattle/Palihotel+Seattle", mapFrom: "Harbor Steps, 1301 Western Ave, Seattle, WA 98101", mapTo: "Palihotel Seattle, 107 Pine St, Seattle, WA 98101" },
          { time: "5:00 PM", name: "The Hart and the Hunter happy hour - 2 cocktails", type: "food", neighborhood: "Palihotel base", location: "The Hart and the Hunter, 111 Pine St", duration: "100 min", cost: 30.84, website: "https://thehartandthehunter.com/", payment: "Cards accepted, no cash", detailText: `Palihotel's in-house restaurant runs Tuesday ALL NIGHT happy hour, 3-9pm: $4 draft beers, $8 wines by the glass, $12 cocktails, and snacks (Tue-Sat is 3-6pm otherwise). Start shifted from 4:10 PM to 5:00 PM to follow the waterfront loop (moved here from Day 2 to protect Day 2's Sky View sunset hard stop) -- still well inside the 3-9pm window.\nORDER: Any two of Espresso Martini, Bloody Mary, House Spritz, French 75, Irish Coffee, or Japanese Old Fashioned -- all $12 at happy hour price (normally $17 each).\nEstimated cost: 2 cocktails at $12 = $24 + 10.5% WA sales tax ($2.52) + 18% tip ($4.32) = $30.84.`, route: "https://www.google.com/maps/dir/Harbor+Steps+Seattle/The+Hart+and+the+Hunter+Palihotel+Seattle", mapFrom: "Harbor Steps, 1301 Western Ave, Seattle, WA 98101", mapTo: "The Hart and the Hunter, 111 Pine St, Seattle, WA 98101" },
          { time: "6:40 PM", name: "Transit to Capitol Hill", type: "transit", neighborhood: "Downtown -> Capitol Hill", duration: "10 min", cost: 0, notes: "Consolidated Capitol Hill evening: Saint John's dinner, Salt & Straw dessert, and Menya Musashi ramen. Shifted ~50 min later than before since happy hour now follows the waterfront loop." },
          { time: "7:10 PM", name: "Saint John's Bar and Eatery dinner", type: "meal", neighborhood: "Capitol Hill", duration: "75 min", cost: 42, website: "https://www.saintjohnsseattle.com/happyhour-v1", payment: "Cards accepted", detailText: `Menu/happy hour: https://www.saintjohnsseattle.com/happyhour-v1\nORDER: Fried chicken sandwich or the burger, plus a house margarita ($6 flat).\nEstimated cost: $42 with tax and tip.`, route: "https://www.google.com/maps/dir/Downtown+Seattle/Saint+John's+Bar+and+Eatery+Capitol+Hill", mapFrom: "Downtown Seattle, WA", mapTo: "Saint John's Bar and Eatery, 719 E Pike St, Seattle, WA 98122" },
          { time: "8:25 PM", name: "Salt & Straw Capitol Hill dessert", type: "food", neighborhood: "Capitol Hill", duration: "30 min", cost: 9, website: "https://saltandstraw.com/pages/capitol-hill", payment: "Cards accepted", detailText: `Menu: https://saltandstraw.com/pages/capitol-hill\nORDER: A seasonal flavor flight (2-3 scoop taste) if you can't decide, or go straight for Honey Lavender / Sea Salt with Caramel Ribbons as the signature picks.\nEstimated cost: $9.`, route: "https://www.google.com/maps/dir/Saint+John's+Bar+and+Eatery+Capitol+Hill/Salt+%26+Straw+Capitol+Hill", mapFrom: "Saint John's Bar and Eatery, 719 E Pike St, Seattle, WA 98122", mapTo: "Salt & Straw, 714 E Pike St, Seattle, WA 98122" },
          { time: "8:55 PM", name: "Menya Musashi ramen dinner", type: "meal", neighborhood: "Capitol Hill", duration: "60 min", cost: 27, website: "https://menyamuso.us/ramen-menu-seattle/", payment: "Cards/gift cards only -- Menya Musashi is explicitly cashless", detailText: `Menu: https://menyamuso.us/ramen-menu-seattle/\nORDER: Musashi Tonkotsu ramen (the house signature) with a side of gyoza to split.\nEstimated cost: $27.`, route: "https://www.google.com/maps/dir/Salt+%26+Straw+Capitol+Hill/Menya+Musashi+Seattle", mapFrom: "Salt & Straw, 714 E Pike St, Seattle, WA 98122", mapTo: "Menya Musashi, 1510 Belmont Ave, Seattle, WA 98122" },
          { time: "9:55 PM", name: "Transit back to Palihotel", type: "transit", neighborhood: "Capitol Hill -> Downtown", duration: "20 min", cost: 0 },
          { time: "10:15 PM", name: "Hotel wind-down / Sleep", type: "rest", neighborhood: "Palihotel base", duration: "9 hrs", cost: 0, notes: "Full recovery before the last Seattle full-activity day." }
        ]}
      ]
    },
    {
      id: "day-4",
      isoDate: "2026-11-04",
      date: "Wed, Nov 4",
      city: "Seattle",
      title: "Fremont + Ballard neighborhood day - direct from downtown base",
      theme: "New neighborhoods + deeper city coverage",
      dayTotal: 34.50,
      weatherPlan: "If weather is rough, pivot outdoor segments to museums/indoor market time.",
      segments: [
        { label: "Morning", items: [
          { time: "7:30 AM", name: "Wake + prep", type: "rest", neighborhood: "Palihotel base", duration: "40 min", cost: 0 },
          { time: "8:10 AM", name: "Analog Coffee stop", type: "coffee", neighborhood: "Capitol Hill", location: "Analog Coffee, 235 Summit Ave E", duration: "20 min", cost: 4.50, website: "https://www.analogcoffee.com/", payment: "Cards accepted", notes: "Restored per traveler request in its original morning slot before heading to Fremont.", detailText: `Menu: https://www.analogcoffee.com/\nORDER: Cortado (their signature pull) or a drip coffee if you want something simpler for the transit ahead.\nEstimated cost: $4.50.` },
          { time: "8:30 AM", name: "Transit to Fremont", type: "transit", neighborhood: "Capitol Hill -> Fremont", duration: "45 min", cost: 6, notes: "First ORCA ride of Day 4 -- flat $6 day-pass charge." },
          { time: "9:15 AM", name: "Fremont walking loop", type: "walk", neighborhood: "Fremont", duration: "110 min", cost: 0 }
        ]},
        { label: "Afternoon", items: [
          { time: "11:05 AM", name: "Uneeda Burger Fremont lunch", type: "meal", neighborhood: "Fremont", location: "Uneeda Burger", duration: "85 min", cost: 18, website: "https://uneedaburger.com/seattle-fremont-uneeda-burger-food-menu", payment: "Cards accepted", detailText: `Counter-service Fremont burger institution.\nMenu: https://uneedaburger.com/seattle-fremont-uneeda-burger-food-menu\nORDER: Uneeda Burger Chipotle Chicken Burger.\nFruity: Strawberry or seasonal milkshake is the fruit-leaning move here.\nEstimated cost: $18 with tip.` },
          { time: "12:30 PM", name: "Transit to Ballard", type: "transit", neighborhood: "Fremont -> Ballard", duration: "25 min", cost: 0 },
          { time: "12:55 PM", name: "Ballard Ave + locks area explore", type: "walk", neighborhood: "Ballard", duration: "110 min", cost: 0 },
          { time: "2:45 PM", name: "Ballard Coffee Works reset", type: "coffee", neighborhood: "Ballard", location: "Ballard Coffee Works, 2060 NW Market St", duration: "45 min", cost: 6, website: "https://www.ballardcoffee-co.com/menus", payment: "Cards confirmed; mixed reviews on whether cash is always accepted -- use card as primary", detailText: `Ballard Coffee Works for the afternoon reset before heading back downtown.\nMenu: https://www.ballardcoffee-co.com/menus\nORDER: Cold Brew (16oz).\nSKIP: Heavy snack unless your feet are dragging.\nEstimated cost: $6.` }
        ]},
        { label: "Evening", items: [
          { time: "3:30 PM", name: "Transit back to Palihotel", type: "transit", neighborhood: "Ballard -> Downtown", duration: "45 min", cost: 0 },
          { time: "4:15 PM", name: "Return and pack for train day", type: "rest", neighborhood: "Palihotel base", duration: "8+ hrs", cost: 0, notes: "Dinner removed from plan -- open evening slot, wind-down and rest block so the train departure stays protected. Last night in Seattle." }
        ]}
      ]
    },
    {
      id: "day-5",
      isoDate: "2026-11-05",
      date: "Thu, Nov 5",
      city: "Portland",
      title: "Checkout + Amtrak transfer + light Portland evening",
      theme: "Transition day - easy downtown to station walk",
      dayTotal: 52,
      weatherPlan: "Keep Seattle morning close to hotel and station timing protected with buffers.",
      segments: [
        { label: "Morning", items: [
          { time: "7:00 AM", name: "Wake, final pack, checkout prep", type: "rest", neighborhood: "Palihotel base", duration: "120 min", cost: 0, notes: "Light prep and packing. King Street Station is walking distance from downtown Palihotel. Grab-and-go breakfast from the H Mart/Target run stocked on Day 1 covers this morning -- no separate breakfast stop needed." },
          { time: "9:00 AM", name: "Checkout and walk to King Street Station", type: "walk", neighborhood: "Downtown -> King Street", duration: "15 min", cost: 0, notes: "Short walk from downtown to King Street Station. Palihotel proximity makes this very manageable." },
          { time: "9:15 AM", name: "Station arrival + platform prep", type: "rest", neighborhood: "King Street Station", duration: "55 min", cost: 0, notes: "Settle in at the station with plenty of margin before boarding." }
        ]},
        { label: "Afternoon", items: [
          { time: "12:10 PM", name: "Amtrak Cascades 517 SEA -> PDX", type: "transit", neighborhood: "Intercity rail", duration: "3h 25m", cost: 48, notes: "Reservation 29CB3A-17MAY26, $29 fare plus $19 successful bid to business class." },
          { time: "3:35 PM", name: "Arrive Portland Union Station and transfer to Hotel Vance", type: "transit", neighborhood: "Union Station -> Hotel Vance", duration: "35 min", cost: 6, notes: "First TriMet-system ride in Portland on Day 5 -- flat $6 day-pass charge." },
          { time: "4:20 PM", name: "Check in and reset", type: "rest", neighborhood: "Hotel Vance Portland", duration: "100 min", cost: 0, notes: "Settle into Hotel Vance after the Seattle-to-Portland transfer." }
        ]},
        { label: "Evening", items: [
          { time: "6:00 PM", name: "Easy downtown orientation walk", type: "walk", neighborhood: "Downtown Portland", duration: "30 min", cost: 0 },
          { time: "6:35 PM", name: "Apple Pioneer Place time block", type: "shopping", neighborhood: "Downtown Portland", location: "Apple Pioneer Place, 450 SW Yamhill St", duration: "35 min", cost: 0, website: "https://www.apple.com/retail/pioneerplace/", payment: "Cards accepted", detailText: `Short downtown stop to check the Apple store and Pioneer Place architecture.\nPurpose: Use this as the Portland phone / accessory browse block, not a full shopping spree.\nPhoto angle: The store frontage and mall atrium make a clean city-photo backdrop.\nEstimated cost: Free unless you buy the new phone or accessories.\nPayment: Cards accepted.` },
          { time: "7:15 PM", name: "Luc Lac Vietnamese Kitchen dinner", type: "meal", neighborhood: "Downtown Portland", duration: "75 min", cost: 15, website: "https://luclacpdx.com/", payment: "Cards accepted", detailText: `First dinner in Portland after the travel day.\nMenu: https://luclacpdx.com/\nORDER: Round Steak & Lean Brisket -- rare slices of steak cooked with citrus, pineapple sauce, cilantro, onions, fresh herbs, peanuts and shallots.\nFruity: Ask for the most fruit-forward seasonal cocktail or their coconut-leaning drink.\nSkip: Soup. Save room for the rice-and-beef lane.\nEstimated cost: $15.` },
          { time: "8:30 PM", name: "Hotel Vance wind-down / Sleep", type: "rest", neighborhood: "Hotel Vance Portland", duration: "10 hrs", cost: 0, notes: "Full recovery night before the first deeper Portland day." }
        ]}
      ]
    },
    {
      id: "day-6",
      isoDate: "2026-11-06",
      date: "Fri, Nov 6",
      city: "Portland",
      title: "Cannon Beach / Haystack Rock day trip (public transit)",
      theme: "Iconic sea stack + tide pools via POINT NorthWest bus",
      dayTotal: 149,
      weatherPlan: "Coastal weather varies; low tide timing essential for tide-pool access. Check NOAA tides for Nov 6, 2026 before confirming the day.",
      segments: [
        { label: "Morning", items: [
          { time: "7:00 AM", name: "Wake + quick breakfast + prep", type: "rest", neighborhood: "Hotel Vance Portland", duration: "50 min", cost: 0, notes: "Early start to catch the westbound POINT NorthWest bus." },
          { time: "7:50 AM", name: "Transit to Portland Union Station", type: "transit", neighborhood: "Hotel Vance -> Union Station", duration: "20 min", cost: 6, notes: "Walk or MAX to Union Station (800 NW 6th Ave). First TriMet-system ride of Day 6 -- flat $6 day-pass charge." },
          { time: "8:10 AM", name: "POINT NorthWest bus to Cannon Beach (boarding)", type: "transit", neighborhood: "Portland Union Station", duration: "18 min", cost: 0, notes: "Confirmed 8:28 AM departure window. Tickets can be purchased at Amtrak kiosks, online, or by phone 1-800-872-7245." }
        ]},
        { label: "Daytime", items: [
          { time: "8:28 AM", name: "Depart Portland Union Station (POINT NorthWest)", type: "transit", neighborhood: "Intercity bus", duration: "198 min", cost: 40, notes: "Confirmed schedule: PDX Union Station to Astoria, OR (via ART connecting bus 5500), arrives 11:46 AM. $40 covers the confirmed round-trip fare." },
          { time: "11:46 AM", name: "Arrive Cannon Beach", type: "transit", neighborhood: "Cannon Beach", duration: "0 min", cost: 0, notes: "Bus stops at 1170 S Hemlock St, downtown Cannon Beach." },
          { time: "11:50 AM", name: "Orientation + Haystack Rock walk", type: "activity", neighborhood: "Cannon Beach", location: "Haystack Rock, Tolovana Beach State Recreation Site", duration: "180 min", cost: 0, website: "https://www.cannonbeach.org/things-to-do/beaches-and-parks/haystack-rock/", payment: "No admission; public land open 24/7", detailText: `Iconic Cannon Beach sea-stack exploration.\nWhat to see: 235-foot Haystack Rock visible from the beach.\nTide pools: Low tide is essential for exploring tide pools around the base of the rock. Check NOAA tide times for November 6, 2026 before the trip at noaa.gov or tide-forecast.com. Optimal window usually a couple hours before/after the lowest tide.\nWhat to bring: Layers (coastal wind), water, snacks, camera.\nWarnings: Lifeguards and patrol trucks monitor the area; stay off exposed rocks to protect tide-pool ecosystems.\nEstimated cost: Free.` },
          { time: "2:50 PM", name: "Cannon Beach lunch, coffee, and cocktail", type: "meal", neighborhood: "Cannon Beach downtown", duration: "90 min", cost: 100, website: "https://pelicanbrewing.com/menus/", payment: "Cards accepted", detailText: `Suggested default: Pelican Brewing Cannon Beach, oceanfront taproom right on the beach.\nMenu: https://pelicanbrewing.com/menus/\nORDER: Fish and chips or the Pelican burger, plus a Kiwanda Cream Ale or a seasonal cocktail.\nCoffee alternate: Sea Level Bakery (2 minutes inland) for coffee/pastry if you'd rather split the stop.\nEstimated cost: $100 (lunch, coffee, and a cocktail with tip).` }
        ]},
        { label: "Evening / Return", items: [
          { time: "5:40 PM", name: "Transit to bus stop + board return bus", type: "transit", neighborhood: "Downtown Cannon Beach", duration: "15 min", cost: 0, notes: "Confirmed schedule: Astoria departs 5:55 PM, arrives Portland Union Station 9:00 PM." },
          { time: "5:55 PM", name: "Depart Astoria (POINT NorthWest return)", type: "transit", neighborhood: "Intercity bus", duration: "185 min", cost: 0, notes: "Confirmed return leg: Astoria, OR to Portland, OR Union Station (via ART connecting bus 5565), arrives 9:00 PM. Fare already covered in the outbound $40." },
          { time: "9:00 PM", name: "Arrive Portland Union Station + transfer to Hotel Vance", type: "transit", neighborhood: "Union Station -> Hotel Vance", duration: "20 min", cost: 0, notes: "Return transfer. Cost $0 -- covered by the day's $6 TriMet pass." },
          { time: "9:20 PM", name: "Hotel wind-down + early sleep", type: "rest", neighborhood: "Hotel Vance Portland", duration: "9.5 hrs", cost: 0, notes: "Settle in and rest after a full coastal day." }
        ]}
      ]
    },
    {
      id: "day-7",
      isoDate: "2026-11-07",
      date: "Sat, Nov 7",
      city: "Portland",
      title: "Portland Saturday Market + local food",
      theme: "Coffee, market, Sephora browse, and a Portland book-bar night",
      dayTotal: 110,
      weatherPlan: "Saturday Market is outdoor but covered. Keep the afternoon flexible and low-pressure.",
      segments: [
        { label: "Morning", items: [
          { time: "7:45 AM", name: "Wake + prep", type: "rest", neighborhood: "Hotel Vance Portland", duration: "40 min", cost: 0 },
          { time: "8:05 AM", name: "Stumptown coffee + coffee bean buy", type: "coffee", neighborhood: "Downtown Portland", location: "Stumptown Coffee Roasters, 1026 SW Stark St", duration: "30 min", cost: 31, website: "https://www.stumptowncoffee.com/", payment: "Cards accepted", detailText: `Portland flagship coffee stop before the Saturday Market day.\nWebsite: https://www.stumptowncoffee.com/\nOrder: Guatemala El Injerto Bourbon whole-bean bag ($25) plus a 16oz Original Cold Brew ($6).\nEstimated cost: $31.` },
          { time: "8:35 AM", name: "Slow morning reset", type: "rest", neighborhood: "Hotel Vance Portland", duration: "115 min", cost: 0, notes: "Tattoo appointment removed Sep 13, 2026. Keep the morning open before Saturday Market." }
        ]},
        { label: "Afternoon", items: [
          { time: "10:30 AM", name: "Walk/transit to Portland Saturday Market", type: "transit", neighborhood: "Downtown -> Waterfront", duration: "30 min", cost: 0, notes: "Short walk, MAX, or streetcar hop to the waterfront market. Cost left at $0 because no day-pass transit is otherwise needed." },
          { time: "11:00 AM", name: "Portland Saturday Market browse + lunch", type: "activity", neighborhood: "Waterfront", location: "2 SW Naito Pkwy", duration: "120 min", cost: 50, website: "https://www.portlandsaturdaymarket.com/food-vendors-and-partners", payment: "Many vendors prefer cash; some accept cards", detailText: `Waterfront artisan market block with lunch from the food vendors.\nWebsite: https://www.portlandsaturdaymarket.com/food-vendors-and-partners\nPurpose: Shop local makers and graze market food vendors for lunch instead of a sit-down meal.\nPayment: Many vendors prefer cash even when some larger booths take cards.\nEstimated cost: $50 covering lunch and market browsing.` },
          { time: "1:15 PM", name: "Sephora Portland Downtown browse", type: "shopping", neighborhood: "Downtown Portland", location: "Sephora Portland Downtown", duration: "30 min", cost: 0, notes: "Optional perfume browse only. Bleu de Chanel purchase removed Sep 13, 2026; add a new purchase later only if you decide to buy." },
          { time: "1:45 PM", name: "Hotel Vance reset", type: "rest", neighborhood: "Hotel Vance Portland", duration: "195 min", cost: 0, notes: "Keep the afternoon open before Novel Book Bar." }
        ]},
        { label: "Evening", items: [
          { time: "5:00 PM", name: "Novel Book Bar dinner + cocktail + browse", type: "activity", neighborhood: "NW Everett / Pearl edge", location: "Novel Book Bar, Portland", duration: "90 min", cost: 29, website: "https://www.novelmaine.com/menu", payment: "Cards accepted", detailText: `Books, food, and cocktails close to the hotel base. Pretty Ugly Burger dinner removed -- dinner happens here instead so there's no duplicate meal.\nMenu: https://www.novelmaine.com/menu\nOrder: Partly Cloudy ($10) and Carajillo ($14), plus a light food item from the menu (burger $7 / salad $10 / salmon $15) to cover dinner.\nEstimated cost: $10 + $14 + $4.50 tip = $29 (add ~$8-15 more if ordering a full food item; kept at $29 baseline).` },
          { time: "7:45 PM", name: "Wind-down", type: "rest", neighborhood: "Hotel Vance Portland", duration: "12 hrs", cost: 0 }
        ]}
      ]
    },
    {
      id: "day-8",
      isoDate: "2026-11-08",
      date: "Sun, Nov 8",
      city: "Portland",
      title: "Rest day + Cartopia food carts",
      theme: "Light day: brunch-time Cartopia and easy transit only",
      dayTotal: 59,
      weatherPlan: "Indoor-friendly, low-effort day by design -- no hiking or long outdoor exposure needed.",
      segments: [
        { label: "Morning", items: [
          { time: "9:00 AM", name: "Sleep in + slow morning", type: "rest", neighborhood: "Hotel Vance Portland", duration: "90 min", cost: 0, notes: "No heavy activity today -- keep it light and easy." },
          { time: "10:30 AM", name: "Light hotel-area transit loop", type: "transit", neighborhood: "Downtown Portland", duration: "25 min", cost: 0, notes: "Easy short MAX/bus loop, nothing strenuous. Cost $0 -- covered by the day's $6 TriMet pass." }
        ]},
        { label: "Daytime", items: [
          { time: "11:30 AM", name: "Transit to Cartopia food carts", type: "transit", neighborhood: "Hotel Vance -> SE Hawthorne (Cartopia)", duration: "20 min", cost: 6, notes: "Short trip out for a brunch-time visit. First TriMet-system ride of Day 8 -- flat $6 day-pass charge." },
          { time: "12:00 PM", name: "Cartopia food cart pod brunch", type: "meal", neighborhood: "SE Hawthorne", location: "Cartopia Food Carts, 1207 SE Hawthorne Blvd, Portland, OR 97214", duration: "90 min", cost: 50, website: "https://www.cartopiapdx.com/carts", payment: "Cash preferred", detailText: `Portland's largest food cart cluster, visited at brunch time to keep the day light.\nCart directory: https://www.cartopiapdx.com/carts\nORDER: Bing Mi (Potato Champion's poutine cart neighbor) or Pyro Pizza's wood-fired pizza by the slice, plus a BKK pad thai order from Bing Bing if you want to split two carts.\nEstimated cost: $50.\nPayment: Bring cash; not all carts accept cards.` }
        ]},
        { label: "Evening", items: [
          { time: "1:30 PM", name: "Transit back to Hotel Vance", type: "transit", neighborhood: "SE Hawthorne -> Hotel Vance", duration: "20 min", cost: 0, notes: "Return transfer. Cost $0 -- covered by the day's $6 TriMet pass." },
          { time: "2:00 PM", name: "Hotel Vance rest afternoon", type: "rest", neighborhood: "Hotel Vance Portland", duration: "6 hrs", cost: 0, notes: "Keep the rest of the day unstructured -- rest, recover, pack for tomorrow's flight." },
          { time: "8:00 PM", name: "Early wind-down + sleep", type: "rest", neighborhood: "Hotel Vance Portland", duration: "11 hrs", cost: 0, notes: "Full recovery night before the flight day." }
        ]}
      ]
    },
    {
      id: "day-9",
      isoDate: "2026-11-09",
      date: "Mon, Nov 9",
      city: "Portland",
      title: "Final breakfast and departure",
      theme: "Departure-safe pacing",
      dayTotal: 37,
      weatherPlan: "Protect airport timeline; later 2:34 PM departure allows a relaxed final morning.",
      segments: [
        { label: "Morning", items: [
          { time: "8:05 AM", name: "Wake + final packing", type: "rest", neighborhood: "Hotel Vance Portland", duration: "60 min", cost: 0 },
          { time: "9:05 AM", name: "Hotel Vance breakfast", type: "meal", neighborhood: "Downtown Portland", location: "Hotel Vance, Vance & Vine", duration: "60 min", cost: 31, website: "https://www.hotelvance.com/resourcefiles/pdf/vance-and-vine-breakfast-menu.pdf", payment: "Cards accepted", detailText: `Final morning breakfast at the hotel before checkout.\nMenu: https://www.hotelvance.com/resourcefiles/pdf/vance-and-vine-breakfast-menu.pdf\nOrder: Breakfast sandwich (bacon or sausage, egg, cheese, spicy aioli) plus a mimosa or bloody mary if you want one.\nEstimated cost: $31.` },
          { time: "10:05 AM", name: "Hotel Vance final transit loop", type: "transit", neighborhood: "Downtown Portland", duration: "60 min", cost: 6, notes: "Short final MAX/transit loop. First (and only) TriMet-system ride of Day 9 -- flat $6 day-pass charge. Morning shifted 55 min earlier (Aug 15, 2026) to fit the 3 hr PDX arrival buffer without overlap." },
          { time: "11:05 AM", name: "Checkout + transfer to PDX", type: "transit", neighborhood: "Hotel Vance -> PDX", duration: "29 min", cost: 0, notes: "Leave the hotel by about 11:05 AM to be inside PDX by 11:34 AM, a 3 hr buffer ahead of the 2:34 PM domestic departure. Cost $0 -- covered by the day's $6 TriMet pass (claimed by the earlier final transit loop)." },
          { time: "11:34 AM", name: "Airport check-in and security buffer", type: "rest", neighborhood: "PDX", duration: "180 min", cost: 0 }
        ]},
        { label: "Departure", items: [
          { time: "2:34 PM", name: "Flight PDX -> DFW", type: "transit", neighborhood: "Air travel", duration: "5h 55m", cost: 0, notes: "AA 2496, Economy, seat 8F. Airfare tracked separately from activity budget." },
          { time: "8:29 PM", name: "DFW layover buffer", type: "rest", neighborhood: "DFW", duration: "121 min", cost: 0, notes: "2h 01m connection at DFW." },
          { time: "10:30 PM", name: "Flight DFW -> CRP", type: "transit", neighborhood: "Air travel", duration: "1h 28m", cost: 0, notes: "AA 5273, Economy, seat 8F, operated by PSA Airlines as American Eagle." },
          { time: "11:58 PM", name: "Arrival and end-of-trip recovery", type: "rest", neighborhood: "Corpus Christi", duration: "N/A", cost: 0 }
        ]}
      ]
    }
  ],
  guides: {
    dayTrips: [
      {
        name: "Cannon Beach / Haystack Rock (Day 6, Fri Nov 6)",
        transitProvider: "POINT NorthWest, an Amtrak Thruway bus partner run by Oregon-Point. Year-round service, no group minimum required.",
        howToBook: "Book at oregon-point.com/routes/northwest, at an Amtrak ticket kiosk, or by phone at 1-800-872-7245.",
        departure: "Depart Portland Union Station (800 NW 6th Ave) westbound at 8:28 AM, arriving Astoria at 11:46 AM (connecting bus 5500), then on to Cannon Beach.",
        onceThere: "The bus stops at 1170 S Hemlock St in downtown Cannon Beach, a short walk from Haystack Rock at Tolovana Beach State Recreation Site. No admission fee -- it is public land, open 24/7.",
        tidePools: "Tide-pool access around the base of Haystack Rock depends on low tide. Check NOAA tide tables for November 6, 2026 (noaa.gov or tide-forecast.com) closer to the trip and time the walk for a couple hours around the lowest tide.",
        returnCaveat: "Confirmed: return bus departs Astoria at 5:55 PM (connecting bus 5565), arriving Portland Union Station at 9:00 PM.",
        budgetForTheDay: "$40 confirmed round-trip fare plus $100 for lunch, coffee, and a cocktail in town, all already built into the Day 6 itinerary and the Transportation/Food budget lines.",
        link: "https://oregon-point.com/routes/northwest"
      }
    ],
    reservations: [
      { name: "Poquitos Capitol Hill", status: "Recommended", note: "Reserve only if you want certainty after arrival; otherwise use Ocho Hour as a flexible walk-in dinner.", link: "https://www.vivapoquitos.com/" }
    ],
    photoOps: [
      { name: "Seattle Waterfront photo loop", city: "Seattle", day: "Day 2", subject: "Ferris wheel, waterfront stairs, and Olympic Sculpture Park skyline frames", block: "25 min", budget: "Free", link: "https://www.google.com/maps/search/Seattle+Waterfront+Olympic+Sculpture+Park" },
      { name: "Pike Place Market sign and arcade", city: "Seattle", day: "Day 2", subject: "Market sign, arcade, and first fish-market row", block: "Built into the route", budget: "Free", link: "https://www.pikeplacemarket.org/about-pike-place-market/plan-your-visit/" },
      { name: "Apple Pioneer Place facade", city: "Portland", day: "Day 5", subject: "Apple frontage, Pioneer Place atrium, and downtown retail geometry", block: "35 min", budget: "Free", link: "https://www.apple.com/retail/pioneerplace/" },
      { name: "Powell's interior", city: "Portland", day: "Day 6-8", subject: "Gold Room, Blue Room, and main bookstore stacks", block: "During the bookstore stop", budget: "Free", link: "https://www.travelportland.com/attractions/powells/" }
    ],
    happyHour: [
      { name: "Saint John's Bar and Eatery", city: "Seattle", deal: "Official happy hour runs Mon-Fri 2 PM-6 PM, with Rainier at $2, sangria/cava at $3, house wine at $4, Lemon-Aid Kit or Dickel Sweet Tea at $5, margaritas at $6, and discounted food.", drink: "Use this as the lower-cost arrival-night bar instead of Canon.", link: "https://www.saintjohnsseattle.com/happyhour-v1" },
      { name: "Poquitos Capitol Hill", city: "Seattle", deal: "Official Ocho Hour: $8 select tacos, nachos, margaritas, beer, wine, and more.", drink: "Best Capitol Hill dinner-and-drink value if timing lines up and the strongest two-cocktail budget fit in Seattle.", link: "https://www.vivapoquitos.com/" },
      { name: "Nue", city: "Seattle", deal: "Official happy-hour page lists discounted food/drink specials, but it is not defaulted because Biang Biang/Menya/Kajiken are more budget-direct.", drink: "Use if you want more adventurous food and can accept a higher dinner total.", link: "https://www.nueseattle.com/happy-hour" },
      { name: "Stoup Brewing Capitol Hill", city: "Seattle", deal: "Happy hour not verified from an official current price page; treat it as a beer/food-truck alternate, not default spend.", drink: "Good weather-friendly beer backup near Capitol Hill.", link: "https://www.stoupbrewing.com/capitol-hill/" },
      { name: "Novel Book Bar", city: "Portland", deal: "No happy hour verified yet; the user-shared sample menu points to cocktails around $15, wine $14-$15, beer $6, and coffee about $4.25-$6.50.", drink: "Great Portland book-bar vibe stop, but better for one drink or coffee-plus-browse than a strict two-cocktail budget play.", link: "https://www.instagram.com/novelpdx/" },
      { name: "Rontoms", city: "Portland", deal: "Daily 3-6:30 PM; $1 off draughts, house wines, wells; $10 HH food.", drink: "Use full-price fruity cocktails plus the $10 Caesar if you want the stop to match the new two-cocktail plan.", link: "https://www.rontoms.net/menu-1" },
      { name: "Life of Pie", city: "Portland", deal: "Daily 11 AM-6 PM; $9 dine-in Margherita, $6 house beer/wine.", drink: "House wine/beer only if desired.", link: "https://lifeofpiepizza.com/" }
    ],
    coffee: [
      { name: "Pike Place Starbucks", city: "Seattle", day: "Day 2", buy: "Seattle bag + city mug souvenir combo", roast: "Iconic Seattle location, renovated, fresh beans.", budget: "$15-18 bean bag + mug combo with tax/tip.", link: "https://www.pikeplacemarket.org/about-pike-place-market/plan-your-visit/" },
      { name: "Seattle Best Tea - Chinatown International District", city: "Seattle", day: "Day 2", buy: "Quick tea or matcha stop", roast: "Best indoor tea break if you want a warm stop after Pike Place.", budget: "$9.", link: "https://seattlebesttea.com/" },
      { name: "Pegasus Coffee House", city: "Bainbridge Island", day: "Day 3", buy: "Coffee stop only if you skip the Seattle bean on Day 2", roast: "Island specialty coffee, fresh roast.", budget: "Treat as an optional swap, not an extra bean buy.", link: "https://pegasuscoffeehouse.com/" },
      { name: "Stumptown Downtown", city: "Portland", day: "Day 7", buy: "Portland bag + breakfast", roast: "Classic Portland specialty, 128 SW 3rd Ave.", budget: "$20-24 bean bag included in Day 7 breakfast cost.", link: "https://www.stumptowncoffee.com/pages/portland-downtown-cafe" },
      { name: "Portland Cà Phê rose matcha", city: "Portland", day: "Day 7", buy: "Rose matcha or matcha latte", roast: "Best short Portland matcha stop with an indoor pull and a clear official site.", budget: "$10.", link: "https://portlandcaphe.com/" },
      { name: "Stumptown Downtown", city: "Portland", day: "Day 8", buy: "Repeat breakfast only", roast: "Second visit for breakfast or espresso, not a second Portland bean buy.", budget: "Keep this as food-and-coffee pacing only.", link: "https://www.stumptowncoffee.com/pages/portland-downtown-cafe" }
    ],
    souvenirs: [
      { name: "Starbucks Seattle city mug", location: "Pike Place Starbucks", cost: "$16-18", notes: "Iconic Seattle mug, comes with one coffee included (Day 2)." },
      { name: "Starbucks Portland city mug", location: "Downtown Portland or airport", cost: "$14-16", notes: "Portland-specific mug, tax-free Oregon." },
      { name: "Seattle reference magnet", location: "Pike Place Market or gift shops", cost: "$8-10", notes: "Small Space Needle or iconic Seattle magnet." },
      { name: "Portland reference magnet", location: "Powell's or downtown shops", cost: "$8-10", notes: "Small Portland Bridge or iconic Portland magnet." },
      { name: "Pike Place salmon jerky", location: "Pike Place Market - Wild King stand", cost: "$18-25", notes: "Premium smoked salmon jerky, #1 seller at Pike Place." },
      { name: "TOTAL SOUVENIRS BUDGET", category: "Guides", budget: "$68-83", notes: "Flexible category; all items priced explicitly. Included in $92 souvenir category budget." }
    ],
    rainyDay: [
      "Seattle: Pike Place Market, Seattle Art Museum, Amazon Spheres exterior/photo stop, coffee crawl near Capitol Hill.",
      "Seattle: Replace Bainbridge with UW libraries or a Capitol Hill coffee crawl if weather makes the island block feel too exposed.",
      "Portland: Powell's, Made Here, Hotel Vance/Pearl District coffee blocks, and indoor food carts/beer garden."
    ],
    packing: [
      "Waterproof shell with hood, not just an umbrella.",
      "Water-resistant walking shoes already broken in.",
      "Small packable tote for two coffee bean bags and market purchases.",
      "Portable battery for maps and transit apps.",
      "Layers: early November can swing from damp/chilly mornings to mild afternoons."
    ]
  },
  exclusions: [
    { name: "Space Needle", reason: "Excluded for value. Columbia Center gives a higher public view for a more efficient downtown route.", bestDay: "day-2", alternateType: "sightseeing", alternateFor: "Columbia Center Sky View Observatory", estimatedCost: 42, neighborhood: "Seattle Center", duration: "90 min", bestTime: "Late afternoon if the icon matters more than budget efficiency.", notes: "Best as a skyline-icon swap, not an add-on.", route: "https://www.google.com/maps/dir/Pike+Place+Market/Space+Needle+Seattle", website: "https://www.spaceneedle.com/" },
    { name: "Seattle Ferris Wheel", reason: "Touristy and redundant after Sky View; use waterfront walk instead.", bestDay: "day-2", alternateType: "sightseeing", alternateFor: "Seattle Waterfront + Olympic Sculpture Park", estimatedCost: 22, neighborhood: "Waterfront", duration: "45 min", bestTime: "Midday if weather is clear and you want a shorter paid tourist stop.", notes: "Photo-forward backup, not the best value.", route: "https://www.google.com/maps/dir/Pike+Place+Market/Seattle+Great+Wheel", website: "https://seattlegreatwheel.com/" },
    { name: "MOHAI Freedom Plane exhibit", reason: "Useful current Seattle add if you want one museum block with advance timed reservations; keep it as a Seattle Center detour instead of forcing it into the Pike Place day.", bestDay: "day-4", alternateType: "sightseeing", alternateFor: "Ballard + Fremont + sunset view", estimatedCost: 0, neighborhood: "Seattle Center", duration: "90 min", bestTime: "Midday if you want one indoor history stop between neighborhood days.", notes: "Reserve ahead if the special exhibit is still running; use this only as a curated add-on, not a default city anchor.", route: "https://www.google.com/maps/dir/Palihotel+Seattle/Museum+of+History+%26+Industry+Seattle", website: "https://www.mohai.org/" },
    { name: "The Pink Door", reason: "Still excluded because the revised plan intentionally favors AYCE sushi and cheaper Seattle meals over another destination dinner.", bestDay: "day-3", alternateType: "food", alternateFor: "Sushi% AYCE Seattle premium dinner", estimatedCost: 58, neighborhood: "Pike Place", duration: "90 min", bestTime: "Dinner if atmosphere matters more than the AYCE-first sushi preference.", notes: "Use this only if you intentionally undo the AYCE-first budget shift.", route: "https://www.google.com/maps/dir/Madrona+Arms+Seattle/The+Pink+Door+Seattle", website: "https://www.thepinkdoor.net/" },
    { name: "Carkeek Park", reason: "Too far north for this short Seattle stay unless replacing Bainbridge.", bestDay: "day-3", alternateType: "sightseeing", alternateFor: "Bainbridge Island ferry + Winslow", estimatedCost: 6, neighborhood: "North Seattle", duration: "2 hr", bestTime: "Daylight hours if ferry conditions make Bainbridge feel too ambitious.", notes: "Nature-heavy fallback with less transfer friction.", route: "https://www.google.com/maps/dir/Palihotel+Seattle/Carkeek+Park+Seattle", website: "https://www.seattle.gov/parks/allparks/carkeek-park" },
    { name: "Great American Diner & Bar", reason: "Corrected as a West Seattle diner, but still excluded from the default route because it adds transit time and pulls you off the central walking plan.", bestDay: "day-2", alternateType: "food", alternateFor: "Seattle Waterfront + Olympic Sculpture Park", estimatedCost: 24, neighborhood: "West Seattle Junction", duration: "90 min", bestTime: "Brunch or lunch only if you intentionally pivot the day toward West Seattle.", notes: "Geography corrected from generic Seattle to West Seattle; keep it as an intentional detour, not a default stop.", route: "https://www.google.com/maps/dir/Palihotel+Seattle/Great+American+Diner+and+Bar+Seattle", website: "https://www.greatamericandinerandbar.com/" },
    { name: "Madrona Arms", reason: "Useful two-cocktail Seattle backup, but it was moved off the default route to keep the overall trip under the $800 target after adding AYCE sushi and Bainbridge lunch/souvenir spending.", bestDay: "day-3", alternateType: "cocktails", alternateFor: "Sushi% AYCE Seattle premium dinner", estimatedCost: 44, neighborhood: "Madrona", duration: "60 min", bestTime: "Early evening after the Japanese Garden if you want an extra Seattle cocktail block.", notes: "Best if you intentionally choose more nightlife and accept the higher total.", route: "https://www.google.com/maps/dir/Seattle+Japanese+Garden/Madrona+Arms+Seattle", website: "https://www.madronaarms.com/" },
    { name: "Tacos Chukis - Capitol Hill", reason: "Still a strong cheap meal, but Poquitos, Biang Biang, and Menya/Kajiken were prioritized because they came from the new saved-list route.", bestDay: "day-1", alternateType: "food", alternateFor: "Poquitos Capitol Hill", estimatedCost: 15, neighborhood: "Capitol Hill", duration: "45 min", bestTime: "Any quick dinner when you want the lowest-cost Capitol Hill option.", notes: "Keep as the budget rescue if Poquitos or noodle spots are crowded.", route: "https://www.google.com/maps/dir/Palihotel+Seattle/Tacos+Chukis+Capitol+Hill+Seattle", website: "https://www.seattlechukis.com/" },
    { name: "Nue", reason: "Published happy hour exists, but the default Seattle route now favors cheaper Capitol Hill noodles and lower-cost happy-hour meals.", bestDay: "day-2", alternateType: "food", alternateFor: "Biang Biang Noodles - Capitol Hill", estimatedCost: 32, neighborhood: "Capitol Hill", duration: "60-75 min", bestTime: "Happy hour if you want a more adventurous food stop.", notes: "Use only if you intentionally trade some contingency for a more distinctive dinner.", route: "https://www.google.com/maps/dir/Palihotel+Seattle/Nue+Seattle", website: "https://www.nueseattle.com/happy-hour" },
    { name: "Stoup Brewing Capitol Hill", reason: "Good saved-list beer stop, but current official happy-hour price details were not verified and it would add another drink block.", bestDay: "day-2", alternateType: "cocktails", alternateFor: "Salt & Straw Capitol Hill", estimatedCost: 18, neighborhood: "Capitol Hill", duration: "45-60 min", bestTime: "Early evening if you want beer instead of dessert.", notes: "Food-truck availability can change; confirm the day-of truck before relying on this as dinner.", route: "https://www.google.com/maps/dir/Salt+and+Straw+Capitol+Hill+Seattle/Stoup+Brewing+Capitol+Hill", website: "https://www.stoupbrewing.com/capitol-hill/" },
    { name: "Dave's Hot Chicken Capitol Hill", reason: "Useful chain backup, but it overlaps with the saved-list cheap-meal lane already covered by Biang Biang, Menya/Kajiken, Dick's, and Tacos Chukis.", bestDay: "day-2", alternateType: "food", alternateFor: "Biang Biang Noodles - Capitol Hill", estimatedCost: 17, neighborhood: "Capitol Hill", duration: "35-45 min", bestTime: "Late dinner or spicy-food backup.", notes: "Counter-service tip can stay 0-10%.", route: "https://www.google.com/maps/dir/Palihotel+Seattle/Dave's+Hot+Chicken+Capitol+Hill+Seattle", website: "https://www.daveshotchicken.com/" },
    { name: "Koko's Restaurant Seattle", reason: "Saved-list Capitol Hill option, but current happy-hour pricing was not verified strongly enough to replace Saint John's or Poquitos.", bestDay: "day-1", alternateType: "food", alternateFor: "Poquitos Capitol Hill", estimatedCost: 28, neighborhood: "Capitol Hill", duration: "60 min", bestTime: "Dinner if you want to swap away from Poquitos.", notes: "Confirm current menu and exact location before making it default.", route: "https://www.google.com/maps/search/Koko's+Restaurant+Seattle+Capitol+Hill", website: "https://www.google.com/maps/search/Koko's+Restaurant+Seattle+Capitol+Hill" },
    { name: "Dick's Drive-In Broadway", reason: "Great cheap late-night backup, but not a full default dinner because Poquitos and noodle stops create better sit-down structure.", bestDay: "day-1", alternateType: "food", alternateFor: "Poquitos Capitol Hill", estimatedCost: 10, neighborhood: "Capitol Hill", duration: "20-30 min", bestTime: "Late-night burger/fries backup near the hotel.", notes: "Confirmed interpretation of `dicks dive-in`.", route: "https://www.google.com/maps/dir/Palihotel+Seattle/Dick's+Drive-In+Broadway+Seattle", website: "https://www.ddir.com/" },
    { name: "Espresso Vivace South Lake Union", reason: "Excellent coffee, but South Lake Union is a detour compared with Victrola, Tailwind, and Phê near the hotel.", bestDay: "day-4", alternateType: "coffee", alternateFor: "Phê Vietnamese coffee or Victrola backup", estimatedCost: 8, neighborhood: "South Lake Union", duration: "45 min plus transit", bestTime: "Only if you intentionally add a South Lake Union walk.", notes: "Keep as a coffee-quality detour, not the hotel-adjacent default.", route: "https://www.google.com/maps/dir/Palihotel+Seattle/Espresso+Vivace+South+Lake+Union+Seattle", website: "https://espressovivace.com/" },
    { name: "Gearhouse coffee shop", reason: "Could not be placed as cleanly in the Capitol Hill hotel route as Tailwind, Victrola, or Phê, so it stays a backup until exact saved-list pin is confirmed.", bestDay: "day-4", alternateType: "coffee", alternateFor: "Phê Vietnamese coffee or Victrola backup", estimatedCost: 8, neighborhood: "Seattle", duration: "45 min", bestTime: "Only if the saved Google Maps pin confirms it is nearby.", notes: "Do not invent a default route around an uncertain pin.", route: "https://www.google.com/maps/search/Gearhouse+coffee+shop+Seattle", website: "https://www.google.com/maps/search/Gearhouse+coffee+shop+Seattle" },
    { name: "Seattle Best Tea - Chinatown International District", reason: "Best fit for your rainy November rule if you want a short indoor tea break instead of another museum or long outdoor block.", bestDay: "day-2", alternateType: "coffee", alternateFor: "Ghost Alley Espresso (coffee to-go before Northgate)", estimatedCost: 9, neighborhood: "Chinatown International District", duration: "35 min", bestTime: "Mid-afternoon or any day you want a warm, low-strain tea stop after Pike Place.", notes: "Good if you want matcha/tea-adjacent drinks and a quick public-transit-friendly stop rather than a full cafe detour.", route: "https://www.google.com/maps/dir/Pike+Place+Market/Seattle+Best+Tea+506+S+King+St+Seattle", website: "https://seattlebesttea.com/" },
    { name: "Harbour Public House", reason: "Strong Bainbridge pub alternate, but the selected island day is breakfast-first and not a lunch pub crawl.", bestDay: "day-3", alternateType: "food", alternateFor: "Madison Diner breakfast", estimatedCost: 30, neighborhood: "Bainbridge Island", duration: "75 min", bestTime: "Lunch if you choose the pub-day version instead of Madison Diner.", notes: "Happy-hour pricing should be rechecked before replacing the breakfast route.", route: "https://www.google.com/maps/dir/Waterfront+Park+and+City+Dock+Bainbridge+Island/Harbour+Public+House+Bainbridge+Island", website: "https://harbourpub.com/HTMLSite/Menu.html" },
    { name: "Bruciato", reason: "Good Bainbridge pizza/bar alternate, but it fits a lunch-pub island day better than the chosen breakfast-first plan.", bestDay: "day-3", alternateType: "food", alternateFor: "Madison Diner breakfast", estimatedCost: 28, neighborhood: "Bainbridge Island", duration: "75 min", bestTime: "Lunch if you want pizza instead of diner breakfast.", notes: "Happy-hour pricing not treated as verified default spend.", route: "https://www.google.com/maps/dir/Waterfront+Park+and+City+Dock+Bainbridge+Island/Bruciato+Bainbridge+Island", website: "https://www.pizzeriabruciato.com/" },
    { name: "Cups Espresso & Cafe", reason: "Bainbridge coffee backup, but Pegasus and Commuter Comforts create a cleaner ferry-terminal loop.", bestDay: "day-3", alternateType: "coffee", alternateFor: "Pegasus Coffee House or Commuter Comforts", estimatedCost: 7, neighborhood: "Bainbridge Island", duration: "30 min", bestTime: "If Pegasus is crowded or closed.", notes: "Use as a same-role coffee substitute.", route: "https://www.google.com/maps/search/Cups+Espresso+Cafe+Bainbridge+Island", website: "https://www.google.com/maps/search/Cups+Espresso+Cafe+Bainbridge+Island" },
    { name: "Seasmith", reason: "Bainbridge saved-list coffee/food candidate, but it was not needed once Madison Diner plus Pegasus/Commuter Comforts covered breakfast and coffee.", bestDay: "day-3", alternateType: "coffee", alternateFor: "Pegasus Coffee House or Commuter Comforts", estimatedCost: 9, neighborhood: "Bainbridge Island", duration: "35 min", bestTime: "Use only if the ferry timing pushes you toward a different Winslow cafe.", notes: "Same-route substitute, not an add-on.", route: "https://www.google.com/maps/search/Seasmith+Bainbridge+Island", website: "https://www.google.com/maps/search/Seasmith+Bainbridge+Island" },
    { name: "Seattle Streetcar / 3303 S Bond Ave item", reason: "Address appears Portland South Waterfront/OHSU related, not Seattle. Excluded as cross-city data error.", bestDay: "day-5", alternateType: "transit", alternateFor: "Washington Park + Portland Japanese Garden", estimatedCost: 3, neighborhood: "South Waterfront / OHSU", duration: "45 min", bestTime: "Use only if you pivot a Portland day toward South Waterfront instead of Washington Park.", notes: "Kept as labeled backup because the original source mixed city data.", route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/3303+S+Bond+Ave+Portland", website: "https://www.google.com/maps/search/3303+S+Bond+Ave+Portland" },
    { name: "Daily Cafe / Summit Cafe at OHSU", reason: "Portland/OHSU items mistakenly listed under Seattle; not used in Seattle routing.", bestDay: "day-5", alternateType: "coffee", alternateFor: "Fuller's Coffee Shop or Stumptown Downtown", estimatedCost: 8, neighborhood: "South Waterfront / OHSU", duration: "45 min", bestTime: "Morning if you want a quieter coffee detour instead of central downtown.", notes: "Useful only if already heading toward OHSU or the tram area.", route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/OHSU+Portland", website: "https://www.google.com/maps/search/OHSU+Cafe+Portland" },
    { name: "Depoe Bay", reason: "Full-day coastal trip, car/tour cost, and weather risk are still too high for the $800 target.", bestDay: "day-8", alternateType: "sightseeing", alternateFor: "Alberta Arts / Mississippi backup loop", estimatedCost: 120, neighborhood: "Oregon Coast", duration: "Full day", bestTime: "Only if you are willing to replace most of the day and treat it as a major splurge.", notes: "Beautiful coast option, but it breaks the transit-first short-trip logic.", route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/Depoe+Bay+Oregon", website: "https://www.oregoncoast.org/cities/depoe-bay/" },
    { name: "Multnomah Falls via Viator", reason: "Good alternate tour, but paid tour consumes too much budget. Add only if replacing Portland Japanese Garden or one of the default downtown food blocks.", bestDay: "day-5", alternateType: "sightseeing", alternateFor: "Washington Park + Portland Japanese Garden", estimatedCost: 89, neighborhood: "Columbia River Gorge", duration: "4-5 hr", bestTime: "Morning if you decide to replace one major Portland city anchor with a gorge trip.", notes: "Best as a full substitution, not an add-on.", route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/Multnomah+Falls", website: "https://www.google.com/maps/search/Multnomah+Falls+tour+Portland" },
    { name: "Sumo Sushi & Grill AYCE Seattle", reason: "Verified Seattle location and official AYCE tiers exist, but dinner pricing rises fast and the U District detour makes it weaker than Tacos Chukis or Sushi% for the base plan.", bestDay: "day-4", alternateType: "food", alternateFor: "Glo's Capitol Hill breakfast", estimatedCost: 26, neighborhood: "University District", duration: "90 min", bestTime: "Lunch is the real value play; dinner pushes much closer to splurge territory.", notes: "Official Seattle page listed Silver lunch at $19.95 and Gold lunch at $22.95 before tax and tip; dinner tiers run materially higher.", route: "https://www.google.com/maps/dir/Palihotel+Seattle/Sumo+Sushi+and+Grill+AYCE+Seattle", website: "https://www.sumoayce.com/location" },
    { name: "Sumo Sushi & Grill AYCE Oregon City", reason: "AYCE still fits the older sushi rule, but the Oregon City detour is too far from central Portland once route realism matters more than unlimited sushi.", bestDay: "day-8", alternateType: "food", alternateFor: "Hana Sushi and Izakaya Pearl dinner", estimatedCost: 42, neighborhood: "Oregon City", duration: "2.5-3 hr including detour time", bestTime: "Use only if you intentionally want to trade a smoother Pearl District evening for a longer AYCE-focused dinner detour.", notes: "No longer the default because it eats too much time and distance on the final full Portland day.", route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/Sumo+Sushi+%26+Grill+AYCE+Oregon+City/Hotel+Vance+Portland", website: "https://www.sumoayce.com/oregoncity" },
    { name: "Novel Book Bar", reason: "Strong Portland add near Hotel Vance Portland with real books, coffee, cocktails, and lighter food, but the user-shared menu points to $15 cocktails so it works better as a one-drink or coffee-plus-browse stop than as a strict two-cocktail budget play.", bestDay: "day-7", alternateType: "cocktails", alternateFor: "Tope or rooftop backup near downtown", estimatedCost: 24, neighborhood: "NW Everett / Pearl edge", duration: "60-90 min", bestTime: "Early evening if you want a close-in Portland social stop with more personality than a generic bar.", notes: "Sample menu the user shared: espresso/americano $4.25, latte $5.25, vanilla latte $5.75, mocha or Spanish latte $6.50, cocktails $15, wine $14-$15, beer $6, burger $7, fries $4, pretzel $5, salad $10, salmon $15.", route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/Novel+Book+Bar+Portland", website: "https://www.instagram.com/novelpdx/" },
    { name: "Rontoms", reason: "Strong patio cocktail option, but it was moved off the default trip because the two-cocktail-plus-food version pushes the budget too far once Portland AYCE sushi stays active.", bestDay: "day-6", alternateType: "cocktails", alternateFor: "Belmont / Mississippi browse + Nate's Oatmeal Cookies", estimatedCost: 42, neighborhood: "East Burnside", duration: "75 min", bestTime: "3-6:30 PM happy hour if you want an extra Portland bar stop.", notes: "Good add-back if you intentionally trade some contingency or souvenir room for another cocktail night.", route: "https://www.google.com/maps/dir/North+Mississippi+Avenue+Portland/Rontoms+Portland", website: "https://www.rontoms.net/" },
    { name: "The Grotto", reason: "Interesting but east of the core route; use only as rainy/reflective backup if skipping Washington Park.", bestDay: "day-5", alternateType: "sightseeing", alternateFor: "Washington Park + Portland Japanese Garden", estimatedCost: 10, neighborhood: "Northeast Portland", duration: "90 min", bestTime: "Light-rain morning or reflective backup day.", notes: "Quieter spiritual-site fallback if you want a lower-key Portland day.", route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/The+Grotto+Portland", website: "https://thegrotto.org/" },
    { name: "Portland 4T Loop", reason: "Current Portland add if you want a more active urban-day option that mixes trail, tram, trolley, and train instead of another static sightseeing stop.", bestDay: "day-6", alternateType: "sightseeing", alternateFor: "Portland Japanese Garden", estimatedCost: 8, neighborhood: "West Portland / OHSU", duration: "3 hr", bestTime: "Morning to early afternoon on a clear day.", notes: "Best as a route-day swap when you want a more mobile city experience and can trade one museum/garden block for transit variety.", route: "https://www.google.com/maps/search/4T+loop+Portland", website: "https://www.axios.com/local/portland/2025/11/03/portland-4t-trail-loop" },
    { name: "Portland Cà Phê rose matcha", reason: "Best fit for a short Portland matcha stop with an official site and a drink menu that clearly includes rose matcha.", bestDay: "day-7", alternateType: "coffee", alternateFor: "Stumptown Downtown breakfast + coffee bean #3", estimatedCost: 10, neighborhood: "Central Eastside", duration: "35 min", bestTime: "Late morning or mid-afternoon when you want one indoor tea break instead of a second bookstore stop.", notes: "Keep it as a standalone drink block; do not turn it into another long food stop.", route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/Portland+C%C3%A0+Ph%C3%AA+Portland", website: "https://portlandcaphe.com/" },
    { name: "Duplicate chains/branches", reason: "Only closest or strategically useful branch is recommended to avoid itinerary clutter.", bestDay: "day-8", alternateType: "coffee", alternateFor: "Heart Coffee or Good Coffee", estimatedCost: 7, neighborhood: "Both cities", duration: "30-45 min", bestTime: "Any time a listed default branch has lines or awkward routing.", notes: "Treat this as a policy reminder: nearest good branch can substitute without changing the spirit of the day.", route: "https://www.google.com/maps/search/coffee+near+Hotel+Vance+Portland", website: "https://www.google.com/maps/search/coffee+shops+Portland" }
  ],
  sources: [
    { label: "Seattle Streetcar fares", url: "https://www.seattle.gov/transportation/getting-around/transit/streetcar/fares-and-orca-card" },
    { label: "Washington State Ferries fares", url: "https://wsdot.wa.gov/ferries/fares/Default.aspx" },
    { label: "Washington State Transportation Commission ferry fare changes", url: "https://wstc.wa.gov/news/2025/08/06/new-fares-for-washington-state-ferries-approved/" },
    { label: "TriMet fares", url: "https://go.trimet.org/fares/index.htm" },
    { label: "Wise USD to PHP rate", url: "https://wise.com/us/currency-converter/usd-to-php-rate" },
    { label: "Wise PHP history for May 9, 2026", url: "https://wise.com/us/currency-converter/currencies/php-philippine-peso/history" },
    { label: "American Airlines flight status", url: "https://www.aa.com/travelInformation/flights/status" },
    { label: "Asiana Airlines main status portal", url: "https://flyasiana.com/C/US/EN/index" },
    { label: "Portland International Airport flight board", url: "https://www.flypdx.com/Flights#/arrivals-and-departures" },
    { label: "Seattle-Tacoma International Airport flight status", url: "https://www.portseattle.org/sea-tac/flight-status" },
    { label: "DFW Airport flight board", url: "https://www.dfwairport.com/flights/" },
    { label: "Philippine Airlines Z8RAML ticket receipt", url: "../assets/docs/philippine-airlines-z8raml-ticket-receipt.pdf" },
    { label: "Pike Place Market visit info", url: "https://www.pikeplacemarket.org/about-pike-place-market/plan-your-visit/" },
    { label: "Sailing Seattle sails", url: "https://sailingseattle.com/sails" },
    { label: "Sky View Observatory hours/directions", url: "https://skyviewobservatory.com/location/" },
    { label: "Sky View bar menu PDF", url: "https://www.skyviewobservatory.com/wp-content/themes/skyview/assets/images/cafe/SVO_Menu_Book_2022.pdf" },
    { label: "Seattle Japanese Garden / UW Botanic Gardens", url: "https://botanicgardens.uw.edu/washington-park-arboretum/gardens/japanese-garden/" },
    { label: "Canon official site", url: "https://www.canonseattle.com/" },
    { label: "Canon average cocktail price", url: "https://www.theworlds50best.com/discovery/Establishments/US/Seattle/Canon.html" },
    { label: "Canon food menu reference", url: "https://www.allmenus.com/wa/seattle/369111-canon/menu/" },
    { label: "Madrona Arms official cocktail menu", url: "https://www.madronaarms.com/menu" },
    { label: "Madrona Arms food menu reference", url: "https://www.allmenus.com/wa/seattle/671643-madrona-arms/menu/" },
    { label: "Google Maps saved places list", url: "https://maps.app.goo.gl/ybW66FUtbNxLsLwcA" },
    { label: "Tailwind Cafe at Good Weather", url: "https://tailwindcafe.com/" },
    { label: "Saint John's happy hour", url: "https://www.saintjohnsseattle.com/happyhour-v1" },
    { label: "Poquitos Capitol Hill", url: "https://www.vivapoquitos.com/" },
    { label: "Nue happy hour", url: "https://www.nueseattle.com/happy-hour" },
    { label: "Stoup Brewing Capitol Hill", url: "https://www.stoupbrewing.com/capitol-hill/" },
    { label: "Rock Box Seattle", url: "https://rockboxseattle.com/details.pdf" },
    { label: "Biang Biang Noodles", url: "https://www.biangbiangnoodles.com/" },
    { label: "Menya Musashi Capitol Hill menu", url: "https://menyamuso.us/ramen-menu-seattle/" },
    { label: "Kajiken Seattle", url: "https://www.kajikenusa.com/" },
    { label: "Salt & Straw Capitol Hill", url: "https://saltandstraw.com/pages/capitol-hill" },
    { label: "Voodoo Doughnut locations", url: "https://www.voodoodoughnut.com/locations/" },
    { label: "Insomnia Cookies Seattle", url: "https://insomniacookies.com/locations/store/1251" },
    { label: "Dick's Drive-In Broadway", url: "https://www.ddir.com/" },
    { label: "Dave's Hot Chicken", url: "https://www.daveshotchicken.com/" },
    { label: "Walgreens Capitol Hill Broadway", url: "https://www.walgreens.com/locator/walgreens-1531+broadway-seattle-wa-98122/id=13087" },
    { label: "Victrola 15th Ave cafe", url: "https://www.victrolacoffee.com/pages/15th" },
    { label: "Glo's Cafe official site", url: "https://www.glosseattle.com/home/" },
    { label: "Tacos Chukis menu PDF", url: "https://www.seattlechukis.com/uploads/b/61f09090-6739-11ea-95d5-51ac43631b29/89e7ced0-1ebc-11ef-b4d1-2957bb32b4cb.pdf" },
    { label: "Sushi% AYCE menu", url: "https://sushiayceus.com/menu" },
    { label: "Sushi% AYCE pricing reference", url: "https://www.restaurantji.com/wa/seattle/sushi-ayce-/" },
    { label: "Sumo Seattle AYCE pricing", url: "https://www.sumoayce.com/location" },
    { label: "Great American Diner & Bar menu PDF", url: "https://www.greatamericandinerandbar.com/files/great-american-diner-and-bar-menu-2025-october-for-review-09-30-25-pdf.pdf" },
    { label: "Anchorhead locations", url: "https://anchorheadcoffee.com/pages/locations" },
    { label: "Anchorhead 10 oz bag pricing", url: "https://anchorheadcoffee.com/products/narwhal-blend" },
    { label: "Olympia Coffee Columbia City", url: "https://www.olympiacoffee.com/pages/columbia-city" },
    { label: "Olympia Sweetheart pricing", url: "https://www.olympiacoffee.com/products/sweetheart" },
    { label: "Fuller's Coffee Shop", url: "https://fullerscoffeeshop.com/" },
    { label: "Powell's / Travel Portland", url: "https://www.travelportland.com/attractions/powells/" },
    { label: "Portland Saturday Market / Travel Portland", url: "https://www.travelportland.com/event/6839b028f06e831a6c74666e/" },
    { label: "Hello From Oregon / Hello From Portland", url: "https://hellofromoregon.com/" },
    { label: "Novel Book Bar Instagram", url: "https://www.instagram.com/novelpdx/" },
    { label: "Tasty Corner dinner menu PDF", url: "https://www.tastycornerpdx.com/wp-content/uploads/2023/07/TastyCorner_Menu_Dinner.pdf" },
    { label: "Tasty Corner starters PDF", url: "https://www.tastycornerpdx.com/wp-content/uploads/2022/07/TastyCorner_Menu_StartersDrinks.pdf" },
    { label: "Hana Sushi and Izakaya menus", url: "https://www.hanasushiandizakaya.com/menus" },
    { label: "Nate's Oatmeal Cookies ordering page", url: "https://www.doordash.com/store/nates-oatmeal-cookies-portland-29932513/" },
    { label: "Life of Pie official site", url: "https://lifeofpiepizza.com/" },
    { label: "Rontoms official site/menu", url: "https://www.rontoms.net/menu-1" },
    { label: "Eem official site", url: "https://www.eempdx.com/" },
    { label: "Hat Yai menu", url: "https://www.hatyaipdx.com/menus" },
    { label: "Coava locations", url: "https://coavacoffee.com/locations" },
    { label: "Coava single-origin bag pricing", url: "https://shop.coavacoffee.com/products/los-naranjos" },
    { label: "Stumptown Downtown cafe", url: "https://www.stumptowncoffee.com/pages/portland-downtown-cafe" },
    { label: "Stumptown whole bean pricing", url: "https://www.stumptowncoffee.com/products/holler-mountain" },
    { label: "Heart bean pricing", url: "https://www.heartroasters.com/products/phono" },
    { label: "Sumo Oregon City location", url: "https://www.sumoayce.com/oregoncity" },
    { label: "Cafe Hitchcock Bainbridge listing", url: "https://visitbainbridgeisland.org/business/cafe-hitchcock/" },
    { label: "Cafe Hitchcock menu reference", url: "https://www.roostcafeandbistro.com/cafe-hitchcock-98110/" },
    { label: "Madison Diner Bainbridge listing", url: "https://visitbainbridgeisland.org/business/the-madison-diner/" },
    { label: "Waterfront Park & City Dock", url: "https://bainbridgewa.gov/302/Waterfront-Park-City-Dock" },
    { label: "Pegasus Coffee House", url: "https://pegasuscoffeehouse.com/" },
    { label: "Harbour Public House menu", url: "https://harbourpub.com/" },
    { label: "Bruciato Bainbridge", url: "https://www.pizzeriabruciato.com/" },
    { label: "BIMA museum store", url: "https://www.biartmuseum.org/museum-store/" },
    { label: "Tinder Passport Mode", url: "https://www.help.tinder.com/hc/en-us/articles/115004490423-Passport-Mode" },
    { label: "Hinge location settings", url: "https://help.hinge.co/hc/en-us/articles/49661615922195-Location-Settings" },
    { label: "Bumble Travel Mode", url: "https://support.bumble.com/hc/articles/28423960803741-Using-Bumble-while-traveling" },
    { label: "Cafe Allegro / U District listing", url: "https://udistrictseattle.com/business/cafe-allegro" },
    { label: "University Book Store locations", url: "https://ubookstore.com/pages/locations" },
    { label: "Big Time Brewery", url: "https://www.bigtimebrewery.com/" },
    { label: "Big Legrowlski open jam", url: "https://www.biglegrowlski.com/open-jam" }
  ]
};

(() => {
  const tripData = window.TRIP_DATA;
  if (!tripData?.itinerary || !tripData?.budget?.categories) return;

  const itineraryTotal = tripData.itinerary.reduce((tripSum, day) => {
    const dayTotal = day.segments.reduce((daySum, segment) => (
      daySum + segment.items.reduce((segmentSum, stop) => segmentSum + Number(stop.cost || 0), 0)
    ), 0);
    day.dayTotal = dayTotal;
    return tripSum + dayTotal;
  }, 0);

  const plannedPurchasesTotal = (tripData.tripCosts?.plannedPurchases || [])
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);

  const onlinePurchasesTotal = (tripData.tripCosts?.onlinePurchases || [])
    .reduce((sum, group) => sum + (group.items || []).reduce((groupSum, item) => groupSum + Number(item.amount || 0), 0), 0);

  const chicagoPocketMoneyTotal = Number(tripData.tripCosts?.chicagoPocketMoney?.amount || 0);

  const combinedTotal = itineraryTotal + plannedPurchasesTotal + onlinePurchasesTotal + chicagoPocketMoneyTotal;
  tripData.budget.projectedTotal = combinedTotal;

  const contingency = tripData.budget.categories.find((category) => category.name === "Contingency");
  if (contingency) {
    const nonContingencyTotal = tripData.budget.categories
      .filter((category) => category.name !== "Contingency")
      .reduce((sum, category) => sum + Number(category.amount || 0), 0);
    contingency.amount = combinedTotal - nonContingencyTotal;
  }
})();
