const test = require("node:test");
const assert = require("node:assert/strict");

// Test PAL award tax monitor cadence and trend logic

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

function shouldRunToday(nowDate) {
  const BOOKING_DEADLINE = new Date("2026-11-01T00:00:00Z");
  const dayOfWeek = nowDate.getUTCDay();

  if (nowDate >= BOOKING_DEADLINE) {
    return { run: false, deadline: true, reason: "Booking deadline passed" };
  }

  const sep2026 = new Date("2026-09-01T00:00:00Z");
  const oct2026 = new Date("2026-10-01T00:00:00Z");

  if (nowDate >= oct2026) return { run: true, reason: "daily — final month" };
  if (nowDate >= sep2026) {
    return { run: [1, 3, 5].includes(dayOfWeek), reason: "3x/week (Sep 2026)" };
  }
  return { run: dayOfWeek === 1, reason: "weekly (before Sep 2026)" };
}

test("tax trend detects a drop over last 3 entries", () => {
  const history = [
    { date: "2026-05-01", tax: 375 },
    { date: "2026-05-08", tax: 373 },
    { date: "2026-05-15", tax: 370.5 }
  ];
  assert.equal(calcTrend(history), "down");
});

test("tax trend detects a rise over last 3 entries", () => {
  const history = [
    { date: "2026-05-01", tax: 370 },
    { date: "2026-05-08", tax: 372 },
    { date: "2026-05-15", tax: 375.5 }
  ];
  assert.equal(calcTrend(history), "up");
});

test("tax trend is stable when change is under $0.50", () => {
  const history = [
    { date: "2026-05-01", tax: 370.5 },
    { date: "2026-05-08", tax: 370.3 }
  ];
  assert.equal(calcTrend(history), "stable");
});

test("tax trend returns stable with only one entry", () => {
  const history = [{ date: "2026-05-01", tax: 370.5 }];
  assert.equal(calcTrend(history), "stable");
});

test("monitor stops after Oct 31, 2026 hard deadline", () => {
  const nov1 = new Date("2026-11-01T08:00:00Z");
  const result = shouldRunToday(nov1);
  assert.equal(result.run, false);
  assert.equal(result.deadline, true);
});

test("monitor runs daily throughout October 2026", () => {
  const days = [2, 7, 15, 22, 31].map(d => {
    const date = new Date(`2026-10-${String(d).padStart(2, "0")}T08:00:00Z`);
    return shouldRunToday(date);
  });
  for (const r of days) {
    assert.equal(r.run, true, `Expected daily run in October, got: ${JSON.stringify(r)}`);
  }
});

test("monitor runs 3x/week in September 2026 (Mon/Wed/Fri only)", () => {
  // 2026-09-07 = Monday, 2026-09-09 = Wednesday, 2026-09-11 = Friday
  const mon = shouldRunToday(new Date("2026-09-07T08:00:00Z"));
  const wed = shouldRunToday(new Date("2026-09-09T08:00:00Z"));
  const fri = shouldRunToday(new Date("2026-09-11T08:00:00Z"));
  const tue = shouldRunToday(new Date("2026-09-08T08:00:00Z"));

  assert.equal(mon.run, true);
  assert.equal(wed.run, true);
  assert.equal(fri.run, true);
  assert.equal(tue.run, false);
});

test("monitor runs only on Mondays before Sep 2026", () => {
  // 2026-08-03 = Monday, 2026-08-04 = Tuesday
  const mon = shouldRunToday(new Date("2026-08-03T08:00:00Z"));
  const tue = shouldRunToday(new Date("2026-08-04T08:00:00Z"));
  assert.equal(mon.run, true);
  assert.equal(tue.run, false);
});
