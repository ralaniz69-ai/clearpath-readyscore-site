import Container from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import Card from "@/components/Card";

export const metadata = {
  title: "Case Studies | ClearPath ReadyScore",
  description:
    "Case studies and formats for how ReadyScore pilots translate into executive clarity.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <Container className="py-12 sm:py-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Case studies
          </h1>
          <p className="mt-4 max-w-prose text-base leading-7 text-slate-600">
            Content is coming soon. Below is the format—you’ll see as studies are published.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Card>
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-base font-semibold text-slate-900">Sample format card</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Industry, scope, readiness tier, blockers found, and the 90-day fix sequence—with a
                  board-safe narrative.
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
                Coming soon
              </span>
            </div>
            <div className="mt-5 text-sm text-slate-700">
              <div className="font-semibold text-slate-900">Includes</div>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Readiness tier + confidence</li>
                <li>Top recovery blockers</li>
                <li>Evidence index (exists vs missing)</li>
                <li>Sequenced plan to close gaps</li>
              </ul>
            </div>
            <div className="mt-7">
              <ButtonLink href="/readyscore#pilot" className="h-10">
                Request a Pilot Review
              </ButtonLink>
            </div>
          </Card>
        </div>
      </Container>
    </main>
  );
}
