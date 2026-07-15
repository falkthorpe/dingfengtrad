# dingfengtrad.com — Team Website

Commercial-grade, static website for the **dingfengtrad.com** R&D collective.
Built with HTML + CSS + JS + SVG. Tesla-inspired engineering aesthetic.
Privacy-first, minimal, performance-focused, fully SEO-ready for overseas markets.

---

## Tech Stack

- **HTML5** — semantic markup, schema.org JSON-LD, full SEO meta tags
- **CSS3** — custom variables, modern layout (Grid + Flexbox), responsive
- **JavaScript (Vanilla)** — scroll reveals, interactive canvas, tilt, counters
- **SVG** — all icons, logos, and visual elements as scalable vectors
- **No frameworks** — no jQuery, no React, no build step. Ship to any host.

## Project Structure

```
dingfengtrad/
├─ index.html              # Home
├─ services.html           # Business services (6 pillars + timeline)
├─ advantages.html         # Team advantages + philosophy
├─ updates.html            # Studio log / news / releases
├─ contact.html            # Contact info + form + FAQ
├─ privacy.html            # Comprehensive Privacy Policy (23 sections)
├─ terms.html              # Comprehensive Terms of Service (27 sections)
├─ robots.txt              # Crawler config, AI bot whitelist
├─ sitemap.xml             # XML sitemap for Google / Bing
├─ app-ads.txt             # Authorized ad-sellers manifest (empty placeholder)
├─ css/
│  └─ main.css             # Full design system + responsive breakpoints
├─ js/
│  ├─ main.js              # Header, nav, reveals, counters, tilt, form
│  └─ particles.js         # Canvas constellation animation
└─ images/
   └─ logo.svg             # Brand logo (SVG)
```

## Pages

| Page | Purpose |
| ---- | ------- |
| `/index.html` | Hero, marquee, features (6), app portfolio (6), process (4), CTA |
| `/services.html` | Six pillars with deep feature breakdown, 5-step engagement timeline, CTA |
| `/advantages.html` | Core advantages (4), team disciplines (4), design philosophy (P1–P4), metrics |
| `/updates.html` | Featured release card + 8-entry studio log timeline + newsletter subscribe |
| `/contact.html` | 5 contact cards + project inquiry form + 6-question FAQ |
| `/privacy.html` | 23 sections: GDPR, CCPA/CPRA, COPPA, ATT, ad networks, country-by-country |
| `/terms.html`  | 27 sections: EULA, license, IP, refunds, subscriptions, ads, governing law |

## Footer (on every page)

Every page includes a footer with:
- Studio navigation
- Capability links (anchored to services.html)
- Legal links — **Privacy Policy** + **Terms of Service** (also: cookies, children)

## Privacy Policy Coverage

The privacy policy is comprehensive and covers (with no omissions):

- Apple App Store Review Guidelines + Privacy Manifest (`PrivacyInfo.xcprivacy`)
- **App Tracking Transparency (ATT)** compliance + signal flow
- **Ad networks** — AdMob, Audience Network, Unity Ads, AppLovin, ironSource, Vungle, Chartboost, InMobi, Pangle, Mintegral, Tapjoy, Start.io, Digital Turbine, Smaato, Verizon Media, MoPub, Ogury, BidMachine, Amazon Publisher Services, Criteo, Sharethrough, Taboola, Outbrain, TripleLift, OpenX, PubMatic, Index Exchange, Magnite, AdColony, Liftoff, HyprMX, AdTiming, plus AdSense/Ad Manager/Authorized Buyers
- **Ad mediation & bidding** (real-time auction partners)
- **Ad formats** — open-screen / splash, rewarded video, interstitial, banner, native, native video, playable, offerwall, MREC, sticky / anchor
- **Country-specific policies** — GDPR (EEA), UK GDPR, Switzerland, LGPD (Brazil), PIPEDA + Quebec Law 25 (Canada), Privacy Act (Australia), APPI (Japan), PDPA (Singapore, Thailand), PIPA (S. Korea), DPDP (India), Privacy Act (NZ), PIPL (PRC)
- **US state laws** — CCPA/CPRA, CPA, CTDPA, UCPA, VCDPA, and 16+ other state laws
- **Age policies** — COPPA, GDPR-K (Art. 8), AADC (UK), LGPD minors, PIPL minors, AADC equivalents
- **Cookies & tracking** — minimal cookie policy, GPC signal, IAB TCF v2.2 / GPP

