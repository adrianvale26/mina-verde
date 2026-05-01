<template>
  <div class="budget-view">
    <div class="mv-container">
      <header class="budget-header">
        <span class="mv-section-label">Tools</span>
        <h1>Budget Estimator</h1>
        <p class="budget-header__sub">
          Colombian emerald pricing is nonlinear. Use this tool to understand what a stone of a given quality actually costs — before you start shopping.
        </p>
      </header>

      <div class="budget-tool">
        <div class="budget-inputs">
          <div class="budget-field">
            <label>Carat Weight</label>
            <div class="budget-slider-group">
              <input v-model.number="carat" type="range" min="0.25" max="5" step="0.25" class="budget-slider" />
              <span class="budget-value">{{ carat }} ct</span>
            </div>
          </div>
          <div class="budget-field">
            <label>Color Grade</label>
            <select v-model="colorGrade" class="budget-select">
              <option value="A">A — Fine (Muzo green, vivid)</option>
              <option value="B">B — Good (strong green, slightly modifiers)</option>
              <option value="C">C — Average (medium green, noticeable modifier)</option>
            </select>
          </div>
          <div class="budget-field">
            <label>Clarity Grade</label>
            <select v-model="clarityGrade" class="budget-select">
              <option value="VVS">VVS — Eye clean, near flawless</option>
              <option value="VS">VS — Minor inclusions</option>
              <option value="SI">SI — Noticeable inclusions</option>
            </select>
          </div>
          <div class="budget-field">
            <label>Treatment</label>
            <select v-model="treatment" class="budget-select">
              <option value="none">No Treatment</option>
              <option value="minor">Minor Oil</option>
              <option value="standard">Standard Oil</option>
              <option value="fracture">Fracture Filling (avoid)</option>
            </select>
          </div>
        </div>

        <div class="budget-result" v-if="estimatedPrice">
          <span class="budget-result__label">Estimated Range</span>
          <span class="budget-result__price">{{ estimatedPrice }}</span>
          <span class="budget-result__note">Per carat · Colombian origin</span>
        </div>
      </div>

      <div class="budget-disclaimer">
        <p>
          This is a general guide based on market data. Actual prices vary by specific stone, seller, and current market conditions. For accurate pricing, browse our current inventory or contact us directly.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouteSEO } from '../composables/useRouteSEO'

useRouteSEO()

const carat = ref(1)
const colorGrade = ref('A')
const clarityGrade = ref('VS')
const treatment = ref('minor')

const estimatedPrice = computed(() => {
  const basePrices = { A: 2500, B: 1500, C: 800 }
  const clarityMultiplier = { VVS: 2.2, VS: 1.0, SI: 0.55 }
  const treatmentMultiplier = { none: 2.0, minor: 1.0, standard: 0.75, fracture: 0.35 }

  const base = basePrices[colorGrade.value]
  const multClarity = clarityMultiplier[clarityGrade.value]
  const multTreatment = treatmentMultiplier[treatment.value]

  const pricePerCarat = base * multClarity * multTreatment
  const total = pricePerCarat * carat.value

  if (pricePerCarat < 400) return `Under $500 for ${carat.value}ct stone`
  if (pricePerCarat < 900) return `$${Math.round(total).toLocaleString()} – $${Math.round(total * 1.3).toLocaleString()}`
  if (pricePerCarat < 1800) return `$${Math.round(total).toLocaleString()} – $${Math.round(total * 1.25).toLocaleString()}`
  return `$${Math.round(total).toLocaleString()} – $${Math.round(total * 1.2).toLocaleString()}`
})
</script>

<style scoped>
.budget-view {
  padding: 4rem 0 6rem;
  min-height: calc(100vh - 64px);
}

.budget-header {
  text-align: center;
  margin-bottom: 4rem;
}

.budget-header h1 {
  margin: 0.5rem 0 1rem;
}

.budget-header__sub {
  font-size: 1.1rem;
  color: var(--mv-muted);
  max-width: 560px;
  margin: 0 auto;
}

.budget-tool {
  max-width: 600px;
  margin: 0 auto 3rem;
  padding: 2.5rem;
  background-color: #fff;
  border: 1px solid var(--mv-border);
  border-radius: 12px;
}

.budget-field {
  margin-bottom: 1.75rem;
}

.budget-field:last-of-type {
  margin-bottom: 0;
}

.budget-field label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--mv-charcoal);
  margin-bottom: 0.75rem;
}

.budget-slider-group {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.budget-slider {
  flex: 1;
  height: 4px;
  appearance: none;
  background: var(--mv-border);
  border-radius: 2px;
  outline: none;
}

.budget-slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  background: var(--mv-green);
  border-radius: 50%;
  cursor: pointer;
}

.budget-value {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 600;
  min-width: 60px;
}

.budget-select {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--mv-border);
  border-radius: 4px;
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--mv-charcoal);
  background-color: #fff;
  cursor: pointer;
}

.budget-select:focus {
  outline: none;
  border-color: var(--mv-green);
}

.budget-result {
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--mv-border);
  text-align: center;
}

.budget-result__label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--mv-muted);
  margin-bottom: 0.5rem;
}

.budget-result__price {
  display: block;
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--mv-green);
  margin-bottom: 0.25rem;
}

.budget-result__note {
  font-size: 0.8rem;
  color: var(--mv-muted);
}

.budget-disclaimer {
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
}

.budget-disclaimer p {
  font-size: 0.85rem;
  color: var(--mv-muted);
  line-height: 1.6;
}
</style>
