import { GetStaticProps } from "next"
import { Box, Container, Heading, Text, Flex, Image } from "@chakra-ui/react"

import { getData } from "../../function"
import { Props } from "../../type/projectType"
import Motions from "../../containers/motions/motions"
import HeadTitle from "../../containers/layout/headTitle"


export const getStaticProps: GetStaticProps = async (context) => {
  const project  = await getData() 
  return {
    props: {
      project,
    },
  }
}


const Index = ({project}: Props) => {

  console.log(project);
  

  return (
    
    <Motions>
      <HeadTitle title="Project" >
      <Box align="center">
        <Heading pt="20" textAlign="center">
          projects
        </Heading>

        <Box m="5" w="70%" h="300px" bg="green"></Box>
        <Box m="5" w="70%" h="300px" bg="green"></Box>
        <Box m="5" w="70%" h="300px" bg="green"></Box>
        <Box m="5" w="70%" h="300px" bg="green"></Box>
      </Box>
      </HeadTitle>
    </Motions>
  )
}

export default Index
