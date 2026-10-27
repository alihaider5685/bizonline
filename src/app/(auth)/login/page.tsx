"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Field } from "@/components/ui/field";

export default function LoginPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // DEMO: no real login. Real authentication comes in Phase 3.
    router.push("/dashboard");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
      <p className="mt-1 text-sm text-muted">Log in to your BizOnline account.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Field id="email" label="Email" type="email" placeholder="you@example.com" required />
        <Field id="password" label="Password" type="password" placeholder="Your password" required />

        <button
          type="submit"
          className="w-full rounded-md bg-primary px-4 py-2 font-medium text-white hover:bg-primary-hover"
        >
          Log in
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        New to BizOnline?{" "}
        <Link href="/signup" className="font-medium text-accent hover:text-accent-hover">
          Start free trial
        </Link>
      </p>
    </div>
  );
}