import type { NextPage } from "next"
import { GetStaticProps } from "next"
import Nav from "../components/nav"
import Bio from "../components/bio"
import Intro from "../components/intro"
import Footer from "../components/footer"
import Skill from "../components/skill"
import Project from "../components/project"



export const getStaticProps: GetStaticProps = async (context) => {
  const skill = {
    lang: ["JavaScript", "TypeScript", "CSS", "HTML", "C", "Python"],
    fwork: ["ReactJS","NextJS","VueJS","Flask","OpenCV"],
  }

  return {
    props: {
      skill,
    },
  }
}

interface Props {
  skill: {
    lang: string[],
    fwork: string[],
  }
}

const Home = ({ skill }: Props) => {
  return (
    <>
      <Nav />
      <Intro />
      <Bio />
      <Skill skill={skill} />
      <Project/>
      <Footer />
    </>
  )
}

export default Home
