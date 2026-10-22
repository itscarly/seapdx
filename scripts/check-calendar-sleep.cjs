const assert=require('node:assert/strict');
const events=require('../data/google-calendar-events-nov1-9-2026.json');
const sleeps=events.filter(e=>/· Sleep ·/.test(e.title));
assert.equal(sleeps.length,9);
assert.equal(new Set(events.map(e=>e.title+'|'+e.start)).size,events.length);
for(const s of sleeps){
 const hours=(Date.parse(s.end)-Date.parse(s.start))/3600000;
 assert(hours>=8 && hours<=10.1,s.title+': '+hours);
 assert(events.filter(e=>e!==s && Date.parse(e.start)<Date.parse(s.end) && Date.parse(e.end)>Date.parse(s.start)).length===0,s.title);
 assert(Number(s.start.slice(11,13))>=22,s.title);
}
const a=events.find(e=>e.title.includes('Flight PDX -> DFW')),b=events.find(e=>e.title.includes('Flight DFW -> CRP'));
assert.equal(a.start,'2026-11-09T14:34:00-08:00');assert.equal(a.end,'2026-11-09T18:29:00-08:00');
assert.equal(b.start,'2026-11-09T20:30:00-08:00');assert.equal(b.end,'2026-11-09T21:58:00-08:00');
assert.equal(sleeps.at(-1).start,'2026-11-09T22:30:00-08:00');
console.log('PASS: nine explicit sleep blocks, 8–10h05 overnight, no overlaps; Central flight times converted to Pacific.');
console.log(JSON.stringify(sleeps.map(e=>({night:e.start.slice(0,10),from:e.start.slice(11,16),to:e.end.slice(11,16),hours:(Date.parse(e.end)-Date.parse(e.start))/3600000})),null,1));
