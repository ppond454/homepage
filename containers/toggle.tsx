import { useColorMode, useColorModeValue, Switch  } from "@chakra-ui/react"

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const handler = (e: any) => {
    e.preventDefault()
    toggleColorMode()
  }

  return (
    <Switch
      pt={{ base: "1", md: "2.5" }}
      size="lg"
      onChange={handler}
      colorScheme="teal"
    />
  )
}

export default Toggle
