import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { FaqItem } from "@/components/marketing/faq-item";

export const metadata: Metadata = {
  title: "FAQ | BizOnline",
  description:
    "Answers to common questions about the free trial, billing, data security and what BizOnline covers.",
};

const groups: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "Getting started",
    items: [
      {
        q: "What is BizOnline?",
        a: "BizOnline is a cloud-based accounting and business management system. It brings sales, purchases, inventory and your books together in your browser. It is under development, and the first version focuses on core accounting, sales, purchases and basic inventory.",
      },
      {
        q: "Do I need to install anything?",
        a: "No. BizOnline works in your web browser, so there is nothing to download or install.",
      },
      {
        q: "Who is it for?",
        a: "We are starting with trading, wholesale, retail and service businesses. Manufacturing and textile features are planned for a later stage.",
      },
      {
        q: "Can I use it on a phone or tablet?",
        a: "The website adapts to different screen sizes, and the app screens work best on a laptop or tablet today. A better phone layout is planned. There is no separate mobile app yet.",
      },
    ],
  },
  {
    title: "Free trial and billing",
    items: [
      {
        q: "How does the free trial work?",
        a: "You get 3 days of full access to try BizOnline. You do not need to make any payment to start.",
      },
      {
        q: "What happens when the trial ends?",
        a: "You can still log in, but only the Billing page is available until you choose a plan. Your data is not deleted. When you subscribe, everything is available again.",
      },
      {
        q: "Which payment methods will you accept?",
        a: "The payment provider has not been chosen yet. We will announce the available methods before launch.",
      },
      {
        q: "Can I change or stop my plan?",
        a: "We plan to let you change plans. The exact rules for changing and stopping a plan will be published in the Terms of Service before launch.",
      },
    ],
  },
  {
    title: "Your data and security",
    items: [
      {
        q: "Is my company data kept separate from other companies?",
        a: "BizOnline is designed so that every company's records are separated, and every request is checked on the server. We will test this carefully before any real data is stored.",
      },
      {
        q: "Who can see my data?",
        a: "People you invite to your company, according to the roles and permissions you give them. The rules for support staff access will be defined and published before launch.",
      },
      {
        q: "Are backups taken?",
        a: "Backup and restore procedures will be set up and tested before any real business records are stored.",
      },
      {
        q: "Can I export my data?",
        a: "Exporting lists and reports is planned. We will confirm the details closer to launch.",
      },
    ],
  },
  {
    title: "Accounting and features",
    items: [
      {
        q: "Is it real double-entry accounting?",
        a: "Yes. BizOnline is built on double-entry accounting. Every entry must balance, posted entries are not silently changed, and mistakes are corrected with reversals so the history stays clear.",
      },
      {
        q: "Can I manage more than one company?",
        a: "Yes. The Business plan is planned to include up to 3 companies, with the books of each kept separate. Plan limits are not final yet.",
      },
      {
        q: "Which currency does it use?",
        a: "BizOnline starts with Pakistani rupees (PKR). Support for other currencies is planned for a later version.",
      },
      {
        q: "Does it handle tax and government invoicing?",
        a: "Configurable tax rates are planned. Connections to government systems such as FBR or PRA are separate projects and are not available yet.",
      },
      {
        q: "Is it available in Urdu?",
        a: "The interface is in English for now. Urdu is planned for later.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        crumb="FAQ"
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Clear answers about the free trial, your data and what BizOnline covers."
      />

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl space-y-14 px-6">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-xl font-semibold text-primary">{group.title}</h2>
              <div className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}

          <p className="text-center text-xs text-muted">
            Answers describe the product as planned and may change before launch.
          </p>

          <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-900/5">
            <h2 className="text-xl font-semibold text-foreground">
              Ready to try it yourself?
            </h2>
            <p className="mt-2 text-muted">
              Start your 3-day free trial. No payment needed to begin.
            </p>
            <Link
              href="/signup"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white shadow-lg shadow-primary/20 hover:bg-primary-hover"
            >
              Start free trial
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}