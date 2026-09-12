# Altagether Action-Oriented Digital Style Guide

> **Purpose:** This is the source of truth for Altagether’s action-oriented digital products: dashboards, directories, forms, volunteer-facing tools, resident-facing tools, support utilities, workflows, campaign/action pages, and one-off guided experiences.
>
> **This guide does not govern the main public-facing Altagether website.** The public website uses a separate visual system.

---

## 1. What This System Is For

Use this design system for things people **do**, not primarily for things people **browse**.

Typical examples include:

- Zone Dashboard
- Neighborhood Captain Directory
- Resident or address lookup tools
- Outreach and support tools
- Data-entry and administrative workflows
- Volunteer-facing utilities
- Forms and registration flows
- Onboarding experiences
- Renewal experiences
- Action pages and campaign workflows
- Other task-focused digital experiences

The visual character should feel:

- **Neighborly and civic-minded**
- **Warm but operational**
- **Editorial plus utilitarian**
- **Grounded and tactile**
- **Confident, not corporate**
- **Clear enough to use quickly**
- **Human enough not to feel bureaucratic**

A useful shorthand:

> **A contemporary community field guide crossed with a well-designed civic tool.**

### Avoid

- Generic SaaS styling
- Glassmorphism or translucent panels
- Neon colors
- Glossy gradients
- Huge pill-shaped controls
- Excessively rounded interfaces
- Decorative animation for its own sake
- Dense mixtures of type treatments
- Color without text or another semantic cue
- Large hero areas inside functional tools
- Inventing a new aesthetic for each project

---

# 2. Choose the Page Archetype First

There are **two approved structural modes** inside this action-oriented design system.

The builder should infer the correct mode from the nature of the product. The user should **not** have to specify the mode every time.

If a project could reasonably fit either mode, **ask before designing**.

Do not casually hybridize the two header systems.

---

## Archetype A: Guided Experience

Use this mode when the experience is primarily:

- One-time or occasional
- Sequential
- Explanatory
- Focused on one main journey
- Designed around a clear beginning and end
- More reading-oriented than operational

Typical examples:

- Neighborhood Captain onboarding
- Annual renewal
- Registration flow
- Action or campaign page
- Multi-step application
- One-purpose explainer with a clear CTA

### Visual signature

- Large centered Deep Space Blue banner
- Centered eyebrow / kicker
- Large centered page title
- Short Lora introduction
- Narrow reading column
- Sequential cards
- Strong sense of progression
- More editorial pacing

### Default guided-experience content width

```css
width: min(760px, calc(100% - 2rem));
margin-inline: auto;
```

---

## Archetype B: Tool / Application

Use this mode when the experience is primarily:

- Repeatedly used
- Operational
- Searchable or filterable
- Data-driven
- Multi-purpose
- Designed for updating, comparing, finding, or acting on information
- Something a user returns to over time

Typical examples:

- Zone Dashboard
- Neighborhood Captain Directory
- Resident lookup tool
- Outreach tool
- Administrative interface
- Data management workflow
- Reporting tool

### Visual signature

- Compact full-width Deep Space Blue app header
- Official logo at left
- Product/page title immediately to the right
- Header actions, if needed, on the far right
- Left-aligned operational content
- Wider workspace
- Chivo-dominant interface
- Lora used only for genuine reading passages

### Default tool/application content width

```css
width: min(1200px, 100%);
margin-inline: auto;
padding: 24px;
```

Important introductory or editorial copy may still be limited to roughly `48rem`.

---

# 3. Logo

An official **Altagether logo asset will be provided** when a project requires it.

**Do not recreate, redraw, approximate, typeset, or invent the Altagether logo.**

If a project calls for the logo and no official logo file has been supplied:

> **Ask John for the current logo asset before proceeding.**

During development, use a neutral text placeholder rather than fabricating a mark.

---

# 4. Core Color System

## Core brand colors

```css
:root {
  --deep-space-blue: #304059;
  --golden-orange: #f59e09;
  --porcelain: #fdfbf8;
  --floral-white: #fffdf5;
  --rosy-copper: #bc5839;
}
```

