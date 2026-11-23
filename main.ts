import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const line = "I cook like a pro, plate like a critic, then eat over the sink like the goblin I am.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, line + "\n", "utf-8");