import { ChevronDown } from "lucide-react";

const questions = [
  {
    q: "How does the free trial work?",
    a: "You get 3 days of full access to try BizOnline. You do not need to make any payment to start.",
  },
  {
    q: "What happens when the trial ends?",
    a: "You can still log in, but only the Billing page is available until you choose a plan. Your data is not deleted. When you subscribe, everything is available again.",
  },
  {
    q: "Can I manage more than one company?",
    a: "Yes. The Business plan is planned to include up to 3 companies, with the books of each company kept separate. Plan limits are not final yet.",
  },
  {
    q: "Is my company data kept separate from other companies?",
    a: "BizOnline is designed so that every company's records are separated, and every request is checked on the server. We will test this carefully before any real data is stored.",
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
    q: "Is it suitable for manufacturing and textile businesses?",
    a: "Those features are planned for a later stage. Trading, wholesale, retail and service businesses are covered first.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
        </div>

        <div className="mt-12 space-y-4">
          {questions.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-900/5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground">
                {item.q}
                <ChevronDown
                  size={20}
                  className="shrink-0 text-muted transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted">
          Answers describe the product as planned and may change before launch.
        </p>
      </div>
    </section>
  );
}