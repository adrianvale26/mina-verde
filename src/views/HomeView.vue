<template>
  <div class="home">
    <!-- 1. Hero Section -->
    <section class="hero">
      <div class="mv-container hero__container">
        <!-- Left: Copy -->
        <div class="hero__copy">
          <span class="mv-label hero__label">Colombian Emeralds</span>
          <h1 class="hero__headline">Colombian Emeralds. Certified. Direct from Source.</h1>
          <p class="hero__subhead">Hand-selected in Bogotá. Graded by GIA. Every origin confirmed.</p>
          <div class="hero__ctas">
            <RouterLink to="/stones" class="mv-btn mv-btn--primary mv-btn--lg">View the Collection</RouterLink>
            <RouterLink to="/quiz" class="mv-btn mv-btn--secondary mv-btn--lg">Take the Quiz</RouterLink>
          </div>
        </div>
        <!-- Right: Emerald visual -->
        <div class="hero__visual">
          <div class="hero__gem-wrap">
            <svg class="hero__gem-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M12 8L8 10.5V15.5L12 18L16 15.5V10.5L12 8Z" fill="currentColor"/>
              <path d="M3 7L12 12M21 7L12 12M12 12V18" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
            </svg>
            <p class="hero__gem-label mv-italic">Colombian Emerald</p>
          </div>
        </div>
      </div>
      <!-- Scroll cue -->
      <div class="hero__scroll-cue">
        <span class="hero__scroll-arrow">↓</span>
      </div>
    </section>

    <!-- 2. How It Works -->
    <section class="how-it-works">
      <div class="mv-container">
        <div class="section-header">
          <span class="mv-label">How It Works</span>
          <h2 class="how-it-works__headline">From the Mine to Your Collection</h2>
        </div>
        <div class="how-grid">
          <div class="how-card">
            <div class="how-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z"/>
                <path d="M12 8L8 10.5V15.5L12 18L16 15.5V10.5L12 8Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 class="how-card__title">We Source</h3>
            <p class="how-card__desc">We partner directly with miners and dealers in Bogotá's emerald district — cutting out middlemen and ensuring fair trade at every step.</p>
          </div>
          <div class="how-card">
            <div class="how-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M8 12h8M12 8v8"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3 class="how-card__title">We Certify</h3>
            <p class="how-card__desc">Every stone over 0.5ct is sent to GIA for independent grading. We disclose all treatments, origins, and characteristics — no exceptions.</p>
          </div>
          <div class="how-card">
            <div class="how-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="1"/>
                <path d="M16 8h4l3 3v5h-7V8z"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <h3 class="how-card__title">We Deliver</h3>
            <p class="how-card__desc">Your stone ships insured and tracked, in secure packaging with full certification. We stand behind every purchase with a 30-day satisfaction guarantee.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Featured Stones -->
    <section class="featured-stones">
      <div class="mv-container">
        <div class="section-header">
          <span class="mv-label">The Collection</span>
          <h2 class="featured-stones__headline">Each Stone Certified. Each Origin Confirmed.</h2>
        </div>
        <div class="stones-grid">
          <article
            class="stone-card"
            v-for="stone in featuredStones"
            :key="stone.id"
            @click="navigateToStone(stone.id)"
          >
            <div class="stone-card__image">
              <span class="mv-badge mv-badge--green">GIA Certified</span>
              <div class="stone-card__placeholder">
                <span>EMERALD</span>
              </div>
            </div>
            <div class="stone-card__body">
              <h3 class="stone-card__title">{{ stone.name }}</h3>
              <p class="stone-card__specs">{{ stone.specs }}</p>
              <div class="stone-card__footer">
                <span class="stone-card__price">{{ stone.price }}</span>
                <span class="stone-card__link">View Details →</span>
              </div>
            </div>
          </article>
        </div>
        <div class="featured-stones__cta">
          <RouterLink to="/stones" class="mv-btn mv-btn--secondary mv-btn--lg">View All Stones →</RouterLink>
        </div>
      </div>
    </section>

    <!-- 4. The Difference -->
    <section class="difference">
      <div class="mv-container">
        <div class="difference__grid">
          <!-- Left: Visual placeholder -->
          <div class="difference__visual">
            <div class="difference__visual-placeholder">
              <svg class="difference__gem-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M12 8L8 10.5V15.5L12 18L16 15.5V10.5L12 8Z" fill="currentColor"/>
                <path d="M3 7L12 12M21 7L12 12M12 12V18" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
          <!-- Right: Comparison -->
          <div class="difference__content">
            <span class="mv-label" style="color: var(--mv-gold);">Why Mina Verde</span>
            <h2 class="difference__headline">The Difference</h2>
            <div class="comparison-table">
              <div class="comparison-row" v-for="row in comparisonRows" :key="row.label">
                <span class="comparison-row__other">{{ row.other }}</span>
                <span class="comparison-row__feature">{{ row.feature }}</span>
                <span class="comparison-row__mv">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                    <path d="M5 12l5 5L20 7"/>
                  </svg>
                  {{ row.mv }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Founder Section -->
    <section class="founder">
      <div class="mv-container">
        <div class="founder__grid">
          <div class="founder__photo">
            <div class="founder__photo-placeholder">
              <span>ADAM</span>
            </div>
          </div>
          <div class="founder__content">
            <span class="mv-label">Our Story</span>
            <h2 class="founder__headline">Transparency starts with the person sourcing your stone.</h2>
            <div class="founder__text">
              <p>It started with a trip to Bogotá in 2023. I went to visit the mines, not to buy — just to understand where these stones really come from. What I found changed everything.</p>
              <p>The emeralds were extraordinary. But so was the confusion: untreated stones mixed with treated ones, conflict gems passed off as clean, lab reports that didn't tell the full story.</p>
              <p>I started learning everything I could about Colombian emeralds — the geology, the grading, the treatments, the market. I built relationships with miners and dealers who shared my values.</p>
              <p>Mina Verde exists because buying an emerald shouldn't require a graduate degree in gemology. Every stone we sell is GIA-certified, fully disclosed, and shipped direct from Bogotá.</p>
            </div>
            <RouterLink to="/about" class="mv-btn mv-btn--secondary">Read the Full Story</RouterLink>
            <p class="founder__sig mv-italic">— Adam, Founder</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Education Teaser -->
    <section class="education-teaser">
      <div class="mv-container">
        <div class="section-header">
          <span class="mv-label">Learn</span>
          <h2 class="education-teaser__headline">Know what you're buying</h2>
        </div>
        <div class="edu-grid">
          <RouterLink to="/education" class="edu-card">
            <span class="edu-card__label mv-label">Guide</span>
            <h3 class="edu-card__title">Emerald Education</h3>
            <p class="edu-card__desc">Deep dives on the 4 Cs, Colombian origins, and treatments you should know about.</p>
            <span class="edu-card__link">Explore Articles →</span>
          </RouterLink>
          <RouterLink to="/tools/certification-decoder" class="edu-card">
            <span class="edu-card__label mv-label">Tool</span>
            <h3 class="edu-card__title">Cert Decoder</h3>
            <p class="edu-card__desc">Decode any GIA or lab report. We break down every field so you know exactly what you're getting.</p>
            <span class="edu-card__link">Try the Tool →</span>
          </RouterLink>
          <RouterLink to="/quiz" class="edu-card">
            <span class="edu-card__label mv-label">Quiz</span>
            <h3 class="edu-card__title">Find Your Emerald</h3>
            <p class="edu-card__desc">Answer 5 questions and get a personalized recommendation based on your style, budget, and goals.</p>
            <span class="edu-card__link">Take the Quiz →</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 7. Trust Bar -->
    <section class="trust-bar">
      <div class="mv-container">
        <div class="trust-grid">
          <div class="trust-item">
            <svg class="trust-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            <span class="trust-item__label">GIA Certified</span>
          </div>
          <div class="trust-item">
            <svg class="trust-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 12l2-2 4 4 4-4 4 4"/>
              <path d="M3 6l2-2 4 4 4-4 4 4M3 18l2 2 4-4 4 4 4-4"/>
            </svg>
            <span class="trust-item__label">30-Day Returns</span>
          </div>
          <div class="trust-item">
            <svg class="trust-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="1" y="3" width="15" height="13" rx="1"/>
              <path d="M16 8h4l3 3v5h-7V8z"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
            <span class="trust-item__label">Insured Shipping</span>
          </div>
          <div class="trust-item">
            <svg class="trust-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z"/>
              <path d="M12 8L8 10.5V15.5L12 18L16 15.5V10.5L12 8Z" fill="currentColor"/>
            </svg>
            <span class="trust-item__label">Direct from Source</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. Newsletter Strip -->
    <section class="newsletter-strip">
      <div class="mv-container">
        <div class="newsletter-strip__inner">
          <div class="newsletter-strip__copy">
            <h2 class="newsletter-strip__headline">Get first access to new inventory</h2>
            <p class="newsletter-strip__sub">New stones, sourcing stories, and emerald education — straight to your inbox.</p>
          </div>
          <form class="newsletter-strip__form" @submit.prevent="handleNewsletterSubmit">
            <div class="newsletter-strip__input-row">
              <input
                v-model="newsletterEmail"
                type="email"
                placeholder="Your email address"
                class="mv-input newsletter-strip__input"
                required
                :disabled="newsletterStatus === 'loading' || newsletterStatus === 'success'"
              />
              <button
                type="submit"
                class="mv-btn mv-btn--primary"
                :disabled="newsletterStatus === 'loading' || newsletterStatus === 'success'"
              >
                <span v-if="newsletterStatus === 'loading'">Subscribing...</span>
                <span v-else-if="newsletterStatus === 'success'">Subscribed ✓</span>
                <span v-else>Subscribe →</span>
              </button>
            </div>
            <p v-if="newsletterStatus === 'success'" class="newsletter-strip__success">
              You're in. Check your inbox.
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useRouteSEO } from '../composables/useRouteSEO'
import { subscribeToNewsletter } from '../services/newsletterService'

