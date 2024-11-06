<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['clicked'])

function handleClick() {
  emit('clicked')
}
</script>

<template>
  <button @click="handleClick">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  background-color: var(--tertiary-color);
  color: var(--primary-color);
  border: none;
  border-radius: 30px;
  padding: 25px 50px;
  font-size: var(--normal-font-size);
  font-weight: 300;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

button:hover {
  background-color: var(--hover-dark-color);
}

button:active {
  transform: scale(0.95);
}

@media (max-width: 1220px) {
  button {
    font-size: var(--tablet-normal-font-size);
  }
}

@media (max-width: 780px) {
  button {
    padding: 25px 50px;
  }
}
</style>
