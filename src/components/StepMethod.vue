<script setup lang="ts">
import ResponsiveImage from './ResponsiveImage.vue'
import { Color } from '@/enum/Color'
import { importImage } from '@/utils/imageLoader'
import { ref, onMounted } from 'vue'

const props = defineProps({
  number: {
    type: Number,
    required: true
  },
  imagePath: {
    type: String,
    required: true
  },
  altImage: {
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
  },
  color: {
    type: String as () => Color,
    required: true,
    validator: (value: Color) => {
      return Object.values(Color).includes(value)
    }
  }
})

const smallImage = ref('')
const mediumImage = ref('')
const largeImage = ref('')

async function loadImages() {
  smallImage.value = await importImage(props.imagePath, 'small')
  mediumImage.value = await importImage(props.imagePath, 'medium')
  largeImage.value = await importImage(props.imagePath, 'large')
}

onMounted(() => {
  loadImages()
})
</script>

<template>
  <div class="container" :class="{ orange: color === Color.Orange }">
    <div class="left-container">
      <div class="number">{{ number }}</div>
      <ResponsiveImage
        v-if="smallImage && mediumImage && largeImage"
        :smallImage="smallImage"
        :mediumImage="mediumImage"
        :largeImage="largeImage"
        :alt="altImage"
      />
    </div>
    <div class="right-container">
      <h2>{{ title }}</h2>
      <div v-html="description"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  background-color: var(--primary-color);
}

.orange {
  background-color: var(--tertiary-color);
}

.left-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
  position: relative;
}

.right-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
</style>
