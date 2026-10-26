// DEMO DATA ONLY. Not real accounting figures.

export type TxStatus = "Paid" | "Unpaid" | "Overdue" | "Draft";

export type RecentTransaction = {
  id: string;
  date: string;
  type: "Sales Invoice" | "Purchase Bill" | "Receipt" | "Payment";
  party: string;
  amount: number;
  status: TxStatus;
};

export type LowStockItem = {
  sku: string;
  name: string;
  qty: number;
  reorderLevel: number;
};

export type MonthlyPoint = {
  month: string;
  sales: number;
  purchases: number;
};

export const summary = {
  totalSales: 4850000,
  totalPurchases: 3120000,
  receivables: 1275000,
  payables: 860000,
  cashAndBank: 2430000,
  stockValue: 5640000,
};

export const recentTransactions: RecentTransaction[] = [
  { id: "INV-0042", date: "2026-10-25", type: "Sales Invoice", party: "Alpha Traders", amount: 385000, status: "Unpaid" },
  { id: "RCT-0018", date: "2026-10-24", type: "Receipt", party: "Beta Garments", amount: 250000, status: "Paid" },
  { id: "BILL-0031", date: "2026-10-23", type: "Purchase Bill", party: "City Textiles", amount: 520000, status: "Overdue" },
  { id: "PAY-0012", date: "2026-10-22", type: "Payment", party: "Noor Packaging", amount: 90000, status: "Paid" },
  { id: "INV-0041", date: "2026-10-21", type: "Sales Invoice", party: "Gamma Stores", amount: 140000, status: "Draft" },
];

export const lowStock: LowStockItem[] = [
  { sku: "FAB-001", name: "Cotton Fabric (metre)", qty: 120, reorderLevel: 500 },
  { sku: "YRN-014", name: "Polyester Yarn (kg)", qty: 35, reorderLevel: 100 },
  { sku: "PKG-003", name: "Packing Boxes (pcs)", qty: 60, reorderLevel: 200 },
];

export const monthlyTrend: MonthlyPoint[] = [
  { month: "Jan", sales: 380000, purchases: 260000 },
  { month: "Feb", sales: 420000, purchases: 300000 },
  { month: "Mar", sales: 510000, purchases: 340000 },
  { month: "Apr", sales: 460000, purchases: 310000 },
  { month: "May", sales: 530000, purchases: 380000 },
  { month: "Jun", sales: 490000, purchases: 330000 },
  { month: "Jul", sales: 560000, purchases: 360000 },
  { month: "Aug", sales: 600000, purchases: 400000 },
  { month: "Sep", sales: 450000, purchases: 290000 },
  { month: "Oct", sales: 450000, purchases: 150000 },
];