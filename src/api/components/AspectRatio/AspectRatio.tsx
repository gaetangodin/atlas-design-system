/**
 * AspectRatio — locks a box to a fixed ratio. Shadcn primitive Atlas
 * had skipped. Use for video / image frames where you need the slot
 * to maintain proportions while contents load.
 */
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface AspectRatioProps extends ComponentPropsWithoutRef<"div"> {
  /** Aspect ratio, e.g. `16/9`, `4/3`, `1`. Defaults to `16/9`. */
  ratio?: number;
}

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  function AspectRatio({ ratio = 16 / 9, className, style, children, ...rest }, ref) {
    return (
      <div
        ref={ref}
        style={{ aspectRatio: String(ratio), ...style }}
        className={cnHero("relative w-full overflow-hidden", className)}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
AspectRatio.displayName = "AspectRatio";
