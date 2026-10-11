# CAELSTAR

CAELSTAR is a premium Next.js marketing and digital growth website for a Lucknow-based agency working across India and international markets. The site includes a dark futuristic design system, multiple service pages, a lead enquiry workflow and SEO-friendly content.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Nodemailer for email delivery
- Optional Supabase persistence

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the environment example and fill in your values:
   ```bash
   cp .env.example .env.local
   ```
3. Start the app:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Environment variables

The site uses the following configuration keys from `.env.local`:

- `NEXT_PUBLIC_SITE_URL` — the canonical site URL.
- `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` — optional lead storage.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `EMAIL_FROM`, `AGENCY_EMAIL` — optional transactional email integration.
- `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_ANALYTICS_ENABLED` — optional analytics, disabled by default.

## Current integration status

The project is ready to use without secret credentials. The enquiry form will still validate and respond appropriately in a browser even when email delivery and database storage are not configured. If no SMTP configuration is available, the form returns a clear fallback message directing the user to the contact details configured in the site config.

To enable persistent lead storage, add a Supabase project and create a `leads` table with fields matching the insert logic in `app/api/enquiry/route.ts`.

To enable email notifications, configure SMTP credentials in `.env.local`.

## Core pages

- `/`
- `/services`
- `/services/digital-marketing`
- `/services/paid-advertising`
- `/services/social-media-marketing`
- `/services/marketplace-management`
- `/services/website-development`
- `/services/app-development`
- `/services/ai-automation`
- `/services/branding-creative`
- `/portfolio`
- `/about`
- `/contact`
- `/faq`
- `/privacy-policy`
- `/terms`

## Notes

- Contact details in the default configuration are placeholders and should be replaced before launch.
- The portfolio includes clearly labelled concept or demo projects rather than fabricated client results.
- The enquiry form validates inputs on both the client and server, uses a honeypot check and rate limiting, and prevents silent failure by returning clear error responses.
