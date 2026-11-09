// test.js — GIVEN, do not edit. Run with: npm test
const { execFileSync } = require("child_process");
const { cosineSimilarity, reciprocalRank } = require("./search.js");

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
  check("1st place = 1", reciprocalRank(ranked, ["d4"]), 1);
  check("2nd place = 0.5", reciprocalRank(ranked, ["d3"]), 0.5);
  check("3rd place = 0.3333", reciprocalRank(ranked, ["d6"]), 0.3333);
  check("first of several correct ids = 0.5", reciprocalRank(ranked, ["d3", "d6"]), 0.5);
  check("not found = 0", reciprocalRank(ranked, ["d1"]), 0);
});

let out = "";
try { out = execFileSync("node", ["eval.js"], { encoding: "utf8" }); } catch (e) { out = ""; }

run("Task 3 — MRR printed by eval.js", () => {
  check("prints MRR: 0.46", out.includes("MRR: 0.46"), true);
});

run("Task 4 — Recall printed by eval.js", () => {
  check("prints Recall@3: 0.75", out.includes("Recall@3: 0.75"), true);
});

console.log(`\n  RESULT: ${passed} passed, ${failed} failed`);
if (failed === 0) console.log("✓ All tests passed!");
process.exit(failed === 0 ? 0 : 1);
