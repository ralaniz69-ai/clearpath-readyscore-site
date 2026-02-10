import Section from "@/components/Section";

export const metadata = {
  title: "ClearPath ReadyScore",
  description:
    "Executive-grade DR readiness clarity. ReadyScore turns assumptions into evidence-backed, board-safe decisions.",
};

const whyCards = [
  {
    title: "They report activity, not recovery certainty",
    desc: "Dashboards show tasks completed. Executives need proof that critical workloads will recover—and what will not without investment.",
  },
  {
    title: "They don’t unify the story",
    desc: "Evidence is scattered across teams, vendors, and systems. Without a single narrative, funding decisions become guesswork.",
  },
  {
    title: "They don’t sequence fixes",
    desc: "Even when gaps are known, most tools can’t tell you what to do first—or how to defend tradeoffs.",
  },
] as const;

const pilotSteps = [
  {
    title: "30–45 min exec review",
    desc: "A structured conversation focused on evidence, blockers, and decision clarity.",
  },
  {
    title: "One-page brief",
    desc: "Tier + confidence, blockers, and evidence gaps—ready for leadership alignment.",
  },
  {
    title: "90-day sequence",
    desc: "A prioritized plan that reduces risk fast—without boiling the ocean.",
  },
] as const;

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Executive DR Readiness — Evidence-Backed, Board-Safe.
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-200">
              ReadyScore turns DR assumptions into decision-ready clarity.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                <span>What will NOT recover without investment</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                <span>What evidence exists—and what’s missing</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/readyscore#pilot"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100"
              >
                Request a Pilot Review
              </a>
              <a
                href="/readyscore#deliverable"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-transparent px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-white/10"
              >
                See what executives receive
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <Section
        eyebrow="Why"
        title="Why DR tools don’t answer executive questions"
        description="Most organizations have plans and platforms. Fewer have defensible proof and a sequenced fix story."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {whyCards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-base font-semibold text-slate-900">{c.title}</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How pilot works */}
      <Section
        eyebrow="How"
        title="How the pilot works"
        description="A pilot-first funnel that produces decision clarity fast—without turning DR into a multi-month project."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {pilotSteps.map((s, idx) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Step {idx + 1}
              </div>
              <div className="mt-2 text-base font-semibold text-slate-900">{s.title}</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust strip */}
      <Section
        id="about"
        eyebrow="Trust"
        title="Board-safe clarity—without over-claiming"
        description="ClearPath emphasizes defensible evidence and sequencing. Background includes Air Force service and DR leadership experience—presented without hype."
      >
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-slate-900">Executive-grade framing</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Translate technical realities into a narrative leadership can fund and defend.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Evidence-first</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Focus on what’s proven, what’s assumed, and what’s missing.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Sequenced action</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A 90-day sequence to reduce risk fast—instead of a vague backlog.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="/readyscore#pilot"
              className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Request a Pilot Review
            </a>
          </div>
        </div>
      </Section>

      {/* Footer lead-in */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-base font-semibold text-slate-900">Ready to get decision clarity?</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Start with a pilot: a short executive review and a one-page brief.
              </p>
            </div>
            <a
              href="/readyscore#pilot"
              className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Request a Pilot Review
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
