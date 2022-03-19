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
import { Props } from "../type/projectCardType"
import Motions from "../containers/motions/motions"

const Project = ({ project  }: Props) => {
  
  return (
    <Motions duratime={1}>
      <Box align="center" id="project-sec">
        <Container textAlign="left">
          <Heading size="lg" variant="section-title">
            Project
          </Heading>
        </Container>
        <Cards project={project} />
      </Box>
    </Motions>
  )
}

export default Project
