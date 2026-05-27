/**
 * BrandedToasts — branded toast helper layer over `sonner` (Atlas's
 * `Toaster` component). Direct port of `Xeekrsmainapp/src/lib/app-toast.ts`.
 *
 * Each helper bakes in a styled `toast()` call:
 *
 *  - `toastChatNotice`         — blue chrome (new chat messages).
 *  - `toastConnectionNotice`   — earth ink + spotlight cream
 *                                (new connections, marketplace).
 *  - `toastJobseekerNotice`    — emerald chrome (positive jobseeker /
 *                                hiring feedback).
 *
 * The exported `TOAST_CLASS_*` constants are exposed so consumers can
 * reach for them when composing their own `toast()` calls with the
 * Xeekrs visual vocabulary.
 *
 * NOTE: this module imports from `sonner` directly — it expects the
 * consumer's app to have `<Toaster />` mounted (re-exported from Atlas).
 */

import { toast, type ExternalToast } from "sonner";
import { cnHero } from "../../shared/cn-hero";

/** Blue chrome — new chat messages. */
export const TOAST_CLASS_NEW_MESSAGE = cnHero(
  "!border-0 !bg-blue-500 !text-white shadow-md",
  "[&_[data-title]]:!text-white [&_[data-description]]:!text-white/90",
  "[&_[data-icon]]:!text-white [&_[data-close-button]]:!text-white/80",
);

/** Earth ink + spotlight cream — new connections, marketplace ink badge. */
export const TOAST_CLASS_CONNECTION = cnHero(
  "!border-0 !bg-[#122120] !text-[#F8FFCB] shadow-md ring-1 ring-[#F8FFCB]/35 dark:!ring-[#F8FFCB]/40",
  "[&_[data-title]]:!text-[#F8FFCB] [&_[data-description]]:!text-[#F8FFCB]/85",
  "[&_[data-icon]]:!text-[#F8FFCB] [&_[data-close-button]]:!text-[#F8FFCB]/75",
);

/** Emerald chrome — positive jobseeker / hiring feedback. */
export const TOAST_CLASS_JOBSEEKER = cnHero(
  "!border-0 !bg-emerald-600 !text-white shadow-md",
  "[&_[data-title]]:!text-white [&_[data-description]]:!text-white/90",
  "[&_[data-icon]]:!text-white [&_[data-close-button]]:!text-white/80",
);

export interface BrandedToastOptions extends ExternalToast {
  description?: string;
}

export function toastChatNotice(title: string, options?: BrandedToastOptions) {
  return toast(title, { ...options, className: TOAST_CLASS_NEW_MESSAGE });
}

export function toastConnectionNotice(title: string, options?: BrandedToastOptions) {
  return toast(title, { ...options, className: TOAST_CLASS_CONNECTION });
}

export function toastJobseekerNotice(title: string, options?: BrandedToastOptions) {
  return toast(title, { ...options, className: TOAST_CLASS_JOBSEEKER });
}
