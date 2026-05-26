/**
 * BlogPostCard — article preview card. Cover image + meta + title +
 * excerpt. Used in academy / help-hub / news feeds.
 */
import { forwardRef, type ReactNode, type Ref } from "react";
import { Card, CardBody } from "../Card";
import { cnHero } from "../../../shared/cn-hero";

export interface BlogPostCardProps {
  title: ReactNode;
  excerpt?: ReactNode;
  coverUrl?: string;
  coverAlt?: string;
  meta?: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const BlogPostCard = forwardRef<HTMLDivElement, BlogPostCardProps>(function BlogPostCard(
  { title, excerpt, coverUrl, coverAlt = "", meta, href, onClick, className },
  ref,
) {
  const Tag = href ? "a" : "div";
  return (
    <Card ref={ref as Ref<HTMLDivElement>} isPressable={!!onClick} onClick={onClick} className={cnHero("overflow-hidden", className)}>
      {coverUrl ? (
        <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
          <img src={coverUrl} alt={coverAlt} className="h-full w-full object-cover" loading="lazy" />
        </div>
      ) : null}
      <CardBody>
        {meta ? <div className="text-xs text-muted-foreground mb-1">{meta}</div> : null}
        {href ? (
          <Tag
            href={href}
            className="text-base font-medium text-foreground outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] rounded-sm"
          >
            {title}
          </Tag>
        ) : (
          <div className="text-base font-medium text-foreground">{title}</div>
        )}
        {excerpt ? <p className="text-sm text-muted-foreground mt-1 line-clamp-3">{excerpt}</p> : null}
      </CardBody>
    </Card>
  );
});
BlogPostCard.displayName = "BlogPostCard";
