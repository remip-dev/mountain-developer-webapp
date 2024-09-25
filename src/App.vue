<script setup lang="ts">
import HeaderComponent from './components/header/HeaderComponent.vue'
</script>

<template>
  <div id="app">
    <div class="header-container">
      <HeaderComponent class="header" />
    </div>
    <div class="main-content-container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.header-container {
  position: fixed;
  z-index: 3001;
  left: 0px;
  right: 0px;
  top: 0px;
  padding: 30px 30px 0 30px;
  backdrop-filter: blur(5px);
}

.main-content-container {
  margin-top: 15vh;
  z-index: 0;
}

@media (max-width: 1000px) {
  .header-container {
    /* to adapt with the body padding */
    padding: 20px 20px 0 20px;
  }
}

@media (max-width: 600px) {
  .header-container {
    /* to adapt with the body padding */
    padding: 20px 10px 0 10px;
  }
}
</style>
