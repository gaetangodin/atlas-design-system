/**
 * Radio + RadioGroup — mirrors `heroui-branded/forms.tsx::BrandedRadio`.
 */
import { forwardRef, type Ref } from "react";
import {
  Radio as HeroUIRadio,
  RadioGroup as HeroUIRadioGroup,
  type RadioProps as HeroUIRadioProps,
  type RadioGroupProps as HeroUIRadioGroupProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type RadioProps = HeroUIRadioProps;
export type RadioGroupProps = HeroUIRadioGroupProps;

const LABEL = "text-sm font-medium text-foreground";

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(function RadioGroup(
  { classNames, ...rest },
  ref,
) {
  return (
    <HeroUIRadioGroup
      ref={ref as Ref<HTMLDivElement>}
      {...rest}
      classNames={{ ...classNames, label: cnHero(LABEL, classNames?.label) }}
    />
  );
});
RadioGroup.displayName = "RadioGroup";

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { classNames, ...rest },
  ref,
) {
  return (
    <HeroUIRadio
      ref={ref as Ref<HTMLInputElement>}
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero("items-center", classNames?.base),
        wrapper: cnHero(
          "border border-input bg-input-background group-data-[selected=true]:border-primary",
          classNames?.wrapper,
        ),
        control: cnHero("bg-primary", classNames?.control),
        label: cnHero("text-sm text-foreground", classNames?.label),
      }}
    />
  );
});
Radio.displayName = "Radio";
