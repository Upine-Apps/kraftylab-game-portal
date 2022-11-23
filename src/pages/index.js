import React, { useState } from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import HeroSection from "../components/sections/HeroSection";
import Header from "../components/layout/Header";

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
