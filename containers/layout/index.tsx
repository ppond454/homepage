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
      <ScrollerMotion spring={{ mass: 1.5, stiffness: 200, damping: 70 }}>
        <main>{children}</main>
      </ScrollerMotion>
      <Footer />
    </>
  )
}

export default index
