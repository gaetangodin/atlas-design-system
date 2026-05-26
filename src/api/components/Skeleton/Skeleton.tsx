/**
 * Skeleton — mirrors `heroui-branded/feedback.tsx::BrandedSkeleton`.
 * Pulsing muted block; HeroUI's shimmer is neutralized.
 */
import { forwardRef, type Ref } from "react";
import { Skeleton as HeroUISkeleton, type SkeletonProps as HeroUISkeletonProps } from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type SkeletonProps = HeroUISkeletonProps;

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(function Skeleton(
  { className, classNames, ...rest },
  ref,
) {
  return (
    <HeroUISkeleton
      ref={ref as Ref<HTMLDivElement>}
      disableAnimation={false}
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero(
          "rounded-md bg-muted animate-pulse before:hidden after:hidden",
          classNames?.base,
          className,
        ),
      }}
    />
  );
});
Skeleton.displayName = "Skeleton";
