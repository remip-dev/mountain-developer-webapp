<script setup lang="ts">
import CallButton from '@/components/CallButton.vue'
</script>

<template>
  <div class="container">
    <div class="contact-container">
      <h1><a href="mailto:bonjour@remipolicet.com">bonjour@remipolicet.com</a></h1>
      <h2><a href="tel:+33783214838">+33 7 83 21 48 39</a></h2>
      <h2 class="place">Annecy, FRANCE</h2>
      <div class="media">
        <div class="button-container">
          <CallButton />
        </div>
        <div class="socials-container">
          <a href="https://github.com/remip-dev" target="_blank"
            ><img src="@/assets/icons/github.svg"
          /></a>
          <a href="https://www.linkedin.com/in/rémi-policet" target="_blank"
            ><img src="@/assets/icons/linkedin.svg"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  color: var(--tertiary-color);
  text-decoration: none;
}

h1 {
  margin: 20px 0;
}

h2 {
  margin: 15px 0;
  font-weight: 300;
}

.place {
  letter-spacing: 5px;
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.media {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
}

.button-container {
  display: flex;
  align-items: center;
}

img {
  padding: 10px;
  height: 60px;
}

@media (max-width: 600px) {
  .media {
    flex-direction: column-reverse;
    align-items: center;
    gap: 40px;
  }
}
</style>
