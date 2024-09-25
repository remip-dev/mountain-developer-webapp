<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <h2 class="title">
      {{ title }}
    </h2>
    <p class="description">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  left: 50px;
  z-index: 1001;
  border: solid 1px;
  border-radius: 30px;
  border-color: var(--tertiary-color);
  background-color: var(--primary-color);
  width: 400px;
  padding: 45px;
  color: var(--black);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

h2 {
  margin-top: 0;
}

p {
  margin: 0;
}

@media (max-width: 1220px) {
  div {
    width: 300px;
    left: 0px;
  }
}

@media (max-width: 1000px) {
  div {
    padding: 30px;
    width: 250px;
    left: -10px;
  }
}

@media (max-width: 780px) {
  div {
    left: 0px;
  }
}

@media (max-width: 600px) {
  div {
    width: 250px;
    left: 0px;
  }
}
</style>
