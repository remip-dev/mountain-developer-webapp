<script setup lang="ts">
import { ref } from 'vue'

const isHovered = ref(false)
const isClicked = ref(false)

function handleClick() {
  isClicked.value = !isClicked.value
  window.location.href = 'https://calendly.com/le-developpeur-montagnard/meet'
}
</script>

<template>
  <div
    class="call-container"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    @click="handleClick"
  >
    <div class="block" :class="{ 'block-hovered': isHovered, 'block-clicked': isClicked }"></div>
    <div class="button-maj text" :class="{ 'text-hovered': isHovered }">Réserver un appel</div>
  </div>
</template>

<style scoped>
.call-container {
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
}

.block {
  position: absolute;
  top: 0;
  left: -34px;
  width: 46px;
  height: 68px;
  background-color: var(--text-color);
  border-radius: 20px;
  transition: all 0.3s ease;
  z-index: -1;
}

.block-hovered {
  width: 304px;
  height: 68px;
  background-color: var(--tertiary-color);
}

.block-clicked {
  background-color: var(--text-color);
  top: 0;
  left: 223px;
  width: 46px;
  height: 68px;
}

.text {
  transition: all 0.3s ease;
}

.text-hovered {
  color: var(--primary-color);
}
</style>
