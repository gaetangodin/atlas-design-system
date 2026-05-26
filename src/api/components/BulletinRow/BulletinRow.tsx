/**
 * BulletinRow — single-line announcement / bulletin row used in
 * announcement lists and notification boards.
 *
 * Renders a status pip, headline, optional sub-meta, and a trailing
 * action. Used on board-style index pages (Announcements list, Help
 * Desk feed).
 */

import { forwardRef, type ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

export type BulletinTone = "info" | "success" | "warning" | "danger" | "neutral";

export interface BulletinRowProps {
  title: ReactNode;
  meta?: ReactNode;
  description?: ReactNode;
  tone?: BulletinTone;
  /** Replace the chevron with a custom trailing slot. */
  trailing?: ReactNode;
  /** Whole-row click — render as a button. */
  onClick?: () => void;
  /** Whole-row link — render as an anchor. */
  href?: string;
  isUnread?: boolean;
  className?: string;
  testId?: string;
  id?: string;
}

const TONE_PIP: Record<BulletinTone, string> = {
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-destructive",
  neutral: "bg-muted-foreground",
};

export const BulletinRow = forwardRef<HTMLElement, BulletinRowProps>(function BulletinRow(
  {
    title,
    meta,
    description,
    tone = "neutral",
    trailing,
    onClick,
    href,
    isUnread = false,
    className,
    testId,
    id,
  },
  ref,
) {
  const Element = (href ? "a" : onClick ? "button" : "div") as "a" | "button" | "div";

  const finalClass = cnHero(
    "group flex w-full items-start gap-3 border-b border-border px-4 py-3 text-left transition-colors last:border-b-0",
    (href || onClick) && "hover:bg-muted/60 cursor-pointer",
    isUnread && "bg-muted/30",
    className,
  );

  const body = (
    <>
      <span
        className={cnHero(
          "mt-1.5 inline-flex size-2 shrink-0 rounded-full",
          TONE_PIP[tone],
          isUnread && "ring-2 ring-offset-2 ring-offset-background",
        )}
        aria-hidden
      />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
          <p
            className={cnHero(
              "min-w-0 text-sm leading-snug",
              isUnread ? "font-semibold text-foreground" : "font-medium text-foreground",
            )}
          >
            {title}
          </p>
          {meta ? (
            <span className="shrink-0 text-xs text-muted-foreground">{meta}</span>
          ) : null}
        </div>
        {description ? (
          <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{description}</p>
        ) : null}
      </div>
      <div className="ml-auto flex shrink-0 items-center self-center">
        {trailing ?? (
          <ChevronRight
            className="size-4 text-muted-foreground opacity-60 group-hover:opacity-100"
            aria-hidden
          />
        )}
      </div>
    </>
  );

  if (Element === "a") {
    return (
      <a ref={ref as never} href={href} id={id} data-testid={testId} className={finalClass}>
        {body}
      </a>
    );
  }
  if (Element === "button") {
    return (
      <button
        ref={ref as never}
        type="button"
        onClick={onClick}
        id={id}
        data-testid={testId}
        className={finalClass}
      >
        {body}
      </button>
    );
  }
  return (
    <div ref={ref as never} id={id} data-testid={testId} className={finalClass}>
      {body}
    </div>
  );
});

BulletinRow.displayName = "BulletinRow";
