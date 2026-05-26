# Component: NumberInput

## Description
Numeric text field with stepper buttons. Wraps HeroUI's `NumberInput`
— bordered field, `radius="lg"`, outside label, brand focus ring.

## Exports

- `NumberInput`

## Import

```tsx
import { NumberInput } from "@atlas/design-system";
```

## Props

Inherits HeroUI's `NumberInput` props. Most-used:

| Prop            | Type                                          | Default      | Description |
| --------------- | --------------------------------------------- | ------------ | ----------- |
| `label`         | `ReactNode`                                   | —            | Outside label. |
| `value`         | `number`                                      | —            | Controlled. |
| `defaultValue`  | `number`                                      | —            | Uncontrolled. |
| `onValueChange` | `(v: number) => void`                         | —            | |
| `minValue` / `maxValue` | `number`                              | —            | Clamps input. |
| `step`          | `number`                                      | `1`          | |
| `formatOptions` | `Intl.NumberFormatOptions`                    | —            | Currency / percent / decimals. |
| `hideStepper`   | `boolean`                                     | `false`      | Removes the +/− buttons. |
| `isInvalid` / `isDisabled` / `isReadOnly` / `isRequired` | `boolean` | `false` | |

## Accessibility

- Renders a real `<input type="text" inputMode="numeric">` with ARIA
  spinbutton role. Arrow keys increment/decrement.

## Examples

```tsx
<NumberInput label="Years of experience" defaultValue={3} minValue={0} maxValue={50} />

<NumberInput
  label="Hourly rate"
  defaultValue={45}
  step={5}
  formatOptions={{ style: "currency", currency: "CAD" }}
/>
```
