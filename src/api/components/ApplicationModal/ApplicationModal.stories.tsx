import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ApplicationModal } from "./ApplicationModal";
import { Button } from "../Button";
import { Textarea } from "../Textarea";

const meta: Meta<typeof ApplicationModal> = {
  title: "Modals/ApplicationModal",
  component: ApplicationModal,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ApplicationModal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button color="primary" onClick={() => setOpen(true)}>Apply</Button>
        <ApplicationModal
          isOpen={open}
          onOpenChange={setOpen}
          postingTitle="Senior Engineer @ Marble HQ"
          postingSummary="Remote · Lisbon time · $120–160k"
          coverNoteSlot={<Textarea placeholder="Tell us why you're a fit…" minRows={4} />}
          disclosure="Your application is shared with Marble HQ recruiters. You can withdraw any time."
          onSubmit={() => setOpen(false)}
        />
      </>
    );
  },
};
