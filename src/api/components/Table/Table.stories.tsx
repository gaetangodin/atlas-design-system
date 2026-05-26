import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "./Table";
import { Badge } from "../Badge";

const meta: Meta<typeof Table> = {
  title: "Data/Table",
  component: Table,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table aria-label="Referrals">
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Role</TableColumn>
        <TableColumn>Stage</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Maya Rodriguez</TableCell>
          <TableCell>Senior Designer</TableCell>
          <TableCell><Badge variant="flat" color="primary">In review</Badge></TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Jin Kim</TableCell>
          <TableCell>Engineering Lead</TableCell>
          <TableCell><Badge variant="flat" color="success">Match</Badge></TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Ana Torres</TableCell>
          <TableCell>Recruiter</TableCell>
          <TableCell><Badge variant="flat" color="warning">Pending</Badge></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
