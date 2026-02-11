import Link from "next/link";
import Container from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";

export const metadata = {
  title: "ClearPath DR Consulting",
  description:
    "Business continuity and disaster recovery consulting for leaders who need defensible readiness.",
};

const whatWeDo = [
  {
    title: "DR Program Build & Remediation",
    desc: "Policies, standards, roles, and operating rhythm that holds up in real incidents.",
  },
  {
    title: "Recovery Strategy & Testing",
    desc: "Design and run tests that prove RTO/RPO readiness—not just plan completeness.",
  },
  {
    title: "Executive & Audit Readiness",
    desc: "Translate technical risk into board-safe decisions, evidence, and priorities.",
  },
  {
    title: "Vendor & Third-Party Resilience",
    desc: "Validate critical providers, contractual recovery expectations, and exercise results.",
  },
] as const;

const whoWeServe = [
  "Healthcare and payer ecosystems",
  "Retail and multi-site operations",
  "Financial services and regulated orgs",
  "Any enterprise with material outage exposure",
] as const;

const howWeWork = [
  "Discover & baseline",
  "Validate & quantify exposure",
  "Sequence fixes & support execution",
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
                Business continuity and disaster recovery consulting for leaders who need defensible readiness.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                We help organizations reduce downtime risk, satisfy audit scrutiny, and fund the right resilience
                work—based on evidence, not assumptions.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                  Program maturity &amp; governance
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                  Recovery capability validation
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                  Audit-ready resilience reporting
                </span>
              </div>

              {/* Keep these two hero buttons exactly as-is (labels + links). */}
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
            </div>

            <div className="lg:col-span-5">
              <Card className="border-white/10 bg-white/5 text-slate-100 shadow-none">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  What to expect
                </div>
                <div className="mt-3 text-lg font-semibold">Consulting outcomes, not busywork</div>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-xs font-semibold">
                      1
                    </span>
                    <div>
                      <div className="font-semibold text-slate-100">A clear baseline</div>
                      <div className="mt-1 text-slate-200/80">
                        Where you are today across governance, recovery capability, and evidence quality.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-xs font-semibold">
                      2
                    </span>
                    <div>
                      <div className="font-semibold text-slate-100">Validation you can defend</div>
                      <div className="mt-1 text-slate-200/80">
                        Testing and proof points that stand up to executive, risk, and audit scrutiny.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-xs font-semibold">
                      3
                    </span>
                    <div>
                      <div className="font-semibold text-slate-100">Priorities that make sense</div>
                      <div className="mt-1 text-slate-200/80">
                        A practical sequence for reducing outage exposure—aligned to constraints and funding.
                      </div>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* What we do */}
      <Section
        eyebrow="Services"
        title="What we do"
        description="Focused consulting engagements that make DR readiness measurable, defensible, and fundable."
        className="border-b border-slate-200/70 bg-white"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {whatWeDo.map((c) => (
            <Card key={c.title}>
              <div className="text-base font-semibold text-slate-900">{c.title}</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{c.desc}</p>
            </Card>
          ))}
        </div>      </Section>

      {/* Who we serve */}
      <Section
        eyebrow="Fit"
        title="Who we serve"
        description="Designed for CIO, CISO, Risk, and Internal Audit teams in regulated and high-availability environments."
        className="bg-slate-50"
      >
        <Card className="bg-white">
          <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
            {whoWeServe.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* How we work */}
      <Section
        eyebrow="Approach"
        title="How we work"
        description="A simple, evidence-forward engagement flow that keeps momentum without sacrificing rigor."
        className="border-t border-slate-200/70 bg-white"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {howWeWork.map((step, idx) => (
            <Card key={step}>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Step {idx + 1}
              </div>
              <div className="mt-3 text-base font-semibold text-slate-900">{step}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Featured platform */}
      <Section
        eyebrow="Platform"
        title="Featured platform"
        description="ReadyScore remains our flagship platform—featured here, without taking over the consulting-first story."
        className="bg-slate-50"
      >
        <Card>
          <div className="text-base font-semibold text-slate-900">Featured platform: ReadyScore™</div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            ReadyScore is our flagship assessment platform that turns DR evidence into board-ready outputs—so
            executives can fund the right work in the right order.
          </p>
          <div className="mt-5">
            <Link
              href="/readyscore"
              className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-400"
            >
              Explore ReadyScore
            </Link>
          </div>
        </Card>
      </Section>

      {/* Footer lead-in (keep CTA + destination unchanged) */}
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
