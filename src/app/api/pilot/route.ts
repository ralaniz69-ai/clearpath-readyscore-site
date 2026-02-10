import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name?: string;
      email?: string;
      company?: string;
      role?: string;
      notes?: string;
    };

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const company = (body.company || "").trim();
    const role = (body.role || "").trim();
    const notes = (body.notes || "").trim();

    if (!name || !email || !company || !role) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const to = process.env.PILOT_TO_EMAIL;
    const from = process.env.PILOT_FROM_EMAIL;
    const apiKey = process.env.RESEND_API_KEY;

    if (!to || !from || !apiKey) {
      // Stable, non-failing behavior for staging while env vars are not set.
      // (Requests are still accepted so the funnel can be tested end-to-end.)
      console.log("[pilot] submission (env not configured)", {
        name,
        email,
        company,
        role,
        notes,
        receivedAt: new Date().toISOString(),
      });

      return NextResponse.json({ ok: true });
    }

    const resend = new Resend(apiKey);

    const subject = `Pilot request: ${company} (${name})`;
    const text = [
      "New ReadyScore pilot request:",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Role: ${role}`,
      notes ? `Notes: ${notes}` : "Notes: (none)",
      "",
      `Received: ${new Date().toISOString()}`,
    ].join("\n");

    await resend.emails.send({
      from,
      to,
      subject,
      text,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[pilot] error", err);
    return NextResponse.json(
      { ok: false, error: "Server error." },
      { status: 500 }
    );
  }
}
