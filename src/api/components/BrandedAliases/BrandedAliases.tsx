/**
 * BrandedAliases — re-exports every Xeekrs `BrandedX` component name
 * under the Atlas equivalent. This preserves import-site backwards
 * compatibility for code originally written against
 * `Xeekrsmainapp/src/components/heroui-branded/*`.
 *
 * Every Atlas component listed here IS the same component as its
 * `BrandedX` source — Atlas's `Card` is a direct port of `BrandedCard`,
 * Atlas's `Button` is a direct port of `BrandedButton`, etc. The
 * custom styling and behavior are identical; only the export name
 * differs.
 *
 * If you're writing new code, prefer the Atlas names (no `Branded`
 * prefix). These aliases exist so the v0.6 import doesn't break any
 * pre-existing call sites in apps migrating from the Xeekrs library.
 */

import { Button } from "../Button";
import { Card, CardHeader, CardBody, CardFooter } from "../Card";
import { Chip } from "../Chip";
import { Avatar, AvatarGroup } from "../Avatar";
import {
  AvatarToned, AvatarRing, AvatarSquare, AvatarHex,
  GroupAvatar, IdentityPill, AvatarStack,
} from "../AvatarVariants";
import { StatusAvatar } from "../StatusAvatar";
import { Badge } from "../Badge";
import { Divider } from "../Divider";
import { Spacer } from "../Spacer";
import { Link } from "../Link";
import { Image } from "../Image";
import { Alert } from "../Alert";
import { Spinner } from "../Spinner";
import { Progress, CircularProgress } from "../Progress";
import { Skeleton } from "../Skeleton";
import { Select, SelectItem, SelectSection } from "../Select";
import { Autocomplete, AutocompleteItem, AutocompleteSection } from "../Autocomplete";
import { Checkbox, CheckboxGroup } from "../Checkbox";
import { Input, HEROUI_OUTSIDE_LABEL_PLACEHOLDER } from "../Input";
import { Textarea } from "../Textarea";
import { Form } from "../Form";
import { ButtonGroup } from "../ButtonGroup";
import { Ripple } from "../Ripple";
import { Pagination } from "../Pagination";
import { Breadcrumbs, BreadcrumbItem } from "../Breadcrumbs";
import { Accordion, AccordionItem } from "../Accordion";
import { ScrollShadow } from "../ScrollShadow";
import { Menu, MenuItem, MenuSection } from "../Menu";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem,
  NavbarMenu, NavbarMenuItem, NavbarMenuToggle,
} from "../Navbar";
import { Tooltip } from "../Tooltip";
import { Popover, PopoverTrigger, PopoverContent } from "../Popover";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "../Modal";
import { PostingStepper } from "../PostingStepper";
import { EntryPathCards } from "../EntryPathCards";
import { TemplateCard } from "../TemplateCard";
import { TagsInput } from "../TagsInput";
import { InlineAiAssist } from "../InlineAiAssist";
import { QualityScorePanel } from "../QualityScorePanel";
import { InternalNotesField } from "../InternalNotesField";
import { AiGeneratedBadge } from "../AiGeneratedBadge";
import { Tabs, Tab } from "../Tabs";
import {
  Calendar, RangeCalendar, DatePicker, DateRangePicker, DateInput, TimeInput,
} from "../Calendar";
import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
} from "../Table";

/* ────────────────────── Display & data ──────────────────────────── */

export const BrandedAvatar = Avatar;
export const BrandedAvatarGroup = AvatarGroup;
export const BrandedAvatarStack = AvatarStack;
export const BrandedBadge = Badge;
export const BrandedDivider = Divider;
export const BrandedSpacer = Spacer;
export const BrandedLink = Link;
export const BrandedImage = Image;

/* Avatar variants */
export const BrandedAvatarToned = AvatarToned;
export const BrandedAvatarRing = AvatarRing;
export const BrandedAvatarSquare = AvatarSquare;
export const BrandedAvatarHex = AvatarHex;
export const BrandedGroupAvatar = GroupAvatar;
export const BrandedIdentityPill = IdentityPill;
export const BrandedAvatarWithStatus = StatusAvatar;

/* ────────────────────── Surfaces & containers ───────────────────── */

