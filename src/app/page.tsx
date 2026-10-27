import Link from "next/link";
import { Check, BookOpen, Boxes, Users, ShieldCheck, BarChart3, Building2 } from "lucide-react";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { plans } from "@/mock-data/plans";

const features = [
  { icon: BookOpen, title: "Double-entry accounting", text: "Every entry balances. Ledger, trial balance, profit and loss, balance sheet." },
  { icon: Users, title: "Sales and purchases", text: "Customers, suppliers, invoices, bills, receipts and payments in one place." },
  { icon: Boxes, title: "Inventory", text: "Track stock, warehouses and valuation across your business." },
  { icon: Building2, title: "Multiple companies", text: "Run more than one company, with data kept separate for each." },
  { icon: ShieldCheck, title: "Roles and audit trail", text: "Control who can do what, and see who changed what." },
  { icon: BarChart3, title: "Clear reports", text: "Business numbers you can trust, from your own records." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="mx-auto w-fit rounded-full bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
          3-day free trial
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Accounting made simple for growing businesses
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
          Manage sales, purchases, inventory and your books online. Try everything free for 3 days.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/signup"
            className="rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary-hover"
          >
            Start free trial
          </Link>
          <a
            href="#pricing"
            className="rounded-md border border-border bg-surface px-6 py-3 font-medium text-foreground hover:bg-background"
          >
            See pricing
          </a>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold text-foreground">Everything in one place</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-lg border border-border bg-surface p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted">{f.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold text-foreground">Simple pricing</h2>
        <p className="mt-2 text-center text-sm text-warning">
          Demo pricing. Final plans and prices are not decided.
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border bg-surface p-6 ${
                plan.highlighted ? "border-accent ring-1 ring-accent" : "border-border"
              }`}
            >
              <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted">{plan.description}</p>
              <p className="mt-4">
                <span className="text-3xl font-bold text-primary">{plan.price}</span>{" "}
                <span className="text-sm text-muted">{plan.period}</span>
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check size={16} className="text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className={`mt-6 block rounded-md px-4 py-2 text-center font-medium ${
                  plan.highlighted
                    ? "bg-primary text-white hover:bg-primary-hover"
                    : "border border-border text-foreground hover:bg-background"
                }`}
              >
                Start free trial
              </Link>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}