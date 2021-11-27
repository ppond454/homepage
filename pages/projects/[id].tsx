import { useRouter } from "next/router"
import { GetStaticPaths, GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
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
  Image,
} from "@chakra-ui/react"
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
        <Box align="center">
          <Heading pt="20" textAlign="center">
            projects
          </Heading>

          <Text>{`page of ${router.query.id}`}</Text>
        </Box>
      </HeadTitle>
    </Motions>
  )
}
