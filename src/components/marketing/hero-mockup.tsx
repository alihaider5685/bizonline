import {
  Check,
  FileText,
  ShoppingCart,
  Package,
  LayoutDashboard,
  Receipt,
  BarChart3,
  Send,
  TrendingUp,
} from "lucide-react";
import { LogoMark } from "./logo";
import { StatusBadge } from "@/components/ui/status-badge";

const menu = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Sales", icon: Receipt, active: false },
  { label: "Purchases", icon: ShoppingCart, active: false },
  { label: "Inventory", icon: Package, active: false },
  { label: "Reports", icon: BarChart3, active: false },
];

const activity = [
  { id: "INV-0042", party: "Alpha Traders", amount: "Rs 385,000", status: "Unpaid" },
  { id: "RCT-0018", party: "Beta Garments", amount: "Rs 250,000", status: "Paid" },
  { id: "BILL-0031", party: "City Textiles", amount: "Rs 520,000", status: "Overdue" },
];

const cardBase = "absolute rounded-2xl bg-white shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5";

export function HeroMockup() {
  return (
    <div className="relative mx-auto hidden h-[480px] w-full max-w-[620px] lg:block" aria-hidden="true">
      {/* soft background glows */}
      <div className="absolute left-10 top-20 h-56 w-56 rounded-full bg-emerald-200/50 blur-3xl" />
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-sky-200/50 blur-3xl" />

      {/* dashed path with paper plane */}
      <svg className="absolute left-[90px] top-0 h-14 w-[330px]" viewBox="0 0 330 56" fill="none">
        <path
          d="M0 34 C90 -6 230 -10 322 28"
          stroke="#38bdf8"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute left-[400px] top-1 text-sky-500">
        <Send size={30} className="-rotate-12" />
      </div>

      {/* green check badge */
      }
      <div className="absolute left-[56px] top-0 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
        <Check size={22} strokeWidth={3} />
      </div>

      {/* sidebar */}
      <div className="absolute left-0 top-16 z-0 h-[260px] w-44 rounded-2xl bg-primary p-4 text-white shadow-xl shadow-slate-900/20">
        <LogoMark size={22} />
        <ul className="mt-4 space-y-1.5">
          {menu.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs ${
                  item.active ? "bg-accent font-medium text-white" : "text-white/75"
                }`}
              >
                <Icon size={15} />
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>

      {/* total sales */}
      <div className={`${cardBase} left-32 top-6 z-10 w-[300px] p-5`}>
        <p className="text-xs text-muted">Total Sales</p>
        <div className="mt-1 flex items-center gap-2">
          <p className="text-2xl font-bold text-primary">Rs 1,254,000</p>
          <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-600">
            <TrendingUp size={12} /> +12%
          </span>
        </div>
        <svg viewBox="0 0 240 90" className="mt-3 h-24 w-full">
          <defs>
            <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 72 C20 62 35 76 55 56 S95 46 115 52 S150 26 175 32 S215 12 240 6 L240 90 L0 90 Z"
            fill="url(#salesFill)"
          />
          <path
            d="M0 72 C20 62 35 76 55 56 S95 46 115 52 S150 26 175 32 S215 12 240 6"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* invoices */}
      <div className={`${cardBase} right-6 top-10 z-10 flex w-48 items-center gap-3 p-4`}>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
          <FileText size={22} />
        </div>
        <div>
          <p className="text-xs text-muted">Invoices</p>
          <p className="text-2xl font-bold leading-none text-foreground">12</p>
          <p className="mt-1 text-xs font-medium text-emerald-600">Paid</p>
        </div>
      </div>

      {/* purchase orders */}
      <div className={`${cardBase} right-0 top-[150px] z-10 flex w-52 items-center gap-3 p-4`}>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
          <ShoppingCart size={22} />
        </div>
        <div>
          <p className="text-xs text-muted">Purchase Orders</p>
          <p className="text-2xl font-bold leading-none text-foreground">8</p>
          <p className="mt-1 text-xs font-medium text-amber-600">Pending</p>
        </div>
      </div>

      {/* inventory */}
      <div className={`${cardBase} right-4 top-[262px] z-10 flex w-48 items-center gap-3 p-4`}>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
          <Package size={22} />
        </div>
        <div>
          <p className="text-xs text-muted">Inventory</p>
          <p className="text-2xl font-bold leading-none text-foreground">256</p>
          <p className="mt-1 text-xs font-medium text-sky-600">Items</p>
        </div>
      </div>

      {/* recent activity (fills the space on the lower left) */}
      <div className={`${cardBase} bottom-6 left-16 z-10 w-[330px] p-4`}>
        <p className="text-xs font-semibold text-foreground">Recent activity</p>
        <ul className="mt-2 divide-y divide-slate-100">
          {activity.map((row) => (
            <li key={row.id} className="flex items-center justify-between py-2 text-xs">
              <div>
                <p className="font-medium text-foreground">{row.id}</p>
                <p className="text-muted">{row.party}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-foreground">{row.amount}</span>
                <StatusBadge status={row.status} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="absolute bottom-0 right-2 text-[10px] text-muted">
        Sample data for illustration
      </p>
    </div>
  );
}