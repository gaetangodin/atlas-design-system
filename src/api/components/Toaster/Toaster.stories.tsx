import type { Meta, StoryObj } from "@storybook/react";
import { Toaster, toast } from "./Toaster";
import { Button } from "../Button";

const meta: Meta = { title: "Feedback/Toaster" };
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <>
      <Toaster />
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Button onClick={() => toast("Saved")}>Default</Button>
        <Button color="success" onClick={() => toast.success("Referral submitted")}>Success</Button>
        <Button color="warning" onClick={() => toast.warning("Profile incomplete")}>Warning</Button>
        <Button color="danger" onClick={() => toast.error("Couldn't save")}>Error</Button>
        <Button
          variant="bordered"
          onClick={() =>
            toast("Archived", { description: "Maya R. — moved to Archived", action: { label: "Undo", onClick: () => {} } })
          }
        >
          With action
        </Button>
      </div>
    </>
  ),
};
