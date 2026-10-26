export function formatMoney(amount: number, currency = "PKR"): string {
  const prefix = currency === "PKR" ? "Rs" : currency;
  return `${prefix} ${new Intl.NumberFormat("en-PK", {
    maximumFractionDigits: 0,
  }).format(amount)}`;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}