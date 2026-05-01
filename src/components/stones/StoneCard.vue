<template>
  <article class="stone-card" @click="handleClick">
    <div class="stone-card__image">
      <span class="stone-card__badge">GIA Certified</span>
      <img v-if="stone.photos && stone.photos[0]" :src="stone.photos[0]" :alt="stone.stoneName" />
      <div v-else class="stone-card__placeholder"><span>EMERALD</span></div>
    </div>
    <div class="stone-card__body">
      <h3 class="stone-card__name">{{ stone.stoneName }}</h3>
      <p class="stone-card__specs">{{ stone.carat.toFixed(2) }}ct · {{ stone.color }} · {{ stone.treatment }} · GIA #{{ stone.certNumber }}</p>
      <div class="stone-card__footer">
        <span class="stone-card__price">${{ stone.listPrice.toLocaleString() }}</span>
        <span class="stone-card__link">View Details →</span>
      </div>
    </div>
  </article>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  stone: { type: Object, required: true }
})

const emit = defineEmits(['select'])
const router = useRouter()

function handleClick() {
  emit('select', props.stone)
  router.push(`/stones/${props.stone.id}`)
}
</script>

<style scoped>
.stone-card {
  background: #fff;
  border: 1px solid var(--mv-border);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.stone-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}
.stone-card__image {
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
}
.stone-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.stone-card__badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 1;
  background-color: var(--mv-gold);
  color: var(--mv-green-deep);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.3rem 0.6rem;
  border-radius: 3px;
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
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  opacity: 0.35;
}
.stone-card__body {
  padding: 1.25rem 1.5rem 1.5rem;
}
.stone-card__name {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--mv-charcoal);
  margin-bottom: 0.4rem;
  line-height: 1.3;
}
.stone-card__specs {
  font-size: 0.8rem;
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
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--mv-green);
}
.stone-card__link {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--mv-green);
  transition: color 0.2s ease;
}
.stone-card:hover .stone-card__link {
  color: var(--mv-gold);
}
</style>