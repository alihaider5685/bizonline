"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Field } from "@/components/ui/field";

export default function SignupPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // DEMO: no account is created. Real signup comes in Phase 3.
    router.push("/setup");
  }

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-accent">Step 1 of 2</p>
      <h1 className="mt-1 text-2xl font-bold text-foreground">Start your free trial</h1>
      <p className="mt-1 text-sm text-muted">3 days free. No payment needed to start.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Field id="name" label="Full name" type="text" placeholder="Your name" required />
        <Field id="email" label="Work email" type="email" placeholder="you@example.com" required />
        <Field
          id="password"
          label="Password"
          type="password"
          placeholder="At least 8 characters"
          minLength={8}
          required
        />

        <button
          type="submit"
          className="w-full rounded-md bg-primary px-4 py-2 font-medium text-white hover:bg-primary-hover"
        >
          Create account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-accent hover:text-accent-hover">
          Log in
        </Link>
      </p>
    </div>
  );
}