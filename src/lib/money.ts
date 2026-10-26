// Money is stored as a whole number of minor units (paisa).
// 1250.50 rupees = 125050. Never use floating point for stored amounts.

const SCALE = 100; // 2 decimal places

export function parseMoney(input: string): bigint {
  const match = /^(-?)(\d+)(?:\.(\d{1,2}))?$/.exec(input.trim());
  if (!match) {
    throw new Error(`Invalid money amount: "${input}"`);
  }
  const [, sign, whole, fraction = ""] = match;
  const minor =
    BigInt(whole) * BigInt(SCALE) + BigInt(fraction.padEnd(2, "0"));
  return sign === "-" ? -minor : minor;
}

export function formatMinor(value: bigint): string {
  const negative = value < BigInt(0);
  const abs = negative ? -value : value;
  const whole = abs / BigInt(SCALE);
  const fraction = (abs % BigInt(SCALE)).toString().padStart(2, "0");
  const grouped = whole.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${negative ? "-" : ""}${grouped}.${fraction}`;
}

export function sumMinor(values: bigint[]): bigint {
  return values.reduce((total, v) => total + v, BigInt(0));
}