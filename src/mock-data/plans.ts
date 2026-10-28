// DEMO PRICING ONLY. Final plans, limits and prices are not decided.

export type Plan = {
  name: string;
  price: string;
  period: string;
  monthly: number; // rupees per month
  yearly: number; // rupees per year (demo: 10 months' price)
  description: string;
  features: string[];
  highlighted: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "Rs 4,999",
    period: "per month",
    monthly: 4999,
    yearly: 49990,
    description: "For small shops and service businesses.",
    features: [
      "1 company",
      "Sales and purchases",
      "Basic inventory",
      "Financial reports",
      "3 users",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: "Rs 9,999",
    period: "per month",
    monthly: 9999,
    yearly: 99990,
    description: "For growing trading and wholesale businesses.",
    features: [
      "Up to 3 companies",
      "Everything in Starter",
      "Multiple warehouses",
      "Approvals and audit log",
      "15 users",
    ],
    highlighted: true,
  },
];