const STORAGE_KEY = "trip-dashboard-custom-data-v2";

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
renderSummary();
renderItinerary();
initFilters();
renderBudget();
renderGuide();
initTabs();
renderTransitAndSources();
bindEditorChrome();
initReveal();

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
      data = cloneData(parsed.data);
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

function money(value) {
  return `$${Math.round(Number(value) || 0).toLocaleString()}`;
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
  document.getElementById("heroMeter").style.width = `${Math.min(100, Math.max(0, (total / data.budget.cap) * 100))}%`;
}

function getHotelBase(day) {
  if (day.city.includes("Seattle")) return data.meta.travelerBase.seattle;
  if (day.city.includes("Portland")) return data.meta.travelerBase.portland;
  return "";
}

function getDayAlternates(day) {
  return data.exclusions.filter((item) => activeAlternates.has(item.name) && item.bestDay === day.id);
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
    const visibleSegments = day.segments.map((segment) => {
      const stops = segment.items.filter((stop) => stopMatches(stop, filter, day));
      if (!stops.length) return "";
      return `
        <section class="segment">
          <div class="segment-title">${segment.label}</div>
          ${stops.map((stop) => renderStop(stop)).join("")}
        </section>
      `;
    }).join("");
    const hotelBase = getHotelBase(day);
    const alternates = renderAlternates(day, filter);
    if (!visibleSegments && !getDayAlternates(day).length) return "";
    return `
      <article class="day-card ${index < 2 ? "open" : ""}" data-reveal style="transition-delay:${Math.min(index * 40, 220)}ms">
        <header class="day-head focus-ring" tabindex="0" role="button" aria-expanded="${index < 2 ? "true" : "false"}" aria-label="Toggle ${day.date}">
          <div>
            <span class="badge">${day.city}</span>
            <h3>${day.date}: ${day.title}</h3>
            <p>${day.theme}. Weather plan: ${day.weatherPlan}</p>
            <div class="day-meta">
              ${hotelBase ? `<span class="badge">${iconHotel()}<span>${hotelBase}</span></span>` : ""}
              <span class="badge">${iconClock()}<span>${day.segments.length} segments</span></span>
            </div>
            <span class="day-toggle">Open timing and route details</span>
          </div>
          <div class="day-total">${money(day.dayTotal)}<br><span class="badge">daily estimate</span></div>
        </header>
        <div class="segments">${visibleSegments}${alternates}</div>
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
  document.getElementById("budgetList").innerHTML = data.budget.categories.map((category, index) => `
    <article class="budget-item" data-reveal style="transition-delay:${index * 30}ms">
      <h3>${category.name}: ${money(category.amount)}</h3>
      <div class="meter"><span style="width:${(category.amount / data.budget.cap) * 100}%"></span></div>
      <p>${category.note}</p>
    </article>
  `).join("");

  const canvas = document.getElementById("budgetCanvas");
  const ctx = canvas.getContext("2d");
  const colors = ["#0f766e", "#2563eb", "#b45309", "#7c3aed", "#1d4ed8", "#0369a1", "#64748b"];
  const total = data.budget.categories.reduce((sum, item) => sum + item.amount, 0);
  let start = -Math.PI / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  data.budget.categories.forEach((item, index) => {
    const angle = (item.amount / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(130, 130);
    ctx.arc(130, 130, 105, start, start + angle);
    ctx.closePath();
    ctx.fillStyle = colors[index % colors.length];
    ctx.fill();
    start += angle;
  });
  ctx.beginPath();
  ctx.arc(130, 130, 62, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.fillStyle = "#0f172a";
  ctx.font = "800 24px Inter";
  ctx.fillText(money(data.budget.projectedTotal), 88, 124);
  ctx.font = "600 13px Inter";
  ctx.fillText(`of ${money(data.budget.cap)} target`, 82, 146);

  data.budget.categories.forEach((item, index) => {
    const y = 34 + index * 28;
    ctx.fillStyle = colors[index % colors.length];
    ctx.fillRect(275, y - 12, 14, 14);
    ctx.fillStyle = "#0f172a";
    ctx.font = "700 13px Inter";
    ctx.fillText(`${item.name} ${money(item.amount)}`, 300, y);
  });
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