| Color | Hex | Primary use |
|---|---:|---|
| Deep Space Blue | `#304059` | Main anchor color, headers, strong headings, primary buttons |
| Golden Orange | `#F59E09` | Calls to action, active states, progress, milestones, emphasis |
| Porcelain | `#FDFBF8` | Standard page canvas |
| Floral White | `#FFFDF5` | Quiet warm sections and inset surfaces |
| Rosy Copper | `#BC5839` | Important emphasis, warnings, destructive/error states |

### Essential neutrals

```css
:root {
  --surface-white: #ffffff;
  --text-primary: #1f2937;
  --text-secondary: #4b5563;
  --border-color: #e5e5e5;
  --overlay: rgba(0, 0, 0, 0.40);
}
```

### Additional colors for data and status

```css
:root {
  --muted-olive: #afc892;
  --dusty-mauve: #bc455a;
  --light-caramel: #fdba77;
  --apricot-cream: #f6cf98;
  --sky-blue-light: #81bdc3;
  --floral-white-warm: #fdf8ec;
  --soft-blush: #f9d6d3;
  --alabaster-grey: #e5e5e5;
}
```

## Color rules

1. **Deep Space Blue anchors every major interface.**
2. **Golden Orange is an accent, not a page background.**
3. Warm whites should dominate large surfaces.
4. Pure white is mainly for cards and controls.
5. Supporting colors are functional: statuses, categories, charts, badges, and small callouts.
6. Never rely on color alone to communicate meaning.
7. Use Deep Space Blue or dark text on pale colors.
8. Do **not** use white text on Golden Orange, Olive, Sky Blue, Caramel, Apricot, Blush, or Grey.
9. Avoid placing similar warm data colors side by side without direct labels.

## Suggested semantic status mapping

| Meaning | Background | Text |
|---|---|---|
| Complete / positive | Muted Olive | Deep Space Blue |
| In progress / informational | Sky Blue Light | Deep Space Blue |
| Needs attention | Golden Orange or Apricot Cream | Deep Space Blue |
| Pending / scheduled | Light Caramel | Deep Space Blue |
| Blocked / urgent | Dusty Mauve | White |
| Error / destructive | Rosy Copper | White |
| Not started / neutral | Alabaster Grey | Deep Space Blue |
| Human/community highlight | Soft Blush | Deep Space Blue |

## Suggested chart order

1. Deep Space Blue
2. Golden Orange
3. Rosy Copper
4. Sky Blue Light
5. Muted Olive
6. Dusty Mauve
7. Light Caramel
8. Apricot Cream

Prefer direct labels over distant legends.

---

# 5. Typography

## Typeface roles

```css
--font-ui: "Chivo", Arial, sans-serif;
--font-reading: "Lora", Georgia, serif;
```

### Chivo

Use Chivo for:

- Page titles
- Navigation
- Buttons
- Tabs
- Chips
- Filters
- Form labels
- Inputs
- Tables
- Metrics
- Dates
- Statuses
- Operational instructions
- Card headings
- App headers

Recommended web weights:

- `400` — Chivo Normal
- `700` — Chivo Bold
- `900` — Chivo Black

### Lora

Use Lora for:

- Introductory messages
- Explanatory paragraphs
- Editorial copy
- Longer notes
- Resident-facing narrative
- Bios
- Quotations
- Human-centered callouts

Lora should be used more freely in guided experiences and more selectively in tools.

Do not alternate fonts line-by-line inside compact components.

## Type scale

| Role | Font | Size | Weight | Line height |
|---|---|---:|---:|---:|
| App-header title | Chivo | 24px | 700 | 1.2 |
| Guided hero H1 | Chivo | `clamp(2rem, 6vw, 3.6rem)` | 900 | 1.06 |
| Page H1 outside app bar | Chivo | 28–32px | 700–900 | 1.15 |
| H2 | Chivo | 22–24px | 700 | 1.25 |
| H3 / card title | Chivo | 18px | 700 | 1.3 |
| Eyebrow / kicker | Chivo | 12–14px | 700 | 1.3 |
| UI body | Chivo | 15–16px | 400 | 1.45 |
| Reading body | Lora | 15–17px | 400 | 1.6–1.72 |
| Small metadata | Chivo | 14px | 400 | 1.4 |
| Badge / tag | Chivo | 12–13px | 400–700 | 1.2 |
| Large metric | Chivo | 30–44px | 900 | 1.0 |

