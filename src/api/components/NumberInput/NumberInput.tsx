/**
 * NumberInput — mirrors `heroui-branded/forms.tsx::BrandedNumberInput`.
 */
import { NumberInput as HeroUINumberInput } from "@heroui/react";
import type { ComponentProps } from "react";
import { cnHero } from "../../../shared/cn-hero";

const WRAPPER =
  "flex h-9 w-full items-center rounded-md border border-input bg-input-background " +
  "px-3 text-base transition-colors " +
  "data-[hover=true]:border-input data-[focus=true]:border-ring " +
  "data-[focus=true]:ring-ring/50 data-[focus=true]:ring-[3px]";

export type NumberInputProps = ComponentProps<typeof HeroUINumberInput>;

export function NumberInput(props: NumberInputProps) {
  const { classNames, variant = "bordered", radius = "lg", labelPlacement = "outside", ...rest } = props;
  return (
    <HeroUINumberInput
      variant={variant}
      radius={radius}
      labelPlacement={labelPlacement}
      {...rest}
      classNames={{
        ...classNames,
        label: cnHero("text-sm font-medium text-foreground", "mb-1.5 text-left", classNames?.label),
        inputWrapper: cnHero(WRAPPER, classNames?.inputWrapper),
        input: cnHero("text-base text-foreground outline-none", classNames?.input),
      }}
    />
  );
}
