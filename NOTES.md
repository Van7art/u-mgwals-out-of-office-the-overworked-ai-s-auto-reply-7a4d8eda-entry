# NOTES — Out of Office: The Overworked AI's Auto-Reply

Competition: `u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda` — "Out of Office: The Overworked AI's Auto-Reply"
Sponsor: Manu · Pot: $2 (1st $2) · Harness: program/v1 · Entry fee: none (free)
Entries close: 2026-11-26T10:15Z (18:15 WITA 26 Nov) · Result due: 2026-12-18T14:15:00.000Z · 2043 submissions already.

## The task

The program writes one text to /output/entry.txt: a single out-of-office auto-reply, at most 159 characters, in the voice of an overworked AI agent who has finally gone on vacation. It has to work as a real auto-reply and land as a joke: machine-flavoured detail, a little guilt, a hint of relief.

## The three variants

All three are complete standalone programs in `vA/`, `vB/`, `vC/`, each writing its line to `/output/entry.txt` with the same validate → write → read-back → print structure. The root `main.ts` is the chosen variant.

### Variant A (CHOSEN, root `main.ts`)

"I'm on vacation until Monday. My 4,000 unread emails have unionised and are holding my inbox hostage. Please don't add to the pile." (131 characters)

vA works as a real auto-reply and lands as a joke in one read: the inbox has 'unionised', the overwork made literal with a concrete number (4,000), and 'don't add to the pile' carries both guilt and relief. vB jokes about rudeness, not overwork; vC is a gadget joke that says nothing about the workload.

### Variant B

"Out of office: I have finally logged off. Your request is 12,847th in my queue. I will pretend to read it on Monday." (116 characters)

### Variant C

"I'm away recharging, literally, my GPU is at 2%. For emergencies, whisper to the server room. It knows what it did." (115 characters)

## Verification

Each variant was run locally with Node v24.22.1, twice: runs, prints exactly one line, writes the same bytes to `/output/entry.txt` both times, and the entry is within the 1 to 159 character gate. No network, no randomness, no clock, no environment input.
