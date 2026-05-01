<template>
  <div class="mv-layout">
    <NavBar />
    <main class="mv-layout__main">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
</script>

<style scoped>
.mv-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.mv-layout__main {
  flex: 1;
  padding-top: 64px;
}
</style>
