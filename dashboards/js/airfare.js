const AIRFARE_DATA_URL = "../../data/airfare-watch.json";
const BOOKING_DEADLINE = new Date("2026-11-01T00:00:00Z"); // Oct 31 is last day to book

function formatMoney(value) {
  if (typeof value !== "number") return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

function formatMiles(value) {
  return new Intl.NumberFormat("en-US").format(value) + " mi";
}

function taxChangeClass(current, previous) {
  if (previous == null) return "is-stable";
  if (current < previous) return "is-dropped";
  if (current > previous) return "is-rose";
  return "is-stable";
}

function taxChangeLabel(current, previous) {
  if (previous == null) return "Baseline";
  const diff = current - previous;
  if (diff === 0) return "No change";
  const sign = diff < 0 ? "▼" : "▲";
  return `${sign} ${formatMoney(Math.abs(diff))}`;
}

// Returns "up", "down", or "stable" based on last 3+ history entries
function calcTrend(history) {
  if (!history || history.length < 2) return "stable";
  const recent = history.slice(-3);
  const first = recent[0].tax;
  const last = recent[recent.length - 1].tax;
  const diff = last - first;
  if (diff < -0.50) return "down";
  if (diff > 0.50) return "up";
  return "stable";
}

function trendLabel(trend) {
  if (trend === "down") return "▼ Falling";
  if (trend === "up") return "▲ Rising";
  return "→ Stable";
}

function trendClass(trend) {
  if (trend === "down") return "is-dropped";
  if (trend === "up") return "is-rose";
  return "is-stable";
}

// Days until Oct 31 2026 (last booking day)
function daysUntilDeadline() {
  const now = new Date();
  const diff = BOOKING_DEADLINE - now;
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
}

function deadlineColorClass(days) {
  if (days <= 0) return "deadline-passed";
  if (days <= 7) return "deadline-critical";
  if (days <= 30) return "deadline-red";
  if (days <= 60) return "deadline-amber";
  return "deadline-green";
}

// Booking recommendation based on trend + days to deadline
function bookingRecommendation(trend, days) {
  if (days <= 0) return { label: "DEADLINE PASSED", cls: "deadline-critical" };
  if (days <= 7) return { label: "DEADLINE CRITICAL — BOOK TODAY", cls: "deadline-critical" };
  if (days <= 30 && trend === "up") return { label: "BOOK NOW — taxes rising", cls: "deadline-red" };
  if (days <= 30) return { label: "CONSIDER BOOKING", cls: "deadline-amber" };
  if (trend === "up") return { label: "WATCH — taxes rising", cls: "deadline-amber" };
  if (trend === "down") return { label: "WATCH — taxes falling", cls: "deadline-green" };
  return { label: "WATCH", cls: "deadline-green" };
}

function buildSparkline(history) {
  if (!history || history.length === 0) return "";
  const values = history.map((h) => h.tax);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  return `<div class="sparkline-bar">
    ${values.map((v) => {
      const pct = Math.round(10 + ((v - min) / range) * 90);
      const cls = v === min ? "is-min" : v === max ? "is-max" : "";
      return `<span class="${cls}" style="height:${pct}%"></span>`;
    }).join("")}
  </div>`;
}

function renderDeadlineBanner(days) {
  const cls = deadlineColorClass(days);
  const el = document.getElementById("deadlineBanner");
  if (!el) return;

  let message;
  if (days <= 0) {
    message = "Booking deadline has passed.";
  } else if (days === 1) {
    message = "⚠ 1 day left to book — book today.";
  } else if (days <= 7) {
    message = `⚠ ${days} days until booking deadline (Oct 31, 2026) — book this week.`;
  } else if (days <= 30) {
    message = `${days} days until booking deadline (Oct 31, 2026) — enter final decision window.`;
  } else {
    message = `${days} days until booking deadline (Oct 31, 2026).`;
  }

  el.className = `deadline-banner ${cls}`;
  el.innerHTML = `<span class="deadline-label">Booking deadline</span><span class="deadline-text">${message}</span>`;
}

function renderRouteCards(routes) {
  const days = daysUntilDeadline();
  const grid = document.getElementById("routeGrid");
  grid.innerHTML = routes.map((route) => {
    const history = route.taxHistory || [];
    const prev = history.length >= 2 ? history[history.length - 2].tax : null;
    const cls = taxChangeClass(route.currentTax, prev);
    const changeLabel = taxChangeLabel(route.currentTax, prev);
    const lastChecked = route.alert?.lastChecked || "—";
    const trend = calcTrend(history);
    const rec = bookingRecommendation(trend, days);

    return `
      <article class="route-card">
        <p class="route-label">Award redemption route</p>
        <h2 class="route-name">${route.label}</h2>
        <p class="route-miles"><strong>${formatMiles(route.milesRequired)}</strong> + cash taxes</p>
        ${buildSparkline(history)}
        <div class="tax-display">
          <span class="tax-amount ${cls}">${formatMoney(route.currentTax)}</span>
        </div>
        <p class="tax-label">Current taxes &amp; fees</p>
        <span class="tax-change-pill ${cls}">${changeLabel}</span>
        <div class="route-trend">
          <span class="trend-pill ${trendClass(trend)}">${trendLabel(trend)}</span>
          <span class="recommendation-pill ${rec.cls}">${rec.label}</span>
        </div>
        <div class="route-meta">Last checked: ${lastChecked}</div>
      </article>
    `;
  }).join("");
}

function renderHistory(routes) {
  const body = document.getElementById("historyBody");
  const sfo = routes.find((r) => r.id === "sfo-mnl");
  const ord = routes.find((r) => r.id === "ord-mnl");

  const sfoHistory = sfo?.taxHistory || [];
  const ordHistory = ord?.taxHistory || [];

  const allDates = [...new Set([
    ...sfoHistory.map((h) => h.date),
    ...ordHistory.map((h) => h.date)
  ])].sort().reverse();

  if (allDates.length === 0) {
    body.innerHTML = `<tr><td colspan="5" class="loading-text">No history recorded yet.</td></tr>`;
    return;
  }

  body.innerHTML = allDates.map((date, i) => {
    const sfoEntry = sfoHistory.find((h) => h.date === date);
    const ordEntry = ordHistory.find((h) => h.date === date);
    const sfoPrev = i < allDates.length - 1
      ? sfoHistory.find((h) => h.date === allDates[i + 1])?.tax
      : null;
    const ordPrev = i < allDates.length - 1
      ? ordHistory.find((h) => h.date === allDates[i + 1])?.tax
      : null;

    const sfoCls = taxChangeClass(sfoEntry?.tax, sfoPrev);
    const ordCls = taxChangeClass(ordEntry?.tax, ordPrev);

    return `<tr>
      <td>${date}</td>
      <td>${sfoEntry ? formatMoney(sfoEntry.tax) : "—"}</td>
      <td>${ordEntry ? formatMoney(ordEntry.tax) : "—"}</td>
      <td class="td-change ${sfoCls}">${sfoEntry ? taxChangeLabel(sfoEntry.tax, sfoPrev) : "—"}</td>
      <td class="td-change ${ordCls}">${ordEntry ? taxChangeLabel(ordEntry.tax, ordPrev) : "—"}</td>
    </tr>`;
  }).join("");
}

function renderStrategy(watch) {
  const el = document.getElementById("strategyText");
  const s = watch.monitoringStrategy;
  if (!s) { el.textContent = "No strategy recorded."; return; }
  const deadlineNote = watch.bookingDeadlineNote ? ` BOOKING DEADLINE: ${watch.bookingDeadlineNote}` : "";
  el.textContent = `${s.goal} Check source: ${s.checkSource}. Cadence: ${s.cadence}.${deadlineNote} Alert trigger: ${s.alertTrigger}.`;
}

function renderOverallStatus(routes) {
  const el = document.getElementById("overallStatus");
  const anyDrop = routes.some((r) => {
    const h = r.taxHistory || [];
    return h.length >= 2 && h[h.length - 1].tax < h[h.length - 2].tax;
  });
  el.textContent = anyDrop ? "Tax drop detected — review routes" : "Monitoring — no drops yet";
  if (anyDrop) {
    el.style.background = "rgba(74,222,128,0.12)";
    el.style.borderColor = "rgba(74,222,128,0.35)";
    el.style.color = "#4ade80";
  }
}

async function init() {
  try {
    const response = await fetch(AIRFARE_DATA_URL);
    if (!response.ok) throw new Error(`Unable to load airfare data: ${response.status}`);
    const watch = await response.json();
    const routes = watch.routes || [];
    const days = daysUntilDeadline();

    renderDeadlineBanner(days);
    renderOverallStatus(routes);
    renderRouteCards(routes);
    renderHistory(routes);
    renderStrategy(watch);
  } catch (error) {
    document.getElementById("overallStatus").textContent = "Load error";
    document.getElementById("routeGrid").innerHTML = `<div class="route-card"><p class="loading-text">${error.message}</p></div>`;
    document.getElementById("historyBody").innerHTML = `<tr><td colspan="5" class="loading-text">${error.message}</td></tr>`;
  }
}

init();
