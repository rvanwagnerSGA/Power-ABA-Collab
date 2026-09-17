# Power ABA Design System

Brand, foundations, components, and UI kits for **Power ABA Therapy** — an ABA (applied behavior analysis) therapy provider in Jackson, New Jersey — and for **Poppy & Parker, the Power Pals**, its mascot and storytelling system.

- Organization tagline: *Together we unlock the potential in every child.*
- Power Pals tagline: *Growing stronger every day.*
- Contact used throughout: 1-855-376-5020 · power-aba.com · 109 E Pleasant Grove Rd, Jackson, NJ 08527
- English & Spanish services available. Insurance & Medicaid accepted.

## What the brand covers

| Surface | What it is |
| --- | --- |
| Marketing website (power-aba.com) | Parent-facing service education, program pages, intake. Recreated in `ui_kits/website/`. |
| Power Prep Program | A partnership between Power ABA Therapy and The Preparatory Academy: ABA support integrated into a preschool/after-school day. Documented in the supplied trifold brochure. |
| Power Pals social & content system | Poppy & Parker as recurring guides across Instagram, Facebook, TikTok, YouTube, LinkedIn, email. Templates in `ui_kits/social/`. |
| In-clinic culture | The Power Wall Garden, the Seed Ritual, the Petal Log, Power Bloom Friday — the five petal strengths used as shared clinical language. |

Two content lanes govern everything: **Lane A — Family Guidance** (the primary, adult-first lane, ~80% of output) and **Lane B — Power Pals Adventures** (a clearly labelled child-facing series).

## Sources this system was built from

All supplied by the client as files; there is no attached codebase or Figma file.

- `uploads/Poppy_and_Parker_Brand_Bible_v1.3_INTERNAL.docx` — the canonical brand document (16 sections: positioning, character profiles, visual identity, voice, social strategy, in-clinic culture, story world, safeguards, launch roadmap). Extracted text: `assets/reference/brand-bible-text.txt`.
- `uploads/Power Prep Program Trifold - Full Brochure.pdf` — full program copy, verbatim. Extracted text: `assets/reference/power-prep-trifold-text.txt`; the PDF is kept at `assets/reference/power-prep-trifold.pdf`.
- `uploads/power-aba-logo-master.png`, `uploads/poer-aba-therapy-flower-logo.jpg`, plus two lockups embedded in the Brand Bible — now in `assets/logo/`.
- `uploads/poppyparker1.png` and the Brand Bible cover artwork — approved character art, now in `assets/characters/`.
- `uploads/Power_ABA_Website_Design_Brief.docx` — the website build brief excerpted from the Brand Bible: launch scope, character visual rules, accessibility spec. Kept at `assets/reference/Power_ABA_Website_Design_Brief.docx`; extracted text at `assets/reference/website-design-brief.txt`.
- `uploads/Power-aba-hero-option-1.jpg` — approved website hero comp, the primary reference for the site's hero layout, headline colour split and CTA pair.
- `uploads/power-aba-bio-builder.jpg` — an approved social/email banner, the reference for the landscape banner template.
- Four real clinic photographs — now in `assets/photos/`.

The live site at power-aba.com was read for structure and copy confirmation. Its bespoke icon PNGs could not be downloaded into this project; see **Iconography**.

---

## Content fundamentals

**Who is being spoken to.** Adults first. Most public content addresses parents and caregivers directly; children are a labelled secondary lane. Clinicians, educators, referral sources and community partners are addressed with the same warmth but more professional register.

**Person and address.** Second person to the caregiver ("your child", "you don't need to have everything figured out"), first-person plural for the organization ("we'll help with insurance verification", "we'll guide your family"). Never "the parent should".

**Casing.** Sentence case for body copy and most headlines. Title Case appears on program names and section headers carried over from print ("Getting Started Is Simple", "More Than Care. Skills for Everyday Life."). Eyebrows are ALL CAPS with wide tracking ("WE ARE WITH YOU EVERY STEP OF THE WAY"). Never all-caps body copy.

**Sentence shape.** Plain, specific, unhurried. Long enough to be practical; short enough to be scannable. Headlines often split into two beats with a period between them — "More Than Care. Skills for Everyday Life." / "One Team. One Environment. Shared Goals."

**Tone.** Warm, encouraging, plainspoken, patient, respectful, practical, hopeful, strengths-based. Never shaming, patronizing, overly cute, clinical without explanation, alarmist, absolute, or focused on "fixing" a child.

**Emoji.** Not used. Neither is exclamation-heavy copy in adult-facing material — the two exceptions are the characters' fixed signature lines ("Let's find another way!" / "One step at a time!" / "We're growing stronger every day!").

**Non-negotiable wording.** Set these verbatim, never paraphrased:
- Together we unlock the potential in every child. *(organization)*
- Growing stronger every day. *(Power Pals)*
- Every step matters. *(core belief)*
- Let's find another way! *(Poppy)* · One step at a time! *(Parker)*
- We're growing stronger every day! *(team close)*

