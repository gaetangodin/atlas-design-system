import { ChevronRight, Copy, Edit, MoreHorizontal, Plus, Star, Trash2 } from "lucide-react";
import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from "@atlas/design-system";
import { Row } from "../Row";

/** First half of the Overlays section — non-modal popups. */
export function OverlayPopovers() {
  return (
    <>
      <Row label="Tooltip">
        <Tooltip content="A tooltip explanation">
          <Button variant="flat" startContent={<Star />}>Hover me</Button>
        </Tooltip>
        <Tooltip content="Placement: bottom" placement="bottom">
          <Button variant="flat">Bottom</Button>
        </Tooltip>
      </Row>
      <Divider className="my-2" />
      <Row label="Popover">
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button variant="flat">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <p className="text-sm font-semibold">Popover title</p>
              <p className="text-xs text-muted-foreground">
                Anchored to its trigger; flips on overflow.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </Row>
      <Divider className="my-2" />
      <Row label="Dropdown">
        <Dropdown>
          <DropdownTrigger>
            <Button variant="flat" endContent={<ChevronRight className="size-4 rotate-90" />}>
              Actions
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Actions">
            <DropdownItem key="new" startContent={<Plus className="size-4" />}>
              New
            </DropdownItem>
            <DropdownItem key="copy" startContent={<Copy className="size-4" />}>
              Copy
            </DropdownItem>
            <DropdownItem key="edit" startContent={<Edit className="size-4" />}>
              Edit
            </DropdownItem>
            <DropdownItem
              key="delete"
              color="danger"
              className="text-danger"
              startContent={<Trash2 className="size-4" />}
            >
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button isIconOnly variant="flat" aria-label="More">
          <MoreHorizontal className="size-4" />
        </Button>
      </Row>
    </>
  );
}
