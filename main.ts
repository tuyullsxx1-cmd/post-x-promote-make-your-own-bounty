import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Copy the submitted post address (POST.json) into the grader's output
// directory. That is all this program does: no network, no clock, no
// files outside the repository.
const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(botDir, "POST.json");

if (!existsSync(source)) {
  console.error("POST.json not found in " + botDir);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "POST.json"));
