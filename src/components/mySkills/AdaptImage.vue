<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ResponsiveImage from '../ResponsiveImage.vue'

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

async function importImage(imageName: string, size: string) {
  const imagesContext: Record<string, () => Promise<any>> = import.meta.glob(
    '../../assets/images/**/*.webp'
  )
  const imagePath = `../../assets/images/${imageName}_${size}.webp`

  console.log(`Trying to load image: ${imagePath}`)

  if (imagesContext[imagePath]) {
    const module = await imagesContext[imagePath]()
    console.log(`Image module loaded: `, module)

    return module.default || ''
  } else {
    console.error(`Image not found: ${imagePath}`)
    return ''
  }
}

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
      class="first-image"
      :smallImage="smallFirstImage"
      :mediumImage="mediumFirstImage"
      :alt="alt"
      :style="{ display: !isSkillVisible ? 'block' : 'none' }"
    />
    <ResponsiveImage
      class="second-image"
      :smallImage="smallSecondImage"
      :mediumImage="mediumSecondImage"
      :alt="alt"
      :style="{ display: isSkillVisible ? 'block' : 'none' }"
    />
  </div>
</template>

<style scoped>
.first-image,
.second-image {
  width: 100%;
  object-fit: contain;
}
</style>
