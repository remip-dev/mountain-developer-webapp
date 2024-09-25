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
const modalPosition = ref('')

let eventHover = false

const handleHoverAndClick = (event: MouseEvent) => {
  if (event.type === 'mouseenter' || event.type === 'mouseleave') {
    eventHover = true
  }
  if (event.type === 'click' && eventHover === true) {
    return
  }
  showMountainImage.value = !showMountainImage.value
  showSkillsImage.value = !showSkillsImage.value
  showModal.value = !showModal.value
  emit('skills')
}

const updateModalPosition = (event: MouseEvent) => {
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  const availableSpaceBelow = window.innerHeight - rect.bottom

  if (availableSpaceBelow < 400) {
    modalPosition.value = 'above'
  } else {
    modalPosition.value = 'below'
  }
  handleHoverAndClick(event)
}

async function importImage(imageName: string, size: string) {
  const imagesContext: Record<string, () => Promise<any>> = import.meta.glob(
    '../../assets/images/**/*.webp'
  )
  const imagePath = `../../assets/images/${imageName}_${size}.webp`

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
  <div>
    <div
      @mouseenter="updateModalPosition"
      @mouseleave="handleHoverAndClick"
      @click="handleHoverAndClick"
      class="trigger-div"
    >
      <ResponsiveImage
        v-if="smallMountainImage && mediumMountainImage"
        class="mountain-image"
        :class="{ hidden: !showMountainImage }"
        :smallImage="smallMountainImage"
        :mediumImage="mediumMountainImage"
        alt="Un étalage de matériel de montagne"
      />
      <ResponsiveImage
        v-if="smallSkillsImage && mediumSkillsImage"
        class="skills-image"
        :class="{ hidden: showMountainImage }"
        :smallImage="smallSkillsImage"
        :mediumImage="mediumSkillsImage"
        alt="Une liste de compétences pour le développement web"
      />
    </div>
    <SkillModal
      v-if="!showMountainImage"
      class="modal"
      :title="title"
      :description="description"
      :class="{
        'above-modal': modalPosition === 'above',
        'below-modal': modalPosition === 'below'
      }"
    />
  </div>
</template>

<style scoped>
.mountain-image,
.skills-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: contain;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.above-modal {
  bottom: 102%;
}

.below-modal {
  top: 102%;
}

.hidden {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
</style>
