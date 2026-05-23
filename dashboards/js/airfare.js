const AIRFARE_DATA_URL = "../../data/airfare-watch.json";
const AIRFARE_SUMMARY_URL = "../../research/airfare/latest-summary.json";

function formatMoney(value) {
  if (typeof value !== "number") return "Not verified";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function formatPercent(value) {
  if (typeof value !== "number") return "n/a";
  return `${Math.round(value * 100)}%`;
}

function createRuleList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function summaryCard(label, value, detail) {
  return `
    <article class="summary-card airfare-summary-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <p>${detail}</p>
    </article>
  `;
}

function recommendationPill(state) {
  const slug = String(state || "WATCH").toLowerCase().replace(/[^a-z]+/g, "-");
  return `<span class="airfare-pill is-state-${slug}">${state || "WATCH"}</span>`;
}

function verificationPill(item) {
  const status = item.directAirlineVerified ? "verified" : "signal";
  return `<span class="airfare-pill ${item.directAirlineVerified ? "is-verified" : "is-signal"}">${status}</span>`;
}

function renderHero(summary, observations) {
  const best = summary.topVerified?.[0] || summary.strongestSignals?.[0] || observations[0];
  const bestFare = document.getElementById("bestFare");
  const bestFareMeta = document.getElementById("bestFareMeta");
  const meter = document.getElementById("airfareMeter");
  const callout = document.getElementById("airfareCallout");

  if (!best) {
    bestFare.textContent = "No fares";
    bestFareMeta.textContent = "No airfare observations recorded yet.";
    callout.textContent = "Add observations to data/airfare-watch.json.";
    return;
  }

  const fare = best.directAirlineFare ?? best.discoveryFare;
  bestFare.textContent = formatMoney(fare);
  bestFareMeta.textContent = `${best.airline} ${best.origin}-MNL, ${best.departureDate}. ${best.directAirlineVerified ? "Airline-direct verified." : "Discovery signal only."}`;
  meter.style.width = `${Math.max(24, Math.round((best.buyConfidence || 0.3) * 100))}%`;
  callout.innerHTML = `${recommendationPill(summary.systemRecommendation)} <span>Best current path: ${best.routing}</span>`;
}

function renderSummary(summary) {
  const summaryEl = document.getElementById("airfareSummary");
  const topVerified = summary.topVerified?.[0];
  const topSignal = summary.strongestSignals?.[0];
  const cards = [
    ["System call", summary.systemRecommendation, "Quality-first recommendation state across the current watch."],
    ["Verified fares", `${summary.directVerifiedCount}/${summary.observationCount}`, topVerified ? `${topVerified.airline} leads the verified set.` : "No direct checkout captured yet."],
    ["Discovery leads", `${summary.discoveryOnlyCount}`, topSignal ? `${topSignal.airline} still needs direct checkout proof.` : "All active observations are verified."],
    ["Best verified", topVerified ? formatMoney(topVerified.directAirlineFare) : "None yet", topVerified ? `${topVerified.routing} with confidence ${formatPercent(topVerified.buyConfidence)}.` : "BOOK states remain blocked until verification exists."],
    ["Historical-low pressure", topVerified?.historicalLowDelta != null ? formatMoney(topVerified.historicalLowDelta) : "n/a", topVerified ? "Distance from route-specific historical low." : "Waiting for first verified benchmark."],
    ["Volatility watch", topVerified ? formatPercent(topVerified.volatilityScore) : "n/a", "Higher volatility tightens the monitoring cadence."]
  ];

  summaryEl.innerHTML = cards.map(([label, value, detail]) => summaryCard(label, value, detail)).join("");
}

function renderRows(targetId, items, isVerifiedTable) {
  const rows = document.getElementById(targetId);
  if (!items.length) {
    rows.innerHTML = `<tr><td colspan="10">No ${isVerifiedTable ? "verified" : "discovery"} fares available.</td></tr>`;
    return;
  }

  rows.innerHTML = items.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${item.origin}</td>
      <td>${item.departureDate}</td>
      <td>${item.airline}</td>
      <td>${item.routing}</td>
      <td>${formatMoney(item.directAirlineFare ?? item.discoveryFare)}</td>
      <td>${item.routeQualityScore ? item.routeQualityScore.toFixed(2) : "n/a"}</td>
      <td>${formatPercent(item.buyConfidence)}</td>
      <td>${verificationPill(item)} ${recommendationPill(item.recommendationState)}</td>
      <td>${isVerifiedTable
        ? `Bag ${item.baggageIncluded ? "yes" : "no"}; protected ${item.protectedRouting ? "yes" : "no"}`
        : `Missing: ${[
          typeof item.directAirlineFare === "number" ? null : "price",
          item.baggageIncluded === true ? null : "bag",
          item.protectedRouting === true ? null : "protection"
        ].filter(Boolean).join(", ")}`}</td>
    </tr>
  `).join("");
}

function renderInsights(summary, observations) {
  const insights = document.getElementById("airfareInsights");
  const bestVerified = summary.topVerified?.[0];
  const strongestSignal = summary.strongestSignals?.[0];
  const lowestDelta = observations
    .filter((item) => typeof item.historicalLowDelta === "number")
    .sort((a, b) => a.historicalLowDelta - b.historicalLowDelta)[0];

  const cards = [
    {
      title: "Buy-window signal",
      badge: summary.systemRecommendation,
      body: bestVerified
        ? `${bestVerified.airline} is the cleanest verified option at ${formatMoney(bestVerified.directAirlineFare)} with route quality ${bestVerified.routeQualityScore.toFixed(2)} and buy confidence ${formatPercent(bestVerified.buyConfidence)}.`
        : "No direct-airline checkout has been fully recorded yet, so the system is intentionally holding at watch states."
    },
    {
      title: "Historical-low watch",
      badge: lowestDelta?.historicalLowDelta != null ? formatMoney(lowestDelta.historicalLowDelta) : "n/a",
      body: lowestDelta
        ? `${lowestDelta.airline} ${lowestDelta.routing} is currently closest to its route-specific historical low.`
        : "Historical-low comparisons will populate once observations carry pricing baselines."
    },
    {
      title: "Discovery risk",
      badge: strongestSignal ? "Needs checkout" : "Clear",
      body: strongestSignal
        ? `${strongestSignal.airline} ${strongestSignal.routing} still cannot become a buy call until airline-direct baggage, price, and protection are confirmed.`
        : "No discovery-only leads are currently outranking the verified set."
    }
  ];

  insights.innerHTML = cards.map((card) => `
    <article class="transit-card">
      <span class="badge">${card.badge}</span>
      <h3>${card.title}</h3>
      <p>${card.body}</p>
    </article>
  `).join("");
}

function renderRules(watch) {
  const rules = document.getElementById("airfareRules");
  const groups = [
    ["Book", watch.buyRules.book],
    ["Watch", watch.buyRules.watch],
    ["Avoid", watch.buyRules.avoid]
  ];

  rules.innerHTML = groups.map(([title, items]) => `
    <article class="transit-card">
      <span class="badge">${title}</span>
      <h3>${title} rules</h3>
      <ul class="airfare-rule-list">
        ${createRuleList(items)}
      </ul>
    </article>
  `).join("");
}

async function init() {
  try {
    const [watchResponse, summaryResponse] = await Promise.all([
      fetch(AIRFARE_DATA_URL),
      fetch(AIRFARE_SUMMARY_URL)
    ]);
    if (!watchResponse.ok) throw new Error(`Unable to load airfare data: ${watchResponse.status}`);
    if (!summaryResponse.ok) throw new Error(`Unable to load airfare summary: ${summaryResponse.status}`);

    const watch = await watchResponse.json();
    const summary = await summaryResponse.json();
    const observations = [
      ...(summary.rankedVerified || []),
      ...(summary.rankedDiscovery || [])
    ];
    const verified = summary.rankedVerified || [];
    const discovery = summary.rankedDiscovery || [];

    renderHero(summary, observations);
    renderSummary(summary);
    renderRows("verifiedAirfareRows", verified, true);
    renderRows("discoveryAirfareRows", discovery, false);
    renderInsights(summary, observations);
    renderRules(watch);
  } catch (error) {
    document.getElementById("bestFare").textContent = "Load error";
    document.getElementById("bestFareMeta").textContent = error.message;
    document.getElementById("airfareCallout").textContent = error.message;
    document.getElementById("verifiedAirfareRows").innerHTML = `<tr><td colspan="10">${error.message}</td></tr>`;
    document.getElementById("discoveryAirfareRows").innerHTML = `<tr><td colspan="10">${error.message}</td></tr>`;
  }
}

init();
