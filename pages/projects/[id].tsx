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
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import NextImg from "next/image"

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

  return {
    props: {
      project,
    },
  }
}

export default ({ project }: Props) => {
  const router = useRouter()
  console.log(project)
  return (
    <Motions>
      <HeadTitle title={`page of ${router.query.id}`}>
        <Box align="center" pt={{ base: "15%", md: "70px" }}>
          <Box p="20px" mx="15%" bgColor="whiteAlpha.700" shadow="xl">
            <Heading>{project[0].name}</Heading>
            <Box maxW={600} my="20px" shadow="lg">
              <NextImg
                src={project[0].pic}
                alt={project[0].name}
                width={1228}
                height={903}
                layout="responsive"
                priority
              />
            </Box>

            <Box mx={{ base: "none", md: "10%" }}>
              <Text textAlign="left">{project[0].description}</Text>
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

            <Text>{`page of ${router.query.id}`}</Text>
          </Box>
        </Box>
      </HeadTitle>
    </Motions>
  )
}
