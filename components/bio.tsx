import {
  Container,
  Text,
  Heading,
  Box,
  Divider,
  Stack,
} from "@chakra-ui/react"
import React from "react"
import Motions from "../containers/motions/motions"


interface Props {
  detail: {
    years: string
    enducation: string
    degree: string
  }[]
}

const Bio = ({ detail }: Props) => {
  return (
    <Container mb="8" mt="8" >
      <Heading size="lg" variant="section-title" >Education</Heading>
      {detail.map((val, i) => {
        return (
          <Stack direction="row" h="120px" p={4} mt="4" >
            <Text fontSize={{base:"15px" ,md:"16px"}} >{val.years}</Text>
            <Divider  orientation="vertical" bg="teal.200" w="1" />
            <Box>
            <Text fontSize={{base:"15px" ,md:"16px"}}>{val.enducation}</Text>
            <Text
            color="red.200" 
            fontSize={{base:"12px" ,md:"13px"}}>{val.degree}</Text>
            </Box>
          </Stack>
        )
      })}
    </Container>
  )
}

export default Bio
