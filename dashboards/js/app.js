const data = window.TRIP_DATA;
let currentFilter = "all";
let currentGuide = "reservations";
const activeAlternates = new Set();

const money = (value) => `$${Math.round(value || 0).toLocaleString()}`;

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
  document.getElementById("heroRemaining").textContent = `${money(remaining)} under target; ${money(data.budget.absoluteCeiling || data.budget.cap)} absolute ceiling`;
  document.getElementById("heroMeter").style.width = `${Math.min(100, (total / data.budget.cap) * 100)}%`;
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

  const links = [
    stop.website ? `<a class="link-button" href="${stop.website}" target="_blank" rel="noreferrer">Website</a>` : "",
    stop.menu ? `<a class="link-button" href="${stop.menu}" target="_blank" rel="noreferrer">Menu</a>` : "",
    stop.route ? `<a class="link-button" href="${stop.route}" target="_blank" rel="noreferrer">Map route</a>` : "",
    options.isAlternate ? `<button class="alternate-remove focus-ring" type="button" data-remove-alternate="${escapeAttribute(stop.name)}">Remove alternate</button>` : ""
  ].filter(Boolean).join("");

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
      <div class="card-actions">${links}</div>
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
          ${item.link ? `<a class="link-button" href="${item.link}" target="_blank" rel="noreferrer">Open source</a>` : ""}
        </div>
      </article>
    `).join("");
    bindAlternateAdd();
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
  const day = data.itinerary.find((entry) => entry.id === dayId);
  return day ? `${day.date} - ${day.title}` : dayId;
}

function bindAlternateAdd() {
  document.querySelectorAll("[data-add-alternate]").forEach((button) => {
    button.addEventListener("click", () => {
      activeAlternates.add(button.dataset.addAlternate);
      renderGuide("exclusions");
      renderItinerary(currentFilter);
    });
  });
}

function bindAlternateRemove() {
  document.querySelectorAll("[data-remove-alternate]").forEach((button) => {
    button.addEventListener("click", () => {
      activeAlternates.delete(button.dataset.removeAlternate);
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

initHero();
renderSummary();
renderItinerary();
initFilters();
renderBudget();
renderGuide();
initTabs();
renderTransitAndSources();
initReveal();
