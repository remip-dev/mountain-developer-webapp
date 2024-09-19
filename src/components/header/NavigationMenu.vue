<template>
  <nav>
    <button class="burger-menu" @click="toggleMenu">
      <img class="icon-menu" src="@/assets/icons/burger_menu.svg" alt="Menu" />
    </button>

    <div class="nav-links" :class="{ 'menu-open': isMenuOpen }" @click="toggleMenu">
      <RouterLink to="/" exact-active-class="active">L'Accueil</RouterLink>
      <RouterLink to="/method" exact-active-class="active">La Méthode</RouterLink>
      <RouterLink to="/projects" exact-active-class="active">Les Projets</RouterLink>
      <RouterLink to="/contact" exact-active-class="active">Contact</RouterLink>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NavigationMenu',
  setup() {
    const isMenuOpen = ref(false)

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    return {
      isMenuOpen,
      toggleMenu
    }
  }
})
</script>

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
  color: var(--tertiary-color);
  font-size: var(--normal-font-size);
  text-decoration: none;
}

.active {
  font-weight: 900;
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
    position: absolute;
    top: 20px;
    right: 20px;
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
</style>
