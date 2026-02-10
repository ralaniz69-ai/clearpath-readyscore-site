export const metadata = {
  title: "Products | ClearPath ReadyScore",
  description:
    "Future-ready offerings: DR plan templates and application classification (tiering) forms.",
};

const products = [
  {
    title: "DR Plan Templates",
    desc:
      "Board-safe templates, runbooks, and a testing checklist designed to surface evidence—not just intent.",
    bullets: ["Templates", "Runbooks", "Testing checklist"],
  },
  {
    title: "Application Classification (Tiering) Forms",
    desc:
      "A consistent tiering workflow that produces defensible prioritization and reduces subjective debate.",
    bullets: ["Tier definitions", "Decision prompts", "Audit-friendly rationale"],
  },
] as const;

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Products</h1>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Built to support ReadyScore pilots now, and future offerings later—without redesign.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {products.map((p) => (
          <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-base font-semibold text-slate-900">{p.title}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.desc}</p>
              </div>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
                Coming soon
              </span>
            </div>

            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/readyscore#pilot"
                className="inline-flex h-10 items-center justify-center rounded-full bg-slate-900 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Request a Pilot Review
              </a>
              <a
                href="/readyscore#pilot"
                className="inline-flex h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Get notified
              </a>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Templates may be free, or included with an annual ReadyScore subscription.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
