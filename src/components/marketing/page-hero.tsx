import Link from "next/link";
import { ChevronRight } from "lucide-react";

type PageHeroProps = {
  crumb: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

export function PageHero({ crumb, eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="bg-[linear-gradient(135deg,#f0f9ff_0%,#ffffff_50%,#ecfdf5_100%)]">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-1 text-sm text-muted"
        >
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-foreground">{crumb}</span>
        </nav>

        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">{subtitle}</p>
        {children}
      </div>
    </section>
  );
}