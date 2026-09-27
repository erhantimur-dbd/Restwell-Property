# Restwell Property — landlord-first marketing site

Next.js App Router site for Restwell Property (UK guaranteed rent / company let).

## Pages

- `/` — Home
- `/for-landlords` — Landlord sales page (also `/guaranteed-rent` → redirect)
- `/how-it-works`
- `/about`
- `/contact`
- `/privacy` `/cookies` `/terms` `/complaints`

## Develop

```bash
npm install
npm run dev
```

## Review form email

Set environment variables (see `.env.example`):

- `RESEND_API_KEY` — Resend API key
- `REVIEW_INBOX_EMAIL` — where enquiries arrive
- `REVIEW_FROM_EMAIL` — verified sender in Resend

Without `RESEND_API_KEY`, submissions succeed in demo mode and are logged server-side.

## Placeholders still to replace

- Companies House number and registered address
- Phone number
- Redress scheme membership
- Named insurance details
- Real property photography
- Solicitor-approved legal copy
