import {
  Heading,
  Box,
  Textarea,
  Center,
  Text,
  Input,
  Flex,
  Container,
  Button,
  FormControl,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Spinner,
} from "@chakra-ui/react"
import { useState } from "react"

import HeadTitle from "../../containers/layout/headTitle"
import Motions from "../../containers/motions/motions"

interface Props {}

export const Index = (props: Props) => {
  const [alert, setAlert] = useState<boolean>(false)

  const handleSubmit = () => {
    setAlert(true)
  }
  const handleClose = () => {
    setAlert(false)
  }

  return (
    <HeadTitle title="Contact">
      <Motions>
        <Heading pt="20" pb="10" textAlign="center">
          Contact
        </Heading>
        <Container w="80%" mb="200" mx="auto">
          {alert && (
            <Alert status="success" margin={10}>
              <AlertIcon />
              <Box flex="1">
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription display="block">
                  Your application has been received. We will review your
                  application and respond within the next 48 hours.
                </AlertDescription>
              </Box>
              <CloseButton
                onClick={handleClose}
                position="absolute"
                right="8px"
                top="8px"
              />
            </Alert>
          )}
          <FormControl>
            <Text mb="2">Name :</Text>
            <Input
              resize="none"
              w="250px"
              placeholder="Siritep Tongdoung"
              mb="5"
              type="name"
            />
            <Text mb="2">Email :</Text>

            <Input
              resize="none"
              w="250px"
              mb="5"
              placeholder="example.123@email.com"
              type="email"
            />
            <Text mb="2">Message :</Text>
            <Textarea h="230px" placeholder="Text there" />
            <Button mt="6" mb="10" onClick={handleSubmit}>
              Send
            </Button>
          </FormControl>
        </Container>
      </Motions>
    </HeadTitle>
  )
}

export default Index
