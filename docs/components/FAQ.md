# Component: FAQ

## Description
Frequently-asked-questions section — eyebrow + title + body header
above a multi-select [`Accordion`](./Accordion.md) of Q/A pairs.

## Exports

- `FAQ`

## Import

```tsx
import { FAQ } from "@atlas/design-system";
```

## Props

| Prop      | Type                          | Default | Description |
| --------- | ----------------------------- | ------- | ----------- |
| `eyebrow` | `ReactNode`                   | —       | Small uppercase line. |
| `title`   | `ReactNode`                   | —       | Section title. |
| `body`    | `ReactNode`                   | —       | Lead paragraph. |
| `items`   | `FAQItem[]`                   | —       | |

### `FAQItem`

| Field      | Type        | Description |
| ---------- | ----------- | ----------- |
| `id`       | `string`    | Stable key. |
| `question` | `ReactNode` | |
| `answer`   | `ReactNode` | |

## Accessibility

- The underlying Accordion handles ARIA — multi-select so users can
  open several answers at once.

## Examples

```tsx
<FAQ
  title="Common questions"
  items={[
    { id: "billing",  question: "How does billing work?",         answer: "Monthly per seat, cancel anytime." },
    { id: "trial",    question: "Is there a free trial?",          answer: "Yes — 14 days, no credit card required." },
    { id: "security", question: "How do you handle our data?",    answer: "AES-256 at rest, SOC 2 Type II in progress." },
  ]}
/>
```
