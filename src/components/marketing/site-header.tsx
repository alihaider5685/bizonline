import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold text-primary">
          Biz<span className="text-accent">Online</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <a href="/#features" className="hidden text-muted hover:text-foreground sm:inline">
            Features
          </a>
          <a href="/#pricing" className="hidden text-muted hover:text-foreground sm:inline">
            Pricing
          </a>
          <Link href="/login" className="text-foreground hover:text-primary">
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-primary px-4 py-2 font-medium text-white hover:bg-primary-hover"
          >
            Start free trial
          </Link>
        </nav>
      </div>
    </header>
  );
}