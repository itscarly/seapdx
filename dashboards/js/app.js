const STORAGE_KEY = "trip-dashboard-custom-data-v2";
const FALLBACK_USD_TO_PHP_RATE = 60.4459704;
const FOREIGN_TRANSACTION_FEE_RATE = 0.0185;
const FX_REFRESH_MS = 60 * 60 * 1000;

let usdToPhpRate = FALLBACK_USD_TO_PHP_RATE;
let effectiveUsdToPhpRate = usdToPhpRate * (1 + FOREIGN_TRANSACTION_FEE_RATE);
let fxMeta = {
  provider: "Fallback snapshot",
  updatedLabel: "May 9, 2026",
  live: false
};

const IMAGE_BASE = "../assets/images/";

const TRIP_VISUALS = [
  {
    name: "Pike Place Market",
    city: "Seattle",
    caption: "Market energy, neon, and one of the best-looking starts to the Seattle stretch.",
    image: `${IMAGE_BASE}pike-place-market.jpg`
  },
  {
    name: "Bainbridge ferry view",
    city: "Bainbridge",
    caption: "A real Bainbridge ferry visual for the island day, not a generic bridge or California scene.",
    image: `${IMAGE_BASE}bainbridge-ferry.jpg`
  },
  {
    name: "Portland Japanese Garden",
    city: "Portland",
    caption: "A softer Portland anchor that makes the garden day read like a real highlight.",
    image: `${IMAGE_BASE}portland-japanese-garden.jpg`
  },
  {
    name: "Downtown Portland",
    city: "Portland",
    caption: "Use this to visually carry Powell's, downtown coffee, cocktails, and the last full-day loop.",
    image: `${IMAGE_BASE}downtown-portland.jpg`
  },
  {
    name: "Incheon International Airport",
    city: "ICN",
    caption: "International transfer anchor for the long-haul arrival routing into Seattle.",
    image: `${IMAGE_BASE}icn-airport.jpg`
  },
  {
    name: "Seattle-Tacoma International Airport",
    city: "SEA",
    caption: "Sea-Tac sets the first transit decisions and arrival buffer for the Seattle leg.",
    image: `${IMAGE_BASE}sea-airport.jpg`
  },
  {
    name: "Portland International Airport",
    city: "PDX",
    caption: "PDX drives the final-day buffer and the domestic departure timing out of Portland.",
    image: `${IMAGE_BASE}pdx-airport.jpg`
  },
  {
    name: "Dallas/Fort Worth International Airport",
    city: "DFW",
    caption: "DFW is the key connection point in both the November return and the later February booking.",
    image: `${IMAGE_BASE}dfw-airport.jpg`
  },
  {
    name: "Corpus Christi International Airport",
    city: "CRP",
    caption: "Corpus Christi is the final arrival point for the November return journey.",
    image: `${IMAGE_BASE}crp-airport.jpg`
  }
];

const DAY_VISUALS = {
  "day-1": TRIP_VISUALS[0],
  "day-2": TRIP_VISUALS[0],
  "day-3": TRIP_VISUALS[1],
  "day-4": TRIP_VISUALS[3],
  "day-5": TRIP_VISUALS[2],
  "day-6": TRIP_VISUALS[3],
  "day-7": TRIP_VISUALS[3],
  "day-8": TRIP_VISUALS[3],
  "day-9": TRIP_VISUALS[3]
};

const TRIP_MAP_CONFIG = {
  seattle: {
    scope: "Seattle + Bainbridge",
    mapId: "seattleTripMap",
    summaryId: "seattleTripSummary",
    center: [47.6145, -122.3368],
    zoom: 12,
    boundsPadding: [22, 22],
    dayIds: ["day-1", "day-2", "day-3", "day-4"],
    bounds: {
      minLat: 47.44,
      maxLat: 47.7,
      minLng: -122.56,
      maxLng: -122.27
    },
    colors: {
      "day-1": "#fc5c33",
      "day-2": "#1749db",
      "day-3": "#0f766e",
      "day-4": "#f4b231"
    }
  },
  portland: {
    scope: "Portland",
    mapId: "portlandTripMap",
    summaryId: "portlandTripSummary",
    center: [45.5211, -122.6765],
    zoom: 12,
    boundsPadding: [22, 22],
    dayIds: ["day-5", "day-6", "day-7", "day-8", "day-9"],
    bounds: {
      minLat: 45.34,
      maxLat: 45.61,
      minLng: -122.75,
      maxLng: -122.55
    },
    colors: {
      "day-5": "#fc5c33",
      "day-6": "#0f766e",
      "day-7": "#1749db",
      "day-8": "#7c3aed",
      "day-9": "#f4b231"
    }
  }
};

const STOP_COORDINATES = {
  "Arrive SEA, Link light rail to Capitol Hill": { lat: 47.4502, lng: -122.3088, label: "SEA Airport" },
  "Check in at The Boylston Hotel Capitol Hill": { lat: 47.6158, lng: -122.3206, label: "The Boylston Hotel" },
  "Tailwind Cafe at Good Weather": { lat: 47.618, lng: -122.3209, label: "Tailwind Cafe" },
  "Saint John's Bar and Eatery": { lat: 47.6154, lng: -122.3168, label: "Saint John's" },
  "Poquitos Capitol Hill": { lat: 47.6162, lng: -122.3201, label: "Poquitos" },
  "Victrola Coffee Roasters - Capitol Hill": { lat: 47.6185, lng: -122.3212, label: "Victrola" },
  "Pike Place Market light grazing route": { lat: 47.6095, lng: -122.3422, label: "Pike Place Market" },
  "Seattle Waterfront + Olympic Sculpture Park": { lat: 47.6159, lng: -122.3554, label: "Olympic Sculpture Park" },
  "Seattle Starbucks city mug + Pike Place magnet stop": { lat: 47.6101, lng: -122.3426, label: "Seattle Starbucks + souvenirs" },
  "Columbia Center Sky View Observatory": { lat: 47.6042, lng: -122.3305, label: "Sky View Observatory" },
  "Biang Biang Noodles - Capitol Hill": { lat: 47.6177, lng: -122.3204, label: "Biang Biang" },
  "Salt & Straw Capitol Hill": { lat: 47.6147, lng: -122.3184, label: "Salt & Straw" },
  "Walk/transit to Seattle Ferry Terminal": { lat: 47.6027, lng: -122.3381, label: "Seattle Ferry Terminal" },
  "Bainbridge ferry fare + Winslow arrival": { lat: 47.6237, lng: -122.5097, label: "Bainbridge ferry terminal" },
  "Madison Diner breakfast": { lat: 47.6245, lng: -122.5205, label: "Madison Diner" },
  "Waterfront Park & City Dock": { lat: 47.6257, lng: -122.5218, label: "Waterfront Park & City Dock" },
  "Pegasus Coffee House or Commuter Comforts": { lat: 47.6268, lng: -122.5201, label: "Pegasus Coffee House" },
  "Island Cool Ice Cream": { lat: 47.626, lng: -122.5195, label: "Island Cool" },
  "Menya Musashi or Kajiken Capitol Hill dinner": { lat: 47.6171, lng: -122.3169, label: "Kajiken / Menya area" },
  "Rock Box karaoke": { lat: 47.614, lng: -122.318, label: "Rock Box" },
  "Glo's Capitol Hill breakfast": { lat: 47.6157, lng: -122.3192, label: "Glo's" },
  "Phê Vietnamese coffee or Victrola backup": { lat: 47.6118, lng: -122.3172, label: "Phê" },
  "Walgreens Pharmacy Capitol Hill": { lat: 47.6159, lng: -122.3201, label: "Walgreens Broadway" },
  "Check in at Courtyard Portland": { lat: 45.5249, lng: -122.6731, label: "Courtyard Portland" },
  "Powell's City of Books + Life of Pie NW": { lat: 45.5231, lng: -122.6818, label: "Powell's / Pearl start" },
  "Fuller's Coffee Shop breakfast": { lat: 45.5267, lng: -122.6814, label: "Fuller's Coffee Shop" },
  "Washington Park + Portland Japanese Garden": { lat: 45.5186, lng: -122.7081, label: "Portland Japanese Garden" },
  "Tasty Corner PDX lunch": { lat: 45.5114, lng: -122.6837, label: "Tasty Corner" },
  "Powell's City of Books + Hello From Portland": { lat: 45.5232, lng: -122.6816, label: "Powell's / Hello From Portland" },
  "Life of Pie, Powell's-area fallback, or simple downtown dinner": { lat: 45.5297, lng: -122.698, label: "Life of Pie NW" },
  "Coava Coffee Roasters Flagship": { lat: 45.5176, lng: -122.6554, label: "Coava Flagship" },
  "Central Eastside walk: Deadstock / Smith Teamaker / waterfront crossing": { lat: 45.5221, lng: -122.6586, label: "Central Eastside walk" },
  "Hat Yai": { lat: 45.5169, lng: -122.6524, label: "Hat Yai Belmont" },
  "Belmont / Mississippi browse + Nate's Oatmeal Cookies": { lat: 45.548, lng: -122.6751, label: "Mississippi / Nate's" },
  "Stumptown Downtown": { lat: 45.522, lng: -122.6748, label: "Stumptown Downtown" },
  "Portland Saturday Market + Waterfront Park": { lat: 45.5238, lng: -122.6696, label: "Portland Saturday Market" },
  "Eem": { lat: 45.5417, lng: -122.6661, label: "Eem" },
  "Novel Book Bar": { lat: 45.5259, lng: -122.6743, label: "Novel Book Bar" },
  "Tope or rooftop backup near downtown": { lat: 45.5185, lng: -122.6767, label: "Tope" },
  "Heart Coffee or Good Coffee": { lat: 45.5354, lng: -122.6988, label: "Heart Coffee" },
  "Alberta Arts / Mississippi backup loop": { lat: 45.5592, lng: -122.6432, label: "Alberta Arts" },
  "Screen Door, Gabbiano's, or Cubo de Cuba value lunch": { lat: 45.5279, lng: -122.6981, label: "Screen Door Pearl" },
  "Sumo Sushi & Grill AYCE Oregon City dinner detour": { lat: 45.3577, lng: -122.6072, label: "Sumo AYCE Oregon City" },
  "Big Legrowlski open jam social night": { lat: 45.511, lng: -122.6146, label: "Big Legrowlski" },
  "Check out of Courtyard Portland": { lat: 45.5249, lng: -122.6731, label: "Courtyard Portland" },
  "Courtyard Portland to PDX": { lat: 45.5898, lng: -122.5951, label: "PDX Airport" },
  "Airport coffee/snack buffer": { lat: 45.5898, lng: -122.5951, label: "PDX Airport" }
};

