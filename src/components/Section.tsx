import type { ReactNode } from "react";
import Container from "@/components/Container";

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-12 sm:py-16 lg:py-20 ${className}`.trim()}>
      <Container>
        {(eyebrow || title || description) && (
          <div className="max-w-2xl">
            {eyebrow && (
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 max-w-prose text-base leading-7 text-slate-600 sm:text-[17px]">
                {description}
              </p>
            )}
          </div>
        )}
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </section>
  );
}
