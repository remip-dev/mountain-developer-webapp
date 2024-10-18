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

@media (max-width: 600px) {
  .container,
  img,
  .title {
    width: 300px;
  }

  .title {
    height: 48px;
    top: 30px;
  }

  .category {
    width: 147px;
    height: 29px;
  }

  .category p {
    font-size: 15px;
  }

  .container {
    height: 78px;
  }
}

@media (max-width: 400px) {
  .container,
  img,
  .title {
    width: 260px;
  }

  .title {
    height: 42px;
    top: 26px;
  }

  .category {
    width: 127px;
    height: 25px;
  }

  .container {
    height: 68px;
  }

  .category p {
    font-size: 12px;
  }
}
</style>
