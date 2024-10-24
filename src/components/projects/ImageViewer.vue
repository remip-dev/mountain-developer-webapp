<script setup lang="ts">
import { importImage } from '@/utils/imageLoader'
import { computed, onMounted, ref } from 'vue'
import ResponsiveImage from '../ResponsiveImage.vue'

const props = defineProps<{
  images: string[]
}>()

const currentImage = ref(props.images[0])
const smallImage = ref('')
const mediumImage = ref('')
const largeImage = ref('')

const otherImages = computed(() => {
  return props.images.filter((image) => image !== currentImage.value)
})

async function loadMainImage() {
  smallImage.value = await importImage(currentImage.value, 'small')
  mediumImage.value = await importImage(currentImage.value, 'medium')
  largeImage.value = await importImage(currentImage.value, 'large')
}

async function loadOtherImage() {}

onMounted(() => {
  loadMainImage()
})
</script>

<template>
  <div class="container">
    <div class="image-viewer">
      <ResponsiveImage
        :smallImage="smallImage"
        :mediumImage="mediumImage"
        :largeImage="largeImage"
        alt="image représentant le projet"
      />
    </div>
    <div class="thumbnails-container"></div>
  </div>
</template>
