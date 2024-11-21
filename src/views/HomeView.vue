<script setup lang="ts">
import OfferSection from '@/components/OfferSection.vue'
import { onBeforeUnmount, onMounted } from 'vue'

onMounted(() => {
  const mainContainer = document.querySelector('.main-content-container')
  if (mainContainer) {
    mainContainer.classList.add('no-top-margin')
  }
  const body = document.querySelector('body')
  if (body) {
    body.classList.add('no-padding')
  }
  const footer = document.querySelector('.footer-container')
  if (footer) {
    footer.classList.add('no-padding')
  }
})

onBeforeUnmount(() => {
  const mainContainer = document.querySelector('.main-content-container')
  if (mainContainer) {
    mainContainer.classList.remove('no-top-margin')
  }
  const body = document.querySelector('body')
  if (body) {
    body.classList.remove('no-padding')
  }
  const footer = document.querySelector('.footer-container')
  if (footer) {
    footer.classList.remove('no-padding')
  }
})
</script>

<template>
  <div class="first-section">
    <div class="intro-container">
      <div class="intro-content animate__animated animate__fadeIn">
        <div class="title-container">
          <h1 class="title-maj">Le Développeur Montagnard</h1>
          <img class="emoji" src="@/assets/images/mountain_emoji.webp" />
        </div>
        <p class="body-maj">Vous êtes une TPE, une PME ou une startup ?</p>
        <p class="body-maj">
          Partez en expédition Freelance à mes côtés afin d’arriver
          <span class="bold-maj">au produit digital</span> de vos rêves.
        </p>
      </div>
      <img class="img-intro" src="@/assets/images/digital_nomad.svg" />
    </div>
    <div class="customers-box">
      <p class="body-maj">Rejoignez le mur des clients satisfaits dans mon refuge</p>
      <div class="logos-container">
        <div class="logos-slide">
          <img class="bycommute" src="@/assets/images/logo_bycommute.webp" alt="Bycommute" />
          <img class="zesti" src="@/assets/images/logo_zesti.webp" alt="Zesti" />
          <img class="alten" src="@/assets/images/logo_alten.webp" alt="Alten" />
          <img class="japa" src="@/assets/images/logo_japanime.webp" alt="Japanime Box" />
          <img class="jaya" src="@/assets/images/logo_jaya.webp" alt="Jaya" />
        </div>
        <div class="logos-slide">
          <img class="bycommute" src="@/assets/images/logo_bycommute.webp" alt="Bycommute" />
          <img class="zesti" src="@/assets/images/logo_zesti.webp" alt="Zesti" />
          <img class="alten" src="@/assets/images/logo_alten.webp" alt="Alten" />
          <img class="japa" src="@/assets/images/logo_japanime.webp" alt="Japanime Box" />
          <img class="jaya" src="@/assets/images/logo_jaya.webp" alt="Jaya" />
        </div>
      </div>
    </div>
  </div>
  <OfferSection />
</template>

<style scoped>
.first-section {
  height: 101vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    180deg,
    var(--primary-color) 0%,
    var(--primary-color) 20%,
    #ffbe79 83%,
    #ffbe79 97%,
    var(--tertiary-color) 100%
  );
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 50px 30px 0px rgba(0, 0, 0, 0.15);
}

.intro-container {
  margin-top: 80px;
  height: 72vh;
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  justify-content: space-between;
  align-items: start;
  padding-bottom: 2vh;
}

.intro-content {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: baseline;
}

.intro-content p {
  margin: 10px 0;
}

span {
  color: var(--tertiary-color);
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
}
.title-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  position: relative;
  margin-top: 100px;
}

.title-container h1 {
  margin: 0 0 12px 0;
}

.emoji {
  position: absolute;
  bottom: 20px;
  left: 300px;
  width: 60px;
  height: 60px;
}

.img-intro {
  display: block;
  max-width: 700px;
  max-height: 70vh;
  margin: 0 0 0 20px;
  width: auto; /* S'adapte au conteneur */
  height: 100%; /* Garde les proportions */
  object-fit: contain;
}

.customers-box {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
  min-height: 170px;
  padding: 3vh 0;
}

.customers-box p {
  margin: 0 15px 20px;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.logos-container {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  max-width: 100%;
  position: relative;
}

.logos-container:before {
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #ffbe79 90%);
  width: 250px;
  height: 100%;
  content: '';
  z-index: 2;
}

.logos-container:after {
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffbe79 90%);
  width: 250px;
  height: 100%;
  content: '';
  z-index: 2;
}

.logos-container:hover .logos-slide {
  animation-play-state: paused;
}

.logos-slide {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  animation: 20s slide infinite linear;
}

.logos-slide img {
  margin: 0 90px;
}
.bycommute {
  height: 40px;
}

.zesti {
  height: 100px;
}

.alten {
  height: 73px;
}

.japa {
  height: 90px;
}

.jaya {
  height: 40px;
}

@media (max-width: 1500px) {
  .intro-container {
    max-width: 1100px;
  }

  .img-intro {
    max-width: 600px;
  }
}

@media (max-width: 1500px) {
  .intro-container {
    max-width: 1100px;
  }

  .img-intro {
    max-width: 600px;
  }
}

@media (max-width: 1220px) {
  .intro-container {
    max-width: 900px;
  }

  .img-intro {
    max-width: 500px;
  }
}

@media (max-width: 1000px) {
  .first-section {
    height: auto;
  }

  .intro-container {
    height: auto;
    flex-direction: column;
    align-items: center;
  }

  .title-container {
    margin-top: 30px;
  }

  .img-intro {
    max-height: 400px;
  }

  .logos-slide img {
    margin: 0 30px;
  }

  .logos-container:before {
    width: 120px;
  }

  .logos-container:after {
    width: 120px;
  }
}

@media (max-width: 600px) {
  .emoji {
    position: absolute;
    bottom: 15px;
    left: 260px;
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 500px) {
  .intro-content {
    padding: 0 20px;
  }
}
</style>
