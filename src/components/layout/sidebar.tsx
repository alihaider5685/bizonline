"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navGroups } from "./nav-items";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 flex-col bg-primary text-white md:flex">
      <div className="flex h-16 items-center px-6 text-xl font-bold">
        Biz<span className="text-teal-300">Online</span>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-6">
        {navGroups.map((group) => (
          <div key={group.title} className="mt-5">
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-white/50">
              {group.title}
            </p>
            <ul className="mt-2 space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                if (!item.ready) {
                  return (
                    <li key={item.href}>
                      <div className="flex cursor-not-allowed items-center gap-3 rounded-md px-3 py-2 text-sm text-white/40">
                        <Icon size={18} />
                        <span className="flex-1">{item.label}</span>
                        <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px]">
                          Soon
                        </span>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                        active
                          ? "bg-white/15 font-medium text-white"
                          : "text-white/80 hover:bg-white/10"
                      }`}
                    >
                      <Icon size={18} />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}