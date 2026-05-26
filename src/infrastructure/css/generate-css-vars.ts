/**
 * Generate a CSS custom-property block matching Xeekrs's
 * `globals.css` token contract. Useful for fresh apps adopting Atlas
 * that don't already have a `:root { ... }` block.
 *
 * Output uses the `--X` + `--X-rgb` triplet pair so Tailwind alpha
 * modifiers (`bg-primary/40`) work as expected.
 */

import { tokens } from "../../domain/tokens/colors";
import { spacing, radius } from "../../domain/tokens";

export function generateCssVars(): string {
  const lines: string[] = [":root {"];

  for (const [key, value] of Object.entries(tokens)) {
    // Convert the fallback "rgb(R G B)" or "rgb(R G B / α)" into a triplet
    // for the *-rgb companion var.
    const match = /^rgb\((\d+ \d+ \d+)/.exec(value.fallback);
    if (match && "rgb" in value && value.rgb) {
      lines.push(`  ${value.rgb}: ${match[1]};`);
      lines.push(`  ${value.var}: ${value.fallback};`);
    } else {
      lines.push(`  ${value.var}: ${value.fallback};`);
    }
    void key;
  }

  // Spacing scale
  for (const [k, v] of Object.entries(spacing)) {
    if (v.startsWith("var(")) continue; // already a var
    lines.push(`  --spacing-${k}: ${v};`);
  }

  // Radius
  lines.push(`  --radius: 12px;`);
  void radius;

  lines.push("}");
  return lines.join("\n");
}
