// search.js — YOU edit this file. Finish the 5 functions marked TODO.
// Plain JavaScript only. No packages, no API keys, no database needed.
import { DOCS } from "./data.js";

// ---------- Task 1 ----------
// Cosine similarity of two equal-length number arrays.
//   cos(a, b) = (a · b) / (|a| × |b|)
//   a · b = sum of a[i] * b[i]      |a| = sqrt(sum of a[i]²)
// Return a Number (1 = same direction, 0 = unrelated).
export function cosineSimilarity(a, b) {
  // TODO
}

// ---------- Task 2 ----------
// Brute-force K nearest neighbours.
// Score EVERY doc in DOCS against queryVec using cosineSimilarity,
// sort highest score first, keep the first k.
// Return an array of doc ids, e.g. ["d1", "d2"].
export function topK(queryVec, k) {
  // TODO
}

// ---------- Task 3 ----------
// Filtered search: same as topK, but ONLY consider docs whose
// category === category. Filter first, then score, sort and take k.
// Return an array of doc ids.
export function filteredSearch(queryVec, k, category) {
  // TODO
}

// ---------- Task 4 ----------
// Evaluation. `ranked` is an array of ids a search returned, best first.
//
// recallAtK(ranked, correctId, k)
//   -> 1 if correctId is in the first k items of `ranked`, else 0.
export function recallAtK(ranked, correctId, k) {
  // TODO
}

// reciprocalRank(ranked, correctId)
//   -> 1 / position of correctId (position starts at 1).
//      1st -> 1, 2nd -> 0.5, 3rd -> 0.333...   Not found -> 0.
export function reciprocalRank(ranked, correctId) {
  // TODO
}
