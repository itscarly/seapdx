const fs = require("node:fs");
const path = require("node:path");

global.window = {};
require(path.join(__dirname, "..", "data", "trip-data.js"));

const tripData = global.window.TRIP_DATA;
const outputJsonPath = path.join(__dirname, "..", "data", "google-calendar-events-nov1-9-2026.json");
const outputCsvPath = path.join(__dirname, "..", "data", "google-calendar-import-nov1-9-2026.csv");

const typeEmoji = {
  meal: "🍽️",
  coffee: "☕",
  activity: "🎟️",
  walk: "🚶",
  transit: "🚇",
  rest: "🛌",
  shopping: "🛍️"
};

const routePlaces = {
  SEA: { airport: "Seattle-Tacoma International Airport (SEA)", station: "King Street Station, Seattle, WA" },
  PDX: { airport: "Portland International Airport (PDX)", station: "Portland Union Station, Portland, OR" },
  DFW: { airport: "Dallas Fort Worth International Airport (DFW)" },
  CRP: { airport: "Corpus Christi International Airport (CRP)" }
};

function dayLabel(day) {
  const dayNumber = day.id.replace("day-", "");
  if (day.id <= "day-4") return `Seattle Day ${dayNumber}`;
  return `Portland Day ${dayNumber}`;
}

function eventTitle(day, stop) {
  const emoji = typeEmoji[stop.type] || "📍";
  return `${emoji} ${dayLabel(day)} · ${stop.name}`;
}

function toIso(date, time) {
  const [clock, meridiem] = time.split(" ");
  let [hours, minutes] = clock.split(":").map(Number);
  if (meridiem === "PM" && hours !== 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;
  return `${date}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00-08:00`;
}

function addMinutes(isoValue, minutesToAdd) {
  const [datePart, timePart] = isoValue.split("T");
  const [clock] = timePart.split("-");
  let [hours, minutes] = clock.split(":").map(Number);
  minutes += minutesToAdd;
  hours += Math.floor(minutes / 60);
  minutes %= 60;

  const date = new Date(`${datePart}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + Math.floor(hours / 24));
  hours %= 24;

  const nextDate = date.toISOString().slice(0, 10);
  return `${nextDate}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00-08:00`;
}

function durationToMinutes(duration) {
  const text = String(duration || "");
  if (!text) return 60;
  if (text.includes("N/A")) return 60;
  let minutes = 0;
  const hoursMatch = text.match(/(\d+(?:\.\d+)?)\s*h/);
  const minutesMatch = text.match(/(\d+)\s*min/);
  if (hoursMatch) minutes += Math.round(Number(hoursMatch[1]) * 60);
  if (minutesMatch) minutes += Number(minutesMatch[1]);
  return minutes || 60;
}

function csvEscape(value) {
  const stringValue = String(value ?? "");
  return `"${stringValue.replace(/"/g, '""')}"`;
}

function placeQuery(day, value) {
  const place = String(value || "").trim();
  const city = day.id <= "day-4" ? "Seattle, WA" : "Portland, OR";
  const pair = place.match(/^(.+?)\s*(?:->|→)\s*(.+)$/);
  if (pair) return placeQuery(day, pair[2]);
  if (/palihotel/i.test(place)) return "Palihotel Seattle, 107 Pine St, Seattle, WA 98101";
  if (/hotel vance/i.test(place)) return "Hotel Vance, Portland, OR";
  const aliases = {
    "SEA": "Seattle-Tacoma International Airport (SEA)",
    "SEA Airport": "Seattle-Tacoma International Airport (SEA)",
    "PDX": "Portland International Airport (PDX)",
    "DFW": "Dallas Fort Worth International Airport (DFW)",
    "CRP": "Corpus Christi International Airport (CRP)",
    "Corpus Christi": "Corpus Christi, TX",
    "Astoria": "Astoria, OR",
    "King Street": "King Street Station, Seattle, WA",
    "King Street Station": "King Street Station, Seattle, WA",
    "Union Station": "Portland Union Station, Portland, OR",
    "Portland Union Station": "Portland Union Station, Portland, OR"
  };
  if (/^downtown seattle$/i.test(place)) return "Downtown Seattle, WA";
  if (/^downtown portland$/i.test(place)) return "Downtown Portland, OR";
  if (/^haystack rock/i.test(place)) return `${place}, Cannon Beach, OR`;
  if (/^(downtown|capitol hill|fremont|ballard)$/i.test(place)) return `${place}, ${city}`;
  if (/^downtown cannon beach$/i.test(place)) return "Downtown Cannon Beach, OR";
  if (/^cannon beach(?: downtown)?$/i.test(place)) return "Cannon Beach, OR";
  if (aliases[place]) return aliases[place];
  if (!place || /^(air travel|intercity rail|intercity bus)$/i.test(place)) return city;
  if (/\b(Seattle|Portland|Oregon|Washington|WA|OR|Bainbridge Island|Cannon Beach|DFW|PDX|CRP|SEA)\b/i.test(place)) return place;
  return `${place}, ${city}`;
}

