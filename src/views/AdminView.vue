<template>
  <div class="admin-view">
    <div class="mv-container">
      <header class="admin-header">
        <h1>Admin</h1>
      </header>

      <div class="admin-gate" v-if="!isAuthenticated">
        <div class="admin-gate__card">
          <div class="admin-gate__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="11" width="18" height="11" rx="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <h2>Restricted Access</h2>
          <p>This area is for authorized administrators only. Please log in to continue.</p>
          <form @submit.prevent="handleLogin" class="admin-login-form">
            <div class="admin-field">
              <input v-model="password" type="password" placeholder="Enter admin password" required />
            </div>
            <button type="submit" class="mv-btn-primary">Log In</button>
            <p v-if="error" class="admin-error">{{ error }}</p>
          </form>
        </div>
      </div>

      <div class="admin-dashboard" v-else>
        <p>Admin dashboard — coming soon.</p>
        <button @click="logout" class="mv-btn-secondary">Log Out</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouteSEO } from '../composables/useRouteSEO'

useRouteSEO()

const isAuthenticated = ref(false)
const password = ref('')
const error = ref('')

const handleLogin = () => {
  error.value = ''
  // Stub auth guard — wire up to Firebase Auth when ready
  if (password.value === 'admin') {
    isAuthenticated.value = true
  } else {
    error.value = 'Incorrect password. Please try again.'
  }
}

const logout = () => {
  isAuthenticated.value = false
  password.value = ''
}
</script>

<style scoped>
.admin-view {
  padding: 4rem 0 6rem;
  min-height: calc(100vh - 64px);
}

.admin-header {
  margin-bottom: 3rem;
}

.admin-gate__card {
  max-width: 400px;
  margin: 4rem auto;
  padding: 3rem;
  background-color: #fff;
  border: 1px solid var(--mv-border);
  border-radius: 12px;
  text-align: center;
}

.admin-gate__icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 1.5rem;
  color: var(--mv-green);
  opacity: 0.4;
}

.admin-gate__icon svg {
  width: 100%;
  height: 100%;
}

.admin-gate__card h2 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.admin-gate__card p {
  font-size: 0.9rem;
  color: var(--mv-muted);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.admin-login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.admin-field input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--mv-border);
  border-radius: 4px;
  font-family: var(--font-body);
  font-size: 0.9rem;
  text-align: center;
}

.admin-field input:focus {
  outline: none;
  border-color: var(--mv-green);
}

.admin-error {
  font-size: 0.85rem;
  color: #c0392b;
}

.admin-dashboard {
  text-align: center;
  padding: 4rem;
}

.admin-dashboard p {
  font-size: 1rem;
  color: var(--mv-muted);
  margin-bottom: 2rem;
}
</style>
