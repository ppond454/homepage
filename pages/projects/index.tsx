import { Box, Container, Heading, Text, Flex, Image } from "@chakra-ui/react"
import Motions from "../../containers/motions/motions"
import HeadTitle from "../../containers/layout/headTitle"

interface Props {}

const Index = (props: Props) => {
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
