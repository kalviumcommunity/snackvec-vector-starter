// data.js — GIVEN, do not edit.
// A tiny pretend "vector database": 6 articles, each with a hand-made 4-number
// embedding (dimensions ~ [tech, food, sports, travel]). No API, no key, no internet.

export const DOCS = [
  { id: "d1", title: "Scaling Postgres",       category: "tech",   vector: [0.9, 0.1, 0.0, 0.1] },
  { id: "d2", title: "Redis Caching Tips",     category: "tech",   vector: [0.8, 0.0, 0.1, 0.2] },
  { id: "d3", title: "Homemade Pasta",         category: "food",   vector: [0.0, 0.9, 0.1, 0.1] },
  { id: "d4", title: "Street Food Guide",      category: "food",   vector: [0.1, 0.8, 0.0, 0.4] },
  { id: "d5", title: "Cricket Batting Basics", category: "sports", vector: [0.0, 0.1, 0.9, 0.1] },
  { id: "d6", title: "Goa Travel Plan",        category: "travel", vector: [0.1, 0.4, 0.1, 0.9] },
];

// Pretend query embeddings
export const Q_DB   = [0.85, 0.05, 0.05, 0.1]; // "how do I speed up my database?"
export const Q_FOOD = [0.05, 0.9, 0.05, 0.2];  // "easy dinner ideas"
