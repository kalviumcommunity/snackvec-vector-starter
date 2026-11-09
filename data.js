// data.js — GIVEN, do not edit.
// Pretend results from a search system: for each query, the ranked list of post ids
// it returned (best first) and the id of the post that was the correct answer.
// No API, no key, no database, no internet.

export const RESULTS = [
  { query: "speed up my database", ranked: ["d1", "d2", "d3"], correct: "d1" },
  { query: "easy dinner ideas",    ranked: ["d4", "d3", "d6"], correct: "d3" },
  { query: "plan a beach trip",    ranked: ["d5", "d2", "d6"], correct: "d6" },
  { query: "learn guitar",         ranked: ["d1", "d2", "d3"], correct: "d9" },
];
