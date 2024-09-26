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
        description='<p><span class="citation">"Bonjour, je serai votre guide pour cette expédition !"</span></p>
        <p>
          Dès que vous me contactez, nous fixons rapidement une rencontre — en présentiel ou en visioconférence — 
          afin de faire connaissance et d’initier le projet. Cette première étape est cruciale pour poser les bases 
          de notre collaboration. Nous discutons de vos besoins, des objectifs de votre projet, et des défis à relever. 
          Je m’assure de bien comprendre votre vision, vos attentes, et les utilisateurs finaux que vous visez.
        </p>
        <p>
          Ensemble, nous cadrons clairement le périmètre du projet : qui sera responsable de quoi, quelles normes et 
          contraintes devrons-nous respecter, quelles sont les fonctionnalités visées, quelles sont les priorités ? Cette 
          rencontre est aussi l’occasion de dès à présent parler de l’après (maintenance, transmission).
        </p>
        <p>
          À la fin de cette première étape, nous aurons une vision claire et partagée du projet, des objectifs à 
          atteindre, et des contraintes à respecter. J’aurais en ma possession tout le nécessaire pour pouvoir vous 
          proposer un cadrage de projet réfléchi en profondeur.
        </p>'
        :color="Color.White"
      />
    </div>
    <div class="step-container">
      <StepMethod
        number="02"
        imagePath="myMethod/step02/step_02"
        altImage="Le guide présente le plan"
        title="La Planification"
        description='<p><span class="citation">"Une aventure comme celle-ci, ça se prépare !"</span></p>
        <p>
          Une fois notre première rencontre terminée, je planche immédiatement sur votre projet. Cette phase est dédiée 
          à la planification. L’objectif est clair : définir un Minimum Viable Product (MVP) — la première version  de 
          votre application comprenant toutes les fonctionnalités prioritaires — ainsi qu’un plan d’action détaillé pour 
          atteindre cet objectif.
        </p>
        <p>
          Je prends en compte tous les éléments discutés lors de notre première rencontre, tout en réalisant des recherches 
          techniques approfondies. Quels outils et technologies sont les plus adaptés à votre projet ? Comment garantir la 
          faisabilité tout en restant fidèle à vos attentes ?
        </p>
        <p>
          Quand tout est prêt, nous fixons un nouveau rendez-vous. Je vous présente le plan d’action, le MVP, ainsi qu’un 
          devis clair et détaillé. Vous avez alors la possibilité de valider ce travail ou de demander des ajustements si 
          nécessaire. Cette phase itérative garantit que nous sommes parfaitement alignés avant de commencer l’ascension.
        </p>'
        :color="Color.Orange"
      />
    </div>
    <div class="step-container">
      <StepMethod
        number="03"
        imagePath="myMethod/step03/step_03"
        altImage="Le guide gravit une montagne"
        title="L'Ascension"
        description='<p><span class="citation">"Il ne reste plus qu’à grimper !"</span></p>
        <p>
          Avec le plan d’action validé, il est temps d’attaquer la phase de développement. Cette étape suit au mieux 
          le planning établi et peut inclure des échelons intermédiaires (livrables, démonstrations) si définis au 
          préalable.
        </p>
        <p>
          Afin d’assurer une transparence totale, vous avez accès à un outil de suivi en temps réel, qui vous permet 
          de visualiser l’avancement du projet à chaque étape. Si des ajustements sont nécessaires en cours de route, 
          nous fixons rapidement un point pour revoir les délais et les attendus.
        </p>
        <p>
          Arrivés au sommet, je vous livre le produit final dans les temps et testé de fond en comble. 
        </p>'
        :color="Color.White"
      />
    </div>
    <div class="step-container">
      <StepMethod
        number="04"
        imagePath="myMethod/step04/step_04"
        altImage="Le guide descend de la montagne très heureux"
        title="La Redescente"
        description='<p><span class="citation">Nous voilà au sommet ! Mais seule la moitié du chemin est parcourue."</span></p>
        <p>
          Une fois le produit final livré, je ne vous laisse pas là-haut tout seul. Vous bénéficiez d’une période de 
          garantie de trois mois pour détecter le moindre bug. Tous les problèmes qui rentrent dans le cahier des 
          charges seront corrigés gratuitement.
        </p>
        <p>
          C’est aussi le moment de discuter de l’avenir de votre application. Si vous le souhaitez et si ce n’est pas 
          déjà fait, nous pourrons mettre en place un contrat de maintenance pour assurer la pérennité de votre projet. 
          Ensemble, nous veillons à ce que votre application continue de fonctionner à son meilleur niveau, bien après 
          l’ascension.
        </p>
        <p>
          Enfin, si l’envie vous prend de lancer de nouveaux défis, nous pourrons repartir ensemble pour une nouvelle 
          ascension, en reprenant à l’étape 01 pour concevoir la v2 de votre projet ! 
        </p>'
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
