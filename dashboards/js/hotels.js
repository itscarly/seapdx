const REPORT_PATH = "../../data/hotel-monitor-report.json";

const CITY_CONFIG = {
  seattle: {
    label: "Seattle",
    dates: "Nov 1–4, 2026",
    benchmarkNote: "Boylston stays the fallback until a direct-site Seattle quote lands under the $400 cap.",
    watchlistNote: "Every quote shown here is tied to the exact Nov 1–4, 2026 / 2 guest stay scope.",
    strategyNote: "Hold Boylston unless a refundable direct quote comes in under $400."
  },
  portland: {
    label: "Portland",
    dates: "Nov 4–9, 2026",
    benchmarkNote: "Hotel Vance stays the fallback until a direct-site Portland quote lands under $620.",
    watchlistNote: "Every quote shown here is tied to the exact Nov 4–9, 2026 / 2 guest stay scope. Elevator required.",
    strategyNote: "Hold Hotel Vance unless a qualifying challenger comes in under $620 with 4.0+ stars, elevator, and transit access."
  }
};

function formatMoney(value) {
  return typeof value === "number" ? `$${value.toFixed(2)}` : "—";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function summaryCard(label, value, detail) {
  return `
    <article class="summary-card tracker-summary-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <p>${detail}</p>
    </article>`;
}

function hotelCard(hotel, threshold, mode) {
  const isEligible = mode === "eligible";
  const isNeedsCheck = hotel.trueTotalCost === null || hotel.trueTotalCost === undefined;
  const badgeLabel = isEligible ? "Qualifies" : isNeedsCheck ? "Needs price check" : "Over threshold";
  const badgeClass = isEligible ? "tracker-badge-good" : isNeedsCheck ? "tracker-badge-pending" : "tracker-badge-muted";
  const gap = typeof hotel.trueTotalCost === "number" ? hotel.trueTotalCost - threshold : null;

  const cancelDate = hotel.cancellationDeadline
    ? new Date(hotel.cancellationDeadline).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : null;

  const metaItems = [
    hotel.trueTotalCost != null ? `<div class="detail"><b>Total</b><span>${formatMoney(hotel.trueTotalCost)}</span></div>` : "",
    gap != null && !isEligible ? `<div class="detail"><b>${gap > 0 ? "Over threshold by" : "Under threshold by"}</b><span>${formatMoney(Math.abs(gap))}</span></div>` : "",
    hotel.reviewScore ? `<div class="detail"><b>Stars</b><span>${hotel.reviewScore}★</span></div>` : "",
    hotel.hasElevator ? `<div class="detail"><b>Elevator</b><span>Yes</span></div>` : "",
    hotel.freeBreakfast ? `<div class="detail"><b>Breakfast</b><span>Included ✓</span></div>` : "",
    hotel.refundable ? `<div class="detail"><b>Refundable</b><span>Yes</span></div>` : "",
    cancelDate ? `<div class="detail"><b>Cancel by</b><span>${cancelDate}</span></div>` : ""
  ].filter(Boolean).join("");

  const evidenceNote = hotel.priceVerification?.evidenceNote || "";

  return `
    <article class="transit-card tracker-entry-card">
      <span class="badge ${badgeClass}">${badgeLabel}</span>
      <h3>${escapeHtml(hotel.name)}</h3>
      ${hotel.brand ? `<p class="hotel-brand" style="color:var(--dt-muted,var(--muted));font-size:0.82rem;margin:2px 0 4px">${escapeHtml(hotel.brand)}</p>` : ""}
      <p style="color:var(--dt-muted,var(--muted));font-size:0.88rem;margin:0 0 6px">${escapeHtml(hotel.zone || "")}</p>
      ${hotel.transitNote ? `<p style="font-size:0.88rem;margin:0 0 8px"><span style="opacity:0.6">🚇</span> ${escapeHtml(hotel.transitNote)}</p>` : ""}
      ${hotel.vibeNote ? `<p style="font-size:0.85rem;font-style:italic;margin:0 0 8px;opacity:0.8">${escapeHtml(hotel.vibeNote)}</p>` : ""}
      <div class="tracker-meta-grid">${metaItems}</div>
      ${evidenceNote ? `<p style="font-size:0.82rem;margin:6px 0 0;opacity:0.7"><strong>Note:</strong> ${escapeHtml(evidenceNote)}</p>` : ""}
      <div class="card-actions">
        <a class="link-button" href="${escapeHtml(hotel.directBookingUrl)}" target="_blank" rel="noreferrer">
          ${isNeedsCheck ? "Check price →" : "Book direct →"}
        </a>
      </div>
    </article>`;
}

function renderCity(cityKey, cityData, report) {
  const cfg = CITY_CONFIG[cityKey] || { label: cityKey, dates: "", benchmarkNote: "", watchlistNote: "", strategyNote: "" };
  const benchmark = cityData.benchmark;
  const eligible = cityData.eligible || [];
  const excluded = cityData.excluded || [];
  const needsCheck = cityData.needsCheck || [];
  const threshold = cityData.alertThreshold;
  const allWatchlist = [...eligible, ...needsCheck, ...excluded];

  const bestEligible = eligible[0];
  const pricedExcluded = excluded.filter(h => typeof h.trueTotalCost === "number");
  const cheapestExcluded = pricedExcluded[0];

  const trackerState = bestEligible ? "SWITCH POSSIBLE" : "HOLD CURRENT";
  const benchmarkCost = benchmark?.trueTotalCost ?? benchmark?.confirmedTotalPaid ?? null;

  // Summary grid
  const summaryHtml = [
    summaryCard("Booking stance", trackerState, bestEligible ? "A qualifying direct-site option exists." : "Stay with the current booking for now."),
    summaryCard("Benchmark total", benchmarkCost != null ? formatMoney(benchmarkCost) : "—", `${cfg.label} alert threshold: ${formatMoney(threshold)}`),
    summaryCard("Watching", `${cityData.watchlistTotal} hotels`, `${eligible.length} qualifying · ${needsCheck.length} needs price check · ${pricedExcluded.length} over threshold`),
    summaryCard("Best alternative", cheapestExcluded ? `${formatMoney(cheapestExcluded.trueTotalCost)}` : needsCheck.length ? "Prices needed" : "None", cheapestExcluded ? `${escapeHtml(cheapestExcluded.name)} — closest to threshold` : needsCheck.length ? `${needsCheck.length} hotels still need price capture` : "All options over threshold")
  ].join("");

  // Benchmark card
  const benchmarkHtml = benchmark ? `
    <article class="transit-card tracker-feature-card">
      <span class="badge">Benchmark — ${cfg.label}</span>
      <h3>${escapeHtml(benchmark.name)}</h3>
      <p>${escapeHtml(cfg.dates)} | ${cityData.trip.nights} nights | ${cityData.trip.guests} guests</p>
      <div class="tracker-meta-grid">
        <div class="detail"><b>Total paid</b><span>${benchmarkCost != null ? formatMoney(benchmarkCost) : "See confirmation"}</span></div>
        <div class="detail"><b>Alert threshold</b><span>${formatMoney(threshold)}</span></div>
        ${benchmark.confirmationNumber ? `<div class="detail"><b>Conf #</b><span>${escapeHtml(benchmark.confirmationNumber)}</span></div>` : ""}
        ${benchmark.hasElevator ? `<div class="detail"><b>Elevator</b><span>Yes</span></div>` : ""}
      </div>
      <p>${escapeHtml(benchmark.transitNote || "")}</p>
      <p><strong>Note:</strong> ${escapeHtml(benchmark.priceVerification?.evidenceNote || benchmark.notes || "")}</p>
      <div class="card-actions">
        <a class="link-button" href="${escapeHtml(benchmark.directBookingUrl)}" target="_blank" rel="noreferrer">View booking</a>
      </div>
    </article>` : "";

  // Watch summary callout
  const watchSummaryHtml = `
    <article class="transit-card tracker-feature-card">
      <span class="badge">${bestEligible ? "Actionable" : "Monitor active"}</span>
      <h3>${bestEligible ? `${escapeHtml(bestEligible.name)} qualifies` : `No ${cfg.label} alternatives qualify right now`}</h3>
      <p>${bestEligible
        ? `The best live direct-site option lands at ${formatMoney(bestEligible.trueTotalCost)} — under the ${formatMoney(threshold)} threshold.`
        : `Monitoring ${cityData.watchlistTotal} hotels. ${needsCheck.length} still need price capture. ${pricedExcluded.length} are priced but over the ${formatMoney(threshold)} threshold.`}</p>
      ${cheapestExcluded ? `<p>Closest over-threshold option: <strong>${escapeHtml(cheapestExcluded.name)}</strong> at ${formatMoney(cheapestExcluded.trueTotalCost)} — ${formatMoney(cheapestExcluded.trueTotalCost - threshold)} over.</p>` : ""}
    </article>`;

  // Hotel cards
  const eligibleCardsHtml = eligible.map(h => hotelCard(h, threshold, "eligible")).join("");
  const needsCheckCardsHtml = needsCheck.map(h => hotelCard(h, threshold, "needs-check")).join("");
  const excludedCardsHtml = pricedExcluded.map(h => hotelCard(h, threshold, "excluded")).join("");

  const automation = report.meta?.automation || {};

  return `
    <section id="${cityKey}-summary" class="section">
      <div class="section-heading compact-heading">
        <p class="eyebrow">${cfg.label} · ${cfg.dates}</p>
        <h2>${cfg.label} hotel watch — market snapshot</h2>
        <p class="section-copy">${cfg.benchmarkNote}</p>
      </div>
      <div class="summary-grid tracker-summary-grid">${summaryHtml}</div>
    </section>

    <section id="${cityKey}-benchmark" class="section">
      <div class="section-heading compact-heading">
        <p class="eyebrow">${cfg.label} benchmark</p>
        <h2>Current ${cfg.label} reservation</h2>
      </div>
      <div class="tracker-panel-grid">${benchmarkHtml}</div>
    </section>

    <section id="${cityKey}-watchlist" class="section">
      <div class="section-heading compact-heading">
        <p class="eyebrow">${cfg.label} watchlist — ${cityData.watchlistTotal} hotels</p>
        <h2>${cfg.label} direct-site hotel watchlist</h2>
        <p class="section-copy">${cfg.watchlistNote}</p>
      </div>
      <div class="tracker-panel-grid">${watchSummaryHtml}</div>
      ${eligibleCardsHtml ? `<div class="tracker-card-grid">${eligibleCardsHtml}</div>` : ""}
      ${needsCheckCardsHtml ? `<div class="tracker-card-grid">${needsCheckCardsHtml}</div>` : ""}
      ${excludedCardsHtml ? `<div class="tracker-card-grid">${excludedCardsHtml}</div>` : ""}
    </section>`;
}

async function init() {
  const response = await fetch(REPORT_PATH, { cache: "no-store" });
  const report = await response.json();

  const cities = report.cities || {};
  const cityKeys = ["seattle", "portland"].filter(k => cities[k]);

  // Overall status for hero
  const totalWatching = cityKeys.reduce((s, k) => s + (cities[k].watchlistTotal || 0), 0);
  const totalEligible = cityKeys.reduce((s, k) => s + (cities[k].eligible?.length || 0), 0);
  const totalNeedsCheck = cityKeys.reduce((s, k) => s + (cities[k].needsCheck?.length || 0), 0);

  const heroState = totalEligible > 0 ? "SWITCH POSSIBLE" : "MONITORING";
  document.getElementById("trackerHeadline").textContent = heroState;
  document.getElementById("trackerSubhead").textContent = `Watching ${totalWatching} hotels across Seattle & Portland. ${totalEligible} qualifying. ${totalNeedsCheck} need price capture.`;
  document.getElementById("trackerMeter").style.width = totalEligible > 0 ? "72%" : "34%";
  document.getElementById("trackerDisclaimer").textContent = report.meta?.disclaimer || "";
  document.getElementById("hotelCallout").innerHTML = totalEligible > 0
    ? `<span class="tracker-pill tracker-pill-good">option found</span><span>${totalEligible} hotel${totalEligible > 1 ? "s" : ""} currently qualify — review and consider rebooking.</span>`
    : `<span class="tracker-pill tracker-pill-alert">hold bookings</span><span>No alternatives beat the benchmark thresholds yet. ${totalNeedsCheck} hotels still need price capture.</span>`;

  // Render each city
  const appEl = document.getElementById("hotelApp");
  for (const cityKey of cityKeys) {
    const section = document.createElement("div");
    section.innerHTML = renderCity(cityKey, cities[cityKey], report);
    appEl.appendChild(section);
  }

  // Automation cadence footer
  const automation = report.meta?.automation || {};
  const cadenceEl = document.getElementById("cadencePanel");
  if (cadenceEl) {
    cadenceEl.innerHTML = `
      <span class="badge">Automation</span>
      <h3>Hotel monitor is active</h3>
      <p><strong>Cadence:</strong> ${escapeHtml(automation.cadence || "See GitHub Actions")}</p>
      <p><strong>Last check:</strong> ${escapeHtml(automation.lastAutomatedCheckAt || "pending first run")}</p>
      <p>${escapeHtml(automation.lastAutomatedSummary || "")}</p>`;
  }
}

init().catch((error) => {
  document.getElementById("hotelApp").innerHTML = `<section class="section"><p>Hotel tracker failed to load: ${escapeHtml(error.message)}</p></section>`;
});
