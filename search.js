// search.js — YOU edit this file. Finish the 4 functions marked TODO.
// Plain JavaScript only. No packages, no API keys, no database needed.

// ---------- Task 1 ----------
// Cosine similarity of two equal-length number arrays (same as the lesson):
//   dot(a, b) = sum of a[i] * b[i]
//   norm(a)   = Math.sqrt(dot(a, a))
//   cosine    = dot(a, b) / (norm(a) * norm(b))
export function cosineSimilarity(a, b) {
  // TODO
}

// ---------- Task 2 ----------
// Reciprocal Rank for ONE query.
// `ranked` = array of ids, best first. `correctId` = the right answer.
// Return 1 / rank of correctId (rank starts at 1): 1st -> 1, 2nd -> 0.5, 3rd -> 0.3333
// If correctId is not in `ranked` -> return 0.
export function reciprocalRank(ranked, correctId) {
  // TODO
}

// ---------- Task 3 ----------
// Recall@k for ONE query.
// Return 1 if correctId is within the first k items of `ranked`, else 0.
export function recallAtK(ranked, correctId, k) {
  // TODO
}

// ---------- Task 4 ----------
// Evaluate a whole result set (the RESULTS array in data.js).
// For every item, use reciprocalRank and recallAtK, then AVERAGE them.
// Return an object: { mrr, recall }
//   mrr    = average of the reciprocal ranks
//   recall = average of the recall@k values
export function evaluate(results, k) {
  // TODO
}
