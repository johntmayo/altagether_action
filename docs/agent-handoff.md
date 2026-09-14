# Handoff: Altagether Federal Funding Action Site

## Project summary

Build and continue developing a **standalone advocacy microsite for Altagether** that helps Los Angeles fire survivors contact members of Congress about federal disaster recovery funding.

**Target domain:** `action.altagether.org`  
**GitHub repo:** `https://github.com/johntmayo/altagether_action`  
**Deployment:** Vercel (project name may be `altogether-action` or similar)  
**Stack:** Next.js 16 (App Router), TypeScript, CSS Modules — no Tailwind, no CMS, no database

---

## What exists today (v1 — shipped)

A working first version is live (or deploying) on Vercel. Core functionality verified:

- Homepage with Altagether **Guided Experience** layout (hero, numbered sections)
- **Address lookup** via native React + server-side `/api/lookup` Geocodio proxy
- Lookup results with **visible phone numbers + contact form URLs + copy buttons** (featured and generic reps)
- **DOA campaign tracking** for featured politicians (call / email / post) via `src/lib/tracking.ts`
- **Native script accordions** with copy buttons (senators, reps, 6 leadership scripts)
- **Three Softr iframe embeds** (CA senators, CA House delegation, congressional leadership)
- Mobile-first responsive layout
- `.env.example` with `GEOCODIO_API_KEY`

---

## Repository layout

```text
/
├── src/                    # Next.js app (deployed)
│   ├── app/                # page.tsx, layout.tsx, globals.css, api/lookup/
│   ├── components/         # Hero, Section, AddressLookup, RepresentativeCard, etc.
│   ├── config/doaConfig.ts # DOA tracking URL + source
│   ├── data/doaCampaign.ts # Politician data, scripts, Softr embed URLs
│   ├── lib/                # tracking, copyToClipboard, formatPhone
│   └── types/lookup.ts
├── public/                 # logo-white.png, logo-color.png
├── docs/                   # Reference only — NOT deployed
│   ├── build-brief.md
│   ├── style-guide.md
│   ├── partner-kit/        # Original DOA HTML widgets (source of truth for campaign content)
│   └── assets/             # Original logos, partner kit zip
├── .env.example
└── README.md
```

**Important:** The app lives at the **repo root**. Do not recreate a nested `altagether-action/` subdirectory.

---

## Design source of truth

Use **`docs/style-guide.md`** (Altagether Action-Oriented Digital Style Guide).

- **Archetype:** Guided Experience (centered Deep Space Blue hero, step cards, narrow column ~760px)
- **Fonts:** Chivo (UI), Lora (reading copy) — loaded in `layout.tsx`
- **Colors:** Deep Space Blue `#304059`, Golden Orange `#f59e09`, Porcelain `#fdfbf8`, etc.
- **Logo:** `public/logo-white.png` in hero (128px height). Original assets in `docs/assets/`. Do not invent or redraw the logo.

Full build requirements: **`docs/build-brief.md`**

---

## Department of Angels (DOA) integration rules

The partner kit in `docs/partner-kit/` is **authoritative for campaign content** unless John explicitly asks to change it:

- Advocacy **scripts** — preserve verbatim
- Politician phone numbers, contact URLs, district mappings — in `src/data/doaCampaign.ts`
- Softr embed URLs and iframe IDs — in `src/data/doaCampaign.ts` → `softrEmbeds`
- Tracking endpoint and source — in `src/config/doaConfig.ts`

**Do not:**

- Expose `GEOCODIO_API_KEY` client-side
- Store submitted addresses
- Rewrite DOA scripts without explicit approval
- Change Softr URLs/block identifiers
- Change `trackingSource` from `"partner"` to `"altagether"` without DOA confirmation

**Geocodio API key:** DOA supplied one in `docs/partner-kit/.../lookup-partner.html` (variable `KEY` at top of script block). Currently set in Vercel as `GEOCODIO_API_KEY`. Confirm with DOA whether Altagether should use theirs long-term or obtain its own.

---

## Open questions (do not invent answers)

