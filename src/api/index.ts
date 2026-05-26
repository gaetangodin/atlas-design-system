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
