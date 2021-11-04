import { extendTheme  } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'


const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const styles = {


  global: props => ({
    body: {
      bg: mode("#fbf2e9","#2d2d2b" )(props),
      color: mode("#565656","#fbf2e9")(props),

    }
  })

}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
      }
    }
  },
}



const Theme = extendTheme({
  config,
  styles,
  fonts: {
    heading: "Raleway",
    body: "Nunito",
  },
  components
})

export default Theme
