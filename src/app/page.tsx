import Container from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import Card from "@/components/Card";
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
      <section className="relative overflow-hidden bg-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_10%,rgba(148,163,184,0.20),transparent_60%),radial-gradient(700px_circle_at_80%_0%,rgba(56,189,248,0.14),transparent_55%)]" />
        <Container className="relative py-14 sm:py-16 lg:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
                ClearPath DR Consulting
              </h1>
              <p className="mt-4 max-w-2xl text-base font-normal leading-7 text-slate-200/85 sm:text-lg">
                Board-safe disaster recovery readiness—built on evidence, not assumptions.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                We help leaders see what won’t recover, why, and the fastest path to defensible readiness.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                  Evidence-backed readiness
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                  Decision sequencing
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                  Audit defensible outputs
                </span>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/readyscore#pilot" className="h-11 px-5">
                  Request a Pilot Review
                </ButtonLink>
                <ButtonLink
                  href="/readyscore#deliverable"
                  variant="secondary"
                  className="h-11 px-5 bg-white/0 text-white border-white/20 hover:bg-white/10 hover:text-white"
                >
                  See what executives receive
                </ButtonLink>
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-200/70">
                Designed for CIO, CISO, Risk, and Audit leadership.
              </p>

              <p className="mt-6 text-xs leading-5 text-slate-300/80">
                Built by disaster recovery leadership focused on evidence-backed readiness.
              </p>
            </div>

            <div className="lg:col-span-5">
              <Card className="border-white/10 bg-white/5 text-slate-100 shadow-none">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  What we deliver
                </div>
                <div className="mt-3 text-lg font-semibold">What leaders leave with</div>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-xs font-semibold">
                      1
                    </span>
                    <div>
                      <div className="font-semibold text-slate-100">Executive DR Readiness Brief</div>
                      <div className="mt-1 text-slate-200/80">A brief leadership can align on and use to fund decisions.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-xs font-semibold">
                      2
                    </span>
                    <div>
                      <div className="font-semibold text-slate-100">Evidence Index (exists vs missing)</div>
                      <div className="mt-1 text-slate-200/80">A map of proof that separates assumptions from evidence.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-xs font-semibold">
                      3
                    </span>
                    <div>
                      <div className="font-semibold text-slate-100">Top Recovery Blockers</div>
                      <div className="mt-1 text-slate-200/80">The constraints most likely to stop recovery without investment.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-xs font-semibold">
                      4
                    </span>
                    <div>
                      <div className="font-semibold text-slate-100">Sequenced Fix Plan (30/60/90)</div>
                      <div className="mt-1 text-slate-200/80">A practical sequence leaders can execute and defend.</div>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Why */}
      <Section
        eyebrow="Why"
        title="Why DR tools don’t answer executive questions"
        description="Most organizations have plans and platforms. Fewer have defensible proof and a sequenced fix story."
        className="border-b border-slate-200/70 bg-white"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {whyCards.map((c) => (
            <Card key={c.title}>
              <div className="text-base font-semibold text-slate-900">{c.title}</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{c.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* How pilot works */}
      <Section
        eyebrow="How"
        title="How the pilot works"
        description="A pilot-first funnel that produces decision clarity fast—without turning DR into a multi-month project."
        className="bg-slate-50"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {pilotSteps.map((s, idx) => (
            <Card key={s.title}>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Step {idx + 1}
              </div>
              <div className="mt-3 text-base font-semibold text-slate-900">{s.title}</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Trust strip */}
      <Section
        id="about"
        eyebrow="Trust"
        title="Board-safe clarity—without over-claiming"
        description="ClearPath emphasizes defensible evidence and sequencing. Background includes Air Force service and DR leadership experience—presented without hype."
        className="border-t border-slate-200/70 bg-white"
      >
        <Card className="bg-slate-50">
          <div className="grid gap-6 md:grid-cols-3">
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

          <div className="mt-8">
            <ButtonLink href="/readyscore#pilot" className="h-11 px-5">
              Request a Pilot Review
            </ButtonLink>
          </div>
        </Card>
      </Section>

      {/* Footer lead-in */}
      <section className="border-t border-slate-200/70 bg-slate-50">
        <Container className="py-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-base font-semibold text-slate-900">Ready to get decision clarity?</div>
              <p className="mt-2 max-w-prose text-sm leading-6 text-slate-600">
                Start with a pilot: a short executive review and a one-page brief.
              </p>
            </div>
            <ButtonLink href="/readyscore#pilot" className="h-11 px-5">
              Request a Pilot Review
            </ButtonLink>
          </div>
        </Container>
      </section>
    </main>
  );
}
