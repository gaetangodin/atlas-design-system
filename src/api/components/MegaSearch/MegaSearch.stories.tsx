import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "lucide-react";
import { MegaSearch } from "./MegaSearch";
import { Input } from "../Input";

const meta: Meta<typeof MegaSearch> = {
  title: "Shell/MegaSearch",
  component: MegaSearch,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof MegaSearch>;

export const Default: Story = {
  args: {
    searchInput: <Input placeholder="Search the platform" startContent={<Search className="size-4 text-muted-foreground" />} />,
    columns: [
      <div key="p"><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">People</p><ul className="space-y-1 text-sm"><li>Avery Lin</li><li>Morgan Reyes</li></ul></div>,
      <div key="j"><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Jobs</p><ul className="space-y-1 text-sm"><li>Frontend Engineer</li><li>Customer Success</li></ul></div>,
    ],
    onClose: () => {},
    footer: "Press Enter to see all results",
  },
};
