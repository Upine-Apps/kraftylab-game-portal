import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import allReducer from "../reducers/index.js"
import { configureStore } from "@reduxjs/toolkit"
import Header from "../components/layout/Header"

function IndexPage() {
  const store = configureStore({ reducer: allReducer })
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <HeroSection />
    </Layout>
  )
}

export default IndexPage
