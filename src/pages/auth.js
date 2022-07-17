import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import allReducer from "../reducers/index.js"
import AuthSection from "../components/sections/auth/AuthSection"
import { configureStore } from "@reduxjs/toolkit"

export default function AuthPage() {
  const store = configureStore({ reducer: allReducer })
  return (
    <Layout>
      <AuthSection />
    </Layout>
  )
}
