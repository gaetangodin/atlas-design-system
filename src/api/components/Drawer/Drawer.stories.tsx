import type { Meta, StoryObj } from "@storybook/react";
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "./Drawer";
import { useDisclosure } from "../Modal";
import { Button } from "../Button";

function DrawerDemo({ placement }: { placement?: "left" | "right" | "top" | "bottom" }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open drawer</Button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement={placement}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader>Maya Rodriguez</DrawerHeader>
              <DrawerBody>Senior Designer · Vancouver</DrawerBody>
              <DrawerFooter>
                <Button variant="light" onClick={onClose}>Close</Button>
                <Button color="primary" onClick={onClose}>Save</Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}

const meta: Meta<typeof Drawer> = { title: "Overlays/Drawer", component: Drawer, tags: ["autodocs"] };
export default meta;

type Story = StoryObj<typeof Drawer>;
export const Right: Story = { render: () => <DrawerDemo placement="right" /> };
export const Left: Story = { render: () => <DrawerDemo placement="left" /> };
