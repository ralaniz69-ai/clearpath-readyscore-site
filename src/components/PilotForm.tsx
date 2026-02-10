"use client";

import { useMemo, useState } from "react";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

export default function PilotForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    notes: "",
  });

  const canSubmit = useMemo(() => {
    if (status.state === "submitting") return false;
    return form.name.trim() && form.email.trim() && form.company.trim() && form.role.trim();
  }, [form, status.state]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ state: "submitting" });

    try {
      const res = await fetch("/api/pilot", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json().catch(() => null)) as
        | null
        | { ok?: boolean; error?: string };

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Submission failed.");
      }

      setStatus({ state: "success" });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setStatus({ state: "error", message });
    }
  }

  if (status.state === "success") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-sm font-semibold text-slate-900">Request received</div>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Thanks—your pilot request is in. If it’s a fit, we’ll reply with next steps and a
          short scheduling link.
        </p>
        <a
          href="/readyscore#deliverable"
          className="mt-4 inline-flex text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
        >
          Review what executives receive
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Name"
          value={form.name}
          onChange={(v) => setForm((s) => ({ ...s, name: v }))}
          placeholder="Jane Doe"
          required
        />
        <Field
          label="Work email"
          type="email"
          value={form.email}
          onChange={(v) => setForm((s) => ({ ...s, email: v }))}
          placeholder="jane@company.com"
          required
        />
        <Field
          label="Company"
          value={form.company}
          onChange={(v) => setForm((s) => ({ ...s, company: v }))}
          placeholder="Acme Corp"
          required
        />
        <Field
          label="Role"
          value={form.role}
          onChange={(v) => setForm((s) => ({ ...s, role: v }))}
          placeholder="CIO, VP IT, DR Lead"
          required
        />
        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-slate-900">Notes (optional)</label>
          <textarea
            value={form.notes}
            onChange={(e) => setForm((s) => ({ ...s, notes: e.target.value }))}
            rows={4}
            placeholder="What’s prompting the review? Any deadlines (audit, board, renewal)?"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
          />
        </div>
      </div>

      {status.state === "error" && (
        <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800">
          {status.message}
        </div>
      )}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status.state === "submitting" ? "Submitting…" : "Request a Pilot Review"}
        </button>
        <div className="text-xs leading-5 text-slate-500">
          By submitting, you agree we may contact you about ReadyScore. No spam.
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-900">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-2 h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
      />
    </div>
  );
}
