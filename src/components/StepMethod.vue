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
  <div class="container" :class="{ orange: color === Color.Orange }">
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
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap');

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  min-height: 500px;
  width: 100%;
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

.left-container,
.right-container {
  margin: 50px 0;
  width: 550px;
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
  color: var(--tertiary-color);
}

.beige {
  color: var(--primary-color);
}

.image {
  position: absolute;
  top: 130px;
  left: -100px;
  width: 400px;
  z-index: 0;
}

:deep(.citation) {
  font-weight: 700;
  font-style: italic;
  color: var(--tertiary-color);
}

:deep(span) {
  font-weight: 700;
  color: var(--tertiary-color);
}

.beige :deep(span) {
  color: var(--primary-color);
}

@media (max-width: 1220px) {
  .left-container,
  .right-container {
    width: 450px;
  }

  .image {
    top: 130px;
    left: -40px;
    width: 400px;
  }
}

@media (max-width: 1000px) {
  .left-container,
  .right-container {
    width: 650px;
  }

  .image {
    top: 10px;
    left: -20px;
    width: 370px;
  }
}

@media (max-width: 780px) {
  .left-container,
  .right-container {
    width: 500px;
  }

  .image {
    top: 70px;
    left: -20px;
    width: 320px;
  }
}

@media (max-width: 600px) {
  .left-container,
  .right-container {
    width: 420px;
  }

  .image {
    top: 100px;
    left: 0px;
    width: 290px;
  }
}

@media (max-width: 500px) {
  .left-container,
  .right-container {
    width: 340px;
  }
}
</style>
