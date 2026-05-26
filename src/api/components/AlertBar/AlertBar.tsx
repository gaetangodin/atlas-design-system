/**
 * AlertBar — full-width announcement bar that tucks at the top of the
 * page (above the TopBar).
 *
 * Used for cross-cutting system messages: "Scheduled maintenance",
 * "Connection lost", "New feature available". Different from Atlas's
 * inline `Alert` (sits in a content card) and `Banner` (sits inside
 * a feature surface) — this is shell-level chrome.
 *
 * Reads `--announcement-alert-bars-height` so the rest of the shell
 * can stack beneath it (see Atlas's `SubNav` `position="fixed"`).
 */

import { forwardRef, type ReactNode } from "react";
import { X } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

export type AlertBarTone = "info" | "success" | "warning" | "danger";

export interface AlertBarProps {
  message: ReactNode;
  tone?: AlertBarTone;
  /** Optional icon — defaults to a tone-appropriate icon if omitted. */
  icon?: ReactNode;
  /** Action slot (link / button on the right). */
  action?: ReactNode;
  /** Close handler — adds a dismiss × button. */
  onClose?: () => void;
  /** When true, `position: sticky top: 0`. */
  sticky?: boolean;
  className?: string;
  testId?: string;
  id?: string;
}

const TONE_CLASS: Record<AlertBarTone, string> = {
  info: "bg-info text-info-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-destructive text-destructive-foreground",
};

export const AlertBar = forwardRef<HTMLDivElement, AlertBarProps>(function AlertBar(
  { message, tone = "info", icon, action, onClose, sticky = false, className, testId, id },
  ref,
) {
  return (
    <div
      ref={ref}
      id={id}
      data-testid={testId}
      role="status"
      aria-live="polite"
      className={cnHero(
        "flex w-full items-center gap-3 px-4 py-2 text-sm",
        TONE_CLASS[tone],
        sticky && "sticky top-0 z-50",
        className,
      )}
    >
      {icon ? <span className="shrink-0">{icon}</span> : null}
      <p className="min-w-0 flex-1 font-medium">{message}</p>
      {action ? <div className="shrink-0">{action}</div> : null}
      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss"
          className="ml-1 inline-flex size-7 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <X className="size-4" />
        </button>
      ) : null}
    </div>
  );
});

AlertBar.displayName = "AlertBar";
