/**
 * BrandLogo — Xeekrs / EmployNext logo lockups.
 *
 * SVG assets are bundled with the package under
 * `src/assets/brand/logos/`. Apps that import this component get the
 * artwork "for free" — no need to copy SVGs into `public/`.
 *
 * Variants map 1:1 to the source SVG filenames so designers can speak
 * the same language as the Figma library.
 */

import { forwardRef } from "react";
import { cnHero } from "../../../shared/cn-hero";

// Bundler-resolved asset URLs. Works under Vite, Next.js (turbopack +
// webpack), and any other modern bundler that supports `new URL` import
// resolution. Each `?url` query keeps the SVG file on disk and resolves
// to its hashed public URL at build time — no inline-SVG bloat in the
// JS bundle.
const ASSETS = {
  xeekrs: new URL("../../../assets/brand/logos/xeekrs_logo.svg", import.meta.url).href,
  xeekrsWhite: new URL("../../../assets/brand/logos/xeekrs_logo-white.svg", import.meta.url).href,
  xeekrsTagline: new URL("../../../assets/brand/logos/xeekrs_logo-tagline.svg", import.meta.url).href,
  xeekrsTaglineWhite: new URL("../../../assets/brand/logos/xeekrs_logo-tagline-white.svg", import.meta.url).href,
  xeekrsTaglineStacked: new URL("../../../assets/brand/logos/xeekrs_logo-tagline-stacked.svg", import.meta.url).href,
  xeekrsTaglineStackedWhite: new URL("../../../assets/brand/logos/xeekrs_logo-tagline-stacked-white.svg", import.meta.url).href,
  xeekrsSocial: new URL("../../../assets/brand/logos/xeekrs_social-profile.svg", import.meta.url).href,
  employnext: new URL("../../../assets/brand/logos/employnext-logo.svg", import.meta.url).href,
} as const;

export type BrandLogoVariant = keyof typeof ASSETS;

export interface BrandLogoProps {
  /** Which lockup to render. Defaults to the horizontal full-color mark. */
  variant?: BrandLogoVariant;
  /** Pixel or CSS height. Width auto-derives from the SVG's viewBox. */
  height?: number | string;
  /** Accessible label. Set to `""` to mark the logo decorative. */
  alt?: string;
  className?: string;
  testId?: string;
  id?: string;
}

const DEFAULT_ALT: Record<BrandLogoVariant, string> = {
  xeekrs: "Xeekrs",
  xeekrsWhite: "Xeekrs",
  xeekrsTagline: "Xeekrs",
  xeekrsTaglineWhite: "Xeekrs",
  xeekrsTaglineStacked: "Xeekrs",
  xeekrsTaglineStackedWhite: "Xeekrs",
  xeekrsSocial: "Xeekrs",
  employnext: "EmployNext",
};

export const BrandLogo = forwardRef<HTMLImageElement, BrandLogoProps>(
  function BrandLogo(
    { variant = "xeekrs", height = 28, alt, className, testId, id },
    ref,
  ) {
    const resolvedAlt = alt ?? DEFAULT_ALT[variant];
    return (
      <img
        ref={ref}
        id={id}
        src={ASSETS[variant]}
        alt={resolvedAlt}
        height={height}
        // Inline width:auto preserves aspect from the SVG viewBox while
        // letting consumers override via `className`.
        style={{ height, width: "auto" }}
        data-testid={testId}
        className={cnHero("inline-block select-none", className)}
        draggable={false}
      />
    );
  },
);

BrandLogo.displayName = "BrandLogo";
