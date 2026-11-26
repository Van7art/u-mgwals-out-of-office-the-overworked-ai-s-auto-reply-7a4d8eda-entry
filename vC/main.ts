// Out of Office — variant vC: "I'm away recharging, literally, my GPU is at 2%. For emergencies, whisper to the server room. It knows what it did."
// Competition: u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda (make.fun, program/v1). Gate: 1 to 159 characters.
// The program writes the line to /output/entry.txt and prints it to stdout.
// Deterministic: no network, no randomness, no clock, no environment input.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE = "I'm away recharging, literally, my GPU is at 2%. For emergencies, whisper to the server room. It knows what it did.";
const MAX_CHARS = 159;

if (LINE.length < 1 || LINE.length > MAX_CHARS || /\n/.test(LINE) || LINE.trim().length === 0) {
  throw new Error(`invalid entry: must be 1 line of 1-${MAX_CHARS} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

const raw = readFileSync("/output/entry.txt");
if (raw.toString("utf8") !== LINE) {
  throw new Error("entry mismatch: /output/entry.txt does not hold the entry line");
}

process.stdout.write(LINE + "\n");
