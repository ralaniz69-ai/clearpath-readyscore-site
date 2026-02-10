import Container from "@/components/Container";
import { ButtonLink } from "@/components/Button";

const links = [
  { label: "ReadyScore", href: "/readyscore" },
  { label: "Products", href: "/products" },
  { label: "Resources", href: "/resources" },
  { label: "Privacy", href: "/privacy" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-sm font-semibold text-slate-900">ClearPath DR Consulting</div>
            <p className="mt-3 max-w-prose text-sm leading-6 text-slate-600">
              Executive-grade DR readiness clarity—evidence-backed, board-safe.
            </p>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              Built by disaster recovery leadership focused on evidence-backed readiness.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-8">
            <div className="text-sm font-semibold text-slate-900">Links</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-slate-600 hover:text-slate-900">
                  {l.label}
                </a>
              ))}
            </div>

            <div className="mt-6">
              <ButtonLink href="/readyscore#pilot" className="h-10">
                Request a Pilot Review
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200/70 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} ClearPath DR Consulting. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-slate-700">
              Privacy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
