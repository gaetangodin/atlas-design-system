/**
 * Select — mirrors `heroui-branded/forms.tsx::BrandedSelect`.
 * Bordered, lg radius (12px), outside label, popover styled like Dropdown.
 */
import {
  Select as HeroUISelect,
  SelectItem as HeroUISelectItem,
  SelectSection as HeroUISelectSection,
  type SelectProps as HeroUISelectProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

const WRAPPER =
  "flex h-9 w-full items-center rounded-md border border-input bg-input-background " +
  "px-3 text-base transition-colors " +
  "data-[hover=true]:border-input data-[focus=true]:border-ring " +
  "data-[focus=true]:ring-ring/50 data-[focus=true]:ring-[3px]";

const LABEL = "text-sm font-medium text-foreground";

export type SelectProps<T extends object = object> = HeroUISelectProps<T>;

export function Select<T extends object>(props: SelectProps<T>) {
  const { classNames, variant = "bordered", radius = "lg", labelPlacement = "outside", ...rest } = props;
  return (
    <HeroUISelect
      variant={variant}
      radius={radius}
      labelPlacement={labelPlacement}
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero("w-full min-w-0", classNames?.base),
        label: cnHero(LABEL, "mb-1.5 text-left", classNames?.label),
        trigger: cnHero(WRAPPER, classNames?.trigger),
        value: cnHero("text-base text-foreground", classNames?.value),
        listbox: cnHero("p-1", classNames?.listbox),
        popoverContent: cnHero(
          "rounded-md border border-border bg-popover text-popover-foreground shadow-md",
          classNames?.popoverContent,
        ),
      }}
    />
  );
}

export const SelectItem = HeroUISelectItem;
export const SelectSection = HeroUISelectSection;
