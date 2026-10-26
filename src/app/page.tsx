export default function Home() {
  const colors = [
    { name: "Primary", cls: "bg-primary" },
    { name: "Accent", cls: "bg-accent" },
    { name: "Success", cls: "bg-success" },
    { name: "Danger", cls: "bg-danger" },
    { name: "Warning", cls: "bg-warning" },
    { name: "Info", cls: "bg-info" },
  ];

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold text-primary">BizOnline</h1>
      <p className="mt-1 text-muted">Color theme test (temporary page)</p>

      <div className="mt-6 rounded-lg border border-border bg-surface p-6">
        <div className="grid grid-cols-3 gap-4">
          {colors.map((c) => (
            <div key={c.name}>
              <div className={`h-16 rounded-md ${c.cls}`} />
              <p className="mt-2 text-sm">{c.name}</p>
            </div>
          ))}
        </div>

        <button className="mt-6 rounded-md bg-primary px-4 py-2 text-white hover:bg-primary-hover">
          Save
        </button>
      </div>
    </main>
  );
}