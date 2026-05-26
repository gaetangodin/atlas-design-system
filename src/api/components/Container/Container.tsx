/**
 * Container — semantic max-width wrapper for page-level content.
 * Defaults: `max-w-screen-lg`, horizontal padding scaling with viewport.
 */
import { forwardRef, type Ref, type HTMLAttributes, type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padded?: boolean;
  children?: ReactNode;
}

const sizeClass = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
  full: "max-w-none",
} as const;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { size = "lg", padded = true, className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref as Ref<HTMLDivElement>}
      className={cnHero(
        "mx-auto w-full",
        sizeClass[size],
        padded && "px-4 sm:px-6 lg:px-8",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
});
Container.displayName = "Container";
