# Component: NewsletterCTA

## Description
Inline email capture section — headline + body + email field + CTA.
No backend logic; the consumer wires `onSubmit`.

## Exports

- `NewsletterCTA`

## Import

```tsx
import { NewsletterCTA } from "@atlas/design-system";
```

## Props

| Prop          | Type                          | Default              | Description |
| ------------- | ----------------------------- | -------------------- | ----------- |
| `title`       | `ReactNode`                   | —                    | **Required.** |
| `body`        | `ReactNode`                   | —                    | Lead sentence. |
| `ctaLabel`    | `ReactNode`                   | `"Subscribe"`        | |
| `placeholder` | `string`                      | `"you@example.com"`  | |
| `onSubmit`    | `(email: string) => void`     | —                    | Receives the email. |
| `consent`     | `ReactNode`                   | —                    | Compliance line under the form. |

## Accessibility

- Renders a real `<form>` — Enter submits.
- The email Input is `isRequired` and labelled `"Email"`.

## Examples

```tsx
<NewsletterCTA
  title="Get monthly updates"
  body="Product news, hiring stories, and the occasional team interview."
  onSubmit={subscribe}
  consent={
    <>By subscribing you agree to our <a href="/privacy">privacy policy</a>.</>
  }
/>
```
