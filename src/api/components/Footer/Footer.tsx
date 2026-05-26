/**
 * Footer — site footer. Brand block + columns of links + bottom bar
 * (copyright + secondary links). Composable: pass children to override
 * default sections, or use the props for the standard layout.
 */
import { forwardRef, type ReactNode, type Ref } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface FooterColumn {
  id: string;
  title: ReactNode;
  links: Array<{ label: ReactNode; href: string }>;
}

export interface FooterProps {
  brand?: ReactNode;
  tagline?: ReactNode;
  columns?: FooterColumn[];
  bottomLeft?: ReactNode;
  bottomRight?: ReactNode;
  className?: string;
}

export const Footer = forwardRef<HTMLElement, FooterProps>(function Footer(
  { brand, tagline, columns = [], bottomLeft, bottomRight, className },
  ref,
) {
  return (
    <footer
      ref={ref as Ref<HTMLElement>}
      className={cnHero("border-t border-border bg-background text-sm text-muted-foreground", className)}
    >
      <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          {brand ? <div className="text-foreground font-medium">{brand}</div> : null}
          {tagline ? <p className="mt-2 max-w-xs">{tagline}</p> : null}
        </div>
        {columns.map((col) => (
          <div key={col.id}>
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-3">
              {col.title}
            </div>
            <ul role="list" className="flex flex-col gap-2">
              {col.links.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    className="text-foreground hover:text-foreground/70 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] rounded-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {(bottomLeft || bottomRight) && (
        <div className="border-t border-border py-4 flex items-center justify-between gap-4 flex-wrap text-xs">
          <div>{bottomLeft}</div>
          <div>{bottomRight}</div>
        </div>
      )}
    </footer>
  );
});
Footer.displayName = "Footer";
