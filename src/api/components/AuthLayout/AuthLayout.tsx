/**
 * AuthLayout — centered card layout for sign-in / sign-up / forgot
 * pages. Brand block on top, form card in the middle, secondary
 * action below. Optional split-screen variant with marketing imagery
 * on the right.
 */
import { forwardRef, type ReactNode, type Ref } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface AuthLayoutProps {
  brand?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  /** Below-card link, e.g. "Don't have an account? Sign up". */
  footer?: ReactNode;
  /** Optional right-hand panel (illustration, marketing copy). */
  side?: ReactNode;
  className?: string;
}

export const AuthLayout = forwardRef<HTMLDivElement, AuthLayoutProps>(function AuthLayout(
  { brand, title, description, children, footer, side, className },
  ref,
) {
  return (
    <div
      ref={ref as Ref<HTMLDivElement>}
      className={cnHero("min-h-screen bg-background text-foreground flex", className)}
    >
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          {brand ? <div className="mb-8 flex justify-center">{brand}</div> : null}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <div className="text-center mb-6">
              <h1 style={{ fontSize: 24, lineHeight: 1.2, fontWeight: 600 }} className="text-foreground">
                {title}
              </h1>
              {description ? (
                <p className="text-sm text-muted-foreground mt-2">{description}</p>
              ) : null}
            </div>
            {children}
          </div>
          {footer ? <div className="text-center text-sm text-muted-foreground mt-6">{footer}</div> : null}
        </div>
      </div>
      {side ? (
        <div className="hidden lg:flex flex-1 items-center justify-center bg-muted">
          {side}
        </div>
      ) : null}
    </div>
  );
});
AuthLayout.displayName = "AuthLayout";
