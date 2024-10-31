import { defineStore } from 'pinia'
import type { DetailedProject } from '@/interfaces/DetailedProject'
import type { ProjectState } from '@/interfaces/ProjectState'
import { fetchProjectDetails, fetchProjects } from '@/services/ProjectService'
import type { Project } from '@/interfaces/Project'

export const useProjectStore = defineStore('project', {
  state: (): ProjectState => ({
    projects: [],
    detailedProjectList: {}
  }),

  actions: {
    async getProjects(): Promise<Project[]> {
      if (!this.projects.length) {
        this.projects = await fetchProjects()
      }
      return this.projects
    },

    async getDetailedProject(projectName: string): Promise<DetailedProject> {
      if (!this.detailedProjectList[projectName]) {
        const details = await fetchProjectDetails(projectName)
        this.detailedProjectList[projectName] = details
      }
      return this.detailedProjectList[projectName]
    }
  }
})
