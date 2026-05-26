/**
 * IntroVideoDialog — modal that plays a candidate's intro video.
 *
 * Wraps Atlas's `Modal` with a 16:9 video frame, caption row, and
 * action footer. Apps pass the `videoUrl` or a custom `videoSlot`
 * for richer players (HLS, captions, etc.).
 */

import type { ReactNode } from "react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "../Modal";
import { Button } from "../Button";
import { cnHero } from "../../../shared/cn-hero";

export interface IntroVideoDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  /** Candidate / employer name. */
  subjectName: string;
  /** Optional subtitle ("Senior Frontend Engineer · Lisbon"). */
  subjectSubtitle?: string;
  /** MP4 / WebM URL — used when `videoSlot` isn't provided. */
  videoUrl?: string;
  poster?: string;
  /** Custom player slot for HLS / captions / chapters. */
  videoSlot?: ReactNode;
  /** Caption / description shown beneath the video. */
  caption?: ReactNode;
  /** Footer actions — defaults to a "Close" button. */
  actions?: ReactNode;
  className?: string;
  testId?: string;
}

export function IntroVideoDialog({
  isOpen,
  onOpenChange,
  subjectName,
  subjectSubtitle,
  videoUrl,
  poster,
  videoSlot,
  caption,
  actions,
  className,
  testId,
}: IntroVideoDialogProps) {
    return (
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" data-testid={testId}>
        <ModalContent className={cnHero(className)}>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-0.5">
                <p className="text-base font-semibold">{subjectName}</p>
                {subjectSubtitle ? (
                  <p className="text-sm font-normal text-muted-foreground">{subjectSubtitle}</p>
                ) : null}
              </ModalHeader>
              <ModalBody>
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-earth-900">
                  {videoSlot ? (
                    videoSlot
                  ) : videoUrl ? (
                    <video
                      src={videoUrl}
                      poster={poster}
                      controls
                      preload="metadata"
                      className="h-full w-full"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-white/60">
                      No video provided
                    </div>
                  )}
                </div>
                {caption ? (
                  <p className="mt-3 text-sm text-muted-foreground">{caption}</p>
                ) : null}
              </ModalBody>
              <ModalFooter>
                {actions ?? (
                  <Button color="primary" onClick={onClose}>
                    Close
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    );
}
