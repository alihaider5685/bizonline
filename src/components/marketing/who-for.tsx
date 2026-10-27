import {
  ArrowLeftRight,
  Warehouse,
  Store,
  Briefcase,
  Factory,
  Shirt,
  type LucideIcon,
} from "lucide-react";

type Audience = {
  icon: LucideIcon;
  title: string;
  text: string;
  tile: string;
  comingLater?: boolean;
};

const audiences: Audience[] = [
  {
    icon: ArrowLeftRight,
    title: "Trading companies",
    text: "Buy and sell goods, track what customers owe and what you owe suppliers.",
    tile: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Warehouse,
    title: "Wholesalers",
    text: "Handle large stock, many customers and regular credit sales.",
    tile: "bg-sky-50 text-sky-600",
  },
  {
    icon: Store,
    title: "Retailers",
    text: "Keep an eye on stock, daily sales and cash and bank balances.",
    tile: "bg-amber-50 text-amber-600",
  },
  {
    icon: Briefcase,
    title: "Service businesses",
    text: "Invoice clients, record expenses and see your profit clearly.",
    tile: "bg-violet-50 text-violet-600",
  },
  {
    icon: Factory,
    title: "Manufacturers",
    text: "Bill of materials, production orders and costing of finished goods.",
    tile: "bg-rose-50 text-rose-600",
    comingLater: true,
  },
  {
    icon: Shirt,
    title: "Textile businesses",
    text: "Fabric, yarn, rolls and job-work with outside processors.",
    tile: "bg-indigo-50 text-indigo-600",
    comingLater: true,
  },
];

export function WhoFor() {
  return (
    <section id="who-for" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Who it is for
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Built for the way you do business
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
          <p className="mt-5 text-lg text-muted">
            Whether you buy and sell, provide services or make products, BizOnline is
            designed to fit.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.tile}`}
                  >
                    <Icon size={24} />
                  </div>
                  {item.comingLater && (
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                      Coming later
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}