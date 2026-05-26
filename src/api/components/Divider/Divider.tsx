/**
 * Divider — mirrors `heroui-branded/display.tsx::BrandedDivider`.
 */
import { forwardRef, type Ref } from "react";
import { Divider as HeroUIDivider, type DividerProps as HeroUIDividerProps } from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type DividerProps = HeroUIDividerProps;

export const Divider = forwardRef<HTMLHRElement, DividerProps>(function Divider(
  { className, ...rest },
  ref,
) {
  return (
    <HeroUIDivider
      ref={ref as Ref<HTMLHRElement>}
      {...rest}
      className={cnHero("bg-border", className)}
    />
  );
});
Divider.displayName = "Divider";
