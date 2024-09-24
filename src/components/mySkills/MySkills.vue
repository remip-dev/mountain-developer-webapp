<script setup lang="ts">
import AdaptImage from './AdaptImage.vue'
import SkillGroup from './SkillGroup.vue'
import { ref } from 'vue'

const isSkillVisible = ref(false)

function handleEventSkill() {
  isSkillVisible.value = !isSkillVisible.value
  console.log(isSkillVisible)
}
</script>

<template>
  <div class="skills-section-container">
    <h2>Mes compétences</h2>
    <div class="skills-container">
      <SkillGroup
        @skills="handleEventSkill"
        class="top-skill"
        mountainImage="mySkills/backend/mountain_backend"
        skillsImage="mySkills/backend/backend"
        title="Compétences Backend"
        description="Je suis équipé de tous les outils nécessaires pour développer 
        et déployer une API robuste, testée et documentée dans un environnement 
        JavaScript."
      />
      <SkillGroup
        @skills="handleEventSkill"
        class="top-skill"
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
        class="devops-skill"
        mountainImage="mySkills/devops/mountain_devops"
        skillsImage=""
        title="Compétences DevOps"
        description="Je suis équipé de la tête aux pieds pour supporter tout le cycle de 
        vie des applications !
        Je suis capable de gérer l'intégration continue, le déploiement continu et 
        l'infrastructure cloud. Je m'assure que chaque application est déployée de manière 
        fluide et efficace."
      />
      <SkillGroup
        @skills="handleEventSkill"
        class="frontend-skill"
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
  justify-content: center;
  border-radius: 30px;
  padding: 30px;

  background-color: var(--secondary-color);
  height: auto;
  width: auto;
  max-width: 950px;
  align-content: space-between;
}

.top-skill {
  flex-basis: 50%;
}

.devops-skill,
.frontend-skill,
.bag {
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.devops-skill,
.bag {
  flex-basis: 37%;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.frontend-skill {
  flex-basis: 26%;
}

.worker {
  position: absolute;
  top: 50%;
  left: 0;
  width: 15%;
}
</style>
