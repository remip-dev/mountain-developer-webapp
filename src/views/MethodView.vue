<script setup lang="ts">
import SimpleButton from '@/components/SimpleButton.vue'
import StepMethod from '@/components/StepMethod.vue'
import { Color } from '@/enum/Color'
</script>

<template>
  <div class="page-container">
    <div class="intro-container">
      <h1>Une expédition en 4 étapes pour une application réussie</h1>
    </div>
    <div class="step-container">
      <StepMethod
        number="01"
        imagePath="myMethod/step01/step_01"
        altImage="Un guide de montagne vous accueille"
        title="La Rencontre"
        description="<p>Bonjour, je serai votre guide pour cette expédition !</p>
        <p>Dès réception de votre mail, nous fixons rapidement un appel ayant pour but :</p>
        <p>La présentation des deux partis La compréhension du  besoin<p>"
        :color="Color.White"
      />
    </div>
    <div class="step-container">
      <StepMethod
        number="02"
        imagePath="myMethod/step02/step_02"
        altImage="Le guide présente le plan"
        title="La Planification"
        description="<p>Bonjour, je serai votre guide pour cette expédition !</p>
        <p>Dès réception de votre mail, nous fixons rapidement un appel ayant pour but :</p>
        <p>La présentation des deux partis La compréhension du  besoin<p>"
        :color="Color.Orange"
      />
    </div>
    <div class="step-container">
      <StepMethod
        number="03"
        imagePath="myMethod/step03/step_03"
        altImage="Le guide gravit une montagne"
        title="L'Ascension"
        description="<p>Bonjour, je serai votre guide pour cette expédition !</p>
        <p>Dès réception de votre mail, nous fixons rapidement un appel ayant pour but :</p>
        <p>La présentation des deux partis La compréhension du  besoin<p>"
        :color="Color.White"
      />
    </div>
    <div class="step-container">
      <StepMethod
        number="04"
        imagePath="myMethod/step04/step_04"
        altImage="Le guide descend de la montagne très heureux"
        title="La Redescente"
        description="<p>Bonjour, je serai votre guide pour cette expédition !</p>
        <p>Dès réception de votre mail, nous fixons rapidement un appel ayant pour but :</p>
        <p>La présentation des deux partis La compréhension du  besoin<p>"
        :color="Color.Orange"
      />
    </div>
    <div class="button-container">
      <SimpleButton class="button" text="PRENEZ CONTACT !" />
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.step-container {
  width: 900px;
}
.button {
  background-color: var(--primary-color);
  color: var(--tertiary-color);
}

h1 {
  font-weight: 300;
  text-align: justify;
  margin: 100px 0;
}

.button-container {
  padding: 150px 0;
}
</style>
