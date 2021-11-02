import {
  Container,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
  Box,
  AspectRatio
} from "@chakra-ui/react"
import Link from "next/link"
import { motion } from "framer-motion"

const BoxMotion = motion(Box)

interface Props {
  skill: {
    lang: {
      name:string ,
      link: string,
      logo: string,
    }[],
    fwork: {
      name: string,
      link: string,
      logo: string,
    }[],
  },
}
const Skill = ({ skill }: Props) => {
  const { lang, fwork } = skill
  return (
    <>
      <Box align="center">
        <Container textAlign="left">
          <Heading as="u" size="lg">
            Skill
          </Heading>
        </Container>
        <Box
          textAlign="center"
          bg="#D7CEC7"
          p="5px"
          m="20px"
          borderRadius={20}
          w={{ base: "80%", md: "container.sm" }}
          boxShadow="md"
        >
          <Heading fontSize="md" m="5">
            Programming Language
          </Heading>

          <Wrap p="5" spacing={{ base: "1rem", md: "2rem" }} justify="center">
            {lang.map((items, i) => {
              return (
                <WrapItem key={i}>
                  <Link href={items.link}>
                    <a target="_blank">
                      <BoxMotion
                        p="2"
                        key={i}
                        borderRadius={20}
                        boxSize={{ base: "90px", md: "100px" }}
                        bg="whiteAlpha.600"
                        textAlign="center"
                        style={{ backdropFilter: "blur(10px)" }}
                        boxShadow="lg"
                        // drag="x"
                        // dragConstraints={{ left: -100, right: 100 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Box>
                          <Image
                            display="inline-block"
                            src={items.logo}
                            alt={items.name}
                          />
                          {/* <Text fontSize="14px">{items.name}</Text> */}
                        </Box>
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
          bg="#D7CEC7"
          p="5px"
          m="20px"
          borderRadius={20}
          w={{ base: "80%", md: "container.sm" }}
          boxShadow="md"
        >
          <Heading fontSize="md" m="5">
            Framework
          </Heading>

          <Wrap p="5" spacing={{ base: "1rem", md: "2rem" }} justify="center">
            {fwork.map((items, i) => {
              return (
                <WrapItem key={i}>
                  <Link href={items.link}>
                    <a target="_blank">
                      <BoxMotion
                        p="2"
                        key={i}
                        borderRadius={20}
                        boxSize={{ base: "90px", md: "100px" }}
                        bg="whiteAlpha.600"
                        textAlign="center"
                        style={{ backdropFilter: "blur(10px)" }}
                        boxShadow="lg"
                        
                        // drag="x"
                        // dragConstraints={{ left: -100, right: 100 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Box  >
                          <Image
                            display="inline-block"
                            src={items.logo}
                            alt={items.name}
                          />
                          {/* <Text fontSize="14px">{items.name}</Text> */}
                        </Box>
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
