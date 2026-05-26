# Component: Radio

## Description
Exclusive choice within a group. Wraps HeroUI's `Radio` and
`RadioGroup`; only the wrapper/control pseudo-elements get re-tinted to
brand.

## Exports

- `Radio` — single option
- `RadioGroup` — required parent that owns the value

## Import

```tsx
import { Radio, RadioGroup } from "@atlas/design-system";
```

## Props — RadioGroup

| Prop            | Type                                       | Default        | Description |
| --------------- | ------------------------------------------ | -------------- | ----------- |
| `label`         | `ReactNode`                                | —              | Group label. |
| `value`         | `string`                                   | —              | Controlled. |
| `defaultValue`  | `string`                                   | —              | Uncontrolled. |
| `onValueChange` | `(value: string) => void`                  | —              | |
| `orientation`   | `"vertical" \| "horizontal"`             | `"vertical"`   | |
| `description`   | `ReactNode`                                | —              | Helper text. |
| `errorMessage`  | `ReactNode`                                | —              | Shown when `isInvalid`. |
| `isInvalid` / `isDisabled` / `isRequired` | `boolean` | `false` | |

## Props — Radio

| Prop          | Type        | Default | Description |
| ------------- | ----------- | ------- | ----------- |
| `value`       | `string`    | —       | **Required.** |
| `description` | `ReactNode` | —       | Sub-label under the option. |
| `isDisabled`  | `boolean`   | `false` | |

## Accessibility

- Real `role="radiogroup"` and `role="radio"` semantics.
- Arrow keys move selection within the group; `Tab` moves to/from it.
- Always pass `label` on the group — never rely on visual grouping alone.

## Examples

```tsx
<RadioGroup label="Visibility" defaultValue="public">
  <Radio value="public" description="Anyone with the link">Public</Radio>
  <Radio value="team" description="Only your team">Team only</Radio>
  <Radio value="private">Private</Radio>
</RadioGroup>
```
