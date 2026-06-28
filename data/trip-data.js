window.TRIP_DATA = {
  meta: {
    title: "Seattle and Portland Interactive Travel Itinerary",
    dates: "November 1-9, 2026",
    travelerBase: {
      seattle: "The Boylston Hotel Capitol Hill",
      portland: "Courtyard by Marriott Portland City Center"
    },
    verifiedOn: "June 27, 2026",
    budgetCap: 1200,
    absoluteCeiling: 1300,
    assumptions: [
      "Airfare and hotels are excluded.",
      "Booked flight costs are displayed separately for visibility and timing, but they do not count toward the $1200 activity budget or the $1300 ceiling.",
      "Amtrak Cascades 517 is included in the activity budget because the user listed it under intercity transportation.",
      "Prices include estimated local tax where applicable plus budget-conscious tips when table service or cocktails are involved.",
      "Default tip model: 15% for standard sit-down meals, 18% for cocktail bars, $1 for coffee, and 0-10% or simple round-up for counter-service food.",
      "Dashboard USD amounts now also show PHP equivalents using the May 9, 2026 USD/PHP rate plus a 1.85% foreign transaction fee buffer.",
      "Coffee beans are capped at two bags total: one in Seattle and one in Portland, with a maximum bean budget of $60.",
      "Portland home base is Courtyard by Marriott Portland City Center, 550 SW Oak Street, Portland, Oregon 97204, United States.",
      "November 2026 hours are not fully published for many businesses, so the dashboard flags current verified status and recommends rechecking before booking.",
      "The plan is curated best-fit; not every candidate location is included.",
      "May 18 review uses the shared Google Maps saved list as the candidate source, with menu/pricing checked against official or current public pages where possible.",
      "A 20% realism buffer is now treated as the planning default for flexible paid categories such as food, coffee, cocktails, and small shopping so the live budget reflects real-world drift better than the earlier tighter draft.",
      "Souvenir pricing should stay explicit whenever possible: Starbucks city mugs, one coffee with each mug errand, coffee-bean buys, and small magnet-style gifts are now modeled directly instead of being hidden inside generic buffers."
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
    cap: 1200,
    absoluteCeiling: 1300,
    projectedTotal: 750,
    categories: [
      { name: "Transportation", amount: 64, note: "Transit, ferry, Amtrak, and airport or station transfer segments across the active Nov 1-9 route." },
      { name: "Food", amount: 360, note: "Core meal spend across Seattle and Portland, including breakfast, lunch, dinner, and airport-safe food buffers." },
      { name: "Cocktails and social", amount: 55, note: "Focused on the lower-count social stops that remain in the active route, not a separate nightly bar crawl budget." },
      { name: "Entrance fees", amount: 56, note: "Covers the active paid attractions still present in the route, including market or rooftop-style stops." },
      { name: "Coffee beans", amount: 60, note: "Two bags total: one Seattle bag and one Portland bag, with the rest of the coffee spend folded into meal pacing." },
      { name: "Souvenirs", amount: 70, note: "City mugs, magnets, and smoked-salmon style gifts kept visible instead of hidden inside contingency." },
      { name: "Contingency", amount: 85, note: "Light realism buffer for timing drift, small substitutions, and weather-related adjustments." }
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
        statusLabel: "Booked, but current Asiana route publication now shows a schedule-risk mismatch for the Sunday SEA arrival leg; verify the reservation directly with Asiana.",
        alertCopy: "Near-real-time polling is set up around official airline and airport status pages every 15 minutes, but the bigger issue right now is that Asiana's current route-schedule notice lists Seattle-Incheon OZ271/272 on Mon, Tue, Wed, Fri, Sat rather than Sunday. Confirm the November 1 itinerary with Asiana before assuming the booked timing still stands.",
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
            mileage: "3637 miles; mileage upgrade unavailable",
            scheduleRisk: "Asiana's current route schedule notice shows Seattle-Incheon OZ271/272 operating Mon, Tue, Wed, Fri, Sat, which does not match this booked Sunday, November 1, 2026 leg. Reconfirm the operating date directly with Asiana."
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
        airportLeaveBy: "Leave Courtyard Portland by about 10:15 AM and aim to be inside PDX by about 10:40-10:45 AM for the 1:47 PM departure.",
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
      title: "Arrival and Capitol Hill reset day",
      theme: "Recovery + nearby exploration",
      dayTotal: 47,
      weatherPlan: "Keep all first-day stops close to Boylston in Capitol Hill with short downtown transit if energy is good.",
      segments: [
        { label: "Afternoon", items: [
          { time: "1:55 PM", leaveTime: "2:20 PM", name: "Arrive SEA and transfer to Link", type: "transit", neighborhood: "SEA Airport", duration: "25 min", cost: 3, notes: "Bag claim, station walk, ORCA tap setup.", route: "https://www.google.com/maps/dir/SEA+Airport/Capitol+Hill+Station+Seattle" },
          { time: "2:20 PM", name: "Link light rail to Capitol Hill", type: "transit", neighborhood: "SEA -> Capitol Hill", duration: "40 min", cost: 0, notes: "Ride to Capitol Hill Station; fare already counted above.", route: "https://www.google.com/maps/dir/SEA+Airport/Capitol+Hill+Station+Seattle" },
          { time: "3:05 PM", name: "Walk to Boylston and luggage reset", type: "walk", neighborhood: "Capitol Hill", duration: "30 min", cost: 0, notes: "Walk from station, quick unpack, hydrate, short rest." },
          { time: "3:35 PM", name: "Rest and shower reset", type: "rest", neighborhood: "Boylston base", duration: "45 min", cost: 0, notes: "Hard jet-lag buffer before evening." },
          { time: "4:30 PM", name: "Neighborhood orientation walk", type: "walk", neighborhood: "Broadway / Pike-Pine", duration: "60 min", cost: 0, notes: "Find nearest pharmacy, convenience stops, and transit points." },
          { time: "5:35 PM", name: "Poquitos Capitol Hill dinner", type: "meal", neighborhood: "Capitol Hill", duration: "75 min", cost: 22, notes: "Keep first meal easy and close to hotel." }
        ]},
        { label: "Evening", items: [
          { time: "6:55 PM", name: "Walk through Pike-Pine social strip", type: "walk", neighborhood: "Capitol Hill", duration: "40 min", cost: 0, notes: "Low-pressure atmosphere check for future nights." },
          { time: "7:40 PM", name: "Saint John's one-drink stop", type: "activity", neighborhood: "Capitol Hill", duration: "60 min", cost: 16, notes: "Keep to one drink for sleep recovery." },
          { time: "8:45 PM", name: "Return walk + snack pickup", type: "walk", neighborhood: "Capitol Hill", duration: "35 min", cost: 6, notes: "Pick up bottled water and quick breakfast items." },
          { time: "9:25 PM", name: "Sleep buffer", type: "rest", neighborhood: "Boylston base", duration: "10.5 hrs", cost: 0, notes: "Early sleep to stabilize next day energy." }
        ]}
      ]
    },
    {
      id: "day-2",
      date: "Mon, Nov 2",
      city: "Seattle",
      title: "Pike Place, waterfront, and downtown core",
      theme: "Classic Seattle core",
      dayTotal: 144,
      weatherPlan: "Use Link/bus as backup if rain increases; otherwise keep waterfront portions on foot.",
      segments: [
        { label: "Morning", items: [
          { time: "7:30 AM", name: "Wake, stretch, prep", type: "rest", neighborhood: "Boylston base", duration: "45 min", cost: 0 },
          { time: "8:15 AM", name: "Diner breakfast", type: "meal", neighborhood: "Capitol Hill", duration: "60 min", cost: 18 },
          { time: "9:20 AM", name: "Transit to Pike Place", type: "transit", neighborhood: "Capitol Hill -> Downtown", duration: "25 min", cost: 3 },
          { time: "9:50 AM", name: "Pike Place Market main loop + Totem Smokehouse", type: "activity", neighborhood: "Downtown", duration: "130 min", cost: 14, notes: "Grazing + photo stops. Totem Smokehouse (1906 Pike Place) for smoked salmon souvenirs: $34–44 vacuum-sealed gift boxes. Budget from Souvenirs category ($95 total)." }
        ]},
        { label: "Afternoon", items: [
          { time: "12:05 PM", name: "Waterfront walk to Olympic Sculpture Park", type: "walk", neighborhood: "Waterfront", duration: "60 min", cost: 0 },
          { time: "1:10 PM", name: "Luke's Lobster lunch", type: "meal", neighborhood: "Downtown (Pike Place)", duration: "70 min", cost: 30, notes: "110 Pike St, near Pike Place. Lobster/crab rolls + bisque." },
          { time: "2:25 PM", name: "Seattle Great Wheel / pier browse", type: "activity", neighborhood: "Waterfront", duration: "75 min", cost: 22 },
          { time: "3:50 PM", name: "Ghost Alley Espresso + rest", type: "meal", neighborhood: "Downtown (Pike Place)", duration: "50 min", cost: 8, notes: "1499 Post Alley, inside Pike Place Market. Specialty lattes." },
          { time: "4:45 PM", name: "Transit to Columbia Center", type: "transit", neighborhood: "Downtown -> Columbia Center", duration: "20 min", cost: 0 },
          { time: "5:30 PM", name: "Columbia Center Sky View sunset", type: "activity", neighborhood: "Downtown", duration: "75 min", cost: 17, notes: "New 2026 rotating observation deck with superior sunset views over Puget Sound." }
        ]},
        { label: "Evening", items: [
          { time: "6:45 PM", name: "Transit from Columbia Center to Belltown", type: "transit", neighborhood: "Downtown -> Belltown", duration: "15 min", cost: 0 },
          { time: "7:05 PM", name: "FOB Sushi Belltown dinner", type: "meal", neighborhood: "Belltown", duration: "75 min", cost: 32, notes: "Weight-based AYCE sushi, fresh + chill vibe, closest to Capitol Hill hotel." },
          { time: "8:25 PM", name: "Walk back to Capitol Hill", type: "walk", neighborhood: "Belltown -> Capitol Hill", duration: "25 min", cost: 0 },
          { time: "8:55 PM", name: "Wind-down", type: "rest", neighborhood: "Boylston base", duration: "9 hrs", cost: 0 }
        ]}
      ]
    },
    {
      id: "day-3",
      date: "Tue, Nov 3",
      city: "Seattle",
      title: "Bainbridge day trip",
      theme: "Scenic ferry + island pacing",
      dayTotal: 108,
      weatherPlan: "If ferry disruptions occur, replace with Ballard + Fremont neighborhood loop.",
      segments: [
        { label: "Morning", items: [
          { time: "7:20 AM", name: "Wake + prep", type: "rest", neighborhood: "Boylston base", duration: "40 min", cost: 0 },
          { time: "8:05 AM", name: "Breakfast near Capitol Hill", type: "meal", neighborhood: "Capitol Hill", duration: "55 min", cost: 17 },
          { time: "9:05 AM", name: "Transit/walk to Seattle Ferry Terminal", type: "transit", neighborhood: "Downtown waterfront", duration: "45 min", cost: 3 },
          { time: "10:00 AM", name: "Ferry to Bainbridge", type: "transit", neighborhood: "Puget Sound", duration: "40 min", cost: 12 }
        ]},
        { label: "Afternoon", items: [
          { time: "10:50 AM", name: "Winslow + waterfront exploration", type: "walk", neighborhood: "Bainbridge Island", duration: "95 min", cost: 0 },
          { time: "12:30 PM", name: "Island lunch", type: "meal", neighborhood: "Winslow", duration: "75 min", cost: 26 },
          { time: "1:55 PM", name: "Coffee / rest stop", type: "rest", neighborhood: "Winslow", duration: "40 min", cost: 8 },
          { time: "2:45 PM", name: "Return ferry to Seattle", type: "transit", neighborhood: "Puget Sound", duration: "40 min", cost: 0 }
        ]},
        { label: "Evening", items: [
          { time: "3:35 PM", name: "Transit back to Capitol Hill", type: "transit", neighborhood: "Downtown -> Capitol Hill", duration: "35 min", cost: 0 },
          { time: "4:20 PM", name: "Hotel recharge", type: "rest", neighborhood: "Boylston base", duration: "55 min", cost: 0 },
          { time: "5:15 PM", name: "Menya Musashi ramen dinner", type: "meal", neighborhood: "Capitol Hill", duration: "60 min", cost: 24, notes: "Capitol Hill specialty ramen, chill vibe." },
          { time: "6:30 PM", name: "Saint John's happy hour", type: "activity", neighborhood: "Capitol Hill", duration: "90 min", cost: 18, notes: "Mon-Fri 2-6 PM HH: Rainier $2, sangria/cava $3, house wine $4, cocktails $5-6. Arrive by 6:30 PM window." },
          { time: "8:05 PM", name: "Return and rest", type: "rest", neighborhood: "Boylston base", duration: "9.5 hrs", cost: 0 }
        ]}
      ]
    },
    {
      id: "day-4",
      date: "Wed, Nov 4",
      city: "Seattle",
      title: "Extra Seattle day: Ballard + Fremont + sunset view",
      theme: "New neighborhoods + deeper city coverage",
      dayTotal: 93,
      weatherPlan: "If weather is rough, pivot outdoor segments to museums/indoor market time.",
      segments: [
        { label: "Morning", items: [
          { time: "7:30 AM", name: "Wake + prep", type: "rest", neighborhood: "Boylston base", duration: "40 min", cost: 0 },
          { time: "8:20 AM", name: "Analog Coffee + light breakfast", type: "meal", neighborhood: "Capitol Hill", duration: "60 min", cost: 18 },
          { time: "9:30 AM", name: "Transit to Fremont", type: "transit", neighborhood: "Capitol Hill -> Fremont", duration: "45 min", cost: 3 },
          { time: "10:20 AM", name: "Fremont walking loop", type: "walk", neighborhood: "Fremont", duration: "110 min", cost: 0 }
        ]},
        { label: "Afternoon", items: [
          { time: "12:20 PM", name: "Uneeda Burger Fremont lunch", type: "meal", neighborhood: "Fremont", duration: "75 min", cost: 25 },
          { time: "1:45 PM", name: "Transit to Ballard", type: "transit", neighborhood: "Fremont -> Ballard", duration: "25 min", cost: 0 },
          { time: "2:15 PM", name: "Ballard Ave + locks area explore", type: "walk", neighborhood: "Ballard", duration: "110 min", cost: 0 },
          { time: "4:15 PM", name: "Ballard Coffee Works reset", type: "rest", neighborhood: "Ballard", duration: "45 min", cost: 9 }
        ]},
        { label: "Evening", items: [
          { time: "5:10 PM", name: "Transit back to Capitol Hill", type: "transit", neighborhood: "Ballard -> Capitol Hill", duration: "50 min", cost: 0 },
          { time: "6:25 PM", name: "Sea'd In Capitol Hill dinner", type: "meal", neighborhood: "Capitol Hill", duration: "75 min", cost: 38, notes: "Wood-fired fish, shareable plates, new 2026 opening. Fresh, chill vibe." },
          { time: "8:10 PM", name: "Return and pack for train day", type: "rest", neighborhood: "Boylston base", duration: "8.5 hrs", cost: 0 }
        ]}
      ]
    },
    {
      id: "day-5",
      date: "Thu, Nov 5",
      city: "Seattle to Portland",
      title: "Checkout + Amtrak transfer + light Portland evening",
      theme: "Transition day",
      dayTotal: 81,
      weatherPlan: "Keep Seattle morning close to hotel and station timing protected with buffers.",
      segments: [
        { label: "Morning", items: [
          { time: "7:00 AM", name: "Wake, final pack, checkout prep", type: "rest", neighborhood: "Boylston base", duration: "70 min", cost: 0 },
          { time: "8:15 AM", name: "Analog Coffee + QFC train snacks", type: "meal", neighborhood: "Capitol Hill", duration: "60 min", cost: 18 },
          { time: "9:25 AM", name: "Last Capitol Hill walk + coffee stop", type: "walk", neighborhood: "Capitol Hill", duration: "55 min", cost: 10 },
          { time: "10:30 AM", name: "Checkout and travel to King Street Station", type: "transit", neighborhood: "Capitol Hill -> King Street", duration: "55 min", cost: 4 },
          { time: "11:30 AM", name: "Station buffer + platform prep", type: "rest", neighborhood: "King Street Station", duration: "35 min", cost: 0 }
        ]},
        { label: "Afternoon", items: [
          { time: "12:10 PM", name: "Amtrak Cascades 517 SEA -> PDX", type: "transit", neighborhood: "Intercity rail", duration: "3h 25m", cost: 27, notes: "Reservation 29CB3A-17MAY26, one coach seat." },
          { time: "3:35 PM", name: "Arrive Portland Union Station and transfer to Courtyard", type: "transit", neighborhood: "Union Station -> City Center", duration: "35 min", cost: 3 },
          { time: "4:20 PM", name: "Check in and reset", type: "rest", neighborhood: "Courtyard Portland", duration: "80 min", cost: 0 }
        ]},
        { label: "Evening", items: [
          { time: "5:50 PM", name: "Easy downtown orientation walk", type: "walk", neighborhood: "Downtown Portland", duration: "30 min", cost: 0 },
          { time: "6:20 PM", name: "Luc Lac Vietnamese Kitchen dinner", type: "meal", neighborhood: "Downtown Portland", duration: "75 min", cost: 19, notes: "Daily HH 4–7 PM: $4 beers, $6 cocktails, $2–3 food bites. Arrive 6:20 PM to land inside HH window." },
          { time: "8:25 PM", name: "Luc Lac -> Courtyard wind-down", type: "rest", neighborhood: "Courtyard Portland", duration: "10 hrs", cost: 0 }
        ]}
      ]
    },
    {
      id: "day-6",
      date: "Fri, Nov 6",
      city: "Portland",
      title: "Arrival day + Luc Lac happy hour",
      theme: "Travel recovery + early settling",
      dayTotal: 18,
      weatherPlan: "Minimal activity; focus on hotel check-in and early rest.",
      segments: [
        { label: "Afternoon", items: [
          { time: "3:35 PM", name: "Arrive Portland Union Station", type: "transit", neighborhood: "Union Station -> City Center", duration: "35 min", cost: 3 },
          { time: "4:20 PM", name: "Courtyard check-in and reset", type: "rest", neighborhood: "Courtyard Portland", duration: "80 min", cost: 0 }
        ]},
        { label: "Evening", items: [
          { time: "5:50 PM", name: "Easy downtown orientation walk", type: "walk", neighborhood: "Downtown Portland", duration: "30 min", cost: 0 },
          { time: "6:20 PM", name: "Luc Lac Vietnamese Kitchen happy hour", type: "meal", neighborhood: "Downtown Portland", duration: "75 min", cost: 15, notes: "Daily HH 4-7 PM: $6 cocktail, $3 pulled chicken salad, $2 spring rolls. Confirm Amazon package delivery with Courtyard front desk." },
          { time: "8:25 PM", name: "Courtyard wind-down", type: "rest", neighborhood: "Courtyard Portland", duration: "10 hrs", cost: 0 }
        ]}
      ]
    },
    {
      id: "day-7",
      date: "Sat, Nov 7",
      city: "Portland",
      title: "Powell's + Tope rooftop sunset + Momiji AYCE",
      theme: "Books, rooftop sunset, fresh sushi",
      dayTotal: 123,
      weatherPlan: "Powell's is indoor-friendly; Tope rooftop weather-dependent (backup indoor cocktail bar nearby).",
      segments: [
        { label: "Morning", items: [
          { time: "7:30 AM", name: "Wake + prep", type: "rest", neighborhood: "Courtyard Portland", duration: "40 min", cost: 0 },
          { time: "8:20 AM", name: "Stumptown Downtown breakfast + Portland coffee bean", type: "meal", neighborhood: "Downtown Portland", duration: "50 min", cost: 22, notes: "128 SW 3rd Ave. Specialty coffee, light food, and the single Portland bean purchase for the trip." },
          { time: "10:00 AM", name: "Powell's City of Books", type: "activity", neighborhood: "Pearl District", duration: "120 min", cost: 14, notes: "Downtown Portland's legendary bookstore; 2+ hours of browsing." }
        ]},
        { label: "Afternoon", items: [
          { time: "12:15 PM", name: "Transit + lunch near Powell's", type: "meal", neighborhood: "Pearl District", duration: "60 min", cost: 22 },
          { time: "1:30 PM", name: "MadeHere PDX + Pearl browsing", type: "rest", neighborhood: "Pearl District", duration: "90 min", cost: 0 },
          { time: "3:15 PM", name: "Courtyard reset", type: "rest", neighborhood: "Courtyard Portland", duration: "75 min", cost: 0 }
        ]},
        { label: "Evening", items: [
          { time: "4:45 PM", name: "Transit to Tope", type: "transit", neighborhood: "Downtown -> Pearl", duration: "10 min", cost: 0 },
          { time: "5:30 PM", name: "Tope rooftop bar + sunset", type: "activity", neighborhood: "Pearl District", duration: "90 min", cost: 28, notes: "Fruity cocktail, ceviche/taco, sunset river views over Willamette. 5:30 PM sunset perfect timing." },
          { time: "7:15 PM", name: "Momiji AYCE sushi dinner", type: "meal", neighborhood: "Downtown Portland", duration: "90 min", cost: 37, notes: "Fresh made-to-order AYCE sushi, closest to Courtyard Portland, premium quality." },
          { time: "8:55 PM", name: "Wind-down", type: "rest", neighborhood: "Courtyard Portland", duration: "9 hrs", cost: 0 }
        ]}
      ]
    },
    {
      id: "day-8",
      date: "Sun, Nov 8",
      city: "Portland",
      title: "Saturday Market + Pretty Ugly Burger + Novel Book Bar",
      theme: "Market, prime beef, books + cocktails",
      dayTotal: 108,
      weatherPlan: "Market is outdoor but covered; Pretty Ugly and Novel both indoor-friendly.",
      segments: [
        { label: "Morning", items: [
          { time: "7:45 AM", name: "Wake + prep", type: "rest", neighborhood: "Courtyard Portland", duration: "40 min", cost: 0 },
          { time: "8:35 AM", name: "Stumptown Downtown breakfast", type: "meal", neighborhood: "Downtown Portland", duration: "50 min", cost: 22, notes: "128 SW 3rd Ave. Specialty coffee and a lighter repeat breakfast without adding another bean purchase." },
          { time: "9:35 AM", name: "Walk to Portland Saturday Market", type: "walk", neighborhood: "Downtown -> Waterfront", duration: "30 min", cost: 0 }
        ]},
        { label: "Afternoon", items: [
          { time: "10:05 AM", name: "Portland Saturday Market browse", type: "activity", neighborhood: "Waterfront", duration: "120 min", cost: 24, notes: "10 AM-5 PM artisan goods, crafts, local vendors. Waterfront location." },
          { time: "12:10 PM", name: "Market lunch + snacks", type: "meal", neighborhood: "Waterfront", duration: "60 min", cost: 18 },
          { time: "1:20 PM", name: "Transit + Pearl/downtown reset", type: "rest", neighborhood: "Downtown/Pearl", duration: "120 min", cost: 0 }
        ]},
        { label: "Evening", items: [
          { time: "3:25 PM", name: "Courtyard reset", type: "rest", neighborhood: "Courtyard Portland", duration: "115 min", cost: 0 },
          { time: "6:15 PM", name: "Pretty Ugly Burger dinner", type: "meal", neighborhood: "Downtown Portland", duration: "75 min", cost: 26, notes: "NEW 2026 opening. Dry-aged prime beef burgers, upscale casual. Fresh quality." },
          { time: "8:00 PM", name: "Novel Book Bar cocktail + browse", type: "activity", neighborhood: "NW Everett / Pearl edge", duration: "90 min", cost: 18, notes: "Books, cocktails, young crowd vibe. Fruity cocktail option ($15). Cozy atmosphere." },
          { time: "9:30 PM", name: "Wind-down", type: "rest", neighborhood: "Courtyard Portland", duration: "9.5 hrs", cost: 0 }
        ]}
      ]
    },
    {
      id: "day-9",
      date: "Mon, Nov 9",
      city: "Portland to Corpus Christi",
      title: "Final coffee and departure",
      theme: "Departure-safe pacing",
      dayTotal: 28,
      weatherPlan: "Protect airport timeline; final coffee grab only.",
      segments: [
        { label: "Morning", items: [
          { time: "7:00 AM", name: "Wake + final packing", type: "rest", neighborhood: "Courtyard Portland", duration: "60 min", cost: 0 },
          { time: "8:10 AM", name: "Courtyard breakfast + checkout prep", type: "meal", neighborhood: "Downtown Portland", duration: "60 min", cost: 14 },
          { time: "9:20 AM", name: "Courtyard final walk", type: "walk", neighborhood: "Downtown Portland", duration: "30 min", cost: 0 },
          { time: "8:45 AM", name: "Stumptown final coffee", type: "meal", neighborhood: "Downtown Portland", duration: "30 min", cost: 7, notes: "Final specialty coffee grab before departure." },
          { time: "10:15 AM", name: "Checkout + transfer to PDX", type: "transit", neighborhood: "Courtyard -> PDX", duration: "60 min", cost: 3 },
          { time: "11:20 AM", name: "Airport check-in and security buffer", type: "rest", neighborhood: "PDX", duration: "95 min", cost: 0 },
          { time: "1:00 PM", name: "PDX airport food + gate buffer", type: "meal", neighborhood: "PDX", duration: "40 min", cost: 4, notes: "Airport snack/water, minimal cost." }
        ]},
        { label: "Departure", items: [
          { time: "1:47 PM", name: "Flight PDX -> DFW", type: "transit", neighborhood: "Air travel", duration: "3h 47m", cost: 0, notes: "Airfare tracked separately from activity budget." },
          { time: "7:34 PM", name: "DFW layover buffer", type: "rest", neighborhood: "DFW", duration: "96 min", cost: 0 },
          { time: "9:10 PM", name: "Flight DFW -> CRP", type: "transit", neighborhood: "Air travel", duration: "1h 35m", cost: 0 },
          { time: "10:45 PM", name: "Arrival and end-of-trip recovery", type: "rest", neighborhood: "Corpus Christi", duration: "N/A", cost: 0 }
        ]}
      ]
    }
  ],
  guides: {
    reservations: [
      { name: "Meta Glasses demo at Best Buy Northgate", status: "CRITICAL - BOOK ASAP", note: "Fully booked through November. Demo required before purchase. Best Buy Northgate 7-8 miles from hotel (10-12 min drive). Must schedule immediately.", link: "https://www.meta.com/demo/scheduler/best-buy/" },
      { name: "Courtyard Portland - Amazon package delivery confirmation", status: "CALL BEFORE ORDERING", note: "Call +1-503-233-3343 to confirm Amazon guest package delivery policy before ordering Meta glasses for hotel arrival.", link: "https://www.marriott.com/en/hotels/pdxcy-courtyard-portland-city-center/overview/" },
      { name: "Portland Japanese Garden", status: "Optional", note: "Timed tickets recommended up to 10 days ahead. Skipped in favor of Powell's and indoor activities.", link: "https://japanesegarden.org/hours-admission/" },
      { name: "Poquitos Capitol Hill", status: "Recommended", note: "Reserve only if you want certainty after arrival; otherwise use Ocho Hour as a flexible walk-in dinner.", link: "https://www.vivapoquitos.com/" }
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
      { name: "Pegasus Coffee House", city: "Bainbridge Island", day: "Day 3", buy: "Coffee stop only if you skip the Seattle bean on Day 2", roast: "Island specialty coffee, fresh roast.", budget: "Treat as an optional swap, not an extra bean buy.", link: "https://pegasuscoffeehouse.com/" },
      { name: "Stumptown Downtown", city: "Portland", day: "Day 7", buy: "Portland bag + breakfast", roast: "Classic Portland specialty, 128 SW 3rd Ave.", budget: "$20-24 bean bag included in Day 7 breakfast cost.", link: "https://www.stumptowncoffee.com/pages/portland-downtown-cafe" },
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
    socialDating: [
      { name: "Tinder", city: "Both cities", fit: "Primary app for high-volume casual matching while traveling.", setup: "Use Passport Mode before arrival if you have a paid plan or standalone Passport access. Set Seattle first, then Portland after the Amtrak day.", safety: "State your dates clearly and match only with people who self-identify as interested in your profile. Do not infer orientation from venue or appearance.", link: "https://www.help.tinder.com/hc/en-us/articles/115004490423-Passport-Mode" },
      { name: "Hinge", city: "Both cities", fit: "Backup for more filtered, date-quality matches.", setup: "Manually set location to Capitol Hill/U District for Seattle, then Downtown/Pearl or inner eastside for Portland.", safety: "Use it for coffee or dinner dates where you can screen better before meeting.", link: "https://help.hinge.co/hc/en-us/articles/49661615922195-Location-Settings" },
      { name: "Bumble", city: "Both cities", fit: "Use if you want more control over messaging.", setup: "Travel Mode is Premium/Premium+ and can be set up before arrival.", safety: "Good for public coffee/drink plans; keep first meetups short.", link: "https://support.bumble.com/hc/articles/28423960803741-Using-Bumble-while-traveling" },
      { name: "Cafe Allegro + University Book Store + Big Time Brewery", city: "Seattle", fit: "UW-adjacent public hangout loop, reachable from Capitol Hill by Link.", setup: "Use Cafe Allegro or University Book Store for daytime app meetups; Big Time works better for early evening beer/trivia/chess energy.", safety: "Campus-adjacent does not mean everyone is available or straight. Use apps/preferences for dating intent and keep interactions respectful.", link: "https://www.bigtimebrewery.com/" },
      { name: "Novel Book Bar", city: "Portland", fit: "Best close-in Portland book-bar add when you want atmosphere, coffee, a younger-feeling crowd, and one intentional evening drink without straying far from Courtyard Portland.", setup: "Treat it as a strong Portland evening stop near the Pearl/Old Town edge. Coffee or one drink plus light food fits better than a full two-cocktail plan.", safety: "Stay public, keep first meetups simple, and do not assume the cozy vibe means the pricing is automatically cheap.", link: "https://www.instagram.com/novelpdx/" },
      { name: "Big Legrowlski", city: "Portland", fit: "Best Portland structured social venue still worth the trip from Courtyard Portland for open jam/live music and local conversation.", setup: "Sunday open jam still fits the itinerary; if you go, treat it as a real two-drink stop and keep your own route back to Courtyard Portland.", safety: "21+ only. Stay public, avoid leaving with someone you just met, and use streetcar/MAX or rideshare backup if late-night transit feels inconvenient.", link: "https://www.biglegrowlski.com/open-jam" },
      { name: "Powell's / West End coffee meetup", city: "Portland", fit: "Safest daytime first-date zone from Courtyard Portland, with Powell's, downtown cafes, and easy PSU/Cultural District return options.", setup: "Meet at Powell's or a nearby West End cafe before dinner; keep it to 45-60 minutes first.", safety: "Good default for first app meetups because exits, transit, and hotel return are simple from Courtyard Portland.", link: "https://www.travelportland.com/attractions/powells/" }
    ],
    rainyDay: [
      "Seattle: Pike Place Market, Seattle Art Museum, Amazon Spheres exterior/photo stop, coffee crawl near Capitol Hill.",
      "Seattle: Replace Bainbridge with UW libraries, Japanese Garden only if light rain, Madrona Arms early evening instead of the island block.",
      "Portland: Powell's, Made Here, Courtyard/Pearl District coffee blocks, Japanese Garden in light rain, indoor food carts/beer garden.",
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
    { name: "Seattle Streetcar / 3303 S Bond Ave item", reason: "Address appears Portland South Waterfront/OHSU related, not Seattle. Excluded as cross-city data error.", bestDay: "day-5", alternateType: "transit", alternateFor: "Washington Park + Portland Japanese Garden", estimatedCost: 3, neighborhood: "South Waterfront / OHSU", duration: "45 min", bestTime: "Use only if you pivot a Portland day toward South Waterfront instead of Washington Park.", notes: "Kept as labeled backup because the original source mixed city data.", route: "https://www.google.com/maps/dir/Courtyard+by+Marriott+Portland+City+Center/3303+S+Bond+Ave+Portland", website: "https://www.google.com/maps/search/3303+S+Bond+Ave+Portland" },
    { name: "Daily Cafe / Summit Cafe at OHSU", reason: "Portland/OHSU items mistakenly listed under Seattle; not used in Seattle routing.", bestDay: "day-5", alternateType: "coffee", alternateFor: "Fuller's Coffee Shop or Stumptown Downtown", estimatedCost: 8, neighborhood: "South Waterfront / OHSU", duration: "45 min", bestTime: "Morning if you want a quieter coffee detour instead of central downtown.", notes: "Useful only if already heading toward OHSU or the tram area.", route: "https://www.google.com/maps/dir/Courtyard+by+Marriott+Portland+City+Center/OHSU+Portland", website: "https://www.google.com/maps/search/OHSU+Cafe+Portland" },
    { name: "Depoe Bay", reason: "Full-day coastal trip, car/tour cost, and weather risk are still too high for the $800 target.", bestDay: "day-8", alternateType: "sightseeing", alternateFor: "Alberta Arts / Mississippi backup loop", estimatedCost: 120, neighborhood: "Oregon Coast", duration: "Full day", bestTime: "Only if you are willing to replace most of the day and treat it as a major splurge.", notes: "Beautiful coast option, but it breaks the transit-first short-trip logic.", route: "https://www.google.com/maps/dir/Courtyard+by+Marriott+Portland+City+Center/Depoe+Bay+Oregon", website: "https://www.oregoncoast.org/cities/depoe-bay/" },
    { name: "Multnomah Falls via Viator", reason: "Good alternate tour, but paid tour consumes too much budget. Add only if replacing Portland Japanese Garden or one of the default downtown food blocks.", bestDay: "day-5", alternateType: "sightseeing", alternateFor: "Washington Park + Portland Japanese Garden", estimatedCost: 89, neighborhood: "Columbia River Gorge", duration: "4-5 hr", bestTime: "Morning if you decide to replace one major Portland city anchor with a gorge trip.", notes: "Best as a full substitution, not an add-on.", route: "https://www.google.com/maps/dir/Courtyard+by+Marriott+Portland+City+Center/Multnomah+Falls", website: "https://www.google.com/maps/search/Multnomah+Falls+tour+Portland" },
    { name: "Sumo Sushi & Grill AYCE Seattle", reason: "Verified Seattle location and official AYCE tiers exist, but dinner pricing rises fast and the U District detour makes it weaker than Tacos Chukis or Sushi% for the base plan.", bestDay: "day-4", alternateType: "food", alternateFor: "Glo's Capitol Hill breakfast", estimatedCost: 26, neighborhood: "University District", duration: "90 min", bestTime: "Lunch is the real value play; dinner pushes much closer to splurge territory.", notes: "Official Seattle page listed Silver lunch at $19.95 and Gold lunch at $22.95 before tax and tip; dinner tiers run materially higher.", route: "https://www.google.com/maps/dir/The+Boylston+Hotel+Capitol+Hill+Seattle/Sumo+Sushi+and+Grill+AYCE+Seattle", website: "https://www.sumoayce.com/location" },
    { name: "Sumo Sushi & Grill AYCE Oregon City", reason: "AYCE still fits the older sushi rule, but the Oregon City detour is too far from central Portland once route realism matters more than unlimited sushi.", bestDay: "day-8", alternateType: "food", alternateFor: "Hana Sushi and Izakaya Pearl dinner", estimatedCost: 42, neighborhood: "Oregon City", duration: "2.5-3 hr including detour time", bestTime: "Use only if you intentionally want to trade a smoother Pearl District evening for a longer AYCE-focused dinner detour.", notes: "No longer the default because it eats too much time and distance on the final full Portland day.", route: "https://www.google.com/maps/dir/Courtyard+by+Marriott+Portland+City+Center/Sumo+Sushi+%26+Grill+AYCE+Oregon+City/Courtyard+by+Marriott+Portland+City+Center", website: "https://www.sumoayce.com/oregoncity" },
    { name: "Novel Book Bar", reason: "Strong Portland add near Courtyard Portland with real books, coffee, cocktails, and lighter food, but the user-shared menu points to $15 cocktails so it works better as a one-drink or coffee-plus-browse stop than as a strict two-cocktail budget play.", bestDay: "day-7", alternateType: "cocktails", alternateFor: "Tope or rooftop backup near downtown", estimatedCost: 24, neighborhood: "NW Everett / Pearl edge", duration: "60-90 min", bestTime: "Early evening if you want a close-in Portland social stop with more personality than a generic bar.", notes: "Sample menu the user shared: espresso/americano $4.25, latte $5.25, vanilla latte $5.75, mocha or Spanish latte $6.50, cocktails $15, wine $14-$15, beer $6, burger $7, fries $4, pretzel $5, salad $10, salmon $15.", route: "https://www.google.com/maps/dir/Courtyard+by+Marriott+Portland+City+Center/Novel+Book+Bar+Portland", website: "https://www.instagram.com/novelpdx/" },
    { name: "Rontoms", reason: "Strong patio cocktail option, but it was moved off the default trip because the two-cocktail-plus-food version pushes the budget too far once Portland AYCE sushi stays active.", bestDay: "day-6", alternateType: "cocktails", alternateFor: "Belmont / Mississippi browse + Nate's Oatmeal Cookies", estimatedCost: 42, neighborhood: "East Burnside", duration: "75 min", bestTime: "3-6:30 PM happy hour if you want an extra Portland bar stop.", notes: "Good add-back if you intentionally trade some contingency or souvenir room for another cocktail night.", route: "https://www.google.com/maps/dir/North+Mississippi+Avenue+Portland/Rontoms+Portland", website: "https://www.rontoms.net/" },
    { name: "The Grotto", reason: "Interesting but east of the core route; use only as rainy/reflective backup if skipping Washington Park.", bestDay: "day-5", alternateType: "sightseeing", alternateFor: "Washington Park + Portland Japanese Garden", estimatedCost: 10, neighborhood: "Northeast Portland", duration: "90 min", bestTime: "Light-rain morning or reflective backup day.", notes: "Quieter spiritual-site fallback if you want a lower-key Portland day.", route: "https://www.google.com/maps/dir/Courtyard+by+Marriott+Portland+City+Center/The+Grotto+Portland", website: "https://thegrotto.org/" },
    { name: "Duplicate chains/branches", reason: "Only closest or strategically useful branch is recommended to avoid itinerary clutter.", bestDay: "day-8", alternateType: "coffee", alternateFor: "Heart Coffee or Good Coffee", estimatedCost: 7, neighborhood: "Both cities", duration: "30-45 min", bestTime: "Any time a listed default branch has lines or awkward routing.", notes: "Treat this as a policy reminder: nearest good branch can substitute without changing the spirit of the day.", route: "https://www.google.com/maps/search/coffee+near+Courtyard+by+Marriott+Portland+City+Center", website: "https://www.google.com/maps/search/coffee+shops+Portland" }
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
    { label: "Rock Box Seattle", url: "https://rockboxseattle.com/details.pdf" },
    { label: "Biang Biang Noodles", url: "https://www.biangbiangnoodles.com/" },
    { label: "Menya Musashi Capitol Hill menu", url: "https://menyamusashi.us/ramen-menu-seattle/ramen-menu-capitol-hill-seattle/" },
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
    { label: "Portland Japanese Garden hours/admission", url: "https://japanesegarden.org/hours-admission/" },
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
