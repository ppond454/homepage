import type { NextPage } from "next"
import { GetStaticProps } from "next"
import Nav from "../components/nav"
import Bio from "../components/bio"
import Intro from "../components/intro"
import Footer from "../components/footer"
import Skill from "../components/skill"
import Project from "../components/project"
import { skill } from "../components/data/skill" 
import { detail } from "../components/data/detail"
import Motions from "../containers/motions/motions"


export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      skill,
      detail,
    },
  }
}

interface Props {
  skill: {
    lang: {
      name:string ,
      link: string,
      logo: string,
    }[],
    fwork: {
      name: string,
      link: string,
      logo: string,
    }[],
  },
  detail:{
    years: string,
    enducation:string ,
    degree:string,
  }[],
}

const Home = ({ skill , detail }: Props) => {

  return (
    <Motions>

      <Intro />
      <Bio detail={detail} /> 
      <Skill skill={skill} />
      
      {/* <Project/> */}
     
    </Motions>
  )
}

export default Home
