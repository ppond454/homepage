import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"
import Head from "next/head"
import { useRouter } from "next/router"

import Layout from "../containers/layout/index"
import Theme from "../theme/theme"

import "@fontsource/raleway"
import "@fontsource/nunito"



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ChakraProvider theme={Theme}>
      <Layout>
        <Head>
          <title>Homepage | Pond's</title>
        </Head>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
