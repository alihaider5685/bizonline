// DEMO PRICING ONLY. Final plans and prices are not decided.

export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "Rs 4,999",
    period: "per month",
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