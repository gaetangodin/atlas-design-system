/**
 * ColorScale — renders one named color ramp as a swatch strip.
 *
 * Documentation component for the library / Storybook. Apps don't
 * normally use this in production UI; it's the "show me what
 * `bg-lavender-*` looks like" reference.
 */

import { forwardRef } from "react";
import {
  colorRamps,
  type ColorRamp,
  type ColorRampName,
  type RampStep,
} from "../../../domain/tokens/colorRamps";
import { cnHero } from "../../../shared/cn-hero";

const RAMP_STEPS: RampStep[] = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

export interface ColorScaleProps {
  /** Named ramp from `domain/tokens/colorRamps`. */
  ramp: ColorRampName;
  /** Show hex value under each swatch. Defaults to `true`. */
  showValues?: boolean;
  /** Display label for the ramp. Defaults to the capitalized ramp name. */
  label?: string;
  /** Subtitle / description shown beneath the label. */
  description?: string;
  className?: string;
  testId?: string;
}

function pickForegroundForHex(hex: string): string {
  // Quick perceptual luminance estimate. Step 500 and below typically
  // need dark text; deeper steps get white. Good enough for swatch
  // labels; not for production a11y decisions.
  const m = /^#([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return "#0C2120";
  const n = parseInt(m[1], 16);
  const r = (n >> 16) & 0xff;
  const g = (n >> 8) & 0xff;
  const b = n & 0xff;
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.6 ? "#0C2120" : "#FFFFFF";
}

export const ColorScale = forwardRef<HTMLDivElement, ColorScaleProps>(
  function ColorScale(
    { ramp, showValues = true, label, description, className, testId },
    ref,
  ) {
    const data: ColorRamp = colorRamps[ramp];
    const resolvedLabel =
      label ?? ramp.charAt(0).toUpperCase() + ramp.slice(1);

    return (
      <div
        ref={ref}
        data-testid={testId}
        className={cnHero("flex flex-col gap-3", className)}
      >
        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-semibold text-foreground">
            {resolvedLabel}
          </p>
          {description ? (
            <p className="text-xs text-muted-foreground">{description}</p>
          ) : null}
        </div>
        <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
          {RAMP_STEPS.map((step) => {
            const value = data[step];
            const fg = pickForegroundForHex(value);
            return (
              <div
                key={step}
                className="flex flex-col gap-1.5 rounded-md overflow-hidden"
              >
                <div
                  className="aspect-square rounded-md border border-border/50 flex items-end justify-start p-2 text-[10px] font-medium tracking-wide"
                  style={{ backgroundColor: value, color: fg }}
                  title={`${ramp}-${step} · ${value}`}
                >
                  {step}
                </div>
                {showValues ? (
                  <p className="text-[10px] font-mono uppercase tracking-tight text-muted-foreground">
                    {value}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);

ColorScale.displayName = "ColorScale";
