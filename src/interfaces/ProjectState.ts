import type { DetailedProject } from './DetailedProject'
import type { Project } from './Project'

export interface ProjectState {
  projects: Project[]
  detailedProjectList: Record<string, DetailedProject>
}
