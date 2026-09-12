# Altagether Federal Funding Action Site

Advocacy microsite helping Los Angeles fire survivors contact members of Congress about federal disaster recovery funding.

Built for deployment at `action.altagether.org`.

## Stack

- Next.js (App Router)
- TypeScript
- Vercel

## Local development

```bash
npm install
cp .env.example .env.local
# Add your Geocodio API key to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|---|---|
| `GEOCODIO_API_KEY` | Server-side Geocodio key for congressional district lookup |

Never commit real API keys. Set `GEOCODIO_API_KEY` in Vercel project settings for production.

## Deployment

1. Push this repository to GitHub
2. Import the project in Vercel
3. Add `GEOCODIO_API_KEY` as an environment variable
4. Point `action.altagether.org` at the Vercel deployment

## Campaign configuration

Department of Angels tracking and source values live in `src/config/doaConfig.ts`. Politician data and scripts live in `src/data/doaCampaign.ts`.

## Partner kit source

Original Department of Angels HTML widgets are preserved in the parent project's `partner-kit/` folder for reference.