useRouteSEO()

const router = useRouter()
const newsletterEmail = ref('')
const newsletterStatus = ref('idle') // 'idle' | 'loading' | 'success' | 'error'

// Demo stones — same catalog data used by CatalogView
const catalogStones = [
  { id: 1, name: '1.5ct Emerald Cut Colombian Emerald', specs: 'Emerald Cut · VVS1 · Minor Oil · Muzo Valley', price: '$1,850' },
  { id: 2, name: '2.1ct Oval Colombian Emerald', specs: 'Oval · VS2 · No Treatment · Chivor', price: '$3,200' },
  { id: 3, name: '0.95ct Cushion Colombian Emerald', specs: 'Cushion · SI1 · Standard Oil · Muzo', price: '$1,175' }
]

const featuredStones = computed(() => catalogStones.slice(0, 3))

const comparisonRows = [
  { other: 'Skip certification', feature: 'Certify every stone', mv: 'Every stone, every time' },
  { other: 'Opaque about treatments', feature: 'Treatment transparency', mv: 'Full disclosure standard' },
  { other: 'Mixed global sources', feature: 'Colombia-only sourcing', mv: '100% Colombian emeralds' },
  { other: 'No trip documentation', feature: 'Trip documentation', mv: 'We show you the source' }
]

const navigateToStone = (id) => {
  router.push(`/stones/${id}`)
}

