import React from "react";
import "./layout.css";
import { GlobalStyle } from "../styles/GlobalStyle";

if (typeof window !== "undefined") {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
}

export default Layout;
