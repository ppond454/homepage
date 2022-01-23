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
} from "@chakra-ui/react"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { motion } from "framer-motion"

import "react-toastify/dist/ReactToastify.css"
import HeadTitle from "../../containers/layout/headTitle"
import Motions from "../../containers/motions/motions"

interface Props {}

interface IFormInput {
  name: string
  email: string
  msg: string
}

export const MotionCode = motion<CodeProps>(Code)

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

  console.log("out fucn :", validateEmail)
  console.log(validateEmail)
  console.log(validateName)
  console.log(validateMsg)

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

    const re = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )

    if (re === null && email !== "")
      setValidEmail({
        error: true,
        msg: "Email does not exist",
      })

    if (name && email && msg && re !== null) {
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
            <FormLabel htmlFor="name">Name</FormLabel>
            <Box>
              <Input
                resize="none"
                w="250px"
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
                <MotionCode
                  ml="20px"
                  display={{ base: "none", md: "inline-flex" }}
                  colorScheme="red"
                  initial={{ rotateX: 180, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                >
                  ❌ {validateName.msg}
                </MotionCode>
              )}
            </Box>

            <FormLabel htmlFor="email">Email</FormLabel>
            <Box>
              <Input
                resize="none"
                w="250px"
                mb="5"
                placeholder="example.123@email.com"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (e.target.value === "")
                    setValidEmail({
                      msg: "Email is required",
                      error: true,
                    })
                  else
                    setValidEmail({
                      msg: "",
                      error: false,
                    })
                }}
                isInvalid={validateEmail.error}
              />

              {validateEmail.msg && (
                <MotionCode
                  display={{ base: "none", md: "inline-flex" }}
                  ml="20px"
                  colorScheme="red"
                  initial={{ rotateX: 180, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                >
                  ❌ {validateEmail.msg}
                </MotionCode>
              )}
            </Box>

            <FormLabel htmlFor="Message">Message</FormLabel>

            <Box>
              <Textarea
                h="230px"
                placeholder="Text there"
                value={msg}
                onChange={(e) => {
                  setMsg(e.target.value)
                  if (e.target.value === "")
                    setValidMsg({ error: true, msg: "Message is required" })
                  else setValidMsg({ error: false, msg: "" })
                }}
                isInvalid={validateMsg.error}
              />
              {validateMsg.msg && validateMsg.error ? (
                <MotionCode
                  mt="20px"
                  colorScheme="red"
                  initial={{ rotateX: 180, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                >
                  ❌ {validateMsg.msg}
                </MotionCode>
              ) : (
                <Box h="22px" mt="20px" />
              )}
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
