/**
 * Job-posting-flow extras (smaller surfaces not in v0.4 RecruitmentExtras).
 *
 *  - `DisclosurePlainMessageBar` — inline plain-text disclosure bar.
 *  - `JobPostingAiAssist`        — AI-assist panel with prompt + suggestions.
 *  - `JobPostingWizardSidebar`   — left-rail nav for the posting wizard.
 */

import { type ReactNode } from "react";
import { Info, Sparkles, Check, ChevronRight } from "lucide-react";
import { Card, CardHeader, CardBody, CardFooter } from "../Card";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── DisclosurePlainMessageBar ───────────────── */

export interface DisclosurePlainMessageBarProps {
  message: ReactNode;
  /** Optional eyebrow label. */
  eyebrow?: ReactNode;
  /** Trailing link / action. */
  trailing?: ReactNode;
  className?: string;
}
export function DisclosurePlainMessageBar({ message, eyebrow, trailing, className }: DisclosurePlainMessageBarProps) {
  return (
    <div
      role="note"
      className={cnHero(
        "flex items-start gap-2 rounded-xl bg-muted/40 px-3 py-2 text-xs text-muted-foreground",
        className,
      )}
    >
      <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden />
      <div className="min-w-0 flex-1">
        {eyebrow ? <p className="font-semibold uppercase tracking-wide text-foreground/80">{eyebrow}</p> : null}
        <p>{message}</p>
      </div>
      {trailing ? <div className="shrink-0">{trailing}</div> : null}
    </div>
  );
}

/* ────────────────────── JobPostingAiAssist ──────────────────────── */

export interface JobPostingAiAssistSuggestion {
  id: string;
  /** Short label for the suggestion. */
  label: ReactNode;
  /** Optional preview of the proposed replacement text. */
  preview?: ReactNode;
  onApply?: () => void;
  onDismiss?: () => void;
}
export interface JobPostingAiAssistProps {
  title?: ReactNode;
  description?: ReactNode;
  /** Prompt input slot — consumer supplies their `Textarea` / `Input`. */
  promptSlot?: ReactNode;
  /** AI-generated suggestion list. */
  suggestions?: JobPostingAiAssistSuggestion[];
  /** Footer slot (e.g. "Regenerate" button). */
  footer?: ReactNode;
  className?: string;
}
export function JobPostingAiAssist({
  title = "AI assist", description, promptSlot, suggestions = [], footer, className,
}: JobPostingAiAssistProps) {
  return (
    <Card shadow="sm" className={cnHero("bg-lavender-50", className)}>
      <CardHeader className="flex items-center gap-1.5">
        <Sparkles className="size-4 text-lavender-700" aria-hidden />
        <p className="text-sm font-semibold text-foreground">{title}</p>
      </CardHeader>
      <CardBody className="gap-3">
        {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
        {promptSlot}
        {suggestions.length > 0 ? (
          <ul className="grid gap-2">
            {suggestions.map((s) => (
              <li key={s.id} className="rounded-xl border border-border bg-card p-2.5">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs font-semibold text-foreground">{s.label}</p>
                  <div className="flex shrink-0 items-center gap-1.5">
                    {s.onDismiss ? (
                      <button type="button" onClick={s.onDismiss} className="text-[10px] font-medium text-muted-foreground hover:text-foreground">
                        Dismiss
                      </button>
                    ) : null}
                    <button
                      type="button"
                      onClick={s.onApply}
                      className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground hover:bg-primary/90"
                    >
                      Apply
                    </button>
                  </div>
                </div>
                {s.preview ? <p className="mt-1 text-xs text-muted-foreground">{s.preview}</p> : null}
              </li>
            ))}
          </ul>
        ) : null}
      </CardBody>
      {footer ? <CardFooter>{footer}</CardFooter> : null}
    </Card>
  );
}

/* ────────────────────── JobPostingWizardSidebar ─────────────────── */

export type WizardSidebarStatus = "pending" | "active" | "completed";

export interface JobPostingWizardSidebarStep {
  id: string;
  label: ReactNode;
  description?: ReactNode;
  status: WizardSidebarStatus;
  onClick?: () => void;
}
export interface JobPostingWizardSidebarProps {
  steps: JobPostingWizardSidebarStep[];
  /** Optional header (e.g. progress count). */
  header?: ReactNode;
  /** Optional footer (e.g. "Save draft" button). */
  footer?: ReactNode;
  className?: string;
}
export function JobPostingWizardSidebar({ steps, header, footer, className }: JobPostingWizardSidebarProps) {
  return (
    <nav className={cnHero("flex h-full w-64 flex-col gap-2 border-r border-border bg-card p-3", className)}>
      {header ? <div className="pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{header}</div> : null}
      <ol className="flex flex-col gap-1">
        {steps.map((s, idx) => (
          <li key={s.id}>
            <button
              type="button"
              onClick={s.onClick}
              className={cnHero(
                "flex w-full items-start gap-2 rounded-lg px-2.5 py-2 text-left transition",
                s.status === "active" && "bg-spotlight/30",
                s.status === "completed" && "text-muted-foreground",
                s.status !== "active" && "hover:bg-muted/40",
              )}
            >
              <span
                className={cnHero(
                  "grid size-5 shrink-0 place-items-center rounded-full border text-[10px] font-semibold",
                  s.status === "completed" && "border-emerald-700 bg-emerald-700 text-white",
                  s.status === "active" && "border-primary bg-primary text-primary-foreground",
                  s.status === "pending" && "border-border bg-card text-muted-foreground",
                )}
              >
                {s.status === "completed" ? <Check className="size-3" /> : idx + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium text-foreground">{s.label}</span>
                {s.description ? <span className="block truncate text-xs text-muted-foreground">{s.description}</span> : null}
              </span>
              {s.status === "active" ? <ChevronRight className="size-4 shrink-0 text-muted-foreground" aria-hidden /> : null}
            </button>
          </li>
        ))}
      </ol>
      {footer ? <div className="mt-auto pt-2">{footer}</div> : null}
    </nav>
  );
}
