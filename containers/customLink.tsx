import React, { ReactNode } from "react"
import NextLink, { LinkProps } from "next/link"
import { Link, useColorModeValue } from "@chakra-ui/react"
import { useRouter } from "next/router"

interface Props extends LinkProps {
  children: ReactNode
  href: string
}

const CustomLink = ({ href, children, ...props }: Props) => {
  const { asPath } = useRouter()
  const color = useColorModeValue("blackAlpha.300" , "whiteAlpha.300")
  const active = href == asPath


  return (
    <NextLink href={href} passHref>
      <Link
        borderRadius={2}
        p={3}
        bg={active ? color : undefined}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export default CustomLink
