# Component: ButtonGroup

## Description
Visually joined cluster of `Button`s. Wraps HeroUI's `ButtonGroup` —
strips inner radii so the buttons share edges with no double border.

## Exports

- `ButtonGroup`

## Import

```tsx
import { ButtonGroup, Button } from "@atlas/design-system";
```

## Props

| Prop         | Type                          | Default | Description |
| ------------ | ----------------------------- | ------- | ----------- |
| `variant`    | `ButtonVariant`               | `"solid"` | Applied to all children. |
| `color`      | `AtlasColor`                  | `"default"`| Applied to all children. |
| `size`       | `"sm" \| "md" \| "lg"`    | `"md"`  | Applied to all children. |
| `radius`     | `AtlasRadius`                 | `"md"`  | Outer corners (children stay square inside). |
| `isDisabled` | `boolean`                     | `false` | Disables every child. |
| `fullWidth`  | `boolean`                     | `false` | Stretches the row. |

## Examples

```tsx
<ButtonGroup variant="bordered">
  <Button>Day</Button>
  <Button>Week</Button>
  <Button>Month</Button>
</ButtonGroup>

// Split button — primary + dropdown trigger
<ButtonGroup color="primary">
  <Button>Save</Button>
  <Dropdown>
    <DropdownTrigger>
      <Button isIconOnly aria-label="More save options"><ChevronDown size={16} /></Button>
    </DropdownTrigger>
    <DropdownMenu>
      <DropdownItem key="draft">Save as draft</DropdownItem>
      <DropdownItem key="template">Save as template</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</ButtonGroup>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use for related actions (Day/Week/Month, segmented filters). | Use ButtonGroup for unrelated buttons — put them in a row with `gap`. |
