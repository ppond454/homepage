import { Image, Text, Box, Heading, Container, Flex,useColorModeValue } from "@chakra-ui/react"



import React from "react"


interface Props {}

const Intro = (props: Props) => {
  return (
    <Container pt="20" >
      <Box 
     bg={useColorModeValue("#D7CEC6" , "whiteAlpha.200")}
      borderRadius={20} 
      p="3" 
      mb="5" 
      boxShadow="md"
       >
        <Text
          fontSize={{ base: "md", md: "lg" }}
          textAlign="center"
          // color="#565656"
        >
          Hi ! I&apos;m very interesting a Frontend developer
        </Text>
      </Box>
      <Flex>
        <Box pt="20" mr="7" textAlign="center">
          <Heading size="lg" 
          // color="#565656" 
          letterSpacing={"tighter"}>
            Siritep Tongduang
          </Heading>
          <Text color="red.200">Bachelor of Engineering </Text>
        </Box>
        <Box >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth={{ base:"150px" , md: "200px"}}
            display="inline-block"
            borderRadius="full"
            src="/images/profile.avif"
            alt="Profile"
          />
        </Box>
      </Flex>
    </Container>
  )
}

export default Intro