const handleNewsletterSubmit = async () => {
  if (!newsletterEmail.value) return
  newsletterStatus.value = 'loading'
  const result = await subscribeToNewsletter(newsletterEmail.value)
  if (result.success) {
    newsletterStatus.value = 'success'
    newsletterEmail.value = ''
  } else {
    newsletterStatus.value = 'idle'
  }
}
</script>

<style scoped>
/* ---- Hero ---- */
.hero {
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--mv-cream);
  position: relative;
}

.hero__container {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;
  padding-top: 6rem;
  padding-bottom: 4rem;
}

.hero__label {
  display: block;
  margin-bottom: 1.25rem;
}

.hero__headline {
  font-size: clamp(2.5rem, 5.5vw, 4rem);
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 1.25rem;
  color: var(--mv-green);
}

.hero__subhead {
  font-size: 1.1rem;
  color: var(--mv-muted);
  margin-bottom: 2.5rem;
  max-width: 44ch;
}

.hero__ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero__visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__gem-wrap {
  width: 320px;
  height: 320px;
  background: linear-gradient(145deg, var(--mv-green) 0%, var(--mv-green-deep) 100%);
  border-radius: 48% 52% 56% 44% / 44% 46% 54% 56%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-shadow: 0 24px 64px rgba(13,40,24,0.25);
  animation: gemFloat 6s ease-in-out infinite;
}

