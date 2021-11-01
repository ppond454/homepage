import { Image, Text, Box, Heading, Container, Flex } from "@chakra-ui/react"

import React from "react"

interface Props {}

const Intro = (props: Props) => {
  return (
    <Container pt="20">
      <Box bg="#D7CEC7" borderRadius={20} p="3" mb="5" >
        <Text
          fontSize={{ base: "md", md: "lg" }}
          textAlign="center"
          color="#565656"
        >
          Hi ! I&apos;m very interesting a Forntend developer
        </Text>
      </Box>
      <Flex>
        <Box pt="20" mr="7" textAlign="center">
          <Heading size="lg" color="#565656" letterSpacing={"tighter"}>
            Siritep Tongduang{" "}
          </Heading>
          <Text color="red.200">Bachelor of Engineering </Text>
        </Box>
        <Box>
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="200px"
            display="inline-block"
            borderRadius="full"
            src="/images/profile.jpg"
            alt="Profile"
          />
        </Box>
      </Flex>
    </Container>
  )
}

export default Intro
