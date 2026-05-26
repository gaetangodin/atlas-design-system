import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ColumnSelector, type ColumnDefinition } from "./ColumnSelector";

const COLUMNS: ColumnDefinition[] = [
  { id: "name", label: "Name", isLocked: true },
  { id: "role", label: "Role" },
  { id: "status", label: "Status" },
  { id: "applied", label: "Applied date" },
  { id: "score", label: "Match score" },
];

const meta: Meta<typeof ColumnSelector> = {
  title: "Data/ColumnSelector",
  component: ColumnSelector,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ColumnSelector>;

export const Default: Story = {
  render: () => {
    const [v, setV] = useState<string[]>(["name", "role", "status"]);
    return <ColumnSelector columns={COLUMNS} visibleIds={v} onChange={setV} />;
  },
};
