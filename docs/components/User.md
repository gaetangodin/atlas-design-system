# Component: User

## Description
Avatar + name + description in one row. Lightweight HeroUI wrapper —
the most common "person inline" layout. For just an avatar, use
[`Avatar`](./Avatar.md); for a full card use [`ProfileCard`](./ProfileCard.md).

## Exports

- `User`

## Import

```tsx
import { User } from "@atlas/design-system";
```

## Props

Inherits HeroUI's `UserProps`. Most-used:

| Prop          | Type                          | Default | Description |
| ------------- | ----------------------------- | ------- | ----------- |
| `name`        | `string`                      | —       | **Required.** Primary line. |
| `description` | `ReactNode`                   | —       | Sub-line (role, email). |
| `avatarProps` | `AvatarProps`                 | —       | Forwarded to the inner Avatar. |

## Examples

```tsx
<User
  name="Maya Rodriguez"
  description="Senior Designer · Vancouver"
  avatarProps={{ src: "/avatars/maya.jpg" }}
/>

// In a Dropdown header
<DropdownMenu>
  <DropdownItem isReadOnly>
    <User name="Maya Rodriguez" description="m.rodriguez@xeekrs.com" avatarProps={{ name: "MR" }} />
  </DropdownItem>
  <DropdownItem key="settings">Settings</DropdownItem>
  <DropdownItem key="signout" color="danger">Sign out</DropdownItem>
</DropdownMenu>
```
