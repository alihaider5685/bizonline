"use client";

import { useState } from "react";
import { BarChart3, Check, Package, Receipt, type LucideIcon } from "lucide-react";
import { formatMoney } from "@/lib/format";

type TabId = "sales" | "inventory" | "reports";
type Tone = "success" | "danger" | "warning" | "info" | "neutral";

const tabs: { id: TabId; label: string; icon: LucideIcon; blurb: string }[] = [
  {
    id: "sales",
    label: "Sales",
    icon: Receipt,
    blurb: "Create invoices, track what customers owe and see payments at a glance.",
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: Package,
    blurb: "Know what is in stock, what is running low and what your stock is worth.",
  },
  {
    id: "reports",
    label: "Reports",
    icon: BarChart3,
    blurb: "Profit, loss and balances from your own records, ready when you need them.",
  },
];

const toneStyles: Record<Tone, string> = {
  success: "bg-emerald-50 text-emerald-700",
  danger: "bg-red-50 text-red-700",
  warning: "bg-amber-50 text-amber-700",
  info: "bg-sky-50 text-sky-700",
  neutral: "bg-slate-100 text-slate-600",
};

function Pill({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${toneStyles[tone]}`}
    >
      {children}
    </span>
  );
}

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-900/5">
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 text-xl font-bold text-primary">{value}</p>
    </div>
  );
}

function SalesView() {
  const rows: { id: string; party: string; amount: number; label: string; tone: Tone }[] = [
    { id: "INV-0042", party: "Alpha Traders", amount: 385000, label: "Unpaid", tone: "info" },
    { id: "INV-0041", party: "Gamma Stores", amount: 140000, label: "Draft", tone: "neutral" },
    { id: "INV-0040", party: "Delta Mart", amount: 210000, label: "Paid", tone: "success" },
    { id: "INV-0039", party: "Noor Trading", amount: 95000, label: "Overdue", tone: "danger" },
  ];

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile label="Invoices this month" value="24" />
        <StatTile label="Customer receivables" value={formatMoney(1275000)} />
        <StatTile label="Collected this month" value={formatMoney(850000)} />
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase text-muted">
            <tr>
              <th className="py-2 pr-4">Invoice</th>
              <th className="py-2 pr-4">Customer</th>
              <th className="py-2 pr-4 text-right">Amount</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-slate-100">
                <td className="py-3 pr-4 font-medium">{row.id}</td>
                <td className="py-3 pr-4">{row.party}</td>
                <td className="py-3 pr-4 text-right">{formatMoney(row.amount)}</td>
                <td className="py-3">
                  <Pill tone={row.tone}>{row.label}</Pill>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function InventoryView() {
  const rows: { sku: string; name: string; qty: number; reorder: number; low: boolean }[] = [
    { sku: "FAB-001", name: "Cotton Fabric (metre)", qty: 120, reorder: 500, low: true },
    { sku: "YRN-014", name: "Polyester Yarn (kg)", qty: 35, reorder: 100, low: true },
    { sku: "PKG-003", name: "Packing Boxes (pcs)", qty: 60, reorder: 200, low: true },
    { sku: "BTN-210", name: "Buttons (box)", qty: 840, reorder: 300, low: false },
  ];

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile label="Products" value="256" />
        <StatTile label="Stock value" value={formatMoney(5640000)} />
        <StatTile label="Low stock items" value="3" />
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase text-muted">
            <tr>
              <th className="py-2 pr-4">SKU</th>
              <th className="py-2 pr-4">Product</th>
              <th className="py-2 pr-4 text-right">In stock</th>
              <th className="py-2 pr-4 text-right">Reorder at</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.sku} className="border-t border-slate-100">
                <td className="py-3 pr-4 font-medium">{row.sku}</td>
                <td className="py-3 pr-4">{row.name}</td>
                <td className="py-3 pr-4 text-right">{row.qty}</td>
                <td className="py-3 pr-4 text-right">{row.reorder}</td>
                <td className="py-3">
                  <Pill tone={row.low ? "warning" : "success"}>
                    {row.low ? "Low stock" : "In stock"}
                  </Pill>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ReportsView() {
  const bars = [
    { label: "Revenue", value: 4850000, width: "100%", color: "bg-primary" },
    { label: "Expenses", value: 3120000, width: "64%", color: "bg-amber-500" },
    { label: "Net profit", value: 1730000, width: "36%", color: "bg-emerald-500" },
  ];
  const reportList = [
    "Trial balance",
    "Profit and loss",
    "Balance sheet",
    "Customer ageing",
    "Stock valuation",
  ];

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <p className="text-sm font-semibold text-foreground">Profit and loss summary</p>
        <div className="mt-4 space-y-4">
          {bars.map((bar) => (
            <div key={bar.label}>
              <div className="flex justify-between text-sm">
                <span className="text-muted">{bar.label}</span>
                <span className="font-medium">{formatMoney(bar.value)}</span>
              </div>
              <div className="mt-1.5 h-2.5 w-full rounded-full bg-slate-100">
                <div
                  className={`h-2.5 rounded-full ${bar.color}`}
                  style={{ width: bar.width }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-foreground">Reports</p>
        <ul className="mt-4 space-y-3">
          {reportList.map((name) => (
            <li
              key={name}
              className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3 text-sm ring-1 ring-slate-900/5"
            >
              <Check size={16} className="text-emerald-500" />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ProductPreview() {
  const [active, setActive] = useState<TabId>("sales");
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section id="preview" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Product preview
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            See your business at a glance
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
        </div>

        <div role="tablist" className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(tab.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  selected
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white text-foreground ring-1 ring-slate-900/10 hover:bg-slate-50"
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <p className="mx-auto mt-5 max-w-xl text-center text-muted">{current.blurb}</p>

        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/10">
          <div className="flex h-10 items-center gap-2 border-b border-slate-100 bg-slate-50 px-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-3 text-xs text-muted">BizOnline · Demo preview</span>
          </div>
          <div className="p-6">
            {active === "sales" && <SalesView />}
            {active === "inventory" && <InventoryView />}
            {active === "reports" && <ReportsView />}
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-muted">
          Sample data for illustration. Screens shown are previews of the product being built.
        </p>
      </div>
    </section>
  );
}