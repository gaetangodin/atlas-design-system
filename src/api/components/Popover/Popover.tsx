/**
 * Popover — mirrors `heroui-branded/overlay.tsx::BrandedPopover`.
 */
import {
  Popover as HeroUIPopover,
  PopoverTrigger as HeroUIPopoverTrigger,
  PopoverContent as HeroUIPopoverContent,
  type PopoverProps as HeroUIPopoverProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type PopoverProps = HeroUIPopoverProps;

export function Popover({ classNames, ...rest }: PopoverProps) {
  return (
    <HeroUIPopover
      {...rest}
      classNames={{
        ...classNames,
        content: cnHero(
          "rounded-md border border-border bg-popover text-popover-foreground p-3 shadow-md outline-none",
          classNames?.content,
        ),
      }}
    />
  );
}

export const PopoverTrigger = HeroUIPopoverTrigger;
export const PopoverContent = HeroUIPopoverContent;
