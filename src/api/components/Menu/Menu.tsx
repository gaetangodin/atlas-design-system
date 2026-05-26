/**
 * Menu — HeroUI Menu wrapped with Atlas brand classes. Standalone
 * menu surface (toolbar / context menus). For attached-to-trigger
 * menus use `Dropdown` instead; for selectable lists use `Listbox`.
 *
 * Ported from `Xeekrsmainapp/src/components/heroui-branded/navigation.tsx`.
 */
import {
  Menu as HeroUIMenu,
  MenuItem as HeroUIMenuItem,
  MenuSection as HeroUIMenuSection,
  type MenuProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export function Menu<T extends object>(props: MenuProps<T>) {
  const { classNames, ...rest } = props;
  return (
    <HeroUIMenu
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero(
          "rounded-md border border-border bg-popover text-popover-foreground p-1 shadow-md",
          classNames?.base,
        ),
        list: cnHero(classNames?.list),
      }}
      itemClasses={{
        base: cnHero(
          "rounded-sm px-2 py-1.5 text-sm font-medium text-foreground outline-none",
          "data-[hover=true]:bg-muted data-[selected=true]:bg-muted",
          rest.itemClasses?.base,
        ),
        title: rest.itemClasses?.title,
        description: cnHero(
          "text-xs text-muted-foreground",
          rest.itemClasses?.description,
        ),
        shortcut: cnHero(
          "text-xs text-muted-foreground",
          rest.itemClasses?.shortcut,
        ),
      }}
    />
  );
}

export const MenuItem = HeroUIMenuItem;
export const MenuSection = HeroUIMenuSection;

export type { MenuProps } from "@heroui/react";
