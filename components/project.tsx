import {
  Container,
  Heading,
  Box,
  Text,
  Wrap,
  WrapItem,
  HStack,
  Skeleton,
} from "@chakra-ui/react"

interface Props {}
const Project = (props: Props) => {
  return (
    <>
      <Box align="center">
        <Container textAlign="left">
          <Heading as="u" size="lg" variant="section-title">
            Project
          </Heading>
        </Container>
        <Box
          textAlign="center"
          p="5px"
          m="20px"
          borderRadius={20}
          w={{ base: "80%", md: "container.sm" }}
        >
          <HStack align="left" m="6">
            <Skeleton>
              <Box bg="#D7CEC7" boxSize="300" borderRadius={20}></Box>
            </Skeleton>
            <Skeleton>
              <Box bg="#D7CEC7" boxSize="300"></Box>
            </Skeleton>
          </HStack>
        </Box>
      </Box>
    </>
  )
}

export default Project
