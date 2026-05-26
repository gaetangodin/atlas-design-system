import { Copy, Edit, Plus, Trash2 } from "lucide-react";
import {
  Autocomplete,
  AutocompleteItem,
  Listbox,
  ListboxItem,
  Select,
  SelectItem,
} from "@atlas/design-system";
import { Section } from "../Section";

export function PickersSection() {
  return (
    <Section id="pickers" title="Selects & autocomplete">
      <div className="grid gap-6 md:grid-cols-2">
        <Select label="Plan" defaultSelectedKeys={["pro"]} placeholder="Choose a plan">
          <SelectItem key="free">Free</SelectItem>
          <SelectItem key="pro">Pro</SelectItem>
          <SelectItem key="team">Team</SelectItem>
          <SelectItem key="enterprise">Enterprise</SelectItem>
        </Select>
        <Autocomplete label="Country" placeholder="Search countries">
          <AutocompleteItem key="us">United States</AutocompleteItem>
          <AutocompleteItem key="ca">Canada</AutocompleteItem>
          <AutocompleteItem key="fr">France</AutocompleteItem>
          <AutocompleteItem key="de">Germany</AutocompleteItem>
          <AutocompleteItem key="jp">Japan</AutocompleteItem>
          <AutocompleteItem key="br">Brazil</AutocompleteItem>
        </Autocomplete>
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Listbox
          </p>
          <div className="rounded-md border border-border">
            <Listbox aria-label="Quick actions">
              <ListboxItem key="new" startContent={<Plus className="size-4" />}>
                New file
              </ListboxItem>
              <ListboxItem key="copy" startContent={<Copy className="size-4" />}>
                Copy link
              </ListboxItem>
              <ListboxItem key="edit" startContent={<Edit className="size-4" />}>
                Edit
              </ListboxItem>
              <ListboxItem
                key="delete"
                color="danger"
                className="text-danger"
                startContent={<Trash2 className="size-4" />}
              >
                Delete
              </ListboxItem>
            </Listbox>
          </div>
        </div>
      </div>
    </Section>
  );
}
