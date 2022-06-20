import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import HeroSection from "../components/sections/HeroSection";
import AboutUs from "../components/sections/AboutUs";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import ContactUs from "../components/sections/ContactUs";
import allReducer from "../reducers/index.js";
import { configureStore } from "@reduxjs/toolkit";

function IndexPage() {
  const store = configureStore({ reducer: allReducer });
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
    </Layout>
  );
}

export default IndexPage;
