<script setup lang="ts"></script>

<template>
  <div class="footer-container body-maj">
    <span>Copyright ©Rémi Policet</span>
    <span>|</span>
    <router-link class="link" to="/legal-information">Mentions légales</router-link>
    <span>|</span>
    <span>Annecy</span>
    <span>|</span>
    <a class="link" href="https://storyset.com/nature">Nature illustrations by Storyset</a>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 30px;
  color: var(--text-color);
  flex-wrap: wrap;
}

.no-body-padding {
  margin-right: 30px;
}

.no-padding {
  margin-right: 30px;
  margin-bottom: 10px;
}

.link {
  color: var(--text-color);
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

  .no-padding {
    margin-right: 20px;
    margin-bottom: 10px;
  }
}

@media (max-width: 600px) {
  span {
    margin: 0px 2px;
  }
  .no-body-padding {
    margin-right: 10px;
  }

  .no-padding {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}

@media (max-width: 400px) {
  span {
    margin: 0px 1px;
  }
}
</style>
