# Component: Alert

## Description
In-flow status card — title + description tinted by semantic color
(success / warning / danger / info / neutral / brand). Distinct from
[`Banner`](./Banner.md) (full-width announcement bar) and
[`Toaster`](./Toaster.md) (transient toast).

## Exports

- `Alert`

## Import

```tsx
import { Alert } from "@atlas/design-system";
```

## Props

Inherits HeroUI `AlertProps`. Most-used:

| Prop          | Type                                                                   | Default     | Description |
| ------------- | ---------------------------------------------------------------------- | ----------- | ----------- |
| `title`       | `ReactNode`                                                            | —           | |
| `description` | `ReactNode`                                                            | —           | |
| `color`       | `"default" \| "primary" \| "secondary" \| "success" \| "warning" \| "danger"` | `"default"` | Tints border + bg + text. |
| `variant`     | `"solid" \| "bordered" \| "flat" \| "faded"`                       | `"flat"`    | |
| `startContent`| `ReactNode`                                                            | —           | Leading icon. |
| `endContent`  | `ReactNode`                                                            | —           | Trailing slot (e.g. close button). |
| `onClose`     | `() => void`                                                           | —           | Renders a close button. |
| `isClosable`  | `boolean`                                                              | `false`     | Show close button without an explicit handler. |

## Accessibility

- Renders `role="alert"`. Screen readers announce the title +
  description immediately.

## Examples

```tsx
<Alert
  color="success"
  title="Referral submitted"
  description="We'll notify the hiring team within 48 hours."
/>

<Alert
  color="warning"
  title="Profile incomplete"
  description="Add a phone number to unlock SMS check-ins."
/>

<Alert color="danger" title="Submission failed" description="Check your connection and retry." />
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use for important state that lives next to the related content. | Use Alert for global announcements — that's Banner. |
| Pair `danger` Alerts with a recovery path (retry / link). | Show "Something went wrong" with no next step. |
