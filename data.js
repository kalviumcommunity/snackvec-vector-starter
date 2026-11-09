// data.js — GIVEN, do not edit.
// Pretend results from a search system: for each query, the ranked list of post ids
// it returned (best first, top 3) and the correct post id(s).
// No API, no key, no database, no internet.

const RESULTS = [
  { query: "speed up my database", ranked: ["d1", "d2", "d3"], correctIds: ["d1"] },
  { query: "easy dinner ideas",    ranked: ["d4", "d3", "d6"], correctIds: ["d3"] },
  { query: "plan a beach trip",    ranked: ["d5", "d2", "d6"], correctIds: ["d6"] },
  { query: "learn guitar",         ranked: ["d1", "d2", "d3"], correctIds: ["d9"] },
];

module.exports = { RESULTS };