const mapRegistry = {};

const baseData = cloneData(window.TRIP_DATA);
assignStopUids(baseData);

let data = cloneData(baseData);
let activeAlternates = new Set();
let currentFilter = "all";
let currentGuide = "reservations";

hydrateFromStorage();
recalculateDayTotalsAndBudget();

const iconMap = {
  coffee: iconCoffee(),
  food: iconFork(),
  cocktails: iconGlass(),
  sightseeing: iconCompass(),
  shopping: iconBag(),
  transit: iconTrain(),
  hotel: iconHotel(),
  alternate: iconSpark()
};

const editorEls = {
  dialog: document.getElementById("editorDialog"),
  form: document.getElementById("editorForm"),
  heading: document.getElementById("editorHeading"),
  mode: document.getElementById("editorMode"),
  targetUid: document.getElementById("editorTargetUid"),
  day: document.getElementById("editorDay"),
  segment: document.getElementById("editorSegment"),
  name: document.getElementById("editorName"),
  type: document.getElementById("editorType"),
  time: document.getElementById("editorTime"),
  leaveTime: document.getElementById("editorLeaveTime"),
  duration: document.getElementById("editorDuration"),
  cost: document.getElementById("editorCost"),
  neighborhood: document.getElementById("editorNeighborhood"),
  bestTime: document.getElementById("editorBestTime"),
  knownFor: document.getElementById("editorKnownFor"),
  notes: document.getElementById("editorNotes"),
  website: document.getElementById("editorWebsite"),
  menu: document.getElementById("editorMenu"),
  route: document.getElementById("editorRoute"),
  openAdd: document.getElementById("openAddStop"),
  exportChanges: document.getElementById("exportChanges"),
  copySummary: document.getElementById("copyChangeSummary"),
  reset: document.getElementById("resetCustomizations"),
  status: document.getElementById("editorStatus"),
  close: document.getElementById("closeEditor"),
  cancel: document.getElementById("cancelEditor")
};

initHero();
renderVisualStrip();
renderSummary();
renderItinerary();
initFilters();
renderBudget();
renderGuide();
initTabs();
renderTransitAndSources();
bindEditorChrome();
initReveal();
refreshExchangeRate();
window.setInterval(refreshExchangeRate, FX_REFRESH_MS);

function cloneData(value) {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}

function hydrateFromStorage() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed?.data?.itinerary && parsed?.data?.budget) {
      data = {
        ...cloneData(baseData),
        ...cloneData(parsed.data),
        meta: { ...cloneData(baseData.meta), ...(parsed.data.meta || {}) },
        budget: { ...cloneData(baseData.budget), ...(parsed.data.budget || {}) },
        transit: parsed.data.transit || cloneData(baseData.transit),
        guides: parsed.data.guides || cloneData(baseData.guides),
        exclusions: parsed.data.exclusions || cloneData(baseData.exclusions),
        sources: parsed.data.sources || cloneData(baseData.sources),
        flights: parsed.data.flights || cloneData(baseData.flights),
        flightMonitor: parsed.data.flightMonitor || cloneData(baseData.flightMonitor)
      };
      assignStopUids(data);
    }
    if (Array.isArray(parsed?.activeAlternates)) {
      activeAlternates = new Set(parsed.activeAlternates);
    }
  } catch (error) {
    console.warn("Could not restore saved itinerary edits.", error);
  }
}

function saveState() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
      data,
      activeAlternates: Array.from(activeAlternates)
    }));
  } catch (error) {
    console.warn("Could not save itinerary edits.", error);
  }
}

function resetState() {
  data = cloneData(baseData);
  assignStopUids(data);
  activeAlternates = new Set();
  recalculateDayTotalsAndBudget();
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Could not clear itinerary edits.", error);
  }
  setStatus("Saved itinerary edits cleared. You are back on the default trip plan.");
}

function assignStopUids(dataset) {
  dataset.itinerary.forEach((day) => {
    day.segments.forEach((segment, segmentIndex) => {
      segment.items.forEach((stop, stopIndex) => {
        if (!stop._uid) {
          stop._uid = `${day.id}-${segmentIndex}-${stopIndex}-${slugify(stop.name)}`;
        }
      });
    });
  });
}

function slugify(value) {
  return String(value || "item")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40) || "item";
}

function findDay(dayId) {
  return data.itinerary.find((day) => day.id === dayId);
}

function findStopContext(uid) {
  for (let dayIndex = 0; dayIndex < data.itinerary.length; dayIndex += 1) {
    const day = data.itinerary[dayIndex];
    for (let segmentIndex = 0; segmentIndex < day.segments.length; segmentIndex += 1) {
      const segment = day.segments[segmentIndex];
      for (let stopIndex = 0; stopIndex < segment.items.length; stopIndex += 1) {
        const stop = segment.items[stopIndex];
        if (stop._uid === uid) {
          return { dayIndex, segmentIndex, stopIndex, day, segment, stop };
        }
      }
    }
  }
  return null;
}

function getBaseTripTotal() {
  return baseData.itinerary.reduce((sum, day) => sum + Number(day.dayTotal || 0), 0);
}

function getCurrentTripTotal() {
  return data.itinerary.reduce((sum, day) => sum + Number(day.dayTotal || 0), 0);
}

function recalculateDayTotalsAndBudget() {
  data.itinerary.forEach((day) => {
    day.dayTotal = day.segments.reduce((daySum, segment) => (
      daySum + segment.items.reduce((segmentSum, stop) => segmentSum + Number(stop.cost || 0), 0)
    ), 0);
  });

  const delta = getCurrentTripTotal() - getBaseTripTotal();
  data.budget.projectedTotal = baseData.budget.projectedTotal + delta;
}

function usdMoney(value) {
  return `$${Math.round(Number(value) || 0).toLocaleString()}`;
}

function usdMoneyPrecise(value) {
  return `$${(Number(value) || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function phpMoney(value) {
  return `PHP ${Math.round((Number(value) || 0) * effectiveUsdToPhpRate).toLocaleString()}`;
}

function money(value) {
  return `${usdMoney(value)} (${phpMoney(value)})`;
}

function moneyPrecise(value) {
  return `${usdMoneyPrecise(value)} (${phpMoney(value)})`;
}

function iconCoffee() {
  return `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 8h10v6a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V8Z" stroke="currentColor" stroke-width="1.8"/><path d="M16 10h1.5a2.5 2.5 0 1 1 0 5H16" stroke="currentColor" stroke-width="1.8"/><path d="M8 4c0 1-1 1.4-1 2.4S8 8 8 8m4-4c0 1-1 1.4-1 2.4S12 8 12 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
}

function iconFork() {
  return `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 3v7M10 3v7M7 7h3M8.5 10v11M16 3c-1.7 2-2.5 4.1-2.5 6.2V13H18V3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function iconGlass() {
  return `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 4h10l-1.8 7.6A4 4 0 0 1 11.3 15H12.7a4 4 0 0 1-3.9-3.4L7 4Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 15v5M9 20h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
}

function iconCompass() {
  return `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.8"/><path d="m15.5 8.5-2.2 6.3-4.8 1.7 2.2-6.3 4.8-1.7Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;
}

function iconBag() {
  return `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 8h12l-1 11H7L6 8Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 9V7a3 3 0 1 1 6 0v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
}

