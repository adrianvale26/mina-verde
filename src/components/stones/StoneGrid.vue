<template>
  <div class="stone-grid">
    <!-- Loading skeletons -->
    <template v-if="loading">
      <div class="stone-grid__skeleton" v-for="i in 6" :key="i">
        <div class="skeleton-image"></div>
        <div class="skeleton-body">
          <div class="skeleton-line skeleton-line--title"></div>
          <div class="skeleton-line skeleton-line--spec"></div>
          <div class="skeleton-line skeleton-line--price"></div>
        </div>
      </div>
    </template>

    <!-- Empty state -->
    <div v-else-if="!stones || stones.length === 0" class="stone-grid__empty">
      <p>No stones match your filters.</p>
      <slot name="empty-action" />
    </div>

    <!-- Stone cards -->
    <StoneCard v-else v-for="stone in stones" :key="stone.id" :stone="stone" @select="$emit('select', stone)" />
  </div>
</template>

<script setup>
import StoneCard from './StoneCard.vue'

defineProps({
  stones: { type: Array, default: () => [] },
  loading: { type: Boolean, default: false }
})

defineEmits(['select'])
</script>

<style scoped>
.stone-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* Skeleton */
.stone-grid__skeleton {
  border: 1px solid var(--mv-border);
  border-radius: 8px;
  overflow: hidden;
}
.skeleton-image {
  aspect-ratio: 3 / 4;
  background: linear-gradient(90deg, #e8e4dc 25%, #f0ece4 50%, #e8e4dc 75%);
  background-size: 200% 100%;
  animation: shimmer 1.4s ease infinite;
}
.skeleton-body {
  padding: 1.25rem 1.5rem 1.5rem;
}
.skeleton-line {
  border-radius: 4px;
  background: linear-gradient(90deg, #e8e4dc 25%, #f0ece4 50%, #e8e4dc 75%);
  background-size: 200% 100%;
  animation: shimmer 1.4s ease infinite;
  margin-bottom: 0.6rem;
}
.skeleton-line--title { height: 18px; width: 80%; }
.skeleton-line--spec { height: 12px; width: 95%; }
.skeleton-line--price { height: 20px; width: 40%; margin-top: 0.8rem; }

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Empty */
.stone-grid__empty {
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 2rem;
  color: var(--mv-muted);
  font-size: 1rem;
}
.stone-grid__empty p { margin-bottom: 1rem; }

@media (max-width: 900px) {
  .stone-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .stone-grid { grid-template-columns: 1fr; }
}
</style>