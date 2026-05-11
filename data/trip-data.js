window.TRIP_DATA = {
  meta: {
    title: "Seattle and Portland Interactive Travel Itinerary",
    dates: "November 1-9, 2026",
    travelerBase: {
      seattle: "The Boylston Hotel Capitol Hill",
      portland: "Hotel Vance, Portland, a Tribute Portfolio Hotel"
    },
    verifiedOn: "May 11, 2026",
    budgetCap: 800,
    absoluteCeiling: 900,
    assumptions: [
      "Airfare and hotels are excluded.",
      "Booked flight costs are displayed separately for visibility and timing, but they do not count toward the $800 activity budget or the $900 ceiling.",
      "Amtrak Cascades 517 is included in the activity budget because the user listed it under intercity transportation.",
      "Prices include estimated local tax where applicable plus budget-conscious tips when table service or cocktails are involved.",
      "Default tip model: 15% for standard sit-down meals, 18% for cocktail bars, $1 for coffee, and 0-10% or simple round-up for counter-service food.",
      "Dashboard USD amounts now also show PHP equivalents using the May 9, 2026 USD/PHP rate plus a 1.85% foreign transaction fee buffer.",
      "Coffee beans are capped at two bags total: one in Seattle and one in Portland, with a maximum bean budget of $60.",
      "Portland home base is Hotel Vance, Portland, a Tribute Portfolio Hotel, 1455 Southwest Broadway, Portland, Oregon 97201, United States.",
      "November 2026 hours are not fully published for many businesses, so the dashboard flags current verified status and recommends rechecking before booking.",
      "The plan is curated best-fit; not every candidate location is included.",
      "May 11 Seattle update uses the shared Google Maps saved list as the candidate source, with menu/pricing checked against official or current public pages where possible."
    ]
  },
  budget: {
    cap: 800,
    absoluteCeiling: 900,
    projectedTotal: 763,
    categories: [
      { name: "Transportation", amount: 142, note: "ORCA, ferry, Amtrak, TriMet/Hop; no planned rideshare." },
      { name: "Food", amount: 327, note: "Food spend now shifts Seattle toward Capitol Hill saved-list meals, Bainbridge breakfast, and lighter Pike Place grazing; tax and conservative tips included." },
      { name: "Cocktails and social", amount: 74, note: "Seattle nightlife now defaults to lower-cost Capitol Hill happy-hour/social stops instead of a downtown Sky View cocktail splurge." },
      { name: "Entrance fees", amount: 54, note: "Sky View Observatory and Portland Japanese Garden; Seattle Japanese Garden moved out of the default Bainbridge day." },
      { name: "Coffee beans", amount: 60, note: "Maximum two bags total: one Seattle bag and one Portland bag." },
      { name: "Souvenirs", amount: 35, note: "Small Pike Place, Hello From Portland, and downtown/Pearl gift allowance." },
      { name: "Contingency", amount: 71, note: "Weather snacks, saved-list price variance, ferry timing, or an optional Capitol Hill happy-hour add-on while staying below the $800 target." }
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
      recommendation: "Walk on for Bainbridge. Passenger fares are collected Seattle to Bainbridge; return walk-on passenger travel is no charge. Budget $11.35 after the 2026 increase plus card fee buffer.",
      fare: "$11.05 current adult round-trip style fare before May 2026 adjustment and processing fee",
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
    airfareTotal: 1286.84,
    journeys: [
      {
        id: "journey-arrival-2026-11-01",
        tripDayId: "day-1",
        kind: "Arrival journey",
        title: "Manila to Seattle via Incheon",
        dateLabel: "Sunday, November 1, 2026",
        ticketCost: 540.43,
        airportLeaveBy: "Be at Manila airport by 9:05 AM for the 12:05 PM international departure.",
        visibilityNote: "This is the long-haul arrival chain that feeds directly into the Seattle day-one plan.",
        statusLabel: "Booked and confirmed; monitor for gate, delay, and schedule changes.",
        alertCopy: "Near-real-time polling is set up around official airline and airport status pages every 15 minutes, with email alerts intended when the monitor detects a change and email credentials are configured.",
        statusSource: "https://flyasiana.com/C/US/EN/index",
        airportSource: "https://www.portseattle.org/sea-tac/flight-status",
        legs: [
          {
            from: { code: "MNL", city: "Manila" },
            to: { code: "ICN", city: "Seoul / Incheon" },
            departureTime: "12:05 PM",
            arrivalTime: "4:40 PM",
            duration: "Non-stop",
            connectionNote: "4 hr 20 min transit",
            flightNumber: "OZ702",
            aircraft: "A330",
            cabin: "Economy (V)",
            mileage: "1139 miles; mileage upgrade unavailable"
          },
          {
            from: { code: "ICN", city: "Seoul / Incheon" },
            to: { code: "SEA", city: "Seattle" },
            departureTime: "9:00 PM",
            arrivalTime: "1:55 PM",
            duration: "Non-stop",
            connectionNote: "Same-day Seattle arrival",
            flightNumber: "OZ272",
            aircraft: "B777",
            cabin: "Economy (V)",
            mileage: "3637 miles; mileage upgrade unavailable"
          }
        ]
      },
      {
        id: "journey-return-2026-11-09",
        tripDayId: "day-9",
        kind: "Return journey",
        title: "Portland to Corpus Christi via Dallas/Fort Worth",
        dateLabel: "Monday, November 9, 2026",
        ticketCost: 746.41,
        airportLeaveBy: "Leave Hotel Vance by 11:00 AM and aim to be inside PDX by 11:15 AM for the 1:47 PM departure.",
        visibilityNote: "This is the November departure routing that replaces the old generic flight-dependent buffer language.",
        statusLabel: "Booked and ticketed; watch for PDX departure updates and DFW connection changes.",
        alertCopy: "The dashboard should surface the latest known status, while the 15-minute monitor is designed to email delay or gate-change alerts when the provider-side email secrets are configured.",
        statusSource: "https://www.aa.com/travelInformation/flights/status",
        airportSource: "https://www.flypdx.com/Flights#/arrivals-and-departures",
        legs: [
          {
            from: { code: "PDX", city: "Portland" },
            to: { code: "DFW", city: "Dallas / Fort Worth" },
            departureTime: "1:47 PM",
            arrivalTime: "7:34 PM",
            duration: "Non-stop",
            connectionNote: "1 hr 36 min connection",
            flightNumber: "AA 2496",
            cabin: "Economy (S)",
            seat: "8F",
            meals: "Food for purchase"
          },
          {
            from: { code: "DFW", city: "Dallas / Fort Worth" },
            to: { code: "CRP", city: "Corpus Christi" },
            departureTime: "9:10 PM",
            arrivalTime: "10:45 PM",
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
        title: "Corpus Christi to San Francisco via Dallas/Fort Worth",
        dateLabel: "Saturday, February 27, 2027",
        ticketCost: null,
        airportLeaveBy: "Be at CRP by about 8:10 AM if you keep the same 10:11 AM departure.",
        visibilityNote: "Outside the Seattle-Portland travel window, but kept visible because it appeared in your booking screenshots.",
        statusLabel: "Future booked routing; monitor closer to February 27, 2027.",
        alertCopy: "This later booking can share the same flight-watch structure, but it should not affect the November 2026 activity budget.",
        statusSource: "https://www.aa.com/travelInformation/flights/status",
        airportSource: "https://www.dfwairport.com/flights/",
        legs: [
          {
            from: { code: "CRP", city: "Corpus Christi" },
            to: { code: "DFW", city: "Dallas / Fort Worth" },
            departureTime: "10:11 AM",
            arrivalTime: "11:40 AM",
            duration: "Regional connection",
            connectionNote: "1 hr 35 min transit",
            flightNumber: "AA 3774",
            cabin: "Economy (N)",
            seat: "8C",
            operator: "Operated by Envoy Air as American Eagle"
          },
          {
            from: { code: "DFW", city: "Dallas / Fort Worth" },
            to: { code: "SFO", city: "San Francisco" },
            departureTime: "1:15 PM",
            arrivalTime: "3:14 PM",
            duration: "Non-stop",
            connectionNote: "Future trip final leg",
            flightNumber: "AA 701",
            cabin: "Economy (N)",
            seat: "8F",
            meals: "Food for purchase"
          }
        ]
      }
    ]
  },
  flightMonitor: {
    cadenceMinutes: 15,
    cadenceLabel: "Every 15 minutes",
    channel: "Email alerts plus dashboard status visibility",
    displayTitle: "15-minute flight watch",
    displayNote: "This project treats flight updates as near-real-time polling rather than true airline push alerts. The dashboard can show the latest known status, and the monitor is structured to send email alerts when its provider credentials are configured."
  },
  itinerary: [
    {
      id: "day-1",
      date: "Sun, Nov 1",
      city: "Seattle",
      title: "Arrival, Capitol Hill reset, low-pressure cocktail",
      theme: "Jet lag buffer",
      dayTotal: 62,
      weatherPlan: "Keep this day indoors and close to The Boylston; all default food/drink stops are now Capitol Hill/Pike-Pine instead of downtown.",
      segments: [
        {
          label: "Afternoon",
          items: [
            {
              time: "1:55 PM",
              leaveTime: "2:15 PM from airport station",
              name: "Arrive SEA, Link light rail to Capitol Hill",
              type: "transit",
              neighborhood: "Airport to Capitol Hill",
              duration: "55-65 min including walking",
              cost: 3,
              bestTime: "Immediately after baggage",
              route: "https://www.google.com/maps/dir/Seattle-Tacoma+International+Airport/The+Boylston+Hotel+Capitol+Hill+Seattle",
              notes: "Use Link from SeaTac/Airport Station to Capitol Hill Station, then walk to the hotel.",
              status: "Operating transit route; verify service alerts day-of."
            },
            {
              time: "3:15 PM",
              name: "Check in at The Boylston Hotel Capitol Hill",
              type: "hotel",
              anchorType: "hotel-checkin",
              hotelContext: "Seattle base: The Boylston Hotel Capitol Hill",
              neighborhood: "Capitol Hill",
              duration: "20-30 min",
              cost: 0,
              bestTime: "Right after arrival transit.",
              notes: "Drop bags, reset, and keep the first afternoon close to the hotel.",
              route: "https://www.google.com/maps/dir/Capitol+Hill+Station+Seattle/The+Boylston+Hotel+Capitol+Hill+Seattle"
            },
            {
              time: "4:30 PM",
              leaveTime: "4:15 PM",
              name: "Tailwind Cafe at Good Weather",
              type: "coffee",
              neighborhood: "Capitol Hill / Chophouse Row",
              duration: "35-45 min",
              cost: 10,
              bestTime: "Late afternoon reset; use breakfast here on a different day only if Glo's is too busy.",
              knownFor: "New all-day cafe/bar inside Good Weather's Capitol Hill bike shop space, with breakfast starting at 8 AM.",
              sentiment: "Closest useful saved-list cafe for a low-pressure arrival reset near the hotel.",
              payment: "Cards expected.",
              taxTipIncluded: "Estimate assumes one coffee or nonalcoholic drink plus Seattle tax and a $1 tip.",
              tipGuidance: "$1 is enough for coffee. If you order table-service food, use 15%.",
              hours: "Current public hours show daily 8 AM-4 PM; happy hour is listed as coming soon, so no happy-hour pricing is assumed yet.",
              happyHour: "Happy hour not verified; official site says happy hour is coming soon.",
              website: "https://tailwindcafe.com/",
              route: "https://www.google.com/maps/dir/The+Boylston+Hotel+Capitol+Hill+Seattle/Tailwind+Cafe+Good+Weather+Seattle"
            }
          ]
        },
        {
          label: "Evening",
          items: [
            {
              time: "5:30 PM",
              leaveTime: "5:20 PM",
              name: "Saint John's Bar and Eatery",
              type: "cocktails",
              neighborhood: "Capitol Hill",
              duration: "60-75 min",
              cost: 24,
              bestTime: "Arrival-night happy hour if timing works.",
              knownFor: "Capitol Hill neighborhood bar, casual food, and a cheaper saved-list happy-hour replacement for Canon.",
              sentiment: "Better fit than Canon when you want close, social, and budget-aware after a long flight.",
              happyHour: "Official happy-hour page lists weekday afternoon deals including discounted drinks and snacks; exact November 2026 pricing should be rechecked.",
              recommended: "Use this for one or two lower-cost happy-hour drinks and a light bite instead of a full two-cocktail splurge on arrival night.",
              reservation: "Walk-in is the safe assumption.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate assumes happy-hour drink(s), a light food order, Seattle tax, and an 18% bar tip.",
              tipGuidance: "For bar service with food, 18% is still the right default.",
              hours: "Current schedule should be rechecked before the trip.",
              website: "https://www.saintjohnsseattle.com/happyhour-v1",
              route: "https://www.google.com/maps/dir/Tailwind+Cafe+Good+Weather+Seattle/Saint+John's+Bar+and+Eatery+Seattle"
            },
            {
              time: "7:00 PM",
              leaveTime: "6:50 PM",
              name: "Poquitos Capitol Hill",
              type: "food",
              neighborhood: "Capitol Hill",
              duration: "45 min",
              cost: 25,
              bestTime: "Ocho Hour or simple dinner after Saint John's.",
              knownFor: "Capitol Hill Mexican stop from the saved list, with an official Ocho Hour happy-hour program.",
              sentiment: "Close to the hotel and easier than adding another downtown dinner after a long travel day.",
              happyHour: "Official site lists Ocho Hour at $8 each for select tacos, nachos, margaritas, beer, wine, and more; recheck current timing before travel.",
              reservation: "Walk-in or reserve if you want certainty.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate assumes a light dinner or happy-hour order, Seattle tax, and a 15% sit-down tip.",
              tipGuidance: "15% is acceptable for normal sit-down service here.",
              hours: "Current daily hours and Ocho Hour timing should be rechecked before the trip.",
              website: "https://www.vivapoquitos.com/",
              route: "https://www.google.com/maps/dir/Saint+John's+Bar+and+Eatery+Seattle/Poquitos+Capitol+Hill+Seattle"
            }
          ]
        }
      ]
    },
    {
      id: "day-2",
      date: "Mon, Nov 2",
      city: "Seattle",
      title: "Capitol Hill coffee, Pike Place views, noodle dinner",
      theme: "Capitol Hill base with downtown sightseeing",
      dayTotal: 103,
      weatherPlan: "Keep Pike Place and the waterfront as sightseeing, but move default food back toward Capitol Hill to stay close to the hotel.",
      segments: [
        {
          label: "Morning",
          items: [
            {
              time: "8:30 AM",
              leaveTime: "8:15 AM",
              name: "Victrola Coffee Roasters - Capitol Hill",
              type: "coffee",
              neighborhood: "Capitol Hill",
              duration: "35 min",
              cost: 29,
              bestTime: "Before heading downtown.",
              knownFor: "Capitol Hill coffee anchor close to the hotel and a better fit than forcing the bean stop downtown.",
              sentiment: "Saved-list coffee stop that keeps the morning local.",
              beans: "Use this as the default Seattle bean purchase if you skip Anchorhead; keep the Seattle bean budget near $20 plus one drink.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate includes one bag of beans, one coffee drink, Seattle tax, and a $1 coffee tip.",
              tipGuidance: "$1 for coffee; no tip needed on the retail bean bag.",
              hours: "Recheck current Capitol Hill cafe hours before the trip.",
              website: "https://www.victrolacoffee.com/",
              route: "https://www.google.com/maps/dir/The+Boylston+Hotel+Capitol+Hill+Seattle/Victrola+Coffee+Roasters+Capitol+Hill+Seattle"
            },
            {
              time: "9:20 AM",
              leaveTime: "9:05 AM",
              name: "Pike Place Market light grazing route",
              type: "food",
              neighborhood: "Pike Place",
              duration: "2.5 hr",
              cost: 12,
              bestTime: "Before noon; keep this to snacks instead of a full meal.",
              knownFor: "Piroshky Piroshky, Daily Dozen, Beecher's, MarketSpice, Mee Sum Pastry, Rachel's Ginger Beer.",
              sentiment: "Still worth seeing, but no longer the main Seattle food day.",
              reservation: "No reservations; expect lines.",
              payment: "Most major vendors accept cards; carry a small backup card and avoid cash-only assumptions.",
              taxTipIncluded: "Estimate includes tax; counter tips are optional.",
              tipGuidance: "For market counters, tip $0-1 or 10% only if someone provides meaningful service.",
              hours: "Market open daily; most activity 10 AM-5 PM, breakfast and seafood earlier.",
              website: "https://www.pikeplacemarket.org/about-pike-place-market/plan-your-visit/",
              route: "https://www.google.com/maps/dir/Anchorhead+Coffee+Pike+Place/Pike+Place+Market/Beecher's+Handmade+Cheese+Seattle/MarketSpice+Seattle"
            }
          ]
        },
        {
          label: "Afternoon",
          items: [
            {
              time: "12:15 PM",
              leaveTime: "12:05 PM",
              name: "Seattle Waterfront + Olympic Sculpture Park",
              type: "sightseeing",
              neighborhood: "Waterfront / Belltown",
              duration: "90 min",
              cost: 0,
              bestTime: "Midday for daylight and views.",
              knownFor: "Free waterfront walk, public art, Elliott Bay views.",
              sentiment: "Worth it in dry weather; skip Ferris Wheel unless you want a tourist photo.",
              hours: "Outdoor public spaces; daylight recommended.",
              website: "https://seattleartmuseum.org/visit/olympic-sculpture-park",
              route: "https://www.google.com/maps/dir/Pike+Place+Market/Olympic+Sculpture+Park/Seattle+Waterfront"
            },
            {
              time: "3:30 PM",
              leaveTime: "3:05 PM",
              name: "Columbia Center Sky View Observatory",
              type: "sightseeing",
              neighborhood: "Downtown",
              duration: "75 min",
              cost: 30,
              bestTime: "Late afternoon before sunset pricing or private event risk.",
              knownFor: "Tallest public view in the Pacific Northwest from the 73rd floor.",
              sentiment: "Better value than Space Needle for skyline views.",
              reservation: "Timed, dated ticket recommended; hours can change for private events.",
              payment: "Cards accepted.",
              taxTipIncluded: "Ticket estimate includes fees/tax buffer; no tip.",
              hours: "Hours vary; official site says dated/timed tickets required and last elevator is one hour before close.",
              website: "https://skyviewobservatory.com/location/",
              route: "https://www.google.com/maps/dir/Seattle+Waterfront/Sky+View+Observatory+Seattle"
            }
          ]
        },
        {
          label: "Evening",
          items: [
            {
              time: "6:15 PM",
              leaveTime: "5:45 PM",
              name: "Biang Biang Noodles - Capitol Hill",
              type: "food",
              neighborhood: "Capitol Hill",
              duration: "60 min",
              cost: 22,
              bestTime: "Dinner after returning from downtown.",
              knownFor: "Hand-pulled noodles, chili oil, and a filling saved-list dinner near the hotel.",
              sentiment: "Better default than another downtown fallback because it keeps the evening close.",
              reservation: "None.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate assumes one noodle entree, Seattle tax, and a small counter-service tip.",
              tipGuidance: "Counter service: 0-10% or rounding up is acceptable.",
              hours: "Recheck Capitol Hill branch hours before the trip.",
              website: "https://www.biangbiangnoodles.com/",
              route: "https://www.google.com/maps/dir/Sky+View+Observatory+Seattle/Biang+Biang+Noodles+Capitol+Hill+Seattle"
            },
            {
              time: "7:30 PM",
              name: "Salt & Straw Capitol Hill",
              type: "food",
              neighborhood: "Capitol Hill",
              duration: "25 min",
              cost: 10,
              bestTime: "Dessert after noodles.",
              knownFor: "Pacific Northwest ice cream chain with a Capitol Hill shop.",
              sentiment: "Easy dessert without adding another full meal.",
              reservation: "None.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate assumes one scoop or similar dessert with Seattle tax; tip optional.",
              tipGuidance: "Counter-service dessert: tip optional.",
              hours: "Official location page should be rechecked before the trip.",
              website: "https://saltandstraw.com/pages/capitol-hill",
              route: "https://www.google.com/maps/dir/Biang+Biang+Noodles+Capitol+Hill+Seattle/Salt+and+Straw+Capitol+Hill+Seattle"
            }
          ]
        }
      ]
    },
    {
      id: "day-3",
      date: "Tue, Nov 3",
      city: "Seattle",
      title: "Bainbridge Island and Capitol Hill dinner",
      theme: "Ferry day",
      dayTotal: 88,
      weatherPlan: "If ferries are delayed by wind or marine weather, replace Bainbridge with Capitol Hill cafes, Walgreens, and a noodle lunch near the hotel.",
      segments: [
        {
          label: "Morning",
          items: [
            {
              time: "8:45 AM",
              leaveTime: "8:05 AM",
              name: "Walk/transit to Seattle Ferry Terminal",
              type: "transit",
              neighborhood: "Capitol Hill to Waterfront",
              duration: "35-45 min",
              cost: 3,
              bestTime: "Leave buffer for ticketing.",
              route: "https://www.google.com/maps/dir/The+Boylston+Hotel+Capitol+Hill+Seattle/Seattle+Ferry+Terminal",
              notes: "Use Link/bus to downtown or walk downhill if weather is clear."
            },
            {
              time: "9:45 AM",
              leaveTime: "9:20 AM",
              name: "Bainbridge ferry fare + Winslow arrival",
              type: "sightseeing",
              neighborhood: "Bainbridge Island",
              duration: "35 min crossing plus terminal buffer",
              cost: 11,
              bestTime: "Morning sailing for calmer pacing.",
              knownFor: "Seattle skyline and Elliott Bay ferry views on the way to Bainbridge.",
              sentiment: "Still the main island-day anchor, but food is now broken into the saved places you picked.",
              reservation: "No passenger reservation; first come, first served.",
              payment: "WSF accepts card; card processing fee starts March 2026.",
              taxTipIncluded: "Walk-on ferry fare estimate includes 2026 fare-increase and card-fee buffer; no tip.",
              tipGuidance: "No tip for ferry fare.",
              hours: "Ferry schedule varies; recheck WSF day-of.",
              website: "https://wsdot.wa.gov/ferries/schedule/scheduledetailbyroute.aspx?route=sea-bi",
              route: "https://www.google.com/maps/dir/The+Boylston+Hotel+Capitol+Hill+Seattle/Seattle+Ferry+Terminal/Bainbridge+Island+Ferry+Terminal"
            }
          ]
        },
        {
          label: "Bainbridge breakfast and waterfront",
          items: [
            {
              time: "10:15 AM",
              leaveTime: "10:05 AM from ferry terminal",
              name: "Madison Diner breakfast",
              type: "food",
              neighborhood: "Winslow / Bainbridge Island",
              duration: "60 min",
              cost: 22,
              bestTime: "Late breakfast after the ferry.",
              knownFor: "Classic diner breakfast in the saved Bainbridge cluster.",
              sentiment: "Better fit than the old Cafe Hitchcock block because you specifically wanted breakfast-friendly island stops.",
              reservation: "Walk-in is the safe assumption.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate assumes a breakfast plate, coffee, local tax, and a 15% sit-down tip.",
              tipGuidance: "15% is acceptable for standard diner service.",
              hours: "Current listings show breakfast/lunch service; recheck before travel.",
              website: "https://visitbainbridgeisland.org/business/the-madison-diner/",
              route: "https://www.google.com/maps/dir/Bainbridge+Island+Ferry+Terminal/Madison+Diner+Bainbridge+Island"
            },
            {
              time: "11:30 AM",
              leaveTime: "11:20 AM",
              name: "Waterfront Park & City Dock",
              type: "sightseeing",
              neighborhood: "Bainbridge Island",
              duration: "60 min",
              cost: 0,
              bestTime: "Late morning after breakfast.",
              knownFor: "Free waterfront walk, marina views, and the official City Dock.",
              sentiment: "The right no-cost Bainbridge outdoor anchor from your saved list.",
              taxTipIncluded: "Free public space; no tip.",
              hours: "Public park and dock; daylight recommended.",
              website: "https://bainbridgewa.gov/302/Waterfront-Park-City-Dock",
              route: "https://www.google.com/maps/dir/Madison+Diner+Bainbridge+Island/Waterfront+Park+and+City+Dock+Bainbridge+Island"
            },
            {
              time: "12:45 PM",
              name: "Pegasus Coffee House or Commuter Comforts",
              type: "coffee",
              neighborhood: "Bainbridge Island",
              duration: "35 min",
              cost: 8,
              bestTime: "Coffee before the ferry back.",
              knownFor: "Pegasus is the classic island coffee stop; Commuter Comforts is the ferry-terminal convenience backup.",
              sentiment: "Use Pegasus if you want atmosphere, Commuter Comforts if the ferry timing is tight.",
              payment: "Cards expected.",
              taxTipIncluded: "Estimate assumes one coffee drink, local tax, and a $1 coffee tip.",
              tipGuidance: "$1 is enough for coffee.",
              hours: "Recheck current Bainbridge hours before travel.",
              website: "https://pegasuscoffeehouse.com/",
              route: "https://www.google.com/maps/dir/Waterfront+Park+and+City+Dock+Bainbridge+Island/Pegasus+Coffee+House+Bainbridge+Island/Commuter+Comforts+Bainbridge+Island"
            },
            {
              time: "1:30 PM",
              name: "Island Cool Ice Cream",
              type: "food",
              neighborhood: "Bainbridge Island",
              duration: "20 min",
              cost: 7,
              bestTime: "Quick dessert if the weather is dry.",
              knownFor: "Small island ice cream stop from the saved list.",
              sentiment: "Optional-feeling, but cheap enough to keep in the default island day.",
              payment: "Cards expected.",
              taxTipIncluded: "Estimate assumes one scoop with tax; tip optional.",
              tipGuidance: "Counter-service dessert: tip optional.",
              hours: "Seasonal and weather-sensitive; recheck day-of.",
              website: "https://www.google.com/maps/search/Island+Cool+Ice+Cream+Bainbridge+Island",
              route: "https://www.google.com/maps/dir/Pegasus+Coffee+House+Bainbridge+Island/Island+Cool+Ice+Cream+Bainbridge+Island/Bainbridge+Island+Ferry+Terminal"
            }
          ]
        },
        {
          label: "Evening",
          items: [
            {
              time: "6:15 PM",
              leaveTime: "5:50 PM",
              name: "Menya Musashi or Kajiken Capitol Hill dinner",
              type: "food",
              neighborhood: "Capitol Hill",
              duration: "60 min",
              cost: 25,
              bestTime: "Dinner after returning from Bainbridge.",
              knownFor: "Saved-list noodle choices near the hotel: Menya Musashi for ramen/tsukemen, Kajiken for abura soba.",
              sentiment: "This keeps the ferry day from ending with a long International District detour.",
              reservation: "Walk-in is the safe assumption.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate assumes one ramen, tsukemen, or abura soba meal, Seattle tax, and a 15% sit-down tip if table service applies.",
              tipGuidance: "Use 15% for normal sit-down service; if counter ordering, 0-10% is fine.",
              hours: "Recheck current Capitol Hill hours before travel.",
              website: "https://menyamusashi.us/ramen-menu-seattle/ramen-menu-capitol-hill-seattle/",
              route: "https://www.google.com/maps/dir/Bainbridge+Island+Ferry+Terminal/Menya+Musashi+Capitol+Hill+Seattle/Kajiken+Seattle"
            },
            {
              time: "8:00 PM",
              name: "Rock Box karaoke",
              type: "cocktails",
              neighborhood: "Capitol Hill",
              duration: "60 min",
              cost: 12,
              bestTime: "Only if you still have energy after the ferry day.",
              knownFor: "Private-room karaoke in Capitol Hill.",
              sentiment: "Fun saved-list nightlife backup; keep spend light unless you intentionally want a bigger night.",
              happyHour: "Happy hour not verified from a current official source; price as a light one-drink/activity buffer.",
              reservation: "Reserve if you want a private-room time slot.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate is a light buffer only, not a full room-plus-drinks night.",
              tipGuidance: "If ordering drinks, use 18% for bar service.",
              hours: "Recheck current hours and room minimums before booking.",
              website: "https://rockboxseattle.com/",
              route: "https://www.google.com/maps/dir/Menya+Musashi+Capitol+Hill+Seattle/Rock+Box+Seattle"
            }
          ]
        }
      ]
    },
    {
      id: "day-4",
      date: "Wed, Nov 4",
      city: "Seattle to Portland",
      title: "Glo's, Phê, pharmacy buffer, Amtrak south",
      theme: "Transfer day",
      dayTotal: 134,
      weatherPlan: "Use this as a practical Capitol Hill checkout morning: breakfast, pharmacy buffer, coffee/snack, then King Street Station.",
      segments: [
        {
          label: "Morning",
          items: [
            {
              time: "7:15 AM",
              name: "Check out of The Boylston Hotel Capitol Hill",
              type: "hotel",
              anchorType: "hotel-departure",
              hotelContext: "Seattle base: The Boylston Hotel Capitol Hill",
              neighborhood: "Capitol Hill",
              duration: "15-20 min",
              cost: 0,
              notes: "Store luggage if needed, or head out with a light bag before the transfer day begins."
            },
            {
              time: "8:30 AM",
              leaveTime: "8:15 AM",
              name: "Glo's Capitol Hill breakfast",
              type: "food",
              neighborhood: "Capitol Hill",
              duration: "60-75 min",
              cost: 20,
              bestTime: "Morning before heading to King Street Station.",
              knownFor: "Seattle diner breakfast, pancakes, egg plates, and an easy sit-down sendoff near the hotel.",
              sentiment: "Good comfort-food reset and a more grounded morning than a second coffee crawl.",
              reservation: "Walk-in only is the safe assumption; expect a wait at peak brunch hours.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate includes a breakfast plate, coffee, Seattle tax, and a 15% sit-down tip.",
              tipGuidance: "15% is fine here if service is normal. You are not being cheap by using that as your diner default.",
              hours: "Recent menu listings show daily morning-through-3 PM service; recheck before the trip.",
              website: "https://glosseattle.com/",
              route: "https://www.google.com/maps/dir/The+Boylston+Hotel+Capitol+Hill+Seattle/Glo's+Seattle"
            },
            {
              time: "9:50 AM",
              name: "Phê Vietnamese coffee or Victrola backup",
              type: "coffee",
              neighborhood: "Capitol Hill / First Hill",
              duration: "30 min",
              cost: 8,
              bestTime: "After breakfast if you want a second coffee or matcha-style drink.",
              knownFor: "Phê is the confirmed interpretation of your `phe` note: Vietnamese coffee/matcha-style cafe energy near the hotel area.",
              sentiment: "Good quick saved-list coffee stop without leaving the Capitol Hill/First Hill orbit.",
              payment: "Cards expected.",
              taxTipIncluded: "Estimate assumes one drink with Seattle tax and a $1 tip.",
              tipGuidance: "$1 is enough for coffee.",
              hours: "Recheck current hours before travel.",
              website: "https://www.google.com/maps/search/Ph%C3%AA+Seattle+Capitol+Hill",
              route: "https://www.google.com/maps/dir/Glo's+Seattle/Ph%C3%AA+Seattle"
            },
            {
              time: "10:25 AM",
              name: "Walgreens Pharmacy Capitol Hill",
              type: "shopping",
              neighborhood: "Capitol Hill",
              duration: "15 min",
              cost: 5,
              bestTime: "Pre-train pharmacy/water/snack buffer.",
              knownFor: "Practical saved-list stop for toiletries, medicine, or bottled water before Amtrak.",
              sentiment: "Not scenic, but useful and close.",
              taxTipIncluded: "Small essentials buffer includes Seattle tax; no tip.",
              tipGuidance: "No tip.",
              hours: "Recheck location hours before travel.",
              website: "https://www.walgreens.com/locator/walgreens-1531+broadway-seattle-wa-98122/id=13087",
              route: "https://www.google.com/maps/dir/Ph%C3%AA+Seattle/Walgreens+1531+Broadway+Seattle"
            }
          ]
        },
        {
          label: "Afternoon",
          items: [
            {
              time: "Train time per ticket",
              leaveTime: "35-45 min before departure",
              name: "Amtrak Cascades 517 to Portland",
              type: "transit",
              neighborhood: "King Street Station to Portland Union Station",
              duration: "About 3.5-4 hr",
              cost: 86,
              bestTime: "Arrive 35-45 min early.",
              knownFor: "Scenic, low-stress intercity transfer.",
              sentiment: "Correct choice for budget and comfort.",
              reservation: "Ticket already planned at $86.",
              payment: "Ticket purchased separately but included in activity budget.",
              taxTipIncluded: "Ticket cost; no tip.",
              hours: "Verify exact departure and service notices closer to travel.",
              website: "https://www.amtrakcascades.com/",
              route: "https://www.google.com/maps/dir/King+Street+Station+Seattle/Portland+Union+Station"
            },
            {
              time: "Before train",
              name: "Voodoo Doughnut or Insomnia Cookies train snack",
              type: "food",
              neighborhood: "Capitol Hill / King Street carryout",
              duration: "10-20 min",
              cost: 11,
              bestTime: "Buy only if it fits luggage and train timing.",
              knownFor: "Sweet saved-list carryout: Voodoo for doughnuts, Insomnia for cookies.",
              sentiment: "Use as a fun snack, not a full extra meal.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate assumes one to two sweets with Seattle tax; tip optional.",
              tipGuidance: "Counter-service sweets: tip optional.",
              hours: "Both chains publish location hours; recheck day-of.",
              website: "https://www.voodoodoughnut.com/locations/",
              route: "https://www.google.com/maps/search/Voodoo+Doughnut+Insomnia+Cookies+Capitol+Hill+Seattle"
            }
          ]
        },
        {
          label: "Evening",
          items: [
            {
              time: "After arrival",
              name: "Check in at Hotel Vance",
              type: "hotel",
              anchorType: "hotel-checkin",
              hotelContext: "Portland base: Hotel Vance, Portland, a Tribute Portfolio Hotel",
              neighborhood: "Downtown / Cultural District",
              duration: "20-30 min",
              cost: 0,
              notes: "Drop bags and reset before deciding how much of the Powell's / Life of Pie plan still fits."
            },
            {
              time: "After check-in",
              leaveTime: "10-15 min after hotel reset",
              name: "Powell's City of Books + Life of Pie NW",
              type: "food",
              neighborhood: "Pearl / NW 23rd",
              duration: "2 hr",
              cost: 4,
              bestTime: "Evening browse, then simple happy-hour pizza if arrival is early enough.",
              knownFor: "Powell's is the iconic bookstore; Life of Pie has a strong daily pizza happy hour.",
              sentiment: "Powell's is touristy but genuinely worth it; Life of Pie is good value.",
              happyHour: "Life of Pie: 11 AM-6 PM daily, $9 dine-in Margherita and $6 beer/wine.",
              reservation: "Life of Pie accepts large group reservations; solo/couple walk-in is fine.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate assumes browsing only; food/drink would be added separately.",
              tipGuidance: "Life of Pie counter/table hybrid: tip 10% if served at table, optional for pickup/counter.",
              hours: "Powell's daily 10 AM-9 PM; Life of Pie daily 11 AM-10 PM.",
              website: "https://www.powells.com/locations/powells-city-of-books",
              menu: "https://lifeofpiepizza.com/",
              route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/Powell's+City+of+Books/Life+of+Pie+NW+23rd"
            }
          ]
        }
      ]
    },
    {
      id: "day-5",
      date: "Thu, Nov 5",
      city: "Portland",
      title: "Washington Park, Japanese Garden, downtown books",
      theme: "Classic Portland",
      dayTotal: 77,
      weatherPlan: "Japanese Garden is still good in light rain; use Powell's and cafes if wind is rough.",
      segments: [
        {
          label: "Morning",
          items: [
            {
              time: "8:30 AM",
              leaveTime: "8:20 AM",
              name: "Hotel Vance Starbucks or Stumptown Downtown",
              type: "coffee",
              neighborhood: "Cultural District / Downtown",
              duration: "35 min",
              cost: 6,
              bestTime: "Before heading uphill.",
              knownFor: "Fast near-hotel caffeine start with an easy PSU/downtown launch.",
              sentiment: "Most practical morning coffee from the new hotel base.",
              beans: "Save bean purchases for Coava/Heart/Stumptown retail.",
              payment: "Cards accepted at major cafes.",
              taxTipIncluded: "Drink estimate includes tax plus $1 coffee tip.",
              tipGuidance: "$1 is enough for coffee.",
              hours: "Hotel Vance Starbucks currently lists daily morning-through-evening service; recheck the downtown Stumptown branch hours closer to the trip.",
              website: "https://www.hotelvance.com/dining",
              route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/Stumptown+Coffee+Roasters+Downtown+Portland"
            },
            {
              time: "10:00 AM",
              leaveTime: "9:20 AM",
              name: "Washington Park + Portland Japanese Garden",
              type: "sightseeing",
              neighborhood: "Washington Park",
              duration: "3 hr",
              cost: 28,
              bestTime: "Opening time to avoid lines.",
              knownFor: "One of Portland's best-designed gardens; strong rainy-day outdoor option.",
              sentiment: "Worth the hype.",
              reservation: "Book timed ticket up to 10 days ahead.",
              payment: "Cards accepted.",
              taxTipIncluded: "Ticket estimate includes fees/tax buffer; no tip.",
              hours: "Public hours generally Wed-Mon 10 AM-5:30 PM, Tue noon-5:30 PM; adult admission $22.50.",
              website: "https://japanesegarden.org/hours-admission/",
              route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/Washington+Park+MAX+Station/Portland+Japanese+Garden"
            }
          ]
        },
        {
          label: "Afternoon",
          items: [
            {
              time: "1:45 PM",
              leaveTime: "1:20 PM",
              name: "Tasty Corner PDX lunch",
              type: "food",
              neighborhood: "Downtown / PSU edge",
              duration: "60 min",
              cost: 15,
              bestTime: "Late lunch after the garden while you are back near downtown.",
              knownFor: "Dan dan noodles, hand-shaved noodles, and other downtown Portland budget-friendly Chinese dishes.",
              sentiment: "Best Portland cheap-meal anchor in this revision.",
              reservation: "Walk-in.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate assumes one noodle or chicken dish with no sales tax and a 15% sit-down tip buffer.",
              tipGuidance: "15% is acceptable here if you are seated and service is normal.",
              hours: "Menu PDFs were still active in May 2026; recheck hours before the trip.",
              website: "https://www.tastycornerpdx.com/",
              route: "https://www.google.com/maps/dir/Portland+Japanese+Garden/Tasty+Corner+Portland"
            },
            {
              time: "3:15 PM",
              leaveTime: "3:00 PM",
              name: "Powell's City of Books + Hello From Portland",
              type: "shopping",
              neighborhood: "Pearl / NW 10th",
              duration: "2 hr",
              cost: 10,
              bestTime: "Afternoon indoor block.",
              knownFor: "Books plus a cleaner dedicated souvenir stop with Portland-specific tees, magnets, and gift-shop basics.",
              sentiment: "Touristy but useful and weatherproof.",
              reservation: "None.",
              payment: "Cards accepted.",
              taxTipIncluded: "Souvenir allowance includes tax; no tip.",
              hours: "Powell's daily 10 AM-9 PM; Hello From Portland hours should be rechecked closer to the trip.",
              website: "https://hellofromoregon.com/",
              route: "https://www.google.com/maps/dir/Tasty+Corner+Portland/Powell's+City+of+Books/Hello+From+Portland"
            }
          ]
        },
        {
          label: "Evening",
          items: [
            {
              time: "6:15 PM",
              leaveTime: "5:20 PM",
              name: "Grassa Downtown quick dinner",
              type: "food",
              neighborhood: "Downtown",
              duration: "60 min",
              cost: 18,
              bestTime: "Easy downtown dinner after books and souvenir shopping.",
              knownFor: "Low-friction pasta close to the hotel when you do not want to spend your AYCE sushi budget tonight.",
              sentiment: "A practical placeholder dinner after moving Portland sushi toward an AYCE-only detour later in the trip.",
              reservation: "Walk-in should be fine.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate includes a simple solo pasta order and a modest tip if table service is involved.",
              tipGuidance: "If you order at a counter, 0-10% is fine; if there is full table service, 15% works.",
              hours: "Recheck current branch hours.",
              website: "https://www.google.com/maps/search/Grassa+Portland",
              route: "https://www.google.com/maps/dir/Hello+From+Portland/Grassa+Portland"
            }
          ]
        }
      ]
    },
    {
      id: "day-6",
      date: "Fri, Nov 6",
      city: "Portland",
      title: "Eastside coffee, Thai fried chicken, patio happy hour",
      theme: "Food and coffee day",
      dayTotal: 73,
      weatherPlan: "All major stops have indoor seating or short walks from transit.",
      segments: [
        {
          label: "Morning",
          items: [
            {
              time: "8:30 AM",
              leaveTime: "8:00 AM",
              name: "Coava Coffee Roasters Flagship",
              type: "coffee",
              neighborhood: "Central Eastside",
              duration: "60 min",
              cost: 30,
              bestTime: "Morning for espresso and bean stock.",
              knownFor: "Portland specialty roaster, seasonal single origins, flagship cafe.",
              sentiment: "Worth the hype for coffee buyers.",
              beans: "Current Coava 300g single-origin bags such as Los Naranjos are running about $23. Plan on that bag price plus one drink.",
              reservation: "None.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate includes one $23 bag of beans, one drink, and a $1 coffee tip. Portland has no sales tax.",
              tipGuidance: "$1 for coffee; no tip needed on the retail bean bag.",
              hours: "Flagship open daily 7 AM-6 PM.",
              website: "https://coavacoffee.com/locations",
              route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/Coava+Coffee+Roasters+Flagship"
            },
            {
              time: "10:00 AM",
              leaveTime: "9:50 AM",
              name: "Central Eastside walk: Deadstock / Smith Teamaker / waterfront crossing",
              type: "sightseeing",
              neighborhood: "Central Eastside",
              duration: "90 min",
              cost: 4,
              bestTime: "Between coffee and lunch.",
              knownFor: "Low-cost local wandering, tea/coffee options, industrial Portland feel.",
              sentiment: "Underrated if you like neighborhoods more than monuments.",
              reservation: "None.",
              payment: "Cards accepted at shops.",
              taxTipIncluded: "Small drink/snack buffer includes tax; tip optional.",
              hours: "Shop hours vary; recheck day-of.",
              website: "https://www.google.com/maps/search/Smith+Teamaker+Portland",
              route: "https://www.google.com/maps/dir/Coava+Coffee+Roasters+Flagship/Deadstock+Coffee+Portland/Smith+Teamaker+Portland"
            }
          ]
        },
        {
          label: "Afternoon",
          items: [
            {
              time: "12:30 PM",
              leaveTime: "12:10 PM",
              name: "Hat Yai",
              type: "food",
              neighborhood: "NE Killingsworth or Belmont",
              duration: "75 min",
              cost: 30,
              bestTime: "Lunch to avoid dinner crowd.",
              knownFor: "Southern Thai fried chicken, curry and roti sets.",
              sentiment: "Worth the hype.",
              reservation: "Usually casual/walk-in; verify current policy.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate includes tax and optional counter-service tip.",
              tipGuidance: "Tip 10% if ordering at a counter with meaningful service; otherwise rounding up is fine.",
              hours: "Menu source active; third-party sources show lunch and dinner windows. Recheck branch hours.",
              website: "https://www.hatyaipdx.com/menus",
              route: "https://www.google.com/maps/dir/Smith+Teamaker+Portland/Hat+Yai+Killingsworth"
            },
            {
              time: "3:00 PM",
              leaveTime: "2:40 PM",
              name: "Belmont / Mississippi browse + Nate's Oatmeal Cookies",
              type: "shopping",
              neighborhood: "SE Belmont / North Portland",
              duration: "90 min",
              cost: 9,
              bestTime: "Post-lunch browsing or dessert detour.",
              knownFor: "Independent shops plus a dedicated cookie stop with Portland-specific dessert credibility.",
              sentiment: "A small, realistic snack-and-walk add rather than another full meal.",
              reservation: "None.",
              payment: "Cards widely accepted.",
              taxTipIncluded: "Estimate includes one cookie stop and a small browsing/snack buffer; no sales tax and no required tip.",
              tipGuidance: "No tip is required for a straightforward cookie purchase; rounding up is optional.",
              hours: "Varies by shop.",
              website: "https://www.doordash.com/store/nates-oatmeal-cookies-portland-29932513/",
              route: "https://www.google.com/maps/dir/Hat+Yai+Killingsworth/Nate's+Oatmeal+Cookies+Portland/North+Mississippi+Avenue+Portland"
            }
          ]
        },
        {
          label: "Evening",
          items: [
            {
              time: "6:30 PM",
              name: "Return to Hotel Vance",
              type: "hotel",
              anchorType: "hotel-return",
              hotelContext: "Portland base: Hotel Vance, Portland, a Tribute Portfolio Hotel",
              neighborhood: "Downtown / Cultural District",
              duration: "20-30 min",
              cost: 0,
              notes: "Keep this evening flexible by default; Rontoms remains a valid add-back if you intentionally want another cocktail night."
            }
          ]
        }
      ]
    },
    {
      id: "day-7",
      date: "Sat, Nov 7",
      city: "Portland",
      title: "Saturday Market, waterfront, Eem",
      theme: "Market and Thai BBQ",
      dayTotal: 66,
      weatherPlan: "Saturday Market is outdoor; switch to Powell's, Made Here, and cafes if rain is sustained.",
      segments: [
        {
          label: "Morning",
          items: [
            {
              time: "9:00 AM",
              leaveTime: "8:40 AM",
              name: "Stumptown Downtown",
              type: "coffee",
              neighborhood: "Downtown",
              duration: "35 min",
              cost: 7,
              bestTime: "Before Saturday Market.",
              knownFor: "Portland coffee pioneer, cold brew, reliable downtown cafe.",
              sentiment: "Iconic, a little mainstream, still useful.",
              beans: "No default bean purchase here; Portland bean budget is already assigned to Coava.",
              reservation: "None.",
              payment: "Cards accepted.",
              taxTipIncluded: "Drink estimate includes tax plus $1 coffee tip.",
              tipGuidance: "$1 is enough for coffee.",
              hours: "Downtown 128 SW 3rd: daily 7 AM-5 PM.",
              website: "https://www.stumptowncoffee.com/pages/portland-downtown-cafe",
              route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/Stumptown+Coffee+Roasters+Downtown+Portland"
            },
            {
              time: "10:00 AM",
              leaveTime: "9:45 AM",
              name: "Portland Saturday Market + Waterfront Park",
              type: "shopping",
              neighborhood: "Old Town / Waterfront",
              duration: "2.5 hr",
              cost: 15,
              bestTime: "Open to early afternoon.",
              knownFor: "Local crafts, casual food, riverside walk.",
              sentiment: "Touristy but good souvenir efficiency.",
              reservation: "None.",
              payment: "Many vendors accept cards; some small vendors may prefer cash/contactless.",
              taxTipIncluded: "Shopping/snack allowance includes tax; tips optional by vendor.",
              hours: "Saturdays 10 AM-5 PM, March through Dec. 24.",
              website: "https://www.travelportland.com/event/6839b028f06e831a6c74666e/",
              route: "https://www.google.com/maps/dir/Stumptown+Coffee+Roasters+128+SW+3rd/Portland+Saturday+Market/Tom+McCall+Waterfront+Park"
            }
          ]
        },
        {
          label: "Afternoon",
          items: [
            {
              time: "1:30 PM",
              leaveTime: "1:05 PM",
              name: "Eem",
              type: "food",
              neighborhood: "North Williams",
              duration: "90 min",
              cost: 44,
              bestTime: "Lunch before 4 PM or before 6 PM to reduce wait.",
              knownFor: "Thai BBQ, white curry with brisket burnt ends, vacation drinks.",
              sentiment: "Worth the hype but can be a wait.",
              reservation: "Reservations only for parties of 6+; smaller parties join waitlist in person.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate includes a fuller solo order, tax, and 18% tip if seated/bar service applies.",
              tipGuidance: "Tip 18% for table/bar service; for takeout, 10% is enough.",
              hours: "Lunch daily 11 AM-4 PM; dinner Sun-Thu 4-9 PM, Fri-Sat 4-10 PM.",
              website: "https://www.eempdx.com/",
              menu: "https://www.eempdx.com/menu",
              route: "https://www.google.com/maps/dir/Portland+Saturday+Market/Eem+Portland"
            }
          ]
        },
        {
          label: "Evening",
          items: [
            {
              time: "5:30 PM",
              leaveTime: "5:00 PM",
              name: "Tope or rooftop backup near downtown",
              type: "cocktails",
              neighborhood: "Downtown",
              duration: "60 min",
              cost: 0,
              bestTime: "Early evening, one drink or mocktail.",
              knownFor: "Hotel rooftop energy; use only if weather and budget cooperate.",
              sentiment: "Experience-forward, not the best value.",
              happyHour: "No reliable deal encoded; this is optional and capped.",
              recommended: "Optional only. Skip by default unless the live budget tracker remains comfortably under cap.",
              reservation: "Recommended on weekends.",
              payment: "Cards accepted.",
              taxTipIncluded: "Optional spend is not included in the default budget.",
              tipGuidance: "If you order a drink, tip 18%.",
              hours: "Recheck current hours.",
              website: "https://www.google.com/maps/search/Tope+Portland",
              route: "https://www.google.com/maps/dir/Eem+Portland/Tope+Portland/Hotel+Vance+Portland"
            }
          ]
        }
      ]
    },
    {
      id: "day-8",
      date: "Sun, Nov 8",
      city: "Portland",
      title: "Coffee bean finale, Alberta/Mississippi, easy dinner",
      theme: "Flexible final full day",
      dayTotal: 124,
      weatherPlan: "Use cafes, Powell's, and Made Here as indoor alternates if steady rain.",
      segments: [
        {
          label: "Morning",
          items: [
            {
              time: "9:00 AM",
              leaveTime: "8:30 AM",
              name: "Heart Coffee or Good Coffee",
              type: "coffee",
              neighborhood: "Eastside",
              duration: "60 min",
              cost: 8,
              bestTime: "Morning bean purchase.",
              knownFor: "Heart is a major Portland roaster with lighter Nordic-leaning roast style; Good Coffee is reliable for espresso.",
              sentiment: "Heart is best for beans; Good Coffee is best for convenience/vibe.",
              beans: "No default bean purchase here; if you intentionally add a final bag, Heart's current Phono pricing is $20 for 10.5 oz and Stumptown's Holler Mountain is $20.",
              reservation: "None.",
              payment: "Cards accepted.",
              taxTipIncluded: "Drink estimate includes tax plus $1 coffee tip.",
              tipGuidance: "$1 is enough for coffee.",
              hours: "Recheck exact branch hours before trip.",
              website: "https://www.heartroasters.com/",
              route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/Heart+Coffee+Portland"
            },
            {
              time: "10:30 AM",
              leaveTime: "10:10 AM",
              name: "Alberta Arts / Mississippi backup loop",
              type: "sightseeing",
              neighborhood: "NE Portland",
              duration: "2 hr",
              cost: 8,
              bestTime: "Late morning.",
              knownFor: "Murals, local shops, cafes, neighborhood feel.",
              sentiment: "Local-feeling and cheaper than another paid attraction.",
              reservation: "None.",
              payment: "Cards widely accepted.",
              taxTipIncluded: "Small snack/shopping buffer includes tax; tips optional.",
              hours: "Varies by shop.",
              website: "https://www.google.com/maps/search/Alberta+Arts+District+Portland",
              route: "https://www.google.com/maps/dir/Heart+Coffee+Portland/Alberta+Arts+District+Portland"
            }
          ]
        },
        {
          label: "Afternoon",
          items: [
            {
              time: "1:30 PM",
              leaveTime: "1:00 PM",
              name: "Screen Door, Gabbiano's, or Cubo de Cuba value lunch",
              type: "food",
              neighborhood: "Eastside / Downtown",
              duration: "75 min",
              cost: 28,
              bestTime: "Lunch instead of dinner to control spend.",
              knownFor: "Comfort food choices from the candidate list.",
              sentiment: "Choose by wait time; Screen Door is most touristy.",
              reservation: "Check waitlist/reservation policy day-of.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate includes tax and budget-conscious tip.",
              tipGuidance: "Tip 18% for sit-down service; 10% is fine for counter-service lunch.",
              hours: "Recheck current hours.",
              website: "https://www.google.com/maps/search/Screen+Door+Portland",
              route: "https://www.google.com/maps/dir/Alberta+Arts+District+Portland/Screen+Door+Portland"
            }
          ]
        },
        {
          label: "Evening",
          items: [
            {
              time: "5:30 PM",
              leaveTime: "5:10 PM",
              name: "Sumo Sushi & Grill AYCE Oregon City dinner detour",
              type: "food",
              neighborhood: "Oregon City",
              duration: "2.5-3 hr including detour time",
              cost: 42,
              bestTime: "Use this on the flexible final full day if your Portland sushi needs to be AYCE rather than a la carte.",
              knownFor: "The Portland-area Sumo outpost that matches your AYCE-only sushi preference better than downtown conveyor-belt or bowl options.",
              sentiment: "Route-inefficient, but it now fits your sushi preference much better than the earlier downtown non-AYCE stop.",
              reservation: "Current Sumo pages say no reservations; join the daily waitlist.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate assumes a premium dinner-tier AYCE total in the high-$30s plus a modest Portland-area service tip. Oregon has no sales tax.",
              tipGuidance: "If there is regular table service, 15% is acceptable here.",
              hours: "Official Oregon City page confirms the location; recheck current dinner hours and any gratuity rules before going.",
              website: "https://www.sumoayce.com/oregoncity",
              route: "https://www.google.com/maps/dir/Alberta+Arts+District+Portland/Sumo+Sushi+%26+Grill+AYCE+Oregon+City/Hotel+Vance+Portland"
            }
            ,
            {
              time: "7:30 PM",
              leaveTime: "7:00 PM",
              name: "Big Legrowlski open jam social night",
              type: "cocktails",
              neighborhood: "Pearl District",
              duration: "75-120 min",
              cost: 38,
              bestTime: "Sunday, Monday, or Tuesday 7 PM-midnight open jam; Sunday fits this itinerary.",
              knownFor: "Casual live music/open jam, local crowd, no-cover community vibe.",
              sentiment: "Good social value with a manageable return to Hotel Vance; 21+ only.",
              happyHour: "No default happy-hour deal; plan this as a deliberate two-drink social stop if you go.",
              recommended: "Order Dead Flowers and Nobody F*cks With the Jesus if you want floral/fruity drinks, plus Just Walked In or Donny's Drumsticks for the light food side.",
              reservation: "No reservation; check event calendar before going.",
              payment: "Cards accepted; support the venue with a drink/snack.",
              taxTipIncluded: "Estimate assumes Dead Flowers ($13), Nobody F*cks With the Jesus ($13), one $8 light food order, and an 18% bar tip. Portland has no sales tax.",
              tipGuidance: "Tip 18% at the bar here.",
              socialFit: "Strongest Portland live-music social pick with a simple return to Hotel Vance by streetcar, MAX, or short rideshare.",
              safetyNote: "Keep first meetups public, stay aware around Old Town/Pearl late at night, and use your own route home.",
              hours: "Open-jam info lists Sunday, Monday, Tuesday 7 PM-midnight; venue lists 21+.",
              website: "https://www.biglegrowlski.com/open-jam",
              route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/The+Big+Legrowlski+Portland"
            },
            {
              time: "9:15 PM",
              name: "Return to Hotel Vance",
              type: "hotel",
              anchorType: "hotel-return",
              hotelContext: "Portland base: Hotel Vance, Portland, a Tribute Portfolio Hotel",
              neighborhood: "Downtown / Cultural District",
              duration: "20-30 min",
              cost: 0,
              notes: "Default wind-down point after the final full Portland day."
            }
          ]
        }
      ]
    },
    {
      id: "day-9",
      date: "Mon, Nov 9",
      city: "Portland departure",
      title: "Departure buffer to PDX",
      theme: "No-risk travel day",
      dayTotal: 36,
      weatherPlan: "Leave extra time for rain-related traffic or MAX delays.",
      segments: [
        {
          label: "Morning",
          items: [
            {
              time: "10:40 AM",
              leaveTime: "10:20 AM",
              name: "Check out of Hotel Vance",
              type: "hotel",
              anchorType: "hotel-departure",
              hotelContext: "Portland base: Hotel Vance, Portland, a Tribute Portfolio Hotel",
              neighborhood: "Downtown / Cultural District",
              duration: "15-20 min",
              cost: 0,
              notes: "This lines up with the 1:47 PM PDX departure and still leaves space for rain, elevator delays, and a MAX backup."
            },
            {
              time: "11:00 AM",
              leaveTime: "10:55 AM",
              name: "Hotel Vance to PDX",
              type: "transit",
              neighborhood: "Downtown to airport",
              duration: "45-60 min",
              cost: 3,
              bestTime: "Leave around 11 AM to be inside PDX by about 11:15 AM.",
              knownFor: "MAX Red Line / transit-first airport transfer.",
              sentiment: "Best value.",
              reservation: "None.",
              payment: "Tap contactless card or phone.",
              hours: "Verify service alerts day-of.",
              website: "https://trimet.org/",
              route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/Portland+International+Airport"
            },
            {
              time: "11:30 AM",
              name: "Airport coffee/snack buffer",
              type: "food",
              neighborhood: "PDX",
              duration: "30 min",
              cost: 33,
              bestTime: "After security.",
              knownFor: "Use remaining budget for breakfast and last snack.",
              sentiment: "Practical.",
              reservation: "None.",
              payment: "Cards accepted.",
              hours: "Airport vendor hours vary.",
              website: "https://www.flypdx.com/"
            }
          ]
        }
      ]
    }
  ],
  guides: {
    reservations: [
      { name: "Portland Japanese Garden", status: "Book", note: "Timed tickets recommended up to 10 days ahead.", link: "https://japanesegarden.org/hours-admission/" },
      { name: "Poquitos Capitol Hill", status: "Optional", note: "Reserve only if you want certainty after arrival; otherwise use Ocho Hour as a flexible walk-in dinner.", link: "https://www.vivapoquitos.com/" },
      { name: "Rock Box", status: "Optional", note: "Reserve only if you want a guaranteed karaoke room after the Bainbridge day; otherwise keep it as a light nightlife backup.", link: "https://rockboxseattle.com/" },
      { name: "Seattle Kraken / hockey game", status: "TBD", note: "2026-27 schedule is not reliable yet. Add only if a home game fits Nov 1-4 without breaking budget.", link: "https://www.nhl.com/kraken/schedule" }
    ],
    happyHour: [
      { name: "Saint John's Bar and Eatery", city: "Seattle", deal: "Official happy-hour page lists weekday afternoon food and drink deals; exact November 2026 pricing should be rechecked.", drink: "Use this as the lower-cost arrival-night bar instead of Canon.", link: "https://www.saintjohnsseattle.com/happyhour-v1" },
      { name: "Poquitos Capitol Hill", city: "Seattle", deal: "Official Ocho Hour: $8 select tacos, nachos, margaritas, beer, wine, and more.", drink: "Best Capitol Hill dinner-and-drink value if timing lines up.", link: "https://www.vivapoquitos.com/" },
      { name: "Nue", city: "Seattle", deal: "Official happy-hour page lists discounted food/drink specials, but it is not defaulted because Biang Biang/Menya/Kajiken are more budget-direct.", drink: "Use if you want more adventurous food and can accept a higher dinner total.", link: "https://www.nueseattle.com/happy-hour" },
      { name: "Stoup Brewing Capitol Hill", city: "Seattle", deal: "Happy hour not verified from an official current price page; treat it as a beer/food-truck alternate, not default spend.", drink: "Good weather-friendly beer backup near Capitol Hill.", link: "https://www.stoupbrewing.com/capitol-hill/" },
      { name: "Rontoms", city: "Portland", deal: "Daily 3-6:30 PM; $1 off draughts, house wines, wells; $10 HH food.", drink: "Use full-price fruity cocktails plus the $10 Caesar if you want the stop to match the new two-cocktail plan.", link: "https://www.rontoms.net/menu-1" },
      { name: "Life of Pie", city: "Portland", deal: "Daily 11 AM-6 PM; $9 dine-in Margherita, $6 house beer/wine.", drink: "House wine/beer only if desired.", link: "https://lifeofpiepizza.com/" }
    ],
    coffee: [
      { name: "Victrola Coffee Roasters", city: "Seattle", buy: "New default Seattle bean stop because it is closer to the hotel and on the saved list.", roast: "Capitol Hill specialty coffee; keep one bag plus one drink inside the $60 two-city bean cap.", budget: "Use about $20 for beans plus drink/tip/tax buffer.", link: "https://www.victrolacoffee.com/" },
      { name: "Phê", city: "Seattle", buy: "Drink-only stop; do not use as the bean purchase unless you intentionally skip Victrola.", roast: "Vietnamese coffee / matcha-style cafe stop near Capitol Hill/First Hill.", budget: "$8 drink estimate with tax and $1 tip.", link: "https://www.google.com/maps/search/Ph%C3%AA+Seattle+Capitol+Hill" },
      { name: "Tailwind Cafe at Good Weather", city: "Seattle", buy: "Breakfast/cafe option, not a bean-buying default.", roast: "Best for hotel-adjacent breakfast or arrival reset.", budget: "$10 drink/snack buffer; happy hour coming soon, not priced.", link: "https://tailwindcafe.com/" },
      { name: "Coava", city: "Portland", buy: "Default Portland bag: one current 300g single-origin bag from the flagship.", roast: "Balanced specialty, strong pour-over choice.", budget: "$23 current bag price", link: "https://coavacoffee.com/locations" },
      { name: "Anchorhead or Olympia Coffee", city: "Seattle", buy: "Alternate Seattle bag only if you skip Victrola.", roast: "Anchorhead is modern/giftable; Olympia is clean and lighter.", budget: "$19-$20.50 current bag reference.", link: "https://anchorheadcoffee.com/pages/locations" },
      { name: "Stumptown or Heart", city: "Portland", buy: "Alternate Portland bag only if you skip Coava.", roast: "Stumptown is classic/giftable; Heart is lighter and filter-focused.", budget: "$20 for Holler Mountain or Heart Phono", link: "https://www.stumptowncoffee.com/pages/portland-downtown-cafe" }
    ],
    socialDating: [
      { name: "Tinder", city: "Both cities", fit: "Primary app for high-volume casual matching while traveling.", setup: "Use Passport Mode before arrival if you have a paid plan or standalone Passport access. Set Seattle first, then Portland after the Amtrak day.", safety: "State your dates clearly and match only with people who self-identify as interested in your profile. Do not infer orientation from venue or appearance.", link: "https://www.help.tinder.com/hc/en-us/articles/115004490423-Passport-Mode" },
      { name: "Hinge", city: "Both cities", fit: "Backup for more filtered, date-quality matches.", setup: "Manually set location to Capitol Hill/U District for Seattle, then Downtown/Pearl or inner eastside for Portland.", safety: "Use it for coffee or dinner dates where you can screen better before meeting.", link: "https://help.hinge.co/hc/en-us/articles/49661615922195-Location-Settings" },
      { name: "Bumble", city: "Both cities", fit: "Optional if you want more control over messaging.", setup: "Travel Mode is Premium/Premium+ and can be set up before arrival.", safety: "Good for public coffee/drink plans; keep first meetups short.", link: "https://support.bumble.com/hc/articles/28423960803741-Using-Bumble-while-traveling" },
      { name: "Cafe Allegro + University Book Store + Big Time Brewery", city: "Seattle", fit: "UW-adjacent public hangout loop, reachable from Capitol Hill by Link.", setup: "Use Cafe Allegro or University Book Store for daytime app meetups; Big Time works better for early evening beer/trivia/chess energy.", safety: "Campus-adjacent does not mean everyone is available or straight. Use apps/preferences for dating intent and keep interactions respectful.", link: "https://www.bigtimebrewery.com/" },
      { name: "Big Legrowlski", city: "Portland", fit: "Best Portland structured social venue still worth the trip from Hotel Vance for open jam/live music and local conversation.", setup: "Sunday open jam still fits the itinerary; if you go, treat it as a real two-drink stop and keep your own route back to Hotel Vance.", safety: "21+ only. Stay public, avoid leaving with someone you just met, and use streetcar/MAX or rideshare backup if late-night transit feels inconvenient.", link: "https://www.biglegrowlski.com/open-jam" },
      { name: "Powell's / West End coffee meetup", city: "Portland", fit: "Safest daytime first-date zone from Hotel Vance, with Powell's, downtown cafes, and easy PSU/Cultural District return options.", setup: "Meet at Powell's or a nearby West End cafe before dinner; keep it to 45-60 minutes first.", safety: "Good default for first app meetups because exits, transit, and hotel return are simple from the new base.", link: "https://www.travelportland.com/attractions/powells/" }
    ],
    rainyDay: [
      "Seattle: Pike Place Market, Seattle Art Museum, Amazon Spheres exterior/photo stop, coffee crawl near Capitol Hill.",
      "Seattle: Replace Bainbridge with UW libraries, Japanese Garden only if light rain, Madrona Arms early evening instead of the island block.",
      "Portland: Powell's, Made Here, Hotel Vance/West End coffee blocks, Japanese Garden in light rain, indoor food carts/beer garden.",
      "Portland: Skip Multnomah Falls if wind, heavy rain, or tour timing threatens the budget."
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
    { name: "The Pink Door", reason: "Still excluded because the revised plan intentionally favors AYCE sushi and cheaper Seattle meals over another destination dinner.", bestDay: "day-3", alternateType: "food", alternateFor: "Sushi% AYCE Seattle premium dinner", estimatedCost: 58, neighborhood: "Pike Place", duration: "90 min", bestTime: "Dinner if atmosphere matters more than the AYCE-first sushi preference.", notes: "Use this only if you intentionally undo the AYCE-first budget shift.", route: "https://www.google.com/maps/dir/Madrona+Arms+Seattle/The+Pink+Door+Seattle", website: "https://www.thepinkdoor.net/" },
    { name: "Carkeek Park", reason: "Too far north for this short Seattle stay unless replacing Bainbridge.", bestDay: "day-3", alternateType: "sightseeing", alternateFor: "Bainbridge Island ferry + Winslow", estimatedCost: 6, neighborhood: "North Seattle", duration: "2 hr", bestTime: "Daylight hours if ferry conditions make Bainbridge feel too ambitious.", notes: "Nature-heavy fallback with less transfer friction.", route: "https://www.google.com/maps/dir/The+Boylston+Hotel+Capitol+Hill+Seattle/Carkeek+Park+Seattle", website: "https://www.seattle.gov/parks/allparks/carkeek-park" },
    { name: "Great American Diner & Bar", reason: "Corrected as a West Seattle diner, but still excluded from the default route because it adds transit time and pulls you off the central walking plan.", bestDay: "day-2", alternateType: "food", alternateFor: "Seattle Waterfront + Olympic Sculpture Park", estimatedCost: 24, neighborhood: "West Seattle Junction", duration: "90 min", bestTime: "Brunch or lunch only if you intentionally pivot the day toward West Seattle.", notes: "Geography corrected from generic Seattle to West Seattle; keep it as an intentional detour, not a default stop.", route: "https://www.google.com/maps/dir/The+Boylston+Hotel+Capitol+Hill+Seattle/Great+American+Diner+and+Bar+Seattle", website: "https://www.greatamericandinerandbar.com/" },
    { name: "Madrona Arms", reason: "Useful two-cocktail Seattle backup, but it was moved off the default route to keep the overall trip under the $800 target after adding AYCE sushi and Bainbridge lunch/souvenir spending.", bestDay: "day-3", alternateType: "cocktails", alternateFor: "Sushi% AYCE Seattle premium dinner", estimatedCost: 44, neighborhood: "Madrona", duration: "60 min", bestTime: "Early evening after the Japanese Garden if you want an extra Seattle cocktail block.", notes: "Best if you intentionally choose more nightlife and accept the higher total.", route: "https://www.google.com/maps/dir/Seattle+Japanese+Garden/Madrona+Arms+Seattle", website: "https://www.madronaarms.com/" },
    { name: "Tacos Chukis - Capitol Hill", reason: "Still a strong cheap meal, but Poquitos, Biang Biang, and Menya/Kajiken were prioritized because they came from the new saved-list route.", bestDay: "day-1", alternateType: "food", alternateFor: "Poquitos Capitol Hill", estimatedCost: 15, neighborhood: "Capitol Hill", duration: "45 min", bestTime: "Any quick dinner when you want the lowest-cost Capitol Hill option.", notes: "Keep as the budget rescue if Poquitos or noodle spots are crowded.", route: "https://www.google.com/maps/dir/The+Boylston+Hotel+Capitol+Hill+Seattle/Tacos+Chukis+Capitol+Hill+Seattle", website: "https://www.seattlechukis.com/" },
    { name: "Nue", reason: "Published happy hour exists, but the default Seattle route now favors cheaper Capitol Hill noodles and lower-cost happy-hour meals.", bestDay: "day-2", alternateType: "food", alternateFor: "Biang Biang Noodles - Capitol Hill", estimatedCost: 32, neighborhood: "Capitol Hill", duration: "60-75 min", bestTime: "Happy hour if you want a more adventurous food stop.", notes: "Use only if you intentionally trade some contingency for a more distinctive dinner.", route: "https://www.google.com/maps/dir/The+Boylston+Hotel+Capitol+Hill+Seattle/Nue+Seattle", website: "https://www.nueseattle.com/happy-hour" },
    { name: "Stoup Brewing Capitol Hill", reason: "Good saved-list beer stop, but current official happy-hour price details were not verified and it would add another drink block.", bestDay: "day-2", alternateType: "cocktails", alternateFor: "Salt & Straw Capitol Hill", estimatedCost: 18, neighborhood: "Capitol Hill", duration: "45-60 min", bestTime: "Early evening if you want beer instead of dessert.", notes: "Food-truck availability can change; confirm the day-of truck before relying on this as dinner.", route: "https://www.google.com/maps/dir/Salt+and+Straw+Capitol+Hill+Seattle/Stoup+Brewing+Capitol+Hill", website: "https://www.stoupbrewing.com/capitol-hill/" },
    { name: "Dave's Hot Chicken Capitol Hill", reason: "Useful chain backup, but it overlaps with the saved-list cheap-meal lane already covered by Biang Biang, Menya/Kajiken, Dick's, and Tacos Chukis.", bestDay: "day-2", alternateType: "food", alternateFor: "Biang Biang Noodles - Capitol Hill", estimatedCost: 17, neighborhood: "Capitol Hill", duration: "35-45 min", bestTime: "Late dinner or spicy-food backup.", notes: "Counter-service tip can stay 0-10%.", route: "https://www.google.com/maps/dir/The+Boylston+Hotel+Capitol+Hill+Seattle/Dave's+Hot+Chicken+Capitol+Hill+Seattle", website: "https://www.daveshotchicken.com/" },
    { name: "Koko's Restaurant Seattle", reason: "Saved-list Capitol Hill option, but current happy-hour pricing was not verified strongly enough to replace Saint John's or Poquitos.", bestDay: "day-1", alternateType: "food", alternateFor: "Poquitos Capitol Hill", estimatedCost: 28, neighborhood: "Capitol Hill", duration: "60 min", bestTime: "Dinner if you want to swap away from Poquitos.", notes: "Confirm current menu and exact location before making it default.", route: "https://www.google.com/maps/search/Koko's+Restaurant+Seattle+Capitol+Hill", website: "https://www.google.com/maps/search/Koko's+Restaurant+Seattle+Capitol+Hill" },
    { name: "Dick's Drive-In Broadway", reason: "Great cheap late-night backup, but not a full default dinner because Poquitos and noodle stops create better sit-down structure.", bestDay: "day-1", alternateType: "food", alternateFor: "Poquitos Capitol Hill", estimatedCost: 10, neighborhood: "Capitol Hill", duration: "20-30 min", bestTime: "Late-night burger/fries backup near the hotel.", notes: "Confirmed interpretation of `dicks dive-in`.", route: "https://www.google.com/maps/dir/The+Boylston+Hotel+Capitol+Hill+Seattle/Dick's+Drive-In+Broadway+Seattle", website: "https://www.ddir.com/" },
    { name: "Espresso Vivace South Lake Union", reason: "Excellent coffee, but South Lake Union is a detour compared with Victrola, Tailwind, and Phê near the hotel.", bestDay: "day-4", alternateType: "coffee", alternateFor: "Phê Vietnamese coffee or Victrola backup", estimatedCost: 8, neighborhood: "South Lake Union", duration: "45 min plus transit", bestTime: "Only if you intentionally add a South Lake Union walk.", notes: "Keep as a coffee-quality detour, not the hotel-adjacent default.", route: "https://www.google.com/maps/dir/The+Boylston+Hotel+Capitol+Hill+Seattle/Espresso+Vivace+South+Lake+Union+Seattle", website: "https://espressovivace.com/" },
    { name: "Gearhouse coffee shop", reason: "Could not be placed as cleanly in the Capitol Hill hotel route as Tailwind, Victrola, or Phê, so it stays a backup until exact saved-list pin is confirmed.", bestDay: "day-4", alternateType: "coffee", alternateFor: "Phê Vietnamese coffee or Victrola backup", estimatedCost: 8, neighborhood: "Seattle", duration: "45 min", bestTime: "Only if the saved Google Maps pin confirms it is nearby.", notes: "Do not invent a default route around an uncertain pin.", route: "https://www.google.com/maps/search/Gearhouse+coffee+shop+Seattle", website: "https://www.google.com/maps/search/Gearhouse+coffee+shop+Seattle" },
    { name: "Harbour Public House", reason: "Strong Bainbridge pub alternate, but the selected island day is breakfast-first and not a lunch pub crawl.", bestDay: "day-3", alternateType: "food", alternateFor: "Madison Diner breakfast", estimatedCost: 30, neighborhood: "Bainbridge Island", duration: "75 min", bestTime: "Lunch if you choose the pub-day version instead of Madison Diner.", notes: "Happy-hour pricing should be rechecked before replacing the breakfast route.", route: "https://www.google.com/maps/dir/Waterfront+Park+and+City+Dock+Bainbridge+Island/Harbour+Public+House+Bainbridge+Island", website: "https://harbourpub.com/HTMLSite/Menu.html" },
    { name: "Bruciato", reason: "Good Bainbridge pizza/bar alternate, but it fits a lunch-pub island day better than the chosen breakfast-first plan.", bestDay: "day-3", alternateType: "food", alternateFor: "Madison Diner breakfast", estimatedCost: 28, neighborhood: "Bainbridge Island", duration: "75 min", bestTime: "Lunch if you want pizza instead of diner breakfast.", notes: "Happy-hour pricing not treated as verified default spend.", route: "https://www.google.com/maps/dir/Waterfront+Park+and+City+Dock+Bainbridge+Island/Bruciato+Bainbridge+Island", website: "https://www.pizzeriabruciato.com/" },
    { name: "Cups Espresso & Cafe", reason: "Bainbridge coffee backup, but Pegasus and Commuter Comforts create a cleaner ferry-terminal loop.", bestDay: "day-3", alternateType: "coffee", alternateFor: "Pegasus Coffee House or Commuter Comforts", estimatedCost: 7, neighborhood: "Bainbridge Island", duration: "30 min", bestTime: "If Pegasus is crowded or closed.", notes: "Use as a same-role coffee substitute.", route: "https://www.google.com/maps/search/Cups+Espresso+Cafe+Bainbridge+Island", website: "https://www.google.com/maps/search/Cups+Espresso+Cafe+Bainbridge+Island" },
    { name: "Seasmith", reason: "Bainbridge saved-list coffee/food candidate, but it was not needed once Madison Diner plus Pegasus/Commuter Comforts covered breakfast and coffee.", bestDay: "day-3", alternateType: "coffee", alternateFor: "Pegasus Coffee House or Commuter Comforts", estimatedCost: 9, neighborhood: "Bainbridge Island", duration: "35 min", bestTime: "Use only if the ferry timing pushes you toward a different Winslow cafe.", notes: "Same-route substitute, not an add-on.", route: "https://www.google.com/maps/search/Seasmith+Bainbridge+Island", website: "https://www.google.com/maps/search/Seasmith+Bainbridge+Island" },
    { name: "Seattle Streetcar / 3303 S Bond Ave item", reason: "Address appears Portland South Waterfront/OHSU related, not Seattle. Excluded as cross-city data error.", bestDay: "day-5", alternateType: "transit", alternateFor: "Washington Park + Portland Japanese Garden", estimatedCost: 3, neighborhood: "South Waterfront / OHSU", duration: "45 min", bestTime: "Use only if you pivot a Portland day toward South Waterfront instead of Washington Park.", notes: "Kept as labeled backup because the original source mixed city data.", route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/3303+S+Bond+Ave+Portland", website: "https://www.google.com/maps/search/3303+S+Bond+Ave+Portland" },
    { name: "Daily Cafe / Summit Cafe at OHSU", reason: "Portland/OHSU items mistakenly listed under Seattle; not used in Seattle routing.", bestDay: "day-5", alternateType: "coffee", alternateFor: "Hotel Vance Starbucks or Stumptown Downtown", estimatedCost: 8, neighborhood: "South Waterfront / OHSU", duration: "45 min", bestTime: "Morning if you want a quieter coffee detour instead of central downtown.", notes: "Useful only if already heading toward OHSU or the tram area.", route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/OHSU+Portland", website: "https://www.google.com/maps/search/OHSU+Cafe+Portland" },
    { name: "Depoe Bay", reason: "Full-day coastal trip, car/tour cost, and weather risk are still too high for the $800 target.", bestDay: "day-8", alternateType: "sightseeing", alternateFor: "Alberta Arts / Mississippi backup loop", estimatedCost: 120, neighborhood: "Oregon Coast", duration: "Full day", bestTime: "Only if you are willing to replace most of the day and treat it as a major splurge.", notes: "Beautiful coast option, but it breaks the transit-first short-trip logic.", route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/Depoe+Bay+Oregon", website: "https://www.oregoncoast.org/cities/depoe-bay/" },
    { name: "Multnomah Falls via Viator", reason: "Good optional tour, but paid tour consumes too much budget. Add only if replacing Portland Japanese Garden or one of the default downtown food blocks.", bestDay: "day-5", alternateType: "sightseeing", alternateFor: "Washington Park + Portland Japanese Garden", estimatedCost: 89, neighborhood: "Columbia River Gorge", duration: "4-5 hr", bestTime: "Morning if you decide to replace one major Portland city anchor with a gorge trip.", notes: "Best as a full substitution, not an add-on.", route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/Multnomah+Falls", website: "https://www.google.com/maps/search/Multnomah+Falls+tour+Portland" },
    { name: "Sumo Sushi & Grill AYCE Seattle", reason: "Verified Seattle location and official AYCE tiers exist, but dinner pricing rises fast and the U District detour makes it weaker than Tacos Chukis or Sushi% for the base plan.", bestDay: "day-4", alternateType: "food", alternateFor: "Glo's Capitol Hill breakfast", estimatedCost: 26, neighborhood: "University District", duration: "90 min", bestTime: "Lunch is the real value play; dinner pushes much closer to splurge territory.", notes: "Official Seattle page listed Silver lunch at $19.95 and Gold lunch at $22.95 before tax and tip; dinner tiers run materially higher.", route: "https://www.google.com/maps/dir/The+Boylston+Hotel+Capitol+Hill+Seattle/Sumo+Sushi+and+Grill+AYCE+Seattle", website: "https://www.sumoayce.com/location" },
    { name: "Hana Sushi and Izakaya - Pioneer District", reason: "No AYCE structure was surfaced on the current Hana menus, so it no longer fits the strict sushi preference as cleanly as Sumo or Sushi%.", bestDay: "day-5", alternateType: "food", alternateFor: "Sumo Sushi & Grill AYCE Oregon City dinner detour", estimatedCost: 16, neighborhood: "Downtown / Pioneer", duration: "60-75 min", bestTime: "Use only if you want quick downtown sushi and are willing to drop the AYCE-only rule for convenience.", notes: "Still a valid convenience stop, but not the strongest fit for your updated sushi preference.", route: "https://www.google.com/maps/dir/Hello+From+Portland/Hana+Sushi+and+Izakaya+Pioneer+Portland", website: "https://www.hanasushiandizakaya.com/menus" },
    { name: "Rontoms", reason: "Strong patio cocktail option, but it was moved off the default trip because the two-cocktail-plus-food version pushes the budget too far once Portland AYCE sushi stays active.", bestDay: "day-6", alternateType: "cocktails", alternateFor: "Belmont / Mississippi browse + Nate's Oatmeal Cookies", estimatedCost: 42, neighborhood: "East Burnside", duration: "75 min", bestTime: "3-6:30 PM happy hour if you want an extra Portland bar stop.", notes: "Good optional add-back if you intentionally trade some contingency or souvenir room for another cocktail night.", route: "https://www.google.com/maps/dir/North+Mississippi+Avenue+Portland/Rontoms+Portland", website: "https://www.rontoms.net/" },
    { name: "The Grotto", reason: "Interesting but east of the core route; use only as rainy/reflective backup if skipping Washington Park.", bestDay: "day-5", alternateType: "sightseeing", alternateFor: "Washington Park + Portland Japanese Garden", estimatedCost: 10, neighborhood: "Northeast Portland", duration: "90 min", bestTime: "Light-rain morning or reflective backup day.", notes: "Quieter spiritual-site fallback if you want a lower-key Portland day.", route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/The+Grotto+Portland", website: "https://thegrotto.org/" },
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
    { label: "Rock Box Seattle", url: "https://rockboxseattle.com/" },
    { label: "Biang Biang Noodles", url: "https://www.biangbiangnoodles.com/" },
    { label: "Menya Musashi Capitol Hill menu", url: "https://menyamusashi.us/ramen-menu-seattle/ramen-menu-capitol-hill-seattle/" },
    { label: "Kajiken Seattle", url: "https://www.kajikenusa.com/" },
    { label: "Salt & Straw Capitol Hill", url: "https://saltandstraw.com/pages/capitol-hill" },
    { label: "Voodoo Doughnut locations", url: "https://www.voodoodoughnut.com/locations/" },
    { label: "Insomnia Cookies Seattle", url: "https://insomniacookies.com/locations/store/1251" },
    { label: "Dick's Drive-In Broadway", url: "https://www.ddir.com/" },
    { label: "Dave's Hot Chicken", url: "https://www.daveshotchicken.com/" },
    { label: "Walgreens Capitol Hill Broadway", url: "https://www.walgreens.com/locator/walgreens-1531+broadway-seattle-wa-98122/id=13087" },
    { label: "Victrola Coffee Roasters", url: "https://www.victrolacoffee.com/" },
    { label: "Glo's menu listing", url: "https://wnam-cdn.menuweb.menu/storage/media/companies_menu_pdf/114042183/glos-seattle-menu.pdf" },
    { label: "Tacos Chukis menu PDF", url: "https://www.seattlechukis.com/uploads/b/61f09090-6739-11ea-95d5-51ac43631b29/89e7ced0-1ebc-11ef-b4d1-2957bb32b4cb.pdf" },
    { label: "Sushi% AYCE menu", url: "https://sushiayceus.com/menu" },
    { label: "Sushi% AYCE pricing reference", url: "https://www.restaurantji.com/wa/seattle/sushi-ayce-/" },
    { label: "Sumo Seattle AYCE pricing", url: "https://www.sumoayce.com/location" },
    { label: "Great American Diner & Bar menu PDF", url: "https://www.greatamericandinerandbar.com/files/great-american-diner-and-bar-menu-2025-october-for-review-09-30-25-pdf.pdf" },
    { label: "Anchorhead locations", url: "https://anchorheadcoffee.com/pages/locations" },
    { label: "Anchorhead 10 oz bag pricing", url: "https://anchorheadcoffee.com/products/narwhal-blend" },
    { label: "Olympia Coffee Columbia City", url: "https://www.olympiacoffee.com/pages/columbia-city" },
    { label: "Olympia Sweetheart pricing", url: "https://www.olympiacoffee.com/products/sweetheart" },
    { label: "Portland Japanese Garden hours/admission", url: "https://japanesegarden.org/hours-admission/" },
    { label: "Powell's / Travel Portland", url: "https://www.travelportland.com/attractions/powells/" },
    { label: "Portland Saturday Market / Travel Portland", url: "https://www.travelportland.com/event/6839b028f06e831a6c74666e/" },
    { label: "Hello From Oregon / Hello From Portland", url: "https://hellofromoregon.com/" },
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
    { label: "Harbour Public House menu", url: "https://harbourpub.com/HTMLSite/Menu.html" },
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
