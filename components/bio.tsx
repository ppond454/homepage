import { Container, Text, Heading, Box, Divider, Stack } from "@chakra-ui/react"
import React from "react"
import { useInView } from "react-intersection-observer"
import Motions from "../containers/motions/motions"

interface Props {
  detail: {
    years: string
    enducation: string
    degree: string
  }[]
}

const Bio = ({ detail }: Props) => {

  const [ ref, inView ] = useInView({
    threshold: 0.35,
  })

  return (
    <Motions inView={inView} > 
 
    <Container ref={ref} mb="8" mt="8">
      <Heading size="lg" variant="section-title">
        Education
      </Heading>
      {detail.map((val, i) => {
        return (
          <Stack
            direction="row"
            h="120px"
            p={4}
            mt="4"
            display={{ base: "ruby-text-container", md: "inline-flex" }}
            key={i}
          >
            <Text fontSize={{ base: "12px", md: "14px" }}>{val.years}</Text>
            <Divider
              orientation="vertical"
              bg="teal.200"
              w={{ base: "0.5", md: "1" }}
            />
            <Box>
              <Text fontSize={{ base: "14px", md: "16px" }}>
                {val.enducation}
              </Text>
              <Text color="red.200" fontSize={{ base: "11px", md: "13px" }}>
                {val.degree}
              </Text>
            </Box>
          </Stack>
        )
      })}
    </Container>
    </Motions>
  )
}

export default Bio
