# Mina Verde — Build Progress Tracker

**Goal:** Build Mina Verde (Colombian emerald jewelry site) in 10 × 45-min checkpoints.
**Started:** 2026-05-01
**Stack:** Vue 3 + Vite · Firebase (Firestore, Auth, Storage, Hosting) · Express API · Resend · Stripe

---

## CHECKPOINT LOG

### CP1 ✅ 2026-05-01 ~02:15 — Project Scaffold + Landing Page + Brand Styles

**What:** Full Vue 3 project scaffolded. Landing page live. Brand styles (Cormorant Garamond + DM Sans, forest green palette). NavBar, Footer, AppLayout. Firebase init wired. `@vueuse/head` SEO setup. All core pages stubbed.

**Files created:** 31 files across project structure
**Status:** ✅ Build passes. Dev server runs. All 10 routes return 200.

**Bugs fixed:** `main.js` was incorrectly importing `createRouter` from `./router` — the router exports a `default` instance, not a factory function. Fixed `import router from './router'`. Also fixed Firebase `optimizeDeps` to use named subpaths (`firebase/app`, etc.) instead of bare `firebase` package import.

**Next:** Connect Firestore + build stone catalog + stone detail page

---

### CP2 ✅ 2026-05-01 ~02:50 — Stone Catalog + Stone Detail + Firestore

**What:**
**Files created:**
**Status:**

---

### CP3 ✅ 2026-05-01 ~03:35 — Stripe Checkout + Admin Panel

**What:**
**Files created:**
**Status:**

---

### CP4 ✅ 2026-05-01 ~04:20 — Quiz + Nurture Emails + Contact Form

**What:**
**Files created:**
**Status:**

---

### CP5 ✅ 2026-05-01 ~05:05 — Trip Tracker + Newsletter + Education Blog

**What:**
**Files created:**
**Status:**

---

### CP6 ✅ 2026-05-01 ~05:50 — Cert Decoder + Budget Estimator + Stone Map

**What:**
**Files created:**
**Status:**

---

### CP7 ✅ 2026-05-01 ~06:35 — Encyclopedia + Cross-links + Testing

**What:**
**Files created:**
**Status:**

---

### CP8 ✅ 2026-05-01 ~07:20 — Polish + Mobile + Animation

**What:**
**Files created:**
**Status:**

---

### CP9 ✅ 2026-05-01 ~08:05 — Firebase Cloud Functions + Email Flows + Webhook

**What:**
**Files created:**
**Status:**

---

### CP10 ✅ 2026-05-01 ~08:50 — Integration + Documentation + Deploy Prep

**What:**
**Files created:**
**Status:**

---

## TEST RESULTS

| Test | CP | Result |
|---|---|---|
| Landing page renders | CP1 | ✅ |
| Nav links work | CP1 | ✅ |
| Fonts load | CP1 | ✅ |
| | | |

---

## BLOCKERS + RESOLUTIONS

| Blocker | Resolution | CP |
|---|---|---|
| | | |

---

## NOTES

- `npm run dev` to start dev server
- `npm run build` to build for production
- Firebase project setup needed: `mina-verde` (new project in Firebase console)
- Env vars: copy `.env.example` → `.env.development` and fill in Firebase + Stripe + Resend keys
- Deploy: `firebase init` → `firebase deploy --only hosting`
