<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <p>{{ label }}</p>
  </div>
</template>

<style scoped>
div {
  background-color: var(--secondary-color);
  color: var(--tertiary-color);
  border-radius: 30px;
  width: auto;
  padding: 10px 22px;
  display: inline-block;
}

p {
  margin: 0;
  font-weight: 700;
}
</style>
