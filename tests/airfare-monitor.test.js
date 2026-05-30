const test = require("node:test");
const assert = require("node:assert/strict");

function shouldRunToday(nowDate) {
  const septemberStart = new Date("2026-09-01T00:00:00Z");
  const octoberStart = new Date("2026-10-01T00:00:00Z");
  const dayOfWeek = nowDate.getUTCDay();

  if (nowDate >= octoberStart) {
    return { run: [1, 3, 5].includes(dayOfWeek), reason: "three times weekly (Oct+)" };
  }

  if (nowDate >= septemberStart) {
    return { run: [1, 4].includes(dayOfWeek), reason: "twice weekly (Sep)" };
  }

  return { run: dayOfWeek === 1, reason: "weekly (before Sep)" };
}

test("monitor runs weekly before September 2026", () => {
  const monday = shouldRunToday(new Date("2026-08-03T12:00:00Z"));
  const tuesday = shouldRunToday(new Date("2026-08-04T12:00:00Z"));

  assert.equal(monday.run, true);
  assert.equal(tuesday.run, false);
  assert.equal(monday.reason, "weekly (before Sep)");
});

test("monitor runs twice weekly in September 2026 on Monday and Thursday", () => {
  const monday = shouldRunToday(new Date("2026-09-07T12:00:00Z"));
  const thursday = shouldRunToday(new Date("2026-09-10T12:00:00Z"));
  const wednesday = shouldRunToday(new Date("2026-09-09T12:00:00Z"));
  const friday = shouldRunToday(new Date("2026-09-11T12:00:00Z"));

  assert.equal(monday.run, true);
  assert.equal(thursday.run, true);
  assert.equal(wednesday.run, false);
  assert.equal(friday.run, false);
  assert.equal(thursday.reason, "twice weekly (Sep)");
});

test("monitor runs three times weekly from October 2026 onward", () => {
  const monday = shouldRunToday(new Date("2026-10-05T12:00:00Z"));
  const wednesday = shouldRunToday(new Date("2026-10-07T12:00:00Z"));
  const friday = shouldRunToday(new Date("2026-10-09T12:00:00Z"));
  const thursday = shouldRunToday(new Date("2026-10-08T12:00:00Z"));

  assert.equal(monday.run, true);
  assert.equal(wednesday.run, true);
  assert.equal(friday.run, true);
  assert.equal(thursday.run, false);
  assert.equal(monday.reason, "three times weekly (Oct+)");
});
