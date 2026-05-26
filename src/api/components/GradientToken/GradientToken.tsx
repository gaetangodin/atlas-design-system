/**
 * GradientToken — a single Job AI gradient rendered as a swatch tile.
 *
 * Documentation component mirroring `BrandSwatch` — shows the gradient
 * preview + token name + the raw CSS value. Used in the foundations
 * gallery.
 */

import { forwardRef } from "react";
import { jobAiGradients, type JobAiGradient } from "../../../domain/tokens/colorRamps";
import { cnHero } from "../../../shared/cn-hero";

export interface GradientTokenProps {
  /** Gradient token name. */
  name: JobAiGradient;
  /** Display title — defaults to the token name capitalized. */
  label?: string;
  /** Description shown beneath the title. */
  description?: string;
  className?: string;
  testId?: string;
}

export const GradientToken = forwardRef<HTMLDivElement, GradientTokenProps>(
  function GradientToken({ name, label, description, className, testId }, ref) {
    const value = jobAiGradients[name];
    const resolvedLabel = label ?? name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <div
        ref={ref}
        data-testid={testId}
        className={cnHero(
          "overflow-hidden rounded-lg border border-border bg-card",
          className,
        )}
      >
        <div
          className="aspect-[3/2] w-full"
          style={{ backgroundImage: value }}
          aria-hidden
        />
        <div className="space-y-1 px-3 py-2.5">
          <p className="text-sm font-semibold text-foreground">{resolvedLabel}</p>
          <p className="font-mono text-[10px] text-muted-foreground">
            jobAiGradients.{name}
          </p>
          {description ? (
            <p className="text-xs text-muted-foreground">{description}</p>
          ) : null}
        </div>
      </div>
    );
  },
);

GradientToken.displayName = "GradientToken";
