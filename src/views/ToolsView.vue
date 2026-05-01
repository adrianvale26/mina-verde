<template>
  <div class="tools-view">
    <div class="mv-container">
      <header class="tools-header">
        <span class="mv-section-label">Tools</span>
        <h1>Emerald Tools</h1>
        <p class="tools-header__sub">
          Free tools to help you make smarter decisions when buying Colombian emeralds.
        </p>
      </header>

      <div class="tools-grid">
        <RouterLink to="/tools/certification-decoder" class="tool-card">
          <div class="tool-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M8 12h8M12 8v8"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <h3>Certification Decoder</h3>
          <p>Decode any field from a GIA emerald report. Enter a term and get a plain-English explanation.</p>
          <span class="tool-card__link">Open Tool →</span>
        </RouterLink>

        <RouterLink to="/tools/budget-estimator" class="tool-card">
          <div class="tool-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <path d="M12 8v4m0 0l-2-2m2 2l2-2M6 11h.01M6 15h.01M18 11h.01M18 15h.01"/>
            </svg>
          </div>
          <h3>Budget Estimator</h3>
          <p>Get realistic price ranges for Colombian emeralds based on carat, color, clarity, and treatment.</p>
          <span class="tool-card__link">Open Tool →</span>
        </RouterLink>

        <RouterLink to="/trip-tracker" class="tool-card">
          <div class="tool-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h3>Colombia Trip Tracker</h3>
          <p>Build a stone wishlist before your Bogotá buying trip. We help you prioritize the right stones.</p>
          <span class="tool-card__link">Open Tool →</span>
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
.tools-view {
  padding: 4rem 0 6rem;
  min-height: calc(100vh - 64px);
}

.tools-header {
  text-align: center;
  margin-bottom: 4rem;
}

.tools-header h1 {
  margin: 0.5rem 0 1rem;
}

.tools-header__sub {
  font-size: 1.1rem;
  color: var(--mv-muted);
  max-width: 480px;
  margin: 0 auto;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 960px;
  margin: 0 auto;
}

.tool-card {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #fff;
  border: 1px solid var(--mv-border);
  border-radius: 8px;
  text-decoration: none;
  transition: all var(--mv-transition);
}

.tool-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  border-color: var(--mv-green);
}

.tool-card__icon {
  width: 48px;
  height: 48px;
  color: var(--mv-green);
  margin-bottom: 1.25rem;
}

.tool-card__icon svg {
  width: 100%;
  height: 100%;
}

.tool-card h3 {
  font-size: 1.15rem;
  color: var(--mv-charcoal);
  margin-bottom: 0.75rem;
}

.tool-card p {
  font-size: 0.9rem;
  color: var(--mv-muted);
  line-height: 1.6;
  flex: 1;
  margin-bottom: 1.25rem;
}

.tool-card__link {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--mv-green);
}

@media (max-width: 768px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }
}
</style>
