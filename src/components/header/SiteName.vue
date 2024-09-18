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
  font-size: 36px;
  font-weight: 700;
  color: var(--tertiary-color);
  letter-spacing: 10px;
}
</style>
