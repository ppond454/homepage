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
  Center
} from "@chakra-ui/react"
import { useInView } from "react-intersection-observer"

import Cards from "../containers/cards"
import { Props } from "../type/projectCardType"
import Motions from "../containers/motions/motions"

const Project = ({ project  }: Props) => {
  const [ ref, inView ] = useInView({
    threshold: 0.2,
  })
  return (
    <Motions inView={inView}  >
      <Center mt="20px" ref={ref} flexDir="column" id="project-sec">
        <Container textAlign="left">
          <Heading size="lg" variant="section-title">
            Project
          </Heading>
        </Container>
        <Cards project={project} />
      </Center>
   </Motions>
  )
}

export default Project
