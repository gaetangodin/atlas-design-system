/**
 * Button primitive — variant + color + size + radius space.
 * Aligns with HeroUI's prop surface so consumers can swap between
 * `<Button>` from `@atlas/design-system` and `@heroui/react` without
 * renaming props.
 *
 * Brand rule (Xeekrs): default radius is `full` (pill).
 */

export const buttonVariants = [
  "solid",
  "bordered",
  "light",
  "flat",
  "faded",
  "shadow",
  "ghost",
] as const;
export type ButtonVariant = (typeof buttonVariants)[number];

export const buttonColors = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
] as const;
export type ButtonColor = (typeof buttonColors)[number];

export const buttonSizes = ["sm", "md", "lg"] as const;
export type ButtonSize = (typeof buttonSizes)[number];

export const buttonRadii = ["none", "sm", "md", "lg", "full"] as const;
export type ButtonRadius = (typeof buttonRadii)[number];

export const buttonStates = ["default", "hover", "active", "focus", "disabled", "loading"] as const;
export type ButtonState = (typeof buttonStates)[number];

export function assertButtonVariant(v: string): asserts v is ButtonVariant {
  if (!buttonVariants.includes(v as ButtonVariant)) {
    throw new Error(`Unknown ButtonVariant: ${v}. Valid: ${buttonVariants.join(", ")}`);
  }
}
