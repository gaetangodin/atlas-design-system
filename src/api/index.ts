// API layer — public React component surface.

// Brand
export { BrandLogo } from "./components/BrandLogo";
export type { BrandLogoProps, BrandLogoVariant } from "./components/BrandLogo";
export { BrandSwatch } from "./components/BrandSwatch";
export type { BrandSwatchProps } from "./components/BrandSwatch";
export { BrandBoard } from "./components/BrandBoard";
export type { BrandBoardProps } from "./components/BrandBoard";
export { ColorScale } from "./components/ColorScale";
export type { ColorScaleProps } from "./components/ColorScale";
export { TypographyScale } from "./components/TypographyScale";
export type {
  TypographyScaleProps,
  TypographyScaleVariant,
} from "./components/TypographyScale";

// Core
export { Button } from "./components/Button";
export { Input, HEROUI_OUTSIDE_LABEL_PLACEHOLDER } from "./components/Input";
export { Textarea } from "./components/Textarea";
export { Card, CardBody, CardHeader, CardFooter } from "./components/Card";
export { Badge } from "./components/Badge";
// Chip — new in batch 2. Atlas's Badge IS HeroUI's Chip under the hood;
// see docs/MIGRATION-CONFLICTS.md for the human-reconciliation note.
export { Chip } from "./components/Chip";
export type { ChipProps } from "./components/Chip";
export { Link } from "./components/Link";

// Forms
export { Switch } from "./components/Switch";
export { Checkbox, CheckboxGroup } from "./components/Checkbox";
export { Radio, RadioGroup } from "./components/Radio";
export { Slider } from "./components/Slider";
export { NumberInput } from "./components/NumberInput";
export { InputOtp } from "./components/InputOtp";
export { Select, SelectItem, SelectSection } from "./components/Select";
export { Autocomplete, AutocompleteItem, AutocompleteSection } from "./components/Autocomplete";
export { Form } from "./components/Form";
export { TagsInput } from "./components/TagsInput";
export { FileUpload } from "./components/FileUpload";
export { Toggle } from "./components/Toggle";
export { ColorPicker } from "./components/ColorPicker";

// Overlays
export {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure,
} from "./components/Modal";
export { AlertModal } from "./components/AlertModal";
export {
  Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter,
} from "./components/Drawer";
export { Popover, PopoverTrigger, PopoverContent } from "./components/Popover";
export {
  Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection,
} from "./components/Dropdown";
export { Tooltip } from "./components/Tooltip";
export { Listbox, ListboxItem, ListboxSection } from "./components/Listbox";
export { Menu, MenuItem, MenuSection } from "./components/Menu";
export {
  BottomSheet, BottomSheetTrigger, BottomSheetPortal, BottomSheetClose,
  BottomSheetOverlay, BottomSheetContent, BottomSheetTitle, BottomSheetDescription,
} from "./components/BottomSheet";

// Display
export { Avatar, AvatarGroup } from "./components/Avatar";
export { StatusAvatar } from "./components/StatusAvatar";
export {
  AvatarToned, AvatarRing, AvatarSquare, AvatarHex,
  GroupAvatar, IdentityPill, AvatarStack,
} from "./components/AvatarVariants";
export { User } from "./components/User";
export { Image } from "./components/Image";
export { Code, Kbd, Snippet } from "./components/Code";
export { Divider } from "./components/Divider";
export { Spacer } from "./components/Spacer";
export { ButtonGroup } from "./components/ButtonGroup";
export { ScrollShadow } from "./components/ScrollShadow";
export { StatCard } from "./components/StatCard";
export { EmptyState } from "./components/EmptyState";
export { ErrorState } from "./components/ErrorState";
export { NotificationBadge } from "./components/NotificationBadge";
export { DescriptionList } from "./components/DescriptionList";
export { Timeline } from "./components/Timeline";
export { Ripple } from "./components/Ripple";

// Layout
export { Stack, HStack, VStack } from "./components/Stack";
export { Container } from "./components/Container";

// Feedback
export { Spinner } from "./components/Spinner";
export { Skeleton } from "./components/Skeleton";
export { Progress, CircularProgress } from "./components/Progress";
export { Alert } from "./components/Alert";
export { Banner } from "./components/Banner";
export { Toaster, toast } from "./components/Toaster";

