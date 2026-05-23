const REPORT_PATH = "../../data/hotel-monitor-report.json";

init();

async function init() {
  try {
    const response = await fetch(REPORT_PATH, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const report = await response.json();
    render(report);
  } catch (error) {
    document.getElementById("hotelApp").innerHTML = `
      <section class="section">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Hotel tracker unavailable</p>
            <h2>Could not load the generated hotel report</h2>
            <p class="section-copy">Run the manual refresh first, then reload this page.</p>
          </div>
        </div>
        <article class="hotel-panel">
          <p><strong>Error:</strong> ${escapeHtml(error.message)}</p>
          <p>Expected report path: <code>${REPORT_PATH}</code></p>
        </article>
      </section>
    `;
  }
}

function render(report) {
  const benchmark = report.seattle.benchmark;
  const ranked = report.seattle.eligible;
  const categoriesByHotel = new Map();
  for (const category of report.seattle.categories) {
    if (!categoriesByHotel.has(category.hotelId)) categoriesByHotel.set(category.hotelId, []);
    categoriesByHotel.get(category.hotelId).push(category.label);
  }

  document.getElementById("trackerHeadline").textContent = benchmark.recommendation;
  document.getElementById("trackerSubhead").textContent = `${money(benchmark.trueTotalCost)} benchmark | ${report.seattle.verifiedEligible.length} live-verified alternatives under cap`;
  document.getElementById("trackerMeter").style.width = `${Math.min(100, Math.max(25, report.seattle.eligible.length * 22))}%`;
  document.getElementById("trackerDisclaimer").textContent = report.meta.disclaimer;

  document.getElementById("benchmarkPanel").innerHTML = `
    ${benchmarkCard(report, benchmark)}
    <article class="hotel-panel">
      <span class="badge">Benchmark read</span>
      <h3>Why Boylston still works</h3>
      <ul class="hotel-list">
        <li>True total: <strong>${money(benchmark.trueTotalCost)}</strong></li>
        <li>Transit score: <strong>${benchmark.transitScore}</strong></li>
        <li>Cancellation deadline: <strong>${formatDateTime(benchmark.pricing.cancellationDeadline)}</strong></li>
        <li>Quote scope: <strong>${formatQuotedStay(benchmark.priceVerification.quotedStay)}</strong></li>
        <li>Room note: <strong>${escapeHtml(benchmark.notes)}</strong></li>
        <li>Transit reasons: ${benchmark.transitReasons.join(" | ")}</li>
      </ul>
    </article>
  `;

  document.getElementById("categoryStrip").innerHTML = report.seattle.categories.length ? report.seattle.categories.map((category) => `
    <article class="hotel-category-card">
      <span class="badge">${escapeHtml(category.label)}</span>
      <h3>${escapeHtml(category.hotelName)}</h3>
      <p>${escapeHtml(category.reason)}</p>
    </article>
  `).join("") : `
    <article class="hotel-category-card">
      <span class="badge">Current market read</span>
      <h3>No Seattle alternatives qualify right now</h3>
      <p>All currently checked direct-site quotes either exceed the $400 total cap or fail the quality screen for Nov 1-4, 2026.</p>
    </article>
  `;

  document.getElementById("rankingsTable").innerHTML = ranked.length ? ranked.map((hotel) => `
    <tr>
      <td>
        <strong>${escapeHtml(hotel.name)}</strong>
        <span>${escapeHtml(hotel.zone)}</span>
        <a class="hotel-link" href="${escapeHtml(hotel.directBookingUrl)}" target="_blank" rel="noreferrer">Direct hotel site</a>
      </td>
      <td><span class="status-pill ${statusClass(hotel.recommendation)}">${escapeHtml(hotel.recommendation)}</span></td>
      <td>${escapeHtml(hotel.priceVerification.status)}<span>${escapeHtml(formatQuotedStay(hotel.priceVerification.quotedStay))}</span><span>${escapeHtml(hotel.priceVerification.evidenceNote)}</span></td>
      <td>${money(hotel.trueTotalCost)}</td>
      <td>${money(hotel.valueAdjustedTotal)}</td>
      <td>${hotel.transitScore}</td>
      <td>${hotel.quality.reviewScore.toFixed(1)}</td>
      <td>${formatDateTime(hotel.pricing.cancellationDeadline)}</td>
      <td>${(categoriesByHotel.get(hotel.id) || ["-"]).join(", ")}</td>
    </tr>
  `).join("") : `
    <tr>
      <td colspan="8"><strong>No Seattle hotels currently qualify under the $400 cap for Nov 1-4, 2026.</strong><span>Use the excluded list below to review direct-site quotes and failure reasons.</span></td>
    </tr>
  `;

  document.getElementById("excludedPanel").innerHTML = report.seattle.excluded.map((hotel) => `
    <article class="hotel-panel">
      <span class="badge">Excluded</span>
      <h3>${escapeHtml(hotel.name)}</h3>
      <p>${escapeHtml(hotel.notes)}</p>
      <ul class="hotel-list">
        <li>Direct booking: <a class="hotel-link" href="${escapeHtml(hotel.directBookingUrl)}" target="_blank" rel="noreferrer">Open hotel site</a></li>
        <li>Verification: ${escapeHtml(hotel.priceVerification.status)} - ${escapeHtml(formatQuotedStay(hotel.priceVerification.quotedStay))}</li>
        <li>Evidence: ${escapeHtml(hotel.priceVerification.evidenceNote)}</li>
        ${hotel.qualityFailures.map((reason) => `<li>${escapeHtml(reason)}</li>`).join("")}
      </ul>
    </article>
  `).join("");

  document.getElementById("transitLeaders").innerHTML = report.seattle.transitSummary.leaders.map((leader) => `
    <article class="transit-card hotel-transit-card">
      <span class="badge">Transit score ${leader.score}</span>
      <h3>${escapeHtml(leader.hotelName)}</h3>
      <p>${leader.reasons.join(" | ")}</p>
    </article>
  `).join("") + `
    <article class="transit-card hotel-transit-card">
      <span class="badge">Benchmark ${report.seattle.transitSummary.benchmark.score}</span>
      <h3>Boylston reference</h3>
      <p>${report.seattle.transitSummary.benchmark.reasons.join(" | ")}</p>
    </article>
  `;

  document.getElementById("cadencePanel").innerHTML = `
    <span class="badge">Monitoring cadence</span>
    <h3>Automated direct-site watch</h3>
    <p>${escapeHtml(report.seattle.automation.activeSchedule)}</p>
    <p>${escapeHtml(report.seattle.automation.upcomingSchedule)}</p>
    <p>Last automated check: ${escapeHtml(report.seattle.automation.lastAutomatedCheckAt || "pending first run")}</p>
    <p>${escapeHtml(report.seattle.automation.lastAutomatedSummary || "")}</p>
    <div class="cadence-stack">
      ${report.seattle.monitoringCadence.map((item) => `
        <article class="cadence-row">
          <strong>${escapeHtml(item.window)}</strong>
          <span>${escapeHtml(item.cadence)}</span>
          <p>${escapeHtml(item.rationale)}</p>
        </article>
      `).join("")}
    </div>
  `;

  document.getElementById("strategyPanel").innerHTML = `
    <span class="badge">Market read</span>
    <h3>Advisor operating mode</h3>
    <p>${escapeHtml(report.seattle.marketStrategy.currentRead.replace("Manual-refresh advisor mode.", "Automated direct-site watch mode."))}</p>
    <ul class="hotel-list">
      ${report.seattle.marketStrategy.triggers.map((trigger) => `<li>${escapeHtml(trigger)}</li>`).join("")}
    </ul>
  `;

  document.getElementById("recommendationCards").innerHTML = report.seattle.recommendationMatrix
    .filter((item) => report.seattle.eligible.some((hotel) => hotel.id === item.hotelId))
    .map((item) => `
    <article class="hotel-panel">
      <span class="status-pill ${statusClass(item.recommendation)}">${escapeHtml(item.recommendation)}</span>
      <h3>${escapeHtml(item.hotelName)}</h3>
      <p>${escapeHtml(item.rationale)}</p>
    </article>
  `).join("") || `
    <article class="hotel-panel">
      <span class="status-pill hold-current">Hold current</span>
      <h3>Keep Boylston for now</h3>
      <p>No currently checked Seattle alternative is both direct-site verified and inside the $400 total cap for Nov 1-4, 2026.</p>
    </article>
  `;

  document.getElementById("portlandPanel").innerHTML = `
    <article class="hotel-panel">
      <span class="badge">Framework ready</span>
      <h3>Reusable data contract</h3>
      <p>Portland will reuse the same source schema, report builder, filters, scoring model, categories, and dashboard rendering path used for Seattle.</p>
      <ul class="hotel-list">
        <li>Refundable only</li>
        <li>Breakfast remains preferred but optional</li>
        <li>Boutique hotels remain allowed</li>
        <li>Transit priority defaults to downtown plus MAX balance</li>
      </ul>
    </article>
    <article class="hotel-panel">
      <span class="badge">Blocked input</span>
      <h3>What still needs to be supplied</h3>
      <ul class="hotel-list">
        ${report.portland.inputsNeeded.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </article>
  `;
}

function benchmarkCard(report, benchmark) {
  return `
    <article class="hotel-panel benchmark-panel">
      <span class="status-pill ${statusClass(benchmark.recommendation)}">${escapeHtml(benchmark.recommendation)}</span>
      <h3>${escapeHtml(benchmark.name)}</h3>
      <p>${escapeHtml(report.seattle.trip.dateRange)} | ${report.seattle.trip.nights} nights | ${report.seattle.trip.guests} adults</p>
      <div class="hotel-stat-grid">
        <div><span>Total stay</span><strong>${money(benchmark.trueTotalCost)}</strong></div>
        <div><span>Value-adjusted</span><strong>${money(benchmark.valueAdjustedTotal)}</strong></div>
        <div><span>Transit score</span><strong>${benchmark.transitScore}</strong></div>
        <div><span>Review score</span><strong>${benchmark.quality.reviewScore.toFixed(1)}</strong></div>
      </div>
    </article>
  `;
}

function money(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value);
}

function formatDateTime(value) {
  const date = new Date(value);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

function formatQuotedStay(stay) {
  if (!stay) return "Quote scope missing";
  return `${stay.checkIn} to ${stay.checkOut} | ${stay.nights} nights | ${stay.guests} guests`;
}

function statusClass(status) {
  return status.toLowerCase().replace(/\s+/g, "-");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}
