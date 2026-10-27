"use client";

import { useState } from "react";
import { Check, Lock } from "lucide-react";
import { plans } from "@/mock-data/plans";

type TrialState = "active" | "ended";

export default function BillingPage() {
  const [state, setState] = useState<TrialState>("active");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Billing</h1>
        <p className="mt-1 text-sm text-warning">
          Demo screen. No payment is connected and nothing is charged.
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-lg border border-dashed border-border bg-surface p-3 text-sm">
        <span className="text-muted">Demo view:</span>
        <button
          type="button"
          onClick={() => setState("active")}
          className={`rounded-md px-3 py-1 ${
            state === "active" ? "bg-primary text-white" : "border border-border"
          }`}
        >
          Trial running
        </button>
        <button
          type="button"
          onClick={() => setState("ended")}
          className={`rounded-md px-3 py-1 ${
            state === "ended" ? "bg-primary text-white" : "border border-border"
          }`}
        >
          Trial ended
        </button>
      </div>

      {state === "active" ? (
        <section className="rounded-lg border border-border bg-surface p-6">
          <p className="text-sm text-muted">Current status</p>
          <p className="mt-1 text-xl font-semibold text-foreground">Free trial</p>
          <p className="mt-2 text-sm text-foreground">
            <span className="font-semibold text-warning">3 days left.</span> You can use every
            feature during the trial. Choose a plan any time to continue after it ends.
          </p>
        </section>
      ) : (
        <section className="rounded-lg border border-danger/30 bg-danger/5 p-6">
          <p className="flex items-center gap-2 text-lg font-semibold text-danger">
            <Lock size={18} />
            Your free trial has ended
          </p>
          <p className="mt-2 text-sm text-foreground">
            Your data is safe and nothing has been deleted. Choose a plan to unlock your
            account again. Until then, only this Billing page is available.
          </p>
        </section>
      )}

      <div className="grid max-w-3xl gap-6 sm:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg border bg-surface p-6 ${
              plan.highlighted ? "border-accent ring-1 ring-accent" : "border-border"
            }`}
          >
            <h2 className="text-lg font-semibold text-foreground">{plan.name}</h2>
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
            <button
              type="button"
              disabled
              title="Payment provider is not connected yet (demo)"
              className="mt-6 w-full cursor-not-allowed rounded-md bg-primary/50 px-4 py-2 font-medium text-white"
            >
              Subscribe (not connected yet)
            </button>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted">
        In the real version, an expired trial is blocked on the server, not just hidden in the
        screen. Payment provider will be chosen in Phase 10.
      </p>
    </div>
  );
}