// Navigation
export { Tabs, Tab } from "./components/Tabs";
export { Accordion, AccordionItem } from "./components/Accordion";
export { Pagination, PaginationItem, PaginationCursor } from "./components/Pagination";
export { Breadcrumbs, BreadcrumbItem } from "./components/Breadcrumbs";
export {
  Navbar, NavbarBrand, NavbarContent, NavbarItem,
  NavbarMenu, NavbarMenuItem, NavbarMenuToggle,
} from "./components/Navbar";
export { Sidebar } from "./components/Sidebar";
export { BottomNav } from "./components/BottomNav";
export { Stepper } from "./components/Stepper";
export { VerticalTabs, VerticalTab } from "./components/VerticalTabs";

// Shell & chrome (batch 3 + 3.5)
export { TopBar } from "./components/TopBar";
export type { TopBarProps } from "./components/TopBar";
export { MobileTopBar } from "./components/MobileTopBar";
export type { MobileTopBarProps } from "./components/MobileTopBar";
export { MegaSearch } from "./components/MegaSearch";
export type { MegaSearchProps } from "./components/MegaSearch";
export { PageBack } from "./components/PageBack";
export type { PageBackProps, PageBackVariant } from "./components/PageBack";
export { SubNav } from "./components/SubNav";
export type { SubNavProps, SubNavPosition } from "./components/SubNav";
export { AccountMenu } from "./components/AccountMenu";
export type { AccountMenuProps, AccountMenuItem } from "./components/AccountMenu";
export { SiteSwitcherTrigger } from "./components/SiteSwitcherTrigger";
export type {
  SiteSwitcherTriggerProps,
  SiteSwitcherTriggerVariant,
} from "./components/SiteSwitcherTrigger";
export { DisclosureBar } from "./components/DisclosureBar";
export type { DisclosureBarProps, DisclosureBarVariant } from "./components/DisclosureBar";
export { ConsentAlertBar } from "./components/ConsentAlertBar";
export type { ConsentAlertBarProps, ConsentPerspective } from "./components/ConsentAlertBar";
export { BrowseHubCard } from "./components/BrowseHubCard";
export type { BrowseHubCardProps, BrowseHubCardVariant } from "./components/BrowseHubCard";

// Posting flow primitives (batch 5)
export { AiGeneratedBadge } from "./components/AiGeneratedBadge";
export type {
  AiGeneratedBadgeProps,
  AiGeneratedBadgeTone,
} from "./components/AiGeneratedBadge";
export { EntryPathCards } from "./components/EntryPathCards";
export type { EntryPathCardsProps, EntryPathOption } from "./components/EntryPathCards";
export { TemplateCard } from "./components/TemplateCard";
export type { TemplateCardProps } from "./components/TemplateCard";
export { QualityScorePanel } from "./components/QualityScorePanel";
export type {
  QualityScorePanelProps,
  QualityIssue,
  QualityIssueStatus,
} from "./components/QualityScorePanel";
export { InternalNotesField } from "./components/InternalNotesField";
export type { InternalNotesFieldProps } from "./components/InternalNotesField";
export { InlineAiAssist } from "./components/InlineAiAssist";
export type { InlineAiAssistProps, AiAssistSuggestion } from "./components/InlineAiAssist";

// Brand polish (batch 7)
export { GradientToken } from "./components/GradientToken";
export type { GradientTokenProps } from "./components/GradientToken";
export { VoiceAndTone } from "./components/VoiceAndTone";
export type { VoiceAndToneProps, VoicePair } from "./components/VoiceAndTone";

