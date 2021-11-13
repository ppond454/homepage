import type { NextPage } from "next"
import { GetStaticProps } from "next"


import Bio from "../components/bio"
import Intro from "../components/intro"
import Footer from "../components/footer"
import Skill from "../components/skill"
import Project from "../components/project"
import { skill } from "../components/data/skill"
import { detail } from "../components/data/detail"
import { project } from "../components/data/projects"
import Motions from "../containers/motions/motions"

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      skill,
      detail,
      project,
    },
  }
}

interface Props {
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
  project:{
    name: string
    description:string
    fwork: string[]
    create: string
    source:string
    demo: string
    pic: string
  }[]
}

const Home = ({ skill, detail , project }: Props) => {
  return (
    <Motions>
      <Intro />
      <Bio detail={detail} />
      <Skill skill={skill} />

      <Project project={project} />
    </Motions>
  )
}

export default Home
