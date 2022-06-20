import React from "react"
import "./layout.css"
import { GlobalStyle } from "../styles/GlobalStyle"
import SnugHeader from "./SnugHeader"

if (typeof window !== "undefined") {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

function SnugLayout({ children }) {
  return (
    <>
      <GlobalStyle />
      <SnugHeader />
      <main>{children}</main>
    </>
  )
}

export default SnugLayout
