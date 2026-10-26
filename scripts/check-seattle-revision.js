const assert = require('node:assert/strict');
global.window = {};
require('../data/trip-data.js');
const d = window.TRIP_DATA;
const cents = x => Math.round(x * 100);
const days = d.itinerary.slice(1,4);
assert.deepEqual(days.map(x => cents(x.dayTotal)), [19775,14796,7872]);
assert.equal(cents(d.budget.projectedTotal),205219);
assert.equal(cents(d.budget.categories.reduce((a,c)=>a+c.amount,0)),205219);
assert(d.budget.categories.every(c=>c.amount>=0));
for(const day of d.itinerary)for(const s of day.segments.flatMap(x=>x.items)){
 assert(s.route && s.mapFrom && s.mapTo,s.name);
 assert(s.route.includes('travelmode='),s.name);
 if(s.budgetParts)assert.equal(cents(s.budgetParts.reduce((a,p)=>a+p.amount,0)),cents(s.cost));
}
function minutes(t){let [c,m]=t.split(' '),[h,n]=c.split(':').map(Number);return (h%12+(m==='PM'?12:0))*60+n;}
for(const day of days){
 const stops=day.segments.flatMap(x=>x.items);
 for(let i=0;i<stops.length;i++){
  const s=stops[i];assert(s.endDate>day.isoDate || minutes(s.endTime)>minutes(s.time),s.name);
  if(i)assert(minutes(stops[i-1].endTime)<=minutes(s.time),s.name);
  if(s.type==='rest')assert(minutes(s.time)>=1200,s.name);
  assert(s.coordinates,s.name);
 }
 assert(stops.some(s=>s.mapTo.includes('Palihotel')&&minutes(s.endTime)<=1200));
 assert(!stops.some(s=>/Smith Tower|Snoqualmie|Twin Falls/.test(s.name)));
}
const all=days.flatMap(d=>d.segments.flatMap(x=>x.items));
assert.equal(all.filter(s=>s.name.startsWith('Monorail ·')).length,2);
assert.equal(all.find(s=>s.name.startsWith('Proper Fish')).cost,29.18);
assert.equal(all.find(s=>s.name.startsWith('Argosy')).cost,63.28);
assert(!all.some(s=>s.name.startsWith('First to Board')));
assert.equal(all.find(s=>s.name.startsWith('Happy hour · Zig Zag')).cost,29.42);
assert.equal(all.find(s=>s.name.startsWith('Toulouse Petit · two')).cost,28.28);
assert(all.some(s=>s.name.includes('SpaceBase')));
assert(!d.itinerary[7].segments.flatMap(x=>x.items).some(s=>/waterfall|Sasquatch/i.test(s.name)));
const calendarEvents=require('../data/google-calendar-events-nov1-9-2026.json');
assert.equal(calendarEvents.length,d.itinerary.flatMap(x=>x.segments.flatMap(s=>s.items)).length);
assert.equal(new Set(calendarEvents.map(e=>e.title+'|'+e.start)).size,calendarEvents.length);
assert(calendarEvents.every(e=>Date.parse(e.end)>Date.parse(e.start)));
const cruise=calendarEvents.find(e=>e.title.includes('Argosy Harbor Cruise'));
assert.equal(cruise.start,'2026-11-03T14:45:00-08:00');assert.equal(cruise.end,'2026-11-03T15:45:00-08:00');
console.log('PASS: revised costs, maps, non-overlap, 8 PM returns, fare model and calendar exports.');
