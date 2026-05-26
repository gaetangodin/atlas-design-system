# Component: AuthLayout

## Description
Centered card layout for sign-in / sign-up / forgot-password pages.
Optional split-screen variant with marketing imagery on the right.

## Exports

- `AuthLayout`

## Import

```tsx
import { AuthLayout } from "@atlas/design-system";
```

## Props

| Prop          | Type                          | Default | Description |
| ------------- | ----------------------------- | ------- | ----------- |
| `brand`       | `ReactNode`                   | —       | Top of the card column (logo). |
| `title`       | `ReactNode`                   | —       | **Required.** Card headline. |
| `description` | `ReactNode`                   | —       | Sub-headline. |
| `children`    | `ReactNode`                   | —       | The form (and friends). |
| `footer`      | `ReactNode`                   | —       | "Don't have an account? Sign up". |
| `side`        | `ReactNode`                   | —       | Optional right-hand panel (hidden on mobile). |

## Examples

```tsx
<AuthLayout
  brand={<Brand />}
  title="Welcome back"
  description="Sign in to your Xeekrs account."
  footer={<>New here? <Link href="/signup">Create an account</Link></>}
  side={<MarketingPanel />}
>
  <Form onSubmit={signIn}>
    <Input label="Email" type="email" name="email" isRequired />
    <Input label="Password" type="password" name="password" isRequired />
    <Button type="submit" color="primary" fullWidth>Sign in</Button>
  </Form>
</AuthLayout>
```
