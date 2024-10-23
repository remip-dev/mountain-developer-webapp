<script setup lang="ts">
import SimpleButton from '@/components/SimpleButton.vue'
</script>

<template>
  <div class="main-container">
    <div class="project-container">
      <div class="left-column"></div>
      <div class="right-column"></div>
    </div>
    <div class="button-container">
      <SimpleButton text="PRÉCÉDENT" />
      <SimpleButton text="SUIVANT" />
    </div>
  </div>
</template>

<style scoped>
.project-container {
  display: flex;
  flex-direction: row;
}

.left-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.right-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

@media (max-width: 1000px) {
  .project-container {
    flex-direction: column-reverse;
  }
}
</style>
