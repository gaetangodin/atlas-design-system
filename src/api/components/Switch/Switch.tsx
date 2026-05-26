/**
 * Switch — pill toggle. Mirrors `heroui-branded/forms.tsx::BrandedSwitch`.
 * Defers HeroUI's native track/thumb (touching them caused double-paint).
 */
import { forwardRef, type Ref } from "react";
import { Switch as HeroUISwitch, type SwitchProps as HeroUISwitchProps } from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type SwitchProps = HeroUISwitchProps;

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { classNames, color = "primary", ...rest },
  ref,
) {
  return (
    <HeroUISwitch
      ref={ref as Ref<HTMLInputElement>}
      color={color}
      {...rest}
      classNames={{
        ...classNames,
        label: cnHero("text-sm text-foreground", classNames?.label),
      }}
    />
  );
});
Switch.displayName = "Switch";
