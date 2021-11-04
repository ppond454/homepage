import { Box, Container, Heading, Text, Flex, Image } from "@chakra-ui/react"

interface Props {}

const Index = (props: Props) => {
  return (
    <Box align="center">
      <Heading pt="20" textAlign="center">
        projects
      </Heading>
      
      <Box  m="5" w="70%" h="300px" bg="green" ></Box>
      <Box  m="5" w="70%" h="300px" bg="green" ></Box>
      <Box  m="5" w="70%" h="300px" bg="green" ></Box>
      <Box  m="5" w="70%" h="300px" bg="green" ></Box>

    </Box>
  )
}

export default Index
