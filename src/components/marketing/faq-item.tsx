import { ChevronDown } from "lucide-react";

export function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-900/5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground">
        {q}
        <ChevronDown
          size={20}
          className="shrink-0 text-muted transition-transform group-open:rotate-180"
        />
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-muted">{a}</p>
    </details>
  );
}
