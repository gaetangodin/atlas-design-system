import type { Meta, StoryObj } from "@storybook/react";
import { Bookmark } from "lucide-react";
import { ProfileCardToolbar } from "./ProfileCardToolbar";
import { Button } from "../Button";
import { ReadinessBadge } from "../ReadinessBadge";

const meta: Meta<typeof ProfileCardToolbar> = {
  title: "Recruitment/ProfileCardToolbar",
  component: ProfileCardToolbar,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ProfileCardToolbar>;

export const Default: Story = {
  args: {
    leading: <ReadinessBadge stage="Interview-Ready" />,
    trailing: (
      <>
        <Button size="sm" variant="flat" isIconOnly aria-label="Bookmark">
          <Bookmark className="size-4" />
        </Button>
        <Button size="sm" color="primary">Open profile</Button>
      </>
    ),
  },
};
