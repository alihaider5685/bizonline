import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "./logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-900/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="BizOnline home">
          <Logo />
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/#features" className="hidden text-foreground hover:text-accent sm:inline">
            Features
          </Link>
          <Link href="/#pricing" className="hidden text-foreground hover:text-accent sm:inline">
            Pricing
          </Link>
          <Link href="/login" className="text-foreground hover:text-accent">
            Login
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary-hover"
          >
            Start free trial
            <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}