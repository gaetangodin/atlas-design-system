/**
 * Listbox — mirrors `heroui-branded/overlay.tsx::BrandedListbox`.
 */
import {
  Listbox as HeroUIListbox,
  ListboxItem as HeroUIListboxItem,
  ListboxSection as HeroUIListboxSection,
  type ListboxProps as HeroUIListboxProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type ListboxProps<T extends object = object> = HeroUIListboxProps<T>;

export function Listbox<T extends object>(props: ListboxProps<T>) {
  const { classNames, ...rest } = props;
  return (
    <HeroUIListbox
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero("rounded-md border border-border bg-popover p-1", classNames?.base),
      }}
      itemClasses={{
        base: cnHero(
          "rounded-sm px-2 py-1.5 text-sm font-medium text-foreground outline-none",
          "data-[hover=true]:bg-muted data-[selected=true]:bg-muted",
          rest.itemClasses?.base,
        ),
        title: rest.itemClasses?.title,
        description: cnHero("text-xs text-muted-foreground", rest.itemClasses?.description),
      }}
    />
  );
}

export const ListboxItem = HeroUIListboxItem;
export const ListboxSection = HeroUIListboxSection;
