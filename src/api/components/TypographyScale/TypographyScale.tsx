/**
 * TypographyScale — renders Atlas's text steps as a reference ramp.
 *
 * Documentation component for the library / Storybook. Each row shows
 * the named step (`text-xs` … `text-4xl`), the resolved pixel value,
 * and a sample line set in the appropriate Atlas font family.
 */

import { forwardRef } from "react";
import { cnHero } from "../../../shared/cn-hero";

type ScaleStep = {
  /** Tailwind utility name without the `text-` prefix. */
  key: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  /** Pixel value from `--text-{key}` in globals.css. */
  px: number;
  /** Sample line shown for this step. */
  sample: string;
};

const PRODUCT_STEPS: ScaleStep[] = [
  { key: "xs", px: 16, sample: "Caption / muted helper copy" },
  { key: "sm", px: 14, sample: "Compact UI / dense list rows" },
  { key: "base", px: 16, sample: "Body — default product text" },
  { key: "lg", px: 18, sample: "Lead paragraph" },
  { key: "xl", px: 20, sample: "Section subtitle" },
  { key: "2xl", px: 24, sample: "Card title" },
  { key: "3xl", px: 30, sample: "Page heading" },
  { key: "4xl", px: 36, sample: "Display heading" },
];

export type TypographyScaleVariant = "product" | "marketing";

export interface TypographyScaleProps {
  /**
   * `"product"` shows the in-app text scale (Open Sans). `"marketing"`
   * is the bolder display scale (Raleway) used on marketing pages —
   * same px values, different family.
   */
  variant?: TypographyScaleVariant;
  /** Hide the px column. Defaults to `false`. */
  hideValues?: boolean;
  className?: string;
  testId?: string;
}

export const TypographyScale = forwardRef<HTMLDivElement, TypographyScaleProps>(
  function TypographyScale(
    { variant = "product", hideValues = false, className, testId },
    ref,
  ) {
    const fontClass = variant === "marketing" ? "font-heading" : "font-body";
    return (
      <div
        ref={ref}
        data-testid={testId}
        className={cnHero("divide-y divide-border rounded-lg border border-border", className)}
      >
        {PRODUCT_STEPS.map((step) => (
          <div
            key={step.key}
            className="grid grid-cols-[80px_64px_1fr] items-baseline gap-4 px-4 py-4"
          >
            <code className="font-mono text-[11px] uppercase tracking-tight text-muted-foreground">
              text-{step.key}
            </code>
            {hideValues ? (
              <span />
            ) : (
              <code className="font-mono text-[11px] text-muted-foreground">
                {step.px}px
              </code>
            )}
            <p
              className={cnHero("text-foreground", fontClass)}
              style={{ fontSize: `${step.px}px` }}
            >
              {step.sample}
            </p>
          </div>
        ))}
      </div>
    );
  },
);

TypographyScale.displayName = "TypographyScale";
