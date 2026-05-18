const fs = require("fs");
const path = require("path");

const root = process.cwd();

const requiredFiles = [
  "notes/Home.md",
  "notes/PROJECT_CONTEXT.md",
  "notes/ARCHITECTURE.md",
  "notes/DECISIONS.md",
  "notes/CHANGELOG.md",
  "notes/TASKS.md",
  "notes/LEARNINGS.md",
  "notes/KNOWN_ISSUES.md",
  "notes/MAINTENANCE.md",
  "notes/Project Log.md",
  "hooks/post-task.md",
];

const requiredDirs = [
  "notes/memory/active",
  "notes/memory/archive",
  "notes/memory/permanent",
];

const homeLinks = [
  "[[PROJECT_CONTEXT]]",
  "[[ARCHITECTURE]]",
  "[[DECISIONS]]",
  "[[TASKS]]",
  "[[CHANGELOG]]",
  "[[LEARNINGS]]",
  "[[KNOWN_ISSUES]]",
  "[[MAINTENANCE]]",
  "[[Project Log]]",
];

const missing = [];

for (const rel of requiredFiles) {
  if (!fs.existsSync(path.join(root, rel))) missing.push(rel);
}

for (const rel of requiredDirs) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full) || !fs.statSync(full).isDirectory()) missing.push(rel);
}

if (missing.length) {
  console.error("Missing required note-system paths:");
  for (const rel of missing) console.error(`- ${rel}`);
  process.exit(1);
}

const home = fs.readFileSync(path.join(root, "notes/Home.md"), "utf8");
const missingLinks = homeLinks.filter((link) => !home.includes(link));

if (missingLinks.length) {
  console.error("notes/Home.md is missing required links:");
  for (const link of missingLinks) console.error(`- ${link}`);
  process.exit(1);
}

console.log("Notes structure audit passed.");
