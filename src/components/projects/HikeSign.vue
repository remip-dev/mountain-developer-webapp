<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <div class="category">
      <p>{{ category }}</p>
    </div>
    <div class="title">
      <p>{{ title }}</p>
    </div>
    <img src="@/assets/icons/hike_sign.svg" />
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 387px;
  height: 101px;
}

.category {
  position: absolute;
  top: 0;
  left: 0;
  height: 37px;
  width: 188px;
  z-index: 501;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title p {
  font-weight: 700;
}

.title {
  position: absolute;
  top: 38px;
  left: 0;
  width: 387px;
  height: 59px;
  z-index: 501;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 387px;
  z-index: 1;
}
</style>
