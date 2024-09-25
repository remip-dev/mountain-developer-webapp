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
