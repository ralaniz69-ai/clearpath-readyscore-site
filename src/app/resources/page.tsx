export const metadata = {
  title: "Resources | ClearPath ReadyScore",
  description:
    "Guides and lightweight resources for executive-grade DR readiness and evidence.",
};

const tiles = [
  {
    title: "Guides",
    desc: "Short, board-safe explainers for DR readiness conversations.",
    href: "#",
    note: "Coming soon",
  },
  {
    title: "Readiness FAQs",
    desc: "What executives ask, and what evidence answers.",
    href: "#",
    note: "Coming soon",
  },
  {
    title: "Evidence Index explained",
    desc: "How to inventory proof without turning it into busywork.",
    href: "#",
    note: "Coming soon",
  },
  {
    title: "Common DR myths",
    desc: "Useful corrections that reduce risk and wasted effort.",
    href: "#",
    note: "Coming soon",
  },
] as const;

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Resources</h1>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Lightweight, executive-grade material—focused on evidence, sequencing, and board-safe
          narratives.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((t) => (
          <div key={t.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div className="text-base font-semibold text-slate-900">{t.title}</div>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
                {t.note}
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{t.desc}</p>
            <a
              href={t.href}
              className="mt-4 inline-flex text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
            >
              View
            </a>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <div className="text-sm font-semibold text-slate-900">Want a pilot-first path?</div>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          ReadyScore is designed to turn assumptions into decision-ready clarity.
        </p>
        <a
          href="/readyscore#pilot"
          className="mt-4 inline-flex h-10 items-center justify-center rounded-full bg-slate-900 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
        >
          Request a Pilot Review
        </a>
      </div>
    </main>
  );
}
