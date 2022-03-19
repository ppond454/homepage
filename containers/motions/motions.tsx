import React, { ReactNode } from "react"
import { motion } from "framer-motion"

const variants: any = {
  hidden: { opacity: 0, x: 0, y: 10},
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
}

interface Props {
  children: ReactNode
  duratime: number
}

const Motions = ({ children , duratime }: Props) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: duratime, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      {children}
    </motion.article>
  )
}

export default Motions
