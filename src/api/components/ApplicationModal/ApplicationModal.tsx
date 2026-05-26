/**
 * ApplicationModal — modal where a candidate completes a job
 * application (cover note + document attachment + consent).
 *
 * Composes Atlas Modal + slots for the posting summary, the cover
 * note Textarea (provided by the app — keeps Atlas free of form
 * state), document uploader, and consent disclosure.
 */

import type { ReactNode } from "react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "../Modal";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { DisclosureBar } from "../DisclosureBar";
import { cnHero } from "../../../shared/cn-hero";

export interface ApplicationModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  /** Posting title — "Apply to Senior Engineer @ Marble HQ". */
  postingTitle: ReactNode;
  /** Summary block (employer, location, pay range). */
  postingSummary?: ReactNode;
  /** Cover-note input — Textarea wired up by the app. */
  coverNoteSlot?: ReactNode;
  /** Document uploader slot. */
  documentSlot?: ReactNode;
  /** Consent disclosure message. */
  disclosure?: ReactNode;
  /** Custom footer (overrides default Submit/Cancel). */
  actions?: ReactNode;
  /** Default submit handler. */
  onSubmit?: () => void;
  isSubmitting?: boolean;
  className?: string;
  testId?: string;
}

export function ApplicationModal({
  isOpen,
  onOpenChange,
  postingTitle,
  postingSummary,
  coverNoteSlot,
  documentSlot,
  disclosure,
  actions,
  onSubmit,
  isSubmitting,
  className,
  testId,
}: ApplicationModalProps) {
    return (
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg" data-testid={testId}>
        <ModalContent className={cnHero(className)}>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Apply
                </p>
                <p className="text-lg font-semibold">{postingTitle}</p>
              </ModalHeader>
              <ModalBody className="space-y-4">
                {postingSummary ? (
                  <div className="rounded-lg border border-border bg-card p-3 text-sm">
                    {postingSummary}
                  </div>
                ) : null}
                {coverNoteSlot ? (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Cover note</p>
                    {coverNoteSlot}
                  </div>
                ) : null}
                {documentSlot ? (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Documents</p>
                    {documentSlot}
                  </div>
                ) : null}
                {disclosure ? (
                  <>
                    <Divider />
                    {typeof disclosure === "string" ? (
                      <DisclosureBar message={disclosure} />
                    ) : (
                      disclosure
                    )}
                  </>
                ) : null}
              </ModalBody>
              <ModalFooter>
                {actions ?? (
                  <>
                    <Button variant="light" onClick={onClose} isDisabled={isSubmitting}>
                      Cancel
                    </Button>
                    <Button color="primary" onClick={onSubmit} isLoading={isSubmitting}>
                      Submit application
                    </Button>
                  </>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    );
}
