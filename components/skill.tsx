import {
  Container,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
  Box,
  Link,
  useColorModeValue,
} from "@chakra-ui/react"
import { motion } from "framer-motion"

const BoxMotion = motion(Link)
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
  // const [rotate, setRotate] = useState<boolean>(false)
  // console.log(rotate)

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
                  <BoxMotion
                    href={items.link}
                    isExternal
                    w="5rem"
                    h="5rem"
                    p="2"
                    key={i}
                    borderRadius={20}
                    bg="whiteAlpha.600"
                    textAlign="center"
                    style={{
                      backdropFilter: "blur(10px)",
                      textDecoration: "none",
                    }}
                    boxShadow="lg"
                    whileHover={{ scale: 1.1, y: -7 }}
                    whileTap={{ scale: 0.9 }}
                    // onMouseOver={() => setRotate(true)}
                  >
                    <ImgMotion src={items.logo} alt={items.name} />
                  </BoxMotion>
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
                  <BoxMotion
                    href={items.link}
                    isExternal
                    w="5rem"
                    h="5rem"
                    p="2"
                    key={i}
                    borderRadius={20}
                    bg="whiteAlpha.600"
                    textAlign="center"
                    style={{
                      backdropFilter: "blur(10px)",
                      textDecoration: "none",
                    }}
                    boxShadow="lg"
                    whileHover={{ scale: 1.1, y: -7 }}
                    whileTap={{ scale: 0.9 }}
                    // onMouseOver={() => setRotate(true)}
                  >
                    <Box>
                      <ImgMotion src={items.logo} alt={items.name} />
                    </Box>
                  </BoxMotion>
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
