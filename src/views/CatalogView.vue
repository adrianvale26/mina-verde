<template>
  <div class="catalog-view">
    <div class="mv-container">
      <header class="catalog-header">
        <span class="mv-section-label">The Collection</span>
        <h1>Colombian Emeralds</h1>
        <p class="catalog-header__sub">Every stone certified by GIA. Every origin confirmed Colombian.</p>
        <p class="catalog-header__count" v-if="!stoneStore.loading">
          {{ stoneStore.filteredStones.length }} stone{{ stoneStore.filteredStones.length !== 1 ? 's' : '' }}
        </p>
      </header>

      <div class="catalog-layout">
        <StoneFilter :filters="stoneStore.filters" />
        <StoneGrid
          :stones="stoneStore.filteredStones"
          :loading="stoneStore.loading"
          @select="handleSelect"
        >
          <template #empty-action>
            <button class="mv-btn-secondary" @click="clearFilters">Clear Filters</button>
          </template>
        </StoneGrid>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStoneStore } from '../stores/stoneStore'
import { useRouteSEO } from '../composables/useRouteSEO'
import StoneFilter from '../components/stones/StoneFilter.vue'
import StoneGrid from '../components/stones/StoneGrid.vue'

useRouteSEO()

const stoneStore = useStoneStore()

onMounted(() => {
  stoneStore.fetchStones()
})

function handleSelect(stone) {
  // navigation handled by StoneCard router.push
}

function clearFilters() {
  stoneStore.filters.caratMin = 0
  stoneStore.filters.caratMax = 10
  stoneStore.filters.priceMax = 20000
  stoneStore.filters.cuts = []
  stoneStore.filters.treatment = ''
}
</script>

<style scoped>
.catalog-view {
  padding: 4rem 0 6rem;
  min-height: calc(100vh - 64px);
}
.catalog-header {
  text-align: center;
  margin-bottom: 3rem;
}
.catalog-header h1 {
  margin: 0.5rem 0 0.75rem;
}
.catalog-header__sub {
  font-size: 1.05rem;
  color: var(--mv-muted);
  max-width: 540px;
  margin: 0 auto 0.5rem;
}
.catalog-header__count {
  font-size: 0.85rem;
  color: var(--mv-muted);
  font-family: var(--font-heading);
  font-style: italic;
}
.catalog-layout {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}
@media (max-width: 768px) {
  .catalog-layout { flex-direction: column; gap: 1.5rem; }
}
</style>