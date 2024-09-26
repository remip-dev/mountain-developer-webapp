<script setup lang="ts"></script>

<template>
  <div>
    <span>Copyright ©Rémi Policet</span>
    <span>|</span>
    <router-link class="link" to="/legal-information">Mentions légales</router-link>
    <span>|</span>
    <span>Annecy</span>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row-reverse;
  margin-top: 50px;
}

.link {
  color: var(--tertiary-color);
}

span,
.link {
  margin: 0px 5px;
}

@media (max-width: 600px) {
  span {
    margin: 0px 2px;
  }
}
</style>
