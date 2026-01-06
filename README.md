# KontractHub Marketing + Docs Site (Next.js)
#vercel gives an error if you have project name with Captial so renamed
#KontractHubWebsite to kontracthub-website

Includes:
- Placeholder screenshots + diagrams (swap with real captures anytime)
- Request Demo form with Email (SMTP) + Slack notifications
- Pricing calculator (by agent count)
- Compliance glossary (marketing + docs)
- Hybrid site: marketing pages + /docs section with sidebar

## Run
```bash
npm install
npm run dev
```

## Demo notifications
Set env vars (see /docs/deploy):
- SLACK_WEBHOOK_URL
- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
- MAIL_FROM (optional)
- DEMO_TO_EMAIL
