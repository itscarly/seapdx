window.TRIP_DATA = {
  meta: {
    "title": "Seattle and Portland Interactive Travel Itinerary",
    "dates": "November 1-9, 2026",
    "publicSiteUrl": "https://itscarly.github.io/seapdx/dashboards/html/index.html",
    "travelerBase": {
      "seattle": "Palihotel Seattle",
      "portland": "Hotel Vance, a Tribute Portfolio Hotel"
    },
    "verifiedOn": "Oct 22, 2026",
    "budgetCap": 3050,
    "absoluteCeiling": 3050,
    "assumptions": [
      "Updated Oct22,2026: Nov2–4 Seattle route adopted; other days retain their activities and all-in allowances. Current restaurant hours/prices can change before November.",
      "One solo traveler; public transit and walking. Meals target$20, usual all-in ceiling$25; approved Proper Fish exception$29.18. Food/drink model uses18% pre-tax tip and applicable local tax. Retail/transit/admission have no automatic18% tip.",
      "Seattle restaurant tax modeled10.55%; Bainbridge9.2%; Oregon sales tax0. User checkout tax/fees override models. Untouched all-in allowances are not fresh menu quotes; their precise base/tax/tip splits remain unverified.",
      "Nov2–4: no daytime hotel breaks; return to Palihotel by8PM. Optional two-hour Uber hold12:45–2:45PM replaces market browsing; skip it to extend the market. No office appointment confirmed.",
      "Cruise Nov3 2:45PM quote$59.79, two full-price modeled cocktails$41.14, separate unconfirmed First to Board allowance$20; voluntary guide funds$10. No beverage discount counted and no booking made.",
      "Monorail $4 each way, $8 roundtrip; separate from bus/Link pass. Space Needle exterior is free; SpaceBase ticket-free entry/November shop hours unconfirmed. Souvenir purchases beyond existing allowances cost extra.",
      "Nov8 waterfall tour retained with explicit departure/public-transit/weather gaps. Downtown–Troutdale connection is unpriced, so total is the priced plan, not a guaranteed complete final bill.",
      "Planned spend cap remains$3050, separate from confirmed hotels$1074.96; paid airfare excluded from trip target. Budget categories reconcile to actual itinerary and online-order amounts; unspent cap is headroom, not an invented expense.",
      "Two coffee bean bags maximum, one Seattle and one Portland, $60 combined target; no additional bean purchase implied by café tastings."
    ]
  },
  verificationSummary: {
    "overallLabel": "Last verified",
    "watches": [
      {
        "label": "Oct22 itinerary and budget revision",
        "checkedOn": "2026-10-22",
        "status": "material-update",
        "note": "Approved Seattle Nov2–4 route applied;18% tip, two full-price cruise drinks, Proper Fish$29.18 and Monorail$8. Unresolved: cruise upgrade, Underground slot, giftshop entry, Novel hours/menu, POINT Cannon Beach connection, and Nov8 Troutdale departure/transport."
      },
      {
        "id": "pre-trip-flight-transit",
        "label": "Pre-trip flight and transit watch",
        "checkedOn": "May 18, 2026",
        "status": "no-material-updates",
        "note": "Official airline, airport, ferry, rail, Link, and TriMet checks found no November itinerary rewrite or traveler-action change."
      },
      {
        "id": "travel-week-flight-transit",
        "label": "Travel-week flight and transit watch",
        "checkedOn": "May 18, 2026",
        "status": "no-material-updates",
        "note": "Weekly watch still supports the current train, ferry, airport-buffer, and local-transit assumptions."
      }
    ]
  },
  budget: {
    dashboardAllowances: { "Food and drink": 775, "Transportation": 100, "Activities and admissions": 325 },
    "cap": 3050,
    "absoluteCeiling": 3050,
    "projectedTotal": 1977.46,
    "categories": [
      {
        "name": "Transportation",
        "amount": 68,
        "note": "Sum of itemized itinerary ledger entries and allocated purchase parts; tax/tip included where stated. Unknown menu splits remain labeled allowances."
      },
      {
        "name": "Food",
        "amount": 533.17,
        "note": "Sum of itemized itinerary ledger entries and allocated purchase parts; tax/tip included where stated. Unknown menu splits remain labeled allowances."
      },
      {
        "name": "Cocktails and social",
        "amount": 76.28,
        "note": "Sum of itemized itinerary ledger entries and allocated purchase parts; tax/tip included where stated. Unknown menu splits remain labeled allowances."
      },
      {
        "name": "Entrance fees",
        "amount": 253.33,
        "note": "Sum of itemized itinerary ledger entries and allocated purchase parts; tax/tip included where stated. Unknown menu splits remain labeled allowances."
      },
      {
        "name": "Shopping",
        "amount": 1036.68,
        "note": "Sum of itemized itinerary ledger entries and allocated purchase parts; tax/tip included where stated. Unknown menu splits remain labeled allowances."
      },
      {
        "name": "Contingency",
        "amount": 10,
        "note": "Explicit voluntary guide-tip allowances only; unspent cap headroom is not counted as an expense. Unpriced Troutdale connection excluded."
      }
    ]
  },
  tripCosts: {
    "confirmed": {
      "airfare": {
        "total": 1256.83,
        "note": "Confirmed airfare is paid. USD fares and the Philippine Airlines award charge (PHP 24,281) are shown for reference and excluded from the trip target.",
        "items": [
          {
            "name": "Asiana/Korean Air arrival booking",
            "amount": 540.43,
            "covers": "Manila to Seattle via Incheon on November 1, 2026",
            "paid": true
          },
          {
            "name": "American Airlines booking",
            "amount": 716.4,
            "covers": "Portland to Corpus Christi on November 9, 2026 plus Corpus Christi to ORD on February 27, 2027 for the direct Manila flight",
            "paid": true
          },
          {
            "name": "Philippine Airlines award booking",
            "amount": 0,
            "displayAmount": "PHP 24,281",
            "covers": "Chicago/O'Hare to Manila direct, March 1-3, 2027 (PR 133, Airbus A350, Business)",
            "paid": true,
            "note": "Paid Philippine Airlines award charge, tracked separately in PHP."
          }
        ]
      },
      "accommodations": {
        "total": 1074.96,
        "note": "Palihotel Seattle and Hotel Vance are the confirmed hotel source of truth for the executive summary.",
        "items": [
          {
            "name": "Palihotel Seattle",
            "amount": 662,
            "city": "Seattle",
            "nights": 4,
            "address": "107 Pine St, Seattle, WA 98101",
            "checkIn": "Sun, Nov 1, 3:00 PM",
            "checkOut": "Thu, Nov 5, 11:00 AM",
            "note": "Downtown location near Pike Place Market, 4 nights Nov 1-5, 2026. Replaces The Boylston Hotel Capitol Hill ($504.46/3 nights)."
          },
          {
            "name": "Hotel Vance, a Tribute Portfolio Hotel",
            "amount": 412.96,
            "city": "Portland",
            "nights": 4,
            "note": "Retained confirmed hotel amount; stay Nov5–9, four nights. No reservation changed."
          }
        ]
      }
    },
    "plannedPurchases": [],
    "onlinePurchases": [
      {
        "store": "Private online orders",
        "total": 708.25,
        "note": "Private order details omitted; subtotal retained in the trip budget.",
        "items": [
          {
            "amount": 708.25
          }
        ]
      },
      {
        "store": "Private online orders",
        "total": 76.65,
        "note": "Private order details omitted; subtotal retained in the trip budget.",
        "items": [
          {
            "amount": 76.65
          }
        ]
      },
      {
        "store": "Private online orders",
        "total": 91.42,
        "note": "Private order details omitted; subtotal retained in the trip budget.",
        "items": [
          {
            "amount": 91.42
          }
        ]
      }
    ]
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
        statusLabel: "Booked and confirmed; Sunday routing is OZ702 MNL-ICN, then Korean Air KE047 ICN-SEA.",
        alertCopy: "The confirmed route is OZ702 (MNL-ICN) followed by Korean Air KE047 (ICN-SEA). Recheck current flight status before departure.",
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
        statusLabel: "Booked and ticketed.",
        alertCopy: "This fare already covers the later February 27, 2027 American Airlines continuation to ORD for the direct Manila flight, so the trip-cost summary should not treat that later leg as unpaid.",
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
            operator: "Operated by PSA Airlines as American Eagle"
          }
        ]
      },
      {
        id: "journey-future-2027-02-27",
        kind: "Future journey",
        title: "Corpus Christi to ORD via Dallas/Fort Worth for Manila connection",
        dateLabel: "Saturday, February 27, 2027",
        fareDisplay: "Included in $716.40 AA booking",
        ticketCost: null,
        airportLeaveBy: "Be at CRP by about 7:21 AM for the 10:21 AM departure (3 hr domestic buffer).",
        visibilityNote: "Later routing is included in the paid American Airlines fare shown with the November 9 return.",
        statusLabel: "Booked and included in the paid American Airlines fare.",
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
        visibilityNote: "Direct return-to-Manila routing on Philippine Airlines, paid in Philippine pesos.",
        statusLabel: "Booked and paid; PHP 24,281 award charge is tracked separately.",
        alertCopy: "PR133 ORD-MNL, Business award fare, 2 checked bags. Total duration 16h 40m, direct/non-stop, no Incheon transfer required.",
        statusSource: "https://www.philippineairlines.com/en/us/plan/flight-status",
        airportSource: "https://www.flychicago.com/ohare/home/pages/default.aspx",
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
      "id": "day-1",
      "isoDate": "2026-11-01",
      "date": "Sun, Nov 1",
      "city": "Seattle",
      "title": "Arrival, Palihotel check-in, H Mart + Target run, Pike Place Bar & Grill dinner, Waterfront Park",
      "theme": "Arrival day -- 45-min customs buffer, hotel drop, grocery + Target run, dinner, waterfront evening",
      "dayTotal": 115.22,
      "weatherPlan": "Keep arrival day calm and simple — focus on resting and light downtown orientation only.",
      "segments": [
        {
          "label": "Afternoon",
          "items": [
            {
              "time": "2:10 PM",
              "leaveTime": "2:55 PM",
              "name": "Arrive SEA -- passport control, baggage claim, transfer to Link",
              "type": "transit",
              "neighborhood": "SEA Airport",
              "duration": "45 min",
              "cost": 6,
              "notes": "Korean Air KE047 from ICN lands at 2:10 PM. Budgeting a full 45 min for passport control + baggage claim before heading to the Link platform.",
              "detailText": "Arrival transition block after landing in Seattle on Korean Air KE047 (ICN-SEA).\nPurpose: 45-minute buffer for passport control and baggage claim -- international arrivals at SEA can run long, so this is the full allotment rather than the previous 25-minute estimate.\nEstimated cost: $6 for the airport-to-city transit leg (ORCA day-pass model, first ride of the day).\nTiming: Land 2:10 PM, leave the secure area by about 2:55 PM.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=SEA+Airport%2C+Seattle%2C+WA&destination=Downtown+Seattle%2C+WA&travelmode=transit",
              "mapFrom": "SEA Airport, Seattle, WA",
              "mapTo": "Downtown Seattle, WA",
              "priceStatus": "retained all-in allowance / source detail not re-quoted",
              "budgetCategory": "Transportation",
              "routeMode": "transit"
            },
            {
              "time": "2:55 PM",
              "name": "Link light rail to Downtown Seattle",
              "type": "transit",
              "neighborhood": "SEA -> Downtown",
              "duration": "45 min",
              "cost": 0,
              "notes": "Ride to downtown tunnel stations near Pike Place; fare already counted above.",
              "detailText": "Link ride from SEA into Downtown Seattle.\nWhat to expect: Easy no-drama airport transfer -- settle in, hydrate, let the arrival day stay simple.\nCost note: Fare already counted in the previous airport-transfer stop.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=SEA+Airport%2C+Seattle%2C+WA&destination=Downtown+Seattle%2C+WA&travelmode=transit",
              "mapFrom": "SEA Airport, Seattle, WA",
              "mapTo": "Downtown Seattle, WA",
              "budgetCategory": "Transportation",
              "routeMode": "transit"
            },
            {
              "time": "3:40 PM",
              "name": "Walk to Palihotel Seattle",
              "type": "walk",
              "neighborhood": "Downtown",
              "duration": "10 min",
              "cost": 0,
              "notes": "Short walk from the downtown Link station to 107 Pine St, arriving roughly 3:50 PM.",
              "detailText": "Short station-to-hotel walk.\nWhat to expect: Palihotel is right in the heart of downtown near Pike Place, so this walk is very manageable even jet-lagged.\nEstimated arrival: around 3:50 PM.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Westlake+Station%2C+Seattle%2C+WA&destination=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&travelmode=walking",
              "mapFrom": "Westlake Station, Seattle, WA",
              "mapTo": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "budgetCategory": "Food",
              "routeMode": "walking"
            },
            {
              "time": "3:50 PM",
              "name": "Palihotel Seattle check-in",
              "type": "hotel",
              "neighborhood": "Downtown",
              "location": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "duration": "60 min",
              "cost": 0,
              "website": "https://www.palihotel.com/hotels/palihotel-seattle/",
              "payment": "Prepaid -- $662.00 total, already charged",
              "safetyScore": 90,
              "safetyNote": "🟢 90% · Generally safe -- busy, well-policed downtown core in daylight",
              "detailText": "Trivia: Palihotel Seattle is a boutique hotel in the Palisociety group, set right in the heart of downtown Seattle a few blocks from Pike Place Market -- known for a design-forward, mid-century-leaning look distinct from typical big-chain downtown hotels.\nLocation: 107 Pine St, Seattle, WA 98101 -- steps from Pike Place, 2nd Ave shopping, and the Link tunnel stations.\nCheck-in opens at 3:00 PM, so the scheduled 3:50 PM arrival is after check-in begins.\nSafety note: Downtown core / Pike Place blocks report a 15% year-over-year drop in violent crime through 2025 and are described as busy and well-policed during the day (Downtown Seattle Association reporting via KOMO News, Aug 2025). Standard city awareness is enough for a mid-afternoon hotel check-in.",
              "budgetCategory": "Food",
              "mapFrom": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "mapTo": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&destination=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&travelmode=walking"
            },
            {
              "time": "4:50 PM",
              "name": "H Mart Downtown Seattle -- grocery run",
              "type": "shopping",
              "neighborhood": "Downtown Seattle",
              "location": "H Mart, 1601 2nd Ave, Seattle, WA 98101",
              "duration": "20 min",
              "cost": 30,
              "website": "https://www.hmart.com/",
              "payment": "Cards/Apple Pay only -- H Mart does not accept cash",
              "image": "hmart-food-sample.jpg",
              "safetyScore": 85,
              "safetyNote": "🟢 85% · Generally safe -- busy daylight retail hours, cleaner 2nd Ave stretch",
              "detailText": "Trivia: H Mart (\"Han Ah Reum,\" Korean for \"one arm full of groceries\") is the largest Korean-American grocery chain in the US, known for fresh produce, a huge banchan/ready-to-heat section, and an in-store food court in some locations -- this downtown Seattle location is grocery-focused.\nWhy this stop: Stock up on ready-to-heat food (rice bowls, dumplings, banchan, instant meals) to bring back to Palihotel as tonight's dinner, since Pike Place Chowder's ~4:30 PM close makes it unreachable on this timeline.\nORDER: A mix of ready-to-heat meals, snacks, and drinks (see reference photo).\nBudget: capped at $30 -- traveler-requested headroom, not a target. You likely won't spend the full amount, but the ready-to-heat spread can run up quickly.\nSafety note: Late-afternoon (~4:50-5:10 PM) on the 2nd Ave retail corridor is described in local reporting as one of the cleaner downtown stretches compared to the 3rd Ave corridor a block over, which is documented as the area with the most visible street-drug activity in the central city (KOMO News, Aug 2025). Standard awareness recommended; this stop is during busy daylight retail hours.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&destination=H+Mart%2C+1601+2nd+Ave%2C+Seattle%2C+WA+98101&travelmode=walking",
              "mapFrom": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "mapTo": "H Mart, 1601 2nd Ave, Seattle, WA 98101",
              "priceStatus": "retained all-in allowance / source detail not re-quoted",
              "budgetCategory": "Shopping",
              "routeMode": "walking"
            },
            {
              "time": "5:10 PM",
              "name": "Walk back to Palihotel to drop off food",
              "type": "walk",
              "neighborhood": "Downtown",
              "duration": "10 min",
              "cost": 0,
              "notes": "Drop the H Mart food in the room fridge/microwave setup so it's ready as dinner around 5-6 PM.",
              "budgetCategory": "Food",
              "mapFrom": "Downtown",
              "mapTo": "Downtown",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Downtown&destination=Downtown&travelmode=walking"
            }
          ]
        },
        {
          "label": "Evening",
          "items": [
            {
              "time": "5:20 PM",
              "name": "Target Downtown Seattle (Pike Plaza) -- pickup order",
              "type": "shopping",
              "neighborhood": "Downtown Seattle",
              "location": "Target, 1401 2nd Ave, Seattle, WA 98101 (Seattle Pike Plaza)",
              "duration": "25 min",
              "cost": 34.36,
              "website": "https://www.target.com/",
              "payment": "Cards accepted",
              "safetyScore": 85,
              "safetyNote": "🟢 85% · Generally safe -- same block as H Mart, busy early-evening retail hours",
              "detailText": "Pickup order at Seattle Pike Plaza. Estimated total including Washington sales tax: $34.36.\nSafety note: Same downtown/Pike Plaza block as H Mart -- early evening, busy retail hours, no specific advisories found for this address.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&destination=Target%2C+1401+2nd+Ave%2C+Seattle%2C+WA+98101&travelmode=walking",
              "mapFrom": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "mapTo": "Target, 1401 2nd Ave, Seattle, WA 98101",
              "priceStatus": "retained all-in allowance / source detail not re-quoted",
              "budgetCategory": "Shopping",
              "routeMode": "walking"
            },
            {
              "time": "5:45 PM",
              "name": "Walk to Pike Place Bar & Grill",
              "type": "walk",
              "neighborhood": "Downtown / Pike Place",
              "duration": "10 min",
              "cost": 0,
              "notes": "Short walk from Target to Pike Place Bar & Grill.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Target%2C+1401+2nd+Ave%2C+Seattle%2C+WA+98101&destination=Pike+Place+Bar+%26+Grill%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Target, 1401 2nd Ave, Seattle, WA 98101",
              "mapTo": "Pike Place Bar & Grill, Seattle, WA",
              "budgetCategory": "Food",
              "routeMode": "walking"
            },
            {
              "time": "6:00 PM",
              "name": "Dinner at Pike Place Bar & Grill",
              "type": "meal",
              "neighborhood": "Pike Place",
              "location": "Pike Place Bar & Grill",
              "duration": "60 min",
              "cost": 44.86,
              "website": "https://www.eatatpikeplace.com/happy-hour",
              "payment": "Cards accepted",
              "safetyScore": 88,
              "safetyNote": "🟢 88% · Generally safe -- busy, well-policed core tourist area",
              "detailText": "Menu: https://www.eatatpikeplace.com/happy-hour\nORDER:\n- Grilled Chicken Burger (tomato, lettuce, creamy horseradish, sourdough) -- $14.95\n- Prickly-Pear Margarita (Cuervo Gold, triple sec, prickly-pear cactus puree, fresh lime sour, salt rim, on the rocks) -- $10.00\n- Fresca (Absolut Citron, muddled citrus, soda water, splash grapefruit juice) -- $10.00\nSubtotal: $34.95. Plus 10.35% WA/Seattle sales tax ($3.62) and 18% tip on the subtotal ($6.29) = est. total $44.86.\nSafety note: Pike Place itself is described as busy and well-policed daily (KOMO News, Aug 2025); early-evening dinner hour here is a core tourist area with heavy foot traffic.\nCost basis: retained all-in allowance, including provision for18% pre-tax food/drink tip; exact current item/base/tip split unverified. Seattle tax modeled10.55% where applicable; actual checkout tax takes precedence.",
              "priceStatus": "retained all-in allowance / source detail not re-quoted",
              "budgetCategory": "Food",
              "mapFrom": "Pike Place Bar & Grill",
              "mapTo": "Pike Place Bar & Grill",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Pike+Place+Bar+%26+Grill&destination=Pike+Place+Bar+%26+Grill&travelmode=walking"
            },
            {
              "time": "7:00 PM",
              "name": "Waterfront Park",
              "type": "activity",
              "neighborhood": "Central Waterfront",
              "location": "Waterfront Park (Pier 62/Pier 58 area)",
              "duration": "40 min",
              "cost": 0,
              "payment": "Free walk-in",
              "image": "waterfront-park.jpg",
              "safetyScore": 65,
              "safetyNote": "🟡 65% · Use normal caution -- no specific night data found, less busy after dark, plan to leave before the 10 PM close",
              "detailText": "Trivia: Seattle's new Waterfront Park is the centerpiece of the ~$1.2B Waterfront Seattle redevelopment -- a ~20-acre string of public spaces from Pier 57 to Pier 62, including the Seattle Aquarium and Pier 62's floating dock and lawn (ASCE, Jan 2026).\nIMPORTANT -- posted hours: Pier 62 / Waterfront Park is posted open daily 7 AM-10 PM (seattle.gov / waterfrontparkseattle.org). Arriving right at 10 PM means the park will likely already be closing or closed -- go earlier in the evening (e.g. right after dinner, ~6:30-7:30 PM) to actually have time there before it shuts.\nSafety note (sourced, not a live feed): Seattle Parks & Rec's 2026 \"Summer of Safety\" initiative specifically calls out increased staffing/security, clearer signage, and lighting/sight-line improvements at high-use parks including the waterfront (Seattle Parks, May 2026); Seattle Center also states the park's operations prioritize clear sight lines and lighting as safety measures. No source found with a specific crime count or homelessness figure for Waterfront Park at night as of this writing -- that gap is stated here rather than guessed at. General downtown-Seattle guidance from multiple 2026 visitor-safety writeups: core tourist areas including the waterfront feel safe during the day and evening hours when busy; visible homelessness/drug activity downtown is common and generally not dangerous, but isolated/empty stretches after dark warrant normal city caution. Given the 10 PM close, plan to be there earlier while it's still lit, staffed, and populated rather than right at closing.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Pike+Place+Bar+%26+Grill%2C+Seattle%2C+WA&destination=Waterfront+Park%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Pike Place Bar & Grill, Seattle, WA",
              "mapTo": "Waterfront Park, Seattle, WA",
              "budgetCategory": "Food",
              "routeMode": "walking"
            },
            {
              "time": "7:40 PM",
              "name": "Walk back to Palihotel",
              "type": "walk",
              "neighborhood": "Waterfront -> Downtown",
              "duration": "15 min",
              "cost": 0,
              "notes": "Walk back up to Palihotel to rest.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Waterfront+Park%2C+Seattle%2C+WA&destination=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&travelmode=walking",
              "mapFrom": "Waterfront Park, Seattle, WA",
              "mapTo": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "budgetCategory": "Food",
              "routeMode": "walking"
            },
            {
              "time": "8:00 PM",
              "name": "Evening wind-down (self-choose)",
              "type": "rest",
              "neighborhood": "Palihotel base",
              "duration": "2 hrs",
              "cost": 0,
              "notes": "Back to the hotel, eat the H Mart food if still hungry, settle in.",
              "detailText": "Arrival-night wind-down.\nPurpose: Decompress after a long travel day before lights-out. Day 2 is the full Pike Place day and starts at 5:30 AM, so sleep needs to actually start on time.\nContinuity: Bridges dinner/settling-in to a real 10:00 PM lights-out.",
              "budgetCategory": "Food",
              "mapFrom": "Palihotel base",
              "mapTo": "Palihotel base",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel+base&destination=Palihotel+base&travelmode=walking"
            },
            {
              "time": "10:00 PM",
              "name": "Sleep · protected overnight",
              "type": "rest",
              "neighborhood": "Seattle hotel",
              "duration": "Protected overnight",
              "cost": 0,
              "notes": "Protected sleep from10PM until the next morning. Pacific time (America/Los_Angeles); no sightseeing, packing or transit scheduled inside this block.",
              "detailText": "Sleep starts10PM, separate from evening wind-down. Overnight room protected; morning preparation follows sleep, not part of it.",
              "budgetCategory": "Food",
              "mapFrom": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "mapTo": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel%20Seattle%2C%20107%20Pine%20St%2C%20Seattle%2C%20WA%2098101&destination=Palihotel%20Seattle%2C%20107%20Pine%20St%2C%20Seattle%2C%20WA%2098101&travelmode=walking",
              "endTime": "7:00 AM",
              "endDate": "2026-11-02",
              "location": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "coordinates": {
                "lat": 47.6097,
                "lng": -122.3402,
                "label": "Palihotel Seattle"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "day-2",
      "isoDate": "2026-11-02",
      "date": "Mon, Nov 2",
      "city": "Seattle",
      "title": "Pike Place favorites, Underground, free waterfront sunset + Von’s / Dough Zone",
      "theme": "Public transit / walking; hotel by 8 PM; no daytime hotel reset; optional browsing absorbs queues",
      "dayTotal": 207.05,
      "weatherPlan": "Outdoor photos optional in rain; indoor cafés, library or cruise cabin offer cover. No guarantee of staying dry during transfers.",
      "segments": [
        {
          "label": "Morning / afternoon / evening · Pacific time",
          "items": [
            {
              "time": "7:00 AM",
              "endTime": "7:40 AM",
              "leaveTime": "7:40 AM",
              "name": "Wake + breakfast / get ready",
              "type": "activity",
              "neighborhood": "Palihotel base",
              "location": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "duration": "Morning preparation",
              "cost": 0,
              "budgetCategory": "Food",
              "notes": "Breakfast from already-funded groceries; no new purchase assumed. Morning prep before leaving, following protected sleep.",
              "detailText": "Wake7AM. Eat breakfast, get ready and leave for the existing itinerary start; no earlier outing added.",
              "mapFrom": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "mapTo": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel%20Seattle%2C%20107%20Pine%20St%2C%20Seattle%2C%20WA%2098101&destination=Palihotel%20Seattle%2C%20107%20Pine%20St%2C%20Seattle%2C%20WA%2098101&travelmode=walking",
              "coordinates": {
                "lat": 47.6097,
                "lng": -122.3402,
                "label": "Palihotel Seattle"
              }
            },
            {
              "time": "7:40 AM",
              "leaveTime": "8:00 AM",
              "endTime": "8:00 AM",
              "name": "Walk + early market photos",
              "type": "walk",
              "neighborhood": "Seattle",
              "location": "Pike Place Market, 85 Pike St, Seattle, WA",
              "duration": "20 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Pike+Place+Market%2C+85+Pike+St%2C+Seattle%2C+WA",
              "notes": "Leave Palihotel; optional 7:30 start for extra exterior photos. Vendors have different opening times.",
              "detailText": "Leave Palihotel; optional 7:30 start for extra exterior photos. Vendors have different opening times.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&destination=Pike+Place+Market%2C+85+Pike+St%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "mapTo": "Pike Place Market, 85 Pike St, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6088,
                "lng": -122.3405,
                "label": "Pike Place Market"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "8:00 AM",
              "leaveTime": "8:25 AM",
              "endTime": "8:25 AM",
              "name": "Le Panier · pastry",
              "type": "activity",
              "neighborhood": "Seattle",
              "location": "Le Panier, 1902 Pike Pl, Seattle, WA",
              "duration": "25 min",
              "cost": 8,
              "budgetCategory": "Food",
              "website": "https://lepanier.com/menu",
              "menu": "https://lepanier.com/menu",
              "notes": "$8 all-in tasting allowance, including provision for tax and 18% pre-tax tip; item and exact price not confirmed. Not an $8 menu quote.",
              "detailText": "$8 all-in tasting allowance, including provision for tax and 18% pre-tax tip; item and exact price not confirmed. Not an $8 menu quote.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&destination=Le+Panier%2C+1902+Pike+Pl%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "mapTo": "Le Panier, 1902 Pike Pl, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6101,
                "lng": -122.3425,
                "label": "Le Panier"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "8:25 AM",
              "leaveTime": "9:00 AM",
              "endTime": "9:00 AM",
              "name": "Piroshky Piroshky · savory pastry",
              "type": "activity",
              "neighborhood": "Seattle",
              "location": "Piroshky Piroshky, 1908 Pike Pl, Seattle, WA",
              "duration": "35 min",
              "cost": 11,
              "budgetCategory": "Food",
              "website": "https://piroshkybakery.com/product/beef_and_cheese_piroshky",
              "menu": "https://piroshkybakery.com/product/beef_and_cheese_piroshky",
              "notes": "$11 all-in tasting allowance including tax and 18% pre-tax tip. Beef & cheese is a candidate; exact November price unconfirmed.",
              "detailText": "$11 all-in tasting allowance including tax and 18% pre-tax tip. Beef & cheese is a candidate; exact November price unconfirmed.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Le+Panier%2C+1902+Pike+Pl%2C+Seattle%2C+WA&destination=Piroshky+Piroshky%2C+1908+Pike+Pl%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Le Panier, 1902 Pike Pl, Seattle, WA",
              "mapTo": "Piroshky Piroshky, 1908 Pike Pl, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6102,
                "lng": -122.3426,
                "label": "Piroshky Piroshky"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "9:00 AM",
              "leaveTime": "9:30 AM",
              "endTime": "9:30 AM",
              "name": "Beecher’s · mac & cheese tasting",
              "type": "activity",
              "neighborhood": "Seattle",
              "location": "Beecher’s Handmade Cheese, 1600 Pike Pl, Seattle, WA",
              "duration": "30 min",
              "cost": 12,
              "budgetCategory": "Food",
              "website": "https://beechershandmadecheese.com/cafe/pike-place-market/",
              "menu": "https://beechershandmadecheese.com/cafe/pike-place-market/",
              "notes": "$12 all-in tasting allowance including tax and 18% pre-tax tip, not a verified menu price. Official cafe opens9 AM; ordering menu currently unavailable.",
              "detailText": "$12 all-in tasting allowance including tax and 18% pre-tax tip, not a verified menu price. Official cafe opens9 AM; ordering menu currently unavailable.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Piroshky+Piroshky%2C+1908+Pike+Pl%2C+Seattle%2C+WA&destination=Beecher%E2%80%99s+Handmade+Cheese%2C+1600+Pike+Pl%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Piroshky Piroshky, 1908 Pike Pl, Seattle, WA",
              "mapTo": "Beecher’s Handmade Cheese, 1600 Pike Pl, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6095,
                "lng": -122.3423,
                "label": "Beecher’s Handmade Cheese"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "9:30 AM",
              "leaveTime": "10:00 AM",
              "endTime": "10:00 AM",
              "name": "Mee Sum Pastry · hom bow",
              "type": "activity",
              "neighborhood": "Seattle",
              "location": "Mee Sum Pastry, 1526 Pike Pl, Seattle, WA",
              "duration": "30 min",
              "cost": 9,
              "budgetCategory": "Food",
              "website": "https://www.pikeplacemarket.org/vendor/mee-sum-pastry/",
              "menu": "https://www.pikeplacemarket.org/vendor/mee-sum-pastry/",
              "notes": "$9 all-in tasting allowance including tax and 18% pre-tax tip; item/price to confirm. These four market tastings total the retained $40 fund.",
              "detailText": "$9 all-in tasting allowance including tax and 18% pre-tax tip; item/price to confirm. These four market tastings total the retained $40 fund.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Beecher%E2%80%99s+Handmade+Cheese%2C+1600+Pike+Pl%2C+Seattle%2C+WA&destination=Mee+Sum+Pastry%2C+1526+Pike+Pl%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Beecher’s Handmade Cheese, 1600 Pike Pl, Seattle, WA",
              "mapTo": "Mee Sum Pastry, 1526 Pike Pl, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6095,
                "lng": -122.3423,
                "label": "Mee Sum Pastry"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "10:00 AM",
              "leaveTime": "10:45 AM",
              "endTime": "10:45 AM",
              "name": "Original Starbucks · coffee, beans + mug",
              "type": "coffee",
              "neighborhood": "Seattle",
              "location": "Starbucks, 1912 Pike Pl, Seattle, WA",
              "duration": "45 min",
              "cost": 41,
              "budgetCategory": "Food",
              "website": "https://www.starbucks.com/store-locator",
              "menu": "https://www.starbucks.com/store-locator",
              "notes": "Retained $41 all-in combined allowance for cold brew, one Seattle bean bag and city mug; exact current item/tax/tip split unverified. No second souvenir fund added. Do not treat the drink as $41.",
              "detailText": "Retained $41 all-in combined allowance for cold brew, one Seattle bean bag and city mug; exact current item/tax/tip split unverified. No second souvenir fund added. Do not treat the drink as $41.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Mee+Sum+Pastry%2C+1526+Pike+Pl%2C+Seattle%2C+WA&destination=Starbucks%2C+1912+Pike+Pl%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Mee Sum Pastry, 1526 Pike Pl, Seattle, WA",
              "mapTo": "Starbucks, 1912 Pike Pl, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6101,
                "lng": -122.3426,
                "label": "Starbucks"
              },
              "priceStatus": "quoted / modeled",
              "budgetParts": [
                {
                  "category": "Food",
                  "amount": 5
                },
                {
                  "category": "Shopping",
                  "amount": 36
                }
              ]
            },
            {
              "time": "10:45 AM",
              "leaveTime": "11:15 AM",
              "endTime": "11:15 AM",
              "name": "Totem Smokehouse · salmon souvenir",
              "type": "activity",
              "neighborhood": "Seattle",
              "location": "Totem Smokehouse, 1906 Pike Pl, Seattle, WA",
              "duration": "30 min",
              "cost": 60,
              "budgetCategory": "Shopping",
              "website": "https://www.totemsmokehouse.com/",
              "menu": "https://www.totemsmokehouse.com/",
              "notes": "Retained $60 retail ceiling including tax; no food-service tip added. This is a souvenir allowance, not one meal or confirmed charge.",
              "detailText": "Retained $60 retail ceiling including tax; no food-service tip added. This is a souvenir allowance, not one meal or confirmed charge.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Starbucks%2C+1912+Pike+Pl%2C+Seattle%2C+WA&destination=Totem+Smokehouse%2C+1906+Pike+Pl%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Starbucks, 1912 Pike Pl, Seattle, WA",
              "mapTo": "Totem Smokehouse, 1906 Pike Pl, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6102,
                "lng": -122.3425,
                "label": "Totem Smokehouse"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "11:15 AM",
              "leaveTime": "12:25 PM",
              "endTime": "12:25 PM",
              "name": "Pike Place / waterfront photos",
              "type": "activity",
              "neighborhood": "Seattle",
              "location": "Pike Place Market, 85 Pike St, Seattle, WA",
              "duration": "70 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.pikeplacemarket.org/",
              "menu": "https://www.pikeplacemarket.org/",
              "notes": "Market and waterfront photos. If the optional Uber office visit is skipped, extend this block through2:45PM; no hotel reset or additional purchase assumed.",
              "detailText": "Market and waterfront photos. If the optional Uber office visit is skipped, extend this block through2:45PM; no hotel reset or additional purchase assumed.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Totem+Smokehouse%2C+1906+Pike+Pl%2C+Seattle%2C+WA&destination=Pike+Place+Market%2C+85+Pike+St%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Totem Smokehouse, 1906 Pike Pl, Seattle, WA",
              "mapTo": "Pike Place Market, 85 Pike St, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6088,
                "lng": -122.3405,
                "label": "Pike Place Market"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "12:25 PM",
              "endTime": "12:45 PM",
              "leaveTime": "12:45 PM",
              "name": "Walk to optional Uber office",
              "type": "walk",
              "location": "Uber Seattle Engineering Office, 1191 2nd Ave #1200, Seattle, WA 98101",
              "neighborhood": "Downtown Seattle",
              "duration": "20 min",
              "cost": 0,
              "budgetCategory": "Food",
              "notes": "Optional office visit, no appointment confirmed. If skipped, stay at the market until2:45PM, then walk to Underground check-in by3:15. Preserve the full2-hour block if visiting.",
              "detailText": "Optional office visit, no appointment confirmed. Public access is not guaranteed. Hold12:45–2:45PM only; replace with market photos if skipping.",
              "website": "https://www.google.com/maps/search/?api=1&query=Uber%20Seattle%20Engineering%20Office%2C%201191%202nd%20Ave%20%231200%2C%20Seattle%2C%20WA%2098101",
              "mapFrom": "Pike Place Market, 85 Pike St, Seattle, WA",
              "mapTo": "Uber Seattle Engineering Office, 1191 2nd Ave #1200, Seattle, WA 98101",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Pike%20Place%20Market%2C%2085%20Pike%20St%2C%20Seattle%2C%20WA&destination=Uber%20Seattle%20Engineering%20Office%2C%201191%202nd%20Ave%20%231200%2C%20Seattle%2C%20WA%2098101&travelmode=walking",
              "coordinates": {
                "lat": 47.6068,
                "lng": -122.3374,
                "label": "Uber office · optional"
              }
            },
            {
              "time": "12:45 PM",
              "endTime": "2:45 PM",
              "leaveTime": "2:45 PM",
              "name": "Uber office · optional two-hour hold",
              "type": "activity",
              "location": "Uber Seattle Engineering Office, 1191 2nd Ave #1200, Seattle, WA 98101",
              "neighborhood": "Downtown Seattle",
              "duration": "120 min",
              "cost": 0,
              "budgetCategory": "Food",
              "notes": "Optional office visit, no appointment confirmed. If skipped, stay at the market until2:45PM, then walk to Underground check-in by3:15. Preserve the full2-hour block if visiting.",
              "detailText": "Optional office visit, no appointment confirmed. Public access is not guaranteed. Hold12:45–2:45PM only; replace with market photos if skipping.",
              "website": "https://www.google.com/maps/search/?api=1&query=Uber%20Seattle%20Engineering%20Office%2C%201191%202nd%20Ave%20%231200%2C%20Seattle%2C%20WA%2098101",
              "mapFrom": "Uber Seattle Engineering Office, 1191 2nd Ave #1200, Seattle, WA 98101",
              "mapTo": "Uber Seattle Engineering Office, 1191 2nd Ave #1200, Seattle, WA 98101",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Uber%20Seattle%20Engineering%20Office%2C%201191%202nd%20Ave%20%231200%2C%20Seattle%2C%20WA%2098101&destination=Uber%20Seattle%20Engineering%20Office%2C%201191%202nd%20Ave%20%231200%2C%20Seattle%2C%20WA%2098101&travelmode=walking",
              "coordinates": {
                "lat": 47.6068,
                "lng": -122.3374,
                "label": "Uber office · optional"
              }
            },
            {
              "time": "2:45 PM",
              "leaveTime": "3:15 PM",
              "endTime": "3:15 PM",
              "name": "Walk + Pioneer Square photos",
              "type": "walk",
              "neighborhood": "Seattle",
              "location": "Beneath the Streets, 102 Cherry St, Seattle, WA",
              "duration": "30 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Beneath+the+Streets%2C+102+Cherry+St%2C+Seattle%2C+WA",
              "notes": "Toward 102 Cherry St, including photo stops.",
              "detailText": "Toward 102 Cherry St, including photo stops.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Uber%20Seattle%20Engineering%20Office%2C%201191%202nd%20Ave%20%231200%2C%20Seattle%2C%20WA%2098101&destination=Beneath%20the%20Streets%2C%20102%20Cherry%20St%2C%20Seattle%2C%20WA&travelmode=walking",
              "mapFrom": "Uber Seattle Engineering Office, 1191 2nd Ave #1200, Seattle, WA 98101",
              "mapTo": "Beneath the Streets, 102 Cherry St, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6027,
                "lng": -122.3351,
                "label": "Beneath the Streets"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "3:15 PM",
              "leaveTime": "3:30 PM",
              "endTime": "3:30 PM",
              "name": "Underground check-in",
              "type": "walk",
              "neighborhood": "Seattle",
              "location": "Beneath the Streets, 102 Cherry St, Seattle, WA",
              "duration": "15 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Beneath+the+Streets%2C+102+Cherry+St%2C+Seattle%2C+WA",
              "notes": "15-minute planning buffer.",
              "detailText": "15-minute planning buffer.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Beneath+the+Streets%2C+102+Cherry+St%2C+Seattle%2C+WA&destination=Beneath+the+Streets%2C+102+Cherry+St%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Beneath the Streets, 102 Cherry St, Seattle, WA",
              "mapTo": "Beneath the Streets, 102 Cherry St, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6027,
                "lng": -122.3351,
                "label": "Beneath the Streets"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "3:30 PM",
              "leaveTime": "4:30 PM",
              "endTime": "4:30 PM",
              "name": "Beneath the Streets · target",
              "type": "activity",
              "neighborhood": "Seattle",
              "location": "Beneath the Streets, 102 Cherry St, Seattle, WA",
              "duration": "60 min",
              "cost": 37,
              "budgetCategory": "Entrance fees",
              "website": "https://www.beneath-the-streets.com/",
              "notes": "One-hour guided underground history walk. 102 Cherry St; ends near 119 S Main. Six flights of stairs, no elevator. 3:30 PM appeared in earlier selector; this slot and its total need reconfirmation. $32 total observed at 2:30 PM instead.\nBudget: $32 earlier ticket quote plus $5 voluntary guide-tip allowance = $37. Requested3:30 PM slot and total are not yet booked or confirmed.",
              "detailText": "One-hour guided underground history walk. 102 Cherry St; ends near 119 S Main. Six flights of stairs, no elevator. 3:30 PM appeared in earlier selector; this slot and its total need reconfirmation. $32 total observed at 2:30 PM instead.\nBudget: $32 earlier ticket quote plus $5 voluntary guide-tip allowance = $37. Requested3:30 PM slot and total are not yet booked or confirmed.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Beneath+the+Streets%2C+102+Cherry+St%2C+Seattle%2C+WA&destination=119+S+Main+St%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Beneath the Streets, 102 Cherry St, Seattle, WA",
              "mapTo": "119 S Main St, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.5999,
                "lng": -122.3335,
                "label": "119 S Main St"
              },
              "priceStatus": "quoted / modeled",
              "budgetParts": [
                {
                  "category": "Entrance fees",
                  "amount": 32
                },
                {
                  "category": "Contingency",
                  "amount": 5
                }
              ]
            },
            {
              "time": "4:30 PM",
              "leaveTime": "4:40 PM",
              "endTime": "4:40 PM",
              "name": "Walk to free waterfront sunset spot",
              "type": "walk",
              "neighborhood": "Seattle",
              "location": "Washington Street Boat Landing, Alaskan Way and S Washington St, Seattle, WA",
              "duration": "10 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Washington+Street+Boat+Landing%2C+Alaskan+Way+and+S+Washington+St%2C+Seattle%2C+WA",
              "notes": "Upper paved promenade at Washington Street Boat Landing / above Habitat Beach; Alaskan Way & S Washington St. About 10 minutes planning allowance from underground tour end near 119 S Main.",
              "detailText": "Upper paved promenade at Washington Street Boat Landing / above Habitat Beach; Alaskan Way & S Washington St. About 10 minutes planning allowance from underground tour end near 119 S Main.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=119+S+Main+St%2C+Seattle%2C+WA&destination=Washington+Street+Boat+Landing%2C+Alaskan+Way+and+S+Washington+St%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "119 S Main St, Seattle, WA",
              "mapTo": "Washington Street Boat Landing, Alaskan Way and S Washington St, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6012,
                "lng": -122.3378,
                "label": "Washington Street Boat Landing"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "4:40 PM",
              "leaveTime": "5:10 PM",
              "endTime": "5:10 PM",
              "name": "Free sunset · Elliott Bay waterfront",
              "type": "activity",
              "neighborhood": "Seattle",
              "location": "Washington Street Boat Landing, Alaskan Way and S Washington St, Seattle, WA",
              "duration": "30 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Washington+Street+Boat+Landing%2C+Alaskan+Way+and+S+Washington+St%2C+Seattle%2C+WA",
              "notes": "Stay on the upper paved promenade, not beach rocks or water. Sunset Nov 2 about 4:49 PM; civil twilight to5:22. Bay/ferry/Olympic views, not an elevated skyline. Outdoors; weather can obscure sunset.",
              "detailText": "Stay on the upper paved promenade, not beach rocks or water. Sunset Nov 2 about 4:49 PM; civil twilight to5:22. Bay/ferry/Olympic views, not an elevated skyline. Outdoors; weather can obscure sunset.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Washington+Street+Boat+Landing%2C+Alaskan+Way+and+S+Washington+St%2C+Seattle%2C+WA&destination=Washington+Street+Boat+Landing%2C+Alaskan+Way+and+S+Washington+St%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Washington Street Boat Landing, Alaskan Way and S Washington St, Seattle, WA",
              "mapTo": "Washington Street Boat Landing, Alaskan Way and S Washington St, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6012,
                "lng": -122.3378,
                "label": "Washington Street Boat Landing"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "5:10 PM",
              "leaveTime": "5:25 PM",
              "endTime": "5:25 PM",
              "name": "Walk to Von’s / Harbor Steps",
              "type": "walk",
              "neighborhood": "Seattle",
              "location": "Von’s 1000Spirits, 1225 1st Ave, Seattle, WA",
              "duration": "15 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Von%E2%80%99s+1000Spirits%2C+1225+1st+Ave%2C+Seattle%2C+WA",
              "notes": "1225 1st Ave. 15-minute planning allowance.",
              "detailText": "1225 1st Ave. 15-minute planning allowance.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Washington+Street+Boat+Landing%2C+Alaskan+Way+and+S+Washington+St%2C+Seattle%2C+WA&destination=Von%E2%80%99s+1000Spirits%2C+1225+1st+Ave%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Washington Street Boat Landing, Alaskan Way and S Washington St, Seattle, WA",
              "mapTo": "Von’s 1000Spirits, 1225 1st Ave, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6065,
                "lng": -122.3379,
                "label": "Von’s 1000Spirits"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "5:25 PM",
              "leaveTime": "6:00 PM",
              "endTime": "6:00 PM",
              "name": "Happy hour · Von’s 1000Spirits",
              "type": "cocktails",
              "neighborhood": "Seattle",
              "location": "Von’s 1000Spirits, 1225 1st Ave, Seattle, WA",
              "duration": "35 min",
              "cost": 10.72,
              "budgetCategory": "Cocktails and social",
              "website": "https://vons1000spirits.com/Happy-hour-menu/",
              "menu": "https://vons1000spirits.com/Happy-hour-menu/",
              "notes": "Daily HH 2–6 PM. Scratch vodka/gin martini $7.99 is an all-day deal. With $0.40 discretionary cooks commission, $0.89 modeled tax and $1.44 tip: $10.72. Walk-in only; queue can affect timing.\nOrder: Scratch vodka or gin martini · all-day value during HH. Base $7.99; other fee $0.40; tax $0.89; 18% pre-tax tip $1.44; total $10.72. Current menu $7.99; daily HH 2–6 PM. Includes discretionary 5% cooks commission $0.40; modeled $0.89 tax on drink plus commission, 18% tip on drink. Not a special HH discount on this martini.",
              "detailText": "Daily HH 2–6 PM. Scratch vodka/gin martini $7.99 is an all-day deal. With $0.40 discretionary cooks commission, $0.89 modeled tax and $1.44 tip: $10.72. Walk-in only; queue can affect timing.\nOrder: Scratch vodka or gin martini · all-day value during HH. Base $7.99; other fee $0.40; tax $0.89; 18% pre-tax tip $1.44; total $10.72. Current menu $7.99; daily HH 2–6 PM. Includes discretionary 5% cooks commission $0.40; modeled $0.89 tax on drink plus commission, 18% tip on drink. Not a special HH discount on this martini.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Von%E2%80%99s+1000Spirits%2C+1225+1st+Ave%2C+Seattle%2C+WA&destination=Von%E2%80%99s+1000Spirits%2C+1225+1st+Ave%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Von’s 1000Spirits, 1225 1st Ave, Seattle, WA",
              "mapTo": "Von’s 1000Spirits, 1225 1st Ave, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6065,
                "lng": -122.3379,
                "label": "Von’s 1000Spirits"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "6:00 PM",
              "leaveTime": "6:05 PM",
              "endTime": "6:05 PM",
              "name": "Walk to Dough Zone",
              "type": "walk",
              "neighborhood": "Seattle",
              "location": "Dough Zone Harbor Steps, 83 University St, Seattle, WA",
              "duration": "5 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Dough+Zone+Harbor+Steps%2C+83+University+St%2C+Seattle%2C+WA",
              "notes": "83 University St; very short Harbor Steps transfer.",
              "detailText": "83 University St; very short Harbor Steps transfer.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Von%E2%80%99s+1000Spirits%2C+1225+1st+Ave%2C+Seattle%2C+WA&destination=Dough+Zone+Harbor+Steps%2C+83+University+St%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Von’s 1000Spirits, 1225 1st Ave, Seattle, WA",
              "mapTo": "Dough Zone Harbor Steps, 83 University St, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6065,
                "lng": -122.3393,
                "label": "Dough Zone Harbor Steps"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "6:05 PM",
              "leaveTime": "7:00 PM",
              "endTime": "7:00 PM",
              "name": "Dinner · your Dough Zone order",
              "type": "meal",
              "neighborhood": "Seattle",
              "location": "Dough Zone Harbor Steps, 83 University St, Seattle, WA",
              "duration": "55 min",
              "cost": 18.33,
              "budgetCategory": "Food",
              "website": "https://order.toasttab.com/online/dough-zone-harbor-steps",
              "menu": "https://order.toasttab.com/online/dough-zone-harbor-steps",
              "notes": "Spicy Ma La noodles $8.30 + 4 pan-fried chicken xiao long bao $5.95 = $14.25. Screenshot tax $1.51 +18% pre-tax tip $2.57 = $18.33. Extra chili oil noted; any new charge excluded.\nOrder: Spicy Ma La noodles + 4 pan-fried chicken xiao long bao. Base $14.25; other fee $0.00; tax $1.51; 18% pre-tax tip $2.57; total $18.33. User pickup screenshots: $8.30 + $5.95 = $14.25, displayed tax $1.51. Add requested 18% pre-tax tip $2.57. Not an order placed; dine-in/November parity unconfirmed.",
              "detailText": "Spicy Ma La noodles $8.30 + 4 pan-fried chicken xiao long bao $5.95 = $14.25. Screenshot tax $1.51 +18% pre-tax tip $2.57 = $18.33. Extra chili oil noted; any new charge excluded.\nOrder: Spicy Ma La noodles + 4 pan-fried chicken xiao long bao. Base $14.25; other fee $0.00; tax $1.51; 18% pre-tax tip $2.57; total $18.33. User pickup screenshots: $8.30 + $5.95 = $14.25, displayed tax $1.51. Add requested 18% pre-tax tip $2.57. Not an order placed; dine-in/November parity unconfirmed.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Dough+Zone+Harbor+Steps%2C+83+University+St%2C+Seattle%2C+WA&destination=Dough+Zone+Harbor+Steps%2C+83+University+St%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Dough Zone Harbor Steps, 83 University St, Seattle, WA",
              "mapTo": "Dough Zone Harbor Steps, 83 University St, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6065,
                "lng": -122.3393,
                "label": "Dough Zone Harbor Steps"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "7:00 PM",
              "leaveTime": "7:30 PM",
              "endTime": "7:30 PM",
              "name": "Harbor Steps / waterfront night photos",
              "type": "activity",
              "neighborhood": "Seattle",
              "location": "Dough Zone Harbor Steps, 83 University St, Seattle, WA",
              "duration": "30 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Dough+Zone+Harbor+Steps%2C+83+University+St%2C+Seattle%2C+WA",
              "notes": "Optional in dry weather; no added purchase assumed.",
              "detailText": "Optional in dry weather; no added purchase assumed.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Dough+Zone+Harbor+Steps%2C+83+University+St%2C+Seattle%2C+WA&destination=Dough+Zone+Harbor+Steps%2C+83+University+St%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Dough Zone Harbor Steps, 83 University St, Seattle, WA",
              "mapTo": "Dough Zone Harbor Steps, 83 University St, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6065,
                "lng": -122.3393,
                "label": "Dough Zone Harbor Steps"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "7:30 PM",
              "leaveTime": "7:50 PM",
              "endTime": "7:50 PM",
              "name": "Walk to Palihotel",
              "type": "walk",
              "neighborhood": "Seattle",
              "location": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "duration": "20 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101",
              "notes": "Hotel by8 PM.",
              "detailText": "Hotel by8 PM.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Dough+Zone+Harbor+Steps%2C+83+University+St%2C+Seattle%2C+WA&destination=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&travelmode=walking",
              "mapFrom": "Dough Zone Harbor Steps, 83 University St, Seattle, WA",
              "mapTo": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6097,
                "lng": -122.3402,
                "label": "Palihotel Seattle"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "8:00 PM",
              "leaveTime": "10:00 PM",
              "endTime": "10:00 PM",
              "name": "Hotel · evening wind-down",
              "type": "rest",
              "neighborhood": "Seattle",
              "location": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "duration": "Until10PM",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101",
              "notes": "No daytime hotel reset. Evening relaxation/packing only; protected sleep begins10PM.",
              "detailText": "No daytime hotel reset. Evening relaxation/packing only; protected sleep begins10PM.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&destination=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&travelmode=walking",
              "mapFrom": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "mapTo": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6097,
                "lng": -122.3402,
                "label": "Palihotel Seattle"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "10:00 PM",
              "endTime": "7:00 AM",
              "endDate": "2026-11-03",
              "name": "Sleep · protected overnight",
              "type": "rest",
              "neighborhood": "Seattle hotel",
              "location": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "duration": "Protected overnight",
              "cost": 0,
              "budgetCategory": "Food",
              "notes": "Protected sleep from10PM until the next morning. Pacific time (America/Los_Angeles); no sightseeing, packing or transit scheduled inside this block.",
              "detailText": "Sleep starts10PM, separate from evening wind-down. Overnight room protected; morning preparation follows sleep, not part of it.",
              "mapFrom": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "mapTo": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel%20Seattle%2C%20107%20Pine%20St%2C%20Seattle%2C%20WA%2098101&destination=Palihotel%20Seattle%2C%20107%20Pine%20St%2C%20Seattle%2C%20WA%2098101&travelmode=walking",
              "coordinates": {
                "lat": 47.6097,
                "lng": -122.3402,
                "label": "Palihotel Seattle"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "day-3",
      "isoDate": "2026-11-03",
      "date": "Tue, Nov 3",
      "city": "Seattle",
      "title": "Bainbridge Island, Argosy Harbor Cruise, Rhein Haus + DANBO",
      "theme": "Public transit / walking; hotel by 8 PM; no daytime hotel reset; optional browsing absorbs queues",
      "dayTotal": 216.61,
      "weatherPlan": "Outdoor photos optional in rain; indoor cafés, library or cruise cabin offer cover. No guarantee of staying dry during transfers.",
      "segments": [
        {
          "label": "Morning / afternoon / evening · Pacific time",
          "items": [
            {
              "time": "7:00 AM",
              "endTime": "7:30 AM",
              "leaveTime": "7:30 AM",
              "name": "Wake + breakfast / get ready",
              "type": "activity",
              "neighborhood": "Palihotel base",
              "location": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "duration": "Morning preparation",
              "cost": 0,
              "budgetCategory": "Food",
              "notes": "Breakfast from already-funded groceries; no new purchase assumed. Morning prep before leaving, following protected sleep.",
              "detailText": "Wake7AM. Eat breakfast, get ready and leave for the existing itinerary start; no earlier outing added.",
              "mapFrom": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "mapTo": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel%20Seattle%2C%20107%20Pine%20St%2C%20Seattle%2C%20WA%2098101&destination=Palihotel%20Seattle%2C%20107%20Pine%20St%2C%20Seattle%2C%20WA%2098101&travelmode=walking",
              "coordinates": {
                "lat": 47.6097,
                "lng": -122.3402,
                "label": "Palihotel Seattle"
              }
            },
            {
              "time": "7:30 AM",
              "leaveTime": "7:45 AM",
              "endTime": "7:45 AM",
              "name": "Grocery breakfast",
              "type": "activity",
              "neighborhood": "Seattle",
              "location": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "duration": "15 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101",
              "notes": "Already funded in November 1 grocery allowance; no new purchase assumed.",
              "detailText": "Already funded in November 1 grocery allowance; no new purchase assumed.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&destination=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&travelmode=walking",
              "mapFrom": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "mapTo": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6097,
                "lng": -122.3402,
                "label": "Palihotel Seattle"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "7:45 AM",
              "leaveTime": "8:20 AM",
              "endTime": "8:20 AM",
              "name": "Walk to Colman Dock",
              "type": "walk",
              "neighborhood": "Seattle",
              "location": "Seattle Ferry Terminal, 801 Alaskan Way, Seattle, WA",
              "duration": "35 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Seattle+Ferry+Terminal%2C+801+Alaskan+Way%2C+Seattle%2C+WA",
              "notes": "Pier 52; 35-minute planning window.",
              "detailText": "Pier 52; 35-minute planning window.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&destination=Seattle+Ferry+Terminal%2C+801+Alaskan+Way%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "mapTo": "Seattle Ferry Terminal, 801 Alaskan Way, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6026,
                "lng": -122.3382,
                "label": "Seattle Ferry Terminal"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "8:20 AM",
              "leaveTime": "8:45 AM",
              "endTime": "8:45 AM",
              "name": "Ferry boarding buffer",
              "type": "transit",
              "neighborhood": "Seattle",
              "location": "Seattle Ferry Terminal, 801 Alaskan Way, Seattle, WA",
              "duration": "25 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Seattle+Ferry+Terminal%2C+801+Alaskan+Way%2C+Seattle%2C+WA",
              "notes": "Check WSF alerts on the day.",
              "detailText": "Check WSF alerts on the day.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Seattle+Ferry+Terminal%2C+801+Alaskan+Way%2C+Seattle%2C+WA&destination=Seattle+Ferry+Terminal%2C+801+Alaskan+Way%2C+Seattle%2C+WA&travelmode=transit",
              "mapFrom": "Seattle Ferry Terminal, 801 Alaskan Way, Seattle, WA",
              "mapTo": "Seattle Ferry Terminal, 801 Alaskan Way, Seattle, WA",
              "routeMode": "transit",
              "coordinates": {
                "lat": 47.6026,
                "lng": -122.3382,
                "label": "Seattle Ferry Terminal"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "8:45 AM",
              "leaveTime": "9:20 AM",
              "endTime": "9:20 AM",
              "name": "Ferry to Bainbridge",
              "type": "transit",
              "neighborhood": "Bainbridge Island",
              "location": "Bainbridge Island Ferry Terminal, 270 Olympic Dr SE, Bainbridge Island, WA",
              "duration": "35 min",
              "cost": 12,
              "budgetCategory": "Transportation",
              "website": "https://wsdot.com/ferries/schedule/scheduledetailbyroute.aspx?route=sea-bi",
              "notes": "Published fall weekday sailing; 35 minutes. $12 passenger allowance; return foot-passenger fare not collected.",
              "detailText": "Published fall weekday sailing; 35 minutes. $12 passenger allowance; return foot-passenger fare not collected.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Seattle+Ferry+Terminal%2C+801+Alaskan+Way%2C+Seattle%2C+WA&destination=Bainbridge+Island+Ferry+Terminal%2C+270+Olympic+Dr+SE%2C+Bainbridge+Island%2C+WA&travelmode=transit",
              "mapFrom": "Seattle Ferry Terminal, 801 Alaskan Way, Seattle, WA",
              "mapTo": "Bainbridge Island Ferry Terminal, 270 Olympic Dr SE, Bainbridge Island, WA",
              "routeMode": "transit",
              "coordinates": {
                "lat": 47.6222,
                "lng": -122.5108,
                "label": "Bainbridge Island Ferry Terminal"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "9:20 AM",
              "leaveTime": "9:40 AM",
              "endTime": "9:40 AM",
              "name": "Walk to Eagle Harbor",
              "type": "walk",
              "neighborhood": "Bainbridge Island",
              "location": "Pegasus Coffee House, 131 Parfitt Way SW, Bainbridge Island, WA",
              "duration": "20 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://pegasuscoffee.com/pages/original-pegasus-coffee-house-bainbridge",
              "notes": "Waterfront photos toward Pegasus.",
              "detailText": "Waterfront photos toward Pegasus.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Bainbridge+Island+Ferry+Terminal%2C+270+Olympic+Dr+SE%2C+Bainbridge+Island%2C+WA&destination=Pegasus+Coffee+House%2C+131+Parfitt+Way+SW%2C+Bainbridge+Island%2C+WA&travelmode=walking",
              "mapFrom": "Bainbridge Island Ferry Terminal, 270 Olympic Dr SE, Bainbridge Island, WA",
              "mapTo": "Pegasus Coffee House, 131 Parfitt Way SW, Bainbridge Island, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6237,
                "lng": -122.5213,
                "label": "Pegasus Coffee House"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "9:40 AM",
              "leaveTime": "10:15 AM",
              "endTime": "10:15 AM",
              "name": "Pegasus coffee + harbor",
              "type": "coffee",
              "neighborhood": "Bainbridge Island",
              "location": "Pegasus Coffee House, 131 Parfitt Way SW, Bainbridge Island, WA",
              "duration": "35 min",
              "cost": 7,
              "budgetCategory": "Food",
              "website": "https://pegasuscoffee.com/pages/original-pegasus-coffee-house-bainbridge",
              "menu": "https://pegasuscoffee.com/pages/original-pegasus-coffee-house-bainbridge",
              "notes": "131 Parfitt Way. Coffee item price not published in readable operator menu; keep $7 all-in allowance, not a verified tax/tip split.",
              "detailText": "131 Parfitt Way. Coffee item price not published in readable operator menu; keep $7 all-in allowance, not a verified tax/tip split.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Pegasus+Coffee+House%2C+131+Parfitt+Way+SW%2C+Bainbridge+Island%2C+WA&destination=Pegasus+Coffee+House%2C+131+Parfitt+Way+SW%2C+Bainbridge+Island%2C+WA&travelmode=walking",
              "mapFrom": "Pegasus Coffee House, 131 Parfitt Way SW, Bainbridge Island, WA",
              "mapTo": "Pegasus Coffee House, 131 Parfitt Way SW, Bainbridge Island, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6237,
                "lng": -122.5213,
                "label": "Pegasus Coffee House"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "10:15 AM",
              "leaveTime": "10:30 AM",
              "endTime": "10:30 AM",
              "name": "Walk to BIMA",
              "type": "walk",
              "neighborhood": "Bainbridge Island",
              "location": "Bainbridge Island Museum of Art, 550 Winslow Way E, Bainbridge Island, WA",
              "duration": "15 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.biartmuseum.org/",
              "notes": "Short Winslow transfer.",
              "detailText": "Short Winslow transfer.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Pegasus+Coffee+House%2C+131+Parfitt+Way+SW%2C+Bainbridge+Island%2C+WA&destination=Bainbridge+Island+Museum+of+Art%2C+550+Winslow+Way+E%2C+Bainbridge+Island%2C+WA&travelmode=walking",
              "mapFrom": "Pegasus Coffee House, 131 Parfitt Way SW, Bainbridge Island, WA",
              "mapTo": "Bainbridge Island Museum of Art, 550 Winslow Way E, Bainbridge Island, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6247,
                "lng": -122.5139,
                "label": "Bainbridge Island Museum of Art"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "10:30 AM",
              "leaveTime": "11:15 AM",
              "endTime": "11:15 AM",
              "name": "BIMA",
              "type": "activity",
              "neighborhood": "Bainbridge Island",
              "location": "Bainbridge Island Museum of Art, 550 Winslow Way E, Bainbridge Island, WA",
              "duration": "45 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.biartmuseum.org/",
              "notes": "Free Bainbridge Island Museum of Art visit; short self-paced look.",
              "detailText": "Free Bainbridge Island Museum of Art visit; short self-paced look.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Bainbridge+Island+Museum+of+Art%2C+550+Winslow+Way+E%2C+Bainbridge+Island%2C+WA&destination=Bainbridge+Island+Museum+of+Art%2C+550+Winslow+Way+E%2C+Bainbridge+Island%2C+WA&travelmode=walking",
              "mapFrom": "Bainbridge Island Museum of Art, 550 Winslow Way E, Bainbridge Island, WA",
              "mapTo": "Bainbridge Island Museum of Art, 550 Winslow Way E, Bainbridge Island, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6247,
                "lng": -122.5139,
                "label": "Bainbridge Island Museum of Art"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "11:15 AM",
              "leaveTime": "11:30 AM",
              "endTime": "11:30 AM",
              "name": "Winslow photos + lunch walk",
              "type": "meal",
              "neighborhood": "Bainbridge Island",
              "location": "Proper Fish, 112 Madison Ave N, Bainbridge Island, WA",
              "duration": "15 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://order.toasttab.com/online/proper-fish",
              "notes": "Keep the harbor and town experience.",
              "detailText": "Keep the harbor and town experience.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Bainbridge+Island+Museum+of+Art%2C+550+Winslow+Way+E%2C+Bainbridge+Island%2C+WA&destination=Proper+Fish%2C+112+Madison+Ave+N%2C+Bainbridge+Island%2C+WA&travelmode=walking",
              "mapFrom": "Bainbridge Island Museum of Art, 550 Winslow Way E, Bainbridge Island, WA",
              "mapTo": "Proper Fish, 112 Madison Ave N, Bainbridge Island, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6264,
                "lng": -122.5206,
                "label": "Proper Fish"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "11:30 AM",
              "leaveTime": "12:15 PM",
              "endTime": "12:15 PM",
              "name": "Proper Fish · British fish & chips",
              "type": "activity",
              "neighborhood": "Bainbridge Island",
              "location": "Proper Fish, 112 Madison Ave N, Bainbridge Island, WA",
              "duration": "45 min",
              "cost": 29.18,
              "budgetCategory": "Food",
              "website": "https://order.toasttab.com/online/proper-fish",
              "menu": "https://order.toasttab.com/online/proper-fish",
              "notes": "112 Madison Ave N. Your pickup screenshot: food$22 + merchant fee$1.10 + displayed tax$2.12 = $25.22; 18% food-only tip$3.96 → $29.18. Approved exception above$25 meal cap. No purchase placed; November/dine-in parity unconfirmed.",
              "detailText": "112 Madison Ave N. Your pickup screenshot: food$22 + merchant fee$1.10 + displayed tax$2.12 = $25.22; 18% food-only tip$3.96 → $29.18. Approved exception above$25 meal cap. No purchase placed; November/dine-in parity unconfirmed.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Proper+Fish%2C+112+Madison+Ave+N%2C+Bainbridge+Island%2C+WA&destination=Proper+Fish%2C+112+Madison+Ave+N%2C+Bainbridge+Island%2C+WA&travelmode=walking",
              "mapFrom": "Proper Fish, 112 Madison Ave N, Bainbridge Island, WA",
              "mapTo": "Proper Fish, 112 Madison Ave N, Bainbridge Island, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6264,
                "lng": -122.5206,
                "label": "Proper Fish"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "12:15 PM",
              "leaveTime": "12:40 PM",
              "endTime": "12:40 PM",
              "name": "Blackbird treat + harbor photos",
              "type": "activity",
              "neighborhood": "Bainbridge Island",
              "location": "Blackbird Bakery, 210 Winslow Way E, Bainbridge Island, WA",
              "duration": "25 min",
              "cost": 7,
              "budgetCategory": "Food",
              "website": "https://blackbirdbakery.com/menu/",
              "menu": "https://blackbirdbakery.com/menu/",
              "notes": "210 Winslow Way E. Chocolate chip walnut cookie $5.50 + $0.51 conservatively modeled tax + $0.99 tip = $7.00. Qualifying bakery sales may be exempt; actual tax can be lower.",
              "detailText": "210 Winslow Way E. Chocolate chip walnut cookie $5.50 + $0.51 conservatively modeled tax + $0.99 tip = $7.00. Qualifying bakery sales may be exempt; actual tax can be lower.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Proper+Fish%2C+112+Madison+Ave+N%2C+Bainbridge+Island%2C+WA&destination=Blackbird+Bakery%2C+210+Winslow+Way+E%2C+Bainbridge+Island%2C+WA&travelmode=walking",
              "mapFrom": "Proper Fish, 112 Madison Ave N, Bainbridge Island, WA",
              "mapTo": "Blackbird Bakery, 210 Winslow Way E, Bainbridge Island, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6256,
                "lng": -122.519,
                "label": "Blackbird Bakery"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "12:40 PM",
              "leaveTime": "12:55 PM",
              "endTime": "12:55 PM",
              "name": "Walk to ferry terminal",
              "type": "walk",
              "neighborhood": "Bainbridge Island",
              "location": "Bainbridge Island Ferry Terminal, 270 Olympic Dr SE, Bainbridge Island, WA",
              "duration": "15 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://wsdot.com/ferries/schedule/scheduledetailbyroute.aspx?route=sea-bi",
              "notes": "Protect the return connection.",
              "detailText": "Protect the return connection.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Blackbird+Bakery%2C+210+Winslow+Way+E%2C+Bainbridge+Island%2C+WA&destination=Bainbridge+Island+Ferry+Terminal%2C+270+Olympic+Dr+SE%2C+Bainbridge+Island%2C+WA&travelmode=transit",
              "mapFrom": "Blackbird Bakery, 210 Winslow Way E, Bainbridge Island, WA",
              "mapTo": "Bainbridge Island Ferry Terminal, 270 Olympic Dr SE, Bainbridge Island, WA",
              "routeMode": "transit",
              "coordinates": {
                "lat": 47.6222,
                "lng": -122.5108,
                "label": "Bainbridge Island Ferry Terminal"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "12:55 PM",
              "leaveTime": "1:15 PM",
              "endTime": "1:15 PM",
              "name": "Return boarding buffer",
              "type": "walk",
              "neighborhood": "Bainbridge Island",
              "location": "Bainbridge Island Ferry Terminal, 270 Olympic Dr SE, Bainbridge Island, WA",
              "duration": "20 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://wsdot.com/ferries/schedule/scheduledetailbyroute.aspx?route=sea-bi",
              "notes": "Do not wait for a later ferry if keeping the afternoon cruise.",
              "detailText": "Do not wait for a later ferry if keeping the afternoon cruise.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Bainbridge+Island+Ferry+Terminal%2C+270+Olympic+Dr+SE%2C+Bainbridge+Island%2C+WA&destination=Bainbridge+Island+Ferry+Terminal%2C+270+Olympic+Dr+SE%2C+Bainbridge+Island%2C+WA&travelmode=walking",
              "mapFrom": "Bainbridge Island Ferry Terminal, 270 Olympic Dr SE, Bainbridge Island, WA",
              "mapTo": "Bainbridge Island Ferry Terminal, 270 Olympic Dr SE, Bainbridge Island, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6222,
                "lng": -122.5108,
                "label": "Bainbridge Island Ferry Terminal"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "1:15 PM",
              "leaveTime": "1:50 PM",
              "endTime": "1:50 PM",
              "name": "Ferry to Seattle",
              "type": "transit",
              "neighborhood": "Seattle",
              "location": "Seattle Ferry Terminal, 801 Alaskan Way, Seattle, WA",
              "duration": "35 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Seattle+Ferry+Terminal%2C+801+Alaskan+Way%2C+Seattle%2C+WA",
              "notes": "Published fall weekday sailing. A disruption changes the cruise plan.",
              "detailText": "Published fall weekday sailing. A disruption changes the cruise plan.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Bainbridge+Island+Ferry+Terminal%2C+270+Olympic+Dr+SE%2C+Bainbridge+Island%2C+WA&destination=Seattle+Ferry+Terminal%2C+801+Alaskan+Way%2C+Seattle%2C+WA&travelmode=transit",
              "mapFrom": "Bainbridge Island Ferry Terminal, 270 Olympic Dr SE, Bainbridge Island, WA",
              "mapTo": "Seattle Ferry Terminal, 801 Alaskan Way, Seattle, WA",
              "routeMode": "transit",
              "coordinates": {
                "lat": 47.6026,
                "lng": -122.3382,
                "label": "Seattle Ferry Terminal"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "1:50 PM",
              "leaveTime": "2:15 PM",
              "endTime": "2:15 PM",
              "name": "Walk to Pier 55 + priority queue",
              "type": "walk",
              "neighborhood": "Seattle",
              "location": "Argosy Cruises Pier 55, 1101 Alaskan Way, Seattle, WA",
              "duration": "25 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.argosycruises.com/argosy-cruises/harbor-cruise/",
              "notes": "1101 Alaskan Way. Arrive by 2:15 PM for requested First to Board; exact early-arrival rule and add-on need confirmation.",
              "detailText": "1101 Alaskan Way. Arrive by 2:15 PM for requested First to Board; exact early-arrival rule and add-on need confirmation.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Seattle+Ferry+Terminal%2C+801+Alaskan+Way%2C+Seattle%2C+WA&destination=Argosy+Cruises+Pier+55%2C+1101+Alaskan+Way%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Seattle Ferry Terminal, 801 Alaskan Way, Seattle, WA",
              "mapTo": "Argosy Cruises Pier 55, 1101 Alaskan Way, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6047,
                "lng": -122.3399,
                "label": "Argosy Cruises Pier 55"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "2:15 PM",
              "leaveTime": "2:45 PM",
              "endTime": "2:45 PM",
              "name": "First to Board / indoor seat",
              "type": "walk",
              "neighborhood": "Seattle",
              "location": "Argosy Cruises Pier 55, 1101 Alaskan Way, Seattle, WA",
              "duration": "30 min",
              "cost": 20,
              "budgetCategory": "Entrance fees",
              "website": "https://www.argosycruises.com/argosy-cruises/harbor-cruise/",
              "notes": "Covered waiting area with paid add-on. Boarding begins around 20 minutes before departure; first access is not a reserved window seat.\nSeparate $20 First to Board allowance; inclusion in$59.79 quote remains unconfirmed. Priority boarding does not guarantee a window seat.",
              "detailText": "Covered waiting area with paid add-on. Boarding begins around 20 minutes before departure; first access is not a reserved window seat.\nSeparate $20 First to Board allowance; inclusion in$59.79 quote remains unconfirmed. Priority boarding does not guarantee a window seat.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Argosy+Cruises+Pier+55%2C+1101+Alaskan+Way%2C+Seattle%2C+WA&destination=Argosy+Cruises+Pier+55%2C+1101+Alaskan+Way%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Argosy Cruises Pier 55, 1101 Alaskan Way, Seattle, WA",
              "mapTo": "Argosy Cruises Pier 55, 1101 Alaskan Way, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6047,
                "lng": -122.3399,
                "label": "Argosy Cruises Pier 55"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "2:45 PM",
              "leaveTime": "3:45 PM",
              "endTime": "3:45 PM",
              "name": "Argosy Harbor Cruise · two cocktails",
              "type": "activity",
              "neighborhood": "Seattle",
              "location": "Argosy Cruises Pier 55, 1101 Alaskan Way, Seattle, WA",
              "duration": "60 min",
              "cost": 105.93,
              "budgetCategory": "Entrance fees",
              "website": "https://www.argosycruises.com/argosy-cruises/harbor-cruise/",
              "menu": "https://www.argosycruises.com/menu/",
              "notes": "Tuesday Nov3,2:45–3:45 PM. Screenshot ticket quote$52+$7.79 taxes/fees=$59.79. Two full-price modeled$16 cocktails: each$1.69 tax+$2.88 tip=$20.57; two=$41.14. No unconfirmed beverage discount counted. Voluntary guide-tip fund$5. Total this block$105.93; separate$20 boarding allowance above. Quoted, not booked; November bar price unconfirmed. Indoor seating available; docks/transfers may be rainy.\nMenu: https://www.argosycruises.com/menu/",
              "detailText": "Tuesday Nov3,2:45–3:45 PM. Screenshot ticket quote$52+$7.79 taxes/fees=$59.79. Two full-price modeled$16 cocktails: each$1.69 tax+$2.88 tip=$20.57; two=$41.14. No unconfirmed beverage discount counted. Voluntary guide-tip fund$5. Total this block$105.93; separate$20 boarding allowance above. Quoted, not booked; November bar price unconfirmed. Indoor seating available; docks/transfers may be rainy.\nMenu: https://www.argosycruises.com/menu/",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Argosy+Cruises+Pier+55%2C+1101+Alaskan+Way%2C+Seattle%2C+WA&destination=Argosy+Cruises+Pier+55%2C+1101+Alaskan+Way%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Argosy Cruises Pier 55, 1101 Alaskan Way, Seattle, WA",
              "mapTo": "Argosy Cruises Pier 55, 1101 Alaskan Way, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6047,
                "lng": -122.3399,
                "label": "Argosy Cruises Pier 55"
              },
              "priceStatus": "quoted / modeled",
              "budgetParts": [
                {
                  "category": "Entrance fees",
                  "amount": 59.79
                },
                {
                  "category": "Cocktails and social",
                  "amount": 41.14
                },
                {
                  "category": "Contingency",
                  "amount": 5
                }
              ]
            },
            {
              "time": "3:45 PM",
              "leaveTime": "4:00 PM",
              "endTime": "4:00 PM",
              "name": "Disembark / waterfront transition",
              "type": "walk",
              "neighborhood": "Seattle",
              "location": "Argosy Cruises Pier 55, 1101 Alaskan Way, Seattle, WA",
              "duration": "15 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.argosycruises.com/argosy-cruises/harbor-cruise/",
              "notes": "Cruise scheduled to end3:45. Retain time for leaving vessel.",
              "detailText": "Cruise scheduled to end3:45. Retain time for leaving vessel.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Argosy+Cruises+Pier+55%2C+1101+Alaskan+Way%2C+Seattle%2C+WA&destination=Argosy+Cruises+Pier+55%2C+1101+Alaskan+Way%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Argosy Cruises Pier 55, 1101 Alaskan Way, Seattle, WA",
              "mapTo": "Argosy Cruises Pier 55, 1101 Alaskan Way, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6047,
                "lng": -122.3399,
                "label": "Argosy Cruises Pier 55"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "4:00 PM",
              "leaveTime": "4:50 PM",
              "endTime": "4:50 PM",
              "name": "Link + walk to Rhein Haus",
              "type": "transit",
              "neighborhood": "Seattle",
              "location": "Rhein Haus, 912 12th Ave, Seattle, WA",
              "duration": "50 min",
              "cost": 6,
              "budgetCategory": "Transportation",
              "website": "https://www.rheinhausseattle.com/menu-happy-hour",
              "notes": "912 12th Ave. 50-minute planning allowance including walk from waterfront to station, train and Capitol Hill walk.",
              "detailText": "912 12th Ave. 50-minute planning allowance including walk from waterfront to station, train and Capitol Hill walk.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Argosy+Cruises+Pier+55%2C+1101+Alaskan+Way%2C+Seattle%2C+WA&destination=Rhein+Haus%2C+912+12th+Ave%2C+Seattle%2C+WA&travelmode=transit",
              "mapFrom": "Argosy Cruises Pier 55, 1101 Alaskan Way, Seattle, WA",
              "mapTo": "Rhein Haus, 912 12th Ave, Seattle, WA",
              "routeMode": "transit",
              "coordinates": {
                "lat": 47.6116,
                "lng": -122.3165,
                "label": "Rhein Haus"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "4:50 PM",
              "leaveTime": "5:30 PM",
              "endTime": "5:30 PM",
              "name": "Happy hour · Rhein Haus",
              "type": "cocktails",
              "neighborhood": "Seattle",
              "location": "Rhein Haus, 912 12th Ave, Seattle, WA",
              "duration": "40 min",
              "cost": 10.28,
              "budgetCategory": "Cocktails and social",
              "website": "https://www.rheinhausseattle.com/menu-happy-hour",
              "menu": "https://www.rheinhausseattle.com/s/RHS_HappyHour_8-8-25_WEB.pdf",
              "notes": "Weekdays 3–6 PM. Current linked PDF: draft Negroni, margarita, old fashioned or Moscow mule $8 +$0.84 tax +$1.44 tip = $10.28. Independent of cruise beverage discount; November prices can change.\nOrder: Happy-hour draft Negroni · or margarita / old fashioned / Moscow mule. Base $8.00; other fee $0.00; tax $0.84; 18% pre-tax tip $1.44; total $10.28. Currently linked HH PDF downloaded and read Oct22: $8 draft cocktails, Mon–Fri 3–6 PM. Espresso martini $8 came from an older menu and is not the chosen current offer.",
              "detailText": "Weekdays 3–6 PM. Current linked PDF: draft Negroni, margarita, old fashioned or Moscow mule $8 +$0.84 tax +$1.44 tip = $10.28. Independent of cruise beverage discount; November prices can change.\nOrder: Happy-hour draft Negroni · or margarita / old fashioned / Moscow mule. Base $8.00; other fee $0.00; tax $0.84; 18% pre-tax tip $1.44; total $10.28. Currently linked HH PDF downloaded and read Oct22: $8 draft cocktails, Mon–Fri 3–6 PM. Espresso martini $8 came from an older menu and is not the chosen current offer.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Rhein+Haus%2C+912+12th+Ave%2C+Seattle%2C+WA&destination=Rhein+Haus%2C+912+12th+Ave%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Rhein Haus, 912 12th Ave, Seattle, WA",
              "mapTo": "Rhein Haus, 912 12th Ave, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6116,
                "lng": -122.3165,
                "label": "Rhein Haus"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "5:30 PM",
              "leaveTime": "5:45 PM",
              "endTime": "5:45 PM",
              "name": "Walk to DANBO",
              "type": "walk",
              "neighborhood": "Seattle",
              "location": "Ramen DANBO, 1222 E Pine St, Seattle, WA",
              "duration": "15 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://ramendanbo.com/our-menu-seattle/",
              "notes": "1222 E Pine St; same Capitol Hill cluster.",
              "detailText": "1222 E Pine St; same Capitol Hill cluster.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Rhein+Haus%2C+912+12th+Ave%2C+Seattle%2C+WA&destination=Ramen+DANBO%2C+1222+E+Pine+St%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Rhein Haus, 912 12th Ave, Seattle, WA",
              "mapTo": "Ramen DANBO, 1222 E Pine St, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6154,
                "lng": -122.3159,
                "label": "Ramen DANBO"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "5:45 PM",
              "leaveTime": "6:45 PM",
              "endTime": "6:45 PM",
              "name": "Dinner · Ramen DANBO",
              "type": "meal",
              "neighborhood": "Seattle",
              "location": "Ramen DANBO, 1222 E Pine St, Seattle, WA",
              "duration": "60 min",
              "cost": 19.22,
              "budgetCategory": "Food",
              "website": "https://ramendanbo.com/our-menu-seattle/",
              "menu": "https://ramendanbo.com/our-menu-seattle/",
              "notes": "Classic + egg $14.95 +$1.58 tax +$2.69 tip = $19.22. If queue long, shorten optional browsing or use a quick nearby dinner.\nOrder: Classic ramen + egg. Base $14.95; other fee $0.00; tax $1.58; 18% pre-tax tip $2.69; total $19.22. $12.95 + $2. No reservations; queue can change timing.",
              "detailText": "Classic + egg $14.95 +$1.58 tax +$2.69 tip = $19.22. If queue long, shorten optional browsing or use a quick nearby dinner.\nOrder: Classic ramen + egg. Base $14.95; other fee $0.00; tax $1.58; 18% pre-tax tip $2.69; total $19.22. $12.95 + $2. No reservations; queue can change timing.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Ramen+DANBO%2C+1222+E+Pine+St%2C+Seattle%2C+WA&destination=Ramen+DANBO%2C+1222+E+Pine+St%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Ramen DANBO, 1222 E Pine St, Seattle, WA",
              "mapTo": "Ramen DANBO, 1222 E Pine St, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6154,
                "lng": -122.3159,
                "label": "Ramen DANBO"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "6:45 PM",
              "leaveTime": "7:00 PM",
              "endTime": "7:00 PM",
              "name": "Short Capitol Hill browse",
              "type": "activity",
              "neighborhood": "Seattle",
              "location": "Ramen DANBO, 1222 E Pine St, Seattle, WA",
              "duration": "15 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://ramendanbo.com/our-menu-seattle/",
              "notes": "Optional; absorbs dinner queue.",
              "detailText": "Optional; absorbs dinner queue.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Ramen+DANBO%2C+1222+E+Pine+St%2C+Seattle%2C+WA&destination=Ramen+DANBO%2C+1222+E+Pine+St%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Ramen DANBO, 1222 E Pine St, Seattle, WA",
              "mapTo": "Ramen DANBO, 1222 E Pine St, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6154,
                "lng": -122.3159,
                "label": "Ramen DANBO"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "7:00 PM",
              "leaveTime": "7:45 PM",
              "endTime": "7:45 PM",
              "name": "Link + walk to Palihotel",
              "type": "transit",
              "neighborhood": "Seattle",
              "location": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "duration": "45 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101",
              "notes": "Hotel by8 PM.",
              "detailText": "Hotel by8 PM.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Ramen+DANBO%2C+1222+E+Pine+St%2C+Seattle%2C+WA&destination=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&travelmode=transit",
              "mapFrom": "Ramen DANBO, 1222 E Pine St, Seattle, WA",
              "mapTo": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "routeMode": "transit",
              "coordinates": {
                "lat": 47.6097,
                "lng": -122.3402,
                "label": "Palihotel Seattle"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "8:00 PM",
              "leaveTime": "10:00 PM",
              "endTime": "10:00 PM",
              "name": "Hotel · evening wind-down",
              "type": "rest",
              "neighborhood": "Seattle",
              "location": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "duration": "Until10PM",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101",
              "notes": "No daytime hotel reset. Evening relaxation/packing only; protected sleep begins10PM.",
              "detailText": "No daytime hotel reset. Evening relaxation/packing only; protected sleep begins10PM.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&destination=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&travelmode=walking",
              "mapFrom": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "mapTo": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6097,
                "lng": -122.3402,
                "label": "Palihotel Seattle"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "10:00 PM",
              "endTime": "7:00 AM",
              "endDate": "2026-11-04",
              "name": "Sleep · protected overnight",
              "type": "rest",
              "neighborhood": "Seattle hotel",
              "location": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "duration": "Protected overnight",
              "cost": 0,
              "budgetCategory": "Food",
              "notes": "Protected sleep from10PM until the next morning. Pacific time (America/Los_Angeles); no sightseeing, packing or transit scheduled inside this block.",
              "detailText": "Sleep starts10PM, separate from evening wind-down. Overnight room protected; morning preparation follows sleep, not part of it.",
              "mapFrom": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "mapTo": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel%20Seattle%2C%20107%20Pine%20St%2C%20Seattle%2C%20WA%2098101&destination=Palihotel%20Seattle%2C%20107%20Pine%20St%2C%20Seattle%2C%20WA%2098101&travelmode=walking",
              "coordinates": {
                "lat": 47.6097,
                "lng": -122.3402,
                "label": "Palihotel Seattle"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "day-4",
      "isoDate": "2026-11-04",
      "date": "Wed, Nov 4",
      "city": "Seattle",
      "title": "Coffee / matcha, library, Monorail + Space Needle base, Kerry Park + Toulouse",
      "theme": "Public transit / walking; hotel by 8 PM; no daytime hotel reset; optional browsing absorbs queues",
      "dayTotal": 90.72,
      "weatherPlan": "Outdoor photos optional in rain; indoor cafés, library or cruise cabin offer cover. No guarantee of staying dry during transfers.",
      "segments": [
        {
          "label": "Morning / afternoon / evening · Pacific time",
          "items": [
            {
              "time": "7:00 AM",
              "endTime": "8:00 AM",
              "leaveTime": "8:00 AM",
              "name": "Wake + breakfast / get ready",
              "type": "activity",
              "neighborhood": "Palihotel base",
              "location": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "duration": "Morning preparation",
              "cost": 0,
              "budgetCategory": "Food",
              "notes": "Breakfast from already-funded groceries; no new purchase assumed. Morning prep before leaving, following protected sleep.",
              "detailText": "Wake7AM. Eat breakfast, get ready and leave for the existing itinerary start; no earlier outing added.",
              "mapFrom": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "mapTo": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel%20Seattle%2C%20107%20Pine%20St%2C%20Seattle%2C%20WA%2098101&destination=Palihotel%20Seattle%2C%20107%20Pine%20St%2C%20Seattle%2C%20WA%2098101&travelmode=walking",
              "coordinates": {
                "lat": 47.6097,
                "lng": -122.3402,
                "label": "Palihotel Seattle"
              }
            },
            {
              "time": "8:00 AM",
              "leaveTime": "8:40 AM",
              "endTime": "8:40 AM",
              "name": "Link + walk to Capitol Hill",
              "type": "transit",
              "neighborhood": "Seattle",
              "location": "Anchorhead Coffee, 1115 12th Ave, Seattle, WA",
              "duration": "40 min",
              "cost": 12,
              "budgetCategory": "Transportation",
              "website": "https://www.google.com/maps/search/?api=1&query=Anchorhead+Coffee%2C+1115+12th+Ave%2C+Seattle%2C+WA",
              "notes": "Breakfast from Nov 1 groceries; optional pastry purchase not included.\nConservative bus/Link allowance$12: regional day pass$6 plus$6 headroom. Buy the pass explicitly; ORCA e-purse is not an automatic daily cap. Monorail is extra.",
              "detailText": "Breakfast from Nov 1 groceries; optional pastry purchase not included.\nConservative bus/Link allowance$12: regional day pass$6 plus$6 headroom. Buy the pass explicitly; ORCA e-purse is not an automatic daily cap. Monorail is extra.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&destination=Anchorhead+Coffee%2C+1115+12th+Ave%2C+Seattle%2C+WA&travelmode=transit",
              "mapFrom": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "mapTo": "Anchorhead Coffee, 1115 12th Ave, Seattle, WA",
              "routeMode": "transit",
              "coordinates": {
                "lat": 47.6121,
                "lng": -122.317,
                "label": "Anchorhead Coffee"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "8:40 AM",
              "leaveTime": "9:30 AM",
              "endTime": "9:30 AM",
              "name": "Anchorhead · latte tasting",
              "type": "coffee",
              "neighborhood": "Seattle",
              "location": "Anchorhead Coffee, 1115 12th Ave, Seattle, WA",
              "duration": "50 min",
              "cost": 8.04,
              "budgetCategory": "Food",
              "website": "https://anchorheadcoffee.com/pages/capitol-hill",
              "menu": "https://anchorheadcoffee.com/pages/capitol-hill",
              "notes": "1115 12th Ave. 10 oz latte $6.25 + $0.66 tax + $1.13 tip = $8.04. Weekday 7 AM–6 PM.\nOrder: 10 oz latte; dairy, no syrup. Base $6.25; other fee $0.00; tax $0.66; 18% pre-tax tip $1.13; total $8.04. Operator-linked Summer 2026 menu; November changes possible. Weekdays 7 AM–6 PM.",
              "detailText": "1115 12th Ave. 10 oz latte $6.25 + $0.66 tax + $1.13 tip = $8.04. Weekday 7 AM–6 PM.\nOrder: 10 oz latte; dairy, no syrup. Base $6.25; other fee $0.00; tax $0.66; 18% pre-tax tip $1.13; total $8.04. Operator-linked Summer 2026 menu; November changes possible. Weekdays 7 AM–6 PM.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Anchorhead+Coffee%2C+1115+12th+Ave%2C+Seattle%2C+WA&destination=Anchorhead+Coffee%2C+1115+12th+Ave%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Anchorhead Coffee, 1115 12th Ave, Seattle, WA",
              "mapTo": "Anchorhead Coffee, 1115 12th Ave, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6121,
                "lng": -122.317,
                "label": "Anchorhead Coffee"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "9:30 AM",
              "leaveTime": "10:15 AM",
              "endTime": "10:15 AM",
              "name": "Capitol Hill · browse + short walk",
              "type": "activity",
              "neighborhood": "Seattle",
              "location": "Phê, 721 E Pine St, Seattle, WA",
              "duration": "45 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Ph%C3%AA%2C+721+E+Pine+St%2C+Seattle%2C+WA",
              "notes": "Self-paced photo / shop window time, then walk toward 721 E Pine. Outdoors optional in rain; extend café time instead.",
              "detailText": "Self-paced photo / shop window time, then walk toward 721 E Pine. Outdoors optional in rain; extend café time instead.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Anchorhead+Coffee%2C+1115+12th+Ave%2C+Seattle%2C+WA&destination=Ph%C3%AA%2C+721+E+Pine+St%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Anchorhead Coffee, 1115 12th Ave, Seattle, WA",
              "mapTo": "Phê, 721 E Pine St, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6152,
                "lng": -122.3226,
                "label": "Phê"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "10:15 AM",
              "leaveTime": "11:15 AM",
              "endTime": "11:15 AM",
              "name": "Phê · matcha + bánh mì",
              "type": "coffee",
              "neighborhood": "Seattle",
              "location": "Phê, 721 E Pine St, Seattle, WA",
              "duration": "60 min",
              "cost": 23.78,
              "budgetCategory": "Food",
              "website": "https://www.toasttab.com/local/order/phe-yet/",
              "menu": "https://www.toasttab.com/local/order/phe-yet/",
              "notes": "721 E Pine St. Basic matcha $7.50 + bánh mì $11 = $18.50 + $1.95 tax + $3.33 tip = $23.78. One café meal under $25. Other drinks shown separately, not additional included purchases.\nOrder: Basic matcha latte + bánh mì. Base $18.50; other fee $0.00; tax $1.95; 18% pre-tax tip $3.33; total $23.78. Merchant ordering menu. Matcha $7.50 + bánh mì $11. Weekdays 8 AM–4 PM; pickup/dine-in parity unconfirmed.",
              "detailText": "721 E Pine St. Basic matcha $7.50 + bánh mì $11 = $18.50 + $1.95 tax + $3.33 tip = $23.78. One café meal under $25. Other drinks shown separately, not additional included purchases.\nOrder: Basic matcha latte + bánh mì. Base $18.50; other fee $0.00; tax $1.95; 18% pre-tax tip $3.33; total $23.78. Merchant ordering menu. Matcha $7.50 + bánh mì $11. Weekdays 8 AM–4 PM; pickup/dine-in parity unconfirmed.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Ph%C3%AA%2C+721+E+Pine+St%2C+Seattle%2C+WA&destination=Ph%C3%AA%2C+721+E+Pine+St%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Phê, 721 E Pine St, Seattle, WA",
              "mapTo": "Phê, 721 E Pine St, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6152,
                "lng": -122.3226,
                "label": "Phê"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "11:15 AM",
              "leaveTime": "12:00 PM",
              "endTime": "12:00 PM",
              "name": "Bus / Link + walk to Central Library",
              "type": "transit",
              "neighborhood": "Seattle",
              "location": "Seattle Central Library, 1000 4th Ave, Seattle, WA",
              "duration": "45 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Seattle+Central+Library%2C+1000+4th+Ave%2C+Seattle%2C+WA",
              "notes": "45-minute planning allowance. Route 2 via First Hill or Link + downtown walk; check actual departures.",
              "detailText": "45-minute planning allowance. Route 2 via First Hill or Link + downtown walk; check actual departures.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Ph%C3%AA%2C+721+E+Pine+St%2C+Seattle%2C+WA&destination=Seattle+Central+Library%2C+1000+4th+Ave%2C+Seattle%2C+WA&travelmode=transit",
              "mapFrom": "Phê, 721 E Pine St, Seattle, WA",
              "mapTo": "Seattle Central Library, 1000 4th Ave, Seattle, WA",
              "routeMode": "transit",
              "coordinates": {
                "lat": 47.6067,
                "lng": -122.3326,
                "label": "Seattle Central Library"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "12:00 PM",
              "leaveTime": "1:00 PM",
              "endTime": "1:00 PM",
              "name": "Central Library · indoor architecture",
              "type": "activity",
              "neighborhood": "Seattle",
              "location": "Seattle Central Library, 1000 4th Ave, Seattle, WA",
              "duration": "60 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Seattle+Central+Library%2C+1000+4th+Ave%2C+Seattle%2C+WA",
              "notes": "1000 4th Ave. Free; Wednesday 10 AM–8 PM. Architecture / Books Spiral; respect readers and posted photo rules. Weather-friendly replacement activity.",
              "detailText": "1000 4th Ave. Free; Wednesday 10 AM–8 PM. Architecture / Books Spiral; respect readers and posted photo rules. Weather-friendly replacement activity.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Seattle+Central+Library%2C+1000+4th+Ave%2C+Seattle%2C+WA&destination=Seattle+Central+Library%2C+1000+4th+Ave%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Seattle Central Library, 1000 4th Ave, Seattle, WA",
              "mapTo": "Seattle Central Library, 1000 4th Ave, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6067,
                "lng": -122.3326,
                "label": "Seattle Central Library"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "1:00 PM",
              "leaveTime": "1:25 PM",
              "endTime": "1:25 PM",
              "name": "Walk / bus toward Nana’s",
              "type": "transit",
              "neighborhood": "Seattle",
              "location": "Nana’s Green Tea, 1007 Stewart St Suite 103, Seattle, WA",
              "duration": "25 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Nana%E2%80%99s+Green+Tea%2C+1007+Stewart+St+Suite+103%2C+Seattle%2C+WA",
              "notes": "1007 Stewart St, Suite 103; approximately 20–25 minute downtown walk, bus if raining.",
              "detailText": "1007 Stewart St, Suite 103; approximately 20–25 minute downtown walk, bus if raining.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Seattle+Central+Library%2C+1000+4th+Ave%2C+Seattle%2C+WA&destination=Nana%E2%80%99s+Green+Tea%2C+1007+Stewart+St+Suite+103%2C+Seattle%2C+WA&travelmode=transit",
              "mapFrom": "Seattle Central Library, 1000 4th Ave, Seattle, WA",
              "mapTo": "Nana’s Green Tea, 1007 Stewart St Suite 103, Seattle, WA",
              "routeMode": "transit",
              "coordinates": {
                "lat": 47.615,
                "lng": -122.3333,
                "label": "Nana’s Green Tea"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "1:25 PM",
              "leaveTime": "2:00 PM",
              "endTime": "2:00 PM",
              "name": "Nana’s · second matcha tasting",
              "type": "coffee",
              "neighborhood": "Seattle",
              "location": "Nana’s Green Tea, 1007 Stewart St Suite 103, Seattle, WA",
              "duration": "35 min",
              "cost": 8.36,
              "budgetCategory": "Food",
              "website": "https://www.toasttab.com/local/order/nanasgreentea/item-matcha-latte_56debc73-e48d-4460-b545-ee7cb7860089",
              "menu": "https://www.toasttab.com/local/order/nanasgreentea/item-matcha-latte_56debc73-e48d-4460-b545-ee7cb7860089",
              "notes": "Small latte $6.50 + $0.69 tax + $1.17 tip = $8.36. Compare straightforward Japanese matcha with Phê. Optional tasting checkbox removes purchase, retains browsing time.\nOrder: Small matcha latte; dairy, no extras. Base $6.50; other fee $0.00; tax $0.69; 18% pre-tax tip $1.17; total $8.36. Small size $6.50; medium +$0.50, alternative milk +$1. Seattle branch opens 11 AM daily.",
              "detailText": "Small latte $6.50 + $0.69 tax + $1.17 tip = $8.36. Compare straightforward Japanese matcha with Phê. Optional tasting checkbox removes purchase, retains browsing time.\nOrder: Small matcha latte; dairy, no extras. Base $6.50; other fee $0.00; tax $0.69; 18% pre-tax tip $1.17; total $8.36. Small size $6.50; medium +$0.50, alternative milk +$1. Seattle branch opens 11 AM daily.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Nana%E2%80%99s+Green+Tea%2C+1007+Stewart+St+Suite+103%2C+Seattle%2C+WA&destination=Nana%E2%80%99s+Green+Tea%2C+1007+Stewart+St+Suite+103%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Nana’s Green Tea, 1007 Stewart St Suite 103, Seattle, WA",
              "mapTo": "Nana’s Green Tea, 1007 Stewart St Suite 103, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.615,
                "lng": -122.3333,
                "label": "Nana’s Green Tea"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "2:00 PM",
              "leaveTime": "2:15 PM",
              "endTime": "2:15 PM",
              "name": "Walk to Westlake Monorail station",
              "type": "walk",
              "neighborhood": "Seattle",
              "location": "Westlake Center Monorail Station, 400 Pine St, third floor, Seattle, WA",
              "duration": "15 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Westlake+Center+Monorail+Station%2C+400+Pine+St%2C+third+floor%2C+Seattle%2C+WA",
              "notes": "400 Pine St, third floor of Westlake Center. Separate service from Link.",
              "detailText": "400 Pine St, third floor of Westlake Center. Separate service from Link.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Nana%E2%80%99s+Green+Tea%2C+1007+Stewart+St+Suite+103%2C+Seattle%2C+WA&destination=Westlake+Center+Monorail+Station%2C+400+Pine+St%2C+third+floor%2C+Seattle%2C+WA&travelmode=transit",
              "mapFrom": "Nana’s Green Tea, 1007 Stewart St Suite 103, Seattle, WA",
              "mapTo": "Westlake Center Monorail Station, 400 Pine St, third floor, Seattle, WA",
              "routeMode": "transit",
              "coordinates": {
                "lat": 47.6113,
                "lng": -122.3365,
                "label": "Westlake Center Monorail Station"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "2:15 PM",
              "leaveTime": "2:30 PM",
              "endTime": "2:30 PM",
              "name": "Monorail · Westlake → Seattle Center",
              "type": "transit",
              "neighborhood": "Seattle",
              "location": "Seattle Center Monorail Station, 370 Thomas St, Seattle, WA",
              "duration": "15 min",
              "cost": 4,
              "budgetCategory": "Transportation",
              "website": "https://www.seattlemonorail.com/buy-tickets-to-ride-with-us/",
              "notes": "370 Thomas St arrival; about 2 minutes aboard, normally every 8–10 minutes. Window includes faregate/waiting. Adult $4 one way; $8 round trip budgeted separately from bus/Link allowance.",
              "detailText": "370 Thomas St arrival; about 2 minutes aboard, normally every 8–10 minutes. Window includes faregate/waiting. Adult $4 one way; $8 round trip budgeted separately from bus/Link allowance.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Westlake+Center+Monorail+Station%2C+400+Pine+St%2C+third+floor%2C+Seattle%2C+WA&destination=Seattle+Center+Monorail+Station%2C+370+Thomas+St%2C+Seattle%2C+WA&travelmode=transit",
              "mapFrom": "Westlake Center Monorail Station, 400 Pine St, third floor, Seattle, WA",
              "mapTo": "Seattle Center Monorail Station, 370 Thomas St, Seattle, WA",
              "routeMode": "transit",
              "coordinates": {
                "lat": 47.6212,
                "lng": -122.3508,
                "label": "Seattle Center Monorail Station"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "2:30 PM",
              "leaveTime": "3:00 PM",
              "endTime": "3:00 PM",
              "name": "Space Needle exterior + SpaceBase gift shop",
              "type": "activity",
              "neighborhood": "Seattle",
              "location": "Space Needle / SpaceBase Gift Shop, 400 Broad St, Seattle, WA",
              "duration": "30 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://space-needle.myshopify.com/",
              "notes": "400 Broad St. Exterior photos are free; no observation-deck ticket budgeted. Gift-shop stop included, but official pages do not explicitly confirm ticket-free access or separate November shop hours: ask staff; if restricted, keep exterior photos. Souvenir purchases extra.",
              "detailText": "400 Broad St. Exterior photos are free; no observation-deck ticket budgeted. Gift-shop stop included, but official pages do not explicitly confirm ticket-free access or separate November shop hours: ask staff; if restricted, keep exterior photos. Souvenir purchases extra.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Seattle+Center+Monorail+Station%2C+370+Thomas+St%2C+Seattle%2C+WA&destination=Space+Needle+%2F+SpaceBase+Gift+Shop%2C+400+Broad+St%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Seattle Center Monorail Station, 370 Thomas St, Seattle, WA",
              "mapTo": "Space Needle / SpaceBase Gift Shop, 400 Broad St, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6205,
                "lng": -122.3493,
                "label": "Space Needle / SpaceBase Gift Shop"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "3:00 PM",
              "leaveTime": "3:45 PM",
              "endTime": "3:45 PM",
              "name": "Bus + short walk to Kerry Park",
              "type": "transit",
              "neighborhood": "Seattle",
              "location": "Kerry Park, 211 W Highland Dr, Seattle, WA",
              "duration": "45 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Kerry+Park%2C+211+W+Highland+Dr%2C+Seattle%2C+WA",
              "notes": "Board an uphill Queen Anne bus (2/13 toward Queen Anne, verify departure) near Seattle Center; allow waiting and final walk to 211 W Highland Dr. Replaces generic Queen Anne browsing.",
              "detailText": "Board an uphill Queen Anne bus (2/13 toward Queen Anne, verify departure) near Seattle Center; allow waiting and final walk to 211 W Highland Dr. Replaces generic Queen Anne browsing.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Space+Needle+%2F+SpaceBase+Gift+Shop%2C+400+Broad+St%2C+Seattle%2C+WA&destination=Kerry+Park%2C+211+W+Highland+Dr%2C+Seattle%2C+WA&travelmode=transit",
              "mapFrom": "Space Needle / SpaceBase Gift Shop, 400 Broad St, Seattle, WA",
              "mapTo": "Kerry Park, 211 W Highland Dr, Seattle, WA",
              "routeMode": "transit",
              "coordinates": {
                "lat": 47.6295,
                "lng": -122.3599,
                "label": "Kerry Park"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "3:45 PM",
              "leaveTime": "4:55 PM",
              "endTime": "4:55 PM",
              "name": "Kerry Park · skyline",
              "type": "activity",
              "neighborhood": "Seattle",
              "location": "Kerry Park, 211 W Highland Dr, Seattle, WA",
              "duration": "70 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.seattle.gov/parks/allparks/kerry-park",
              "notes": "211 W Highland Dr. Free. Nov 4 sunset ~4:46 PM; weather may obscure skyline. This is outdoors: use rain cover or skip for indoor browsing if staying dry takes priority.",
              "detailText": "211 W Highland Dr. Free. Nov 4 sunset ~4:46 PM; weather may obscure skyline. This is outdoors: use rain cover or skip for indoor browsing if staying dry takes priority.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Kerry+Park%2C+211+W+Highland+Dr%2C+Seattle%2C+WA&destination=Kerry+Park%2C+211+W+Highland+Dr%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Kerry Park, 211 W Highland Dr, Seattle, WA",
              "mapTo": "Kerry Park, 211 W Highland Dr, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6295,
                "lng": -122.3599,
                "label": "Kerry Park"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "4:55 PM",
              "leaveTime": "5:20 PM",
              "endTime": "5:20 PM",
              "name": "Bus / downhill walk to Uptown",
              "type": "transit",
              "neighborhood": "Seattle",
              "location": "Toulouse Petit, 601 Queen Anne Ave N, Seattle, WA",
              "duration": "25 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Toulouse+Petit%2C+601+Queen+Anne+Ave+N%2C+Seattle%2C+WA",
              "notes": "Toward 601 Queen Anne Ave N.",
              "detailText": "Toward 601 Queen Anne Ave N.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Kerry+Park%2C+211+W+Highland+Dr%2C+Seattle%2C+WA&destination=Toulouse+Petit%2C+601+Queen+Anne+Ave+N%2C+Seattle%2C+WA&travelmode=transit",
              "mapFrom": "Kerry Park, 211 W Highland Dr, Seattle, WA",
              "mapTo": "Toulouse Petit, 601 Queen Anne Ave N, Seattle, WA",
              "routeMode": "transit",
              "coordinates": {
                "lat": 47.6248,
                "lng": -122.3566,
                "label": "Toulouse Petit"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "5:20 PM",
              "leaveTime": "6:00 PM",
              "endTime": "6:00 PM",
              "name": "Toulouse Petit · cocktail",
              "type": "cocktails",
              "neighborhood": "Seattle",
              "location": "Toulouse Petit, 601 Queen Anne Ave N, Seattle, WA",
              "duration": "40 min",
              "cost": 14.14,
              "budgetCategory": "Cocktails and social",
              "website": "https://www.toulousepetit.com/wp-content/uploads/2026/06/HH-Menu-Beverage-Summer-5.24.26.pdf",
              "menu": "https://www.toulousepetit.com/wp-content/uploads/2026/06/HH-Menu-Beverage-Summer-5.24.26.pdf",
              "notes": "601 Queen Anne Ave N. Rosemary Collins $11 + $1.16 tax + $1.98 tip = $14.14. Current linked HH menu; lounge/bar, before 6 PM. Seat/inventory not guaranteed.\nOrder: Rosemary Collins · current happy-hour menu. Base $11.00; other fee $0.00; tax $1.16; 18% pre-tax tip $1.98; total $14.14. Currently linked June 2026 menu: $11. Target 5:20 PM before 6 PM cutoff; lounge/bar seating, availability unconfirmed.",
              "detailText": "601 Queen Anne Ave N. Rosemary Collins $11 + $1.16 tax + $1.98 tip = $14.14. Current linked HH menu; lounge/bar, before 6 PM. Seat/inventory not guaranteed.\nOrder: Rosemary Collins · current happy-hour menu. Base $11.00; other fee $0.00; tax $1.16; 18% pre-tax tip $1.98; total $14.14. Currently linked June 2026 menu: $11. Target 5:20 PM before 6 PM cutoff; lounge/bar seating, availability unconfirmed.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Toulouse+Petit%2C+601+Queen+Anne+Ave+N%2C+Seattle%2C+WA&destination=Toulouse+Petit%2C+601+Queen+Anne+Ave+N%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Toulouse Petit, 601 Queen Anne Ave N, Seattle, WA",
              "mapTo": "Toulouse Petit, 601 Queen Anne Ave N, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6248,
                "lng": -122.3566,
                "label": "Toulouse Petit"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "6:00 PM",
              "leaveTime": "6:45 PM",
              "endTime": "6:45 PM",
              "name": "Dinner · Dick’s Queen Anne",
              "type": "meal",
              "neighborhood": "Seattle",
              "location": "Dick’s Drive-In, 500 Queen Anne Ave N, Seattle, WA",
              "duration": "45 min",
              "cost": 16.4,
              "budgetCategory": "Food",
              "website": "https://ddir.com/menu/",
              "menu": "https://ddir.com/menu/",
              "notes": "500 Queen Anne Ave N. Deluxe, fries, shake $12.75 + $1.35 tax + $2.30 optional tip = $16.40.\nOrder: Deluxe + fries + shake. Base $12.75; other fee $0.00; tax $1.35; 18% pre-tax tip $2.30; total $16.40. $5.75 + $2.95 + $4.05. Includes requested optional 18% counter tip.",
              "detailText": "500 Queen Anne Ave N. Deluxe, fries, shake $12.75 + $1.35 tax + $2.30 optional tip = $16.40.\nOrder: Deluxe + fries + shake. Base $12.75; other fee $0.00; tax $1.35; 18% pre-tax tip $2.30; total $16.40. $5.75 + $2.95 + $4.05. Includes requested optional 18% counter tip.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Toulouse+Petit%2C+601+Queen+Anne+Ave+N%2C+Seattle%2C+WA&destination=Dick%E2%80%99s+Drive-In%2C+500+Queen+Anne+Ave+N%2C+Seattle%2C+WA&travelmode=walking",
              "mapFrom": "Toulouse Petit, 601 Queen Anne Ave N, Seattle, WA",
              "mapTo": "Dick’s Drive-In, 500 Queen Anne Ave N, Seattle, WA",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6236,
                "lng": -122.3564,
                "label": "Dick’s Drive-In"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "6:45 PM",
              "leaveTime": "7:10 PM",
              "endTime": "7:10 PM",
              "name": "Walk to Seattle Center Monorail",
              "type": "walk",
              "neighborhood": "Seattle",
              "location": "Seattle Center Monorail Station, 370 Thomas St, Seattle, WA",
              "duration": "25 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Seattle+Center+Monorail+Station%2C+370+Thomas+St%2C+Seattle%2C+WA",
              "notes": "370 Thomas St; about 15–20 minutes from Dick’s, with buffer. Outdoor transfer; rain possible.",
              "detailText": "370 Thomas St; about 15–20 minutes from Dick’s, with buffer. Outdoor transfer; rain possible.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Dick%E2%80%99s+Drive-In%2C+500+Queen+Anne+Ave+N%2C+Seattle%2C+WA&destination=Seattle+Center+Monorail+Station%2C+370+Thomas+St%2C+Seattle%2C+WA&travelmode=transit",
              "mapFrom": "Dick’s Drive-In, 500 Queen Anne Ave N, Seattle, WA",
              "mapTo": "Seattle Center Monorail Station, 370 Thomas St, Seattle, WA",
              "routeMode": "transit",
              "coordinates": {
                "lat": 47.6212,
                "lng": -122.3508,
                "label": "Seattle Center Monorail Station"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "7:10 PM",
              "leaveTime": "7:25 PM",
              "endTime": "7:25 PM",
              "name": "Monorail · Seattle Center → Westlake",
              "type": "transit",
              "neighborhood": "Seattle",
              "location": "Westlake Center Monorail Station, 400 Pine St, third floor, Seattle, WA",
              "duration": "15 min",
              "cost": 4,
              "budgetCategory": "Transportation",
              "website": "https://www.seattlemonorail.com/buy-tickets-to-ride-with-us/",
              "notes": "Return ride $4, included in $8 round-trip fare. Normally every 8–10 minutes; current Nov 4 event schedule runs until 11 PM. Event queues possible; depart earlier if needed.",
              "detailText": "Return ride $4, included in $8 round-trip fare. Normally every 8–10 minutes; current Nov 4 event schedule runs until 11 PM. Event queues possible; depart earlier if needed.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Seattle+Center+Monorail+Station%2C+370+Thomas+St%2C+Seattle%2C+WA&destination=Westlake+Center+Monorail+Station%2C+400+Pine+St%2C+third+floor%2C+Seattle%2C+WA&travelmode=transit",
              "mapFrom": "Seattle Center Monorail Station, 370 Thomas St, Seattle, WA",
              "mapTo": "Westlake Center Monorail Station, 400 Pine St, third floor, Seattle, WA",
              "routeMode": "transit",
              "coordinates": {
                "lat": 47.6113,
                "lng": -122.3365,
                "label": "Westlake Center Monorail Station"
              },
              "priceStatus": "quoted / modeled"
            },
            {
              "time": "7:25 PM",
              "leaveTime": "7:50 PM",
              "endTime": "7:50 PM",
              "name": "Walk to Palihotel",
              "type": "walk",
              "neighborhood": "Seattle",
              "location": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "duration": "25 min",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101",
              "notes": "107 Pine St; retain buffer for queues and the 8 PM hotel deadline.",
              "detailText": "107 Pine St; retain buffer for queues and the 8 PM hotel deadline.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Westlake+Center+Monorail+Station%2C+400+Pine+St%2C+third+floor%2C+Seattle%2C+WA&destination=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&travelmode=walking",
              "mapFrom": "Westlake Center Monorail Station, 400 Pine St, third floor, Seattle, WA",
              "mapTo": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6097,
                "lng": -122.3402,
                "label": "Palihotel Seattle"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "8:00 PM",
              "leaveTime": "10:00 PM",
              "endTime": "10:00 PM",
              "name": "Hotel · pack and evening wind-down",
              "type": "rest",
              "neighborhood": "Seattle",
              "location": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "duration": "Until10PM",
              "cost": 0,
              "budgetCategory": "Food",
              "website": "https://www.google.com/maps/search/?api=1&query=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101",
              "notes": "No daytime hotel break. Evening relaxation/packing only; protected sleep begins10PM.",
              "detailText": "No daytime hotel break. Evening relaxation/packing only; protected sleep begins10PM.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&destination=Palihotel+Seattle%2C+107+Pine+St%2C+Seattle%2C+WA+98101&travelmode=walking",
              "mapFrom": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "mapTo": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "routeMode": "walking",
              "coordinates": {
                "lat": 47.6097,
                "lng": -122.3402,
                "label": "Palihotel Seattle"
              },
              "priceStatus": "free / no purchase budgeted"
            },
            {
              "time": "10:00 PM",
              "endTime": "7:00 AM",
              "endDate": "2026-11-05",
              "name": "Sleep · protected overnight",
              "type": "rest",
              "neighborhood": "Seattle hotel",
              "location": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "duration": "Protected overnight",
              "cost": 0,
              "budgetCategory": "Food",
              "notes": "Protected sleep from10PM until the next morning. Pacific time (America/Los_Angeles); no sightseeing, packing or transit scheduled inside this block.",
              "detailText": "Sleep starts10PM, separate from evening wind-down. Overnight room protected; morning preparation follows sleep, not part of it.",
              "mapFrom": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "mapTo": "Palihotel Seattle, 107 Pine St, Seattle, WA 98101",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel%20Seattle%2C%20107%20Pine%20St%2C%20Seattle%2C%20WA%2098101&destination=Palihotel%20Seattle%2C%20107%20Pine%20St%2C%20Seattle%2C%20WA%2098101&travelmode=walking",
              "coordinates": {
                "lat": 47.6097,
                "lng": -122.3402,
                "label": "Palihotel Seattle"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "day-5",
      "isoDate": "2026-11-05",
      "date": "Thu, Nov 5",
      "city": "Portland",
      "title": "Checkout + Amtrak transfer + light Portland evening",
      "theme": "Transition day - easy downtown to station walk",
      "dayTotal": 40,
      "weatherPlan": "Keep Seattle morning close to hotel and station timing protected with buffers.",
      "segments": [
        {
          "label": "Morning",
          "items": [
            {
              "time": "7:00 AM",
              "name": "Wake, final pack, checkout prep",
              "type": "rest",
              "neighborhood": "Palihotel base",
              "duration": "120 min",
              "cost": 0,
              "notes": "Light prep and packing. King Street Station is walking distance from downtown Palihotel. Grab-and-go breakfast from the H Mart/Target run stocked on Day 1 covers this morning -- no separate breakfast stop needed.",
              "budgetCategory": "Food",
              "mapFrom": "Palihotel base",
              "mapTo": "Palihotel base",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Palihotel+base&destination=Palihotel+base&travelmode=walking"
            },
            {
              "time": "9:00 AM",
              "name": "Checkout and walk to King Street Station",
              "type": "walk",
              "neighborhood": "Downtown -> King Street",
              "duration": "15 min",
              "cost": 0,
              "notes": "Short walk from downtown to King Street Station. Palihotel proximity makes this very manageable.",
              "budgetCategory": "Food",
              "mapFrom": "Downtown -> King Street",
              "mapTo": "Downtown -> King Street",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Downtown+-%3E+King+Street&destination=Downtown+-%3E+King+Street&travelmode=walking"
            },
            {
              "time": "9:15 AM",
              "name": "Station arrival + platform prep",
              "type": "rest",
              "neighborhood": "King Street Station",
              "duration": "55 min",
              "cost": 0,
              "notes": "Settle in at the station with plenty of margin before boarding.",
              "budgetCategory": "Food",
              "mapFrom": "King Street Station",
              "mapTo": "King Street Station",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=King+Street+Station&destination=King+Street+Station&travelmode=walking"
            }
          ]
        },
        {
          "label": "Afternoon",
          "items": [
            {
              "time": "12:10 PM",
              "name": "Amtrak Cascades 517 SEA -> PDX",
              "type": "transit",
              "neighborhood": "Intercity rail",
              "duration": "3h 25m",
              "cost": 19,
              "notes": "The $29 rail fare is already paid; only the $19 successful business-class bid remains in planned spend.",
              "priceStatus": "retained all-in allowance / source detail not re-quoted",
              "budgetCategory": "Entrance fees",
              "mapFrom": "Intercity rail",
              "mapTo": "Intercity rail",
              "routeMode": "transit",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Intercity+rail&destination=Intercity+rail&travelmode=transit"
            },
            {
              "time": "3:35 PM",
              "name": "Arrive Portland Union Station and transfer to Hotel Vance",
              "type": "transit",
              "neighborhood": "Union Station -> Hotel Vance",
              "duration": "35 min",
              "cost": 6,
              "notes": "First TriMet-system ride in Portland on Day 5 -- flat $6 day-pass charge.",
              "priceStatus": "retained all-in allowance / source detail not re-quoted",
              "budgetCategory": "Transportation",
              "mapFrom": "Union Station -> Hotel Vance",
              "mapTo": "Union Station -> Hotel Vance",
              "routeMode": "transit",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Union+Station+-%3E+Hotel+Vance&destination=Union+Station+-%3E+Hotel+Vance&travelmode=transit"
            },
            {
              "time": "4:20 PM",
              "name": "Check in and reset",
              "type": "rest",
              "neighborhood": "Hotel Vance Portland",
              "duration": "100 min",
              "cost": 0,
              "notes": "Settle into Hotel Vance after the Seattle-to-Portland transfer.",
              "budgetCategory": "Food",
              "mapFrom": "Hotel Vance Portland",
              "mapTo": "Hotel Vance Portland",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance+Portland&destination=Hotel+Vance+Portland&travelmode=walking"
            }
          ]
        },
        {
          "label": "Evening",
          "items": [
            {
              "time": "6:00 PM",
              "name": "Easy downtown orientation walk",
              "type": "walk",
              "neighborhood": "Downtown Portland",
              "duration": "30 min",
              "cost": 0,
              "budgetCategory": "Food",
              "mapFrom": "Downtown Portland",
              "mapTo": "Downtown Portland",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Downtown+Portland&destination=Downtown+Portland&travelmode=walking"
            },
            {
              "time": "6:35 PM",
              "name": "Apple Pioneer Place time block",
              "type": "shopping",
              "neighborhood": "Downtown Portland",
              "location": "Apple Pioneer Place, 450 SW Yamhill St",
              "duration": "35 min",
              "cost": 0,
              "website": "https://www.apple.com/retail/pioneerplace/",
              "payment": "Cards accepted",
              "detailText": "Short downtown stop to check the Apple store and Pioneer Place architecture.\nPurpose: Use this as the Portland phone / accessory browse block, not a full shopping spree.\nPhoto angle: The store frontage and mall atrium make a clean city-photo backdrop.\nEstimated cost: Free unless you buy the new phone or accessories.\nPayment: Cards accepted.",
              "budgetCategory": "Shopping",
              "mapFrom": "Apple Pioneer Place, 450 SW Yamhill St",
              "mapTo": "Apple Pioneer Place, 450 SW Yamhill St",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Apple+Pioneer+Place%2C+450+SW+Yamhill+St&destination=Apple+Pioneer+Place%2C+450+SW+Yamhill+St&travelmode=walking"
            },
            {
              "time": "7:15 PM",
              "name": "Luc Lac Vietnamese Kitchen dinner",
              "type": "meal",
              "neighborhood": "Downtown Portland",
              "duration": "75 min",
              "cost": 15,
              "website": "https://luclacpdx.com/",
              "payment": "Cards accepted",
              "detailText": "First dinner in Portland after the travel day.\nMenu: https://luclacpdx.com/\nORDER: Round Steak & Lean Brisket -- rare slices of steak cooked with citrus, pineapple sauce, cilantro, onions, fresh herbs, peanuts and shallots.\nFruity: Ask for the most fruit-forward seasonal cocktail or their coconut-leaning drink.\nSkip: Soup. Save room for the rice-and-beef lane.\nEstimated cost: $15.\nCost basis: retained all-in allowance, including provision for18% pre-tax food/drink tip; exact current item/base/tip split unverified. Oregon sales tax$0.",
              "priceStatus": "retained all-in allowance / source detail not re-quoted",
              "budgetCategory": "Food",
              "mapFrom": "Downtown Portland",
              "mapTo": "Downtown Portland",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Downtown+Portland&destination=Downtown+Portland&travelmode=walking"
            },
            {
              "time": "8:30 PM",
              "name": "Hotel · evening wind-down",
              "type": "rest",
              "neighborhood": "Hotel Vance Portland",
              "duration": "Until10PM",
              "cost": 0,
              "notes": "Full recovery night before the first deeper Portland day. Evening relaxation/packing only; protected sleep begins10PM.",
              "budgetCategory": "Food",
              "mapFrom": "Hotel Vance Portland",
              "mapTo": "Hotel Vance Portland",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance+Portland&destination=Hotel+Vance+Portland&travelmode=walking",
              "leaveTime": "10:00 PM",
              "endTime": "10:00 PM",
              "detailText": "Full recovery night before the first deeper Portland day. Evening relaxation/packing only; protected sleep begins10PM."
            },
            {
              "time": "10:00 PM",
              "endTime": "7:00 AM",
              "endDate": "2026-11-06",
              "name": "Sleep · protected overnight",
              "type": "rest",
              "neighborhood": "Portland hotel",
              "location": "Hotel Vance, 1455 SW Broadway, Portland, OR",
              "duration": "Protected overnight",
              "cost": 0,
              "budgetCategory": "Food",
              "notes": "Protected sleep from10PM until the next morning. Pacific time (America/Los_Angeles); no sightseeing, packing or transit scheduled inside this block.",
              "detailText": "Sleep starts10PM, separate from evening wind-down. Overnight room protected; morning preparation follows sleep, not part of it.",
              "mapFrom": "Hotel Vance, 1455 SW Broadway, Portland, OR",
              "mapTo": "Hotel Vance, 1455 SW Broadway, Portland, OR",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel%20Vance%2C%201455%20SW%20Broadway%2C%20Portland%2C%20OR&destination=Hotel%20Vance%2C%201455%20SW%20Broadway%2C%20Portland%2C%20OR&travelmode=walking"
            }
          ]
        }
      ]
    },
    {
      "id": "day-6",
      "isoDate": "2026-11-06",
      "date": "Fri, Nov 6",
      "city": "Portland",
      "title": "Cannon Beach / Haystack Rock day trip (public transit)",
      "theme": "Iconic sea stack + tide pools via POINT NorthWest bus",
      "dayTotal": 146,
      "weatherPlan": "Coastal weather varies; low tide timing essential for tide-pool access. Check NOAA tides for Nov 6, 2026 before confirming the day.",
      "segments": [
        {
          "label": "Morning",
          "items": [
            {
              "time": "7:00 AM",
              "name": "Wake + quick breakfast + prep",
              "type": "rest",
              "neighborhood": "Hotel Vance Portland",
              "duration": "50 min",
              "cost": 0,
              "notes": "Early start to catch the westbound POINT NorthWest bus.",
              "budgetCategory": "Food",
              "mapFrom": "Hotel Vance Portland",
              "mapTo": "Hotel Vance Portland",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance+Portland&destination=Hotel+Vance+Portland&travelmode=walking"
            },
            {
              "time": "7:50 AM",
              "name": "Transit to Portland Union Station",
              "type": "transit",
              "neighborhood": "Hotel Vance -> Union Station",
              "duration": "20 min",
              "cost": 6,
              "notes": "Walk or MAX to Union Station (800 NW 6th Ave). First TriMet-system ride of Day 6 -- flat $6 day-pass charge.",
              "priceStatus": "retained all-in allowance / source detail not re-quoted",
              "budgetCategory": "Transportation",
              "mapFrom": "Hotel Vance -> Union Station",
              "mapTo": "Hotel Vance -> Union Station",
              "routeMode": "transit",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance+-%3E+Union+Station&destination=Hotel+Vance+-%3E+Union+Station&travelmode=transit"
            },
            {
              "time": "8:10 AM",
              "name": "POINT NorthWest bus to Cannon Beach (boarding)",
              "type": "transit",
              "neighborhood": "Portland Union Station",
              "duration": "18 min",
              "cost": 0,
              "notes": "Confirmed 8:28 AM departure window. Tickets can be purchased at Amtrak kiosks, online, or by phone 1-800-872-7245. Connection warning: retained Astoria-origin ticket time is not the Cannon Beach boarding time; exact Cannon Beach stop/departure must be confirmed with POINT. Do not travel to Astoria based on this label.",
              "budgetCategory": "Entrance fees",
              "mapFrom": "Portland Union Station",
              "mapTo": "Portland Union Station",
              "routeMode": "transit",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Portland+Union+Station&destination=Portland+Union+Station&travelmode=transit"
            }
          ]
        },
        {
          "label": "Daytime",
          "items": [
            {
              "time": "8:28 AM",
              "name": "Depart Portland Union Station (POINT NorthWest)",
              "type": "transit",
              "neighborhood": "Intercity bus",
              "duration": "198 min",
              "cost": 40,
              "notes": "Confirmed schedule: PDX Union Station to Astoria, OR (via ART connecting bus 5500), arrives 11:46 AM. $40 covers the confirmed round-trip fare.",
              "priceStatus": "retained all-in allowance / source detail not re-quoted",
              "budgetCategory": "Entrance fees",
              "mapFrom": "Intercity bus",
              "mapTo": "Intercity bus",
              "routeMode": "transit",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Intercity+bus&destination=Intercity+bus&travelmode=transit"
            },
            {
              "time": "11:46 AM",
              "name": "Arrive Cannon Beach",
              "type": "transit",
              "neighborhood": "Cannon Beach",
              "duration": "0 min",
              "cost": 0,
              "notes": "Bus stops at 1170 S Hemlock St, downtown Cannon Beach.",
              "budgetCategory": "Transportation",
              "mapFrom": "Cannon Beach",
              "mapTo": "Cannon Beach",
              "routeMode": "transit",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Cannon+Beach&destination=Cannon+Beach&travelmode=transit"
            },
            {
              "time": "11:50 AM",
              "name": "Orientation + Haystack Rock walk",
              "type": "activity",
              "neighborhood": "Cannon Beach",
              "location": "Haystack Rock, Tolovana Beach State Recreation Site",
              "duration": "180 min",
              "cost": 0,
              "website": "https://www.cannonbeach.org/things-to-do/beaches-and-parks/haystack-rock/",
              "payment": "No admission; public land open 24/7",
              "detailText": "Iconic Cannon Beach sea-stack exploration.\nWhat to see: 235-foot Haystack Rock visible from the beach.\nTide pools: Low tide is essential for exploring tide pools around the base of the rock. Check NOAA tide times for November 6, 2026 before the trip at noaa.gov or tide-forecast.com. Optimal window usually a couple hours before/after the lowest tide.\nWhat to bring: Layers (coastal wind), water, snacks, camera.\nWarnings: Lifeguards and patrol trucks monitor the area; stay off exposed rocks to protect tide-pool ecosystems.\nEstimated cost: Free.",
              "budgetCategory": "Food",
              "mapFrom": "Haystack Rock, Tolovana Beach State Recreation Site",
              "mapTo": "Haystack Rock, Tolovana Beach State Recreation Site",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Haystack+Rock%2C+Tolovana+Beach+State+Recreation+Site&destination=Haystack+Rock%2C+Tolovana+Beach+State+Recreation+Site&travelmode=walking"
            },
            {
              "time": "2:50 PM",
              "name": "Cannon Beach lunch, coffee, and cocktail",
              "type": "meal",
              "neighborhood": "Cannon Beach downtown",
              "duration": "90 min",
              "cost": 100,
              "website": "https://pelicanbrewing.com/menus/",
              "payment": "Cards accepted",
              "detailText": "Suggested default: Pelican Brewing Cannon Beach, oceanfront taproom right on the beach.\nMenu: https://pelicanbrewing.com/menus/\nORDER: Fish and chips or the Pelican burger, plus a Kiwanda Cream Ale or a seasonal cocktail.\nCoffee alternate: Sea Level Bakery (2 minutes inland) for coffee/pastry if you'd rather split the stop.\nEstimated cost: $100 (lunch, coffee, and a cocktail with tip).\nCost basis: retained all-in allowance, including provision for18% pre-tax food/drink tip; exact current item/base/tip split unverified. Oregon sales tax$0.",
              "priceStatus": "retained all-in allowance / source detail not re-quoted",
              "budgetCategory": "Food",
              "mapFrom": "Cannon Beach downtown",
              "mapTo": "Cannon Beach downtown",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Cannon+Beach+downtown&destination=Cannon+Beach+downtown&travelmode=walking"
            }
          ]
        },
        {
          "label": "Evening / Return",
          "items": [
            {
              "time": "5:40 PM",
              "name": "Transit to bus stop + board return bus",
              "type": "transit",
              "neighborhood": "Downtown Cannon Beach",
              "duration": "15 min",
              "cost": 0,
              "notes": "Confirmed schedule: Astoria departs 5:55 PM, arrives Portland Union Station 9:00 PM. Connection warning: retained Astoria-origin ticket time is not the Cannon Beach boarding time; exact Cannon Beach stop/departure must be confirmed with POINT. Do not travel to Astoria based on this label.",
              "budgetCategory": "Transportation",
              "mapFrom": "Downtown Cannon Beach",
              "mapTo": "Downtown Cannon Beach",
              "routeMode": "transit",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Downtown+Cannon+Beach&destination=Downtown+Cannon+Beach&travelmode=transit"
            },
            {
              "time": "5:55 PM",
              "name": "Depart Astoria (POINT NorthWest return)",
              "type": "transit",
              "neighborhood": "Intercity bus",
              "duration": "185 min",
              "cost": 0,
              "notes": "Confirmed return leg: Astoria, OR to Portland, OR Union Station (via ART connecting bus 5565), arrives 9:00 PM. Fare already covered in the outbound $40.",
              "budgetCategory": "Entrance fees",
              "mapFrom": "Intercity bus",
              "mapTo": "Intercity bus",
              "routeMode": "transit",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Intercity+bus&destination=Intercity+bus&travelmode=transit"
            },
            {
              "time": "9:00 PM",
              "name": "Arrive Portland Union Station + transfer to Hotel Vance",
              "type": "transit",
              "neighborhood": "Union Station -> Hotel Vance",
              "duration": "20 min",
              "cost": 0,
              "notes": "Return transfer. Cost $0 -- covered by the day's $6 TriMet pass.",
              "budgetCategory": "Transportation",
              "mapFrom": "Union Station -> Hotel Vance",
              "mapTo": "Union Station -> Hotel Vance",
              "routeMode": "transit",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Union+Station+-%3E+Hotel+Vance&destination=Union+Station+-%3E+Hotel+Vance&travelmode=transit"
            },
            {
              "time": "9:20 PM",
              "name": "Hotel · evening wind-down",
              "type": "rest",
              "neighborhood": "Hotel Vance Portland",
              "duration": "Until10PM",
              "cost": 0,
              "notes": "Settle in and rest after a full coastal day. Evening relaxation/packing only; protected sleep begins10PM.",
              "budgetCategory": "Food",
              "mapFrom": "Hotel Vance Portland",
              "mapTo": "Hotel Vance Portland",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance+Portland&destination=Hotel+Vance+Portland&travelmode=walking",
              "leaveTime": "10:00 PM",
              "endTime": "10:00 PM",
              "detailText": "Settle in and rest after a full coastal day. Evening relaxation/packing only; protected sleep begins10PM."
            },
            {
              "time": "10:00 PM",
              "endTime": "7:45 AM",
              "endDate": "2026-11-07",
              "name": "Sleep · protected overnight",
              "type": "rest",
              "neighborhood": "Portland hotel",
              "location": "Hotel Vance, 1455 SW Broadway, Portland, OR",
              "duration": "Protected overnight",
              "cost": 0,
              "budgetCategory": "Food",
              "notes": "Protected sleep from10PM until the next morning. Pacific time (America/Los_Angeles); no sightseeing, packing or transit scheduled inside this block.",
              "detailText": "Sleep starts10PM, separate from evening wind-down. Overnight room protected; morning preparation follows sleep, not part of it.",
              "mapFrom": "Hotel Vance, 1455 SW Broadway, Portland, OR",
              "mapTo": "Hotel Vance, 1455 SW Broadway, Portland, OR",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel%20Vance%2C%201455%20SW%20Broadway%2C%20Portland%2C%20OR&destination=Hotel%20Vance%2C%201455%20SW%20Broadway%2C%20Portland%2C%20OR&travelmode=walking"
            }
          ]
        }
      ]
    },
    {
      "id": "day-7",
      "isoDate": "2026-11-07",
      "date": "Sat, Nov 7",
      "city": "Portland",
      "title": "Portland Saturday Market + local food",
      "theme": "Coffee, market, Sephora browse, and a Portland book-bar night",
      "dayTotal": 110,
      "weatherPlan": "Saturday Market is outdoor but covered. Keep the afternoon flexible and low-pressure.",
      "segments": [
        {
          "label": "Morning",
          "items": [
            {
              "time": "7:45 AM",
              "name": "Wake + prep",
              "type": "rest",
              "neighborhood": "Hotel Vance Portland",
              "duration": "40 min",
              "cost": 0,
              "budgetCategory": "Food",
              "mapFrom": "Hotel Vance Portland",
              "mapTo": "Hotel Vance Portland",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance+Portland&destination=Hotel+Vance+Portland&travelmode=walking"
            },
            {
              "time": "8:05 AM",
              "name": "Stumptown coffee + coffee bean buy",
              "type": "coffee",
              "neighborhood": "Downtown Portland",
              "location": "Stumptown Downtown Cafe, 128 SW 3rd Ave, Portland, OR",
              "duration": "30 min",
              "cost": 31,
              "website": "https://www.stumptowncoffee.com/pages/portland-downtown-cafe",
              "payment": "Cards accepted",
              "detailText": "Portland flagship coffee stop before the Saturday Market day.\nWebsite: https://www.stumptowncoffee.com/\nOrder: Guatemala El Injerto Bourbon whole-bean bag ($25) plus a 16oz Original Cold Brew ($6).\nEstimated cost: $31.\nCost basis: retained all-in allowance, including provision for18% pre-tax food/drink tip; exact current item/base/tip split unverified. Oregon sales tax$0.",
              "priceStatus": "retained all-in allowance / source detail not re-quoted",
              "budgetCategory": "Food",
              "mapFrom": "Stumptown Downtown Cafe, 128 SW 3rd Ave, Portland, OR",
              "mapTo": "Stumptown Downtown Cafe, 128 SW 3rd Ave, Portland, OR",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Stumptown+Coffee+Roasters%2C+1026+SW+Stark+St&destination=Stumptown+Coffee+Roasters%2C+1026+SW+Stark+St&travelmode=walking",
              "menu": "https://www.stumptowncoffee.com/pages/portland-downtown-cafe"
            },
            {
              "time": "8:35 AM",
              "name": "Slow morning reset",
              "type": "rest",
              "neighborhood": "Hotel Vance Portland",
              "duration": "115 min",
              "cost": 0,
              "notes": "Tattoo appointment removed Sep 13, 2026. Keep the morning open before Saturday Market.",
              "budgetCategory": "Food",
              "mapFrom": "Hotel Vance Portland",
              "mapTo": "Hotel Vance Portland",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance+Portland&destination=Hotel+Vance+Portland&travelmode=walking"
            }
          ]
        },
        {
          "label": "Afternoon",
          "items": [
            {
              "time": "10:30 AM",
              "name": "Walk/transit to Portland Saturday Market",
              "type": "transit",
              "neighborhood": "Downtown -> Waterfront",
              "duration": "30 min",
              "cost": 0,
              "notes": "Short walk, MAX, or streetcar hop to the waterfront market. Cost left at $0 because no day-pass transit is otherwise needed.",
              "budgetCategory": "Transportation",
              "mapFrom": "Downtown -> Waterfront",
              "mapTo": "Downtown -> Waterfront",
              "routeMode": "transit",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Downtown+-%3E+Waterfront&destination=Downtown+-%3E+Waterfront&travelmode=transit"
            },
            {
              "time": "11:00 AM",
              "name": "Portland Saturday Market browse + lunch",
              "type": "activity",
              "neighborhood": "Waterfront",
              "location": "2 SW Naito Pkwy",
              "duration": "120 min",
              "cost": 50,
              "website": "https://www.portlandsaturdaymarket.com/food-vendors-and-partners",
              "payment": "Many vendors prefer cash; some accept cards",
              "detailText": "Waterfront artisan market block with lunch from the food vendors.\nWebsite: https://www.portlandsaturdaymarket.com/food-vendors-and-partners\nPurpose: Shop local makers and graze market food vendors for lunch instead of a sit-down meal.\nPayment: Many vendors prefer cash even when some larger booths take cards.\nEstimated cost: $50 covering lunch and market browsing.\nCost basis: retained all-in allowance, including provision for18% pre-tax food/drink tip; exact current item/base/tip split unverified. Oregon sales tax$0.",
              "priceStatus": "retained all-in allowance / source detail not re-quoted",
              "budgetCategory": "Food",
              "mapFrom": "2 SW Naito Pkwy",
              "mapTo": "2 SW Naito Pkwy",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=2+SW+Naito+Pkwy&destination=2+SW+Naito+Pkwy&travelmode=walking"
            },
            {
              "time": "1:15 PM",
              "name": "Sephora Portland Downtown browse",
              "type": "shopping",
              "neighborhood": "Downtown Portland",
              "location": "Sephora Portland Downtown",
              "duration": "30 min",
              "cost": 0,
              "notes": "Optional perfume browse only. Bleu de Chanel purchase removed Sep 13, 2026; add a new purchase later only if you decide to buy.",
              "budgetCategory": "Shopping",
              "mapFrom": "Sephora Portland Downtown",
              "mapTo": "Sephora Portland Downtown",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Sephora+Portland+Downtown&destination=Sephora+Portland+Downtown&travelmode=walking"
            },
            {
              "time": "1:45 PM",
              "name": "Hotel Vance reset",
              "type": "rest",
              "neighborhood": "Hotel Vance Portland",
              "duration": "195 min",
              "cost": 0,
              "notes": "Keep the afternoon open before Novel Book Bar.",
              "budgetCategory": "Food",
              "mapFrom": "Hotel Vance Portland",
              "mapTo": "Hotel Vance Portland",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance+Portland&destination=Hotel+Vance+Portland&travelmode=walking"
            }
          ]
        },
        {
          "label": "Evening",
          "items": [
            {
              "time": "5:00 PM",
              "name": "Novel Book Bar dinner + cocktail + browse",
              "type": "activity",
              "neighborhood": "NW Everett / Pearl edge",
              "location": "Novel Book Bar, 233 NW Everett St, Portland, OR",
              "duration": "90 min",
              "cost": 29,
              "website": "https://www.instagram.com/novel_pdx/",
              "payment": "Cards accepted",
              "detailText": "Retained $29 total allowance, not a verified current itemized menu. Oregon sales tax$0; reserve18% pre-tax tip within this allowance. Prior novelmaine.com menu belongs to Maine and is removed. Oregon venue confirmed at233 NW Everett via local reporting March18,2026; report listed Saturday7PM–midnight, so current5PM itinerary window requires direct hours confirmation. Do not travel until confirmed. Source: https://bridgetownbites.com/2026/03/18/novel-book-bar-is-open-in-chinatown-northwest-portland-oregon/",
              "menu": "https://www.instagram.com/novel_pdx/",
              "mapFrom": "Hotel Vance, 1455 SW Broadway, Portland, OR",
              "mapTo": "Novel Book Bar, 233 NW Everett St, Portland, OR",
              "routeMode": "transit",
              "notes": "Retained $29 total allowance, not a verified current itemized menu. Oregon sales tax$0; reserve18% pre-tax tip within this allowance. Prior novelmaine.com menu belongs to Maine and is removed. Oregon venue confirmed at233 NW Everett via local reporting March18,2026; report listed Saturday7PM–midnight, so current5PM itinerary window requires direct hours confirmation. Do not travel until confirmed. Source: https://bridgetownbites.com/2026/03/18/novel-book-bar-is-open-in-chinatown-northwest-portland-oregon/",
              "priceStatus": "retained all-in allowance / source detail not re-quoted",
              "budgetCategory": "Food",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance%2C+1455+SW+Broadway%2C+Portland%2C+OR&destination=Novel+Book+Bar%2C+233+NW+Everett+St%2C+Portland%2C+OR&travelmode=transit"
            },
            {
              "time": "7:45 PM",
              "name": "Hotel · evening wind-down",
              "type": "rest",
              "neighborhood": "Hotel Vance Portland",
              "duration": "Until10PM",
              "cost": 0,
              "budgetCategory": "Food",
              "mapFrom": "Hotel Vance Portland",
              "mapTo": "Hotel Vance Portland",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance+Portland&destination=Hotel+Vance+Portland&travelmode=walking",
              "leaveTime": "10:00 PM",
              "endTime": "10:00 PM",
              "notes": " Evening relaxation/packing only; protected sleep begins10PM.",
              "detailText": " Evening relaxation/packing only; protected sleep begins10PM."
            },
            {
              "time": "10:00 PM",
              "endTime": "8:00 AM",
              "endDate": "2026-11-08",
              "name": "Sleep · protected overnight",
              "type": "rest",
              "neighborhood": "Portland hotel",
              "location": "Hotel Vance, 1455 SW Broadway, Portland, OR",
              "duration": "Protected overnight",
              "cost": 0,
              "budgetCategory": "Food",
              "notes": "Protected sleep from10PM until the next morning. Pacific time (America/Los_Angeles); no sightseeing, packing or transit scheduled inside this block.",
              "detailText": "Sleep starts10PM, separate from evening wind-down. Overnight room protected; morning preparation follows sleep, not part of it.",
              "mapFrom": "Hotel Vance, 1455 SW Broadway, Portland, OR",
              "mapTo": "Hotel Vance, 1455 SW Broadway, Portland, OR",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel%20Vance%2C%201455%20SW%20Broadway%2C%20Portland%2C%20OR&destination=Hotel%20Vance%2C%201455%20SW%20Broadway%2C%20Portland%2C%20OR&travelmode=walking"
            }
          ]
        }
      ]
    },
    {
      "id": "day-8",
      "isoDate": "2026-11-08",
      "date": "Sun, Nov 8",
      "city": "Portland",
      "title": "Columbia River Gorge waterfall tour + Cartopia food carts",
      "theme": "Waterfall shuttle tour, late food carts, and easy recovery before flight day",
      "dayTotal": 138.54,
      "weatherPlan": "Waterfall stops are outdoors with rain and spray possible. Retained at your request; 10:30 AM departure and public-transit connection to Troutdale need confirmation. Unpriced transfer excluded from budget.",
      "segments": [
        {
          "label": "Morning",
          "items": [
            {
              "time": "8:00 AM",
              "name": "Wake + prep for waterfall tour",
              "type": "rest",
              "neighborhood": "Hotel Vance Portland",
              "duration": "60 min",
              "cost": 0,
              "notes": "Earlier start for the 10:30 AM Columbia River Gorge Waterfall Shuttle Tour.",
              "budgetCategory": "Food",
              "mapFrom": "Hotel Vance Portland",
              "mapTo": "Hotel Vance Portland",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance+Portland&destination=Hotel+Vance+Portland&travelmode=walking"
            },
            {
              "time": "9:00 AM",
              "name": "Travel to Sasquatch Adventures + tour check-in",
              "type": "transit",
              "neighborhood": "Portland -> Columbia River Gorge",
              "duration": "90 min",
              "cost": 0,
              "notes": "Arrive 15 minutes early to check in and look around at the Sasquatch Adventures store before the 10:30 AM tour.\nNEEDS CONFIRMATION: retained at user request Oct22. Operator meeting point is Troutdale, not downtown. Published departures8:30AM/2:30PM conflict with retained10:30AM time. Downtown-to-Troutdale transit connection and cost are unresolved and excluded from current priced total; $0 transfer does not mean free service. Waterfall stops are outdoors with rain/spray risk. Confirm dated ticket and public-transit access before relying on this day. No tour cancelled.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance%2C+1455+SW+Broadway%2C+Portland%2C+OR&destination=Sasquatch+Adventures+Store%2C+450+NW+257th+Way+%23352%2C+Troutdale%2C+OR+97060&travelmode=transit",
              "mapFrom": "Hotel Vance, 1455 SW Broadway, Portland, OR",
              "mapTo": "Sasquatch Adventures Store, 450 NW 257th Way #352, Troutdale, OR 97060",
              "location": "Sasquatch Adventures Store, 450 NW 257th Way #352, Troutdale, OR 97060",
              "routeMode": "transit",
              "detailText": "Arrive 15 minutes early to check in and look around at the Sasquatch Adventures store before the 10:30 AM tour.\nNEEDS CONFIRMATION: retained at user request Oct22. Operator meeting point is Troutdale, not downtown. Published departures8:30AM/2:30PM conflict with retained10:30AM time. Downtown-to-Troutdale transit connection and cost are unresolved and excluded from current priced total; $0 transfer does not mean free service. Waterfall stops are outdoors with rain/spray risk. Confirm dated ticket and public-transit access before relying on this day. No tour cancelled.",
              "budgetCategory": "Transportation"
            },
            {
              "time": "10:30 AM",
              "name": "Columbia River Gorge Waterfall Shuttle Tour",
              "type": "activity",
              "neighborhood": "Columbia River Gorge",
              "location": "Sasquatch Adventures Store, 450 NW 257th Way #352, Troutdale, OR 97060",
              "duration": "2.5 hrs",
              "cost": 82.54,
              "website": "https://sasquatchshuttle.com/waterfall-tour/",
              "payment": "Paid booking -- total $82.54",
              "detailText": "Waterfall shuttle tour moved to Nov 8, 2026 at 10:30 AM so Nov 7 stays focused on Portland Saturday Market.\nAccessible site: https://sasquatchshuttle.com/waterfall-tour/\nTitle: Columbia River Gorge Waterfall Shuttle Tour.\nReceipt total: $82.54, including Adult (12 & Up) ticket $79.00, Trailkeepers of Oregon Donation $2.00, and taxes/fees.\nTour format: narrated shuttle through the Columbia River Gorge Waterfall Corridor, small-group maximum 20 guests, with expert narration and stops at must-see Gorge attractions. Expect about 15 minutes at each stop except Multnomah Falls.\nHighlights: Multnomah Falls, Gorge history and nature, 250+ five-star-review positioning, dog-friendly operator, and 20% off at the Sasquatch Adventures store.\nCancellation: free cancellation up to 48 hours in advance for a full refund.\nImportant: arrive 15 minutes early for check-in. Activity copy also mentions peak-season 8:30 AM and 2:30 PM departures; itinerary uses the traveler-requested 10:30 AM time and Nov 8 placement.\nNEEDS CONFIRMATION: retained at user request Oct22. Operator meeting point is Troutdale, not downtown. Published departures8:30AM/2:30PM conflict with retained10:30AM time. Downtown-to-Troutdale transit connection and cost are unresolved and excluded from current priced total; $0 transfer does not mean free service. Waterfall stops are outdoors with rain/spray risk. Confirm dated ticket and public-transit access before relying on this day. No tour cancelled.",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance%2C+1455+SW+Broadway%2C+Portland%2C+OR&destination=Sasquatch+Adventures+Store%2C+450+NW+257th+Way+%23352%2C+Troutdale%2C+OR+97060&travelmode=transit",
              "mapFrom": "Hotel Vance, 1455 SW Broadway, Portland, OR",
              "mapTo": "Sasquatch Adventures Store, 450 NW 257th Way #352, Troutdale, OR 97060",
              "routeMode": "transit",
              "notes": "Waterfall shuttle tour moved to Nov 8, 2026 at 10:30 AM so Nov 7 stays focused on Portland Saturday Market.\nAccessible site: https://sasquatchshuttle.com/waterfall-tour/\nTitle: Columbia River Gorge Waterfall Shuttle Tour.\nReceipt total: $82.54, including Adult (12 & Up) ticket $79.00, Trailkeepers of Oregon Donation $2.00, and taxes/fees.\nTour format: narrated shuttle through the Columbia River Gorge Waterfall Corridor, small-group maximum 20 guests, with expert narration and stops at must-see Gorge attractions. Expect about 15 minutes at each stop except Multnomah Falls.\nHighlights: Multnomah Falls, Gorge history and nature, 250+ five-star-review positioning, dog-friendly operator, and 20% off at the Sasquatch Adventures store.\nCancellation: free cancellation up to 48 hours in advance for a full refund.\nImportant: arrive 15 minutes early for check-in. Activity copy also mentions peak-season 8:30 AM and 2:30 PM departures; itinerary uses the traveler-requested 10:30 AM time and Nov 8 placement.\nNEEDS CONFIRMATION: retained at user request Oct22. Operator meeting point is Troutdale, not downtown. Published departures8:30AM/2:30PM conflict with retained10:30AM time. Downtown-to-Troutdale transit connection and cost are unresolved and excluded from current priced total; $0 transfer does not mean free service. Waterfall stops are outdoors with rain/spray risk. Confirm dated ticket and public-transit access before relying on this day. No tour cancelled.",
              "priceStatus": "retained all-in allowance / source detail not re-quoted",
              "budgetCategory": "Entrance fees"
            }
          ]
        },
        {
          "label": "Daytime",
          "items": [
            {
              "time": "1:00 PM",
              "name": "Return from waterfall tour",
              "type": "transit",
              "neighborhood": "Columbia River Gorge -> Portland",
              "duration": "75 min",
              "cost": 0,
              "notes": "Return buffer after the 2.5-hour narrated shuttle tour.",
              "budgetCategory": "Transportation",
              "mapFrom": "Columbia River Gorge -> Portland",
              "mapTo": "Columbia River Gorge -> Portland",
              "routeMode": "transit",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Columbia+River+Gorge+-%3E+Portland&destination=Columbia+River+Gorge+-%3E+Portland&travelmode=transit"
            },
            {
              "time": "2:15 PM",
              "name": "Transit to Cartopia food carts",
              "type": "transit",
              "neighborhood": "Hotel Vance -> SE Hawthorne (Cartopia)",
              "duration": "20 min",
              "cost": 6,
              "notes": "Short trip out for a late Cartopia visit. First TriMet-system ride of Day 8 -- flat $6 day-pass charge.",
              "priceStatus": "retained all-in allowance / source detail not re-quoted",
              "budgetCategory": "Transportation",
              "mapFrom": "Hotel Vance -> SE Hawthorne (Cartopia)",
              "mapTo": "Hotel Vance -> SE Hawthorne (Cartopia)",
              "routeMode": "transit",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance+-%3E+SE+Hawthorne+%28Cartopia%29&destination=Hotel+Vance+-%3E+SE+Hawthorne+%28Cartopia%29&travelmode=transit"
            },
            {
              "time": "2:45 PM",
              "name": "Cartopia food cart pod late lunch",
              "type": "meal",
              "neighborhood": "SE Hawthorne",
              "location": "Cartopia Food Carts, 1207 SE Hawthorne Blvd, Portland, OR 97214",
              "duration": "75 min",
              "cost": 50,
              "website": "https://www.cartopiapdx.com/carts",
              "payment": "Cash preferred",
              "detailText": "Portland's largest food cart cluster, visited after the waterfall tour.\nCart directory: https://www.cartopiapdx.com/carts\nORDER: Bing Mi (Potato Champion's poutine cart neighbor) or Pyro Pizza's wood-fired pizza by the slice, plus a BKK pad thai order from Bing Bing if you want to split two carts.\nEstimated cost: $50.\nPayment: Bring cash; not all carts accept cards.\nCost basis: retained all-in allowance, including provision for18% pre-tax food/drink tip; exact current item/base/tip split unverified. Oregon sales tax$0.",
              "priceStatus": "retained all-in allowance / source detail not re-quoted",
              "budgetCategory": "Food",
              "mapFrom": "Cartopia Food Carts, 1207 SE Hawthorne Blvd, Portland, OR 97214",
              "mapTo": "Cartopia Food Carts, 1207 SE Hawthorne Blvd, Portland, OR 97214",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Cartopia+Food+Carts%2C+1207+SE+Hawthorne+Blvd%2C+Portland%2C+OR+97214&destination=Cartopia+Food+Carts%2C+1207+SE+Hawthorne+Blvd%2C+Portland%2C+OR+97214&travelmode=walking"
            }
          ]
        },
        {
          "label": "Evening",
          "items": [
            {
              "time": "4:00 PM",
              "name": "Transit back to Hotel Vance",
              "type": "transit",
              "neighborhood": "SE Hawthorne -> Hotel Vance",
              "duration": "20 min",
              "cost": 0,
              "notes": "Return transfer. Cost $0 -- covered by the day's $6 TriMet pass.",
              "budgetCategory": "Transportation",
              "mapFrom": "SE Hawthorne -> Hotel Vance",
              "mapTo": "SE Hawthorne -> Hotel Vance",
              "routeMode": "transit",
              "route": "https://www.google.com/maps/dir/?api=1&origin=SE+Hawthorne+-%3E+Hotel+Vance&destination=SE+Hawthorne+-%3E+Hotel+Vance&travelmode=transit"
            },
            {
              "time": "4:30 PM",
              "name": "Hotel Vance rest afternoon",
              "type": "rest",
              "neighborhood": "Hotel Vance Portland",
              "duration": "3.5 hrs",
              "cost": 0,
              "notes": "Keep the rest of the day unstructured -- rest, recover, pack for tomorrow's flight.",
              "budgetCategory": "Food",
              "mapFrom": "Hotel Vance Portland",
              "mapTo": "Hotel Vance Portland",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance+Portland&destination=Hotel+Vance+Portland&travelmode=walking"
            },
            {
              "time": "8:00 PM",
              "name": "Hotel · evening wind-down",
              "type": "rest",
              "neighborhood": "Hotel Vance Portland",
              "duration": "Until10PM",
              "cost": 0,
              "notes": "Full recovery night before the flight day. Evening relaxation/packing only; protected sleep begins10PM.",
              "budgetCategory": "Food",
              "mapFrom": "Hotel Vance Portland",
              "mapTo": "Hotel Vance Portland",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance+Portland&destination=Hotel+Vance+Portland&travelmode=walking",
              "leaveTime": "10:00 PM",
              "endTime": "10:00 PM",
              "detailText": "Full recovery night before the flight day. Evening relaxation/packing only; protected sleep begins10PM."
            },
            {
              "time": "10:00 PM",
              "endTime": "8:05 AM",
              "endDate": "2026-11-09",
              "name": "Sleep · protected overnight",
              "type": "rest",
              "neighborhood": "Portland hotel",
              "location": "Hotel Vance, 1455 SW Broadway, Portland, OR",
              "duration": "Protected overnight",
              "cost": 0,
              "budgetCategory": "Food",
              "notes": "Protected sleep from10PM until the next morning. Pacific time (America/Los_Angeles); no sightseeing, packing or transit scheduled inside this block.",
              "detailText": "Sleep starts10PM, separate from evening wind-down. Overnight room protected; morning preparation follows sleep, not part of it.",
              "mapFrom": "Hotel Vance, 1455 SW Broadway, Portland, OR",
              "mapTo": "Hotel Vance, 1455 SW Broadway, Portland, OR",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel%20Vance%2C%201455%20SW%20Broadway%2C%20Portland%2C%20OR&destination=Hotel%20Vance%2C%201455%20SW%20Broadway%2C%20Portland%2C%20OR&travelmode=walking"
            }
          ]
        }
      ]
    },
    {
      "id": "day-9",
      "isoDate": "2026-11-09",
      "date": "Mon, Nov 9",
      "city": "Portland",
      "title": "Final breakfast and departure",
      "theme": "Departure-safe pacing",
      "dayTotal": 37,
      "weatherPlan": "Protect airport timeline; later 2:34 PM departure allows a relaxed final morning.",
      "segments": [
        {
          "label": "Morning",
          "items": [
            {
              "time": "8:05 AM",
              "name": "Wake + final packing",
              "type": "rest",
              "neighborhood": "Hotel Vance Portland",
              "duration": "60 min",
              "cost": 0,
              "budgetCategory": "Food",
              "mapFrom": "Hotel Vance Portland",
              "mapTo": "Hotel Vance Portland",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance+Portland&destination=Hotel+Vance+Portland&travelmode=walking"
            },
            {
              "time": "9:05 AM",
              "name": "Hotel Vance breakfast",
              "type": "meal",
              "neighborhood": "Downtown Portland",
              "location": "Hotel Vance, Vance & Vine",
              "duration": "60 min",
              "cost": 31,
              "website": "https://www.hotelvance.com/resourcefiles/pdf/vance-and-vine-breakfast-menu.pdf",
              "payment": "Cards accepted",
              "detailText": "Final morning breakfast at the hotel before checkout.\nMenu: https://www.hotelvance.com/resourcefiles/pdf/vance-and-vine-breakfast-menu.pdf\nOrder: Breakfast sandwich (bacon or sausage, egg, cheese, spicy aioli) plus a mimosa or bloody mary if you want one.\nEstimated cost: $31.\nCost basis: retained all-in allowance, including provision for18% pre-tax food/drink tip; exact current item/base/tip split unverified. Oregon sales tax$0.",
              "priceStatus": "retained all-in allowance / source detail not re-quoted",
              "budgetCategory": "Food",
              "mapFrom": "Hotel Vance, Vance & Vine",
              "mapTo": "Hotel Vance, Vance & Vine",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance%2C+Vance+%26+Vine&destination=Hotel+Vance%2C+Vance+%26+Vine&travelmode=walking"
            },
            {
              "time": "10:05 AM",
              "name": "Hotel Vance final transit loop",
              "type": "transit",
              "neighborhood": "Downtown Portland",
              "duration": "60 min",
              "cost": 6,
              "notes": "Short final MAX/transit loop. First (and only) TriMet-system ride of Day 9 -- flat $6 day-pass charge. Morning shifted 55 min earlier (Aug 15, 2026) to fit the 3 hr PDX arrival buffer without overlap.",
              "priceStatus": "retained all-in allowance / source detail not re-quoted",
              "budgetCategory": "Transportation",
              "mapFrom": "Downtown Portland",
              "mapTo": "Downtown Portland",
              "routeMode": "transit",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Downtown+Portland&destination=Downtown+Portland&travelmode=transit"
            },
            {
              "time": "11:05 AM",
              "name": "Checkout + transfer to PDX",
              "type": "transit",
              "neighborhood": "Hotel Vance -> PDX",
              "duration": "29 min",
              "cost": 0,
              "notes": "Leave the hotel by about 11:05 AM to be inside PDX by 11:34 AM, a 3 hr buffer ahead of the 2:34 PM domestic departure. Cost $0 -- covered by the day's $6 TriMet pass (claimed by the earlier final transit loop).",
              "budgetCategory": "Transportation",
              "mapFrom": "Hotel Vance -> PDX",
              "mapTo": "Hotel Vance -> PDX",
              "routeMode": "transit",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Vance+-%3E+PDX&destination=Hotel+Vance+-%3E+PDX&travelmode=transit"
            },
            {
              "time": "11:34 AM",
              "name": "Airport check-in and security buffer",
              "type": "rest",
              "neighborhood": "PDX",
              "duration": "180 min",
              "cost": 0,
              "budgetCategory": "Food",
              "mapFrom": "PDX",
              "mapTo": "PDX",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=PDX&destination=PDX&travelmode=walking"
            }
          ]
        },
        {
          "label": "Departure",
          "items": [
            {
              "time": "2:34 PM",
              "name": "Flight PDX -> DFW",
              "type": "transit",
              "neighborhood": "Air travel",
              "duration": "3 hrs 55 min",
              "cost": 0,
              "notes": "AA 2496, Economy, seat 8F. Airfare tracked separately from activity budget. Pacific timeline2:34–6:29PM PST; Dallas arrival8:29PM CST (America/Chicago). Clock conversion corrected; ticketed local times unchanged.",
              "budgetCategory": "Transportation",
              "mapFrom": "Air travel",
              "mapTo": "Air travel",
              "routeMode": "transit",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Air+travel&destination=Air+travel&travelmode=transit",
              "endTime": "6:29 PM",
              "detailText": "AA 2496, Economy, seat 8F. Airfare tracked separately from activity budget. Pacific timeline2:34–6:29PM PST; Dallas arrival8:29PM CST (America/Chicago). Clock conversion corrected; ticketed local times unchanged."
            },
            {
              "time": "6:29 PM",
              "name": "DFW layover buffer",
              "type": "rest",
              "neighborhood": "DFW",
              "duration": "121 min",
              "cost": 0,
              "notes": "Pacific timeline6:29–8:30PM PST = Dallas8:29–10:30PM CST;2h01m connection.",
              "budgetCategory": "Food",
              "mapFrom": "DFW",
              "mapTo": "DFW",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=DFW&destination=DFW&travelmode=walking",
              "leaveTime": "8:30 PM",
              "endTime": "8:30 PM",
              "detailText": "Pacific timeline6:29–8:30PM PST = Dallas8:29–10:30PM CST;2h01m connection."
            },
            {
              "time": "8:30 PM",
              "name": "Flight DFW -> CRP",
              "type": "transit",
              "neighborhood": "Air travel",
              "duration": "1h 28m",
              "cost": 0,
              "notes": "AA5273: Dallas10:30PM CST→CorpusChristi11:58PM CST; Pacific calendar8:30–9:58PM PST. Ticketed local times unchanged.",
              "budgetCategory": "Transportation",
              "mapFrom": "Air travel",
              "mapTo": "Air travel",
              "routeMode": "transit",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Air+travel&destination=Air+travel&travelmode=transit",
              "leaveTime": "9:58 PM",
              "endTime": "9:58 PM",
              "detailText": "AA5273: Dallas10:30PM CST→CorpusChristi11:58PM CST; Pacific calendar8:30–9:58PM PST. Ticketed local times unchanged."
            },
            {
              "time": "9:58 PM",
              "name": "Arrival and end-of-trip recovery",
              "type": "rest",
              "neighborhood": "Corpus Christi",
              "duration": "N/A",
              "cost": 0,
              "budgetCategory": "Food",
              "mapFrom": "Corpus Christi",
              "mapTo": "Corpus Christi",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Corpus+Christi&destination=Corpus+Christi&travelmode=walking",
              "leaveTime": "10:30 PM",
              "endTime": "10:30 PM",
              "notes": "Arrival11:58PM CST Nov9 (9:58PM PST). Recovery/transfer allowance until12:30AM CST Nov10; actual airport-exit/transfer time may require a later sleep start.",
              "detailText": "Arrival11:58PM CST Nov9 (9:58PM PST). Recovery/transfer allowance until12:30AM CST Nov10; actual airport-exit/transfer time may require a later sleep start."
            },
            {
              "time": "10:30 PM",
              "endTime": "6:30 AM",
              "endDate": "2026-11-10",
              "name": "Sleep · Corpus Christi (12:30–8:30 AM Central)",
              "type": "rest",
              "neighborhood": "Corpus Christi",
              "location": "Corpus Christi, TX",
              "duration": "8 hrs",
              "cost": 0,
              "budgetCategory": "Food",
              "notes": "After arrival and recovery. Calendar is Pacific:10:30PM Nov9–6:30AM Nov10 equals12:30–8:30AM Nov10 America/Chicago. Eight-hour sleep block; exact lodging is not specified.",
              "detailText": "Calendar Pacific timeline converted from Central local time. Sleep12:30–8:30AM CST onNov10; allow airport exit and transfer after11:58PM CST arrival. Lodging/transfer duration unconfirmed.",
              "mapFrom": "Corpus Christi, TX",
              "mapTo": "Corpus Christi, TX",
              "routeMode": "walking",
              "route": "https://www.google.com/maps/dir/?api=1&origin=Corpus%20Christi%2C%20TX&destination=Corpus%20Christi%2C%20TX&travelmode=walking"
            }
          ]
        }
      ]
    }
  ],
  guides: {
    "dayTrips": [
      {
        "name": "Cannon Beach / Haystack Rock (Day 6, Fri Nov 6)",
        "transitProvider": "POINT NorthWest, an Amtrak Thruway bus partner run by Oregon-Point. Year-round service, no group minimum required.",
        "howToBook": "Book at oregon-point.com/routes/northwest, at an Amtrak ticket kiosk, or by phone at 1-800-872-7245.",
        "departure": "Depart Portland Union Station (800 NW 6th Ave) westbound at 8:28 AM, arriving Astoria at 11:46 AM (connecting bus 5500), then on to Cannon Beach.",
        "onceThere": "The bus stops at 1170 S Hemlock St in downtown Cannon Beach, a short walk from Haystack Rock at Tolovana Beach State Recreation Site. No admission fee -- it is public land, open 24/7.",
        "tidePools": "Tide-pool access around the base of Haystack Rock depends on low tide. Check NOAA tide tables for November 6, 2026 (noaa.gov or tide-forecast.com) closer to the trip and time the walk for a couple hours around the lowest tide.",
        "returnCaveat": "Confirmed: return bus departs Astoria at 5:55 PM (connecting bus 5565), arriving Portland Union Station at 9:00 PM.",
        "budgetForTheDay": "$40 confirmed round-trip fare plus $100 for lunch, coffee, and a cocktail in town, all already built into the Day 6 itinerary and the Transportation/Food budget lines.",
        "link": "https://oregon-point.com/routes/northwest"
      }
    ],
    "reservations": [
      {
        "name": "Beneath the Streets",
        "status": "Target only",
        "note": "Nov2 3:30PM slot and$32 total need confirmation; no ticket purchased.",
        "link": "https://www.beneath-the-streets.com/"
      },
      {
        "name": "Argosy Harbor Cruise",
        "status": "Quoted, not booked",
        "note": "Nov3 2:45PM,$59.79 screenshot quote; First to Board inclusion unresolved. Separate$20 allowance.",
        "link": "https://www.argosycruises.com/argosy-cruises/harbor-cruise/"
      },
      {
        "name": "Sasquatch waterfall tour",
        "status": "Needs confirmation",
        "note": "Retained Nov8;10:30AM conflicts with operator departures; Troutdale transfer unpriced.",
        "link": "https://sasquatchshuttle.com/waterfall-tour/"
      }
    ],
    "photoOps": [
      {
        "name": "Seattle Waterfront photo loop",
        "city": "Seattle",
        "day": "Day 2",
        "subject": "Ferris wheel, waterfront stairs, and Olympic Sculpture Park skyline frames",
        "block": "25 min",
        "budget": "Free",
        "link": "https://www.google.com/maps/search/Seattle+Waterfront+Olympic+Sculpture+Park"
      },
      {
        "name": "Pike Place Market sign and arcade",
        "city": "Seattle",
        "day": "Day 2",
        "subject": "Market sign, arcade, and first fish-market row",
        "block": "Built into the route",
        "budget": "Free",
        "link": "https://www.pikeplacemarket.org/about-pike-place-market/plan-your-visit/"
      },
      {
        "name": "Apple Pioneer Place facade",
        "city": "Portland",
        "day": "Day 5",
        "subject": "Apple frontage, Pioneer Place atrium, and downtown retail geometry",
        "block": "35 min",
        "budget": "Free",
        "link": "https://www.apple.com/retail/pioneerplace/"
      },
      {
        "name": "Powell's interior",
        "city": "Portland",
        "day": "Day 6-8",
        "subject": "Gold Room, Blue Room, and main bookstore stacks",
        "block": "During the bookstore stop",
        "budget": "Free",
        "link": "https://www.travelportland.com/attractions/powells/"
      }
    ],
    "happyHour": [
      {
        "name": "Toulouse Petit",
        "city": "Seattle",
        "deal": "Currently linked June 2026 menu: $11. Target 5:20 PM before 6 PM cutoff; lounge/bar seating, availability unconfirmed.",
        "drink": "Order: Rosemary Collins · current happy-hour menu. Base $11.00; other fee $0.00; tax $1.16; 18% pre-tax tip $1.98; total $14.14. Currently linked June 2026 menu: $11. Target 5:20 PM before 6 PM cutoff; lounge/bar seating, availability unconfirmed.",
        "link": "https://www.toulousepetit.com/wp-content/uploads/2026/06/HH-Menu-Beverage-Summer-5.24.26.pdf"
      },
      {
        "name": "Von’s 1000Spirits · Monday",
        "city": "Seattle",
        "deal": "Current menu $7.99; daily HH 2–6 PM. Includes discretionary 5% cooks commission $0.40; modeled $0.89 tax on drink plus commission, 18% tip on drink. Not a special HH discount on this martini.",
        "drink": "Order: Scratch vodka or gin martini · all-day value during HH. Base $7.99; other fee $0.40; tax $0.89; 18% pre-tax tip $1.44; total $10.72. Current menu $7.99; daily HH 2–6 PM. Includes discretionary 5% cooks commission $0.40; modeled $0.89 tax on drink plus commission, 18% tip on drink. Not a special HH discount on this martini.",
        "link": "https://vons1000spirits.com/Happy-hour-menu/"
      },
      {
        "name": "Rhein Haus · Tuesday",
        "city": "Seattle",
        "deal": "Currently linked HH PDF downloaded and read Oct22: $8 draft cocktails, Mon–Fri 3–6 PM. Espresso martini $8 came from an older menu and is not the chosen current offer.",
        "drink": "Order: Happy-hour draft Negroni · or margarita / old fashioned / Moscow mule. Base $8.00; other fee $0.00; tax $0.84; 18% pre-tax tip $1.44; total $10.28. Currently linked HH PDF downloaded and read Oct22: $8 draft cocktails, Mon–Fri 3–6 PM. Espresso martini $8 came from an older menu and is not the chosen current offer.",
        "link": "https://www.rheinhausseattle.com/s/RHS_HappyHour_8-8-25_WEB.pdf"
      },
      {
        "name": "Novel Book Bar",
        "city": "Portland",
        "deal": "Hours/menu unconfirmed; earlier menu link was for Maine.",
        "drink": "Retained$29 allowance; see Nov7 warning. No verified happy hour.",
        "link": "https://www.instagram.com/novel_pdx/"
      },
      {
        "name": "Rontoms",
        "city": "Portland",
        "deal": "Daily 3-6:30 PM; $1 off draughts, house wines, wells; $10 HH food.",
        "drink": "Use full-price fruity cocktails plus the $10 Caesar if you want the stop to match the new two-cocktail plan.",
        "link": "https://www.rontoms.net/menu-1"
      },
      {
        "name": "Life of Pie",
        "city": "Portland",
        "deal": "Daily 11 AM-6 PM; $9 dine-in Margherita, $6 house beer/wine.",
        "drink": "House wine/beer only if desired.",
        "link": "https://lifeofpiepizza.com/"
      }
    ],
    "coffee": [
      {
        "name": "Anchorhead · Capitol Hill",
        "city": "Seattle",
        "day": "Day4",
        "buy": "10 oz latte; dairy, no syrup",
        "roast": "1115 12th Ave",
        "budget": "$8.04 tax +18% tip included; Operator-linked Summer 2026 menu; November changes possible. Weekdays 7 AM–6 PM.",
        "link": "https://anchorheadcoffee.com/pages/capitol-hill"
      },
      {
        "name": "Phê",
        "city": "Seattle",
        "day": "Day4",
        "buy": "Basic matcha latte + bánh mì",
        "roast": "721 E Pine St",
        "budget": "$23.78 tax +18% tip included; Merchant ordering menu. Matcha $7.50 + bánh mì $11. Weekdays 8 AM–4 PM; pickup/dine-in parity unconfirmed.",
        "link": "https://www.toasttab.com/local/order/phe-yet/"
      },
      {
        "name": "Nana’s Green Tea",
        "city": "Seattle",
        "day": "Day4",
        "buy": "Small matcha latte; dairy, no extras",
        "roast": "1007 Stewart St, Suite 103",
        "budget": "$8.36 tax +18% tip included; Small size $6.50; medium +$0.50, alternative milk +$1. Seattle branch opens 11 AM daily.",
        "link": "https://www.toasttab.com/local/order/nanasgreentea/item-matcha-latte_56debc73-e48d-4460-b545-ee7cb7860089"
      },
      {
        "name": "Pike Place Starbucks",
        "city": "Seattle",
        "day": "Day2",
        "buy": "One bean bag, city mug, cold brew",
        "roast": "1912 Pike Pl",
        "budget": "Retained$41 combined allowance; not a$15–18 mug+beans quote.",
        "link": "https://www.starbucks.com/store-locator"
      },
      {
        "name": "Pegasus Coffee House",
        "city": "Bainbridge Island",
        "day": "Day3",
        "buy": "One coffee",
        "roast": "131 Parfitt WaySW",
        "budget": "$7 all-in allowance; exact item/tax/tip unknown.",
        "link": "https://pegasuscoffee.com/pages/original-pegasus-coffee-house-bainbridge"
      },
      {
        "name": "Stumptown Downtown",
        "city": "Portland",
        "day": "Day 7",
        "buy": "Portland bag + breakfast",
        "roast": "Classic Portland specialty, 128 SW 3rd Ave.",
        "budget": "$20-24 bean bag included in Day 7 breakfast cost.",
        "link": "https://www.stumptowncoffee.com/pages/portland-downtown-cafe"
      },
      {
        "name": "Portland Cà Phê rose matcha",
        "city": "Portland",
        "day": "Day 7",
        "buy": "Rose matcha or matcha latte",
        "roast": "Best short Portland matcha stop with an indoor pull and a clear official site.",
        "budget": "$10.",
        "link": "https://portlandcaphe.com/"
      },
      {
        "name": "Stumptown Downtown",
        "city": "Portland",
        "day": "Day 8",
        "buy": "Repeat breakfast only",
        "roast": "Second visit for breakfast or espresso, not a second Portland bean buy.",
        "budget": "Keep this as food-and-coffee pacing only.",
        "link": "https://www.stumptowncoffee.com/pages/portland-downtown-cafe"
      }
    ],
    "souvenirs": [
      {
        "name": "Starbucks Seattle city mug",
        "location": "Pike Place Starbucks",
        "cost": "$16-18",
        "notes": "Iconic Seattle mug, comes with one coffee included (Day 2). Guide allowance only; not extra funded spend. Actual purchases must fit the itinerary retail allowance or increase budget."
      },
      {
        "name": "Starbucks Portland city mug",
        "location": "Downtown Portland or airport",
        "cost": "$14-16",
        "notes": "Portland-specific mug, tax-free Oregon. Guide allowance only; not extra funded spend. Actual purchases must fit the itinerary retail allowance or increase budget."
      },
      {
        "name": "Seattle reference magnet",
        "location": "Pike Place Market or gift shops",
        "cost": "$8-10",
        "notes": "Small Space Needle or iconic Seattle magnet. Guide allowance only; not extra funded spend. Actual purchases must fit the itinerary retail allowance or increase budget."
      },
      {
        "name": "Portland reference magnet",
        "location": "Powell's or downtown shops",
        "cost": "$8-10",
        "notes": "Small Portland Bridge or iconic Portland magnet. Guide allowance only; not extra funded spend. Actual purchases must fit the itinerary retail allowance or increase budget."
      },
      {
        "name": "Pike Place salmon jerky",
        "location": "Pike Place Market - Wild King stand",
        "cost": "$18-25",
        "notes": "Premium smoked salmon jerky, #1 seller at Pike Place. Guide allowance only; not extra funded spend. Actual purchases must fit the itinerary retail allowance or increase budget."
      },
      {
        "name": "TOTAL SOUVENIRS BUDGET",
        "category": "Guides",
        "budget": "$68-83",
        "notes": "Flexible category; all items priced explicitly. Included in $92 souvenir category budget. Guide allowance only; not extra funded spend. Actual purchases must fit the itinerary retail allowance or increase budget."
      }
    ],
    "rainyDay": [
      "Seattle: Pike Place Market, Seattle Art Museum, Amazon Spheres exterior/photo stop, coffee crawl near Capitol Hill.",
      "Seattle: Replace Bainbridge with UW libraries or a Capitol Hill coffee crawl if weather makes the island block feel too exposed.",
      "Portland: Powell's, Made Here, Hotel Vance/Pearl District coffee blocks, and indoor food carts/beer garden."
    ],
    "packing": [
      "Waterproof shell with hood, not just an umbrella.",
      "Water-resistant walking shoes already broken in.",
      "Small packable tote for two coffee bean bags and market purchases.",
      "Portable battery for maps and transit apps.",
      "Layers: early November can swing from damp/chilly mornings to mild afternoons."
    ]
  },
  exclusions: [
    { name: "Seattle Ferris Wheel", reason: "Touristy; the Seattle Center photo stop already covers the iconic landmark view.", bestDay: "day-2", alternateType: "sightseeing", alternateFor: "Seattle Waterfront + Olympic Sculpture Park", estimatedCost: 22, neighborhood: "Waterfront", duration: "45 min", cost: 22, bestTime: "Midday if weather is clear and you want a shorter paid tourist stop.", notes: "Photo-forward backup, not the best value.", route: "https://www.google.com/maps/dir/Pike+Place+Market/Seattle+Great+Wheel", website: "https://seattlegreatwheel.com/" },
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
    { name: "Novel Book Bar", reason: "Strong Portland add near Hotel Vance Portland with real books, coffee, cocktails, and lighter food, but the user-shared menu points to $15 cocktails so it works better as a one-drink or coffee-plus-browse stop than as a strict two-cocktail budget play.", bestDay: "day-7", alternateType: "cocktails", alternateFor: "Tope or rooftop backup near downtown", estimatedCost: 24, neighborhood: "NW Everett / Pearl edge", duration: "60-90 min", bestTime: "Early evening if you want a close-in Portland social stop with more personality than a generic bar.", notes: "Sample menu the user shared: espresso/americano $4.25, latte $5.25, vanilla latte $5.75, mocha or Spanish latte $6.50, cocktails $15, wine $14-$15, beer $6, burger $7, fries $4, pretzel $5, salad $10, salmon $15.", route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/Novel+Book+Bar+Portland", website: "https://www.instagram.com/novel_pdx/" },
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
    { label: "Pike Place Market visit info", url: "https://www.pikeplacemarket.org/about-pike-place-market/plan-your-visit/" },
    { label: "Sailing Seattle sails", url: "https://sailingseattle.com/sails" },
    { label: "Space Needle official visitor information", url: "https://www.spaceneedle.com/" },
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
    { label: "Novel Book Bar Instagram", url: "https://www.instagram.com/novel_pdx/" },
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
  const cents = value => Math.round(Number(value || 0) * 100);
  const totals = Object.fromEntries(tripData.budget.categories.map(c => [c.name, 0]));
  let itineraryCents = 0;
  for (const day of tripData.itinerary) {
    let dayCents = 0;
    for (const stop of day.segments.flatMap(segment => segment.items)) {
      dayCents += cents(stop.cost);
      for (const part of stop.budgetParts || [{category: stop.budgetCategory, amount: stop.cost}]) {
        totals[part.category] = (totals[part.category] || 0) + cents(part.amount);
      }
    }
    day.dayTotal = dayCents / 100;
    itineraryCents += dayCents;
  }
  const purchases = (tripData.tripCosts.plannedPurchases || []).reduce((s, p) => s + cents(p.amount), 0)
    + (tripData.tripCosts.onlinePurchases || []).reduce((s, g) => s + g.items.reduce((n, p) => n + cents(p.amount), 0), 0);
  totals.Shopping += purchases;
  tripData.budget.projectedTotal = (itineraryCents + purchases) / 100;
  for (const category of tripData.budget.categories) {
    category.amount = (totals[category.name] || 0) / 100;
    category.note = category.name === 'Contingency'
      ? 'Explicit voluntary guide-tip allowances only; unspent cap headroom is not counted as an expense. Unpriced Troutdale connection excluded.'
      : 'Sum of itemized itinerary ledger entries and allocated purchase parts; tax/tip included where stated. Unknown menu splits remain labeled allowances.';
  }
})();
