<script setup lang="ts">
import { computed, ref } from 'vue'
import ResponsiveImage from '../ResponsiveImage.vue'
import type { Image } from '@/interfaces/Image'

const props = defineProps<{
  images: Image[]
}>()

const currentIndex = ref(0)
const imageViewerRef = ref<HTMLElement | null>(null)

const currentSmallImage = computed(() => props.images[currentIndex.value].small)
const currentMediumImage = computed(() => props.images[currentIndex.value].medium)
const currentLargeImage = computed(() => props.images[currentIndex.value].large)
const currentAlt = computed(() => props.images[currentIndex.value].alt)

function handleClick(index: number): void {
  currentIndex.value = index

  imageViewerRef.value?.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="container">
    <div class="image-viewer" ref="imageViewerRef">
      <ResponsiveImage
        class="main-image"
        :smallImage="currentSmallImage"
        :mediumImage="currentMediumImage"
        :largeImage="currentLargeImage"
        :alt="currentAlt"
      />
    </div>
    <div class="thumbnails-container">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.small"
        @click="handleClick(index)"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.thumbnails-container {
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 20px;
  flex-wrap: wrap;
  margin: 20px 0 40px;
}

.image-viewer {
  width: 100%;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  max-height: 500px;
  overflow-y: auto;
}

.main-image {
  width: 100%;
  height: auto;
  display: block;
}

.thumbnails-container img {
  width: 145px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  max-height: 100px;
  object-fit: cover;
}
</style>
