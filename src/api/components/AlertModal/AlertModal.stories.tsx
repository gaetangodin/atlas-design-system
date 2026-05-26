import type { Meta, StoryObj } from "@storybook/react";
import { AlertModal } from "./AlertModal";
import { Button } from "../Button";
import { useDisclosure } from "../Modal";

function Demo({ tone }: { tone?: "default" | "danger" }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button variant={tone === "danger" ? "bordered" : "solid"} color={tone === "danger" ? "danger" : "primary"} onClick={onOpen}>
        {tone === "danger" ? "Delete account" : "Archive"}
      </Button>
      <AlertModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        tone={tone}
        title={tone === "danger" ? "Delete account?" : "Archive this referral?"}
        description={
          tone === "danger"
            ? "This permanently removes your profile and cannot be undone."
            : "You can restore it from Archived within 30 days."
        }
        confirmLabel={tone === "danger" ? "Delete" : "Archive"}
      />
    </>
  );
}

const meta: Meta<typeof AlertModal> = { title: "Overlays/AlertModal", component: AlertModal, tags: ["autodocs"] };
export default meta;

type Story = StoryObj<typeof AlertModal>;
export const Default: Story = { render: () => <Demo /> };
export const Danger: Story = { render: () => <Demo tone="danger" /> };
