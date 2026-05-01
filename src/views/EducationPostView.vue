<template>
  <div class="post-view">
    <div class="mv-container">
      <div class="post-grid">
        <!-- Main Content -->
        <article class="post-content">
          <RouterLink to="/education" class="post-back">← Back to Education</RouterLink>
          <span class="mv-section-label">Emerald Education</span>
          <h1>The 4 Cs of Emeralds: What Actually Matters</h1>
          <p class="post-meta">Published March 2024 · 5 min read</p>

          <div class="post-body">
            <p>
              When most people learn about the 4 Cs — Color, Clarity, Cut, and Carat — they apply what they know from diamond grading. That's a mistake. Emeralds are graded differently, and understanding those differences is essential to making a smart purchase.
            </p>
            <h2>Color</h2>
            <p>
              Colombian emeralds are prized for their "vertically oriented" color — a rich, vivid green with a slight blue modifier. The finest specimens display what gemologists call "Muzo green," named after the legendary mine in Boyacá, Colombia.
            </p>
            <p>
              Unlike diamonds where color is about absence of color, emeralds are valued for the intensity and purity of their green. Hue, tone, and saturation all matter. A stone that's too dark loses brilliance; too light and it reads as greenish beryl, not emerald.
            </p>
            <h2>Clarity</h2>
            <p>
              Emeralds are TYPE III gemstones — meaning they virtually always have inclusions. This is expected and accepted. The key is understanding what's inside and whether it affects durability or appearance.
            </p>
            <p>
              GIA grades emerald clarity using a scale that accounts for the stone's natural "jardin" (garden), the characteristic inclusion pattern that looks like foliage. Looking for an "eye-clean" emerald in the traditional sense is unrealistic and often leads to buying treated stones masquerading as natural.
            </p>
            <h2>Cut</h2>
            <p>
              Emeralds are cut to maximize color retention and weight retention from the rough. The classic emerald cut — an octagonal step cut — was developed specifically for this gem type to minimize pressure during setting and showcase the color while hiding inclusions.
            </p>
            <p>
              Other cuts exist (oval, cushion, pear), but the priority is preserving the stone's integrity, not maximizing brilliance. A poorly cut emerald will appear dull regardless of its color grade.
            </p>
            <h2>Carat</h2>
            <p>
              Emeralds are less dense than diamonds, so a 1-carat emerald is larger than a 1-carat diamond. Weight translates differently. But the real story is that fine emeralds over 2 carats are exponentially rarer — and more valuable — than their lower-weight counterparts.
            </p>
          </div>
        </article>

        <!-- Sidebar -->
        <aside class="post-sidebar">
          <div class="sidebar-card">
            <h4>Related Articles</h4>
            <nav class="sidebar-nav">
              <RouterLink to="/education/origin-matters" class="sidebar-link">Why Colombian Origin Matters</RouterLink>
              <RouterLink to="/education/oil-treatments" class="sidebar-link">Oil, Resin & Fracture Filling</RouterLink>
              <RouterLink to="/tools/certification-decoder" class="sidebar-link">Decode Any GIA Certificate</RouterLink>
            </nav>
          </div>
          <div class="sidebar-card">
            <h4>Ready to find your stone?</h4>
            <RouterLink to="/quiz" class="mv-btn-primary" style="width:100%;text-align:center">Take the Quiz</RouterLink>
          </div>
        </aside>
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
.post-view {
  padding: 3rem 0 6rem;
  min-height: calc(100vh - 64px);
}

.post-grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 4rem;
  align-items: start;
}

.post-back {
  display: inline-block;
  font-size: 0.875rem;
  color: var(--mv-muted);
  text-decoration: none;
  margin-bottom: 1.5rem;
  transition: color var(--mv-transition);
}

.post-back:hover {
  color: var(--mv-green);
}

.post-content h1 {
  margin: 0.5rem 0 0.75rem;
}

.post-meta {
  font-size: 0.875rem;
  color: var(--mv-muted);
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--mv-border);
}

.post-body h2 {
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
}

.post-body p {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--mv-charcoal);
  max-width: 65ch;
}

.post-body p + p {
  margin-top: 1rem;
}

.post-sidebar {
  position: sticky;
  top: 80px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sidebar-card {
  background-color: #fff;
  border: 1px solid var(--mv-border);
  border-radius: 8px;
  padding: 1.5rem;
}

.sidebar-card h4 {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--mv-muted);
  margin-bottom: 1rem;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sidebar-link {
  font-size: 0.9rem;
  color: var(--mv-charcoal);
  text-decoration: none;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--mv-border);
  transition: color var(--mv-transition);
}

.sidebar-link:last-child {
  border-bottom: none;
}

.sidebar-link:hover {
  color: var(--mv-green);
}

@media (max-width: 900px) {
  .post-grid {
    grid-template-columns: 1fr;
  }

  .post-sidebar {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .sidebar-card {
    flex: 1;
    min-width: 260px;
  }
}
</style>
