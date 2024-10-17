<script setup lang="ts"></script>

<template>
  <div class="footer-container">
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
  flex-direction: row;
  justify-content: end;
  margin-top: 50px;
}

.no-body-padding {
  margin-right: 30px;
}

.link {
  color: var(--tertiary-color);
  transition: color 0.3s ease;
}

.link:hover {
  color: var(--hover-dark-color);
}

span,
.link {
  margin: 0px 5px;
}

@media (max-width: 1000px) {
  .no-body-padding {
    margin-right: 20px;
  }
}

@media (max-width: 600px) {
  span {
    margin: 0px 2px;
  }
  .no-body-padding {
    margin-right: 10px;
  }
}
</style>
