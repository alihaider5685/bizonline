const styles: Record<string, string> = {
  Paid: "bg-success/10 text-success",
  Unpaid: "bg-info/10 text-info",
  Overdue: "bg-danger/10 text-danger",
  Draft: "bg-muted/10 text-muted",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
        styles[status] ?? "bg-muted/10 text-muted"
      }`}
    >
      {status}
    </span>
  );
}