import type { CSSProperties } from "react";
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

/*
 * Animation notes (performance):
 * - Only `opacity`, `translate`, `transform` and SVG stroke-dashoffset are animated.
 *   No layout properties (width/height/top/left), so there is no reflow.
 * - Pure CSS: no JS, no animation library, no hooks. This stays a Server Component.
 * - Entrance uses the `translate` property, float uses `transform`, so they never fight.
 * - Everything is switched off under `prefers-reduced-motion`.
 * - The blurred glows are never re-blurred: only their opacity animates (compositor only).
 */
const css = `
.hm-in{animation:hm-in .7s cubic-bezier(.22,1,.36,1) both;animation-delay:var(--d,0ms)}
.hm-fade{animation:hm-fade .9s ease-out both;animation-delay:var(--d,0ms)}
.hm-pop{animation:hm-pop .55s cubic-bezier(.34,1.56,.64,1) both;animation-delay:var(--d,0ms)}
.hm-float{animation:
  hm-in .7s cubic-bezier(.22,1,.36,1) both var(--d,0ms),
  hm-float var(--fd,6s) ease-in-out infinite calc(var(--d,0ms) + 900ms)}
.hm-glow{animation:hm-glow 9s ease-in-out infinite alternate}
.hm-draw{stroke-dasharray:1;stroke-dashoffset:1;animation:hm-draw 1.4s cubic-bezier(.65,0,.35,1) forwards;animation-delay:var(--d,0ms)}
.hm-area{animation:hm-fade 1s ease-out both;animation-delay:calc(var(--d,0ms) + 900ms)}
.hm-plane{animation:hm-plane 5s ease-in-out infinite calc(var(--d,0ms) + 700ms)}
.hm-live{animation:hm-live 2s ease-in-out infinite}
.hm-row{animation:hm-in .5s cubic-bezier(.22,1,.36,1) both;animation-delay:var(--d,0ms)}

@keyframes hm-in{from{opacity:0;translate:0 18px}to{opacity:1;translate:0 0}}
@keyframes hm-fade{from{opacity:0}to{opacity:1}}
@keyframes hm-pop{from{opacity:0;scale:.4}to{opacity:1;scale:1}}
@keyframes hm-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
@keyframes hm-glow{from{opacity:.55}to{opacity:1}}
@keyframes hm-draw{to{stroke-dashoffset:0}}
@keyframes hm-plane{0%,100%{transform:translate(0,0) rotate(0deg)}50%{transform:translate(5px,-5px) rotate(4deg)}}
@keyframes hm-live{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.7)}}

@media (prefers-reduced-motion:reduce){
  .hm-in,.hm-fade,.hm-pop,.hm-float,.hm-glow,.hm-area,.hm-plane,.hm-live,.hm-row{animation:none!important}
  .hm-draw{animation:none!important;stroke-dashoffset:0}
}
`;

const cardBase =
  "absolute rounded-2xl bg-white/95 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5 backdrop-blur-sm";

const d = (ms: number, extra?: CSSProperties): CSSProperties =>
  ({ "--d": `${ms}ms`, ...extra }) as CSSProperties;

