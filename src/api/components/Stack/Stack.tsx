/**
 * Stack / HStack / VStack — flex layout primitives. Light, semantic,
 * brand-aware spacing scale via Tailwind gap utilities.
 */
import { forwardRef, type Ref, type ReactNode, type HTMLAttributes } from "react";
import { cnHero } from "../../../shared/cn-hero";

type SpacingToken =
  | 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16;

const gapClass = (g?: SpacingToken) => (g === undefined ? "" : `gap-${g}`);

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  gap?: SpacingToken;
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: boolean;
  inline?: boolean;
  children?: ReactNode;
}

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  baseline: "items-baseline",
  stretch: "items-stretch",
} as const;

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
} as const;

export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
  { direction = "column", gap = 3, align, justify, wrap, inline, className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref as Ref<HTMLDivElement>}
      className={cnHero(
        inline ? "inline-flex" : "flex",
        direction === "row" ? "flex-row" : "flex-col",
        gapClass(gap),
        align && alignMap[align],
        justify && justifyMap[justify],
        wrap && "flex-wrap",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
});
Stack.displayName = "Stack";

export const HStack = forwardRef<HTMLDivElement, Omit<StackProps, "direction">>(
  function HStack(props, ref) {
    return <Stack ref={ref} direction="row" align={props.align ?? "center"} {...props} />;
  },
);
HStack.displayName = "HStack";

export const VStack = forwardRef<HTMLDivElement, Omit<StackProps, "direction">>(
  function VStack(props, ref) {
    return <Stack ref={ref} direction="column" {...props} />;
  },
);
VStack.displayName = "VStack";