1. Are Softr embeds DOA's long-term maintained source of truth, or should politician cards be rebuilt natively?
2. Altagether's own Geocodio key vs. DOA's shared partner key?
3. Should `trackingSource` remain `"partner"` or become `"altagether"`?
4. Is it intentional that generic/non-featured lookup results are not DOA-tracked?

---

## Known UX limitations (v1)

1. **Softr embed Call buttons** still use `tel:` links inside iframes — awkward on desktop. We improved **our** lookup cards; embeds are DOA-controlled.
2. **Softr iframe clipping/spacing** — partially mitigated with dark wrapper + taller initial heights in `SoftrEmbed.tsx`; may need more tuning.
3. **Congress uses contact forms, not email addresses** — our UI labels this honestly as "Contact form."
4. **No custom favicon / Open Graph meta** yet.
5. **DNS** for `action.altagether.org` was recently configured (Namecheap CNAME → Vercel project-specific target); may still be propagating in some browsers.

---

## Key files for common tasks

| Task | File(s) |
|------|---------|
| Page structure / sections | `src/app/page.tsx` |
| Altagether styling tokens | `src/app/globals.css` |
| Politician data & scripts | `src/data/doaCampaign.ts` |
| DOA tracking config | `src/config/doaConfig.ts` |
| Geocodio proxy | `src/app/api/lookup/route.ts` |
| Address lookup UI | `src/components/AddressLookup.tsx` |
| Lookup result cards | `src/components/RepresentativeCard.tsx`, `ContactField.tsx` |
| Softr iframes | `src/components/SoftrEmbed.tsx` |
| Script accordions | `src/components/ScriptAccordion.tsx` |

---

## Local development

```bash
git clone https://github.com/johntmayo/altagether_action.git
cd altagether_action
npm install
cp .env.example .env.local
# Add GEOCODIO_API_KEY to .env.local
npm run dev
```

```bash
npm run build   # verify before pushing
npm run lint
```

---

## Deployment

- Push to `main` → Vercel auto-deploys
- Vercel env var: `GEOCODIO_API_KEY` (Production + Preview)
- Framework: Next.js, Root Directory: `./`

---

## Suggested next development priorities

Pick based on John's direction:

### High impact

- **Replace Softr embeds with native politician cards** (better UX, full control, fix desktop Call behavior, single design system)
- **Confirm and update DOA config** (tracking source, Geocodio key ownership)
- **Custom favicon + social share meta** (OG title, description, image)

### Polish

- Improve Softr embed spacing/clipping further if staying on Softr for v2
- Add skip link / minor a11y audit
- Analytics (only if John requests — not in v1 scope)
- Hero/copy refinements in Altagether voice (surrounding copy only — not scripts)

### Do not overbuild

No login, CMS, database, admin panel, or unnecessary backend infrastructure unless explicitly requested.

---

## Voice & content rules

- **Altagether voice:** headings, intros, instructions, transitions
- **DOA voice (preserve exactly):** all advocacy scripts, politician contact data, tracking behavior
- When uncertain whether something is campaign-controlled, **preserve it and flag for John**

---

## Working with John

- Give direct answers (values, keys, DNS records) — don't send him on scavenger hunts
- Only commit/push when asked (or when completing a clearly requested deliverable)
- Ask for official logo assets if needed — do not approximate
- This is a real community advocacy tool for wildfire survivors; keep UX practical and respectful

---

## Quick context on DOA's approach

DOA provided a smart **campaign strategy** (lookup → CA delegation → leadership) but a **widget-oriented partner kit** (HTML snippets + Softr iframes) meant for Squarespace/Wix embeds. Altagether rebuilt it as a proper Next.js app with native lookup, scripts, and Altagether styling, keeping Softr iframes only for politician card lists in v1. The native rebuild was intentional and correct.

---

## First action for a new agent

1. Read `docs/build-brief.md` and `docs/style-guide.md`
2. Clone/pull `main` from `johntmayo/altagether_action`
3. Ask John what he wants to tackle next (likely Softr replacement, copy polish, or DOA config confirmation)
4. Run `npm run build` locally before any push
