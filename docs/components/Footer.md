# Component: Footer

## Description
Site footer — brand block + columns of links + optional bottom bar
(copyright + secondary links).

## Exports

- `Footer`

## Import

```tsx
import { Footer } from "@atlas/design-system";
```

## Props

| Prop          | Type                          | Default | Description |
| ------------- | ----------------------------- | ------- | ----------- |
| `brand`       | `ReactNode`                   | —       | Top-left brand block. |
| `tagline`     | `ReactNode`                   | —       | Short tagline under the brand. |
| `columns`     | `FooterColumn[]`              | `[]`    | Up to ~4 link columns. |
| `bottomLeft`  | `ReactNode`                   | —       | Copyright line. |
| `bottomRight` | `ReactNode`                   | —       | Privacy / Terms / etc. |

### `FooterColumn`

| Field   | Type                                      | Description |
| ------- | ----------------------------------------- | ----------- |
| `id`    | `string`                                  | Stable key. |
| `title` | `ReactNode`                               | Section heading. |
| `links` | `Array<{ label: ReactNode; href: string }>` | Link rows. |

## Examples

```tsx
<Footer
  brand="Xeekrs"
  tagline="Recruitment built around the way teams actually work."
  columns={[
    {
      id: "product", title: "Product",
      links: [
        { label: "Referrals", href: "/referrals" },
        { label: "Match scoring", href: "/match" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      id: "company", title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ]}
  bottomLeft={<span>© 2026 Xeekrs Inc.</span>}
  bottomRight={
    <>
      <a href="/privacy">Privacy</a>
      <span className="mx-2">·</span>
      <a href="/terms">Terms</a>
    </>
  }
/>
```
