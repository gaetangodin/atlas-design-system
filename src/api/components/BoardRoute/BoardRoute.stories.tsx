import type { Meta, StoryObj } from "@storybook/react";
import { BoardRoute } from "./BoardRoute";
import { Button } from "../Button";

const meta: Meta<typeof BoardRoute> = {
  title: "Routes/BoardRoute",
  component: BoardRoute,
  tags: ["autodocs"],
  args: { title: "Candidates", subtitle: "All active applicants." },
};
export default meta;
type Story = StoryObj<typeof BoardRoute>;

export const Default: Story = {
  args: {
    actions: <Button color="primary" size="sm">Invite</Button>,
    children: <div className="rounded-md border border-dashed border-border p-8 text-center text-sm text-muted-foreground">List / grid goes here.</div>,
  },
};
export const WithFilterRail: Story = {
  args: {
    filterRail: <div className="p-4 text-sm text-muted-foreground">Filters</div>,
    children: <div className="rounded-md border border-dashed border-border p-8 text-center text-sm text-muted-foreground">Filtered list</div>,
  },
};
