/**
 * TemplateCard — pickable template tile shown in posting / report
 * wizards.
 *
 * Smaller than `EntryPathCards` (those are headline choices); this is
 * one of many. Renders preview chrome + title + metadata + selection
 * affordance. Compose into a grid.
 */

import { forwardRef, type ReactNode } from "react";
import { Check } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

export interface TemplateCardProps {
  title: string;
  description?: string;
  /** Optional preview content — thumbnail, sparkline, snippet. */
  preview?: ReactNode;
  /** Optional badges (top-right corner). */
  badges?: ReactNode;
  /** Meta strip below the title (small text). */
  meta?: ReactNode;
  isSelected?: boolean;
  isDisabled?: boolean;
  onSelect?: () => void;
  className?: string;
  testId?: string;
  id?: string;
}

export const TemplateCard = forwardRef<HTMLButtonElement, TemplateCardProps>(
  function TemplateCard(
    {
      title,
      description,
      preview,
      badges,
      meta,
      isSelected = false,
      isDisabled = false,
      onSelect,
      className,
      testId,
      id,
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type="button"
        id={id}
        data-testid={testId}
        disabled={isDisabled}
        onClick={onSelect}
        aria-pressed={isSelected}
        className={cnHero(
          "group flex h-full flex-col overflow-hidden rounded-2xl border bg-card text-left shadow-sm transition-all",
          "hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          isSelected
            ? "border-primary ring-2 ring-primary/20"
            : "border-border hover:border-foreground/20",
          isDisabled && "cursor-not-allowed opacity-50 hover:shadow-sm",
          className,
        )}
      >
        {preview ? (
          <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-muted/40">
            {preview}
            {badges ? (
              <div className="absolute right-2 top-2 flex items-center gap-1">{badges}</div>
            ) : null}
            {isSelected ? (
              <span
                className="absolute left-2 top-2 inline-flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground"
                aria-hidden
              >
                <Check className="size-3" />
              </span>
            ) : null}
          </div>
        ) : null}

        <div className="flex flex-1 flex-col gap-1.5 p-4">
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-semibold text-foreground">{title}</p>
            {!preview ? (
              <div className="flex shrink-0 items-center gap-1">
                {badges}
                {isSelected ? (
                  <span
                    className="inline-flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground"
                    aria-hidden
                  >
                    <Check className="size-3" />
                  </span>
                ) : null}
              </div>
            ) : null}
          </div>
          {description ? (
            <p className="text-xs text-muted-foreground">{description}</p>
          ) : null}
          {meta ? (
            <div className="mt-1 text-xs text-muted-foreground">{meta}</div>
          ) : null}
        </div>
      </button>
    );
  },
);

TemplateCard.displayName = "TemplateCard";
