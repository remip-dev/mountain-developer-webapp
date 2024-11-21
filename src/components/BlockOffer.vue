<script setup lang="ts">
import handshake from '@/assets/icons/handshake.svg'
import computer from '@/assets/icons/computer.svg'
import secure from '@/assets/icons/secure.svg'
import mvp from '@/assets/icons/mvp.svg'
import edit from '@/assets/icons/edit.svg'
import rocket from '@/assets/icons/rocket.svg'
import { computed } from 'vue'

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
})

const imageMap: Record<string, string> = {
  handshake,
  computer,
  secure,
  mvp,
  edit,
  rocket
}

const resolvedImage = computed(() => imageMap[props.image] || '')
</script>

<template>
  <div class="container">
    <img :src="resolvedImage" />
    <p class="bold-maj title">{{ title }}</p>
    <p class="body-maj">{{ body }}</p>
  </div>
</template>

<style scoped>
.container {
  box-sizing: border-box;
  margin: 8px;
  width: 421px;
  height: 230px;
  background-color: var(--secondary-color);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}

img {
  height: 50px;
  width: 50px;
}

p {
  margin: 0;
}

.title {
  margin: 15px 0 10px;
}

@media (max-width: 1000px) {
  .container {
    width: 100%;
    margin: 8px 20px;
    max-width: 570px;
    height: auto;
  }
}
</style>
