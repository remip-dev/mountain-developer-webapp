import { type Feedback } from './Feedback'
import { type Image } from './Image'

export interface DetailedProject {
  title: string
  category: string
  year: number
  length: string
  description: string
  competences: string[]
  images: Image[]
  feedback: Feedback
}
