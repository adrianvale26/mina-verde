<template>
  <div class="stone-detail">
    <div class="mv-container">
      <!-- Loading skeletons -->
      <template v-if="stoneStore.loading">
        <div class="stone-detail__grid">
          <div class="stone-detail__image-col">
            <div class="skeleton skeleton--square"></div>
          </div>
          <div class="stone-detail__info-col">
            <div class="skeleton skeleton--line skeleton--line-sm"></div>
            <div class="skeleton skeleton--line skeleton--line-lg"></div>
            <div class="skeleton skeleton--line skeleton--line-md"></div>
            <div class="skeleton skeleton--line skeleton--line-sm"></div>
          </div>
        </div>
      </template>

      <!-- Not found -->
      <div v-else-if="!stoneStore.selectedStone" class="stone-detail__not-found">
        <p>Stone not found.</p>
        <RouterLink to="/stones" class="mv-btn-secondary">Back to Collection</RouterLink>
      </div>

      <!-- Stone detail -->
      <div v-else class="stone-detail__grid">
        <!-- LEFT: Image -->
        <div class="stone-detail__image-col">
          <div class="stone-detail__image">
            <img
              v-if="stoneStore.selectedStone.photos && stoneStore.selectedStone.photos[0]"
              :src="stoneStore.selectedStone.photos[0]"
              :alt="stoneStore.selectedStone.stoneName"
            />
            <div v-else class="stone-detail__placeholder"><span>EMERALD</span></div>
          </div>
          <div class="stone-detail__spec-table">
            <StoneSpecTable :stone="stoneStore.selectedStone" />
          </div>
        </div>

        <!-- RIGHT: Info -->
        <div class="stone-detail__info-col">
          <RouterLink to="/stones" class="stone-detail__back">← Back to Collection</RouterLink>
          <span class="stone-detail__badge">GIA Certified</span>
          <h1 class="stone-detail__name">{{ stoneStore.selectedStone.stoneName }}</h1>
          <p class="stone-detail__price">${{ stoneStore.selectedStone.listPrice.toLocaleString() }}</p>

          <!-- Key specs -->
          <div class="stone-detail__key-specs">
            <div class="stone-detail__key-spec">
              <span class="stone-detail__key-label">Weight</span>
              <span class="stone-detail__key-value">{{ stoneStore.selectedStone.carat }} ct</span>
            </div>
            <div class="stone-detail__key-spec">
              <span class="stone-detail__key-label">Cut</span>
              <span class="stone-detail__key-value">{{ stoneStore.selectedStone.cut }}</span>
            </div>
            <div class="stone-detail__key-spec">
              <span class="stone-detail__key-label">Color</span>
              <span class="stone-detail__key-value">{{ stoneStore.selectedStone.color }}</span>
            </div>
            <div class="stone-detail__key-spec">
              <span class="stone-detail__key-label">Clarity</span>
              <span class="stone-detail__key-value">{{ stoneStore.selectedStone.clarity }}</span>
            </div>
            <div class="stone-detail__key-spec">
              <span class="stone-detail__key-label">Treatment</span>
              <span class="stone-detail__key-value">{{ stoneStore.selectedStone.treatment }}</span>
            </div>
            <div class="stone-detail__key-spec">
              <span class="stone-detail__key-label">Origin</span>
              <span class="stone-detail__key-value">{{ stoneStore.selectedStone.origin }}</span>
            </div>
          </div>

          <!-- Origin story -->
          <p class="stone-detail__description">{{ stoneStore.selectedStone.description }}</p>

          <!-- Actions -->
          <div class="stone-detail__actions">
            <button class="mv-btn-primary stone-detail__buy-btn" @click="handleBuy">
              Buy This Stone
            </button>
            <a
              v-if="stoneStore.selectedStone.certScanUrl"
              :href="stoneStore.selectedStone.certScanUrl"
              target="_blank"
              rel="noopener"
              class="stone-detail__gia-link"
            >
              Request GIA Report
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useStoneStore } from '../stores/stoneStore'
import { useRouteSEO } from '../composables/useRouteSEO'
import { processStoneCheckout } from '../services/stripeService'
import StoneSpecTable from '../components/stones/StoneSpecTable.vue'

