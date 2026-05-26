/**
 * Tooltip — mirrors `heroui-branded/overlay.tsx::BrandedTooltip`.
 * Inverse foreground on background — small, terse, fast.
 */
import { Tooltip as HeroUITooltip, type TooltipProps as HeroUITooltipProps } from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type TooltipProps = HeroUITooltipProps;

export function Tooltip({ classNames, content, ...rest }: TooltipProps) {
  return (
    <HeroUITooltip
      {...rest}
      content={content}
      classNames={{
        ...classNames,
        content: cnHero(
          "rounded-md bg-foreground px-2 py-1 text-xs text-background shadow-md",
          classNames?.content,
        ),
      }}
    />
  );
}
