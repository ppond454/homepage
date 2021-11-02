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
    
  }
  const Project = (props: Props) => {
  
    return (
      <>
        <Box align="center">
          <Container textAlign="left">
            <Heading as="u" size="lg">
              Project
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
           
          </Box>
        </Box>
      </>
    )
  }
  
  export default Project
  