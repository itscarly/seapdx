# Flight Monitor Report

Generated: 2026-05-19T14:41:40.068Z
Targets checked: 6
Changes detected: 0
Email attempted: no

## Notes

- This monitor is near-real-time polling, not airline push infrastructure.
- It checks official airline and airport pages every 15 minutes when the GitHub workflow runs.
- Email alerts require `RESEND_API_KEY` and `FLIGHT_ALERT_EMAIL_TO` repository secrets.

## Changes

No changes detected compared with the previous snapshot.

## Current Source Signals

### Manila to Seattle via Incheon status
- URL: https://flyasiana.com/C/US/EN/index
- HTTP status: 200
- Signals: gate, terminal, boarding
- Excerpt: GEOOrigin : [US] NATION : [US] --> ASIANA AIRLINES Content shortcut Home Asiana Airlines uses cookies to provide online services. Please confirm to use the website. View details OK Asiana Duty Free Asiana Corporate Plus Business Travel Go to Asiana Corporate Plus Asiana Corporate Plus is the Asiana Airlines special corporate priority program for business customers. Please note that individual special prices, benefits and conditions may differ, so please keep this in mind when making reservations. (However, corporate priority benefits only apply when issuing corporate priority tickets) Cancel O

### Manila to Seattle via Incheon airport board
- URL: https://www.portseattle.org/sea-tac/flight-status
- HTTP status: 200
- Signals: terminal
- Excerpt: Flight Status | Port of Seattle Skip to main content Menu Search Search Text Sort by Relevance Published Date Order Asc Desc Apply Careers | Contact Us A Change text size to Default A Change text size to Large A Change text size to Extra Large --> Privacy and Website Tracking Main navigation Home SEA Airport I&#039;m Departing I&#039;m Arriving I&#039;m Connecting I&#039;m Dropping Off/Picking Up SEA Airport Home Airlines &amp; Destinations Parking at SEA Ground Transportation Security Screening &amp; Checkpoints Dining, Retail &amp; More Customer Services &amp; Amenities International Travel 

### Portland to Corpus Christi via Dallas/Fort Worth status
- URL: https://www.aa.com/travelInformation/flights/status
- HTTP status: 200
- Signals: none found
- Excerpt: Flight status - Flight status by city, cities, or flight number - American Airlines Enable JavaScript Please enable JavaScript to fully experience this site. How to enable JavaScript Flight status Airport lookup Our system is having trouble Please try again or come back later. Please tell us where the airport is located. Country / region Select a country / region State City Airport Airport code Your session is about to expire Any searches or unfinished transactions will be lost. Do you want to continue your session?

### Portland to Corpus Christi via Dallas/Fort Worth airport board
- URL: https://www.flypdx.com/Flights#/arrivals-and-departures
- HTTP status: 200
- Signals: none found
- Excerpt: FlyPDX - Flights Skip to main content PDX is guided by the Port of Portland . PDX is guided by the Port of Portland , an engine for economic growth and connectivity. The Port’s airports, marine terminals, and business parks create opportunities for people to connect, businesses to grow, and our region to thrive. Construction New Exit Lanes PDX’s permanent exit lanes have opened! The temporary exit has closed. Follow signs to the new, shorter paths from your concourse. While baggage claim updates continue, signs will direct you around limited access to the north pedestrian tunnel.&nbsp; Got it 

### Corpus Christi to San Francisco via Dallas/Fort Worth status
- URL: https://www.aa.com/travelInformation/flights/status
- HTTP status: 200
- Signals: none found
- Excerpt: Flight status - Flight status by city, cities, or flight number - American Airlines Enable JavaScript Please enable JavaScript to fully experience this site. How to enable JavaScript Flight status Airport lookup Our system is having trouble Please try again or come back later. Please tell us where the airport is located. Country / region Select a country / region State City Airport Airport code Your session is about to expire Any searches or unfinished transactions will be lost. Do you want to continue your session?

### Corpus Christi to San Francisco via Dallas/Fort Worth airport board
- URL: https://www.dfwairport.com/flights/
- HTTP status: 200
- Signals: terminal
- Excerpt: Search for Flights, Destinations, Airports | DFW Airport Skip to main content Flights Park Book Parking Parking Products Terminal Express Remote Valet Cell Phone Lots Parking FAQs Parking Availability Refunds &amp; Payments Shop/Dine/Services Explore In the Terminals Shopping, Dining, and Services Wi-Fi &amp; Technology Traveler Lounges Art at DFW Family Friendly Amenities Traveling with Pets Map Transportation DFW Airport Shuttle Tracker Directions Park Rental Cars Ground Transportation Public Transit Plan Airlines Customs Clearance Connect/Transfer Passenger Assistance Lost and Found Corpora

