export const metadata = {
  title: "Privacy | ClearPath ReadyScore",
  description:
    "ClearPath ReadyScore privacy policy for pilot requests and website analytics.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Privacy</h1>
      <p className="mt-4 text-base leading-7 text-slate-600">
        This website collects the information you submit via forms (e.g., pilot requests) so we
        can respond and provide ReadyScore-related information.
      </p>

      <div className="mt-10 space-y-8 text-sm leading-6 text-slate-700">
        <section>
          <h2 className="text-base font-semibold text-slate-900">What we collect</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Contact details you provide (name, email, company, role)</li>
            <li>Notes you include to help us understand your request</li>
            <li>Basic technical logs for security and reliability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">How we use it</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Respond to your pilot request</li>
            <li>Schedule follow-up conversations (if requested)</li>
            <li>Improve the clarity and usefulness of ReadyScore materials</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">Sharing</h2>
          <p className="mt-2">
            We do not sell your information. We may use service providers (e.g., email delivery)
            strictly to process form submissions.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">Retention</h2>
          <p className="mt-2">
            We retain submissions long enough to respond and for reasonable business records.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">Contact</h2>
          <p className="mt-2">
            Questions? Email us at <span className="font-medium">privacy@your-domain.com</span>.
          </p>
        </section>
      </div>
    </main>
  );
}