@keyframes gemFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  33% { transform: translateY(-8px) rotate(1deg); }
  66% { transform: translateY(-4px) rotate(-1deg); }
}

.hero__gem-icon {
  width: 80px;
  height: 80px;
  color: var(--mv-cream);
  opacity: 0.9;
}

.hero__gem-label {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--mv-cream);
  opacity: 0.7;
}

.hero__scroll-cue {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__scroll-arrow {
  font-size: 1.5rem;
  color: var(--mv-muted);
  animation: bounce 2s ease-in-out infinite;
  opacity: 0.5;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

/* ---- Section header ---- */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header .mv-label {
  display: block;
  margin-bottom: 0.5rem;
}

/* ---- How It Works ---- */
.how-it-works {
  padding: 6rem 0;
  background-color: #fff;
}

.how-it-works__headline {
  margin-top: 0.5rem;
}

.how-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

.how-card {
  text-align: center;
  padding: 2rem 1.5rem;
}

.how-card__icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 1.25rem;
  color: var(--mv-green);
}

.how-card__icon svg {
  width: 100%;
  height: 100%;
}

.how-card__title {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
}

.how-card__desc {
  font-size: 0.9rem;
  color: var(--mv-muted);
  line-height: 1.7;
  max-width: 28ch;
  margin: 0 auto;
}

/* ---- Featured Stones ---- */
.featured-stones {
  padding: 6rem 0;
  background-color: var(--mv-cream);
}

.featured-stones__headline {
  margin-top: 0.5rem;
}

.stones-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.stone-card {
  background: var(--mv-white);
  border: 1px solid var(--mv-border);
  border-radius: var(--r-md);
  overflow: hidden;
  cursor: pointer;
  transition: transform var(--tr-base), box-shadow var(--tr-base);
}

.stone-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--sh-lg);
}

.stone-card__image {
  position: relative;
  height: 220px;
}

.stone-card__image .mv-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1;
}

.stone-card__placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--mv-green) 0%, var(--mv-green-deep) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mv-cream);
  font-family: var(--font-heading);
  font-size: 1rem;
  letter-spacing: 0.2em;
  opacity: 0.3;
}

.stone-card__body {
  padding: 1.5rem;
}

.stone-card__title {
  font-size: 1.05rem;
  margin-bottom: 0.4rem;
}

.stone-card__specs {
  font-size: 0.83rem;
  color: var(--mv-muted);
  margin-bottom: 1rem;
}

.stone-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stone-card__price {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--mv-charcoal);
}

.stone-card__link {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--mv-green);
}

.featured-stones__cta {
  text-align: center;
  margin-top: 3rem;
}

/* ---- The Difference ---- */
.difference {
  padding: 6rem 0;
  background-color: var(--mv-green);
}

.difference__grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;
}

.difference__visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.difference__visual-placeholder {
  width: 280px;
  height: 280px;
  background: linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
  border-radius: 50%;
  border: 1px solid rgba(245,240,232,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}

.difference__gem-icon {
  width: 80px;
  height: 80px;
  color: var(--mv-cream);
  opacity: 0.5;
}

.difference__headline {
  color: var(--mv-cream);
  margin: 0.5rem 0 2rem;
}

.difference__content .mv-label {
  display: block;
}

.comparison-table {
  border: 1px solid rgba(245,240,232,0.15);
  border-radius: var(--r-md);
  overflow: hidden;
}

.comparison-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1.4fr;
  gap: 0;
}

.comparison-row:not(:last-child) {
  border-bottom: 1px solid rgba(245,240,232,0.1);
}

.comparison-row > span {
  padding: 1rem 1.25rem;
  font-size: 0.875rem;
  line-height: 1.4;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.comparison-row__other {
  color: rgba(245,240,232,0.4);
  border-right: 1px solid rgba(245,240,232,0.1);
}

.comparison-row__feature {
  font-weight: 600;
  color: rgba(245,240,232,0.7);
  border-right: 1px solid rgba(245,240,232,0.1);
}

.comparison-row__mv {
  color: var(--mv-gold);
  font-weight: 500;
}

.comparison-row__mv svg {
  color: var(--mv-gold);
  flex-shrink: 0;
}

/* ---- Founder ---- */
.founder {
  padding: 6rem 0;
  background-color: #fff;
}

.founder__grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 4.5rem;
  align-items: start;
}

