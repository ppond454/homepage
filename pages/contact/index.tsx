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
import { ChangeEvent, FormEvent, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { motion } from "framer-motion"

import "react-toastify/dist/ReactToastify.css"
import HeadTitle from "../../containers/layout/headTitle"
import Motions from "../../containers/motions/motions"
import { validatedEmail } from "../../function/index"

interface Props {}

interface IFormInput {
  name: string
  email: string
  msg: string
}

const MotionBox = motion<BoxProps>(Box)

export const Index = (props: Props) => {
  const [validateName, setValidName] = useState({
    msg: "" as string,
    error: false as boolean,
  })
  const [validateEmail, setValidEmail] = useState({
    msg: "" as string,
    error: false as boolean,
  })
  const [validateMsg, setValidMsg] = useState({
    msg: "" as string,
    error: false as boolean,
  })

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [msg, setMsg] = useState<string>("")
  const [load, setLoad] = useState<boolean>(false)

  // console.log("out fucn :", validateEmail)
  // console.log(validateEmail)
  // console.log(validateName)
  // console.log(validateMsg)

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    const re = validatedEmail(e.target.value)
    console.log(re)

    if (e.target.value === "")
      setValidEmail({
        msg: "Email is required",
        error: true,
      })
    if (re && e.target.value !== "")
      setValidEmail({
        msg: "Email does not exist",
        error: true,
      })
    if (!re && e.target.value !== "")
      setValidEmail({
        msg: "your email syntax is correct",
        error: false,
      })
  }

  const onChangeMsg = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMsg(e.target.value)
    // console.log(e.target.value.length)

    if (e.target.value === "")
      setValidMsg({ error: true, msg: "Message is required" })
    else setValidMsg({ error: false, msg: "good" })
  }

  const handleSubmit = () => {
    setLoad(true)
    if (name === "")
      setValidName({
        error: true,
        msg: "Name is required",
      })
    if (email === "")
      setValidEmail({
        msg: "Email is required",
        error: true,
      })
    if (msg === "")
      setValidMsg({
        error: true,
        msg: "Message is required",
      })

    const re = validatedEmail(email)

    if (re && email !== "")
      setValidEmail({
        error: true,
        msg: "Email does not exist",
      })

    if (name && email && msg && !re) {
      console.log(name, email, msg)
      toast("your message has been sent ✅")
      setEmail("")
      setMsg("")
      setName("")
    }

    setLoad(false)
  }

  const handleReset = () => {
    setEmail("")
    setMsg("")
    setName("")
  }

  return (
    <HeadTitle title="Contact">
      <Motions>
        <Heading pt="20" pb="10" textAlign="center">
          Contact
        </Heading>
        <Container w="80%" mb="200" mx="auto">
          <FormControl isRequired>
            <Box display="flex">
              <FormLabel htmlFor="name">Name</FormLabel>
              <Spacer />
              {validateName.msg && validateName.error && (
                <MotionBox
                  bgColor="red.100"
                  p="5px"
                  fontSize="14px"
                  rounded="xl"
                  display={{ base: "flex", md: "none" }}
                  ml="20px"
                  initial={{ rotateX: 180, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  color="red.300"
                >
                  <WarningIcon m="2px" /> {validateName.msg}
                </MotionBox>
              )}
            </Box>

            <Box>
              <Input
                resize="none"
                w={{ md: "250px", base: "100%" }}
                placeholder="Siritep Tongdoung"
                mb="5"
                type="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  if (e.target.value === "")
                    setValidName({ error: true, msg: "Name is required" })
                  else setValidName({ error: false, msg: "" })
                }}
                isInvalid={validateName.error}
              />
              {validateName.msg && validateName.error && (
                <MotionBox
                  bgColor="red.100"
                  p="5px"
                  fontSize="14px"
                  rounded="xl"
                  ml="20px"
                  color="red.300"
                  display={{ base: "none", md: "inline-flex" }}
                  initial={{ rotateX: 180, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                >
                  <WarningIcon m="2px" /> {validateName.msg}
                </MotionBox>
              )}
            </Box>

            <Box display="flex">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Spacer />
              {validateEmail.msg && validateEmail.error && (
                <MotionBox
                  bgColor="red.100"
                  p="5px"
                  fontSize="14px"
                  rounded="xl"
                  display={{ base: "flex", md: "none" }}
                  ml="20px"
                  initial={{ rotateX: 180, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  color="red.300"
                >
                  <WarningIcon m="2px" /> {validateEmail.msg}
                </MotionBox>
              )}
              {validateEmail.msg && !validateEmail.error && (
                <MotionBox
                  bgColor="green.100"
                  p="5px"
                  fontSize="14px"
                  rounded="xl"
                  ml="20px"
                  color="green.400"
                  display={{ base: "flex", md: "none" }}
                  initial={{ rotateX: 180, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                >
                  <CheckCircleIcon m="3px" />
                  {validateEmail.msg}
                </MotionBox>
              )}
            </Box>
            <Box>
              <Input
                resize="none"
                w={{ md: "250px", base: "100%" }}
                mb="5"
                placeholder="example.123@email.com"
                type="email"
                value={email}
                onChange={onChangeEmail}
                isInvalid={validateEmail.error}
              />

              {validateEmail.msg && validateEmail.error && (
                <MotionBox
                  bgColor="red.100"
                  p="5px"
                  fontSize="14px"
                  rounded="xl"
                  ml="20px"
                  color="red.300"
                  display={{ base: "none", md: "inline-flex" }}
                  initial={{ rotateX: 180, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                >
                  <WarningIcon m="2px" />
                  {validateEmail.msg}
                </MotionBox>
              )}
              {validateEmail.msg && !validateEmail.error && (
                <MotionBox
                  bgColor="green.100"
                  p="5px"
                  fontSize="14px"
                  rounded="xl"
                  ml="20px"
                  color="green.400"
                  display={{ base: "none", md: "inline-flex" }}
                  initial={{ rotateX: 180, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                >
                  <CheckCircleIcon m="3px" />
                  {validateEmail.msg}
                </MotionBox>
              )}
            </Box>

            <FormLabel htmlFor="Message">Message</FormLabel>

            <Box>
              <Textarea
                h="230px"
                placeholder="Text there"
                value={msg}
                onChange={onChangeMsg}
                isInvalid={validateMsg.error}
              />
              {validateMsg.msg && validateMsg.error && (
                <MotionBox
                  bgColor="red.100"
                  p="5px"
                  fontSize="14px"
                  rounded="xl"
                  display="flex"
                  color="red.300"
                  w="10rem"
                  justifyContent="center"
                  initial={{ rotateX: 180, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                >
                  <WarningIcon m="2px" />
                  {validateMsg.msg}
                </MotionBox>
              )}
              {validateMsg.msg && !validateMsg.error && (
                <MotionBox
                  bgColor="green.100"
                  p="5px"
                  fontSize="14px"
                  rounded="xl"
                  display="flex"
                  color="green.400"
                  w="10rem"
                  justifyContent="center"
                  initial={{ rotateX: 180, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                >
                  <CheckCircleIcon m="3px" />
                  {validateMsg.msg}
                </MotionBox>
              )}
              {!validateMsg.msg && !validateMsg.error && <Box h="31" />}
            </Box>
            <Button
              mt="6"
              mr="3"
              mb="10"
              isLoading={load}
              onClick={handleSubmit}
              bgColor="teal.300"
              _hover={{
                bgColor: "teal.100",
              }}
            >
              Send
            </Button>
            <Button
              mt="6"
              mb="10"
              onClick={handleReset}
              bgColor="red.300"
              _hover={{
                bgColor: "red.200",
              }}
            >
              Reset
            </Button>
          </FormControl>
        </Container>
        <ToastContainer />
      </Motions>
    </HeadTitle>
  )
}

export default Index
