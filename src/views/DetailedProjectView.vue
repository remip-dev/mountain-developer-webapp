<template>
  <h1>
    Les pages projets sont en développement, n'hésite pas à
    <router-link to="/contact" class="contact-link">me contacter</router-link> si tu as besoin
    d'informations
  </h1>
</template>

<style scoped>
h1 {
  font-weight: 300;
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
