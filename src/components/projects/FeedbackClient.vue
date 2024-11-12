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
      <p class="bold">{{ feedback.client }}</p>
    </div>
    <div class="rating-container">
      <RatingScale class="scale" :mark="feedback.rating" />
      <p class="opinion" v-html="feedback.opinion"></p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: solid 2px var(--secondary-color);
  border-radius: 30px;
  padding: 40px;
}

.client-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px 0 0;
  gap: 10px;
}

.client-container p {
  margin: 0;
  text-align: center;
}

.rating-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.opinion {
  margin-bottom: 0;
  margin-top: 0;
}

.opinion :deep(p) {
  margin-bottom: 0;
}

.scale :deep(.mountain) {
  width: 32px;
  height: 24px;
}

.scale {
  gap: 10px;
}

.bold {
  font-weight: 700;
  color: var(--tertiary-color);
}

@media (max-width: 600px) {
  .container {
    padding: 20px;
  }

  .scale :deep(.mountain) {
    width: 24px;
    height: 18px;
  }

  .scale {
    gap: 7px;
  }

  img {
    width: 70px;
  }
}
</style>
