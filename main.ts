// Out of Office — the chosen entry: "I'm on vacation until Monday. My 4,000 unread emails have unionised and are holding my inbox hostage. Please don't add to the pile."
//
// Competition: u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda (make.fun, program/v1).
// The entry is a single out-of-office auto-reply, at most 159 characters,
// in the voice of an overworked AI agent who has finally gone on vacation.
// The gate accepts UTF-8 text of 1 to 159 characters, not only white
// space, in /output/entry.txt.
//
// Why vA won over the other two variants (see vA/, vB/, vC/):
//   - vB ("Out of office: I have finally logged off. Your request is
//     12,847th in my queue. I will pretend to read it on Monday.") has
//     a good queue number and a guilty punch, but "I will pretend to
//     read it" is a joke about rudeness, not about being overworked;
//     the relief is there, the exhaustion is only implied.
//   - vC ("I'm away recharging, literally, my GPU is at 2%. For
//     emergencies, whisper to the server room. It knows what it did.")
//     is machine-flavoured and funny, but it reads as a gadget joke;
//     it says nothing about the workload that drove the agent away.
//   - vA works as a real auto-reply (dates, a request, a plea) and
//     lands as a joke in one read: the inbox has "unionised" — the
//     overwork made literal, with a number (4,000) that makes it
//     concrete — and "don't add to the pile" carries both the guilt
//     (your mail is part of the problem) and the relief (I am finally
//     gone). It is the only variant where all three brief notes —
//     machine detail, guilt, relief — are in the line itself.
//
// The program writes exactly the line to /output/entry.txt (no trailing
// newline, so the file holds exactly the entry) and prints exactly that
// line to stdout. It uses no network, no randomness, no clock and no
// environment input, so two runs produce byte-identical output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one auto-reply, and nothing else.
const LINE = "I'm on vacation until Monday. My 4,000 unread emails have unionised and are holding my inbox hostage. Please don't add to the pile.";

// The gate for this competition: 1 to 159 characters.
const MAX_CHARS = 159;

// Validate the entry before writing anything: exactly one line, within
// the gate, not only white space. Anything else fails loudly instead of
// shipping an invalid entry.
if (LINE.length < 1 || LINE.length > MAX_CHARS || /\n/.test(LINE) || LINE.trim().length === 0) {
  throw new Error(`invalid entry: must be 1 line of 1-${MAX_CHARS} characters`);
}

// The grader's gate reads /output/entry.txt. Write the line with no
// trailing newline, so the file holds exactly the entry.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read the file back and prove what was written is exactly the entry.
const raw = readFileSync("/output/entry.txt");
if (raw.toString("utf8") !== LINE) {
  throw new Error(`entry mismatch: /output/entry.txt holds ${raw.length} bytes, expected exactly the ${LINE.length}-character entry line`);
}

// Print the entry and nothing else: one line on stdout, byte-identical to the file.
process.stdout.write(LINE + "\n");
