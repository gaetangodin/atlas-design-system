/**
 * Interviews-domain compositions.
 *
 *  - `BookingModal`           — modal for scheduling an interview slot.
 *  - `WorkInterviewsViewShell`— page-level shell composing list + detail + side rail.
 */

import { type ReactNode } from "react";
import { CalendarClock } from "lucide-react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "../Modal";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── BookingModal ────────────────────────────── */

export interface BookingModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  /** Headline (e.g. "Book interview with Avery Lin"). */
  title?: ReactNode;
  /** Sub-line — opening, role, etc. */
  subtitle?: ReactNode;
  /** Slot picker — consumer provides their own date+time pickers / radio group. */
  pickerSlot: ReactNode;
  /** Optional context note. */
  noteSlot?: ReactNode;
  /** Whether the confirm button is enabled. Defaults to true. */
  canConfirm?: boolean;
  confirmLabel?: ReactNode;
  onConfirm?: () => void;
  cancelLabel?: ReactNode;
  className?: string;
}
export function BookingModal({
  isOpen, onOpenChange, title = "Book interview", subtitle,
  pickerSlot, noteSlot, canConfirm = true, confirmLabel = "Confirm slot", onConfirm,
  cancelLabel = "Cancel", className,
}: BookingModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" size="md">
      <ModalContent className={className}>
        <ModalHeader className="flex flex-col gap-1">
          <p className="inline-flex items-center gap-1.5 text-sm font-semibold">
            <CalendarClock className="size-4 text-muted-foreground" aria-hidden /> {title}
          </p>
          {subtitle ? <p className="text-xs text-muted-foreground">{subtitle}</p> : null}
        </ModalHeader>
        <ModalBody className="grid gap-3">
          {pickerSlot}
          {noteSlot}
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={!canConfirm}
            className={cnHero(
              "rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition",
              !canConfirm && "opacity-50",
            )}
          >
            {confirmLabel}
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

/* ────────────────────── WorkInterviewsViewShell ─────────────────── */

export interface WorkInterviewsViewShellProps {
  /** Optional header / page-title strip. */
  header?: ReactNode;
  /** Left list rail — typically interview list filtered by date. */
  listRail: ReactNode;
  /** Center body — detail of selected interview (or empty state). */
  detail: ReactNode;
  /** Optional right rail — candidate info, notes. */
  rightRail?: ReactNode;
  className?: string;
}
export function WorkInterviewsViewShell({ header, listRail, detail, rightRail, className }: WorkInterviewsViewShellProps) {
  return (
    <div className={cnHero("flex w-full flex-col gap-3", className)}>
      {header}
      <div
        className={cnHero(
          "grid h-full min-h-[480px] overflow-hidden rounded-2xl border border-border bg-background",
          rightRail ? "grid-cols-[280px_1fr_320px]" : "grid-cols-[280px_1fr]",
        )}
      >
        <aside className="border-r border-border bg-card">{listRail}</aside>
        <main className="flex min-h-0 flex-col">{detail}</main>
        {rightRail ? <aside className="border-l border-border bg-card">{rightRail}</aside> : null}
      </div>
    </div>
  );
}
