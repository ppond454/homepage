import { useRouter } from "next/router"
import { GetStaticPaths, GetStaticProps, GetServerSideProps } from "next"
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
  Center,
} from "@chakra-ui/react"
import {
  ExternalLinkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons"
import NextImg from "next/image"
import NextLink from "next/link"
import moment from "moment"

import HeadTitle from "../../containers/layout/headTitle"
import Motions from "../../containers/motions/motions"
import { getData, getDataPage } from "../../function/index"
import { Project, Props } from "../../type/projectType"
import { Params } from "next/dist/server/router"
import CustomNavPage from "../../containers/customNavPage"

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
  const _project: Project[] = await getDataPage(params!.id)
  const data = await getData()
  const count = Number(data.length)

  return {
    props: {
      project: _project[0],
      count,
    },
  }
}

export default ({ project, count }: Props) => {
  const router = useRouter()
  let date: Date = new Date(project.create._seconds * 1000)

  return (
    <HeadTitle title={`page of ${router.query.id}`}>
      <Motions inView={true}>
        <Center pt={{ base: "100px", md: "70px" }}>
          <Box
            p="20px"
            mx={{ base: "15px", md: "15%" }}
            bg={useColorModeValue("#f8f5f1", "whiteAlpha.50")}
            shadow="xl"
            borderRadius={10}
          >
            <Flex
              align="center"
              mb="20px"
              mx={{ base: "none", md: "10%" }}
              maxW={650}
            >
              <Avatar mr="6px" name="profile" src="/images/profile.jpg" />

              <Box alignItems="left">
                <Heading fontSize="md">Siritep Tongdoung</Heading>
                <Text ml="5px" fontSize="12px">
                  {moment(date).format("ll")}
                </Text>
              </Box>
            </Flex>

            <Heading textAlign="center">{project.name}</Heading>

            <Box>
              <NextImg
                src={`${project.pic}`}
                alt={project.name}
                width={1200}
                height={900}
                layout="responsive"
                placeholder="blur"
                blurDataURL={`${project.pic}`}
                quality={100}
                loading="lazy"
              />
            </Box>

            <Box textAlign="left" mx={{ base: "none", md: "5%" }} maxW={650}>
              <Heading fontSize="2xl" as="u">
                Information
              </Heading>

              <Text my="2">{`${project.description}`}</Text>

              <Text my="2">{`${project.method}`}</Text>

              <List alignItems="left">
                <ListItem>
                  <Link isExternal href={project.demo}>
                    Live Demo <ExternalLinkIcon />
                  </Link>
                </ListItem>
                {project.source.map((val, i) => {
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
            </Box>

            <Wrap
              justify="center"
              w="50"
              my={4} 
              spacing="6px"
            >
              {project.fwork.map((items, key) => {
                return (
                  <WrapItem key={key}>
                    <Code m={{ base: "4px", md: "7px" }} fontSize="12px">
                      {items}
                    </Code>
                  </WrapItem>
                )
              })}
            </Wrap>

            <Center display="flex">
              <Box>
                {Number(router.query.id) !== 1 && (
                  <Button
                    zIndex={0}
                    position="relative"
                    onClick={() => {
                      router.push(`/projects/${Number(router.query.id) - 1}`)
                    }}
                  >
                    <ChevronLeftIcon />
                  </Button>
                )}
                {[...Array(count)].map((val, i) => {
                  return (
                    <CustomNavPage key={i} href={`/projects/${i + 1}`}>
                      {i + 1}
                    </CustomNavPage>
                  )
                })}
                {count !== Number(router.query.id) && (
                  <Button
                    zIndex={0}
                    position="relative"
                    onClick={() => {
                      router.push(`/projects/${Number(router.query.id) + 1}`)
                    }}
                  >
                    <ChevronRightIcon />
                  </Button>
                )}

                <Text
                  m="10px"
                  textAlign="center"
                >{`page of ${router.query.id}`}</Text>
              </Box>
            </Center>
          </Box>
        </Center>
      </Motions>
    </HeadTitle>
  )
}
