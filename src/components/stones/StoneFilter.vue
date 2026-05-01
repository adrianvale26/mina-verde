<template>
  <aside class="stone-filter">
    <!-- Mobile toggle -->
    <button class="stone-filter__toggle" @click="open = !open">
      <span>{{ open ? 'Hide Filters' : 'Show Filters' }}</span>
      <svg :class="{ rotated: open }" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <div class="stone-filter__body" :class="{ 'stone-filter__body--open': open }">
      <h2 class="stone-filter__title">Refine</h2>

      <!-- Carat Range -->
      <div class="stone-filter__section">
        <h3 class="stone-filter__label">Carat</h3>
        <div class="stone-filter__carat-options">
          <label v-for="opt in caratOptions" :key="opt.value" class="stone-filter__radio">
            <input type="radio" :value="opt.value" v-model="caratSelection" />
            <span>{{ opt.label }}</span>
          </label>
        </div>
      </div>

      <!-- Cut -->
      <div class="stone-filter__section">
        <h3 class="stone-filter__label">Cut</h3>
        <div class="stone-filter__checkboxes">
          <label v-for="cut in cutOptions" :key="cut" class="stone-filter__checkbox">
            <input type="checkbox" :value="cut" v-model="localCuts" />
            <span>{{ cut }}</span>
          </label>
        </div>
      </div>

      <!-- Price -->
      <div class="stone-filter__section">
        <h3 class="stone-filter__label">Max Price</h3>
        <div class="stone-filter__price-options">
          <button
            v-for="opt in priceOptions"
            :key="opt.value"
            :class="['stone-filter__price-btn', { active: filters.priceMax === opt.value }]"
            @click="filters.priceMax = opt.value"
          >{{ opt.label }}</button>
        </div>
      </div>

      <!-- Treatment -->
      <div class="stone-filter__section">
        <h3 class="stone-filter__label">Treatment</h3>
        <div class="stone-filter__radio-group">
          <label v-for="opt in treatmentOptions" :key="opt.value" class="stone-filter__radio">
            <input type="radio" :value="opt.value" v-model="filters.treatment" />
            <span>{{ opt.label }}</span>
          </label>
        </div>
      </div>

      <button class="stone-filter__clear" @click="clearFilters">Clear Filters</button>
    </div>
  </aside>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  filters: { type: Object, required: true }
})

const open = ref(false)

const caratOptions = [
  { label: 'All', value: { min: 0, max: 10 } },
  { label: 'Under 1ct', value: { min: 0, max: 1 } },
  { label: '1–2ct', value: { min: 1, max: 2 } },
  { label: '2–3ct', value: { min: 2, max: 3 } },
  { label: '3ct+', value: { min: 3, max: 10 } }
]
const caratSelection = ref({ min: 0, max: 10 })

watch(caratSelection, (val) => {
  props.filters.caratMin = val.min
  props.filters.caratMax = val.max
})

const cutOptions = ['Emerald', 'Round', 'Oval', 'Cushion', 'Pear']
const localCuts = ref([])

watch(localCuts, (val) => {
  props.filters.cuts = val
}, { deep: true })

const priceOptions = [
  { label: 'All', value: 20000 },
  { label: '$500', value: 500 },
  { label: '$1K', value: 1000 },
  { label: '$2K', value: 2000 },
  { label: '$5K', value: 5000 }
]

const treatmentOptions = [
  { label: 'All', value: '' },
  { label: 'Minor oil', value: 'Minor oil' },
  { label: 'Standard oil', value: 'Standard oil' },
  { label: 'No oil', value: 'No oil' }
]

function clearFilters() {
  caratSelection.value = { min: 0, max: 10 }
  localCuts.value = []
  props.filters.priceMax = 20000
  props.filters.treatment = ''
}
</script>

<style scoped>
.stone-filter {
  width: 240px;
  flex-shrink: 0;
}
.stone-filter__toggle {
  display: none;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: 1px solid var(--mv-border);
  border-radius: 6px;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: var(--mv-charcoal);
  background: #fff;
}
.stone-filter__toggle svg { transition: transform 0.2s; }
.stone-filter__toggle svg.rotated { transform: rotate(180deg); }
.stone-filter__body { position: sticky; top: 80px; }
.stone-filter__title {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--mv-charcoal);
  margin-bottom: 1.5rem;
}
.stone-filter__section { margin-bottom: 1.75rem; }
.stone-filter__label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--mv-muted);
  margin-bottom: 0.75rem;
}
.stone-filter__checkboxes, .stone-filter__carat-options, .stone-filter__radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.stone-filter__radio, .stone-filter__checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--mv-charcoal);
  cursor: pointer;
}
.stone-filter__radio input, .stone-filter__checkbox input { accent-color: var(--mv-green); }
.stone-filter__price-options {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.stone-filter__price-btn {
  padding: 0.35rem 0.75rem;
  border: 1px solid var(--mv-border);
  border-radius: 4px;
  background: #fff;
  font-size: 0.8rem;
  color: var(--mv-muted);
  cursor: pointer;
  transition: all 0.15s;
}
.stone-filter__price-btn.active, .stone-filter__price-btn:hover {
  border-color: var(--mv-green);
  color: var(--mv-green);
  background: rgba(27, 67, 50, 0.05);
}
.stone-filter__clear {
  width: 100%;
  padding: 0.65rem;
  border: 1px solid var(--mv-border);
  border-radius: 6px;
  background: #fff;
  font-size: 0.85rem;
  color: var(--mv-muted);
  cursor: pointer;
  transition: all 0.15s;
}
.stone-filter__clear:hover { border-color: var(--mv-green); color: var(--mv-green); }

@media (max-width: 768px) {
  .stone-filter { width: 100%; }
  .stone-filter__toggle { display: flex; }
  .stone-filter__body {
    position: static;
    display: none;
    background: #fff;
    border: 1px solid var(--mv-border);
    border-radius: 8px;
    padding: 1.5rem;
    margin-top: 0.75rem;
  }
  .stone-filter__body--open { display: block; }
}
</style>