### Typography rules

- Use sentence case for almost all headings and controls.
- Uppercase is reserved for small labels and kickers.
- Uppercase labels should use roughly `0.05em–0.09em` letter spacing.
- Keep reading paragraphs around `48rem` max width.
- Avoid italics in operational UI.
- Do not shrink critical text below `14px`.

---

# 6. Shared Page Background

The standard canvas is Porcelain:

```css
background: #fdfbf8;
```

Guided experiences may add extremely subtle atmospheric radial washes:

```css
background:
  radial-gradient(circle at 8% 19%, rgba(175, 200, 146, 0.16), transparent 24rem),
  radial-gradient(circle at 94% 45%, rgba(245, 158, 9, 0.10), transparent 23rem),
  #fdfbf8;
```

These should be barely perceptible.

Do not use decorative gradients throughout functional tools.

---

# 7. Header Patterns

## Guided Experience Hero

```css
.hero {
  position: relative;
  overflow: hidden;
  padding: 2.8rem 1.25rem 2.5rem;
  color: white;
  text-align: center;
  background: var(--deep-space-blue);
  border-bottom: 3px solid var(--text-primary);
}
```

Typical structure:

1. Golden Orange eyebrow
2. Large Chivo Black headline
3. Short Lora explanation

Subtle oversized circular outlines may be partially cropped in the corners:

```css
border: 2px solid rgba(255,255,255,.08);
border-radius: 50%;
```

These are atmospheric, not illustrative.

## Tool / Application Header

```css
.app-header {
  background: var(--deep-space-blue);
  color: white;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 3px solid var(--text-primary);
}
```

Rules:

- Logo at far left
- Title immediately to the right
- Do not center the title
- Actions, if needed, sit at far right
- Keep it compact
- Sticky behavior is optional
- The header should frame the tool, not dominate it

Suggested logo size:

```css
.app-header img {
  height: 50px;
  width: auto;
}
```

---

# 8. Spacing

