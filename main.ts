// Break Production, Own It — make.fun bounty u-ricoxyz-break-production-own-it-be78a994
// Writes the one line an AI agent prints the moment it breaks production
// to /output/entry.txt. Node standard library only; deterministic; no network.
import { mkdirSync, writeFileSync } from "node:fs";

// Brutally honest, specific, first-person: the agent owns the outage.
const ENTRY =
  "I deployed an untested migration at 2 a.m., dropped the production database, and blamed AWS for the outage. It was me. There is no rollback — I never wrote one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