function iconTrain() {
  return `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="6" y="3" width="12" height="13" rx="3" stroke="currentColor" stroke-width="1.8"/><path d="M9 7h6M9 11h6M8 19l2-3m6 3-2-3M7 21h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
}

function iconHotel() {
  return `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 20V6h6v14M10 10h10v10M6.5 9h1M6.5 12h1M6.5 15h1M14 13h2M14 16h2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function iconSpark() {
  return `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 1.9 4.8L19 10l-5.1 2.2L12 17l-1.9-4.8L5 10l5.1-2.2L12 3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;
}

function iconClock() {
  return `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.8"/><path d="M12 8v4l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function iconRoute() {
  return `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="2" stroke="currentColor" stroke-width="1.8"/><circle cx="18" cy="18" r="2" stroke="currentColor" stroke-width="1.8"/><path d="M8 6h5a3 3 0 0 1 3 3v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
}

function initHero() {
  const total = data.budget.projectedTotal;
  const remaining = data.budget.cap - total;
  document.getElementById("heroSpend").textContent = money(total);
  document.getElementById("heroRemaining").textContent = `${money(Math.abs(remaining))} ${remaining >= 0 ? "under target" : "over target"}; ${money(data.budget.absoluteCeiling || data.budget.cap)} absolute ceiling`;
  document.getElementById("budgetHeading").textContent = `Budget snapshot: ${money(data.budget.cap)} target, ${money(data.budget.absoluteCeiling || data.budget.cap)} ceiling`;
  document.getElementById("heroMeter").style.width = `${Math.min(100, Math.max(0, (total / data.budget.cap) * 100))}%`;
  document.getElementById("fxRateDisplay").textContent = `1 USD = ${effectiveUsdToPhpRate.toFixed(4)} PHP`;
  document.getElementById("fxMeta").textContent = `${fxMeta.live ? "Live feed" : "Fallback"} from ${fxMeta.provider}; last update ${fxMeta.updatedLabel}.`;
}

function renderVisualStrip() {
  const strip = document.getElementById("visualStrip");
  if (!strip) return;
  const cards = TRIP_VISUALS.map((item) => `
    <article class="visual-card">
      <a class="visual-card-link image-frame" href="${item.image}" target="_blank" rel="noreferrer" aria-label="Open ${item.name} image">
        <img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async" onerror="handleImageError(this)">
      </a>
      <div class="visual-card-copy">
        <span class="badge">${item.city}</span>
        <h3>${item.name}</h3>
        <p>${item.caption}</p>
      </div>
    </article>
  `).join("");
  strip.innerHTML = `<div class="visual-track">${cards}${cards}</div>`;
}

function getDayVisual(dayId) {
  return DAY_VISUALS[dayId] || TRIP_VISUALS[0];
}

function handleImageError(img) {
  const frame = img.closest(".image-frame") || img.parentElement;
  img.hidden = true;
  img.removeAttribute("src");
  if (!frame || frame.querySelector(".image-fallback")) return;
  const fallback = document.createElement("span");
  fallback.className = "image-fallback";
  fallback.textContent = "Image unavailable";
  frame.appendChild(fallback);
}

function rerenderMoneyViews() {
  initHero();
  renderSummary();
  renderItinerary(currentFilter);
  renderBudget();
}

async function refreshExchangeRate() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD", {
      headers: { Accept: "application/json" }
    });
    if (!response.ok) {
      throw new Error(`FX request failed with ${response.status}`);
    }
    const payload = await response.json();
    const latestRate = Number(payload?.rates?.PHP);
    if (!Number.isFinite(latestRate) || latestRate <= 0) {
      throw new Error("FX payload missing PHP rate.");
    }
    usdToPhpRate = latestRate;
    effectiveUsdToPhpRate = usdToPhpRate * (1 + FOREIGN_TRANSACTION_FEE_RATE);
    fxMeta = {
      provider: "ExchangeRate-API",
      updatedLabel: payload.time_last_update_utc || new Date().toLocaleString(),
      live: true
    };
  } catch (error) {
    console.warn("Could not refresh USD to PHP exchange rate.", error);
    usdToPhpRate = FALLBACK_USD_TO_PHP_RATE;
    effectiveUsdToPhpRate = usdToPhpRate * (1 + FOREIGN_TRANSACTION_FEE_RATE);
    fxMeta = {
      provider: "saved fallback snapshot",
      updatedLabel: "May 9, 2026",
      live: false
    };
  }
  rerenderMoneyViews();
}

function getHotelBase(day) {
  if (day.city.includes("Seattle")) return data.meta.travelerBase.seattle;
  if (day.city.includes("Portland")) return data.meta.travelerBase.portland;
  return "";
}

function getDayAlternates(day) {
  return data.exclusions.filter((item) => activeAlternates.has(item.name) && item.bestDay === day.id);
}

function getFlightJourneysForDay(dayId) {
  return (data.flights?.journeys || []).filter((journey) => journey.tripDayId === dayId);
}

function getFutureFlightJourneys() {
  return (data.flights?.journeys || []).filter((journey) => !journey.tripDayId);
}

function stopMatches(stop, filter, day) {
  if (filter === "all") return true;
  if (filter === "Seattle") return day.city.includes("Seattle");
  if (filter === "Portland") return day.city.includes("Portland");
  return stop.type === filter || stop.alternateType === filter;
}

function renderSummary() {
  const days = data.itinerary.length;
  const seattleSpend = data.itinerary.filter((day) => day.city.includes("Seattle")).reduce((sum, day) => sum + day.dayTotal, 0);
  const portlandSpend = data.itinerary.filter((day) => day.city.includes("Portland")).reduce((sum, day) => sum + day.dayTotal, 0);
  const cards = [
    ["Trip days", days],
    ["Projected total", money(data.budget.projectedTotal)],
    ["Airfare (excluded)", moneyPrecise(data.flights?.airfareTotal || 0)],
    ["Target cap", money(data.budget.cap)],
    ["Seattle/intercity", money(seattleSpend)],
    ["Portland/departure", money(portlandSpend)]
  ];
  document.getElementById("summaryGrid").innerHTML = cards.map(([label, value], index) => `
    <article class="summary-card" data-reveal style="transition-delay:${index * 40}ms">
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `).join("");
}

function renderFlightLeg(leg) {
  return `
    <article class="flight-leg">
      <div class="flight-route">
        <div class="flight-route-points">
          <div class="flight-point depart">
            <strong>${leg.from.code}</strong>
            <span>${leg.from.city}</span>
            <time>${leg.departureTime}</time>
          </div>
          <div class="flight-connector">${leg.duration || "Flight"}${leg.connectionNote ? `<br>${leg.connectionNote}` : ""}</div>
          <div class="flight-point arrive">
            <strong>${leg.to.code}</strong>
            <span>${leg.to.city}</span>
            <time>${leg.arrivalTime}</time>
          </div>
        </div>
      </div>
      <div class="flight-leg-card">
        <h4>${leg.flightNumber}</h4>
        <strong>${leg.aircraft || leg.operator || ""}</strong>
        <div class="flight-leg-meta">
          ${leg.seat ? `<span>Seat: ${leg.seat}</span>` : ""}
          ${leg.cabin ? `<span>Class: ${leg.cabin}</span>` : ""}
          ${leg.meals ? `<span>Meals: ${leg.meals}</span>` : ""}
          ${leg.mileage ? `<span>${leg.mileage}</span>` : ""}
          ${leg.operator ? `<span>${leg.operator}</span>` : ""}
        </div>
      </div>
    </article>
  `;
}

function renderFlightJourney(journey) {
  return `
    <article class="flight-journey" data-reveal>
      <div class="flight-journey-head">
        <div>
          <span class="badge">${journey.kind}</span>
          <h3>${journey.title}</h3>
          <p>${journey.dateLabel}. ${journey.visibilityNote}</p>
        </div>
        <span class="flight-airfare">${journey.ticketCost != null ? moneyPrecise(journey.ticketCost) : "Cost not shown"}</span>
      </div>
      <div class="flight-alert-banner">
        <strong>${journey.statusLabel}</strong>
        <span>${journey.alertCopy}</span>
      </div>
      <div class="flight-legs">
        ${journey.legs.map((leg) => renderFlightLeg(leg)).join("")}
      </div>
      <div class="flight-journey-links">
        ${journey.statusSource ? `<a class="link-button" href="${journey.statusSource}" target="_blank" rel="noreferrer">Flight status source</a>` : ""}
        ${journey.airportSource ? `<a class="link-button" href="${journey.airportSource}" target="_blank" rel="noreferrer">Airport status board</a>` : ""}
      </div>
    </article>
  `;
}

function renderFlights() {
  const board = document.getElementById("flightBoard");
  const futureBoard = document.getElementById("futureFlightBoard");
  const mainJourneys = (data.flights?.journeys || []).filter((journey) => journey.tripDayId);
  const futureJourneys = getFutureFlightJourneys();
  const monitor = data.flightMonitor || {};

  board.innerHTML = `
    <section class="flight-shell" data-reveal>
      <div class="flight-shell-head">
        <div>
          <p class="eyebrow">Booked flights</p>
          <h2>Flight timing and airport buffers</h2>
          <p class="flight-shell-copy">Airfare stays outside the $800 trip budget, but the flight board is visible here so airport timing, layovers, and monitoring are all easy to scan.</p>
        </div>
        <article class="budget-summary-card airfare">
          <span class="budget-kicker">Airfare visibility</span>
          <div class="budget-capline">
            <strong>${moneyPrecise(data.flights?.airfareTotal || 0)}</strong>
            <p>Shown for visibility only. This total is excluded from the Seattle and Portland activity budget.</p>
          </div>
        </article>
      </div>
      <div class="flight-alert-banner">
        <strong>${monitor.displayTitle || "15-minute flight watch"}</strong>
        <span>${monitor.displayNote || ""}</span>
      </div>
      <div class="flight-journeys">
        ${mainJourneys.map((journey) => renderFlightJourney(journey)).join("")}
      </div>
    </section>
  `;

  futureBoard.innerHTML = futureJourneys.length ? `
    <section class="flight-shell future-flight-shell" data-reveal>
      <div class="flight-shell-head">
        <div>
          <p class="eyebrow">Additional booking</p>
          <h2>Future booked flight kept for visibility</h2>
          <p class="flight-shell-copy">This journey sits outside the November 1-9, 2026 trip window, but it is included here because it appeared in your screenshots and you wanted every booked flight visible.</p>
        </div>
      </div>
      <div class="flight-journeys">
        ${futureJourneys.map((journey) => renderFlightJourney(journey)).join("")}
      </div>
    </section>
  ` : "";
}

function renderDayFlightSummary(day) {
  const journeys = getFlightJourneysForDay(day.id);
  if (!journeys.length) return "";
  return `
    <section class="segment">
      <div class="segment-title">${iconTrain()}<span>Flight plan for this day</span></div>
      ${journeys.map((journey) => `
        <article class="stop is-alternate" data-type="flight" data-reveal>
          <div class="stop-top">
            <div>
              <span class="badge">flight</span>
              <h3>${journey.title}</h3>
              <p>${journey.dateLabel}</p>
            </div>
            <strong>${journey.ticketCost != null ? moneyPrecise(journey.ticketCost) : "Cost not shown"}</strong>
          </div>
          <p>${journey.visibilityNote}</p>
          <div class="details">
            <div class="detail"><b>Airport leave-by</b>${journey.airportLeaveBy}</div>
            <div class="detail"><b>Status watch</b>${journey.statusLabel}</div>
            <div class="detail"><b>Monitor cadence</b>${data.flightMonitor?.cadenceLabel || "15-minute checks"}</div>
            <div class="detail"><b>Budget treatment</b>Airfare is visible only and excluded from the $800 trip target.</div>
          </div>
          <div class="card-actions">
            ${journey.statusSource ? `<a class="link-button" href="${journey.statusSource}" target="_blank" rel="noreferrer">Flight status</a>` : ""}
            ${journey.airportSource ? `<a class="link-button" href="${journey.airportSource}" target="_blank" rel="noreferrer">Airport board</a>` : ""}
            <a class="link-button" href="#flightBoard">Open full flight details</a>
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

function timeStringToMinutes(timeStr) {
  if (!timeStr) return Infinity;
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM|am|pm)?/);
  if (!match) return Infinity;
  let [, hours, minutes, period] = match;
  hours = parseInt(hours, 10);
  minutes = parseInt(minutes, 10);
  if (period && period.toUpperCase() === "PM" && hours !== 12) hours += 12;
  if (period && period.toUpperCase() === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

function flattenDayEvents(day) {
  const allEvents = [];
  day.segments.forEach((segment) => {
    segment.items.forEach((item) => {
      allEvents.push({
        ...item,
        _segmentLabel: segment.label,
        _sortKey: timeStringToMinutes(item.time)
      });
    });
  });
  allEvents.sort((a, b) => a._sortKey - b._sortKey);
  return allEvents;
}

function renderTiming(stop) {
  const pills = [
    stop.time ? `<span class="timing-pill">${iconClock()}<span>Planned: ${stop.time}</span></span>` : "",
    stop.leaveTime ? `<span class="timing-pill">${iconRoute()}<span>Leave by: ${stop.leaveTime}</span></span>` : "",
    stop.duration ? `<span class="timing-pill">${iconClock()}<span>Duration: ${stop.duration}</span></span>` : ""
  ].filter(Boolean).join("");
  return pills ? `<div class="timing-row">${pills}</div>` : "";
}

function renderEditorActions(stop, options = {}) {
  if (options.isAlternate) {
    return `<button class="alternate-remove focus-ring" type="button" data-remove-alternate="${escapeAttribute(stop.name)}">Remove alternate</button>`;
  }

  return [
    `<button class="stop-action focus-ring" type="button" data-editor-action="replace" data-stop-uid="${escapeAttribute(stop._uid)}">Replace stop</button>`,
    `<button class="stop-action focus-ring" type="button" data-editor-action="insert-after" data-stop-uid="${escapeAttribute(stop._uid)}">Add after</button>`,
    `<button class="stop-action focus-ring" type="button" data-editor-action="remove" data-stop-uid="${escapeAttribute(stop._uid)}">Remove</button>`,
    stop.website ? `<a class="link-button" href="${stop.website}" target="_blank" rel="noreferrer">Website</a>` : "",
    stop.menu ? `<a class="link-button" href="${stop.menu}" target="_blank" rel="noreferrer">Menu</a>` : "",
    stop.route ? `<a class="link-button" href="${stop.route}" target="_blank" rel="noreferrer">Map route</a>` : ""
  ].filter(Boolean).join("");
}

function renderStop(stop, options = {}) {
  const type = stop.alternateType || stop.type;
  const icon = iconMap[type] || iconMap.alternate;
  const costValue = options.isAlternate && stop.estimatedCost != null ? stop.estimatedCost : stop.cost;
  const badgeLabel = stop.anchorType ? stop.anchorType.replace(/-/g, " ") : (options.isAlternate ? "alternate option" : type);

  if (options.isChip) {
    const shortNote = stop.notes ? stop.notes.substring(0, 80) + (stop.notes.length > 80 ? "..." : "") : "";
    return `
      <article class="stop stop--chip ${options.isAlternate ? "is-alternate" : ""}" data-type="${type}" data-stop-uid="${escapeAttribute(stop._uid)}">
        <div class="chip-timing">${stop.time || ""}</div>
        <div class="chip-body">
          <div class="chip-title">${stop.name}</div>
          <div class="chip-meta">${[stop.neighborhood, stop.duration].filter(Boolean).join(" · ")}${costValue != null ? ` · ${money(costValue)}` : ""}</div>
          ${shortNote ? `<div class="chip-note">${shortNote}</div>` : ""}
        </div>
        <button class="chip-kebab focus-ring" type="button" data-kebab-for="${escapeAttribute(stop._uid)}" aria-label="Actions for ${escapeAttribute(stop.name)}">⋮</button>
      </article>
    `;
  }

  const details = [
    ["Cost", costValue != null ? money(costValue) : ""],
    ["Best time", stop.bestTime],
    ["Hours", stop.hours],
    ["Reservation", stop.reservation],
    ["Payment", stop.payment],
    ["Known for", stop.knownFor],
    ["Sentiment", stop.sentiment],
    ["Happy hour", stop.happyHour],
    ["Beans", stop.beans],
    ["Tax/tip", stop.taxTipIncluded],
    ["Tip guidance", stop.tipGuidance],
    ["Social fit", stop.socialFit],
    ["Safety note", stop.safetyNote],
    ["Hotel base", stop.hotelContext],
    ["Alternate for", stop.alternateFor]
  ].filter(([, value]) => value);

  return `
    <article class="stop ${options.isAlternate ? "is-alternate" : ""}" data-type="${type}" data-reveal>
      <div class="stop-top">
        <div>
          <span class="badge">${icon}<span>${labelize(badgeLabel)}</span></span>
          <h3>${stop.name}</h3>
          <p>${stop.neighborhood || ""}</p>
        </div>
        ${costValue != null ? `<strong>${money(costValue)}</strong>` : ""}
      </div>
      ${renderTiming(stop)}
      ${stop.notes ? `<p>${stop.notes}</p>` : ""}
      ${stop.recommended ? `<p><b>Recommended:</b> ${stop.recommended}</p>` : ""}
      ${stop.status ? `<p><b>Status:</b> ${stop.status}</p>` : ""}
      <div class="details">
        ${details.map(([label, value]) => `<div class="detail"><b>${label}</b>${value}</div>`).join("")}
      </div>
      <div class="card-actions">${renderEditorActions(stop, options)}</div>
    </article>
  `;
}

function renderAlternates(day, filter) {
  const alternates = getDayAlternates(day).filter((item) => stopMatches(item, filter, day));
  return `
    <section class="segment alternate-section">
      <div class="segment-title">${iconSpark()}<span>Alternate options</span></div>
      ${alternates.length
        ? alternates.map((item) => renderStop(item, { isAlternate: true })).join("")
        : `<p class="alternate-empty">No alternates added for this day yet. Use the Excluded tab to add one.</p>`}
    </section>
  `;
}

function renderItinerary(filter = "all") {
  currentFilter = filter;
  const daysEl = document.getElementById("days");
  const dayHtml = data.itinerary.map((day, index) => {
    const visual = getDayVisual(day.id);
    const allEvents = flattenDayEvents(day);
    const visibleEvents = allEvents.filter((stop) => stopMatches(stop, filter, day));
    const hotelBase = getHotelBase(day);
    const alternates = renderAlternates(day, filter);
    const flightSummary = renderDayFlightSummary(day);

    if (!visibleEvents.length && !getDayAlternates(day).length && !flightSummary) return "";

    const timelineHtml = visibleEvents.map((stop, i) => {
      const prevSegment = i > 0 ? visibleEvents[i - 1]._segmentLabel : null;
      const currentSegment = stop._segmentLabel;
      const divider = prevSegment && prevSegment !== currentSegment
        ? `<div class="timeline-divider">${currentSegment} ▼</div>`
        : "";
      return divider + renderStop(stop, { isChip: true });
    }).join("");

    const stopCount = visibleEvents.length;

    return `
      <article class="day-card" data-reveal style="transition-delay:${Math.min(index * 40, 220)}ms">
        <header class="day-head focus-ring" tabindex="0" role="button" aria-expanded="false" aria-label="Toggle ${day.date}">
          <div class="day-visual image-frame">
            <img src="${visual.image}" alt="${visual.name}" loading="lazy" decoding="async" onerror="handleImageError(this)">
          </div>
          <div>
            <span class="badge">${day.city}</span>
            <h3>${day.date}: ${day.title}</h3>
            <p>${day.theme}. Weather plan: ${day.weatherPlan}</p>
            <div class="day-meta">
              ${hotelBase ? `<span class="badge">${iconHotel()}<span>${hotelBase}</span></span>` : ""}
              <span class="badge">${iconClock()}<span>${stopCount} stops</span></span>
            </div>
            <span class="day-toggle">Open timing and route details</span>
          </div>
          <div class="day-total">${money(day.dayTotal)}<br><span class="badge">daily estimate</span></div>
        </header>
        <div class="day-timeline">${flightSummary}${timelineHtml}</div>
        <div class="day-detail-panel" data-detail-for="${escapeAttribute(day.id)}" hidden></div>
        ${alternates}
      </article>
    `;
  }).join("");
  daysEl.innerHTML = dayHtml || `<p>No stops match this filter.</p>`;

  document.querySelectorAll(".day-head").forEach((head) => {
    head.addEventListener("click", () => toggleDay(head));
    head.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleDay(head);
      }
    });
  });

  bindStopActions();
  bindAlternateRemove();
  renderFlights();
  initReveal();
}

function toggleDay(head) {
  const card = head.closest(".day-card");
  card.classList.toggle("open");
  head.setAttribute("aria-expanded", card.classList.contains("open") ? "true" : "false");
}

function initFilters() {
  document.querySelectorAll(".chip").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach((chip) => chip.classList.remove("active"));
      button.classList.add("active");
      renderItinerary(button.dataset.filter);
    });
  });
}

function renderBudget() {
  const projected = data.budget.projectedTotal;
  const cap = data.budget.cap;
  const ceiling = data.budget.absoluteCeiling || cap;
  const remaining = cap - projected;
  const overage = projected - cap;
  const capRatio = Math.min(100, Math.max(0, (projected / cap) * 100));

  document.getElementById("budgetSummary").innerHTML = `
    <article class="budget-summary-card main">
      <span class="budget-kicker">Budget status</span>
      <strong class="budget-total">${money(projected)}</strong>
      <p class="budget-copy">${money(Math.abs(remaining))} ${remaining >= 0 ? "under target" : "over target"} with ${money(ceiling)} set as the hard ceiling for the trip.</p>
      <div class="budget-main-meter" aria-hidden="true">
        <span style="width:${capRatio}%"></span>
      </div>
    </article>
    <article class="budget-summary-card">
      <span class="budget-kicker">Target cap</span>
      <div class="budget-capline">
        <strong>${money(cap)}</strong>
        <p>Primary trip budget before airfare and hotels.</p>
      </div>
    </article>
    <article class="budget-summary-card">
      <span class="budget-kicker">${projected <= ceiling ? "Buffer left" : "Above ceiling"}</span>
      <div class="budget-capline">
        <strong>${money(Math.abs(ceiling - projected))}</strong>
        <p>${projected <= ceiling ? "Remaining before the hard ceiling is hit." : "Trip spend now exceeds the hard ceiling."}</p>
      </div>
    </article>
    <article class="budget-summary-card airfare">
      <span class="budget-kicker">Airfare</span>
      <div class="budget-capline">
        <strong>${moneyPrecise(data.flights?.airfareTotal || 0)}</strong>
        <p>Visible here for planning clarity, but excluded from the activity budget and its category meters.</p>
      </div>
    </article>
  `;

  const colors = ["#fc5c33", "#0f766e", "#1749db", "#f4b231", "#7c3aed", "#0284c7", "#64748b"];
  document.getElementById("budgetList").innerHTML = data.budget.categories.map((category, index) => {
    const share = (category.amount / cap) * 100;
    const normalized = Math.min(100, Math.max(6, share));
    const color = colors[index % colors.length];
    return `
      <article class="budget-item" style="--budget-color:${color}">
        <div class="budget-item-top">
          <div>
            <h3>${category.name}</h3>
            <strong>${money(category.amount)}</strong>
          </div>
          <span class="budget-item-share">${Math.round(share)}%</span>
        </div>
        <div class="budget-gauge" aria-hidden="true">
          <span class="budget-gauge-fill" style="width:${normalized}%"></span>
        </div>
        <div class="budget-meter-labels">
          <span>Share of target</span>
          <span>${usdMoney(category.amount)} of ${usdMoney(cap)}</span>
        </div>
        <p>${category.note}</p>
      </article>
    `;
  }).join("");
}

function renderGuide(type = "reservations") {
  currentGuide = type;
  const panel = document.getElementById("guidePanel");
  if (type === "exclusions") {
    panel.innerHTML = data.exclusions.map((item, index) => `
      <article class="guide-card exclusion-card" data-reveal style="transition-delay:${Math.min(index * 20, 180)}ms">
        <h3>${item.name}</h3>
        <p><b>Why skipped:</b> ${item.reason}</p>
        ${item.alternateFor ? `<p><b>Best alternate for:</b> ${item.alternateFor}</p>` : ""}
        ${item.bestDay ? `<p><b>Suggested day:</b> ${dayLabel(item.bestDay)}</p>` : ""}
        ${item.notes ? `<p><b>Use case:</b> ${item.notes}</p>` : ""}
        <div class="guide-card-actions">
          <button class="alternate-toggle focus-ring" type="button" data-add-alternate="${escapeAttribute(item.name)}">${activeAlternates.has(item.name) ? "Added to itinerary" : "Add as alternate"}</button>
          <button class="stop-action focus-ring" type="button" data-exclusion-action="add-stop" data-exclusion-name="${escapeAttribute(item.name)}">Add as real stop</button>
          ${item.link ? `<a class="link-button" href="${item.link}" target="_blank" rel="noreferrer">Open source</a>` : ""}
        </div>
      </article>
    `).join("");
    bindAlternateAdd();
    bindExclusionActions();
    initReveal();
    return;
  }

  const content = data.guides[type] || [];
  panel.innerHTML = content.map((item, index) => {
    if (typeof item === "string") {
      return `<article class="guide-card" data-reveal style="transition-delay:${Math.min(index * 20, 180)}ms"><p>${item}</p></article>`;
    }
    const lines = Object.entries(item)
      .filter(([key]) => key !== "link")
      .map(([key, value]) => `<p><b>${labelize(key)}:</b> ${value}</p>`)
      .join("");
    return `
      <article class="guide-card" data-reveal style="transition-delay:${Math.min(index * 20, 180)}ms">
        <h3>${item.name || "Note"}</h3>
        ${lines}
        ${item.link ? `<a class="link-button" href="${item.link}" target="_blank" rel="noreferrer">Open link</a>` : ""}
      </article>
    `;
  }).join("");
  initReveal();
}

function labelize(key) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
}

function dayLabel(dayId) {
  const day = findDay(dayId);
  return day ? `${day.date} - ${day.title}` : dayId;
}

function bindAlternateAdd() {
  document.querySelectorAll("[data-add-alternate]").forEach((button) => {
    button.addEventListener("click", () => {
      activeAlternates.add(button.dataset.addAlternate);
      saveState();
      renderGuide("exclusions");
      renderItinerary(currentFilter);
    });
  });
}

function bindAlternateRemove() {
  document.querySelectorAll("[data-remove-alternate]").forEach((button) => {
    button.addEventListener("click", () => {
      activeAlternates.delete(button.dataset.removeAlternate);
      saveState();
      renderItinerary(currentFilter);
      if (currentGuide === "exclusions") {
        renderGuide("exclusions");
      }
    });
  });
}

function initTabs() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
      button.classList.add("active");
      renderGuide(button.dataset.tab);
    });
  });
}

function renderTransitAndSources() {
  renderTripAtlas();
  const verificationSummary = data.verificationSummary || {};
  const watches = verificationSummary.watches || [];
  const verificationHeading = document.getElementById("verificationHeading");
  const verificationCopy = document.getElementById("verificationCopy");
  const verificationWatchSummary = document.getElementById("verificationWatchSummary");

  if (verificationHeading) {
    const overallLabel = verificationSummary.overallLabel || "Last verified";
    verificationHeading.textContent = `${overallLabel}: ${data.meta.verifiedOn}`;
  }

  if (verificationCopy) {
    verificationCopy.textContent = watches.length
      ? "Latest scheduled watch results stay visible here, so the verification date cannot drift away from the current trip data."
      : "Current source links for fares, flights, hours, and route assumptions.";
  }

  if (verificationWatchSummary) {
    const statusLabels = {
      "no-material-updates": "No material updates",
      "material-update": "Material update logged",
      "monitor-only": "Monitor only"
    };

    verificationWatchSummary.innerHTML = watches.map((watch, index) => `
      <article class="transit-card verification-card" data-reveal style="transition-delay:${index * 25}ms">
        <span class="badge">${statusLabels[watch.status] || watch.status}</span>
        <h3>${watch.label}</h3>
        <p><b>Checked:</b> ${watch.checkedOn}</p>
        <p>${watch.note}</p>
      </article>
    `).join("");
  }

  document.getElementById("transitCards").innerHTML = data.transit.map((item, index) => `
    <article class="transit-card" data-reveal style="transition-delay:${index * 25}ms">
      <span class="badge">${item.city}</span>
      <h3>${item.system}</h3>
      <p><b>Fare:</b> ${item.fare}</p>
      <p>${item.recommendation}</p>
      <a class="link-button" href="${item.link}" target="_blank" rel="noreferrer">Transit source</a>
    </article>
  `).join("");

  document.getElementById("sourcesList").innerHTML = data.sources.map((source, index) => `
    <article class="source-card" data-reveal style="transition-delay:${Math.min(index * 15, 180)}ms">
      <h3>${source.label}</h3>
      <a href="${source.url}" target="_blank" rel="noreferrer">${source.url}</a>
    </article>
  `).join("");
}

function renderTripAtlas() {
  const atlas = document.getElementById("tripAtlas");
  if (!atlas) return;

  atlas.innerHTML = `
    <article class="atlas-card" data-reveal>
      <div class="atlas-head">
        <div>
          <span class="badge">Seattle + Bainbridge</span>
          <h3>Hotel-to-ferry-to-Capitol Hill flow</h3>
          <p>Shows how tight the Capitol Hill cluster is, where the Bainbridge day breaks out, and which Seattle moves are still walk-first.</p>
        </div>
        <div id="${TRIP_MAP_CONFIG.seattle.summaryId}" class="atlas-summary"></div>
      </div>
      <div id="${TRIP_MAP_CONFIG.seattle.mapId}" class="atlas-map" aria-label="Seattle and Bainbridge itinerary map"></div>
    </article>
    <article class="atlas-card" data-reveal>
      <div class="atlas-head">
        <div>
          <span class="badge">Portland</span>
          <h3>Courtyard Portland base, eastside swings, airport departure</h3>
          <p>Shows what stays close to the hotel, where you start needing transit, and how far the outer detours really push the route.</p>
        </div>
        <div id="${TRIP_MAP_CONFIG.portland.summaryId}" class="atlas-summary"></div>
      </div>
      <div id="${TRIP_MAP_CONFIG.portland.mapId}" class="atlas-map" aria-label="Portland itinerary map"></div>
    </article>
  `;

  renderCityAtlas("seattle");
  renderCityAtlas("portland");
  initReveal();
}

function renderCityAtlas(scopeKey) {
  if (typeof window.L === "undefined") return;
  const config = TRIP_MAP_CONFIG[scopeKey];
  const container = document.getElementById(config.mapId);
  const summary = document.getElementById(config.summaryId);
  if (!container || !summary) return;

  if (mapRegistry[scopeKey]) {
    mapRegistry[scopeKey].remove();
  }

  const map = window.L.map(container, {
    zoomControl: true,
    scrollWheelZoom: false
  }).setView(config.center, config.zoom);

  mapRegistry[scopeKey] = map;

  window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap"
  }).addTo(map);

  const routeDays = config.dayIds
    .map((dayId) => data.itinerary.find((day) => day.id === dayId))
    .filter(Boolean)
    .map((day) => buildRouteDay(day, config));

  const visiblePoints = [];
  const seenMarkers = new Set();

  routeDays.forEach((routeDay) => {
    if (routeDay.points.length >= 2) {
      const polyline = window.L.polyline(routeDay.points.map((point) => [point.lat, point.lng]), {
        color: routeDay.color,
        weight: 5,
        opacity: 0.9
      }).addTo(map);
      polyline.bindPopup(`
        <strong>${routeDay.day.date}: ${routeDay.day.title}</strong><br>
        ${routeDay.points.length} mapped stops<br>
        Approx route distance: ${routeDay.distanceMiles.toFixed(1)} mi<br>
        ${routeDay.walkability}
      `);
    }

    routeDay.points.forEach((point, index) => {
      const markerKey = `${point.name}-${point.lat}-${point.lng}`;
      visiblePoints.push([point.lat, point.lng]);
      if (seenMarkers.has(markerKey)) return;
      seenMarkers.add(markerKey);
      const marker = window.L.circleMarker([point.lat, point.lng], {
        radius: point.type === "hotel" ? 8 : 6,
        color: routeDay.color,
        weight: 2,
        fillColor: "#ffffff",
        fillOpacity: 0.95
      }).addTo(map);
      marker.bindPopup(`
        <strong>${point.name}</strong><br>
        ${point.label || point.name}<br>
        ${point.dayDate}: ${point.dayTitle}<br>
        ${point.type ? `Type: ${labelize(point.type)}` : ""}
      `);
      if (index === 0) {
        marker.bindTooltip(routeDay.day.id === "day-3" ? "Bainbridge start" : "Route anchor", { direction: "top" });
      }
    });
  });

  if (visiblePoints.length) {
    map.fitBounds(visiblePoints, { padding: config.boundsPadding });
  }

  summary.innerHTML = routeDays.map((routeDay) => `
    <button class="atlas-day-pill" type="button" data-map-scope="${scopeKey}" data-map-day="${routeDay.day.id}" style="--atlas-color:${routeDay.color}">
      <span>${routeDay.day.date}</span>
      <strong>${routeDay.distanceMiles.toFixed(1)} mi</strong>
      <em>${routeDay.walkability}</em>
    </button>
  `).join("");

  summary.querySelectorAll("[data-map-day]").forEach((button) => {
    button.addEventListener("click", () => {
      const routeDay = routeDays.find((item) => item.day.id === button.dataset.mapDay);
      if (!routeDay || !routeDay.points.length) return;
      map.fitBounds(routeDay.points.map((point) => [point.lat, point.lng]), { padding: [28, 28] });
    });
  });
}

function buildRouteDay(day, config) {
  const points = [];
  day.segments.forEach((segment) => {
    segment.items.forEach((stop) => {
      const coordinate = STOP_COORDINATES[stop.name];
      if (!coordinate) return;
      if (!coordinateInScope(coordinate, config.bounds)) return;
      const previous = points[points.length - 1];
      if (previous && previous.name === stop.name) return;
      points.push({
        ...coordinate,
        name: stop.name,
        type: stop.type,
        dayDate: day.date,
        dayTitle: day.title
      });
    });
  });

  const distanceMiles = calculateRouteMiles(points);
  return {
    day,
    color: config.colors[day.id] || "#1749db",
    points,
    distanceMiles,
    walkability: describeWalkability(points, distanceMiles)
  };
}

function coordinateInScope(coordinate, bounds) {
  if (!bounds) return true;
  return coordinate.lat >= bounds.minLat
    && coordinate.lat <= bounds.maxLat
    && coordinate.lng >= bounds.minLng
    && coordinate.lng <= bounds.maxLng;
}

function calculateRouteMiles(points) {
  let distance = 0;
  for (let index = 1; index < points.length; index += 1) {
    distance += haversineMiles(points[index - 1], points[index]);
  }
  return distance;
}

function describeWalkability(points, totalMiles) {
  if (points.length < 2) return "Single-anchor day";
  let walkableSegments = 0;
  let longSegments = 0;
  for (let index = 1; index < points.length; index += 1) {
    const legMiles = haversineMiles(points[index - 1], points[index]);
    if (legMiles <= 1.2) walkableSegments += 1;
    if (legMiles >= 3) longSegments += 1;
  }
  const totalSegments = points.length - 1;
  if (walkableSegments / totalSegments >= 0.6 && longSegments === 0) return "Mostly walkable";
  if (longSegments >= 2 || totalMiles >= 12) return "Transit-heavy";
  return "Mixed walk + transit";
}

function haversineMiles(a, b) {
  const toRadians = (value) => value * (Math.PI / 180);
  const earthRadiusMiles = 3958.8;
  const latDelta = toRadians(b.lat - a.lat);
  const lngDelta = toRadians(b.lng - a.lng);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);
  const haversine = Math.sin(latDelta / 2) ** 2
    + Math.cos(lat1) * Math.cos(lat2) * Math.sin(lngDelta / 2) ** 2;
  return 2 * earthRadiusMiles * Math.asin(Math.sqrt(haversine));
}

function escapeAttribute(value) {
  return String(value).replace(/"/g, "&quot;");
}

function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("revealed"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function renderDetailPanel(stop, day) {
  const type = stop.alternateType || stop.type;
  const icon = iconMap[type] || iconMap.alternate;
  const badgeLabel = stop.anchorType ? stop.anchorType.replace(/-/g, " ") : type;
  const costValue = stop.cost;

  const linksHtml = [
    stop.website ? `<a class="link-button" href="${stop.website}" target="_blank" rel="noreferrer">Website</a>` : "",
    stop.menu ? `<a class="link-button" href="${stop.menu}" target="_blank" rel="noreferrer">Menu</a>` : "",
    stop.route ? `<a class="link-button" href="${stop.route}" target="_blank" rel="noreferrer">Map route</a>` : ""
  ].filter(Boolean).join("");

  const actionsHtml = [
    `<button class="stop-action focus-ring" type="button" data-editor-action="replace" data-stop-uid="${escapeAttribute(stop._uid)}">Replace stop</button>`,
    `<button class="stop-action focus-ring" type="button" data-editor-action="insert-after" data-stop-uid="${escapeAttribute(stop._uid)}">Add after</button>`,
    `<button class="stop-action focus-ring" type="button" data-editor-action="remove" data-stop-uid="${escapeAttribute(stop._uid)}">Remove</button>`
  ].filter(Boolean).join("");

  const mapContainerId = `chip-map-${stop._uid.replace(/\W/g, '_')}`;
  const hasCoordinates = stop.name && STOP_COORDINATES[stop.name];

  return `
    <div class="stop-detail">
      <div class="stop-detail-header">
        <div class="stop-detail-title">
          <h4>${stop.name}</h4>
          <div class="stop-detail-location">${stop.neighborhood || ""}</div>
        </div>
        ${costValue != null ? `<div class="stop-detail-cost">${money(costValue)}</div>` : ""}
      </div>
      ${hasCoordinates ? `<div id="${mapContainerId}" class="stop-detail-map" style="height: 200px; border-radius: 8px; margin-bottom: 12px; background: #f0f0f0;"></div>` : ""}
      ${stop.time || stop.duration || stop.leaveTime ? `
        <div class="stop-detail-timing">
          ${stop.time ? `<span>Planned: ${stop.time}</span>` : ""}
          ${stop.duration ? `<span>Duration: ${stop.duration}</span>` : ""}
          ${stop.leaveTime ? `<span>Leave by: ${stop.leaveTime}</span>` : ""}
        </div>
      ` : ""}
      ${stop.notes ? `<div class="stop-detail-notes">${stop.notes}</div>` : ""}
      ${linksHtml ? `<div class="stop-detail-links">${linksHtml}</div>` : ""}
      ${actionsHtml ? `<div class="stop-detail-actions">${actionsHtml}</div>` : ""}
      ${hasCoordinates && stop.route ? `<div style="text-align:center;margin-top:8px;"><a class="link-button" href="${stop.route}" target="_blank" rel="noopener" style="display:inline-block;">Get directions →</a></div>` : ""}
    </div>
  `;

}

function bindStopActions() {
  document.querySelectorAll("[data-editor-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const action = button.dataset.editorAction;
      const uid = button.dataset.stopUid;
      if (action === "remove") {
        removeStop(uid);
        return;
      }
      openEditor(action, { uid });
    });
  });

  document.querySelectorAll(".stop--chip").forEach((chip) => {
    chip.addEventListener("click", (event) => {
      if (event.target.closest(".chip-kebab")) return;
      event.stopPropagation();

      const uid = chip.dataset.stopUid;
      const card = chip.closest(".day-card");
      const dayId = card.querySelector("[data-detail-for]")?.dataset.detailFor;
      const day = data.itinerary.find((d) => d.id === dayId);

      if (!day) return;

      const allEvents = flattenDayEvents(day);
      const stop = allEvents.find((s) => s._uid === uid);
      if (!stop) return;

      const panel = card.querySelector(".day-detail-panel");
      const isAlreadySelected = panel.hasAttribute("data-selected-stop") && panel.getAttribute("data-selected-stop") === uid;

      if (isAlreadySelected) {
        chip.classList.remove("stop--selected");
        panel.innerHTML = "";
        panel.setAttribute("hidden", "");
      } else {
        card.querySelectorAll(".stop--chip").forEach((c) => c.classList.remove("stop--selected"));
        chip.classList.add("stop--selected");
        panel.removeAttribute("hidden");
        panel.innerHTML = renderDetailPanel(stop, day);
        bindStopActions();
      }
    });
  });

  document.querySelectorAll(".chip-kebab").forEach((kebab) => {
    kebab.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });

  // Initialize Leaflet maps for any stop detail panels
  document.querySelectorAll("[id^='chip-map-']").forEach((container) => {
    const uid = container.id.replace('chip-map-', '').replace(/_/g, ' ');
    const stopName = Array.from(document.querySelectorAll('.stop-detail-title h4')).find(h4 => {
      const panel = h4.closest('.stop-detail');
      return panel && panel.parentElement?.id === container.id.replace('chip-map-', '');
    })?.textContent;
    if (stopName && STOP_COORDINATES[stopName]) initChipMap(stopName, container);
  });
}

function initChipMap(stopName, container) {
  const coord = STOP_COORDINATES[stopName];
  if (!coord) return;
  const m = L.map(container, {attributionControl: false}).setView([coord.lat, coord.lng], 14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19}).addTo(m);
  L.marker([coord.lat, coord.lng]).addTo(m).bindPopup(stopName);
}

function bindExclusionActions() {
  document.querySelectorAll("[data-exclusion-action='add-stop']").forEach((button) => {
    button.addEventListener("click", () => {
      const exclusion = data.exclusions.find((item) => item.name === button.dataset.exclusionName);
      openEditor("add-from-exclusion", { exclusion });
    });
  });
}

function bindEditorChrome() {
  populateDayOptions();

  editorEls.day.addEventListener("change", () => {
    populateSegmentOptions(editorEls.day.value, editorEls.segment.value);
  });

  editorEls.openAdd.addEventListener("click", () => {
    openEditor("add");
  });

  editorEls.exportChanges.addEventListener("click", exportChanges);
  editorEls.copySummary.addEventListener("click", copyChangeSummary);

  editorEls.reset.addEventListener("click", () => {
    resetState();
    rerenderApp();
  });

  editorEls.close.addEventListener("click", closeEditor);
  editorEls.cancel.addEventListener("click", closeEditor);

  editorEls.form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitEditor();
  });

  editorEls.dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeEditor();
  });
}

function populateDayOptions(selectedDayId = data.itinerary[0]?.id) {
  editorEls.day.innerHTML = data.itinerary.map((day) => `
    <option value="${day.id}">${day.date} - ${day.title}</option>
  `).join("");
  editorEls.day.value = selectedDayId || data.itinerary[0]?.id || "";
  populateSegmentOptions(editorEls.day.value);
}

function populateSegmentOptions(dayId, selectedLabel) {
  const day = findDay(dayId);
  if (!day) return;
  editorEls.segment.innerHTML = day.segments.map((segment) => `
    <option value="${segment.label}">${segment.label}</option>
  `).join("");
  editorEls.segment.value = selectedLabel && day.segments.some((segment) => segment.label === selectedLabel)
    ? selectedLabel
    : day.segments[0]?.label || "";
}

function openEditor(mode, payload = {}) {
  const context = payload.uid ? findStopContext(payload.uid) : null;
  const exclusion = payload.exclusion || null;
  editorEls.form.reset();
  editorEls.mode.value = mode;
  editorEls.targetUid.value = payload.uid || "";

  const selectedDay = exclusion?.bestDay || context?.day.id || data.itinerary[0]?.id;
  const selectedSegment = context?.segment.label || inferSegmentLabel(exclusion?.alternateType || exclusion?.type, selectedDay);
  populateDayOptions(selectedDay);
  populateSegmentOptions(selectedDay, selectedSegment);

  if (mode === "replace" && context) {
    fillEditor(context.stop, `Replace ${context.stop.name}`);
  } else if (mode === "insert-after" && context) {
    fillEditor({
      type: context.stop.type,
      neighborhood: context.stop.neighborhood,
      bestTime: context.stop.bestTime
    }, `Add stop after ${context.stop.name}`);
  } else if (mode === "add-from-exclusion" && exclusion) {
    fillEditor(exclusionToStop(exclusion), `Add ${exclusion.name}`);
  } else {
    fillEditor({}, "Add custom stop");
  }

  if (typeof editorEls.dialog.showModal === "function") {
    editorEls.dialog.showModal();
  } else {
    editorEls.dialog.setAttribute("open", "open");
  }
  editorEls.name.focus();
}

function fillEditor(stop, heading) {
  editorEls.heading.textContent = heading;
  editorEls.name.value = stop.name || "";
  editorEls.type.value = stop.type || stop.alternateType || "food";
  editorEls.time.value = stop.time || "";
  editorEls.leaveTime.value = stop.leaveTime || "";
  editorEls.duration.value = stop.duration || "";
  editorEls.cost.value = stop.cost != null ? stop.cost : (stop.estimatedCost != null ? stop.estimatedCost : "");
  editorEls.neighborhood.value = stop.neighborhood || "";
  editorEls.bestTime.value = stop.bestTime || "";
  editorEls.knownFor.value = stop.knownFor || "";
  editorEls.notes.value = stop.notes || "";
  editorEls.website.value = stop.website || stop.link || "";
  editorEls.menu.value = stop.menu || "";
  editorEls.route.value = stop.route || "";
}

function closeEditor() {
  if (typeof editorEls.dialog.close === "function") {
    editorEls.dialog.close();
  } else {
    editorEls.dialog.removeAttribute("open");
  }
}

function exclusionToStop(exclusion) {
  return {
    name: exclusion.name,
    type: exclusion.alternateType || exclusion.type || "food",
    time: "",
    leaveTime: "",
    duration: "",
    cost: exclusion.estimatedCost ?? 0,
    neighborhood: exclusion.neighborhood || "",
    bestTime: exclusion.bestTime || "",
    knownFor: exclusion.knownFor || exclusion.alternateFor || "",
    notes: exclusion.notes || exclusion.reason || "",
    website: exclusion.website || exclusion.link || "",
    menu: exclusion.menu || "",
    route: exclusion.route || ""
  };
}

function inferSegmentLabel(type, dayId) {
  const day = findDay(dayId);
  if (!day?.segments.length) return "";
  if (type === "cocktails") return day.segments.find((segment) => /evening/i.test(segment.label))?.label || day.segments.at(-1).label;
  if (type === "coffee") return day.segments.find((segment) => /morning/i.test(segment.label))?.label || day.segments[0].label;
  return day.segments[0].label;
}

function buildStopFromForm() {
  return {
    _uid: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: editorEls.name.value.trim(),
    type: editorEls.type.value,
    time: editorEls.time.value.trim(),
    leaveTime: editorEls.leaveTime.value.trim(),
    duration: editorEls.duration.value.trim(),
    cost: editorEls.cost.value === "" ? 0 : Number(editorEls.cost.value),
    neighborhood: editorEls.neighborhood.value.trim(),
    bestTime: editorEls.bestTime.value.trim(),
    knownFor: editorEls.knownFor.value.trim(),
    notes: editorEls.notes.value.trim(),
    website: editorEls.website.value.trim(),
    menu: editorEls.menu.value.trim(),
    route: editorEls.route.value.trim()
  };
}

function submitEditor() {
  const mode = editorEls.mode.value;
  const stop = buildStopFromForm();
  const day = findDay(editorEls.day.value);
  const segment = day?.segments.find((entry) => entry.label === editorEls.segment.value);
  if (!day || !segment || !stop.name) {
    return;
  }

  if (mode === "replace") {
    replaceStop(editorEls.targetUid.value, stop, day.id, segment.label);
  } else if (mode === "insert-after") {
    insertStopAfter(editorEls.targetUid.value, stop, day.id, segment.label);
  } else {
    addStopToSegment(day.id, segment.label, stop);
  }

  closeEditor();
}

function addStopToSegment(dayId, segmentLabel, stop) {
  const day = findDay(dayId);
  const segment = day?.segments.find((entry) => entry.label === segmentLabel);
  if (!segment) return;
  segment.items.push(stop);
  persistAndRender();
}

function insertStopAfter(uid, stop, dayId, segmentLabel) {
  const context = findStopContext(uid);
  if (!context) {
    addStopToSegment(dayId, segmentLabel, stop);
    return;
  }

  if (context.day.id === dayId && context.segment.label === segmentLabel) {
    context.segment.items.splice(context.stopIndex + 1, 0, stop);
  } else {
    const day = findDay(dayId);
    const segment = day?.segments.find((entry) => entry.label === segmentLabel);
    if (!segment) return;
    segment.items.push(stop);
  }
  persistAndRender();
}

function replaceStop(uid, stop, dayId, segmentLabel) {
  const context = findStopContext(uid);
  if (!context) return;
  if (context.day.id === dayId && context.segment.label === segmentLabel) {
    stop._uid = context.stop._uid;
    context.segment.items.splice(context.stopIndex, 1, stop);
  } else {
    context.segment.items.splice(context.stopIndex, 1);
    const day = findDay(dayId);
    const segment = day?.segments.find((entry) => entry.label === segmentLabel);
    if (!segment) return;
    segment.items.push(stop);
  }
  persistAndRender();
}

function removeStop(uid) {
  const context = findStopContext(uid);
  if (!context) return;
  context.segment.items.splice(context.stopIndex, 1);
  persistAndRender();
}

function persistAndRender() {
  recalculateDayTotalsAndBudget();
  saveState();
  rerenderApp();
}

function rerenderApp() {
  initHero();
  renderSummary();
  renderItinerary(currentFilter);
  renderBudget();
  renderGuide(currentGuide);
  renderTransitAndSources();
  populateDayOptions(editorEls.day.value || data.itinerary[0]?.id);
}

function sanitizeStopForCompare(stop) {
  const copy = {};
  Object.entries(stop).forEach(([key, value]) => {
    if (key === "_uid") return;
    copy[key] = value;
  });
  return copy;
}

function stopChanged(baseStop, currentStop) {
  return JSON.stringify(sanitizeStopForCompare(baseStop)) !== JSON.stringify(sanitizeStopForCompare(currentStop));
}

function collectChanges() {
  const changes = [];
  data.itinerary.forEach((day) => {
    const baseDay = baseData.itinerary.find((entry) => entry.id === day.id);
    day.segments.forEach((segment) => {
      const baseSegment = baseDay?.segments.find((entry) => entry.label === segment.label);
      const baseItems = baseSegment?.items || [];
      const currentItems = segment.items || [];
      const baseByUid = new Map(baseItems.map((stop) => [stop._uid, stop]));
      const currentByUid = new Map(currentItems.map((stop) => [stop._uid, stop]));

      currentItems.forEach((stop, index) => {
        const baseStop = baseByUid.get(stop._uid);
        if (!baseStop) {
          changes.push({
            kind: "added",
            dayId: day.id,
            dayLabel: `${day.date} - ${day.title}`,
            segment: segment.label,
            stop: sanitizeStopForCompare(stop),
            position: index + 1
          });
          return;
        }
        if (stopChanged(baseStop, stop)) {
          changes.push({
            kind: "updated",
            dayId: day.id,
            dayLabel: `${day.date} - ${day.title}`,
            segment: segment.label,
            stop: sanitizeStopForCompare(stop),
            previousStop: sanitizeStopForCompare(baseStop),
            position: index + 1
          });
        }
      });

      baseItems.forEach((stop) => {
        if (!currentByUid.has(stop._uid)) {
          changes.push({
            kind: "removed",
            dayId: day.id,
            dayLabel: `${day.date} - ${day.title}`,
            segment: segment.label,
            stop: sanitizeStopForCompare(stop)
          });
        }
      });
    });
  });

  const alternatesAdded = Array.from(activeAlternates).map((name) => {
    const item = data.exclusions.find((entry) => entry.name === name);
    if (!item) return null;
    return {
      kind: "alternate-enabled",
      dayId: item.bestDay || "",
      dayLabel: item.bestDay ? dayLabel(item.bestDay) : "",
      segment: item.alternateFor || "",
      stop: {
        name: item.name,
        type: item.alternateType || item.type || "alternate",
        notes: item.notes || item.reason || ""
      }
    };
  }).filter(Boolean);

  return changes.concat(alternatesAdded);
}

function buildExportPayload() {
  const changes = collectChanges();
  return {
    exportedAt: new Date().toISOString(),
    siteTitle: data.meta.title,
    dates: data.meta.dates,
    projectedTotal: data.budget.projectedTotal,
    activeAlternates: Array.from(activeAlternates),
    changes,
    customizedData: data
  };
}

function downloadTextFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function setStatus(message) {
  if (editorEls.status) {
    editorEls.status.textContent = message;
  }
}

function exportChanges() {
  const payload = buildExportPayload();
  downloadTextFile(
    "trip-itinerary-customization-export.json",
    JSON.stringify(payload, null, 2),
    "application/json"
  );
  setStatus("Downloaded your itinerary edits as a JSON export file.");
}

function formatStopLine(stop) {
  const pieces = [stop.name];
  if (stop.time) pieces.push(`planned ${stop.time}`);
  if (stop.leaveTime) pieces.push(`leave ${stop.leaveTime}`);
  if (stop.cost != null) pieces.push(`cost ${money(stop.cost)}`);
  return pieces.join(" | ");
}

function buildChangeSummary() {
  const payload = buildExportPayload();
  const lines = [
    `Trip update export`,
    `Project: ${payload.siteTitle}`,
    `Dates: ${payload.dates}`,
    `Projected total: ${money(payload.projectedTotal)}`,
    `Changed items: ${payload.changes.length}`
  ];

  if (!payload.changes.length) {
    lines.push("No itinerary changes are saved in this browser right now.");
    return lines.join("\n");
  }

  payload.changes.forEach((change, index) => {
    lines.push("");
    lines.push(`${index + 1}. ${change.kind.toUpperCase()} | ${change.dayLabel} | ${change.segment}`);
    lines.push(`   ${formatStopLine(change.stop)}`);
    if (change.kind === "updated" && change.previousStop) {
      lines.push(`   Previous: ${formatStopLine(change.previousStop)}`);
    }
  });

  return lines.join("\n");
}

async function copyChangeSummary() {
  const summary = buildChangeSummary();
  try {
    await navigator.clipboard.writeText(summary);
    setStatus("Copied your itinerary change summary. Paste it back here any time for a permanent repo update.");
  } catch (error) {
    downloadTextFile("trip-itinerary-change-summary.txt", summary, "text/plain");
    setStatus("Clipboard access was blocked, so I downloaded the change summary as a text file instead.");
  }
}
