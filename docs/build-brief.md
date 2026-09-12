# Build Brief: Altagether Federal Funding Action Site

Build a polished standalone advocacy microsite for **Altagether** using the supplied **Department of Angels Federal Funding Action Page Partner Kit**.

The finished site will eventually live at:

`action.altagether.org`

## Project setup

Use:

- Next.js
- TypeScript
- GitHub for source control
- Vercel for deployment

Keep the project straightforward. This is a small advocacy site, not a large application. Do not introduce a CMS, database, authentication system, or other unnecessary infrastructure.

The repository should be ready to push to GitHub and deploy directly to Vercel.

## Design source of truth

There is an **Altagether style reference file in this project**.

Use that file as the primary source of truth for:

- typography
- colors
- spacing
- buttons
- borders
- cards
- overall visual character
- responsive behavior

The finished site should feel unmistakably like Altagether rather than like a Department of Angels embed page.

Do not invent a new brand system.

If an Altagether logo file is not available in the project, ask me for one rather than recreating or approximating it.

## Source material

The Department of Angels Partner Kit contains:

- `START HERE — Adding the action tools to your site.docx`
- `scripts-senators.html`
- `scripts-reps.html`
- `scripts-leaders.html`
- `embed-snippets.html`
- `lookup-partner.html`

Treat these files as authoritative for the supplied campaign content, politician data, action links, scripts, tracking behavior, and embeds.

### Important

Do **not** simply paste all of these HTML files into the site.

They were designed as portable raw-HTML widgets for Squarespace, Wix, WordPress, etc. Since we are building a proper standalone application, recreate simple UI natively while preserving the underlying Department of Angels content and behavior.

Do not rewrite or editorially improve the advocacy scripts unless explicitly asked.

---

# Product goal

Create a simple, highly usable action page that helps people advocate for federal disaster-recovery funding.

A visitor should immediately understand:

1. why this matters
2. whom they should contact
3. what they should say
4. how to call, email, or post with as little friction as possible

The experience should feel like an **action tool**, not a directory of politicians.

Mobile usability is extremely important.

---

# Recommended page structure

## 1. Hero / introduction

Lead with a strong action-oriented introduction based on the campaign language supplied by Department of Angels.

A reasonable working headline is:

**Take action for federal disaster recovery.**

Explain succinctly that Los Angeles fire survivors are still waiting for federal recovery funding and that contacting members of Congress can help.

Do not make this section huge. The purpose is to move people into action.

---

# 2. Find your members of Congress

Put the address lookup **near the top of the page**, rather than at the bottom as in the Department of Angels sample layout.

Suggested framing:

## Find your members of Congress

Enter your address and we'll show you who represents you and how to contact them.

Build this as a native React component based on the behavior in `lookup-partner.html`.

### Address lookup behavior

The supplied tool currently:

1. accepts a full street address
2. sends it to Geocodio
3. requests congressional district data using `fields=cd`
4. identifies the user's current senators and representative
5. displays relevant Call / Email / Post actions for Department of Angels' featured California officials
6. provides generic call/contact/script actions for other members of Congress

Preserve that underlying behavior.

### Do not expose the Geocodio API key client-side

The supplied HTML contains a Geocodio API key directly in JavaScript.

Do not reproduce that architecture.

Instead create a server-side endpoint such as:

`/api/lookup`

The browser sends the address to our endpoint.

Our server-side endpoint sends the request to Geocodio using an environment variable such as:

`GEOCODIO_API_KEY`

Never expose that environment variable to the browser.

Do not commit secrets to GitHub.

### Privacy

Do not store submitted addresses in a database, analytics platform, logs intentionally created by this application, or Department of Angels tracking.

The supplied page currently says:

> Your address is never stored.

Use privacy wording carefully. The address necessarily has to be sent to Geocodio in order to perform the lookup.

Do not make broader privacy claims than the implementation supports.

### Result states

Provide good native UI for:

- empty state
- loading
- successful result
- invalid or incomplete address
- no congressional district found
- API failure

The Department of Angels fallback points users to the official House representative directory. Preserve that fallback option.

---

# 3. California Senators

Create a section for California's two senators.

Preserve the supplied Department of Angels suggested script from:

`scripts-senators.html`

Rebuild the script display natively as an Altagether-styled expandable component with a **Copy script** button.

Do not iframe the script itself.

Then display the Department of Angels **California Senators Softr embed** beneath it.

Use the supplied URL and identifiers from `embed-snippets.html`.

The script and the legislator cards should visibly belong together. Department of Angels specifically designed the experience so someone can copy the script and immediately contact the politician below it.

---

# 4. California House delegation

Create a section for California representatives.

Include a short instruction that users can find their representative and then call them or copy the script and paste it into their official contact form.

Preserve the supplied representative script from:

`scripts-reps.html`

Rebuild it as a native expandable script component with a copy button.

Below it, use the supplied **California House Delegation Softr embed**.

Do not rebuild the entire California delegation database in this first version.

---

# 5. Congressional leadership

Create a section explaining that several Congressional leaders have disproportionate influence over federal disaster funding.

Use the campaign framing supplied by Department of Angels as source material.

There are six customized scripts in `scripts-leaders.html`:

- Senate Majority Leader John Thune, South Dakota
- Senate Appropriations Chair Susan Collins, Maine
- Senate Appropriations Ranking Member Patty Murray, Washington
- Senate Minority Leader Chuck Schumer, New York
- Speaker Mike Johnson, Louisiana
- House Appropriations Chair Tom Cole, Oklahoma

