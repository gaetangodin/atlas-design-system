/**
 * ActionButton — labelled CTA button distinct from Atlas's generic
 * `Button`. Pill chrome, heavier visual weight, used for the
 * "primary action of a page" (Publish, Submit, Save profile).
 *
 * If you don't need the special chrome, prefer `Button color="primary"`.
 */
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface ActionButtonProps extends ComponentPropsWithoutRef<"button"> {
  children?: ReactNode;
  tone?: "primary" | "secondary";
  size?: "sm" | "md";
}

const TONE: Record<NonNullable<ActionButtonProps["tone"]>, string> = {
  primary: "bg-lavender-500 text-earth-900 hover:bg-lavender-400",
  secondary: "bg-earth-900 text-white hover:bg-earth-800",
};

export const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  function ActionButton({ tone = "primary", size = "md", className, type = "button", ...rest }, ref) {
    return (
      <button
        ref={ref}
        type={type}
        className={cnHero(
          "inline-flex items-center justify-center gap-1.5 rounded-full font-semibold tracking-wide shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          size === "sm" ? "h-9 px-4 text-xs" : "h-11 px-5 text-sm",
          TONE[tone],
          className,
        )}
        {...rest}
      />
    );
  },
);
ActionButton.displayName = "ActionButton";
