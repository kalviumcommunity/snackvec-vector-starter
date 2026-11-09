// eval.js — YOU edit this file (Task 3 and Task 4). Run: node eval.js
// Same idea as the Measuring Retrieval assignment: loop over the queries,
// compute MRR and Recall, print them.
const { RESULTS } = require("./data.js");
const { reciprocalRank } = require("./search.js");

// ---------- Task 3 ----------
// For every item in RESULTS, call reciprocalRank(item.ranked, item.correctIds)
// and add it up.  mrr = (sum of reciprocal ranks) / (number of queries)
let mrr = 0;
// TODO

// ---------- Task 4 ----------
// Count a "hit" whenever the correct answer was found in the list (reciprocal rank > 0).
//   recall = hits / (number of queries)
let recall = 0;
// TODO

// ---------- Print (already done for you) ----------
console.log(`MRR: ${mrr.toFixed(2)}`);
console.log(`Recall@3: ${recall.toFixed(2)}`);
