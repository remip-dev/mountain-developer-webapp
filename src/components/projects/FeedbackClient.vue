<script setup lang="ts">
import { type Feedback } from '@/interfaces/Feedback'
import RatingScale from './RatingScale.vue'
defineProps<{
  feedback: Feedback
}>()
</script>

<template>
  <div class="container">
    <div class="client-container">
      <img src="@/assets/icons/client.svg" />
      <p>{{ feedback.name }}</p>
      <p>{{ feedback.client }}</p>
    </div>
    <div class="rating-container">
      <RatingScale :mark="feedback.rating" />
      <p>{{ feedback.opinion }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.client-container {
  display: flex;
  flex-direction: column;
}

.rating-container {
  display: flex;
  flex-direction: column;
}
</style>
