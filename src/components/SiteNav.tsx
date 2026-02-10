import Link from "next/link";

const nav = [
  { label: "Home", href: "/" },
  { label: "ReadyScore", href: "/readyscore" },
  { label: "Products", href: "/products" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/#about" },
] as const;

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-slate-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-sm font-semibold text-white">
              CP
            </span>
            <span className="hidden sm:inline">ClearPath ReadyScore</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {nav.map((item) => {
              const isAnchor = item.href.includes("#");
              if (isAnchor) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-slate-900"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-slate-900"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/readyscore#pilot"
            className="inline-flex h-10 items-center justify-center rounded-full bg-slate-900 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            Request a Pilot Review
          </a>

          <details className="relative md:hidden">
            <summary className="inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
              <span className="sr-only">Open menu</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              <div className="flex flex-col p-2 text-sm">
                {nav.map((item) => {
                  const isAnchor = item.href.includes("#");
                  const className =
                    "rounded-xl px-3 py-2 font-medium text-slate-800 hover:bg-slate-50 hover:text-slate-900";

                  if (isAnchor) {
                    return (
                      <a key={item.label} href={item.href} className={className}>
                        {item.label}
                      </a>
                    );
                  }

                  return (
                    <Link key={item.label} href={item.href} className={className}>
                      {item.label}
                    </Link>
                  );
                })}

                <div className="my-2 h-px bg-slate-100" />
                <a
                  href="/readyscore#pilot"
                  className="rounded-xl bg-slate-900 px-3 py-2 font-semibold text-white hover:bg-slate-800"
                >
                  Request a Pilot Review
                </a>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
