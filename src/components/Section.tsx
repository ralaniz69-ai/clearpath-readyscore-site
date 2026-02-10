import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(eyebrow || title || description) && (
          <div className="max-w-2xl">
            {eyebrow && (
              <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
            )}
          </div>
        )}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
