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
  padding: 32px 72px;
  font-size: var(--normal-font-size);
  font-weight: 300;
  transition:
    transform 0.2s,
    background-color 0.2s;
}

button:active {
  transform: scale(0.95);
  background-color: rgba(255, 157, 42, 0.4);
}

@media (max-width: 780px) {
  button {
    padding: 25px 50px;
  }
}
</style>
