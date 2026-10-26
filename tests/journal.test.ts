import { describe, expect, it } from "vitest";
import { checkJournal, type JournalLine } from "@/modules/accounting/journal";
import { parseMoney } from "@/lib/money";

const ZERO = BigInt(0);

function line(accountId: string, debit: string, credit: string): JournalLine {
  return {
    accountId,
    debit: debit ? parseMoney(debit) : ZERO,
    credit: credit ? parseMoney(credit) : ZERO,
  };
}

describe("journal check", () => {
  it("accepts a balanced sales invoice entry", () => {
    const result = checkJournal([
      line("receivable", "1180.00", ""),
      line("sales", "", "1000.00"),
      line("tax-payable", "", "180.00"),
    ]);
    expect(result.ok).toBe(true);
  });

  it("rejects when debits and credits differ", () => {
    const result = checkJournal([
      line("receivable", "1000.00", ""),
      line("sales", "", "999.99"),
    ]);
    expect(result.ok).toBe(false);
  });

  it("rejects a journal with only one line", () => {
    expect(checkJournal([line("cash", "100.00", "")]).ok).toBe(false);
  });

  it("rejects a line with both debit and credit", () => {
    const result = checkJournal([
      line("cash", "100.00", "100.00"),
      line("sales", "", "100.00"),
    ]);
    expect(result.ok).toBe(false);
  });

  it("rejects negative amounts", () => {
    const result = checkJournal([
      { accountId: "cash", debit: parseMoney("-100.00"), credit: ZERO },
      line("sales", "", "-100.00"),
    ]);
    expect(result.ok).toBe(false);
  });
});