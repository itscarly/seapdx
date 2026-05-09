window.TRIP_DATA = {
  meta: {
    title: "Seattle and Portland Interactive Travel Itinerary",
    dates: "November 1-9, 2026",
    travelerBase: {
      seattle: "The Boylston Hotel Capitol Hill",
      portland: "Hotel Vance, Portland, a Tribute Portfolio Hotel"
    },
    verifiedOn: "May 9, 2026",
    budgetCap: 800,
    absoluteCeiling: 900,
    assumptions: [
      "Airfare and hotels are excluded.",
      "Amtrak Cascades 517 is included in the activity budget because the user listed it under intercity transportation.",
      "Prices include estimated local tax where applicable plus budget-conscious tips when table service or cocktails are involved.",
      "Default tip model: 15% for standard sit-down meals, 18% for cocktail bars, $1 for coffee, and 0-10% or simple round-up for counter-service food.",
      "Dashboard USD amounts now also show PHP equivalents using the May 9, 2026 USD/PHP rate plus a 1.85% foreign transaction fee buffer.",
      "Coffee beans are capped at two bags total: one in Seattle and one in Portland, with a maximum bean budget of $60.",
      "Portland home base is Hotel Vance, Portland, a Tribute Portfolio Hotel, 1455 Southwest Broadway, Portland, Oregon 97201, United States.",
      "November 2026 hours are not fully published for many businesses, so the dashboard flags current verified status and recommends rechecking before booking.",
      "The plan is curated best-fit; not every candidate location is included."
    ]
  },
  budget: {
    cap: 800,
    absoluteCeiling: 900,
    projectedTotal: 799,
    categories: [
      { name: "Transportation", amount: 142, note: "ORCA, ferry, Amtrak, TriMet/Hop; no planned rideshare." },
      { name: "Food", amount: 330, note: "Food spend now includes AYCE sushi plans, a real Bainbridge lunch/souvenir block, and lighter starter orders at the remaining default cocktail stops; tax and conservative tips included." },
      { name: "Cocktails and social", amount: 132, note: "The default cocktail route is trimmed to three stronger stops, each priced as two drinks plus one light food order with an 18% bar tip where applicable." },
      { name: "Entrance fees", amount: 67, note: "Sky View Observatory, Seattle Japanese Garden, Portland Japanese Garden." },
      { name: "Coffee beans", amount: 60, note: "Maximum two bags total: one Seattle bag and one Portland bag." },
      { name: "Souvenirs", amount: 35, note: "Small Pike Place, Hello From Portland, and downtown/Pearl gift allowance." },
      { name: "Contingency", amount: 33, note: "Weather snacks, fare changes, AYCE price variance, or app meetup drink buffer." }
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
      dayTotal: 65,
      weatherPlan: "Keep this day indoors and close to the hotel if rain is heavy after arrival.",
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
              leaveTime: "4:10 PM",
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
              leaveTime: "5:20 PM",
              name: "Canon",
              type: "cocktails",
              neighborhood: "Capitol Hill",
              duration: "60-75 min",
              cost: 40,
              bestTime: "Sunday 5-6 PM happy hour",
              knownFor: "Large spirits collection, serious cocktails, intimate room.",
              sentiment: "Worth the hype but small and strict on group size.",
              happyHour: "Wed, Thu, Sun 5-6 PM and 11 PM-midnight: half off food, wine by the glass, and draft beer. Cocktails are generally full price.",
              recommended: "Use two bartender-built citrusy or fruity cocktails plus the Golden Beet during happy hour. Canon does not publish the current cocktail list online, so the drink side here uses the venue's currently reported average cocktail price.",
              reservation: "Limited reservations; parties of four or fewer only.",
              payment: "Cards accepted; confirm any minimums.",
              taxTipIncluded: "Estimate assumes two cocktails at about $14 each, one half-price Golden Beet at about $7 during official happy hour, Seattle tax, and an 18% bar tip.",
              tipGuidance: "For a two-cocktail bar stop with food, 18% is the right default here.",
              hours: "Wed-Sun 5 PM to at least midnight.",
              website: "https://www.canonseattle.com/",
              menu: "https://www.canonseattle.com/",
              route: "https://www.google.com/maps/dir/Analog+Coffee+Seattle/Canon+Seattle"
            },
            {
              time: "7:00 PM",
              leaveTime: "6:50 PM",
              name: "Tacos Chukis - Capitol Hill",
              type: "food",
              neighborhood: "Capitol Hill",
              duration: "45 min",
              cost: 15,
              bestTime: "Early dinner after Canon or takeout back toward the hotel.",
              knownFor: "Adobada tacos and Taco Chukis with grilled pineapple; one of the clearest cheap-eat anchors in central Seattle.",
              sentiment: "Best Seattle value add in this revision.",
              reservation: "No reservation needed.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate assumes three Taco Chukis or a similar filling solo order, Seattle tax, and only a small optional counter tip.",
              tipGuidance: "For counter service here, tipping 0-10% or rounding up a dollar is fine.",
              hours: "Menu PDF was current in early May 2026; recheck branch hours before the trip.",
              website: "https://www.seattlechukis.com/",
              route: "https://www.google.com/maps/dir/Canon+Seattle/Tacos+Chukis+Capitol+Hill+Seattle"
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
      dayTotal: 142,
      weatherPlan: "Most market stops are covered or close together; move the waterfront walk after Sky View if rain breaks later.",
      segments: [
        {
          label: "Morning",
          items: [
            {
              time: "8:30 AM",
              leaveTime: "8:00 AM",
              name: "Anchorhead Coffee - Pike Place",
              type: "coffee",
              neighborhood: "Pike Place / Waterfront",
              duration: "35 min",
              cost: 29,
              bestTime: "Before market crowds",
              knownFor: "Specialty coffee and beans; closest useful branch to Pike Place.",
              sentiment: "Local favorite",
              beans: "Anchorhead's current 10 oz whole-bean options such as Narwhal or Roaster's Choice are $19. Plan on a $19 bag plus one drink.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate includes one $19 bag of beans, one coffee drink, Seattle tax, and a $1 coffee tip.",
              tipGuidance: "$1 for coffee; no tip needed on the retail bean bag.",
              hours: "Pike Place: Mon-Fri 8 AM-3 PM, Sat-Sun 8 AM-4 PM.",
              website: "https://anchorheadcoffee.com/pages/locations",
              route: "https://www.google.com/maps/dir/The+Boylston+Hotel+Capitol+Hill+Seattle/Anchorhead+Coffee+Pike+Place"
            },
            {
              time: "9:20 AM",
              leaveTime: "9:05 AM",
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
              time: "5:15 PM",
              name: "Cocktail at Sky View Bar",
              type: "cocktails",
              neighborhood: "Downtown",
              duration: "45 min",
              cost: 49,
              bestTime: "Blue hour if visibility is good.",
              knownFor: "View-first cocktail experience.",
              sentiment: "Touristy, but efficient because you are already upstairs.",
              happyHour: "No reliable happy hour found; plan this as a full two-cocktail splurge only if the view is worth it to you.",
              recommended: "Order Fruity Skyy and Lavender Sunset if you want sweet-citrus drinks, plus the Caesar Salad as the light food order.",
              reservation: "Observatory ticket controls access.",
              taxTipIncluded: "Estimate assumes Fruity Skyy ($14), Lavender Sunset ($14), a light salad at about $10, Seattle tax, and an 18% bar/service tip.",
              tipGuidance: "Treat this like a bar-with-food stop and tip 18%.",
              hours: "Bar/cafe ends service 30 minutes before observatory closing.",
              website: "https://skyviewobservatory.com/",
              menu: "https://www.skyviewobservatory.com/wp-content/themes/skyview/assets/images/cafe/SVO_Menu_Book_2022.pdf"
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
      dayTotal: 106,
      weatherPlan: "If ferries are delayed by wind or marine weather, replace Bainbridge with UW, Arboretum, and Japanese Garden.",
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
              name: "Bainbridge Island ferry + Winslow lunch, drink, and souvenir block",
              type: "sightseeing",
              neighborhood: "Bainbridge Island",
              duration: "4.5-5 hr",
              cost: 49,
              bestTime: "Morning sailing for calmer pacing.",
              knownFor: "Ferry views, Cafe Hitchcock for a real meal and drink, then the BIMA Museum Store for Bainbridge-specific gifts.",
              sentiment: "Worth the effort if visibility is decent and you want the island to include an actual sit-down break instead of just walking.",
              reservation: "No passenger reservation; first come, first served.",
              payment: "WSF accepts card; card processing fee starts March 2026.",
              taxTipIncluded: "Estimate includes Bainbridge ferry spend plus Cafe Hitchcock lunch-and-drink pricing, a small BIMA Museum Store souvenir allowance, and local tax/tip where applicable.",
              tipGuidance: "At Cafe Hitchcock, 15% is acceptable for a normal sit-down lunch.",
              hours: "Ferry schedule varies; Cafe Hitchcock currently reports daily service from 8 AM. BIMA Museum Store is typically open daily 10 AM-5 PM.",
              website: "https://visitbainbridgeisland.org/business/cafe-hitchcock/",
              route: "https://www.google.com/maps/dir/Bainbridge+Island+Ferry+Terminal/Cafe+Hitchcock+Bainbridge+Island/Bainbridge+Island+Museum+of+Art"
            }
          ]
        },
        {
          label: "Afternoon",
          items: [
            {
              time: "3:15 PM",
              leaveTime: "2:25 PM",
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
              time: "6:30 PM",
              leaveTime: "5:55 PM",
              name: "Sushi% AYCE Seattle premium dinner",
              type: "food",
              neighborhood: "International District",
              duration: "75 min",
              cost: 41,
              bestTime: "Dinner after the garden if you want Seattle sushi to be an actual AYCE meal instead of a la carte ordering.",
              knownFor: "AYCE-focused sushi stop in the International District with premium dinner mentioned in current third-party pricing coverage.",
              sentiment: "This now matches your AYCE-only sushi preference better than the earlier a la carte estimate.",
              reservation: "No reservation expected; confirm current ordering flow closer to the trip.",
              payment: "Cards accepted.",
              taxTipIncluded: "Estimate assumes the current premium AYCE dinner is about $33 per person, plus Seattle tax and a 15% sit-down tip.",
              tipGuidance: "15% is acceptable for AYCE table service if the service is normal.",
              hours: "Official site confirms AYCE service and current ordering; recheck current dinner rules before going.",
              website: "https://sushiayceus.com/menu",
              route: "https://www.google.com/maps/dir/Seattle+Japanese+Garden/Sushi%25AYCE+Seattle"
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
      dayTotal: 110,
      weatherPlan: "If rain is heavy, skip UW and use Capitol Hill cafes until train time.",
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
              time: "Flight-dependent",
              leaveTime: "2.5 hours before departure",
              name: "Check out of Hotel Vance",
              type: "hotel",
              anchorType: "hotel-departure",
              hotelContext: "Portland base: Hotel Vance, Portland, a Tribute Portfolio Hotel",
              neighborhood: "Downtown / Cultural District",
              duration: "15-20 min",
              cost: 0,
              notes: "Leave extra lobby and elevator time if morning weather is rough."
            },
            {
              time: "Flight-dependent",
              leaveTime: "2.25 hours before departure",
              name: "Hotel Vance to PDX",
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
              route: "https://www.google.com/maps/dir/Hotel+Vance+Portland/Portland+International+Airport"
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
      { name: "Portland Japanese Garden", status: "Book", note: "Timed tickets recommended up to 10 days ahead.", link: "https://japanesegarden.org/hours-admission/" },
      { name: "Canon", status: "Optional", note: "Limited reservations; go early for Sunday happy hour if you want the cheaper food half of the two-cocktail plan.", link: "https://www.canonseattle.com/" },
      { name: "Seattle Kraken / hockey game", status: "TBD", note: "2026-27 schedule is not reliable yet. Add only if a home game fits Nov 1-4 without breaking budget.", link: "https://www.nhl.com/kraken/schedule" }
    ],
    happyHour: [
      { name: "Canon", city: "Seattle", deal: "Wed/Thu/Sun 5-6 PM and 11 PM-midnight; half off food, wine by the glass, draft beer.", drink: "Use the food discount, but assume cocktails are still full price.", link: "https://www.canonseattle.com/" },
      { name: "Rontoms", city: "Portland", deal: "Daily 3-6:30 PM; $1 off draughts, house wines, wells; $10 HH food.", drink: "Use full-price fruity cocktails plus the $10 Caesar if you want the stop to match the new two-cocktail plan.", link: "https://www.rontoms.net/menu-1" },
      { name: "Life of Pie", city: "Portland", deal: "Daily 11 AM-6 PM; $9 dine-in Margherita, $6 house beer/wine.", drink: "House wine/beer only if desired.", link: "https://lifeofpiepizza.com/" }
    ],
    coffee: [
      { name: "Anchorhead", city: "Seattle", buy: "Default Seattle bag: one 10 oz whole-bean bag such as Narwhal or Roaster's Choice.", roast: "Modern specialty, lighter/bright options.", budget: "$19 current bag price", link: "https://anchorheadcoffee.com/pages/locations" },
      { name: "Coava", city: "Portland", buy: "Default Portland bag: one current 300g single-origin bag from the flagship.", roast: "Balanced specialty, strong pour-over choice.", budget: "$23 current bag price", link: "https://coavacoffee.com/locations" },
      { name: "Olympia Coffee", city: "Seattle", buy: "Alternate Seattle bag only if you skip Anchorhead.", roast: "Clean, transparent, lighter specialty.", budget: "$20.50 for Sweetheart 12 oz", link: "https://www.olympiacoffee.com/pages/columbia-city" },
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
    { label: "Pike Place Market visit info", url: "https://www.pikeplacemarket.org/about-pike-place-market/plan-your-visit/" },
    { label: "Sky View Observatory hours/directions", url: "https://skyviewobservatory.com/location/" },
    { label: "Sky View bar menu PDF", url: "https://www.skyviewobservatory.com/wp-content/themes/skyview/assets/images/cafe/SVO_Menu_Book_2022.pdf" },
    { label: "Seattle Japanese Garden / UW Botanic Gardens", url: "https://botanicgardens.uw.edu/washington-park-arboretum/gardens/japanese-garden/" },
    { label: "Canon official site", url: "https://www.canonseattle.com/" },
    { label: "Canon average cocktail price", url: "https://www.theworlds50best.com/discovery/Establishments/US/Seattle/Canon.html" },
    { label: "Canon food menu reference", url: "https://www.allmenus.com/wa/seattle/369111-canon/menu/" },
    { label: "Madrona Arms official cocktail menu", url: "https://www.madronaarms.com/menu" },
    { label: "Madrona Arms food menu reference", url: "https://www.allmenus.com/wa/seattle/671643-madrona-arms/menu/" },
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