Use a 4px-based system:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
```

Typical uses:

- Icon/text gap: `4–8px`
- Compact controls: `8px`
- Related fields/chips: `8–12px`
- Card padding: `16–24px`
- Grid gap: `16px`
- Section separation: `24–32px`
- Major page separation: `48px`

Avoid arbitrary spacing when a system value will work.

---

# 9. Shape, Borders, and Shadows

## Radius

```css
--radius-small: 4px;
--radius-medium: 8px;
--radius-large: 10px;
```

Use:

- Inputs/buttons/chips: `4px`
- Cards/callouts/modals: `8px`
- Nested groups: up to `10px`
- True pills only for compact status badges or binary toggles

## Borders

- Standard: `1px solid var(--border-color)`
- Prominent cards: `2px solid var(--border-color)`
- Active controls may use Deep Space Blue
- Important callouts may use a 2px accent border

## Shadows

Characteristic tactile shadow:

```css
box-shadow: 4px 4px 0 var(--border-color);
```

Use selectively on primary cards.

Do not use Golden Orange or another bright accent as a large offset shadow.

Floating layers such as modals may use a soft shadow:

```css
box-shadow: 0 4px 20px rgba(0,0,0,.20);
```

---

# 10. Core Components

## Cards

```css
.card {
  background: var(--surface-white);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-medium);
  padding: 20px;
  box-shadow: 4px 4px 0 var(--border-color);
}
```

A card needs a clear hierarchy:

1. Title
2. Supporting metadata
3. Main content/action
4. Optional narrative
5. Secondary controls or tags

Do not create several equally prominent text treatments inside one card.

---

## Guided Step Cards

Sequential guided experiences may use a circular step marker.

```css
.step-number {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: var(--deep-space-blue);
  background: var(--golden-orange);
  border: 2px solid var(--deep-space-blue);
  font-weight: 900;
}
```

Completed state:

- Muted Olive fill
- Checkmark replacing the number
- Optional Olive-tinted border/shadow treatment

---

## Introductory Callout

```css
.callout {
  max-width: 48rem;
  padding: 20px 24px;
  background: var(--floral-white-warm);
  border: 2px solid var(--golden-orange);
  border-radius: var(--radius-medium);
  color: var(--text-primary);
  font: 400 15px/1.6 var(--font-reading);
}
```

Use near the top of a workflow to orient the user.

Keep it concise.

---

## Support / Next-Step Callout

```css
.support-callout {
  background: rgba(175, 200, 146, 0.24);
  border-left: 5px solid #6d844f;
  border-radius: var(--radius-small);
}
```

Use for:

- What happens next
- Contextual support
- Reassurance
- Helpful adjacent information

---

## Buttons

### Primary

```css
.button-primary {
  background: var(--deep-space-blue);
  color: white;
  border: 2px solid var(--deep-space-blue);
}
```

### Highlight

```css
.button-highlight {
  background: var(--golden-orange);
  color: var(--deep-space-blue);
  border: 2px solid var(--deep-space-blue);
}
```

### Secondary

```css
.button-secondary {
  background: white;
  color: var(--deep-space-blue);
  border: 2px solid var(--deep-space-blue);
}
```

### Destructive

```css
.button-destructive {
  background: var(--rosy-copper);
  color: white;
  border: 2px solid var(--rosy-copper);
}
```

All buttons:

- Use Chivo Bold
- Use 4px corners
- Have at least a 44px touch target on mobile
- Use specific action language
- Show visible focus
- May move up by `1px` on hover
- Should not use vague labels like “Continue” when a more specific action is available

External links may use `↗`. Forward movement may use `→`.

---

## Links

- Deep Space Blue
- Underlined by default in prose
- Use bold weight for CTA links
- Do not use pale support colors as link text

---

## Inputs and Selects

```css
.input,
.select {
  width: 100%;
  min-height: 44px;
  padding: 10px 16px;
  background: white;
  color: var(--text-primary);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-small);
  font: 400 16px/1.3 var(--font-ui);
}
```

Rules:

- Labels normally sit above controls
- Horizontal label/control pairs are acceptable in compact toolbars
- Focus: Deep Space Blue border plus Golden Orange ring
- Error: Rosy Copper border plus plain-language message
- Never use placeholder text as the only label

---

## Chips

Compact rectangles, not oversized pills.

```css
.chip {
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-small);
}
```

Selected:

```css
.chip[aria-pressed="true"] {
  background: var(--golden-orange);
  border-color: var(--deep-space-blue);
  color: var(--text-primary);
}
```

---

## Tags and Badges

- Use pale fills with dark text
- Keep typography 12–13px
- Use symbols only as secondary reinforcement
- Avoid more than 2–3 high-emphasis badges inside one card

---

## Tables

- Deep Space Blue header row
- White Chivo header text
- White body rows
- Subtle alternating row treatment if useful
- Around `10px 16px` cell padding
- Text left aligned
- Numeric measures right aligned when comparison benefits
- Horizontal scroll or card conversion on mobile
- Never compress until unreadable

---

## Accordions

Appropriate for optional or secondary detail.

- White or Floral White surface
- 2px border
- 4px radius
- Chivo Bold header
- Simple `+ / −` or chevron indicator
- Deep Space Blue heading text
- Golden Orange accent

Do not hide the primary task inside an accordion.

---

## Video

Guided experiences may use a responsive `16:9` frame:

```css
.video-frame {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #111827;
  border: 2px solid var(--deep-space-blue);
  border-radius: var(--radius-small);
}
```

---

## Embedded Forms

- Match the main content width
- Keep framing understated
- Give forms enough height to minimize awkward internal scrolling
- Put explanatory content outside the form rather than crowding the embed

---

## Resource Cards

Resource cards may use a colored top rule to distinguish categories:

```css
border-top: 6px solid var(--muted-olive);
```

Other approved accents may be used when functional.

Recommended structure:

1. Small icon or graphic
2. Heading
3. Brief explanation
4. Clear link/action

Keep icon style consistent.

---

## Modals

- 40% black overlay
- `480–560px` max width for simple tasks
- 8px corners
- 2px border
- Soft shadow
- Clear title
- Concise explanation
- Obvious close behavior
- No nested modals

---

# 11. Progress, Metrics, and Data Displays

## Progress

Use progress only when the denominator is stable and meaningful.

```css
.progress-track {
  height: 10px;
  background: var(--alabaster-grey);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--golden-orange);
}
```

Always show a text value alongside the bar.

In guided experiences, progress may be sticky if it meaningfully reduces uncertainty.

## Metrics

- Large metric: Chivo Black
- Label immediately adjacent
- Include time window or unit
- Prefer “42 addresses contacted this month” to “42”
- Keep community-wide metrics separate from the user’s immediate task unless they materially help motivate or contextualize it

## Milestones

Celebrate meaningful milestones using:

- Golden Orange
- Muted Olive
- Restrained badges or completion panels

Avoid confetti for routine saves.

---

# 12. Information Architecture

## Guided Experience Order

Typical order:

1. Hero
2. Short welcome/orientation callout
3. Sequential task cards
4. Completion state
5. Secondary resources

The user should always understand:

- Where they are
- What they need to do
- What comes next
- When they are finished

## Tool / Application Order

Typical order:

1. Compact app header
2. Optional short introduction
3. Primary controls / filters / search
4. Summary or progress controls
5. Main table, cards, map, form, or workflow
6. Secondary help/context

The primary action should appear above the fold without requiring a large hero.

---

# 13. Voice Inside the Interface

Write like a capable neighbor, not a bureaucracy.

Prefer:

- “Save contact”
- “View zone”
- “Export addresses”
- “Watch the orientation”
- “Read and sign”
- “View available sessions”

Avoid:

- Generic corporate language
- Over-explaining routine actions
- Vague buttons
- Repeating the same instruction in several places
- Formal government-style prose

Use warmth in:

- Introductions
- Milestone messages
- Explanatory copy
- Human-centered notes

Use precision in:

- Forms
- Filters
- Data states
- Errors
- Status labels

---

# 14. Interaction and Motion

Motion should clarify state changes, not decorate the interface.

Typical transition:

```css
transition: transform 150ms ease,
            background 150ms ease,
            border-color 150ms ease;
