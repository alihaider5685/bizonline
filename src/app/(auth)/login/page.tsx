"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, Receipt, Package, BarChart3, Loader2 } from "lucide-react";
import { Field } from "@/components/ui/field";

const highlights = [
  {
    icon: Receipt,
    title: "Sales and purchases",
    text: "Your invoices, receipts and bills are right where you left them.",
  },
  {
    icon: Package,
    title: "Live inventory",
    text: "Check current stock levels before you place the next order.",
  },
  {
    icon: BarChart3,
    title: "Clear reports",
    text: "See today's profit, payables and receivables at a glance.",
  },
];

/*
 * Animation notes (performance):
 * - Pure CSS, only `opacity` and `translate` are animated.
 * - Plays once on load. Nothing loops, so there is no ongoing cost.
 * - Disabled under `prefers-reduced-motion`.
 */
const css = `
.li-in{animation:li-in .6s cubic-bezier(.22,1,.36,1) both;animation-delay:var(--d,0ms)}
.li-fade{animation:li-fade .8s ease-out both;animation-delay:var(--d,0ms)}
@keyframes li-in{from{opacity:0;translate:0 14px}to{opacity:1;translate:0 0}}
@keyframes li-fade{from{opacity:0}to{opacity:1}}
@media (prefers-reduced-motion:reduce){
  .li-in,.li-fade{animation:none!important}
}
`;

const d = (ms: number): CSSProperties => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function LoginPage() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    setPending(true);
    // DEMO: no real login. Real authentication comes in Phase 3.
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

          <div className="li-fade relative" style={d(0)}>
            <p className="text-2xl font-bold tracking-tight">
              Biz<span className="text-emerald-300">Online</span>
            </p>
          </div>

          <div className="relative max-w-md">
            <h2 className="li-in text-3xl font-bold leading-tight tracking-tight" style={d(100)}>
              Pick up right where you left off.
            </h2>

            <ul className="mt-10 space-y-6">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="li-in flex gap-4" style={d(250 + i * 120)}>
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
            className="li-fade relative flex items-center gap-2 text-sm text-white/75"
            style={d(700)}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check size={12} strokeWidth={3} />
            </span>
            New here? Start with 3 days free, no payment needed.
          </p>
        </aside>

        {/* Right: login form */}
        <section className="flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="li-in w-full max-w-sm" style={d(0)}>
            <p className="mb-8 text-2xl font-bold tracking-tight text-primary lg:hidden">
              Biz<span className="text-accent">Online</span>
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome back</h1>
            <p className="mt-2 text-sm text-muted">Log in to your BizOnline account.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="li-in" style={d(120)}>
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="li-in" style={d(200)}>
                <Field
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Your password"
                  autoComplete="current-password"
                  required
                />
              </div>

              <div className="li-in pt-2" style={d(280)}>
                <button
                  type="submit"
                  disabled={pending}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-medium text-white shadow-sm shadow-slate-900/10 transition-[background-color,transform,box-shadow] duration-150 hover:bg-primary-hover hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-80 disabled:active:scale-100"
                >
                  {pending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      Logging in...
                    </>
                  ) : (
                    "Log in"
                  )}
                </button>
              </div>
            </form>

            <p className="li-fade mt-8 text-center text-sm text-muted" style={d(420)}>
              New to BizOnline?{" "}
              <Link
                href="/signup"
                className="font-medium text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:underline"
              >
                Start free trial
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}