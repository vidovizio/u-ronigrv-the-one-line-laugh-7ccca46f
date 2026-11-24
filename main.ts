import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const JOKE_TEXT = "I cook like a pro, plate like a critic, then eat over the sink like the goblin I am.";

if (JOKE_TEXT.length === 0 || JOKE_TEXT.length > 200) {
  throw new Error(`Joke text must be 1-200 characters, got ${JOKE_TEXT.length}`);
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE_TEXT + "\n", "utf-8");