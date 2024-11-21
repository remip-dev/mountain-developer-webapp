<script setup lang="ts">
defineProps({
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
</script>

<template>
  <div class="container">
    <img :src="image" />
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
