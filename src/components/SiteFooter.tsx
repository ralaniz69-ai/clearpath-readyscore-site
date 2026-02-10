const links = [
  { label: "ReadyScore", href: "/readyscore" },
  { label: "Products", href: "/products" },
  { label: "Resources", href: "/resources" },
  { label: "Privacy", href: "/privacy" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="text-sm font-semibold text-slate-900">ClearPath ReadyScore</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Executive-grade DR readiness clarity—evidence-backed, board-safe.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="font-semibold text-slate-900">Quick links</div>
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-slate-600 hover:text-slate-900">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="font-semibold text-slate-900">Primary CTA</div>
            <a
              href="/readyscore#pilot"
              className="inline-flex h-10 w-fit items-center justify-center rounded-full bg-slate-900 px-4 font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Request a Pilot Review
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} ClearPath. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-slate-700">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
