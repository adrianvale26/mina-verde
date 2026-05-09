<template>
  <header class="mv-nav" :class="{ 'mv-nav--scrolled': isScrolled }">
    <div class="mv-nav__inner mv-container">
      <!-- Logo -->
      <RouterLink to="/" class="mv-nav__logo">
        <img src="/images/logo-outline.png" alt="Mina Verde" class="mv-nav__logo-img" />
        <span class="mv-nav__logo-text">Mina Verde</span>
      </RouterLink>

      <!-- Desktop Nav -->
      <nav class="mv-nav__links">
        <RouterLink to="/" class="mv-nav__link" :class="{ 'mv-nav__link--active': $route.path === '/' }">Home</RouterLink>
        <RouterLink to="/stones" class="mv-nav__link" :class="{ 'mv-nav__link--active': $route.path === '/stones' }">Stones</RouterLink>
        <RouterLink to="/about" class="mv-nav__link" :class="{ 'mv-nav__link--active': $route.path === '/about' }">About</RouterLink>
        <RouterLink to="/education" class="mv-nav__link" :class="{ 'mv-nav__link--active': $route.path === '/education' }">Education</RouterLink>
        <RouterLink to="/tools" class="mv-nav__link" :class="{ 'mv-nav__link--active': $route.path.startsWith('/tools') }">Tools</RouterLink>
        <RouterLink to="/contact" class="mv-nav__link" :class="{ 'mv-nav__link--active': $route.path === '/contact' }">Contact</RouterLink>
      </nav>

      <!-- CTA Button -->
      <RouterLink to="/contact" class="mv-btn-primary mv-nav__cta">
        Book Consultation
      </RouterLink>

      <!-- Mobile Hamburger -->
      <button
        class="mv-nav__hamburger"
        @click="mobileOpen = !mobileOpen"
        :aria-expanded="mobileOpen"
        aria-label="Toggle navigation"
      >
        <span class="mv-nav__hamburger-line" :class="{ 'mv-nav__hamburger-line--open': mobileOpen }"></span>
        <span class="mv-nav__hamburger-line" :class="{ 'mv-nav__hamburger-line--open': mobileOpen }"></span>
        <span class="mv-nav__hamburger-line" :class="{ 'mv-nav__hamburger-line--open': mobileOpen }"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mv-nav__mobile" :class="{ 'mv-nav__mobile--open': mobileOpen }">
      <nav class="mv-nav__mobile-links">
        <RouterLink to="/" class="mv-nav__mobile-link" @click="mobileOpen = false">Home</RouterLink>
        <RouterLink to="/stones" class="mv-nav__mobile-link" @click="mobileOpen = false">Stones</RouterLink>
        <RouterLink to="/about" class="mv-nav__mobile-link" @click="mobileOpen = false">About</RouterLink>
        <RouterLink to="/education" class="mv-nav__mobile-link" @click="mobileOpen = false">Education</RouterLink>
        <RouterLink to="/tools" class="mv-nav__mobile-link" @click="mobileOpen = false">Tools</RouterLink>
        <RouterLink to="/contact" class="mv-nav__mobile-link" @click="mobileOpen = false">Contact</RouterLink>
        <RouterLink to="/contact" class="mv-btn-primary mv-nav__mobile-cta" @click="mobileOpen = false">
          Book Consultation
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)
const mobileOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.mv-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 64px;
  background-color: var(--mv-green-deep);
  transition: background-color var(--mv-transition), box-shadow var(--mv-transition);
}

.mv-nav--scrolled {
  background-color: var(--mv-green-deep);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}

.mv-nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

/* Logo */
.mv-nav__logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--mv-cream);
}

img.mv-nav__logo-img {
  height: 48px;
  width: auto;
  margin-right: 0.75rem;
}

.mv-nav__logo-icon {
  width: 28px;
  height: 28px;
  color: var(--mv-cream);
}

.mv-nav__logo-text {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--mv-cream);
}

/* Desktop Links */
.mv-nav__links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.mv-nav__link {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
  transition: color var(--mv-transition);
}

.mv-nav__link:hover {
  color: #fff;
}

.mv-nav__link--active {
  color: #fff;
}

/* CTA */
.mv-nav__cta {
  padding: 0.5rem 1.25rem;
  font-size: 0.75rem;
}

/* Hamburger */
.mv-nav__hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.mv-nav__hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.85);
  transition: all var(--mv-transition);
  transform-origin: center;
}

.mv-nav__hamburger-line--open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.mv-nav__hamburger-line--open:nth-child(2) {
  opacity: 0;
}

.mv-nav__hamburger-line--open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Menu */
.mv-nav__mobile {
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  background-color: var(--mv-green-deep);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--mv-transition-slow);
}

.mv-nav__mobile--open {
  max-height: 400px;
}

.mv-nav__mobile-links {
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem 1.5rem;
  gap: 0.25rem;
}

.mv-nav__mobile-link {
  display: block;
  padding: 0.875rem 0;
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mv-nav__mobile-link:last-of-type {
  border-bottom: none;
}

.mv-nav__mobile-cta {
  margin-top: 1rem;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .mv-nav__links,
  .mv-nav__cta {
    display: none;
  }

  .mv-nav__hamburger {
    display: flex;
  }
}
</style>
