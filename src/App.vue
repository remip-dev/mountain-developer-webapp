<script setup lang="ts">
import HeaderComponent from './components/header/HeaderComponent.vue'
import SimpleFooter from './components/SimpleFooter.vue'
</script>

<template>
  <div id="app">
    <div class="header-container">
      <HeaderComponent class="header" />
    </div>
    <div class="main-content-container">
      <RouterView />
    </div>
    <div>
      <SimpleFooter />
    </div>
  </div>
</template>

<style scoped>
#app {
  min-height: 93vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header-container {
  position: fixed;
  z-index: 3001;
  left: 0px;
  right: 0px;
  top: 0px;
  padding: 30px 30px 0 30px;
  background-color: var(--primary-color);
  border: none;
}

.main-content-container {
  margin: 15vh 9vw 0;
  z-index: 0;
}

.no-lateral-margin {
  margin: 15vh 0 0;
}

@media (max-width: 1220px) {
  .main-content-container {
    margin: 15vh 70px 0;
  }

  .no-lateral-margin {
    margin: 15vh 0 0;
  }
}

@media (max-width: 1000px) {
  .header-container {
    /* to adapt with the body padding */
    padding: 20px 20px 0 20px;
  }

  .no-lateral-margin {
    margin: 15vh 0 0;
  }
}

@media (max-width: 780px) {
  .main-content-container {
    margin: 15vh 30px 0;
  }

  .no-lateral-margin {
    margin: 15vh 0 0;
  }
}

@media (max-width: 600px) {
  .header-container {
    /* to adapt with the body padding */
    padding: 20px 10px 0 10px;
  }

  .main-content-container {
    margin: 15vh 20px 0;
  }

  .no-lateral-margin {
    margin: 15vh 0 0;
  }
}
</style>
