/**
 * Toggle — pressed-state button. For "on/off" affordances that look
 * like buttons rather than switches (e.g. Bold/Italic in an editor
 * toolbar, filter chips that toggle in place).
 *
 * Accessible: `aria-pressed` reflects state. Keyboard activates.
 */
"use client";
import { forwardRef, useState, type ReactNode, type Ref } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface ToggleProps {
  pressed?: boolean;
  defaultPressed?: boolean;
  onChange?: (pressed: boolean) => void;
  isDisabled?: boolean;
  size?: "sm" | "md" | "lg";
  /** Match Button shape — pill default. */
  radius?: "sm" | "md" | "lg" | "full";
  startContent?: ReactNode;
  endContent?: ReactNode;
  children?: ReactNode;
  className?: string;
  "aria-label"?: string;
}

const sizeClass = {
  sm: "h-8 px-3 text-sm gap-1.5",
  md: "h-9 px-4 text-sm gap-2",
  lg: "h-10 px-6 text-base gap-2",
} as const;

const radiusClass = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
} as const;

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(function Toggle(
  {
    pressed,
    defaultPressed = false,
    onChange,
    isDisabled = false,
    size = "md",
    radius = "full",
    startContent,
    endContent,
    children,
    className,
    "aria-label": ariaLabel,
  },
  ref,
) {
  const [inner, setInner] = useState(defaultPressed);
  const isPressed = pressed ?? inner;

  const toggle = () => {
    const next = !isPressed;
    setInner(next);
    onChange?.(next);
  };

  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      type="button"
      aria-pressed={isPressed}
      aria-label={ariaLabel}
      disabled={isDisabled}
      onClick={toggle}
      className={cnHero(
        "inline-flex items-center justify-center font-medium transition-colors outline-none",
        "focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "disabled:opacity-50 disabled:pointer-events-none",
        sizeClass[size],
        radiusClass[radius],
        isPressed
          ? "bg-foreground text-background hover:bg-foreground/90"
          : "bg-transparent text-foreground hover:bg-muted",
        className,
      )}
    >
      {startContent}
      {children}
      {endContent}
    </button>
  );
});
Toggle.displayName = "Toggle";
