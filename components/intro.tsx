import { useInView } from "react-intersection-observer"
import LinkNext from "next/link"
import {
  Image,
  Text,
  Box,
  Heading,
  Container,
  Flex,
  useColorModeValue,
  Link,
  Center,
} from "@chakra-ui/react"
import { ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons"
import React from "react"

import Motions from "../containers/motions/motions"

interface Props {}

const Intro = (props: Props) => {
  let IntroEl = React.useRef<Element>(null)
  const [ref, inView] = useInView({
    threshold: 0.8,
  })

  return (
    <Motions inView={inView}>
      <Container pt="20" ref={ref}>
        <Box
          bg={useColorModeValue("#D7CEC6", "whiteAlpha.200")}
          borderRadius={20}
          p="3"
          mb="5"
          boxShadow="md"
        >
          <Text
            fontSize={{ base: "md", md: "lg" }}
            textAlign="center"
            // color="#565656"
            mb="7px"
          >
            Hi ! I&apos;m very interested in Web developer
          </Text>

          <Center fontSize="12px" as="em" >
            <Text >
              Click on the Link to see my&nbsp;
            </Text>
            <LinkNext href="/api/resume" passHref>
              <Link _hover={{opacity:"20%" }} mr="5px" target="_blank" href="/api/resume" style={{textDecoration: "underline"}}>
                Resume
                <ExternalLinkIcon />
              </Link>
            </LinkNext>
          </Center>
        </Box>
        <Flex>
          <Box pt="20" mr="7" textAlign="center">
            <Heading
              size="lg"
              // color="#565656"
              letterSpacing={"tighter"}
            >
              Siritep Tongdaung
            </Heading>
            <Text color="red.200">Bachelor of Engineering </Text>
          </Box>
          <Box>
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth={{ base: "150px", md: "200px" }}
              display="inline-block"
              borderRadius="full"
              src="/images/profile.jpg"
              alt="Profile"
            />
          </Box>
        </Flex>
      </Container>
    </Motions>
  )
}

export default Intro
