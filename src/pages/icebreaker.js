import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import IcebreakerSection from "../components/sections/icebreaker/IcebreakerSection";
import GameHeader from "../components/layout/GameHeader";

function IcebreakerPage() {
  return (
    <Layout>
      <SEO title="icebreaker" />
      <GameHeader />
      <IcebreakerSection />
    </Layout>
  );
}

export default IcebreakerPage;
