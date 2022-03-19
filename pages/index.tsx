import type { NextPage } from "next"
import { GetStaticProps } from "next"

import Bio from "../components/bio"
import Intro from "../components/intro"
import Skill from "../components/skill"
import Project from "../components/project"
import { skill } from "../components/data/skill"
import { detail } from "../components/data/detail"

import Motions from "../containers/motions/motions"
import { Props } from "../type/index"
import { getData } from "../function/index"
import { motion } from "framer-motion"

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
      <Motions duratime={1}>
        <Intro />
      </Motions>
      <Motions duratime={2}>
        <Bio detail={detail} />
      </Motions>
      <Motions duratime={3}>
        <Skill skill={skill} />
      </Motions>
        <Project project={project} />
    </>
  )
}

export default index
