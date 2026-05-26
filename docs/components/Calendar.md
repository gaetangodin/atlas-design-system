# Component: Calendar

## Description
Date pickers and inline calendars built on HeroUI / React Aria —
replaces `react-day-picker` per `docs/RADIX_TO_HEROUI.md`.

## Exports

- `Calendar` — inline single-date picker
- `RangeCalendar` — inline date range
- `DatePicker` — single date with a popover trigger field
- `DateRangePicker` — date range with a popover trigger field
- `DateInput` — segmented date input (no popover)
- `TimeInput` — segmented time input

## Import

```tsx
import {
  Calendar, RangeCalendar,
  DatePicker, DateRangePicker,
  DateInput, TimeInput,
} from "@atlas/design-system";
```

## Common props

All accept the React Aria date props:

| Prop          | Type                                  | Description |
| ------------- | ------------------------------------- | ----------- |
| `value`       | `DateValue \| RangeValue<DateValue>`| Controlled. |
| `defaultValue`| same                                  | Uncontrolled. |
| `onChange`    | `(v) => void`                         | |
| `minValue` / `maxValue` | `DateValue`                 | Constrain pickable dates. |
| `isDisabled` / `isReadOnly` / `isInvalid` / `isRequired` | `boolean` | |
| `granularity` | `"day" \| "hour" \| "minute" \| "second"` (date inputs) | |

Date inputs and pickers also accept the bordered-field props from
[`Input`](./Input.md): `label`, `description`, `errorMessage`,
`labelPlacement`.

## Examples

```tsx
// Inline range
<RangeCalendar
  defaultValue={{
    start: parseDate("2026-01-01"),
    end:   parseDate("2026-01-14"),
  }}
/>

// Field + popover
<DatePicker label="Start date" minValue={today(getLocalTimeZone())} />

<DateRangePicker label="Trip dates" />

// Just the segmented input
<DateInput label="Birth date" />
<TimeInput label="Meeting time" />
```

## Accessibility

- React Aria provides full keyboard navigation (arrow keys, PageUp/Down
  for month/year, Home/End for week edges).
- Always pass `label`. The popover content is portaled — no z-index
  conflicts inside Modals or Drawers.

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Constrain with `minValue` / `maxValue` for booking flows. | Validate dates only on submit when constraints are knowable. |
| Use `@internationalized/date` types from React Aria. | Mix native `Date` objects with React Aria's `CalendarDate`. |
