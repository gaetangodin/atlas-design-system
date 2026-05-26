/**
 * Card — public component.
 *
 * Direct port of `Xeekrsmainapp/src/components/heroui-branded/card.tsx`.
 * Default radius is `large` (12px), border + bg-card + shadow-sm.
 * Animation disabled by default. `variant="hover-lift"` reproduces the
 * dashboard-tile pattern (flat against page bg, snaps to white on hover).
 */

import { forwardRef, type ComponentProps } from "react";
import {
  Card as HeroUICard,
  CardHeader as HeroUICardHeader,
  CardBody as HeroUICardBody,
  CardFooter as HeroUICardFooter,
  type CardProps as HeroUICardProps,
} from "@heroui/react";
import type { CardProps } from "../../../contracts/component-props";
import { cnHero } from "../../../shared/cn-hero";

const CARD_BASE = "rounded-large border border-border bg-card text-card-foreground";

const HOVER_LIFT_BASE =
  "rounded-large border border-border bg-background text-card-foreground " +
  "transition-colors duration-150 hover:bg-card hover:shadow-sm " +
  "focus-within:bg-card focus-within:shadow-sm " +
  "dark:hover:bg-zinc-950 dark:focus-within:bg-zinc-950";

function shadowClass(shadow: NonNullable<HeroUICardProps["shadow"]>): string {
  if (shadow === "none") return "";
  if (shadow === "sm") return "shadow-sm";
  if (shadow === "lg") return "shadow-lg";
  return "shadow-md";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(props, ref) {
  const {
    isPressable = false,
    isHoverable = false,
    onClick,
    shadow = "sm",
    radius,
    variant = "default",
    children,
    className,
    testId,
    id,
  } = props;

  const heroRadius = (radius === "full" ? "full" : "lg") as HeroUICardProps["radius"];

  if (variant === "hover-lift") {
    return (
      <HeroUICard
        ref={ref}
        id={id}
        isPressable={isPressable}
        isHoverable={isHoverable}
        onPress={onClick ? () => onClick({} as never) : undefined}
        shadow="none"
        radius={heroRadius}
        disableAnimation
        data-testid={testId}
        classNames={{ base: cnHero(HOVER_LIFT_BASE, className) }}
      >
        {children}
      </HeroUICard>
    );
  }

  return (
    <HeroUICard
      ref={ref}
      id={id}
      isPressable={isPressable}
      isHoverable={isHoverable}
      onPress={onClick ? () => onClick({} as never) : undefined}
      shadow={shadow}
      radius={heroRadius}
      disableAnimation
      data-testid={testId}
      classNames={{ base: cnHero(CARD_BASE, shadowClass(shadow), className) }}
    >
      {children}
    </HeroUICard>
  );
});

Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, ComponentProps<typeof HeroUICardHeader>>(
  function CardHeader({ className, ...rest }, ref) {
    return (
      <HeroUICardHeader
        ref={ref}
        {...rest}
        className={cnHero("flex flex-col gap-1.5 px-6 pt-6 pb-2", className)}
      />
    );
  },
);

export const CardBody = forwardRef<HTMLDivElement, ComponentProps<typeof HeroUICardBody>>(
  function CardBody({ className, ...rest }, ref) {
    /* `text-large` (18px via the HeroUI fontSize remap in tailwind.config.ts)
     * was bumped from `text-base` (16px) to meet WCAG body-text accessibility
     * recommendations site-wide — synced from the branded May-5 update. */
    return (
      <HeroUICardBody
        ref={ref}
        {...rest}
        className={cnHero("px-6 py-4 text-large leading-relaxed text-card-foreground", className)}
      />
    );
  },
);

export const CardFooter = forwardRef<HTMLDivElement, ComponentProps<typeof HeroUICardFooter>>(
  function CardFooter({ className, ...rest }, ref) {
    return (
      <HeroUICardFooter
        ref={ref}
        {...rest}
        className={cnHero("flex items-center gap-2 px-6 pt-2 pb-6", className)}
      />
    );
  },
);
