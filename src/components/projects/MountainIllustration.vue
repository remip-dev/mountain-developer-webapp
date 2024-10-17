<script setup lang="ts">
import HikeSign from './HikeSign.vue'

defineProps({
  year: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <h1>{{ year }}</h1>
    <img src="@/assets/icons/mountain_illustration_1.svg" />
    <HikeSign :category="category" :title="title" />
  </div>
</template>

<style scoped>
div {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 390px;
  height: 220px;
}

h1 {
  text-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  z-index: 501;
  margin: 0 0 0 20px;
}

img {
  position: absolute;
  z-index: 001;
}

@media (max-width: 600px) {
  div {
    width: 300px;
    height: 175px;
  }

  img {
    width: 295px;
  }
}

@media (max-width: 400px) {
  div {
    width: 260px;
    height: 150px;
  }

  img {
    width: 255px;
  }
}
</style>
