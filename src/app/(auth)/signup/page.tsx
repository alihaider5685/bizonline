"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, Receipt, Package, BarChart3, Loader2 } from "lucide-react";
import { Field } from "@/components/ui/field";

const benefits = [
  {
    icon: Receipt,
    title: "Sales and purchases",
    text: "Create invoices, record receipts and track what each party owes you.",
  },
  {
    icon: Package,
    title: "Live inventory",
    text: "See stock levels update as you buy and sell, item by item.",
  },
  {
    icon: BarChart3,
    title: "Clear reports",
    text: "Know your profit, payables and receivables without a spreadsheet.",
  },
];

/*
 * Animation notes (performance):
 * - Pure CSS, only `opacity`, `translate` and `transform` are animated.
 * - Plays once on load. Nothing loops, so there is no ongoing cost.
 * - Disabled under `prefers-reduced-motion`.
 */
const css = `
.su-in{animation:su-in .6s cubic-bezier(.22,1,.36,1) both;animation-delay:var(--d,0ms)}
.su-fade{animation:su-fade .8s ease-out both;animation-delay:var(--d,0ms)}
.su-bar{transform-origin:left;animation:su-bar .9s cubic-bezier(.65,0,.35,1) both;animation-delay:var(--d,0ms)}
@keyframes su-in{from{opacity:0;translate:0 14px}to{opacity:1;translate:0 0}}
@keyframes su-fade{from{opacity:0}to{opacity:1}}
@keyframes su-bar{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@media (prefers-reduced-motion:reduce){
  .su-in,.su-fade,.su-bar{animation:none!important}
}
`;

const d = (ms: number): CSSProperties => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function SignupPage() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    setPending(true);
    // DEMO: no account is created. Real signup comes in Phase 3.
    router.push("/setup");
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

        <div className="su-fade relative" style={d(0)}>
          <p className="text-2xl font-bold tracking-tight">
            Biz<span className="text-emerald-300">Online</span>
          </p>
        </div>

        <div className="relative max-w-md">
          <h2 className="su-in text-3xl font-bold leading-tight tracking-tight" style={d(100)}>
            Run sales, purchases and stock without the paperwork.
          </h2>

          <ul className="mt-10 space-y-6">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="su-in flex gap-4" style={d(250 + i * 120)}>
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
          className="su-fade relative flex items-center gap-2 text-sm text-white/75"
          style={d(700)}
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
            <Check size={12} strokeWidth={3} />
          </span>
          3 days free. No payment needed to start.
        </p>
      </aside>

      {/* Right: signup form */}
      <section className="flex items-center justify-center px-6 py-12 sm:px-10">
        <div className="su-in w-full max-w-sm" style={d(0)}>
          <p className="mb-8 text-2xl font-bold tracking-tight text-primary lg:hidden">
            Biz<span className="text-accent">Online</span>
          </p>

          {/* step indicator: two segments, first is filled */}
          <div className="flex items-center gap-3">
            <div className="flex flex-1 gap-1.5" aria-hidden="true">
              <span className="su-bar h-1 flex-1 rounded-full bg-accent" style={d(200)} />
              <span className="h-1 flex-1 rounded-full bg-slate-200" />
            </div>
            <p className="text-xs font-medium text-muted">Step 1 of 2</p>
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
            Start your free trial
          </h1>
          <p className="mt-2 text-sm text-muted">3 days free. No payment needed to start.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="su-in" style={d(120)}>
              <Field
                id="name"
                label="Full name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>
            <div className="su-in" style={d(200)}>
              <Field
                id="email"
                label="Work email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="su-in" style={d(280)}>
              <Field
                id="password"
                label="Password"
                type="password"
                placeholder="At least 8 characters"
                autoComplete="new-password"
                minLength={8}
                required
              />
            </div>

            <div className="su-in pt-2" style={d(360)}>
              <button
                type="submit"
                disabled={pending}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-medium text-white shadow-sm shadow-slate-900/10 transition-[background-color,transform,box-shadow] duration-150 hover:bg-primary-hover hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-80 disabled:active:scale-100"
              >
                {pending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                    Creating account...
                  </>
                ) : (
                  "Create account"
                )}
              </button>
            </div>
          </form>

          <p className="su-fade mt-8 text-center text-sm text-muted" style={d(500)}>
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </section>
      </div>
    </div>
  );
}