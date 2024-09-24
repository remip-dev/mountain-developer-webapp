<script setup lang="ts">
import AdaptImage from './AdaptImage.vue'
import SkillGroup from './SkillGroup.vue'
</script>

<template>
  <div class="section-container">
    <h2>Mes compétences</h2>
    <div class="skills-container">
      <SkillGroup
        mountainImage=""
        skillsImage=""
        title="Compétences Backend"
        description="Je suis équipé de tous les outils nécessaires pour développer 
        et déployer une API robuste, testée et documentée dans un environnement 
        JavaScript."
      />
      <SkillGroup
        mountainImage=""
        skillsImage=""
        title="Bonnes pratiques"
        description="J’ai été formé aux techniques de survie du développement logiciel. 
        Grâce aux bonnes pratiques de développement, je suis capable de livrer des 
        applications conçues de manière réfléchie, facilement scalables et maintenables.
        Les développeurs futurs du projet n’en seront que plus heureux !"
      />
      <SkillGroup
        mountainImage=""
        skillsImage=""
        title="Compétences DevOps"
        description="Je suis équipé de la tête aux pieds pour supporter tout le cycle de 
        vie des applications !
        Je suis capable de gérer l'intégration continue, le déploiement continu et 
        l'infrastructure cloud. Je m'assure que chaque application est déployée de manière 
        fluide et efficace."
      />
      <SkillGroup
        mountainImage=""
        skillsImage=""
        title="Compétences Frontend"
        description="Bien que spécialiste backend, je sais aussi immortaliser les plus beaux 
        points de vue.
        Je suis capable de réaliser des maquettes d’interfaces utilisateurs agréables et 
        intuitives puis je sais les développer grâce à des frameworks JavaScript modernes."
      />
      <AdaptImage
        firstImage="mySkills/mountainBag/mountain_bag"
        secondImage="mySkills/workBag/work_bag"
        alt="Un sac de montagne dans lequel ranger toutes ces compétences"
        :isSkillVisible="false"
      />
    </div>
    <AdaptImage
      firstImage="mySkills/mountainer/mountainer"
      secondImage="mySkills/worker/worker"
      alt="Un montagnard qui peut enfiler sa tenue de développeur rapidement"
      :isSkillVisible="false"
    />
  </div>
</template>
