/**
 * Brand & social icon set — small inline SVG marks distinct from
 * `lucide-react`. Used in identity cards, footers, and CTAs.
 *
 *  - `LinkedInSolidIcon` — solid LinkedIn glyph for social-share rows.
 *  - `XeekrsMark`        — square Xeekrs mark (workmark-free).
 *  - `BrandIconButton`   — convenience wrapper that drops an icon into
 *                          a 32px round button (matches `IconButton`).
 */

import type { SVGProps, ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface BrandIconProps extends SVGProps<SVGSVGElement> {
  /** Pixel size for both width and height. Default 16. */
  size?: number;
}

function withDefaults({ size = 16, className, ...rest }: BrandIconProps) {
  return {
    width: size,
    height: size,
    "aria-hidden": rest["aria-hidden"] ?? true,
    className: cnHero("inline-block shrink-0", className),
    ...rest,
  };
}

export function LinkedInSolidIcon(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...withDefaults(props)}>
      <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43A2.06 2.06 0 1 1 5.35 3.3a2.06 2.06 0 0 1-.01 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function XeekrsMark(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...withDefaults(props)}>
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path d="M9 9l14 14M23 9L9 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export interface BrandIconButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
  /** Inverted (filled) appearance. */
  inverted?: boolean;
  className?: string;
}
/** Convenience wrapper — 32px round affordance for a brand icon. */
export function BrandIconButton({ icon, label, onClick, href, inverted, className }: BrandIconButtonProps) {
  const cls = cnHero(
    "inline-flex size-8 items-center justify-center rounded-full transition",
    inverted
      ? "bg-foreground text-background hover:bg-foreground/90"
      : "border border-border bg-card text-foreground hover:bg-muted",
    className,
  );
  if (href) {
    return (
      <a href={href} aria-label={label} className={cls}>
        {icon}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} aria-label={label} className={cls}>
      {icon}
    </button>
  );
}
