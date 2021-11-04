import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { AnimatePresence } from 'framer-motion'


import Layout from "../containers/layout/index"
import Theme from "../theme/theme"


import "@fontsource/raleway"
import "@fontsource/nunito"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
  
        <Layout>
          <AnimatePresence exitBeforeEnter initial={true} >
          <Component {...pageProps} />
          </AnimatePresence>
        </Layout>

    </ChakraProvider>
  )
}

export default MyApp