useRouteSEO()

const route = useRoute()
const stoneStore = useStoneStore()

onMounted(() => {
  stoneStore.fetchStoneById(route.params.id)
})

async function handleBuy() {
  await processStoneCheckout(stoneStore.selectedStone.id)
}
</script>

<style scoped>
.stone-detail {
  padding: 3rem 0 6rem;
  min-height: calc(100vh - 64px);
}
.stone-detail__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}
.stone-detail__image-col {
  position: sticky;
  top: 80px;
}
.stone-detail__image {
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1;
  margin-bottom: 1.5rem;
}
.stone-detail__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.stone-detail__placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--mv-green) 0%, var(--mv-green-deep) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mv-cream);
  font-family: var(--font-heading);
  font-size: 1.25rem;
  letter-spacing: 0.2em;
  opacity: 0.3;
}
.stone-detail__spec-table { margin-top: 1rem; }
.stone-detail__back {
  display: inline-block;
  font-size: 0.875rem;
  color: var(--mv-muted);
  text-decoration: none;
  margin-bottom: 1rem;
  transition: color 0.2s;
}
.stone-detail__back:hover { color: var(--mv-green); }
.stone-detail__badge {
  display: inline-block;
  background: var(--mv-gold);
  color: var(--mv-green-deep);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.3rem 0.6rem;
  border-radius: 3px;
  margin-bottom: 0.75rem;
}
.stone-detail__name {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--mv-charcoal);
  margin-bottom: 0.75rem;
  line-height: 1.2;
}
.stone-detail__price {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 600;
  color: var(--mv-green);
  margin-bottom: 2rem;
}
.stone-detail__key-specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 2rem;
  margin-bottom: 1.5rem;
}
.stone-detail__key-spec {
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--mv-border);
  font-size: 0.875rem;
}
.stone-detail__key-label {
  font-family: var(--font-heading);
  font-style: italic;
  color: var(--mv-muted);
}
.stone-detail__key-value { color: var(--mv-charcoal); font-weight: 500; }
.stone-detail__description {
  font-size: 0.925rem;
  color: var(--mv-charcoal);
  line-height: 1.7;
  margin-bottom: 2rem;
  padding: 1.25rem;
  background: rgba(27, 67, 50, 0.03);
  border-left: 3px solid var(--mv-green);
  border-radius: 0 6px 6px 0;
}
.stone-detail__actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.stone-detail__buy-btn {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 6px;
}
.stone-detail__gia-link {
  text-align: center;
  font-size: 0.875rem;
  color: var(--mv-green);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.stone-detail__gia-link:hover { color: var(--mv-gold); }

/* Skeletons */
.skeleton {
  border-radius: 8px;
  background: linear-gradient(90deg, #e8e4dc 25%, #f0ece4 50%, #e8e4dc 75%);
  background-size: 200% 100%;
  animation: shimmer 1.4s ease infinite;
}
.skeleton--square { aspect-ratio: 1; margin-bottom: 1rem; }
.skeleton--line { height: 16px; margin-bottom: 0.75rem; border-radius: 4px; }
.skeleton--line-sm { width: 40%; }
.skeleton--line-md { width: 70%; }
.skeleton--line-lg { width: 90%; height: 28px; }
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Not found */
.stone-detail__not-found {
  text-align: center;
  padding: 6rem 2rem;
  color: var(--mv-muted);
}
.stone-detail__not-found p { margin-bottom: 1.5rem; font-size: 1.1rem; }

@media (max-width: 768px) {
  .stone-detail__grid { grid-template-columns: 1fr; gap: 2rem; }
  .stone-detail__image-col { position: static; }
  .stone-detail__key-specs { grid-template-columns: 1fr; }
}
</style>