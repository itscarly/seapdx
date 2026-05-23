const REPORT_PATH = "../../data/hotel-monitor-report.json";

async function init() {
  const response = await fetch(REPORT_PATH, { cache: "no-store" });
  const report = await response.json();
  const benchmark = report.seattle.benchmark;

  document.getElementById("trackerHeadline").textContent = "HOLD CURRENT";
  document.getElementById("trackerSubhead").textContent = `$${benchmark.trueTotalCost.toFixed(2)} benchmark | ${report.seattle.eligible.length} live-verified alternatives under cap`;
  document.getElementById("trackerMeter").style.width = "28%";
  document.getElementById("trackerDisclaimer").textContent = report.meta.disclaimer;

  document.getElementById("benchmarkPanel").innerHTML = `
    <article class="summary-card">
      <span class="badge">Benchmark</span>
      <h3>${escapeHtml(benchmark.name)}</h3>
      <p>${escapeHtml(report.seattle.trip.dateRange)} | ${report.seattle.trip.nights} nights | ${report.seattle.trip.guests} guests</p>
      <p><strong>Total:</strong> $${benchmark.trueTotalCost.toFixed(2)}</p>
      <p><strong>Transit score:</strong> ${benchmark.transitScore}</p>
      <p><strong>Direct booking:</strong> <a href="${escapeHtml(benchmark.directBookingUrl)}" target="_blank" rel="noreferrer">Open hotel site</a></p>
    </article>
  `;

  document.getElementById("watchSummary").innerHTML = `
    <article class="summary-card">
      <span class="badge">Current market read</span>
      <h3>No Seattle alternatives qualify right now</h3>
      <p>All currently checked direct-site quotes exceed the $400 total cap for Nov 1-4, 2026.</p>
    </article>
  `;

  document.getElementById("excludedPanel").innerHTML = report.seattle.excluded.map((hotel) => `
    <article class="transit-card">
      <span class="badge">Excluded</span>
      <h3>${escapeHtml(hotel.name)}</h3>
      <p><strong>Total:</strong> $${hotel.trueTotalCost.toFixed(2)}</p>
      <p><strong>Why excluded:</strong> ${escapeHtml(hotel.qualityFailures.join("; "))}</p>
      <p><strong>Quote scope:</strong> ${escapeHtml(formatStay(hotel.priceVerification.quotedStay))}</p>
      <p><strong>Evidence:</strong> ${escapeHtml(hotel.priceVerification.evidenceNote)}</p>
      <a class="link-button" href="${escapeHtml(hotel.directBookingUrl)}" target="_blank" rel="noreferrer">Direct hotel site</a>
    </article>
  `).join("");

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

function formatStay(stay) {
  return `${stay.checkIn} to ${stay.checkOut} | ${stay.nights} nights | ${stay.guests} guests`;
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
