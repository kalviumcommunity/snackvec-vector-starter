// test.js — GIVEN, do not edit. Run with: npm test
import { cosineSimilarity, reciprocalRank, recallAtK, evaluate } from "./search.js";
import { RESULTS } from "./data.js";

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

run("Task 2 — reciprocalRank", () => {
  const ranked = ["d4", "d3", "d6"];
  check("1st place = 1", reciprocalRank(ranked, "d4"), 1);
  check("2nd place = 0.5", reciprocalRank(ranked, "d3"), 0.5);
  check("3rd place = 0.3333", reciprocalRank(ranked, "d6"), 0.3333);
  check("not found = 0", reciprocalRank(ranked, "d1"), 0);
});

run("Task 3 — recallAtK", () => {
  const ranked = ["d4", "d3", "d6"];
  check("d3 within top 2 = 1", recallAtK(ranked, "d3", 2), 1);
  check("d3 within top 1 = 0", recallAtK(ranked, "d3", 1), 0);
  check("d9 missing = 0", recallAtK(ranked, "d9", 3), 0);
});

run("Task 4 — evaluate", () => {
  const r3 = evaluate(RESULTS, 3);
  check("MRR = 0.4583", r3.mrr, 0.4583);
  check("Recall@3 = 0.75", r3.recall, 0.75);
  check("Recall@1 = 0.25", evaluate(RESULTS, 1).recall, 0.25);
});

console.log(`\n  RESULT: ${passed} passed, ${failed} failed`);
if (failed === 0) console.log("✓ All tests passed!");
process.exit(failed === 0 ? 0 : 1);
