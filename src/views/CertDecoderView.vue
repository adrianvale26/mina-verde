<template>
  <div class="cert-decoder">
    <div class="mv-container">
      <header class="decoder-header">
        <span class="mv-section-label">Tools</span>
        <h1>Certification Decoder</h1>
        <p class="decoder-header__sub">
          GIA certificates are the standard — but the language can be dense. Enter any field from a GIA report and we'll explain what it actually means.
        </p>
      </header>

      <div class="decoder-tool">
        <div class="decoder-input-group">
          <input
            v-model="certField"
            type="text"
            class="decoder-input"
            placeholder="e.g., 'Minor Oil,' 'Emerald Cut,' or 'VVS1'"
          />
          <button @click="decodeField" class="mv-btn-primary">Decode</button>
        </div>

        <div v-if="result" class="decoder-result">
          <h3>{{ certField }}</h3>
          <p>{{ result }}</p>
        </div>

        <div v-else class="decoder-placeholder">
          <p>Enter a term from a GIA emerald certificate above to see its meaning.</p>
        </div>
      </div>

      <div class="decoder-examples">
        <h3>Common certificate terms</h3>
        <div class="decoder-chips">
          <button class="decoder-chip" @click="quickDecode('Minor Oil')">Minor Oil</button>
          <button class="decoder-chip" @click="quickDecode('Standard Oil')">Standard Oil</button>
          <button class="decoder-chip" @click="quickDecode('Fracture Filling')">Fracture Filling</button>
          <button class="decoder-chip" @click="quickDecode('No Treatment')">No Treatment</button>
          <button class="decoder-chip" @click="quickDecode('Emerald Cut')">Emerald Cut</button>
          <button class="decoder-chip" @click="quickDecode('VVS1')">VVS1</button>
          <button class="decoder-chip" @click="quickDecode('Muzo')">Muzo</button>
          <button class="decoder-chip" @click="quickDecode('Transparency')">Transparency</button>
        </div>
      </div>

      <div class="decoder-cta">
        <h3>Have a full certificate?</h3>
        <p>Upload a scan or photo and we'll walk through every field together.</p>
        <RouterLink to="/contact" class="mv-btn-secondary">Contact Us</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useRouteSEO } from '../composables/useRouteSEO'

useRouteSEO()

const certField = ref('')
const result = ref('')

const definitions = {
  'Minor Oil': 'A treatment where a colorless oil is applied to surface-reaching fractures to improve clarity. Minor oil is the most common and least problematic treatment. It\'s acceptable in fine emeralds provided it\'s disclosed.',
  'Standard Oil': 'A step above minor oil — more oil has been used to fill larger fractures. Still common and generally accepted, but worth knowing the difference when comparing stones.',
  'Fracture Filling': 'A more significant treatment where a resin or other filler is used in addition to oil. GIA reports will note this specifically. We don\'t sell fracture-filled stones.',
  'No Treatment': 'A rare designation meaning the emerald has received no clarity enhancement of any kind. Most emeralds on the market have some oil. "No Treatment" stones command a premium.',
  'Emerald Cut': 'The classic octagonal step cut designed specifically for emeralds. It minimizes stress on the stone during setting and showcases color while being forgiving of inclusions.',
  'VVS1': 'Very Very Slightly included — level 1. Tiny inclusions that are difficult for a skilled grader to see under 10x magnification. Extremely rare in emeralds due to their natural inclusions.',
  'Muzo': 'Named after the legendary Muzo mine in Boyacá, Colombia — the world\'s most famous emerald source. "Muzo" on a certificate means the stone was confirmed to originate from that region. True Muzo emeralds are rare and prized.',
  'Transparency': 'How much light passes through the stone. Emerald transparency is graded separately from clarity and has a major impact on the stone\'s overall beauty.'
}

const decodeField = () => {
  const key = certField.value.trim()
  result.value = definitions[key] || `We don't have a definition for "${key}" yet. Try one of the common terms below, or contact us for a personalized explanation.`
}

const quickDecode = (term) => {
  certField.value = term
  decodeField()
}
</script>

<style scoped>
.cert-decoder {
  padding: 4rem 0 6rem;
  min-height: calc(100vh - 64px);
}

.decoder-header {
  text-align: center;
  margin-bottom: 4rem;
}

.decoder-header h1 {
  margin: 0.5rem 0 1rem;
}

.decoder-header__sub {
  font-size: 1.1rem;
  color: var(--mv-muted);
  max-width: 560px;
  margin: 0 auto;
}

.decoder-tool {
  max-width: 640px;
  margin: 0 auto 4rem;
  padding: 2.5rem;
  background-color: #fff;
  border: 1px solid var(--mv-border);
  border-radius: 12px;
}

.decoder-input-group {
  display: flex;
  gap: 0.75rem;
}

.decoder-input {
  flex: 1;
  padding: 0.875rem 1rem;
  border: 1px solid var(--mv-border);
  border-radius: 4px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--mv-charcoal);
  transition: border-color var(--mv-transition);
}

.decoder-input:focus {
  outline: none;
  border-color: var(--mv-green);
}

.decoder-result {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--mv-border);
}

.decoder-result h3 {
  font-size: 1.1rem;
  color: var(--mv-green);
  margin-bottom: 0.75rem;
}

.decoder-result p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--mv-charcoal);
}

.decoder-placeholder {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--mv-border);
  text-align: center;
  color: var(--mv-muted);
  font-size: 0.9rem;
}

.decoder-examples {
  max-width: 640px;
  margin: 0 auto 4rem;
}

.decoder-examples h3 {
  font-size: 1rem;
  margin-bottom: 1.25rem;
  text-align: center;
}

.decoder-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.decoder-chip {
  padding: 0.5rem 1rem;
  background-color: #fff;
  border: 1px solid var(--mv-border);
  border-radius: 100px;
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--mv-charcoal);
  cursor: pointer;
  transition: all var(--mv-transition);
}

.decoder-chip:hover {
  border-color: var(--mv-green);
  color: var(--mv-green);
}

.decoder-cta {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 2.5rem;
  background-color: var(--mv-cream);
  border-radius: 12px;
}

.decoder-cta h3 {
  margin-bottom: 0.5rem;
}

.decoder-cta p {
  font-size: 0.9rem;
  color: var(--mv-muted);
  margin-bottom: 1.5rem;
}

@media (max-width: 600px) {
  .decoder-input-group {
    flex-direction: column;
  }
}
</style>
