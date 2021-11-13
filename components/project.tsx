import {
  Container,
  Heading,
  Box,
  Text,
  Wrap,
  WrapItem,
  HStack,
  Skeleton,
  Flex,
  LinkBox,
  LinkOverlay,
  Image,
} from "@chakra-ui/react"

import Cards from "../containers/cards"

interface Props {
  project: {
    name: string
    description: string
    fwork: string[]
    create: string
    source: string
    demo: string
    pic: string
  }[]
}

const Project = ({project}: Props) => {

  return (
    <>
      <Box align="center">
        <Container textAlign="left">
          <Heading size="lg" variant="section-title">
            Project
          </Heading>
        </Container>
        <Cards project={project} />
      </Box>
    </>
  )
}

export default Project
