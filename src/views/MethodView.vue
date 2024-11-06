<script setup lang="ts">
import SimpleButton from '@/components/SimpleButton.vue'
import StepMethod from '@/components/StepMethod.vue'
import { Color } from '@/enum/Color'
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleClickButton() {
  router.push({ name: 'contact' })
}

onMounted(() => {
  const mainContainer = document.querySelector('.main-content-container')
  if (mainContainer) {
    mainContainer.classList.add('no-lateral-margin')
  }
  const body = document.querySelector('body')
  if (body) {
    body.classList.add('no-lateral-padding')
  }
  const footer = document.querySelector('.footer-container')
  if (footer) {
    footer.classList.add('no-body-padding')
  }
})

onBeforeUnmount(() => {
  const mainContainer = document.querySelector('.main-content-container')
  if (mainContainer) {
    mainContainer.classList.remove('no-lateral-margin')
  }
  const body = document.querySelector('body')
  if (body) {
    body.classList.remove('no-lateral-padding')
  }
  const footer = document.querySelector('.footer-container')
  if (footer) {
    footer.classList.remove('no-body-padding')
  }
})
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
          Dès que vous me contactez, nous fixons rapidement une <span>rencontre</span> — en présentiel ou en visioconférence — 
          afin de faire connaissance et d’initier le projet. Cette première étape est cruciale pour <span>poser les bases</span> 
          de notre collaboration. Nous discutons de vos besoins, des objectifs de votre projet, et des défis à relever. 
          Je m’assure de <span>bien comprendre votre vision</span>, vos attentes, et les utilisateurs finaux que vous visez.
        </p>
        <p>
          Ensemble, nous <span>cadrons</span> clairement le <span>périmètre du projet</span> : qui sera responsable de quoi, quelles <span>normes</span> et 
          <span>contraintes</span> devrons-nous respecter, quelles sont les <span>fonctionnalités</span> visées, quelles sont les <span>priorités</span> ? Cette 
          rencontre est aussi l’occasion de dès à présent parler de l’après (maintenance, transmission).
        </p>
        <p>
          À la fin de cette première étape, nous aurons une <span>vision claire et partagée</span> du projet, des objectifs à 
          atteindre, et des contraintes à respecter. J’aurai <span>en ma possession tout le nécessaire</span> pour pouvoir vous 
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
          Une fois notre première rencontre terminée, <span>je planche immédiatement sur votre projet</span>. Cette phase est dédiée 
          à la planification. L’objectif est clair : définir un <span>Minimum Viable Product (MVP)</span> — la première version  de 
          votre application comprenant toutes les fonctionnalités prioritaires — ainsi qu’un <span>plan d’action détaillé</span> pour 
          atteindre cet objectif.
        </p>
        <p>
          Je prends en compte tous les éléments discutés lors de notre première rencontre, tout en réalisant des <span>recherches 
          techniques approfondies</span>. Quels outils et technologies sont les plus adaptés à votre projet ? Comment <span>garantir la 
          faisabilité</span> tout en restant fidèle à vos attentes ?
        </p>
        <p>
          Quand tout est prêt, nous fixons un <span>nouveau rendez-vous</span>. Je vous présente le plan d’action, le MVP, ainsi qu’un 
          devis clair et détaillé. Vous avez alors la possibilité de <span>valider ce travail ou de demander des ajustements</span> si 
          nécessaire. Cette phase itérative garantit que nous sommes <span>parfaitement alignés</span> avant de commencer l’ascension.
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
          Avec le plan d’action validé, il est temps d’attaquer la <span>phase de développement</span>. Cette étape suit au mieux 
          le planning établi et peut inclure des <span>échelons intermédiaires</span> (livrables, démonstrations) si définis au 
          préalable.
        </p>
        <p>
          Afin d’assurer une <span>transparence totale</span>, vous avez accès à un <span>outil de suivi</span> en temps réel, qui vous permet 
          de visualiser l’avancement du projet à chaque étape. Si des <span>ajustements</span> sont <span>nécessaires</span> en cours de route, 
          nous fixons rapidement un <span>point pour revoir</span> les délais et les attendus.
        </p>
        <p>
          Arrivés au sommet, je vous livre le <span>produit final dans les temps</span> et <span>testé</span> de fond en comble. 
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
          Une fois le produit final livré, <span>je ne vous laisse pas là-haut tout seul</span>. Vous bénéficiez d’une <span>période de 
          garantie de trois mois</span> pour détecter le moindre bug. Tous les problèmes qui rentrent dans le cahier des 
          charges seront <span>corrigés gratuitement</span>.
        </p>
        <p>
          C’est aussi le moment de discuter de <span>l’avenir de votre application</span>. Si vous le souhaitez et si ce n’est pas 
          déjà fait, nous pourrons mettre en place un <span>contrat de maintenance</span> pour assurer la pérennité de votre projet. 
          Ensemble, nous veillons à ce que <span>votre application continue de fonctionner à son meilleur niveau</span>, bien après 
          l’ascension.
        </p>
        <p>
          Enfin, <span>si l’envie vous prend</span> de lancer de nouveaux défis, nous pourrons repartir ensemble pour une nouvelle 
          ascension, en reprenant à l’étape 01 pour <span>concevoir la v2</span> de votre projet ! 
        </p>'
        :color="Color.Orange"
      />
    </div>
    <div class="button-section">
      <div class="button-container">
        <SimpleButton @clicked="handleClickButton" class="button" text="PRENEZ CONTACT !" />
      </div>
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
.intro-container {
  padding: 0 12vw;
}
.step-container {
  width: 100%;
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
  padding: 20px 0 50px;
}

.button-section {
  background-color: var(--tertiary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

@media (max-width: 600px) {
  .intro-container h1 {
    margin: 30px 0;
  }
}
</style>
