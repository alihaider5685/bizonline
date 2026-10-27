import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "./logo";

type FooterLink = { label: string; href?: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Start free trial", href: "/signup" },
      { label: "Login", href: "/login" },
    ],
  },
  {
    title: "Company",
    links: [{ label: "About us" }, { label: "Contact" }, { label: "Support" }],
  },
  {
    title: "Legal",
    links: [{ label: "Privacy policy" }, { label: "Terms of service" }],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Call to action */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Ready to try BizOnline?</h2>
            <p className="mt-2 text-white/70">
              Start your 3-day free trial. No payment needed to begin.
            </p>
          </div>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white hover:bg-accent-hover"
          >
            Start free trial
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Links */}
        <div className="grid gap-10 py-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Logo onDark />
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Accounting, inventory and business management in one place, for
              growing businesses.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <Link href={link.href} className="text-white/70 hover:text-white">
                        {link.label}
                      </Link>
                    ) : (
                      <span className="flex items-center gap-2 text-white/40">
                        {link.label}
                        <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px]">
                          Soon
                        </span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col justify-between gap-2 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row">
          <p>© 2026 BizOnline. All rights reserved.</p>
          <p>Demo website for development. Plans, prices and features shown are placeholders.</p>
        </div>
      </div>
    </footer>
  );
}