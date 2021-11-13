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

interface Props {
  project: {
    name: string
    description: string
    fwork: string[]
    create: string
    source: string
    demo: string
    pic: string
  }[]
}

const BoxMotion = motion(LinkBox)

const Cards = ({ project }: Props) => {
  return (
    <>
      {project.map((val, i) => {
        i = +1
        return (
          <NextLink href={`/projects/${i}`} passHref>
            <BoxMotion
              key={i}
              p={{ base: "none", md: "5" }}
              borderWidth="1px"
              cursor="pointer"
              rounded="xl"
              m={{ base: "3", md: "5" }}
              w={{ base: "auto", md: "lg" }}
              display={{ base: "inline-block", md: "flex" }}
              bg={useColorModeValue("whiteAlpha.800", "blackAlpha.600")}
              boxShadow="lg"
              whileHover={{ scale: 1.04 }}
            >
              <Box textAlign={{ base: "center", md: "left" }}>
                <Image
                  display={{ md: "none", base: "grid" }}
                  src={val.pic}
                  w="240px"
                  roundedTop="lg"
                  boxShadow="inner"
                />
                <LinkOverlay href={`/projects/${i}`}>
                  <Text fontSize="xl" pt="2">
                    {val.name}
                  </Text>
                  <Text fontSize="sm">{val.description}</Text>
                </LinkOverlay>
              
                  {val.fwork.map((val) => {val} )}
         
              </Box>
              <Spacer />
              <Box>
                <Image
                  display={{ base: "none", md: "flex" }}
                  src={val.pic}
                  w="250px"
                  rounded="md"
                  boxShadow="inner"
                />
              </Box>
            </BoxMotion>
          </NextLink>
        )
      })}
    </>
  )
}

export default Cards
