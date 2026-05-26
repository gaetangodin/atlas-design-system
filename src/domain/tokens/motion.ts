/**
 * Motion tokens — durations and easings.
 *
 * Preline's motion language is restrained: most interactions use a 150ms
 * ease-out, with longer fades for overlays (200–300ms).
 */

export const durations = {
  instant: "0ms",
  fast: "100ms",
  base: "150ms",
  medium: "200ms",
  slow: "300ms",
  slower: "500ms",
} as const;

export const easings = {
  linear: "linear",
  in: "cubic-bezier(0.4, 0, 1, 1)",
  out: "cubic-bezier(0, 0, 0.2, 1)",
  inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  /** For physics-y entrances (modals, drawers). */
  spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
} as const;

export type DurationKey = keyof typeof durations;
export type EasingKey = keyof typeof easings;