function routePlace(code, rail = false) {
  return routePlaces[String(code).toUpperCase()]?.[rail ? "station" : "airport"] || null;
}

function codeRoute(day, stop) {
  const location = String(stop.location || stop.neighborhood || "");
  const text = /^(air travel|intercity rail|intercity bus)$/i.test(location) ? stop.name : location || stop.name || "";
  const match = text.match(/\b(SEA|PDX|DFW|CRP)\s*(?:->|→)\s*(SEA|PDX|DFW|CRP)\b/i);
  if (!match) return null;
  const rail = /Amtrak/i.test(text);
  return [routePlace(match[1], rail) || placeQuery(day, match[1]), routePlace(match[2], rail) || placeQuery(day, match[2])];
}

function stopDestination(day, stop) {
  if (stop.mapTo) return placeQuery(day, stop.mapTo);
  const location = String(stop.location || stop.neighborhood || "");
  const text = /^(air travel|intercity rail|intercity bus)$/i.test(location) ? stop.name : location || stop.name || "";
  const route = codeRoute(day, stop);
  if (route) return route[1];
  const pair = text.match(/^(.+?)\s*(?:->|→)\s*(.+)$/);
  return placeQuery(day, pair ? pair[2] : location || stop.name);
}

function stopOrigin(day, stop) {
  if (stop.mapFrom) return placeQuery(day, stop.mapFrom);
  const location = String(stop.location || stop.neighborhood || "");
  const text = /^(air travel|intercity rail|intercity bus)$/i.test(location) ? stop.name : location || stop.name || "";
  if (/king street/i.test(text)) return placeQuery(day, "Palihotel base");
  const route = codeRoute(day, stop);
  if (route) return route[0];
  const departed = text.match(/^Depart\s+(.+?)(?:\s*\(.*\))?$/i);
  if (departed) return placeQuery(day, departed[1]);
  const pair = text.match(/^(.+?)\s*(?:->|→)\s*(.+)$/);
  return placeQuery(day, pair ? pair[1] : location || stop.name);
}

function routeEndpoints(day, stop, previousStop, nextStop) {
  if (stop.mapFrom && stop.mapTo) return [placeQuery(day, stop.mapFrom), placeQuery(day, stop.mapTo)];

  const text = String(stop.name || stop.location || "");
  const route = codeRoute(day, stop);
  if (route) return route;

  if (/palihotel/i.test(stop.name) && /back|return/i.test(stop.name)) {
    return [previousStop ? stopDestination(day, previousStop) : placeQuery(day, "Palihotel base"), placeQuery(day, "Palihotel base")];
  }

  const pairRoute = String(stop.location || stop.neighborhood || stop.name || "").match(/^(.+?)\s*(?:->|→)\s*(.+)$/);
  if (pairRoute) {
    if (/king street/i.test(pairRoute[2])) return [stopDestination(day, previousStop) || placeQuery(day, "Palihotel base"), routePlace("SEA", true)];
    const rail = /Amtrak/i.test(stop.name);
    return [rail ? routePlace(pairRoute[1], true) || placeQuery(day, pairRoute[1]) : placeQuery(day, pairRoute[1]), rail ? routePlace(pairRoute[2], true) || placeQuery(day, pairRoute[2]) : placeQuery(day, pairRoute[2])];
  }

  const airportTransfer = text.match(/\btransfer to\s+(SEA|PDX|DFW|CRP)\b/i);
  if (airportTransfer) {
    const origin = previousStop ? stopDestination(day, previousStop) : placeQuery(day, day.id <= "day-4" ? "Palihotel base" : "Hotel Vance Portland");
    return [origin, routePlace(airportTransfer[1])];
  }

  const broadLocation = /^(downtown(?:\s+(?:seattle|portland))?|capitol hill|fremont|ballard|bainbridge island|cannon beach(?: downtown)?|downtown cannon beach)$/i;
  const locationLabel = stop.location || stop.neighborhood || "";
  const abstractTransit = /^(air travel|intercity rail|intercity bus)$/i.test(locationLabel);
  const broadPlace = broadLocation.test(locationLabel);
  let location = abstractTransit || (broadPlace && !/palihotel|hotel vance/i.test(stop.name) && (stop.type === "walk" || stop.type === "transit" || /cannon beach/i.test(locationLabel)))
    ? String(locationLabel).replace(/^Arrive\s+/i, "")
    : broadPlace
      ? stop.name
    : /palihotel|hotel vance/i.test(stop.name)
      ? stop.name
      : stop.location || stop.neighborhood || stop.name;
  if (/^winslow/i.test(stop.name) && /bainbridge island/i.test(locationLabel)) location = "Winslow, Bainbridge Island, WA";
  let destination = placeQuery(day, location);
  if (abstractTransit && nextStop) {
    destination = stopOrigin(day, nextStop);
  }
  let origin = previousStop
    ? stopDestination(day, previousStop)
    : placeQuery(day, day.id <= "day-4" ? "Palihotel base" : "Hotel Vance Portland");
  if (/^intercity bus$/i.test(String(previousStop?.location || previousStop?.neighborhood || ""))) {
    origin = stopOrigin(day, previousStop);
  }
  const departure = abstractTransit && String(stop.name).match(/^Depart\s+(.+?)(?:\s*\(.*\))?$/i);
  if (departure) origin = placeQuery(day, departure[1]);
  if (origin === destination && previousStop) origin = stopOrigin(day, previousStop);
  return [origin, destination];
}

