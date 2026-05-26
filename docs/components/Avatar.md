# Component: Avatar

## Description
Person or entity portrait. Wraps HeroUI's `Avatar` + `AvatarGroup`
with brand-muted fallback and full-radius (circular) by default. For
avatars with a status dot, see [`StatusAvatar`](./StatusAvatar.md).

## Exports

- `Avatar`
- `AvatarGroup`

## Import

```tsx
import { Avatar, AvatarGroup } from "@atlas/design-system";
```

## Props — Avatar

| Prop           | Type                          | Default                | Description |
| -------------- | ----------------------------- | ---------------------- | ----------- |
| `src`          | `string`                      | —                      | Image URL. |
| `name`         | `string`                      | —                      | Used to derive initials when no image. |
| `size`         | `"sm" \| "md" \| "lg"`    | `"md"`                 | |
| `radius`       | `AtlasRadius`                 | `"full"`               | `"md"` for squared avatars. |
| `color`        | `AtlasColor`                  | `"default"`            | Tint of the fallback. |
| `isBordered`   | `boolean`                     | `false`                | Ring around the avatar. |
| `fallback`     | `ReactNode`                   | initials               | Override the empty state. |
| `showFallback` | `boolean`                     | `false`                | Force the fallback even when `src` resolves. |

## Props — AvatarGroup

| Prop  | Type      | Default | Description |
| ----- | --------- | ------- | ----------- |
| `max` | `number`  | `4`     | Visible avatars before collapsing to `+N`. |
| `total` | `number`| —       | Override the count behind `+N`. |
| `isBordered` / `radius` / `size` | … | — | Forwarded to every child Avatar. |

## Accessibility

- Renders `<span role="img" aria-label={name}>` when no `src`.
- Pass `name` so screen readers announce the person.

## Examples

```tsx
<Avatar name="Maya Rodriguez" src="/avatars/maya.jpg" />
<Avatar name="MR" />  {/* Initials fallback */}

<AvatarGroup max={3} isBordered>
  <Avatar name="A" />
  <Avatar name="B" />
  <Avatar name="C" />
  <Avatar name="D" />
  <Avatar name="E" />
</AvatarGroup>
```
