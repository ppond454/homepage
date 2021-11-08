import React from "react"
import {
  Container,
  Heading,
  Box,
  Text,
  Wrap,
  WrapItem,
  HStack,
  Skeleton,
  Flex,
  LinkBox,
  LinkOverlay,
  VStack,
  Grid,
  GridItem,
  Link,
  Spacer,
  Image,
  useColorModeValue,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { motion } from "framer-motion"



interface Props {}

const BoxMotion = motion(LinkBox)


const Cards = (props: Props) => {
  return (
    <NextLink href={`/projects/1`} passHref>
      <BoxMotion
        p="5"
        borderWidth="1px"
        cursor="pointer"
        rounded="xl"
        m="8"
        w={{ base: "md", md: "lg" }}
        display="flex"
        bg={useColorModeValue("whiteAlpha.800", "blackAlpha.600")}
        boxShadow="lg"
        whileHover={{ scale: 1.04}}
      >
        <Box textAlign="left">
          <LinkOverlay href={`/projects/1`}>
            <Text fontSize="xl">ThaiTracking-19</Text>

            <Text fontSize="sm">Bachelor of Engineering</Text>
          </LinkOverlay>
        </Box>
        <Spacer />
        <Box>
          <Image
            src="/images/project1.png"
            w="250px"
            rounded="md"
            boxShadow="inner"
          />
        </Box>
      </BoxMotion>
    </NextLink>
  )
}

export default Cards
