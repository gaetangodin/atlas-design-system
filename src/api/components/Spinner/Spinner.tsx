/**
 * Spinner — mirrors `heroui-branded/feedback.tsx::BrandedSpinner`.
 */
import { forwardRef, type Ref } from "react";
import { Spinner as HeroUISpinner, type SpinnerProps as HeroUISpinnerProps } from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type SpinnerProps = HeroUISpinnerProps;

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(function Spinner(
  { classNames, color = "primary", ...rest },
  ref,
) {
  return (
    <HeroUISpinner
      ref={ref as Ref<HTMLDivElement>}
      color={color}
      {...rest}
      classNames={{ ...classNames, label: cnHero("text-sm text-muted-foreground", classNames?.label) }}
    />
  );
});
Spinner.displayName = "Spinner";
