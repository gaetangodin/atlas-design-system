/**
 * CX-feed domain compositions.
 *
 *  - `CampaignsPanel` — sidebar / panel listing active customer-experience campaigns,
 *                       each with status + quick-jump action.
 */

import { type ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { Card, CardHeader, CardBody } from "../Card";
import { cnHero } from "../../../shared/cn-hero";

export interface CampaignsPanelEntry {
  id: string;
  name: ReactNode;
  /** Status label (e.g. "Live", "Drafting", "Paused"). */
  status?: ReactNode;
  /** Optional KPI line (e.g. "12k reach"). */
  metric?: ReactNode;
  onClick?: () => void;
}
export interface CampaignsPanelProps {
  title?: ReactNode;
  description?: ReactNode;
  entries: CampaignsPanelEntry[];
  /** Trailing slot in the header (e.g. "+ New"). */
  trailing?: ReactNode;
  emptyState?: ReactNode;
  className?: string;
}
export function CampaignsPanel({
  title = "Campaigns", description, entries, trailing, emptyState, className,
}: CampaignsPanelProps) {
  if (entries.length === 0 && emptyState) return <>{emptyState}</>;
  return (
    <Card shadow="sm" className={className}>
      <CardHeader className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-1.5 text-sm font-semibold">
            <Sparkles className="size-3.5 text-muted-foreground" aria-hidden />
            {title}
          </p>
          {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
        </div>
        {trailing ? <div className="shrink-0">{trailing}</div> : null}
      </CardHeader>
      <CardBody className="grid gap-2">
        {entries.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={c.onClick}
            className={cnHero(
              "flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-3 py-2 text-left transition hover:bg-muted/40",
            )}
          >
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium text-foreground">{c.name}</span>
              {c.metric ? <span className="block truncate text-xs text-muted-foreground">{c.metric}</span> : null}
            </span>
            {c.status ? (
              <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                {c.status}
              </span>
            ) : null}
          </button>
        ))}
      </CardBody>
    </Card>
  );
}
