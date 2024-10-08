<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ResponsiveImage from '../ResponsiveImage.vue'
import { importImage } from '@/utils/imageLoader'

const props = defineProps({
  /* 
  Image path relative to /images.
  For example, if the image is at /images/directory/myImage.webp :
  firstImage = directory/myImage
  */
  firstImage: {
    type: String,
    required: true
  },
  secondImage: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  isSkillVisible: {
    type: Boolean,
    required: true
  }
})

const smallFirstImage = ref('')
const mediumFirstImage = ref('')
const smallSecondImage = ref('')
const mediumSecondImage = ref('')

async function loadImages() {
  smallFirstImage.value = await importImage(props.firstImage, 'small')
  mediumFirstImage.value = await importImage(props.firstImage, 'medium')
  smallSecondImage.value = await importImage(props.secondImage, 'small')
  mediumSecondImage.value = await importImage(props.secondImage, 'medium')
}

onMounted(() => {
  loadImages()
})
</script>

<template>
  <div>
    <ResponsiveImage
      v-if="smallFirstImage && mediumFirstImage"
      class="first-image transition"
      :class="{ hidden: isSkillVisible }"
      :smallImage="smallFirstImage"
      :mediumImage="mediumFirstImage"
      :alt="alt"
    />
    <ResponsiveImage
      v-if="smallSecondImage && mediumSecondImage"
      class="second-image transition"
      :class="{ hidden: !isSkillVisible }"
      :smallImage="smallSecondImage"
      :mediumImage="mediumSecondImage"
      :alt="alt"
    />
  </div>
</template>

<style scoped>
.first-image,
.second-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: contain;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.hidden {
  opacity: 0;
}
</style>
