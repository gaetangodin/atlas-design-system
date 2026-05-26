import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@atlas/design-system";
import { Section } from "../Section";
import { mockPeople } from "../../mocks/playground.mocks";

export function TableSection() {
  return (
    <Section id="table" title="Table">
      <Table aria-label="People">
        <TableHeader>
          <TableColumn key="name">Name</TableColumn>
          <TableColumn key="role">Role</TableColumn>
          <TableColumn key="status">Status</TableColumn>
        </TableHeader>
        <TableBody items={mockPeople}>
          {(p) => (
            <TableRow key={p.id}>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.role}</TableCell>
              <TableCell>
                <Badge
                  variant="flat"
                  color={p.status === "Active" ? "success" : "warning"}
                >
                  {p.status}
                </Badge>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Section>
  );
}
