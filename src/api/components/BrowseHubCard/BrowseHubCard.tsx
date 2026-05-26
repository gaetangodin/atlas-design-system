/**
 * BrowseHubCard — large clickable hub tile used on browse pages.
 *
 * Ported from the CSS class in Xeekrs's `shell-patterns.ts`
 * (`BROWSE_HUB_CARD_CLASS` + `BROWSE_MAIN_SPACE_CARD_CLASS`). The two
 * patterns are nearly identical — Atlas merges them under one
 * `variant` prop:
 *   - `hub` (default) — sub-card with max-w-sm cap.
 *   - `mainSpace`     — top-level tile without the max-w cap, slightly
 *                       heavier hover shadow.
 *
 * Renders an `<a>` when `href` is set, else a `<button>`.
 */

import { forwardRef, type MouseEventHandler, type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";

export type BrowseHubCardVariant = "hub" | "mainSpace";

export interface BrowseHubCardProps {
  variant?: BrowseHubCardVariant;
  /** When provided, renders an `<a>`. Else renders a `<button>`. */
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
  testId?: string;
  id?: string;
  "aria-label"?: string;
}

const HUB_CLASS =
  "bg-background border border-border rounded-[32px] overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-foreground/20 transition-all duration-200 cursor-pointer text-left flex flex-col max-w-sm";

const MAIN_SPACE_CLASS =
  "bg-background border border-border rounded-[32px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer text-left flex flex-col";

export const BrowseHubCard = forwardRef<HTMLElement, BrowseHubCardProps>(
  function BrowseHubCard(
    {
      variant = "hub",
      href,
      onClick,
      children,
      className,
      testId,
      id,
      "aria-label": ariaLabel,
    },
    ref,
  ) {
    const base = variant === "mainSpace" ? MAIN_SPACE_CLASS : HUB_CLASS;
    const finalClass = cnHero(base, className);

    if (href) {
      return (
        <a
          ref={ref as never}
          href={href}
          id={id}
          aria-label={ariaLabel}
          data-testid={testId}
          onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
          className={finalClass}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as never}
        type="button"
        id={id}
        aria-label={ariaLabel}
        data-testid={testId}
        onClick={onClick as MouseEventHandler<HTMLButtonElement>}
        className={finalClass}
      >
        {children}
      </button>
    );
  },
);

BrowseHubCard.displayName = "BrowseHubCard";
