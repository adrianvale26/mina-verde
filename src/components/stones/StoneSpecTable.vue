<template>
  <div class="stone-spec-table">
    <dl class="stone-spec-table__dl">
      <div class="stone-spec-table__row" v-for="row in specRows" :key="row.label">
        <dt class="stone-spec-table__label">{{ row.label }}</dt>
        <dd class="stone-spec-table__value">{{ row.value }}</dd>
      </div>
      <div class="stone-spec-table__row" v-if="stone.certScanUrl">
        <dt class="stone-spec-table__label">Certificate</dt>
        <dd class="stone-spec-table__value">
          <a :href="stone.certScanUrl" target="_blank" rel="noopener" class="stone-spec-table__gia-link">
            Download GIA Report
          </a>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  stone: { type: Object, required: true }
})

const specRows = computed(() => [
  { label: 'Carat', value: `${props.stone.carat} ct` },
  { label: 'Cut', value: props.stone.cut },
  { label: 'Color', value: props.stone.color },
  { label: 'Clarity', value: props.stone.clarity },
  { label: 'Origin', value: props.stone.origin },
  { label: 'Treatment', value: props.stone.treatment },
  { label: 'Cert Number', value: props.stone.certNumber }
])
</script>

<style scoped>
.stone-spec-table__dl { display: flex; flex-direction: column; }
.stone-spec-table__row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  padding: 0.7rem 0;
  border-bottom: 1px solid var(--mv-border);
  font-size: 0.9rem;
}
.stone-spec-table__row:last-child { border-bottom: none; }
.stone-spec-table__label {
  font-family: var(--font-heading);
  font-style: italic;
  color: var(--mv-muted);
  white-space: nowrap;
}
.stone-spec-table__value {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--mv-charcoal);
  text-align: right;
}
.stone-spec-table__gia-link {
  color: var(--mv-green);
  font-weight: 500;
  font-size: 0.85rem;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.stone-spec-table__gia-link:hover { color: var(--mv-gold); }
</style>