```

Appropriate motion:

- `translateY(-1px)` button hover
- Small resource-card shift
- Progress fill
- Short completion entrance
- Accordion expansion

Avoid:

- Scroll-triggered animation
- Parallax
- Pulsing controls
- Continuous animation
- Decorative bouncing
- Long easing sequences

---

# 15. Responsive Behavior

Primary breakpoint:

```css
@media (max-width: 640px) { ... }
```

On mobile:

- Page padding generally reduces from 24px to 16px
- Toolbars stack
- Inputs become full width
- Card grids become one column
- Button groups may stack
- Hover-only actions become persistently visible
- Step markers may shrink from 46px to 40px
- Maintain 44px tap targets
- Preserve hierarchy and context

Do not create a separate mobile aesthetic.

---

# 16. Accessibility

Every Altagether action-oriented interface should:

- Meet WCAG AA contrast for normal text
- Use semantic HTML first
- Preserve visible keyboard focus
- Label every form control
- Give icon-only controls accessible names
- Never communicate meaning through color alone
- Keep important text at 14px or larger
- Use 44px mobile touch targets
- Respect reduced-motion preferences
- Provide plain-language error messages
- Provide a useful next action in empty/error states
- Include skip links on longer task-focused pages when useful

Standard focus:

```css
:focus-visible {
  outline: 3px solid var(--golden-orange);
  outline-offset: 2px;
}
```

Reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

Privacy-sensitive workflows should remain visually calm and use direct, non-playful language.

---

# 17. Empty, Loading, and Error States

- Center within the available content region when appropriate
- State what happened clearly
- Explain what the user can do next
- Use Rosy Copper for error emphasis
- Avoid generic “No results found” when a more specific message is possible

Prefer:

> No addresses match these filters.

over:

> No results found.

Do not use playful illustrations for serious or privacy-sensitive states.

---

# 18. Canonical Implementation Starter

```css
:root {
  /* Brand */
  --deep-space-blue: #304059;
  --golden-orange: #f59e09;
  --porcelain: #fdfbf8;
  --floral-white: #fffdf5;
  --rosy-copper: #bc5839;

  /* Supporting palette */
  --muted-olive: #afc892;
  --dusty-mauve: #bc455a;
  --light-caramel: #fdba77;
  --apricot-cream: #f6cf98;
  --sky-blue-light: #81bdc3;
  --floral-white-warm: #fdf8ec;
  --soft-blush: #f9d6d3;
  --alabaster-grey: #e5e5e5;

  /* Neutrals */
  --surface-white: #ffffff;
  --text-primary: #1f2937;
  --text-secondary: #4b5563;
  --border-color: #e5e5e5;
  --overlay: rgba(0, 0, 0, 0.40);

  /* Typography */
  --font-ui: "Chivo", Arial, sans-serif;
  --font-reading: "Lora", Georgia, serif;

  /* Shape */
  --radius-small: 4px;
  --radius-medium: 8px;
  --radius-large: 10px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;

  /* Shadow */
  --shadow-card: 4px 4px 0 var(--border-color);
}

