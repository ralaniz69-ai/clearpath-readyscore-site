# ClearPath ReadyScore Marketing Site

Next.js (App Router) + TypeScript + TailwindCSS. Deployed on Vercel.

## Local dev

```bash
npm install
npm run dev
```

## Pilot request form

The primary conversion action is **Request a Pilot Review** → `/readyscore#pilot`.

The form posts to `POST /api/pilot`.

### Email delivery (recommended)
This project uses **Resend** when environment variables are set.

Set these env vars in Vercel (and optionally in a local `.env.local`):

- `RESEND_API_KEY` = your Resend API key
- `PILOT_TO_EMAIL` = where pilot requests should be sent (Rob)
- `PILOT_FROM_EMAIL` = a verified sender (e.g. `pilot@yourdomain.com`)

Optional:
- `NEXT_PUBLIC_SITE_URL` = your deployed site URL (for OpenGraph/metadataBase).

If env vars are not set, the endpoint will still return `ok: true` and log submissions to the server console (so the funnel can be tested in staging).

## Publishing changes

Pushes to `main` trigger an automatic Vercel deployment.
