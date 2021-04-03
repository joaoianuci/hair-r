import React from "react"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { AppProps } from "next/app"

import GlobalStyle from "../styles/global"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
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
