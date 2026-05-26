/**
 * VideoInterviewModal — full-screen interview frame for recruiter +
 * candidate live conversations.
 *
 * Atlas ships the layout chrome only — apps wire in their real
 * call/MediaStream provider (Twilio, LiveKit, Whereby) into the
 * `participantSlot`.
 */

import type { ReactNode } from "react";
import { Mic, MicOff, PhoneOff, Video, VideoOff } from "lucide-react";
import { Modal, ModalContent } from "../Modal";
import { Button } from "../Button";
import { cnHero } from "../../../shared/cn-hero";

export interface VideoInterviewModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  /** Title shown in the corner. */
  title?: ReactNode;
  /** The active speaker / shared stream. */
  participantSlot: ReactNode;
  /** Self-view preview (small rectangle, bottom-right). */
  selfViewSlot?: ReactNode;
  isMuted?: boolean;
  isVideoOn?: boolean;
  onToggleMute?: () => void;
  onToggleVideo?: () => void;
  onLeave?: () => void;
  /** Additional control slot (chat toggle, share screen). */
  extraControls?: ReactNode;
  className?: string;
  testId?: string;
}

export function VideoInterviewModal({
  isOpen,
  onOpenChange,
  title,
  participantSlot,
  selfViewSlot,
  isMuted = false,
  isVideoOn = true,
  onToggleMute,
  onToggleVideo,
  onLeave,
  extraControls,
  className,
  testId,
}: VideoInterviewModalProps) {
    return (
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full" data-testid={testId}>
        <ModalContent className={cnHero("bg-earth-900 text-white", className)}>
          {() => (
            <div className="relative flex h-screen w-full flex-col">
              <div className="relative flex-1 overflow-hidden">
                {participantSlot}
                {selfViewSlot ? (
                  <div className="absolute bottom-24 right-4 h-32 w-44 overflow-hidden rounded-lg border border-white/20 bg-earth-900 shadow-lg">
                    {selfViewSlot}
                  </div>
                ) : null}
                {title ? (
                  <div className="absolute left-4 top-4 rounded-full bg-earth-900/60 px-3 py-1 text-xs font-semibold backdrop-blur">
                    {title}
                  </div>
                ) : null}
              </div>
              <div
                className="flex items-center justify-center gap-3 border-t border-white/10 bg-earth-900/80 p-4 backdrop-blur"
                style={{ paddingBottom: "max(env(safe-area-inset-bottom, 0px), 1rem)" }}
              >
                <Button
                  isIconOnly
                  variant={isMuted ? "solid" : "bordered"}
                  color={isMuted ? "danger" : "default"}
                  onClick={onToggleMute}
                  aria-label={isMuted ? "Unmute microphone" : "Mute microphone"}
                  className="border-white/30 text-white"
                >
                  {isMuted ? <MicOff className="size-4" /> : <Mic className="size-4" />}
                </Button>
                <Button
                  isIconOnly
                  variant={isVideoOn ? "bordered" : "solid"}
                  color={isVideoOn ? "default" : "danger"}
                  onClick={onToggleVideo}
                  aria-label={isVideoOn ? "Turn camera off" : "Turn camera on"}
                  className="border-white/30 text-white"
                >
                  {isVideoOn ? <Video className="size-4" /> : <VideoOff className="size-4" />}
                </Button>
                {extraControls}
                <Button
                  color="danger"
                  startContent={<PhoneOff className="size-4" />}
                  onClick={onLeave}
                >
                  Leave
                </Button>
              </div>
            </div>
          )}
        </ModalContent>
      </Modal>
    );
}
