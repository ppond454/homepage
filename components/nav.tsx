import React from "react"
import NextLink from "next/link"
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
} from "@chakra-ui/react"
import { ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons"

import "@fontsource/raleway/400.css"
import "@fontsource/open-sans/700.css"

interface Props {}

const nav = (props: Props) => {
  return (
    <Flex
      position="fixed"
      as="nav"
      w="100%"
      bg="whiteAlpha.500"
      zIndex={1}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Container
        p={3}
        display="flex"
        maxW="container.md"
        wrap="warp"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <NextLink href="/">
            <a>
              <Heading
                as="h1"
                size="md"
                letterSpacing={"tighter"}
                color="#565656"
              >
                Siritep Tongduang
              </Heading>
            </a>
          </NextLink>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <Link isExternal href="https://github.com/ppond454" borderRadius={5}>
            Github
            <ExternalLinkIcon />
          </Link>
        </Stack>

        <Box flex={1} align="right">
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={Link} href="https://github.com/">
                  Github
                  <ExternalLinkIcon />
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Flex>
  )
}

export default nav
