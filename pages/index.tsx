import type { NextPage } from "next"

import Nav from "../components/nav"
import Bio from "../components/bio"
import Intro from "../components/intro"
import Footer from "../components/footer"
import Skill from "../components/skill"

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <Intro/>
      <Bio />
      <Skill/>
      <Footer/>
    </>
  )
}

export default Home
