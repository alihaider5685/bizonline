import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { PricingSection } from "@/components/marketing/pricing-section";
import { FaqItem } from "@/components/marketing/faq-item";

export const metadata: Metadata = {
  title: "Pricing | BizOnline",
  description:
    "Simple plans with a 3-day free trial. Compare what is included in each plan.",
};

type Cell = string | boolean;

const comparison: { feature: string; starter: Cell; business: Cell }[] = [
  { feature: "Companies", starter: "1", business: "Up to 3" },
  { feature: "Users", starter: "3", business: "15" },
  { feature: "Sales and purchases", starter: true, business: true },
  { feature: "Financial reports", starter: true, business: true },
  { feature: "Basic inventory", starter: true, business: true },
  { feature: "Multiple warehouses", starter: false, business: true },
  { feature: "Approvals and audit log", starter: false, business: true },
];

const included = [
  "3-day free trial with full access",
  "Double-entry accounting with balanced entries",
  "Customers, suppliers and products",
  "Dashboard and core reports",
  "Your data is kept when a trial ends",
];

const billingFaq = [
  {
    q: "Do I need to pay to start the trial?",
    a: "No. You can start the 3-day trial without making a payment.",
  },
  {
    q: "Which payment methods will you accept?",
    a: "The payment provider has not been chosen yet. We will announce the available methods before launch.",
  },
  {
    q: "Can I change my plan later?",
    a: "We plan to let you move between plans. The exact rules will be published in the Terms of Service before launch.",
  },
];

function CellValue({ value }: { value: Cell }) {
  if (value === true) {
    return <Check size={18} className="mx-auto text-emerald-500" aria-label="Included" />;
  }
  if (value === false) {
    return <Minus size={18} className="mx-auto text-slate-300" aria-label="Not included" />;
  }
  return <span className="font-medium text-foreground">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumb="Pricing"
        eyebrow="Pricing"
        title="Simple pricing for every stage"
        subtitle="Every plan starts with a 3-day free trial. Prices are in PKR."
      >
        <p className="mt-3 text-sm font-medium text-warning">
          Demo pricing. Final plans, limits and prices are not decided.
        </p>
      </PageHero>

      <PricingSection showHeading={false} />

      {/* comparison */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary">
            Compare plans
          </h2>

          <div className="mt-10 overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="px-6 py-4 font-semibold text-foreground">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-foreground">
                    Starter
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-accent">
                    Business
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-t border-slate-100">
                    <td className="px-6 py-4 text-foreground">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      <CellValue value={row.starter} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CellValue value={row.business} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-center text-xs text-muted">
            Demo comparison. Limits and inclusions may change before launch.
          </p>
        </div>
      </section>

      {/* included in every plan */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary">
            Included in every plan
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {included.map((text) => (
              <li
                key={text}
                className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 text-sm ring-1 ring-slate-900/5"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check size={12} strokeWidth={3} />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* billing questions */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary">
            Billing questions
          </h2>
          <div className="mt-10 space-y-4">
            {billingFaq.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}