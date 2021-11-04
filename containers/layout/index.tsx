import React from 'react'
import Nav from "../../components/nav" 
import Footer from "../../components/footer" 
import { useVisible } from "../motions/navmotions"


interface Props {
    children? : React.ReactNode
}


const index = ({children}: Props) => {
    const visible: boolean = useVisible()

    return (
        <>
          {visible && <Nav/> }
          <main>{children}</main>
          <Footer/>
        </>
    )
}

export default index
