/**
 * SiteSwitcherTrigger — chrome for the "current workspace" pill.
 *
 * Ported from Xeekrs (`WorkSiteSwitcher.tsx`). Atlas exposes only the
 * **trigger** — apps wire up their own modal (Atlas's `Modal` or
 * `Drawer` work). This keeps Atlas free of `BusinessSite` types and
 * routing concerns.
 *
 * Two visual modes:
 *   - `default` — solid pill on background, used in expanded sidebars.
 *   - `onTint`  — glass effect for use over a tinted hero / dark band.
 *
 * Plus `collapsed` for icon-rail use (square button with just the logo).
 */

import { forwardRef, type ReactNode } from "react";
import { ArrowLeftRight } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

export type SiteSwitcherTriggerVariant = "default" | "onTint";

export interface SiteSwitcherTriggerProps {
  /** Display name of the active workspace / business site. */
  siteName: string;
  /** Image URL for the workspace logo. Falls back to initials. */
  logoUrl?: string;
  /** 1–2 char initials when no logo (uppercased automatically). */
  initials?: string;
  /** Click handler (the trigger doesn't own a modal). */
  onOpen?: () => void;
  variant?: SiteSwitcherTriggerVariant;
  /** Icon-only collapsed form (sidebar rail). */
  collapsed?: boolean;
  className?: string;
  testId?: string;
  "aria-label"?: string;
}

function Mark({
  initials,
  logoUrl,
  isTint,
  size,
}: {
  initials?: string;
  logoUrl?: string;
  isTint: boolean;
  size: "sm" | "md";
}): ReactNode {
  const dim = size === "sm" ? "h-8 w-8" : "h-9 w-9";
  const shell = cnHero(
    "flex shrink-0 items-center justify-center overflow-hidden rounded-md ring-1",
    dim,
    isTint
      ? "bg-white/15 ring-white/25"
      : "bg-muted/80 ring-border/50",
  );
  if (logoUrl) {
    return (
      <span className={shell} aria-hidden>
        <img
          src={logoUrl}
          alt=""
          className="h-full w-full object-contain p-0.5"
          loading="lazy"
          decoding="async"
        />
      </span>
    );
  }
  return (
    <span
      className={cnHero(
        shell,
        "text-xs font-bold leading-none tracking-tight",
        isTint ? "text-white" : "text-muted-foreground",
      )}
      aria-hidden
    >
      {(initials ?? "?").slice(0, 2).toUpperCase()}
    </span>
  );
}

export const SiteSwitcherTrigger = forwardRef<HTMLButtonElement, SiteSwitcherTriggerProps>(
  function SiteSwitcherTrigger(
    {
      siteName,
      logoUrl,
      initials,
      onOpen,
      variant = "default",
      collapsed = false,
      className,
      testId,
      "aria-label": ariaLabel,
    },
    ref,
  ) {
    const isTint = variant === "onTint";

    return (
      <button
        ref={ref}
        type="button"
        onClick={onOpen}
        data-testid={testId}
        aria-label={
          ariaLabel ??
          (collapsed
            ? `Current business location: ${siteName}. Choose to switch.`
            : "Current business location, choose to switch")
        }
        className={cnHero(
          collapsed
            ? isTint
              ? "inline-flex h-10 w-full max-w-full shrink-0 items-center justify-center rounded-xl border border-white/30 bg-white/10 text-white backdrop-blur-sm outline-none transition-colors hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-white/50"
              : "inline-flex h-10 w-full max-w-full shrink-0 items-center justify-center rounded-xl border border-border bg-background text-foreground outline-none transition-colors hover:bg-muted/60 focus-visible:ring-2 focus-visible:ring-ring"
            : isTint
              ? "inline-flex w-full max-w-full items-center justify-between gap-2 rounded-xl border border-white/30 bg-white/10 px-3 py-2.5 text-left text-sm font-medium text-white backdrop-blur-sm outline-none transition-colors hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-white/50 md:w-auto md:min-w-[220px]"
              : "inline-flex w-full max-w-full items-center justify-between gap-2 rounded-xl border border-border bg-background px-3 py-2.5 text-left text-sm font-medium text-foreground outline-none transition-colors hover:bg-muted/60 focus-visible:ring-2 focus-visible:ring-ring md:w-auto md:min-w-[220px]",
          className,
        )}
      >
        {collapsed ? (
          <Mark initials={initials} logoUrl={logoUrl} isTint={isTint} size="sm" />
        ) : (
          <>
            <span className="flex min-w-0 flex-1 items-center gap-2">
              <Mark initials={initials} logoUrl={logoUrl} isTint={isTint} size="md" />
              <span className="min-w-0 flex-1 break-words text-left text-sm font-semibold leading-snug">
                {siteName}
              </span>
            </span>
            <ArrowLeftRight
              size={16}
              className={cnHero(
                "shrink-0",
                isTint ? "opacity-90" : "text-muted-foreground",
              )}
              aria-hidden
            />
          </>
        )}
      </button>
    );
  },
);

SiteSwitcherTrigger.displayName = "SiteSwitcherTrigger";
