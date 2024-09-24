<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <h2 class="title">
      {{ title }}
    </h2>
    <p class="description">
      {{ description }}
    </p>
  </div>
</template>
