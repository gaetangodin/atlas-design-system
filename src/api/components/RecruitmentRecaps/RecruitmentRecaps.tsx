/**
 * Recruitment recap cards — specialized compositions that wrap Atlas
 * Card with the right slots for interview outcomes, applicant
 * reviews, and shared candidate previews.
 *
 * Apps still pass the concrete data; Atlas owns the chrome.
 */

import { forwardRef, type ReactNode } from "react";
import { CalendarCheck, Mail, Share2 } from "lucide-react";
import { Card, CardBody, CardFooter, CardHeader } from "../Card";
import { Divider } from "../Divider";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── InterviewEventRecap ─────────────────────── */

export interface InterviewEventRecapProps {
  /** Candidate / participant name. */
  participantName: string;
  /** When the interview took place — e.g. "Mar 14, 2026 · 10:30 AM". */
  whenLabel: string;
  /** Optional outcome label ("Move to offer", "Not a fit"). */
  outcome?: ReactNode;
  /** Long-form recap notes. */
  notes?: ReactNode;
  /** Trailing actions (Share, Re-open). */
  actions?: ReactNode;
  className?: string;
  testId?: string;
  id?: string;
}

export const InterviewEventRecap = forwardRef<HTMLDivElement, InterviewEventRecapProps>(
  function InterviewEventRecap(
    { participantName, whenLabel, outcome, notes, actions, className, testId, id },
    ref,
  ) {
    return (
      <Card ref={ref} id={id} testId={testId} className={cnHero("max-w-3xl", className)}>
        <CardHeader className="flex flex-col gap-0.5">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <CalendarCheck className="size-3.5 shrink-0" aria-hidden />
            Interview recap
          </span>
          <p className="text-base font-semibold">{participantName}</p>
          <p className="text-sm text-muted-foreground">{whenLabel}</p>
        </CardHeader>
        <Divider />
        <CardBody className="space-y-3">
          {outcome ? (
            <div className="inline-flex w-fit rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-700">
              {outcome}
            </div>
          ) : null}
          {notes ? <div className="text-sm text-foreground">{notes}</div> : null}
        </CardBody>
        {actions ? <CardFooter className="justify-end">{actions}</CardFooter> : null}
      </Card>
    );
  },
);
InterviewEventRecap.displayName = "InterviewEventRecap";

/* ────────────────────── ApplicantReviewRecap ────────────────────── */

export interface ApplicantReviewRecapProps {
  applicantName: string;
  reviewer: string;
  whenLabel: string;
  /** "Recommend", "Pass", "On hold". */
  verdict?: ReactNode;
  notes?: ReactNode;
  actions?: ReactNode;
  className?: string;
  testId?: string;
  id?: string;
}

export const ApplicantReviewRecap = forwardRef<HTMLDivElement, ApplicantReviewRecapProps>(
  function ApplicantReviewRecap(
    { applicantName, reviewer, whenLabel, verdict, notes, actions, className, testId, id },
    ref,
  ) {
    return (
      <Card ref={ref} id={id} testId={testId} className={cnHero("max-w-3xl", className)}>
        <CardHeader className="flex flex-col gap-0.5">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <Mail className="size-3.5 shrink-0" aria-hidden />
            Applicant review
          </span>
          <p className="text-base font-semibold">{applicantName}</p>
          <p className="text-sm text-muted-foreground">
            Reviewed by {reviewer} · {whenLabel}
          </p>
        </CardHeader>
        <Divider />
        <CardBody className="space-y-3">
          {verdict ? (
            <div className="inline-flex w-fit rounded-full bg-lavender-100 px-2.5 py-1 text-xs font-semibold text-lavender-800">
              {verdict}
            </div>
          ) : null}
          {notes ? <div className="text-sm text-foreground">{notes}</div> : null}
        </CardBody>
        {actions ? <CardFooter className="justify-end">{actions}</CardFooter> : null}
      </Card>
    );
  },
);
ApplicantReviewRecap.displayName = "ApplicantReviewRecap";

/* ────────────────────── ShareCandidatePreviewCard ───────────────── */

export interface ShareCandidatePreviewCardProps {
  candidateName: string;
  candidateRole?: string;
  /** Snippet of what the recipient will see. */
  preview?: ReactNode;
  /** Recipient name / email. */
  sharedWith?: ReactNode;
  /** Expiry hint ("Link expires in 7 days"). */
  expiryHint?: ReactNode;
  actions?: ReactNode;
  className?: string;
  testId?: string;
  id?: string;
}

export const ShareCandidatePreviewCard = forwardRef<HTMLDivElement, ShareCandidatePreviewCardProps>(
  function ShareCandidatePreviewCard(
    { candidateName, candidateRole, preview, sharedWith, expiryHint, actions, className, testId, id },
    ref,
  ) {
    return (
      <Card ref={ref} id={id} testId={testId} className={cnHero("max-w-2xl", className)}>
        <CardHeader className="flex flex-col gap-0.5">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <Share2 className="size-3.5 shrink-0" aria-hidden />
            Share preview
          </span>
          <p className="text-base font-semibold">{candidateName}</p>
          {candidateRole ? (
            <p className="text-sm text-muted-foreground">{candidateRole}</p>
          ) : null}
        </CardHeader>
        <Divider />
        <CardBody className="space-y-3">
          {preview ? (
            <div className="rounded-lg border border-dashed border-border bg-muted/30 p-3 text-sm">
              {preview}
            </div>
          ) : null}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
            {sharedWith ? <span>Shared with {sharedWith}</span> : null}
            {expiryHint ? <span>{expiryHint}</span> : null}
          </div>
        </CardBody>
        {actions ? <CardFooter className="justify-end">{actions}</CardFooter> : null}
      </Card>
    );
  },
);
ShareCandidatePreviewCard.displayName = "ShareCandidatePreviewCard";
