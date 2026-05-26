# Component: Switch

## Description
Pill toggle for on/off settings. Wraps HeroUI's `Switch` — we defer to
its native track/thumb (overriding the wrapper double-paints on some
browsers).

## Exports

- `Switch`

## Import

```tsx
import { Switch } from "@atlas/design-system";
```

## Props

Inherits HeroUI `SwitchProps`. Most-used:

| Prop              | Type                                          | Default     | Description |
| ----------------- | --------------------------------------------- | ----------- | ----------- |
| `size`            | `"sm" \| "md" \| "lg"`                    | `"md"`      | |
| `color`           | `AtlasColor`                                  | `"primary"` | The on-tint. |
| `isSelected`      | `boolean`                                     | —           | Controlled value. |
| `defaultSelected` | `boolean`                                     | `false`     | Uncontrolled initial value. |
| `onValueChange`   | `(checked: boolean) => void`                  | —           | Fires on toggle. |
| `isDisabled`      | `boolean`                                     | `false`     | |
| `startContent` / `endContent` | `ReactNode`                       | —           | Icons inside the track (e.g. sun/moon). |

## Accessibility

- Renders a real `<input type="checkbox" role="switch">` with full keyboard support.
- Label is associated automatically when passed as children.

## Examples

```tsx
<Switch defaultSelected>Email notifications</Switch>

<Switch
  isSelected={dark}
  onValueChange={setDark}
  startContent={<Sun size={14} />}
  endContent={<Moon size={14} />}
>
  Dark mode
</Switch>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use for instant settings that don't need to be saved. | Use Switch for actions that submit on click — use Button. |
| Pair with a clear label describing the on-state. | Use Switch to confirm something destructive. |
