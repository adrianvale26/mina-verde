<template>
  <div class="trip-view">
    <div class="mv-container">
      <header class="trip-header">
        <span class="mv-section-label">Colombia Trip</span>
        <h1>Colombia Trip Tracker</h1>
        <p class="trip-header__sub">
          Planning a buying trip to Bogotá? Track the stones you're considering before you go — and we'll help you prioritize.
        </p>
      </header>

      <div class="trip-grid">
        <!-- Wishlist Form -->
        <div class="trip-wishlist">
          <h2>Build Your Wishlist</h2>
          <p>Tell us what you're looking for and we'll pre-research stones that match before your trip.</p>
          <form @submit.prevent="handleSubmit" class="trip-form">
            <div class="trip-field">
              <label>Name</label>
              <input v-model="form.name" type="text" placeholder="Your name" required />
            </div>
            <div class="trip-field">
              <label>Email</label>
              <input v-model="form.email" type="email" placeholder="your@email.com" required />
            </div>
            <div class="trip-field">
              <label>Target carat range</label>
              <select v-model="form.carat">
                <option value="under-1">Under 1 carat</option>
                <option value="1-2">1–2 carats</option>
                <option value="2-5">2–5 carats</option>
                <option value="5+">5+ carats</option>
              </select>
            </div>
            <div class="trip-field">
              <label>Budget range</label>
              <select v-model="form.budget">
                <option value="under-2k">Under $2,000</option>
                <option value="2k-5k">$2,000 – $5,000</option>
                <option value="5k-10k">$5,000 – $10,000</option>
                <option value="10k+">$10,000+</option>
              </select>
            </div>
            <div class="trip-field">
              <label>Notes</label>
              <textarea v-model="form.notes" rows="3" placeholder="Specific preferences, certifications you want, etc."></textarea>
            </div>
            <button type="submit" class="mv-btn-primary" :disabled="submitted">
              {{ submitted ? 'Wishlist Submitted ✓' : 'Submit Wishlist' }}
            </button>
          </form>
        </div>

        <!-- Trip Info -->
        <div class="trip-info">
          <h2>Upcoming Trip Dates</h2>
          <div class="trip-dates">
            <div class="trip-date">
              <span class="trip-date__month">Jun</span>
              <span class="trip-date__day">15</span>
              <span class="trip-date__year">2025</span>
            </div>
            <div class="trip-date-desc">
              <h4>Bogotá Emerald District Visit</h4>
              <p>Private sourcing trip — limited availability for consultations. Contact us to reserve a slot.</p>
            </div>
          </div>

          <div class="trip-services">
            <h3>What's included</h3>
            <ul class="trip-services-list">
              <li>Private visit to vetted dealers in the emerald district</li>
              <li>Independent GIA grading arranged on-site</li>
              <li>Hotel and logistics recommendations</li>
              <li>Translation and negotiation support</li>
            </ul>
          </div>

          <div class="trip-cta">
            <p>Questions? Reach out directly.</p>
            <RouterLink to="/contact" class="mv-btn-secondary">Contact Adam</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { useRouteSEO } from '../composables/useRouteSEO'

useRouteSEO()

const form = reactive({
  name: '',
  email: '',
  carat: '1-2',
  budget: '2k-5k',
  notes: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  // Stub: wire up to backend/email service when ready
}
</script>

<style scoped>
.trip-view {
  padding: 4rem 0 6rem;
  min-height: calc(100vh - 64px);
}

.trip-header {
  text-align: center;
  margin-bottom: 4rem;
}

.trip-header h1 {
  margin: 0.5rem 0 1rem;
}

.trip-header__sub {
  font-size: 1.1rem;
  color: var(--mv-muted);
  max-width: 540px;
  margin: 0 auto;
}

.trip-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 960px;
  margin: 0 auto;
}

.trip-wishlist {
  background-color: #fff;
  border: 1px solid var(--mv-border);
  border-radius: 12px;
  padding: 2.5rem;
}

.trip-wishlist h2 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.trip-wishlist > p {
  font-size: 0.9rem;
  color: var(--mv-muted);
  margin-bottom: 2rem;
}

.trip-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.trip-field label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--mv-charcoal);
  margin-bottom: 0.4rem;
}

.trip-field input,
.trip-field select,
.trip-field textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--mv-border);
  border-radius: 4px;
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--mv-charcoal);
  background-color: #fff;
  transition: border-color var(--mv-transition);
}

.trip-field input:focus,
.trip-field select:focus,
.trip-field textarea:focus {
  outline: none;
  border-color: var(--mv-green);
}

.trip-field textarea {
  resize: vertical;
  min-height: 80px;
}

.trip-info h2 {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.trip-dates {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--mv-green) 0%, var(--mv-green-deep) 100%);
  border-radius: 8px;
}

.trip-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--mv-cream);
  min-width: 50px;
}

.trip-date__month {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.7;
}

.trip-date__day {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1;
}

.trip-date__year {
  font-size: 0.7rem;
  opacity: 0.6;
}

.trip-date-desc h4 {
  font-size: 1rem;
  color: var(--mv-cream);
  margin-bottom: 0.25rem;
}

.trip-date-desc p {
  font-size: 0.85rem;
  color: rgba(245, 240, 232, 0.75);
  line-height: 1.5;
}

.trip-services h3 {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.trip-services-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.trip-services-list li {
  position: relative;
  padding-left: 1.25rem;
  font-size: 0.9rem;
  color: var(--mv-charcoal);
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.trip-services-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--mv-green);
  font-weight: 700;
}

.trip-cta p {
  font-size: 0.9rem;
  color: var(--mv-muted);
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .trip-grid {
    grid-template-columns: 1fr;
  }
}
</style>
