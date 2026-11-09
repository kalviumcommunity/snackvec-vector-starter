// test.js — GIVEN, do not edit. Run with: npm test
import { cosineSimilarity, topK, filteredSearch, recallAtK, reciprocalRank } from "./search.js";
import { Q_DB, Q_FOOD } from "./data.js";

let passed = 0, failed = 0;
function check(name, actual, expected) {
  const ok =
    typeof expected === "number" && typeof actual === "number"
      ? Math.abs(actual - expected) < 1e-3
      : JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) { passed++; console.log(`  PASS  ${name}`); }
  else { failed++; console.log(`  FAIL  ${name}\n        expected: ${JSON.stringify(expected)}\n        got:      ${JSON.stringify(actual)}`); }
}
function run(label, fn) {
  console.log(`\n${label}`);
  try { fn(); } catch (e) { failed++; console.log(`  FAIL  threw: ${e.message}`); }
}

run("Task 1 — cosineSimilarity", () => {
  check("same direction = 1", cosineSimilarity([1, 2, 3], [2, 4, 6]), 1);
  check("unrelated = 0", cosineSimilarity([1, 0], [0, 1]), 0);
  check("[1,1] vs [1,0] = 0.7071", cosineSimilarity([1, 1], [1, 0]), 0.7071);
});

run("Task 2 — topK", () => {
  check("top 2 for Q_DB", topK(Q_DB, 2), ["d1", "d2"]);
  check("top 1 for Q_FOOD", topK(Q_FOOD, 1), ["d3"]);
  check("top 3 for Q_FOOD", topK(Q_FOOD, 3), ["d3", "d4", "d6"]);
});

run("Task 3 — filteredSearch", () => {
  check("food only, Q_DB, top 2", filteredSearch(Q_DB, 2, "food"), ["d4", "d3"]);
  check("tech only, Q_FOOD, top 1", filteredSearch(Q_FOOD, 1, "tech"), ["d1"]);
  check("unknown category -> []", filteredSearch(Q_DB, 3, "music"), []);
});

run("Task 4 — recall & reciprocal rank", () => {
  const ranked = ["d4", "d3", "d6"];
  check("recall@2, d3 found = 1", recallAtK(ranked, "d3", 2), 1);
  check("recall@1, d3 missed = 0", recallAtK(ranked, "d3", 1), 0);
  check("RR first = 1", reciprocalRank(ranked, "d4"), 1);
  check("RR third = 0.3333", reciprocalRank(ranked, "d6"), 0.3333);
  check("RR missing = 0", reciprocalRank(ranked, "d1"), 0);
});

console.log(`\n  RESULT: ${passed} passed, ${failed} failed`);
if (failed === 0) console.log("✓ All tests passed!");
process.exit(failed === 0 ? 0 : 1);
