import {
  LayoutDashboard,
  Users,
  Truck,
  ShoppingCart,
  ShoppingBag,
  Package,
  Landmark,
  BookOpen,
  BarChart3,
  Settings,
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

export const navGroups: NavGroup[] = [
  {
    title: "Overview",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, ready: true },
    ],
  },
  {
    title: "Sales",
    items: [
      { label: "Customers", href: "/sales/customers", icon: Users, ready: false },
      { label: "Invoices", href: "/sales/invoices", icon: ShoppingCart, ready: false },
    ],
  },
  {
    title: "Purchases",
    items: [
      { label: "Suppliers", href: "/purchases/suppliers", icon: Truck, ready: false },
      { label: "Bills", href: "/purchases/bills", icon: ShoppingBag, ready: false },
    ],
  },
  {
    title: "Inventory",
    items: [
      { label: "Products", href: "/inventory/products", icon: Package, ready: false },
    ],
  },
  {
    title: "Accounting",
    items: [
      { label: "Banking", href: "/banking", icon: Landmark, ready: false },
      { label: "Chart of Accounts", href: "/accounting/accounts", icon: BookOpen, ready: false },
      { label: "Reports", href: "/reports", icon: BarChart3, ready: false },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Settings", href: "/settings", icon: Settings, ready: false },
    ],
  },
];