# Component: Stepper

## Description
Multi-step progress indicator — numbered markers joined by connector
lines, with pending / active / completed states. Custom component (no
HeroUI primitive); horizontal or vertical.

## Exports

- `Stepper`

## Import

```tsx
import { Stepper } from "@atlas/design-system";
```

## Props

| Prop          | Type                               | Default        | Description                                            |
| ------------- | ---------------------------------- | -------------- | ------------------------------------------------------ |
| `steps`       | `StepperStep[]`                    | —              | The steps. Each: `{ id, label, description?, status? }`.|
| `current`     | `number`                           | `0`            | Index of the active step; drives derived status.       |
| `orientation` | `"horizontal" \| "vertical"`     | `"horizontal"` | Layout direction.                                      |
| `onStepClick` | `(id: string) => void`             | —              | Makes steps interactive (focusable buttons).           |

### `StepperStep`

| Field         | Type                                          | Description                                  |
| ------------- | --------------------------------------------- | -------------------------------------------- |
| `id`          | `string`                                      | Stable key.                                  |
| `label`       | `string`                                      | Step name.                                   |
| `description` | `string` (optional)                           | Sub-label under the name.                    |
| `status`      | `"pending" \| "active" \| "completed"`     | Overrides the status derived from `current`. |

## States

| State       | Marker                                  |
| ----------- | --------------------------------------- |
| `completed` | Filled primary circle with a checkmark. |
| `active`    | Filled primary circle with the number.  |
| `pending`   | Outlined circle, muted number.          |

Status is derived from `current` (`index < current` → completed,
`index === current` → active, else pending) unless a step sets an
explicit `status`.

## Accessibility

- Renders an ordered list; the active step carries `aria-current="step"`.
- When `onStepClick` is set, each step is a real `<button>` with a
  visible focus ring.

## Examples

```tsx
<Stepper
  current={2}
  steps={[
    { id: "profile", label: "Profile", description: "Basic info" },
    { id: "skills",  label: "Skills",  description: "3 added" },
    { id: "match",   label: "Match",   description: "In progress" },
    { id: "submit",  label: "Submit",  description: "Pending" },
  ]}
/>

// Interactive + vertical
<Stepper orientation="vertical" current={1} steps={steps} onStepClick={goTo} />
```
