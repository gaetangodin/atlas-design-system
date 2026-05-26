/**
 * ShareOpportunityDialog — modal for sharing an opportunity / posting /
 * candidate preview with a teammate or external contact.
 *
 * Slot-based: the consumer supplies the recipient picker, note input, and
 * any visibility toggles via slots. Atlas owns the shell + footer actions.
 */

import { type ReactNode } from "react";
import { Share2 } from "lucide-react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "../Modal";
import { cnHero } from "../../../shared/cn-hero";

export interface ShareOpportunityDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title?: ReactNode;
  /** Sub-line — opportunity name, role, etc. */
  subtitle?: ReactNode;
  /** Recipient picker slot (chips / autocomplete). */
  recipientsSlot: ReactNode;
  /** Free-form note slot. */
  noteSlot?: ReactNode;
  /** Optional visibility / permission slot (radio group, checkboxes). */
  visibilitySlot?: ReactNode;
  /** Whether the share button is enabled. */
  canShare?: boolean;
  shareLabel?: ReactNode;
  onShare?: () => void;
  cancelLabel?: ReactNode;
  className?: string;
}
export function ShareOpportunityDialog({
  isOpen, onOpenChange, title = "Share opportunity", subtitle,
  recipientsSlot, noteSlot, visibilitySlot,
  canShare = true, shareLabel = "Share", onShare, cancelLabel = "Cancel", className,
}: ShareOpportunityDialogProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" size="md">
      <ModalContent className={className}>
        <ModalHeader className="flex flex-col gap-1">
          <p className="inline-flex items-center gap-1.5 text-sm font-semibold">
            <Share2 className="size-4 text-muted-foreground" aria-hidden /> {title}
          </p>
          {subtitle ? <p className="text-xs text-muted-foreground">{subtitle}</p> : null}
        </ModalHeader>
        <ModalBody className="grid gap-3">
          {recipientsSlot}
          {noteSlot}
          {visibilitySlot}
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
            onClick={onShare}
            disabled={!canShare}
            className={cnHero(
              "rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition",
              !canShare && "opacity-50",
            )}
          >
            {shareLabel}
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
