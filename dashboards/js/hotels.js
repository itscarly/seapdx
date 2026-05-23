const REPORT_PATH = "../../data/hotel-monitor-report.json";

async function init() {
  const response = await fetch(REPORT_PATH, { cache: "no-store" });
  const report = await response.json();
  const benchmark = report.seattle.benchmark;
  const eligible = report.seattle.eligible || [];
  const excluded = report.seattle.excluded || [];
  const cheapestExcluded = excluded[0];
  const bestEligible = eligible[0];
  const benchmarkPrice = typeof benchmark.trueTotalCost === "number"
    ? `$${benchmark.trueTotalCost.toFixed(2)} benchmark`
    : "Boylston quote unavailable";
  const gapToCap = typeof benchmark.trueTotalCost === "number"
    ? benchmark.trueTotalCost - report.seattle.trip.hardCap
    : null;
  const trackerState = bestEligible ? "SWITCH POSSIBLE" : "HOLD CURRENT";
  const trackerSubhead = bestEligible
    ? `${formatMoney(bestEligible.trueTotalCost)} | ${eligible.length} refundable options currently qualify`
    : `${benchmarkPrice} | ${eligible.length} live-verified alternatives under cap`;

  document.getElementById("trackerHeadline").textContent = trackerState;
  document.getElementById("trackerSubhead").textContent = trackerSubhead;
  document.getElementById("trackerMeter").style.width = bestEligible ? "72%" : "34%";
  document.getElementById("trackerDisclaimer").textContent = report.meta.disclaimer;
  document.getElementById("hotelCallout").innerHTML = bestEligible
    ? `<span class="tracker-pill tracker-pill-good">under cap</span><span>${escapeHtml(bestEligible.name)} is currently the strongest qualifying Seattle switch.</span>`
    : `<span class="tracker-pill tracker-pill-alert">hold booking</span><span>No refundable Seattle alternative currently beats the active benchmark under the hard cap.</span>`;

  document.getElementById("hotelSummary").innerHTML = [
    summaryCard("Booking stance", trackerState, bestEligible ? "A qualifying direct-site option exists." : "Stay with the current fallback for now."),
    summaryCard("Benchmark total", formatMoney(benchmark.trueTotalCost), gapToCap != null ? `${gapToCap > 0 ? "Over" : "Under"} cap by ${formatMoney(Math.abs(gapToCap))}.` : "Benchmark quote not currently available."),
    summaryCard("Qualified options", String(eligible.length), eligible.length ? `${escapeHtml(eligible[0].name)} is the best current qualifying option.` : "No Seattle direct-site quote currently qualifies."),
    summaryCard("Excluded quotes", String(excluded.length), cheapestExcluded ? `${escapeHtml(cheapestExcluded.name)} is the cheapest exclusion at ${formatMoney(cheapestExcluded.trueTotalCost)}.` : "No excluded quotes recorded.")
  ].join("");

  const benchmarkStatus = benchmark.priceVerification?.status || "unknown";
  const benchmarkLinkLabel = benchmarkStatus === "blocked" ? "Check availability" : "Book direct";
  document.getElementById("benchmarkPanel").innerHTML = `
    <article class="transit-card tracker-feature-card">
      <span class="badge">Benchmark</span>
      <h3>${escapeHtml(benchmark.name)}</h3>
      <p>${escapeHtml(report.seattle.trip.dateRange)} | ${report.seattle.trip.nights} nights | ${report.seattle.trip.guests} guests</p>
      <div class="tracker-meta-grid">
        <div class="detail"><b>Total</b><span>${benchmark.trueTotalCost != null ? formatMoney(benchmark.trueTotalCost) : "Quote unavailable"}</span></div>
        <div class="detail"><b>Transit score</b><span>${benchmark.transitScore}</span></div>
        <div class="detail"><b>Policy</b><span>Refundable only</span></div>
      </div>
      <p><strong>Verification:</strong> ${escapeHtml(benchmark.priceVerification.evidenceNote)}</p>
      <div class="card-actions">
        <a class="link-button" href="${escapeHtml(benchmark.directBookingUrl)}" target="_blank" rel="noreferrer">${benchmarkLinkLabel}</a>
      </div>
    </article>
  `;

  document.getElementById("watchSummary").innerHTML = `
    <article class="transit-card tracker-feature-card">
      <span class="badge">${bestEligible ? "Actionable" : "Current market read"}</span>
      <h3>${bestEligible ? `${escapeHtml(bestEligible.name)} currently qualifies` : "No Seattle alternatives qualify right now"}</h3>
      <p>${bestEligible
        ? `The best live direct-site option currently lands at ${formatMoney(bestEligible.trueTotalCost)} and satisfies the hard-cap screen.`
        : "All currently checked direct-site quotes exceed the $400 total cap for Nov 1-4, 2026."}</p>
      <p>${cheapestExcluded ? `Cheapest live direct alternative outside policy: ${escapeHtml(cheapestExcluded.name)} at ${formatMoney(cheapestExcluded.trueTotalCost)}.` : ""}</p>
    </article>
  `;

  document.getElementById("excludedPanel").innerHTML = excluded.map((hotel) => {
    const cancelDate = hotel.cancellationDeadline
      ? new Date(hotel.cancellationDeadline).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
      : null;
    return `
    <article class="transit-card tracker-entry-card">
      <span class="badge tracker-badge-muted">Excluded — over cap</span>
      <h3>${escapeHtml(hotel.name)}</h3>
      <p style="color:var(--dt-muted,var(--muted));font-size:0.88rem;margin:4px 0 0">${escapeHtml(hotel.zone)}</p>
      <div class="tracker-meta-grid">
        <div class="detail"><b>Direct total</b><span>${formatMoney(hotel.trueTotalCost)}</span></div>
        <div class="detail"><b>Over cap by</b><span>${formatMoney(hotel.trueTotalCost - report.seattle.trip.hardCap)}</span></div>
        <div class="detail"><b>Transit score</b><span>${hotel.transitScore ?? "—"}</span></div>
        ${cancelDate ? `<div class="detail"><b>Cancel by</b><span>${escapeHtml(cancelDate)}</span></div>` : ""}
      </div>
      <p><strong>Evidence:</strong> ${escapeHtml(hotel.priceVerification.evidenceNote)}</p>
      ${hotel.notes ? `<p>${escapeHtml(hotel.notes)}</p>` : ""}
      <div class="card-actions">
        <a class="link-button" href="${escapeHtml(hotel.directBookingUrl)}" target="_blank" rel="noreferrer">Book direct &rarr;</a>
      </div>
    </article>
  `;
  }).join("");

  document.getElementById("cadencePanel").innerHTML = `
    <span class="badge">Automation cadence</span>
    <h3>Scheduled direct-site checks are active</h3>
    <p>${escapeHtml(report.seattle.automation.activeSchedule)}</p>
    <p>${escapeHtml(report.seattle.automation.upcomingSchedule)}</p>
    <p><strong>Last automated check:</strong> ${escapeHtml(report.seattle.automation.lastAutomatedCheckAt || "pending first run")}</p>
    <p>${escapeHtml(report.seattle.automation.lastAutomatedSummary || "")}</p>
  `;

  document.getElementById("strategyPanel").innerHTML = `
    <span class="badge">Strategy</span>
    <h3>Keep Boylston for now</h3>
    <p>${escapeHtml(report.seattle.marketStrategy.currentRead)}</p>
    <ul class="hotel-list">
      ${report.seattle.marketStrategy.triggers.map((trigger) => `<li>${escapeHtml(trigger)}</li>`).join("")}
    </ul>
  `;
}

function formatMoney(value) {
  return typeof value === "number" ? `$${value.toFixed(2)}` : "Unavailable";
}

function formatStay(stay) {
  return `${stay.checkIn} to ${stay.checkOut} | ${stay.nights} nights | ${stay.guests} guests`;
}

function summaryCard(label, value, detail) {
  return `
    <article class="summary-card tracker-summary-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <p>${detail}</p>
    </article>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

init().catch((error) => {
  document.getElementById("hotelApp").innerHTML = `<section class="section"><p>Hotel tracker failed to load: ${escapeHtml(error.message)}</p></section>`;
});
