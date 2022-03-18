export interface Props {
    skill: {
      lang: {
        name: string
        link: string
        logo: string
      }[]
      fwork: {
        name: string
        link: string
        logo: string
      }[]
    }
    detail: {
      years: string
      enducation: string
      degree: string
    }[]
    project: Project[]
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
  