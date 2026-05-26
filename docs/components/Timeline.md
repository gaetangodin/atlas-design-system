# Component: Timeline

## Description
Vertical event list with markers and connector lines. Activity feeds,
status histories, audit trails.

## Exports

- `Timeline`

## Import

```tsx
import { Timeline } from "@atlas/design-system";
```

## Props

| Prop     | Type             | Default | Description |
| -------- | ---------------- | ------- | ----------- |
| `events` | `TimelineEvent[]` | —      | Ordered top-to-bottom. |

### `TimelineEvent`

| Field         | Type                                                                   | Description |
| ------------- | ---------------------------------------------------------------------- | ----------- |
| `id`          | `string`                                                               | Stable key. |
| `title`       | `ReactNode`                                                            | Headline. |
| `description` | `ReactNode`                                                            | Body. |
| `meta`        | `ReactNode`                                                            | Timestamp / actor / source. |
| `tone`        | `"neutral" \| "primary" \| "success" \| "warning" \| "danger"` | Marker color. |
| `icon`        | `ReactNode`                                                            | Glyph inside the marker. |

## Accessibility

- Renders an `<ol role="list">` with semantic `<li>` rows.

## Examples

```tsx
<Timeline
  events={[
    { id: "1", title: "Referral created",   meta: "Today, 9:14am", tone: "primary" },
    { id: "2", title: "Profile reviewed",   description: "By the hiring team", meta: "Today, 10:02am" },
    { id: "3", title: "Match recommended",  meta: "Today, 11:30am", tone: "success" },
    { id: "4", title: "Awaiting candidate", meta: "Today, 12:15pm", tone: "warning" },
  ]}
/>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use semantic tones (`success` for completion, `danger` for failures). | Cycle through random colors. |
| Format `meta` for humans ("2h ago"), not raw timestamps. | Show ISO strings to end users. |
