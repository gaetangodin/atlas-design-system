/**
 * QuickActionButton — circular contact-action pill used in recruitment
 * cards (call / chat / email / view profile).
 *
 * Ported from Xeekrs (`candidates/RecruitmentQuickAction.tsx →
 * RecruitmentQuickActionButton`). Atlas drops the `Recruitment` prefix
 * because the chrome is generic — a small pill icon-button with an
 * optional truncated label, wrapped in a Tooltip.
 *
 * `labelMode` controls how the label is shown:
 *   - `"auto"`   — visible only when the parent is wide enough (CSS
 *                  container query `@[20rem]`)
 *   - `"always"` — always visible (with truncation)
 *   - `"never"`  — visually hidden (`sr-only`); tooltip carries the info
 *
 * For mailto / link variants, use `as="a"` with `href`.
 */

import { forwardRef, type ElementType, type MouseEvent, type ReactNode } from "react";
import { Tooltip } from "../Tooltip";
import { cnHero } from "../../../shared/cn-hero";

export type QuickActionLabelMode = "auto" | "always" | "never";

const PILL =
  "relative inline-flex h-8 min-h-8 min-w-8 shrink-0 items-center justify-center gap-1.5 overflow-visible rounded-full border border-border/80 bg-card px-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function labelClass(mode: QuickActionLabelMode): string {
  if (mode === "never") return "sr-only";
  if (mode === "always") return "inline max-w-[9rem] truncate";
  return "hidden max-w-[9rem] truncate @[20rem]:inline";
}

interface QuickActionButtonProps {
  /** Lucide (or any) icon element. */
  icon: ReactNode;
  label: string;
  /** Tooltip copy — shown on hover / focus. Defaults to `label`. */
  tooltip?: string;
  /** Click handler when rendering as button. */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** When provided, renders as an `<a>` (use for mailto / external links). */
  href?: string;
  /** Override the rendered tag. Useful for Next.js `Link as={Link}`. */
  as?: ElementType;
  labelMode?: QuickActionLabelMode;
  /** For use inside clickable rows/cards — stops the row click from firing. */
  stopClickPropagation?: boolean;
  className?: string;
  testId?: string;
  id?: string;
}

export const QuickActionButton = forwardRef<HTMLElement, QuickActionButtonProps>(
  function QuickActionButton(
    {
      icon,
      label,
      tooltip,
      onClick,
      href,
      as,
      labelMode = "auto",
      stopClickPropagation = false,
      className,
      testId,
      id,
    },
    ref,
  ) {
    const Element = (as ?? (href ? "a" : "button")) as ElementType;
    const isAnchor = Element === "a" || Boolean(href);
    const tip = tooltip ?? label;
    const hideLabel = labelMode === "never";

    const body = (
      <>
        <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden>
          {icon}
        </span>
        <span className={labelClass(labelMode)}>{label}</span>
      </>
    );

    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
      if (stopClickPropagation) event.stopPropagation();
      onClick?.(event);
    };

    return (
      <Tooltip content={tip} placement="top">
        <Element
          ref={ref as never}
          id={id}
          data-testid={testId}
          {...(isAnchor
            ? { href, className: cnHero(PILL, "no-underline", className) }
            : {
                type: "button",
                onClick: handleClick,
                className: cnHero(PILL, className),
              })}
          aria-label={hideLabel ? tip : undefined}
        >
          {body}
        </Element>
      </Tooltip>
    );
  },
);

QuickActionButton.displayName = "QuickActionButton";
