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
import { Props } from "../type/projectCardType"

import Motions from "../containers/motions/motions"

const BoxMotion = motion(LinkBox)
const ImgMotion = motion(Image)

const Cards = ({ project }: Props) => {
  return (
    <>
      {project.map((val) => {
        return (
          <Motions key={val.id} inView={true}>
            <NextLink href={`/projects/${val.id}`} passHref>
              <BoxMotion
                key={val.id}
                borderWidth="1px"
                cursor="pointer"
                rounded="xl"
                mx={{ base: "7", md: "10" }}
                my={{ base: "2", md: "2" }}
                w={{ base: "xs", md: "xl" }}
                display={{ base: "inline-block", md: "flex" }}
                bg={useColorModeValue("#f8f5f1", "whiteAlpha.50")}
                boxShadow="lg"
                whileHover={{ y: -7 }}
              >
                <Box
                  textAlign={{ base: "center", md: "left" }}
                  justifyContent="space-between"
                  boxSize="xsm"
                  mb={{ base: 2, md: 1 }}
                  height={{ md: 230, base: "auto" }}
                >
                  <ImgMotion
                    display={{ md: "none", base: "inline-block" }}
                    src={val.pic}
                    w="100%"
                    roundedTop="lg"
                    boxShadow="inner"
                    alt={val.name}
                  />
                  <LinkOverlay href={`/projects/${val.id}`}>
                    {/* <Text fontSize="xs">{val.create}</Text> */}
                    <Text
                      fontSize="lg"
                      ml={4}
                      textAlign={{ md: "left", base: "center" }}
                      pt="3"
                    >
                      {val.name}
                    </Text>
                    <Text
                      fontSize="sm"
                      p="3"
                      align={{ base: "center", md: "right" }}
                      mt={{ base: "none", md: "2" }}
                    >
                      {`${val.description.substring(0, 99)}...`}
                    </Text>

                    <Box
                      position="relative"
                      mt={{ base: 0, md: 10 }}
                      display="inline-block"
                      mb="10px"
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
                  w="40%"
                />
              </BoxMotion>
            </NextLink>
          </Motions>
        )
      })}
    </>
  )
}

export default Cards
