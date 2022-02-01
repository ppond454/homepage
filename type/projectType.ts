export interface Props {
  project: Project[]
}
export interface Project {
  description: string
  create: createType
  fwork: Object[]
  demo: string
  source: string
  pic: string
  name: string
  id: number
}
export interface createType {
  _seconds: Date
  _nanoseconds: Date
}
