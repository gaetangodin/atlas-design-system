/**
 * IconButton — small square icon-only button.
 *
 * Atlas's `<Button isIconOnly />` works, but `IconButton` is a tighter
 * dedicated atom — fewer props, no loading spinner, square chrome.
 * Use for toolbar / row actions where a full Button would be overkill.
 */
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface IconButtonProps extends ComponentPropsWithoutRef<"button"> {
  /** Required for a11y when no visible label. */
  "aria-label": string;
  icon: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "flat" | "ghost" | "bordered";
}

const SIZE: Record<NonNullable<IconButtonProps["size"]>, string> = {
  sm: "size-7",
  md: "size-9",
  lg: "size-11",
};

const VARIANT: Record<NonNullable<IconButtonProps["variant"]>, string> = {
  flat: "bg-muted/60 text-foreground hover:bg-muted",
  ghost: "bg-transparent text-foreground hover:bg-muted/60",
  bordered: "border border-border bg-card text-foreground hover:bg-muted/60",
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ icon, size = "md", variant = "ghost", className, type = "button", ...rest }, ref) {
    return (
      <button
        ref={ref}
        type={type}
        className={cnHero(
          "inline-flex shrink-0 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50",
          SIZE[size],
          VARIANT[variant],
          className,
        )}
        {...rest}
      >
        {icon}
      </button>
    );
  },
);
IconButton.displayName = "IconButton";
