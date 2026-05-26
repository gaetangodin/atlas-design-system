/**
 * Checkbox — mirrors `heroui-branded/forms.tsx::BrandedCheckbox`.
 * Tweaks HeroUI's `before:` (border) + `after:` (fill) pseudo-elements
 * to avoid the doubled-box artifact.
 */
import { forwardRef, type Ref } from "react";
import {
  Checkbox as HeroUICheckbox,
  CheckboxGroup as HeroUICheckboxGroup,
  type CheckboxProps as HeroUICheckboxProps,
  type CheckboxGroupProps as HeroUICheckboxGroupProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type CheckboxProps = HeroUICheckboxProps;
export type CheckboxGroupProps = HeroUICheckboxGroupProps;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { classNames, radius = "md", ...rest },
  ref,
) {
  return (
    <HeroUICheckbox
      ref={ref as Ref<HTMLInputElement>}
      radius={radius}
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero("items-center", classNames?.base),
        wrapper: cnHero(
          "before:border-foreground/45 before:bg-input-background dark:before:border-muted-foreground",
          "group-data-[hover=true]:before:border-foreground/55 dark:group-data-[hover=true]:before:border-foreground",
          "group-data-[hover=true]:before:bg-muted",
          "after:bg-primary",
          classNames?.wrapper,
        ),
        icon: cnHero("text-primary-foreground", classNames?.icon),
        label: cnHero("text-sm text-foreground", classNames?.label),
      }}
    />
  );
});
Checkbox.displayName = "Checkbox";

export const CheckboxGroup = HeroUICheckboxGroup;
