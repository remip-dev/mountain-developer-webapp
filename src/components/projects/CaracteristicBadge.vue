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
  background-color: none;
  color: var(--tertiary-color);
  border-radius: 30px;
  border: solid 2px var(--tertiary-color);
  width: auto;
  padding: 5px 20px;
  display: inline-block;
}

p {
  margin: 0;
  font-style: italic;
}
</style>
