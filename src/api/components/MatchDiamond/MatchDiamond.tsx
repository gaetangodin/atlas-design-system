/**
 * MatchDiamond — three-state filled / half-filled / outline diamond
 * mark used in recruitment match indicators.
 *
 * Ported verbatim from Xeekrs (`candidates/MatchDiamond.tsx`).
 * Inline `fill` / `stroke` use `var(--skill-color)` because SVG
 * attributes (not classNames) need raw color values — Tailwind's
 * named `text-skill` utility can't reach the SVG fill attr.
 *
 * Helper exports:
 *   - `matchLevelFromRequiredOverlap(req, matching)` — derive level from counts
 *   - `matchLevelLabel(level)` — copy for a11y / chip text
 *   - `matchLevelPillClass(level)` — pre-baked pill className
 */

import { useId } from "react";
import { cnHero } from "../../../shared/cn-hero";

export type MatchLevel = "great" | "good" | "fair";

export interface MatchDiamondProps {
  level: MatchLevel;
  /** Pixel size of the SVG square. Defaults to 12. */
  size?: number;
  className?: string;
  "aria-label"?: string;
}

const DIAMOND_PATH =
  "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z";

export function MatchDiamond({
  level,
  size = 12,
  className,
  "aria-label": ariaLabel,
}: MatchDiamondProps) {
  const id = useId();
  const a11y = ariaLabel ? { role: "img", "aria-label": ariaLabel } : { "aria-hidden": true };

  if (level === "great") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="var(--skill-color, rgb(55, 48, 163))"
        stroke="var(--skill-color, rgb(55, 48, 163))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cnHero(className)}
        {...a11y}
      >
        <path d={DIAMOND_PATH} />
      </svg>
    );
  }

  if (level === "good") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cnHero(className)}
        {...a11y}
      >
        <defs>
          <linearGradient id={`atlas-match-half-${id}`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor="var(--skill-color, rgb(55, 48, 163))" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d={DIAMOND_PATH}
          fill={`url(#atlas-match-half-${id})`}
          stroke="var(--skill-color, rgb(55, 48, 163))"
        />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--skill-color, rgb(55, 48, 163))"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cnHero(className)}
      {...a11y}
    >
      <path d={DIAMOND_PATH} />
    </svg>
  );
}

/** Derive a match level from required-skill / matching-skill counts. */
export function matchLevelFromRequiredOverlap(
  requiredCount: number,
  matchingCount: number,
): MatchLevel {
  if (requiredCount <= 0) return "fair";
  const pct = Math.round((matchingCount / requiredCount) * 100);
  if (pct > 75) return "great";
  if (pct > 40) return "good";
  return "fair";
}

/** Human-readable label for the level. */
export function matchLevelLabel(level: MatchLevel): string {
  switch (level) {
    case "great":
      return "Great match";
    case "good":
      return "Good match";
    default:
      return "Fair match";
  }
}

/**
 * Pre-baked pill className for the level. Uses named utilities from
 * the Atlas Tailwind preset — no `[var(--…)]` arbitrary values.
 */
export function matchLevelPillClass(level: MatchLevel): string {
  const base = "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium text-skill";
  switch (level) {
    case "great":
      return `${base} bg-success-light`;
    case "good":
      return `${base} bg-warning-light`;
    default:
      return `${base} bg-muted`;
  }
}
