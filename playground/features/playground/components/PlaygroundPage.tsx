/**
 * PlaygroundPage — the only component in this feature that calls a hook.
 *
 * It owns all data, distributes it to per-section components as props,
 * and renders the standard four states (loading / error / empty / ready).
 * Sections below receive props and never call hooks themselves.
 */

import { Toaster } from "@atlas/design-system";
import { usePlaygroundShowcase } from "../hooks/usePlaygroundShowcase";
import { PlaygroundShell } from "./PlaygroundShell";
import { PlaygroundEmptyState } from "./PlaygroundEmptyState";
import { PlaygroundPageSkeleton } from "./PlaygroundPageSkeleton";
import { FoundationsSection } from "./sections/FoundationsSection";
import { ShellChromeSection } from "./sections/ShellChromeSection";
import { TopBarSection } from "./sections/TopBarSection";
import { RecruitmentSection } from "./sections/RecruitmentSection";
import { ButtonsSection } from "./sections/ButtonsSection";
import { CardsSection } from "./sections/CardsSection";
import { BadgesSection } from "./sections/BadgesSection";
import { InputsSection } from "./sections/InputsSection";
import { PickersSection } from "./sections/PickersSection";
import { FormsSection } from "./sections/FormsSection";
import { FileUploadSection } from "./sections/FileUploadSection";
import { DatesSection } from "./sections/DatesSection";
import { FeedbackSection } from "./sections/FeedbackSection";
import { BannersSection } from "./sections/BannersSection";
import { DisplaySection } from "./sections/DisplaySection";
import { DescriptionListSection } from "./sections/DescriptionListSection";
import { TimelineSection } from "./sections/TimelineSection";
import { EmptyStateSection } from "./sections/EmptyStateSection";
import { LayoutSection } from "./sections/LayoutSection";
import { NavigationSection } from "./sections/NavigationSection";
import { ShellsSection } from "./sections/ShellsSection";
import { OverlaysSection } from "./sections/OverlaysSection";
import { TableSection } from "./sections/TableSection";
import { ChartsSection } from "./sections/ChartsSection";
import { CarouselSection } from "./sections/CarouselSection";

function ShowcaseError({ message }: { message: string }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <div className="max-w-md rounded-lg border border-destructive/30 bg-destructive/5 p-6 text-center">
        <p className="font-semibold text-destructive">Showcase failed to load</p>
        <p className="mt-1 text-sm text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}

export function PlaygroundPage() {
  const showcase = usePlaygroundShowcase();

  if (showcase.isLoading) return <PlaygroundPageSkeleton />;
  if (showcase.error) return <ShowcaseError message={showcase.error} />;
  if (showcase.isEmpty) return <PlaygroundEmptyState />;

  return (
    <PlaygroundShell navItems={showcase.items} version="v0.1.0">
      <Toaster />
      <div className="space-y-12 lg:space-y-14">
        <FoundationsSection />
        <ShellChromeSection />
        <TopBarSection />
        <RecruitmentSection />
        <ButtonsSection />
        <CardsSection />
        <BadgesSection />
        <InputsSection
          otp={showcase.otp}
          tags={showcase.tags}
          onOtpChange={showcase.onOtpChange}
          onTagsChange={showcase.onTagsChange}
        />
        <PickersSection />
        <FormsSection onSettingsFormSubmit={showcase.onSettingsFormSubmit} />
        <FileUploadSection onFilesSelect={showcase.onFilesSelect} />
        <DatesSection />
        <FeedbackSection
          progress={showcase.progress}
          onProgressDecrement={showcase.onProgressDecrement}
          onProgressIncrement={showcase.onProgressIncrement}
        />
        <BannersSection
          onBannerDismiss={showcase.onBannerDismiss}
          onPlainToastTrigger={showcase.onPlainToastTrigger}
          onSuccessToastTrigger={showcase.onSuccessToastTrigger}
          onWarningToastTrigger={showcase.onWarningToastTrigger}
          onErrorToastTrigger={showcase.onErrorToastTrigger}
          onActionToastTrigger={showcase.onActionToastTrigger}
        />
        <DisplaySection />
        <DescriptionListSection />
        <TimelineSection />
        <EmptyStateSection />
        <LayoutSection />
        <NavigationSection />
        <ShellsSection
          activeShellNavId={showcase.activeShellNavId}
          activeBottomNavId={showcase.activeBottomNavId}
          onShellNavSelect={showcase.onShellNavSelect}
          onBottomNavSelect={showcase.onBottomNavSelect}
        />
        <OverlaysSection
          modalIsOpen={showcase.modalIsOpen}
          onModalOpen={showcase.onModalOpen}
          onModalOpenChange={showcase.onModalOpenChange}
          drawerIsOpen={showcase.drawerIsOpen}
          onDrawerOpen={showcase.onDrawerOpen}
          onDrawerOpenChange={showcase.onDrawerOpenChange}
          alertModalIsOpen={showcase.alertModalIsOpen}
          onAlertModalOpen={showcase.onAlertModalOpen}
          onAlertModalOpenChange={showcase.onAlertModalOpenChange}
          onWorkspaceRenameConfirm={showcase.onWorkspaceRenameConfirm}
          onWorkspaceDeleteConfirm={showcase.onWorkspaceDeleteConfirm}
        />
        <TableSection />
        <ChartsSection />
        <CarouselSection />
      </div>
    </PlaygroundShell>
  );
}
