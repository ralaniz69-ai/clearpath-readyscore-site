export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Page not found</h1>
      <p className="mt-3 text-base leading-7 text-slate-600">
        That route doesn’t exist. Use the navigation to get back on track.
      </p>
      <a
        href="/"
        className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
      >
        Go home
      </a>
    </main>
  );
}
