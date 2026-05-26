/**
 * PageBack — page-level "back" navigation control.
 *
 * Ported from Xeekrs (`PageBackNav.tsx`). Atlas takes a polymorphic shape:
 * pass `href` to render an `<a>`, pass `onClick` (no `href`) to render
 * a `<button>`. App-side routing decides which one to use.
 *
 * Two variants:
 *   - `card` (default): full pill with `min-h-12`, used at the top of
 *     a detail page. Reads "back to {label}".
 *   - `pill`: smaller compact pill used inside browse / section headers.
 *
 * Brand notes:
 *   - `text-size-adjust:100%` keeps the label readable on iOS Safari.
 *   - Hover swaps the bg subtly (muted) — no large color shifts.
 */

import { forwardRef, type ComponentPropsWithoutRef, type MouseEventHandler, type ReactNode } from "react";
import { ChevronLeft } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

export type PageBackVariant = "card" | "pill";

const CARD_CLASS =
  "inline-flex w-fit min-h-12 min-w-12 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-lg font-medium leading-snug text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [text-size-adjust:100%] [-webkit-text-size-adjust:100%]";

const PILL_CLASS =
  "flex min-h-11 min-w-0 max-w-[min(100%,14rem)] shrink-0 items-center justify-start gap-2.5 rounded-full px-3 py-2 text-sm font-semibold leading-snug tracking-wide text-muted-foreground no-underline transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [text-size-adjust:100%] [-webkit-text-size-adjust:100%] sm:max-w-none sm:px-4";

export interface PageBackProps extends Omit<ComponentPropsWithoutRef<"a">, "onClick"> {
  variant?: PageBackVariant;
  /** Label inside the control. */
  children?: ReactNode;
  /** If provided, renders an `<a>`. */
  href?: string;
  /** If provided (and no `href`), renders a `<button>`. */
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  className?: string;
  testId?: string;
  "aria-label"?: string;
}

export const PageBack = forwardRef<HTMLAnchorElement | HTMLButtonElement, PageBackProps>(
  function PageBack(
    {
      variant = "card",
      children,
      href,
      onClick,
      className,
      testId,
      "aria-label": ariaLabel,
      ...rest
    },
    ref,
  ) {
    const isPill = variant === "pill";
    const base = isPill ? PILL_CLASS : CARD_CLASS;
    const iconClass = isPill ? "shrink-0 size-5 text-muted-foreground" : "shrink-0 size-6";

    const body = (
      <>
        <ChevronLeft className={iconClass} strokeWidth={2} aria-hidden />
        {isPill ? (
          <span className="hidden min-w-0 truncate md:inline">{children}</span>
        ) : (
          children
        )}
      </>
    );

    if (href) {
      return (
        <a
          ref={ref as never}
          href={href}
          data-testid={testId}
          aria-label={ariaLabel}
          onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
          className={cnHero(base, className)}
          {...rest}
        >
          {body}
        </a>
      );
    }

    return (
      <button
        ref={ref as never}
        type="button"
        data-testid={testId}
        aria-label={ariaLabel}
        onClick={onClick as MouseEventHandler<HTMLButtonElement>}
        className={cnHero(base, className)}
      >
        {body}
      </button>
    );
  },
);

PageBack.displayName = "PageBack";
