/**
 * FilterSection — collapsible filter group used in sidebar / drawer
 * filter panels.
 *
 * Generic shape (Xeekrs has five domain-specific filter sections —
 * MatchLevel, MatchStatus, Sector, Worksite, SidebarSearch — all
 * structurally identical: collapsible header + body + optional
 * "active count" badge).
 *
 * Atlas exposes the structure; apps fill the body with their own
 * checkboxes / chips / inputs.
 */

import { forwardRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

export interface FilterSectionProps {
  title: ReactNode;
  /** Number of active filters in this section — shown as a count chip. */
  activeCount?: number;
  /** Initial open state — uncontrolled. */
  defaultOpen?: boolean;
  /** Controlled open state. Pair with `onOpenChange`. */
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Footer slot — e.g. a "Clear" link. Rendered when expanded. */
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
  testId?: string;
  id?: string;
}

export const FilterSection = forwardRef<HTMLDivElement, FilterSectionProps>(
  function FilterSection(
    {
      title,
      activeCount = 0,
      defaultOpen = true,
      isOpen,
      onOpenChange,
      footer,
      children,
      className,
      testId,
      id,
    },
    ref,
  ) {
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const open = isOpen ?? internalOpen;
    const toggle = (): void => {
      const next = !open;
      if (isOpen === undefined) setInternalOpen(next);
      onOpenChange?.(next);
    };
    return (
      <div
        ref={ref}
        id={id}
        data-testid={testId}
        className={cnHero(
          "border-b border-border last:border-b-0",
          className,
        )}
      >
        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="flex min-w-0 items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
              {title}
            </span>
            {activeCount > 0 ? (
              <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-bold leading-5 text-primary-foreground">
                {activeCount}
              </span>
            ) : null}
          </span>
          <ChevronDown
            className={cnHero(
              "size-4 shrink-0 text-muted-foreground transition-transform",
              open && "rotate-180",
            )}
            aria-hidden
          />
        </button>
        {open ? (
          <div className="px-3 pb-3 pt-1">
            <div className="space-y-2">{children}</div>
            {footer ? (
              <div className="mt-2 border-t border-border/60 pt-2 text-xs">
                {footer}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  },
);

FilterSection.displayName = "FilterSection";
