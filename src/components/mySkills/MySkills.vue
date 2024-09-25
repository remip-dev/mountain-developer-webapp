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
        description="Je suis équipé de tous les outils nécessaires pour développer 
        et déployer une API robuste, testée et documentée dans un environnement 
        JavaScript."
      />
      <SkillGroup
        @skills="handleEventSkill"
        class="practices skill"
        :class="{ blink: !isSkillVisible }"
        mountainImage="mySkills/practices/mountain_practices"
        skillsImage="mySkills/practices/practices"
        title="Bonnes pratiques"
        description="J’ai été formé aux techniques de survie du développement logiciel. 
        Grâce aux bonnes pratiques de développement, je suis capable de livrer des 
        applications conçues de manière réfléchie, facilement scalables et maintenables.
        Les développeurs futurs du projet n’en seront que plus heureux !"
      />
      <SkillGroup
        @skills="handleEventSkill"
        class="devops skill"
        :class="{ blink: !isSkillVisible }"
        mountainImage="mySkills/devops/mountain_devops"
        skillsImage="mySkills/devops/devops"
        title="Compétences DevOps"
        description="Je suis équipé de la tête aux pieds pour supporter tout le cycle de 
        vie des applications !
        Je suis capable de gérer l'intégration continue, le déploiement continu et 
        l'infrastructure cloud. Je m'assure que chaque application est déployée de manière 
        fluide et efficace."
      />
      <SkillGroup
        @skills="handleEventSkill"
        class="frontend skill"
        :class="{ blink: !isSkillVisible }"
        mountainImage="mySkills/frontend/mountain_frontend"
        skillsImage="mySkills/frontend/frontend"
        title="Compétences Frontend"
        description="Bien que spécialiste backend, je sais aussi immortaliser les plus beaux 
        points de vue.
        Je suis capable de réaliser des maquettes d’interfaces utilisateurs agréables et 
        intuitives puis je sais les développer grâce à des frameworks JavaScript modernes."
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
    right: 70%;
  }
}
</style>
