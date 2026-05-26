import type { Meta, StoryObj } from "@storybook/react";
import { TeamGrid } from "./TeamGrid";

const meta: Meta<typeof TeamGrid> = {
  title: "Patterns/TeamGrid",
  component: TeamGrid,
  tags: ["autodocs"],
  args: {
    columns: 4,
    members: [
      { id: "1", name: "Maya R.", role: "Senior Designer",  initials: "MR" },
      { id: "2", name: "Jin K.",  role: "Engineering Lead", initials: "JK" },
      { id: "3", name: "Ana T.",  role: "Recruiter",         initials: "AT" },
      { id: "4", name: "Sam P.",  role: "Customer Success",  initials: "SP" },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof TeamGrid>;
export const Default: Story = {};
export const ThreeColumns: Story = { args: { columns: 3 } };
