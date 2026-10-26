import { formatMinor, sumMinor } from "@/lib/money";

export type JournalLine = {
  accountId: string;
  debit: bigint;
  credit: bigint;
};

export type JournalCheck = { ok: true } | { ok: false; reason: string };

const ZERO = BigInt(0);

export function checkJournal(lines: JournalLine[]): JournalCheck {
  if (lines.length < 2) {
    return { ok: false, reason: "A journal needs at least two lines." };
  }

  for (const line of lines) {
    if (line.debit < ZERO || line.credit < ZERO) {
      return { ok: false, reason: "Amounts cannot be negative." };
    }
    if (line.debit > ZERO && line.credit > ZERO) {
      return { ok: false, reason: "A line cannot have both debit and credit." };
    }
    if (line.debit === ZERO && line.credit === ZERO) {
      return { ok: false, reason: "A line cannot have zero debit and zero credit." };
    }
  }

  const totalDebit = sumMinor(lines.map((l) => l.debit));
  const totalCredit = sumMinor(lines.map((l) => l.credit));

  if (totalDebit !== totalCredit) {
    return {
      ok: false,
      reason: `Debits (${formatMinor(totalDebit)}) do not equal credits (${formatMinor(totalCredit)}).`,
    };
  }

  return { ok: true };
}