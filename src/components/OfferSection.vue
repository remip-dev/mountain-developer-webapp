<script setup lang="ts">
import BlockOffer from './BlockOffer.vue'
import CallButton from './CallButton.vue'
</script>

<template>
  <div class="offer-section">
    <div class="presentation-container">
      <h2 class="h2-maj">Un accompagnement complet pour développer vos projets web & mobiles</h2>
      <p class="body-maj">
        De l’idée à la réalisation, ensemble transformons vos ambitions en solutions digitales sur
        mesure, évolutives et parfaitement adaptées à vos besoins.
      </p>
    </div>
    <div class="blocks-container">
      <BlockOffer
        image="handshake"
        title="Accompagnement de A à Z"
        body="De la conception à la maintenance, je suis votre seul interlocuteur pour garantir cohérence et simplicité."
      />
      <BlockOffer
        image="computer"
        title="Expertise Full Stack"
        body="Backend, frontend, et tout ce qu’il faut entre les deux : je m’occupe de tout."
      />
      <BlockOffer
        image="secure"
        title="Code propre et évolutif"
        body="Un code pensé pour durer : robuste, maintenable et conçu pour s’adapter à votre croissance."
      />
      <BlockOffer
        image="mvp"
        title="Un MVP au cœur de votre projet"
        body="Ensemble, nous priorisons l’essentiel pour développer rapidement une version fonctionnelle."
      />
      <BlockOffer
        image="edit"
        title="Une Méthode claire en 4 étapes"
        body="Rencontre, Planification, Ascension, Redescente : une méthode précise pour un projet maîtrisé."
      />
      <BlockOffer
        image="rocket"
        title="Le pari de la jeunesse"
        body="La fougue, la débrouillardise et une vision tournée vers l’avenir. Je m’investis pour bâtir un partenariat durable et performant."
      />
    </div>
    <div class="button-container">
      <CallButton />
    </div>
  </div>
</template>

<style scoped>
.offer-section {
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.presentation-container {
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  text-align: center;
}

h2 {
  margin-top: 0;
  max-width: 630px;
  color: var(--text-color);
}

p {
  margin: 0 0 33px;
  text-align: center;
}

.blocks-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1400px;
}

.button-container {
  padding: 10px;
}
</style>
