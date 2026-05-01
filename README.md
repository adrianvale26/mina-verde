# Mina Verde

> Colombian Emeralds. Certified. Direct from Source.

Mina Verde is an e-commerce platform for hand-selected Colombian emerald jewelry — serving buyers who want authenticity, transparency, and a direct connection to the source.

---

## What We Sell

- Loose Colombian emeralds (certified, graded by GIA)
- Emerald jewelry — rings, necklaces, earrings, bracelets
- Custom commissions — design your own piece with our team

Every stone is sourced directly from mines in Muzo, Chivor, and Coscuez (the classic Colombian emerald belt), hand-selected in Bogotá, and graded before it reaches you.

---

## The Site

Built as a Vue 3 SPA with 12 views covering the full customer journey:

| View | Purpose |
|---|---|
| **Home** | Hero, how it works, featured stones, quiz CTA |
| **Catalog** | Browse all stones with filters (carat, color, clarity, price) |
| **Stone Detail** | Individual stone page — specs, photos, buy or inquire |
| **Quiz** | Guided buying guide — budget, style, occasion → recommended stone type |
| **Budget Estimator** | Tool to plan purchases by carat range and quality |
| **Cert Decoder** | Learn to read GIA reports (interactive tool) |
| **Education** | Blog-style guides on emeralds, buying, caring for stones |
| **About** | Our story — Colombia sourcing, direct trade, the team |
| **Contact** | Inquire about stones, commissions, showroom visits |
| **Showroom** | 47th Street, Diamond District — schedule a visit |
| **Admin** | Internal — manage inventory, orders, stone data |

---

## Tech Stack

```
Frontend     Vue 3 + Vite
State        Pinia
Routing      Vue Router
Payments     Stripe
Email        Resend
Database     Supabase (inventory, orders)
Hosting      Firebase Hosting
Styling      Custom CSS (Cormorant Garamond + DM Sans + DM Mono)
Icons        Font Awesome
Fonts        Google Fonts
```

---

## Getting Started

```bash
# Clone
git clone https://github.com/adrianvale26/mina-verde.git
cd mina-verde

# Install
npm install

# Dev server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

---

## Environment Variables

Copy `.env.example` to `.env.development` and fill in:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_APP_ID=
VITE_STRIPE_PUBLISHABLE_KEY=
VITE_API_URL=
```

Firebase config goes in `src/firebase/config.js`. A mock fallback is included for local dev when Firebase isn't configured.

---

## Deployment

Firebase Hosting is configured with SPA rewrite fallback — all routes serve `index.html`.

```bash
npm run build
firebase deploy --only hosting
```

Or connect the repo to Firebase Hosting via the Firebase Console for automatic deploys on push to `main`.

---

## Brand

**Mina Verde** — the name means "green mine" in Spanish, a nod to the source and the deep green of Colombian emeralds.

- **Color:** Forest green (`#1a3a1a`) + warm gold (`#c9a84c`)
- **Typography:** Cormorant Garamond (headings) · DM Sans (body) · DM Mono (specs)
- **Voice:** Sophisticated, direct, honest. No fluff. No jargon.
- **Positioning:** Certified stones, direct from Colombia, transparent pricing

---

## Colombia Operations

- Sourcing trips to Bogotá 3–4x per year
- Direct relationships with miners and dealers in the emerald district
- Stones hand-selected in person — no bulk buying unseen
- GIA grading arranged in NYC before listing

---

## Legal

- All stones sold as-is unless graded and certified
- GIA certificates accompany every stone that has been graded
- Returns accepted within 14 days (unworn, original condition)
- 47th Street showroom by appointment only

---

*Colombian Emeralds. Certified. Direct from Source.*