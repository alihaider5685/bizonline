# BizOnline: Project Plan (Phase 0 summary)

BizOnline is an original, cloud-based, multi-company accounting and ERP SaaS.
FastAccounts is a feature reference only. No code, branding or design is copied.

## Status labels used in this project
- Implemented: written and working
- Mock: screens with demo data only
- Planned: designed but not built
- Verified: checked by a test or command whose result was actually observed

## Approved technology decisions
- Next.js (App Router), React, TypeScript (strict), Tailwind CSS
- PostgreSQL (local first) with Drizzle ORM and SQL migrations (Phase 3)
- Zod and React Hook Form for validation and forms
- Vitest, React Testing Library, Playwright for testing
- Authentication provider: to be decided in Phase 3
- Payment provider: to be decided in Phase 10
- First currency: PKR. First language: English.
- Tenant model: one customer (tenant) can own more than one company.

## Subscription flow (decided)
- Visitor sees the public website, then signs up.
- User creates a company profile, then gets a 3-day free trial.
- After the trial, without a subscription, the user can log in but only sees the Billing page.
- Data is never deleted when a trial ends. Subscribing restores full access.
- Access control is enforced on the server, not only in the interface.

## Accounting rules (must never be broken)
1. Every posted journal balances: total debits equal total credits.
2. Draft documents never affect posted financial reports.
3. Posted records are never silently edited or deleted. Corrections use reversals.
4. Every posted business document is traceable to its journal entry.
5. Reports reconcile with the ledgers.
6. Locked periods are enforced on the server.
7. Money uses PostgreSQL numeric/decimal types. Never JavaScript floating point for stored values.

## Document lifecycle
Draft, then (Submitted, Approved), then Posted, then Reversed.
Rejected and Cancelled are allowed only before posting.
Posting happens in ONE database transaction: permission and period check,
validation, journal creation, stock movement, status change, audit log.

## MVP (first working product)
Company setup, chart of accounts, journals and ledger, trial balance,
profit and loss, balance sheet, customers, suppliers, products,
sales invoice and receipt, purchase bill and payment, basic inventory (FIFO),
cash and bank, basic roles, audit log.

## Later versions
- Version 2: quotations, orders, GRN, returns, tax engine, bank reconciliation,
  approvals, attachments, warehouses, batch and expiry.
- Version 3: manufacturing, textile extension, multi-currency, budgets,
  projects, fixed assets.
- Later: HR and payroll, SMS and email, online payments, APIs,
  subscription billing, government integrations (separate projects).

## Multi-tenant security strategy
1. Every company-owned table has company_id.
2. Every request checks: is the user a member of this company, and do they have permission?
3. Database Row Level Security as a second safety layer.
4. Automated tests try to read company B data as a company A user and must fail.
5. Attachments live in private storage with temporary signed links.

## Roadmap
- Phase 0: Planning (done)
- Phase 1: Project foundation (in progress)
- Phase 2: Mock-data UI prototype
- Phase 3: Database and authentication
- Phase 4: Accounting engine
- Phase 5: Sales and purchases
- Phase 6: Inventory and warehouses
- Phase 7: Banking, tax, financial reports
- Phase 8: Manufacturing and textile (textile workflow must be confirmed with the owner first)
- Phase 9: Permissions, approvals, audit, extra modules
- Phase 10: SaaS billing and production readiness

## Known risks
- Accounting mistakes are the biggest risk, so the engine is built and tested first.
- Free hosting is not suitable for real financial data without backups.
- Tax rules change and must be configurable, never hardcoded.
- The project is large, so the MVP must stay small.