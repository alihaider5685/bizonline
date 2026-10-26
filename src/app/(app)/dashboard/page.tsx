import {
  TrendingUp,
  ShoppingBag,
  Users,
  Truck,
  Landmark,
  Package,
  AlertTriangle,
} from "lucide-react";
import { StatCard } from "@/components/ui/stat-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { SalesPurchasesChart } from "@/components/charts/sales-purchases-chart";
import { formatMoney, formatDate } from "@/lib/format";
import {
  summary,
  recentTransactions,
  lowStock,
  monthlyTrend,
} from "@/mock-data/dashboard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-1 text-sm text-warning">
          Demo data. Real figures will come from your accounting records.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard label="Total Sales" value={formatMoney(summary.totalSales)} hint="This financial year" icon={TrendingUp} tone="success" />
        <StatCard label="Total Purchases" value={formatMoney(summary.totalPurchases)} hint="This financial year" icon={ShoppingBag} tone="info" />
        <StatCard label="Customer Receivables" value={formatMoney(summary.receivables)} hint="Amount customers owe you" icon={Users} tone="accent" />
        <StatCard label="Supplier Payables" value={formatMoney(summary.payables)} hint="Amount you owe suppliers" icon={Truck} tone="warning" />
        <StatCard label="Cash & Bank" value={formatMoney(summary.cashAndBank)} hint="All cash and bank accounts" icon={Landmark} tone="primary" />
        <StatCard label="Stock Value" value={formatMoney(summary.stockValue)} hint="Inventory valuation" icon={Package} tone="primary" />
      </div>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="font-semibold">Monthly Sales vs Purchases</h2>
        <p className="mb-4 text-xs text-muted">Demo data, 2026</p>
        <SalesPurchasesChart data={monthlyTrend} />
      </section>

      <div className="grid gap-6 xl:grid-cols-3">
        <section className="rounded-lg border border-border bg-surface xl:col-span-2">
          <h2 className="border-b border-border px-5 py-4 font-semibold">
            Recent Transactions
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase text-muted">
                <tr>
                  <th className="px-5 py-3">Date</th>
                  <th className="px-5 py-3">Number</th>
                  <th className="px-5 py-3">Type</th>
                  <th className="px-5 py-3">Party</th>
                  <th className="px-5 py-3 text-right">Amount</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((t) => (
                  <tr key={t.id} className="border-t border-border">
                    <td className="px-5 py-3">{formatDate(t.date)}</td>
                    <td className="px-5 py-3 font-medium">{t.id}</td>
                    <td className="px-5 py-3">{t.type}</td>
                    <td className="px-5 py-3">{t.party}</td>
                    <td className="px-5 py-3 text-right">{formatMoney(t.amount)}</td>
                    <td className="px-5 py-3">
                      <StatusBadge status={t.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-lg border border-border bg-surface">
          <h2 className="flex items-center gap-2 border-b border-border px-5 py-4 font-semibold">
            <AlertTriangle size={18} className="text-warning" />
            Low Stock Alerts
          </h2>
          <ul>
            {lowStock.map((item) => (
              <li key={item.sku} className="border-t border-border px-5 py-3 first:border-t-0">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-muted">
                  {item.sku} · In stock: {item.qty} · Reorder at: {item.reorderLevel}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}