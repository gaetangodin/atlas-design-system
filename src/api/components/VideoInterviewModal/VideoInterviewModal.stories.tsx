import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { VideoInterviewModal } from "./VideoInterviewModal";
import { Button } from "../Button";

const meta: Meta<typeof VideoInterviewModal> = {
  title: "Modals/VideoInterviewModal",
  component: VideoInterviewModal,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof VideoInterviewModal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [muted, setMuted] = useState(false);
    const [video, setVideo] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Join interview</Button>
        <VideoInterviewModal
          isOpen={open}
          onOpenChange={setOpen}
          title="Avery Lin · Round 2"
          participantSlot={<div className="grid h-full w-full place-items-center bg-earth-800 text-white/60">Live feed</div>}
          selfViewSlot={<div className="grid h-full w-full place-items-center text-xs text-white/60">You</div>}
          isMuted={muted}
          isVideoOn={video}
          onToggleMute={() => setMuted((m) => !m)}
          onToggleVideo={() => setVideo((v) => !v)}
          onLeave={() => setOpen(false)}
        />
      </>
    );
  },
};
