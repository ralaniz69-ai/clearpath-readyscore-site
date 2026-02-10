import Link from "next/link";
import Container from "@/components/Container";
import { ButtonLink } from "@/components/Button";

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
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-[12px] font-semibold text-white shadow-sm">
              CP
            </span>
            <span className="text-sm font-semibold tracking-tight whitespace-nowrap">
              ClearPath DR Consulting
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
            {nav.map((item) => {
              const isAnchor = item.href.includes("#");
              const cls = "transition-colors hover:text-slate-900";
              return isAnchor ? (
                <a key={item.label} href={item.href} className={cls}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} href={item.href} className={cls}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <ButtonLink href="/readyscore#pilot" className="h-10">
            Request a Pilot Review
          </ButtonLink>

          <details className="relative md:hidden">
            <summary className="inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50">
              <span className="sr-only">Open menu</span>
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-0 mt-2 w-60 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              <div className="flex flex-col p-2 text-sm">
                {nav.map((item) => {
                  const isAnchor = item.href.includes("#");
                  const className =
                    "rounded-xl px-3 py-2 font-medium text-slate-800 hover:bg-slate-50 hover:text-slate-900";

                  return isAnchor ? (
                    <a key={item.label} href={item.href} className={className}>
                      {item.label}
                    </a>
                  ) : (
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
      </Container>
    </header>
  );
}
