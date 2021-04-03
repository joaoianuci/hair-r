import React, { useEffect } from "react"
import { useRouter } from "next/dist/client/router"
import { ToastContainer } from "react-toastify"
import { AppProps } from "next/app"

import GlobalStyle from "../styles/global"
import "react-toastify/dist/ReactToastify.css"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"

import * as gtag from "../lib/gtag"
const isProduction = process.env.NODE_ENV === "production"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])
  return (
    <ThemeProvider theme={theme}>
      <title>Hair-R</title>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer position="top-center" />
    </ThemeProvider>
  )
}

export default MyApp
