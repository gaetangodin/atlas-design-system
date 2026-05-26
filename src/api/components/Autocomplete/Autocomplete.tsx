/**
 * Autocomplete — mirrors `heroui-branded/forms.tsx::BrandedAutocomplete`.
 */
import {
  Autocomplete as HeroUIAutocomplete,
  AutocompleteItem as HeroUIAutocompleteItem,
  AutocompleteSection as HeroUIAutocompleteSection,
  type AutocompleteProps as HeroUIAutocompleteProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

const WRAPPER =
  "flex h-9 w-full items-center rounded-md border border-input bg-input-background " +
  "px-3 text-base transition-colors " +
  "data-[hover=true]:border-input data-[focus=true]:border-ring " +
  "data-[focus=true]:ring-ring/50 data-[focus=true]:ring-[3px]";

const LABEL = "text-sm font-medium text-foreground";

export type AutocompleteProps<T extends object = object> = HeroUIAutocompleteProps<T>;

export function Autocomplete<T extends object>(props: AutocompleteProps<T>) {
  const { inputProps, variant = "bordered", radius = "lg", labelPlacement = "outside", ...rest } = props;
  return (
    <HeroUIAutocomplete
      variant={variant}
      radius={radius}
      labelPlacement={labelPlacement}
      {...rest}
      inputProps={{
        ...(inputProps || {}),
        classNames: {
          ...(inputProps?.classNames || {}),
          label: cnHero(LABEL, "mb-1.5 text-left", inputProps?.classNames?.label),
          inputWrapper: cnHero(WRAPPER, inputProps?.classNames?.inputWrapper),
          input: cnHero("text-base text-foreground outline-none", inputProps?.classNames?.input),
        },
      }}
    />
  );
}

export const AutocompleteItem = HeroUIAutocompleteItem;
export const AutocompleteSection = HeroUIAutocompleteSection;
