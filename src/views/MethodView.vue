<script setup lang="ts">
import SimpleButton from '@/components/SimpleButton.vue'
import StepMethod from '@/components/StepMethod.vue'
</script>

<template>
  <div class="page-container">
    <div class="intro-container"></div>
    <div class="step-container">
      <StepMethod />
    </div>
    <div class="step-container"></div>
    <div class="step-container"></div>
    <div class="step-container"></div>
    <div class="button-container">
      <SimpleButton class="button" text="PRENEZ CONTACT !" />
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.button {
  background-color: var(--primary-color);
  color: var(--tertiary-color);
}
</style>
