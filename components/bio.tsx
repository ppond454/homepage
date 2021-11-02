import { Container, Heading, Box } from "@chakra-ui/react"
import Timeline from "./timeline"
import React from "react"

interface Props {
  detail:{
    years: string,
    enducation:string ,
    degree:string,
  }[],
}

const Bio = ({detail}: Props) => {
  return (
    <Box pt="10">
      <Container>
        <Heading size="lg" color="#565656" as="u">
          Bio
        </Heading>
      </Container >
      <Timeline detail={detail} />
    </Box>
  )
}

export default Bio
