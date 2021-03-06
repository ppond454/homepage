import React from "react"
import NextLink from "next/link"
import ItemLink from "../containers/customLink"
import {
  Heading,
  Flex,
  Text,
  Container,
  Link,
  Stack,
  Box,
  Menu,
  MenuButton,
  IconButton,
  MenuItem,
  MenuList,
  useColorModeValue,
  Spacer
} from "@chakra-ui/react"
import { ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons"
import Toggle from "../containers/toggle"
import { motion } from "framer-motion"

const BoxMotion = motion(Box)

interface Props {}

const nav = (props: Props) => {
  const colorNav: string = useColorModeValue("whiteAlpha.500", "blackAlpha.200")

  return (
    <BoxMotion
      position="fixed"
      as="nav"
      w="100%"
      bg={colorNav}
      zIndex={1}
      style={{ backdropFilter: "blur(10px)" }}
      boxShadow="base"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, type: "easeInOut" }}
    >
      <Container
        p={{ base: "3", md: "0" }}
        display="flex"
        maxW="container.md"
        flexWrap="wrap"
        alignSelf="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <NextLink href="/">
            <a>
              <Heading
                as="h1"
                size="md"
                letterSpacing={"tighter"}
                // color="#565656"
              >
                Siritep Tongdaung
              </Heading>
            </a>
          </NextLink>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          align="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
          spacing="4"
        >
          
          <ItemLink href="/contact">Contact</ItemLink>
          <Link isExternal href="https://github.com/ppond454" borderRadius={5}>
            Github
            <ExternalLinkIcon />
          </Link>


        </Stack>
        {/* <Spacer  /> */}

        <Box display="inline-flex"  alignSelf="right" >
          <Toggle />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/contact">
                  <MenuItem as={Link}>Contact</MenuItem>
                </NextLink>
                <MenuItem as={Link} href="https://github.com/ppond.454">
                  Github
                  <ExternalLinkIcon />
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </BoxMotion>
  )
}

export default nav
