<template>
  <header>
    <SiteName />
    <NavigationMenu />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SiteName from './SiteName.vue'
import NavigationMenu from './NavigationMenu.vue'

export default defineComponent({
  name: 'HeaderComponent',
  components: {
    SiteName,
    NavigationMenu
  }
})
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  width: 100%;
}
</style>
