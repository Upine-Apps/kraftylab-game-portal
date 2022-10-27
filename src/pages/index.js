import React, { useState } from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import HeroSection from "../components/sections/HeroSection";
import allReducer from "../reducers/index.js";
import Header from "../components/layout/Header";
import GameContext from "../providers/gameContext";
import UserContext from "../providers/userContext";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <HeroSection />
    </Layout>
  );
}

export default IndexPage;
