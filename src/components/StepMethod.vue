<script setup lang="ts">
import ResponsiveImage from './ResponsiveImage.vue'
import { Color } from '@/enum/Color'
import { importImage } from '@/utils/imageLoader'
import { ref, onMounted } from 'vue'

const props = defineProps({
  number: {
    type: String,
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
  <div class="container">
    <div class="left-container">
      <div class="number" :class="{ beige: color === Color.Orange }">{{ number }}</div>
      <ResponsiveImage
        v-if="smallImage && mediumImage && largeImage"
        class="image"
        :smallImage="smallImage"
        :mediumImage="mediumImage"
        :largeImage="largeImage"
        :alt="altImage"
      />
    </div>
    <div class="right-container" :class="{ beige: color === Color.Orange }">
      <h2>{{ title }}</h2>
      <div class="description" v-html="description"></div>
    </div>
    <div class="background" :class="{ orange: color === Color.Orange }"></div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap');

.background {
  position: absolute;
  z-index: -1000;
  width: 99vw;
  height: 100%;
  background-color: var(--primary-color);
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  min-height: 500px;
}

.orange {
  background-color: var(--tertiary-color);
}

.beige {
  color: var(--primary-color);
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

.left-container,
.right-container {
  margin: 50px 0;
  width: 450px;
}

.number {
  font-size: 241px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  line-height: 265px;
  margin-right: 8vw;
  z-index: 100;
  font-family: 'Love Ya Like A Sister', cursive;
  font-weight: 400;
  font-style: normal;
}

.image {
  position: absolute;
  top: 130px;
  left: -100px;
  width: 400px;
  z-index: 0;
}
</style>
