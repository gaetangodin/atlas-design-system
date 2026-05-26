/**
 * Testimonials — quote card grid. Each card: quote + person (avatar +
 * name + role). Optional logo for company.
 */
import { forwardRef, type ReactNode, type Ref } from "react";
import { Card, CardBody } from "../Card";
import { Avatar } from "../Avatar";
import { cnHero } from "../../../shared/cn-hero";

export interface Testimonial {
  id: string;
  quote: ReactNode;
  name: ReactNode;
  role?: ReactNode;
  avatarUrl?: string;
  initials?: string;
  logo?: ReactNode;
}

export interface TestimonialsProps {
  items: Testimonial[];
  columns?: 1 | 2 | 3;
  className?: string;
}

const colsClass = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
} as const;

export const Testimonials = forwardRef<HTMLDivElement, TestimonialsProps>(function Testimonials(
  { items, columns = 3, className },
  ref,
) {
  return (
    <div ref={ref as Ref<HTMLDivElement>} className={cnHero("grid gap-6", colsClass[columns], className)}>
      {items.map((t) => (
        <Card key={t.id}>
          <CardBody>
            {t.logo ? <div className="mb-3 [&_svg]:h-6 text-muted-foreground">{t.logo}</div> : null}
            <blockquote className="text-base text-foreground leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="mt-4 flex items-center gap-3">
              <Avatar src={t.avatarUrl} name={t.initials} size="sm" />
              <div>
                <div className="text-sm font-medium text-foreground">{t.name}</div>
                {t.role ? <div className="text-xs text-muted-foreground">{t.role}</div> : null}
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
});
Testimonials.displayName = "Testimonials";
