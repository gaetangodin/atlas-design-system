/**
 * SettingsLayout — left sub-nav + right content. Use with VerticalTabs
 * for the nav, or pass any list-of-links element.
 *
 * Pattern: page hero on top with title, nav and content below.
 */
import { forwardRef, type ReactNode, type Ref } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface SettingsLayoutProps {
  title?: ReactNode;
  description?: ReactNode;
  nav: ReactNode;
  children: ReactNode;
  className?: string;
}

export const SettingsLayout = forwardRef<HTMLDivElement, SettingsLayoutProps>(function SettingsLayout(
  { title, description, nav, children, className },
  ref,
) {
  return (
    <div ref={ref as Ref<HTMLDivElement>} className={cnHero("flex flex-col gap-8", className)}>
      {(title || description) && (
        <header>
          {title ? (
            <h1 style={{ fontSize: 28, lineHeight: 1.2, fontWeight: 600 }} className="text-foreground tracking-tight">
              {title}
            </h1>
          ) : null}
          {description ? (
            <p className="text-base text-muted-foreground mt-2 max-w-2xl">{description}</p>
          ) : null}
        </header>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] gap-8">
        <aside className="lg:sticky lg:top-20 self-start">{nav}</aside>
        <section className="min-w-0 max-w-3xl">{children}</section>
      </div>
    </div>
  );
});
SettingsLayout.displayName = "SettingsLayout";
