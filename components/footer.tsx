import { Box } from "@chakra-ui/react"

import React from "react"

interface Props {}

const Footer = (props: Props) => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm"  mt="10" p="5" h="100">
      &copy; {new Date().getFullYear()} Siritep Tongduang. All Rights Reserved.
    </Box>
  )
}

export default Footer