// Final batch — remaining tractable items
export { PostingStepper } from "./components/PostingStepper";
export type { PostingStepperProps } from "./components/PostingStepper";
export { SearchToolbar } from "./components/SearchToolbar";
export type { SearchToolbarProps } from "./components/SearchToolbar";
export { CoverImageHero } from "./components/CoverImageHero";
export type { CoverImageHeroProps, CoverImageHeroTone } from "./components/CoverImageHero";
export { ProfileCardToolbar } from "./components/ProfileCardToolbar";
export type { ProfileCardToolbarProps } from "./components/ProfileCardToolbar";
export { ProfileIdentityWell } from "./components/ProfileIdentityWell";
export type { ProfileIdentityWellProps } from "./components/ProfileIdentityWell";
export { ApplicantDocumentMiniCard } from "./components/ApplicantDocumentMiniCard";
export type {
  ApplicantDocumentMiniCardProps,
  DocumentKind,
} from "./components/ApplicantDocumentMiniCard";
export { ContactInfoButton } from "./components/ContactInfoButton";
export type {
  ContactInfoButtonProps,
  ContactInfoAudience,
} from "./components/ContactInfoButton";
export { AnonymousProfileCard } from "./components/AnonymousProfileCard";
export type { AnonymousProfileCardProps } from "./components/AnonymousProfileCard";
export { BulletinRow } from "./components/BulletinRow";
export type { BulletinRowProps, BulletinTone } from "./components/BulletinRow";
export { PromotionCard } from "./components/PromotionCard";
export type { PromotionCardProps, PromotionCardTone } from "./components/PromotionCard";
export { FilterSection } from "./components/FilterSection";
export type { FilterSectionProps } from "./components/FilterSection";
export { AlertBar } from "./components/AlertBar";
export type { AlertBarProps, AlertBarTone } from "./components/AlertBar";
export { ColumnSelector } from "./components/ColumnSelector";
export type { ColumnSelectorProps, ColumnDefinition } from "./components/ColumnSelector";
export {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./components/ResizablePanel";
export type { ResizableHandleProps } from "./components/ResizablePanel";

// Route page-shell layouts (batch — Routes, Dashboards, Modals, Compositions)
export { BoardRoute } from "./components/BoardRoute";
export type { BoardRouteProps } from "./components/BoardRoute";
export { DetailRoute } from "./components/DetailRoute";
export type { DetailRouteProps } from "./components/DetailRoute";
export { WizardRoute } from "./components/WizardRoute";
export type { WizardRouteProps } from "./components/WizardRoute";
export { MobileRoute } from "./components/MobileRoute";
export type { MobileRouteProps } from "./components/MobileRoute";
export { ProfileRoute } from "./components/ProfileRoute";
export type { ProfileRouteProps } from "./components/ProfileRoute";

// Named Routes — thin wrappers over the generic shells.
export * from "./components/NamedRoutes";

// Dashboards (slot-based shells).
export {
  AnalyticsDashboard,
  CoachingDashboard,
  AdminPanel,
  JobExplorer,
  CareerHubDashboard,
} from "./components/Dashboards";
export type { DashboardProps } from "./components/Dashboards";

// Domain modals.
export { IntroVideoDialog } from "./components/IntroVideoDialog";
export type { IntroVideoDialogProps } from "./components/IntroVideoDialog";
export { VideoInterviewModal } from "./components/VideoInterviewModal";
export type { VideoInterviewModalProps } from "./components/VideoInterviewModal";
export { ApplicationModal } from "./components/ApplicationModal";
export type { ApplicationModalProps } from "./components/ApplicationModal";
export { CreateProjectWizard } from "./components/CreateProjectWizard";
export type { CreateProjectWizardProps } from "./components/CreateProjectWizard";

// Specialized recruitment compositions.
export {
  InterviewEventRecap,
  ApplicantReviewRecap,
  ShareCandidatePreviewCard,
} from "./components/RecruitmentRecaps";
export type {
  InterviewEventRecapProps,
  ApplicantReviewRecapProps,
  ShareCandidatePreviewCardProps,
} from "./components/RecruitmentRecaps";

// Messaging compositions.
export {
  ChatOpportunityCard,
  GroupChatAvatar,
  CannedMessageSelector,
  ClientTouchpointCards,
} from "./components/MessagingPatterns";
export type {
  ChatOpportunityCardProps,
  GroupChatAvatarProps,
  GroupChatAvatarMember,
  CannedMessageSelectorProps,
  CannedTemplate,
  ClientTouchpointCardsProps,
  ClientTouchpoint,
  TouchpointKind,
} from "./components/MessagingPatterns";

// Marketing templates.
export {
  MarketingHero,
  SocialPostTemplate,
  DisplayAdTemplate,
  CampaignSet,
} from "./components/MarketingTemplates";
export type {
  MarketingHeroProps,
  MarketingHeroTone,
  SocialPostTemplateProps,
  DisplayAdTemplateProps,
  CampaignSetProps,
  CampaignTile,
} from "./components/MarketingTemplates";

// Recruitment primitives (batch 4)
export {
  MatchDiamond,
  matchLevelFromRequiredOverlap,
  matchLevelLabel,
  matchLevelPillClass,
} from "./components/MatchDiamond";
export type { MatchDiamondProps, MatchLevel } from "./components/MatchDiamond";
export { ReadinessBadge, readinessStageClassName } from "./components/ReadinessBadge";
export type { ReadinessBadgeProps, ReadinessStage } from "./components/ReadinessBadge";
export { QuickActionButton } from "./components/QuickActionButton";
export type { QuickActionLabelMode } from "./components/QuickActionButton";
export { InterviewPipelineStepper } from "./components/InterviewPipelineStepper";
export type {
  InterviewPipelineStepperProps,
  PipelineStage,
  PipelineState,
  PipelineClosureRow,
  PipelineClosureTone,
} from "./components/InterviewPipelineStepper";

// Dates
export {
  Calendar, RangeCalendar, DatePicker, DateRangePicker, DateInput, TimeInput,
} from "./components/Calendar";

// Data
export {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
} from "./components/Table";
export { SortableTable } from "./components/SortableTable";
export { DataGrid } from "./components/DataGrid";
export { TreeView } from "./components/TreeView";

// Charts
export {
  BarChart, LineChart, AreaChart, DonutChart, Sparkline, BubbleChart,
} from "./components/Charts";

// Media
export { Carousel } from "./components/Carousel";

// Pattern composites — cards
export { ProfileCard } from "./components/ProfileCard";
export { PricingCard } from "./components/PricingCard";
export { BlogPostCard } from "./components/BlogPostCard";

// Pattern composites — sections
export { Hero } from "./components/Hero";
export { FeatureGrid } from "./components/FeatureGrid";
export { PricingTable } from "./components/PricingTable";
export { FAQ } from "./components/FAQ";
export { Testimonials } from "./components/Testimonials";
export { Footer } from "./components/Footer";
export { NewsletterCTA } from "./components/NewsletterCTA";
export { TeamGrid } from "./components/TeamGrid";

// Pattern composites — app shells
export { AuthLayout } from "./components/AuthLayout";
export { DashboardShell } from "./components/DashboardShell";
export { SettingsLayout } from "./components/SettingsLayout";

// Provider
export { AtlasProvider } from "../infrastructure/heroui";
export type { AtlasProviderProps } from "../infrastructure/heroui";

// Type re-exports
export type {
  ButtonProps, InputProps, TextareaProps, CardProps, BadgeProps,
} from "../contracts";
export type { SwitchProps } from "./components/Switch";
export type { CheckboxProps, CheckboxGroupProps } from "./components/Checkbox";
export type { RadioProps, RadioGroupProps } from "./components/Radio";
export type { SliderProps } from "./components/Slider";
export type { NumberInputProps } from "./components/NumberInput";
export type { InputOtpProps } from "./components/InputOtp";
export type { SelectProps } from "./components/Select";
export type { AutocompleteProps } from "./components/Autocomplete";
export type { FormProps } from "./components/Form";
export type { TagsInputProps } from "./components/TagsInput";
export type { FileUploadProps } from "./components/FileUpload";
export type { ToggleProps } from "./components/Toggle";
export type { ColorPickerProps } from "./components/ColorPicker";
export type { ModalProps } from "./components/Modal";
export type { AlertModalProps } from "./components/AlertModal";
export type { DrawerProps } from "./components/Drawer";
export type { PopoverProps } from "./components/Popover";
export type { DropdownProps, DropdownMenuProps } from "./components/Dropdown";
export type { TooltipProps } from "./components/Tooltip";
export type { ListboxProps } from "./components/Listbox";
export type { MenuProps } from "./components/Menu";
export type {
  BottomSheetRootProps, BottomSheetContentProps,
} from "./components/BottomSheet";
export type { AvatarProps, AvatarGroupProps } from "./components/Avatar";
export type { StatusAvatarProps, StatusAvatarStatus } from "./components/StatusAvatar";
export type { AvatarTone, GroupAvatarMember, IdentityPillProps, AvatarStackItem } from "./components/AvatarVariants";
export type { UserProps } from "./components/User";
export type { ImageProps } from "./components/Image";
export type { CodeProps, KbdProps, SnippetProps } from "./components/Code";
export type { DividerProps } from "./components/Divider";
export type { SpacerProps } from "./components/Spacer";
export type { ButtonGroupProps } from "./components/ButtonGroup";
export type { ScrollShadowProps } from "./components/ScrollShadow";
export type { StatCardProps } from "./components/StatCard";
export type { EmptyStateProps } from "./components/EmptyState";
export type { ErrorStateProps } from "./components/ErrorState";
export type { NotificationBadgeProps } from "./components/NotificationBadge";
export type { DescriptionListProps, DescriptionListItem } from "./components/DescriptionList";
export type { TimelineProps, TimelineEvent } from "./components/Timeline";
export type { StackProps } from "./components/Stack";
export type { ContainerProps } from "./components/Container";
export type { SpinnerProps } from "./components/Spinner";
export type { SkeletonProps } from "./components/Skeleton";
export type { ProgressProps, CircularProgressProps } from "./components/Progress";
export type { AlertProps } from "./components/Alert";
export type { BannerProps, BannerTone } from "./components/Banner";
export type { ToasterProps } from "./components/Toaster";
export type { TabsProps } from "./components/Tabs";
export type { AccordionProps } from "./components/Accordion";
export type { PaginationProps } from "./components/Pagination";
export type { BreadcrumbsProps } from "./components/Breadcrumbs";
export type { NavbarProps } from "./components/Navbar";
export type { SidebarProps, SidebarItem } from "./components/Sidebar";
export type { BottomNavProps, BottomNavItem } from "./components/BottomNav";
export type { StepperProps, StepperStep, StepStatus } from "./components/Stepper";
export type { VerticalTabsProps } from "./components/VerticalTabs";
export type {
  CalendarProps, RangeCalendarProps, DatePickerProps,
  DateRangePickerProps, DateInputProps, TimeInputProps,
} from "./components/Calendar";
export type { TableProps } from "./components/Table";
export type { SortableTableProps, SortableTableColumn } from "./components/SortableTable";
export type { DataGridProps, DataGridColumn } from "./components/DataGrid";
export type { TreeViewProps, TreeNode } from "./components/TreeView";
export type {
  BarChartProps, LineChartProps, AreaChartProps,
  DonutChartProps, DonutChartDatum,
  SparklineProps, BubbleChartProps, BubbleChartDatum,
} from "./components/Charts";
export type { CarouselProps } from "./components/Carousel";
export type { LinkProps } from "./components/Link";
export type { ProfileCardProps } from "./components/ProfileCard";
export type { PricingCardProps } from "./components/PricingCard";
export type { BlogPostCardProps } from "./components/BlogPostCard";
export type { HeroProps } from "./components/Hero";
export type { FeatureGridProps, FeatureGridItem } from "./components/FeatureGrid";
export type { PricingTableProps, PricingTableTier } from "./components/PricingTable";
export type { FAQProps, FAQItem } from "./components/FAQ";
export type { TestimonialsProps, Testimonial } from "./components/Testimonials";
export type { FooterProps, FooterColumn } from "./components/Footer";
export type { NewsletterCTAProps } from "./components/NewsletterCTA";
export type { TeamGridProps, TeamMember } from "./components/TeamGrid";
export type { AuthLayoutProps } from "./components/AuthLayout";
export type { DashboardShellProps } from "./components/DashboardShell";
export type { SettingsLayoutProps } from "./components/SettingsLayout";

// ─────────────────────────────────────────────────────────────────────
// v0.4 import — Group A (atoms/wrappers), Group B (domain compositions)
// ─────────────────────────────────────────────────────────────────────

// Group A — small buttons & ratio box
export { ActionButton } from "./components/ActionButton";
export type { ActionButtonProps } from "./components/ActionButton";
export { IconButton } from "./components/IconButton";
export type { IconButtonProps } from "./components/IconButton";
export { SortButton } from "./components/SortButton";
export type { SortButtonProps, SortDirection } from "./components/SortButton";
export { AspectRatio } from "./components/AspectRatio";
export type { AspectRatioProps } from "./components/AspectRatio";

// Group A — side panels
export {
  NotificationsPanel,
  RemindersPanel,
  MessagesPanel,
  RightSidebar,
  WorkspaceTakeoverPanel,
} from "./components/SidePanels";
export type {
  NotificationsPanelProps,
  RemindersPanelProps,
  MessagesPanelProps,
  RightSidebarProps,
  WorkspaceTakeoverPanelProps,
} from "./components/SidePanels";

// Group A — mobile interaction primitives
export {
  MobileMenu,
  MobileSearch,
  MobileSectionTabPicker,
  SwipeHandler,
  PullToRefresh,
} from "./components/MobileBits";
export type {
  MobileMenuProps,
  MobileSearchProps,
  MobileSectionTabPickerOption,
  MobileSectionTabPickerProps,
  SwipeHandlerProps,
  PullToRefreshProps,
} from "./components/MobileBits";

// Group A — page-shape helpers
export {
  PlaceholderPage,
  ProfileSectionCard,
  WorkPageShell,
  BusinessAvatarMark,
} from "./components/PageHelpers";
export type {
  PlaceholderPageProps,
  ProfileSectionCardProps,
  WorkPageShellProps,
  BusinessAvatarMarkProps,
} from "./components/PageHelpers";

// Group A — form extras
export {
  LanguageSwitcher,
  AboutRoleRichTextEditor,
  ResponsibilitiesBulletEditor,
  SupportTicketForm,
} from "./components/FormExtras";
export type {
  LanguageOption,
  LanguageSwitcherProps,
  AboutRoleRichTextEditorProps,
  ResponsibilitiesBulletEditorProps,
  SupportTicketFormProps,
} from "./components/FormExtras";

// Group A — modal extras
export {
  SlideInModal,
  ResourceCreationModal,
  UnsplashImagePicker,
  EmployerOnboardingModal,
  JobSeekerPostingPreviewModal,
  JobPostingReviewRecap,
} from "./components/ModalExtras";
export type {
  SlideInModalProps,
  ResourceCreationModalProps,
  UnsplashImage,
  UnsplashImagePickerProps,
  EmployerOnboardingModalProps,
  JobSeekerPostingPreviewModalProps,
  JobPostingReviewRecapItem,
  JobPostingReviewRecapProps,
} from "./components/ModalExtras";

// Group A — misc primitives
export {
  CollapsibleCard,
  MiniMonthCalendar,
  ResponsiveTabsList,
  TabBar,
} from "./components/MiscPrimitives";
export type {
  CollapsibleCardProps,
  MiniMonthCalendarProps,
  ResponsiveTab,
  ResponsiveTabsListProps,
  TabBarItem,
  TabBarProps,
} from "./components/MiscPrimitives";

// Group B — caseload / staff patterns
export {
  CaseloadCard,
  CaseloadCategoryTable,
  CaseloadTaskRow,
  CaseloadOverviewHubSections,
  CaseworkerOnBehalfBar,
  ProfileQuickView,
  TeamMembersTable,
  LeadsScreen,
  SupportServicesBrowseTile,
} from "./components/CaseloadPatterns";
export type {
  CaseloadCardProps,
  CaseloadCategoryTableProps,
  CaseloadTaskRowProps,
  CaseloadHubSection,
  CaseloadOverviewHubSectionsProps,
  CaseworkerOnBehalfBarProps,
  ProfileQuickViewProps,
  TeamMember as CaseloadTeamMember,
  TeamMembersTableProps,
  LeadsScreenProps,
  SupportServicesBrowseTileProps,
} from "./components/CaseloadPatterns";

// Group B — academy / career hub patterns
export {
  AcademyMyLearningCards,
  AcademyTrainingOfferCta,
  CoachHubPanel,
  CareerHubCard,
  CareerHubProgress,
  CareerHubSidebar,
  HomeSearch,
} from "./components/AcademyPatterns";
export type {
  MyLearningEntry,
  AcademyMyLearningCardsProps,
  AcademyTrainingOfferCtaProps,
  CoachHubPanelProps,
  CareerHubCardProps,
  CareerHubProgressMilestone,
  CareerHubProgressProps,
  CareerHubSidebarItem,
  CareerHubSidebarProps,
  HomeSearchProps,
} from "./components/AcademyPatterns";

// Group B — recruitment + work extras (large surface — barrel re-export)
export * from "./components/RecruitmentExtras";

// Group B — messaging extras
export {
  ChatConnectionReceivedBar,
  ClientInboundConnectionInviteCards,
  StaffConnectionRequestsManageTable,
  MessagesWorkspace,
} from "./components/MessagingExtras";
export type {
  ChatConnectionReceivedBarProps,
  ClientInboundConnectionInviteCardsProps,
  InboundInvite,
  StaffConnectionRequestsManageTableProps,
  ConnectionRequestRow,
  MessagesWorkspaceProps,
} from "./components/MessagingExtras";

// Group B — admin / employer-hub / project view patterns
export {
  AdminConfigPanel,
  CoachboardTasksTab,
  EmployerHubBusinessSwitcher,
  EmployerHubDashboardContent,
  SiteSwitcherModal,
  ProjectOverviewShell,
  ProjectFilesShell,
  ReportsViewShell,
} from "./components/AdminPatterns";
export type {
  AdminConfigSection,
  AdminConfigPanelProps,
  CoachboardTaskRow,
  CoachboardTasksTabProps,
  EmployerHubBusiness,
  EmployerHubBusinessSwitcherProps,
  EmployerHubDashboardContentProps,
  SiteEntry,
  SiteSwitcherModalProps,
  ProjectOverviewShellProps,
  ProjectFileRow,
  ProjectFilesShellProps,
  ReportTile,
  ReportsViewShellProps,
} from "./components/AdminPatterns";

// Group C — Page-suffixed templates (thin wrappers over Route shells).
export * from "./components/NamedPages";

// ─────────────────────────────────────────────────────────────────────
// v0.5 import — full sweep of remaining Xeekrs src/components/ subfolders
// ─────────────────────────────────────────────────────────────────────

export * from "./components/AnnouncementsExtras";
export * from "./components/CandidatesExtras";
export * from "./components/CxFeedPatterns";
export * from "./components/EmployersExtras";
export * from "./components/BrandIcons";
export * from "./components/IncentivesExtras";
export * from "./components/InterviewsExtras";
export * from "./components/MarketplaceExtras";
export * from "./components/JobPostingExtras";
export * from "./components/OnboardingPatterns";
export * from "./components/AccountPatterns";
export * from "./components/RecruitmentOverview";
export * from "./components/ProfileTabsShell";
export * from "./components/RecruitmentWalkthrough";
export * from "./components/ShareOpportunityDialog";
export * from "./components/CommandPalette";
export * from "./components/UiPrimitivesExtra";
export * from "./components/V051Patch";

// ─────────────────────────────────────────────────────────────────────
// v0.6 — heroui-branded aliases, ui/ second-pass primitives, app-layouts,
//        lib helpers, hooks, layout tokens.
// ─────────────────────────────────────────────────────────────────────
export * from "./components/BrandedAliases";
export * from "./components/UiPrimitivesExtraTwo";
export * from "./components/AppPageLayouts";
export * from "./utilities";
export * from "./hooks";

// Layout custom-property tokens (domain layer re-export for convenience).
export { layoutVars, layoutVar } from "../domain/tokens/layoutVars";
export type { LayoutVarKey } from "../domain/tokens/layoutVars";

// v0.6.1 — caseload dashboards + missing employer / caseworker pieces.
export * from "./components/CaseloadDashboards";

// v0.6.2 — final close-out: 30 missing aliases + small new components.
export * from "./components/V062Patch";