export function HeroMockup() {
  return (
    <div
      className="relative mx-auto hidden h-[480px] w-full max-w-[620px] lg:block"
      aria-hidden="true"
    >
      <style>{css}</style>

      {/* soft background glows (only opacity animates) */}
      <div className="hm-glow absolute left-10 top-20 h-56 w-56 rounded-full bg-emerald-200/50 blur-3xl" />
      <div
        className="hm-glow absolute right-0 top-0 h-56 w-56 rounded-full bg-sky-200/50 blur-3xl"
        style={{ animationDelay: "-4s" }}
      />

      {/* dashed path with paper plane */}
      <svg
        className="hm-fade absolute left-[90px] top-0 h-14 w-[330px]"
        style={d(900)}
        viewBox="0 0 330 56"
        fill="none"
      >
        <path
          d="M0 34 C90 -6 230 -10 322 28"
          stroke="#38bdf8"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          strokeLinecap="round"
        />
      </svg>
      <div className="hm-fade absolute left-[400px] top-1" style={d(1100)}>
        <div className="hm-plane text-sky-500" style={d(1100)}>
          <Send size={30} className="-rotate-12 drop-shadow-sm" />
        </div>
      </div>

      {/* green check badge */}
      <div
        className="hm-pop absolute left-[56px] top-0 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 ring-4 ring-white/70"
        style={d(1400)}
      >
        <Check size={22} strokeWidth={3} />
      </div>

      {/* sidebar */}
      <div
        className="hm-in absolute left-0 top-16 z-0 h-[260px] w-44 rounded-2xl bg-gradient-to-b from-primary to-primary/90 p-4 text-white shadow-xl shadow-slate-900/20 ring-1 ring-white/10"
        style={d(0)}
      >
        <LogoMark size={22} />
        <ul className="mt-4 space-y-1.5">
          {menu.map((item, i) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className={`hm-row flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs ${
                  item.active
                    ? "bg-accent font-medium text-white shadow-sm shadow-black/10"
                    : "text-white/75"
                }`}
                style={d(250 + i * 70)}
              >
                <Icon size={15} />
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>

      {/* total sales: the hero moment (chart line draws itself) */}
      <div
        className={`${cardBase} hm-in left-32 top-6 z-10 w-[300px] p-5`}
        style={d(150)}
      >
        <p className="text-xs font-medium text-muted">Total Sales</p>
        <div className="mt-1 flex items-center gap-2">
          <p className="text-2xl font-bold tabular-nums tracking-tight text-primary">
            Rs 1,254,000
          </p>
          <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-600">
            <TrendingUp size={12} /> +12%
          </span>
        </div>
        <svg viewBox="0 0 240 90" className="mt-3 h-24 w-full overflow-visible">
          <defs>
            <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="hm-area"
            style={d(500)}
            d="M0 72 C20 62 35 76 55 56 S95 46 115 52 S150 26 175 32 S215 12 240 6 L240 90 L0 90 Z"
            fill="url(#salesFill)"
          />
          <path
            className="hm-draw"
            style={d(500)}
            pathLength={1}
            d="M0 72 C20 62 35 76 55 56 S95 46 115 52 S150 26 175 32 S215 12 240 6"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* invoices */}
      <div
        className={`${cardBase} hm-float right-6 top-10 z-10 flex w-48 items-center gap-3 p-4`}
        style={d(600, { "--fd": "6s" } as CSSProperties)}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
          <FileText size={22} />
        </div>
        <div>
          <p className="text-xs text-muted">Invoices</p>
          <p className="text-2xl font-bold leading-none tabular-nums text-foreground">12</p>
          <p className="mt-1 text-xs font-medium text-emerald-600">Paid</p>
        </div>
      </div>

      {/* purchase orders */}
      <div
        className={`${cardBase} hm-float right-0 top-[150px] z-10 flex w-52 items-center gap-3 p-4`}
        style={d(750, { "--fd": "7s" } as CSSProperties)}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
          <ShoppingCart size={22} />
        </div>
        <div>
          <p className="text-xs text-muted">Purchase Orders</p>
          <p className="text-2xl font-bold leading-none tabular-nums text-foreground">8</p>
          <p className="mt-1 text-xs font-medium text-amber-600">Pending</p>
        </div>
      </div>

      {/* inventory */}
      <div
        className={`${cardBase} hm-float right-4 top-[262px] z-10 flex w-48 items-center gap-3 p-4`}
        style={d(900, { "--fd": "6.5s" } as CSSProperties)}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
          <Package size={22} />
        </div>
        <div>
          <p className="text-xs text-muted">Inventory</p>
          <p className="text-2xl font-bold leading-none tabular-nums text-foreground">256</p>
          <p className="mt-1 text-xs font-medium text-sky-600">Items</p>
        </div>
      </div>

      {/* recent activity */}
      <div
        className={`${cardBase} hm-in bottom-6 left-16 z-10 w-[330px] p-4`}
        style={d(1000)}
      >
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-foreground">Recent activity</p>
          <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-600">
            <span className="hm-live h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Live
          </span>
        </div>
        <ul className="mt-2 divide-y divide-slate-100">
          {activity.map((row, i) => (
            <li
              key={row.id}
              className="hm-row flex items-center justify-between py-2 text-xs"
              style={d(1150 + i * 120)}
            >
              <div>
                <p className="font-medium text-foreground">{row.id}</p>
                <p className="text-muted">{row.party}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="tabular-nums text-foreground">{row.amount}</span>
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