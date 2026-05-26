import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection } from "./Dropdown";
import { Button } from "../Button";

const meta: Meta<typeof Dropdown> = { title: "Overlays/Dropdown", component: Dropdown, tags: ["autodocs"] };
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Actions</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Referral actions">
        <DropdownItem key="view">View profile</DropdownItem>
        <DropdownItem key="edit">Edit details</DropdownItem>
        <DropdownItem key="archive" color="danger">Archive</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const WithSections: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Save</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Save options">
        <DropdownSection title="Recently">
          <DropdownItem key="rename" shortcut="⌘E">Rename</DropdownItem>
          <DropdownItem key="duplicate" shortcut="⌘D">Duplicate</DropdownItem>
        </DropdownSection>
        <DropdownSection title="Danger zone">
          <DropdownItem key="delete" color="danger" shortcut="⌫">Delete</DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  ),
};
