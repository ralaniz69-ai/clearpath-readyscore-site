import Container from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import Card from "@/components/Card";

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
    <main>
      <Container className="py-12 sm:py-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Products
          </h1>
          <p className="mt-4 max-w-prose text-base leading-7 text-slate-600">
            Built to support ReadyScore pilots now, and future offerings later—without redesign.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {products.map((p) => (
            <Card key={p.title}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-base font-semibold text-slate-900">{p.title}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{p.desc}</p>
                </div>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
                  Coming soon
                </span>
              </div>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-700">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/readyscore#pilot" className="h-10">
                  Request a Pilot Review
                </ButtonLink>
                <ButtonLink href="/readyscore#pilot" variant="secondary" className="h-10">
                  Get notified
                </ButtonLink>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                Templates may be free, or included with an annual ReadyScore subscription.
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </main>
  );
}
