<script setup lang="ts">
import CompetenceBadge from './CompetenceBadge.vue'
import RatingScale from './RatingScale.vue'
import ScreenOverview from './ScreenOverview.vue'
import MountainIllustration from './MountainIllustration.vue'
import { type Project } from '@/interfaces/Project'
import { useRouter } from 'vue-router'

defineProps<{
  project: Project
}>()

const router = useRouter()

function handleClick(projectName: string) {
  router.push({ name: 'detailedProject', params: { name: projectName } })
}
</script>

<template>
  <div class="main-container" @click="handleClick(project.title)">
    <div class="left-container">
      <MountainIllustration
        :year="project.year"
        :title="project.title"
        :category="project.category"
      />
      <ScreenOverview :images="project.images" />
    </div>
    <div class="right-container">
      <RatingScale :mark="project.mark" />
      <div v-html="project.description" class="description-container"></div>
      <div class="competences-container">
        <CompetenceBadge
          class="competence"
          v-for="(competence, index) in project.competences.slice(0, 8)"
          :key="index"
          :label="competence"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: row;
  width: 800px;
  height: auto;
  border-radius: 30px;
  padding: 50px;
  gap: 30px;
  border: solid 1px var(--secondary-color);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 5px 0;
  background-color: var(--primary-background-color);
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.main-container:hover {
  background-color: var(--hover-color);
}

.left-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.right-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.description-container {
  height: 161px;
  overflow: hidden;
  margin: 12px 0 0 0;
}

.description-container :deep(p) {
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  margin: 0;
}

.competences-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 12px 0 0 0;
  height: 110px;
}

.competence {
  margin: 5px;
}

@media (max-width: 1220px) {
  .description-container :deep(p) {
    -webkit-line-clamp: 7;
  }

  .description-container {
    height: 145px;
  }

  .competences-container {
    margin-top: 17px;
    height: 100px;
  }

  .description-container {
    margin-top: 20px;
  }
}

@media (max-width: 1000px) {
  .main-container {
    flex-direction: column;
    justify-content: space-between;
    width: 450px;
    padding: 30px;
    gap: 50px;
  }

  .left-container {
    align-items: center;
  }

  .right-container {
    justify-content: end;
  }

  .competences-container {
    height: 50px;
  }

  .description-container {
    height: 105px;
  }

  .description-container :deep(p) {
    -webkit-line-clamp: 5;
  }
}

@media (max-width: 600px) {
  .main-container {
    width: 320px;
    padding: 20px;
    gap: 30px;
  }
}

@media (max-width: 400px) {
  .main-container {
    width: 280px;
    padding: 15px;
  }
}
</style>
