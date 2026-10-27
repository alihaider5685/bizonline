import Link from "next/link";
import { Check } from "lucide-react";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { plans } from "@/mock-data/plans";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Features />

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