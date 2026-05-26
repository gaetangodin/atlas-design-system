/**
 * ErrorState — recoverable error / 404 placeholder. Like EmptyState
 * but with an error tone and dual actions (primary retry, secondary
 * back).
 */
import { forwardRef, type ReactNode, type Ref } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface ErrorStateProps {
  /** Visual code shown above the title — e.g. "404" or "500". */
  code?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export const ErrorState = forwardRef<HTMLDivElement, ErrorStateProps>(function ErrorState(
  { code, title, description, primaryAction, secondaryAction, icon, className },
  ref,
) {
  return (
    <div
      ref={ref as Ref<HTMLDivElement>}
      role="alert"
      className={cnHero(
        "rounded-2xl border border-border bg-background p-10 flex flex-col items-center text-center gap-3",
        className,
      )}
    >
      {icon ? (
        <div className="inline-flex items-center justify-center size-14 [&_svg]:size-7 rounded-full bg-destructive/10 text-destructive">
          {icon}
        </div>
      ) : null}
      {code ? (
        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{code}</div>
      ) : null}
      <div>
        <div className="text-base font-medium text-foreground">{title}</div>
        {description ? (
          <div className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">{description}</div>
        ) : null}
      </div>
      {(primaryAction || secondaryAction) && (
        <div className="mt-4 flex items-center gap-2 justify-center">
          {secondaryAction}
          {primaryAction}
        </div>
      )}
    </div>
  );
});
ErrorState.displayName = "ErrorState";
