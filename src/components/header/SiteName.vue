<template>
  <div class="site-name">REMI POLICET</div>
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
</style>
