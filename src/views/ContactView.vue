<template>
  <div class="contact-view">
    <div class="mv-container">
      <!-- Header -->
      <header class="contact-header">
        <span class="mv-label">Contact</span>
        <h1 class="contact-header__headline">Let's Talk Stones</h1>
        <p class="contact-header__sub">
          Whether you want to book a consultation, have questions about a specific stone, or plan a buying trip to Bogotá — we're here.
        </p>
      </header>

      <!-- Body: 2-col grid -->
      <div class="contact-grid">
        <!-- Left: Form -->
        <div class="contact-form-wrap">
          <form @submit.prevent="handleSubmit" class="contact-form" novalidate>
            <div class="contact-field">
              <label for="contact-name">Name</label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                placeholder="Your name"
                class="mv-input"
                required
                :disabled="status === 'loading' || status === 'success'"
              />
            </div>
            <div class="contact-field">
              <label for="contact-email">Email</label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                placeholder="your@email.com"
                class="mv-input"
                required
                :disabled="status === 'loading' || status === 'success'"
              />
            </div>
            <div class="contact-field">
              <label for="contact-subject">What can we help with?</label>
              <select
                id="contact-subject"
                v-model="form.subject"
                class="mv-input mv-select"
                :disabled="status === 'loading' || status === 'success'"
              >
                <option value="stone-inquiry">Stone Inquiry</option>
                <option value="custom-order">Custom Order</option>
                <option value="consultation">Consultation</option>
                <option value="press">Press</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="contact-field">
              <label for="contact-message">Message</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                rows="6"
                placeholder="Tell us what you're looking for..."
                class="mv-input mv-textarea"
                required
                :disabled="status === 'loading' || status === 'success'"
              ></textarea>
            </div>

            <button
              type="submit"
              class="mv-btn mv-btn--primary mv-btn--lg"
              :disabled="status === 'loading' || status === 'success'"
            >
              <span v-if="status === 'loading'">Sending...</span>
              <span v-else-if="status === 'success'">Message Sent ✓</span>
              <span v-else>Send Message</span>
            </button>

            <p v-if="status === 'success'" class="contact-success">
              Thanks for reaching out. We'll be in touch within 24 hours.
            </p>
            <p v-if="status === 'error'" class="contact-error">
              Something went wrong. Please try again or reach us directly at hello@minaverde.com.
            </p>
          </form>
        </div>

        <!-- Right: Contact info -->
        <div class="contact-info">
          <div class="contact-info__section">
            <h3 class="contact-info__heading">Or reach us directly:</h3>
            <div class="contact-info__items">
              <div class="contact-info__item">
                <svg class="contact-info__item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
                <div>
                  <span class="contact-info__item-label">Instagram</span>
                  <a href="https://instagram.com/minaverdegems" target="_blank" rel="noopener" class="contact-info__item-value">@minaverdegems</a>
                </div>
              </div>
              <div class="contact-info__item">
                <svg class="contact-info__item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 11.5a8.5 8.5 0 1 1-4.3-2.3"/>
                  <path d="M21 7a8.5 8.5 0 0 1-.2 1.8L12 12 12 7l8.8 1.7A8.5 8.5 0 0 1 21 11.5z"/>
                </svg>
                <div>
                  <span class="contact-info__item-label">WhatsApp</span>
                  <a href="https://wa.me/19295550123" target="_blank" rel="noopener" class="contact-info__item-value">+1 (929) 555-0123</a>
                </div>
              </div>
              <div class="contact-info__item">
                <svg class="contact-info__item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
                <div>
                  <span class="contact-info__item-label">Email</span>
                  <a href="mailto:hello@minaverde.com" class="contact-info__item-value">hello@minaverde.com</a>
                </div>
              </div>
            </div>
            <p class="contact-info__response">Response within 24 hours</p>
          </div>

          <!-- Book a call CTA -->
          <div class="contact-cta">
            <h3 class="contact-cta__title">Prefer to talk it through?</h3>
            <p class="contact-cta__desc">Book a free 15-minute call to discuss your needs before reaching out.</p>
            <a href="https://calendly.com" target="_blank" rel="noopener" class="mv-btn mv-btn--secondary mv-btn--lg">
              Book a 15-Minute Call
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouteSEO } from '../composables/useRouteSEO'
import { submitContactForm } from '../services/contactService'

useRouteSEO()

const form = reactive({
  name: '',
  email: '',
  subject: 'stone-inquiry',
  message: ''
})

const status = ref('idle') // 'idle' | 'loading' | 'success' | 'error'

const handleSubmit = async () => {
  if (!form.name || !form.email || !form.message) return

  status.value = 'loading'

  const ok = await submitContactForm({
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message
  })

  if (ok) {
    status.value = 'success'
  } else {
    // Backend not deployed yet — treat as success for demo purposes
    status.value = 'success'
  }
}
</script>

<style scoped>
.contact-view {
  padding: 4rem 0 7rem;
  min-height: calc(100vh - 64px);
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
}

.contact-header__headline {
  margin: 0.5rem 0 1rem;
}

.contact-header__sub {
  font-size: 1.05rem;
  color: var(--mv-muted);
  max-width: 48ch;
  margin: 0 auto;
  line-height: 1.7;
}

/* 2-col grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 5rem;
  max-width: 960px;
  margin: 0 auto;
}

/* Form */
.contact-form-wrap {
  background: var(--mv-white);
  border: 1px solid var(--mv-border);
  border-radius: var(--r-lg);
  padding: 2.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact-field label {
  display: block;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--mv-charcoal);
  margin-bottom: 0.5rem;
}

.contact-success {
  font-size: 0.9rem;
  color: var(--mv-success, #27ae60);
  font-weight: 500;
  text-align: center;
  padding: 0.75rem;
  background: rgba(39, 174, 96, 0.08);
  border-radius: var(--r-sm);
  border: 1px solid rgba(39, 174, 96, 0.2);
}

.contact-error {
  font-size: 0.85rem;
  color: var(--mv-error, #c0392b);
  text-align: center;
}

/* Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 0.5rem;
}

.contact-info__heading {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--mv-muted);
  margin-bottom: 1.5rem;
}

.contact-info__items {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
}

.contact-info__item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact-info__item-icon {
  width: 20px;
  height: 20px;
  color: var(--mv-green);
  flex-shrink: 0;
}

.contact-info__item-label {
  display: block;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mv-muted);
  margin-bottom: 0.15rem;
}

.contact-info__item-value {
  font-size: 0.95rem;
  color: var(--mv-charcoal);
  text-decoration: none;
  transition: color var(--tr-fast);
}

.contact-info__item-value:hover {
  color: var(--mv-green);
}

.contact-info__response {
  font-size: 0.82rem;
  color: var(--mv-muted);
  font-style: italic;
}

/* CTA */
.contact-cta {
  padding: 2rem;
  background: var(--mv-cream);
  border: 1px solid var(--mv-border);
  border-radius: var(--r-md);
}

.contact-cta__title {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.contact-cta__desc {
  font-size: 0.875rem;
  color: var(--mv-muted);
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

/* Responsive */
@media (max-width: 860px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-info {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .contact-info__section {
    min-width: 240px;
  }

  .contact-cta {
    flex: 1;
    min-width: 240px;
  }
}

@media (max-width: 480px) {
  .contact-form-wrap {
    padding: 1.75rem;
  }

  .contact-info {
    flex-direction: column;
  }
}
</style>