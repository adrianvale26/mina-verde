<template>
  <div class="about-view">
    <!-- Hero -->
    <section class="about-hero">
      <div class="about-hero__bg">
        <div class="about-hero__gradient"></div>
      </div>
      <div class="mv-container about-hero__content">
        <span class="mv-label" style="color: var(--mv-gold);">Our Story</span>
        <h1 class="about-hero__headline">About Adam</h1>
      </div>
    </section>

    <!-- Story -->
    <section class="about-story">
      <div class="mv-container">
        <div class="about-story__grid">
          <div class="about-story__photo">
            <div class="about-story__photo-placeholder">
              <span>ADAM</span>
            </div>
          </div>
          <div class="about-story__content">
            <h2 class="about-story__headline">From physicist to emerald obsessive</h2>
            <div class="about-story__text">
              <p>
                I'm Adam — a physics graduate from Fordham who fell into the gem trade after a trip to Colombia in 2023. What started as curiosity became a calling.
              </p>
              <p>
                I spent months learning everything about Colombian emeralds: the geology of the Muzo and Chivor valleys, how GIA grades them, the treatments that matter and the ones that don't. I wasn't satisfied with textbook knowledge. I had to see it for myself.
              </p>
              <p>
                What I found on the ground in Bogotá shocked me. The emerald trade is opaque by design — untreated stones mixed with treated ones, vague origins, certificates that don't tell the full story. Most buyers have no idea what they're actually purchasing.
              </p>
              <p>
                The real problem isn't emeralds. It's trust. Mina Verde exists to solve that. Every stone I sell is GIA-certified, fully disclosed, and sourced from miners and dealers I've met in person.
              </p>
              <p>
                When I'm not handling stones, I run Tennis Nomad — a travel company for tennis enthusiasts. Yes, I travel constantly. And yes, I always find the local gem district.
              </p>
            </div>
            <RouterLink to="/contact" class="mv-btn mv-btn--primary">Get in Touch</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- The Sourcing Promise -->
    <section class="sourcing-promise">
      <div class="mv-container">
        <div class="section-header">
          <span class="mv-label">The Sourcing Promise</span>
          <h2 class="sourcing-promise__headline">How we do things differently</h2>
        </div>
        <div class="promise-grid">
          <div class="promise-card">
            <div class="promise-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z"/>
                <path d="M12 8L8 10.5V15.5L12 18L16 15.5V10.5L12 8Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 class="promise-card__title">We Go Ourselves</h3>
            <p class="promise-card__desc">Adam travels to Bogotá multiple times per year. Every sourcing trip is documented. We know the mines, the dealers, and the people behind every stone we sell.</p>
          </div>
          <div class="promise-card">
            <div class="promise-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <h3 class="promise-card__title">We Buy Direct</h3>
            <p class="promise-card__desc">No middlemen. No auction houses. We negotiate directly with miners and licensed dealers in Bogotá's emerald district — which means better stones at better prices.</p>
          </div>
          <div class="promise-card">
            <div class="promise-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M8 12h8M12 8v8"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3 class="promise-card__title">We Certify Everything</h3>
            <p class="promise-card__desc">Every stone we sell over 0.5ct is submitted to GIA for independent grading. Treatments, origin, clarity — all confirmed by a third party with nothing to gain.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useRouteSEO } from '../composables/useRouteSEO'

useRouteSEO()
</script>

<style scoped>
/* Hero */
.about-hero {
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: flex-end;
  padding-bottom: 4rem;
  background-color: var(--mv-green);
  overflow: hidden;
}

.about-hero__bg {
  position: absolute;
  inset: 0;
}

.about-hero__gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, var(--mv-green-deep) 0%, var(--mv-green) 60%, rgba(27,67,50,0.7) 100%);
}

.about-hero__content {
  position: relative;
  z-index: 1;
  padding-top: 8rem;
}

.about-hero__headline {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 400;
  color: var(--mv-cream);
  margin-top: 0.75rem;
}

/* Story */
.about-story {
  padding: 6rem 0;
  background-color: #fff;
}

.about-story__grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
  align-items: start;
}

.about-story__photo-placeholder {
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

.about-story__headline {
  margin: 0.5rem 0 1.75rem;
}

.about-story__text p {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--mv-charcoal);
}

.about-story__text p + p {
  margin-top: 1rem;
}

.about-story__content .mv-btn {
  margin-top: 2.25rem;
}

/* Sourcing Promise */
.sourcing-promise {
  padding: 6rem 0;
  background-color: var(--mv-cream);
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-header .mv-label {
  display: block;
  margin-bottom: 0.5rem;
}

.sourcing-promise__headline {
  margin-top: 0.5rem;
}

.promise-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

.promise-card {
  text-align: center;
  padding: 2.5rem 2rem;
  background: var(--mv-white);
  border: 1px solid var(--mv-border);
  border-radius: var(--r-md);
}

.promise-card__icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 1.25rem;
  color: var(--mv-green);
}

.promise-card__icon svg {
  width: 100%;
  height: 100%;
}

.promise-card__title {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
}

.promise-card__desc {
  font-size: 0.9rem;
  color: var(--mv-muted);
  line-height: 1.7;
  max-width: 28ch;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 900px) {
  .about-story__grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .about-story__photo {
    max-width: 360px;
    margin: 0 auto;
  }

  .promise-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 600px) {
  .promise-grid {
    grid-template-columns: 1fr;
  }
}
</style>