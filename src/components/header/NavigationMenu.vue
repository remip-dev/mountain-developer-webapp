<template>
  <nav>
    <RouterLink to="/" exact-active-class="active">L'Accueil</RouterLink>
    <RouterLink to="/method" exact-active-class="active">La Méthode</RouterLink>
    <RouterLink to="/projects" exact-active-class="active">Les Projets</RouterLink>
    <RouterLink to="/contact" exact-active-class="active">Contact</RouterLink>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavigationMenu'
})
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  gap: 70px;
}

nav a {
  color: var(--tertiary-color);
  font-size: var(--normal-font-size);
  text-decoration: none;
}

.active {
  font-weight: 900;
}
</style>
