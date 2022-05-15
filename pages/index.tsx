import type { NextPage } from "next"
import { GetStaticProps } from "next"

import Bio from "../components/bio"
import Intro from "../components/intro"
import Skill from "../components/skill"
import Project from "../components/project"
import { skill } from "../components/data/skill"
import { detail } from "../components/data/detail"
import { Props } from "../type/index"
import { getData } from "../function/index"

export const getStaticProps: GetStaticProps = async (context) => {
  const project = await getData()

  return {
    props: {
      skill,
      detail,
      project,
    },
  }
}
const index = ({ skill, detail, project }: Props) => {
  return (
    <>
        <Intro />

        <Bio detail={detail} />

        <Skill skill={skill} />

        <Project project={project} />
    </>
  )
}

export default index
