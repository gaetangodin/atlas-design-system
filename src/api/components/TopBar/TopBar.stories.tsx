import type { Meta, StoryObj } from "@storybook/react";
import { Bell, Search } from "lucide-react";
import { TopBar } from "./TopBar";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { BrandLogo } from "../BrandLogo";
import { Input } from "../Input";

const meta: Meta<typeof TopBar> = {
  title: "Shell/TopBar",
  component: TopBar,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
  args: {
    brand: <BrandLogo height={28} />,
    center: <Input placeholder="Search…" startContent={<Search className="size-4 text-muted-foreground" />} className="max-w-md" />,
    right: (
      <>
        <Button isIconOnly variant="flat" aria-label="Notifications">
          <Bell className="size-4" />
        </Button>
        <Avatar size="sm" name="GA" />
      </>
    ),
  },
};
