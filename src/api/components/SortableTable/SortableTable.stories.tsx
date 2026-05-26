import type { Meta, StoryObj } from "@storybook/react";
import { SortableTable } from "./SortableTable";
import { Badge } from "../Badge";

type Referral = { id: string; name: string; role: string; matchScore: number; stage: string };

const rows: Referral[] = [
  { id: "1", name: "Maya Rodriguez", role: "Senior Designer",   matchScore: 92, stage: "screen" },
  { id: "2", name: "Jin Kim",        role: "Engineering Lead",  matchScore: 88, stage: "match"  },
  { id: "3", name: "Ana Torres",     role: "Recruiter",         matchScore: 74, stage: "new"    },
  { id: "4", name: "Sam Pinto",      role: "Customer Success",  matchScore: 81, stage: "screen" },
  { id: "5", name: "Lina Park",      role: "Product Manager",   matchScore: 95, stage: "match"  },
];

const meta: Meta = { title: "Data/SortableTable" };
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <SortableTable<Referral>
      rowKey="id"
      rows={rows}
      pageSize={3}
      columns={[
        { key: "name", label: "Name" },
        { key: "role", label: "Role" },
        {
          key: "matchScore",
          label: "Match",
          align: "end",
          render: (r) => `${r.matchScore}%`,
        },
        {
          key: "stage",
          label: "Stage",
          render: (r) => <Badge variant="flat" color="primary">{r.stage}</Badge>,
        },
      ]}
    />
  ),
};
