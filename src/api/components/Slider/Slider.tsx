/**
 * Slider — mirrors `heroui-branded/forms.tsx::BrandedSlider`.
 */
import { Slider as HeroUISlider, type SliderProps as HeroUISliderProps } from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type SliderProps = HeroUISliderProps;

const LABEL = "text-sm font-medium text-foreground";

export function Slider({ classNames, ...rest }: SliderProps) {
  return (
    <HeroUISlider
      {...rest}
      classNames={{
        ...classNames,
        label: cnHero(LABEL, classNames?.label),
        track: cnHero("h-1.5 rounded-full bg-muted", classNames?.track),
        filler: cnHero("bg-primary", classNames?.filler),
        thumb: cnHero(
          "size-4 rounded-full border-2 border-primary bg-background shadow-sm",
          classNames?.thumb,
        ),
      }}
    />
  );
}
