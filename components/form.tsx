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
import { motion } from "framer-motion"
import { WarningIcon, CheckCircleIcon } from "@chakra-ui/icons"
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import Reaptcha from "reaptcha"

import { sentEmail } from "../function/index"
import { validatedEmail } from "../function/index"

const MotionBox = motion<BoxProps>(Box)

const Form = () => {
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
  const [verifyCap, setVerifyCap] = useState(true)

  // console.log("out fucn :", validateEmail)
  // console.log(validateEmail)
  // console.log(validateName)
  // console.log(validateMsg)

  const onVerify = () => {
    return setVerifyCap(false)
  }
  const onExpire = () => {
    return setVerifyCap(true)
  }

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

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    if (e.target.value === "")
      setValidName({ error: true, msg: "Name is required" })
    else setValidName({ error: false, msg: "is valid" })
    if (e.target.value.length >= 20)
      setValidName({ error: true, msg: "Name must be lower 20 charecters" })
  }

  const onChangeMsg = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMsg(e.target.value)
    // console.log(e.target.value.length)

    if (e.target.value === "")
      setValidMsg({ error: true, msg: "Message is required" })
    else setValidMsg({ error: false, msg: "is valid" })
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
      sentEmail(email, name, msg)
      toast("your message has been sent ✅")
      handleReset()
    }

    setLoad(false)
  }

  const handleReset = () => {
    setEmail("")
    setMsg("")
    setName("")
    setValidEmail({ msg: "", error: false })
    setValidMsg({ msg: "", error: false })
    setValidName({ msg: "", error: false })
  }

  return (
    <>
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
            {validateName.msg && !validateName.error && (
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
                <CheckCircleIcon m="2px" /> {validateName.msg}
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
              onChange={onChangeName}
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
            {validateName.msg && !validateName.error && (
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
                <CheckCircleIcon m="2px" /> {validateName.msg}
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
            isDisabled={verifyCap}
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
        <Reaptcha
          onExpire={onExpire}
          onVerify={onVerify}
          sitekey={process.env.NEXT_PUBLIC_KEY_CAP as string}
        />
      </Container>
      <ToastContainer />
    </>
  )
}

export default Form
