<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  images: {
    type: Array as PropType<string[]>,
    required: true
  }
})

const reducedAtThreeImagesMax = props.images.slice(0, 3)
</script>

<template>
  <div v-if="images.length > 0">
    <img v-for="(image, index) in reducedAtThreeImagesMax" :key="index" :src="image" />
  </div>
</template>
