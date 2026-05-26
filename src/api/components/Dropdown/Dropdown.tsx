/**
 * Dropdown — mirrors `heroui-branded/overlay.tsx::BrandedDropdown`.
 */
import {
  Dropdown as HeroUIDropdown,
  DropdownTrigger as HeroUIDropdownTrigger,
  DropdownMenu as HeroUIDropdownMenu,
  DropdownItem as HeroUIDropdownItem,
  DropdownSection as HeroUIDropdownSection,
  type DropdownProps as HeroUIDropdownProps,
  type DropdownMenuProps as HeroUIDropdownMenuProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type DropdownProps = HeroUIDropdownProps;
export type DropdownMenuProps = HeroUIDropdownMenuProps;

export function Dropdown({ classNames, ...rest }: DropdownProps) {
  return (
    <HeroUIDropdown
      {...rest}
      classNames={{
        ...classNames,
        content: cnHero(
          "min-w-[12rem] rounded-md border border-border bg-popover text-popover-foreground p-1 shadow-md outline-none",
          classNames?.content,
        ),
      }}
    />
  );
}

export const DropdownTrigger = HeroUIDropdownTrigger;

export function DropdownMenu(props: DropdownMenuProps) {
  const { classNames, ...rest } = props;
  return (
    <HeroUIDropdownMenu
      {...rest}
      classNames={{ ...classNames, list: cnHero("p-0", classNames?.list) }}
      itemClasses={{
        base: cnHero(
          "rounded-sm px-2 py-1.5 text-sm font-medium text-foreground outline-none",
          "data-[hover=true]:bg-muted data-[selected=true]:bg-muted",
          rest.itemClasses?.base,
        ),
        title: rest.itemClasses?.title,
        description: cnHero("text-xs text-muted-foreground", rest.itemClasses?.description),
        shortcut: cnHero("text-xs text-muted-foreground", rest.itemClasses?.shortcut),
      }}
    />
  );
}

export const DropdownItem = HeroUIDropdownItem;
export const DropdownSection = HeroUIDropdownSection;
