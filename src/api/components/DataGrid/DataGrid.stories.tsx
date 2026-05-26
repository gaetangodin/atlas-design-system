import type { Meta, StoryObj } from "@storybook/react";
import { DataGrid } from "./DataGrid";
import { useState } from "react";

type Referral = { id: string; name: string; role: string; stage: string };

function Demo() {
  const [rows, setRows] = useState<Referral[]>([
    { id: "1", name: "Maya Rodriguez", role: "Senior Designer",  stage: "screen" },
    { id: "2", name: "Jin Kim",        role: "Engineering Lead", stage: "match"  },
    { id: "3", name: "Ana Torres",     role: "Recruiter",        stage: "new"    },
  ]);
  return (
    <DataGrid<Referral>
      rowKey="id"
      rows={rows}
      onCellChange={(id, key, value) =>
        setRows((rs) => rs.map((r) => (r.id === id ? { ...r, [key]: value } : r)))
      }
      columns={[
        { key: "name", label: "Name", editable: true, editor: "text" },
        { key: "role", label: "Role", editable: true, editor: "text" },
        {
          key: "stage",
          label: "Stage",
          editable: true,
          editor: "select",
          options: [
            { value: "new",    label: "New" },
            { value: "screen", label: "Screen" },
            { value: "match",  label: "Match" },
            { value: "hire",   label: "Hired" },
          ],
        },
      ]}
    />
  );
}

const meta: Meta = { title: "Data/DataGrid" };
export default meta;

type Story = StoryObj;
export const Default: Story = { render: () => <Demo /> };
