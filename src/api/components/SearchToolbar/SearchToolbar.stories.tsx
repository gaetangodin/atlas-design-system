import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "lucide-react";
import { SearchToolbar } from "./SearchToolbar";
import { Input } from "../Input";
import { Badge } from "../Badge";
import { Button } from "../Button";

const meta: Meta<typeof SearchToolbar> = {
  title: "Shell/SearchToolbar",
  component: SearchToolbar,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof SearchToolbar>;

export const Default: Story = {
  args: {
    searchInput: <Input placeholder="Search candidates" startContent={<Search className="size-4 text-muted-foreground" />} />,
    chips: <><Badge variant="bordered">Remote</Badge><Badge variant="bordered">Senior</Badge></>,
    trailing: <Button size="sm" variant="flat">Filters</Button>,
    secondary: "4 active filters · 312 results",
  },
};
