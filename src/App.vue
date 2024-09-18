<script setup lang="ts">
import HeaderComponent from './components/header/HeaderComponent.vue'
</script>

<template>
  <div id="app">
    <HeaderComponent class="header" />
    <RouterView />
  </div>
</template>

<style scoped>
.header {
  margin-bottom: 80px;
}
</style>
