import type { Meta, StoryObj } from "@storybook/react";
import {
  BottomSheet, BottomSheetTrigger, BottomSheetPortal,
  BottomSheetOverlay, BottomSheetContent,
  BottomSheetTitle, BottomSheetDescription,
} from "./BottomSheet";
import { Button } from "../Button";
import { Checkbox, CheckboxGroup } from "../Checkbox";

const meta: Meta = { title: "Overlays/BottomSheet" };
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <BottomSheet>
      <BottomSheetTrigger asChild>
        <Button variant="bordered">Filter</Button>
      </BottomSheetTrigger>
      <BottomSheetPortal>
        <BottomSheetOverlay />
        <BottomSheetContent>
          <BottomSheetTitle>Filter referrals</BottomSheetTitle>
          <BottomSheetDescription>Choose the stages you want to see.</BottomSheetDescription>
          <CheckboxGroup defaultValue={["active"]}>
            <Checkbox value="active">Active</Checkbox>
            <Checkbox value="archived">Archived</Checkbox>
            <Checkbox value="drafts">Drafts</Checkbox>
          </CheckboxGroup>
        </BottomSheetContent>
      </BottomSheetPortal>
    </BottomSheet>
  ),
};