export const BrandedButton = Button;
export const BrandedCard = Card;
export const BrandedCardHeader = CardHeader;
export const BrandedCardBody = CardBody;
export const BrandedCardFooter = CardFooter;
/**
 * Atlas `Card` accepts `variant="hover-lift"` directly; `BrandedHoverLiftCard`
 * is preserved as a name-only alias for migration ergonomics. New code
 * should pass the variant prop instead.
 */
export const BrandedHoverLiftCard = Card;
export const BrandedChip = Chip;

/* ────────────────────── Forms ───────────────────────────────────── */

export const BrandedInput = Input;
export const BrandedTextarea = Textarea;
export const BrandedSelect = Select;
export const BrandedSelectItem = SelectItem;
export const BrandedSelectSection = SelectSection;
export const BrandedAutocomplete = Autocomplete;
export const BrandedAutocompleteItem = AutocompleteItem;
export const BrandedAutocompleteSection = AutocompleteSection;
export const BrandedCheckbox = Checkbox;
export const BrandedCheckboxGroup = CheckboxGroup;
export const BrandedForm = Form;
export const BrandedButtonGroup = ButtonGroup;
export const BrandedRipple = Ripple;

/* ────────────────────── Feedback ────────────────────────────────── */

export const BrandedAlert = Alert;
export const BrandedSpinner = Spinner;
export const BrandedProgress = Progress;
export const BrandedCircularProgress = CircularProgress;
export const BrandedSkeleton = Skeleton;

/* ────────────────────── Nav & navigation ────────────────────────── */

export const BrandedPagination = Pagination;
export const BrandedBreadcrumbs = Breadcrumbs;
export const BrandedBreadcrumbItem = BreadcrumbItem;
export const BrandedAccordion = Accordion;
export const BrandedAccordionItem = AccordionItem;
export const BrandedScrollShadow = ScrollShadow;
export const BrandedMenu = Menu;
export const BrandedMenuItem = MenuItem;
export const BrandedMenuSection = MenuSection;
export const BrandedNavbar = Navbar;
export const BrandedNavbarBrand = NavbarBrand;
export const BrandedNavbarContent = NavbarContent;
export const BrandedNavbarItem = NavbarItem;
export const BrandedNavbarMenu = NavbarMenu;
export const BrandedNavbarMenuItem = NavbarMenuItem;
export const BrandedNavbarMenuToggle = NavbarMenuToggle;
export const BrandedTabs = Tabs;
export const BrandedTab = Tab;

/* ────────────────────── Overlays ────────────────────────────────── */

export const BrandedTooltip = Tooltip;
export const BrandedPopover = Popover;
export const BrandedPopoverTrigger = PopoverTrigger;
export const BrandedPopoverContent = PopoverContent;
export const BrandedModal = Modal;
export const BrandedModalContent = ModalContent;
export const BrandedModalHeader = ModalHeader;
export const BrandedModalBody = ModalBody;
export const BrandedModalFooter = ModalFooter;

/* ────────────────────── Dates ───────────────────────────────────── */

export const BrandedDateInput = DateInput;
export const BrandedDatePicker = DatePicker;
export const BrandedDateRangePicker = DateRangePicker;
export const BrandedTimeInput = TimeInput;
export const BrandedCalendar = Calendar;
export const BrandedRangeCalendar = RangeCalendar;

/* ────────────────────── Data — Table ────────────────────────────── */

export const BrandedTable = Table;
export const BrandedTableHeader = TableHeader;
export const BrandedTableColumn = TableColumn;
export const BrandedTableBody = TableBody;
export const BrandedTableRow = TableRow;
export const BrandedTableCell = TableCell;

/* ────────────────────── Posting flow ────────────────────────────── */

export const BrandedPostingStepper = PostingStepper;
export const BrandedEntryPathCard = EntryPathCards;
export const BrandedTemplateCard = TemplateCard;
export const BrandedSkillTagInput = TagsInput;
export const BrandedInlineAiAssist = InlineAiAssist;
export const BrandedQualityScorePanel = QualityScorePanel;
export const BrandedInternalNotesField = InternalNotesField;
export const BrandedAiGeneratedBadge = AiGeneratedBadge;

/* ────────────────────── Misc re-exports ─────────────────────────── */

export { HEROUI_OUTSIDE_LABEL_PLACEHOLDER };
export { cnHero } from "../../../shared/cn-hero";
