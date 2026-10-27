import {
  LayoutDashboard,
  Users,
  ClipboardList,
  FileText,
  Receipt,
  ListChecks,
  Undo2,
  CalendarClock,
  Truck,
  ShoppingBag,
  Package,
  SlidersHorizontal,
  ArrowLeftRight,
  Landmark,
  BookOpen,
  BarChart3,
  Settings,
  UserCog,
  CreditCard,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  ready: boolean;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

// ready: false means "planned, not built yet" (shown as "Soon").
export const navGroups: NavGroup[] = [
  {
    title: "Overview",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, ready: true },
      { label: "My Tasks", href: "/tasks", icon: ClipboardCheck, ready: false },
    ],
  },
  {
    title: "Sales",
    items: [
      { label: "Customers", href: "/sales/customers", icon: Users, ready: false },
      { label: "Orders", href: "/sales/orders", icon: ClipboardList, ready: false },
      { label: "Invoices", href: "/sales/invoices", icon: FileText, ready: false },
      { label: "Receipts", href: "/sales/receipts", icon: Receipt, ready: false },
      { label: "All Sales", href: "/sales/all", icon: ListChecks, ready: false },
      { label: "Returns", href: "/sales/returns", icon: Undo2, ready: false },
      { label: "Post-dated Cheques", href: "/sales/pdc", icon: CalendarClock, ready: false },
    ],
  },
  {
    title: "Purchases",
    items: [
      { label: "Suppliers", href: "/purchases/suppliers", icon: Truck, ready: false },
      { label: "Purchase Orders", href: "/purchases/orders", icon: ClipboardList, ready: false },
      { label: "Bills", href: "/purchases/bills", icon: ShoppingBag, ready: false },
      { label: "Payments", href: "/purchases/payments", icon: Receipt, ready: false },
      { label: "All Purchases", href: "/purchases/all", icon: ListChecks, ready: false },
      { label: "Returns", href: "/purchases/returns", icon: Undo2, ready: false },
      { label: "Post-dated Cheques", href: "/purchases/pdc", icon: CalendarClock, ready: false },
    ],
  },
  {
    title: "Inventory",
    items: [
      { label: "Products", href: "/inventory/products", icon: Package, ready: false },
      { label: "Stock Adjustment", href: "/inventory/adjustments", icon: SlidersHorizontal, ready: false },
    ],
  },
  {
    title: "Banking",
    items: [
      { label: "Accounts", href: "/banking/accounts", icon: Landmark, ready: false },
      { label: "Transfers", href: "/banking/transfers", icon: ArrowLeftRight, ready: false },
      { label: "Reconciliation", href: "/banking/reconciliation", icon: ListChecks, ready: false },
    ],
  },
  {
    title: "Accounting",
    items: [
      { label: "Chart of Accounts", href: "/accounting/accounts", icon: BookOpen, ready: false },
      { label: "Journal Entries", href: "/accounting/journals", icon: FileText, ready: false },
    ],
  },
  {
    title: "Reports",
    items: [
      { label: "Reports", href: "/reports", icon: BarChart3, ready: false },
      { label: "Analytical Reports", href: "/reports/analytical", icon: BarChart3, ready: false },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Billing", href: "/billing", icon: CreditCard, ready: true },
      { label: "Users and Roles", href: "/settings/users", icon: UserCog, ready: false },
      { label: "Settings", href: "/settings", icon: Settings, ready: false },
    ],
  },
];