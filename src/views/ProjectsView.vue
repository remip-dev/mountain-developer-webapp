<script setup lang="ts">
import ProjectsSlider from '@/components/projects/ProjectsSlider.vue'
</script>

<template>
  <div>
    <h1>
      Voici mon carnet de voyage, je référence ici tous les sommets gravis avec de précédents
      clients
    </h1>
    <ProjectsSlider />
    <h2>
      J'ai hâte d'y ajouter le récit de notre aventure commune,
      <router-link to="/contact" class="contact-link">contacte moi</router-link> pour en parler !
    </h2>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1,
h2 {
  font-weight: 300;
  text-align: justify;
  margin: 100px 0;
}

.contact-link {
  color: var(--tertiary-color);
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: var(--hover-dark-color);
}
</style>
