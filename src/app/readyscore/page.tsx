import PilotForm from "@/components/PilotForm";
import Section from "@/components/Section";

export const metadata = {
  title: "ReadyScore | ClearPath ReadyScore",
  description:
    "ReadyScore turns DR assumptions into decision-ready clarity with evidence, blockers, and a sequenced fix plan.",
};

const deliverables = [
  {
    title: "Readiness Tier + Confidence",
    desc: "A clear tier and the evidence-backed confidence behind it.",
  },
  {
    title: "Top Recovery Blockers",
    desc: "The few constraints that will stop recovery without investment.",
  },
  {
    title: "Evidence Index (exists vs missing)",
    desc: "A map of proof—what you have, what’s missing, and what matters.",
  },
  {
    title: "90-day Sequenced Fix Plan",
    desc: "A short, prioritized plan that sequences fixes to reduce risk fast.",
  },
] as const;

const problemCards = [
  {
    title: "Plans ≠ Proof",
    desc: "A plan can be complete and still untestable. Executives need evidence that recovery works.",
  },
  {
    title: "Ownership is distributed",
    desc: "DR spans infra, apps, vendors, and data—no single owner sees the whole story.",
  },
  {
    title: "Audits don’t sequence fixes",
    desc: "Audit findings don’t tell you what to do first—or how to explain tradeoffs to a board.",
  },
] as const;

export default function ReadyScorePage() {
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
              ReadyScore turns DR assumptions into decision-ready clarity—so leaders can fund the
              right work, in the right order.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pilot"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100"
              >
                Request a Pilot Review
              </a>
              <a
                href="#deliverable"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-transparent px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-white/10"
              >
                See what executives receive
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <Section
        eyebrow="The problem"
        title="Most DR programs answer operational questions—not executive ones."
        description="ReadyScore is built for decision clarity: what won’t recover, what evidence exists, and what to do next."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {problemCards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-base font-semibold text-slate-900">{c.title}</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Wedge offer */}
      <Section
        eyebrow="Wedge offer"
        title="Start with a 30–45 minute Executive DR Readiness Review."
        description="A fast, structured review designed to produce a board-safe readiness story—without weeks of busywork."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">What we review</div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Recovery assumptions vs evidence</li>
              <li>System-of-systems dependencies</li>
              <li>Test history and failure modes</li>
              <li>RTO/RPO claims and constraints</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">What you get</div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>1-page executive brief</li>
              <li>Readiness tier + confidence</li>
              <li>Top blockers</li>
              <li>Evidence gaps</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">What it enables</div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Funding decisions</li>
              <li>Sequencing and accountability</li>
              <li>A board-safe narrative</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Deliverables */}
      <Section
        id="deliverable"
        eyebrow="Deliverables"
        title="Executives can retell the story—without the facilitator present."
        description="ReadyScore deliverables are designed for clarity, action, and defensibility."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {deliverables.map((d) => (
            <div key={d.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-base font-semibold text-slate-900">{d.title}</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{d.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Readiness check */}
      <Section
        id="readiness-check"
        eyebrow="Readiness check"
        title="Want a quick gut-check?"
        description="A lightweight diagnostic to surface evidence gaps. (Full interactive version coming soon.)"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <ol className="list-decimal space-y-3 pl-5 text-sm text-slate-700">
            <li>Can you name the top 3 systems that would stop recovery if they fail?</li>
            <li>For each, what is the last successful recovery test date and evidence?</li>
            <li>Where is ownership distributed across teams/vendors?</li>
            <li>What assumptions are driving RTO/RPO—and are they proven?</li>
            <li>If you had 90 days, what sequence reduces risk the fastest?</li>
          </ol>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="#pilot"
              className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Request a Pilot Review
            </a>
            <div className="text-xs leading-5 text-slate-500">
              Keep it simple: evidence, blockers, sequence.
            </div>
          </div>
        </div>
      </Section>

      {/* Pilot */}
      <Section
        id="pilot"
        eyebrow="Request pilot"
        title="Request a Pilot Review"
        description="Short form. You’ll get a reply with next steps."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <PilotForm />
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-sm font-semibold text-slate-900">What happens next</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>We confirm scope and stakeholders (lightweight).</li>
              <li>We schedule the 30–45 minute executive review.</li>
              <li>You receive a one-page brief and a sequenced 90-day plan.</li>
            </ul>
            <div className="mt-6 text-xs leading-5 text-slate-500">
              Board-safe copy only. No recovery guarantees—just defensible clarity.
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
