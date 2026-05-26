/**
 * Progress + CircularProgress — mirror `heroui-branded/feedback.tsx`.
 */
import { forwardRef, type Ref } from "react";
import {
  Progress as HeroUIProgress,
  CircularProgress as HeroUICircularProgress,
  type ProgressProps as HeroUIProgressProps,
  type CircularProgressProps as HeroUICircularProgressProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type ProgressProps = HeroUIProgressProps;
export type CircularProgressProps = HeroUICircularProgressProps;

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(function Progress(
  { classNames, ...rest },
  ref,
) {
  return (
    <HeroUIProgress
      ref={ref as Ref<HTMLDivElement>}
      {...rest}
      classNames={{
        ...classNames,
        track: cnHero("h-2 rounded-full bg-muted", classNames?.track),
        indicator: cnHero("bg-primary", classNames?.indicator),
        label: cnHero("text-sm font-medium text-foreground", classNames?.label),
        value: cnHero("text-sm text-muted-foreground", classNames?.value),
      }}
    />
  );
});
Progress.displayName = "Progress";

export const CircularProgress = forwardRef<HTMLDivElement, CircularProgressProps>(
  function CircularProgress({ classNames, ...rest }, ref) {
    return (
      <HeroUICircularProgress
        ref={ref as Ref<HTMLDivElement>}
        {...rest}
        classNames={{
          ...classNames,
          track: cnHero("stroke-muted", classNames?.track),
          indicator: cnHero("stroke-primary", classNames?.indicator),
          value: cnHero("text-sm font-semibold text-foreground", classNames?.value),
          label: cnHero("text-sm text-muted-foreground", classNames?.label),
        }}
      />
    );
  },
);
CircularProgress.displayName = "CircularProgress";
