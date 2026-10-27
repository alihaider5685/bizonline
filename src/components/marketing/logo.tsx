export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" aria-hidden="true">
      <rect x="2" y="16" width="6" height="10" rx="2" fill="#5eead4" />
      <rect x="11" y="9" width="6" height="17" rx="2" fill="#14b8a6" />
      <rect x="20" y="2" width="6" height="24" rx="2" fill="#059669" />
    </svg>
  );
}

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2">
      <LogoMark />
      <span
        className={`text-2xl font-bold tracking-tight ${
          onDark ? "text-white" : "text-primary"
        }`}
      >
        Biz<span className={onDark ? "text-emerald-400" : "text-accent"}>Online</span>
      </span>
    </span>
  );
}