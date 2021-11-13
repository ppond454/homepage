import router, { useRouter } from "next/router"
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

interface Props {}

export default (props: Props) => {
  const router = useRouter()
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
