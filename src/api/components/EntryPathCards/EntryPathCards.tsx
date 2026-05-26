/**
 * EntryPathCards — "how do you want to start?" pickable cards used at
 * the head of multi-step flows (job posting wizard, onboarding,
 * import wizards).
 *
 * Each card is a large pressable tile with an icon, title, description,
 * and an optional badge. One card is selected at a time (radio-style).
 *
 * Pattern from Xeekrs's posting flow — abstracted to a generic primitive
 * usable by any wizard entry point. Card chrome reuses Atlas's
 * `rounded-2xl + border + shadow-sm` lift-on-hover treatment.
 */

import { forwardRef, type ReactNode } from "react";
import { Check } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

export interface EntryPathOption<T extends string = string> {
  id: T;
  title: string;
  description?: string;
  icon?: ReactNode;
  /** Optional badge (e.g. <AiGeneratedBadge />, "Recommended"). */
  badge?: ReactNode;
  isDisabled?: boolean;
}

export interface EntryPathCardsProps<T extends string = string> {
  options: EntryPathOption<T>[];
  /** Selected option id. */
  value?: T;
  onChange?: (id: T) => void;
  /**
   * Visual columns. `auto` picks 1 / 2 / 3 based on count. Pass an
   * explicit number to override.
   */
  columns?: "auto" | 1 | 2 | 3;
  className?: string;
  testId?: string;
  id?: string;
  /** Aria-label for the radio group. */
  "aria-label"?: string;
}

function pickColumnsClass(columns: EntryPathCardsProps["columns"], count: number): string {
  const n =
    columns === "auto" || columns === undefined
      ? count <= 1
        ? 1
        : count === 2
          ? 2
          : 3
      : columns;
  if (n === 1) return "grid-cols-1";
  if (n === 2) return "grid-cols-1 sm:grid-cols-2";
  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
}

export const EntryPathCards = forwardRef<HTMLDivElement, EntryPathCardsProps>(
  function EntryPathCards(
    {
      options,
      value,
      onChange,
      columns = "auto",
      className,
      testId,
      id,
      "aria-label": ariaLabel,
    },
    ref,
  ) {
    return (
      <div
        ref={ref}
        id={id}
        data-testid={testId}
        role="radiogroup"
        aria-label={ariaLabel ?? "Pick a path"}
        className={cnHero("grid gap-3", pickColumnsClass(columns, options.length), className)}
      >
        {options.map((opt) => {
          const isSelected = value === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={opt.isDisabled}
              onClick={() => onChange?.(opt.id as never)}
              className={cnHero(
                "group flex flex-col items-start gap-3 rounded-2xl border bg-card p-5 text-left shadow-sm transition-all",
                "hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                isSelected
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border hover:border-foreground/20",
                opt.isDisabled && "opacity-50 cursor-not-allowed hover:translate-y-0 hover:shadow-sm",
              )}
            >
              <div className="flex w-full items-start justify-between gap-3">
                {opt.icon ? (
                  <span
                    className={cnHero(
                      "inline-flex size-10 shrink-0 items-center justify-center rounded-xl",
                      isSelected
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground",
                    )}
                    aria-hidden
                  >
                    {opt.icon}
                  </span>
                ) : null}
                <div className="flex shrink-0 items-center gap-1.5">
                  {opt.badge}
                  {isSelected ? (
                    <span
                      className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
                      aria-hidden
                    >
                      <Check className="size-3" />
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-base font-semibold text-foreground">{opt.title}</p>
                {opt.description ? (
                  <p className="text-sm text-muted-foreground">{opt.description}</p>
                ) : null}
              </div>
            </button>
          );
        })}
      </div>
    );
  },
);

EntryPathCards.displayName = "EntryPathCards";
