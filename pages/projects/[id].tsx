import { useRouter } from "next/router"
import { GetStaticPaths, GetStaticProps } from "next"
import {
  Container,
  Heading,
  Link,
  Box,
  Text,
  Wrap,
  WrapItem,
  HStack,
  Skeleton,
  Flex,
  LinkBox,
  LinkOverlay,
  useQuery,
  Image,
  List,
  ListItem,
  Code,
  Button,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react"
import { ExternalLinkIcon, ChevronLeftIcon } from "@chakra-ui/icons"
import NextImg from "next/image"
import NextLink from "next/link"
import HeadTitle from "../../containers/layout/headTitle"
import Motions from "../../containers/motions/motions"
import { getData, getDataPage } from "../../function/index"
import { Project, Props } from "../../type/projectType"
import { Params } from "next/dist/server/router"

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const project: Project[] = await getData()

  const paths = project.map((val) => ({
    params: {
      id: val.id.toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const project: Project[] = await getDataPage(params!.id)
  const data = await getData()
  const count = Number(data.length)

  return {
    props: {
      project,
      count,
    },
  }
}

export default ({ project, count }: Props) => {
  const router = useRouter()

  return (
    <HeadTitle title={`page of ${router.query.id}`}>
      <Box align="center" pt={{ base: "100px", md: "70px" }}>
        <Box
          p="20px"
          mx={{ base: "15px", md: "15%" }}
          bg={useColorModeValue("#f8f5f1", "whiteAlpha.50")}
          shadow="xl"
          borderRadius={10}
        >
          <Motions duratime={1}>
            <Flex
              align="center"
              mb="20px"
              mx={{ base: "none", md: "10%" }}
              maxW={650}
            >
              <Avatar mr="6px" name="profile" src="/images/profile.jpg" />

              <Box align="left">
                <Heading fontSize="md">Siritep Tongdoung</Heading>
                <Text fontSize="14px">21 Feb</Text>
              </Box>
            </Flex>
          </Motions>
          <Motions duratime={1.3}>
            <Heading>{project[0].name}</Heading>

            <Box maxW={600} my="20px" shadow="lg">
              <NextImg
                src={`${project[0].pic}`}
                alt={project[0].name}
                width={1228}
                height={903}
                layout="responsive"
                placeholder="blur"
                blurDataURL={`${project[0].pic}`}
              />
            </Box>
          </Motions>

          <Box textAlign="left" mx={{ base: "none", md: "10%" }} maxW={650}>
            <Motions duratime={1.6}>
              <Heading fontSize="2xl" as="u">
                Information
              </Heading>

              <Text my="2">{`${project[0].description}`}</Text>
            </Motions>
            <Motions duratime={1.6}>
              <Heading fontSize="2xl" as="u">
                Method
              </Heading>
              <Text my="2">{`${project[0].method}`}</Text>
            </Motions>
            <Motions duratime={1.9}>
              <List align="left">
                <ListItem>
                  <Link isExternal href={project[0].demo}>
                    Live Demo <ExternalLinkIcon />
                  </Link>
                </ListItem>
                {project[0].source.map((val, i) => {
                  return (
                    <ListItem key={i}>
                      <Link isExternal key={i} href={val as string}>
                        {i === 0 ? "Frontend" : "Backend"} Source Code{" "}
                        <ExternalLinkIcon />
                      </Link>
                    </ListItem>
                  )
                })}
              </List>
            </Motions>
          </Box>
          <Motions duratime={2.2}>
            <Box my={4} display="inline-block">
              {project[0].fwork.map((items, key) => {
                return (
                  <Code
                    m={{ base: "4px", md: "7px" }}
                    key={key}
                    fontSize="12px"
                  >
                    {items}
                  </Code>
                )
              })}
            </Box>
          </Motions>

          <Box display="flex">
            <NextLink passHref href="/#project-sec">
              <Button as="a" variant="solid" colorScheme="teal">
                <ChevronLeftIcon />
                Go Back
              </Button>
            </NextLink>
          </Box>
        </Box>
      </Box>
    </HeadTitle>
  )
}
