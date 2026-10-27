"use client";

import { useRouter } from "next/navigation";
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

export default function CompanySetupPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // DEMO: nothing is saved. A real company record is created in Phase 3.
    router.push("/dashboard");
  }

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-accent">Step 2 of 2</p>
      <h1 className="mt-1 text-2xl font-bold text-foreground">Set up your company</h1>
      <p className="mt-1 text-sm text-muted">
        This takes a minute. Your 3-day free trial starts after this step.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Field
          id="company"
          label="Company name"
          type="text"
          placeholder="e.g. Demo Traders"
          required
        />

        <SelectField id="type" label="Type of business" options={businessTypes} />

        <SelectField id="country" label="Country" options={["Pakistan"]} />

        <SelectField
          id="currency"
          label="Base currency"
          options={["PKR"]}
          hint="Your main currency for all accounts. It should not be changed once transactions are posted."
        />

        <SelectField
          id="fy"
          label="Financial year starts in"
          options={months}
          defaultValue="July"
          hint="You can set this properly later in Settings."
        />

        <button
          type="submit"
          className="w-full rounded-md bg-primary px-4 py-2 font-medium text-white hover:bg-primary-hover"
        >
          Start my free trial
        </button>
      </form>
    </div>
  );
}