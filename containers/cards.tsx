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
import {Props} from "../type/projectCardType"

const BoxMotion = motion(LinkBox)
const ImgMotion = motion(Image)


const Cards = ({ project }: Props) => {


  return (
    <>
      {project.map((val) => {
        return (
          <NextLink key={val.id} href={`/projects/${val.id}`} passHref>
            <BoxMotion
              key={val.id}
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
                <LinkOverlay href={`/projects/${val.id}`}>
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
                w="40%" 
              />
            </BoxMotion>
          </NextLink>
        )
      })}

    </>
  )
}

export default Cards
