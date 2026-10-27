"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { useRouter } from "next/navigation";
import { Building2, Coins, CalendarDays, Check, Loader2 } from "lucide-react";
import { Field } from "@/components/ui/field";
import { SelectField } from "@/components/ui/select-field";

const businessTypes = [
  "Trading",
  "Wholesale",
  "Retail",
  "Services",
  "Manufacturing",
  "Textile",
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const reasons = [
  {
    icon: Building2,
    title: "Your company",
    text: "Your company name and business type are used across your account.",
  },
  {
    icon: Coins,
    title: "Currency",
    text: "Your base currency is used for all accounts, so choose it carefully.",
  },
  {
    icon: CalendarDays,
    title: "Financial year",
    text: "Reports follow your financial year. You can fine-tune it later in Settings.",
  },
];

/*
 * Animation notes (performance):
 * - Pure CSS, only `opacity`, `translate` and `transform` are animated.
 * - Plays once on load. Nothing loops, so there is no ongoing cost.
 * - Disabled under `prefers-reduced-motion`.
 */
const css = `
.st-in{animation:st-in .6s cubic-bezier(.22,1,.36,1) both;animation-delay:var(--d,0ms)}
.st-fade{animation:st-fade .8s ease-out both;animation-delay:var(--d,0ms)}
.st-bar{transform-origin:left;animation:st-bar .9s cubic-bezier(.65,0,.35,1) both;animation-delay:var(--d,0ms)}
@keyframes st-in{from{opacity:0;translate:0 14px}to{opacity:1;translate:0 0}}
@keyframes st-fade{from{opacity:0}to{opacity:1}}
@keyframes st-bar{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@media (prefers-reduced-motion:reduce){
  .st-in,.st-fade,.st-bar{animation:none!important}
}
`;

const d = (ms: number): CSSProperties => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function CompanySetupPage() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    setPending(true);
    // DEMO: nothing is saved. A real company record is created in Phase 3.
    router.push("/dashboard");
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        <style>{css}</style>

        {/* Left: product side (desktop only) */}
        <aside className="relative hidden overflow-hidden bg-gradient-to-br from-primary to-primary/90 p-12 text-white lg:flex lg:flex-col lg:justify-between">
          {/* static decorative glows (never animated, so no extra paint cost) */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

          <div className="st-fade relative" style={d(0)}>
            <p className="text-2xl font-bold tracking-tight">
              Biz<span className="text-emerald-300">Online</span>
            </p>
          </div>

          <div className="relative max-w-md">
            <h2 className="st-in text-3xl font-bold leading-tight tracking-tight" style={d(100)}>
              Almost there. Tell us about your company.
            </h2>

            <ul className="mt-10 space-y-6">
              {reasons.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="st-in flex gap-4" style={d(250 + i * 120)}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-white/70">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <p
            className="st-fade relative flex items-center gap-2 text-sm text-white/75"
            style={d(700)}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check size={12} strokeWidth={3} />
            </span>
            Your 3-day free trial starts after this step.
          </p>
        </aside>

        {/* Right: company setup form */}
        <section className="flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="st-in w-full max-w-sm" style={d(0)}>
            <p className="mb-8 text-2xl font-bold tracking-tight text-primary lg:hidden">
              Biz<span className="text-accent">Online</span>
            </p>

            {/* step indicator: both segments filled, second one fills in */}
            <div className="flex items-center gap-3">
              <div className="flex flex-1 gap-1.5" aria-hidden="true">
                <span className="h-1 flex-1 rounded-full bg-accent" />
                <span className="st-bar h-1 flex-1 rounded-full bg-accent" style={d(200)} />
              </div>
              <p className="text-xs font-medium text-muted">Step 2 of 2</p>
            </div>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
              Set up your company
            </h1>
            <p className="mt-2 text-sm text-muted">
              This takes a minute. Your 3-day free trial starts after this step.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="st-in" style={d(120)}>
                <Field
                  id="company"
                  label="Company name"
                  type="text"
                  placeholder="e.g. Demo Traders"
                  autoComplete="organization"
                  required
                />
              </div>

              <div className="st-in" style={d(190)}>
                <SelectField id="type" label="Type of business" options={businessTypes} />
              </div>

              <div className="st-in" style={d(260)}>
                <SelectField id="country" label="Country" options={["Pakistan"]} />
              </div>

              <div className="st-in" style={d(330)}>
                <SelectField
                  id="currency"
                  label="Base currency"
                  options={["PKR"]}
                  hint="Your main currency for all accounts. It should not be changed once transactions are posted."
                />
              </div>

              <div className="st-in" style={d(400)}>
                <SelectField
                  id="fy"
                  label="Financial year starts in"
                  options={months}
                  defaultValue="July"
                  hint="You can set this properly later in Settings."
                />
              </div>

              <div className="st-in pt-2" style={d(470)}>
                <button
                  type="submit"
                  disabled={pending}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-medium text-white shadow-sm shadow-slate-900/10 transition-[background-color,transform,box-shadow] duration-150 hover:bg-primary-hover hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-80 disabled:active:scale-100"
                >
                  {pending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      Setting up...
                    </>
                  ) : (
                    "Start my free trial"
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}