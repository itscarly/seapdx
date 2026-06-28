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

function slugify(value) {
  return String(value || "item")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40) || "item";
}

function stopAnchor(day, stop, segmentIndex, stopIndex) {
  const uid = stop._uid || `${day.id}-${segmentIndex}-${stopIndex}-${slugify(stop.name)}`;
  return `stop-${slugify(uid)}`;
}

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

function descriptionForStop(day, stop, segmentIndex, stopIndex) {
  const siteUrl = `${tripData.meta.publicSiteUrl}#${stopAnchor(day, stop, segmentIndex, stopIndex)}`;
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
  lines.push(`Site link: ${siteUrl}`);

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
  const end = next ? toIso(next.day.isoDate, next.stop.time) : addMinutes(start, durationToMinutes(entry.stop.duration));
  return {
    tag: `SEAPDX-2026-${entry.day.id}-${String(index + 1).padStart(2, "0")}`,
    title: eventTitle(entry.day, entry.stop),
    start,
    end,
    location: entry.stop.location || entry.stop.neighborhood || "",
    description: descriptionForStop(entry.day, entry.stop, entry.segmentIndex, entry.stopIndex)
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
