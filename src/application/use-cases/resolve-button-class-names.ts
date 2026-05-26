/**
 * Use case: resolve a Button's variant/color/size/radius to a flat
 * className string (Xeekrs HeroUI-branded chain).
 *
 * Pure function — testable without booting React or HeroUI. Mirrors
 * the visual output of `api/components/Button/Button.tsx` so we can
 * unit-test variant logic and snapshot the className output.
 */

import type {
  ButtonVariant,
  ButtonColor,
  ButtonSize,
  ButtonRadius,
} from "../../domain/primitives/button";

export interface ResolveButtonClassNamesInput {
  variant: ButtonVariant;
  color: ButtonColor;
  size: ButtonSize;
  radius: ButtonRadius | undefined;
  isDisabled: boolean;
  isLoading: boolean;
  isIconOnly: boolean;
  fullWidth: boolean;
}

const BASE =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:border-ring " +
  "aria-invalid:border-destructive aria-invalid:ring-destructive/20";

function intent(variant: ButtonVariant, color: ButtonColor): string {
  if (variant === "bordered" || variant === "faded") {
    return "border border-border bg-background text-foreground hover:bg-muted";
  }
  if (variant === "light" || variant === "ghost") {
    return "bg-transparent hover:bg-muted hover:text-foreground";
  }
  if (variant === "flat") {
    switch (color) {
      case "primary": return "bg-primary/10 text-primary hover:bg-primary/20";
      case "secondary": return "bg-secondary/10 text-secondary hover:bg-secondary/20";
      case "success": return "bg-success/10 text-success hover:bg-success/20";
      case "warning": return "bg-warning/10 text-warning hover:bg-warning/20";
      case "danger": return "bg-destructive/10 text-destructive hover:bg-destructive/20";
      default: return "bg-muted text-foreground hover:bg-muted/80";
    }
  }
  switch (color) {
    case "primary": return "bg-primary text-primary-foreground hover:bg-primary/90";
    case "secondary": return "bg-secondary text-secondary-foreground hover:bg-secondary/80";
    case "success": return "bg-success text-success-foreground hover:bg-success/90";
    case "warning": return "bg-warning text-warning-foreground hover:bg-warning/90";
    case "danger": return "bg-destructive text-white hover:bg-destructive/90";
    default: return "bg-muted text-foreground hover:bg-muted/80";
  }
}

function size(s: ButtonSize, isIconOnly: boolean): string {
  if (isIconOnly) {
    if (s === "sm") return "size-8";
    if (s === "lg") return "size-10";
    return "size-9";
  }
  if (s === "sm") return "h-8 px-3 text-sm gap-1.5";
  if (s === "lg") return "h-10 px-6 text-base";
  return "h-9 px-4 py-2 text-base";
}

function radiusClass(r: ButtonRadius | undefined): string {
  if (r === "none") return "rounded-none";
  if (r === "sm") return "rounded-sm";
  if (r === "md") return "rounded-md";
  if (r === "lg") return "rounded-lg";
  return "rounded-full"; // brand default
}

export function resolveButtonClassNames(input: ResolveButtonClassNamesInput): string {
  const parts = [
    BASE,
    intent(input.variant, input.color),
    size(input.size, input.isIconOnly),
    radiusClass(input.radius),
  ];
  if (input.fullWidth) parts.push("w-full");
  if (input.isLoading) parts.push("cursor-wait");
  return parts.filter(Boolean).join(" ");
}
