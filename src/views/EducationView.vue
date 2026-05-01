<template>
  <div class="education-view">
    <div class="mv-container">
      <header class="edu-header">
        <span class="mv-section-label">Learn</span>
        <h1>Emerald Education</h1>
        <p class="edu-header__sub">Everything you need to know before buying a Colombian emerald.</p>
      </header>

      <div class="edu-grid">
        <RouterLink to="/education/4cs-of-emeralds" class="edu-card">
          <div class="edu-card__placeholder">
            <span>The 4 Cs</span>
          </div>
          <div class="edu-card__body">
            <span class="edu-card__date">5 min read</span>
            <h3>The 4 Cs of Emeralds: What Actually Matters</h3>
            <p>Color, Clarity, Cut, and Carat — but the grading rules are different from diamonds. Here's what you need to know.</p>
            <span class="edu-card__link">Read Article →</span>
          </div>
        </RouterLink>

        <RouterLink to="/education/origin-matters" class="edu-card">
          <div class="edu-card__placeholder">
            <span>Origin</span>
          </div>
          <div class="edu-card__body">
            <span class="edu-card__date">7 min read</span>
            <h3>Why Colombian Origin Actually Matters</h3>
            <p>Not all emeralds are created equal. Colombian emeralds have a specific chemistry and character that makes them distinct.</p>
            <span class="edu-card__link">Read Article →</span>
          </div>
        </RouterLink>

        <RouterLink to="/education/oil-treatments" class="edu-card">
          <div class="edu-card__placeholder">
            <span>Treatments</span>
          </div>
          <div class="edu-card__body">
            <span class="edu-card__date">6 min read</span>
            <h3>Oil, Resin, and Fracture Filling: A Buyer's Guide</h3>
            <p>Nearly all emeralds are treated. Understanding the difference between minor oil and fracture filling is critical.</p>
            <span class="edu-card__link">Read Article →</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useRouteSEO } from '../composables/useRouteSEO'

useRouteSEO()
</script>

<style scoped>
.education-view {
  padding: 4rem 0 6rem;
  min-height: calc(100vh - 64px);
}

.edu-header {
  text-align: center;
  margin-bottom: 4rem;
}

.edu-header h1 {
  margin: 0.5rem 0 1rem;
}

.edu-header__sub {
  font-size: 1.1rem;
  color: var(--mv-muted);
  max-width: 540px;
  margin: 0 auto;
}

.edu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.edu-card {
  text-decoration: none;
  border: 1px solid var(--mv-border);
  border-radius: 8px;
  overflow: hidden;
  transition: all var(--mv-transition);
}

.edu-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-color: var(--mv-green);
}

.edu-card__placeholder {
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, var(--mv-green) 0%, var(--mv-green-deep) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mv-cream);
  font-family: var(--font-heading);
  font-size: 1rem;
  letter-spacing: 0.15em;
  opacity: 0.25;
}

.edu-card__body {
  padding: 1.5rem;
}

.edu-card__date {
  font-size: 0.75rem;
  color: var(--mv-muted);
  display: block;
  margin-bottom: 0.5rem;
}

.edu-card__body h3 {
  font-size: 1.1rem;
  color: var(--mv-charcoal);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.edu-card__body p {
  font-size: 0.9rem;
  color: var(--mv-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.edu-card__link {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--mv-green);
}

@media (max-width: 900px) {
  .edu-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .edu-grid {
    grid-template-columns: 1fr;
  }
}
</style>
