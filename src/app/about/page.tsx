import Container from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import Card from "@/components/Card";

export const metadata = {
  title: "About | ClearPath ReadyScore",
  description:
    "About ClearPath and the ReadyScore approach to executive-grade DR readiness clarity.",
};

export default function AboutPage() {
  return (
    <main>
      <Container className="py-12 sm:py-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">About</h1>
          <p className="mt-4 max-w-prose text-base leading-7 text-slate-600">
            ClearPath ReadyScore focuses on evidence-backed DR readiness clarity for executives. The goal
            isn’t hype—it’s a defensible story leaders can use to fund and sequence the right work.
          </p>

          <Card className="mt-10 bg-slate-50">
            <div className="text-sm font-semibold text-slate-900">What we optimize for</div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Decision-ready clarity (not feature checklists)</li>
              <li>Evidence and confidence (not assumptions)</li>
              <li>Sequenced actions (not backlogs)</li>
            </ul>
          </Card>

          <div className="mt-10">
            <ButtonLink href="/readyscore#pilot" className="h-11 px-5">
              Request a Pilot Review
            </ButtonLink>
          </div>
        </div>
      </Container>
    </main>
  );
}
