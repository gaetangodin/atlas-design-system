# Component: EmptyState

## Description
First-run / no-results placeholder. Icon + title + body + primary
action. Custom; use over `Card` when there's truly nothing to show.

## Exports

- `EmptyState`

## Import

```tsx
import { EmptyState } from "@atlas/design-system";
```

## Props

| Prop          | Type                                  | Default      | Description |
| ------------- | ------------------------------------- | ------------ | ----------- |
| `icon`        | `ReactNode`                           | —            | Top glyph (≤24px). |
| `title`       | `ReactNode`                           | —            | **Required** headline. |
| `description` | `ReactNode`                           | —            | Body sentence. |
| `action`      | `ReactNode`                           | —            | Primary action — usually a `Button`. |
| `orientation` | `"vertical" \| "horizontal"`        | `"vertical"` | Stacked or icon-left layout. |

## Accessibility

- Renders with `role="status"` so assistive tech announces the state.
- Always include `action` — empty states are onboarding moments.

## Examples

```tsx
<EmptyState
  icon={<SearchX />}
  title="No referrals yet"
  description="Start by inviting someone you've worked with — they'll show up here once they accept."
  action={<Button color="primary">Send first invite</Button>}
/>

// Inline / horizontal
<EmptyState
  orientation="horizontal"
  icon={<Inbox />}
  title="Inbox is clear"
  description="Nice work. Check back later."
/>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use an empty state as an onboarding nudge with a CTA. | Ship "No data" with no next step. |
| Tailor copy to the specific surface — "No matches", "No saved searches". | Use a generic "Empty" everywhere. |
