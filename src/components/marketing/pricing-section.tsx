"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { plans } from "@/mock-data/plans";
import { formatMoney } from "@/lib/format";

type Billing = "monthly" | "yearly";

export function PricingSection({ showHeading = true }: { showHeading?: boolean }) {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        {showHeading && (
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Pricing
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Simple pricing for every stage
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
            <p className="mt-5 text-lg text-muted">
              Every plan starts with a 3-day free trial. Prices are in PKR.
            </p>
            <p className="mt-2 text-sm font-medium text-warning">
              Demo pricing. Final plans and prices are not decided.
            </p>
          </div>
        )}

        {/* monthly / yearly switch */}
        <div className={`flex justify-center ${showHeading ? "mt-8" : ""}`}>
          <div
            role="tablist"
            className="inline-flex rounded-full bg-slate-100 p-1 text-sm font-medium"
          >
            <button
              type="button"
              role="tab"
              aria-selected={billing === "monthly"}
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-5 py-2 transition-colors ${
                billing === "monthly"
                  ? "bg-white text-primary shadow"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={billing === "yearly"}
              onClick={() => setBilling("yearly")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 transition-colors ${
                billing === "yearly"
                  ? "bg-white text-primary shadow"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Yearly
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700">
                2 months free
              </span>
            </button>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {plans.map((plan) => {
            const amount = billing === "monthly" ? plan.monthly : plan.yearly;
            const period = billing === "monthly" ? "per month" : "per year";

            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl bg-white p-8 ${
                  plan.highlighted
                    ? "shadow-2xl shadow-accent/10 ring-2 ring-accent"
                    : "shadow-sm ring-1 ring-slate-900/10"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}

                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted">{plan.description}</p>

                <p className="mt-6">
                  <span className="text-4xl font-bold text-primary">
                    {formatMoney(amount)}
                  </span>{" "}
                  <span className="text-sm text-muted">{period}</span>
                </p>
                <p className="mt-1 h-5 text-xs text-emerald-600">
                  {billing === "yearly" ? "You pay for 10 months, use all 12." : ""}
                </p>

                <Link
                  href="/signup"
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 font-medium ${
                    plan.highlighted
                      ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-hover"
                      : "bg-white text-foreground ring-1 ring-slate-900/15 hover:bg-slate-50"
                  }`}
                >
                  Start free trial
                  <ArrowRight size={18} />
                </Link>

                <ul className="mt-8 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          Plan limits and prices may change before launch. Taxes, if any, are not included.
        </p>
      </div>
    </section>
  );
}