#!/usr/bin/env node
/**
 * gen-component-inventory.mjs — walk `src/api/index.ts` and emit a
 * JSON inventory of every public component + type alongside.
 *
 * Output: `docs/COMPONENT-INVENTORY.json`
 *
 * Run via: `node scripts/gen-component-inventory.mjs`
 * Or:      `npm run docs:inventory` (after wiring up in package.json).
 *
 * Why: replaces the manual "Component inventory" library page with a
 * source of truth that always matches the actual exports. CI can diff
 * the output against a checked-in snapshot to catch surface drift.
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const apiIndex = resolve(root, "src/api/index.ts");
const outPath = resolve(root, "docs/COMPONENT-INVENTORY.json");

const source = readFileSync(apiIndex, "utf8");

/**
 * Parse one `export { A, B, C as D } from "./components/Foo"` line.
 * Returns the list of exported identifiers + their source folder.
 */
function parseExportLine(line) {
  const m = /export\s+(type\s+)?\{([^}]+)\}\s+from\s+"\.\/components\/([^"]+)"/.exec(
    line.replace(/\n/g, " "),
  );
  if (!m) return null;
  const isType = Boolean(m[1]);
  const identifiers = m[2]
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((piece) => {
      // Handle `Foo as Bar` aliases.
      const asM = /^(\w+)\s+as\s+(\w+)$/.exec(piece);
      if (asM) return { original: asM[1], exported: asM[2] };
      return { original: piece, exported: piece };
    });
  return {
    folder: m[3].split("/")[0],
    isType,
    identifiers,
  };
}

// Walk the file line-by-line; merge multi-line `export { ... }` blocks first.
const merged = [];
let buffer = "";
let depth = 0;
for (const raw of source.split("\n")) {
  const line = raw.trim();
  if (!line || line.startsWith("//") || line.startsWith("/*")) continue;
  buffer += " " + line;
  for (const ch of line) {
    if (ch === "{") depth++;
    else if (ch === "}") depth--;
  }
  if (depth === 0 && line.endsWith(";")) {
    merged.push(buffer.trim());
    buffer = "";
  }
}

const components = new Map();
for (const stmt of merged) {
  const parsed = parseExportLine(stmt);
  if (!parsed) continue;
  const { folder, isType, identifiers } = parsed;
  if (!components.has(folder)) {
    components.set(folder, { folder, components: [], types: [] });
  }
  const entry = components.get(folder);
  for (const ident of identifiers) {
    (isType ? entry.types : entry.components).push(ident.exported);
  }
}

const inventory = {
  generatedAt: new Date().toISOString(),
  componentCount: components.size,
  totalExports: Array.from(components.values()).reduce(
    (acc, c) => acc + c.components.length + c.types.length,
    0,
  ),
  components: Array.from(components.values()).sort((a, b) =>
    a.folder.localeCompare(b.folder),
  ),
};

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify(inventory, null, 2) + "\n");

console.log(
  `✓ Wrote ${inventory.componentCount} components / ${inventory.totalExports} exports to ${outPath.replace(root + "/", "")}`,
);