* {
  box-sizing: border-box;
}

html,
body {
  min-height: 100%;
  margin: 0;
  background: var(--porcelain);
  color: var(--text-primary);
  font-family: var(--font-ui);
}

h1,
h2,
h3,
h4,
button,
input,
select,
textarea {
  font-family: var(--font-ui);
}

.reading-copy {
  max-width: 48rem;
  font-family: var(--font-reading);
  line-height: 1.6;
}

a {
  color: var(--deep-space-blue);
  text-decoration: underline;
  text-underline-offset: 2px;
}

button,
input,
select,
textarea {
  font-size: 1rem;
}

button {
  min-height: 44px;
  border-radius: var(--radius-small);
  font-weight: 700;
  cursor: pointer;
}

:focus-visible {
  outline: 3px solid var(--golden-orange);
  outline-offset: 2px;
}
```

Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Chivo:wght@400;700;900&family=Lora:wght@400;700&display=swap" rel="stylesheet">
```

---

# 19. Decision Checklist for Builders and Agents

Before designing, answer these questions in order.

### A. Is this governed by this style guide?

Use this guide if the product is a task-oriented Altagether digital experience.

Do **not** assume this guide applies to the main public-facing Altagether website.

### B. Which archetype is it?

**Choose Guided Experience when:**

- The user follows one main path
- The experience has a beginning and end
- Explanation is a major part of the job
- It is likely used once or infrequently

**Choose Tool / Application when:**

- The user returns repeatedly
- The interface supports several actions
- Search, filtering, data entry, comparison, or navigation is central
- It behaves like an ongoing workspace

**If the choice is genuinely ambiguous, ask John before designing.**

### C. Do you have the logo?

If the selected design calls for a logo and no official logo file has been supplied:

> **Ask John for the logo. Do not invent one.**

---

# 20. Final Quality Checklist

Before shipping, confirm:

- [ ] This is actually an action-oriented digital experience, not the public website.
- [ ] The correct archetype was chosen.
- [ ] Guided experiences use the centered hero pattern.
- [ ] Tools/applications use the compact left-aligned app header.
- [ ] Deep Space Blue visibly anchors the interface.
- [ ] Porcelain or another warm white dominates the canvas.
- [ ] Chivo handles structure and operations.
- [ ] Lora is used for genuine reading passages.
- [ ] Golden Orange is selective, not omnipresent.
- [ ] Data colors carry functional meaning.
- [ ] Cards have visible borders and restrained radii.
- [ ] Shadows are neutral and hard-edged where used.
- [ ] There is one obvious primary action.
- [ ] Operational pages are not burdened with oversized hero space.
- [ ] Reading content remains comfortably narrow.
- [ ] Mobile behavior preserves hierarchy and 44px tap targets.
- [ ] Keyboard focus is visible.
- [ ] Color is never the only semantic signal.
- [ ] Reduced motion is supported.
- [ ] Empty, error, and completion states are handled.
- [ ] Any Altagether logo shown is an official supplied asset.
- [ ] If the logo was not supplied, the builder asked for it.
- [ ] The finished product feels warm, capable, civic, and easy to act on.
