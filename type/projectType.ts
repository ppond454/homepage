export interface Props {
  project: Project[]
  count : number
}
export interface Project {
  description: string
  create: createType
  fwork: Object[]
  demo: string
  source: Object[]
  pic: string
  name: string
  id: number
  method: string
}
export interface createType {
  _seconds: Date
  _nanoseconds: Date
}
