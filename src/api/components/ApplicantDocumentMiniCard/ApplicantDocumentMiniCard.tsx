/**
 * ApplicantDocumentMiniCard — compact tile for a candidate document
 * (resume, cover letter, portfolio).
 *
 * Renders inside applicant cards / document drawers. Shows file type
 * icon, name, size / pages metadata, and a primary action affordance
 * (preview / download).
 */

import { forwardRef, type ReactNode } from "react";
import { FileText, Download, Eye } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

export type DocumentKind = "resume" | "cover-letter" | "portfolio" | "other";

export interface ApplicantDocumentMiniCardProps {
  title: string;
  meta?: string;
  kind?: DocumentKind;
  /** Override the file icon with custom content. */
  icon?: ReactNode;
  /** Primary action (preview / open). */
  onOpen?: () => void;
  /** Secondary action (download). Shown as an icon button. */
  onDownload?: () => void;
  /** Visual state — pending uploads, errored documents. */
  state?: "ready" | "pending" | "error";
  className?: string;
  testId?: string;
  id?: string;
}

const KIND_LABEL: Record<DocumentKind, string> = {
  resume: "Resume",
  "cover-letter": "Cover letter",
  portfolio: "Portfolio",
  other: "Document",
};

const STATE_CLASS = {
  ready: "border-border bg-card",
  pending: "border-warning/40 bg-warning/5",
  error: "border-destructive/40 bg-destructive/5",
} as const;

export const ApplicantDocumentMiniCard = forwardRef<HTMLDivElement, ApplicantDocumentMiniCardProps>(
  function ApplicantDocumentMiniCard(
    {
      title,
      meta,
      kind = "other",
      icon,
      onOpen,
      onDownload,
      state = "ready",
      className,
      testId,
      id,
    },
    ref,
  ) {
    return (
      <div
        ref={ref}
        id={id}
        data-testid={testId}
        className={cnHero(
          "group flex items-center gap-3 rounded-lg border p-2.5 transition-shadow hover:shadow-sm",
          STATE_CLASS[state],
          className,
        )}
      >
        <span
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-foreground"
          aria-hidden
        >
          {icon ?? <FileText className="size-4" />}
        </span>
        <button
          type="button"
          onClick={onOpen}
          className="flex min-w-0 flex-1 flex-col items-start text-left transition-colors hover:text-foreground"
        >
          <p className="truncate text-sm font-medium text-foreground">{title}</p>
          <p className="truncate text-xs text-muted-foreground">
            {KIND_LABEL[kind]}
            {meta ? ` · ${meta}` : ""}
          </p>
        </button>
        <div className="flex shrink-0 items-center gap-1">
          {onOpen ? (
            <button
              type="button"
              onClick={onOpen}
              aria-label="Preview document"
              className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Eye className="size-4" />
            </button>
          ) : null}
          {onDownload ? (
            <button
              type="button"
              onClick={onDownload}
              aria-label="Download document"
              className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Download className="size-4" />
            </button>
          ) : null}
        </div>
      </div>
    );
  },
);

ApplicantDocumentMiniCard.displayName = "ApplicantDocumentMiniCard";
