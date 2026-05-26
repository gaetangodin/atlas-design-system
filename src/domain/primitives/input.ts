/**
 * Input primitive — variant, size, and state space.
 * Mirrors HeroUI's prop surface.
 *
 * Brand rule (Xeekrs): default radius is `full` (pill input).
 */

export const inputVariants = ["flat", "bordered", "underlined", "faded"] as const;
export type InputVariant = (typeof inputVariants)[number];

export const inputSizes = ["sm", "md", "lg"] as const;
export type InputSize = (typeof inputSizes)[number];

export const inputStates = ["default", "hover", "focus", "disabled", "invalid", "readonly"] as const;
export type InputState = (typeof inputStates)[number];

export const labelPlacements = ["inside", "outside", "outside-left"] as const;
export type LabelPlacement = (typeof labelPlacements)[number];
