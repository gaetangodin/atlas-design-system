# Component: Dropdown

## Description
Action menu attached to a trigger. Wraps HeroUI's `Dropdown` with the
Xeekrs popover surface and brand-tinted item rows (`bg-muted` on
hover/selected).

## Exports

- `Dropdown`
- `DropdownTrigger`
- `DropdownMenu`
- `DropdownItem`
- `DropdownSection`

## Import

```tsx
import {
  Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection,
} from "@atlas/design-system";
```

## Props

Inherits HeroUI's prop surface. Most-used:

| Prop                 | Type                                       | Default   | Description |
| -------------------- | ------------------------------------------ | --------- | ----------- |
| `placement`          | `PopoverPlacement`                         | `"bottom-start"` | Where the menu anchors. |
| `closeOnSelect`      | `boolean`                                  | `true`    | Close after an item is chosen. |
| `isDisabled`         | `boolean`                                  | `false`   | |
| `selectionMode` (Menu) | `"none" \| "single" \| "multiple"`   | `"none"`  | Use for checkable items. |
| `selectedKeys` (Menu) | `Iterable<Key>`                           | —         | Controlled selection. |

### `DropdownItem` props (selected)

| Prop          | Type                          | Description |
| ------------- | ----------------------------- | ----------- |
| `key`         | `Key`                         | **Required.** |
| `description` | `ReactNode`                   | Sub-label. |
| `shortcut`    | `ReactNode`                   | Right-aligned keyboard hint. |
| `color`       | `AtlasColor`                  | Useful for `danger` destructive items. |
| `startContent` / `endContent` | `ReactNode`   | Icons. |
| `href` / `as` | …                             | Render the item as a link. |

## Accessibility

- Trigger gets `aria-haspopup="menu"`; menu items use `role="menuitem"`.
- Arrow keys move focus inside the menu; Esc closes.

## Examples

```tsx
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

// With sections + shortcuts
<Dropdown>
  <DropdownTrigger><Button isIconOnly aria-label="More"><MoreHorizontal /></Button></DropdownTrigger>
  <DropdownMenu>
    <DropdownSection title="Recently">
      <DropdownItem key="rename" shortcut="⌘E">Rename</DropdownItem>
      <DropdownItem key="duplicate" shortcut="⌘D">Duplicate</DropdownItem>
    </DropdownSection>
    <DropdownSection title="Danger zone">
      <DropdownItem key="delete" color="danger" shortcut="⌫">Delete</DropdownItem>
    </DropdownSection>
  </DropdownMenu>
</Dropdown>
```
