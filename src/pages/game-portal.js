import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import GameSection from "../components/sections/GameSection";
import GameHeader from "../components/layout/GameHeader";

function GamePage() {
  return (
    <Layout>
      <SEO title="game-portal" />
      <GameHeader />
      <GameSection />
    </Layout>
  );
}

export default GamePage;
