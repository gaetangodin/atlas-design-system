/**
 * usePlaygroundShowcase — owns every piece of state the gallery needs.
 *
 * Components below the page receive props. They never call hooks.
 * The dev reading this file gets the showcase contract:
 *  - `items` is the gallery navigation list
 *  - `isLoading` / `isEmpty` / `hasNextPage` / `error` are the four
 *    standard list-page states (always present, hardcoded here)
 *  - every callback is named after the event ("on*") not its
 *    implementation
 */

import { useState, type FormEvent } from "react";
import { useDisclosure } from "@atlas/design-system";
import { toast } from "@atlas/design-system";
import {
  PLAYGROUND_NAV,
  PROGRESS_MAX,
  PROGRESS_MIN,
  PROGRESS_STEP,
} from "../constants/playground.constants";
import { clampProgress } from "../utils/playground.utils";
import type { PlaygroundNavItem } from "../types/playground.types";

const INITIAL_PROGRESS = 60;
const INITIAL_TAGS = ["design", "tokens"];

/** Toast handle from `@atlas/design-system`. We only use a thin slice. */
type ToastApi = {
  show: () => void;
  success: () => void;
  warning: () => void;
  error: () => void;
  withAction: () => void;
  dismissed: () => void;
};

function buildToastApi(): ToastApi {
  return {
    show: () => toast("Plain toast"),
    success: () =>
      toast.success("Saved", { description: "Profile updated." }),
    warning: () =>
      toast.warning("Heads up", { description: "Quota at 90%." }),
    error: () =>
      toast.error("Failed", { description: "Network error." }),
    withAction: () =>
      toast("Undo delete?", {
        action: { label: "Undo", onClick: () => toast.success("Restored") },
      }),
    dismissed: () => toast("Dismissed"),
  };
}

export function usePlaygroundShowcase() {
  /* ----- inputs / form state ----- */
  const [progress, setProgress] = useState(INITIAL_PROGRESS);
  const [tags, setTags] = useState<string[]>(INITIAL_TAGS);
  const [otp, setOtp] = useState("");

  /* ----- shell sub-states (sidebar + bottom nav demos) ----- */
  const [activeShellNavId, setActiveShellNavId] = useState("home");
  const [activeBottomNavId, setActiveBottomNavId] = useState("home");

  /* ----- overlay disclosures ----- */
  const modal = useDisclosure();
  const drawer = useDisclosure();
  const alertModal = useDisclosure();

  const toasts = buildToastApi();

  /* ----- progress callbacks ----- */
  function onProgressIncrement(): void {
    setProgress((p) => clampProgress(p + PROGRESS_STEP));
  }
  function onProgressDecrement(): void {
    setProgress((p) => clampProgress(p - PROGRESS_STEP));
  }

  /* ----- tag + otp callbacks ----- */
  function onTagsChange(next: string[]): void {
    setTags(next);
  }
  function onOtpChange(next: string): void {
    setOtp(next);
  }

  /* ----- shell callbacks ----- */
  function onShellNavSelect(id: string): void {
    setActiveShellNavId(id);
  }
  function onBottomNavSelect(id: string): void {
    setActiveBottomNavId(id);
  }

  /* ----- form / file ----- */
  function onSettingsFormSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    toast.success("Form submitted");
  }
  function onFilesSelect(files: File[]): void {
    toast.info(`${files.length} file(s) selected`);
  }

  /* ----- overlay confirm callbacks ----- */
  function onWorkspaceRenameConfirm(): void {
    toast.success("Renamed");
  }
  function onWorkspaceDeleteConfirm(): void {
    toast.success("Deleted (demo)");
  }

  /* ----- toast triggers ----- */
  function onPlainToastTrigger(): void {
    toasts.show();
  }
  function onSuccessToastTrigger(): void {
    toasts.success();
  }
  function onWarningToastTrigger(): void {
    toasts.warning();
  }
  function onErrorToastTrigger(): void {
    toasts.error();
  }
  function onActionToastTrigger(): void {
    toasts.withAction();
  }
  function onBannerDismiss(): void {
    toasts.dismissed();
  }

  /* ----- contract ----- */
  const items: PlaygroundNavItem[] = [...PLAYGROUND_NAV];

  return {
    // data
    items,

    // states — always present, even though hardcoded
    isLoading: false as const,
    isEmpty: items.length === 0,
    hasNextPage: false as const,
    error: null as string | null,

    // bounds (for components rendering the slider/progress UI)
    progressMin: PROGRESS_MIN,
    progressMax: PROGRESS_MAX,

    // input values
    progress,
    tags,
    otp,

    // shell active ids
    activeShellNavId,
    activeBottomNavId,

    // overlay disclosures
    modalIsOpen: modal.isOpen,
    onModalOpen: modal.onOpen,
    onModalOpenChange: modal.onOpenChange,

    drawerIsOpen: drawer.isOpen,
    onDrawerOpen: drawer.onOpen,
    onDrawerOpenChange: drawer.onOpenChange,

    alertModalIsOpen: alertModal.isOpen,
    onAlertModalOpen: alertModal.onOpen,
    onAlertModalOpenChange: alertModal.onOpenChange,

    // callbacks — named after events, not implementations
    onProgressIncrement,
    onProgressDecrement,
    onTagsChange,
    onOtpChange,
    onShellNavSelect,
    onBottomNavSelect,
    onSettingsFormSubmit,
    onFilesSelect,
    onWorkspaceRenameConfirm,
    onWorkspaceDeleteConfirm,
    onPlainToastTrigger,
    onSuccessToastTrigger,
    onWarningToastTrigger,
    onErrorToastTrigger,
    onActionToastTrigger,
    onBannerDismiss,
  };
}

export type PlaygroundShowcase = ReturnType<typeof usePlaygroundShowcase>;
