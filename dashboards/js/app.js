const data = window.TRIP_DATA;

const money = (value) => `$${Math.round(value).toLocaleString()}`;

const iconMap = {
  coffee: "☕",
  food: "🍜",
  cocktails: "🍸",
  sightseeing: "🏙",
  shopping: "🛍",
  transit: "🚆"
};

function initHero() {
  const total = data.budget.projectedTotal;
  const remaining = data.budget.cap - total;
  document.getElementById("heroSpend").textContent = money(total);
  document.getElementById("heroRemaining").textContent = `${money(remaining)} under target; ${money(data.budget.absoluteCeiling || data.budget.cap)} absolute ceiling`;
  document.getElementById("heroMeter").style.width = `${Math.min(100, (total / data.budget.cap) * 100)}%`;
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
  document.getElementById("summaryGrid").innerHTML = cards.map(([label, value]) => `
    <article class="summary-card">
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `).join("");
}

function stopMatches(stop, filter, day) {
  if (filter === "all") return true;
  if (filter === "Seattle") return day.city.includes("Seattle");
  if (filter === "Portland") return day.city.includes("Portland");
  return stop.type === filter;
}

function renderItinerary(filter = "all") {
  const daysEl = document.getElementById("days");
  const dayHtml = data.itinerary.map((day, index) => {
    const visibleSegments = day.segments.map((segment) => {
      const stops = segment.items.filter((stop) => stopMatches(stop, filter, day));
      if (!stops.length) return "";
      return `
        <section class="segment">
          <div class="segment-title">${segment.label}</div>
          ${stops.map(renderStop).join("")}
        </section>
      `;
    }).join("");
    if (!visibleSegments) return "";
    return `
      <article class="day-card ${index < 2 ? "open" : ""}">
        <header class="day-head" tabindex="0" role="button" aria-label="Toggle ${day.date}">
          <div>
            <span class="badge">${day.city}</span>
            <h3>${day.date}: ${day.title}</h3>
            <p>${day.theme}. Weather plan: ${day.weatherPlan}</p>
          </div>
          <div class="day-total">${money(day.dayTotal)}<br><span class="badge">daily estimate</span></div>
        </header>
        <div class="segments">${visibleSegments}</div>
      </article>
    `;
  }).join("");
  daysEl.innerHTML = dayHtml || `<p>No stops match this filter.</p>`;
  document.querySelectorAll(".day-head").forEach((head) => {
    head.addEventListener("click", () => head.closest(".day-card").classList.toggle("open"));
    head.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        head.closest(".day-card").classList.toggle("open");
      }
    });
  });
}

function renderStop(stop) {
  const icon = iconMap[stop.type] || "•";
  const details = [
    ["Time", stop.time],
    ["Cost", money(stop.cost || 0)],
    ["Duration", stop.duration],
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
    ["Safety note", stop.safetyNote]
  ].filter(([, value]) => value);

  const links = [
    stop.website ? `<a class="link-button" href="${stop.website}" target="_blank" rel="noreferrer">Website</a>` : "",
    stop.menu ? `<a class="link-button" href="${stop.menu}" target="_blank" rel="noreferrer">Menu</a>` : "",
    stop.route ? `<a class="link-button" href="${stop.route}" target="_blank" rel="noreferrer">Map route</a>` : ""
  ].filter(Boolean).join("");

  return `
    <article class="stop" data-type="${stop.type}">
      <div class="stop-top">
        <div>
          <span class="badge">${icon} ${stop.type}</span>
          <h3>${stop.name}</h3>
          <p>${stop.neighborhood || ""}</p>
        </div>
        <strong>${money(stop.cost || 0)}</strong>
      </div>
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
  document.getElementById("budgetList").innerHTML = data.budget.categories.map((category) => `
    <article class="budget-item">
      <h3>${category.name}: ${money(category.amount)}</h3>
      <div class="meter"><span style="width:${(category.amount / data.budget.cap) * 100}%"></span></div>
      <p>${category.note}</p>
    </article>
  `).join("");

  const canvas = document.getElementById("budgetCanvas");
  const ctx = canvas.getContext("2d");
  const colors = ["#1f6b4b", "#28647f", "#a34b32", "#b2762d", "#5e4a7d", "#6c6b3f", "#77736d"];
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
  ctx.fillStyle = "#fffdf8";
  ctx.fill();
  ctx.fillStyle = "#222220";
  ctx.font = "800 24px system-ui";
  ctx.fillText(money(data.budget.projectedTotal), 88, 124);
  ctx.font = "600 13px system-ui";
  ctx.fillText(`of ${money(data.budget.cap)} target`, 82, 146);

  data.budget.categories.forEach((item, index) => {
    const y = 34 + index * 28;
    ctx.fillStyle = colors[index % colors.length];
    ctx.fillRect(275, y - 12, 14, 14);
    ctx.fillStyle = "#222220";
    ctx.font = "700 13px system-ui";
    ctx.fillText(`${item.name} ${money(item.amount)}`, 300, y);
  });
}

function renderGuide(type = "reservations") {
  const panel = document.getElementById("guidePanel");
  if (type === "exclusions") {
    panel.innerHTML = data.exclusions.map((item) => `
      <article class="guide-card">
        <h3>${item.name}</h3>
        <p>${item.reason}</p>
      </article>
    `).join("");
    return;
  }
  const content = data.guides[type] || [];
  panel.innerHTML = content.map((item) => {
    if (typeof item === "string") {
      return `<article class="guide-card"><p>${item}</p></article>`;
    }
    const lines = Object.entries(item)
      .filter(([key]) => key !== "link")
      .map(([key, value]) => `<p><b>${labelize(key)}:</b> ${value}</p>`)
      .join("");
    return `
      <article class="guide-card">
        <h3>${item.name || "Note"}</h3>
        ${lines}
        ${item.link ? `<a class="link-button" href="${item.link}" target="_blank" rel="noreferrer">Open link</a>` : ""}
      </article>
    `;
  }).join("");
}

function labelize(key) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
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
  document.getElementById("transitCards").innerHTML = data.transit.map((item) => `
    <article class="transit-card">
      <span class="badge">${item.city}</span>
      <h3>${item.system}</h3>
      <p><b>Fare:</b> ${item.fare}</p>
      <p>${item.recommendation}</p>
      <a class="link-button" href="${item.link}" target="_blank" rel="noreferrer">Transit source</a>
    </article>
  `).join("");

  document.getElementById("sourcesList").innerHTML = data.sources.map((source) => `
    <article class="source-card">
      <h3>${source.label}</h3>
      <a href="${source.url}" target="_blank" rel="noreferrer">${source.url}</a>
    </article>
  `).join("");
}

initHero();
renderSummary();
renderItinerary();
initFilters();
renderBudget();
renderGuide();
initTabs();
renderTransitAndSources();
