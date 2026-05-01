<template>
  <footer class="mv-footer">
    <div class="mv-footer__main mv-container">
      <div class="mv-footer__grid">
        <!-- Column 1: Logo + Tagline -->
        <div class="mv-footer__col mv-footer__col--brand">
          <div class="mv-footer__logo">
            <svg class="mv-footer__logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M12 8L8 10.5V15.5L12 18L16 15.5V10.5L12 8Z" fill="currentColor"/>
              <path d="M3 7L12 12M21 7L12 12M12 12V18" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
            </svg>
            <span class="mv-footer__logo-text">Mina Verde</span>
          </div>
          <p class="mv-footer__tagline">
            Colombian emeralds, certified and delivered direct from source.
          </p>
          <div class="mv-footer__social">
            <a href="https://instagram.com/minaverdegems" target="_blank" rel="noopener" class="mv-footer__social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener" class="mv-footer__social-link" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.5 8.5 0 1 1-4.3-2.3"/>
                <path d="M21 7a8.5 8.5 0 0 1-.2 1.8L12 12 12 7l8.8 1.7A8.5 8.5 0 0 1 21 11.5z"/>
                <path d="M12 12v-1M12 7V6"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Column 2: Shop -->
        <div class="mv-footer__col">
          <h4 class="mv-footer__heading">Shop</h4>
          <nav class="mv-footer__nav">
            <RouterLink to="/stones" class="mv-footer__link">The Collection</RouterLink>
            <RouterLink to="/stones?filter=loose" class="mv-footer__link">Loose Stones</RouterLink>
            <RouterLink to="/stones?filter=rings" class="mv-footer__link">Rings</RouterLink>
            <RouterLink to="/stones?filter=pendants" class="mv-footer__link">Pendants</RouterLink>
            <RouterLink to="/stones?filter=earrings" class="mv-footer__link">Earrings</RouterLink>
          </nav>
        </div>

        <!-- Column 3: Learn -->
        <div class="mv-footer__col">
          <h4 class="mv-footer__heading">Learn</h4>
          <nav class="mv-footer__nav">
            <RouterLink to="/education" class="mv-footer__link">Education Hub</RouterLink>
            <RouterLink to="/education/4cs-of-emeralds" class="mv-footer__link">The 4 Cs of Emeralds</RouterLink>
            <RouterLink to="/education/origin-matters" class="mv-footer__link">Why Origin Matters</RouterLink>
            <RouterLink to="/tools/certification-decoder" class="mv-footer__link">Cert Decoder</RouterLink>
            <RouterLink to="/tools/budget-estimator" class="mv-footer__link">Budget Estimator</RouterLink>
          </nav>
        </div>

        <!-- Column 4: Company -->
        <div class="mv-footer__col">
          <h4 class="mv-footer__heading">Company</h4>
          <nav class="mv-footer__nav">
            <RouterLink to="/about" class="mv-footer__link">Our Story</RouterLink>
            <RouterLink to="/contact" class="mv-footer__link">Contact</RouterLink>
            <RouterLink to="/about#philanthropy" class="mv-footer__link">Philanthropy</RouterLink>
            <RouterLink to="/about#terms" class="mv-footer__link">Terms of Service</RouterLink>
            <RouterLink to="/about#privacy" class="mv-footer__link">Privacy Policy</RouterLink>
          </nav>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="mv-footer__newsletter">
        <div class="mv-footer__newsletter-content">
          <h4 class="mv-footer__newsletter-title">Stay in the loop</h4>
          <p class="mv-footer__newsletter-text">New stones, sourcing stories, and emerald education — straight to your inbox.</p>
        </div>
        <form class="mv-footer__newsletter-form" @submit.prevent="handleSubscribe">
          <input
            v-model="email"
            type="email"
            placeholder="Your email address"
            class="mv-footer__newsletter-input"
            required
            :disabled="status === 'loading' || status === 'success'"
          />
          <button
            type="submit"
            class="mv-footer__newsletter-btn"
            :disabled="status === 'loading' || status === 'success'"
          >
            <span v-if="status === 'loading'">Subscribing...</span>
            <span v-else-if="status === 'success'">Subscribed ✓</span>
            <span v-else>Subscribe</span>
          </button>
        </form>
        <p v-if="error" class="mv-footer__newsletter-error">{{ error }}</p>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="mv-footer__bottom">
      <div class="mv-container">
        <div class="mv-footer__bottom-inner">
          <p class="mv-footer__copyright">
            © {{ currentYear }} Mina Verde. All rights reserved.
          </p>
          <div class="mv-footer__badges">
            <span class="mv-footer__badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              GIA Certified
            </span>
            <span class="mv-footer__badge">@minaverdegems</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { subscribeToNewsletter } from '../../services/newsletterService'

