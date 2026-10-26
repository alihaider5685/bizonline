"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatMoney } from "@/lib/format";
import type { MonthlyPoint } from "@/mock-data/dashboard";

const SALES_COLOR = "#1e3a5f";
const PURCHASES_COLOR = "#0d9488";

export function SalesPurchasesChart({ data }: { data: MonthlyPoint[] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#64748b" />
          <YAxis
            tick={{ fontSize: 12 }}
            stroke="#64748b"
            tickFormatter={(v: number) => `${v / 1000}k`}
          />
          <Tooltip formatter={(value) => formatMoney(Number(value))} />
          <Legend />
          <Bar dataKey="sales" name="Sales" fill={SALES_COLOR} radius={[4, 4, 0, 0]} />
          <Bar dataKey="purchases" name="Purchases" fill={PURCHASES_COLOR} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}