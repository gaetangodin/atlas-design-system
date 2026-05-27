/**
 * App-level page layout shells — slot-based ports of the structural
 * page layouts from `Xeekrsmainapp/app/**` (Next.js route folders).
 *
 *  - `RootAppLayout`              — root `<html>` + body wrapper.
 *  - `MessagesIndexLanding`       — chat landing header + touchpoints body.
 *  - `WorkspaceSegmentLayout`     — generic recruitment/announcements
 *                                   workspace sub-layout (full-bleed pass
 *                                   when on editor sub-routes).
 *  - `RecruitmentSegmentLayout`   — workspace sub-layout + walkthrough slot.
 *  - `AnnouncementsSegmentLayout` — workspace sub-layout for announcements.
 *
 * These are pure layout components. They don't touch Next.js routing
 * APIs (no `usePathname` etc.) — the consumer passes the boolean
 * `isEditorRoute` flag derived from their app's router.
 */

import { type ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── RootAppLayout ──────────────────────────── */

export interface RootAppLayoutProps {
  /** App-shell content rendered inside <body>. */
  children: ReactNode;
  /** Optional language attribute on the html element. Default "en". */
  lang?: string;
  /** Optional class on the body. */
  bodyClassName?: string;
}
/**
 * Root layout wrapper. Renders `<html><body>{children}</body></html>`.
 * Mirrors `app/layout.tsx` in Xeekrs but stripped of Next-specific
 * metadata/dynamic-rendering options (the consumer handles those).
 */
export function RootAppLayout({ children, lang = "en", bodyClassName }: RootAppLayoutProps) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={bodyClassName}>{children}</body>
    </html>
  );
}

/* ────────────────────── MessagesIndexLanding ───────────────────── */

export interface MessagesIndexLandingProps {
  /** Page title text. Default "Chat". */
  title?: ReactNode;
  /** Sub-line under the title. */
  subtitle?: ReactNode;
  /** Right-aligned actions in the header. */
  headerActions?: ReactNode;
  /** Touchpoint cards / body content. */
  children: ReactNode;
  /** Override the header icon (default MessageCircle). */
  headerIcon?: ReactNode;
  className?: string;
}
/**
 * Slot-based port of `app/messages/page.tsx`'s `MessagesIndexPage`.
 * The chat landing: an icon-led header + actions, then a content slot
 * for `ClientTouchpointCards` (or any other body).
 */
export function MessagesIndexLanding({
  title = "Chat", subtitle = "Pick where you want to go.",
  headerActions, children, headerIcon, className,
}: MessagesIndexLandingProps) {
  return (
    <div className={cnHero("relative flex h-full min-h-0 flex-1 flex-col bg-background", className)}>
      <div className="flex min-h-0 w-full max-w-full flex-1 flex-col px-4 pt-8 pb-0 sm:px-6 lg:px-8">
        <header className="mb-6 flex items-start gap-4 sm:gap-5">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm ring-1 ring-primary/15 sm:h-14 sm:w-14"
            aria-hidden
          >
            {headerIcon ?? <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />}
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h1>
            {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
          </div>
          {headerActions ? <div className="ml-auto flex shrink-0 items-center gap-2">{headerActions}</div> : null}
        </header>
        {children}
      </div>
    </div>
  );
}

/* ────────────────────── WorkspaceSegmentLayout ─────────────────── */

export interface WorkspaceSegmentLayoutProps {
  /** Pass-through full-bleed when the route is an editor sub-route. */
  isEditorRoute?: boolean;
  /** Optional class added to the workspace shell wrapper. */
  shellClassName?: string;
  /** Children rendered inside the shell (or full-bleed). */
  children: ReactNode;
  /** Optional decoration overlay (e.g. RecruitmentWalkthrough). */
  overlay?: ReactNode;
}
/**
 * Generic workspace sub-layout. Mirrors the recruitment and
 * announcements sub-layouts in Xeekrs's app/ folder: a constrained
 * `min-h-[min(100dvh,1200px)]` flex column wrapper, with a full-bleed
 * pass-through when `isEditorRoute` is true. Pair with the
 * specialized aliases below for clarity at call sites.
 */
export function WorkspaceSegmentLayout({
  isEditorRoute, shellClassName, children, overlay,
}: WorkspaceSegmentLayoutProps) {
  if (isEditorRoute) return <>{children}</>;
  return (
    <div className={cnHero("flex min-h-[min(100dvh,1200px)] min-w-0 flex-1 flex-col", shellClassName)}>
      {children}
      {overlay}
    </div>
  );
}

/** Alias — recruitment workspace shell class included. */
export function RecruitmentSegmentLayout(props: WorkspaceSegmentLayoutProps) {
  return (
    <WorkspaceSegmentLayout
      {...props}
      shellClassName={cnHero("recruitment-workspace-shell", props.shellClassName)}
    />
  );
}

/** Alias — announcements workspace shell class included. */
export function AnnouncementsSegmentLayout(props: WorkspaceSegmentLayoutProps) {
  return (
    <WorkspaceSegmentLayout
      {...props}
      shellClassName={cnHero("announcements-workspace-shell", props.shellClassName)}
    />
  );
}

/** Alias kept for migration: same as `RecruitmentSegmentLayout`. */
export const JobPostingsSegmentLayout = RecruitmentSegmentLayout;
