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
} from "@chakra-ui/react"
import {
  ExternalLinkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons"
import NextImg from "next/image"

import CustomNavPage from "../../containers/customNavPage"
import HeadTitle from "../../containers/layout/headTitle"
import Motions from "../../containers/motions/motions"
import { getData, getDataPage } from "../../function/index"
import { Project, Props } from "../../type/projectType"
import { Params } from "next/dist/server/router"
import path from "path"

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
    <Motions>
      <HeadTitle title={`page of ${router.query.id}`}>
        <Box align="center" pt={{ base: "100px", md: "70px" }}>
          <Box
            p="20px"
            mx={{ base: "15px", md: "15%" }}
            bgColor="whiteAlpha.700"
            shadow="xl"
          >
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
            <Heading>{project[0].name}</Heading>

            <Box maxW={600} my="20px" shadow="lg">
              <NextImg
                src={project[0].pic}
                alt={project[0].name}
                width={1228}
                height={903}
                layout="responsive"
                priority
                placeholder="blur"
                blurDataURL={project[0].pic}
              />
            </Box>

            <Box mx={{ base: "none", md: "10%" }} maxW={650}>
              <Text textAlign="left">{project[0].description}</Text>
              <Text textAlign="left">{`Method : ${project[0].method}`}</Text>

              <List align="left">
                <ListItem>
                  <Link isExternal href={project[0].demo}>
                    Live Demo <ExternalLinkIcon />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link isExternal href={project[0].source}>
                    Source Code <ExternalLinkIcon />
                  </Link>
                </ListItem>
              </List>
            </Box>
            <Box
              mt={{ base: 0, md: 14 }}
              display={{ base: "inline-block", md: "flex" }}
            >
              {/* {project[0].fwork.map((items, key) => {
                return (
                  <Code
                    m={{ base: "4px", md: "7px" }}
                    key={key}
                    fontSize="10px"
                  >
                    {items}
                  </Code>
                )
              })} */}
            </Box>
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
                  <CustomNavPage href={`/projects/${i + 1}`}>
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

              <Text m="10px">{`page of ${router.query.id}`}</Text>
            </Box>
          </Box>
        </Box>
      </HeadTitle>
    </Motions>
  )
}
