<script setup lang="ts">
import AdaptImage from './AdaptImage.vue'
import SkillGroup from './SkillGroup.vue'
import { ref } from 'vue'

const isSkillVisible = ref(false)

function handleEventSkill() {
  isSkillVisible.value = !isSkillVisible.value
}
</script>

<template>
  <div class="skills-section-container">
    <h2>Mes compétences</h2>
    <div class="skills-container">
      <SkillGroup
        @skills="handleEventSkill"
        class="backend skill"
        :class="{ blink: !isSkillVisible }"
        mountainImage="mySkills/backend/mountain_backend"
        skillsImage="mySkills/backend/backend"
        title="Compétences Backend"
        description="<p>Je suis équipé de tous les outils nécessaires pour <span>développer</span> 
        et <span>déployer</span> un <span>backend</span> et une <span>API</span> robuste, testée et documentée dans un environnement 
        <span>JavaScript</span>.</p>"
      />
      <SkillGroup
        @skills="handleEventSkill"
        class="practices skill"
        :class="{ blink: !isSkillVisible }"
        mountainImage="mySkills/practices/mountain_practices"
        skillsImage="mySkills/practices/practices"
        title="Bonnes pratiques"
        description="<p>J’ai été formé aux <span>techniques de survie</span> du développement logiciel.</p>
        <p>Grâce aux <span>bonnes pratiques</span> de développement, je suis capable de livrer des 
        <span>applications</span> conçues de manière <span>réfléchie</span>, facilement <span>scalables</span> et <span>maintenables</span>.</p>
        <p>Les développeurs futurs du projet n’en seront que <span>plus heureux</span> !</p>"
      />
      <SkillGroup
        @skills="handleEventSkill"
        class="devops skill"
        :class="{ blink: !isSkillVisible }"
        mountainImage="mySkills/devops/mountain_devops"
        skillsImage="mySkills/devops/devops"
        title="Compétences DevOps"
        description="<p>Je suis équipé de la tête aux pieds pour supporter tout le <span>cycle de 
        vie</span> des applications !</p>
        <p>Je suis capable de gérer <span>l'intégration continue</span>, le <span>déploiement continu</span> et 
        l'infrastructure <span>cloud</span>. Je m'assure que chaque application est déployée de manière 
        <span>fluide</span> et <span>efficace</span>.</p>"
      />
      <SkillGroup
        @skills="handleEventSkill"
        class="frontend skill"
        :class="{ blink: !isSkillVisible }"
        mountainImage="mySkills/frontend/mountain_frontend"
        skillsImage="mySkills/frontend/frontend"
        title="Compétences Frontend"
        description="<p>Je sais aussi immortaliser les <span>plus beaux 
        points de vue</span>.</p>
        <p>Je suis capable de réaliser des <span>maquettes</span> d’interfaces utilisateurs <span>agréables</span> et 
        <span>intuitives</span> puis je sais les développer grâce à des <span>frameworks</span> JavaScript <span>modernes</span>.</p>"
      />
      <AdaptImage
        class="bag"
        firstImage="mySkills/mountainBag/mountain_bag"
        secondImage="mySkills/workBag/work_bag"
        alt="Un sac de montagne dans lequel ranger toutes ces compétences"
        :isSkillVisible="isSkillVisible"
      />
    </div>
    <AdaptImage
      class="worker"
      firstImage="mySkills/mountainer/mountainer"
      secondImage="mySkills/worker/worker"
      alt="Un montagnard qui peut enfiler sa tenue de développeur rapidement"
      :isSkillVisible="isSkillVisible"
    />
  </div>
</template>

<style scoped>
.skills-section-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.skills-section-container h2 {
  margin-bottom: 55px;
}

.skills-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 30px;
  padding: 30px;
  background-color: var(--secondary-color);
  height: 570px;
  width: 850px;
  align-content: space-between;
  align-items: flex-end;
}

.backend {
  max-width: 450px;
  max-height: 242.44px;
  width: 100%;
  height: 100%;
}

.practices {
  max-width: 380px;
  max-height: 245.09px;
  width: 100%;
  height: 100%;
}

.devops {
  max-width: 316px;
  max-height: 294.66px;
  width: 100%;
  height: 100%;
}

.frontend {
  max-height: 309.91px;
  max-width: 235px;
  width: 100%;
  height: 100%;
}

.bag {
  max-width: 280px;
  max-height: 248.14px;
  width: 100%;
  height: 100%;
}

.skill,
.bag {
  position: relative;
}

.worker {
  position: absolute;
  top: 50%;
  right: 90%;
  width: 100%;
  max-width: 190px;
}

@keyframes blink {
  0% {
    background-color: var(--secondary-color);
  }
  50% {
    background-color: var(--primary-color);
  }
  100% {
    background-color: var(--secondary-color);
  }
}

.blink {
  animation: blink 1.5s infinite;
  border-radius: 30px;
}

@media (max-width: 1220px) {
  .skills-container {
    padding: 10px;
  }

  .worker {
    right: 97%;
    max-width: 170px;
    top: 40%;
  }
}

@media (max-width: 1000px) {
  .skills-container {
    width: 650px;
    height: 450px;
  }

  .backend {
    max-width: 330px;
    max-height: 177.78px;
  }

  .practices {
    max-width: 270px;
    max-height: 174.14px;
  }

  .devops {
    max-width: 250px;
    max-height: 246.56px;
  }

  .frontend {
    max-height: 263.75px;
    max-width: 200px;
  }

  .bag {
    max-width: 180px;
    max-height: 167.39px;
  }

  .worker {
    right: 97%;
    max-width: 150px;
    top: 40%;
  }
}

@media (max-width: 780px) {
  .skills-container {
    width: 450px;
    height: 1250px;
    justify-content: center;
  }

  .skill,
  .bag {
    max-width: 390px;
  }

  .backend {
    max-height: 210.11px;
  }

  .practices {
    max-height: 241.8px;
  }

  .devops {
    max-height: 363.67px;
  }

  .frontend {
    max-height: 329.69px;
    max-width: 250px;
  }

  .bag {
    max-width: 200px;
    max-height: 186px;
  }

  .worker {
    right: 75%;
  }
}

@media (max-width: 600px) {
  .skills-container {
    width: 300px;
    height: 1120px;
    justify-content: center;
  }

  .skill,
  .bag {
    max-width: 300px;
  }

  .backend {
    max-height: 161.61px;
  }

  .practices {
    max-height: 193.48px;
  }

  .devops {
    max-height: 279.73px;
  }

  .frontend {
    max-height: 309.91px;
    max-width: 235px;
  }

  .bag {
    max-width: 150px;
    max-height: 139.5px;
  }

  .worker {
    right: 75%;
    max-width: 120px;
    top: 37%;
  }
}
</style>
