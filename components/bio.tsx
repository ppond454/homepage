import { Container, Heading, Box } from "@chakra-ui/react"
import Timeline from "./timeline"
import React from "react"

interface Props {}

const Bio = (props: Props) => {
  return (
    <Box pt="10"   >
      <Container>
        <Heading size="lg" color="#565656" as="u" >Bio</Heading>
      </Container>
      <Timeline />
    </Box>
  )
}

export default Bio
