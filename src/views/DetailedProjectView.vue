<script setup lang="ts">
import SimpleButton from '@/components/SimpleButton.vue'
import project from '@/assets/project.json'
import CaracteristicBadge from '@/components/projects/CaracteristicBadge.vue'
import CompetenceBadge from '@/components/projects/CompetenceBadge.vue'
import FeedbackClient from '@/components/projects/FeedbackClient.vue'
</script>

<template>
  <div class="main-container">
    <div class="project-container">
      <div class="left-column">
        <FeedbackClient :feedback="project.feedback" />
      </div>
      <div class="right-column">
        <h2>{{ project.title }}</h2>
        <div class="caracteristics-container">
          <CaracteristicBadge :label="project.category" />
          <CaracteristicBadge :label="project.year.toString()" />
          <CaracteristicBadge :label="project.length" />
        </div>
        <div class="description-container">
          {{ project.description }}
        </div>
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
      <SimpleButton text="PRÉCÉDENT" />
      <SimpleButton text="SUIVANT" />
    </div>
  </div>
</template>

<style scoped>
.project-container {
  display: flex;
  flex-direction: row;
}

.left-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.right-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

@media (max-width: 1000px) {
  .project-container {
    flex-direction: column-reverse;
  }
}
</style>
