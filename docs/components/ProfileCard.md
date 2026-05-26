# Component: ProfileCard

## Description
Person summary card — avatar + name + role + body + actions. Composes
`Card` + `Avatar`. Two layouts: stacked (centered, avatar above) and
row (avatar left, content right).

## Exports

- `ProfileCard`

## Import

```tsx
import { ProfileCard } from "@atlas/design-system";
```

## Props

| Prop          | Type                          | Default      | Description |
| ------------- | ----------------------------- | ------------ | ----------- |
| `name`        | `ReactNode`                   | —            | **Required.** |
| `role`        | `ReactNode`                   | —            | Title / position. |
| `bio`         | `ReactNode`                   | —            | Body sentence. |
| `avatarUrl`   | `string`                      | —            | |
| `initials`    | `string`                      | —            | Fallback when no `avatarUrl`. |
| `meta`        | `ReactNode`                   | —            | Tertiary metadata (location, joined). |
| `actions`     | `ReactNode`                   | —            | Button(s) at the bottom. |
| `orientation` | `"stacked" \| "row"`        | `"stacked"`  | |

## Examples

```tsx
<ProfileCard
  name="Maya Rodriguez"
  role="Senior Designer"
  bio="Leads design for the recruitment platform."
  initials="MR"
  meta="Vancouver, BC · joined 2024"
  actions={
    <>
      <Button variant="bordered" size="sm">Message</Button>
      <Button color="primary" size="sm">View profile</Button>
    </>
  }
/>

// Row layout — useful in lists
<ProfileCard
  orientation="row"
  name="Maya Rodriguez"
  role="Senior Designer · Vancouver"
  initials="MR"
  actions={<Button size="sm">View</Button>}
/>
```
