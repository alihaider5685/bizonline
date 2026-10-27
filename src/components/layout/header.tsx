import Link from "next/link";

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-surface px-6">
      <div>
        <p className="text-sm font-semibold text-foreground">Demo Company Ltd</p>
        <p className="text-xs text-muted">FY 2026 · PKR</p>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/billing"
          className="rounded-full bg-warning/10 px-3 py-1 text-xs font-medium text-warning hover:bg-warning/20"
        >
          Free trial: 3 days left (demo)
        </Link>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
          A
        </div>
      </div>
    </header>
  );
}