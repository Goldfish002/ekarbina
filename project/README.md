# Ekarbina Design System

## Company Overview

**Ekarbina** is a professional signage and fabrication company. Their work spans high-quality physical sign manufacturing and installation, serving commercial, retail, and corporate clients.

### Specializations
- **LED / Panaflex / 3D Signage** — Illuminated and dimensional display systems
- **Pylon / Acrylic / Stainless Steel / Brass Signage** — Premium material fabrication
- **Box-up Wording / Dimensional Lettering** — Raised, routed, and cut-out letterforms

---

## Sources Provided

| Source | Details |
|---|---|
| Logo | `uploads/Ekarbina.png` (211×212px PNG) — crimson circle with white Chinese character |

No codebase, Figma link, or slide deck was provided. This design system was constructed from the logo asset and brand direction provided by the client.

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Professional, precise, and confident.** Ekarbina communicates expertise without boasting.
- Copy is clean and matter-of-fact — no fluff, no exclamation marks.
- Third person for company descriptions; second person ("your brand", "your vision") when addressing clients.
- **No emoji.** The brand is premium and physical; emoji undermine that.
- Sentence case for most UI copy; Title Case for section headings and service names.
- Technical terminology is used correctly and without over-explanation (e.g. "Panaflex", "pylon sign", "dimensional lettering").

### Example Copy
- "Precision-crafted signage for brands that mean business."
- "From concept to installation — every detail matters."
- "LED, Acrylic, Brass. Built to last."
- "Your brand, rendered in steel and light."

---

## VISUAL FOUNDATIONS

### Color
- **Primary:** Deep Crimson `#B8103A` — used for the logo, primary CTAs, accents. Not a bright fire-engine red; more wine/maroon-red. Restrained and authoritative.
- **On Primary (text on red):** Pure White `#FFFFFF`
- **Gold Accent:** `#C9A96E` — a warm champagne gold used for premium highlights, borders, and decorative rules. Gives the "high-end" quality.
- **Dark Base:** `#1A1A1A` — near-black for headlines and body text on light backgrounds
- **Charcoal:** `#2E2E2E` — secondary text, labels
- **Surface Light:** `#F7F5F2` — warm off-white for card and page backgrounds
- **Surface Mid:** `#EEEBE6` — dividers, subtle section separators
- **Surface Dark:** `#141414` — dark mode backgrounds, hero sections
- **Muted Red:** `#7A0D28` — darker red for hover states on crimson elements

### Typography
- **Display / Headline:** "Cormorant Garamond" — an elegant serif that reads as luxury and precision. All-caps for short display headings.
- **Body / UI:** "DM Sans" — clean, geometric sans-serif. Modern but not cold. Used for body text, labels, buttons.
- **Mono (optional):** "JetBrains Mono" — for any technical specs or codes.
- All fonts loaded from Google Fonts (substitutes; request brand-owned font files if available).

### Spacing & Layout
- Base unit: `8px`
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
- Section padding: 64–96px vertical
- Cards: 16–24px padding
- Layout is structured and grid-based; asymmetry only used intentionally

### Backgrounds
- Light pages: `#F7F5F2` warm off-white — not pure white
- Dark hero/feature sections: `#141414` or `#1A1A1A`
- No gradient backgrounds. No gradients at all unless very subtle (dark overlay on photography).
- Texture: optional very subtle noise texture on dark sections for depth
- No patterns or illustrations in the background

### Photography & Imagery
- Imagery shows fabricated signage products: illuminated signs, metal lettering, pylon structures
- Color grade: rich, slightly warm, high contrast. Not desaturated.
- Often full-bleed or large-format within containers
- No stock "business people" imagery

### Cards
- Background: `#FFFFFF` or `#F7F5F2`
- Border: `1px solid #EEEBE6` or a `1px solid rgba(201,169,110,0.3)` gold tint
- Border-radius: `4px` — very subtle rounding. The brand is precise and angular; no pill shapes.
- Box-shadow: `0 2px 12px rgba(0,0,0,0.07)` — soft, barely-there lift
- On dark: `background: #1F1F1F`, border: `1px solid #2E2E2E`

### Borders & Rules
- Decorative rule: `2px solid #C9A96E` (gold) — used as a section opener, underline accent
- Dividers: `1px solid #EEEBE6`
- No thick colored borders on cards (avoid the "left accent border" trope)

### Corner Radii
- Standard: `4px`
- Buttons: `4px`
- Pills/tags: `2px`
- NO large border radii (12px+). The brand is architectural and precise.

### Shadows / Elevation
- Low: `0 1px 4px rgba(0,0,0,0.06)`
- Mid: `0 2px 12px rgba(0,0,0,0.10)`
- High: `0 8px 32px rgba(0,0,0,0.16)`
- No colored shadows

### Animation
- Subtle and purposeful. Easing: `cubic-bezier(0.25, 0.1, 0.25, 1)` (ease)
- Duration: 200ms for hover states; 300–400ms for transitions
- No bounce. No spring. Everything slides or fades.
- Hover: slight opacity or color shift, very subtle `translateY(-2px)` on cards

### Hover & Press States
- Buttons: darker background (`#7A0D28` on crimson); no scale
- Links: gold underline appears on hover
- Cards: subtle `translateY(-2px)` + shadow increase
- Press: slight brightness reduction `filter: brightness(0.92)`

### Iconography — see ICONOGRAPHY section

---

## ICONOGRAPHY

- No dedicated icon font was provided in assets.
- **Approach:** Use **Lucide Icons** (CDN) for UI icons — thin-stroke, geometric, clean. Weight: 1.5px stroke. Size: 16–20px for UI, 24px for feature icons.
- Icons are never filled; always stroke-based, matching the precise fabrication aesthetic.
- Icon color: `#2E2E2E` on light, `#F7F5F2` on dark, `#C9A96E` (gold) for highlighted/featured icons.
- No emoji used anywhere in UI.
- CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`

---

## FILE INDEX

```
README.md                        ← This file
SKILL.md                         ← Agent skill definition
colors_and_type.css              ← CSS custom properties (colors + typography)
assets/
  ekarbina-logo.png              ← Primary logo (crimson circle, white character)
preview/
  colors-primary.html            ← Primary color palette
  colors-neutrals.html           ← Neutral/surface colors
  colors-semantic.html           ← Semantic color tokens
  colors-gold.html               ← Gold accent palette
  type-display.html              ← Display/headline type specimens
  type-body.html                 ← Body/UI type specimens
  type-scale.html                ← Full type scale
  spacing-tokens.html            ← Spacing scale tokens
  spacing-radii-shadows.html     ← Radii, shadows, elevation
  components-buttons.html        ← Button states
  components-cards.html          ← Card components
  components-badges.html         ← Badges and tags
  components-inputs.html         ← Form inputs
  brand-logo.html                ← Logo usage
ui_kits/
  website/
    index.html                   ← Ekarbina marketing website UI kit
    Header.jsx
    Hero.jsx
    Services.jsx
    Footer.jsx
```
