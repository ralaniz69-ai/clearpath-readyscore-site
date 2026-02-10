import Container from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import Card from "@/components/Card";
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
      <section className="relative overflow-hidden bg-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_10%,rgba(148,163,184,0.18),transparent_60%),radial-gradient(700px_circle_at_80%_0%,rgba(56,189,248,0.14),transparent_55%)]" />
        <Container className="relative py-14 sm:py-16 lg:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
                Executive DR Readiness—
                <span className="block text-slate-100">Evidence-Backed, Board-Safe.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                ReadyScore turns DR assumptions into decision-ready clarity—so leaders can fund the right
                work, in the right order.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#pilot" className="h-11 px-5">
                  Request a Pilot Review
                </ButtonLink>
                <ButtonLink
                  href="#deliverable"
                  variant="secondary"
                  className="h-11 px-5 bg-white/0 text-white border-white/20 hover:bg-white/10 hover:text-white"
                >
                  See what executives receive
                </ButtonLink>
              </div>

              <p className="mt-7 text-xs leading-5 text-slate-300/80">
                Built by disaster recovery leadership focused on evidence-backed readiness.
              </p>
            </div>

            <div className="lg:col-span-5">
              <Card className="border-white/10 bg-white/5 text-slate-100 shadow-none">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Deliverables preview
                </div>
                <div className="mt-3 text-lg font-semibold">What executives leave with</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {deliverables.map((d) => (
                    <li key={d.title} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-slate-200/80" />
                      <div>
                        <div className="font-semibold text-slate-100">{d.title}</div>
                        <div className="mt-1 text-slate-200/80">{d.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a
                    href="#pilot"
                    className="inline-flex text-sm font-semibold text-slate-100 underline decoration-white/20 underline-offset-4 hover:decoration-white/40"
                  >
                    Request a Pilot Review
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <Section
        eyebrow="The problem"
        title="Most DR programs answer operational questions—not executive ones."
        description="ReadyScore is built for decision clarity: what won’t recover, what evidence exists, and what to do next."
        className="bg-white"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {problemCards.map((c) => (
            <Card key={c.title}>
              <div className="text-base font-semibold text-slate-900">{c.title}</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{c.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Wedge offer */}
      <Section
        eyebrow="Wedge offer"
        title="Start with a 30–45 minute Executive DR Readiness Review."
        description="A fast, structured review designed to produce a board-safe readiness story—without weeks of busywork."
        className="border-y border-slate-200/70 bg-slate-50"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <Card>
            <div className="text-sm font-semibold text-slate-900">What we review</div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Recovery assumptions vs evidence</li>
              <li>System-of-systems dependencies</li>
              <li>Test history and failure modes</li>
              <li>RTO/RPO claims and constraints</li>
            </ul>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-slate-900">What you get</div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>1-page executive brief</li>
              <li>Readiness tier + confidence</li>
              <li>Top blockers</li>
              <li>Evidence gaps</li>
            </ul>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-slate-900">What it enables</div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Funding decisions</li>
              <li>Sequencing and accountability</li>
              <li>A board-safe narrative</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Deliverables */}
      <Section
        id="deliverable"
        eyebrow="Deliverables"
        title="Executives can retell the story—without the facilitator present."
        description="ReadyScore deliverables are designed for clarity, action, and defensibility."
        className="bg-white"
      >
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card>
              <div className="text-sm font-semibold text-slate-900">Deliverables</div>
              <ul className="mt-4 space-y-4">
                {deliverables.map((d) => (
                  <li key={d.title} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{d.title}</div>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{d.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="lg:col-span-5">
            <Card className="bg-slate-50">
              <div className="text-sm font-semibold text-slate-900">Board-safe takeaway</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                A clear tier, the evidence behind it, and a sequenced plan leaders can fund—without needing the
                facilitator in the room.
              </p>
              <div className="mt-6">
                <ButtonLink href="#pilot" className="h-11 px-5">
                  Request a Pilot Review
                </ButtonLink>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Readiness check */}
      <Section
        id="readiness-check"
        eyebrow="Readiness check"
        title="Want a quick gut-check?"
        description="A lightweight diagnostic to surface evidence gaps. (Full interactive version coming soon.)"
        className="border-y border-slate-200/70 bg-slate-50"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {["Can you name the top 3 systems that would stop recovery if they fail?","For each, what is the last successful recovery test date and evidence?","Where is ownership distributed across teams/vendors?","What assumptions are driving RTO/RPO—and are they proven?","If you had 90 days, what sequence reduces risk the fastest?"].map(
            (q, idx) => (
              <Card key={q} className="p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Question {idx + 1}
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900">{q}</div>
              </Card>
            )
          )}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <ButtonLink href="#pilot" className="h-11 px-5">
            Request a Pilot Review
          </ButtonLink>
          <div className="text-xs leading-5 text-slate-500">Keep it simple: evidence, blockers, sequence.</div>
        </div>
      </Section>

      {/* Pilot */}
      <Section
        id="pilot"
        eyebrow="Request pilot"
        title="Request a Pilot Review"
        description="Short form. You’ll get a reply with next steps."
        className="bg-white"
      >
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <PilotForm />
          </div>
          <div className="lg:col-span-5">
            <Card className="bg-slate-50">
              <div className="text-sm font-semibold text-slate-900">What happens next</div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>We confirm scope and stakeholders (lightweight).</li>
                <li>We schedule the 30–45 minute executive review.</li>
                <li>You receive a one-page brief and a sequenced 90-day plan.</li>
              </ul>
              <div className="mt-6 text-xs leading-5 text-slate-500">
                Board-safe copy only. No recovery guarantees—just defensible clarity.
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}
