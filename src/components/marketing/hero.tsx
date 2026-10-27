import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { HeroMockup } from "./hero-mockup";

const assurances = [
  "No payment needed to start",
  "Easy to use",
  "Full access for 3 days",
];

export function Hero() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(135deg,#f0f9ff_0%,#ffffff_50%,#ecfdf5_100%)]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700">
            <Zap size={14} />
            3-day free trial
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Accounting made simple <br className="hidden sm:block" />
            for <span className="text-accent">growing businesses</span>
          </h1>

          <p className="mt-5 max-w-lg text-lg text-muted">
            Manage sales, purchases, inventory and your books online. Try everything
            free for 3 days.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white shadow-lg shadow-primary/20 hover:bg-primary-hover"
            >
              Start free trial
              <ArrowRight size={18} />
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-medium text-foreground shadow-md shadow-slate-900/5 ring-1 ring-slate-900/5 hover:bg-slate-50"
            >
              See pricing
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            {assurances.map((text) => (
              <li key={text} className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-500" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}