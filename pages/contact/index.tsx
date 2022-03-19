import {
  Heading,
  Box,
  Textarea,
  Input,
  Flex,
  Container,
  Button,
  FormControl,
  AlertDescription,
  CloseButton,
  Spinner,
  FormLabel,
  Code,
  CodeProps,
  BoxProps,
  Spacer,
} from "@chakra-ui/react"
import { WarningIcon, CheckCircleIcon } from "@chakra-ui/icons"
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { motion } from "framer-motion"

import "react-toastify/dist/ReactToastify.css"
import HeadTitle from "../../containers/layout/headTitle"
import Motions from "../../containers/motions/motions"
import Form from "../../components/form"

interface Props {}

export const Index = (props: Props) => {
  return (
    <HeadTitle title="Contact">
      <Motions duratime={1}>
        <Form />
      </Motions>
    </HeadTitle>
  )
}

export default Index
