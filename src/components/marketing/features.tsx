import {
  BookOpen,
  Users,
  Boxes,
  Building2,
  ShieldCheck,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
  tags: string[];
  tile: string; // background + icon color of the icon tile
};

const features: Feature[] = [
  {
    icon: BookOpen,
    title: "Double-entry accounting",
    text: "Every entry balances. Your books stay accurate from the first transaction.",
    tags: ["Ledger", "Trial balance", "Balance sheet"],
    tile: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Users,
    title: "Sales and purchases",
    text: "Customers, suppliers, invoices, bills, receipts and payments in one place.",
    tags: ["Invoices", "Bills", "Payments"],
    tile: "bg-violet-50 text-violet-600",
  },
  {
    icon: Boxes,
    title: "Inventory",
    text: "Track stock, warehouses and valuation across your business.",
    tags: ["Stock", "Warehouses", "Valuation"],
    tile: "bg-sky-50 text-sky-600",
  },
  {
    icon: Building2,
    title: "Multiple companies",
    text: "Run more than one company, with the data of each kept separate.",
    tags: ["Separate books", "One login", "Easy switching"],
    tile: "bg-amber-50 text-amber-600",
  },
  {
    icon: ShieldCheck,
    title: "Roles and audit trail",
    text: "Control who can do what, and see who changed what and when.",
    tags: ["Roles", "Approvals", "History"],
    tile: "bg-rose-50 text-rose-600",
  },
  {
    icon: BarChart3,
    title: "Clear reports",
    text: "Business numbers you can trust, built from your own records.",
    tags: ["Profit and loss", "Ageing", "Stock"],
    tile: "bg-indigo-50 text-indigo-600",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Features
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Everything in one place
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
          <p className="mt-5 text-lg text-muted">
            One system for your sales, purchases, stock and books, so you stop
            juggling separate tools.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${f.tile}`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {f.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}