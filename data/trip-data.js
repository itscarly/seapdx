window.TRIP_DATA = {
  meta: {
    title: "Seattle and Portland Interactive Travel Itinerary",
    dates: "November 1-9, 2026",
    travelerBase: {
      seattle: "The Boylston Hotel Capitol Hill",
      portland: "Hotel Rose - A Staypineapple Hotel"
    },
    verifiedOn: "May 5, 2026",
    budgetCap: 800,
    absoluteCeiling: 900,
    assumptions: [
      "Airfare and hotels are excluded.",
      "Amtrak Cascades 517 is included in the activity budget because the user listed it under intercity transportation.",
      "Prices include estimated local tax and budget-conscious tips where table service or cocktails are involved.",
      "Default tip model: 18% for sit-down restaurants and cocktail bars, $1 for coffee, and optional 10% for meaningful counter-service food.",
      "Coffee beans are capped at two bags total: one in Seattle and one in Portland, with a maximum bean budget of $60.",
      "November 2026 hours are not fully published for many businesses, so the dashboard flags current verified status and recommends rechecking before booking.",
      "The plan is curated best-fit; not every candidate location is included."
    ]
  },
  budget: {
    cap: 800,
    absoluteCeiling: 900,
    projectedTotal: 770,
    categories: [
      { name: "Transportation", amount: 142, note: "ORCA, ferry, Amtrak, TriMet/Hop; no planned rideshare." },
      { name: "Food", amount: 368, note: "Market grazing, casual dinners, Seattle and Portland food upgrades; tax and budget-conscious tips included." },
      { name: "Cocktails and social", amount: 74, note: "Happy-hour-first drinks plus one Portland social/music night; 18% bar tip included where applicable." },
      { name: "Entrance fees", amount: 67, note: "Sky View Observatory, Seattle Japanese Garden, Portland Japanese Garden." },
      { name: "Coffee beans", amount: 60, note: "Maximum two bags total: one Seattle bag and one Portland bag." },
      { name: "Souvenirs", amount: 35, note: "Small Pike Place/Powell's/Made Here allowance." },
      { name: "Contingency", amount: 24, note: "Weather snacks, fare changes, app meetup drink buffer, or price variance." }
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
  itinerary: [
    {
      id: "day-1",
      date: "Sun, Nov 1",
      city: "Seattle",
      title: "Arrival, Capitol Hill reset, low-pressure cocktail",
      theme: "Jet lag buffer",
      dayTotal: 56,
      weatherPlan: "Keep this day indoors and close to the hotel if rain is heavy after arrival.",
      segments: [
        {
          label: "Afternoon",
          items: [
            {
              time: "1:55 PM",
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
              time: "4:30 PM",
              name: "Analog Coffee",
              type: "coffee",
              neighborhood: "Capitol Hill",
              duration: "35 min",
              cost: 7,
              bestTime: "Late afternoon reset",
              knownFor: "Local Capitol Hill cafe energy; B-Side Foods has been highlighted as a neighborhood favorite.",
              sentiment: "Local favorite",
              beans: "Not the main bean-buying stop; use for espresso or drip.",
              payment: "Credit cards and mobile pay reported accepted.",
              taxTipIncluded: "Drink estimate includes tax plus $1 coffee tip.",
              tipGuidance: "$1 is enough for a simple coffee order.",
              hours: "Reported daily 7 AM-6 PM; recheck before trip.",
              website: "https://www.instagram.com/analogcoffee/",
              route: "https://www.google.com/maps/dir/The+Boylston+Hotel+Capitol+Hill+Seattle/Analog+Coffee+Seattle"
            }
          ]
        },
        {
          label: "Evening",
          items: [
            {
              time: "5:30 PM",
              name: "Canon",
              type: "cocktails",
              neighborhood: "Capitol Hill",
              duration: "60-75 min",
              cost: 24,
              bestTime: "Sunday 5-6 PM happy hour",
              knownFor: "Large spirits collection, serious cocktails, intimate room.",
              sentiment: "Worth the hype but small and strict on group size.",
              happyHour: "Wed, Thu, Sun 5-6 PM and 11 PM-midnight: half off food, wine by the glass, and draft beer. Cocktails are generally full price.",
              recommended: "Order one signature cocktail if budget allows; use happy hour for food/wine value.",
              reservation: "Limited reservations; parties of four or fewer only.",
              payment: "Cards accepted; confirm any minimums.",
              taxTipIncluded: "Estimate includes Seattle tax and 18% bar tip.",
              tipGuidance: "Tip 18% at the bar; round up only for unusually good service.",
              hours: "Wed-Sun 5 PM to at least midnight.",
              website: "https://www.canonseattle.com/",
              menu: "https://www.canonseattle.com/",
              route: "https://www.google.com/maps/dir/Analog+Coffee+Seattle/Canon+Seattle"
            },
            {
              time: "7:00 PM",
              name: "Due' Cucina Capitol Hill",
              type: "food",
              neighborhood: "Capitol Hill",
              duration: "45 min",
              cost: 22,
              bestTime: "Early dinner after Canon",
              knownFor: "Fast-casual fresh pasta; good budget substitute for Spinasse.",
              sentiment: "Good value, not destination dining.",
              reservation: "No reservation needed.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate includes tax; tip is optional for counter service.",
              tipGuidance: "Counter-service pasta: 0-10% is fine as a budget traveler.",
              hours: "Recheck current branch hours before trip.",
              website: "https://www.duecucina.com/",
              route: "https://www.google.com/maps/dir/Canon+Seattle/Due'+Cucina+Capitol+Hill"
            }
          ]
        }
      ]
    },
    {
      id: "day-2",
      date: "Mon, Nov 2",
      city: "Seattle",
      title: "Pike Place, waterfront, Columbia Center",
      theme: "Market walking loop",
      dayTotal: 90,
      weatherPlan: "Most market stops are covered or close together; move the waterfront walk after Sky View if rain breaks later.",
      segments: [
        {
          label: "Morning",
          items: [
            {
              time: "8:30 AM",
              name: "Anchorhead Coffee - Pike Place",
              type: "coffee",
              neighborhood: "Pike Place / Waterfront",
              duration: "35 min",
              cost: 26,
              bestTime: "Before market crowds",
              knownFor: "Specialty coffee and beans; closest useful branch to Pike Place.",
              sentiment: "Local favorite",
              beans: "Buy one lighter-roast or seasonal single-origin bag here. Budget $20.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate includes one Seattle bean bag, one drink, tax, and $1 coffee tip.",
              tipGuidance: "$1 for coffee; no tip needed on the retail bean bag.",
              hours: "Pike Place: Mon-Fri 8 AM-3 PM, Sat-Sun 8 AM-4 PM.",
              website: "https://anchorheadcoffee.com/pages/locations",
              route: "https://www.google.com/maps/dir/The+Boylston+Hotel+Capitol+Hill+Seattle/Anchorhead+Coffee+Pike+Place"
            },
            {
              time: "9:20 AM",
              name: "Pike Place Market grazing route",
              type: "food",
              neighborhood: "Pike Place",
              duration: "2.5 hr",
              cost: 19,
              bestTime: "Before noon; mornings are less crowded.",
              knownFor: "Piroshky Piroshky, Daily Dozen, Beecher's, MarketSpice, Mee Sum Pastry, Rachel's Ginger Beer.",
              sentiment: "Touristy but still essential.",
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
              time: "5:15 PM",
              name: "Cocktail at Sky View Bar",
              type: "cocktails",
              neighborhood: "Downtown",
              duration: "45 min",
              cost: 0,
              bestTime: "Blue hour if visibility is good.",
              knownFor: "View-first cocktail experience.",
              sentiment: "Touristy, but efficient because you are already upstairs.",
              happyHour: "No reliable happy hour found; keep to one drink.",
              recommended: "Choose one local beer, wine, or lower-priced house drink only if visibility is good.",
              reservation: "Observatory ticket controls access.",
              taxTipIncluded: "Optional spend is not included in the default budget.",
              tipGuidance: "If you order a drink, tip 18%.",
              hours: "Bar/cafe ends service 30 minutes before observatory closing.",
              website: "https://skyviewobservatory.com/"
            },
            {
              time: "6:45 PM",
              name: "Saigon Deli or Post Alley Pizza",
              type: "food",
              neighborhood: "International District / Pike Place",
              duration: "45 min",
              cost: 15,
              bestTime: "Casual dinner after paid view.",
              knownFor: "Budget dinner fallback after a spendy attraction.",
              sentiment: "Practical value stop.",
              reservation: "None.",
              payment: "Cards commonly accepted; confirm at counter.",
              taxTipIncluded: "Estimate includes tax; tip optional for counter service.",
              tipGuidance: "Counter-service dinner: 0-10% is acceptable.",
              hours: "Recheck day-of.",
              website: "https://www.google.com/maps/search/Saigon+Deli+Seattle",
              route: "https://www.google.com/maps/dir/Sky+View+Observatory+Seattle/Saigon+Deli+Seattle"
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
      dayTotal: 141,
      weatherPlan: "If ferries are delayed by wind or marine weather, replace Bainbridge with UW, Arboretum, and Japanese Garden.",
      segments: [
        {
          label: "Morning",
          items: [
            {
              time: "8:45 AM",
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
              name: "Bainbridge Island ferry + Winslow",
              type: "sightseeing",
              neighborhood: "Bainbridge Island",
              duration: "4.5 hr",
              cost: 30,
              bestTime: "Morning sailing for calmer pacing.",
              knownFor: "Ferry views, walkable Winslow, small shops, coffee/ice cream stops.",
              sentiment: "Worth the effort if visibility is decent.",
              reservation: "No passenger reservation; first come, first served.",
              payment: "WSF accepts card; card processing fee starts March 2026.",
              taxTipIncluded: "Transit/ferry estimate includes card fee buffer; no tip.",
              hours: "Ferry schedule varies; recheck WSF schedule in October 2026.",
              website: "https://wsdot.wa.gov/travel/washington-state-ferries",
              route: "https://www.google.com/maps/dir/Bainbridge+Island+Ferry+Terminal/Winslow+Bainbridge+Island/Indigo+Cow+Bainbridge"
            }
          ]
        },
        {
          label: "Afternoon",
          items: [
            {
              time: "3:15 PM",
              name: "Seattle Japanese Garden",
              type: "sightseeing",
              neighborhood: "Madison Valley / Arboretum",
              duration: "75 min",
              cost: 13,
              bestTime: "Afternoon fall color; it closes seasonally after November.",
              knownFor: "Formal stroll garden and autumn foliage.",
              sentiment: "Underrated compared with major Seattle icons.",
              reservation: "Usually walk-up; recheck November hours.",
              payment: "Cards accepted at many city facilities; confirm before trip.",
              taxTipIncluded: "Admission estimate includes tax/fee buffer; no tip.",
              hours: "Open March 1-November 30; fall hours vary. Regular adult admission noted at $10.",
              website: "https://botanicgardens.uw.edu/washington-park-arboretum/gardens/japanese-garden/",
              route: "https://www.google.com/maps/dir/Seattle+Ferry+Terminal/Seattle+Japanese+Garden"
            }
          ]
        },
        {
          label: "Evening",
          items: [
            {
              time: "5:15 PM",
              name: "Bottlehouse",
              type: "cocktails",
              neighborhood: "Madrona",
              duration: "60 min",
              cost: 23,
              bestTime: "Daily 3-6 PM happy hour after the garden.",
              knownFor: "Wine, cheese, charcuterie, garden patio feel.",
              sentiment: "Local favorite and better value than a destination cocktail bar tonight.",
              happyHour: "Daily 3-6 PM.",
              recommended: "Glass of Washington wine plus a small happy-hour plate.",
              reservation: "Reservations accepted.",
              payment: "Credit cards reported accepted.",
              taxTipIncluded: "Estimate includes tax and 18% tip.",
              tipGuidance: "Tip 18% on wine and table service.",
              hours: "Open daily at 3 PM; happy hour daily 3-6 PM.",
              website: "https://bottlehouseseattle.com/",
              menu: "https://bottlehouseseattle.com/menu/",
              route: "https://www.google.com/maps/dir/Seattle+Japanese+Garden/Bottlehouse+Seattle"
            },
            {
              time: "7:00 PM",
              name: "Spinasse solo pasta splurge",
              type: "food",
              neighborhood: "Capitol Hill",
              duration: "75-90 min",
              cost: 72,
              bestTime: "7 PM reservation or counter seat after Bottlehouse.",
              knownFor: "Handmade Piedmontese pasta, especially tajarin and butter/sage style dishes.",
              sentiment: "Worth the hype and a controlled Seattle splurge.",
              reservation: "Recommended one month ahead; ask for solo/counter seating if available.",
              payment: "Cards accepted; credit card required for reservations.",
              taxTipIncluded: "Estimate includes one pasta-focused solo meal, Seattle tax, and 18% tip. Alcohol/dessert would push this higher.",
              tipGuidance: "Tip 18% on the pre-tax food and drink total; no need to exceed that on a budget.",
              hours: "Sun-Thu 5-10 PM, Fri-Sat 5-11 PM; holiday closures apply.",
              website: "https://spinasse.com/contact/",
              route: "https://www.google.com/maps/dir/Bottlehouse+Seattle/Spinasse+Seattle"
            }
          ]
        }
      ]
    },
    {
      id: "day-4",
      date: "Wed, Nov 4",
      city: "Seattle to Portland",
      title: "Capitol Hill coffee, UW option, Amtrak south",
      theme: "Transfer day",
      dayTotal: 119,
      weatherPlan: "If rain is heavy, skip UW and use Capitol Hill cafes until train time.",
      segments: [
        {
          label: "Morning",
          items: [
            {
              time: "8:00 AM",
              name: "Anchorhead Capitol Hill or Olympia Coffee Columbia City",
              type: "coffee",
              neighborhood: "Capitol Hill / Columbia City",
              duration: "45 min",
              cost: 7,
              bestTime: "Morning before checkout.",
              knownFor: "Final Seattle espresso or drip near the hotel.",
              sentiment: "Useful caffeine stop, not a second bean-buying stop.",
              beans: "No bean purchase here; Seattle bean budget is already assigned to Anchorhead Pike Place.",
              reservation: "None.",
              payment: "Cards accepted.",
              taxTipIncluded: "Drink estimate includes tax plus $1 coffee tip.",
              tipGuidance: "$1 is enough for coffee.",
              hours: "Anchorhead Capitol Hill: Mon-Fri 7 AM-4 PM, Sat-Sun 8 AM-5 PM. Olympia Columbia City: Mon-Fri 6 AM-6 PM, Sat-Sun 7 AM-6 PM.",
              website: "https://anchorheadcoffee.com/pages/locations",
              route: "https://www.google.com/maps/dir/The+Boylston+Hotel+Capitol+Hill+Seattle/Anchorhead+Coffee+Capitol+Hill"
            },
            {
              time: "10:00 AM",
              name: "UW social loop: Cafe Allegro, University Book Store, Big Time Brewery",
              type: "food",
              neighborhood: "University District",
              duration: "2-2.5 hr",
              cost: 22,
              bestTime: "Late morning through early afternoon; use as a public app meetup zone if luggage is handled.",
              knownFor: "UW-adjacent coffee, bookstore browsing, and a casual brewery with trivia/chess nights.",
              sentiment: "Good public social zone near students and locals; do not treat it as a pickup plan.",
              reservation: "No reservation needed; Big Time asks trivia tables to call day-of.",
              payment: "Cards accepted at the major stops.",
              taxTipIncluded: "Estimate includes coffee/snack tax plus $1 coffee tip; beer/food at Big Time should be tipped 18% if table/bar service is used.",
              tipGuidance: "$1 for coffee; 18% at Big Time if you sit for food/drinks.",
              socialFit: "First-date friendly, public, transit-accessible, and better before dark.",
              safetyNote: "Meet only in public; use Link back to Capitol Hill or King Street Station and keep your own transit plan.",
              hours: "Cafe Allegro listed Mon-Fri 8 AM-5 PM, Sat 9 AM-5 PM, Sun closed. University Book Store Mon-Sat 10 AM-6 PM, Sun 11 AM-5 PM. Big Time daily 11:30 AM-11 PM.",
              website: "https://udistrictseattle.com/business/cafe-allegro",
              route: "https://www.google.com/maps/dir/Capitol+Hill+Station+Seattle/Cafe+Allegro+Seattle/University+Book+Store+Seattle/Big+Time+Brewery+Seattle"
            }
          ]
        },
        {
          label: "Afternoon",
          items: [
            {
              time: "Train time per ticket",
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
            }
          ]
        },
        {
          label: "Evening",
          items: [
            {
              time: "After check-in",
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
              route: "https://www.google.com/maps/dir/Hotel+Rose+Portland/Powell's+City+of+Books/Life+of+Pie+NW+23rd"
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
      dayTotal: 102,
      weatherPlan: "Japanese Garden is still good in light rain; use Powell's and cafes if wind is rough.",
      segments: [
        {
          label: "Morning",
          items: [
            {
              time: "8:30 AM",
              name: "Less & More Coffee or Stumptown Downtown",
              type: "coffee",
              neighborhood: "Downtown",
              duration: "35 min",
              cost: 6,
              bestTime: "Before heading uphill.",
              knownFor: "Downtown espresso stop near hotel.",
              sentiment: "Efficient local pick.",
              beans: "Save bean purchases for Coava/Heart/Stumptown retail.",
              payment: "Cards accepted at major cafes.",
              taxTipIncluded: "Drink estimate includes tax plus $1 coffee tip.",
              tipGuidance: "$1 is enough for coffee.",
              hours: "Recheck closer to trip.",
              website: "https://www.google.com/maps/search/Less+and+More+Coffee+Portland",
              route: "https://www.google.com/maps/dir/Hotel+Rose+Portland/Less+and+More+Coffee+Portland"
            },
            {
              time: "10:00 AM",
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
              route: "https://www.google.com/maps/dir/Hotel+Rose+Portland/Washington+Park+MAX+Station/Portland+Japanese+Garden"
            }
          ]
        },
        {
          label: "Afternoon",
          items: [
            {
              time: "1:45 PM",
              name: "Life of Pie NW happy-hour lunch",
              type: "food",
              neighborhood: "NW 23rd",
              duration: "60 min",
              cost: 15,
              bestTime: "Before 6 PM for the deal.",
              knownFor: "$9 Margherita pizza happy hour.",
              sentiment: "Strong value, especially near Washington Park.",
              happyHour: "11 AM-6 PM daily.",
              reservation: "Walk-in.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate includes tax; tip depends on service style.",
              tipGuidance: "If counter service, tip optional up to 10%; if seated service, tip 18%.",
              hours: "11 AM-10 PM daily.",
              website: "https://lifeofpiepizza.com/",
              route: "https://www.google.com/maps/dir/Portland+Japanese+Garden/Life+of+Pie+NW+23rd"
            },
            {
              time: "3:15 PM",
              name: "Powell's City of Books + Made Here",
              type: "shopping",
              neighborhood: "Pearl / Downtown",
              duration: "2 hr",
              cost: 5,
              bestTime: "Afternoon indoor block.",
              knownFor: "Books, local goods, Portland souvenirs.",
              sentiment: "Touristy but useful and weatherproof.",
              reservation: "None.",
              payment: "Cards accepted.",
              taxTipIncluded: "Souvenir allowance includes tax; no tip.",
              hours: "Powell's daily 10 AM-9 PM.",
              website: "https://www.travelportland.com/attractions/powells/",
              route: "https://www.google.com/maps/dir/Life+of+Pie+NW+23rd/Powell's+City+of+Books/MadeHere+Portland"
            }
          ]
        },
        {
          label: "Evening",
          items: [
            {
              time: "6:00 PM",
              name: "Gado Gado",
              type: "food",
              neighborhood: "Hollywood / NE",
              duration: "90 min",
              cost: 48,
              bestTime: "Early reservation.",
              knownFor: "Indonesian/Southeast Asian flavors; small plates and rice-table-style flavors.",
              sentiment: "Worth the hype but a controlled splurge.",
              reservation: "Reservations encouraged, released 21 days ahead via OpenTable.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate includes a fuller solo dinner, Portland tax assumptions, and 18% tip.",
              tipGuidance: "Tip 18% for sit-down service; skip extra upgrades unless you are using the $900 ceiling.",
              hours: "5-9 PM nightly.",
              website: "[private reservation link removed]",
              route: "https://www.google.com/maps/dir/MadeHere+Portland/Gado+Gado+Portland"
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
      dayTotal: 80,
      weatherPlan: "All major stops have indoor seating or short walks from transit.",
      segments: [
        {
          label: "Morning",
          items: [
            {
              time: "8:30 AM",
              name: "Coava Coffee Roasters Flagship",
              type: "coffee",
              neighborhood: "Central Eastside",
              duration: "60 min",
              cost: 24,
              bestTime: "Morning for espresso and bean stock.",
              knownFor: "Portland specialty roaster, seasonal single origins, flagship cafe.",
              sentiment: "Worth the hype for coffee buyers.",
              beans: "Buy one single-origin bag; budget $21.",
              reservation: "None.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate includes one Portland bean bag, one drink, tax, and $1 coffee tip.",
              tipGuidance: "$1 for coffee; no tip needed on the retail bean bag.",
              hours: "Flagship open daily 7 AM-6 PM.",
              website: "https://coavacoffee.com/locations",
              route: "https://www.google.com/maps/dir/Hotel+Rose+Portland/Coava+Coffee+Roasters+Flagship"
            },
            {
              time: "10:00 AM",
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
              name: "Mississippi / Williams walk",
              type: "shopping",
              neighborhood: "North Portland",
              duration: "90 min",
              cost: 4,
              bestTime: "Post-lunch browsing.",
              knownFor: "Independent shops, cafes, food carts.",
              sentiment: "Good local-feeling alternative to downtown shopping.",
              reservation: "None.",
              payment: "Cards widely accepted.",
              taxTipIncluded: "Small snack/shopping buffer includes tax; tip optional.",
              hours: "Varies by shop.",
              website: "https://www.google.com/maps/search/North+Mississippi+Avenue+Portland",
              route: "https://www.google.com/maps/dir/Hat+Yai+Killingsworth/North+Mississippi+Avenue+Portland"
            }
          ]
        },
        {
          label: "Evening",
          items: [
            {
              time: "5:00 PM",
              name: "Rontoms",
              type: "cocktails",
              neighborhood: "East Burnside",
              duration: "75 min",
              cost: 18,
              bestTime: "3-6:30 PM happy hour.",
              knownFor: "Large patio, casual cocktails, late hours.",
              sentiment: "Local favorite, not precious.",
              happyHour: "Every day 3-6:30 PM: $1 off draughts, house wines and wells; $10 happy-hour food items.",
              recommended: "Origami Plane, Snake Oil, or one well drink if budget is tight.",
              reservation: "No reservations; first come, first served. 21+ only.",
              payment: "Max three credit cards per party per official site.",
              taxTipIncluded: "Estimate includes one happy-hour drink or snack, tax, and 18% bar tip.",
              tipGuidance: "Tip 18% at the bar; no need to exceed that for a budget night.",
              socialFit: "Casual public bar with patio energy; better for an app meetup than approaching strangers cold.",
              safetyNote: "Stay near East Burnside, keep the meetup public, and use transit/rideshare backup if leaving late.",
              hours: "Mon-Wed 11:30 AM-1 AM, Thu-Fri 11:30 AM-2:30 AM, Sat 1 PM-2:30 AM, Sun 1 PM-1 AM.",
              website: "https://www.rontoms.net/",
              menu: "https://www.rontoms.net/menu-1",
              route: "https://www.google.com/maps/dir/North+Mississippi+Avenue+Portland/Rontoms+Portland"
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
              route: "https://www.google.com/maps/dir/Hotel+Rose+Portland/Stumptown+Coffee+Roasters+128+SW+3rd"
            },
            {
              time: "10:00 AM",
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
              route: "https://www.google.com/maps/dir/Eem+Portland/Tope+Portland/Hotel+Rose+Portland"
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
      dayTotal: 80,
      weatherPlan: "Use cafes, Powell's, and Made Here as indoor alternates if steady rain.",
      segments: [
        {
          label: "Morning",
          items: [
            {
              time: "9:00 AM",
              name: "Heart Coffee or Good Coffee",
              type: "coffee",
              neighborhood: "Eastside",
              duration: "60 min",
              cost: 8,
              bestTime: "Morning bean purchase.",
              knownFor: "Heart is a major Portland roaster with lighter Nordic-leaning roast style; Good Coffee is reliable for espresso.",
              sentiment: "Heart is best for beans; Good Coffee is best for convenience/vibe.",
              beans: "No default bean purchase here; buy a final $20 bag only if you intentionally move money from souvenirs or cocktails.",
              reservation: "None.",
              payment: "Cards accepted.",
              taxTipIncluded: "Drink estimate includes tax plus $1 coffee tip.",
              tipGuidance: "$1 is enough for coffee.",
              hours: "Recheck exact branch hours before trip.",
              website: "https://www.heartroasters.com/",
              route: "https://www.google.com/maps/dir/Hotel+Rose+Portland/Heart+Coffee+Portland"
            },
            {
              time: "10:30 AM",
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
              name: "Grassa or Midtown Beer Garden",
              type: "food",
              neighborhood: "Downtown",
              duration: "60 min",
              cost: 18,
              bestTime: "Early, simple final dinner.",
              knownFor: "Budget-friendly downtown dinner near hotel.",
              sentiment: "Practical, not a splurge.",
              reservation: "None.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate includes tax; tip depends on service style.",
              tipGuidance: "Tip 10% for counter service or 18% if seated/bar service is involved.",
              hours: "Recheck current branch hours.",
              website: "https://www.grassapdx.com/",
              route: "https://www.google.com/maps/dir/Screen+Door+Portland/Grassa+Portland/Hotel+Rose+Portland"
            }
            ,
            {
              time: "7:30 PM",
              name: "Big Legrowlski open jam social night",
              type: "cocktails",
              neighborhood: "Pearl District",
              duration: "75-120 min",
              cost: 18,
              bestTime: "Sunday, Monday, or Tuesday 7 PM-midnight open jam; Sunday fits this itinerary.",
              knownFor: "Casual live music/open jam, local crowd, no-cover community vibe.",
              sentiment: "Good social value near Hotel Rose; 21+ only.",
              happyHour: "No default happy-hour deal; budget one drink or nonalcoholic option.",
              recommended: "Use this as a public app-date or social hangout, not a late-night pickup plan.",
              reservation: "No reservation; check event calendar before going.",
              payment: "Cards accepted; support the venue with a drink/snack.",
              taxTipIncluded: "Estimate includes one drink/snack, tax, and 18% bar tip.",
              tipGuidance: "Tip 18% at the bar.",
              socialFit: "Strongest Portland social pick near the hotel for meeting locals in a structured public setting.",
              safetyNote: "Keep first meetups public, stay aware around Old Town/Pearl late at night, and use your own route home.",
              hours: "Open-jam info lists Sunday, Monday, Tuesday 7 PM-midnight; venue lists 21+.",
              website: "https://www.biglegrowlski.com/open-jam",
              route: "https://www.google.com/maps/dir/Hotel+Rose+Portland/The+Big+Legrowlski+Portland"
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
              time: "Flight-dependent",
              name: "Hotel Rose to PDX",
              type: "transit",
              neighborhood: "Downtown to airport",
              duration: "45-60 min",
              cost: 3,
              bestTime: "Leave at least 2.5 hours before domestic departure.",
              knownFor: "MAX Red Line / transit-first airport transfer.",
              sentiment: "Best value.",
              reservation: "None.",
              payment: "Tap contactless card or phone.",
              hours: "Verify service alerts day-of.",
              website: "https://trimet.org/",
              route: "https://www.google.com/maps/dir/Hotel+Rose+Portland/Portland+International+Airport"
            },
            {
              time: "Before departure",
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
      { name: "Spinasse", status: "Book", note: "Now included as the Seattle solo splurge. Book one month ahead; ask for solo/counter seating and keep the order pasta-focused to stay near budget.", link: "https://spinasse.com/contact/" },
      { name: "Gado Gado", status: "Book", note: "Book 21 days ahead for Nov 5 early dinner.", link: "[private reservation link removed]" },
      { name: "Portland Japanese Garden", status: "Book", note: "Timed tickets recommended up to 10 days ahead.", link: "https://japanesegarden.org/hours-admission/" },
      { name: "Canon", status: "Optional", note: "Limited reservations; go early for Sunday happy hour.", link: "https://www.canonseattle.com/" },
      { name: "Seattle Kraken / hockey game", status: "TBD", note: "2026-27 schedule is not reliable yet. Add only if a home game fits Nov 1-4 without breaking budget.", link: "https://www.nhl.com/kraken/schedule" }
    ],
    happyHour: [
      { name: "Canon", city: "Seattle", deal: "Wed/Thu/Sun 5-6 PM and 11 PM-midnight; half off food, wine by the glass, draft beer.", drink: "One signature cocktail or use wine/food deals.", link: "https://www.canonseattle.com/" },
      { name: "Bottlehouse", city: "Seattle", deal: "Daily 3-6 PM.", drink: "Washington wine by the glass; cheese board if hungry.", link: "https://bottlehouseseattle.com/" },
      { name: "Life of Pie", city: "Portland", deal: "Daily 11 AM-6 PM; $9 dine-in Margherita, $6 house beer/wine.", drink: "House wine/beer only if desired.", link: "https://lifeofpiepizza.com/" },
      { name: "Rontoms", city: "Portland", deal: "Daily 3-6:30 PM; $1 off draughts, house wines, wells; $10 HH food.", drink: "Snake Oil, Origami Plane, or budget well drink.", link: "https://www.rontoms.net/menu-1" }
    ],
    coffee: [
      { name: "Anchorhead", city: "Seattle", buy: "Default Seattle bag: one fruit-forward single origin or seasonal filter roast.", roast: "Modern specialty, lighter/bright options.", budget: "$20-25", link: "https://anchorheadcoffee.com/pages/locations" },
      { name: "Coava", city: "Portland", buy: "Default Portland bag: one seasonal single origin from the flagship.", roast: "Balanced specialty, strong pour-over choice.", budget: "$20-25", link: "https://coavacoffee.com/locations" },
      { name: "Olympia Coffee", city: "Seattle", buy: "Alternate Seattle bag only if you skip Anchorhead.", roast: "Clean, transparent, lighter specialty.", budget: "$20-24", link: "https://www.olympiacoffee.com/pages/columbia-city" },
      { name: "Stumptown or Heart", city: "Portland", buy: "Alternate Portland bag only if you skip Coava.", roast: "Stumptown is classic/giftable; Heart is lighter and filter-focused.", budget: "$18-25", link: "https://www.stumptowncoffee.com/pages/portland-downtown-cafe" }
    ],
    socialDating: [
      { name: "Tinder", city: "Both cities", fit: "Primary app for high-volume casual matching while traveling.", setup: "Use Passport Mode before arrival if you have a paid plan or standalone Passport access. Set Seattle first, then Portland after the Amtrak day.", safety: "State your dates clearly and match only with people who self-identify as interested in your profile. Do not infer orientation from venue or appearance.", link: "https://www.help.tinder.com/hc/en-us/articles/115004490423-Passport-Mode" },
      { name: "Hinge", city: "Both cities", fit: "Backup for more filtered, date-quality matches.", setup: "Manually set location to Capitol Hill/U District for Seattle, then Downtown/Pearl or inner eastside for Portland.", safety: "Use it for coffee or dinner dates where you can screen better before meeting.", link: "https://help.hinge.co/hc/en-us/articles/49661615922195-Location-Settings" },
      { name: "Bumble", city: "Both cities", fit: "Optional if you want more control over messaging.", setup: "Travel Mode is Premium/Premium+ and can be set up before arrival.", safety: "Good for public coffee/drink plans; keep first meetups short.", link: "https://support.bumble.com/hc/articles/28423960803741-Using-Bumble-while-traveling" },
      { name: "Cafe Allegro + University Book Store + Big Time Brewery", city: "Seattle", fit: "UW-adjacent public hangout loop, reachable from Capitol Hill by Link.", setup: "Use Cafe Allegro or University Book Store for daytime app meetups; Big Time works better for early evening beer/trivia/chess energy.", safety: "Campus-adjacent does not mean everyone is available or straight. Use apps/preferences for dating intent and keep interactions respectful.", link: "https://www.bigtimebrewery.com/" },
      { name: "Big Legrowlski", city: "Portland", fit: "Best Portland social venue near Hotel Rose for open jam/live music and local conversation.", setup: "Sunday open jam fits the itinerary; budget one drink and keep your own way home.", safety: "21+ only. Stay public, avoid leaving with someone you just met, and use rideshare backup if transit feels inconvenient late.", link: "https://www.biglegrowlski.com/open-jam" },
      { name: "Powell's / Pearl District coffee meetup", city: "Portland", fit: "Safest daytime first-date zone near Hotel Rose.", setup: "Meet at Powell's or a nearby cafe before dinner; keep it to 45-60 minutes first.", safety: "Good default for first app meetups because exits, transit, and hotel return are simple.", link: "https://www.travelportland.com/attractions/powells/" }
    ],
    rainyDay: [
      "Seattle: Pike Place Market, Seattle Art Museum, Amazon Spheres exterior/photo stop, coffee crawl near Capitol Hill.",
      "Seattle: Replace Bainbridge with UW libraries, Japanese Garden only if light rain, Bottlehouse early happy hour.",
      "Portland: Powell's, Made Here, Stumptown/Coava cafe blocks, Japanese Garden in light rain, indoor food carts/beer garden.",
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
    { name: "Space Needle", reason: "Excluded for value. Columbia Center gives a higher public view for a more efficient downtown route." },
    { name: "Seattle Ferris Wheel", reason: "Touristy and redundant after Sky View; use waterfront walk instead." },
    { name: "The Pink Door", reason: "Still excluded from the default plan because Spinasse is the Seattle splurge. Use Pink Door only if Spinasse is unavailable." },
    { name: "Carkeek Park", reason: "Too far north for this short Seattle stay unless replacing Bainbridge." },
    { name: "West Seattle cluster: Panterelli, MotoPizza, Alki-adjacent ideas", reason: "Adds transit time and backtracking from Capitol Hill." },
    { name: "Seattle Streetcar / 3303 S Bond Ave item", reason: "Address appears Portland South Waterfront/OHSU related, not Seattle. Excluded as cross-city data error." },
    { name: "Daily Cafe / Summit Cafe at OHSU", reason: "Portland/OHSU items mistakenly listed under Seattle; not used in Seattle routing." },
    { name: "Depoe Bay", reason: "Full-day coastal trip, car/tour cost, and weather risk are still too high for the $800 target." },
    { name: "Multnomah Falls via Viator", reason: "Good optional tour, but paid tour consumes too much budget. Add only if replacing Portland Japanese Garden or Gado Gado." },
    { name: "Carver Cafe", reason: "Too far from central Portland without a car and not aligned with the transit-first plan." },
    { name: "The Grotto", reason: "Interesting but east of the core route; use only as rainy/reflective backup if skipping Washington Park." },
    { name: "Duplicate chains/branches", reason: "Only closest or strategically useful branch is recommended to avoid itinerary clutter." }
  ],
  sources: [
    { label: "Seattle Streetcar fares", url: "https://www.seattle.gov/transportation/getting-around/transit/streetcar/fares-and-orca-card" },
    { label: "Washington State Ferries fares", url: "https://wsdot.wa.gov/ferries/fares/Default.aspx" },
    { label: "Washington State Transportation Commission ferry fare changes", url: "https://wstc.wa.gov/news/2025/08/06/new-fares-for-washington-state-ferries-approved/" },
    { label: "TriMet fares", url: "https://go.trimet.org/fares/index.htm" },
    { label: "Pike Place Market visit info", url: "https://www.pikeplacemarket.org/about-pike-place-market/plan-your-visit/" },
    { label: "Sky View Observatory hours/directions", url: "https://skyviewobservatory.com/location/" },
    { label: "Seattle Japanese Garden / UW Botanic Gardens", url: "https://botanicgardens.uw.edu/washington-park-arboretum/gardens/japanese-garden/" },
    { label: "Canon official site", url: "https://www.canonseattle.com/" },
    { label: "Bottlehouse official site", url: "https://bottlehouseseattle.com/" },
    { label: "Spinasse official site", url: "https://spinasse.com/contact/" },
    { label: "Anchorhead locations", url: "https://anchorheadcoffee.com/pages/locations" },
    { label: "Olympia Coffee Columbia City", url: "https://www.olympiacoffee.com/pages/columbia-city" },
    { label: "Portland Japanese Garden hours/admission", url: "https://japanesegarden.org/hours-admission/" },
    { label: "Powell's / Travel Portland", url: "https://www.travelportland.com/attractions/powells/" },
    { label: "Portland Saturday Market / Travel Portland", url: "https://www.travelportland.com/event/6839b028f06e831a6c74666e/" },
    { label: "Life of Pie official site", url: "https://lifeofpiepizza.com/" },
    { label: "Gado Gado reservations", url: "[private reservation link removed]" },
    { label: "Rontoms official site/menu", url: "https://www.rontoms.net/menu-1" },
    { label: "Eem official site", url: "https://www.eempdx.com/" },
    { label: "Hat Yai menu", url: "https://www.hatyaipdx.com/menus" },
    { label: "Coava locations", url: "https://coavacoffee.com/locations" },
    { label: "Stumptown Downtown cafe", url: "https://www.stumptowncoffee.com/pages/portland-downtown-cafe" },
    { label: "Tinder Passport Mode", url: "https://www.help.tinder.com/hc/en-us/articles/115004490423-Passport-Mode" },
    { label: "Hinge location settings", url: "https://help.hinge.co/hc/en-us/articles/49661615922195-Location-Settings" },
    { label: "Bumble Travel Mode", url: "https://support.bumble.com/hc/articles/28423960803741-Using-Bumble-while-traveling" },
    { label: "Cafe Allegro / U District listing", url: "https://udistrictseattle.com/business/cafe-allegro" },
    { label: "University Book Store locations", url: "https://ubookstore.com/pages/locations" },
    { label: "Big Time Brewery", url: "https://www.bigtimebrewery.com/" },
    { label: "Big Legrowlski open jam", url: "https://www.biglegrowlski.com/open-jam" }
  ]
};