## Terms of Service Coverage

The terms include, in full:

- Acceptance of terms
- Service description
- Account & registration rules
- Age & eligibility (with COPPA, GDPR Art. 8, CCPA minor provisions, PIPL)
- License grant + restrictions
- Intellectual property (our IP + Apple/Google trademarks)
- User content + local files
- Purchases + App Store refund process
- Subscriptions + auto-renewal
- In-app purchases
- Advertising disclosure (matched to privacy policy §9–11)
- App Store / Mac App Store specific + Apple Standard EULA reference
- Prohibited use
- Security responsibilities
- Beta / TestFlight programs
- Third-party services + open source
- Disclaimers (as-is)
- Limitation of liability (capped at fees paid or $100)
- Indemnification
- Termination (by us + by user)
- Modifications to terms
- Governing law (Commonwealth of Virginia)
- Dispute resolution
- Export controls / OFAC
- Miscellaneous (severability, assignment, force majeure, etc.)
- Contact

## SEO

- Per-page: `<title>`, `<meta description>`, canonical, robots, OpenGraph, Twitter Card.
- `index.html` includes `application/ld+json` Organization schema.
- `sitemap.xml` lists all 7 pages with `lastmod`, `changefreq`, `priority`.
- `robots.txt` whitelists major search engines + AI crawlers (GPTBot, Claude, Perplexity, Google-Extended, Applebot-Extended, CCBot); throttles noisy scrapers.
- All URLs use lowercase, hyphen-free structure (`/services.html`).
- Headings (`h1`-`h3`) are single-purpose and contain target keywords naturally.
- All images are inline SVG with descriptive `<title>` / `role="img"` / `aria-label`.

## Design System (CSS Variables)

Defined in `css/main.css :root`:

```
--color-bg         #000000       --color-accent     #00d4ff
--color-text       #ffffff       --color-accent-2   #7c3aed
--color-text-2     #b3b3b3       --color-accent-3   #00ffa3
--font-display     Space Grotesk, Inter, sans-serif
--font-body        Inter, system-ui, sans-serif
--font-mono        JetBrains Mono, SF Mono, monospace
--container        1280px
--transition       cubic-bezier(0.16, 1, 0.3, 1)
```

Animations:
- Canvas particle constellation (hero)
- Floating orbs
- Reveal-on-scroll (IntersectionObserver)
- Animated counters
- 3D tilt on cards
- Smooth scroll
- Header scroll-blur
- Marquee scroll
- Animated gradient buttons

## Deployment

This is a fully static site. To deploy:

1. **Cloudflare Pages / Netlify / Vercel / GitHub Pages:** connect the repo, set output directory to `/` (the repo root), no build command.
2. **Any web server:** upload the contents of the folder to your web root. No special configuration required.
3. **Set DNS** for `dingfengtrad.com` to point at the host (A or CNAME record).
4. **Add Google Search Console** + submit `sitemap.xml`.
5. **Add Bing Webmaster Tools** + submit `sitemap.xml`.

## Local Preview

```bash
# Python (no dependencies)
python -m http.server 8080

# Node.js
npx serve .

# Then open http://localhost:8080/
```

## Contact

- General: contact@dingfengtrad.com
- Support: support@dingfengtrad.com
- Privacy: privacy@dingfengtrad.com
- Address: Virginia Innovation Center, USA
- Brand: dingfengtrad.com

© 2024–2026 dingfengtrad.com · All rights reserved.