Preserve each supplied script exactly.

Build these as native expandable components.

Each should have its own **Copy script** action.

Then display the supplied **Congressional Leadership Softr embed** below the scripts.

Make it easy to understand which script corresponds to which leader.

---

# Softr embeds

Keep the three Department of Angels Softr blocks as iframes for v1.

Do not attempt to reproduce their politician cards natively unless asked later.

The supplied embed file currently loads `iframe-resizer` separately for all three embeds.

In our implementation:

- load the iframe-resizer dependency once
- create a reusable Softr embed component
- initialize each supplied iframe correctly
- preserve the exact Softr URLs and required iframe IDs/selectors
- handle responsive widths
- allow the iframe to grow vertically without internal scrollbars where possible
- test resizing on desktop and mobile

The three supplied embeds are:

1. California Senators
2. California House Delegation
3. Congressional Leadership

Do not change the Softr URLs or block identifiers.

---

# Campaign action tracking

The Department of Angels lookup code sends campaign action events to their supplied Google Apps Script endpoint.

It tracks:

- `call`
- `email`
- `post`

It includes:

- politician identifier
- action type
- source

It does **not** track script-copy actions.

Preserve this tracking behavior for the featured politicians unless instructed otherwise.

Centralize the Department of Angels tracking URL and source value in a configuration file rather than scattering them through UI components.

For now create an obvious configurable value for:

`trackingSource`

The supplied value is:

`partner`

We may change that to:

`altagether`

after confirming with Department of Angels.

Do not change it silently.

---

# Politician/action data

The supplied `lookup-partner.html` contains Department of Angels-maintained data for:

- California senators
- featured California congressional districts
- phone numbers
- official contact pages
- prewritten X/Twitter posts
- district-to-politician mappings

Extract this data into a clean configuration/data file rather than burying it inside components.

For example:

`src/data/doaCampaign.ts`

The UI should consume that data.

Preserve the supplied values exactly unless there is an obvious technical formatting issue.

Do not independently “update” politicians or contact information from outside sources during this build.

---

# Generic representatives

The Department of Angels lookup also supports U.S. addresses outside California.

For politicians who are not part of its featured list, it currently provides:

- phone call action if a phone number is available
- Copy script
- official contact form or website

The generic advocacy script is contained in `lookup-partner.html`.

Preserve that behavior and text.

Do not add Department of Angels tracking to these generic actions unless their supplied system already does so or I explicitly request it.

---

# Native reusable components

Prefer reusable components such as:

- `Header`
- `Hero`
- `AddressLookup`
- `RepresentativeCard`
- `ScriptAccordion`
- `CopyButton`
- `ActionButton`
- `SoftrEmbed`
- `Section`
- `Footer`

Keep components understandable rather than creating an elaborate design system.

---

# Accessibility

Use semantic HTML.

Ensure:

- keyboard-accessible accordions
- visible focus states
- proper form labels
- appropriate `aria-live` behavior for address lookup results
- sufficient color contrast
- buttons and links have clear labels
- mobile tap targets are large enough

Do not rely solely on icons to communicate Call, Email, Post, or Copy.

---

# Mobile behavior

Design mobile-first.

Test particularly:

- address entry
- lookup result cards
- long politician names/titles
- action buttons
- script accordions
- copied-state feedback
- Softr iframe heights
- House delegation search/list
- long leadership content

Avoid horizontal scrolling.

Do not create a layout that only looks good at desktop width.

---

# Content handling

Department of Angels explicitly says partner organizations may rewrite surrounding introductory copy in their own voice.

That permission does **not** mean the supplied scripts should be rewritten.

Use Altagether voice for:

- headings
- introductions
- explanatory copy
- instructions
- transitions between sections

Keep Department of Angels advocacy scripts intact.

If you are uncertain whether something is campaign-controlled language or ordinary page copy, preserve it and flag it rather than rewriting it.

---

# Do not overbuild

Do not add:

- login
- user accounts
- database
- CMS
- dashboard
- admin panel
- elaborate animation system
- unnecessary state management libraries
- unnecessary backend infrastructure

This should remain a lightweight campaign microsite.

---

# Deployment readiness

The finished project must:

1. run locally
2. build cleanly
3. be committed to GitHub
4. deploy normally to Vercel
5. use Vercel environment variables for secrets
6. be ready for the custom domain `action.altagether.org`

Include an `.env.example` documenting required environment variables without including real secrets.

At minimum:

`GEOCODIO_API_KEY=`

---

# Important unresolved Department of Angels questions

Do not invent answers to these.

The site should be structured so these can be changed easily later:

1. Are the Softr embeds their long-term maintained source of truth?
2. Should Altagether use the supplied Geocodio API key or obtain its own?
3. Should tracking source remain `partner` or become `altagether`?
4. Is it intentional that generic/non-featured politicians' actions are not included in Department of Angels campaign tracking?

---

# First build target

Build a complete first working version of the page.

Priority order:

1. faithfully implement the Altagether visual system
2. native address lookup
3. server-side Geocodio proxy
4. correct lookup results/actions
5. native script accordions and copy behavior
6. all three Softr embeds
7. Department of Angels action tracking
8. strong mobile behavior
9. polished loading/error/copy states

Do not spend time prematurely abstracting architecture.

Before changing any supplied campaign content or materially changing Department of Angels behavior, flag the proposed change rather than assuming it is desirable.