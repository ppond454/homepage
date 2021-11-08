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

interface Props {}
const Project = (props: Props) => {
  return (
    <>
      <Box align="center">
        <Container textAlign="left">
          <Heading size="lg" variant="section-title">
            Project
          </Heading>
        </Container>
        <Cards />
        <Cards />
        <Cards />
      </Box>
    </>
  )
}

export default Project
