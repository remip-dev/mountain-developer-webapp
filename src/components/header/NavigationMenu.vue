<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const route = useRoute()

const isProjectsActive = computed(() => route.path.startsWith('/projects'))
</script>

<template>
  <nav>
    <button class="burger-menu" @click="toggleMenu">
      <img class="icon-menu" src="@/assets/icons/burger_menu.svg" alt="Menu" />
    </button>

    <div class="nav-links" :class="{ 'menu-open': isMenuOpen }" @click="toggleMenu">
      <RouterLink to="/" exact-active-class="active">L'Accueil</RouterLink>
      <RouterLink to="/method" exact-active-class="active">La Méthode</RouterLink>
      <RouterLink to="/projects" :class="{ active: isProjectsActive }">Les Projets</RouterLink>
      <RouterLink to="/contact" exact-active-class="active">Contact</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.burger-menu {
  display: none;
}

.nav-links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  gap: 70px;
  margin-top: 5px;
}

.nav-links a {
  color: var(--text-color);
  font-size: var(--normal-font-size);
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--tertiary-color);
}

.active {
  font-weight: 900;
  color: var(--tertiary-color) !important;
}

@media (max-width: 1220px) {
  .nav-links {
    gap: 40px;
  }
}

@media (max-width: 1000px) {
  .burger-menu {
    display: flex;
    border: none;
    background-color: transparent;

    z-index: 2000;
  }

  .icon-menu {
    width: 40px;
  }

  .nav-links.menu-open {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.9); /* Un fond transparent */
    justify-content: center;
    align-items: center;
    gap: 40px;
    z-index: 1000;
  }

  .nav-links a {
    font-size: var(--tablet-h1-font-size);
  }
}

@media (max-width: 600px) {
  .icon-menu {
    width: 34px;
  }
}
</style>
