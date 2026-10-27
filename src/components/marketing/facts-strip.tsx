import { Zap, Building2, Banknote, Globe, type LucideIcon } from "lucide-react";

type Fact = {
  icon: LucideIcon;
  title: string;
  text: string;
  tile: string;
};

const facts: Fact[] = [
  {
    icon: Zap,
    title: "3-day free trial",
    text: "Full access, no payment to start",
    tile: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Building2,
    title: "Multiple companies",
    text: "Separate books for each one",
    tile: "bg-violet-50 text-violet-600",
  },
  {
    icon: Banknote,
    title: "PKR first",
    text: "Built around the rupee",
    tile: "bg-amber-50 text-amber-600",
  },
  {
    icon: Globe,
    title: "Works in your browser",
    text: "Nothing to install",
    tile: "bg-sky-50 text-sky-600",
  },
];

export function FactsStrip() {
  return (
    <section className="border-y border-slate-900/5 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => {
          const Icon = fact.icon;
          return (
            <div key={fact.title} className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${fact.tile}`}
              >
                <Icon size={22} />
              </div>
              <div>
                <p className="font-semibold text-foreground">{fact.title}</p>
                <p className="text-sm text-muted">{fact.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}