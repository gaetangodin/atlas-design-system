/**
 * Button — public component.
 *
 * Direct port of `Xeekrsmainapp/src/components/heroui-branded/button.tsx`
 * (the canonical Xeekrs HeroUI-branded implementation). HeroUI provides
 * react-aria pressable behavior, focus management, isLoading spinner,
 * disabled handling. Atlas wipes HeroUI's default tailwind-variants
 * classes via `className` and re-injects Xeekrs-flavored intent classes.
 *
 * Brand rule: buttons default to `radius="full"` (pill). Pass `radius="lg"`
 * for square-cornered toolbar split-buttons.
 *
 * Animation is disabled by default — flat design, no decorative motion.
 */

import { forwardRef } from "react";
import {
  Button as HeroUIButton,
  type ButtonProps as HeroUIButtonProps,
} from "@heroui/react";
import type { ButtonProps, ButtonVariant, AtlasColor, AtlasSize, AtlasRadius } from "../../../contracts/component-props";
import { cnHero } from "../../../shared/cn-hero";

const BASE =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 " +
  "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:border-ring " +
  "aria-invalid:border-destructive aria-invalid:ring-destructive/20";

function intentClasses(variant: ButtonVariant, color: AtlasColor): string {
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
  // solid / shadow
  switch (color) {
    case "primary": return "bg-primary text-primary-foreground hover:bg-primary/90";
    case "secondary": return "bg-secondary text-secondary-foreground hover:bg-secondary/80";
    case "success": return "bg-success text-success-foreground hover:bg-success/90";
    case "warning": return "bg-warning text-warning-foreground hover:bg-warning/90";
    case "danger": return "bg-destructive text-white hover:bg-destructive/90";
    default: return "bg-muted text-foreground hover:bg-muted/80";
  }
}

function sizeClasses(size: AtlasSize, isIconOnly: boolean): string {
  if (isIconOnly) {
    if (size === "sm") return "size-8";
    if (size === "lg") return "size-10";
    return "size-9";
  }
  if (size === "sm") return "h-8 px-3 text-sm gap-1.5 has-[>svg]:px-2.5";
  if (size === "lg") return "h-10 px-6 text-base has-[>svg]:px-4";
  return "h-9 px-4 py-2 text-base has-[>svg]:px-3";
}

function radiusClass(radius: AtlasRadius | undefined): string {
  /* Brand rule: all buttons default to `full` radius. Override per-call
   * with `radius="lg"` (toolbar / split-buttons) or `radius="md"` (chips). */
  if (radius === "none") return "rounded-none";
  if (radius === "sm") return "rounded-sm";
  if (radius === "md") return "rounded-md";
  if (radius === "lg") return "rounded-lg";
  return "rounded-full";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const {
    variant = "solid",
    color = "default",
    size = "md",
    radius,
    isIconOnly = false,
    isLoading = false,
    isDisabled = false,
    fullWidth = false,
    startContent,
    endContent,
    onClick,
    type = "button",
    children,
    className,
    testId,
    id,
    "aria-label": ariaLabel,
  } = props;

  // HeroUI's onPress fires after react-aria pressable processing (synthetic
  // event that's a superset of MouseEvent). We forward only when present.
  const heroProps: Partial<HeroUIButtonProps> = onClick
    ? { onPress: () => onClick({} as never) }
    : {};

  return (
    <HeroUIButton
      ref={ref}
      id={id}
      type={type}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isIconOnly={isIconOnly}
      fullWidth={fullWidth}
      startContent={startContent}
      endContent={endContent}
      aria-label={ariaLabel}
      data-testid={testId}
      disableAnimation
      variant={variant}
      color={color}
      size={size}
      {...heroProps}
      className={cnHero(
        BASE,
        intentClasses(variant, color),
        sizeClasses(size, isIconOnly),
        radiusClass(radius),
        className,
      )}
    >
      {children}
    </HeroUIButton>
  );
});

Button.displayName = "Button";
