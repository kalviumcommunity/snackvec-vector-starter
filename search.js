// search.js — YOU edit this file (Task 1 and Task 2).
// Plain JavaScript only. No packages, no API keys, no database needed.

// ---------- Task 1 ----------
// Cosine similarity of two equal-length number arrays:
//   dot(a, b) = sum of a[i] * b[i]
//   norm(a)   = Math.sqrt(dot(a, a))
//   cosine    = dot(a, b) / (norm(a) * norm(b))
function cosineSimilarity(a, b) {
  // TODO
}

// ---------- Task 2 ----------
// Reciprocal Rank for ONE query.
// `rankedIds` = ids, best first. `correctIds` = array of right answers.
// Find the rank of the FIRST correct id (rank starts at 1) and return 1 / rank.
//   1st -> 1, 2nd -> 0.5, 3rd -> 0.3333
// If none of the correct ids appear -> return 0.
function reciprocalRank(rankedIds, correctIds) {
  // TODO
}

module.exports = { cosineSimilarity, reciprocalRank };
