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
  Code,
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
const ImgMotion = motion(Image)

const Cards = ({ project }: Props) => {
  return (
    <>
      {project.map((val, i) => {
        i = +1
        return (
          <NextLink href={`/projects/${i}`} passHref>
            <BoxMotion
              key={i}
              borderWidth="1px"
              cursor="pointer"
              rounded="xl"
              m={{ base: "7", md: "10" }}
              w={{ base: "xs", md: "xl" }}
              display={{ base: "inline-block", md: "flex" }}
              bg={useColorModeValue("#f8f5f1", "whiteAlpha.50")}
              boxShadow="lg"
              whileHover={{ y: -7 }}
            >
              <Box
                key={i}
                textAlign={{ base: "center", md: "left" }}
                boxSize="xsm"
                mb={{ base: 2, md: 1 }}
              >
                <ImgMotion
                  display={{ md: "none", base: "inline-block" }}
                  src={val.pic}
                  w="100%"
                  roundedTop="lg"
                  boxShadow="inner"
                  alt={val.name}
                />
                <LinkOverlay href={`/projects/${i}`}>
                  {/* <Text fontSize="xs">{val.create}</Text> */}
                  <Text fontSize="lg" ml={4} textAlign={{md:"left" , base:"center"}} pt="3">
                    {val.name}
                  </Text>
                  <Text
                    fontSize="sm"
                    p="3"
                    align={{ base: "center", md: "right" }}
                    mt={{ base: "none", md: "2" }}
                  >
                    {val.description}
                  </Text>

                  <Box
                    mt={{ base: 0, md: 14 }}
                    display={{ base: "inline-block", md: "flex" }}
                  >
                    {val.fwork.map((items, key) => {
                      return (
                        <Code
                          m={{ base: "4px", md: "7px" }}
                          key={key}
                          fontSize="10px"
                        >
                          {items}
                        </Code>
                      )
                    })}
                  </Box>
                </LinkOverlay>
              </Box>

              <ImgMotion
                alt={val.name}
                display={{ base: "none", md: "flex" }}
                src={val.pic}
                roundedRight="md"
                boxShadow="inner"
                w="50%"
              />
            </BoxMotion>
          </NextLink>
        )
      })}
    </>
  )
}

export default Cards