const email = ref('')
const status = ref('idle') // 'idle' | 'loading' | 'success' | 'error'
const error = ref('')

const currentYear = computed(() => new Date().getFullYear())

const handleSubscribe = async () => {
  if (!email.value) return

  status.value = 'loading'
  error.value = ''

  const result = await subscribeToNewsletter(email.value)

  if (result.success) {
    status.value = 'success'
    email.value = ''
  } else {
    status.value = 'error'
    error.value = result.error || 'Subscription failed. Please try again.'
  }
}
</script>

<style scoped>
.mv-footer {
  background-color: var(--mv-green);
  color: var(--mv-cream);
}

.mv-footer__main {
  padding: 4rem 1.5rem 3rem;
}

.mv-footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

/* Brand Column */
.mv-footer__col--brand {
  padding-right: 2rem;
}

.mv-footer__logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.mv-footer__logo-icon {
  width: 28px;
  height: 28px;
  color: var(--mv-cream);
}

.mv-footer__logo-text {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--mv-cream);
}

.mv-footer__tagline {
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.85;
  margin-bottom: 1.5rem;
}

.mv-footer__social {
  display: flex;
  gap: 1rem;
}

.mv-footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(245, 240, 232, 0.3);
  color: var(--mv-cream);
  transition: all var(--mv-transition);
}

.mv-footer__social-link:hover {
  background-color: var(--mv-cream);
  color: var(--mv-green);
  border-color: var(--mv-cream);
}

.mv-footer__social-link svg {
  width: 18px;
  height: 18px;
}

/* Nav Columns */
.mv-footer__heading {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--mv-cream);
  margin-bottom: 1.25rem;
  opacity: 0.6;
}

.mv-footer__nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mv-footer__link {
  font-size: 0.9rem;
  color: var(--mv-cream);
  text-decoration: none;
  opacity: 0.85;
  transition: opacity var(--mv-transition);
}

.mv-footer__link:hover {
  opacity: 1;
  color: var(--mv-cream);
}

/* Newsletter */
.mv-footer__newsletter {
  border-top: 1px solid rgba(245, 240, 232, 0.15);
  padding-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.mv-footer__newsletter-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--mv-cream);
  margin-bottom: 0.25rem;
}

.mv-footer__newsletter-text {
  font-size: 0.85rem;
  opacity: 0.7;
  max-width: 320px;
}

.mv-footer__newsletter-form {
  display: flex;
  gap: 0.5rem;
  flex: 1;
  max-width: 420px;
  min-width: 280px;
}

.mv-footer__newsletter-input {
  flex: 1;
  padding: 0.75rem 1rem;
  background-color: rgba(245, 240, 232, 0.1);
  border: 1px solid rgba(245, 240, 232, 0.25);
  border-radius: 4px;
  color: var(--mv-cream);
  font-family: var(--font-body);
  font-size: 0.875rem;
  transition: all var(--mv-transition);
}

.mv-footer__newsletter-input::placeholder {
  color: rgba(245, 240, 232, 0.5);
}

.mv-footer__newsletter-input:focus {
  outline: none;
  background-color: rgba(245, 240, 232, 0.15);
  border-color: rgba(245, 240, 232, 0.4);
}

.mv-footer__newsletter-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.mv-footer__newsletter-btn {
  padding: 0.75rem 1.25rem;
  background-color: var(--mv-gold);
  color: var(--mv-green-deep);
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  transition: all var(--mv-transition);
}

.mv-footer__newsletter-btn:hover:not(:disabled) {
  background-color: var(--mv-cream);
}

.mv-footer__newsletter-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.mv-footer__newsletter-error {
  width: 100%;
  font-size: 0.8rem;
  color: #ff8a8a;
  margin-top: 0.5rem;
}

/* Bottom Bar */
.mv-footer__bottom {
  border-top: 1px solid rgba(245, 240, 232, 0.1);
  padding: 1.25rem 1.5rem;
}

.mv-footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.mv-footer__copyright {
  font-size: 0.8rem;
  opacity: 0.6;
}

.mv-footer__badges {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.mv-footer__badge {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  opacity: 0.7;
}

.mv-footer__badge svg {
  opacity: 0.8;
}

/* Responsive */
@media (max-width: 900px) {
  .mv-footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .mv-footer__col--brand {
    grid-column: 1 / -1;
    padding-right: 0;
  }
}

@media (max-width: 600px) {
  .mv-footer__grid {
    grid-template-columns: 1fr;
  }

  .mv-footer__newsletter {
    flex-direction: column;
    align-items: flex-start;
  }

  .mv-footer__newsletter-form {
    max-width: 100%;
    width: 100%;
  }

  .mv-footer__bottom-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
}
</style>
