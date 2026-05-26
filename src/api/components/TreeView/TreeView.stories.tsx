import type { Meta, StoryObj } from "@storybook/react";
import { TreeView } from "./TreeView";

const nodes = [
  { id: "inbox", label: "Inbox" },
  {
    id: "projects",
    label: "Projects",
    children: [
      { id: "recruitment", label: "Recruitment", isLeaf: true },
      { id: "academy", label: "Academy", isLeaf: true },
      {
        id: "internal",
        label: "Internal",
        children: [
          { id: "design", label: "Design", isLeaf: true },
          { id: "ops", label: "Ops", isLeaf: true },
        ],
      },
    ],
  },
  { id: "archived", label: "Archived" },
];

const meta: Meta<typeof TreeView> = {
  title: "Data/TreeView",
  component: TreeView,
  tags: ["autodocs"],
  args: { nodes },
};
export default meta;

type Story = StoryObj<typeof TreeView>;
export const Default: Story = {};
export const PreExpanded: Story = { args: { defaultExpanded: ["projects", "internal"] } };
