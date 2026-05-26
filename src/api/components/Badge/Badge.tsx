/**
 * Badge — public component.
 *
 * Direct port of `Xeekrsmainapp/src/components/heroui-branded/chip.tsx`.
 * HeroUI Chip is pill-shaped by default; we default radius to `md` to
 * match shadcn's `rounded-md` badge. Pill remains available via
 * `radius="full"`.
 */

import { forwardRef, type Ref } from "react";
import {
  Chip as HeroUIChip,
  type ChipProps as HeroUIChipProps,
} from "@heroui/react";
import type { BadgeProps, BadgeVariant, AtlasColor } from "../../../contracts/component-props";
import { cnHero } from "../../../shared/cn-hero";

function intent(color: AtlasColor, variant: BadgeVariant): string {
  if (variant === "bordered" || variant === "faded" || variant === "dot") {
    return "border border-border bg-transparent text-foreground";
  }
  if (variant === "light") {
    switch (color) {
      case "primary": return "bg-transparent text-primary";
      case "secondary": return "bg-transparent text-secondary";
      case "success": return "bg-transparent text-success";
      case "warning": return "bg-transparent text-warning";
      case "danger": return "bg-transparent text-destructive";
      default: return "bg-transparent text-foreground";
    }
  }
  if (variant === "flat") {
    switch (color) {
      case "primary": return "bg-primary/10 text-primary";
      case "secondary": return "bg-secondary/10 text-secondary";
      case "success": return "bg-success/10 text-success";
      case "warning": return "bg-warning/10 text-warning";
      case "danger": return "bg-destructive/10 text-destructive";
      default: return "bg-muted text-foreground";
    }
  }
  // solid / shadow
  switch (color) {
    case "primary": return "bg-primary text-primary-foreground";
    case "secondary": return "bg-secondary text-secondary-foreground";
    case "success": return "bg-success text-success-foreground";
    case "warning": return "bg-warning text-warning-foreground";
    case "danger": return "bg-destructive text-white";
    default: return "bg-muted text-foreground";
  }
}

const BASE =
  "inline-flex items-center justify-center gap-1 px-2 py-0.5 " +
  "text-xs font-medium w-fit max-w-max min-w-0 whitespace-nowrap shrink-0";

function radiusClass(radius: HeroUIChipProps["radius"]): string {
  if (radius === "full") return "rounded-full";
  if (radius === "none") return "rounded-none";
  if (radius === "lg") return "rounded-lg";
  if (radius === "sm") return "rounded-sm";
  return "rounded-md";
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(function Badge(props, ref) {
  const {
    variant = "solid",
    color = "default",
    size = "md",
    radius = "md",
    startContent,
    endContent,
    onClose,
    children,
    className,
    testId,
    id,
  } = props;

  const heroRadius: HeroUIChipProps["radius"] = radius === "md" ? "md" : (radius as HeroUIChipProps["radius"]);

  return (
    <HeroUIChip
      ref={ref as Ref<HTMLDivElement>}
      id={id}
      color={color}
      variant={variant === "dot" ? "dot" : (variant as HeroUIChipProps["variant"])}
      size={size}
      radius={heroRadius}
      startContent={startContent}
      endContent={endContent}
      onClose={onClose}
      data-testid={testId}
      classNames={{
        base: cnHero(BASE, intent(color, variant), radiusClass(heroRadius), className),
      }}
    >
      {children}
    </HeroUIChip>
  );
});

Badge.displayName = "Badge";
