<script setup lang="ts">
import SimpleButton from '@/components/SimpleButton.vue'
import CaracteristicBadge from '@/components/projects/CaracteristicBadge.vue'
import CompetenceBadge from '@/components/projects/CompetenceBadge.vue'
import FeedbackClient from '@/components/projects/FeedbackClient.vue'
import ImageViewer from '@/components/projects/ImageViewer.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useProjectStore } from '@/stores/useProjectStore'
import { useRoute, useRouter } from 'vue-router'
import { type DetailedProject } from '@/interfaces/DetailedProject'
import type { Project } from '@/interfaces/Project'

const route = useRoute()
const router = useRouter()
const projectStore = useProjectStore()

const projects = ref<Project[]>([])
const projectName = computed(() => route.params.name as string)
const detailedProject = ref<DetailedProject | null>(null)

onMounted(async () => {
  projects.value = await projectStore.getProjects()
})

watch(
  projectName,
  async (newName) => {
    detailedProject.value = await projectStore.getDetailedProject(newName)
  },
  { immediate: true }
)

async function findProjectIndex(projectName: string): Promise<number> {
  const index: number = projects.value.findIndex((project) => project.title === projectName)
  return index
}

async function findNextProjectName(currentIndex: number): Promise<string> {
  const nextIndex = (currentIndex + 1) % projects.value.length
  return projects.value[nextIndex].title
}

async function findPreviousProjectName(currentIndex: number): Promise<string> {
  const previousIndex = (currentIndex - 1 + projects.value.length) % projects.value.length
  return projects.value[previousIndex].title
}

async function goToNextProject() {
  const currentIndex = await findProjectIndex(projectName.value)
  const nextProjectName = await findNextProjectName(currentIndex)
  router.push({ name: 'detailedProject', params: { name: nextProjectName } })
}

async function goToPreviousProject() {
  const currentIndex = await findProjectIndex(projectName.value)
  const previousProjectName = await findPreviousProjectName(currentIndex)
  router.push({ name: 'detailedProject', params: { name: previousProjectName } })
}
</script>

<template>
  <div v-if="detailedProject" :key="projectName" class="main-container">
    <div class="project-container">
      <div class="left-container">
        <ImageViewer :images="detailedProject.images" />
        <FeedbackClient :feedback="detailedProject.feedback" />
      </div>
      <div class="right-container">
        <h2>{{ detailedProject.title }}</h2>
        <div class="caracteristics-container">
          <CaracteristicBadge :label="detailedProject.category" />
          <CaracteristicBadge :label="detailedProject.year.toString()" />
          <CaracteristicBadge :label="detailedProject.length" />
        </div>
        <div v-html="detailedProject.description" class="description-container"></div>
        <div class="competences-container">
          <CompetenceBadge
            v-for="(competence, index) in detailedProject.competences"
            :key="index"
            :label="competence"
          />
        </div>
      </div>
    </div>
    <div class="button-container">
      <SimpleButton class="button" text="PRÉCÉDENT" @click="goToPreviousProject" />
      <SimpleButton class="button" text="SUIVANT" @click="goToNextProject" />
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
  flex-wrap: wrap;
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
  margin: 40px 0 0;
}

.button {
  padding: 20px 50px;
}

@media (max-width: 1220px) {
  .project-container {
    gap: 60px;
  }

  .button {
    padding: 13px 36px;
  }
}

@media (max-width: 1000px) {
  .project-container {
    flex-direction: column-reverse;
    gap: 40px;
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
