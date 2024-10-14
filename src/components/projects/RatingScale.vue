<script setup lang="ts">
import MountainMarkIcon from './MountainMarkIcon.vue'
import { defineProps } from 'vue'

defineProps({
  mark: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div>
    <MountainMarkIcon v-for="n in mark" :key="n" class="mountain colored" />
    <MountainMarkIcon v-for="n in 5 - mark" :key="n" class="mountain" />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 15px;
}

.colored :deep(path) {
  fill: var(--tertiary-color);
}
</style>
