export const metadata = {
  title: "About | ClearPath ReadyScore",
  description:
    "About ClearPath and the ReadyScore approach to executive-grade DR readiness clarity.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">About</h1>
      <p className="mt-4 text-base leading-7 text-slate-600">
        ClearPath ReadyScore focuses on evidence-backed DR readiness clarity for executives.
        The goal isn’t hype—it’s a defensible story leaders can use to fund and sequence the
        right work.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <div className="text-sm font-semibold text-slate-900">What we optimize for</div>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Decision-ready clarity (not feature checklists)</li>
          <li>Evidence and confidence (not assumptions)</li>
          <li>Sequenced actions (not backlogs)</li>
        </ul>
      </div>

      <div className="mt-10">
        <a
          href="/readyscore#pilot"
          className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
        >
          Request a Pilot Review
        </a>
      </div>
    </main>
  );
}