function descriptionForStop(day, stop, previousStop, nextStop) {
  const lines = [];

  if (stop.detailText) {
    lines.push(stop.detailText.trim());
  } else if (stop.notes) {
    lines.push(`Purpose: ${stop.notes}`);
  } else {
    lines.push(`Purpose: ${stop.name} keeps the ${day.title.toLowerCase()} route on track.`);
  }

  if (stop.location) lines.push(`Location: ${stop.location}`);
  if (stop.website && !String(stop.detailText || "").includes(stop.website)) lines.push(`Website: ${stop.website}`);
  if (stop.menu && !String(stop.detailText || "").includes(stop.menu)) lines.push(`Menu: ${stop.menu}`);
  if (stop.payment) lines.push(`Payment: ${stop.payment}`);
  if (stop.cost) lines.push(`Estimated cost: $${stop.cost}.`);
  if (stop.duration) lines.push(`Duration: ${stop.duration}.`);
  const [origin, destination] = routeEndpoints(day, stop, previousStop, nextStop);
  const mode = stop.routeMode || (stop.type === "transit" ? "transit" : "walking");
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=${mode}`;
  lines.push(`Google Maps directions: ${directionsUrl}`);

  return lines.join("\n");
}

const flatStops = [];
tripData.itinerary.forEach((day) => {
  day.segments.forEach((segment, segmentIndex) => {
    segment.items.forEach((stop, stopIndex) => {
      flatStops.push({ day, segment, segmentIndex, stop, stopIndex });
    });
  });
});

const events = flatStops.map((entry, index) => {
  const next = flatStops[index + 1];
  const start = toIso(entry.day.isoDate, entry.stop.time);
  const end = entry.stop.endTime ? toIso(entry.day.isoDate, entry.stop.endTime)
    : next ? toIso(next.day.isoDate, next.stop.time) : addMinutes(start, durationToMinutes(entry.stop.duration));
  return {
    tag: `SEAPDX-2026-${entry.day.id}-${String(index + 1).padStart(2, "0")}`,
    title: eventTitle(entry.day, entry.stop),
    start,
    end,
    location: entry.stop.location || entry.stop.neighborhood || "",
    description: descriptionForStop(entry.day, entry.stop, flatStops[index - 1]?.stop, next?.stop)
  };
});

fs.writeFileSync(outputJsonPath, JSON.stringify(events, null, 2));

const csvLines = [
  "Subject,Start Date,Start Time,End Date,End Time,Location,Description"
];

events.forEach((event) => {
  const [startDate, startTimeWithZone] = event.start.split("T");
  const [endDate, endTimeWithZone] = event.end.split("T");
  const startTime = startTimeWithZone.slice(0, 5);
  const endTime = endTimeWithZone.slice(0, 5);
  csvLines.push([
    csvEscape(event.title),
    csvEscape(startDate),
    csvEscape(startTime),
    csvEscape(endDate),
    csvEscape(endTime),
    csvEscape(event.location),
    csvEscape(event.description)
  ].join(","));
});

fs.writeFileSync(outputCsvPath, `${csvLines.join("\n")}\n`);

console.log(`Synced ${events.length} itinerary events to calendar JSON and CSV.`);
