import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-10">
      <Link href="/" className="mb-6 text-2xl font-bold text-primary">
        Biz<span className="text-accent">Online</span>
      </Link>

      <div className="w-full max-w-md rounded-lg border border-border bg-surface p-8">
        {children}
      </div>

      <p className="mt-6 max-w-md text-center text-xs text-warning">
        Demo screen. Nothing is saved and no account is created. Do not enter a real password.
      </p>
    </div>
  );
}