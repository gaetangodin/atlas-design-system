/**
 * ButtonGroup — mirrors `heroui-branded/misc.tsx::BrandedButtonGroup`.
 */
import { forwardRef, type Ref } from "react";
import {
  ButtonGroup as HeroUIButtonGroup,
  type ButtonGroupProps as HeroUIButtonGroupProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type ButtonGroupProps = HeroUIButtonGroupProps;

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(function ButtonGroup(
  { className, radius = "md", ...rest },
  ref,
) {
  return (
    <HeroUIButtonGroup
      ref={ref as Ref<HTMLDivElement>}
      radius={radius}
      {...rest}
      className={cnHero(
        "inline-flex items-stretch [&>button]:rounded-none",
        "[&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md",
        "[&>button+button]:-ml-px",
        className,
      )}
    />
  );
});
ButtonGroup.displayName = "ButtonGroup";