.founder__photo-placeholder {
  width: 100%;
  aspect-ratio: 4/5;
  background: linear-gradient(135deg, var(--mv-cream-dark) 0%, var(--mv-cream) 100%);
  border: 1px solid var(--mv-border);
  border-radius: var(--r-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mv-green);
  font-family: var(--font-heading);
  font-size: 1.25rem;
  letter-spacing: 0.25em;
  opacity: 0.3;
}

.founder__content .mv-label {
  display: block;
  margin-bottom: 0.5rem;
}

.founder__headline {
  margin: 0.5rem 0 1.5rem;
  max-width: 500px;
}

.founder__text p {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--mv-charcoal);
}

.founder__text p + p {
  margin-top: 1rem;
}

.founder__content .mv-btn {
  margin-top: 2rem;
}

.founder__sig {
  margin-top: 1.25rem;
  font-size: 1rem;
  color: var(--mv-muted);
}

/* ---- Education Teaser ---- */
.education-teaser {
  padding: 6rem 0;
  background-color: var(--mv-cream);
}

.education-teaser__headline {
  margin-top: 0.5rem;
}

.edu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.edu-card {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: var(--mv-white);
  border: 1px solid var(--mv-border);
  border-radius: var(--r-md);
  text-decoration: none;
  transition: all var(--tr-base);
}

.edu-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--sh-lg);
  border-color: var(--mv-green);
}

.edu-card__label {
  display: block;
  margin-bottom: 0.875rem;
}

.edu-card__title {
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
  color: var(--mv-green);
}

.edu-card__desc {
  font-size: 0.88rem;
  color: var(--mv-muted);
  line-height: 1.65;
  flex: 1;
  margin-bottom: 1.25rem;
}

.edu-card__link {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--mv-green);
}

/* ---- Trust Bar ---- */
.trust-bar {
  padding: 3.5rem 0;
  background: #fff;
  border-top: 1px solid var(--mv-border);
  border-bottom: 1px solid var(--mv-border);
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
}

.trust-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.trust-item__icon {
  width: 28px;
  height: 28px;
  color: var(--mv-green);
}

.trust-item__label {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--mv-charcoal);
}

/* ---- Newsletter Strip ---- */
.newsletter-strip {
  padding: 5rem 0;
  background-color: var(--mv-cream);
}

.newsletter-strip__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  flex-wrap: wrap;
}

.newsletter-strip__headline {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 0.4rem;
}

.newsletter-strip__sub {
  font-size: 0.9rem;
  color: var(--mv-muted);
  max-width: 42ch;
}

.newsletter-strip__form {
  flex: 1;
  min-width: 300px;
  max-width: 480px;
}

.newsletter-strip__input-row {
  display: flex;
  gap: 0.75rem;
}

.newsletter-strip__input {
  flex: 1;
}

.newsletter-strip__success {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: var(--mv-green);
  font-weight: 500;
}

/* ---- Responsive ---- */
@media (max-width: 900px) {
  .hero__container {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 5rem;
  }

  .hero__subhead { margin: 0 auto 2.5rem; }
  .hero__ctas { justify-content: center; }
  .hero__gem-wrap { width: 240px; height: 240px; }

  .how-grid,
  .stones-grid,
  .edu-grid { grid-template-columns: repeat(2, 1fr); }

  .difference__grid { grid-template-columns: 1fr; }
  .difference__visual { display: none; }

  .founder__grid { grid-template-columns: 1fr; }
  .founder__photo { max-width: 360px; margin: 0 auto; }

  .trust-grid { grid-template-columns: repeat(2, 1fr); }
  .newsletter-strip__inner { flex-direction: column; align-items: flex-start; }
}

@media (max-width: 600px) {
  .how-grid,
  .stones-grid,
  .edu-grid { grid-template-columns: 1fr; }

  .hero__ctas { flex-direction: column; width: 100%; }
  .hero__ctas .mv-btn { width: 100%; justify-content: center; }

  .trust-grid { grid-template-columns: 1fr 1fr; gap: 1.5rem; }
  .newsletter-strip__input-row { flex-direction: column; }
}
</style>