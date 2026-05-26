/**
 * Spacing scale — 4px base, matches Tailwind and Xeekrs's
 * `--spacing-*` CSS variables.
 *
 * Xeekrs's globals.css defines `--spacing-1` through `--spacing-24`;
 * Tailwind utilities (`p-4`, `gap-2`) consume these via the preset.
 */

export const spacing = {
  0: "0",
  px: "1px",
  0.5: "0.125rem",
  1: "var(--spacing-1, 0.25rem)",
  1.5: "0.375rem",
  2: "var(--spacing-2, 0.5rem)",
  2.5: "0.625rem",
  3: "var(--spacing-3, 0.75rem)",
  3.5: "0.875rem",
  4: "var(--spacing-4, 1rem)",
  5: "var(--spacing-5, 1.25rem)",
  6: "var(--spacing-6, 1.5rem)",
  7: "1.75rem",
  8: "var(--spacing-8, 2rem)",
  9: "2.25rem",
  10: "var(--spacing-10, 2.5rem)",
  11: "2.75rem",
  12: "var(--spacing-12, 3rem)",
  14: "3.5rem",
  16: "var(--spacing-16, 4rem)",
  20: "var(--spacing-20, 5rem)",
  24: "var(--spacing-24, 6rem)",
  28: "7rem",
  32: "8rem",
  40: "10rem",
  48: "12rem",
  56: "14rem",
  64: "16rem",
} as const;

export type SpacingKey = keyof typeof spacing;

export function spacingKeyForPx(px: number): SpacingKey | undefined {
  if (px === 0) return 0;
  if (px === 1) return "px";
  const map: Record<number, SpacingKey> = {
    2: 0.5, 4: 1, 6: 1.5, 8: 2, 10: 2.5, 12: 3, 14: 3.5,
    16: 4, 20: 5, 24: 6, 28: 7, 32: 8, 36: 9, 40: 10, 44: 11,
    48: 12, 56: 14, 64: 16, 80: 20, 96: 24, 112: 28, 128: 32,
    160: 40, 192: 48, 224: 56, 256: 64,
  };
  return map[px];
}
