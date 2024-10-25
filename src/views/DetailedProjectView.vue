<script setup lang="ts">
import SimpleButton from '@/components/SimpleButton.vue'
import project from '@/assets/project.json'
import CaracteristicBadge from '@/components/projects/CaracteristicBadge.vue'
import CompetenceBadge from '@/components/projects/CompetenceBadge.vue'
import FeedbackClient from '@/components/projects/FeedbackClient.vue'
import ImageViewer from '@/components/projects/ImageViewer.vue'
</script>

<template>
  <div class="main-container">
    <div class="project-container">
      <div class="left-container">
        <ImageViewer :images="project.images" />
        <FeedbackClient :feedback="project.feedback" />
      </div>
      <div class="right-container">
        <h2>{{ project.title }}</h2>
        <div class="caracteristics-container">
          <CaracteristicBadge :label="project.category" />
          <CaracteristicBadge :label="project.year.toString()" />
          <CaracteristicBadge :label="project.length" />
        </div>
        <div v-html="project.description" class="description-container"></div>
        <div class="competences-container">
          <CompetenceBadge
            v-for="(competence, index) in project.competences"
            :key="index"
            :label="competence"
          />
        </div>
      </div>
    </div>
    <div class="button-container">
      <SimpleButton class="button" text="PRÉCÉDENT" />
      <SimpleButton class="button" text="SUIVANT" />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
}

.left-container,
.right-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 50%;
  max-width: 700px;
}

h2 {
  margin: 0 0 15px 0;
}

.caracteristics-container {
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 15px;
}

.competences-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1500px;
  margin: 40px 0 20px;
}

.button {
  padding: 20px 50px;
}

@media (max-width: 1220px) {
  .button {
    padding: 13px 36px;
  }
}

@media (max-width: 1000px) {
  .project-container {
    flex-direction: column-reverse;
  }

  .left-container,
  .right-container {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .button {
    padding: 10px 20px;
  }
}
</style>
