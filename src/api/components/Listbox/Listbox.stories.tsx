import type { Meta, StoryObj } from "@storybook/react";
import { Listbox, ListboxItem, ListboxSection } from "./Listbox";

const meta: Meta<typeof Listbox> = { title: "Overlays/Listbox", component: Listbox, tags: ["autodocs"] };
export default meta;

type Story = StoryObj<typeof Listbox>;

export const SingleSelect: Story = {
  render: () => (
    <Listbox aria-label="Stages" selectionMode="single" defaultSelectedKeys={["screen"]}>
      <ListboxItem key="new">New</ListboxItem>
      <ListboxItem key="screen">Screen</ListboxItem>
      <ListboxItem key="match">Match</ListboxItem>
      <ListboxItem key="hire">Hired</ListboxItem>
    </Listbox>
  ),
};

export const Grouped: Story = {
  render: () => (
    <Listbox aria-label="Skills" selectionMode="multiple">
      <ListboxSection title="Design">
        <ListboxItem key="figma">Figma</ListboxItem>
        <ListboxItem key="research">User research</ListboxItem>
      </ListboxSection>
      <ListboxSection title="Engineering">
        <ListboxItem key="react">React</ListboxItem>
        <ListboxItem key="ts">TypeScript</ListboxItem>
      </ListboxSection>
    </Listbox>
  ),
};