**Language reframes.** Avoid → prefer:
- "Behave properly" → "Find a way to communicate what is needed."
- "Overcome difficult behavior" → "Practice a strategy that supports participation or regulation."
- "Normal behavior" → "Useful, meaningful, or safe skills for this child and family."
- "Refused to cooperate" → "Communicated discomfort, uncertainty, or a need for support."
- "ABA will…" → "Power ABA may support…; goals and progress are individualized."

**Caption framework.** 1) Name the everyday situation or caregiver question. 2) Offer one respectful insight or practical strategy. 3) Give one concrete example. 4) Close with a useful action — save, download, discuss, prepare, or celebrate.

**Calls to action** are adult verbs: *Get Started Today · Learn More · Call Today to Learn More · Save this for the next time plans change · Download the visual and practice it before the appointment · Ask your care team how this strategy can be individualized.*

**Guardrails that shape copy.** No guaranteed results or universal timelines. No comparing one child's pace to another's. No autism-as-villain framing. Mark general education as general education. Fictional or composite scenarios unless permission and compliance approval exist.

---

## Visual foundations

**Colour.** Seven approved brand colours, reviewed with the client in August 2026: Red `#D80602` (primary), Coral `#E04F4D`, Indigo `#5A4FCF`, Magenta `#AB0068`, Orange `#FF6C02`, Yellow `#FEC106`, and one accent, Teal `#5FCCC2`. Red carries primary actions and the first half of headlines; indigo carries the second half and secondary actions. Neutrals are a navy-tinted ink ramp built off `#263271` (Parker's denim) rather than pure grey — grey never appears cold here. Backgrounds are white or the warm cream `#FFF9F4`; a maximum of two background colours per document.

**Type.** Titles and headlines in **Betm Rounded Bold**; body in **Poppy**. Neither font file was supplied — the system currently loads **Baloo 2** and **Poppins** from Google Fonts as flagged stand-ins (see `tokens/fonts.css`). Display type is heavy (800), tightly leaded (1.02–1.18), often two-colour within a single headline. Body is 16px/1.7, generous, never below 12px caption size. Eyebrows are 13px, 600, `0.14em` tracking, uppercase.

**Spacing and layout.** 4px base scale up to 128px. 1200px max container, 24px gutters, 96px vertical section rhythm (56px for tight sections). Cards pad 28px. Layout is a plain centred column of full-width sections — no sticky sidebars, no fixed overlays beyond the sticky site header, which is white at 94% opacity with a 10px backdrop blur.

**Backgrounds.** Flat colour or photography, alternating white and warm cream section to section. One soft vertical gradient is permitted in the hero (white → cream). No repeating patterns, no textures, no grain, no bluish-purple gradient washes. Solid red and solid indigo bands are used as full-bleed emphasis strips and CTA slabs.

**Imagery.** Two kinds, never blended. (1) Real clinic photography: warm daylight, natural colour, children mid-activity, uncropped faces and hands, no filters or duotone. (2) Approved Poppy & Parker illustration: polished 2D animation style. A third, sanctioned variant pairs each illustrated character beside their live-action counterpart at matching age — kids and teens — for content that bridges the story world and real clinic life, clean linework, expressive faces, vivid but controlled colour, soft dimensional shading, simple backgrounds for educational posts and richer environments for stories. **Parker is non-verbal** and communicates through an AAC device worn cross-body (teal casing `#5FCCC2`) — it is a non-negotiable part of his design and must never be cropped out or omitted. His signature line, "One step at a time!", is delivered through that device, not spoken. Characters are placed *beside* the message in adult-facing work — corner guides, speech-bubble hosts, scene openers — never filling the frame. Never crop through eyes, hands, badges, or communication tools.

**Protection gradients vs capsules.** Text over photography sits on a linear protection gradient (transparent → `rgba(43,37,35,.88)` from 30%), not on a capsule. Capsules and pills are reserved for actions, badges, and tags.

**Corner radii.** Everything is soft. 6/10/16/24/32px, plus a 48px "blob" radius for large hero image panels, plus a full pill (999px) for every button, badge, tag, and tab. Nothing in this system has a square corner.

**Cards.** White, 24px corners, 1px `#DED8D5` hairline, `0 2px 8px rgba(43,37,35,.08)`. Washed variants drop the hairline and take a 5%-tint background of their brand colour. There is no left-border accent stripe pattern in this brand — colour arrives as a full wash or an icon circle.

**Shadows.** Soft, wide, warm-tinted, never cold grey and never harsh: `xs` 1px, `sm` 2/8, `md` 8/24, `lg` 18/44, plus red and indigo glow shadows under solid buttons. Inner shadows are not used.

**Borders.** 1px hairline on cards, 2px on form controls and outline buttons, 3px on the focus ring. Dividers are 1px `--border-subtle`.

**Transparency and blur.** Used in exactly two places: the sticky header (94% white + 10px blur) and the modal scrim (`rgba(43,37,35,.45)` + 3px blur). Text is never set in a transparent or `color-mix` ink.

**Animation.** Gentle and short. 120ms for presses, 200ms standard, 360ms for anything larger, on `cubic-bezier(.16,.84,.44,1)`. Fades and small translations only — no bounces, no parallax, no autoplay motion, no rapid transitions. The Brand Bible's accessibility standard explicitly forbids overstimulating motion; `prefers-reduced-motion` zeroes every duration in `tokens/motion.css`.

**Hover / press states.** Hover: darken the fill one step (`#D80602` → `#AE0402`) and lift 2px; on cards, lift 3px and deepen the shadow. Ghost and outline controls hover to their colour's 5% wash. Press: scale to 0.97, no colour change beyond the hover state. Focus: 3px indigo outline, 2px offset — indigo, never red, since red means error.

**Contrast.** Text runs at full opacity on solid grounds. Wash-backed text uses a darkened member of the same hue family (yellow wash carries `#8A6600` text, not yellow). Colour is never the only carrier of meaning.

---

## Iconography

- **Substituted, and flagged.** The live site uses bespoke multicolour PNG icons (a shield-figure for Personalized Care, a target for Evidence-Based, a heart for Compassionate Team, and a service-grid set). Those binaries were not supplied and could not be pulled into the project. The system currently renders **Lucide** (`lucide-static@0.460.0`, 2px stroke, rounded caps and joins) from CDN through `components/core/Icon.jsx`, which masks the SVG so any brand colour can be applied. Rounded-cap Lucide is the closest available match to the brand's soft geometry. **Please supply the real icon set — it is the largest single gap in this system.**
- **How icons are used.** Almost always inside a 56px circle filled with the icon's 5% brand wash, one colour per feature tile, rotating across the grid so no two adjacent tiles share a tone. At small sizes (16–20px) they sit inline beside labels in `--brand-red` or the surrounding text colour.
- **The Power Bloom is not an icon.** It is the brand's memory device and ships as artwork (`assets/logo/power-bloom-circle.jpg`). Petal order clockwise from the top point is locked — Yellow, Orange, Coral, Blue, Purple — and it must never be redrawn, recoloured, rearranged, or reconstructed in SVG. `components/brand/PowerBloom.jsx` renders the approved file; `components/brand/PetalStrengths.jsx` expresses the five petal meanings as chips precisely so no one is tempted to redraw the flower.
- **Emoji are not used.** Unicode characters are not used as icons.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `readme.md` — this file. `SKILL.md` — Agent Skills front matter.
- `thumbnail.html` — homepage tile.

**`tokens/`** — `fonts.css` (font loading + substitution notice), `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`.

**`assets/`** — `logo/` (digital, print & apparel, compact lockups, Power Bloom badge), `characters/` (four approved Poppy & Parker artworks: two illustrated, two illustrated-plus-live-action pairings), `photos/` (four clinic photographs), `reference/` (hero comp, banner comp, the trifold PDF).

**`guidelines/`** — 24 specimen cards across Colors, Type, Spacing, and Brand. One Brand card ("Motion — Mini-Adventure") embeds *When Rain Changes our Plans* from Google Drive; the video file itself is not stored in this project.

**`components/`**
- `core/` — Button, IconButton, Icon, Badge, Tag, Card, Avatar
- `forms/` — Field, Input, Textarea, Select, Checkbox, Radio, Switch
- `navigation/` — Tabs, Accordion
- `feedback/` — Dialog, Toast, Tooltip
- `marketing/` — SectionHeading, FeatureCard, StepItem, QuoteCard, CTABand
- `brand/` — Logo, PowerBloom, PetalStrengths, SpeechBubble, CharacterCallout

### Website launch scope

Per the website design brief: navigation, a resource center, service explanations, FAQs, and character guideposts. The **Power Pals Adventures story hub is explicitly out of launch scope** — it is a longer-term growth vision paired with a future YouTube Kids channel. Flag anything that reads like a request for story-hub content.

**`ui_kits/`**
- `website/` — four click-through screens of power-aba.com. See its README.
- `social/` — seven Power Pals social and print templates. See its README.

### Intentional additions

No source defined a component inventory, so the standard set above was authored to the brand's actual needs. Two additions are brand-specific rather than generic: `PetalStrengths` (the five Power Bloom strengths as labelled chips, so the flower is never redrawn) and `CharacterCallout` (the corner-guide character placement the Brand Bible prescribes for adult-facing layouts). `Icon` is a wrapper over the substituted glyph set.

### Known gaps

1. **Fonts** — Betm Rounded Bold and Poppy files were not supplied; Baloo 2 and Poppins stand in.
2. **Icons** — the brand's own icon PNGs were not supplied; Lucide stands in.
3. **Character library** — the Brand Bible specifies turnarounds, eight expressions, seven poses, and eight story backgrounds. Only four composite artworks exist in this project.
4. Insurance-carrier logos, staff portraits, and testimonials from the live site were not supplied and are deliberately omitted rather than invented.
