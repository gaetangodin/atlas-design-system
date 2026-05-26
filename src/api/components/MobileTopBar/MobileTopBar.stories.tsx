import type { Meta, StoryObj } from "@storybook/react";
import { Bell, Menu as MenuIcon } from "lucide-react";
import { MobileTopBar } from "./MobileTopBar";
import { Button } from "../Button";

const meta: Meta<typeof MobileTopBar> = {
  title: "Shell/MobileTopBar",
  component: MobileTopBar,
  tags: ["autodocs"],
  args: { sticky: false },
};
export default meta;
type Story = StoryObj<typeof MobileTopBar>;

export const Default: Story = {
  args: {
    leading: <Button isIconOnly variant="light" aria-label="Menu"><MenuIcon className="size-5" /></Button>,
    brand: <p className="text-base font-semibold">Recruitment</p>,
    trailing: <Button isIconOnly variant="light" aria-label="Alerts"><Bell className="size-5" /></Button>,
  },
};
