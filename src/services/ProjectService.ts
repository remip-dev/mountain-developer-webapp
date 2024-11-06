import type { Project } from '@/interfaces/Project'
import type { DetailedProject } from '@/interfaces/DetailedProject'
import projects from '@/assets/projects.json'
import detailedProjects from '@/assets/detailedProjects.json'

export async function fetchProjects(): Promise<Project[]> {
  return projects
}

export async function fetchProjectDetails(projectName: string): Promise<DetailedProject> {
  switch (projectName) {
    case 'Le Développeur Montagnard':
      return detailedProjects[0]

    case 'ELIoT':
      return detailedProjects[1]

    case 'Intégration API':
      return detailedProjects[2]

    case 'LaboVersité':
      return detailedProjects[3]

    case 'Gestionnaire devis/facture':
      return detailedProjects[4]

    case 'Créateur de devis':
      return detailedProjects[5]

    default:
      throw new Error(`Project with name "${projectName}" not found`)
  }
}
