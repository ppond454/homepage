import React, { ReactNode } from "react"
import NextLink, { LinkProps } from "next/link"
import { Box, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react"
import { useRouter } from "next/router"

interface Props extends LinkProps {
  children: ReactNode
  href: string
}

const CustomNavPage = ({ href, children, ...props }: Props) => {
  const { asPath } = useRouter()
  const color = useColorModeValue("blackAlpha.300", "whiteAlpha.300")
  const active = href == asPath

  return (
    <Box alignContent="center" d="inline-flex">
      {!active ? 
        <NextLink href={href} passHref>
          <Link p="6px" color={active ? color : undefined}>
            {children}
          </Link>
        </NextLink>
        :
        <Text p="6px" color={active ? color : undefined} >{children}</Text>
      }
    </Box>
  )
}

export default CustomNavPage
