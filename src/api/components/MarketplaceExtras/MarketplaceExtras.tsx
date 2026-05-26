/**
 * Marketplace-domain compositions.
 *
 *  - `MarketplaceCatalogueJobTextCard` — text-only marketplace card for a
 *                                        job listing in a catalogue / browse view.
 */

import { type ReactNode } from "react";
import { Briefcase, MapPin } from "lucide-react";
import { Card, CardBody, CardFooter } from "../Card";
import { cnHero } from "../../../shared/cn-hero";

export interface MarketplaceCatalogueJobTextCardProps {
  title: ReactNode;
  employerName?: ReactNode;
  location?: ReactNode;
  /** Short blurb / summary. */
  summary?: ReactNode;
  /** Optional pill chips (skills, type, level). */
  tags?: ReactNode[];
  /** Sub-line metric (e.g. salary range, posted date). */
  metric?: ReactNode;
  /** Trailing CTA — typically "Apply" or "Save". */
  cta?: ReactNode;
  onClick?: () => void;
  className?: string;
}
export function MarketplaceCatalogueJobTextCard({
  title, employerName, location, summary, tags = [], metric, cta, onClick, className,
}: MarketplaceCatalogueJobTextCardProps) {
  return (
    <Card
      shadow="sm"
      isPressable={!!onClick}
      onClick={onClick}
      className={cnHero("text-left", className)}
    >
      <CardBody className="gap-1.5">
        <div className="flex items-start gap-2">
          <Briefcase className="mt-0.5 size-3.5 text-muted-foreground" aria-hidden />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{title}</p>
            <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              {employerName ? <span className="truncate">{employerName}</span> : null}
              {employerName && location ? <span aria-hidden>·</span> : null}
              {location ? (
                <span className="inline-flex items-center gap-1 truncate">
                  <MapPin className="size-3" aria-hidden /> {location}
                </span>
              ) : null}
            </p>
          </div>
        </div>
        {summary ? <p className="line-clamp-3 text-xs text-muted-foreground">{summary}</p> : null}
        {tags.length > 0 ? (
          <ul className="flex flex-wrap gap-1.5 pt-1">
            {tags.map((t, i) => (
              <li key={i} className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </CardBody>
      {(metric || cta) ? (
        <CardFooter className="justify-between">
          {metric ? <span className="text-xs text-muted-foreground">{metric}</span> : <span />}
          {cta}
        </CardFooter>
      ) : null}
    </Card>
  );
}
