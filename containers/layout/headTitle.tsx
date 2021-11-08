import React from "react"
import Head from "next/head"

interface Props {
  children?: React.ReactNode
  title: string
}

const headTitle = ({ title, children }: Props) => {
  return (
    <>
      <Head>{title && <title>{`${title} | Pond's`}</title>}</Head>
      {children}
    </>
  )
}

export default headTitle
