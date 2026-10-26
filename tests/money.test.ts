import { describe, expect, it } from "vitest";
import { formatMinor, parseMoney, sumMinor } from "@/lib/money";

describe("money", () => {
  it("shows why floating point is not safe for money", () => {
    expect(0.1 + 0.2).not.toBe(0.3);
  });

  it("adds amounts exactly when stored as paisa", () => {
    const total = sumMinor([parseMoney("0.10"), parseMoney("0.20")]);
    expect(total).toBe(parseMoney("0.30"));
  });

  it("parses amounts into paisa", () => {
    expect(parseMoney("1250.50")).toBe(BigInt(125050));
    expect(parseMoney("10")).toBe(BigInt(1000));
    expect(parseMoney("0.5")).toBe(BigInt(50));
    expect(parseMoney("-5.25")).toBe(BigInt(-525));
  });

  it("rejects invalid amounts", () => {
    expect(() => parseMoney("abc")).toThrow();
    expect(() => parseMoney("1.234")).toThrow();
    expect(() => parseMoney("")).toThrow();
  });

  it("formats paisa for display", () => {
    expect(formatMinor(BigInt(125050))).toBe("1,250.50");
    expect(formatMinor(BigInt(5))).toBe("0.05");
    expect(formatMinor(BigInt(-100000))).toBe("-1,000.00");
  });
});