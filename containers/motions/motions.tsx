import React, { ReactNode } from "react"
import { motion, useAnimation } from "framer-motion"

const variants: any = {
  hidden: { opacity: 0, x: 0, y: 10 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
}

interface Props {
  children: ReactNode
  inView: boolean
 
}

const Motions = ({ children, inView,  }: Props) => {
  const controls = useAnimation()

  React.useEffect(() => {
    if (inView) {
      controls.start("enter")
    } else {
      controls.start("exit")
    }
  }, [inView])

  return (
    <motion.article
      initial="hidden"
      animate={controls}
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      {children}
    </motion.article>
  )
}

export default Motions
