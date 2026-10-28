import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Users,
  Truck,
  Package,
  Landmark,
  BarChart3,
  ShieldCheck,
  Building2,
  Scale,
  Lock,
  RotateCcw,
  FileSearch,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";

export const metadata: Metadata = {
  title: "Features | BizOnline",
  description:
    "Accounting, sales, purchases, inventory, banking and reports in one place. See what BizOnline does and what is coming next.",
};

type Status = "first" | "next" | "later";

const statusInfo: Record<Status, { label: string; style: string; text: string }> = {
  first: {
    label: "First release",
    style: "bg-emerald-50 text-emerald-700",
    text: "Part of the first working version.",
  },
  next: {
    label: "Next release",
    style: "bg-sky-50 text-sky-700",
    text: "Planned right after the first version.",
  },
  later: {
    label: "Later",
    style: "bg-slate-100 text-slate-600",
    text: "On the roadmap, not scheduled yet.",
  },
};

type Item = { name: string; status: Status };

type FeatureModule = {
  icon: LucideIcon;
  title: string;
  summary: string;
  tile: string;
  items: Item[];
};

const modules: FeatureModule[] = [
  {
    icon: BookOpen,
    title: "Accounting",
    summary:
      "A proper double-entry system underneath everything, so your numbers can be trusted.",
    tile: "bg-emerald-50 text-emerald-600",
    items: [
      { name: "Chart of accounts", status: "first" },
      { name: "Journal entries", status: "first" },
      { name: "General ledger", status: "first" },
      { name: "Trial balance", status: "first" },
      { name: "Profit and loss", status: "first" },
      { name: "Balance sheet", status: "first" },
      { name: "Period locking and reversals", status: "next" },
      { name: "Configurable tax rates", status: "next" },
      { name: "Cost centres and projects", status: "later" },
      { name: "Budget versus actual", status: "later" },
    ],
  },
  {
    icon: Users,
    title: "Sales and receivables",
    summary:
      "Sell, invoice and collect, and always know who owes you what.",
    tile: "bg-violet-50 text-violet-600",
    items: [
      { name: "Customers and statements", status: "first" },
      { name: "Sales invoices", status: "first" },
      { name: "Customer receipts and allocation", status: "first" },
      { name: "Quotations and sales orders", status: "next" },
      { name: "Returns and credit notes", status: "next" },
      { name: "Post-dated cheques received", status: "next" },
      { name: "Customer ageing", status: "next" },
      { name: "Invoice email and reminders", status: "later" },
    ],
  },
  {
    icon: Truck,
    title: "Purchases and payables",
    summary:
      "Order, receive and pay, and keep track of every supplier balance.",
    tile: "bg-amber-50 text-amber-600",
    items: [
      { name: "Suppliers and statements", status: "first" },
      { name: "Purchase bills", status: "first" },
      { name: "Supplier payments", status: "first" },
      { name: "Purchase orders and goods receipts", status: "next" },
      { name: "Returns and supplier credit notes", status: "next" },
      { name: "Post-dated cheques issued", status: "next" },
      { name: "Landed costs (freight, duty)", status: "later" },
    ],
  },
  {
    icon: Package,
    title: "Inventory",
    summary:
      "Know what you have, what it cost and when to reorder.",
    tile: "bg-sky-50 text-sky-600",
    items: [
      { name: "Products and categories", status: "first" },
      { name: "Stock in and out with FIFO costing", status: "first" },
      { name: "Stock adjustments", status: "first" },
      { name: "Low-stock alerts", status: "first" },
      { name: "Multiple warehouses and transfers", status: "next" },
      { name: "Batch and expiry tracking", status: "next" },
      { name: "Manufacturing and bill of materials", status: "later" },
      { name: "Textile processes and job work", status: "later" },
    ],
  },
  {
    icon: Landmark,
    title: "Banking and cash",
    summary:
      "Keep cash and bank accounts in step with your books.",
    tile: "bg-indigo-50 text-indigo-600",
    items: [
      { name: "Cash and bank accounts", status: "first" },
      { name: "Receipts, payments and transfers", status: "first" },
      { name: "Bank reconciliation", status: "next" },
      { name: "Bank statement import", status: "next" },
      { name: "Multiple currencies", status: "later" },
    ],
  },
  {
    icon: BarChart3,
    title: "Reports and dashboard",
    summary:
      "See how the business is doing without building spreadsheets.",
    tile: "bg-rose-50 text-rose-600",
    items: [
      { name: "Dashboard with key figures", status: "first" },
      { name: "Print and export", status: "next" },
      { name: "Drill down from a report to the source entry", status: "next" },
      { name: "Analytical reports", status: "next" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "People and control",
    summary:
      "Decide who can do what, and keep a record of what happened.",
    tile: "bg-teal-50 text-teal-600",
    items: [
      { name: "Users and basic roles", status: "first" },
      { name: "Audit log", status: "first" },
      { name: "Approval workflows", status: "next" },
      { name: "Detailed permissions", status: "next" },
      { name: "Attachments on transactions", status: "next" },
      { name: "My tasks", status: "next" },
    ],
  },
  {
    icon: Building2,
    title: "Companies and plans",
    summary:
      "Run more than one company, each with its own separate books.",
    tile: "bg-orange-50 text-orange-600",
    items: [
      { name: "Multiple companies", status: "first" },
      { name: "3-day free trial and subscriptions", status: "first" },
      { name: "Payroll", status: "later" },
      { name: "SMS and email notifications", status: "later" },
      { name: "Integrations and API", status: "later" },
    ],
  },
];

const rules: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Scale,
    title: "Every entry balances",
    text: "Total debits must equal total credits before an entry can be posted.",
  },
  {
    icon: Lock,
    title: "Posted records are protected",
    text: "Posted entries are not silently edited or deleted.",
  },
  {
    icon: RotateCcw,
    title: "Corrections leave a trail",
    text: "Mistakes are fixed with reversals or adjustments, so the history stays intact.",
  },
  {
    icon: FileSearch,
    title: "Reports match your ledgers",
    text: "Report figures come from your ledger records and can be traced back to the source.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        crumb="Features"
        eyebrow="Features"
        title="Everything you need to run your books and your business"
        subtitle="Accounting, sales, purchases, inventory, banking and reports, in one connected system."
      />

      {/* status legend */}
      <section className="border-b border-slate-900/5 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            {(Object.keys(statusInfo) as Status[]).map((key) => (
              <div key={key} className="flex items-center gap-2">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusInfo[key].style}`}
                >
                  {statusInfo[key].label}
                </span>
                <span className="text-muted">{statusInfo[key].text}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-muted">
            BizOnline is under development. These labels show our plan and may change.
          </p>
        </div>
      </section>

      {/* modules */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <div
                key={module.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${module.tile}`}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">{module.title}</h2>
                    <p className="mt-1 text-muted">{module.summary}</p>
                  </div>
                </div>

                <ul className="mt-6 grid gap-x-8 gap-y-1 sm:grid-cols-2">
                  {module.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between gap-3 border-t border-slate-100 py-3 text-sm"
                    >
                      <span className="text-foreground">{item.name}</span>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusInfo[item.status].style}`}
                      >
                        {statusInfo[item.status].label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* accounting rules */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Accuracy first
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Built on accounting rules you can trust
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
            <p className="mt-5 text-muted">
              These are the rules we are building to. We will test them carefully before any
              real business records are stored.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rules.map((rule) => {
              const Icon = rule.icon;
              return (
                <div
                  key={rule.title}
                  className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-900/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{rule.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{rule.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white shadow-lg shadow-primary/20 hover:bg-primary-hover"
            >
              Start free trial
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}