/**
 * Banner — full-width announcement bar. Typically pinned at the top of
 * a page or layout (e.g. trial expiring, scheduled maintenance, new
 * feature). Distinct from Alert (in-flow card with title/description).
 */
import { forwardRef, type Ref, type ReactNode, type HTMLAttributes } from "react";
import { cnHero } from "../../../shared/cn-hero";

export type BannerTone = "info" | "success" | "warning" | "danger" | "neutral";

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  tone?: BannerTone;
  icon?: ReactNode;
  action?: ReactNode;
  onClose?: () => void;
  children?: ReactNode;
}

const toneClass: Record<BannerTone, string> = {
  info: "bg-info/10 text-info",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  danger: "bg-destructive/10 text-destructive",
  neutral: "bg-muted text-foreground",
};

export const Banner = forwardRef<HTMLDivElement, BannerProps>(function Banner(
  { tone = "neutral", icon, action, onClose, className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref as Ref<HTMLDivElement>}
      role="status"
      className={cnHero(
        "flex items-center gap-3 px-4 py-2.5 text-sm",
        toneClass[tone],
        className,
      )}
      {...rest}
    >
      {icon ? <span className="inline-flex items-center justify-center [&_svg]:size-4 shrink-0">{icon}</span> : null}
      <div className="flex-1 min-w-0">{children}</div>
      {action ? <div className="shrink-0">{action}</div> : null}
      {onClose ? (
        <button
          type="button"
          aria-label="Dismiss"
          onClick={onClose}
          className="inline-flex items-center justify-center size-6 rounded-full hover:bg-foreground/10 shrink-0"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 2L10 10M10 2L2 10" strokeLinecap="round" />
          </svg>
        </button>
      ) : null}
    </div>
  );
});
Banner.displayName = "Banner";
