import React from "react"
import Head from "next/head"
import Nav from "../../components/nav"
import Footer from "../../components/footer"
import { useVisible } from "../motions/navmotions"
import { ScrollerMotion } from "scroller-motion"

interface Props {
  children?: React.ReactNode
}

const index = ({ children }: Props) => {
  const visible: boolean = useVisible()

  return (
    <>
      {visible && <Nav />}
      <ScrollerMotion
        spring={{ mass: 1, stiffness:300, bounce: 300, damping: 100 }}
      >
        <main>{children}</main>
        <Footer />
      </ScrollerMotion>
    </>
  )
}

export default index
