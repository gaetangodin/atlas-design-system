/**
 * Announcements-domain compositions.
 *
 *  - `AnnouncementAlertBar`       — inline announcement banner with eyebrow + CTA.
 *  - `InlineNotificationBanners`  — stack of dismissible inline notices.
 *  - `MobileAlertModals`          — bottom-sheet style alert prompts for phones.
 *  - `PromotionPostcardModal`     — full-bleed promotional modal (postcard-style).
 */

import { type ReactNode } from "react";
import { Megaphone, X } from "lucide-react";
import { Modal, ModalContent, ModalBody, ModalFooter } from "../Modal";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── AnnouncementAlertBar ────────────────────── */

export type AnnouncementAlertTone = "info" | "promo" | "success" | "warning";

const TONE_BAR: Record<AnnouncementAlertTone, string> = {
  info: "bg-spotlight/15 text-foreground",
  promo: "bg-lavender-100 text-foreground",
  success: "bg-emerald-50 text-emerald-900",
  warning: "bg-canary-100 text-foreground",
};

export interface AnnouncementAlertBarProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  body?: ReactNode;
  tone?: AnnouncementAlertTone;
  ctaLabel?: ReactNode;
  onCtaClick?: () => void;
  onDismiss?: () => void;
  className?: string;
}
export function AnnouncementAlertBar({
  eyebrow, title, body, tone = "info", ctaLabel, onCtaClick, onDismiss, className,
}: AnnouncementAlertBarProps) {
  return (
    <div className={cnHero("flex items-start gap-3 rounded-2xl border border-border px-4 py-3", TONE_BAR[tone], className)} role="status">
      <Megaphone className="mt-0.5 size-4 shrink-0" aria-hidden />
      <div className="min-w-0 flex-1">
        {eyebrow ? <p className="text-[10px] font-semibold uppercase tracking-wide opacity-70">{eyebrow}</p> : null}
        <p className="text-sm font-semibold">{title}</p>
        {body ? <p className="mt-0.5 text-xs opacity-80">{body}</p> : null}
      </div>
      <div className="flex shrink-0 items-center gap-1.5">
        {ctaLabel ? (
          <button type="button" onClick={onCtaClick} className="rounded-full bg-foreground/10 px-2.5 py-1 text-xs font-semibold hover:bg-foreground/15">
            {ctaLabel}
          </button>
        ) : null}
        {onDismiss ? (
          <button type="button" onClick={onDismiss} aria-label="Dismiss" className="rounded-full p-1 hover:bg-foreground/10">
            <X className="size-3.5" />
          </button>
        ) : null}
      </div>
    </div>
  );
}

/* ────────────────────── InlineNotificationBanners ───────────────── */

export interface InlineNotice {
  id: string;
  tone?: AnnouncementAlertTone;
  eyebrow?: ReactNode;
  title: ReactNode;
  body?: ReactNode;
  ctaLabel?: ReactNode;
  onCtaClick?: () => void;
  onDismiss?: () => void;
}
export interface InlineNotificationBannersProps {
  notices: InlineNotice[];
  emptyState?: ReactNode;
  className?: string;
}
export function InlineNotificationBanners({ notices, emptyState, className }: InlineNotificationBannersProps) {
  if (notices.length === 0 && emptyState) return <>{emptyState}</>;
  return (
    <div className={cnHero("flex flex-col gap-2", className)}>
      {notices.map((n) => (
        <AnnouncementAlertBar
          key={n.id}
          tone={n.tone}
          eyebrow={n.eyebrow}
          title={n.title}
          body={n.body}
          ctaLabel={n.ctaLabel}
          onCtaClick={n.onCtaClick}
          onDismiss={n.onDismiss}
        />
      ))}
    </div>
  );
}

/* ────────────────────── MobileAlertModals ───────────────────────── */

export interface MobileAlertModalsProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title?: ReactNode;
  body?: ReactNode;
  /** Primary CTA. */
  primaryLabel?: ReactNode;
  onPrimary?: () => void;
  /** Secondary action (often "Not now"). */
  secondaryLabel?: ReactNode;
  onSecondary?: () => void;
  className?: string;
}
export function MobileAlertModals({
  isOpen, onOpenChange, title, body, primaryLabel = "Got it", onPrimary, secondaryLabel, onSecondary, className,
}: MobileAlertModalsProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="bottom" size="sm">
      <ModalContent className={className}>
        <ModalBody className="pt-6">
          {title ? <p className="text-base font-semibold">{title}</p> : null}
          {body ? <p className="mt-1 text-sm text-muted-foreground">{body}</p> : null}
        </ModalBody>
        <ModalFooter className="flex-col gap-2">
          <button
            type="button"
            onClick={onPrimary}
            className="w-full rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {primaryLabel}
          </button>
          {secondaryLabel ? (
            <button
              type="button"
              onClick={onSecondary}
              className="w-full rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted"
            >
              {secondaryLabel}
            </button>
          ) : null}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

/* ────────────────────── PromotionPostcardModal ──────────────────── */

export interface PromotionPostcardModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  /** Background image URL for the full-bleed top section. */
  imageUrl?: string;
  eyebrow?: ReactNode;
  headline: ReactNode;
  body?: ReactNode;
  primaryLabel?: ReactNode;
  onPrimary?: () => void;
  secondaryLabel?: ReactNode;
  onSecondary?: () => void;
  className?: string;
}
export function PromotionPostcardModal({
  isOpen, onOpenChange, imageUrl, eyebrow, headline, body,
  primaryLabel = "Try it", onPrimary, secondaryLabel, onSecondary, className,
}: PromotionPostcardModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" size="md">
      <ModalContent className={cnHero("overflow-hidden", className)}>
        {imageUrl ? (
          <div
            className="h-44 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
            aria-hidden
          />
        ) : (
          <div className="h-32 w-full bg-gradient-to-br from-lavender-300 to-spotlight" aria-hidden />
        )}
        <ModalBody className="pt-4">
          {eyebrow ? <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{eyebrow}</p> : null}
          <p className="mt-1 text-base font-semibold">{headline}</p>
          {body ? <p className="mt-1 text-sm text-muted-foreground">{body}</p> : null}
        </ModalBody>
        <ModalFooter>
          {secondaryLabel ? (
            <button
              type="button"
              onClick={onSecondary}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted"
            >
              {secondaryLabel}
            </button>
          ) : null}
          <button
            type="button"
            onClick={onPrimary}
            className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {primaryLabel}
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
