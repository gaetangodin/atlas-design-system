/**
 * BrandSwatch — single color tile with hex / role / utility label.
 *
 * Used inside brand-board and palette documentation. Differs from
 * ColorScale (which renders a whole ramp): this is one tile, deliberate
 * about showing all the metadata a designer or developer needs.
 */

import { forwardRef } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface BrandSwatchProps {
  /** Display name for the color, e.g. "Lavender". */
  name: string;
  /** The color value — hex or rgb string. */
  value: string;
  /** Where this color sits in the design system, e.g. "Primary CTA". */
  role?: string;
  /** Tailwind utility, e.g. "bg-lavender-500". */
  utility?: string;
  /** Optional 1-line description. */
  description?: string;
  className?: string;
  testId?: string;
}

function pickForegroundForHex(value: string): string {
  const m = /^#([0-9a-f]{6})$/i.exec(value.trim());
  if (!m) return "#0C2120";
  const n = parseInt(m[1], 16);
  const r = (n >> 16) & 0xff;
  const g = (n >> 8) & 0xff;
  const b = n & 0xff;
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.6 ? "#0C2120" : "#FFFFFF";
}

export const BrandSwatch = forwardRef<HTMLDivElement, BrandSwatchProps>(
  function BrandSwatch(
    { name, value, role, utility, description, className, testId },
    ref,
  ) {
    const fg = pickForegroundForHex(value);
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
          className="flex aspect-[3/2] items-end p-3 text-sm font-semibold tracking-tight"
          style={{ backgroundColor: value, color: fg }}
          title={`${name} · ${value}`}
        >
          {name}
        </div>
        <div className="space-y-1 px-3 py-2.5">
          <p className="font-mono text-[11px] uppercase tracking-tight text-foreground">
            {value}
          </p>
          {utility ? (
            <p className="font-mono text-[10px] text-muted-foreground">
              {utility}
            </p>
          ) : null}
          {role ? (
            <p className="text-xs font-medium text-muted-foreground">{role}</p>
          ) : null}
          {description ? (
            <p className="text-xs text-muted-foreground">{description}</p>
          ) : null}
        </div>
      </div>
    );
  },
);

BrandSwatch.displayName = "BrandSwatch";
