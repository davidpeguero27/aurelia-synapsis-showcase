import { readFileSync } from "node:fs";

const requiredState = "outcome_unknown";
const forbiddenPhrases = [
  "verified safe review state",
  "uncertain outcome",
  "unknown outcome"
];

const sourceFiles = [
  "src/App.tsx",
  "README.md",
  "public/aurelia-demo-transcript.txt"
];

const distFiles = [
  "dist/server/index.js",
  "dist/aurelia-demo-transcript.txt"
];

function assertIncludes(file, content, value) {
  if (!content.includes(value)) {
    throw new Error(`${file} must include ${value}`);
  }
}

function assertExcludes(file, content, value) {
  if (content.toLowerCase().includes(value.toLowerCase())) {
    throw new Error(`${file} still contains non-standard outcome wording: ${value}`);
  }
}

for (const file of sourceFiles) {
  const content = readFileSync(file, "utf8");
  assertIncludes(file, content, requiredState);
  for (const phrase of forbiddenPhrases) {
    assertExcludes(file, content, phrase);
  }
}

for (const file of distFiles) {
  const content = readFileSync(file, "utf8");
  assertIncludes(file, content, requiredState);
}

console.log("Showcase content validation passed.");
