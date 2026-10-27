import Link from "next/link";
import { ArrowRight, UserPlus, Building2, Rocket, type LucideIcon } from "lucide-react";

type Step = {
  number: number;
  icon: LucideIcon;
  title: string;
  text: string;
  tile: string;
};

const steps: Step[] = [
  {
    number: 1,
    icon: UserPlus,
    title: "Create your account",
    text: "Sign up with your name and email. It takes about a minute.",
    tile: "bg-emerald-50 text-emerald-600",
  },
  {
    number: 2,
    icon: Building2,
    title: "Set up your company",
    text: "Enter your company name, currency and financial year start.",
    tile: "bg-sky-50 text-sky-600",
  },
  {
    number: 3,
    icon: Rocket,
    title: "Start working",
    text: "Add customers and products, create invoices, and watch your reports fill in.",
    tile: "bg-violet-50 text-violet-600",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            How it works
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Get started in three simple steps
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
        </div>

        <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* dashed line joining the steps (large screens only) */}
          <div className="absolute left-[17%] right-[17%] top-7 hidden border-t-2 border-dashed border-emerald-300 md:block" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white shadow-lg shadow-primary/20 ring-4 ring-slate-50">
                  {step.number}
                </div>

                <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                  <div
                    className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl ${step.tile}`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white shadow-lg shadow-primary/20 hover:bg-primary-hover"
          >
            Start free trial
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}