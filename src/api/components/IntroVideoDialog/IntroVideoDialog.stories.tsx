import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { IntroVideoDialog } from "./IntroVideoDialog";
import { Button } from "../Button";

const meta: Meta<typeof IntroVideoDialog> = {
  title: "Modals/IntroVideoDialog",
  component: IntroVideoDialog,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof IntroVideoDialog>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Play intro video</Button>
        <IntroVideoDialog
          isOpen={open}
          onOpenChange={setOpen}
          subjectName="Avery Lin"
          subjectSubtitle="Senior Frontend Engineer · Lisbon"
          caption="2-minute self-intro. No audio in this preview."
        />
      </>
    );
  },
};
