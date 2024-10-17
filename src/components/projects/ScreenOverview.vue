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

<style scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
  width: 100%;
  flex-wrap: wrap;
  max-height: 80px;
  overflow: hidden;
}

img {
  width: 110px;
  height: 80px;
  object-fit: cover;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
