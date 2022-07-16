import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import allReducer from "../reducers/index.js"
import { configureStore } from "@reduxjs/toolkit"
import Header from "../components/layout/Header"
import GameSection from "../components/sections/GameSection"
import GameHeader from "../components/layout/GameHeader"

function GamePage() {
  const store = configureStore({ reducer: allReducer })
  return (
    <Layout>
      <SEO title="Home" />
      <GameHeader />
      <GameSection />
    </Layout>
  )
}

export default GamePage
