<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import SkillModal from '@/components/mySkills/SkillModal.vue'

const props = defineProps({
  /* 
  Image path relative to /images.
  For example, if the image is at /images/directory/myImage.webp :
  mountainImage = directory/myImage
  */
  mountainImage: {
    type: String,
    required: true
  },
  skillsImage: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['skills'])

const smallMountainImage = ref('')
const mediumMountainImage = ref('')
const smallSkillsImage = ref('')
const mediumSkillsImage = ref('')

const showMountainImage = ref(true)
const showSkillsImage = ref(false)
const showModal = ref(false)

const handleHoverAndClick = () => {
  showMountainImage.value = !showMountainImage.value
  showSkillsImage.value = !showSkillsImage.value
  showModal.value = !showModal.value
  emit('skills')
}

async function importImage(imageName: string, size: string) {
  const imagesContext: Record<string, () => Promise<any>> = import.meta.glob(
    '../assets/images/**/*.webp'
  )
  const imagePath = `../assets/images/${imageName}_${size}.webp`

  if (imagesContext[imagePath]) {
    const module = await imagesContext[imagePath]()

    if (typeof module === 'function') {
      return (await module()).default
    } else {
      return module.default
    }
  }
}

async function loadImages() {
  smallMountainImage.value = await importImage(props.mountainImage, 'small')
  mediumMountainImage.value = await importImage(props.mountainImage, 'medium')
  smallSkillsImage.value = await importImage(props.skillsImage, 'small')
  mediumSkillsImage.value = await importImage(props.skillsImage, 'medium')
}

onMounted(() => {
  loadImages()
})
</script>

<template>
  <div
    @mouseenter="handleHoverAndClick"
    @mouseleave="handleHoverAndClick"
    @click="handleHoverAndClick"
  >
    <ResponsiveImage
      class="mountain-image"
      :smallImage="smallMountainImage"
      :mediumImage="mediumMountainImage"
      alt="Un étalage de matériel de montagne"
      :style="{ display: showMountainImage ? 'block' : 'none' }"
    />
    <ResponsiveImage
      class="skills-image"
      :smallImage="smallSkillsImage"
      :mediumImage="mediumSkillsImage"
      alt="Une liste de compétences pour le développement web"
      :style="{ display: showSkillsImage ? 'block' : 'none' }"
    />
    <SkillModal
      :title="title"
      :description="description"
      :style="{ display: showModal ? 'block' : 'none' }"
    />
  </div>
</template>
