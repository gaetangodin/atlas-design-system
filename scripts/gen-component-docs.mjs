/**
 * gen-component-docs.mjs — generates a markdown doc stub for every
 * component folder under src/api/components that doesn't already have
 * a hand-written doc in docs/components/.
 *
 * Hand-written docs (Button.md, Input.md, …) are NEVER overwritten —
 * the script only fills gaps. Run: `pnpm docs:gen`.
 *
 * Each stub pulls the file-header comment block from the component's
 * .tsx as the description, and lists exported names. Authors then
 * flesh out variants / props / a11y / examples by hand.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const componentsDir = join(root, "src/api/components");
const docsDir = join(root, "docs/components");

function headerComment(tsx) {
  const m = /^\/\*\*([\s\S]*?)\*\//.exec(tsx.trim());
  if (!m) return "";
  return m[1]
    .split("\n")
    .map((l) => l.replace(/^\s*\*?\s?/, "").trimEnd())
    .filter((l, i, a) => !(l === "" && a[i - 1] === ""))
    .join("\n")
    .trim();
}

function exportedNames(tsx) {
  const names = new Set();
  const re = /export\s+(?:const|function|class)\s+([A-Z]\w+)/g;
  let m;
  while ((m = re.exec(tsx))) names.add(m[1]);
  const re2 = /export\s*\{([^}]+)\}/g;
  while ((m = re2.exec(tsx))) {
    for (const part of m[1].split(",")) {
      const name = part.trim().split(/\s+as\s+/)[0].trim();
      if (/^[A-Z]/.test(name)) names.add(name);
    }
  }
  return [...names];
}

let created = 0;
let skipped = 0;

for (const name of readdirSync(componentsDir)) {
  const dir = join(componentsDir, name);
  if (!statSync(dir).isDirectory()) continue;

  const docPath = join(docsDir, `${name}.md`);
  if (existsSync(docPath)) {
    skipped += 1;
    continue;
  }

  const tsxPath = join(dir, `${name}.tsx`);
  let description = "";
  let names = [name];
  if (existsSync(tsxPath)) {
    const tsx = readFileSync(tsxPath, "utf8");
    description = headerComment(tsx);
    const found = exportedNames(tsx);
    if (found.length) names = found;
  }

  const body = `# Component: ${name}

> Auto-generated stub. Flesh out variants, props, states, accessibility,
> and examples by hand, then remove this line.

## Description

${description || "_TODO — describe what this component is and when to use it._"}

## Exports

${names.map((n) => `- \`${n}\``).join("\n")}

## Import

\`\`\`tsx
import { ${names[0]} } from "@atlas/design-system";
\`\`\`

## Props

_TODO — document the public prop surface. See \`src/contracts\` or the
component's exported type._

## Variants & states

_TODO._

## Accessibility

_TODO — role, keyboard interaction, screen-reader behavior._

## Examples

\`\`\`tsx
// TODO
\`\`\`
`;

  writeFileSync(docPath, body);
  created += 1;
}

console.log(`gen-component-docs: created ${created} stub(s), skipped ${skipped} existing.`);
