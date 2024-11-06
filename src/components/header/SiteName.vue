<template>
  <div class="site-name">RÉMI POLICET</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SiteName'
})
</script>

<style scoped>
.site-name {
  font-size: var(--h2-font-size);
  font-weight: 700;
  color: var(--tertiary-color);
  letter-spacing: 10px;
}

@media (max-width: 600px) {
  .site-name {
    font-size: var(--tablet-h2-font-size);
  }
}

@media (max-width: 400px) {
  .site-name {
    letter-spacing: 8px;
  }
}
</style>
