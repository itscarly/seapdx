const reviewItems = [
  {
    name: "Sailing Seattle - Downtown Sail",
    check: "Confirm sail page, departure times, and ticket price.",
    url: "https://sailingseattle.com/sails"
  },
  {
    name: "Sky View Observatory",
    check: "Confirm hours, closure notices, and ticket price.",
    url: "https://skyviewobservatory.com/location/"
  },
  {
    name: "Portland Japanese Garden",
    check: "Confirm hours, admission, and timed-entry window.",
    url: "https://japanesegarden.org/hours-admission/"
  },
  {
    name: "Glo's Cafe",
    check: "Confirm hours and menu/homepage changes.",
    url: "https://www.glosseattle.com/home/"
  },
  {
    name: "Seattle Kraken",
    check: "Confirm schedule and single-game availability.",
    url: "https://www.nhl.com/kraken/tickets/single-game"
  },
  {
    name: "Pike Place Market core stops",
    check: "Confirm the current route and menu/price pages for the stops already in the itinerary.",
    url: "https://www.pikeplacemarket.org/about-pike-place-market/plan-your-visit/"
  }
];

const pikePlaceStops = [
  "Pike Place Market sign + arcade stroll",
  "Pike Place Market main loop + Totem Smokehouse",
  "Piroshky Piroshky",
  "Beecher's Handmade Cheese",
  "Daily Dozen Doughnut Company",
  "Mee Sum Pastry",
  "MarketSpice",
  "Rachel's Ginger Beer",
  "Totem Smokehouse",
  "Luke's Lobster lunch",
  "Sailing Seattle - Downtown Sail (1.5 hrs)",
  "Ghost Alley Espresso (coffee to-go before Northgate)",
  "Pike Place Starbucks"
];

function main() {
  const today = new Date().toISOString().slice(0, 10);

  console.log(`# Monthly Trip Review`);
  console.log(`Date: ${today}`);
  console.log("");
  console.log(`Subject: Seattle/Portland monthly price and schedule check`);
  console.log("");
  console.log(`Body:`);
  console.log(`Monthly review complete or due now.`);
  console.log(`Check these items before updating the itinerary:`);
  for (const item of reviewItems) {
    console.log(`- ${item.name}: ${item.check} ${item.url}`);
  }
  console.log("");
  console.log(`Pike Place / market list to keep explicit in the itinerary:`);
  for (const stop of pikePlaceStops) {
    console.log(`- ${stop}`);
  }
  console.log("");
  console.log(`If any price, menu, or schedule changed, update the itinerary and send a concise change note.`);
  console.log("");
  console.log(`# Quiet Status`);
  console.log(`No changes found means the saved baseline still matches the current official pages.`);
  console.log(`In that case, keep the itinerary unchanged and wait for the next scheduled review.`);
}

main();
