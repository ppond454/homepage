import { Text, Box, Heading, Center } from "@chakra-ui/react"

import React from "react"

interface Props {}

const Footer = (props: Props) => {
  return (
    <Box p={20}>
      <Box bg="black" h="300">
        <Heading size="md" ml="10">
          Bio
        </Heading>
      </Box>
    </Box>
  )
}

export default Footer
