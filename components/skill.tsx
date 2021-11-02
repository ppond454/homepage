import {
  Container,
  Heading,
  Box,
  Text,
  Wrap,
  WrapItem,
  HStack,
} from "@chakra-ui/react"

interface Props {
  skill: {
    lang: string[]
    fwork: string[]
  }
}
const Skill = ({ skill }: Props) => {

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
        >
          <Heading fontSize="md" m="5">
            Programming Language
          </Heading>

          <Wrap p="5" spacing={{ base: "1rem", md: "2rem" }} justify="center">
            {skill.lang.map((val, i) => {
              return (
                <WrapItem key={i}>
                  <Box
                    p="2"
                    key={i}
                    borderRadius={20}
                    boxSize={{base:"90px" , md:"100px"}}
                    bg="whiteAlpha.600"
                    textAlign="center"
                    style={{ backdropFilter: "blur(10px)" }}
                  >
                    <Text>{val}</Text>
                  </Box>
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
        >
          <Heading fontSize="md" m="5">
            Framework
          </Heading>

          <Wrap p="5" spacing={{ base: "1rem", md: "2rem" }} justify="center">
            {skill.fwork.map((val, i) => {
              return (
                <WrapItem key={i}>
                  <Box
                    p="2"
                    key={i}
                    borderRadius={20}
                    boxSize={{base:"90px" , md:"100px"}}
                    bg="whiteAlpha.600"
                    textAlign="center"
                    style={{ backdropFilter: "blur(10px)" }}
                  >
                    <Text>{val}</Text>
                  </Box>
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
