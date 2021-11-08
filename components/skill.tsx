import {
  Container,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
  Box,
  AspectRatio,
  useColorModeValue,
} from "@chakra-ui/react"
import Link from "next/link"
import { motion } from "framer-motion"

const BoxMotion = motion(Box)
const ImgMotion = motion(Image)

interface Props {
  skill: {
    lang: {
      name: string
      link: string
      logo: string
    }[]
    fwork: {
      name: string
      link: string
      logo: string
    }[]
  }
}
const Skill = ({ skill }: Props) => {
  const { lang, fwork } = skill
  return (
    <>
      <Box align="center">
        <Container textAlign="left">
          <Heading size="lg" variant="section-title">
            Skill
          </Heading>
        </Container>
        <Box
          textAlign="center"
          bg={useColorModeValue("#D7CEC7", "none")}
          p="5px"
          m="20px"
          borderRadius={20}
          w={{ base: "80%", md: "container.sm" }}
          boxShadow={useColorModeValue("md", "none")}
        >
          <Heading fontSize="md" m="5">
            Programming Language
          </Heading>

          <Wrap p="5" spacing={{ base: "1rem", md: "1rem" }} justify="center">
            {lang.map((items, i) => {
              return (
                <WrapItem key={i}>
                  <Link href={items.link}>
                    <a target="_blank">
                      <BoxMotion
                        w="5rem"
                        h="5rem"
                        p="2"
                        key={i}
                        borderRadius={20}
                        bg="whiteAlpha.600"
                        textAlign="center"
                        style={{ backdropFilter: "blur(10px)" }}
                        boxShadow="lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ImgMotion
                          whileHover={{ rotate: 20 }}
                          h="3rem"
                          w="3rem"
                          display="inline-block"
                          src={items.logo}
                          alt={items.name}
                        />
                        <Text fontSize="small" as="abbr">
                          {items.name}
                        </Text>
                      </BoxMotion>
                    </a>
                  </Link>
                </WrapItem>
              )
            })}
          </Wrap>
        </Box>

        <Box
          textAlign="center"
          bg={useColorModeValue("#D7CEC7", "none")}
          p="5px"
          m="20px"
          borderRadius={20}
          w={{ base: "80%", md: "container.sm" }}
          boxShadow={useColorModeValue("md", "none")}
        >
          <Heading fontSize="md" m="5">
            Framework
          </Heading>

          <Wrap p="5" spacing={{ base: "1rem", md: "1rem" }} justify="center">
            {fwork.map((items, i) => {
              return (
                <WrapItem key={i}>
                  <Link href={items.link}>
                    <a target="_blank">
                      <BoxMotion
                        p="2"
                        key={i}
                        borderRadius={20}
                        w="5rem"
                        h="5rem"
                        bg="whiteAlpha.600"
                        textAlign="center"
                        style={{ backdropFilter: "blur(10px)" }}
                        boxShadow="lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ImgMotion
                          h="3rem"
                          w="3rem"
                          display="inline-block"
                          src={items.logo}
                          alt={items.name}
                          whileHover={{ rotate: 20 }}
                        />
                        <Text fontSize="small" as="abbr">
                          {items.name}
                        </Text>
                      </BoxMotion>
                    </a>
                  </Link>
                </WrapItem>
              )
            })}
          </Wrap>
        </Box>
      </Box>
    </>
  )
}

export default Skill
